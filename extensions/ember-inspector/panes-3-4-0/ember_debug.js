(function(adapter, env) {
let define = window.define,
  requireModule = window.requireModule;
if (typeof define !== 'function' || typeof requireModule !== 'function') {
  (function () {
    let registry = {},
      seen = {};

    define = function (name, deps, callback) {
      if (arguments.length < 3) {
        callback = deps;
        deps = [];
      }
      registry[name] = { deps, callback };
    };

    requireModule = function (name) {
      if (seen[name]) {
        return seen[name];
      }

      let mod = registry[name];
      if (!mod) {
        throw new Error(`Module: '${name}' not found.`);
      }

      seen[name] = {};

      let deps = mod.deps;
      let callback = mod.callback;
      let reified = [];
      let exports;

      for (let i = 0, l = deps.length; i < l; i++) {
        if (deps[i] === 'exports') {
          reified.push((exports = {}));
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

define("ember-debug/adapters/basic", ["exports", "ember-debug/utils/on-ready", "ember-debug/utils/ember/array", "ember-debug/utils/ember/object", "ember-debug/utils/rsvp"], function (exports, _onReady, _array, _object, _rsvp) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _object.default.extend({
    init() {
      (0, _rsvp.resolve)(this.connect(), 'ember-inspector').then(() => {
        this.onConnectionReady();
      }, null, 'ember-inspector');
      this._messageCallbacks = [];
    },

    /**
     * Uses the current build's config module to determine
     * the environment.
     *
     * @property environment
     * @type {String}
     */
    environment: (0, _object.computed)(function () {
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
    sendMessage() {},

    /**
      Register functions to be called
      when a message from EmberExtension is received
       @param {Function} callback
    */
    onMessageReceived(callback) {
      this._messageCallbacks.push(callback);
    },

    /**
      Inspect a specific DOM node. This usually
      means using the current environment's tools
      to inspect the node in the DOM.
       For example, in chrome, `inspect(node)`
      will open the Elements tab in dev tools
      and highlight the DOM node.
       @param {Node} node
    */
    inspectNode() {},

    _messageReceived(message) {
      this._messageCallbacks.forEach(callback => {
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
      if (this.environment === 'production') {
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
      return new _rsvp.Promise((resolve, reject) => {
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
    _pendingMessages: (0, _object.computed)(function () {
      return (0, _array.A)();
    }),

    send(options) {
      if (this._isReady) {
        this.sendMessage(...arguments);
      } else {
        this._pendingMessages.push(options);
      }
    },

    /**
      Called when the connection is set up.
      Flushes the pending messages.
    */
    onConnectionReady() {
      // Flush pending messages
      const messages = this._pendingMessages;
      messages.forEach(options => this.sendMessage(options));
      messages.clear();
      this._isReady = true;
    }

  });
});
define("ember-debug/adapters/bookmarklet", ["exports", "ember-debug/adapters/basic"], function (exports, _basic) {
  "use strict";

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
define("ember-debug/adapters/web-extension", ["exports", "ember-debug/adapters/basic", "ember-debug/utils/type-check", "ember-debug/utils/ember", "ember-debug/utils/ember/runloop"], function (exports, _basic, _typeCheck, _ember, _runloop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const {
    isArray
  } = Array;
  const {
    keys
  } = Object;
  exports.default = _basic.default.extend({
    init() {
      this.set('_channel', new MessageChannel());
      this.set('_chromePort', this.get('_channel.port1'));

      this._super(...arguments);
    },

    connect() {
      const channel = this._channel;
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

      this._chromePort.postMessage(options);
    },

    /**
     * Open the devtools "Elements" and select an DOM node.
     *
     * @param  {Node} node The DOM node to select
     */
    inspectNode(node) {
      // NOTE:
      //
      // Basically, we are just trying to call `inspect(node)` here.
      // However, `inspect` is a special function that is in the global
      // scope but not on the global object (i.e. `window.inspect`) does
      // not work. This sometimes causes problems, because, e.g. if the
      // page has a div with the ID `inspect`, `window.inspect` will point
      // to that div and shadow the "global" inspect function with no way
      // to get it back. That causes "`inspect` is not a function" errors.
      //
      // As it turns out, however, when the extension page evals, the
      // `inspect` function does not get shadowed. So, we can ask the
      // inspector extension page to call that function for us, using
      // `inspected.Window.eval('inspect(node)')`.
      //
      // However, since we cannot just send the DOM node directly to the
      // extension, we will have to store it in a temporary global variable
      // so that the extension can find it.
      let name = `__EMBER_INSPECTOR_${(Math.random() * 100000000).toFixed(0)}`;
      window[name] = node;
      this.get('namespace.port').send('view:inspectDOMNode', {
        name
      });
    },

    _listen() {
      let chromePort = this._chromePort;
      chromePort.addEventListener('message', event => {
        const message = event.data; // We should generally not be run-wrapping here. Starting a runloop in
        // ember-debug will cause the inspected app to revalidate/rerender. We
        // are generally not intending to cause changes to the rendered output
        // of the app, so this is generally unnecessary, and in big apps this
        // could be quite slow. There is nothing special about the `view:*`
        // messages – I (GC) just happened to have reviewed all of them recently
        // and can be quite sure that they don't need the runloop. We should
        // audit the rest of them and see if we can remove the else branch. I
        // think we most likely can. In the limited cases (if any) where the
        // runloop is needed, the callback code should just do the wrapping
        // themselves.

        if (message.type.startsWith('view:')) {
          this._messageReceived(message);
        } else {
          (0, _runloop.run)(() => {
            this._messageReceived(message);
          });
        }
      });
      chromePort.start();
    }

  });

  // On some older Ember version `Ember.ENV.EXTEND_PROTOTYPES` is not
  // guarenteed to be an object. While this code only support 3.4+ (all
  // of which normalizes `EXTEND_PROTOTYPES` for us), startup-wrapper.js
  // eagerly require/load ember-debug modules, which ultimately causes
  // this top-level code to run, even we are going to pick a different
  // adapter later. See GH #1114.
  const HAS_ARRAY_PROTOTYPE_EXTENSIONS = (() => {
    try {
      return _ember.default.ENV.EXTEND_PROTOTYPES.Array === true;
    } catch (e) {
      return false;
    }
  })();

  let deepClone;

  if (HAS_ARRAY_PROTOTYPE_EXTENSIONS) {
    deepClone = function deepClone(item) {
      return item;
    };
  } else {
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
    deepClone = function deepClone(item) {
      let clone = item;

      if (isArray(item)) {
        clone = new Array(item.length);
        item.forEach((child, key) => {
          clone[key] = deepClone(child);
        });
      } else if (item && (0, _typeCheck.typeOf)(item) === 'object') {
        clone = {};
        keys(item).forEach(key => {
          clone[key] = deepClone(item[key]);
        });
      }

      return clone;
    };
  }
});
define("ember-debug/adapters/websocket", ["exports", "ember-debug/adapters/basic", "ember-debug/utils/on-ready", "ember-debug/utils/ember/object", "ember-debug/utils/ember/runloop", "ember-debug/utils/rsvp"], function (exports, _basic, _onReady, _object, _runloop, _rsvp) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _basic.default.extend({
    sendMessage(options = {}) {
      this.socket.emit('emberInspectorMessage', options);
    },

    socket: (0, _object.computed)(function () {
      return window.EMBER_INSPECTOR_CONFIG.remoteDebugSocket;
    }),

    _listen() {
      this.socket.on('emberInspectorMessage', message => {
        // We should generally not be run-wrapping here. Starting a runloop in
        // ember-debug will cause the inspected app to revalidate/rerender. We
        // are generally not intending to cause changes to the rendered output
        // of the app, so this is generally unnecessary, and in big apps this
        // could be quite slow. There is nothing special about the `view:*`
        // messages – I (GC) just happened to have reviewed all of them recently
        // and can be quite sure that they don't need the runloop. We should
        // audit the rest of them and see if we can remove the else branch. I
        // think we most likely can. In the limited cases (if any) where the
        // runloop is needed, the callback code should just do the wrapping
        // themselves.
        if (message.type.startsWith('view:')) {
          this._messageReceived(message);
        } else {
          (0, _runloop.run)(() => {
            this._messageReceived(message);
          });
        }
      });
    },

    _disconnect() {
      this.socket.removeAllListeners('emberInspectorMessage');
    },

    connect() {
      return new _rsvp.Promise((resolve, reject) => {
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
define("ember-debug/container-debug", ["exports", "ember-debug/debug-port", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed"], function (exports, _debugPort, _object, _computed) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugPort.default.extend({
    namespace: null,
    objectInspector: (0, _computed.readOnly)('namespace.objectInspector'),
    container: (0, _computed.reads)('namespace.owner.__container__'),
    portNamespace: 'container',
    TYPES_TO_SKIP: (0, _object.computed)(function () {
      return ['component-lookup', 'container-debug-adapter', 'resolver-for-debugging', 'event_dispatcher'];
    }),

    typeFromKey(key) {
      return key.split(':').shift();
    },

    nameFromKey(key) {
      return key.split(':').pop();
    },

    shouldHide(type) {
      return type[0] === '-' || this.TYPES_TO_SKIP.indexOf(type) !== -1;
    },

    instancesByType() {
      let key;
      let instancesByType = {};
      let cache = this.container.cache; // Detect if InheritingDict (from Ember < 1.8)

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
        types.push({
          name: key,
          count: instancesByType[key].length
        });
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
        inspectable: this.objectInspector.canSend(item.instance)
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
        const instance = this.container.lookup(message.name);
        this.objectToConsole.sendValueToConsole(instance);
      }

    }
  });
});
define("ember-debug/data-debug", ["exports", "ember-debug/debug-port", "ember-debug/utils/ember/array", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/object/internals"], function (exports, _debugPort, _array, _object, _computed, _internals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugPort.default.extend({
    init() {
      this._super();

      this.sentTypes = {};
      this.sentRecords = {};
    },

    releaseTypesMethod: null,
    releaseRecordsMethod: null,

    /* eslint-disable ember/no-side-effects */
    adapter: (0, _object.computed)('namespace.owner', function () {
      const owner = this.get('namespace.owner'); // dataAdapter:main is deprecated

      let adapter = this._resolve('data-adapter:main') && owner.lookup('data-adapter:main'); // column limit is now supported at the inspector level

      if (adapter) {
        (0, _object.set)(adapter, 'attributeLimit', 100);
        return adapter;
      }

      return null;
    }),

    /* eslint-enable ember/no-side-effects */
    _resolve(name) {
      const owner = this.get('namespace.owner');
      return owner.resolveRegistration(name);
    },

    namespace: null,
    port: (0, _computed.alias)('namespace.port'),
    objectInspector: (0, _computed.alias)('namespace.objectInspector'),
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
      const objectId = (0, _internals.guidFor)(type.object);
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
      this.sendMessage('recordsAdded', {
        records
      });
    },

    recordsUpdated(recordsReceived) {
      let records = recordsReceived.map(record => this.wrapRecord(record));
      this.sendMessage('recordsUpdated', {
        records
      });
    },

    recordsRemoved(index, count) {
      this.sendMessage('recordsRemoved', {
        index,
        count
      });
    },

    wrapRecord(record) {
      const objectId = (0, _internals.guidFor)(record.object);
      let columnValues = {};
      let searchKeywords = [];
      this.sentRecords[objectId] = record; // make objects clonable

      for (let i in record.columnValues) {
        columnValues[i] = this.objectInspector.inspect(record.columnValues[i]);
      } // make sure keywords can be searched and clonable


      searchKeywords = (0, _array.A)(record.searchKeywords).filter(keyword => typeof keyword === 'string' || typeof keyword === 'number');
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
        this.sendMessage('hasAdapter', {
          hasAdapter: !!this.adapter
        });
      },

      getModelTypes() {
        this.releaseTypes();
        this.releaseTypesMethod = this.adapter.watchModelTypes(types => {
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

        let releaseMethod = this.adapter.watchRecords(typeOrName, recordsReceived => {
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
        this.objectInspector.sendObject(this.sentRecords[message.objectId].object);
      },

      getFilters() {
        this.sendMessage('filters', {
          filters: this.adapter.getFilters()
        });
      }

    }
  });
});
define("ember-debug/debug-port", ["exports", "ember-debug/utils/ember/object"], function (exports, _object) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _object.default.extend({
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
      this.port.send(this.messageName(name), message);
    },

    messageName(name) {
      let messageName = name;

      if (this.portNamespace) {
        messageName = `${this.portNamespace}:${messageName}`;
      }

      return messageName;
    },

    /**
     * Setup or tear down port listeners. Call on `init` and `willDestroy`
     * @param {String} onOrOff 'on' or 'off' the functions to call i.e. port.on or port.off for adding or removing listeners
     */
    setupOrRemovePortListeners(onOrOff) {
      let port = this.port;
      let messages = this.messages;

      for (let name in messages) {
        if (messages.hasOwnProperty(name)) {
          port[onOrOff](this.messageName(name), this, messages[name]);
        }
      }
    }

  });
});
define("ember-debug/deprecation-debug", ["exports", "ember-debug/debug-port", "ember-debug/libs/source-map", "ember-debug/utils/ember/array", "ember-debug/utils/ember/debug", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/object/internals", "ember-debug/utils/ember/runloop", "ember-debug/utils/rsvp"], function (exports, _debugPort, _sourceMap, _array, _debug, _object, _computed, _internals, _runloop, _rsvp) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugPort.default.extend({
    portNamespace: 'deprecation',
    adapter: (0, _computed.readOnly)('port.adapter'),
    sourceMap: (0, _object.computed)(function () {
      return _sourceMap.default.create();
    }),
    emberCliConfig: (0, _computed.readOnly)('namespace.generalDebug.emberCliConfig'),

    init() {
      this._super();

      this.deprecations = (0, _array.A)();
      this.deprecationsToSend = (0, _array.A)();
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
      if (this.emberCliConfig && this.get('emberCliConfig.environment') === 'development') {
        return this.sourceMap.map(stackStr).then(mapped => {
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
        return (0, _rsvp.resolve)(null, 'ember-inspector');
      }
    },

    sendPending() {
      if (this.isDestroyed) {
        return;
      }

      let deprecations = (0, _array.A)();
      let promises = (0, _rsvp.all)(this.deprecationsToSend.map(deprecation => {
        let obj;
        let promise = (0, _rsvp.resolve)(undefined, 'ember-inspector');
        let grouped = this.groupedDeprecations;
        this.deprecations.pushObject(deprecation);
        const id = (0, _internals.guidFor)(deprecation.message);
        obj = grouped[id];

        if (obj) {
          obj.count++;
          obj.url = obj.url || deprecation.url;
        } else {
          obj = deprecation;
          obj.count = 1;
          obj.id = id;
          obj.sources = (0, _array.A)();
          grouped[id] = obj;
        }

        let found = obj.sources.findBy('stackStr', deprecation.stackStr);

        if (!found) {
          let stackStr = deprecation.stackStr;
          promise = this.fetchSourceMap(stackStr).then(map => {
            obj.sources.pushObject({
              map,
              stackStr
            });

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
        this.sendMessage('deprecationsAdded', {
          deprecations
        });
        this.deprecationsToSend.clear();
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
        let grouped = this.groupedDeprecations;
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
          this.adapter.log(stack.join('\n'));
        });
      },

      getCount() {
        this.sendCount();
      },

      clear() {
        (0, _runloop.cancel)(this.debounce);
        this.deprecations.clear();
        this.set('groupedDeprecations', {});
        this.sendCount();
      },

      release() {
        this._watching = false;
      },

      setOptions({
        options
      }) {
        this.options.toggleDeprecationWorkflow = options.toggleDeprecationWorkflow;
      }

    },

    willDestroy() {
      (0, _runloop.cancel)(this.debounce);
      return this._super(...arguments);
    },

    handleDeprecations() {
      (0, _debug.registerDeprecationHandler)((message, options, next) => {
        if (!this.adapter) {
          next(message, options);
          return;
        }
        /* global __fail__*/


        let error; // When using new Error, we can't do the arguments check for Chrome. Alternatives are welcome

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

        const deprecation = {
          message,
          stackStr,
          url
        }; // For ember-debug testing we usually don't want
        // to catch deprecations

        if (!this.namespace.IGNORE_DEPRECATIONS) {
          this.deprecationsToSend.pushObject(deprecation);
          (0, _runloop.cancel)(this.debounce);

          if (this._watching) {
            this.debounce = (0, _runloop.debounce)(this, 'sendPending', 100);
          } else {
            this.debounce = (0, _runloop.debounce)(this, 'sendCount', 100);
          }

          if (!this._warned) {
            this.adapter.warn('Deprecations were detected, see the Ember Inspector deprecations tab for more details.');
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
define("ember-debug/general-debug", ["exports", "ember-debug/debug-port", "ember-debug/utils/ember"], function (exports, _debugPort, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugPort.default.extend({
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
     * Used by the DebugPort
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
        this.sendMessage('libraries', {
          libraries: _ember.default.libraries._registry
        });
      },

      getEmberCliConfig() {
        this.sendMessage('emberCliConfig', {
          emberCliConfig: this.emberCliConfig
        });
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
define("ember-debug/libs/capture-render-tree", ["exports", "ember-debug/utils/version", "ember-debug/utils/ember"], function (exports, _version, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /* eslint-disable no-console, no-inner-declarations */
  let captureRenderTree; // Ember 3.14+ comes with debug render tree, but the version in 3.14.0/3.14.1 is buggy

  if (_ember.default._captureRenderTree && (0, _version.compareVersion)(_ember.default.VERSION, '3.14.1') > 0) {
    if (_ember.default.ENV._DEBUG_RENDER_TREE) {
      captureRenderTree = _ember.default._captureRenderTree;
    } else {
      captureRenderTree = function captureRenderTree() {
        return [];
      };
    }
  } else {
    /**
     * Best-effort polyfill for `Ember._captureRenderTree`.
     *
     * Just like the Ember API, it takes an owner (`ApplicationInstance`, specifically)
     * and return an array of render nodes:
     *
     * interface CapturedRenderNode {
     *   id: string;
     *   type: 'outlet' | 'engine' | 'route-template' | 'component';
     *   name: string;
     *   args: {
     *     named: Dict<unknown>;
     *     positional: unknown[];
     *   };
     *   instance: unknown;
     *   template: Option<string>;
     *   bounds: Option<{
     *     parentElement: Simple.Element;
     *     firstNode: Simple.Node;
     *     lastNode: Simple.Node;
     *   }>;
     *   children: CapturedRenderNode[];
     * }
     *
     * While the API is identical, there are some differences and limitations:
     *
     * 1. `args` property is not available (it always report empty args).
     * 2. `bounds` property is only available on component nodes (`null` everywhere else).
     * 3. `{{mount}}` does not insert an `engine` node.
     * 4. `Ember.Component` (classic components) are the only type of component in the tree
     *    (other components are skipped over).
     * 5. Ordering of `children` may be different (but this is also not guarenteed in the
     *    Ember API).
     */
    const {
      Controller,
      ViewUtils,
      get,
      getOwner,
      guidFor
    } = _ember.default;
    const {
      getRootViews,
      getChildViews,
      getViewBounds
    } = ViewUtils;
    /**
     * We are building the final tree by doing the following steps:
     *
     * 1. Get the "outlet state" tree from the router.
     * 2. Collect the "top level" components. That is, components rendered directly from within
     *    a route template.
     * 3. Do an "interleaved walk" down the outlet and (classic) component tree and map things
     *    into render nodes.
     * 4. Return the array of render nodes we captured.
     *
     * Usually, this function returns an array of exactly one render node, which is the "root"
     * outlet. However, sometimes there may be other top-level components in the app (e.g.
     * rendered using the `Ember.Component#appendTo` API).
     */

    captureRenderTree = function captureRenderTree(owner) {
      let tree = [];
      let outletState = getOutletState(owner);
      let components = getTopLevelComponents(owner);

      if (outletState && components) {
        tree.push(captureOutlet('root', owner, components, outletState));
      }

      return tree;
    };
    /**
     * Get the "outlet state" tree from the router. It corresponds to the "settled",
     * app state after resolving all the hooks, redirects, etc. The rendering layer
     * takes this tree from the router and render it on screen.
     *
     * It has the following format:
     *
     * interface OutletState {
     *   render: {
     *     // The current owner, could be the app or an engine
     *     owner: Owner;
     *
     *     // The name of the route
     *     name: string;
     *
     *     // The controller for the route
     *     controller: Controller;
     *
     *     // The template (or template factory?) for the route (can this really be undefined?)
     *     template: OwnedTemplate | undefined;
     *
     *     // The name of the outlet this was rendered into (in the parent route template)
     *     outlet: string;
     *
     *     // The name of the parent route (we don't use this)
     *     into: string | undefined;
     *   },
     *
     *   // The children outlets of this route, keyed by the outlet names (e.g. "main", "sidebar", ...)
     *   outlets: Dict<OutletState | undefined>;
     * }
     *
     * This function returns the "root" outlet state.
     */


    function getOutletState(owner) {
      try {
        // eslint-disable-next-line ember/no-private-routing-service
        return owner.lookup('router:main')._toplevelView.state.ref.value();
      } catch (error) {
        console.log('[Ember Inspector] failed to capture render tree');
        console.log(error);
        return undefined;
      }
    }
    /**
     * Collect the "top level" components. That is, components rendered directly
     * from within a route template.
     *
     * We do this by walking the classic component tree and identify components
     * that has its "target" (~= the parent template's `{{this}}` object) set to
     * a controller (or undefined, for root components rendered outside of the
     * application route).
     *
     * This function returns a `Map` keyed by controllers (`undefiend` is also a
     * possible key) to arrays of top-level components for that route/controller.
     */


    function getTopLevelComponents(owner) {
      try {
        let map = new Map();
        collectComponentsByController(map, null, getRootViews(owner));
        return map;
      } catch (error) {
        console.log('[Ember Inspector] failed to capture render tree');
        console.log(error);
        return undefined;
      }
    }
    /**
     * Returns the "target" of a (classic) component.
     */


    function targetForComponent(component) {
      return get(component, '_target') || get(component, '_targetObject');
    }
    /**
     * Recursively walk an array of components and add any "top level" components
     * to the map keyed by their controller.
     */


    function collectComponentsByController(map, controller, components) {
      components.forEach(component => {
        let target = targetForComponent(component);

        if (target === undefined || target instanceof Controller) {
          /**
           * If our parent is already added, don't add ourself again.
           *
           * This is to prevent something like this:
           *
           *    {{!-- app/templates/application.hbs}}
           *    <Parent>
           *      <Child />
           *    </Parent>
           *
           * Without this check, both the parent and the yielded child will be
           * considered "top level" since they both have the controller as their
           * target.
           */
          if (target !== controller) {
            if (!map.has(target)) {
              map.set(target, []);
            }

            map.get(target).push(component);
          }

          collectComponentsByController(map, target, getChildViews(component));
        } else {
          collectComponentsByController(map, controller, getChildViews(component));
        }
      });
    }

    const EMPTY_ARGS = {
      named: Object.create(null),
      positional: []
    };
    /**
     * Return the module name (e.g. `my-app/templates/application.hbs`) for a
     * template or template factory, if available. This may not be present for,
     * e.g. templates compiled using the "inline" `hbs` tagged string method.
     */

    function nameForTemplate(template) {
      if (template.meta) {
        // Factory
        return template.meta.moduleName || null;
      } else if (template.referrer) {
        // Instance
        return template.referrer.moduleName || null;
      } else {
        return null;
      }
    }
    /**
     * Walk an outlet tree (the last parameter) and map its content into render nodes.
     *
     * For each level of the outlet tree, we also have to walk the (classic) component
     * tree to attach any components for the current level (and their children) to the
     * resulting render nodes tree.
     *
     * We also check if the owner has changed between the current level and the previous
     * level, and if so, we infer that we must have just crossed an engine boundary and
     * insert an engine render node to account for that.
     *
     * Because we don't have a good way to generate a stable ID for the outlet nodes, we
     * also pass down a "path" of the routes/outlets we have encountered so far which we
     * use to generate the ID.
     */


    function captureOutlet(path, owner, components, {
      outlets,
      render
    }) {
      let outlet = {
        id: `render-node:${path}@${render.outlet}`,
        type: 'outlet',
        name: render.outlet,
        args: EMPTY_ARGS,
        instance: undefined,
        template: null,
        bounds: null,
        children: []
      };
      let parent = outlet;

      if (owner !== render.owner) {
        let engine = {
          id: `render-node:${guidFor(render.owner)}`,
          type: 'engine',
          name: render.owner.mountPoint,
          args: EMPTY_ARGS,
          instance: render.owner,
          template: null,
          bounds: null,
          children: []
        };
        parent.children.push(engine);
        parent = engine;
      }

      let subpath = `${path}@${render.outlet}/${render.name}`;
      let route = {
        id: `render-node:${subpath}`,
        type: 'route-template',
        name: render.name,
        args: EMPTY_ARGS,
        instance: render.controller,
        template: nameForTemplate(render.template),
        bounds: null,
        children: []
      };
      parent.children.push(route);
      parent = route;
      let childOutlets = Object.keys(outlets).map(name => captureOutlet(subpath, render.owner, components, outlets[name]));
      let childComponents = captureComponents(components.get(render.controller) || [], render.controller);
      parent.children.push(...mergeOutletChildren(render.controller, childOutlets, childComponents));
      return outlet;
    }
    /**
     * Its is possible to nest an outlet inside a component, one pretty common example
     * is a "layout" component:
     *
     * <SidebarWrapper>
     *   {{outlet "sidebar"}}
     * </SidebarWrapper>
     *
     * On the other hand, it's not possible to put a component inside an outlet anymore
     * when we get to this point. Try to find a suitable parent for each child outlet
     * taking the above into account.
     */


    function mergeOutletChildren(controller, outlets, components) {
      let merged = [];

      for (let outlet of outlets) {
        if (controller) {
          let parentComponent = findOutletComponentParent(outlet.children);

          if (controllerForComponent(parentComponent) === controller) {
            let parentNode = findOutletComponentNode(components, parentComponent);

            if (parentNode) {
              parentNode.children.unshift(outlet);
              continue;
            }
          }
        }

        merged.push(outlet);
      }

      merged.push(...components);
      return merged;
    }

    function findOutletComponentParent(nodes) {
      let result;

      for (let node of nodes) {
        if (node.type === 'component') {
          result = node.instance.parentView;
        } else if (node.type === 'engine' || node.type === 'route-template') {
          result = findOutletComponentParent(node.children);
        }

        if (result !== undefined) {
          return result;
        }
      }
    }

    function findOutletComponentNode(nodes, instance) {
      let result;

      for (let node of nodes) {
        if (node.type === 'component') {
          if (node.instance === instance) {
            result = node;
          } else {
            result = findOutletComponentNode(node.children, instance);
          }
        }

        if (result !== undefined) {
          return result;
        }
      }
    }
    /**
     * Returns the name of a (classic) component.
     */


    function nameForComponent(component) {
      // remove "component:" prefix
      return component._debugContainerKey.slice(10);
    }
    /**
     * Returns the nearest controller of a (classic) component. This is so that we know
     * whether a given component belongs to the current level (the route that we are
     * processing right now) or not.
     */


    function controllerForComponent(component) {
      let target = component;

      while (target && !(target instanceof Controller)) {
        target = targetForComponent(target);
      }

      return target;
    }
    /**
     * Returns the template (or template factory?) for a (classic) component.
     */


    function templateForComponent(component) {
      let layout = get(component, 'layout');

      if (layout) {
        return nameForTemplate(layout);
      }

      let layoutName = get(component, 'layoutName');

      if (layoutName) {
        let owner = getOwner(component);
        let template = owner.lookup(`template:${layoutName}`);
        return nameForTemplate(template);
      }

      return null;
    }
    /**
     * Return the render node for a given (classic) component, and its children up
     * until the next route boundary.
     */


    function captureComponents(components, controller) {
      return components.filter(component => controllerForComponent(component) === controller).map(component => ({
        id: `render-node:${guidFor(component)}`,
        type: 'component',
        name: nameForComponent(component),
        args: EMPTY_ARGS,
        instance: component,
        template: templateForComponent(component),
        bounds: getViewBounds(component),
        children: captureComponents(getChildViews(component), controller)
      }));
    }
  }

  exports.default = captureRenderTree;
});
define("ember-debug/libs/promise-assembler", ["exports", "ember-debug/models/promise", "ember-debug/utils/ember/array", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/evented", "ember-debug/utils/ember/utils", "ember-debug/utils/rsvp"], function (exports, _promise, _array, _object, _evented, _utils, _rsvp) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   Original implementation and the idea behind the `PromiseAssembler`,
   `Promise` model, and other work related to promise inspection was done
   by Stefan Penner (@stefanpenner) thanks to McGraw Hill Education (@mhelabs)
   and Yapp Labs (@yapplabs).
   */
  let PromiseAssembler = _object.default.extend(_evented.default, {
    // RSVP lib to debug
    RSVP: _rsvp.default,
    isStarted: false,

    init() {
      this._super(...arguments);

      this.all = (0, _array.A)();
      this.promiseIndex = {};
    },

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
        this.all.forEach(item => {
          item.destroy();
        });
        this.all = (0, _array.A)();
        this.promiseIndex = {};
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
      this.all.pushObject(promise);
      this.promiseIndex[promise.get('guid')] = index;
      return promise;
    },

    find(guid) {
      if (guid) {
        const index = this.promiseIndex[guid];

        if (index !== undefined) {
          return this.all.objectAt(index);
        }
      } else {
        return this.all;
      }
    },

    findOrCreate(guid) {
      return this.find(guid) || this.createPromise({
        guid
      });
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
    this.trigger('fulfilled', {
      promise
    });
  }

  function reject(event) {
    const guid = event.guid;
    const promise = this.updateOrCreate(guid, {
      label: event.label,
      settledAt: event.timeStamp,
      state: 'rejected',
      reason: event.detail
    });
    this.trigger('rejected', {
      promise
    });
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
    this.trigger('chained', {
      promise,
      child
    });
  }

  function create(event) {
    const guid = event.guid;
    const promise = this.updateOrCreate(guid, {
      label: event.label,
      createdAt: event.timeStamp,
      stack: event.stack
    }); // todo fix ordering

    if ((0, _utils.isNone)(promise.get('state'))) {
      promise.set('state', 'created');
    }

    this.trigger('created', {
      promise
    });
  }
});
define("ember-debug/libs/render-tree", ["exports", "ember-debug/libs/capture-render-tree"], function (exports, _captureRenderTree) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  class RenderTree {
    /**
     * Sets up the initial options.
     *
     * @method constructor
     * @param {Object} options
     *  - {owner}      owner           The Ember app's owner.
     *  - {Function}   retainObject    Called to retain an object for future inspection.
     */
    constructor({
      owner,
      retainObject,
      releaseObject,
      inspectNode
    }) {
      this.owner = owner;
      this.retainObject = retainObject;
      this.releaseObject = releaseObject;
      this.inspectNode = inspectNode;

      this._reset();
    }
    /**
     * Capture the render tree and serialize it for sending.
     *
     * This returns an array of `SerializedRenderNode`:
     *
     * type SerializedItem = string | number | bigint | boolean | null | undefined | { id: string };
     *
     * interface SerializedRenderNode {
     *   id: string;
     *   type: 'outlet' | 'engine' | 'route-template' | 'component';
     *   name: string;
     *   args: {
     *     named: Dict<SerializedItem>;
     *     positional: SerializedItem[];
     *   };
     *   instance: SerializedItem;
     *   template: Option<string>;
     *   bounds: Option<'single' | 'range'>;
     *   children: SerializedRenderNode[];
     * }
     *
     * @method build
     * @return {Array<SerializedRenderNode>} The render nodes tree.
     */


    build() {
      this._reset();

      this.tree = (0, _captureRenderTree.default)(this.owner);

      let serialized = this._serializeRenderNodes(this.tree);

      this._releaseStaleObjects();

      return serialized;
    }
    /**
     * Find a render node by id.
     *
     * @param {string} id A render node id.
     * @return {Option<SerializedRenderNode>} A render node with the given id, if any.
     */


    find(id) {
      let node = this.nodes[id];

      if (node) {
        return this._serializeRenderNode(node);
      } else {
        return null;
      }
    }
    /**
     * Find the deepest enclosing render node for a given DOM node.
     *
     * @method findNearest
     * @param {Node} node A DOM node.
     * @param {string} hint The id of the last-matched render node (see comment below).
     * @return {Option<SerializedRenderNode>} The deepest enclosing render node, if any.
     */


    findNearest(node, hint) {
      // Use the hint if we are given one. When doing "live" inspecting, the mouse likely
      // hasn't moved far from its last location. Therefore, the matching render node is
      // likely to be the same render node, one of its children, or its parent. Knowing this,
      // we can heuristically start the search from the parent render node (which would also
      // match against this node and its children), then only fallback to matching the entire
      // tree when there is no match in this subtree.
      let hintNode = this._findUp(this.nodes[hint]);

      let renderNode;

      if (hintNode) {
        renderNode = this._matchRenderNodes([hintNode, ...this.tree], node);
      } else {
        renderNode = this._matchRenderNodes(this.tree, node);
      }

      if (renderNode) {
        return this._serializeRenderNode(renderNode);
      } else {
        return null;
      }
    }
    /**
     * Get the bounding rect for a given render node id.
     *
     * @method getBoundingClientRect
     * @param {*} id A render node id.
     * @return {Option<DOMRect>} The bounding rect, if the render node is found and has valid `bounds`.
     */


    getBoundingClientRect(id) {
      let node = this.nodes[id];

      if (!node || !node.bounds) {
        return null;
      } // Element.getBoundingClientRect seems to be less buggy when it comes
      // to taking hidden (clipped) content into account, so prefer that over
      // Range.getBoundingClientRect when possible.


      let rect;
      let {
        bounds
      } = node;
      let {
        firstNode
      } = bounds;

      if (isSingleNode(bounds) && firstNode.getBoundingClientRect) {
        rect = firstNode.getBoundingClientRect();
      } else {
        rect = this.getRange(id).getBoundingClientRect();
      }

      if (rect && !isEmptyRect(rect)) {
        return rect;
      }

      return null;
    }
    /**
     * Get the DOM range for a give render node id.
     *
     * @method getRange
     * @param {string} id A render node id.
     * @return {Option<Range>} The DOM range, if the render node is found and has valid `bounds`.
     */


    getRange(id) {
      let range = this.ranges[id];

      if (range === undefined) {
        let node = this.nodes[id];

        if (node && node.bounds && isAttached(node.bounds)) {
          range = document.createRange();
          range.setStartBefore(node.bounds.firstNode);
          range.setEndAfter(node.bounds.lastNode);
        } else {
          // If the node has already been detached, we probably have a stale tree
          range = null;
        }

        this.ranges[id] = range;
      }

      return range;
    }
    /**
     * Scroll the given render node id into view (if the render node is found and has valid `bounds`).
     *
     * @method scrollIntoView
     * @param {string} id A render node id.
     */


    scrollIntoView(id) {
      let node = this.nodes[id];

      if (!node || node.bounds === null) {
        return;
      }

      let element = this._findNode(node.bounds, [Node.ELEMENT_NODE]);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }
    /**
     * Inspect the bounds for the given render node id in the "Elements" panel (if the render node
     * is found and has valid `bounds`).
     *
     * @method inspectElement
     * @param {string} id A render node id.
     */


    inspectElement(id) {
      let node = this.nodes[id];

      if (!node || node.bounds === null) {
        return;
      } // We cannot inspect text nodes


      let target = this._findNode(node.bounds, [Node.ELEMENT_NODE, Node.COMMENT_NODE]);

      this.inspectNode(target);
    }

    teardown() {
      this._reset();

      this._releaseStaleObjects();
    }

    _reset() {
      this.tree = [];
      this.nodes = Object.create(null);
      this.parentNodes = Object.create(null);
      this.serialized = Object.create(null);
      this.ranges = Object.create(null);
      this.previouslyRetainedObjects = this.retainedObjects || new Map();
      this.retainedObjects = new Map();
    }

    _serializeRenderNodes(nodes, parentNode = null) {
      return nodes.map(node => this._serializeRenderNode(node, parentNode));
    }

    _serializeRenderNode(node, parentNode = null) {
      let serialized = this.serialized[node.id];

      if (serialized === undefined) {
        this.nodes[node.id] = node;

        if (parentNode) {
          this.parentNodes[node.id] = parentNode;
        }

        this.serialized[node.id] = serialized = { ...node,
          args: this._serializeArgs(node.args),
          instance: this._serializeItem(node.instance),
          bounds: this._serializeBounds(node.bounds),
          children: this._serializeRenderNodes(node.children, node)
        };
      }

      return serialized;
    }

    _serializeArgs({
      named,
      positional
    }) {
      return {
        named: this._serializeDict(named),
        positional: this._serializeArray(positional)
      };
    }

    _serializeBounds(bounds) {
      if (bounds === null) {
        return null;
      } else if (isSingleNode(bounds)) {
        return 'single';
      } else {
        return 'range';
      }
    }

    _serializeDict(dict) {
      let result = Object.create(null);
      Object.keys(dict).forEach(key => {
        result[key] = this._serializeItem(dict[key]);
      });
      return result;
    }

    _serializeArray(array) {
      return array.map(item => this._serializeItem(item));
    }

    _serializeItem(item) {
      switch (typeof item) {
        case 'string':
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'undefined':
          return item;

        default:
          return item && this._serializeObject(item);
      }
    }

    _serializeObject(object) {
      let id = this.previouslyRetainedObjects.get(object);

      if (id === undefined) {
        id = this.retainObject(object);
      }

      this.retainedObjects.set(object, id);
      return {
        id
      };
    }

    _releaseStaleObjects() {
      // The object inspector already handles ref-counting. So doing the same
      // bookkeeping here may seem redundant, and it is. However, in practice,
      // calling `retainObject` and `dropObject` could be quite expensive and
      // we call them a lot. Also, temporarily dropping the ref-count to 0 just
      // to re-increment it later (which is what would happen if we release all
      // current objects before the walk, then re-retain them as we walk the
      // new tree) is especially bad, as it triggers the initialization and
      // clean up logic on each of these objects. In my (GC's) opinion, the
      // object inspector is likely overly eager and doing too much bookkeeping
      // when we can be using weakmaps. Until we have a chance to revamp the
      // object inspector, the logic here tries to reduce the number of retain
      // and release calls by diffing the object set betweeen walks. Feel free
      // to remove this code and revert to the old release-then-retain method
      // when the object inspector is not slow anymore.
      let {
        previouslyRetainedObjects,
        retainedObjects,
        releaseObject
      } = this; // The object inspector should make its own GC async, but until then...

      window.setTimeout(function () {
        for (let [object, id] of previouslyRetainedObjects) {
          if (!retainedObjects.has(object)) {
            releaseObject(id);
          }
        }
      }, 0);
      this.previouslyRetainedObjects = null;
    }

    _getParent(id) {
      return this.parentNodes[id] || null;
    }

    _matchRenderNodes(renderNodes, dom, deep = true) {
      let candidates = [...renderNodes];

      while (candidates.length > 0) {
        let candidate = candidates.shift();
        let range = this.getRange(candidate.id);

        if (range && range.isPointInRange(dom, 0)) {
          // We may be able to find a more exact match in one of the children.
          return this._matchRenderNodes(candidate.children, dom, false) || candidate;
        } else if (!range || deep) {
          // There are some edge cases of non-containing parent nodes (e.g. "worm
          // hole") so we can't rule out the entire subtree just because the parent
          // didn't match. However, we should come back to this subtree at the end
          // since we are unlikely to find a match here.
          candidates.push(...candidate.children);
        } else {// deep = false: In this case, we already found a matching parent,
          // we are just trying to find a more precise match here. If the child
          // does not contain the DOM node, we don't need to travese further.
        }
      }

      return null;
    }

    _findNode(bounds, nodeTypes) {
      let node = bounds.firstNode;

      do {
        if (nodeTypes.indexOf(node.nodeType) > -1) {
          return node;
        } else {
          node = node.nextSibling;
        }
      } while (node && node !== bounds.lastNode);

      return bounds.parentElement;
    }

    _findUp(node) {
      // Find the first parent render node with a different enclosing DOM element.
      // Usually, this is just the first parent render node, but there are cases where
      // multiple render nodes share the same bounds (e.g. outlet -> route template).
      let parentElement = node && node.bounds && node.bounds.parentElement;

      while (node && parentElement) {
        let parentNode = this._getParent(node.id);

        if (parentNode) {
          node = parentNode;

          if (parentElement === node.bounds && node.bounds.parentElement) {
            continue;
          }
        }

        break;
      }

      return node;
    }

  }

  exports.default = RenderTree;

  function isSingleNode({
    firstNode,
    lastNode
  }) {
    return firstNode === lastNode;
  }

  function isAttached({
    parentElement,
    firstNode,
    lastNode
  }) {
    return parentElement === firstNode.parentElement && parentElement === lastNode.parentElement;
  }

  function isEmptyRect({
    x,
    y,
    width,
    height
  }) {
    return x === 0 && y === 0 && width === 0 && height === 0;
  }
});
define("ember-debug/libs/source-map", ["exports", "ember-debug/utils/ember/array", "ember-debug/utils/ember/object", "ember-debug/utils/rsvp"], function (exports, _array, _object, _rsvp) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   * Used to map a stack trace to its original sources.
   * A lot of the code is inspired by/taken from
   * https://github.com/evanw/node-source-map-support
   */
  const notFoundError = new Error('Source map url not found');
  exports.default = _object.default.extend({
    _lastPromise: (0, _object.computed)(function () {
      return (0, _rsvp.resolve)(undefined, 'ember-inspector');
    }),

    /**
     * Returns a promise that resolves to an array
     * of mapped sourcew.
     *
     * @param  {String} stack The stack trace
     * @return {RSVP.Promise}
     */
    map(stack) {
      let parsed = (0, _array.A)(fromStackProperty(stack));
      let array = (0, _array.A)();
      let lastPromise = null;
      parsed.forEach(item => {
        lastPromise = this._lastPromise.then(() => this.getSourceMap(item.url), null, 'ember-inspector').then(smc => {
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
      return (0, _rsvp.resolve)(lastPromise, 'ember-inspector').catch(function (e) {
        if (e === notFoundError) {
          return null;
        }

        throw e;
      }, 'ember-inspector');
    },

    sourceMapCache: (0, _object.computed)(function () {
      return {};
    }),

    getSourceMap(url) {
      let sourceMaps = this.sourceMapCache;

      if (sourceMaps[url] !== undefined) {
        return (0, _rsvp.resolve)(sourceMaps[url], 'ember-inspector');
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
      } // Support source map URLs relative to the source URL


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
    let absoluteUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i'); // If we don't have a file URL or the sourcemap URL is absolute, then return the sourcemap URL.

    if (!file || absoluteUrlRegex.test(url)) {
      return url;
    } // Otherwise, find the sourcemap URL relative to the original file.


    let dir = file.split('/');
    dir.pop();
    dir.push(url);
    return dir.join('/');
  }

  function retrieveFile(source) {
    return new _rsvp.Promise(function (resolve) {
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

      let url = match[1]; // check not data URL

      if (url.match(/^data/)) {
        return null;
      }

      return url;
    }, null, 'ember-inspector');
  }

  const UNKNOWN_FUNCTION = '<unknown>'; // Taken from https://github.com/errorception/browser-stack-parser/

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
define("ember-debug/libs/view-inspection", ["exports", "ember-debug/utils/classify", "ember-debug/utils/bound-method"], function (exports, _classify, _boundMethod) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function makeHighlight(id) {
    return `<div id="ember-inspector-highlight-${id}" role="presentation"></div>`;
  }

  function makeTooltip(id) {
    let prefix = 'ember-inspector-tooltip';
    return `
    <div id="${prefix}-${id}">
      <span class="${prefix}-header">
        <span class="${prefix}-title"></span>
        <span class="${prefix}-category"></span>
      </span>
      <table class="${prefix}-details">
        <tbody>
        </tbody>
      </table>
      <div class="${prefix}-arrow" role="presentation"></div>
    </div>
  `;
  }

  function makeStylesheet(id) {
    let prefix = 'ember-inspector';
    return `
    #${prefix}-highlight-${id} {
      display: none;
      pointer-events: none;
      box-sizing: border-box;
      position: absolute;
      margin: 0px;
      padding: 0px;
      border: none;
      z-index: 10000;
      /* https://github.com/ChromeDevTools/devtools-frontend/blob/b336f0440a8fb539352ac223ef466c3475618cf1/front_end/common/Color.js#L904 */
      background: rgba(111, 168, 220, .66);
    }

    #${prefix}-tooltip-${id} {
      display: none;
      box-sizing: border-box;
      position: absolute;
      margin: 8px 0px;
      padding: 4px 8px;
      border: none;
      border-radius: 3px;
      z-index: 10000;
      font-family: sans-serif;
      font-size: 12px;
      font-weight: normal;
      background: white;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.25);
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-header {
      display: block;
      margin: 4px 0px;
      padding: 0px;
      border: none;
      font-family: sans-serif;
      font-size: 12px;
      font-weight: normal;
      background: transparent;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-title {
      font-weight: bold;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-token-tag,
    #${prefix}-tooltip-${id} .${prefix}-tooltip-token-namespace {
      /* https://github.com/ChromeDevTools/devtools-frontend/blob/103326238685ac582d3bf2a02f1627a80e3fce5f/front_end/ui/inspectorSyntaxHighlight.css#L69-L71 */
      color: rgb(168, 148, 166);
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-token-name {
      /* https://github.com/ChromeDevTools/devtools-frontend/blob/103326238685ac582d3bf2a02f1627a80e3fce5f/front_end/ui/inspectorSyntaxHighlight.css#L60 */
      color: rgb(136, 18, 128);
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-token-id {
      /* https://github.com/ChromeDevTools/devtools-frontend/blob/103326238685ac582d3bf2a02f1627a80e3fce5f/front_end/ui/inspectorSyntaxHighlight.css#L109-L113 */
      color: rgb(26, 26, 166);
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-details {
      display: table;
      table-layout: auto;
      width: auto;
      height: auto;
      margin: 0px;
      padding: 0px;
      border: none;
      border-spacing: 0px;
      border-collapse: collapse;
      background: transparent;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-details tbody {
      display: table-row-group;
      vertical-align: middle;
      width: auto;
      height: auto;
      margin: 0px;
      padding: 0px;
      border: none;
      border-spacing: 0px;
      border-collapse: collapse;
      background: transparent;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-details tr {
      display: table-row;
      vertical-align: middle;
      width: auto;
      height: auto;
      margin: 0px;
      padding: 0px;
      border: none;
      border-spacing: 0px;
      border-collapse: collapse;
      background: transparent;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-details th {
      display: block;
      width: auto;
      height: auto;
      margin: 4px 8px 4px 0px;
      padding: 0px;
      border: none;
      border-spacing: 0px;
      border-collapse: collapse;
      white-space: nowrap;
      font-family: sans-serif;
      font-size: 12px;
      font-weight: normal;
      text-align: left;
      color: #666;
      background: transparent;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-details td {
      display: table-cell;
      width: auto;
      height: auto;
      margin: 0px;
      padding: 0px;
      border: none;
      border-spacing: 0px;
      border-collapse: collapse;
      white-space: nowrap;
      font-family: sans-serif;
      font-size: 12px;
      font-weight: normal;
      text-align: right;
      color: #000;
      background: transparent;
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-arrow {
      display: block;
      box-sizing: border-box;
      position: absolute;
      top: auto;
      right: auto;
      bottom: -20px;
      left: 0px;
      width: 40px;
      height: 20px;
      margin: 0px 0px 0px -20px;
      padding: 0px;
      border: none;
      background: transparent;
      overflow-x: visible;
      overflow-y: hidden;
    }

    #${prefix}-tooltip-${id}.${prefix}-tooltip-attach-below .${prefix}-tooltip-arrow {
      top: -20px;
      bottom: auto;
      transform: rotate(180deg);
    }

    #${prefix}-tooltip-${id} .${prefix}-tooltip-arrow::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      top: 0px;
      right: auto;
      bottom: auto;
      left: 50%;
      width: 0px;
      height: 0px;
      margin: 0px 0px 0px -8px;
      border: 6px solid white;
      border-color: transparent transparent white white;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
      transform-origin: 0 0;
      transform: rotate(-45deg);
    }
  `;
  }

  class ViewInspection {
    constructor({
      renderTree,
      objectInspector,
      didShow,
      didHide,
      didStartInspecting,
      didStopInspecting
    }) {
      this.renderTree = renderTree;
      this.objectInspector = objectInspector;
      this.didShow = didShow;
      this.didHide = didHide;
      this.didStartInspecting = didStartInspecting;
      this.didStopInspecting = didStopInspecting;
      this.id = (Math.random() * 100000000).toFixed(0);
      this.isInspecting = false;
      this.lastTarget = null;
      this.lastMatchId = null;
      this.isShowing = false;
      this.isPinned = false;
      this.currentId = null;
      this.setup();
    }

    setup() {
      let {
        id
      } = this;
      this.highlight = this._insertHTML(makeHighlight(id));
      this.tooltip = this._insertHTML(makeTooltip(id));
      this.stylesheet = this._insertStylesheet(makeStylesheet(id));
      document.body.addEventListener('keydown', (0, _boundMethod.default)(this, this.onKeyDown), {
        capture: true
      });
      document.body.addEventListener('click', (0, _boundMethod.default)(this, this.onClick), {
        capture: true
      });
    }

    teardown() {
      this.stop();
      document.body.removeEventListener('keydown', (0, _boundMethod.default)(this, this.onKeyDown), {
        capture: true
      });
      document.body.removeEventListener('click', (0, _boundMethod.default)(this, this.onClick), {
        capture: true
      });
      this.highlight.remove();
      this.tooltip.remove();
      this.stylesheet.remove();
    }

    start() {
      this.isInspecting = true;
      this.lastTarget = null;
      this.lastMatchId = null;
      document.body.addEventListener('mousemove', (0, _boundMethod.default)(this, this.onMouseMove), {
        capture: true
      });
      this.didStartInspecting();
    }

    stop(shouldHide = true) {
      if (shouldHide) {
        this.hide();
      }

      this.isInspecting = false;
      this.lastTarget = null;
      this.lastMatchId = null;
      document.body.removeEventListener('mousemove', (0, _boundMethod.default)(this, this.onMouseMove), {
        capture: true
      });
      this.didStopInspecting();
    }

    onMouseMove(event) {
      event.preventDefault();
      event.stopPropagation();
      this.inspectNearest(event.target, false);
    }

    onKeyDown(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        if (this.isPinned) {
          event.preventDefault();
          event.stopPropagation();
          this.hide();
        } else if (this.isInspecting) {
          event.preventDefault();
          event.stopPropagation();
          this.stop();
        }
      }
    }

    onClick(event) {
      if (this.isPinned && !this.tooltip.contains(event.target)) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
      } else if (this.isInspecting && event.button === 0) {
        event.preventDefault();
        event.stopPropagation();
        this.inspectNearest(event.target, true);
        this.stop(false);
      }
    }

    inspectNearest(target, pin = true) {
      let {
        isInspecting,
        lastTarget,
        lastMatchId
      } = this;
      let match;

      if (isInspecting && target === lastTarget) {
        match = this.renderTree.find(lastMatchId);
      }

      if (!match) {
        match = this.renderTree.findNearest(target, lastMatchId);
      }

      if (match) {
        this.show(match.id, pin);
      } else {
        this.hide();
      }

      if (isInspecting) {
        this.lastTarget = target;
        this.lastMatchId = match && match.id;
      }

      return match;
    }

    show(id, pin = true) {
      if (this.currentId === id) {
        if (this.isPinned !== pin) {
          this.isPinned = pin;
          this.didShow(id, pin);
        }

        return;
      }

      let node = this.renderTree.find(id);
      let rect = this.renderTree.getBoundingClientRect(id);

      if (node && rect) {
        this._showHighlight(node, rect);

        this._showTooltip(node, rect);

        this.isShowing = true;
        this.isPinned = pin;
        this.currentId = id;
        this.didShow(id, pin);
      } else {
        this.hide(false);
      }
    }

    hide(notify = true) {
      let {
        isShowing,
        isPinned,
        currentId
      } = this;

      if (isShowing) {
        this._hideHighlight();

        this._hideTooltip();

        this.isShowing = false;
        this.isPinned = false;
        this.currentId = null;

        if (notify) {
          this.didHide(currentId, isPinned);
        }
      }
    }

    _showHighlight(_node, rect) {
      let {
        style
      } = this.highlight;
      let {
        top,
        left,
        width,
        height
      } = rect;
      let {
        scrollX,
        scrollY
      } = window;
      style.display = 'block';
      style.top = `${top + scrollY}px`;
      style.left = `${left + scrollX}px`;
      style.width = `${width}px`;
      style.height = `${height}px`;
    }

    _hideHighlight() {
      this.highlight.style.display = 'none';
    }

    _showTooltip(node, highlightRect) {
      this._renderTooltipTitle(node);

      this._renderTooltipCategory(node);

      this._renderTooltipDetails(node);

      this._positionTooltip(highlightRect);
    }

    _hideTooltip() {
      this.tooltip.style.display = 'none';
    }

    _renderTooltipTitle(node) {
      let title = this.tooltip.querySelector('.ember-inspector-tooltip-title');
      title.innerHTML = '';

      if (node.type === 'component') {
        this._renderTokens(title, this._tokenizeComponentNode(node));
      } else if (node.type === 'outlet') {
        this._renderTokens(title, [['tag', '{{'], ['name', 'outlet'], ['tag', ' '], ['tag', '"'], ['id', node.name], ['tag', '"'], ['tag', '}}']]);
      } else if (node.type === 'engine') {
        this._renderTokens(title, [['tag', '{{'], ['name', 'mount'], ['tag', ' '], ['tag', '"'], ['id', node.name], ['tag', '"'], ['tag', '}}']]);
      } else {
        title.innerText = node.name;
      }
    }

    _renderTooltipCategory(node) {
      let category = this.tooltip.querySelector('.ember-inspector-tooltip-category');

      switch (node.type) {
        case 'component':
        case 'outlet':
        case 'engine':
          category.innerHTML = '';
          break;

        case 'route-template':
          category.innerText = 'route';
          break;
      }
    }

    _renderTooltipDetails(node) {
      let tbody = this.tooltip.querySelector('.ember-inspector-tooltip-details tbody');
      tbody.innerHTML = '';

      if (node.template) {
        this._renderTooltipDetail(tbody, 'Template', node.template);
      }

      if (node.instance) {
        if (node.type === 'route-template') {
          this._renderTooltipDetail(tbody, 'Controller', this._tokenizeItem(node.instance));
        } else {
          this._renderTooltipDetail(tbody, 'Instance', this._tokenizeItem(node.instance));
        }
      }
    }

    _renderTooltipDetail(tbody, key, value) {
      let tr = document.createElement('tr');
      let th = document.createElement('th');
      let td = document.createElement('td');
      th.innerText = key;
      td.className = `ember-inspector-tooltip-detail-${key.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

      if (Array.isArray(value)) {
        this._renderTokens(td, value);
      } else {
        td.innerText = value;
      }

      tr.appendChild(th);
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    _renderTokens(parent, tokens) {
      for (let [type, value] of tokens) {
        let span = document.createElement('span');
        span.innerText = value;
        span.setAttribute('class', `ember-inspector-tooltip-token-${type}`);
        parent.appendChild(span);
      }
    }

    _tokenizeComponentNode(node) {
      let useAngleBracket = node.args.positional.length === 0;
      let parts = node.name.split('/');

      if (useAngleBracket) {
        parts = parts.map(_classify.default);
      }

      let name = parts.pop();
      let namespace = parts;
      let tokens = [];

      if (useAngleBracket) {
        tokens.push(['tag', '<']);
      } else {
        tokens.push(['tag', '{{']);
      }

      while (namespace.length > 0) {
        tokens.push(['namespace', namespace.shift()]);
        tokens.push(['tag', '::']);
      }

      tokens.push(['name', name]);

      if (useAngleBracket) {
        tokens.push(['tag', '>']);
      } else {
        tokens.push(['tag', '}}']);
      }

      return tokens;
    }

    _tokenizeItem(item) {
      switch (typeof item) {
        case 'string':
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'undefined':
          return [['id', `${item}`]];
      }

      if (item === null) {
        return [['id', 'null']];
      }

      return this._tokenizeObject(item);
    }

    _tokenizeObject(item) {
      let object = this.objectInspector.sentObjects[item.id];
      let stringified;

      try {
        stringified = String(object);
      } catch {// nope!
      }

      if (!object || !stringified) {
        return [['tag', '(unknown)']];
      }

      {
        // <my-app@component:foo-bar::ember123>
        let match = stringified.match(/<([a-z0-9-_]+)@([a-z0-9-_]+):([a-z0-9-_]+)::([a-z0-9-_]+)>/i);

        if (match) {
          return [['tag', '<'], ['namespace', match[1]], ['tag', '@'], ['namespace', match[2]], ['tag', ':'], ['name', match[3]], ['tag', '::'], ['id', match[4]], ['tag', '>']];
        }
      } // TODO: support other ember object strings, `[object Object]`, `Symbol(hi)` etc

      return [['tag', stringified]];
    }

    _positionTooltip(highlightRect) {
      // Positioning the tooltip: the goal is to match the Chrome's Element
      // inspection tooltip's positioning behavior as closely as possible.
      let {
        style: tooltipStyle
      } = this.tooltip;
      let {
        scrollX,
        scrollY,
        innerWidth
      } = window; // Leave 20px safety margin in case of scrollbars

      let safetyMargin = 20;
      let viewportWidth = innerWidth - safetyMargin; // Start by attaching the tooltip below the highlight, and align it to the
      // left edge of the highlight.

      let attachmentTop = highlightRect.bottom;
      let attachmentLeft = highlightRect.left;
      tooltipStyle.display = 'block';
      tooltipStyle.top = `${scrollY + attachmentTop}px`;
      tooltipStyle.left = `${scrollX + attachmentLeft}px`; // Measure the tooltip

      let tooltipRect = this.tooltip.getBoundingClientRect(); // Prefer to attach above the highlight instead, if space permits. This is
      // visually more pleasing and matches the way Chrome attaches its Element
      // inspection tooltips. We had to do this step here instead of setting it
      // at the beginning, because it requires measuring the height of the rendered
      // tooltip.

      let top = highlightRect.top - tooltipRect.height - safetyMargin;

      if (top >= 0) {
        attachmentTop = top;
        this.tooltip.setAttribute('class', `ember-inspector-tooltip-attach-above`);
      } else {
        this.tooltip.setAttribute('class', `ember-inspector-tooltip-attach-below`);
      }

      let leftOffset = 0; // Try to keep the entire tooltip onscreen.

      if (tooltipRect.left < 0) {
        // If the tooltip is partially offscreen to the left (because the higlight
        // is partially offscreen to the left), then push it to the right to stay
        // within the viewport, but not so much that it will become detached.
        leftOffset = Math.max(highlightRect.left - safetyMargin, safetyMargin - highlightRect.width);
      } else if (tooltipRect.right > viewportWidth) {
        // If the tooltip is partially offscreen to the right (because the tooltip
        // is too wide), then push it to the left to stay within the viewport, but
        // not so much that it will become detached.
        leftOffset = Math.min(tooltipRect.right - viewportWidth, tooltipRect.width - safetyMargin * 2);
        tooltipStyle.left = `${scrollX + attachmentLeft - leftOffset}px`;
      } // Left-align the arrow 17px form the left edge of the highlight, unless the
      // component is tiny, in which case, we center it.


      let arrowLeft = Math.min(17, highlightRect.width / 2); // Try to maintain at least 17 pixels to the left/right of the arrow so it
      // doesn't "poke outside" the tooltip.

      if (arrowLeft < 17) {
        leftOffset = Math.max(leftOffset, 17);
      }

      tooltipStyle.top = `${scrollY + attachmentTop}px`;
      tooltipStyle.left = `${scrollX + attachmentLeft - leftOffset}px`;
      let arrow = this.tooltip.querySelector('.ember-inspector-tooltip-arrow');
      arrow.style.left = `${Math.max(leftOffset, 0) + arrowLeft}px`;
    }

    _insertHTML(html) {
      document.body.insertAdjacentHTML('beforeend', html.trim());
      return document.body.lastChild;
    }

    _insertStylesheet(content) {
      let style = document.createElement('style');
      style.appendChild(document.createTextNode(content));
      document.head.appendChild(style);
      return style;
    }

  }

  exports.default = ViewInspection;
});
define("ember-debug/main", ["exports", "ember-debug/adapters/basic", "ember-debug/port", "ember-debug/object-inspector", "ember-debug/general-debug", "ember-debug/render-debug", "ember-debug/view-debug", "ember-debug/route-debug", "ember-debug/data-debug", "ember-debug/promise-debug", "ember-debug/container-debug", "ember-debug/deprecation-debug", "ember-debug/services/session", "ember-debug/utils/ember", "ember-debug/utils/ember/application", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/object/internals", "ember-debug/utils/ember/runloop"], function (exports, _basic, _port, _objectInspector, _generalDebug, _renderDebug, _viewDebug, _routeDebug, _dataDebug, _promiseDebug, _containerDebug, _deprecationDebug, _session, _ember, _application, _object, _computed, _internals, _runloop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const {
    Namespace
  } = _ember.default;

  const EmberDebug = _object.default.extend({
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
    applicationName: (0, _computed.or)('_application.name', '_application.modulePrefix').readOnly(),

    /**
     * We use the application's id instead of the owner's id so that we use the same inspector
     * instance for the same application even if it was reset (owner changes on reset).
     *
     * @property applicationId
     * @type {String}
     */
    applicationId: (0, _object.computed)('_application', 'isTesting', 'owner', function () {
      if (!this.isTesting) {
        return (0, _internals.guidFor)(this._application);
      }

      return (0, _internals.guidFor)(this.owner);
    }),
    // Using object shorthand syntax here is somehow having strange side effects.
    // eslint-disable-next-line object-shorthand
    Port: _port.default,
    Adapter: _basic.default,

    start($keepAdapter) {
      if (this.started) {
        this.reset($keepAdapter);
        return;
      }

      if (!this._application && !this.isTesting) {
        this.set('_application', getApplication());
      }

      this.set('started', true);
      this.reset();
      this.adapter.debug('Ember Inspector Active');
      this.adapter.sendMessage({
        type: 'inspectorLoaded'
      });
    },

    destroyContainer() {
      if (this.generalDebug) {
        this.generalDebug.sendReset();
      }

      ['dataDebug', 'viewDebug', 'routeDebug', 'generalDebug', 'renderDebug', 'promiseDebug', 'containerDebug', 'deprecationDebug', 'objectInspector', 'session'].forEach(prop => {
        let handler = this.get(prop);

        if (handler) {
          (0, _runloop.run)(handler, 'destroy');
          this.set(prop, null);
        }
      });
    },

    startModule(prop, Module) {
      this.set(prop, Module.create({
        namespace: this
      }));
    },

    willDestroy() {
      this.destroyContainer();

      this._super(...arguments);
    },

    reset($keepAdapter) {
      if (!this.isTesting && !this.owner) {
        this.set('owner', getOwner(this._application));
      }

      this.destroyContainer();
      (0, _runloop.run)(() => {
        // Adapters don't have state depending on the application itself.
        // They also maintain connections with the inspector which we will
        // lose if we destroy.
        if (!this.adapter || !$keepAdapter) {
          this.startModule('adapter', this.Adapter);
        }

        if (!this.port || !$keepAdapter) {
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
      });
    },

    inspect(obj) {
      this.objectInspector.sendObject(obj);
      this.adapter.log('Sent to the Object Inspector');
      return obj;
    },

    clear() {
      this.setProperties({
        _application: null,
        owner: null
      });
    }

  }).create();

  function getApplication() {
    let namespaces = Namespace.NAMESPACES;
    let application;
    namespaces.forEach(namespace => {
      if (namespace instanceof _application.default) {
        application = namespace;
        return false;
      }
    });
    return application;
  }

  function getOwner(application) {
    if (application.autoboot) {
      return application.__deprecatedInstance__;
    } else if (application._applicationInstances
    /* Ember 3.1+ */
    ) {
      return application._applicationInstances[0];
    }
  }

  exports.default = EmberDebug;
});
define("ember-debug/models/profile-manager", ["exports", "ember-debug/models/profile-node", "ember-debug/utils/ember", "ember-debug/utils/version", "ember-debug/utils/ember/runloop"], function (exports, _profileNode, _ember, _version, _runloop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function getEdges(first, last, closest) {
    let start = null;
    let end = null;

    for (let i = 0; i < closest.length; i++) {
      if (closest.item(i) === first.node) start = i;else if (closest.item(i) === last.node) end = i;
    }

    return [start, end];
  }

  function getUnfilteredRoots(first, last, closest) {
    if (first.node === last.node) return [first.node];
    const roots = [];
    const [start, end] = getEdges(first, last, closest);
    if (start === null || end === null) return [];

    for (let i = start; i <= end; i++) roots.push(closest.item(i));

    return roots;
  }

  function findRoots({
    first,
    last,
    parent
  }) {
    const closest = parent.childNodes;
    const roots = getUnfilteredRoots(first, last, closest);
    return roots.filter(el => el?.nodeType === 1);
  }

  function makeHighlight() {
    const node = document.createElement('div');
    node.setAttribute('role', 'presentation');
    node.setAttribute('class', 'ember-inspector-render-highlight');
    return node;
  }

  function insertHTML(node) {
    document.body.appendChild(node);
  }

  function insertStylesheet() {
    const content = `
    .ember-inspector-render-highlight {
      border: 2px solid rgba(255,0,0,0.2);
      box-shadow: 0px 0px 1px rgba(255,0,0,0.2);
      z-index: 1000000;
      pointer-events: none;
    }
  `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(content));
    document.head.appendChild(style);
    return style;
  }
  /**
   * A class for keeping track of active rendering profiles as a list.
   */


  class ProfileManager {
    constructor() {
      this.profiles = [];
      this.current = null;
      this.currentSet = [];
      this._profilesAddedCallbacks = [];
      this.queue = [];
      this.shouldHighlightRender = false;
      this.stylesheet = insertStylesheet(); // keep track of all the active highlights

      this.highlights = [];
      this.isHighlightEnabled = (0, _version.compareVersion)(_ember.default?.VERSION, '3.20.0') !== -1;
    }

    began(timestamp, payload, now) {
      return this.wrapForErrors(this, function () {
        this.current = new _profileNode.default(timestamp, payload, this.current, now);

        if (this.shouldHighlightRender && payload.view) {
          this._highLightView(payload.view);
        }

        this.current.isHighlightEnabled = this.isHighlightEnabled;
        return this.current;
      });
    }

    ended(timestamp, payload, profileNode) {
      if (payload.exception) {
        throw payload.exception;
      }

      return this.wrapForErrors(this, function () {
        this.current = profileNode.parent;
        profileNode.finish(timestamp); // Are we done profiling an entire tree?

        if (!this.current) {
          this.currentSet.push(profileNode); // If so, schedule an update of the profile list

          (0, _runloop.scheduleOnce)('afterRender', this, this._profilesFinished);
        }
      });
    }

    wrapForErrors(context, callback) {
      return callback.call(context);
    }

    _highLightView(view) {
      const symbols = Object.getOwnPropertySymbols(view);
      const bounds = view[symbols.find(sym => sym.description === 'BOUNDS')];
      if (!bounds) return;
      const elements = findRoots(bounds);
      elements.forEach(node => {
        this._renderHighlight(node);
      });
    }
    /**
     * Push a new profile into the queue
     * @param info
     * @return {number}
     */


    addToQueue(info) {
      const index = this.queue.push(info);

      if (index === 1) {
        (0, _runloop.later)(this._flush.bind(this), 50);
      }

      return index - 1;
    }

    clearProfiles() {
      this.profiles.length = 0;
    }

    onProfilesAdded(context, callback) {
      this._profilesAddedCallbacks.push({
        context,
        callback
      });
    }

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
    }

    teardown() {
      this.stylesheet?.remove(); // remove all the active highlighted components

      this._removeAllHighlights();
    }

    _removeAllHighlights() {
      const els = this.highlights.slice(0);
      els.forEach(el => {
        this._removeHighlight(el);
      });
    }

    _removeHighlight(highlight) {
      this.highlights = this.highlights.filter(item => item !== highlight);
      (0, _runloop.cancel)(highlight.timeout);
      highlight.el.remove();
    }

    _addHighlight(highlight) {
      insertHTML(highlight.el);
      this.highlights.push(highlight);
      highlight.timeout = (0, _runloop.later)(() => {
        this._removeHighlight(highlight);
      }, 500);
    }

    _constructHighlight(renderedNode) {
      const rect = renderedNode.getBoundingClientRect();
      const highlight = makeHighlight();
      const {
        top,
        left,
        width,
        height
      } = rect;
      const {
        scrollX,
        scrollY
      } = window;
      const {
        style
      } = highlight;

      if (style) {
        style.position = 'absolute';
        style.top = `${top + scrollY}px`;
        style.left = `${left + scrollX}px`;
        style.width = `${width}px`;
        style.height = `${height}px`;
      }

      return highlight;
    }

    _renderHighlight(renderedNode) {
      if (!renderedNode?.getBoundingClientRect) {
        return;
      }

      const highlight = this._constructHighlight(renderedNode);

      this._addHighlight({
        el: highlight
      });
    }

    _flush() {
      let entry, i;

      for (i = 0; i < this.queue.length; i++) {
        entry = this.queue[i];

        if (entry.type === 'began') {
          // If there was an error during rendering `entry.endedIndex` never gets set.
          if (entry.endedIndex) {
            this.queue[entry.endedIndex].profileNode = this.began(entry.timestamp, entry.payload, entry.now);
          }
        } else {
          this.ended(entry.timestamp, entry.payload, entry.profileNode);
        }
      }

      this.queue.length = 0;
    }

    _profilesFinished() {
      return this.wrapForErrors(this, function () {
        const firstNode = this.currentSet[0];
        let parentNode = new _profileNode.default(firstNode.start, {
          template: 'View Rendering'
        });
        parentNode.time = 0;
        this.currentSet.forEach(n => {
          parentNode.time += n.time;
          parentNode.children.push(n);
        });
        parentNode.calcDuration();
        this.profiles.push(parentNode);
        this.profiles = this.profiles.slice(0, 100);

        this._triggerProfilesAdded([parentNode]);

        this.currentSet = [];
      });
    }

    _triggerProfilesAdded(profiles) {
      this._profilesAddedCallbacks.forEach(function (item) {
        item.callback.call(item.context, profiles);
      });
    }

  }

  exports.default = ProfileManager;
});
define("ember-debug/models/profile-node", ["exports", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/internals"], function (exports, _object, _internals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
    A tree structure for assembling a list of render calls so they can be grouped and displayed nicely afterwards.
  
    @class ProfileNode
  **/
  const ProfileNode = function (start, payload, parent, now) {
    let name;
    this.start = start;
    this.timestamp = now || Date.now();

    if (payload) {
      if (payload.template) {
        name = payload.template;
      } else if (payload.view) {
        const view = payload.view;
        name = (0, _object.get)(view, 'instrumentDisplay') || (0, _object.get)(view, '_debugContainerKey');

        if (name) {
          name = name.replace(/^view:/, '');
        }

        this.viewGuid = (0, _internals.guidFor)(view);
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
      this.calcDuration(); // Once we attach to our parent, we remove that reference
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
define("ember-debug/models/promise", ["exports", "ember-debug/utils/type-check", "ember-debug/utils/ember/array", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed"], function (exports, _typeCheck, _array, _object, _computed) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const dateComputed = function () {
    return (0, _object.computed)({
      get() {
        return null;
      },

      set(key, date) {
        if ((0, _typeCheck.typeOf)(date) === 'date') {
          return date;
        } else if (typeof date === 'number' || typeof date === 'string') {
          return new Date(date);
        }

        return null;
      }

    });
  };

  exports.default = _object.default.extend({
    createdAt: dateComputed(),
    settledAt: dateComputed(),
    chainedAt: dateComputed(),
    parent: null,
    children: (0, _object.computed)(function () {
      return (0, _array.A)();
    }),
    level: (0, _object.computed)('parent.level', function () {
      const parent = this.parent;

      if (!parent) {
        return 0;
      }

      return parent.get('level') + 1;
    }),
    isSettled: (0, _computed.or)('isFulfilled', 'isRejected'),
    isFulfilled: (0, _computed.equal)('state', 'fulfilled'),
    isRejected: (0, _computed.equal)('state', 'rejected')
  });
});
define("ember-debug/object-inspector", ["exports", "ember-debug/debug-port", "ember-debug/utils/bound-method", "ember-debug/utils/type-check", "ember-debug/utils/version", "ember-debug/utils/ember", "ember-debug/utils/ember/array/mutable", "ember-debug/utils/ember/array/proxy", "ember-debug/utils/ember/component", "ember-debug/utils/ember/debug", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/object/observable", "ember-debug/utils/ember/object/evented", "ember-debug/utils/ember/object/internals", "ember-debug/utils/ember/object/promise-proxy-mixin", "ember-debug/utils/ember/runloop", "ember-debug/utils/ember/utils"], function (exports, _debugPort, _boundMethod, _typeCheck, _version, _ember, _mutable, _proxy, _component, _debug, _object, _computed, _observable, _evented, _internals, _promiseProxyMixin, _runloop, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /* eslint-disable ember/no-private-routing-service */
  const {
    meta: emberMeta,
    VERSION,
    ActionHandler,
    ControllerMixin,
    CoreObject,
    MutableEnumerable,
    NativeArray,
    ObjectProxy,
    TargetActionSupport
  } = _ember.default;

  const GlimmerComponent = (() => {
    try {
      return window.require('@glimmer/component').default;
    } catch (e) {// ignore, return undefined
    }
  })();

  let tagValue, tagValidate, track, tagForProperty;

  try {
    // Try to load the most recent library
    let GlimmerValidator = _ember.default.__loader.require('@glimmer/validator');

    tagValue = GlimmerValidator.value || GlimmerValidator.valueForTag;
    tagValidate = GlimmerValidator.validate || GlimmerValidator.validateTag;
    track = GlimmerValidator.track;
  } catch (e) {
    try {
      // Fallback to the previous implementation
      let GlimmerReference = _ember.default.__loader.require('@glimmer/reference');

      tagValue = GlimmerReference.value;
      tagValidate = GlimmerReference.validate;
    } catch (e) {// ignore
    }
  }

  try {
    let metal = _ember.default.__loader.require('@ember/-internals/metal');

    tagForProperty = metal.tagForProperty; // If track was not already loaded, use metal's version (the previous version)

    track = track || metal.track;
  } catch (e) {// ignore
  }

  const HAS_GLIMMER_TRACKING = tagValue && tagValidate && track && tagForProperty;
  const keys = Object.keys || _ember.default.keys;
  /**
   * Add Known Ember Mixins and Classes so we can label them correctly in the inspector
   */

  const emberNames = new Map([[_evented.default, 'Evented Mixin'], [_promiseProxyMixin.default, 'PromiseProxy Mixin'], [_mutable.default, 'MutableArray Mixin'], [MutableEnumerable, 'MutableEnumerable Mixin'], [NativeArray, 'NativeArray Mixin'], [_observable.default, 'Observable Mixin'], [ControllerMixin, 'Controller Mixin'], [TargetActionSupport, 'TargetActionSupport Mixin'], [ActionHandler, 'ActionHandler Mixin'], [CoreObject, 'CoreObject'], [_object.default, 'EmberObject'], [_component.default, 'Component']]);

  try {
    const Views = _ember.default.__loader.require('@ember/-internals/views');

    emberNames.set(Views.ViewStateSupport, 'ViewStateSupport Mixin');
    emberNames.set(Views.ViewMixin, 'View Mixin');
    emberNames.set(Views.ActionSupport, 'ActionSupport Mixin');
    emberNames.set(Views.ClassNamesSupport, 'ClassNamesSupport Mixin');
    emberNames.set(Views.ChildViewsSupport, 'ChildViewsSupport Mixin');
    emberNames.set(Views.ViewStateSupport, 'ViewStateSupport  Mixin'); // this one is not a Mixin, but an .extend({}), which results in a class

    emberNames.set(Views.CoreView, 'CoreView');
  } catch (e) {// do nothing
  }
  /**
   * Determine the type and get the value of the passed property
   * @param {*} object The parent object we will look for `key` on
   * @param {string} key The key for the property which points to a computed, EmberObject, etc
   * @param {*} computedValue A value that has already been computed with calculateCP
   * @return {{inspect: (string|*), type: string}|{computed: boolean, inspect: string, type: string}|{inspect: string, type: string}}
   */


  function inspectValue(object, key, computedValue) {
    let string;
    const value = computedValue;

    if (arguments.length === 3 && computedValue === undefined) {
      return {
        type: `type-undefined`,
        inspect: 'undefined'
      };
    } // TODO: this is not very clean. We should refactor calculateCP, etc, rather than passing computedValue


    if (computedValue !== undefined) {
      return {
        type: `type-${(0, _typeCheck.typeOf)(value)}`,
        inspect: inspect(value)
      };
    }

    if (value instanceof _object.default) {
      return {
        type: 'type-ember-object',
        inspect: value.toString()
      };
    } else if ((0, _typeCheck.isComputed)(object, key)) {
      string = '<computed>';
      return {
        type: 'type-descriptor',
        inspect: string
      };
    } else if ((0, _typeCheck.isDescriptor)(value)) {
      return {
        type: 'type-descriptor',
        inspect: value.toString()
      };
    } else {
      return {
        type: `type-${(0, _typeCheck.typeOf)(value)}`,
        inspect: inspect(value)
      };
    }
  }

  function inspect(value) {
    if (typeof value === 'function') {
      return 'function() { ... }';
    } else if (value instanceof _object.default) {
      return value.toString();
    } else if ((0, _typeCheck.typeOf)(value) === 'array') {
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
    } else if ((0, _typeCheck.typeOf)(value) === 'date') {
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


          if ((0, _typeCheck.typeOf)(v).includes('function')) {
            v = 'function() { ... }';
          }

          if ((0, _typeCheck.typeOf)(v) === 'array') {
            v = `[Array : ${v.length}]`;
          }

          if ((0, _typeCheck.typeOf)(v) === 'object') {
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
      return (0, _debug.inspect)(value);
    }
  }

  function isMandatorySetter(descriptor) {
    if (descriptor.set && descriptor.set === _ember.default.MANDATORY_SETTER_FUNCTION) {
      return true;
    }

    if (descriptor.set && Function.prototype.toString.call(descriptor.set).includes('You attempted to update')) {
      return true;
    }

    return false;
  }

  function getTagTrackedProps(tag, ownTag, level = 0) {
    const props = []; // do not include tracked properties from dependencies

    if (!tag || level > 1) {
      return props;
    }

    if (tag.subtag) {
      if (tag.subtag._propertyKey) props.push(tag.subtag._propertyKey);
      props.push(...getTagTrackedProps(tag.subtag, ownTag, level + 1));
    }

    if (tag.subtags) {
      tag.subtags.forEach(t => {
        if (t === ownTag) return;
        if (t._propertyKey) props.push(t._propertyKey);
        props.push(...getTagTrackedProps(t, ownTag, level + 1));
      });
    }

    return props;
  }

  function getTrackedDependencies(object, property, tag) {
    const proto = Object.getPrototypeOf(object);
    if (!proto) return [];
    const cpDesc = emberMeta(object).peekDescriptors(property);
    const dependentKeys = [];

    if (cpDesc) {
      dependentKeys.push(...(cpDesc._dependentKeys || []));
    }

    if (HAS_GLIMMER_TRACKING) {
      const ownTag = tagForProperty(object, property);
      dependentKeys.push(...getTagTrackedProps(tag, ownTag));
    }

    return [...new Set([...dependentKeys])];
  }

  exports.default = _debugPort.default.extend({
    namespace: null,
    adapter: (0, _computed.oneWay)('namespace.adapter'),
    port: (0, _computed.oneWay)('namespace.port'),
    currentObject: null,

    updateCurrentObject() {
      if (this.currentObject) {
        const {
          object,
          mixinDetails,
          objectId
        } = this.currentObject;
        mixinDetails.forEach((mixin, mixinIndex) => {
          mixin.properties.forEach(item => {
            if (item.overridden) {
              return true;
            }

            try {
              let cache = (0, _internals.cacheFor)(object, item.name);
              if (item.isExpensive && !cache) return true;
              if (item.value.type === 'type-function') return true;
              let value = null;
              let changed = false;
              const values = this.objectPropertyValues[objectId] = this.objectPropertyValues[objectId] || {};
              const tracked = this.trackedTags[objectId] = this.trackedTags[objectId] || {};
              const desc = Object.getOwnPropertyDescriptor(object, item.name);
              const isSetter = desc && isMandatorySetter(desc);

              if (HAS_GLIMMER_TRACKING && item.canTrack && !isSetter) {
                let tagInfo = tracked[item.name] || {
                  tag: tagForProperty(object, item.name),
                  revision: 0
                };
                if (!tagInfo.tag) return;
                changed = !tagValidate(tagInfo.tag, tagInfo.revision);

                if (changed) {
                  tagInfo.tag = track(() => {
                    value = (0, _object.get)(object, item.name);
                  });
                  tagInfo.revision = tagValue(tagInfo.tag);
                }

                tracked[item.name] = tagInfo;
              } else {
                value = calculateCP(object, item, {});

                if (values[item.name] !== value) {
                  changed = true;
                  values[item.name] = value;
                }
              }

              if (changed) {
                value = inspectValue(object, item.name, value);
                value.isCalculated = true;
                let dependentKeys = null;

                if (tracked[item.name]) {
                  dependentKeys = getTrackedDependencies(object, item.name, tracked[item.name].tag);
                }

                this.sendMessage('updateProperty', {
                  objectId,
                  property: item.name,
                  value,
                  mixinIndex,
                  dependentKeys
                });
              }
            } catch (e) {// dont do anything
            }
          });
        });
      }
    },

    init() {
      this._super();

      this.set('sentObjects', {});

      _runloop._backburner.on('end', (0, _boundMethod.default)(this, this.updateCurrentObject));
    },

    willDestroy() {
      this._super();

      for (let objectId in this.sentObjects) {
        this.releaseObject(objectId);
      }

      _runloop._backburner.off('end', (0, _boundMethod.default)(this, this.updateCurrentObject));
    },

    sentObjects: {},
    parentObjects: {},
    objectPropertyValues: {},
    trackedTags: {},
    _errorsFor: (0, _object.computed)(function () {
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
          message.isCalculated = true;
        }

        this.sendMessage('updateErrors', {
          objectId: message.objectId,
          errors: errorsToSend(this._errorsFor[message.objectId])
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
        const routerLib = router._routerMicrolib || router.router; // 3.9.0 removed intimate APIs from router
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
        let errors = this._errorsFor[message.objectId];
        toArray(errors).forEach(error => {
          let stack = error.error;

          if (stack && stack.stack) {
            stack = stack.stack;
          } else {
            stack = error;
          }

          this.adapter.log(`Object Inspector error for ${error.property}`, stack);
        });
      }

    },

    canSend(val) {
      return val && (val instanceof _object.default || val instanceof Object || (0, _typeCheck.typeOf)(val) === 'object' || (0, _typeCheck.typeOf)(val) === 'array');
    },

    saveProperty(objectId, prop, val) {
      let object = this.sentObjects[objectId];
      (0, _runloop.join)(() => (0, _object.set)(object, prop, val));
    },

    sendToConsole(objectId, prop) {
      let object = this.sentObjects[objectId];
      let value;

      if ((0, _utils.isNone)(prop)) {
        value = this.sentObjects[objectId];
      } else {
        value = calculateCP(object, {
          name: prop
        }, {});
      }

      this.sendValueToConsole(value);
    },

    sendValueToConsole(value) {
      window.$E = value;

      if (value instanceof Error) {
        value = value.stack;
      }

      let args = [value];

      if (value instanceof _object.default) {
        args.unshift(inspect(value));
      }

      this.adapter.log('Ember Inspector ($E): ', ...args);
    },

    digIntoObject(objectId, property) {
      let parentObject = this.sentObjects[objectId];
      let object = calculateCP(parentObject, {
        name: property
      }, {});

      if (this.canSend(object)) {
        const currentObject = this.currentObject;
        let details = this.mixinsForObject(object);
        this.parentObjects[details.objectId] = currentObject;
        this.sendMessage('updateObject', {
          parentObject: objectId,
          property,
          objectId: details.objectId,
          name: getClassName(object),
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
        name: getClassName(object),
        details: details.mixins,
        errors: details.errors
      });
    },

    retainObject(object) {
      let meta = emberMeta(object);
      let guid = (0, _internals.guidFor)(object);
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
      let guid = (0, _internals.guidFor)(object);
      meta._debugReferences--;

      if (meta._debugReferences === 0) {
        this.dropObject(guid);
      }
    },

    dropObject(objectId) {
      let object = this.sentObjects[objectId];

      if (this.parentObjects[objectId]) {
        this.currentObject = this.parentObjects[objectId];
      }

      delete this.parentObjects[objectId];

      if (object && object.reopen) {
        object.reopen({
          willDestroy: object._oldWillDestroy
        });
        delete object._oldWillDestroy;
      }

      delete this.sentObjects[objectId];
      delete this.objectPropertyValues[objectId];
      delete this.trackedTags[objectId];

      if (this.currentObject && this.currentObject.objectId === objectId) {
        this.currentObject = null;
      }

      delete this._errorsFor[objectId];
      this.sendMessage('droppedObject', {
        objectId
      });
    },

    /**
     * This function, and the rest of Ember Inspector, currently refer to the
     * output entirely as mixins. However, this is no longer accurate! This has
     * been refactored to return a list of objects that represent both the classes
     * themselves and their mixins. For instance, the following class definitions:
     *
     * ```js
     * class Foo extends EmberObject {}
     *
     * class Bar extends Foo {}
     *
     * class Baz extends Bar.extend(Mixin1, Mixin2) {}
     *
     * let obj = Baz.create();
     * ```
     *
     * Will result in this in the inspector:
     *
     * ```
     * - Own Properties
     * - Baz
     * - Mixin1
     * - Mixin2
     * - Bar
     * - Foo
     * - EmberObject
     * ```
     *
     * The "mixins" returned by this function directly represent these things too.
     * Each class object consists of the actual own properties of that class's
     * prototype, and is followed by the mixins (if any) that belong to that
     * class. Own Properties represents the actual own properties of the object
     * itself.
     *
     * TODO: The rest of the Inspector should be updated to reflect this new data
     * model, and these functions should be updated with new names. Mixins should
     * likely be embedded _on_ the class definitions, but this was designed to be
     * backwards compatible.
     */
    mixinDetailsForObject(object) {
      const mixins = [];
      const own = ownMixins(object);
      const objectMixin = {
        id: (0, _internals.guidFor)(object),
        name: getClassName(object),
        properties: ownProperties(object, own)
      };
      mixins.push(objectMixin); // insert ember mixins

      for (let mixin of own) {
        let name = (mixin[_ember.default.NAME_KEY] || mixin.ownerConstructor || emberNames.get(mixin) || '').toString();

        if (!name && typeof mixin.toString === 'function') {
          try {
            name = mixin.toString();

            if (name === '(unknown)') {
              name = '(unknown mixin)';
            }
          } catch (e) {
            name = '(Unable to convert Object to string)';
          }
        }

        const mix = {
          properties: propertiesForMixin(mixin),
          name,
          isEmberMixin: true,
          id: (0, _internals.guidFor)(mixin)
        };
        mixins.push(mix);
      }

      const proto = Object.getPrototypeOf(object);

      if (proto && proto !== Object.prototype) {
        mixins.push(...this.mixinDetailsForObject(proto));
      }

      return mixins;
    },

    mixinsForObject(object) {
      if (object instanceof ObjectProxy && object.content && !object._showProxyDetails) {
        object = object.content;
      }

      if (object instanceof _proxy.default && object.content && !object._showProxyDetails) {
        object = object.slice(0, 101);
      }

      let mixinDetails = this.mixinDetailsForObject(object);
      mixinDetails[0].name = 'Own Properties';
      mixinDetails[0].expand = true;

      if (mixinDetails[1] && !mixinDetails[1].isEmberMixin) {
        mixinDetails[1].expand = true;
      }

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
      let errorsForObject = this._errorsFor[objectId] = {};
      const tracked = this.trackedTags[objectId] = this.trackedTags[objectId] || {};
      calculateCPs(object, mixinDetails, errorsForObject, expensiveProperties, tracked);
      this.currentObject = {
        object,
        mixinDetails,
        objectId
      };
      let errors = errorsToSend(errorsForObject);
      return {
        objectId,
        mixins: mixinDetails,
        errors
      };
    },

    valueForObjectProperty(objectId, property, mixinIndex) {
      let object = this.sentObjects[objectId],
          value;

      if (object.isDestroying) {
        value = '<DESTROYED>';
      } else {
        value = calculateCP(object, {
          name: property
        }, this._errorsFor[objectId]);
      }

      if (!value || !(value instanceof CalculateCPError)) {
        value = inspectValue(object, property, value);
        value.isCalculated = true;
        return {
          objectId,
          property,
          value,
          mixinIndex
        };
      }
    },

    inspect,
    inspectValue
  });

  function getClassName(object) {
    let name = '';
    let className = object.constructor && (emberNames.get(object.constructor) || object.constructor.name) || '';

    if (object.constructor && object.constructor.prototype === object) {
      let {
        constructor
      } = object;

      if (constructor.toString && constructor.toString !== Object.prototype.toString) {
        name = constructor.toString();
      } else {
        name = constructor.name;
      }
    } else if ('toString' in object && object.toString !== Object.prototype.toString) {
      name = object.toString();
    } // If the class has a decent looking name, and the `toString` is one of the
    // default Ember toStrings, replace the constructor portion of the toString
    // with the class name. We check the length of the class name to prevent doing
    // this when the value is minified.


    if (name.match(/<.*:.*>/) && !className.startsWith('_') && className.length > 2 && className !== 'Class') {
      return name.replace(/<.*:/, `<${className}:`);
    }

    return name || className;
  }

  function ownMixins(object) {
    // TODO: We need to expose an API for getting _just_ the own mixins directly
    let meta = emberMeta(object);
    let parentMeta = meta.parent;
    let mixins = new Set(); // Filter out anonymous mixins that are directly in a `class.extend`

    let baseMixins = object.constructor && object.constructor.PrototypeMixin && object.constructor.PrototypeMixin.mixins;
    meta.forEachMixins(m => {
      // Find mixins that:
      // - Are not in the parent classes
      // - Are not primitive (has mixins, doesn't have properties)
      // - Don't include any of the base mixins from a class extend
      if ((!parentMeta || !parentMeta.hasMixin(m)) && !m.properties && m.mixins && (!baseMixins || !m.mixins.some(m => baseMixins.includes(m)))) {
        mixins.add(m);
      }
    });
    return mixins;
  }

  function ownProperties(object, ownMixins) {
    let meta = emberMeta(object);

    if (Array.isArray(object)) {
      // slice to max 101, for performance and so that the object inspector will show a `more items` indicator above 100
      object = object.slice(0, 101);
    }

    let props = Object.getOwnPropertyDescriptors(object);
    delete props.constructor; // meta has the correct descriptors for CPs

    meta.forEachDescriptors((name, desc) => {
      // only for own properties
      if (props[name]) {
        props[name] = desc;
      }
    }); // remove properties set by mixins
    // especially for Object.extend(mixin1, mixin2), where a new class is created which holds the merged properties
    // if all properties are removed, it will be marked as useless mixin and will not be shown

    ownMixins.forEach(m => {
      if (m.mixins) {
        m.mixins.forEach(mix => {
          Object.keys(mix.properties || {}).forEach(k => {
            const pDesc = Object.getOwnPropertyDescriptor(mix.properties, k);

            if (pDesc && props[k] && pDesc.get && pDesc.get === props[k].get) {
              delete props[k];
            }

            if (pDesc && props[k] && 'value' in pDesc && pDesc.value === props[k].value) {
              delete props[k];
            }

            if (pDesc && props[k] && pDesc._getter === props[k]._getter) {
              delete props[k];
            }
          });
        });
      }
    });
    Object.keys(props).forEach(k => {
      if (typeof props[k].value === 'function') {
        return;
      }

      props[k].isDescriptor = true;
    }); // Clean the properties, removing private props and bindings, etc

    return addProperties([], props);
  }

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

      if (isInternalProperty(prop)) {
        continue;
      } // remove `fooBinding` type props


      if (prop.match(/Binding$/)) {
        continue;
      } // when mandatory setter is removed, an `undefined` value may be set


      const desc = (0, _typeCheck.getDescriptorFor)(hash, prop) || Object.getOwnPropertyDescriptor(hash, prop);
      if (!desc) continue;

      if (hash[prop] === undefined && desc.value === undefined && !desc.get && !desc._getter) {
        continue;
      }

      let options = {
        isMandatorySetter: isMandatorySetter(desc)
      };

      if (typeof hash[prop] === 'object' && hash[prop] !== null) {
        options.isService = !('type' in hash[prop]) && typeof hash[prop].unknownProperty === 'function' ? (0, _object.get)(hash[prop], 'type') === 'service' : hash[prop].type === 'service';

        if (!options.isService) {
          if (hash[prop].constructor) {
            options.isService = hash[prop].constructor.isServiceFactory;
          }
        }

        if (!options.isService) {
          options.isService = desc.value instanceof _ember.default.Service;
        }
      }

      if (options.isService) {
        replaceProperty(properties, prop, inspectValue(hash, prop), options);
        continue;
      }

      if ((0, _typeCheck.isComputed)(hash, prop)) {
        options.isComputed = true;
        options.dependentKeys = (desc._dependentKeys || []).map(key => key.toString());

        if (typeof desc.get === 'function') {
          options.code = Function.prototype.toString.call(desc.get);
        }

        if (typeof desc._getter === 'function') {
          options.isCalculated = true;
          options.code = Function.prototype.toString.call(desc._getter);
        }

        if (!options.code) {
          options.code = '';
        }

        options.readOnly = desc._readOnly;
        options.auto = desc._auto;
        options.canTrack = options.code !== '';
      }

      if (desc.get) {
        options.isGetter = true;
        options.canTrack = true;

        if (!desc.set) {
          options.readOnly = true;
        }
      }

      if (desc.hasOwnProperty('value') || options.isMandatorySetter) {
        delete options.isGetter;
        delete options.isTracked;
        options.isProperty = true;
        options.canTrack = false;
      }

      replaceProperty(properties, prop, inspectValue(hash, prop), options);
    }

    return properties;
  }

  function isInternalProperty(property) {
    if (['_state', '_states', '_target', '_currentState', '_oldWillDestroy', '_super', '_debugContainerKey', '_transitionTo', '_debugInfo', '_showProxyDetails'].includes(property)) {
      return true;
    }

    let isInternalProp = ['__LEGACY_OWNER', '__ARGS__', '__HAS_BLOCK__', '__PROPERTY_DID_CHANGE__'].any(internalProp => property.startsWith(internalProp));

    if (isInternalProp) {
      return true;
    }

    return false;
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

    let prop = {
      name,
      value
    };
    prop.isMandatorySetter = options.isMandatorySetter;
    prop.readOnly = options.readOnly;
    prop.auto = options.auto;
    prop.canTrack = options.canTrack;
    prop.isComputed = options.isComputed;
    prop.isProperty = options.isProperty;
    prop.isTracked = options.isTracked;
    prop.isGetter = options.isGetter;
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
        } else if (seen.hasOwnProperty(property.name) && seen[property.name]) {
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
          delete property.value.isCalculated;
        }

        seen[property.name] = detail.name;
      });
    });
  }

  function calculateCPs(object, mixinDetails, errorsForObject, expensiveProperties, tracked) {
    expensiveProperties = expensiveProperties || [];
    mixinDetails.forEach(mixin => {
      mixin.properties.forEach(item => {
        if (item.overridden) {
          return true;
        }

        if (!item.value.isCalculated) {
          let cache = (0, _internals.cacheFor)(object, item.name);
          item.isExpensive = expensiveProperties.indexOf(item.name) >= 0;

          if (cache !== undefined || !item.isExpensive) {
            let value;

            if (item.canTrack && HAS_GLIMMER_TRACKING) {
              const tagInfo = tracked[item.name] = {};
              tagInfo.tag = track(() => {
                value = calculateCP(object, item, errorsForObject);
              });

              if (tagInfo.tag === tagForProperty(object, item.name)) {
                if (!item.isComputed && !item.isService) {
                  item.code = '';
                  item.isTracked = true;
                }
              }

              tagInfo.revision = tagValue(tagInfo.tag);
              item.dependentKeys = getTrackedDependencies(object, item.name, tagInfo.tag);
            } else {
              value = calculateCP(object, item, errorsForObject);
            }

            if (!value || !(value instanceof CalculateCPError)) {
              item.value = inspectValue(object, item.name, value);
              item.value.isCalculated = true;

              if (item.value.type === 'type-function') {
                item.code = '';
              }
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

      if (mixin.properties.length === 0 && mixin.name.toLowerCase().includes('unknown')) {
        // nothing useful for this mixin
        return;
      }

      if (skipMixins.indexOf(mixin.name) === -1) {
        newMixinDetails.push(mixin);
      }
    });
    groups.slice().reverse().forEach(group => {
      let newMixin = {
        name: group.name,
        expand: group.expand,
        properties: []
      };
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

  function getDebugInfo(object) {
    let debugInfo = null;
    let objectDebugInfo = (0, _object.get)(object, '_debugInfo');

    if (objectDebugInfo && typeof objectDebugInfo === 'function') {
      if (object instanceof _ember.default.ObjectProxy && object.content) {
        object = object.content;
      }

      debugInfo = objectDebugInfo.call(object);
    }

    debugInfo = debugInfo || {};
    let propertyInfo = debugInfo.propertyInfo || (debugInfo.propertyInfo = {});
    let skipProperties = propertyInfo.skipProperties = propertyInfo.skipProperties || (propertyInfo.skipProperties = []);
    skipProperties.push('isDestroyed', 'isDestroying', 'container'); // 'currentState' and 'state' are un-observable private properties.
    // The rest are skipped to reduce noise in the inspector.

    if (_ember.default.Component && object instanceof _ember.default.Component) {
      skipProperties.push('currentState', 'state', 'buffer', 'outletSource', 'lengthBeforeRender', 'lengthAfterRender', 'template', 'layout', 'templateData', 'domManager', 'states', 'element', 'targetObject');
    } else if (GlimmerComponent && object instanceof GlimmerComponent) {
      // These properties don't really exist on Glimmer Components, but
      // reading their values trigger a development mode assertion. The
      // more correct long term fix is to make getters lazy (shows "..."
      // in the UI and only computed them when requested (when the user
      // clicked on the "..." in the UI).
      skipProperties.push('bounds', 'debugName', 'element');
    }

    return debugInfo;
  }

  function toArray(errors) {
    return keys(errors).map(key => errors[key]);
  }

  function calculateCP(object, item, errorsForObject) {
    const property = item.name;
    delete errorsForObject[property];

    try {
      if (object instanceof _ember.default.ArrayProxy && property == parseInt(property)) {
        return object.objectAt(property);
      }

      return item.isGetter ? object[property] : (0, _object.get)(object, property);
    } catch (error) {
      errorsForObject[property] = {
        property,
        error
      };
      return new CalculateCPError();
    }
  }

  function CalculateCPError() {}

  function errorsToSend(errors) {
    return toArray(errors).map(error => ({
      property: error.property
    }));
  }
});
define("ember-debug/port", ["exports", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/object/evented", "ember-debug/utils/ember/object/internals", "ember-debug/utils/ember/runloop"], function (exports, _object, _computed, _evented, _internals, _runloop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _object.default.extend(_evented.default, {
    adapter: (0, _computed.readOnly)('namespace.adapter'),
    applicationId: (0, _computed.readOnly)('namespace.applicationId'),
    applicationName: (0, _computed.or)('namespace._application.name', 'namespace._application.modulePrefix').readOnly(),

    /**
     * Unique id per application (not application instance). It's very important
     * that this id doesn't change when the app is reset otherwise the inspector
     * will no longer recognize the app.
     *
     * @property uniqueId
     * @type {String}
     */
    uniqueId: (0, _object.computed)('namespace._application', function () {
      return (0, _internals.guidFor)(this.get('namespace._application'));
    }),

    init() {
      /**
       * Stores the timestamp when it was first accessed.
       *
       * @property now
       * @type {Number}
       */
      this.now = Date.now();
      this.adapter.onMessageReceived(message => {
        if (this.uniqueId === message.applicationId || !message.applicationId) {
          this.messageReceived(message.type, message);
        }
      });
    },

    messageReceived(name, message) {
      // We should generally not be run-wrapping here. Starting a runloop in
      // ember-debug will cause the inspected app to revalidate/rerender. We
      // are generally not intending to cause changes to the rendered output
      // of the app, so this is generally unnecessary, and in big apps this
      // could be quite slow. There is nothing special about the `view:*`
      // messages – I (GC) just happened to have reviewed all of them recently
      // and can be quite sure that they don't need the runloop. We should
      // audit the rest of them and see if we can remove the else branch. I
      // think we most likely can. In the limited cases (if any) where the
      // runloop is needed, the callback code should just do the wrapping
      // themselves.
      if (name.startsWith('view:')) {
        try {
          this.trigger(name, message);
        } catch (error) {
          this.adapter.handleError(error);
        }
      } else {
        this.wrap(() => {
          this.trigger(name, message);
        });
      }
    },

    send(messageType, options = {}) {
      options.type = messageType;
      options.from = 'inspectedWindow';
      options.applicationId = this.uniqueId;
      options.applicationName = this.applicationName;
      this.adapter.send(options);
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
      return (0, _runloop.run)(this, function () {
        try {
          return fn();
        } catch (error) {
          this.adapter.handleError(error);
        }
      });
    }

  });
});
define("ember-debug/promise-debug", ["exports", "ember-debug/debug-port", "ember-debug/libs/promise-assembler", "ember-debug/utils/ember/array", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/runloop", "ember-debug/utils/rsvp"], function (exports, _debugPort, _promiseAssembler, _array, _object, _computed, _runloop, _rsvp) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugPort.default.extend({
    namespace: null,
    objectInspector: (0, _computed.readOnly)('namespace.objectInspector'),
    adapter: (0, _computed.readOnly)('namespace.adapter'),
    portNamespace: 'promise',
    session: (0, _computed.readOnly)('namespace.session'),
    // created on init
    promiseAssembler: null,
    updatedPromises: null,
    releaseMethods: null,

    init() {
      this._super();

      this.promiseAssembler = _promiseAssembler.default.create();
      this.updatedPromises = (0, _array.A)();
      this.releaseMethods = (0, _array.A)();
      this.setInstrumentWithStack();
      this.sendInstrumentWithStack();
      this.promiseAssembler.start();
    },

    delay: 100,

    willDestroy() {
      this.releaseAll();

      if (this.promiseAssembler) {
        this.promiseAssembler.destroy();
      }

      this.promiseAssembler = null;

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
        let promise = this.promiseAssembler.find(promiseId);
        let value = promise.get('value');

        if (value === undefined) {
          value = promise.get('reason');
        }

        this.objectInspector.sendValueToConsole(value);
      },

      tracePromise(message) {
        let id = message.promiseId;
        let promise = this.promiseAssembler.find(id); // Remove first two lines and add label

        let stack = promise.get('stack');

        if (stack) {
          stack = stack.split('\n');
          stack.splice(0, 2, [`Ember Inspector (Promise Trace): ${promise.get('label') || ''}`]);
          this.adapter.log(stack.join('\n'));
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
    instrumentWithStack: (0, _object.computed)('session', {
      get() {
        return !!this.session.getItem('promise:stack');
      },

      set(key, value) {
        this.session.setItem('promise:stack', value);
        return value;
      }

    }),

    sendInstrumentWithStack() {
      this.sendMessage('instrumentWithStack', {
        instrumentWithStack: this.instrumentWithStack
      });
    },

    setInstrumentWithStack() {
      _rsvp.default.configure('instrument-with-stack', this.instrumentWithStack);

      this.sendInstrumentWithStack();
    },

    releaseAll() {
      this.releaseMethods.forEach(fn => {
        fn();
      });
      this.releaseMethods.clear();
    },

    getAndObservePromises() {
      this.promiseAssembler.on('created', this, this.promiseUpdated);
      this.promiseAssembler.on('fulfilled', this, this.promiseUpdated);
      this.promiseAssembler.on('rejected', this, this.promiseUpdated);
      this.promiseAssembler.on('chained', this, this.promiseChained);
      this.releaseMethods.pushObject(() => {
        this.promiseAssembler.off('created', this, this.promiseUpdated);
        this.promiseAssembler.off('fulfilled', this, this.promiseUpdated);
        this.promiseAssembler.off('rejected', this, this.promiseUpdated);
        this.promiseAssembler.off('chained', this, this.promiseChained);
      });
      this.promisesUpdated(this.promiseAssembler.find());
    },

    promisesUpdated(uniquePromises) {
      if (!uniquePromises) {
        uniquePromises = (0, _array.A)();
        this.updatedPromises.forEach(promise => {
          uniquePromises.addObject(promise);
        });
      } // Remove inspector-created promises


      uniquePromises = uniquePromises.filter(promise => promise.get('label') !== 'ember-inspector');
      const serialized = this.serializeArray(uniquePromises);
      this.sendMessage('promisesUpdated', {
        promises: serialized
      });
      this.updatedPromises.clear();
    },

    promiseUpdated(event) {
      this.updatedPromises.pushObject(event.promise);
      (0, _runloop.debounce)(this, 'promisesUpdated', this.delay);
    },

    promiseChained(event) {
      this.updatedPromises.pushObject(event.promise);
      this.updatedPromises.pushObject(event.child);
      (0, _runloop.debounce)(this, 'promisesUpdated', this.delay);
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
      let objectInspector = this.objectInspector;
      let inspected = objectInspector.inspectValue(promise, key);

      if (inspected.type === 'type-ember-object' || inspected.type === 'type-array') {
        console.count('inspectValue');
        inspected.objectId = objectInspector.retainObject(promise.get(key));
        this.releaseMethods.pushObject(function () {
          objectInspector.releaseObject(inspected.objectId);
        });
      }

      return inspected;
    }

  });
});
define("ember-debug/render-debug", ["exports", "ember-debug/debug-port", "ember-debug/models/profile-manager", "ember-debug/utils/ember/instrumentation"], function (exports, _debugPort, _profileManager, _instrumentation) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // Initial setup, that has to occur before the EmberObject init for some reason
  let profileManager = new _profileManager.default();

  _subscribeToRenderEvents();

  exports.default = _debugPort.default.extend({
    namespace: null,
    portNamespace: 'render',
    profileManager,

    init() {
      this._super();

      this.profileManager.wrapForErrors = (context, callback) => this.port.wrap(() => callback.call(context));

      this.profileManager.onProfilesAdded(this, this._updateComponentTree);
    },

    willDestroy() {
      this._super();

      this.profileManager.wrapForErrors = function (context, callback) {
        return callback.call(context);
      };

      this.profileManager.offProfilesAdded(this, this.sendAdded);
      this.profileManager.offProfilesAdded(this, this._updateComponentTree);
      this.profileManager.teardown();
    },

    sendAdded(profiles) {
      this.sendMessage('profilesAdded', {
        profiles,
        isHighlightSupported: this.profileManager.isHighlightEnabled
      });
    },

    /**
     * Update the components tree. Called on each `render.component` event.
     * @private
     */
    _updateComponentTree() {
      this.namespace.viewDebug.sendTree();
    },

    messages: {
      clear() {
        this.profileManager.clearProfiles();
        this.sendMessage('profilesUpdated', {
          profiles: []
        });
      },

      releaseProfiles() {
        this.profileManager.offProfilesAdded(this, this.sendAdded);
      },

      watchProfiles() {
        this.sendMessage('profilesAdded', {
          profiles: this.profileManager.profiles
        });
        this.profileManager.onProfilesAdded(this, this.sendAdded);
      },

      updateShouldHighlightRender({
        shouldHighlightRender
      }) {
        this.profileManager.shouldHighlightRender = shouldHighlightRender;
      }

    }
  });

  /**
   * This subscribes to render events, so every time the page rerenders, it will push a new profile
   * @return {*}
   * @private
   */
  function _subscribeToRenderEvents() {
    (0, _instrumentation.subscribe)('render', {
      before(name, timestamp, payload) {
        const info = {
          type: 'began',
          timestamp,
          payload,
          now: Date.now()
        };
        return profileManager.addToQueue(info);
      },

      after(name, timestamp, payload, beganIndex) {
        const endedInfo = {
          type: 'ended',
          timestamp,
          payload
        };
        const index = profileManager.addToQueue(endedInfo);
        profileManager.queue[beganIndex].endedIndex = index;
      }

    });
  }
});
define("ember-debug/route-debug", ["exports", "ember-debug/debug-port", "ember-debug/utils/version", "ember-debug/utils/classify", "ember-debug/utils/dasherize", "ember-debug/utils/ember", "ember-debug/utils/ember/object", "ember-debug/utils/ember/object/computed", "ember-debug/utils/ember/runloop"], function (exports, _debugPort, _version, _classify, _dasherize, _ember, _object, _computed, _runloop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /* eslint-disable ember/no-private-routing-service */
  const {
    hasOwnProperty
  } = Object.prototype;
  exports.default = _debugPort.default.extend({
    namespace: null,
    router: (0, _object.computed)('namespace.owner', function () {
      return this.get('namespace.owner').lookup('router:main');
    }),
    applicationController: (0, _object.computed)('namespace.owner', function () {
      const container = this.get('namespace.owner');
      return container.lookup('controller:application');
    }),
    currentPath: (0, _computed.readOnly)('namespace.owner.router.currentPath'),
    currentURL: (0, _computed.readOnly)('namespace.owner.router.currentURL'),
    portNamespace: 'route',
    emberCliConfig: (0, _computed.readOnly)('namespace.generalDebug.emberCliConfig'),
    messages: {
      getTree() {
        this.sendTree();
      },

      getCurrentRoute() {
        this.sendCurrentRoute();
      }

    },
    // eslint-disable-next-line ember/no-observers
    sendCurrentRoute: (0, _object.observer)('currentURL', function () {
      const {
        currentPath: name,
        currentURL: url
      } = this.getProperties('currentPath', 'currentURL');
      (0, _runloop.later)(() => {
        this.sendMessage('currentRoute', {
          name,
          url
        });
      }, 50);
    }),
    routeTree: (0, _object.computed)('router', function () {
      const router = this.router;
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

      return arrayizeChildren({
        children: routeTree
      });
    }),

    sendTree() {
      const routeTree = this.routeTree;
      this.sendMessage('routeTree', {
        tree: routeTree
      });
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
        name = (0, _dasherize.default)(name);
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
          className = (0, _classify.default)(`${name.replace(/\./g, '_')}_${type}`);
        } else {
          className = name.replace(/\./g, '/');
        }
      }

      return className;
    }

  });

  /**
   *
   * @param {*} routeTree
   * @param {*} route
   * @return {Void}
   */
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
        const router = this.router;
        const routerLib = router._routerMicrolib || router.router; // 3.9.0 removed intimate APIs from router
        // https://github.com/emberjs/ember.js/pull/17843
        // https://deprecations.emberjs.com/v3.x/#toc_remove-handler-infos

        if ((0, _version.compareVersion)(_ember.default.VERSION, '3.9.0') !== -1) {
          // Ember >= 3.9.0
          routeHandler = routerLib.getRoute(handler);
        } else {
          // Ember < 3.9.0
          routeHandler = routerLib.getHandler(handler);
        } // Skip when route is an unresolved promise


        if (typeof routeHandler?.then === 'function') {
          // ensure we rebuild the route tree when this route is resolved
          routeHandler.then(() => this.notifyPropertyChange('routeTree'));
          controllerName = '(unresolved)';
          controllerClassName = '(unresolved)';
          templateName = '(unresolved)';
        } else {
          controllerName = routeHandler.get('controllerName') || routeHandler.get('routeName');
          controllerFactory = owner.factoryFor ? owner.factoryFor(`controller:${controllerName}`) : owner._lookupFactory(`controller:${controllerName}`);
          controllerClassName = this.getClassName(controllerName, 'controller');
          templateName = this.getClassName(handler, 'template');
        }

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
    let obj = {}; // Top node doesn't have a value

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
  /**
   *
   * @param {*} container
   * @param {*} segments
   * @return {String}
   */


  function getURL(container, segments) {
    const locationImplementation = container.lookup('router:main').location;
    let url = [];

    for (let i = 0; i < segments.length; i++) {
      let name = null;

      if (typeof segments[i].generate !== 'function') {
        let {
          type,
          value
        } = segments[i];

        if (type === 1) {
          // dynamic
          name = `:${value}`;
        } else if (type === 2) {
          // star
          name = `*${value}`;
        } else {
          name = value;
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
  /**
   *
   * @param {String} owner
   * @param {String} name
   * @return {Void}
   */


  function routeHasBeenDefined(owner, name) {
    return owner.hasRegistration(`template:${name}`) || owner.hasRegistration(`route:${name}`);
  }
});
define("ember-debug/services/session", ["exports", "ember-debug/utils/ember/object"], function (exports, _object) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const Session = _object.default.extend({
    setItem() {},

    removeItem() {},

    getItem() {}

  });

  let SESSION_STORAGE_SUPPORTED = false;

  try {
    if (typeof sessionStorage !== 'undefined') {
      SESSION_STORAGE_SUPPORTED = true;
    }
  } catch (e) {// This can be reached with the following succession of events:
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
  } // Feature detection


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
define("ember-debug/utils/bound-method", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = bound;
  const ENTRIES = new WeakMap();

  function entriesFor(obj) {
    let entries = ENTRIES.get(obj);

    if (entries === undefined) {
      entries = new WeakMap();
      ENTRIES.set(obj, entries);
    }

    return entries;
  }
  /**
   * Return `method.bind(obj)` or `obj[method].bind(obj)`. When called multiple
   * times, the same bound function will be returned.
   *
   * @param {Object} obj
   * @param {String|Symbol|Function} method
   * @return {Function}
   */


  function bound(obj, method) {
    let func;

    if (typeof method === 'function') {
      func = method;
    } else {
      func = obj[method];

      if (typeof func !== 'function') {
        throw new TypeError(`${obj}[${method}] is not a function (was ${func})`);
      }
    }

    let entries = entriesFor(obj);
    let bound = entries.get(func);

    if (bound === undefined) {
      bound = func.bind(obj);
      entries.set(func, bound);
    }

    return bound;
  }
});
define("ember-debug/utils/classify", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = classify;
  const STRING_CLASSIFY_REGEXP_1 = /^(\-|_)+(.)?/;
  const STRING_CLASSIFY_REGEXP_2 = /(.)(\-|\_|\.|\s)+(.)?/g;
  const STRING_CLASSIFY_REGEXP_3 = /(^|\/|\.)([a-z])/g;

  function classify(str) {
    let replace1 = (_match, _separator, chr) => chr ? `_${chr.toUpperCase()}` : '';

    let replace2 = (_match, initialChar, _separator, chr) => initialChar + (chr ? chr.toUpperCase() : '');

    let parts = str.split('/');

    for (let i = 0; i < parts.length; i++) {
      parts[i] = parts[i].replace(STRING_CLASSIFY_REGEXP_1, replace1).replace(STRING_CLASSIFY_REGEXP_2, replace2);
    }

    return parts.join('/').replace(STRING_CLASSIFY_REGEXP_3, (match
    /*, separator, chr */
    ) => match.toUpperCase());
  }
});
define("ember-debug/utils/dasherize", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = dasherize;
  const STRING_DASHERIZE_REGEXP = /[ _]/g;

  function dasherize(str) {
    return str.replace(STRING_DASHERIZE_REGEXP, '-');
  }
});
define("ember-debug/utils/ember/application", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Application;

  try {
    Application = requireModule('@ember/application')['default'];
  } catch {
    Application = _ember.default.Application;
  }

  exports.default = Application;
});
define("ember-debug/utils/ember/array/index", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.A = undefined;

  let _module;

  try {
    _module = requireModule('@ember/array');
  } catch {
    _module = _ember.default;
  }

  let {
    A
  } = _module;
  exports.A = A;
});
define("ember-debug/utils/ember/array/mutable", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let MutableArray;

  try {
    MutableArray = requireModule('@ember/array/mutable')['default'];
  } catch {
    MutableArray = _ember.default.MutableArray;
  }

  exports.default = MutableArray;
});
define("ember-debug/utils/ember/array/proxy", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let ArrayProxy;

  try {
    ArrayProxy = requireModule('@ember/array/proxy')['default'];
  } catch {
    ArrayProxy = _ember.default.ArrayProxy;
  }

  exports.default = ArrayProxy;
});
define("ember-debug/utils/ember/component", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Component;

  try {
    Component = requireModule('@ember/component')['default'];
  } catch {
    Component = _ember.default.Component;
  }

  exports.default = Component;
});
define("ember-debug/utils/ember/debug", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.registerDeprecationHandler = exports.inspect = undefined;

  let _module;

  let inspect = exports.inspect = undefined;

  try {
    _module = requireModule('@ember/debug');
    exports.inspect = inspect = _module.inspect;
  } catch {
    _module = _ember.default.Debug;
    exports.inspect = inspect = _ember.default.inspect;
  }

  let {
    registerDeprecationHandler
  } = _module;
  exports.registerDeprecationHandler = registerDeprecationHandler;
});
define("ember-debug/utils/ember/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Ember;

  try {
    Ember = requireModule('ember')['default'];
  } catch {
    Ember = window.Ember;
  }

  exports.default = Ember;
});
define("ember-debug/utils/ember/instrumentation", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.subscribe = undefined;

  let _module;

  try {
    _module = requireModule('@ember/instrumentation');
  } catch {
    _module = _ember.default;
  }

  let {
    subscribe
  } = _module;
  exports.subscribe = subscribe;
});
define("ember-debug/utils/ember/object/computed", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.readOnly = exports.reads = exports.or = exports.oneWay = exports.equal = exports.alias = undefined;

  let _module;

  try {
    _module = requireModule('@ember/object/computed');
  } catch {
    _module = _ember.default.computed;
  }

  let {
    alias,
    equal,
    oneWay,
    or,
    reads,
    readOnly
  } = _module;
  exports.alias = alias;
  exports.equal = equal;
  exports.oneWay = oneWay;
  exports.or = or;
  exports.reads = reads;
  exports.readOnly = readOnly;
});
define("ember-debug/utils/ember/object/evented", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Evented;

  try {
    Evented = requireModule('@ember/object/evented')['default'];
  } catch {
    Evented = _ember.default.Evented;
  }

  exports.default = Evented;
});
define("ember-debug/utils/ember/object/index", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.set = exports.observer = exports.get = exports.computed = undefined;

  let _module, EmberObject;

  try {
    _module = requireModule('@ember/object');
    EmberObject = _module.default;
  } catch {
    _module = _ember.default;
    EmberObject = _ember.default.Object;
  }

  let {
    computed,
    get,
    observer,
    set
  } = _module;
  exports.computed = computed;
  exports.get = get;
  exports.observer = observer;
  exports.set = set;
  exports.default = EmberObject;
});
define("ember-debug/utils/ember/object/internals", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.guidFor = exports.cacheFor = undefined;

  let _module;

  try {
    _module = requireModule('@ember/object/internals');
  } catch {
    _module = _ember.default;
  }

  let {
    cacheFor,
    guidFor
  } = _module;
  exports.cacheFor = cacheFor;
  exports.guidFor = guidFor;
});
define("ember-debug/utils/ember/object/mixin", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Mixin;

  try {
    Mixin = requireModule('@ember/object/mixin')['default'];
  } catch {
    Mixin = _ember.default.Mixin;
  }

  exports.default = Mixin;
});
define("ember-debug/utils/ember/object/observable", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let Observable;

  try {
    Observable = requireModule('@ember/object/observable')['default'];
  } catch {
    Observable = _ember.default.Observable;
  }

  exports.default = Observable;
});
define("ember-debug/utils/ember/object/promise-proxy-mixin", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let PromiseProxyMixin;

  try {
    PromiseProxyMixin = requireModule('@ember/object/promise-proxy-mixin')['default'];
  } catch {
    PromiseProxyMixin = _ember.default.PromiseProxyMixin;
  }

  exports.default = PromiseProxyMixin;
});
define("ember-debug/utils/ember/runloop", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.scheduleOnce = exports.later = exports.join = exports.debounce = exports.cancel = exports._backburner = exports.run = undefined;

  let _module;

  let run = exports.run = undefined;

  let _backburner = exports._backburner = undefined;

  try {
    _module = requireModule('@ember/runloop');
    exports.run = run = _module.run;
    exports._backburner = _backburner = _module._backburner;
  } catch {
    _module = exports.run = run = _ember.default.run;
    exports._backburner = _backburner = _ember.default.run.backburner;
  }

  let {
    cancel,
    debounce,
    join,
    later,
    scheduleOnce
  } = _module;
  exports.cancel = cancel;
  exports.debounce = debounce;
  exports.join = join;
  exports.later = later;
  exports.scheduleOnce = scheduleOnce;
});
define("ember-debug/utils/ember/utils", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isNone = undefined;

  let _module;

  try {
    _module = requireModule('@ember/utils');
  } catch {
    _module = _ember.default;
  }

  let {
    isNone
  } = _module;
  exports.isNone = isNone;
});
define("ember-debug/utils/name-functions", ["exports"], function (exports) {
  "use strict";

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
    let name = modelName(model); // jj-abrams-resolver adds `app@model:`

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
define("ember-debug/utils/on-ready", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.onReady = onReady;

  function onReady(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(completed);
    } else {
      document.addEventListener('DOMContentLoaded', completed, false); // For some reason DOMContentLoaded doesn't always work

      window.addEventListener('load', completed, false);
    }

    function completed() {
      document.removeEventListener('DOMContentLoaded', completed, false);
      window.removeEventListener('load', completed, false);
      callback();
    }
  }
});
define("ember-debug/utils/rsvp", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.resolve = exports.all = exports.Promise = undefined;

  let _module, RSVP;

  try {
    _module = requireModule('rsvp');
    RSVP = _module.default; // The RSVP module should have named exports for `Promise`, etc,
    // but some old versions do not and provide `RSVP.Promise`, etc.

    if (!('Promise' in _module)) {
      _module = RSVP;
    }
  } catch {
    _module = RSVP = _ember.default.RSVP;
  }

  let {
    Promise,
    all,
    resolve
  } = _module;
  exports.Promise = Promise;
  exports.all = all;
  exports.resolve = resolve;
  exports.default = RSVP;
});
define("ember-debug/utils/type-check", ["exports", "ember-debug/utils/ember"], function (exports, _ember) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isComputed = isComputed;
  exports.isDescriptor = isDescriptor;
  exports.getDescriptorFor = getDescriptorFor;
  exports.typeOf = typeOf;
  const {
    meta: emberMeta,
    ComputedProperty
  } = _ember.default;
  /**
   * Check if given key on the passed object is a computed property
   * @param object
   * @param key
   * @return {boolean|*}
   */

  function isComputed(object, key) {
    // Ember > 3.10
    if (_ember.default.Debug.isComputed && _ember.default.Debug.isComputed(object, key)) {
      return true;
    }

    if (emberMeta(object) && emberMeta(object).peekDescriptors(key)) {
      return !!emberMeta(object).peekDescriptors(key)._getter;
    }

    if (getDescriptorFor(object, key) instanceof ComputedProperty) {
      return true;
    } // Ember < 3.10


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
    if (isDescriptor(object[key])) {
      return object[key];
    }

    if (_ember.default.Debug.isComputed) {
      const {
        descriptorForDecorator,
        descriptorForProperty
      } = _ember.default.__loader.require('@ember/-internals/metal');

      return descriptorForDecorator(object[key]) || descriptorForProperty(object, key);
    }

    return object[key];
  }

  function typeOf(obj) {
    return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
});
define("ember-debug/utils/version", ["exports"], function (exports) {
  "use strict";

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
define("ember-debug/view-debug", ["exports", "ember-debug/debug-port", "ember-debug/libs/render-tree", "ember-debug/libs/view-inspection", "ember-debug/utils/bound-method", "ember-debug/utils/ember/object/computed"], function (exports, _debugPort, _renderTree, _viewInspection, _boundMethod, _computed) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _debugPort.default.extend({
    namespace: null,
    adapter: (0, _computed.readOnly)('namespace.adapter'),
    objectInspector: (0, _computed.readOnly)('namespace.objectInspector'),
    portNamespace: 'view',
    messages: {
      getTree({
        immediate
      }) {
        this.sendTree(immediate);
      },

      showInspection({
        id,
        pin
      }) {
        this.viewInspection.show(id, pin);
      },

      hideInspection() {
        this.viewInspection.hide();
      },

      inspectViews({
        inspect
      }) {
        if (inspect) {
          this.startInspecting();
        } else {
          this.stopInspecting();
        }
      },

      scrollIntoView({
        id
      }) {
        this.renderTree.scrollIntoView(id);
      },

      inspectElement({
        id
      }) {
        this.renderTree.inspectElement(id);
      },

      contextMenu() {
        let {
          lastRightClicked
        } = this;
        this.lastRightClicked = null;
        this.inspectNearest(lastRightClicked);
      }

    },

    init() {
      this._super(...arguments);

      let renderTree = this.renderTree = new _renderTree.default({
        owner: this.getOwner(),
        retainObject: (0, _boundMethod.default)(this.objectInspector, this.objectInspector.retainObject),
        releaseObject: (0, _boundMethod.default)(this.objectInspector, this.objectInspector.releaseObject),
        inspectNode: (0, _boundMethod.default)(this, this.inspectNode)
      });
      this.viewInspection = new _viewInspection.default({
        renderTree,
        objectInspector: this.objectInspector,
        didShow: (0, _boundMethod.default)(this, this.didShowInspection),
        didHide: (0, _boundMethod.default)(this, this.didHideInspection),
        didStartInspecting: (0, _boundMethod.default)(this, this.didStartInspecting),
        didStopInspecting: (0, _boundMethod.default)(this, this.didStopInspecting)
      });
      this.setupListeners();
    },

    setupListeners() {
      this.lastRightClicked = null;
      this.scheduledSendTree = null;
      window.addEventListener('mousedown', (0, _boundMethod.default)(this, this.onRightClick));
      window.addEventListener('resize', (0, _boundMethod.default)(this, this.onResize));
    },

    cleanupListeners() {
      this.lastRightClicked = null;
      window.removeEventListener('mousedown', (0, _boundMethod.default)(this, this.onRightClick));
      window.removeEventListener('resize', (0, _boundMethod.default)(this, this.onResize));

      if (this.scheduledSendTree) {
        window.clearTimeout(this.scheduledSendTree);
        this.scheduledSendTree = null;
      }
    },

    onRightClick(event) {
      if (event.button === 2) {
        this.lastRightClicked = event.target;
      }
    },

    onResize() {// TODO hide or redraw highlight/tooltip
    },

    inspectNearest(node) {
      let renderNode = this.viewInspection.inspectNearest(node);

      if (!renderNode) {
        this.adapter.log('No Ember component found.');
      }
    },

    willDestroy() {
      this._super();

      this.cleanupListeners();
      this.viewInspection.teardown();
      this.renderTree.teardown();
    },

    /**
     * Opens the "Elements" tab and selects the given DOM node. Doesn't work in all
     * browsers/addons (only in the Chrome and FF devtools addons at the time of writing).
     *
     * @method inspectNode
     * @param  {Node} node The DOM node to inspect
     */
    inspectNode(node) {
      this.adapter.inspectNode(node);
    },

    sendTree(immediate = false) {
      if (immediate) {
        this.send(true);
        return;
      }

      if (this.scheduledSendTree) {
        return;
      }

      this.scheduledSendTree = window.setTimeout(() => {
        this.send();
        this.scheduledSendTree = null;
      }, 250);
    },

    send() {
      if (this.isDestroying) {
        return;
      }

      this.sendMessage('renderTree', {
        tree: this.renderTree.build()
      });
    },

    startInspecting() {
      this.viewInspection.start();
    },

    stopInspecting() {
      this.viewInspection.stop();
    },

    didShowInspection(id, pin) {
      if (pin) {
        this.sendMessage('inspectComponent', {
          id
        });
      } else {
        this.sendMessage('previewComponent', {
          id
        });
      }
    },

    didHideInspection(id, pin) {
      this.sendMessage('cancelSelection', {
        id,
        pin
      });
    },

    didStartInspecting() {
      this.sendMessage('startInspecting', {});
    },

    didStopInspecting() {
      this.sendMessage('stopInspecting', {});
    },

    getOwner() {
      return this.namespace.owner;
    }

  });
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
let Ember;
try {
  Ember = requireModule('ember')['default'];
} catch {
  Ember = window.Ember;
}

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
/* globals adapter, env */
var currentAdapter = 'basic';
if (typeof adapter !== 'undefined') {
  currentAdapter = adapter;
}
var currentEnv = 'production';
if (typeof env !== 'undefined') {
  currentEnv = env;
}

// @formatter:off
var EMBER_VERSIONS_SUPPORTED = ['3.4.0',''];
// @formatter:on

(function(adapter) {
  onEmberReady(function() {
    // global to prevent injection
    if (window.NO_EMBER_DEBUG) {
      return;
    }

    // If Ember doesn't exist, we should stop here to avoid issues with accessing `Ember.VERSION`
    if (!Ember) {
      return;
    }

    if (!versionTest(Ember.VERSION, EMBER_VERSIONS_SUPPORTED)) {
      // Wrong inspector version. Redirect to the correct version.
      sendVersionMiss();
      return;
    }
    
    // prevent from injecting twice
    if (!window.EmberInspector) {
      // Make sure we only work for the supported version
      define('ember-debug/config', function() {
        return {
          default: {
            environment: currentEnv
          }
        };
      });
      
      window.EmberInspector = requireModule('ember-debug/main')['default'];
      window.EmberInspector.Adapter = requireModule('ember-debug/adapters/' + adapter)['default'];

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
              if (window.EmberInspector.get('owner') === instance) {
                window.EmberInspector.destroyContainer();
                window.EmberInspector.clear();
              }
              return this._super.apply(this, arguments);
            }
          });

          if (!window.EmberInspector._application) {
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
    window.EmberInspector.set('_application', appInstance.application);
    window.EmberInspector.set('owner', appInstance);
    window.EmberInspector.start(true);
  }

  function onEmberReady(callback) {
    var triggered = false;
    var triggerOnce = function(string) {
      if (triggered) {
        return;
      }

      let Ember;
      try {
        Ember = requireModule('ember')['default'];
      } catch {
        Ember = window.Ember;
      }

      if (!Ember) {
        return;
      }
      // `Ember.Application` load hook triggers before all of Ember is ready.
      // In this case we ignore and wait for the `Ember` load hook.
      if (!Ember.RSVP) {
        return;
      }
      triggered = true;
      callback();
    };

    // Newest Ember versions >= 1.10
    window.addEventListener('Ember', triggerOnce, false);
    // Old Ember versions
    window.addEventListener('Ember.Application', function() {
      if (Ember && Ember.VERSION && compareVersion(Ember.VERSION, '1.10.0') === 1) {
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
        let current = window.EmberInspector._application;
        let selected = getApplications().find(app => Ember.guidFor(app) === message.applicationId);

        if (current !== selected && selected.__deprecatedInstance__) {
          bootEmberInspector(selected.__deprecatedInstance__);
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

  let channel = new MessageChannel();
  let port = channel.port1;
  window.postMessage('debugger-client', '*', [channel.port2]);

  let registeredMiss = false;

  /**
   * This function is called if the app's Ember version
   * is not supported by this version of the inspector.
   *
   * It sends a message to the inspector app to redirect
   * to an inspector version that supports this Ember version.
   */
  function sendVersionMiss() {
    if (registeredMiss) {
      return;
    }

    registeredMiss = true;

    port.addEventListener('message', message => {
      if (message.type === 'check-version') {
        sendVersionMismatch();
      }
    });

    sendVersionMismatch();

    port.start();

    function sendVersionMismatch() {
      port.postMessage({
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

}(currentAdapter));

}('chrome', 'production'));