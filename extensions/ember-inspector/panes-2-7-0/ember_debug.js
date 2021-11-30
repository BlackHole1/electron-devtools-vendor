(function(adapter, env) {
let define = window.define, requireModule = window.requireModule;
if (typeof define !== 'function' || typeof requireModule !== 'function') {

  (function() {
    let registry = {}, seen = {};

    define = function(name, deps, callback) {
      if (arguments.length < 3) {
        callback = deps;
        deps = [];
      }
      registry[name] = { deps, callback };
    };

    requireModule = function(name) {
      if (seen[name]) { return seen[name]; }
      seen[name] = {};

      let mod = registry[name];

      if (!mod) {
        throw new Error(`Module: '${name}' not found.`);
      }

      let deps = mod.deps;
      let callback = mod.callback;
      let reified = [];
      let exports;

      for (let i = 0, l = deps.length; i < l; i++) {
        if (deps[i] === 'exports') {
          reified.push(exports = {});
        } else {
          reified.push(requireModule(deps[i]));
        }
      }

      let value = callback.apply(this, reified);
      seen[name] = exports || value;
      return seen[name];
    };

    define.registry = registry;
    define.seen = seen;
  })();
}

define('ember-debug/adapters/basic', ['exports', 'ember-debug/utils/on-ready'], function (exports, _onReady) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* globals requireModule */
  /* eslint no-console: 0 */
  const Ember = window.Ember;
  const { A, computed, RSVP, Object: EmberObject } = Ember;
  const { Promise, resolve } = RSVP;
  exports.default = EmberObject.extend({
    init() {
      resolve(this.connect(), 'ember-inspector').then(() => {
        this.onConnectionReady();
      }, null, 'ember-inspector');
    },

    /**
     * Uses the current build's config module to determine
     * the environment.
     *
     * @property environment
     * @type {String}
     */
    environment: computed(function () {
      return requireModule('ember-debug/config')['default'].environment;
    }),

    debug() {
      return console.debug(...arguments);
    },

    log() {
      return console.log(...arguments);
    },

    /**
     * A wrapper for `console.warn`.
     *
     * @method warn
     */
    warn() {
      return console.warn(...arguments);
    },

    /**
      Used to send messages to EmberExtension
       @param {Object} type the message to the send
    */
    sendMessage() /* options */{},

    /**
      Register functions to be called
      when a message from EmberExtension is received
       @param {Function} callback
    */
    onMessageReceived(callback) {
      this.get('_messageCallbacks').pushObject(callback);
    },

    /**
      Inspect a specific element.  This usually
      means using the current environment's tools
      to inspect the element in the DOM.
       For example, in chrome, `inspect(elem)`
      will open the Elements tab in dev tools
      and highlight the element.
       @param {DOM Element} elem
    */
    inspectElement() /* elem */{},

    _messageCallbacks: computed(function () {
      return A();
    }),

    _messageReceived(message) {
      this.get('_messageCallbacks').forEach(callback => {
        callback(message);
      });
    },

    /**
     * Handle an error caused by EmberDebug.
     *
     * This function rethrows in development and test envs,
     * but warns instead in production.
     *
     * The idea is to control errors triggered by the inspector
     * and make sure that users don't get mislead by inspector-caused
     * bugs.
     *
     * @method handleError
     * @param {Error} error
     */
    handleError(error) {
      if (this.get('environment') === 'production') {
        if (error && error instanceof Error) {
          error = `Error message: ${error.message}\nStack trace: ${error.stack}`;
        }
        this.warn(`Ember Inspector has errored.\n` + `This is likely a bug in the inspector itself.\n` + `You can report bugs at https://github.com/emberjs/ember-inspector.\n${error}`);
      } else {
        this.warn('EmberDebug has errored:');
        throw error;
      }
    },

    /**
       A promise that resolves when the connection
      with the inspector is set up and ready.
       @return {Promise}
    */
    connect() {
      return new Promise((resolve, reject) => {
        (0, _onReady.onReady)(() => {
          if (this.isDestroyed) {
            reject();
          }
          this.interval = setInterval(() => {
            if (document.documentElement.dataset.emberExtension) {
              clearInterval(this.interval);
              resolve();
            }
          }, 10);
        });
      }, 'ember-inspector');
    },

    willDestroy() {
      this._super();
      clearInterval(this.interval);
    },

    _isReady: false,
    _pendingMessages: computed(function () {
      return A();
    }),

    send(options) {
      if (this._isReady) {
        this.sendMessage(...arguments);
      } else {
        this.get('_pendingMessages').push(options);
      }
    },

    /**
      Called when the connection is set up.
      Flushes the pending messages.
    */
    onConnectionReady() {
      // Flush pending messages
      const messages = this.get('_pendingMessages');
      messages.forEach(options => this.sendMessage(options));
      messages.clear();
      this._isReady = true;
    }
  });
});
define('ember-debug/adapters/bookmarklet', ['exports', 'ember-debug/adapters/basic'], function (exports, _basic) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _basic.default.extend({
    init() {
      this._super();
      this._listen();
    },

    sendMessage(options) {
      options = options || {};
      window.emberInspector.w.postMessage(options, window.emberInspector.url);
    },

    _listen() {
      window.addEventListener('message', e => {
        if (e.origin !== window.emberInspector.url) {
          return;
        }
        const message = e.data;
        if (message.from === 'devtools') {
          this._messageReceived(message);
        }
      });

      window.onunload = () => {
        this.sendMessage({
          unloading: true
        });
      };
    }
  });
});
define("ember-debug/adapters/chrome", ["exports", "ember-debug/adapters/web-extension"], function (exports, _webExtension) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _webExtension.default.extend();
});
define("ember-debug/adapters/firefox", ["exports", "ember-debug/adapters/web-extension"], function (exports, _webExtension) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _webExtension.default.extend({
    debug() {
      // WORKAROUND: temporarily workaround issues with firebug console object:
      // - https://github.com/tildeio/ember-extension/issues/94
      // - https://github.com/firebug/firebug/pull/109
      // - https://code.google.com/p/fbug/issues/detail?id=7045
      try {
        this._super(...arguments);
      } catch (e) {}
    },
    log() {
      // WORKAROUND: temporarily workaround issues with firebug console object:
      // - https://github.com/tildeio/ember-extension/issues/94
      // - https://github.com/firebug/firebug/pull/109
      // - https://code.google.com/p/fbug/issues/detail?id=7045
      try {
        this._super(...arguments);
      } catch (e) {}
    }
  });
});
define('ember-debug/adapters/web-extension', ['exports', 'ember-debug/adapters/basic'], function (exports, _basic) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const { run, typeOf } = Ember;
  const { isArray } = Array;
  const { keys } = Object;

  exports.default = _basic.default.extend({
    init() {
      this.set('_channel', new MessageChannel());
      this.set('_chromePort', this.get('_channel.port1'));

      this._super(...arguments);
    },

    connect() {
      const channel = this.get('_channel');
      return this._super(...arguments).then(() => {
        window.postMessage('debugger-client', '*', [channel.port2]);
        this._listen();
      }, null, 'ember-inspector');
    },

    sendMessage(options = {}) {
      // If prototype extensions are disabled, `Ember.A()` arrays
      // would not be considered native arrays, so it's not possible to
      // "clone" them through postMessage unless they are converted to a
      // native array.
      options = deepClone(options);
      this.get('_chromePort').postMessage(options);
    },

    /**
     * Open the devtools "Elements" and select an element.
     *
     * NOTE:
     * This method was supposed to call `inspect` which is a Chrome specific function
     * that can either be called from the console or from code evaled using `inspectedWindow.eval`
     * (which is how this code is executed). See https://developer.chrome.com/extensions/devtools#evaluating-js.
     * However for some reason Chrome 52+ has started throwing an Error that `inspect`
     * is not a function when called from this code. The current workaround is to
     * message the Ember Ibspector asking it to execute `inspected.Window.eval('inspect(element)')`
     * for us.
     *
     * @param  {HTMLElement} elem The element to select
     */
    inspectElement(elem) {
      /* inspect(elem); */
      this.get('namespace.port').send('view:inspectDOMElement', {
        elementSelector: `#${elem.getAttribute('id')}`
      });
    },

    _listen() {
      let chromePort = this.get('_chromePort');

      chromePort.addEventListener('message', event => {
        const message = event.data;
        run(() => {
          this._messageReceived(message);
        });
      });

      chromePort.start();
    }
  });


  /**
   * Recursively clones all arrays. Needed because Chrome
   * refuses to clone Ember Arrays when extend prototypes is disabled.
   *
   * If the item passed is an array, a clone of the array is returned.
   * If the item is an object or an array, or array properties/items are cloned.
   *
   * @param {Mixed} item The item to clone
   * @return {Mixed}
   */
  function deepClone(item) {
    let clone = item;
    if (isArray(item)) {
      clone = new Array(item.length);
      item.forEach((child, key) => {
        clone[key] = deepClone(child);
      });
    } else if (item && typeOf(item) === 'object') {
      clone = {};
      keys(item).forEach(key => {
        clone[key] = deepClone(item[key]);
      });
    }
    return clone;
  }
});
define('ember-debug/adapters/websocket', ['exports', 'ember-debug/adapters/basic', 'ember-debug/utils/on-ready'], function (exports, _basic, _onReady) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const Ember = window.Ember;
  const { computed, run, RSVP: { Promise } } = Ember;
  exports.default = _basic.default.extend({

    sendMessage(options = {}) {
      this.get('socket').emit('emberInspectorMessage', options);
    },

    socket: computed(function () {
      return window.EMBER_INSPECTOR_CONFIG.remoteDebugSocket;
    }),

    _listen() {
      this.get('socket').on('emberInspectorMessage', message => {
        run(() => {
          this._messageReceived(message);
        });
      });
    },

    _disconnect() {
      this.get('socket').removeAllListeners("emberInspectorMessage");
    },

    connect() {
      return new Promise((resolve, reject) => {
        (0, _onReady.onReady)(() => {
          if (this.isDestroyed) {
            reject();
          }
          const EMBER_INSPECTOR_CONFIG = window.EMBER_INSPECTOR_CONFIG;
          if (typeof EMBER_INSPECTOR_CONFIG === 'object' && EMBER_INSPECTOR_CONFIG.remoteDebugSocket) {
            resolve();
          }
        });
      }).then(() => {
        this._listen();
      });
    },

    willDestroy() {
      this._disconnect();
    }
  });
});
define('ember-debug/container-debug', ['exports', 'ember-debug/mixins/port-mixin'], function (exports, _portMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const Ember = window.Ember;
  const { Object: EmberObject, computed } = Ember;
  const { readOnly } = computed;

  exports.default = EmberObject.extend(_portMixin.default, {
    namespace: null,

    objectInspector: readOnly('namespace.objectInspector'),

    container: computed('namespace.owner', function () {
      // should update this to use real owner API
      return this.get('namespace.owner.__container__');
    }),

    portNamespace: 'container',

    TYPES_TO_SKIP: computed(function () {
      return ['component-lookup', 'container-debug-adapter', 'resolver-for-debugging', 'event_dispatcher'];
    }),

    typeFromKey(key) {
      return key.split(':').shift();
    },

    nameFromKey(key) {
      return key.split(':').pop();
    },

    shouldHide(type) {
      return type[0] === '-' || this.get('TYPES_TO_SKIP').indexOf(type) !== -1;
    },

    instancesByType() {
      let key;
      let instancesByType = {};
      let cache = this.get('container').cache;
      // Detect if InheritingDict (from Ember < 1.8)
      if (typeof cache.dict !== 'undefined' && typeof cache.eachLocal !== 'undefined') {
        cache = cache.dict;
      }
      for (key in cache) {
        const type = this.typeFromKey(key);
        if (this.shouldHide(type)) {
          continue;
        }
        if (instancesByType[type] === undefined) {
          instancesByType[type] = [];
        }
        instancesByType[type].push({
          fullName: key,
          instance: cache[key]
        });
      }
      return instancesByType;
    },

    getTypes() {
      let key;
      let types = [];
      const instancesByType = this.instancesByType();
      for (key in instancesByType) {
        types.push({ name: key, count: instancesByType[key].length });
      }
      return types;
    },

    getInstances(type) {
      const instances = this.instancesByType()[type];
      if (!instances) {
        return null;
      }
      return instances.map(item => ({
        name: this.nameFromKey(item.fullName),
        fullName: item.fullName,
        inspectable: this.get('objectInspector').canSend(item.instance)
      }));
    },

    messages: {
      getTypes() {
        this.sendMessage('types', {
          types: this.getTypes()
        });
      },
      getInstances(message) {
        let instances = this.getInstances(message.containerType);
        if (instances) {
          this.sendMessage('instances', {
            instances,
            status: 200
          });
        } else {
          this.sendMessage('instances', {
            status: 404
          });
        }
      },
      sendInstanceToConsole(message) {
        const instance = this.get('container').lookup(message.name);
        this.get('objectToConsole').sendValueToConsole(instance);
      }
    }
  });
});
define('ember-debug/data-debug', ['exports', 'ember-debug/mixins/port-mixin'], function (exports, _portMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const { Object: EmberObject, computed, guidFor, A, set } = Ember;
  const { alias } = computed;

  exports.default = EmberObject.extend(_portMixin.default, {
    init() {
      this._super();
      this.sentTypes = {};
      this.sentRecords = {};
    },

    releaseTypesMethod: null,
    releaseRecordsMethod: null,

    /* eslint-disable ember/no-side-effects */
    adapter: computed('namespace.owner', function () {
      const owner = this.get('namespace.owner');

      // dataAdapter:main is deprecated
      let adapter = this._resolve('data-adapter:main') && owner.lookup('data-adapter:main');
      // column limit is now supported at the inspector level
      if (adapter) {
        set(adapter, 'attributeLimit', 100);
        return adapter;
      }
    }),
    /* eslint-enable ember/no-side-effects */

    _resolve(name) {
      const owner = this.get('namespace.owner');

      return owner.resolveRegistration(name);
    },

    namespace: null,

    port: alias('namespace.port'),
    objectInspector: alias('namespace.objectInspector'),

    portNamespace: 'data',

    modelTypesAdded(types) {
      let typesToSend;
      typesToSend = types.map(type => this.wrapType(type));
      this.sendMessage('modelTypesAdded', {
        modelTypes: typesToSend
      });
    },

    modelTypesUpdated(types) {
      let typesToSend = types.map(type => this.wrapType(type));
      this.sendMessage('modelTypesUpdated', {
        modelTypes: typesToSend
      });
    },

    wrapType(type) {
      const objectId = guidFor(type.object);
      this.sentTypes[objectId] = type;

      return {
        columns: type.columns,
        count: type.count,
        name: type.name,
        objectId
      };
    },

    recordsAdded(recordsReceived) {
      let records = recordsReceived.map(record => this.wrapRecord(record));
      this.sendMessage('recordsAdded', { records });
    },

    recordsUpdated(recordsReceived) {
      let records = recordsReceived.map(record => this.wrapRecord(record));
      this.sendMessage('recordsUpdated', { records });
    },

    recordsRemoved(index, count) {
      this.sendMessage('recordsRemoved', { index, count });
    },

    wrapRecord(record) {
      const objectId = guidFor(record.object);
      let columnValues = {};
      let searchKeywords = [];
      this.sentRecords[objectId] = record;
      // make objects clonable
      for (let i in record.columnValues) {
        columnValues[i] = this.get('objectInspector').inspect(record.columnValues[i]);
      }
      // make sure keywords can be searched and clonable
      searchKeywords = A(record.searchKeywords).filter(keyword => typeof keyword === 'string' || typeof keyword === 'number');
      return {
        columnValues,
        searchKeywords,
        filterValues: record.filterValues,
        color: record.color,
        objectId
      };
    },

    releaseTypes() {
      if (this.releaseTypesMethod) {
        this.releaseTypesMethod();
        this.releaseTypesMethod = null;
        this.sentTypes = {};
      }
    },

    releaseRecords() {
      if (this.releaseRecordsMethod) {
        this.releaseRecordsMethod();
        this.releaseRecordsMethod = null;
        this.sentRecords = {};
      }
    },

    willDestroy() {
      this._super();
      this.releaseRecords();
      this.releaseTypes();
    },

    messages: {
      checkAdapter() {
        this.sendMessage('hasAdapter', { hasAdapter: !!this.get('adapter') });
      },

      getModelTypes() {
        this.releaseTypes();
        this.releaseTypesMethod = this.get('adapter').watchModelTypes(types => {
          this.modelTypesAdded(types);
        }, types => {
          this.modelTypesUpdated(types);
        });
      },

      releaseModelTypes() {
        this.releaseTypes();
      },

      getRecords(message) {
        const type = this.sentTypes[message.objectId];
        this.releaseRecords();

        let typeOrName;
        if (this.get('adapter.acceptsModelName')) {
          // Ember >= 1.3
          typeOrName = type.name;
        }

        let releaseMethod = this.get('adapter').watchRecords(typeOrName, recordsReceived => {
          this.recordsAdded(recordsReceived);
        }, recordsUpdated => {
          this.recordsUpdated(recordsUpdated);
        }, (...args) => {
          this.recordsRemoved(...args);
        });
        this.releaseRecordsMethod = releaseMethod;
      },

      releaseRecords() {
        this.releaseRecords();
      },

      inspectModel(message) {
        this.get('objectInspector').sendObject(this.sentRecords[message.objectId].object);
      },

      getFilters() {
        this.sendMessage('filters', {
          filters: this.get('adapter').getFilters()
        });
      }
    }
  });
});
define('ember-debug/deprecation-debug', ['exports', 'ember-debug/mixins/port-mixin', 'ember-debug/libs/source-map'], function (exports, _portMixin, _sourceMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const { Debug, Object: EmberObject, computed, guidFor, run, RSVP, A } = Ember;
  const { resolve, all } = RSVP;
  const { readOnly } = computed;
  const { registerDeprecationHandler } = Debug;

  exports.default = EmberObject.extend(_portMixin.default, {
    portNamespace: 'deprecation',

    adapter: readOnly('port.adapter'),

    sourceMap: computed(function () {
      return _sourceMap.default.create();
    }),

    emberCliConfig: readOnly('namespace.generalDebug.emberCliConfig'),

    init() {
      this._super();

      this.deprecations = A();
      this.deprecationsToSend = A();
      this.groupedDeprecations = {};
      this.options = {
        toggleDeprecationWorkflow: false
      };

      this.handleDeprecations();
    },

    /**
     * Checks if ember-cli and looks for source maps.
     */
    fetchSourceMap(stackStr) {
      if (this.get('emberCliConfig') && this.get('emberCliConfig.environment') === 'development') {
        return this.get('sourceMap').map(stackStr).then(mapped => {
          if (mapped && mapped.length > 0) {
            let source = mapped.find(item => item.source && !!item.source.match(new RegExp(this.get('emberCliConfig.modulePrefix'))));

            if (source) {
              source.found = true;
            } else {
              source = mapped.get('firstObject');
              source.found = false;
            }
            return source;
          }
        }, null, 'ember-inspector');
      } else {
        return resolve(null, 'ember-inspector');
      }
    },

    sendPending() {
      if (this.isDestroyed) {
        return;
      }

      let deprecations = A();

      let promises = all(this.get('deprecationsToSend').map(deprecation => {
        let obj;
        let promise = resolve(undefined, 'ember-inspector');
        let grouped = this.get('groupedDeprecations');
        this.get('deprecations').pushObject(deprecation);
        const id = guidFor(deprecation.message);
        obj = grouped[id];
        if (obj) {
          obj.count++;
          obj.url = obj.url || deprecation.url;
        } else {
          obj = deprecation;
          obj.count = 1;
          obj.id = id;
          obj.sources = A();
          grouped[id] = obj;
        }
        let found = obj.sources.findBy('stackStr', deprecation.stackStr);
        if (!found) {
          let stackStr = deprecation.stackStr;
          promise = this.fetchSourceMap(stackStr).then(map => {
            obj.sources.pushObject({ map, stackStr });
            if (map) {
              obj.hasSourceMap = true;
            }
          }, null, 'ember-inspector');
        }
        return promise.then(() => {
          delete obj.stackStr;
          deprecations.addObject(obj);
        }, null, 'ember-inspector');
      }));

      promises.then(() => {
        this.sendMessage('deprecationsAdded', { deprecations });
        this.get('deprecationsToSend').clear();
        this.sendCount();
      }, null, 'ember-inspector');
    },

    sendCount() {
      if (this.isDestroyed) {
        return;
      }

      this.sendMessage('count', {
        count: this.get('deprecations.length') + this.get('deprecationsToSend.length')
      });
    },

    messages: {
      watch() {
        this._watching = true;
        let grouped = this.get('groupedDeprecations');
        let deprecations = [];
        for (let i in grouped) {
          if (!grouped.hasOwnProperty(i)) {
            continue;
          }
          deprecations.push(grouped[i]);
        }
        this.sendMessage('deprecationsAdded', {
          deprecations
        });
        this.sendPending();
      },

      sendStackTraces(message) {
        let deprecation = message.deprecation;
        deprecation.sources.forEach(source => {
          let stack = source.stackStr;
          stack = stack.split('\n');
          stack.unshift(`Ember Inspector (Deprecation Trace): ${deprecation.message || ''}`);
          this.get('adapter').log(stack.join('\n'));
        });
      },

      getCount() {
        this.sendCount();
      },

      clear() {
        run.cancel(this.debounce);
        this.get('deprecations').clear();
        this.set('groupedDeprecations', {});
        this.sendCount();
      },

      release() {
        this._watching = false;
      },

      setOptions({ options }) {
        this.options.toggleDeprecationWorkflow = options.toggleDeprecationWorkflow;
      }
    },

    willDestroy() {
      run.cancel(this.debounce);
      return this._super(...arguments);
    },

    handleDeprecations() {
      registerDeprecationHandler((message, options, next) => {

        /* global __fail__*/

        let error;

        // When using new Error, we can't do the arguments check for Chrome. Alternatives are welcome
        try {
          __fail__.fail();
        } catch (e) {
          error = e;
        }

        let stack;
        let stackStr = '';
        if (error.stack) {

          // var stack;
          if (error['arguments']) {
            // Chrome
            stack = error.stack.replace(/^\s+at\s+/gm, '').replace(/^([^\(]+?)([\n$])/gm, '{anonymous}($1)$2').replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}($1)').split('\n');
            stack.shift();
          } else {
            // Firefox
            stack = error.stack.replace(/(?:\n@:0)?\s+$/m, '').replace(/^\(/gm, '{anonymous}(').split('\n');
          }

          stackStr = `\n    ${stack.slice(2).join('\n    ')}`;
        }

        let url;
        if (options && typeof options === 'object') {
          url = options.url;
        }

        const deprecation = { message, stackStr, url };

        // For ember-debug testing we usually don't want
        // to catch deprecations
        if (!this.get('namespace').IGNORE_DEPRECATIONS) {
          this.get('deprecationsToSend').pushObject(deprecation);
          run.cancel(this.debounce);
          if (this._watching) {
            this.debounce = run.debounce(this, 'sendPending', 100);
          } else {
            this.debounce = run.debounce(this, 'sendCount', 100);
          }
          if (!this._warned) {
            this.get('adapter').warn('Deprecations were detected, see the Ember Inspector deprecations tab for more details.');
            this._warned = true;
          }
        }

        if (this.options.toggleDeprecationWorkflow) {
          next(message, options);
        }
      });
    }

  });
});
define('ember-debug/general-debug', ['exports', 'ember-debug/mixins/port-mixin'], function (exports, _portMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const Ember = window.Ember; /* eslint no-empty:0 */

  const { Object: EmberObject } = Ember;
  let { libraries } = Ember;

  /**
   * Class that handles gathering general information of the inspected app.
   * ex:
   *  - Determines if the app was booted
   *  - Gathers the libraries. Found in the info tab of the inspector.
   *  - Gathers ember-cli configuration information from the meta tags.
   *
   * @module ember-debug/general-debug
   */
  exports.default = EmberObject.extend(_portMixin.default, {
    /**
     * Fetches the ember-cli configuration info and sets them on
     * the `emberCliConfig` property.
     */
    init() {
      this._super(...arguments);
      let found = findMetaTag('name', /environment$/);
      if (found) {
        try {
          let config = JSON.parse(unescape(found.getAttribute('content')));
          this.set('emberCliConfig', config);
        } catch (e) {}
      }
    },

    /**
     * Passed on creation.
     *
     * @type {EmberDebug}
     */
    namespace: null,

    /**
     * Used by the PortMixin
     *
     * @type {String}
     */
    portNamespace: 'general',

    /**
     * Set on creation.
     * Contains ember-cli configuration info.
     *
     * Info used to determine the file paths of an ember-cli app.
     *
     * @return {Object}
     *  {String} environment ex: 'development'
     *  {String} modulePrefix ex: 'my-app'
     *  {String} podModulePrefix ex: 'my-app/pods'
     *  {Boolean} usePodsByDefault
     */
    emberCliConfig: null,

    /**
     * Sends a reply back indicating if the app has been booted.
     *
     * `__inspector__booted` is a property set on the application instance
     * when the ember-debug is inserted into the target app.
     * see: startup-wrapper.
     */
    sendBooted() {
      this.sendMessage('applicationBooted', {
        booted: this.get('namespace.owner.__inspector__booted')
      });
    },

    /**
     * Sends a reply back indicating that ember-debug has been reset.
     * We need to reset ember-debug to remove state between tests.
     */
    sendReset() {
      this.sendMessage('reset');
    },

    messages: {
      /**
       * Called from the inspector to check if the inspected app has been booted.
       */
      applicationBooted() {
        this.sendBooted();
      },

      /**
       * Called from the inspector to fetch the libraries that are displayed in
       * the info tab.
       */
      getLibraries() {
        this.sendMessage('libraries', { libraries: libraries._registry });
      },

      /**
       * Called from the inspector to refresh the inspected app.
       * Used in case the inspector was opened late and therefore missed capturing
       * all info.
       */
      refresh() {
        window.location.reload();
      }
    }
  });


  /**
   * Finds a meta tag by searching through a certain meta attribute.
   *
   * @param  {String} attribute
   * @param  {RegExp} regExp
   * @return {Element}
   */
  function findMetaTag(attribute, regExp = /.*/) {
    let metas = document.querySelectorAll(`meta[${attribute}]`);
    for (let i = 0; i < metas.length; i++) {
      let match = metas[i].getAttribute(attribute).match(regExp);
      if (match) {
        return metas[i];
      }
    }
    return null;
  }
});
define('ember-debug/libs/glimmer-tree', ['exports', 'ember-debug/utils/name-functions'], function (exports, _nameFunctions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * This class contains functionality related to for Ember versions
   * using Glimmer 2 (Ember >= 2.9):
   *
   * It has the following main responsibilities:
   *
   * - Building the view tree.
   * - Highlighting components/outlets when the view tree is hovered.
   * - Highlighting components/outlets when the views themselves are hovered.
   * - Finding the model of a specific outlet/component.
   *
   * The view tree is a hierarchy of nodes (optionally) containing the following info:
   * - name
   * - template
   * - id
   * - view class
   * - duration
   * - tag name
   * - model
   * - controller
   * - type
   *
   * Once the view tree is generated it can be sent to the Ember Inspector to be displayed.
   *
   * @class GlimmerTree
   */
  const Ember = window.Ember;


  const { Object: EmberObject, typeOf, isNone, Controller, ViewUtils, get, A } = Ember;
  const { getRootViews, getChildViews, getViewBoundingClientRect } = ViewUtils;

  exports.default = class {
    /**
     * Sets up the initial options.
     *
     * @method constructor
     * @param {Object} options
     *  - {owner}      owner           The Ember app's owner.
     *  - {Function}   retainObject    Called to retain an object for future inspection.
     *  - {Object}     options         Options whether to show components or not.
     *  - {Object}     durations       Hash containing time to render per view id.
     *  - {Function}   highlightRange  Called to highlight a range of elements.
     *  - {Object}     ObjectInspector Used to inspect models.
     *  - {Object}     viewRegistry    Hash containing all currently rendered components by id.
     */
    constructor({
      owner,
      retainObject,
      options,
      durations,
      highlightRange,
      objectInspector,
      viewRegistry
    }) {
      this.owner = owner;
      this.retainObject = retainObject;
      this.options = options;
      this.durations = durations;
      this.highlightRange = highlightRange;
      this.objectInspector = objectInspector;
      this.viewRegistry = viewRegistry;
    }

    /**
     * @method updateOptions
     * @param {Object} options
     */
    updateOptions(options) {
      this.options = options;
    }

    /**
     * @method updateDurations
     * @param {Object} durations
     */
    updateDurations(durations) {
      this.duations = durations;
    }

    /**
     * Builds the view tree. The view tree may or may not contain
     * components depending on the current options.
     *
     * The view tree has the top level outlet as the root of the tree.
     * The format is:
     * {
     *   value: |hash of properties|,
     *   children: [
     *   {
     *     value: |hash of properties|,
     *     children: []
     *   },
     *   {
     *     value: |hash of properties|,
     *     children: [...]
     *   }]
     * }
     *
     * We are building the tree is by doing the following steps:
     * - Build the outlet tree by walking the outlet state.
     * - Build several component trees, each tree belonging to one controller.
     * - Assign each controller-specific component tree as a child of the outlet corresponding
     * to that specific controller.
     *
     * @method build
     * @return {Object}  The view tree
     */
    build() {
      if (this.getRoot()) {
        let outletTree = this.buildOutletTree();
        let componentTrees = this.options.components ? this.buildComponentTrees(outletTree) : [];
        return this.addComponentsToOutlets(outletTree, componentTrees);
      }
    }

    /**
     * Starts with the root and walks the tree till
     * the leaf outlets. The format is:
     * {
     *   value: |inspected outlet|,
     *   children:
     *   [
     *    {
     *      value: |inspected outlet|,
     *      children: [...]
     *    }
     *   ]
     * }
     *
     * @method buildOutletTree
     * @return {Object}  Tree of inspected outlets
     */
    buildOutletTree() {
      let outletTree = this.makeOutletTree(this.getApplicationOutlet());

      // set root element's id
      let rootElement = this.elementForRoot();
      if (rootElement instanceof HTMLElement) {
        outletTree.value.elementId = rootElement.getAttribute('id');
      }
      outletTree.value.tagName = 'div';

      return outletTree;
    }

    /**
     * The recursive part of building the outlet tree.
     *
     * Return format:
     * {
     *   value: |inspected outlet|
     *   controller: |controller instance|
     *   children: [...]
     * }
     *
     * @method makeOutletTree
     * @param  {Object} outletState
     * @return {Object}             The inspected outlet tree
     */
    makeOutletTree(outletState) {
      let { render: { controller }, outlets } = outletState;
      let node = { value: this.inspectOutlet(outletState), controller, children: [] };
      for (let key in outlets) {
        // disconnectOutlet() resets the controller value as undefined (https://github.com/emberjs/ember.js/blob/v2.6.2/packages/ember-routing/lib/system/route.js#L2048).
        // So skip building the tree, if the outletState doesn't have a controller.
        if (this.controllerForOutlet(outlets[key])) {
          node.children.push(this.makeOutletTree(outlets[key]));
        }
      }
      return node;
    }

    /**
     * Builds the component trees. Each tree corresponds to one controller.
     * A component's controller is determined by its target (or ancestor's target).
     *
     * Has the following format:
     * {
     *   controller: |The controller instance|,
     *   components: [|component tree|]
     * }
     *
     * @method buildComponentTrees
     * @param  {Object} outletTree
     * @return {Array}  The component tree
     */
    buildComponentTrees(outletTree) {
      let controllers = this.controllersFromOutletTree(outletTree);

      return controllers.map(controller => {
        let components = this.componentsForController(this.topComponents(), controller);
        return { controller, components };
      });
    }

    /**
     * Builds a tree of components that have a specific controller
     * as their target. If a component does not match the given
     * controller, we ignore it and move on to its children.
     *
     * Format:
     * [
     *   {
     *     value: |inspected component|,
     *     children: [...]
     *   },
     *   {
     *     value: |inspected component|
     *     children: [{
     *       value: |inspected component|
     *       children: [...]
     *     }]
     *   }
     * ]
     *
     * @method componentsForController
     * @param  {Array} components Subtree of components
     * @param  {Controller} controller
     * @return {Array}  Array of inspected components
     */
    componentsForController(components, controller) {
      let arr = [];
      components.forEach(component => {
        let currentController = this.controllerForComponent(component);
        if (!currentController) {
          return;
        }

        let children = this.componentsForController(this.childComponents(component), controller);
        if (currentController === controller) {
          arr.push({ value: this.inspectComponent(component), children });
        } else {
          arr = arr.concat(children);
        }
      });
      return arr;
    }

    /**
     * Given a component, return its children.
     *
     * @method childComponents
     * @param  {Component} component The parent component
     * @return {Array}  Array of components (children)
     */
    childComponents(component) {
      return getChildViews(component);
    }

    /**
     * Get the top level components.
     *
     * @method topComponents
     * @return {Array}  Array of components
     */
    topComponents() {
      return getRootViews(this.owner);
    }

    /**
     * Assign each component tree to it matching outlet
     * by comparing controllers.
     *
     * Return format:
     * {
     *   value: |inspected root outlet|
     *   children: [
     *     {
     *       value: |inspected outlet or component|
     *       chidren: [...]
     *     },
     *     {
     *       value: |inspected outlet or component|
     *       chidren: [...]
     *     }
     *   ]
     * }
     *
     * @method addComponentsToOutlets
     * @param {Object} outletTree
     * @param {Object} componentTrees
     */
    addComponentsToOutlets(outletTree, componentTrees) {
      let { value, controller, children } = outletTree;
      children = children.map(child => this.addComponentsToOutlets(child, componentTrees));
      let { components } = A(componentTrees).findBy('controller', controller) || { components: [] };
      return { value, children: children.concat(components) };
    }

    /**
     * @method controllersFromOutletTree
     *
     * @param  {Controller} inspectedOutlet
     * @return {Array} List of controllers
     */
    controllersFromOutletTree({ controller, children }) {
      return [controller].concat(...children.map(this.controllersFromOutletTree.bind(this)));
    }

    /**
     * @method getRouter
     * @return {Router}
     */
    getRouter() {
      return this.owner.lookup('router:main');
    }

    /**
     * Returns the current top level view.
     *
     * @method getRoot
     * @return {OutletView}
     */
    getRoot() {
      return this.getRouter().get('_toplevelView');
    }

    /**
     * Returns the application (top) outlet.
     *
     * @return {Object} The application outlet state
     */
    getApplicationOutlet() {
      // Support multiple paths to outletState for various Ember versions
      const outletState = this.getRoot().outletState || this.getRoot().state.ref.outletState;
      return outletState.outlets.main;
    }

    /**
     * The root's DOM element. The root is the only outlet view
     * with a DOM element.
     *
     * @method elementForRoot
     * @return {Element}
     */
    elementForRoot() {
      let renderer = this.owner.lookup('renderer:-dom');
      return renderer._roots && renderer._roots[0] && renderer._roots[0].result && renderer._roots[0].result.firstNode();
    }

    /**
     * Returns a component's template name.
     *
     * @method templateForComponent
     * @param  {Component} component
     * @return {String}              The template name
     */
    templateForComponent(component) {
      let template = component.get('layoutName');

      if (!template) {
        let layout = component.get('layout');
        if (!layout) {
          let componentName = component.get('_debugContainerKey');
          if (componentName) {
            let layoutName = componentName.replace(/component:/, 'template:components/');
            layout = this.owner.lookup(layoutName);
          }
        }
        template = this.nameFromLayout(layout);
      }
      return template;
    }

    /**
     * Inspects and outlet state. Extracts the name, controller, template,
     * and model.
     *
     * @method inspectOutlet
     * @param  {Object} outlet The outlet state
     * @return {Object}        The inspected outlet
     */
    inspectOutlet(outlet) {
      let name = this.nameForOutlet(outlet);
      let template = this.templateForOutlet(outlet);
      let controller = this.controllerForOutlet(outlet);
      let value = {
        controller: this.inspectController(controller),
        template,
        name,
        isComponent: false,
        // Outlets (except root) don't have elements
        tagName: ''
      };

      let model = controller.get('model');
      if (model) {
        value.model = this.inspectModel(model);
      }
      return value;
    }

    /**
     * Represents the controller as a short and long name + guid.
     *
     * @method inspectController
     * @param  {Controller} controller
     * @return {Object}               The inspected controller.
     */
    inspectController(controller) {
      return {
        name: (0, _nameFunctions.shortControllerName)(controller),
        completeName: (0, _nameFunctions.shortControllerName)(controller),
        objectId: this.retainObject(controller)
      };
    }

    /**
     * Represent a component as a hash containing a template,
     * name, objectId, class, render duration, tag, model.
     *
     * @method inspectComponent
     * @param  {Component} component
     * @return {Object}             The inspected component
     */
    inspectComponent(component) {
      let viewClass = (0, _nameFunctions.shortViewName)(component);
      let completeViewClass = viewClass;
      let tagName = component.get('tagName');
      let objectId = this.retainObject(component);
      let duration = this.durations[objectId];

      let name = (0, _nameFunctions.shortViewName)(component);
      let template = this.templateForComponent(component);

      let value = {
        template,
        name,
        objectId,
        viewClass,
        duration,
        completeViewClass,
        isComponent: true,
        tagName: isNone(tagName) ? 'div' : tagName
      };

      let model = this.modelForComponent(component);
      if (model) {
        value.model = this.inspectModel(model);
      }

      return value;
    }

    /**
     * Simply returns the component's model if it
     * has one.
     *
     * @method modelForComponent
     * @param  {Component} component
     * @return {Any}            The model property
     */
    modelForComponent(component) {
      return component.get('model');
    }

    /**
     * Represent a model as a short name, long name,
     * guid, and type.
     *
     * @method inspectModel
     * @param  {Any} model
     * @return {Object}       The inspected model.
     */
    inspectModel(model) {
      if (EmberObject.detectInstance(model) || typeOf(model) === 'array') {
        return {
          name: (0, _nameFunctions.shortModelName)(model),
          completeName: (0, _nameFunctions.modelName)(model),
          objectId: this.retainObject(model),
          type: 'type-ember-object'
        };
      }
      return {
        name: this.objectInspector.inspect(model),
        type: `type-${typeOf(model)}`
      };
    }

    /**
     * Uses the module name that was set during compilation.
     *
     * @method nameFromLayout
     * @param  {Layout} layout
     * @return {String}        The layout's name
     */
    nameFromLayout(layout) {
      let moduleName = layout && get(layout, 'meta.moduleName');
      if (moduleName) {
        return moduleName.replace(/\.hbs$/, '');
      }
    }

    /**
     * Taekes an outlet state and extracts the controller from it.
     *
     * @method controllerForOutlet
     * @param  {Controller} outletState
     * @return {Controller}
     */
    controllerForOutlet(outletState) {
      return outletState.render.controller;
    }

    /**
     * The outlet's name.
     *
     * @method nameForOutlet
     * @param  {Object} outletState
     * @return {String}
     */
    nameForOutlet(outletState) {
      return outletState.render.name;
    }

    /**
     * The outlet's template name. Uses the module name attached during compilation.
     *
     * @method templateForOutlet
     * @param  {Object} outletState
     * @return {String}             The template name
     */
    templateForOutlet(outletState) {
      let template = outletState.render.template;
      return this.nameFromLayout(template);
    }

    /**
     * Returns a component's controller. The controller is either the component's
     * target object, or the target object of one of its ancestors. That is why
     * the method is recursive.
     *
     * @method controllerForComponent
     * @param  {Component} component
     * @return {Controller}           The target controller.
     */
    controllerForComponent(component) {
      let controller = component.get('_target') || component.get('_targetObject');
      if (!controller) {
        return null;
      }

      if (controller instanceof Controller) {
        return controller;
      } else {
        return this.controllerForComponent(controller);
      }
    }

    /**
     * Renders a rectangle around a component's element. This happens
     * when the user either hovers over the view tree components
     * or clicks on the "inspect" magnifying glass and starts
     * hovering over the components themselves.
     *
     * Pass `isPreview` if you want the highlight to be hidden
     * when the mouse leaves the component. Set `isPreview` to false
     * to render a [permanent] rectangle until the (x) button is clicked.
     *
     *
     * @method highlightComponent
     * @param  {Element}  element   The element to highlight
     * @param  {Boolean} isPreview Whether it's a preview or not
     */
    highlightComponent(component, isPreview = false) {
      let rect = getViewBoundingClientRect(component);

      let options = {
        isPreview,
        view: {
          name: (0, _nameFunctions.shortViewName)(component),
          object: component
        }
      };

      let templateName = this.templateForComponent(component);
      if (templateName) {
        options.template = {
          name: templateName
        };
      }
      this.highlightRange(rect, options);
    }

    /**
     * Renders a rectangle around the top level outlet's element. This happens
     * when the user either hovers over the view tree root outlets
     * or clicks on the "inspect" magnifying glass and starts
     * hovering over the application template.
     *
     * Pass `isPreview` if you want the highlight to be hidden
     * when the mouse leaves the root. Set `isPreview` to false
     * to render a [permanent] rectangle until the (x) button is clicked.
     *
     * @method highlightRoot
     * @param  {Boolean} isPreview
     */
    highlightRoot(isPreview = false) {
      let applicationOutlet = this.getApplicationOutlet();
      let element = this.elementForRoot();

      if (!element) {
        return;
      }

      let options = {
        isPreview,
        element,
        template: {
          name: this.templateForOutlet(applicationOutlet)
        }
      };

      let controller = this.controllerForOutlet(applicationOutlet);
      if (controller) {
        options.controller = {
          name: (0, _nameFunctions.shortControllerName)(controller),
          object: controller
        };

        let model = controller.get('model');
        if (model) {
          let modelName = this.objectInspector.inspect(model);
          options.model = {
            name: modelName,
            object: model
          };
        }
      }
      let rect = this.getBoundingClientRect(element);
      this.highlightRange(rect, options);
    }

    /**
     * Same as `ViewUtils.getBoundingClientRect` except this applies to
     * HTML elements instead of components.
     *
     * @method getBoundingClientRect
     * @param  {Element} element
     * @return {DOMRect
     */
    getBoundingClientRect(element) {
      let range = document.createRange();
      range.setStartBefore(element);
      range.setEndAfter(element);

      return range.getBoundingClientRect();
    }

    /**
     * Highlight an element only if it is a root.
     *
     * @method highlightIfRoot
     * @param  {String} elementId
     * @param isPreview
     */
    highlightIfRoot(elementId, isPreview = false) {
      let element = document.getElementById(elementId);
      if (this.isRootElement(element)) {
        this.highlightRoot(isPreview);
      }
    }

    /**
     * Call this method when you have the id of an element you want
     * to highlight but are unsure if that element represents a component
     * or the root outlet.
     *
     * @method highlightLayer
     * @param  {String}  elementId         The element to highlight's id
     * @param  {Boolean} [isPreview=false] Preview/Fixed
     */
    highlightLayer(elementId, isPreview = false) {
      let component = this.componentById(elementId);
      if (component) {
        this.highlightComponent(component, isPreview);
      } else {
        this.highlightIfRoot(elementId, isPreview);
      }
    }

    /**
     * Test if an element is the root outlet element.
     *
     * @method isRootElement
     * @param  {Element}  element
     * @return {Boolean}
     */
    isRootElement(element) {
      return this.elementForRoot() === element;
    }

    /**
     * Turn the outlet tree into an array. Useful when searching for a specific
     * outlet.
     *
     * Return format:
     * [
     *   {
     *     value: |inspected root outlet|,
     *     controller: |application controller instance|
     *   },
     *   {
     *     value: |inspected outlet|,
     *     contorller: |controller instance|
     *   }
    *   ]
     *
     * @method outletArray
     * @param  {Object} outletTree
     * @return {Array}            The array of inspected outlets
     */
    outletArray(outletTree) {
      if (!outletTree) {
        outletTree = this.buildOutletTree(this.getRoot().outletState);
      }
      let { value, controller, children } = outletTree;
      return [{ value, controller }].concat(...children.map(this.outletArray.bind(this)));
    }

    /**
     * Returns a component when provided by its guid.
     *
     * @method componentById
     * @param  {String} id  The component's guid.
     * @return {Component}  The component.
     */
    componentById(id) {
      return this.viewRegistry[id];
    }

    /**
     * @method modelForViewNodeValue
     * @param  {Boolean} isComponent
     * @param  {Object}  inspectedNodeValue
     * @return {Any}     The inspected node's model (if it has one)
     */
    modelForViewNodeValue({ isComponent, objectId, name }) {
      if (isComponent) {
        return this.modelForComponent(this.componentById(objectId));
      } else {
        let { controller } = A(this.outletArray()).findBy('value.name', name);
        return controller.get('model');
      }
    }
  };
});
define('ember-debug/libs/promise-assembler', ['exports', 'ember-debug/models/promise'], function (exports, _promise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember; /**
                               Original implementation and the idea behind the `PromiseAssembler`,
                               `Promise` model, and other work related to promise inspection was done
                               by Stefan Penner (@stefanpenner) thanks to McGraw Hill Education (@mhelabs)
                               and Yapp Labs (@yapplabs).
                               */

  const { Object: EmberObject, Evented, A, computed, RSVP, isNone } = Ember;

  let PromiseAssembler = EmberObject.extend(Evented, {
    // RSVP lib to debug
    RSVP,

    isStarted: false,

    all: computed(function () {
      return A();
    }),

    promiseIndex: computed(function () {
      return {};
    }),

    // injected on creation
    promiseDebug: null,

    start() {
      this.RSVP.configure('instrument', true);

      this.promiseChained = e => {
        chain.call(this, e);
      };
      this.promiseRejected = e => {
        reject.call(this, e);
      };
      this.promiseFulfilled = e => {
        fulfill.call(this, e);
      };
      this.promiseCreated = e => {
        create.bind(this)(e);
      };

      this.RSVP.on('chained', this.promiseChained);
      this.RSVP.on('rejected', this.promiseRejected);
      this.RSVP.on('fulfilled', this.promiseFulfilled);
      this.RSVP.on('created', this.promiseCreated);

      this.isStarted = true;
    },

    stop() {
      if (this.isStarted) {
        this.RSVP.configure('instrument', false);
        this.RSVP.off('chained', this.promiseChained);
        this.RSVP.off('rejected', this.promiseRejected);
        this.RSVP.off('fulfilled', this.promiseFulfilled);
        this.RSVP.off('created', this.promiseCreated);

        this.get('all').forEach(item => {
          item.destroy();
        });
        this.set('all', A());
        this.set('promiseIndex', {});

        this.promiseChained = null;
        this.promiseRejected = null;
        this.promiseFulfilled = null;
        this.promiseCreated = null;
        this.isStarted = false;
      }
    },

    willDestroy() {
      this.stop();
      this._super();
    },

    createPromise(props) {
      let promise = _promise.default.create(props);
      let index = this.get('all.length');

      this.get('all').pushObject(promise);
      this.get('promiseIndex')[promise.get('guid')] = index;
      return promise;
    },

    find(guid) {
      if (guid) {
        const index = this.get('promiseIndex')[guid];
        if (index !== undefined) {
          return this.get('all').objectAt(index);
        }
      } else {
        return this.get('all');
      }
    },

    findOrCreate(guid) {
      return this.find(guid) || this.createPromise({ guid });
    },

    updateOrCreate(guid, properties) {
      let entry = this.find(guid);
      if (entry) {
        entry.setProperties(properties);
      } else {
        properties = Object.assign({}, properties);
        properties.guid = guid;
        entry = this.createPromise(properties);
      }

      return entry;
    }
  });

  exports.default = PromiseAssembler;


  function fulfill(event) {
    const guid = event.guid;
    const promise = this.updateOrCreate(guid, {
      label: event.label,
      settledAt: event.timeStamp,
      state: 'fulfilled',
      value: event.detail
    });
    this.trigger('fulfilled', { promise });
  }

  function reject(event) {
    const guid = event.guid;
    const promise = this.updateOrCreate(guid, {
      label: event.label,
      settledAt: event.timeStamp,
      state: 'rejected',
      reason: event.detail
    });
    this.trigger('rejected', { promise });
  }

  function chain(event) {
    let guid = event.guid;
    let promise = this.updateOrCreate(guid, {
      label: event.label,
      chainedAt: event.timeStamp
    });
    let children = promise.get('children');
    let child = this.findOrCreate(event.childGuid);

    child.set('parent', promise);
    children.pushObject(child);

    this.trigger('chained', { promise, child });
  }

  function create(event) {
    const guid = event.guid;

    const promise = this.updateOrCreate(guid, {
      label: event.label,
      createdAt: event.timeStamp,
      stack: event.stack
    });

    // todo fix ordering
    if (isNone(promise.get('state'))) {
      promise.set('state', 'created');
    }
    this.trigger('created', { promise });
  }
});
define('ember-debug/libs/source-map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Used to map a stack trace to its original sources.
   * A lot of the code is inspired by/taken from
   * https://github.com/evanw/node-source-map-support
   */
  const Ember = window.Ember;
  const { Object: EmberObject, A, computed, RSVP: { resolve, Promise } } = Ember;

  const notFoundError = new Error('Source map url not found');

  exports.default = EmberObject.extend({

    _lastPromise: computed(function () {
      return resolve(undefined, 'ember-inspector');
    }),

    /**
     * Returns a promise that resolves to an array
     * of mapped sourcew.
     *
     * @param  {String} stack The stack trace
     * @return {RSVP.Promise}
     */
    map(stack) {
      let parsed = A(fromStackProperty(stack));
      let array = A();
      let lastPromise = null;
      parsed.forEach(item => {
        lastPromise = this.get('_lastPromise').then(() => this.getSourceMap(item.url), null, 'ember-inspector').then(smc => {
          if (smc) {
            let source = smc.originalPositionFor({
              line: item.line,
              column: item.column
            });
            source.fullSource = relativeToAbsolute(item.url, source.source);
            array.push(source);
            return array;
          }
        }, null, 'ember-inspector');
        this.set('_lastPromise', lastPromise);
      });
      return resolve(lastPromise, 'ember-inspector').catch(function (e) {
        if (e === notFoundError) {
          return null;
        }
        throw e;
      }, 'ember-inspector');
    },

    sourceMapCache: computed(function () {
      return {};
    }),

    getSourceMap(url) {
      let sourceMaps = this.get('sourceMapCache');
      if (sourceMaps[url] !== undefined) {
        return resolve(sourceMaps[url], 'ember-inspector');
      }
      return retrieveSourceMap(url).then(response => {
        if (response) {
          const map = JSON.parse(response.map);
          const sm = new window.sourceMap.SourceMapConsumer(map);
          sourceMaps[url] = sm;
          return sm;
        }
      }, function () {
        sourceMaps[url] = null;
      }, 'ember-inspector');
    }
  });


  function retrieveSourceMap(source) {
    let mapURL;
    return retrieveSourceMapURL(source).then(sourceMappingURL => {
      if (!sourceMappingURL) {
        throw notFoundError;
      }

      // Support source map URLs relative to the source URL
      mapURL = relativeToAbsolute(source, sourceMappingURL);
      return mapURL;
    }, null, 'ember-inspector').then(retrieveFile, null, 'ember-inspector').then(sourceMapData => {
      if (!sourceMapData) {
        return null;
      }
      return {
        url: mapURL,
        map: sourceMapData
      };
    }, null, 'ember-inspector');
  }

  function relativeToAbsolute(file, url) {
    // Regex from https://stackoverflow.com/a/19709846
    // This will match the most common prefixes we care about: "http://", "https://", "//"
    let absoluteUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

    // If we don't have a file URL or the sourcemap URL is absolute, then return the sourcemap URL.
    if (!file || absoluteUrlRegex.test(url)) {
      return url;
    }

    // Otherwise, find the sourcemap URL relative to the original file.
    let dir = file.split('/');
    dir.pop();
    dir.push(url);
    return dir.join('/');
  }

  function retrieveFile(source) {
    return new Promise(function (resolve) {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(this.responseText, 'ember-inspector');
      };
      xhr.open('GET', source, true);
      xhr.send();
    }, 'ember-inspector');
  }

  function retrieveSourceMapURL(source) {
    return retrieveFile(source).then(function (fileData) {
      let match = /\/\/[#@]\s*sourceMappingURL=(.*)\s*$/g.exec(fileData);
      if (!match) {
        return null;
      }
      let url = match[1];
      // check not data URL
      if (url.match(/^data/)) {
        return null;
      }
      return url;
    }, null, 'ember-inspector');
  }

  const UNKNOWN_FUNCTION = "<unknown>";

  // Taken from https://github.com/errorception/browser-stack-parser/
  function fromStackProperty(stackString) {
    let chrome = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    let gecko = /^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i;
    let lines = stackString.split('\n');
    let stack = [];
    let parts;

    for (let i = 0, j = lines.length; i < j; ++i) {
      if (parts = gecko.exec(lines[i])) {
        stack.push({
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : '',
          line: +parts[4],
          column: parts[5] ? +parts[5] : null
        });
      } else if (parts = chrome.exec(lines[i])) {
        stack.push({
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          line: +parts[3],
          column: parts[4] ? +parts[4] : null
        });
      }
    }

    return stack.length ? stack : null;
  }
});
define('ember-debug/main', ['exports', 'ember-debug/adapters/basic', 'ember-debug/port', 'ember-debug/object-inspector', 'ember-debug/general-debug', 'ember-debug/render-debug', 'ember-debug/view-debug', 'ember-debug/route-debug', 'ember-debug/data-debug', 'ember-debug/promise-debug', 'ember-debug/container-debug', 'ember-debug/deprecation-debug', 'ember-debug/services/session'], function (exports, _basic, _port, _objectInspector, _generalDebug, _renderDebug, _viewDebug, _routeDebug, _dataDebug, _promiseDebug, _containerDebug, _deprecationDebug, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const { Object: EmberObject, run, Application, Namespace, guidFor, computed } = Ember;

  const EmberDebug = EmberObject.extend({
    /**
     * Set to true during testing.
     *
     * @type {Boolean}
     * @default false
     */
    isTesting: false,

    /**
     * @private
     * @property _application
     * @type {Application}
     */
    _application: null,

    owner: null,
    started: false,

    applicationName: computed.or('_application.name', '_application.modulePrefix').readOnly(),

    /**
     * We use the application's id instead of the owner's id so that we use the same inspector
     * instance for the same application even if it was reset (owner changes on reset).
     *
     * @property applicationId
     * @type {String}
     */
    applicationId: computed('_application', 'isTesting', 'owner', function () {
      if (!this.get('isTesting')) {
        return guidFor(this.get('_application'));
      }
      return guidFor(this.get('owner'));
    }),

    // Using object shorthand syntax here is somehow having strange side effects.
    // eslint-disable-next-line object-shorthand
    Port: _port.default,
    Adapter: _basic.default,

    start($keepAdapter) {
      if (this.get('started')) {
        this.reset($keepAdapter);
        return;
      }
      if (!this.get('_application') && !this.get('isTesting')) {
        this.set('_application', getApplication());
      }
      this.set('started', true);

      this.reset();

      this.get('adapter').debug('Ember Inspector Active');
      this.get('adapter').sendMessage({
        type: 'inspectorLoaded'
      });
    },

    destroyContainer() {
      if (this.get('generalDebug')) {
        this.get('generalDebug').sendReset();
      }
      ['dataDebug', 'viewDebug', 'routeDebug', 'generalDebug', 'renderDebug', 'promiseDebug', 'containerDebug', 'deprecationDebug', 'objectInspector', 'session'].forEach(prop => {
        let handler = this.get(prop);
        if (handler) {
          run(handler, 'destroy');
          this.set(prop, null);
        }
      });
    },

    startModule(prop, Module) {
      this.set(prop, Module.create({ namespace: this }));
    },

    willDestroy() {
      this.destroyContainer();
      this._super(...arguments);
    },

    reset($keepAdapter) {
      if (!this.get('isTesting') && !this.get('owner')) {
        this.set('owner', getOwner(this.get('_application')));
      }
      this.destroyContainer();
      run(() => {
        // Adapters don't have state depending on the application itself.
        // They also maintain connections with the inspector which we will
        // lose if we destroy.
        if (!this.get('adapter') || !$keepAdapter) {
          this.startModule('adapter', this.Adapter);
        }
        if (!this.get('port') || !$keepAdapter) {
          this.startModule('port', this.Port);
        }

        this.startModule('session', _session.default);
        this.startModule('generalDebug', _generalDebug.default);
        this.startModule('renderDebug', _renderDebug.default);
        this.startModule('objectInspector', _objectInspector.default);
        this.startModule('routeDebug', _routeDebug.default);
        this.startModule('viewDebug', _viewDebug.default);
        this.startModule('dataDebug', _dataDebug.default);
        this.startModule('promiseDebug', _promiseDebug.default);
        this.startModule('containerDebug', _containerDebug.default);
        this.startModule('deprecationDebug', _deprecationDebug.default);

        this.generalDebug.sendBooted();
        this.viewDebug.sendTree();
      });
    },

    inspect(obj) {
      this.get('objectInspector').sendObject(obj);
      this.get('adapter').log('Sent to the Object Inspector');
      return obj;
    },

    clear() {
      this.setProperties({
        '_application': null,
        owner: null
      });
    }

  }).create();

  function getApplication() {
    let namespaces = Namespace.NAMESPACES;
    let application;

    namespaces.forEach(namespace => {
      if (namespace instanceof Application) {
        application = namespace;
        return false;
      }
    });
    return application;
  }

  function getOwner(application) {
    if (application.autoboot) {
      return application.__deprecatedInstance__;
    } else if (application._applicationInstances /* Ember 3.1+ */) {
        return application._applicationInstances[0];
      }
  }

  exports.default = EmberDebug;
});
define('ember-debug/mixins/port-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const Ember = window.Ember;
  const { Mixin } = Ember;

  exports.default = Mixin.create({
    port: null,

    messages: {},

    portNamespace: null,

    init() {
      this._super(...arguments);

      this.set('port', this.get('namespace.port'));

      this.setupOrRemovePortListeners('on');
    },

    willDestroy() {
      this._super(...arguments);

      this.setupOrRemovePortListeners('off');
    },

    sendMessage(name, message) {
      this.get('port').send(this.messageName(name), message);
    },

    messageName(name) {
      let messageName = name;
      if (this.get('portNamespace')) {
        messageName = `${this.get('portNamespace')}:${messageName}`;
      }
      return messageName;
    },

    /**
     * Setup or tear down port listeners. Call on `init` and `willDestroy`
     * @param {String} onOrOff 'on' or 'off' the functions to call i.e. port.on or port.off for adding or removing listeners
     */
    setupOrRemovePortListeners(onOrOff) {
      let port = this.get('port');
      let messages = this.get('messages');

      for (let name in messages) {
        if (messages.hasOwnProperty(name)) {
          port[onOrOff](this.messageName(name), this, messages[name]);
        }
      }
    }
  });
});
define('ember-debug/models/profile-manager', ['exports', 'ember-debug/models/profile-node'], function (exports, _profileNode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const Ember = window.Ember;
  const { run: { scheduleOnce } } = Ember;

  /**
   * A class for keeping track of active rendering profiles as a list.
   */
  const ProfileManager = function () {
    this.profiles = [];
    this.current = null;
    this.currentSet = [];
    this._profilesAddedCallbacks = [];
  };

  ProfileManager.prototype = {
    began(timestamp, payload, now) {
      return this.wrapForErrors(this, function () {
        this.current = new _profileNode.default(timestamp, payload, this.current, now);
        return this.current;
      });
    },

    ended(timestamp, payload, profileNode) {
      if (payload.exception) {
        throw payload.exception;
      }
      return this.wrapForErrors(this, function () {
        this.current = profileNode.parent;
        profileNode.finish(timestamp);

        // Are we done profiling an entire tree?
        if (!this.current) {
          this.currentSet.push(profileNode);
          // If so, schedule an update of the profile list
          scheduleOnce('afterRender', this, this._profilesFinished);
        }
      });
    },

    wrapForErrors(context, callback) {
      return callback.call(context);
    },

    clearProfiles() {
      this.profiles.length = 0;
    },

    _profilesFinished() {
      return this.wrapForErrors(this, function () {
        const firstNode = this.currentSet[0];
        let parentNode = new _profileNode.default(firstNode.start, { template: 'View Rendering' });

        parentNode.time = 0;
        this.currentSet.forEach(n => {
          parentNode.time += n.time;
          parentNode.children.push(n);
        });
        parentNode.calcDuration();

        this.profiles.push(parentNode);
        this._triggerProfilesAdded([parentNode]);
        this.currentSet = [];
      });
    },

    _profilesAddedCallbacks: undefined, // set to array on init

    onProfilesAdded(context, callback) {
      this._profilesAddedCallbacks.push({ context, callback });
    },

    offProfilesAdded(context, callback) {
      let index = -1,
          item;
      for (let i = 0, l = this._profilesAddedCallbacks.length; i < l; i++) {
        item = this._profilesAddedCallbacks[i];
        if (item.context === context && item.callback === callback) {
          index = i;
        }
      }
      if (index > -1) {
        this._profilesAddedCallbacks.splice(index, 1);
      }
    },

    _triggerProfilesAdded(profiles) {
      this._profilesAddedCallbacks.forEach(function (item) {
        item.callback.call(item.context, profiles);
      });
    }
  };

  exports.default = ProfileManager;
});
define('ember-debug/models/profile-node', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
    A tree structure for assembling a list of render calls so they can be grouped and displayed nicely afterwards.
  
    @class ProfileNode
  **/
  const Ember = window.Ember;
  const { get, guidFor } = Ember;

  const ProfileNode = function (start, payload, parent, now) {
    let name;
    this.start = start;
    this.timestamp = now || Date.now();

    if (payload) {
      if (payload.template) {
        name = payload.template;
      } else if (payload.view) {
        const view = payload.view;
        name = get(view, 'instrumentDisplay') || get(view, '_debugContainerKey');
        if (name) {
          name = name.replace(/^view:/, '');
        }
        this.viewGuid = guidFor(view);
      }

      if (!name && payload.object) {
        name = payload.object.toString().replace(/:?:ember\d+>$/, '').replace(/^</, '');
        if (!this.viewGuid) {
          const match = name.match(/:(ember\d+)>$/);
          if (match && match.length > 1) {
            this.viewGuid = match[1];
          }
        }
      }
    }

    this.name = name || 'Unknown view';

    if (parent) {
      this.parent = parent;
    }
    this.children = [];
  };

  ProfileNode.prototype = {
    finish(timestamp) {
      this.time = timestamp - this.start;
      this.calcDuration();

      // Once we attach to our parent, we remove that reference
      // to avoid a graph cycle when serializing:
      if (this.parent) {
        this.parent.children.push(this);
        this.parent = null;
      }
    },

    calcDuration() {
      this.duration = Math.round(this.time * 100) / 100;
    }
  };

  exports.default = ProfileNode;
});
define('ember-debug/models/promise', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const Ember = window.Ember;
  const { typeOf, Object: EmberObject, computed, A } = Ember;

  const dateComputed = function () {
    return computed({
      get() {
        return null;
      },
      set(key, date) {
        if (typeOf(date) === 'date') {
          return date;
        } else if (typeof date === 'number' || typeof date === 'string') {
          return new Date(date);
        }
        return null;
      }
    });
  };

  exports.default = EmberObject.extend({
    createdAt: dateComputed(),
    settledAt: dateComputed(),
    chainedAt: dateComputed(),

    parent: null,

    children: computed(function () {
      return A();
    }),

    level: computed('parent.level', function () {
      const parent = this.get('parent');
      if (!parent) {
        return 0;
      }
      return parent.get('level') + 1;
    }),

    isSettled: computed('state', function () {
      return this.get('isFulfilled') || this.get('isRejected');
    }),

    isFulfilled: computed('state', function () {
      return this.get('state') === 'fulfilled';
    }),

    isRejected: computed('state', function () {
      return this.get('state') === 'rejected';
    })

  });
});
define('ember-debug/object-inspector', ['exports', 'ember-debug/mixins/port-mixin', 'ember-debug/utils/version', 'ember-debug/utils/type-check'], function (exports, _portMixin, _version, _typeCheck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const {
    Object: EmberObject, inspect: emberInspect, meta: emberMeta, typeOf,
    computed, get, set, guidFor, isNone, removeObserver,
    Mixin, addObserver, cacheFor, VERSION
  } = Ember;
  const { oneWay } = computed;

  const keys = Object.keys || Ember.keys;

  /**
   * Determine the type and get the value of the passed property
   * @param {*} object The parent object we will look for `key` on
   * @param {string} key The key for the property which points to a computed, EmberObject, etc
   * @param {*} computedValue A value that has already been computed with calculateCP
   * @return {{inspect: (string|*), type: string}|{computed: boolean, inspect: string, type: string}|{inspect: string, type: string}}
   */
  function inspectValue(object, key, computedValue) {
    let string;
    const value = computedValue ? computedValue : object[key];

    // TODO: this is not very clean. We should refactor calculateCP, etc, rather than passing computedValue
    if (computedValue) {
      return { type: `type-${typeOf(value)}`, inspect: inspect(value) };
    }

    if (value instanceof EmberObject) {
      return { type: 'type-ember-object', inspect: value.toString() };
    } else if ((0, _typeCheck.isComputed)(object, key)) {
      string = '<computed>';
      return { type: 'type-descriptor', inspect: string, computed: true };
    } else if ((0, _typeCheck.isDescriptor)(value)) {
      return { type: 'type-descriptor', inspect: value.toString(), computed: true };
    } else {
      return { type: `type-${typeOf(value)}`, inspect: inspect(value) };
    }
  }

  function inspect(value) {
    if (typeof value === 'function') {
      return 'function() { ... }';
    } else if (value instanceof EmberObject) {
      return value.toString();
    } else if (typeOf(value) === 'array') {
      if (value.length === 0) {
        return '[]';
      } else if (value.length === 1) {
        return `[ ${inspect(value[0])} ]`;
      } else {
        return `[ ${inspect(value[0])}, ... ]`;
      }
    } else if (value instanceof Error) {
      return `Error: ${value.message}`;
    } else if (value === null) {
      return 'null';
    } else if (typeOf(value) === 'date') {
      return value.toString();
    } else if (typeof value === 'object') {
      // `Ember.inspect` is able to handle this use case,
      // but it is very slow as it loops over all props,
      // so summarize to just first 2 props
      let ret = [];
      let v;
      let count = 0;
      let broken = false;

      for (let key in value) {
        if (!('hasOwnProperty' in value) || value.hasOwnProperty(key)) {
          if (count++ > 1) {
            broken = true;
            break;
          }
          v = value[key];
          if (v === 'toString') {
            continue;
          } // ignore useless items
          if (typeOf(v) === 'function') {
            v = 'function() { ... }';
          }
          if (typeOf(v) === 'array') {
            v = `[Array : ${v.length}]`;
          }
          if (typeOf(v) === 'object') {
            v = '[Object]';
          }
          ret.push(`${key}: ${v}`);
        }
      }
      let suffix = ' }';
      if (broken) {
        suffix = ' ...}';
      }
      return `{ ${ret.join(', ')}${suffix}`;
    } else {
      return emberInspect(value);
    }
  }

  exports.default = EmberObject.extend(_portMixin.default, {
    namespace: null,

    adapter: oneWay('namespace.adapter'),

    port: oneWay('namespace.port'),

    init() {
      this._super();
      this.set('sentObjects', {});
      this.set('boundObservers', {});
    },

    willDestroy() {
      this._super();
      for (let objectId in this.sentObjects) {
        this.releaseObject(objectId);
      }
    },

    sentObjects: {},

    boundObservers: {},

    _errorsFor: computed(function () {
      return {};
    }),

    portNamespace: 'objectInspector',

    messages: {
      digDeeper(message) {
        this.digIntoObject(message.objectId, message.property);
      },
      releaseObject(message) {
        this.releaseObject(message.objectId);
      },
      calculate(message) {
        let value;
        value = this.valueForObjectProperty(message.objectId, message.property, message.mixinIndex);
        if (value) {
          this.sendMessage('updateProperty', value);
          message.computed = true;
          this.bindPropertyToDebugger(message);
        }
        this.sendMessage('updateErrors', {
          objectId: message.objectId,
          errors: errorsToSend(this.get('_errorsFor')[message.objectId])
        });
      },
      saveProperty(message) {
        let value = message.value;
        if (message.dataType && message.dataType === 'date') {
          value = new Date(value);
        }
        this.saveProperty(message.objectId, message.property, value);
      },
      sendToConsole(message) {
        this.sendToConsole(message.objectId, message.property);
      },
      sendControllerToConsole(message) {
        const container = this.get('namespace.owner');
        this.sendValueToConsole(container.lookup(`controller:${message.name}`));
      },
      sendRouteHandlerToConsole(message) {
        const container = this.get('namespace.owner');
        this.sendValueToConsole(container.lookup(`route:${message.name}`));
      },
      sendContainerToConsole() {
        const container = this.get('namespace.owner');
        this.sendValueToConsole(container);
      },
      /**
       * Lookup the router instance, and find the route with the given name
       * @param message The message sent
       * @param {string} messsage.name The name of the route to lookup
       */
      inspectRoute(message) {
        const container = this.get('namespace.owner');
        const router = container.lookup('router:main');
        const routerLib = router._routerMicrolib || router.router;
        // 3.9.0 removed intimate APIs from router
        // https://github.com/emberjs/ember.js/pull/17843
        // https://deprecations.emberjs.com/v3.x/#toc_remove-handler-infos
        if ((0, _version.compareVersion)(VERSION, '3.9.0') !== -1) {
          // Ember >= 3.9.0
          this.sendObject(routerLib.getRoute(message.name));
        } else {
          // Ember < 3.9.0
          this.sendObject(routerLib.getHandler(message.name));
        }
      },
      inspectController(message) {
        const container = this.get('namespace.owner');
        this.sendObject(container.lookup(`controller:${message.name}`));
      },
      inspectById(message) {
        const obj = this.sentObjects[message.objectId];
        if (obj) {
          this.sendObject(obj);
        }
      },
      inspectByContainerLookup(message) {
        const container = this.get('namespace.owner');
        this.sendObject(container.lookup(message.name));
      },
      traceErrors(message) {
        let errors = this.get('_errorsFor')[message.objectId];
        toArray(errors).forEach(error => {
          let stack = error.error;
          if (stack && stack.stack) {
            stack = stack.stack;
          } else {
            stack = error;
          }
          this.get('adapter').log(`Object Inspector error for ${error.property}`, stack);
        });
      }
    },

    canSend(val) {
      return val instanceof EmberObject || typeOf(val) === 'array';
    },

    saveProperty(objectId, prop, val) {
      let object = this.sentObjects[objectId];
      set(object, prop, val);
    },

    sendToConsole(objectId, prop) {
      let object = this.sentObjects[objectId];
      let value;

      if (isNone(prop)) {
        value = this.sentObjects[objectId];
      } else {
        value = get(object, prop);
      }

      this.sendValueToConsole(value);
    },

    sendValueToConsole(value) {
      window.$E = value;
      if (value instanceof Error) {
        value = value.stack;
      }
      let args = [value];
      if (value instanceof EmberObject) {
        args.unshift(inspect(value));
      }
      this.get('adapter').log('Ember Inspector ($E): ', ...args);
    },

    digIntoObject(objectId, property) {
      let parentObject = this.sentObjects[objectId];
      let object = get(parentObject, property);

      if (this.canSend(object)) {
        let details = this.mixinsForObject(object);
        this.sendMessage('updateObject', {
          parentObject: objectId,
          property,
          objectId: details.objectId,
          name: object.toString(),
          details: details.mixins,
          errors: details.errors
        });
      }
    },

    sendObject(object) {
      if (!this.canSend(object)) {
        throw new Error(`Can't inspect ${object}. Only Ember objects and arrays are supported.`);
      }
      let details = this.mixinsForObject(object);
      this.sendMessage('updateObject', {
        objectId: details.objectId,
        name: object.toString(),
        details: details.mixins,
        errors: details.errors
      });
    },

    retainObject(object) {
      let meta = emberMeta(object);
      let guid = guidFor(object);

      meta._debugReferences = meta._debugReferences || 0;
      meta._debugReferences++;

      this.sentObjects[guid] = object;

      if (meta._debugReferences === 1 && object.reopen) {
        // drop object on destruction
        let _oldWillDestroy = object._oldWillDestroy = object.willDestroy;
        let self = this;
        object.reopen({
          willDestroy() {
            self.dropObject(guid);
            return _oldWillDestroy.apply(this, arguments);
          }
        });
      }

      return guid;
    },

    releaseObject(objectId) {
      let object = this.sentObjects[objectId];
      if (!object) {
        return;
      }
      let meta = emberMeta(object);
      let guid = guidFor(object);

      meta._debugReferences--;

      if (meta._debugReferences === 0) {
        this.dropObject(guid);
      }
    },

    dropObject(objectId) {
      let object = this.sentObjects[objectId];

      if (object.reopen) {
        object.reopen({ willDestroy: object._oldWillDestroy });
        delete object._oldWillDestroy;
      }

      this.removeObservers(objectId);
      delete this.sentObjects[objectId];

      delete this.get('_errorsFor')[objectId];

      this.sendMessage('droppedObject', { objectId });
    },

    removeObservers(objectId) {
      let observers = this.boundObservers[objectId];
      let object = this.sentObjects[objectId];

      if (observers) {
        observers.forEach(observer => {
          removeObserver(object, observer.property, observer.handler);
        });
      }

      delete this.boundObservers[objectId];
    },

    mixinsForObject(object) {
      let mixins = Mixin.mixins(object);
      let mixinDetails = [];

      let ownProps = propertiesForMixin({ mixins: [{ properties: object }] });
      mixinDetails.push({ name: 'Own Properties', properties: ownProps, expand: true });

      mixins.forEach(mixin => {
        let name = mixin[Ember.NAME_KEY] || mixin.ownerConstructor;
        // Only call `toString` on mixins in Ember >= 2.11
        // See https://github.com/emberjs/ember-inspector/issues/706#issuecomment-325121494
        // for more details.
        if ((0, _version.compareVersion)(VERSION, '2.11.0') !== -1) {
          if (!name && typeof mixin.toString === 'function') {
            try {
              name = mixin.toString();
            } catch (e) {
              name = '(Unable to convert Object to string)';
            }
          }
        }
        if (!name) {
          name = 'Unknown mixin';
        }
        mixinDetails.push({ name: name.toString(), properties: propertiesForMixin(mixin) });
      });

      fixMandatorySetters(mixinDetails);
      applyMixinOverrides(mixinDetails);

      let propertyInfo = null;
      let debugInfo = getDebugInfo(object);
      if (debugInfo) {
        propertyInfo = getDebugInfo(object).propertyInfo;
        mixinDetails = customizeProperties(mixinDetails, propertyInfo);
      }

      let expensiveProperties = null;
      if (propertyInfo) {
        expensiveProperties = propertyInfo.expensiveProperties;
      }

      let objectId = this.retainObject(object);

      let errorsForObject = this.get('_errorsFor')[objectId] = {};
      calculateCPs(object, mixinDetails, errorsForObject, expensiveProperties);

      this.bindProperties(objectId, mixinDetails);

      let errors = errorsToSend(errorsForObject);
      return { objectId, mixins: mixinDetails, errors };
    },

    valueForObjectProperty(objectId, property, mixinIndex) {
      let object = this.sentObjects[objectId],
          value;

      if (object.isDestroying) {
        value = '<DESTROYED>';
      } else {
        value = calculateCP(object, property, this.get('_errorsFor')[objectId]);
      }

      if (!value || !(value instanceof CalculateCPError)) {
        value = inspectValue(object, property, value);
        value.computed = true;

        return { objectId, property, value, mixinIndex };
      }
    },

    bindPropertyToDebugger(message) {
      let objectId = message.objectId;
      let property = message.property;
      let mixinIndex = message.mixinIndex;
      let computed = message.computed;
      let object = this.sentObjects[objectId];

      let handler = () => {
        let value = get(object, property);
        value = inspectValue(object, property, value);
        value.computed = computed;

        this.sendMessage('updateProperty', { objectId, property, value, mixinIndex });
      };

      addObserver(object, property, handler);
      this.boundObservers[objectId] = this.boundObservers[objectId] || [];
      this.boundObservers[objectId].push({ property, handler });
    },

    bindProperties(objectId, mixinDetails) {
      mixinDetails.forEach((mixin, mixinIndex) => {
        mixin.properties.forEach(item => {
          if (item.overridden) {
            return true;
          }
          if (item.value.type !== 'type-descriptor' && item.value.type !== 'type-function') {
            let computed = !!item.value.computed;
            this.bindPropertyToDebugger({ objectId, property: item.name, mixinIndex, computed });
          }
        });
      });
    },

    inspect,
    inspectValue
  });


  function propertiesForMixin(mixin) {
    let properties = [];

    if (mixin.mixins) {
      mixin.mixins.forEach(mixin => {
        if (mixin.properties) {
          addProperties(properties, mixin.properties);
        }
      });
    }

    return properties;
  }

  function addProperties(properties, hash) {
    for (let prop in hash) {
      if (!hash.hasOwnProperty(prop)) {
        continue;
      }
      if (prop.charAt(0) === '_') {
        continue;
      }

      // remove `fooBinding` type props
      if (prop.match(/Binding$/)) {
        continue;
      }

      // when mandatory setter is removed, an `undefined` value may be set
      if (hash[prop] === undefined) {
        continue;
      }
      let options = { isMandatorySetter: isMandatorySetter(hash, prop) };

      if (typeof hash[prop] === 'object' && hash[prop] !== null) {
        options.isService = !('type' in hash[prop]) && typeof hash[prop].unknownProperty === 'function' ? get(hash[prop], 'type') === 'service' : hash[prop].type === 'service';

        if (!options.isService) {
          if (hash[prop].constructor) {
            options.isService = hash[prop].constructor.isServiceFactory;
          }
        }
      }

      if ((0, _typeCheck.isComputed)(hash, prop)) {
        options.dependentKeys = ((0, _typeCheck.getDescriptorFor)(hash, prop)._dependentKeys || []).map(key => key.toString());
        if (!options.isService) {
          if (typeof hash[prop]._getter === 'function') {
            options.code = Function.prototype.toString.call(hash[prop]._getter);
          } else {
            options.code = '';
          }
        }
        options.readOnly = hash[prop]._readOnly;
      }
      replaceProperty(properties, prop, inspectValue(hash, prop), options);
    }
  }

  function replaceProperty(properties, name, value, options) {
    let found;

    let i, l;
    for (i = 0, l = properties.length; i < l; i++) {
      if (properties[i].name === name) {
        found = i;
        break;
      }
    }

    if (found) {
      properties.splice(i, 1);
    }

    let prop = { name, value };
    prop.isMandatorySetter = options.isMandatorySetter;
    prop.readOnly = options.readOnly;
    prop.dependentKeys = options.dependentKeys || [];
    let hasServiceFootprint = prop.value && typeof prop.value.inspect === 'string' ? prop.value.inspect.includes('@service:') : false;
    prop.isService = options.isService || hasServiceFootprint;
    prop.code = options.code;
    properties.push(prop);
  }

  function fixMandatorySetters(mixinDetails) {
    let seen = {};
    let propertiesToRemove = [];

    mixinDetails.forEach((detail, detailIdx) => {
      detail.properties.forEach(property => {
        if (property.isMandatorySetter) {
          seen[property.name] = {
            name: property.name,
            value: property.value.inspect,
            detailIdx,
            property
          };
        } else if (seen.hasOwnProperty(property.name) && seen[property.name] === property.value.inspect) {
          propertiesToRemove.push(seen[property.name]);
          delete seen[property.name];
        }
      });
    });

    propertiesToRemove.forEach(prop => {
      let detail = mixinDetails[prop.detailIdx];
      let index = detail.properties.indexOf(prop.property);
      if (index !== -1) {
        detail.properties.splice(index, 1);
      }
    });
  }

  function applyMixinOverrides(mixinDetails) {
    let seen = {};
    mixinDetails.forEach(detail => {
      detail.properties.forEach(property => {
        if (Object.prototype.hasOwnProperty(property.name)) {
          return;
        }

        if (seen[property.name]) {
          property.overridden = seen[property.name];
          delete property.value.computed;
        }

        seen[property.name] = detail.name;
      });
    });
  }

  function isMandatorySetter(object, prop) {
    let descriptor = Object.getOwnPropertyDescriptor(object, prop);
    if (descriptor.set && descriptor.set === Ember.MANDATORY_SETTER_FUNCTION) {
      return true;
    }
    return false;
  }

  function calculateCPs(object, mixinDetails, errorsForObject, expensiveProperties) {
    expensiveProperties = expensiveProperties || [];

    mixinDetails.forEach(mixin => {
      mixin.properties.forEach(item => {
        if (item.overridden) {
          return true;
        }
        if (item.value.computed) {
          let cache = cacheFor(object, item.name);
          if (cache !== undefined || expensiveProperties.indexOf(item.name) === -1) {
            let value = calculateCP(object, item.name, errorsForObject);
            if (!value || !(value instanceof CalculateCPError)) {
              item.value = inspectValue(object, item.name, value);
              item.value.computed = true;
            }
          }
        }
      });
    });
  }

  /**
   Customizes an object's properties
   based on the property `propertyInfo` of
   the object's `_debugInfo` method.
  
   Possible options:
   - `groups` An array of groups that contains the properties for each group
   For example:
   ```javascript
   groups: [
   { name: 'Attributes', properties: ['firstName', 'lastName'] },
   { name: 'Belongs To', properties: ['country'] }
   ]
   ```
   - `includeOtherProperties` Boolean,
   - `true` to include other non-listed properties,
   - `false` to only include given properties
   - `skipProperties` Array containing list of properties *not* to include
   - `skipMixins` Array containing list of mixins *not* to include
   - `expensiveProperties` An array of computed properties that are too expensive.
   Adding a property to this array makes sure the CP is not calculated automatically.
  
   Example:
   ```javascript
   {
     propertyInfo: {
       includeOtherProperties: true,
       skipProperties: ['toString', 'send', 'withTransaction'],
       skipMixins: [ 'Ember.Evented'],
       calculate: ['firstName', 'lastName'],
       groups: [
         {
           name: 'Attributes',
           properties: [ 'id', 'firstName', 'lastName' ],
           expand: true // open by default
         },
         {
           name: 'Belongs To',
           properties: [ 'maritalStatus', 'avatar' ],
           expand: true
         },
         {
           name: 'Has Many',
           properties: [ 'phoneNumbers' ],
           expand: true
         },
         {
           name: 'Flags',
           properties: ['isLoaded', 'isLoading', 'isNew', 'isDirty']
         }
       ]
     }
   }
   ```
   */
  function customizeProperties(mixinDetails, propertyInfo) {
    let newMixinDetails = [];
    let neededProperties = {};
    let groups = propertyInfo.groups || [];
    let skipProperties = propertyInfo.skipProperties || [];
    let skipMixins = propertyInfo.skipMixins || [];

    if (groups.length) {
      mixinDetails[0].expand = false;
    }

    groups.forEach(group => {
      group.properties.forEach(prop => {
        neededProperties[prop] = true;
      });
    });

    mixinDetails.forEach(mixin => {
      let newProperties = [];
      mixin.properties.forEach(item => {
        // If 2.10.0 or 2.10.x but < 2.11
        if ((0, _version.compareVersion)(VERSION, '2.10.0') === 0 || (0, _version.compareVersion)(VERSION, '2.10.0') === 1 && (0, _version.compareVersion)(VERSION, '2.11.0') === -1) {
          skipProperties = twoTenfilterHack(item.name, skipProperties);
        }
        if (skipProperties.indexOf(item.name) !== -1) {
          return true;
        }

        if (!item.overridden && neededProperties.hasOwnProperty(item.name) && neededProperties[item.name]) {
          neededProperties[item.name] = item;
        } else {
          newProperties.push(item);
        }
      });
      mixin.properties = newProperties;
      if (skipMixins.indexOf(mixin.name) === -1) {
        newMixinDetails.push(mixin);
      }
    });

    groups.slice().reverse().forEach(group => {
      let newMixin = { name: group.name, expand: group.expand, properties: [] };
      group.properties.forEach(function (prop) {
        // make sure it's not `true` which means property wasn't found
        if (neededProperties[prop] !== true) {
          newMixin.properties.push(neededProperties[prop]);
        }
      });
      newMixinDetails.unshift(newMixin);
    });

    return newMixinDetails;
  }

  /**
   * There are a bunch of const cased values in Ember 2.10 we end up observing, but they are removed in 2.11+
   * Only for 2.10 we want to filter out these values. We are checking if `__ember` is in the value to exclude.
   * @param {String} itemName The name to check against exlusion values
   * @param {[String]} skipProperties The array of properties to skip
   */
  function twoTenfilterHack(itemName, skipProperties) {
    if (itemName.includes('__ember')) {
      skipProperties.push(itemName);
    }

    return skipProperties;
  }

  function getDebugInfo(object) {
    let debugInfo = null;
    const objectDebugInfo = get(object, '_debugInfo');
    if (objectDebugInfo && typeof objectDebugInfo === 'function') {
      // We have to bind to object here to make sure the `this` context is correct inside _debugInfo when we call it
      debugInfo = objectDebugInfo.bind(object)();
    }
    debugInfo = debugInfo || {};
    let propertyInfo = debugInfo.propertyInfo || (debugInfo.propertyInfo = {});
    let skipProperties = propertyInfo.skipProperties = propertyInfo.skipProperties || (propertyInfo.skipProperties = []);

    skipProperties.push('isDestroyed', 'isDestroying', 'container');
    // 'currentState' and 'state' are un-observable private properties.
    // The rest are skipped to reduce noise in the inspector.
    if (Ember.Component && object instanceof Ember.Component) {
      skipProperties.push('currentState', 'state', 'buffer', 'outletSource', 'lengthBeforeRender', 'lengthAfterRender', 'template', 'layout', 'templateData', 'domManager', 'states', 'element', 'targetObject');
    }

    let meta = Ember.meta(object);
    for (let prop in object) {
      // when in Ember 3.1
      if ((0, _version.compareVersion)(VERSION, '3.1.0') !== -1) {
        // in Ember 3.1+ CP's are eagerly invoked via a normal
        // JS getter, this avoids invoking the computed property
        // _just_ to determine if it was a function
        let descriptor = meta.peekDescriptors(prop);
        if (descriptor) {
          continue;
        }
      }

      // remove methods
      if (typeof object[prop] === 'function') {
        skipProperties.push(prop);
      }
    }
    return debugInfo;
  }

  function toArray(errors) {
    return keys(errors).map(key => errors[key]);
  }

  function calculateCP(object, property, errorsForObject) {
    delete errorsForObject[property];
    try {
      return get(object, property);
    } catch (error) {
      errorsForObject[property] = { property, error };
      return new CalculateCPError();
    }
  }

  function CalculateCPError() {}

  function errorsToSend(errors) {
    return toArray(errors).map(error => ({ property: error.property }));
  }
});
define('ember-debug/port', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const Ember = window.Ember;
  const { Object: EmberObject, computed, run } = Ember;
  const { or, readOnly } = computed;

  exports.default = EmberObject.extend(Ember.Evented, {
    adapter: readOnly('namespace.adapter'),
    applicationId: readOnly('namespace.applicationId'),
    applicationName: or('namespace._application.name', 'namespace._application.modulePrefix').readOnly(),

    /**
     * Unique id per application (not application instance). It's very important
     * that this id doesn't change when the app is reset otherwise the inspector
     * will no longer recognize the app.
     *
     * @property uniqueId
     * @type {String}
     */
    uniqueId: computed('namespace._application', function () {
      return Ember.guidFor(this.get('namespace._application'));
    }),

    init() {
      /**
       * Stores the timestamp when it was first accessed.
       *
       * @property now
       * @type {Number}
       */
      this.now = Date.now();

      this.get('adapter').onMessageReceived(message => {
        if (this.get('uniqueId') === message.applicationId || !message.applicationId) {
          this.messageReceived(message.type, message);
        }
      });
    },

    messageReceived(name, message) {
      this.wrap(() => {
        this.trigger(name, message);
      });
    },

    send(messageType, options = {}) {
      options.type = messageType;
      options.from = 'inspectedWindow';
      options.applicationId = this.get('uniqueId');
      options.applicationName = this.get('applicationName');
      this.get('adapter').send(options);
    },

    /**
     * Wrap all code triggered from outside of
     * EmberDebug with this method.
     *
     * `wrap` is called by default
     * on all callbacks triggered by `port`,
     * so no need to call it in this case.
     *
     * - Wraps a callback in `Ember.run`.
     * - Catches all errors during production
     * and displays them in a user friendly manner.
     *
     * @method wrap
     * @param {Function} fn
     * @return {Mixed} The return value of the passed function
     */
    wrap(fn) {
      return run(this, function () {
        try {
          return fn();
        } catch (error) {
          this.get('adapter').handleError(error);
        }
      });
    }
  });
});
define('ember-debug/promise-debug', ['exports', 'ember-debug/mixins/port-mixin', 'ember-debug/libs/promise-assembler'], function (exports, _portMixin, _promiseAssembler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const Ember = window.Ember;
  const { computed, Object: EmberObject, RSVP, A, run } = Ember;
  const { readOnly } = computed;

  exports.default = EmberObject.extend(_portMixin.default, {
    namespace: null,
    objectInspector: readOnly('namespace.objectInspector'),
    adapter: readOnly('namespace.adapter'),
    portNamespace: 'promise',
    session: readOnly('namespace.session'),

    // created on init
    promiseAssembler: null,

    releaseMethods: computed(function () {
      return A();
    }),

    init() {
      this._super();
      this.set('promiseAssembler', _promiseAssembler.default.create());
      this.get('promiseAssembler').set('promiseDebug', this);
      this.setInstrumentWithStack();
      this.sendInstrumentWithStack();
      this.get('promiseAssembler').start();
    },

    delay: 100,

    willDestroy() {
      this.releaseAll();
      if (this.get('promiseAssembler')) {
        this.get('promiseAssembler').destroy();
      }
      this.set('promiseAssembler', null);
      this._super();
    },

    messages: {
      getAndObservePromises() {
        this.getAndObservePromises();
      },

      releasePromises() {
        this.releaseAll();
      },

      sendValueToConsole(message) {
        let promiseId = message.promiseId;
        let promise = this.get('promiseAssembler').find(promiseId);
        let value = promise.get('value');
        if (value === undefined) {
          value = promise.get('reason');
        }
        this.get('objectInspector').sendValueToConsole(value);
      },

      tracePromise(message) {
        let id = message.promiseId;
        let promise = this.get('promiseAssembler').find(id);
        // Remove first two lines and add label
        let stack = promise.get('stack');
        if (stack) {
          stack = stack.split("\n");
          stack.splice(0, 2, [`Ember Inspector (Promise Trace): ${promise.get('label') || ''}`]);
          this.get("adapter").log(stack.join("\n"));
        }
      },

      setInstrumentWithStack(message) {
        let bool = message.instrumentWithStack;
        this.set('instrumentWithStack', bool);
        this.setInstrumentWithStack();
      },

      getInstrumentWithStack() {
        this.sendInstrumentWithStack();
      }
    },

    instrumentWithStack: computed({
      get() {
        return !!this.get('session').getItem('promise:stack');
      },
      set(key, value) {
        this.get('session').setItem('promise:stack', value);
        return value;
      }
    }),

    sendInstrumentWithStack() {
      this.sendMessage('instrumentWithStack', {
        instrumentWithStack: this.get('instrumentWithStack')
      });
    },

    setInstrumentWithStack() {
      RSVP.configure('instrument-with-stack', this.get('instrumentWithStack'));
      this.sendInstrumentWithStack();
    },

    releaseAll() {
      this.get('releaseMethods').forEach(fn => {
        fn();
      });
      this.set('releaseMethods', A());
    },

    getAndObservePromises() {
      this.get('promiseAssembler').on('created', this, this.promiseUpdated);
      this.get('promiseAssembler').on('fulfilled', this, this.promiseUpdated);
      this.get('promiseAssembler').on('rejected', this, this.promiseUpdated);
      this.get('promiseAssembler').on('chained', this, this.promiseChained);

      this.get('releaseMethods').pushObject(() => {
        this.get('promiseAssembler').off('created', this, this.promiseUpdated);
        this.get('promiseAssembler').off('fulfilled', this, this.promiseUpdated);
        this.get('promiseAssembler').off('rejected', this, this.promiseUpdated);
        this.get('promiseAssembler').off('chained', this, this.promiseChained);
      });

      this.promisesUpdated(this.get('promiseAssembler').find());
    },

    updatedPromises: computed(function () {
      return A();
    }),

    promisesUpdated(uniquePromises) {
      if (!uniquePromises) {
        uniquePromises = A();
        this.get('updatedPromises').forEach(promise => {
          uniquePromises.addObject(promise);
        });
      }
      // Remove inspector-created promises
      uniquePromises = uniquePromises.filter(promise => promise.get('label') !== 'ember-inspector');
      const serialized = this.serializeArray(uniquePromises);
      this.sendMessage('promisesUpdated', {
        promises: serialized
      });
      this.set('updatedPromises', A());
    },

    promiseUpdated(event) {
      this.get('updatedPromises').pushObject(event.promise);
      Ember.run.debounce(this, 'promisesUpdated', this.delay);
    },

    promiseChained(event) {
      this.get('updatedPromises').pushObject(event.promise);
      this.get('updatedPromises').pushObject(event.child);
      run.debounce(this, 'promisesUpdated', this.delay);
    },

    serializeArray(promises) {
      return promises.map(item => this.serialize(item));
    },

    serialize(promise) {
      let serialized = {};
      serialized.guid = promise.get('guid');
      serialized.state = promise.get('state');
      serialized.label = promise.get('label');
      if (promise.get('children')) {
        serialized.children = this.promiseIds(promise.get('children'));
      }
      serialized.parent = promise.get('parent.guid');
      serialized.value = this.inspectValue(promise, 'value');
      serialized.reason = this.inspectValue(promise, 'reason');
      if (promise.get('createdAt')) {
        serialized.createdAt = promise.get('createdAt').getTime();
      }
      if (promise.get('settledAt')) {
        serialized.settledAt = promise.get('settledAt').getTime();
      }
      serialized.hasStack = !!promise.get('stack');
      return serialized;
    },

    promiseIds(promises) {
      return promises.map(promise => promise.get('guid'));
    },

    /**
     * Inspect the promise and pass to object inspector
     * @param {Promise} promise The promise object
     * @param {string} key The key for the property on the promise
     * @return {*|{inspect: (string|*), type: string}|{computed: boolean, inspect: string, type: string}|{inspect: string, type: string}}
     */
    inspectValue(promise, key) {
      let objectInspector = this.get('objectInspector');
      let inspected = objectInspector.inspectValue(promise, key);

      if (inspected.type === 'type-ember-object' || inspected.type === "type-array") {
        inspected.objectId = objectInspector.retainObject(promise.get(key));
        this.get('releaseMethods').pushObject(function () {
          objectInspector.releaseObject(inspected.objectId);
        });
      }
      return inspected;
    }

  });
});
define("ember-debug/render-debug", ["exports", "ember-debug/mixins/port-mixin", "ember-debug/models/profile-manager"], function (exports, _portMixin, _profileManager) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const { computed: { readOnly }, run: { later }, subscribe, Object: EmberObject } = Ember;

  let profileManager = new _profileManager.default();
  let queue = [];

  function push(info) {
    const index = queue.push(info);
    if (index === 1) {
      later(flush, 50);
    }
    return index - 1;
  }

  function flush() {
    let entry, i;
    for (i = 0; i < queue.length; i++) {
      entry = queue[i];
      if (entry.type === 'began') {
        // If there was an error during rendering `entry.endedIndex` never gets set.
        if (entry.endedIndex) {
          queue[entry.endedIndex].profileNode = profileManager.began(entry.timestamp, entry.payload, entry.now);
        }
      } else {
        profileManager.ended(entry.timestamp, entry.payload, entry.profileNode);
      }
    }
    queue.length = 0;
  }

  subscribe("render", {
    before(name, timestamp, payload) {
      const info = {
        type: 'began',
        timestamp,
        payload,
        now: Date.now()
      };
      return push(info);
    },

    after(name, timestamp, payload, beganIndex) {
      const endedInfo = {
        type: 'ended',
        timestamp,
        payload
      };

      const index = push(endedInfo);
      queue[beganIndex].endedIndex = index;
    }
  });

  exports.default = EmberObject.extend(_portMixin.default, {
    namespace: null,
    viewDebug: readOnly('namespace.viewDebug'),
    portNamespace: 'render',

    profileManager,

    init() {
      this._super();
      this.profileManager.wrapForErrors = (context, callback) => this.get('port').wrap(() => callback.call(context));
      this._subscribeForViewTrees();
    },

    willDestroy() {
      this._super();
      this.profileManager.wrapForErrors = function (context, callback) {
        return callback.call(context);
      };
      this.profileManager.offProfilesAdded(this, this.sendAdded);
      this.profileManager.offProfilesAdded(this, this._updateViewTree);
    },

    _subscribeForViewTrees() {
      this.profileManager.onProfilesAdded(this, this._updateViewTree);
    },

    _updateViewTree(profiles) {
      let viewDurations = {};
      this._flatten(profiles).forEach(node => {
        if (node.viewGuid) {
          viewDurations[node.viewGuid] = node.duration;
        }
      });
      this.get('viewDebug').updateDurations(viewDurations);
    },

    _flatten(profiles, array) {
      array = array || [];
      profiles.forEach(profile => {
        array.push(profile);
        this._flatten(profile.children, array);
      });
      return array;
    },

    sendAdded(profiles) {
      this.sendMessage('profilesAdded', { profiles });
    },

    messages: {
      watchProfiles() {
        this.sendMessage('profilesAdded', { profiles: this.profileManager.profiles });
        this.profileManager.onProfilesAdded(this, this.sendAdded);
      },

      releaseProfiles() {
        this.profileManager.offProfilesAdded(this, this.sendAdded);
      },

      clear() {
        this.profileManager.clearProfiles();
        this.sendMessage('profilesUpdated', { profiles: [] });
      }
    }
  });
});
define('ember-debug/route-debug', ['exports', 'ember-debug/mixins/port-mixin', 'ember-debug/utils/version'], function (exports, _portMixin, _version) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember;
  const {
    String: { classify, dasherize },
    computed,
    observer,
    run: { later },
    Object: EmberObject,
    VERSION
  } = Ember;
  const { readOnly } = computed;

  const { hasOwnProperty } = Object.prototype;

  exports.default = EmberObject.extend(_portMixin.default, {
    namespace: null,

    router: computed('namespace.owner', function () {
      return this.get('namespace.owner').lookup('router:main');
    }),

    applicationController: computed('namespace.owner', function () {
      const container = this.get('namespace.owner');
      return container.lookup('controller:application');
    }),

    currentPath: readOnly('namespace.owner.router.currentPath'),
    currentURL: readOnly('namespace.owner.router.currentURL'),

    portNamespace: 'route',

    emberCliConfig: readOnly('namespace.generalDebug.emberCliConfig'),

    messages: {
      getTree() {
        this.sendTree();
      },
      getCurrentRoute() {
        this.sendCurrentRoute();
      }
    },

    sendCurrentRoute: observer('currentURL', function () {
      const {
        currentPath: name,
        currentURL: url
      } = this.getProperties('currentPath', 'currentURL');

      later(() => {
        this.sendMessage('currentRoute', { name, url });
      }, 50);
    }),

    routeTree: computed('router', function () {
      const router = this.get('router');
      const routerLib = router._routerMicrolib || router.router;
      let routeNames = routerLib.recognizer.names;
      let routeTree = {};
      for (let routeName in routeNames) {
        if (!hasOwnProperty.call(routeNames, routeName)) {
          continue;
        }
        let route = routeNames[routeName];
        buildSubTree.call(this, routeTree, route);
      }
      return arrayizeChildren({ children: routeTree });
    }),

    sendTree() {
      const routeTree = this.get('routeTree');
      this.sendMessage('routeTree', { tree: routeTree });
    },

    getClassName(name, type) {
      let container = this.get('namespace.owner');
      let resolver = container.application.__registry__.resolver;
      let prefix = this.get('emberCliConfig.modulePrefix');
      let podPrefix = this.get('emberCliConfig.podModulePrefix');
      let usePodsByDefault = this.get('emberCliConfig.usePodsByDefault');
      let className;
      if (prefix || podPrefix) {
        // Uses modules
        name = dasherize(name);
        let fullName = `${type}:${name}`;
        if (resolver.lookupDescription) {
          className = resolver.lookupDescription(fullName);
        } else if (resolver.describe) {
          className = resolver.describe(fullName);
        }
        if (className === fullName) {
          // full name returned as is - this resolver does not look for the module.
          className = className.replace(new RegExp(`^${type}\:`), '');
        } else if (className) {
          // Module exists and found
          className = className.replace(new RegExp(`^/?(${prefix}|${podPrefix})/${type}s/`), '');
        } else {
          // Module does not exist
          if (usePodsByDefault) {
            // we don't include the prefix since it's redundant
            // and not part of the file path.
            // (podPrefix - prefix) is part of the file path.
            let currentPrefix = '';
            if (podPrefix) {
              currentPrefix = podPrefix.replace(new RegExp(`^/?${prefix}/?`), '');
            }
            className = `${currentPrefix}/${name}/${type}`;
          } else {
            className = name.replace(/\./g, '/');
          }
        }
        className = className.replace(/\./g, '/');
      } else {
        // No modules
        if (type !== 'template') {
          className = classify(`${name.replace(/\./g, '_')}_${type}`);
        } else {
          className = name.replace(/\./g, '/');
        }
      }
      return className;
    }

  });


  function buildSubTree(routeTree, route) {
    let handlers = route.handlers;
    let owner = this.get('namespace.owner');
    let subTree = routeTree;
    let item;
    let routeClassName;
    let routeHandler;
    let controllerName;
    let controllerClassName;
    let templateName;
    let controllerFactory;

    for (let i = 0; i < handlers.length; i++) {
      item = handlers[i];
      let handler = item.handler;
      if (handler.match(/(loading|error)$/)) {
        // make sure it has been defined before calling `getHandler` because
        // we don't want to generate sub routes as this has side-effects.
        if (!routeHasBeenDefined(owner, handler)) {
          continue;
        }
      }

      if (subTree[handler] === undefined) {
        routeClassName = this.getClassName(handler, 'route');

        const router = this.get('router');
        const routerLib = router._routerMicrolib || router.router;
        // 3.9.0 removed intimate APIs from router
        // https://github.com/emberjs/ember.js/pull/17843
        // https://deprecations.emberjs.com/v3.x/#toc_remove-handler-infos
        if ((0, _version.compareVersion)(VERSION, '3.9.0') !== -1) {
          // Ember >= 3.9.0
          routeHandler = routerLib.getRoute(handler);
        } else {
          // Ember < 3.9.0
          routeHandler = routerLib.getHandler(handler);
        }
        controllerName = routeHandler.get('controllerName') || routeHandler.get('routeName');
        controllerFactory = owner.factoryFor ? owner.factoryFor(`controller:${controllerName}`) : owner._lookupFactory(`controller:${controllerName}`);
        controllerClassName = this.getClassName(controllerName, 'controller');
        templateName = this.getClassName(handler, 'template');

        subTree[handler] = {
          value: {
            name: handler,
            routeHandler: {
              className: routeClassName,
              name: handler
            },
            controller: {
              className: controllerClassName,
              name: controllerName,
              exists: !!controllerFactory
            },
            template: {
              name: templateName
            }
          }
        };

        if (i === handlers.length - 1) {
          // it is a route, get url
          subTree[handler].value.url = getURL(owner, route.segments);
          subTree[handler].value.type = 'route';
        } else {
          // it is a resource, set children object
          subTree[handler].children = {};
          subTree[handler].value.type = 'resource';
        }
      }
      subTree = subTree[handler].children;
    }
  }

  function arrayizeChildren(routeTree) {
    let obj = {};
    // Top node doesn't have a value
    if (routeTree.value) {
      obj.value = routeTree.value;
    }

    if (routeTree.children) {
      let childrenArray = [];
      for (let i in routeTree.children) {
        let route = routeTree.children[i];
        childrenArray.push(arrayizeChildren(route));
      }
      obj.children = childrenArray;
    }

    return obj;
  }

  function getURL(container, segments) {
    const locationImplementation = container.lookup('router:main').location;
    let url = [];
    for (let i = 0; i < segments.length; i++) {
      let name = null;

      if (typeof segments[i].generate !== 'function') {
        // After changes in RouteRecognizer in >= 2.12
        let { type, value } = segments[i];
        if (type === 1) {
          // dynamic
          name = `:${value}`;
        } else if (type === 2) {
          // star
          name = `*${value}`;
        } else {
          name = value;
        }
      } else {
        // 2.11 and before
        try {
          name = segments[i].generate();
        } catch (e) {
          // is dynamic
          name = `:${segments[i].name}`;
        }
      }
      if (name) {
        url.push(name);
      }
    }

    url = url.join('/');

    if (url.match(/_unused_dummy_/)) {
      url = '';
    } else {
      url = `/${url}`;
      url = locationImplementation.formatURL(url);
    }

    return url;
  }

  function routeHasBeenDefined(owner, name) {
    return owner.hasRegistration(`template:${name}`) || owner.hasRegistration(`route:${name}`);
  }
});
define('ember-debug/services/session', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const Ember = window.Ember;
  const { Object: EmberObject } = Ember;

  const Session = EmberObject.extend({
    setItem() /*key, val*/{},
    removeItem() /*key*/{},
    getItem() /*key*/{}
  });

  let SESSION_STORAGE_SUPPORTED = false;

  try {
    if (typeof sessionStorage !== 'undefined') {
      SESSION_STORAGE_SUPPORTED = true;
    }
  } catch (e) {}
  // This can be reached with the following succession of events:
  //
  //   1. On Google Chrome
  //   2. Disable 3rd-party cookies
  //   3. Open the browser inspector
  //   4. Open on the Ember inspector
  //   5. Visit a page showing an Ember app, on a frame
  //      loaded from a different domain
  //
  // It's important that the Ember inspector is already open when
  // you land on the page (hence step 4 before 5). Reloading the iframe
  // page with the Ember inspector open also reproduces the problem.


  // Feature detection
  if (SESSION_STORAGE_SUPPORTED) {
    Session.reopen({
      sessionStorage,
      prefix: '__ember__inspector__',
      makeKey(key) {
        return this.prefix + key;
      },
      setItem(key, val) {
        return this.sessionStorage.setItem(this.makeKey(key), val);
      },
      removeItem(key) {
        return this.sessionStorage.removeItem(this.makeKey(key));
      },
      getItem(key) {
        return JSON.parse(this.sessionStorage.getItem(this.makeKey(key)));
      }
    });
  }

  exports.default = Session;
});
define('ember-debug/utils/name-functions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.modelName = modelName;
  exports.shortModelName = shortModelName;
  exports.controllerName = controllerName;
  exports.shortControllerName = shortControllerName;
  exports.shortViewName = shortViewName;
  exports.viewName = viewName;
  /**
   * Returns a medium sized model name. Makes sure it's maximum 50 characters long.
   *
   * @method modelName
   * @param  {Any} model
   * @return {String}       The model name.
   */
  function modelName(model) {
    let name = '<Unknown model>';
    if (model.toString) {
      name = model.toString();
    }

    if (name.length > 50) {
      name = `${name.substr(0, 50)}...`;
    }
    return name;
  }

  /**
   * Takes an Ember Data model and strips out the extra noise from the name.
   *
   * @method shortModelName
   * @param  {DS.Model} model
   * @return {String}       The concise model name.
   */
  function shortModelName(model) {
    let name = modelName(model);
    // jj-abrams-resolver adds `app@model:`
    return name.replace(/<[^>]+@model:/g, '<');
  }

  /**
   * Returns the controller name. Strips out extra noise such as `subclass of`.
   *
   * @method controllerName
   * @param  {Controller} controller
   * @return {String}            The controller name
   */
  function controllerName(controller) {
    return controller.toString();
  }

  /**
   * Cleans up the controller name before returning it.
   *
   * @method shortControllerName
   * @param  {Controller} controller
   * @return {String}            The short controller name
   */
  function shortControllerName(controller) {
    let name = cleanupInstanceName(controllerName(controller));
    let match = name.match(/^\(generated (.+) controller\)/);
    if (match) {
      return match[1];
    }
    return name;
  }

  /**
   * Cleans up an instance name to create shorter/less noisy names.
   * Example: `<app@component:textarea::ember545>` becomes `textarea`.
   *
   * @method cleanupInstanceName
   * @param  {String} name
   * @return {String} The short/cleaner name
   */
  function cleanupInstanceName(name) {
    let match = name.match(/^.+:(.+)::/);
    if (!match) {
      // Support for Namespace names (instead of module) (for the tests).
      // `<App.ApplicationController:ember301>` => `App.ApplicationController`
      match = name.match(/^<(.+):/);
    }
    if (match) {
      return match[1];
    }
    return name;
  }

  /**
   * Cleans up the view name before returning it.
   *
   * @method shortViewName
   * @param  {Component} view The component.
   * @return {String}      The short view name.
   */
  function shortViewName(view) {
    return cleanupInstanceName(viewName(view));
  }

  /**
   * Returns the view name. Removes the `subclass` noise.
   *
   * @method viewName
   * @param  {Component} view The component.
   * @return {String}      The view name.
   */
  function viewName(view) {
    return view.toString();
  }
});
define('ember-debug/utils/on-ready', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.onReady = onReady;
  function onReady(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(completed);
    } else {
      document.addEventListener("DOMContentLoaded", completed, false);
      // For some reason DOMContentLoaded doesn't always work
      window.addEventListener("load", completed, false);
    }

    function completed() {
      document.removeEventListener("DOMContentLoaded", completed, false);
      window.removeEventListener("load", completed, false);
      callback();
    }
  }
});
define('ember-debug/utils/type-check', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isComputed = isComputed;
  exports.isDescriptor = isDescriptor;
  exports.getDescriptorFor = getDescriptorFor;
  const Ember = window.Ember;
  const { ComputedProperty } = Ember;

  /**
   * Check if given key on the passed object is a computed property
   * @param object
   * @param key
   * @return {boolean|*}
   */
  function isComputed(object, key) {
    // Ember > 3.10
    if (Ember.Debug.isComputed) {
      return Ember.Debug.isComputed(object, key) || getDescriptorFor(object, key);
    }

    // Ember < 3.10
    return object[key] instanceof ComputedProperty;
  }

  function isDescriptor(value) {
    // Ember >= 1.11
    return value && typeof value === 'object' && value.isDescriptor;
  }

  /**
   * This allows us to pass in a COMPUTED_DECORATOR function and get the descriptor for it.
   * It should be implemented Ember side eventually.
   * @param {EmberObject} object The object we are inspecting
   * @param {String} key The key for the property on the object
   */
  function getDescriptorFor(object, key) {
    if (Ember.Debug.isComputed) {
      return Ember.__loader.require('@ember/-internals/metal').descriptorForDecorator(object[key]);
    }

    return object[key];
  }
});
define('ember-debug/utils/version', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.compareVersion = compareVersion;
  /**
   * Compares two Ember versions.
   *
   * Returns:
   * `-1` if version1 < version
   * 0 if version1 == version2
   * 1 if version1 > version2
   *
   * @param {String} version1
   * @param {String} version2
   * @return {Boolean} result of the comparison
   */
  function compareVersion(version1, version2) {
    let compared, i;
    version1 = cleanupVersion(version1).split('.');
    version2 = cleanupVersion(version2).split('.');
    for (i = 0; i < 3; i++) {
      compared = compare(+version1[i], +version2[i]);
      if (compared !== 0) {
        return compared;
      }
    }
    return 0;
  }

  /**
   * Remove -alpha, -beta, etc from versions
   *
   * @param {String} version
   * @return {String} The cleaned up version
   */
  function cleanupVersion(version) {
    return version.replace(/-.*/g, '');
  }

  /**
   * @method compare
   * @param {Number} val
   * @param {Number} number
   * @return {Number}
   *  0: same
   * -1: <
   *  1: >
   */
  function compare(val, number) {
    if (val === number) {
      return 0;
    } else if (val < number) {
      return -1;
    } else if (val > number) {
      return 1;
    }
  }
});
define('ember-debug/view-debug', ['exports', 'ember-debug/mixins/port-mixin', 'ember-debug/libs/glimmer-tree', 'ember-debug/utils/name-functions'], function (exports, _portMixin, _glimmerTree, _nameFunctions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Ember = window.Ember; /* eslint no-cond-assign:0 */


  const {
    guidFor,
    computed,
    run,
    Object: EmberObject,
    typeOf,
    Component,
    Controller,
    ViewUtils,
    A
  } = Ember;
  const { later } = run;
  const { readOnly } = computed;
  const { getViewBoundingClientRect } = ViewUtils;

  const keys = Object.keys || Ember.keys;

  let layerDiv, previewDiv, highlightedElement;

  exports.default = EmberObject.extend(_portMixin.default, {
    namespace: null,

    adapter: readOnly('namespace.adapter'),
    objectInspector: readOnly('namespace.objectInspector'),

    portNamespace: 'view',

    messages: {
      getTree() {
        this.sendTree();
      },
      hideLayer() {
        this.hideLayer();
      },
      previewLayer(message) {
        if (this.glimmerTree) {
          // >= Ember 2.9
          this.glimmerTree.highlightLayer(message.objectId || message.elementId, true);
        } else {
          // 1.13 >= Ember <= 2.8
          if (message.renderNodeId !== undefined) {
            this._highlightNode(this.get('_lastNodes').objectAt(message.renderNodeId), true);
          } else if (message.objectId) {
            this.highlightView(this.get('objectInspector').sentObjects[message.objectId], true);
          }
        }
      },
      hidePreview() {
        this.hidePreview();
      },
      inspectViews(message) {
        if (message.inspect) {
          this.startInspecting();
        } else {
          this.stopInspecting();
        }
      },

      scrollToElement({ elementId }) {
        let el = document.querySelector(`#${elementId}`);
        if (el) {
          el.scrollIntoView();
        }
      },

      inspectElement({ objectId, elementId }) {
        if (objectId) {
          this.inspectViewElement(objectId);
        } else {
          let element = document.getElementById(elementId);
          this.inspectElement(element);
        }
      },
      setOptions({ options }) {
        this.set('options', options);
        if (this.glimmerTree) {
          this.glimmerTree.updateOptions(options);
        }
        this.sendTree();
      },
      sendModelToConsole(message) {
        let model;
        if (this.glimmerTree) {
          model = this.glimmerTree.modelForViewNodeValue(message);
        } else {
          let renderNode = this.get('_lastNodes').objectAt(message.renderNodeId);
          model = this._modelForNode(renderNode);
        }
        if (model) {
          this.get('objectInspector').sendValueToConsole(model);
        }
      },
      contextMenu() {
        this.inspectComponentForNode(this.lastClickedElement);
      }
    },

    init() {
      this._super(...arguments);

      this.viewListener();
      this.retainedObjects = [];
      this.options = {};
      this._durations = {};
      layerDiv = document.createElement('div');
      layerDiv.setAttribute('data-label', 'layer-div');
      layerDiv.style.display = 'none';
      document.body.appendChild(layerDiv);

      previewDiv = document.createElement('div');
      previewDiv.style.pointerEvents = 'none';
      previewDiv.style.display = 'none';
      previewDiv.setAttribute('data-label', 'preview-div');
      document.body.appendChild(previewDiv);

      // Store last clicked element for context menu
      this.lastClickedHandler = event => {
        if (event.button === 2) {
          this.lastClickedElement = event.target;
        }
      };
      window.addEventListener('mousedown', this.lastClickedHandler);

      this.resizeHandler = () => {
        if (this.glimmerTree) {
          this.hideLayer();
        } else {
          if (highlightedElement) {
            this.highlightView(highlightedElement);
          }
        }
      };
      window.addEventListener('resize', this.resizeHandler);

      if (this.isGlimmerTwo()) {
        this.glimmerTree = new _glimmerTree.default({
          owner: this.getOwner(),
          retainObject: this.retainObject.bind(this),
          highlightRange: this._highlightRange.bind(this),
          options: this.get('options'),
          objectInspector: this.get('objectInspector'),
          durations: this._durations,
          viewRegistry: this.get('viewRegistry')
        });
      }
    },

    inspectComponentForNode(domNode) {
      let viewElem = this.findNearestView(domNode);
      if (!viewElem) {
        this.get('adapter').log('No Ember component found.');
        return;
      }

      this.sendMessage('inspectComponent', {
        viewId: viewElem.id
      });
    },

    updateDurations(durations) {
      for (let guid in durations) {
        if (!durations.hasOwnProperty(guid)) {
          continue;
        }
        this._durations[guid] = durations[guid];
      }
      if (this.glimmerTree) {
        this.glimmerTree.updateDurations(this._durations);
      }
      this.sendTree();
    },

    retainObject(object) {
      this.retainedObjects.push(object);
      return this.get('objectInspector').retainObject(object);
    },

    releaseCurrentObjects() {
      this.retainedObjects.forEach(item => {
        this.get('objectInspector').releaseObject(guidFor(item));
      });
      this.retainedObjects = [];
    },

    eventNamespace: computed(function () {
      return `view_debug_${guidFor(this)}`;
    }),

    willDestroy() {
      this._super();
      window.removeEventListener('resize', this.resizeHandler);
      window.removeEventListener('mousedown', this.lastClickedHandler);
      document.body.removeChild(layerDiv);
      document.body.removeChild(previewDiv);
      this.get('_lastNodes').clear();
      this.releaseCurrentObjects();
      this.stopInspecting();
    },

    inspectViewElement(objectId) {
      let view = this.get('objectInspector').sentObjects[objectId];
      if (view && view.get('element')) {
        this.inspectElement(view.get('element'));
      }
    },

    /**
     * Opens the "Elements" tab and selects the given element. Doesn't work in all
     * browsers/addons (only in the Chrome and FF devtools addons at the time of writing).
     *
     * @method inspectElement
     * @param  {Element} element The element to inspect
     */
    inspectElement(element) {
      this.get('adapter').inspectElement(element);
    },

    sendTree() {
      run.scheduleOnce('afterRender', this, this.scheduledSendTree);
    },

    startInspecting() {
      let viewElem = null;
      this.sendMessage('startInspecting', {});

      // we don't want the preview div to intercept the mousemove event
      previewDiv.style.pointerEvents = 'none';

      let pinView = () => {
        if (viewElem) {
          if (this.glimmerTree) {
            this.glimmerTree.highlightLayer(viewElem.id);
          } else {
            this.highlightView(viewElem);
          }

          let view = this.get('objectInspector').sentObjects[viewElem.id];
          if (view instanceof Component) {
            this.get('objectInspector').sendObject(view);
            this.sendMessage('inspectComponent', { viewId: viewElem.id });
          }
        }
        this.stopInspecting();
        return false;
      };

      this.mousemoveHandler = e => {
        viewElem = this.findNearestView(e.target);

        if (viewElem) {
          if (this.glimmerTree) {
            this.glimmerTree.highlightLayer(viewElem.id, true);
          } else {
            this.highlightView(viewElem, true);
          }
        }
      };
      this.mousedownHandler = () => {
        // prevent app-defined clicks from being fired
        previewDiv.style.pointerEvents = '';
        previewDiv.addEventListener('mouseup', () => pinView(), { once: true });
      };
      this.mouseupHandler = () => pinView();
      document.body.addEventListener('mousemove', this.mousemoveHandler);
      document.body.addEventListener('mousedown', this.mousedownHandler);
      document.body.addEventListener('mouseup', this.mouseupHandler);
      document.body.style.cursor = '-webkit-zoom-in';
    },

    findNearestView(elem) {
      if (!elem) {
        return null;
      }
      if (elem.classList.contains('ember-view')) {
        return elem;
      }
      return this.findNearestView(elem.closest('.ember-view'));
    },

    stopInspecting() {
      document.body.removeEventListener('mousemove', this.mousemoveHandler);
      document.body.removeEventListener('mousedown', this.mousedownHandler);
      document.body.removeEventListener('mouseup', this.mouseupHandler);
      document.body.style.cursor = '';
      this.hidePreview();
      this.sendMessage('stopInspecting', {});
    },

    scheduledSendTree() {
      // Send out of band
      later(() => {
        if (this.isDestroying) {
          return;
        }
        this.releaseCurrentObjects();
        let tree = this.viewTree();
        if (tree) {
          this.sendMessage('viewTree', { tree });
        }
      }, 50);
    },

    viewListener() {
      this.viewTreeChanged = () => {
        this.sendTree();
        this.hideLayer();
      };
    },

    viewTree() {
      let tree;
      let emberApp = this.get('namespace.owner');
      if (!emberApp) {
        return false;
      }
      let applicationView = document.querySelector(`${emberApp.rootElement} > [class='ember-view']`);
      let applicationViewId = applicationView ? applicationView.id : undefined;
      let rootView = this.get('viewRegistry')[applicationViewId];
      // In case of App.reset view is destroyed
      if (this.glimmerTree) {
        // Glimmer 2
        tree = this.glimmerTree.build();
      } else if (rootView) {
        let children = [];
        this.get('_lastNodes').clear();
        let renderNode = rootView._renderNode;
        tree = { value: this._inspectNode(renderNode), children };
        this._appendNodeChildren(renderNode, children);
      }
      return tree;
    },

    getOwner() {
      return this.get('namespace.owner');
    },

    isGlimmerTwo() {
      return this.get('namespace.owner').hasRegistration('service:-glimmer-environment');
    },

    modelForView(view) {
      const controller = view.get('controller');
      let model = controller.get('model');
      if (view.get('context') !== controller) {
        model = view.get('context');
      }
      return model;
    },

    shouldShowView(view) {
      if (view instanceof Component) {
        return this.options.components;
      }
      return (this.hasOwnController(view) || this.hasOwnContext(view)) && (!view.get('isVirtual') || this.hasOwnController(view) || this.hasOwnContext(view));
    },

    hasOwnController(view) {
      return view.get('controller') !== view.get('_parentView.controller') && (view instanceof Component || !(view.get('_parentView.controller') instanceof Component));
    },

    hasOwnContext(view) {
      // Context switching is deprecated, we will need to find a better way for {{#each}} helpers.
      return view.get('context') !== view.get('_parentView.context') &&
      // make sure not a view inside a component, like `{{yield}}` for example.
      !(view.get('_parentView.context') instanceof Component);
    },

    highlightView(element, isPreview) {
      let view, rect;

      if (!isPreview) {
        highlightedElement = element;
      }

      if (!element) {
        return;
      }

      // element && element._renderNode to detect top view (application)
      if (element instanceof Component || element && element._renderNode) {
        view = element;
      } else {
        view = this.get('viewRegistry')[element.id];
      }

      rect = getViewBoundingClientRect(view);

      let templateName = view.get('templateName') || view.get('_debugTemplateName');
      let controller = view.get('controller');
      let model = controller && controller.get('model');
      let modelName;

      let options = {
        isPreview,
        view: {
          name: (0, _nameFunctions.shortViewName)(view),
          object: view
        }
      };

      if (controller) {
        options.controller = {
          name: (0, _nameFunctions.controllerName)(controller),
          object: controller
        };
      }

      if (templateName) {
        options.template = {
          name: templateName
        };
      }

      if (model) {
        modelName = this.get('objectInspector').inspect(model);
        options.model = {
          name: modelName,
          object: model
        };
      }

      this._highlightRange(rect, options);
    },

    // TODO: This method needs a serious refactor/cleanup
    _highlightRange(rect, options) {
      let div;
      let isPreview = options.isPreview;

      // take into account the scrolling position as mentioned in docs
      // https://developer.mozilla.org/en-US/docs/Web/API/element.getBoundingClientRect
      let styles = {
        display: 'block',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '2px solid rgb(102, 102, 102)',
        padding: '0',
        right: 'auto',
        direction: 'ltr',
        boxSizing: 'border-box',
        color: 'rgb(51, 51, 255)',
        fontFamily: 'Menlo, sans-serif',
        minHeight: '63px',
        zIndex: 10000,
        top: `${rect.top + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      };

      if (isPreview) {
        div = previewDiv;
      } else {
        this.hideLayer();
        div = layerDiv;
        this.hidePreview();
      }
      for (let prop in styles) {
        div.style[prop] = styles[prop];
      }
      let output = '';

      if (!isPreview) {
        output = '<span class=\'close\' data-label=\'layer-close\'>&times;</span>';
      }

      let template = options.template;

      if (template) {
        output += `<p class='template'><span>template</span>=<span data-label='layer-template'>${escapeHTML(template.name)}</span></p>`;
      }
      let view = options.view;
      let controller = options.controller;
      if (!view || !(view.object instanceof Component)) {
        if (controller) {
          output += `<p class='controller'><span>controller</span>=<span data-label='layer-controller'>${escapeHTML(controller.name)}</span></p>`;
        }
        if (view) {
          output += `<p class='view'><span>view</span>=<span data-label='layer-view'>${escapeHTML(view.name)}</span></p>`;
        }
      } else {
        output += `<p class='component'><span>component</span>=<span data-label='layer-component'>${escapeHTML(view.name)}</span></p>`;
      }

      let model = options.model;
      if (model) {
        output += `<p class='model'><span>model</span>=<span data-label='layer-model'>${escapeHTML(model.name)}</span></p>`;
      }
      div.innerHTML = output;

      for (let p of div.querySelectorAll('p')) {
        p.style.float = 'left';
        p.style.margin = 0;
        p.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        p.style.padding = '5px';
        p.style.color = 'rgb(0, 0, 153)';
      }
      for (let p of div.querySelectorAll('p.model')) {
        p.style.clear = 'left';
      }
      for (let p of div.querySelectorAll('p span:first-child')) {
        p.style.color = 'rgb(153, 153, 0)';
      }
      for (let p of div.querySelectorAll('p span:last-child')) {
        p.style.color = 'rgb(153, 0, 153)';
      }

      if (!isPreview) {
        let cancelEvent = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
        for (let span of div.querySelectorAll('span.close')) {
          span.style.float = 'right';
          span.style.margin = '5px';
          span.style.background = '#666';
          span.style.color = '#eee';
          span.style.fontFamily = 'helvetica, sans-serif';
          span.style.fontSize = '14px';
          span.style.width = '16px';
          span.style.height = '16px';
          span.style.lineHeight = '14px';
          span.style.borderRadius = '16px';
          span.style.textAlign = 'center';
          span.style.cursor = 'pointer';
          span.style.opacity = '0.5';
          span.style.fontWeight = 'normal';
          span.style.textShadow = 'none';
          span.addEventListener('click', e => {
            cancelEvent(e);
            this.hideLayer();
          });
          span.addEventListener('mouseup', cancelEvent);
          span.addEventListener('mousedown', cancelEvent);
        }
      }

      this._addClickListeners(div, view, 'component');
      this._addClickListeners(div, controller, 'controller');
      this._addClickListeners(div, view, 'view');

      for (let span of div.querySelectorAll('p.template span:last-child')) {
        span.style.cursor = 'pointer';
        span.addEventListener('click', () => {
          if (view) {
            this.inspectViewElement(guidFor(view.object));
          } else if (options.element) {
            this.inspectElement(options.element);
          }
        });
      }

      if (model && model.object && (model.object instanceof EmberObject || typeOf(model.object) === 'array')) {
        for (let span of div.querySelectorAll('p.model span:last-child')) {
          span.style.cursor = 'pointer';
          span.addEventListener('click', () => {
            this.get('objectInspector').sendObject(model.object);
          });
        }
      }
    },

    hideLayer() {
      layerDiv.style.display = 'none';
      highlightedElement = null;
    },

    hidePreview() {
      previewDiv.style.display = 'none';
    },

    _addClickListeners(div, item, selector) {
      for (let span of div.querySelectorAll(`p.${selector} span:last-child`)) {
        span.style.cursor = 'pointer';
        span.addEventListener('click', () => {
          this.get('objectInspector').sendObject(item.object);
        });
      }
    },

    /**
     * List of render nodes from the last
     * sent view tree.
     *
     * @property lastNodes
     * @type {Array}
     */
    _lastNodes: computed(function () {
      return A([]);
    }),

    viewRegistry: computed('namespace.owner', function () {
      return this.getOwner().lookup('-view-registry:main');
    }),

    /**
     * Walk the render node hierarchy and build the tree.
     *
     * @param  {Object} renderNode
     * @param  {Array} children
     */
    _appendNodeChildren(renderNode, children) {
      let childNodes = this._childrenForNode(renderNode);
      if (!childNodes) {
        return;
      }
      childNodes.forEach(childNode => {
        if (this._shouldShowNode(childNode, renderNode)) {
          let grandChildren = [];
          children.push({ value: this._inspectNode(childNode), children: grandChildren });
          this._appendNodeChildren(childNode, grandChildren);
        } else {
          this._appendNodeChildren(childNode, children);
        }
      });
    },

    /**
     * Gather the children assigned to the render node.
     *
     * @param  {Object} renderNode
     * @return {Array} children
     */
    _childrenForNode(renderNode) {
      if (renderNode.morphMap) {
        return keys(renderNode.morphMap).map(key => renderNode.morphMap[key]).filter(node => !!node);
      } else {
        return renderNode.childNodes;
      }
    },

    /**
     * Whether a render node is elligible to be included
     * in the tree.
     * Depends on whether the node is actually a view node
     * (as opposed to an attribute node for example),
     * and also checks the filtering options. For example,
     * showing Ember component nodes can be toggled.
     *
     * @param  {Object} renderNode
     * @param  {Object} parentNode
     * @return {Boolean} `true` for show and `false` to skip the node
     */
    _shouldShowNode(renderNode, parentNode) {

      // Filter out non-(view/components)
      if (!this._nodeIsView(renderNode)) {
        return false;
      }
      // Has either a template or a view/component instance
      if (!this._nodeTemplateName(renderNode) && !this._nodeHasViewInstance(renderNode)) {
        return false;
      }
      return this._nodeHasOwnController(renderNode, parentNode) && (this.options.components || !this._nodeIsEmberComponent(renderNode)) && (this._nodeHasViewInstance(renderNode) || this._nodeHasOwnController(renderNode, parentNode));
    },

    /**
     * The node's model. If the view has a controller,
     * it will be the controller's `model` property.s
     *
     * @param  {Object} renderNode
     * @return {Object} the model
     */
    _modelForNode(renderNode) {
      let controller = this._controllerForNode(renderNode);
      if (controller) {
        return controller.get('model');
      }
    },

    /**
     * Not all nodes are actually views/components.
     * Nodes can be attributes for example.
     *
     * @param  {Object} renderNode
     * @return {Boolean}
     */
    _nodeIsView(renderNode) {
      if (renderNode.getState) {
        return !!renderNode.getState().manager;
      } else {
        return !!renderNode.state.manager;
      }
    },

    /**
     * Check if a node has its own controller (as opposed to sharing
     * its parent's controller).
     * Useful to identify route views from other views.
     *
     * @param  {Object} renderNode
     * @param  {Object} parentNode
     * @return {Boolean}
     */
    _nodeHasOwnController(renderNode, parentNode) {
      return this._controllerForNode(renderNode) !== this._controllerForNode(parentNode);
    },

    /**
     * Check if the node has a view instance.
     * Virtual nodes don't have a view/component instance.
     *
     * @param  {Object} renderNode
     * @return {Boolean}
     */
    _nodeHasViewInstance(renderNode) {
      return !!this._viewInstanceForNode(renderNode);
    },

    /**
     * Returns the nodes' controller.
     *
     * @param  {Object} renderNode
     * @return {Ember.Controller}
     */
    _controllerForNode(renderNode) {
      // If it's a component then return the component instance itself
      if (this._nodeIsEmberComponent(renderNode)) {
        return this._viewInstanceForNode(renderNode);
      }
      if (renderNode.lastResult) {
        let scope = renderNode.lastResult.scope;
        let controller;
        if (scope.getLocal) {
          controller = scope.getLocal('controller');
        } else {
          controller = scope.locals.controller.value();
        }
        if ((!controller || !(controller instanceof Controller)) && scope.getSelf) {
          // Ember >= 2.2 + no ember-legacy-controllers addon
          controller = scope.getSelf().value();
          if (!(controller instanceof Controller)) {
            controller = controller._controller || controller.controller;
          }
        }
        return controller;
      }
    },

    /**
     * Inspect a node. This will return an object with all
     * the required properties to be added to the view tree
     * to be sent.
     *
     * @param  {Object} renderNode
     * @return {Object} the object containing the required values
     */
    _inspectNode(renderNode) {
      let name, viewClassName, completeViewClassName, tagName, viewId, timeToRender;

      let viewClass = this._viewInstanceForNode(renderNode);

      if (viewClass) {
        viewClassName = (0, _nameFunctions.shortViewName)(viewClass);
        completeViewClassName = (0, _nameFunctions.viewName)(viewClass);
        tagName = viewClass.get('tagName') || 'div';
        viewId = this.retainObject(viewClass);
        timeToRender = this._durations[viewId];
      }

      name = this._nodeDescription(renderNode);

      let value = {
        template: this._nodeTemplateName(renderNode) || '(inline)',
        name,
        objectId: viewId,
        viewClass: viewClassName,
        duration: timeToRender,
        completeViewClass: completeViewClassName,
        isComponent: this._nodeIsEmberComponent(renderNode),
        tagName,
        isVirtual: !viewClass
      };

      let controller = this._controllerForNode(renderNode);
      if (controller && !this._nodeIsEmberComponent(renderNode)) {
        value.controller = {
          name: (0, _nameFunctions.shortControllerName)(controller),
          completeName: (0, _nameFunctions.controllerName)(controller),
          objectId: this.retainObject(controller)
        };

        let model = this._modelForNode(renderNode);
        if (model) {
          if (EmberObject.detectInstance(model) || typeOf(model) === 'array') {
            value.model = {
              name: (0, _nameFunctions.shortModelName)(model),
              completeName: (0, _nameFunctions.modelName)(model),
              objectId: this.retainObject(model),
              type: 'type-ember-object'
            };
          } else {
            value.model = {
              name: this.get('objectInspector').inspect(model),
              type: `type-${typeOf(model)}`
            };
          }
        }
      }

      value.renderNodeId = this.get('_lastNodes').push(renderNode) - 1;

      return value;
    },

    /**
     * Get the node's template name. Relies on an htmlbars
     * feature that adds the module name as a meta property
     * to compiled templates.
     *
     * @param  {Object} renderNode
     * @return {String} the template name
     */
    _nodeTemplateName(renderNode) {
      let template = renderNode.lastResult && renderNode.lastResult.template;
      if (template && template.meta && template.meta.moduleName) {
        return template.meta.moduleName.replace(/\.hbs$/, '');
      }
    },

    /**
     * The node's name. Should be anything that the user
     * can use to identity what node we are talking about.
     *
     * Usually either the view instance name, or the template name.
     *
     * @param  {Object} renderNode
     * @return {String}
     */
    _nodeDescription(renderNode) {
      let name;

      let viewClass = this._viewInstanceForNode(renderNode);

      if (viewClass) {
        //. Has a view instance - take the view's name
        name = viewClass.get('_debugContainerKey');
        if (name) {
          name = name.replace(/.*(view|component):/, '').replace(/:$/, '');
        }
      } else {
        // Virtual - no view instance
        let templateName = this._nodeTemplateName(renderNode);
        if (templateName) {
          return templateName.replace(/^.*templates\//, '').replace(/\//g, '.');
        }
      }

      // If application view was not defined, it uses a `toplevel` view
      if (name === 'toplevel') {
        name = 'application';
      }
      return name;
    },

    /**
     * Return a node's view instance.
     *
     * @param  {Object} renderNode
     * @return {Ember.View|Ember.Component} The view or component instance
     */
    _viewInstanceForNode(renderNode) {
      return renderNode.emberView;
    },

    /**
     * Returns whether the node is an Ember Component or not.
     *
     * @param  {Object} renderNode
     * @return {Boolean}
     */
    _nodeIsEmberComponent(renderNode) {
      let viewInstance = this._viewInstanceForNode(renderNode);
      return !!(viewInstance && viewInstance instanceof Component);
    },

    /**
     * Highlight a render node on the screen.
     *
     * @param  {Object} renderNode
     * @param  {Boolean} isPreview (whether to pin the layer or not)
     */
    _highlightNode(renderNode, isPreview) {
      let modelName;
      // Todo: should be in Ember core
      let range = document.createRange();
      range.setStartBefore(renderNode.firstNode);
      range.setEndAfter(renderNode.lastNode);
      let rect = range.getBoundingClientRect();

      let options = { isPreview };

      let controller = this._controllerForNode(renderNode);
      if (controller) {
        options.controller = {
          name: (0, _nameFunctions.controllerName)(controller),
          object: controller
        };
      }

      let templateName = this._nodeTemplateName(renderNode);
      if (templateName) {
        options.template = {
          name: templateName
        };
      }

      let model;
      if (controller) {
        model = controller.get('model');
      }
      if (model) {
        modelName = this.get('objectInspector').inspect(model);
        options.model = {
          name: modelName,
          object: model
        };
      }

      let view = this._viewInstanceForNode(renderNode);

      if (view) {
        options.view = {
          name: (0, _nameFunctions.viewName)(view),
          object: view
        };
      }

      this._highlightRange(rect, options);
    }
  });


  function escapeHTML(string) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(string));
    return div.innerHTML;
  }
});
(function() {
/* eslint-disable */

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Define a module along with a payload.
 * @param {string} moduleName Name for the payload
 * @param {ignored} deps Ignored. For compatibility with CommonJS AMD Spec
 * @param {function} payload Function with (require, exports, module) params
 */
function define(moduleName, deps, payload) {
  if (typeof moduleName != "string") {
    throw new TypeError('Expected string, got: ' + moduleName);
  }

  if (arguments.length == 2) {
    payload = deps;
  }

  if (moduleName in define.modules) {
    throw new Error("Module already defined: " + moduleName);
  }
  define.modules[moduleName] = payload;
};

/**
 * The global store of un-instantiated modules
 */
define.modules = {};


/**
 * We invoke require() in the context of a Domain so we can have multiple
 * sets of modules running separate from each other.
 * This contrasts with JSMs which are singletons, Domains allows us to
 * optionally load a CommonJS module twice with separate data each time.
 * Perhaps you want 2 command lines with a different set of commands in each,
 * for example.
 */
function Domain() {
  this.modules = {};
  this._currentModule = null;
}

(function () {

  /**
   * Lookup module names and resolve them by calling the definition function if
   * needed.
   * There are 2 ways to call this, either with an array of dependencies and a
   * callback to call when the dependencies are found (which can happen
   * asynchronously in an in-page context) or with a single string an no callback
   * where the dependency is resolved synchronously and returned.
   * The API is designed to be compatible with the CommonJS AMD spec and
   * RequireJS.
   * @param {string[]|string} deps A name, or names for the payload
   * @param {function|undefined} callback Function to call when the dependencies
   * are resolved
   * @return {undefined|object} The module required or undefined for
   * array/callback method
   */
  Domain.prototype.require = function(deps, callback) {
    if (Array.isArray(deps)) {
      var params = deps.map(function(dep) {
        return this.lookup(dep);
      }, this);
      if (callback) {
        callback.apply(null, params);
      }
      return undefined;
    }
    else {
      return this.lookup(deps);
    }
  };

  function normalize(path) {
    var bits = path.split('/');
    var i = 1;
    while (i < bits.length) {
      if (bits[i] === '..') {
        bits.splice(i-1, 1);
      } else if (bits[i] === '.') {
        bits.splice(i, 1);
      } else {
        i++;
      }
    }
    return bits.join('/');
  }

  function join(a, b) {
    a = a.trim();
    b = b.trim();
    if (/^\//.test(b)) {
      return b;
    } else {
      return a.replace(/\/*$/, '/') + b;
    }
  }

  function dirname(path) {
    var bits = path.split('/');
    bits.pop();
    return bits.join('/');
  }

  /**
   * Lookup module names and resolve them by calling the definition function if
   * needed.
   * @param {string} moduleName A name for the payload to lookup
   * @return {object} The module specified by aModuleName or null if not found.
   */
  Domain.prototype.lookup = function(moduleName) {
    if (/^\./.test(moduleName)) {
      moduleName = normalize(join(dirname(this._currentModule), moduleName));
    }

    if (moduleName in this.modules) {
      var module = this.modules[moduleName];
      return module;
    }

    if (!(moduleName in define.modules)) {
      throw new Error("Module not defined: " + moduleName);
    }

    var module = define.modules[moduleName];

    if (typeof module == "function") {
      var exports = {};
      var previousModule = this._currentModule;
      this._currentModule = moduleName;
      module(this.require.bind(this), exports, { id: moduleName, uri: "" });
      this._currentModule = previousModule;
      module = exports;
    }

    // cache the resulting module object for next time
    this.modules[moduleName] = module;

    return module;
  };

}());

define.Domain = Domain;
define.globalDomain = new Domain();
var require = define.globalDomain.require.bind(define.globalDomain);
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/source-map-generator', ['require', 'exports', 'module' ,  'source-map/base64-vlq', 'source-map/util', 'source-map/array-set', 'source-map/mapping-list'], function(require, exports, module) {

  var base64VLQ = require('./base64-vlq');
  var util = require('./util');
  var ArraySet = require('./array-set').ArraySet;
  var MappingList = require('./mapping-list').MappingList;

  /**
   * An instance of the SourceMapGenerator represents a source map which is
   * being built incrementally. You may pass an object with the following
   * properties:
   *
   *   - file: The filename of the generated source.
   *   - sourceRoot: A root for all relative URLs in this source map.
   */
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
  }

  SourceMapGenerator.prototype._version = 3;

  /**
   * Creates a new SourceMapGenerator based on a SourceMapConsumer
   *
   * @param aSourceMapConsumer The SourceMap.
   */
  SourceMapGenerator.fromSourceMap =
    function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
      });
      aSourceMapConsumer.eachMapping(function (mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };

        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }

          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };

          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }

        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };

  /**
   * Add a single mapping from original source line and column to the generated
   * source's line and column for this source map being created. The mapping
   * object should have the following properties:
   *
   *   - generated: An object with the generated line and column positions.
   *   - original: An object with the original line and column positions.
   *   - source: The original source file (relative to the sourceRoot).
   *   - name: An optional original token name for this mapping.
   */
  SourceMapGenerator.prototype.addMapping =
    function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, 'generated');
      var original = util.getArg(aArgs, 'original', null);
      var source = util.getArg(aArgs, 'source', null);
      var name = util.getArg(aArgs, 'name', null);

      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }

      if (source != null && !this._sources.has(source)) {
        this._sources.add(source);
      }

      if (name != null && !this._names.has(name)) {
        this._names.add(name);
      }

      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
      });
    };

  /**
   * Set the source content for a source file.
   */
  SourceMapGenerator.prototype.setSourceContent =
    function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }

      if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) {
          this._sourcesContents = {};
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };

  /**
   * Applies the mappings of a sub-source-map for a specific source file to the
   * source map being generated. Each mapping to the supplied source file is
   * rewritten using the supplied source map. Note: The resolution for the
   * resulting mappings is the minimium of this map and the supplied map.
   *
   * @param aSourceMapConsumer The source map to be applied.
   * @param aSourceFile Optional. The filename of the source file.
   *        If omitted, SourceMapConsumer's file property will be used.
   * @param aSourceMapPath Optional. The dirname of the path to the source map
   *        to be applied. If relative, it is relative to the SourceMapConsumer.
   *        This parameter is needed when the two source maps aren't in the same
   *        directory, and the source map to be applied contains relative source
   *        paths. If so, those relative source paths need to be rewritten
   *        relative to the SourceMapGenerator.
   */
  SourceMapGenerator.prototype.applySourceMap =
    function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      // If aSourceFile is omitted, we will use the file property of the SourceMap
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(
            'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
            'or the source map\'s "file" property. Both were omitted.'
          );
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      // Make "sourceFile" relative if an absolute Url is passed.
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      // Applying the SourceMap can add and remove items from the sources and
      // the names array.
      var newSources = new ArraySet();
      var newNames = new ArraySet();

      // Find mappings for the "sourceFile"
      this._mappings.unsortedForEach(function (mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          // Check if it can be mapped by the source map, then update the mapping.
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            // Copy mapping
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source)
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }

        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }

        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }

      }, this);
      this._sources = newSources;
      this._names = newNames;

      // Copy sourcesContents of applied map.
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile = util.join(aSourceMapPath, sourceFile);
          }
          if (sourceRoot != null) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          }
          this.setSourceContent(sourceFile, content);
        }
      }, this);
    };

  /**
   * A mapping can have one of the three levels of data:
   *
   *   1. Just the generated position.
   *   2. The Generated position, original position, and original source.
   *   3. Generated and original position, original source, as well as a name
   *      token.
   *
   * To maintain consistency, we validate that any new mapping being added falls
   * in to one of these categories.
   */
  SourceMapGenerator.prototype._validateMapping =
    function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                                aName) {
      if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
          && aGenerated.line > 0 && aGenerated.column >= 0
          && !aOriginal && !aSource && !aName) {
        // Case 1.
        return;
      }
      else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
               && aOriginal && 'line' in aOriginal && 'column' in aOriginal
               && aGenerated.line > 0 && aGenerated.column >= 0
               && aOriginal.line > 0 && aOriginal.column >= 0
               && aSource) {
        // Cases 2 and 3.
        return;
      }
      else {
        throw new Error('Invalid mapping: ' + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };

  /**
   * Serialize the accumulated mappings in to the stream of base 64 VLQs
   * specified by the source map format.
   */
  SourceMapGenerator.prototype._serializeMappings =
    function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = '';
      var mapping;

      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];

        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            result += ';';
            previousGeneratedLine++;
          }
        }
        else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            result += ',';
          }
        }

        result += base64VLQ.encode(mapping.generatedColumn
                                   - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;

        if (mapping.source != null) {
          result += base64VLQ.encode(this._sources.indexOf(mapping.source)
                                     - previousSource);
          previousSource = this._sources.indexOf(mapping.source);

          // lines are stored 0-based in SourceMap spec version 3
          result += base64VLQ.encode(mapping.originalLine - 1
                                     - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;

          result += base64VLQ.encode(mapping.originalColumn
                                     - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;

          if (mapping.name != null) {
            result += base64VLQ.encode(this._names.indexOf(mapping.name)
                                       - previousName);
            previousName = this._names.indexOf(mapping.name);
          }
        }
      }

      return result;
    };

  SourceMapGenerator.prototype._generateSourcesContent =
    function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function (source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents,
                                                    key)
          ? this._sourcesContents[key]
          : null;
      }, this);
    };

  /**
   * Externalize the source map.
   */
  SourceMapGenerator.prototype.toJSON =
    function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }

      return map;
    };

  /**
   * Render the source map being generated to a string.
   */
  SourceMapGenerator.prototype.toString =
    function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };

  exports.SourceMapGenerator = SourceMapGenerator;

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
define('source-map/base64-vlq', ['require', 'exports', 'module' ,  'source-map/base64'], function(require, exports, module) {

  var base64 = require('./base64');

  // A single base 64 digit can contain 6 bits of data. For the base 64 variable
  // length quantities we use in the source map spec, the first bit is the sign,
  // the next four bits are the actual value, and the 6th bit is the
  // continuation bit. The continuation bit tells us whether there are more
  // digits in this value following this digit.
  //
  //   Continuation
  //   |    Sign
  //   |    |
  //   V    V
  //   101011

  var VLQ_BASE_SHIFT = 5;

  // binary: 100000
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

  // binary: 011111
  var VLQ_BASE_MASK = VLQ_BASE - 1;

  // binary: 100000
  var VLQ_CONTINUATION_BIT = VLQ_BASE;

  /**
   * Converts from a two-complement value to a value where the sign bit is
   * placed in the least significant bit.  For example, as decimals:
   *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
   *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
   */
  function toVLQSigned(aValue) {
    return aValue < 0
      ? ((-aValue) << 1) + 1
      : (aValue << 1) + 0;
  }

  /**
   * Converts to a two-complement value from a value where the sign bit is
   * placed in the least significant bit.  For example, as decimals:
   *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
   *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
   */
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative
      ? -shifted
      : shifted;
  }

  /**
   * Returns the base 64 VLQ encoded value.
   */
  exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;

    var vlq = toVLQSigned(aValue);

    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base64.encode(digit);
    } while (vlq > 0);

    return encoded;
  };

  /**
   * Decodes the next base 64 VLQ value from the given string and returns the
   * value and the rest of the string via the out parameter.
   */
  exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;

    do {
      if (aIndex >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }

      digit = base64.decode(aStr.charCodeAt(aIndex++));
      if (digit === -1) {
        throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
      }

      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);

    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
  };

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/base64', ['require', 'exports', 'module' , ], function(require, exports, module) {

  var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  /**
   * Encode an integer in the range of 0 to 63 to a single base 64 digit.
   */
  exports.encode = function (number) {
    if (0 <= number && number < intToCharMap.length) {
      return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + aNumber);
  };

  /**
   * Decode a single base 64 character code digit to an integer. Returns -1 on
   * failure.
   */
  exports.decode = function (charCode) {
    var bigA = 65;     // 'A'
    var bigZ = 90;     // 'Z'

    var littleA = 97;  // 'a'
    var littleZ = 122; // 'z'

    var zero = 48;     // '0'
    var nine = 57;     // '9'

    var plus = 43;     // '+'
    var slash = 47;    // '/'

    var littleOffset = 26;
    var numberOffset = 52;

    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) {
      return (charCode - bigA);
    }

    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) {
      return (charCode - littleA + littleOffset);
    }

    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) {
      return (charCode - zero + numberOffset);
    }

    // 62: +
    if (charCode == plus) {
      return 62;
    }

    // 63: /
    if (charCode == slash) {
      return 63;
    }

    // Invalid base64 digit.
    return -1;
  };

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/util', ['require', 'exports', 'module' , ], function(require, exports, module) {

  /**
   * This is a helper function for getting values from parameter/options
   * objects.
   *
   * @param args The object we are extracting values from
   * @param name The name of the property we are getting.
   * @param defaultValue An optional value to return if the property is missing
   * from the object. If this is not specified and the property is missing, an
   * error will be thrown.
   */
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;

  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;

  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;

  function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ':';
    }
    url += '//';
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + '@';
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;

  /**
   * Normalizes a path, or the path portion of a URL:
   *
   * - Replaces consequtive slashes with one slash.
   * - Removes unnecessary '.' parts.
   * - Removes unnecessary '<dir>/..' parts.
   *
   * Based on code in the Node.js 'path' core module.
   *
   * @param aPath The path or url to normalize.
   */
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);

    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === '.') {
        parts.splice(i, 1);
      } else if (part === '..') {
        up++;
      } else if (up > 0) {
        if (part === '') {
          // The first part is blank if the path is absolute. Trying to go
          // above the root is a no-op. Therefore we can remove all '..' parts
          // directly after the root.
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join('/');

    if (path === '') {
      path = isAbsolute ? '/' : '.';
    }

    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports.normalize = normalize;

  /**
   * Joins two paths/URLs.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be joined with the root.
   *
   * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
   *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
   *   first.
   * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
   *   is updated with the result and aRoot is returned. Otherwise the result
   *   is returned.
   *   - If aPath is absolute, the result is aPath.
   *   - Otherwise the two paths are joined with a slash.
   * - Joining for example 'http://' and 'www.example.com' is also supported.
   */
  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || '/';
    }

    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }

    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }

    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }

    var joined = aPath.charAt(0) === '/'
      ? aPath
      : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join;

  exports.isAbsolute = function (aPath) {
    return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
  };

  /**
   * Make a path relative to a URL or another path.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be made relative to aRoot.
   */
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }

    aRoot = aRoot.replace(/\/$/, '');

    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while (aPath.indexOf(aRoot + '/') !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }

      // If the only part of the root that is left is the scheme (i.e. http://,
      // file:///, etc.), one or more slashes (/), or simply nothing at all, we
      // have exhausted all components, so the path is not relative to the root.
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }

      ++level;
    }

    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative;

  /**
   * Because behavior goes wacky when you set `__proto__` on objects, we
   * have to prefix all the strings in our set with an arbitrary character.
   *
   * See https://github.com/mozilla/source-map/pull/31 and
   * https://github.com/mozilla/source-map/issues/30
   *
   * @param String aStr
   */
  function toSetString(aStr) {
    return '$' + aStr;
  }
  exports.toSetString = toSetString;

  function fromSetString(aStr) {
    return aStr.substr(1);
  }
  exports.fromSetString = fromSetString;

  /**
   * Comparator between two mappings where the original positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same original source/line/column, but different generated
   * line and column the same. Useful when searching for a mapping with a
   * stubbed out mapping.
   */
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }

    return mappingA.name - mappingB.name;
  };
  exports.compareByOriginalPositions = compareByOriginalPositions;

  /**
   * Comparator between two mappings with deflated source and name indices where
   * the generated positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same generated line and column, but different
   * source/name/original line and column the same. Useful when searching for a
   * mapping with a stubbed out mapping.
   */
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }

    cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }

    return mappingA.name - mappingB.name;
  };
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }

    if (aStr1 > aStr2) {
      return 1;
    }

    return -1;
  }

  /**
   * Comparator between two mappings with inflated source and name strings where
   * the generated positions are compared.
   */
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }

    return strcmp(mappingA.name, mappingB.name);
  };
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/array-set', ['require', 'exports', 'module' ,  'source-map/util'], function(require, exports, module) {

  var util = require('./util');

  /**
   * A data structure which is a combination of an array and a set. Adding a new
   * member is O(1), testing for membership is O(1), and finding the index of an
   * element is O(1). Removing elements from the set is not supported. Only
   * strings are supported for membership.
   */
  function ArraySet() {
    this._array = [];
    this._set = {};
  }

  /**
   * Static method for creating ArraySet instances from an existing array.
   */
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };

  /**
   * Return how many unique items are in this ArraySet. If duplicates have been
   * added, than those do not count towards the size.
   *
   * @returns Number
   */
  ArraySet.prototype.size = function ArraySet_size() {
    return Object.getOwnPropertyNames(this._set).length;
  };

  /**
   * Add the given string to this set.
   *
   * @param String aStr
   */
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var isDuplicate = this.has(aStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      this._set[util.toSetString(aStr)] = idx;
    }
  };

  /**
   * Is the given string a member of this set?
   *
   * @param String aStr
   */
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    return Object.prototype.hasOwnProperty.call(this._set,
                                                util.toSetString(aStr));
  };

  /**
   * What is the index of the given string in the array?
   *
   * @param String aStr
   */
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (this.has(aStr)) {
      return this._set[util.toSetString(aStr)];
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };

  /**
   * What is the element at the given index?
   *
   * @param Number aIdx
   */
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error('No element indexed by ' + aIdx);
  };

  /**
   * Returns the array representation of this set (which has the proper indices
   * indicated by indexOf). Note that this is a copy of the internal array used
   * for storing the members so that no one can mess with internal state.
   */
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };

  exports.ArraySet = ArraySet;

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/mapping-list', ['require', 'exports', 'module' ,  'source-map/util'], function(require, exports, module) {

  var util = require('./util');

  /**
   * Determine whether mappingB is after mappingA with respect to generated
   * position.
   */
  function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA ||
           util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
  }

  /**
   * A data structure to provide a sorted view of accumulated mappings in a
   * performance conscious manner. It trades a neglibable overhead in general
   * case for a large speedup in case of mappings being added in order.
   */
  function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {generatedLine: -1, generatedColumn: 0};
  }

  /**
   * Iterate through internal items. This method takes the same arguments that
   * `Array.prototype.forEach` takes.
   *
   * NOTE: The order of the mappings is NOT guaranteed.
   */
  MappingList.prototype.unsortedForEach =
    function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };

  /**
   * Add the given source mapping.
   *
   * @param Object aMapping
   */
  MappingList.prototype.add = function MappingList_add(aMapping) {
    var mapping;
    if (generatedPositionAfter(this._last, aMapping)) {
      this._last = aMapping;
      this._array.push(aMapping);
    } else {
      this._sorted = false;
      this._array.push(aMapping);
    }
  };

  /**
   * Returns the flat, sorted array of mappings. The mappings are sorted by
   * generated position.
   *
   * WARNING: This method returns internal data without copying, for
   * performance. The return value must NOT be mutated, and should be treated as
   * an immutable borrow. If you want to take ownership, you must make your own
   * copy.
   */
  MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
      this._array.sort(util.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };

  exports.MappingList = MappingList;

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/source-map-consumer', ['require', 'exports', 'module' ,  'source-map/util', 'source-map/binary-search', 'source-map/array-set', 'source-map/base64-vlq', 'source-map/quick-sort'], function(require, exports, module) {

  var util = require('./util');
  var binarySearch = require('./binary-search');
  var ArraySet = require('./array-set').ArraySet;
  var base64VLQ = require('./base64-vlq');
  var quickSort = require('./quick-sort').quickSort;

  function SourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    return sourceMap.sections != null
      ? new IndexedSourceMapConsumer(sourceMap)
      : new BasicSourceMapConsumer(sourceMap);
  }

  SourceMapConsumer.fromSourceMap = function(aSourceMap) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
  }

  /**
   * The version of the source mapping spec that we are consuming.
   */
  SourceMapConsumer.prototype._version = 3;

  // `__generatedMappings` and `__originalMappings` are arrays that hold the
  // parsed mapping coordinates from the source map's "mappings" attribute. They
  // are lazily instantiated, accessed via the `_generatedMappings` and
  // `_originalMappings` getters respectively, and we only parse the mappings
  // and create these arrays once queried for a source location. We jump through
  // these hoops because there can be many thousands of mappings, and parsing
  // them is expensive, so we only want to do it if we must.
  //
  // Each object in the arrays is of the form:
  //
  //     {
  //       generatedLine: The line number in the generated code,
  //       generatedColumn: The column number in the generated code,
  //       source: The path to the original source file that generated this
  //               chunk of code,
  //       originalLine: The line number in the original source that
  //                     corresponds to this chunk of generated code,
  //       originalColumn: The column number in the original source that
  //                       corresponds to this chunk of generated code,
  //       name: The name of the original symbol which generated this chunk of
  //             code.
  //     }
  //
  // All properties except for `generatedLine` and `generatedColumn` can be
  // `null`.
  //
  // `_generatedMappings` is ordered by the generated positions.
  //
  // `_originalMappings` is ordered by the original positions.

  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    get: function () {
      if (!this.__generatedMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__generatedMappings;
    }
  });

  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    get: function () {
      if (!this.__originalMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__originalMappings;
    }
  });

  SourceMapConsumer.prototype._charIsMappingSeparator =
    function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  SourceMapConsumer.prototype._parseMappings =
    function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };

  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;

  SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
  SourceMapConsumer.LEAST_UPPER_BOUND = 2;

  /**
   * Iterate over each mapping between an original source/line/column and a
   * generated line/column in this source map.
   *
   * @param Function aCallback
   *        The function that is called with each mapping.
   * @param Object aContext
   *        Optional. If specified, this object will be the value of `this` every
   *        time that `aCallback` is called.
   * @param aOrder
   *        Either `SourceMapConsumer.GENERATED_ORDER` or
   *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
   *        iterate over the mappings sorted by the generated file's line/column
   *        order or the original's source/line/column order, respectively. Defaults to
   *        `SourceMapConsumer.GENERATED_ORDER`.
   */
  SourceMapConsumer.prototype.eachMapping =
    function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

      var mappings;
      switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
      }

      var sourceRoot = this.sourceRoot;
      mappings.map(function (mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        if (source != null && sourceRoot != null) {
          source = util.join(sourceRoot, source);
        }
        return {
          source: source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };

  /**
   * Returns all generated line and column information for the original source,
   * line, and column provided. If no column is provided, returns all mappings
   * corresponding to a either the line we are searching for or the next
   * closest line that has any mappings. Otherwise, returns all mappings
   * corresponding to the given line and either the column we are searching for
   * or the next closest column that has any offsets.
   *
   * The only argument is an object with the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: Optional. the column number in the original source.
   *
   * and an array of objects is returned, each with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  SourceMapConsumer.prototype.allGeneratedPositionsFor =
    function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, 'line');

      // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
      // returns the index of the closest mapping less than the needle. By
      // setting needle.originalColumn to 0, we thus find the last mapping for
      // the given line, provided such a mapping exists.
      var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: line,
        originalColumn: util.getArg(aArgs, 'column', 0)
      };

      if (this.sourceRoot != null) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }
      if (!this._sources.has(needle.source)) {
        return [];
      }
      needle.source = this._sources.indexOf(needle.source);

      var mappings = [];

      var index = this._findMapping(needle,
                                    this._originalMappings,
                                    "originalLine",
                                    "originalColumn",
                                    util.compareByOriginalPositions,
                                    binarySearch.LEAST_UPPER_BOUND);
      if (index >= 0) {
        var mapping = this._originalMappings[index];

        if (aArgs.column === undefined) {
          var originalLine = mapping.originalLine;

          // Iterate until either we run out of mappings, or we run into
          // a mapping for a different line than the one we found. Since
          // mappings are sorted, this is guaranteed to find all mappings for
          // the line we found.
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, 'generatedLine', null),
              column: util.getArg(mapping, 'generatedColumn', null),
              lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            });

            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;

          // Iterate until either we run out of mappings, or we run into
          // a mapping for a different line than the one we were searching for.
          // Since mappings are sorted, this is guaranteed to find all mappings for
          // the line we are searching for.
          while (mapping &&
                 mapping.originalLine === line &&
                 mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, 'generatedLine', null),
              column: util.getArg(mapping, 'generatedColumn', null),
              lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            });

            mapping = this._originalMappings[++index];
          }
        }
      }

      return mappings;
    };

  exports.SourceMapConsumer = SourceMapConsumer;

  /**
   * A BasicSourceMapConsumer instance represents a parsed source map which we can
   * query for information about the original file positions by giving it a file
   * position in the generated source.
   *
   * The only parameter is the raw source map (either as a JSON string, or
   * already parsed to an object). According to the spec, source maps have the
   * following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - sources: An array of URLs to the original source files.
   *   - names: An array of identifiers which can be referrenced by individual mappings.
   *   - sourceRoot: Optional. The URL root from which all sources are relative.
   *   - sourcesContent: Optional. An array of contents of the original source files.
   *   - mappings: A string of base64 VLQs which contain the actual mappings.
   *   - file: Optional. The generated file this source map is associated with.
   *
   * Here is an example source map, taken from the source map spec[0]:
   *
   *     {
   *       version : 3,
   *       file: "out.js",
   *       sourceRoot : "",
   *       sources: ["foo.js", "bar.js"],
   *       names: ["src", "maps", "are", "fun"],
   *       mappings: "AA,AB;;ABCDE;"
   *     }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
   */
  function BasicSourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);

    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) {
      throw new Error('Unsupported version: ' + version);
    }

    sources = sources
      // Some source maps produce relative source paths like "./foo.js" instead of
      // "foo.js".  Normalize these first so that future comparisons will succeed.
      // See bugzil.la/1090768.
      .map(util.normalize)
      // Always ensure that absolute sources are internally stored relative to
      // the source root, if the source root is absolute. Not doing this would
      // be particularly problematic when the source root is a prefix of the
      // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
      .map(function (source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
          ? util.relative(sourceRoot, source)
          : source;
      });

    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names, true);
    this._sources = ArraySet.fromArray(sources, true);

    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this.file = file;
  }

  BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

  /**
   * Create a BasicSourceMapConsumer from a SourceMapGenerator.
   *
   * @param SourceMapGenerator aSourceMap
   *        The source map that will be consumed.
   * @returns BasicSourceMapConsumer
   */
  BasicSourceMapConsumer.fromSourceMap =
    function SourceMapConsumer_fromSourceMap(aSourceMap) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);

      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                              smc.sourceRoot);
      smc.file = aSourceMap._file;

      // Because we are modifying the entries (by converting string sources and
      // names to indices into the sources and names ArraySets), we have to make
      // a copy of the entry or else bad things happen. Shared mutable state
      // strikes again! See github issue #191.

      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];

      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;

        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;

          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }

          destOriginalMappings.push(destMapping);
        }

        destGeneratedMappings.push(destMapping);
      }

      quickSort(smc.__originalMappings, util.compareByOriginalPositions);

      return smc;
    };

  /**
   * The version of the source mapping spec that we are consuming.
   */
  BasicSourceMapConsumer.prototype._version = 3;

  /**
   * The list of original sources.
   */
  Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
    get: function () {
      return this._sources.toArray().map(function (s) {
        return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
      }, this);
    }
  });

  /**
   * Provide the JIT with a nice shape / hidden class.
   */
  function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
  }

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  BasicSourceMapConsumer.prototype._parseMappings =
    function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;

      while (index < length) {
        if (aStr.charAt(index) === ';') {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
        }
        else if (aStr.charAt(index) === ',') {
          index++;
        }
        else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;

          // Because each offset is encoded relative to the previous one,
          // many segments often have the same encoding. We can exploit this
          // fact by caching the parsed variable length fields of each segment,
          // allowing us to avoid a second parse if we encounter the same
          // segment again.
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);

          segment = cachedSegments[str];
          if (segment) {
            index += str.length;
          } else {
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }

            if (segment.length === 2) {
              throw new Error('Found a source, but no line and column');
            }

            if (segment.length === 3) {
              throw new Error('Found a source and line, but no column');
            }

            cachedSegments[str] = segment;
          }

          // Generated column.
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;

          if (segment.length > 1) {
            // Original source.
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];

            // Original line.
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            // Lines are stored 0-based
            mapping.originalLine += 1;

            // Original column.
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;

            if (segment.length > 4) {
              // Original name.
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }

          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === 'number') {
            originalMappings.push(mapping);
          }
        }
      }

      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;

      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };

  /**
   * Find the mapping that best matches the hypothetical "needle" mapping that
   * we are searching for in the given "haystack" of mappings.
   */
  BasicSourceMapConsumer.prototype._findMapping =
    function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                           aColumnName, aComparator, aBias) {
      // To return the position we are searching for, we must first find the
      // mapping for the given position and then return the opposite position it
      // points to. Because the mappings are sorted, we can use binary search to
      // find the best mapping.

      if (aNeedle[aLineName] <= 0) {
        throw new TypeError('Line must be greater than or equal to 1, got '
                            + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError('Column must be greater than or equal to 0, got '
                            + aNeedle[aColumnName]);
      }

      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };

  /**
   * Compute the last column for each generated mapping. The last column is
   * inclusive.
   */
  BasicSourceMapConsumer.prototype.computeColumnSpans =
    function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];

        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];

          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }

        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
      }
    };

  /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
   *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
  BasicSourceMapConsumer.prototype.originalPositionFor =
    function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };

      var index = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util.compareByGeneratedPositionsDeflated,
        util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
      );

      if (index >= 0) {
        var mapping = this._generatedMappings[index];

        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, 'source', null);
          if (source !== null) {
            source = this._sources.at(source);
            if (this.sourceRoot != null) {
              source = util.join(this.sourceRoot, source);
            }
          }
          var name = util.getArg(mapping, 'name', null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source: source,
            line: util.getArg(mapping, 'originalLine', null),
            column: util.getArg(mapping, 'originalColumn', null),
            name: name
          };
        }
      }

      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };

  /**
   * Return true if we have the source content for every source in the source
   * map, false otherwise.
   */
  BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
    function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() &&
        !this.sourcesContent.some(function (sc) { return sc == null; });
    };

  /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * availible.
   */
  BasicSourceMapConsumer.prototype.sourceContentFor =
    function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }

      if (this.sourceRoot != null) {
        aSource = util.relative(this.sourceRoot, aSource);
      }

      if (this._sources.has(aSource)) {
        return this.sourcesContent[this._sources.indexOf(aSource)];
      }

      var url;
      if (this.sourceRoot != null
          && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
        if (url.scheme == "file"
            && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
        }

        if ((!url.path || url.path == "/")
            && this._sources.has("/" + aSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + aSource)];
        }
      }

      // This function is used recursively from
      // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
      // don't want to throw if we can't find the source - we just want to
      // return null, so we provide a flag to exit gracefully.
      if (nullOnMissing) {
        return null;
      }
      else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };

  /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
   *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  BasicSourceMapConsumer.prototype.generatedPositionFor =
    function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, 'source');
      if (this.sourceRoot != null) {
        source = util.relative(this.sourceRoot, source);
      }
      if (!this._sources.has(source)) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      source = this._sources.indexOf(source);

      var needle = {
        source: source,
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
      };

      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
      );

      if (index >= 0) {
        var mapping = this._originalMappings[index];

        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          };
        }
      }

      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };

  exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

  /**
   * An IndexedSourceMapConsumer instance represents a parsed source map which
   * we can query for information. It differs from BasicSourceMapConsumer in
   * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
   * input.
   *
   * The only parameter is a raw source map (either as a JSON string, or already
   * parsed to an object). According to the spec for indexed source maps, they
   * have the following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - file: Optional. The generated file this source map is associated with.
   *   - sections: A list of section definitions.
   *
   * Each value under the "sections" field has two fields:
   *   - offset: The offset into the original specified at which this section
   *       begins to apply, defined as an object with a "line" and "column"
   *       field.
   *   - map: A source map definition. This source map could also be indexed,
   *       but doesn't have to be.
   *
   * Instead of the "map" field, it's also possible to have a "url" field
   * specifying a URL to retrieve a source map from, but that's currently
   * unsupported.
   *
   * Here's an example source map, taken from the source map spec[0], but
   * modified to omit a section which uses the "url" field.
   *
   *  {
   *    version : 3,
   *    file: "app.js",
   *    sections: [{
   *      offset: {line:100, column:10},
   *      map: {
   *        version : 3,
   *        file: "section.js",
   *        sources: ["foo.js", "bar.js"],
   *        names: ["src", "maps", "are", "fun"],
   *        mappings: "AAAA,E;;ABCDE;"
   *      }
   *    }],
   *  }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
   */
  function IndexedSourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    var version = util.getArg(sourceMap, 'version');
    var sections = util.getArg(sourceMap, 'sections');

    if (version != this._version) {
      throw new Error('Unsupported version: ' + version);
    }

    this._sources = new ArraySet();
    this._names = new ArraySet();

    var lastOffset = {
      line: -1,
      column: 0
    };
    this._sections = sections.map(function (s) {
      if (s.url) {
        // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error('Support for url field in sections not implemented.');
      }
      var offset = util.getArg(s, 'offset');
      var offsetLine = util.getArg(offset, 'line');
      var offsetColumn = util.getArg(offset, 'column');

      if (offsetLine < lastOffset.line ||
          (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
        throw new Error('Section offsets must be ordered and non-overlapping.');
      }
      lastOffset = offset;

      return {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: new SourceMapConsumer(util.getArg(s, 'map'))
      }
    });
  }

  IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

  /**
   * The version of the source mapping spec that we are consuming.
   */
  IndexedSourceMapConsumer.prototype._version = 3;

  /**
   * The list of original sources.
   */
  Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
    get: function () {
      var sources = [];
      for (var i = 0; i < this._sections.length; i++) {
        for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
          sources.push(this._sections[i].consumer.sources[j]);
        }
      };
      return sources;
    }
  });

  /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
  IndexedSourceMapConsumer.prototype.originalPositionFor =
    function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };

      // Find the section containing the generated position we're trying to map
      // to an original position.
      var sectionIndex = binarySearch.search(needle, this._sections,
        function(needle, section) {
          var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }

          return (needle.generatedColumn -
                  section.generatedOffset.generatedColumn);
        });
      var section = this._sections[sectionIndex];

      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }

      return section.consumer.originalPositionFor({
        line: needle.generatedLine -
          (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn -
          (section.generatedOffset.generatedLine === needle.generatedLine
           ? section.generatedOffset.generatedColumn - 1
           : 0),
        bias: aArgs.bias
      });
    };

  /**
   * Return true if we have the source content for every source in the source
   * map, false otherwise.
   */
  IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
    function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function (s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };

  /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * available.
   */
  IndexedSourceMapConsumer.prototype.sourceContentFor =
    function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];

        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      }
      else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };

  /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  IndexedSourceMapConsumer.prototype.generatedPositionFor =
    function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];

        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line +
              (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column +
              (section.generatedOffset.generatedLine === generatedPosition.line
               ? section.generatedOffset.generatedColumn - 1
               : 0)
          };
          return ret;
        }
      }

      return {
        line: null,
        column: null
      };
    };

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  IndexedSourceMapConsumer.prototype._parseMappings =
    function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[i];

          var source = section.consumer._sources.at(mapping.source);
          if (section.consumer.sourceRoot !== null) {
            source = util.join(section.consumer.sourceRoot, source);
          }
          this._sources.add(source);
          source = this._sources.indexOf(source);

          var name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);

          // The mappings coming from the consumer for the section have
          // generated positions relative to the start of the section, so we
          // need to offset them to be relative to the start of the concatenated
          // generated file.
          var adjustedMapping = {
            source: source,
            generatedLine: mapping.generatedLine +
              (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.column +
              (section.generatedOffset.generatedLine === mapping.generatedLine)
              ? section.generatedOffset.generatedColumn - 1
              : 0,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: name
          };

          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === 'number') {
            this.__originalMappings.push(adjustedMapping);
          }
        };
      };

      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };

  exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/binary-search', ['require', 'exports', 'module' , ], function(require, exports, module) {

  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;

  /**
   * Recursive implementation of binary search.
   *
   * @param aLow Indices here and lower do not contain the needle.
   * @param aHigh Indices here and higher do not contain the needle.
   * @param aNeedle The element being searched for.
   * @param aHaystack The non-empty array being searched.
   * @param aCompare Function which takes two elements and returns -1, 0, or 1.
   * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
   *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   */
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      // Found the element we are looking for.
      return mid;
    }
    else if (cmp > 0) {
      // Our needle is greater than aHaystack[mid].
      if (aHigh - mid > 1) {
        // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }

      // The exact needle element was not found in this haystack. Determine if
      // we are in termination case (3) or (2) and return the appropriate thing.
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    }
    else {
      // Our needle is less than aHaystack[mid].
      if (mid - aLow > 1) {
        // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }

      // we are in termination case (3) or (2) and return the appropriate thing.
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }

  /**
   * This is an implementation of binary search which will always try and return
   * the index of the closest element if there is no exact hit. This is because
   * mappings between original and generated line/col pairs are single points,
   * and there is an implicit region between each of them, so a miss just means
   * that you aren't on the very start of a region.
   *
   * @param aNeedle The element you are looking for.
   * @param aHaystack The array that is being searched.
   * @param aCompare A function which takes the needle and an element in the
   *     array and returns -1, 0, or 1 depending on whether the needle is less
   *     than, equal to, or greater than the element, respectively.
   * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
   *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
   */
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }

    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                                aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) {
      return -1;
    }

    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }

    return index;
  };

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/quick-sort', ['require', 'exports', 'module' , ], function(require, exports, module) {

  // It turns out that some (most?) JavaScript engines don't self-host
  // `Array.prototype.sort`. This makes sense because C++ will likely remain
  // faster than JS when doing raw CPU-intensive sorting. However, when using a
  // custom comparator function, calling back and forth between the VM's C++ and
  // JIT'd JS is rather slow *and* loses JIT type information, resulting in
  // worse generated code for the comparator function than would be optimal. In
  // fact, when sorting with a comparator, these costs outweigh the benefits of
  // sorting in C++. By using our own JS-implemented Quick Sort (below), we get
  // a ~3500ms mean speed-up in `bench/bench.html`.

  /**
   * Swap the elements indexed by `x` and `y` in the array `ary`.
   *
   * @param {Array} ary
   *        The array.
   * @param {Number} x
   *        The index of the first item.
   * @param {Number} y
   *        The index of the second item.
   */
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }

  /**
   * Returns a random integer within the range `low .. high` inclusive.
   *
   * @param {Number} low
   *        The lower bound on the range.
   * @param {Number} high
   *        The upper bound on the range.
   */
  function randomIntInRange(low, high) {
    return Math.round(low + (Math.random() * (high - low)));
  }

  /**
   * The Quick Sort algorithm.
   *
   * @param {Array} ary
   *        An array to sort.
   * @param {function} comparator
   *        Function to use to compare two items.
   * @param {Number} p
   *        Start index of the array
   * @param {Number} r
   *        End index of the array
   */
  function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.

    if (p < r) {
      // (1) Partitioning.
      //
      // The partitioning chooses a pivot between `p` and `r` and moves all
      // elements that are less than or equal to the pivot to the before it, and
      // all the elements that are greater than it after it. The effect is that
      // once partition is done, the pivot is in the exact place it will be when
      // the array is put in sorted order, and it will not need to be moved
      // again. This runs in O(n) time.

      // Always choose a random pivot so that an input array which is reverse
      // sorted does not cause O(n^2) running time.
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;

      swap(ary, pivotIndex, r);
      var pivot = ary[r];

      // Immediately after `j` is incremented in this loop, the following hold
      // true:
      //
      //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
      //
      //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
      for (var j = p; j < r; j++) {
        if (comparator(ary[j], pivot) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }

      swap(ary, i + 1, j);
      var q = i + 1;

      // (2) Recurse on each half.

      doQuickSort(ary, comparator, p, q - 1);
      doQuickSort(ary, comparator, q + 1, r);
    }
  }

  /**
   * Sort the given array in-place with the given comparator function.
   *
   * @param {Array} ary
   *        An array to sort.
   * @param {function} comparator
   *        Function to use to compare two items.
   */
  exports.quickSort = function (ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
  };

});
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define('source-map/source-node', ['require', 'exports', 'module' ,  'source-map/source-map-generator', 'source-map/util'], function(require, exports, module) {

  var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
  var util = require('./util');

  // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
  // operating systems these days (capturing the result).
  var REGEX_NEWLINE = /(\r?\n)/;

  // Newline character code for charCodeAt() comparisons
  var NEWLINE_CODE = 10;

  // Private symbol for identifying `SourceNode`s when multiple versions of
  // the source-map library are loaded. This MUST NOT CHANGE across
  // versions!
  var isSourceNode = "$$$isSourceNode$$$";

  /**
   * SourceNodes provide a way to abstract over interpolating/concatenating
   * snippets of generated JavaScript source code while maintaining the line and
   * column information associated with the original source code.
   *
   * @param aLine The original line number.
   * @param aColumn The original column number.
   * @param aSource The original source's filename.
   * @param aChunks Optional. An array of strings which are snippets of
   *        generated JS, or other SourceNodes.
   * @param aName The original identifier.
   */
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
  }

  /**
   * Creates a SourceNode from generated code and a SourceMapConsumer.
   *
   * @param aGeneratedCode The generated code
   * @param aSourceMapConsumer The SourceMap for the generated code
   * @param aRelativePath Optional. The path that relative sources in the
   *        SourceMapConsumer should be relative to.
   */
  SourceNode.fromStringWithSourceMap =
    function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      // The SourceNode we want to fill with the generated code
      // and the SourceMap
      var node = new SourceNode();

      // All even indices of this array are one line of the generated code,
      // while all odd indices are the newlines between two adjacent lines
      // (since `REGEX_NEWLINE` captures its match).
      // Processed fragments are removed from this array, by calling `shiftNextLine`.
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var shiftNextLine = function() {
        var lineContents = remainingLines.shift();
        // The last line of a file might not have a newline.
        var newLine = remainingLines.shift() || "";
        return lineContents + newLine;
      };

      // We need to remember the position of "remainingLines"
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;

      // The generate SourceNodes we need a code range.
      // To extract it current and last mapping is used.
      // Here we store the last mapping.
      var lastMapping = null;

      aSourceMapConsumer.eachMapping(function (mapping) {
        if (lastMapping !== null) {
          // We add the code from "lastMapping" to "mapping":
          // First check if there is a new line in between.
          if (lastGeneratedLine < mapping.generatedLine) {
            var code = "";
            // Associate first line with "lastMapping"
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
            // The remaining code is added without mapping
          } else {
            // There is no new line in between.
            // Associate the code between "lastGeneratedColumn" and
            // "mapping.generatedColumn" with "lastMapping"
            var nextLine = remainingLines[0];
            var code = nextLine.substr(0, mapping.generatedColumn -
                                          lastGeneratedColumn);
            remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                                lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            // No more remaining code, continue
            lastMapping = mapping;
            return;
          }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[0];
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[0] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      // We have processed all mappings.
      if (remainingLines.length > 0) {
        if (lastMapping) {
          // Associate the remaining code in the current line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        // and add the remaining lines without any mapping
        node.add(remainingLines.join(""));
      }

      // Copy sourcesContent into SourceNode
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });

      return node;

      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
          node.add(code);
        } else {
          var source = aRelativePath
            ? util.join(aRelativePath, mapping.source)
            : mapping.source;
          node.add(new SourceNode(mapping.originalLine,
                                  mapping.originalColumn,
                                  source,
                                  code,
                                  mapping.name));
        }
      }
    };

  /**
   * Add a chunk of generated JS to this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function (chunk) {
        this.add(chunk);
      }, this);
    }
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Add a chunk of generated JS to the beginning of this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length-1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    }
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Walk over the tree of JS snippets in this node and its children. The
   * walking function is called once for each snippet of JS and is passed that
   * snippet and the its original associated source's line/column location.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk[isSourceNode]) {
        chunk.walk(aFn);
      }
      else {
        if (chunk !== '') {
          aFn(chunk, { source: this.source,
                       line: this.line,
                       column: this.column,
                       name: this.name });
        }
      }
    }
  };

  /**
   * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
   * each of `this.children`.
   *
   * @param aSep The separator.
   */
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len-1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };

  /**
   * Call String.prototype.replace on the very right-most source snippet. Useful
   * for trimming whitespace from the end of a source node, etc.
   *
   * @param aPattern The pattern to replace.
   * @param aReplacement The thing to replace the pattern with.
   */
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
      lastChild.replaceRight(aPattern, aReplacement);
    }
    else if (typeof lastChild === 'string') {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    }
    else {
      this.children.push(''.replace(aPattern, aReplacement));
    }
    return this;
  };

  /**
   * Set the source content for a source file. This will be added to the SourceMapGenerator
   * in the sourcesContent field.
   *
   * @param aSourceFile The filename of the source file
   * @param aSourceContent The content of the source file
   */
  SourceNode.prototype.setSourceContent =
    function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };

  /**
   * Walk over the tree of SourceNodes. The walking function is called for each
   * source file content and is passed the filename and source content.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walkSourceContents =
    function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }

      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };

  /**
   * Return the string representation of this source node. Walks over the tree
   * and concatenates all the various snippets together to one string.
   */
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function (chunk) {
      str += chunk;
    });
    return str;
  };

  /**
   * Returns the string representation of this source node along with a source
   * map.
   */
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function (chunk, original) {
      generated.code += chunk;
      if (original.source !== null
          && original.line !== null
          && original.column !== null) {
        if(lastOriginalSource !== original.source
           || lastOriginalLine !== original.line
           || lastOriginalColumn !== original.column
           || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      for (var idx = 0, length = chunk.length; idx < length; idx++) {
        if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
          generated.line++;
          generated.column = 0;
          // Mappings end at eol
          if (idx + 1 === length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      }
    });
    this.walkSourceContents(function (sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });

    return { code: generated.code, map: map };
  };

  exports.SourceNode = SourceNode;

});
/* -*- Mode: js; js-indent-level: 2; -*- */
///////////////////////////////////////////////////////////////////////////////

/*** COMMENTED BY TEDDY ***/
// this.define = define;
// this.require = require;
/**************************/

this.sourceMap = {
  SourceMapConsumer: require('source-map/source-map-consumer').SourceMapConsumer,
  SourceMapGenerator: require('source-map/source-map-generator').SourceMapGenerator,
  SourceNode: require('source-map/source-node').SourceNode
};
if (typeof module === "object" && module && module.exports) {
  module.exports = this.sourceMap;
}

}());
/* eslint camelcase:0 */
/**
 This is a wrapper for `ember-debug.js`
 Wraps the script in a function,
 and ensures that the script is executed
 only after the dom is ready
 and the application has initialized.

 Also responsible for sending the first tree.
 **/
/*eslint prefer-spread: 0 */
/* globals Ember, adapter, env, requireModule */
var currentAdapter = 'basic';
if (typeof adapter !== 'undefined') {
  currentAdapter = adapter;
}
var currentEnv = 'production';
if (typeof env !== 'undefined') {
  currentEnv = env;
}

// @formatter:off
var EMBER_VERSIONS_SUPPORTED = ['2.7.0','3.4.0'];
// @formatter:on

(function(adapter) {
  var onReady = requireModule('ember-debug/utils/on-ready').onReady;
  var compareVersion = requireModule('ember-debug/utils/version').compareVersion;

  onEmberReady(function() {
    // global to prevent injection
    if (window.NO_EMBER_DEBUG) {
      return;
    }

    if (!versionTest(Ember.VERSION, EMBER_VERSIONS_SUPPORTED)) {
      // Wrong inspector version. Redirect to the correct version.
      sendVersionMiss();
      return;
    }
    // prevent from injecting twice
    if (!Ember.EmberInspectorDebugger) {
      // Make sure we only work for the supported version
      define('ember-debug/config', function() {
        return {
          default: {
            environment: currentEnv
          }
        };
      });
      window.EmberInspector = Ember.EmberInspectorDebugger = requireModule('ember-debug/main')['default'];
      Ember.EmberInspectorDebugger.Adapter = requireModule('ember-debug/adapters/' + adapter)['default'];

      onApplicationStart(function appStarted(instance) {
        let app = instance.application;
        if (!('__inspector__booted' in app)) {
          // Watch for app reset/destroy
          app.reopen({
            reset: function() {
              this.__inspector__booted = false;
              this._super.apply(this, arguments);
            }
          });
        }

        if (instance && !('__inspector__booted' in instance)) {
          instance.reopen({
            // Clean up on instance destruction
            willDestroy() {
              if (Ember.EmberInspectorDebugger.get('owner') === instance) {
                Ember.EmberInspectorDebugger.destroyContainer();
                Ember.EmberInspectorDebugger.clear();
              }
              return this._super.apply(this, arguments);
            }
          });

          if (!Ember.EmberInspectorDebugger._application) {
            bootEmberInspector(instance);
          }
        }
      });
    }
  });

  function bootEmberInspector(appInstance) {
    appInstance.application.__inspector__booted = true;
    appInstance.__inspector__booted = true;

    // Boot the inspector (or re-boot if already booted, for example in tests)
    Ember.EmberInspectorDebugger.set('_application', appInstance.application);
    Ember.EmberInspectorDebugger.set('owner', appInstance);
    Ember.EmberInspectorDebugger.start(true);
  }

  function onEmberReady(callback) {
    var triggered = false;
    var triggerOnce = function(string) {
      if (triggered) {
        return;
      }
      if (!window.Ember) {
        return;
      }
      // `Ember.Application` load hook triggers before all of Ember is ready.
      // In this case we ignore and wait for the `Ember` load hook.
      if (!window.Ember.RSVP) {
        return;
      }
      triggered = true;
      callback();
    };

    // Newest Ember versions >= 1.10
    window.addEventListener('Ember', triggerOnce, false);
    // Old Ember versions
    window.addEventListener('Ember.Application', function() {
      if (window.Ember && window.Ember.VERSION && compareVersion(window.Ember.VERSION, '1.10.0') === 1) {
        // Ember >= 1.10 should be handled by `Ember` load hook instead.
        return;
      }
      triggerOnce();
    }, false);
    // Oldest Ember versions or if this was injected after Ember has loaded.
    onReady(triggerOnce);
  }

  // There's probably a better way
  // to determine when the application starts
  // but this definitely works
  function onApplicationStart(callback) {
    if (typeof Ember === 'undefined') {
      return;
    }

    const adapterInstance = requireModule('ember-debug/adapters/' + currentAdapter)['default'].create();

    adapterInstance.onMessageReceived(function(message) {
      if (message.type === 'app-picker-loaded') {
        sendApps(adapterInstance, getApplications());
      }

      if (message.type === 'app-selected') {
        const appInstance = getApplications().find(app => Ember.guidFor(app) === message.applicationId);

        if (appInstance && appInstance.__deprecatedInstance__) {
          bootEmberInspector(appInstance.__deprecatedInstance__);
        }
      }
    });

    var apps = getApplications();

    sendApps(adapterInstance, apps);

    var app;
    for (var i = 0, l = apps.length; i < l; i++) {
      app = apps[i];
      // We check for the existance of an application instance because
      // in Ember > 3 tests don't destroy the app when they're done but the app has no booted instances.
      if (app._readinessDeferrals === 0) {
        let instance = app.__deprecatedInstance__ || (app._applicationInstances && app._applicationInstances[0]);
        if (instance) {
          // App started
          setupInstanceInitializer(app, callback);
          callback(instance);
          break;
        }
      }
    }
    Ember.Application.initializer({
      name: 'ember-inspector-booted',
      initialize: function(app) {
        setupInstanceInitializer(app, callback);
      }
    });
  }

  function setupInstanceInitializer(app, callback) {
    if (!app.__inspector__setup) {
      app.__inspector__setup = true;

      // We include the app's guid in the initializer name because in Ember versions < 3
      // registering an instance initializer with the same name, even if on a different app,
      // triggers an error because instance initializers seem to be global instead of per app.
      app.instanceInitializer({
        name: 'ember-inspector-app-instance-booted-' + Ember.guidFor(app),
        initialize: function(instance) {
          callback(instance);
        }
      });
    }
  }

  /**
   * Get all the Ember.Application instances from Ember.Namespace.NAMESPACES
   * and add our own applicationId and applicationName to them
   * @return {*}
   */
  function getApplications() {
    var namespaces = Ember.A(Ember.Namespace.NAMESPACES);

    var apps = namespaces.filter(function(namespace) {
      return namespace instanceof Ember.Application;
    });

    return apps.map(function(app) {
      // Add applicationId and applicationName to the app
      var applicationId = Ember.guidFor(app);
      var applicationName = app.name || app.modulePrefix || `(unknown app - ${applicationId})`;

      Object.assign(app, {
        applicationId,
        applicationName
      });

      return app;
    });
  }

  /**
   * This function is called if the app's Ember version
   * is not supported by this version of the inspector.
   *
   * It sends a message to the inspector app to redirect
   * to an inspector version that supports this Ember version.
   */
  function sendVersionMiss() {
    var adapter = requireModule('ember-debug/adapters/' + currentAdapter)['default'].create();
    adapter.onMessageReceived(function(message) {
      if (message.type === 'check-version') {
        sendVersionMismatch();
      }
    });
    sendVersionMismatch();

    function sendVersionMismatch() {
      adapter.sendMessage({
        name: 'version-mismatch',
        version: Ember.VERSION,
        from: 'inspectedWindow'
      });
    }
  }

  function sendApps(adapter, apps) {
    const serializedApps = apps.map(app => {
      return {
        applicationName: app.applicationName,
        applicationId: app.applicationId
      }
    });

    adapter.sendMessage({
      type: 'apps-loaded',
      apps: serializedApps,
      from: 'inspectedWindow'
    });
  }

  /**
   * Checks if a version is between two different versions.
   * version should be >= left side, < right side
   *
   * @param {String} version1
   * @param {String} version2
   * @return {Boolean}
   */
  function versionTest(version, between) {
    var fromVersion = between[0];
    var toVersion = between[1];

    if (compareVersion(version, fromVersion) === -1) {
      return false;
    }
    return !toVersion || compareVersion(version, toVersion) === -1;
  }

}(currentAdapter));

}('chrome', 'production'));