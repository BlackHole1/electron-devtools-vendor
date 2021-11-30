/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _installGlobalHook = __webpack_require__(334);

var _installGlobalHook2 = _interopRequireDefault(_installGlobalHook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var script = document.createElement('script');
script.textContent = ';(' + _installGlobalHook2.default.toString() + '(window))';
document.documentElement.appendChild(script);
script.parentNode.removeChild(script);

// if (__DEV__) {
window.addEventListener('test-open-mobx-devtools-window', function () {
  console.log('test-open-mobx-devtools-window'); // eslint-disable-line no-console
  chrome.runtime.sendMessage({ eventName: 'open-mobx-devtools-window' });
});
// }

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = installGlobalHook;
/* eslint-disable */

/**
 * NOTE: This file cannot `require` any other modules. We `.toString()` the
 *       function in some places and inject the source into the page.
 */

function installGlobalHook(window) {
  if (window.__MOBX_DEVTOOLS_GLOBAL_HOOK__ && window.__MOBX_DEVTOOLS_GLOBAL_HOOK__.collections) {
    return;
  }

  function valid(a, name) {
    if (!a) return false;
    switch (name) {
      case 'mobx':
        if (a[name] && !a[name].getDebugName && a[name].extras) {
          // Support MobX < 4 API
          var fixedMobx = {};
          for (var p in a[name]) {
            if (Object.prototype.hasOwnProperty.call(a[name], p)) {
              fixedMobx[p] = a[name][p];
            }
          }for (var _p in a[name].extras) {
            if (Object.prototype.hasOwnProperty.call(a[name].extras, _p)) {
              fixedMobx[_p] = a[name].extras[_p];
            }
          }a[name] = fixedMobx;
        }
        return Boolean(a[name] && a[name].spy);
      case 'mobxReact':
        return Boolean(a[name] && a[name].componentByNodeRegistery);
      default:
        return Boolean(a[name]);
    }
  }

  function sameMobxId(a, b) {
    for (var name in b) {
      if (Object.prototype.hasOwnProperty.call(b, name)) {
        if (!a || !b) continue;
        var aa = a[name];
        var bb = b[name];
        if (!a[name] || !b[name]) continue;
        for (var key in aa) {
          if (Object.prototype.hasOwnProperty.call(aa, key) && Object.prototype.hasOwnProperty.call(bb, key) && aa[key] && aa[key] instanceof Object && aa[key] === bb[key]) {
            return true;
          }
        }
        for (var _key in bb) {
          if (Object.prototype.hasOwnProperty.call(aa, _key) && Object.prototype.hasOwnProperty.call(bb, _key) && bb[_key] && bb[_key] instanceof Object && aa[_key] === bb[_key]) {
            return true;
          }
        }
      }
    }return false;
  }

  Object.defineProperty(window, '__MOBX_DEVTOOLS_GLOBAL_HOOK__', {
    value: {
      hookVersion: 1,
      collections: {},
      inject: function inject(collection) {
        var mobxid = void 0;
        var injectedProps = [];
        for (var id in this.collections) {
          if (this.collections.hasOwnProperty(id)) {
            if (sameMobxId(this.collections[id], collection)) {
              mobxid = id;
              break;
            }
          }
        }if (!mobxid) {
          mobxid = Math.random().toString(32).slice(2);
          this.collections[mobxid] = {};
        }
        for (var prop in collection) {
          if (Object.prototype.hasOwnProperty.call(collection, prop)) {
            if (!this.collections[mobxid][prop] && valid(collection, prop)) {
              this.collections[mobxid][prop] = collection[prop];
              injectedProps.push(prop);
            }
          }
        }if (injectedProps.length > 0) this.emit('instances-injected', mobxid);
      },
      injectMobx: function injectMobx(mobx) {
        this.inject({ mobx: mobx });
      },
      injectMobxReact: function injectMobxReact(mobxReact, mobx) {
        if (valid({ mobxReact: mobxReact }, 'mobxReact')) {
          mobxReact.trackComponents();
          this.inject({ mobxReact: mobxReact, mobx: mobx });
        }
      },

      _listeners: {},
      sub: function sub(evt, fn) {
        var _this = this;

        this.on(evt, fn);
        return function () {
          return _this.off(evt, fn);
        };
      },
      on: function on(evt, fn) {
        if (!this._listeners[evt]) {
          this._listeners[evt] = [];
        }
        this._listeners[evt].push(fn);
      },
      off: function off(evt, fn) {
        if (!this._listeners[evt]) {
          return;
        }
        var ix = this._listeners[evt].indexOf(fn);
        if (ix !== -1) {
          this._listeners[evt].splice(ix, 1);
        }
        if (!this._listeners[evt].length) {
          this._listeners[evt] = null;
        }
      },
      emit: function emit(evt, data) {
        if (this._listeners[evt]) {
          this._listeners[evt].map(function (fn) {
            return fn(data);
          });
        }
      }
    }
  });
}

/***/ })

/******/ });