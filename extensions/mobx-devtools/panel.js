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
/******/ 	return __webpack_require__(__webpack_require__.s = 336);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(190);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(199)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(103);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(195);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(82);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(42)('wks');
var uid = __webpack_require__(32);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(1);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(16);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(62);
var toPrimitive = __webpack_require__(48);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(29);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(34);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(47);
var defined = __webpack_require__(34);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(79)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(61);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(123);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
var global = __webpack_require__(9);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(21);
var TO_STRING_TAG = __webpack_require__(8)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = __webpack_require__(88);

var _set2 = _interopRequireDefault(_set);

var _extends2 = __webpack_require__(58);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */

exports.default = function (_ref) {
  var subscribe = _ref.subscribe,
      _ref$injectProps = _ref.injectProps,
      injectProps = _ref$injectProps === undefined ? function () {} : _ref$injectProps,
      shouldUpdate = _ref.shouldUpdate;
  return function (TargetComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$Component) {
      (0, _inherits3.default)(StoreInjectorHOC, _React$Component);

      function StoreInjectorHOC() {
        var _ref2;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, StoreInjectorHOC);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = StoreInjectorHOC.__proto__ || (0, _getPrototypeOf2.default)(StoreInjectorHOC)).call.apply(_ref2, [this].concat(args))), _this), _this.eventsByStore = {}, _this.disposables = [], _this.scheduleUpdate = function () {
          if (!_this.updateTimeout) {
            _this.updateTimeout = setTimeout(_this.update, 5);
          }
        }, _this.update = function () {
          _this.updateTimeout = undefined;
          if (_this.$isMounted) {
            _this.forceUpdate();
          }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(StoreInjectorHOC, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          var eventsByStore = typeof subscribe === 'function' ? subscribe(this.context.stores, this.props) : subscribe;

          var _loop = function _loop(s) {
            if (Object.prototype.hasOwnProperty.call(eventsByStore, s)) {
              eventsByStore[s].forEach(function (event) {
                _this2.context.stores[s].subscribe(event, _this2.scheduleUpdate);
              });
            }
          };

          for (var s in eventsByStore) {
            _loop(s);
          }

          this.eventsByStore = eventsByStore || {};
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.$isMounted = true;
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
          if (shouldUpdate) {
            return shouldUpdate(nextProps, this.props);
          }
          return false;
        }
      }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
          var _this3 = this;

          if (typeof subscribe !== 'function') return;
          var nextEventsByStore = subscribe(this.context.stores, nextProps);
          (0, _keys2.default)(this.eventsByStore).forEach(function (s) {
            var diff = arrayDiff(nextEventsByStore[s], _this3.eventsByStore[s]);
            diff.missing.forEach(function (name) {
              _this3.context.stores[s].off(name, _this3.scheduleUpdate);
            });
            diff.newItems.forEach(function (name) {
              _this3.context.stores[s].on(name, _this3.scheduleUpdate);
            });
          });
          (0, _keys2.default)(nextEventsByStore).forEach(function (s) {
            if (!Object.prototype.hasOwnProperty.call(_this3.eventsByStore, s)) {
              nextEventsByStore[s].forEach(function (name) {
                _this3.context.stores[s].on(name, _this3.scheduleUpdate);
              });
            }
          });
          this.eventsByStore = nextEventsByStore;
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this4 = this;

          this.$isMounted = false;
          this.disposables.forEach(function (fn) {
            return fn();
          });
          (0, _keys2.default)(this.eventsByStore).forEach(function (s) {
            _this4.eventsByStore[s].forEach(function (name) {
              return _this4.context.stores[s].off(name, _this4.scheduleUpdate);
            });
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(TargetComponent, (0, _extends3.default)({}, injectProps(this.context.stores, this.props), this.props));
        }
      }]);
      return StoreInjectorHOC;
    }(_react2.default.Component), _class.contextTypes = {
      stores: _propTypes2.default.object.isRequired
    }, _temp2;
  };
};

function arrayDiff(array, oldArray) {
  var names = new _set2.default();
  var missing = [];
  for (var i = 0; i < array.length; i += 1) {
    names.add(array[i]);
  }
  for (var j = 0; j < oldArray.length; j += 1) {
    if (!names.has(oldArray[j])) {
      missing.push(oldArray[j]);
    } else {
      names.delete(oldArray[j]);
    }
  }
  return {
    missing: missing,
    newItems: setToArray(names)
  };
}

function setToArray(set) {
  var res = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(set), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      res.push(val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return res;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(15);
var dPs = __webpack_require__(81);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(44)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var call = __webpack_require__(67);
var isArrayIter = __webpack_require__(68);
var anObject = __webpack_require__(15);
var toLength = __webpack_require__(31);
var getIterFn = __webpack_require__(54);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(26) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

var _interopRequireWildcard = __webpack_require__(95);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_VisibleCellRange = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_OverscanIndices = exports.bpfrpt_proptype_OverscanIndicesGetterParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_ScrollbarPresenceChange = exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_NoContentRenderer = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellSizeGetter = exports.bpfrpt_proptype_CellRangeRenderer = exports.bpfrpt_proptype_CellRangeRendererParams = exports.bpfrpt_proptype_StyleCache = exports.bpfrpt_proptype_CellCache = exports.bpfrpt_proptype_CellRenderer = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_CellPosition = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(118));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var bpfrpt_proptype_CellPosition =  true ? null : {
  "columnIndex": _propTypes["default"].number.isRequired,
  "rowIndex": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_CellPosition = bpfrpt_proptype_CellPosition;
var bpfrpt_proptype_CellRendererParams =  true ? null : {
  "columnIndex": _propTypes["default"].number.isRequired,
  "isScrolling": _propTypes["default"].bool.isRequired,
  "isVisible": _propTypes["default"].bool.isRequired,
  "key": _propTypes["default"].string.isRequired,
  "parent": _propTypes["default"].object.isRequired,
  "rowIndex": _propTypes["default"].number.isRequired,
  "style": _propTypes["default"].object.isRequired
};
exports.bpfrpt_proptype_CellRendererParams = bpfrpt_proptype_CellRendererParams;
var bpfrpt_proptype_CellRenderer =  true ? null : _propTypes["default"].func;
exports.bpfrpt_proptype_CellRenderer = bpfrpt_proptype_CellRenderer;
var bpfrpt_proptype_CellCache =  true ? null : _propTypes["default"].objectOf(_propTypes["default"].node.isRequired);
exports.bpfrpt_proptype_CellCache = bpfrpt_proptype_CellCache;
var bpfrpt_proptype_StyleCache =  true ? null : _propTypes["default"].objectOf(_propTypes["default"].object.isRequired);
exports.bpfrpt_proptype_StyleCache = bpfrpt_proptype_StyleCache;
var bpfrpt_proptype_CellRangeRendererParams =  true ? null : {
  "cellCache": _propTypes["default"].objectOf(_propTypes["default"].node.isRequired).isRequired,
  "cellRenderer": _propTypes["default"].func.isRequired,
  "columnSizeAndPositionManager": function columnSizeAndPositionManager() {
    return (typeof _ScalingCellSizeAndPositionManager["default"] === "function" ? _propTypes["default"].instanceOf(_ScalingCellSizeAndPositionManager["default"]).isRequired : _propTypes["default"].any.isRequired).apply(this, arguments);
  },
  "columnStartIndex": _propTypes["default"].number.isRequired,
  "columnStopIndex": _propTypes["default"].number.isRequired,
  "deferredMeasurementCache": _propTypes["default"].object,
  "horizontalOffsetAdjustment": _propTypes["default"].number.isRequired,
  "isScrolling": _propTypes["default"].bool.isRequired,
  "isScrollingOptOut": _propTypes["default"].bool.isRequired,
  "parent": _propTypes["default"].object.isRequired,
  "rowSizeAndPositionManager": function rowSizeAndPositionManager() {
    return (typeof _ScalingCellSizeAndPositionManager["default"] === "function" ? _propTypes["default"].instanceOf(_ScalingCellSizeAndPositionManager["default"]).isRequired : _propTypes["default"].any.isRequired).apply(this, arguments);
  },
  "rowStartIndex": _propTypes["default"].number.isRequired,
  "rowStopIndex": _propTypes["default"].number.isRequired,
  "scrollLeft": _propTypes["default"].number.isRequired,
  "scrollTop": _propTypes["default"].number.isRequired,
  "styleCache": _propTypes["default"].objectOf(_propTypes["default"].object.isRequired).isRequired,
  "verticalOffsetAdjustment": _propTypes["default"].number.isRequired,
  "visibleColumnIndices": _propTypes["default"].object.isRequired,
  "visibleRowIndices": _propTypes["default"].object.isRequired
};
exports.bpfrpt_proptype_CellRangeRendererParams = bpfrpt_proptype_CellRangeRendererParams;
var bpfrpt_proptype_CellRangeRenderer =  true ? null : _propTypes["default"].func;
exports.bpfrpt_proptype_CellRangeRenderer = bpfrpt_proptype_CellRangeRenderer;
var bpfrpt_proptype_CellSizeGetter =  true ? null : _propTypes["default"].func;
exports.bpfrpt_proptype_CellSizeGetter = bpfrpt_proptype_CellSizeGetter;
var bpfrpt_proptype_CellSize =  true ? null : _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].number]);
exports.bpfrpt_proptype_CellSize = bpfrpt_proptype_CellSize;
var bpfrpt_proptype_NoContentRenderer =  true ? null : _propTypes["default"].func;
exports.bpfrpt_proptype_NoContentRenderer = bpfrpt_proptype_NoContentRenderer;
var bpfrpt_proptype_Scroll =  true ? null : {
  "clientHeight": _propTypes["default"].number.isRequired,
  "clientWidth": _propTypes["default"].number.isRequired,
  "scrollHeight": _propTypes["default"].number.isRequired,
  "scrollLeft": _propTypes["default"].number.isRequired,
  "scrollTop": _propTypes["default"].number.isRequired,
  "scrollWidth": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;
var bpfrpt_proptype_ScrollbarPresenceChange =  true ? null : {
  "horizontal": _propTypes["default"].bool.isRequired,
  "vertical": _propTypes["default"].bool.isRequired,
  "size": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_ScrollbarPresenceChange = bpfrpt_proptype_ScrollbarPresenceChange;
var bpfrpt_proptype_RenderedSection =  true ? null : {
  "columnOverscanStartIndex": _propTypes["default"].number.isRequired,
  "columnOverscanStopIndex": _propTypes["default"].number.isRequired,
  "columnStartIndex": _propTypes["default"].number.isRequired,
  "columnStopIndex": _propTypes["default"].number.isRequired,
  "rowOverscanStartIndex": _propTypes["default"].number.isRequired,
  "rowOverscanStopIndex": _propTypes["default"].number.isRequired,
  "rowStartIndex": _propTypes["default"].number.isRequired,
  "rowStopIndex": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_RenderedSection = bpfrpt_proptype_RenderedSection;
var bpfrpt_proptype_OverscanIndicesGetterParams =  true ? null : {
  // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
  "direction": _propTypes["default"].oneOf(["horizontal", "vertical"]).isRequired,
  // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
  "scrollDirection": _propTypes["default"].oneOf([-1, 1]).isRequired,
  // Number of rows or columns in the current axis
  "cellCount": _propTypes["default"].number.isRequired,
  // Maximum number of cells to over-render in either direction
  "overscanCellsCount": _propTypes["default"].number.isRequired,
  // Begin of range of visible cells
  "startIndex": _propTypes["default"].number.isRequired,
  // End of range of visible cells
  "stopIndex": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_OverscanIndicesGetterParams = bpfrpt_proptype_OverscanIndicesGetterParams;
var bpfrpt_proptype_OverscanIndices =  true ? null : {
  "overscanStartIndex": _propTypes["default"].number.isRequired,
  "overscanStopIndex": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_OverscanIndices = bpfrpt_proptype_OverscanIndices;
var bpfrpt_proptype_OverscanIndicesGetter =  true ? null : _propTypes["default"].func;
exports.bpfrpt_proptype_OverscanIndicesGetter = bpfrpt_proptype_OverscanIndicesGetter;
var bpfrpt_proptype_Alignment =  true ? null : _propTypes["default"].oneOf(["auto", "end", "start", "center"]);
exports.bpfrpt_proptype_Alignment = bpfrpt_proptype_Alignment;
var bpfrpt_proptype_VisibleCellRange =  true ? null : {
  "start": _propTypes["default"].number,
  "stop": _propTypes["default"].number
};
exports.bpfrpt_proptype_VisibleCellRange = bpfrpt_proptype_VisibleCellRange;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(56);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(80);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.symbols = exports.allowedComplexObjects = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _toConsumableArray2 = __webpack_require__(52);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _defineProperty2 = __webpack_require__(87);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _map = __webpack_require__(113);

var _map2 = _interopRequireDefault(_map);

var _set = __webpack_require__(88);

var _set2 = _interopRequireDefault(_set);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var now = (0, _typeof3.default)(window.performance) === 'object' && window.performance.now ? function () {
  return window.performance.now();
} : function () {
  return Date.now();
};

var allowedComplexObjects = exports.allowedComplexObjects = new _set2.default();

var symbols = exports.symbols = {
  type: '@@type',
  name: '@@name',
  entries: '@@entries',
  reference: '@@reference',
  proto: '@@proto',
  inspected: '@@inspected',
  editable: '@@editable',
  mobxObject: '@@mobxObject',
  serializationException: '@@serializationException'
};

function serialize(data) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var seen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _map2.default();
  var propToExtract = arguments[3];

  try {
    if (propToExtract !== undefined) {
      data = data[propToExtract]; // eslint-disable-line no-param-reassign
    }
    if (!data || (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object') {
      if (typeof data === 'string' && data.length > 500) {
        return data.slice(0, 500) + '...';
      }
      if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'symbol') {
        var _ref;

        return _ref = {}, (0, _defineProperty3.default)(_ref, symbols.type, 'symbol'), (0, _defineProperty3.default)(_ref, symbols.name, data.toString()), _ref;
      }
      if (typeof data === 'function') {
        var _ref2;

        return _ref2 = {}, (0, _defineProperty3.default)(_ref2, symbols.type, 'function'), (0, _defineProperty3.default)(_ref2, symbols.name, data.name), _ref2;
      }
      return data;
    }

    if (data instanceof RegExp || data instanceof Date) {
      return data;
    }

    var seenPath = seen.get(data);
    if (seenPath) {
      return (0, _defineProperty3.default)({}, symbols.reference, seenPath);
    }

    seen.set(data, path);

    if (data instanceof Array) {
      return data.map(function (o, i) {
        return serialize(o, path.concat(i), seen);
      });
    }

    var clone = {};

    var prototype = (0, _getPrototypeOf2.default)(data);
    var inspecting = allowedComplexObjects.has(data);

    if (data instanceof _map2.default || prototype && prototype.isMobXObservableMap) {
      var _result;

      var result = (_result = {}, (0, _defineProperty3.default)(_result, symbols.type, 'map'), (0, _defineProperty3.default)(_result, symbols.name, data.constructor && data.constructor.name), (0, _defineProperty3.default)(_result, symbols.inspected, inspecting), (0, _defineProperty3.default)(_result, symbols.editable, false), (0, _defineProperty3.default)(_result, symbols.mobxObject, '$mobx' in data), _result);
      if (inspecting) {
        result[symbols.entries] = [].concat((0, _toConsumableArray3.default)(data.entries()));
      }
      return result;
    }

    if (data instanceof _set2.default || prototype && prototype.isMobXObservableSet) {
      var _result3;

      var _result2 = (_result3 = {}, (0, _defineProperty3.default)(_result3, symbols.type, 'set'), (0, _defineProperty3.default)(_result3, symbols.name, data.constructor && data.constructor.name), (0, _defineProperty3.default)(_result3, symbols.inspected, inspecting), (0, _defineProperty3.default)(_result3, symbols.editable, false), (0, _defineProperty3.default)(_result3, symbols.mobxObject, '$mobx' in data), _result3);
      if (inspecting) {
        _result2[symbols.entries] = [].concat((0, _toConsumableArray3.default)(data.entries()));
      }
      return _result2;
    }

    if (prototype && prototype !== Object.prototype) {
      var _symbols$proto, _result5;

      // This is complex object (dom node or mobx.something)
      // only short signature will be sent to prevent performance loss
      var _result4 = (_result5 = {}, (0, _defineProperty3.default)(_result5, symbols.type, 'object'), (0, _defineProperty3.default)(_result5, symbols.name, data.constructor && data.constructor.name), (0, _defineProperty3.default)(_result5, symbols.inspected, inspecting), (0, _defineProperty3.default)(_result5, symbols.editable, true), (0, _defineProperty3.default)(_result5, symbols.mobxObject, '$mobx' in data), (0, _defineProperty3.default)(_result5, symbols.proto, (_symbols$proto = {}, (0, _defineProperty3.default)(_symbols$proto, symbols.type, 'object'), (0, _defineProperty3.default)(_symbols$proto, symbols.name, prototype.constructor && prototype.constructor.name), (0, _defineProperty3.default)(_symbols$proto, symbols.inspected, false), (0, _defineProperty3.default)(_symbols$proto, symbols.editable, false), _symbols$proto)), _result5);
      if (inspecting) {
        for (var p in data) {
          if (Object.prototype.hasOwnProperty.call(data, p)) {
            _result4[p] = serialize(data, path.concat(p), seen, p);
          }
        }
      }
      return _result4;
    }

    for (var prop in data) {
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        clone[prop] = serialize(data, path.concat(prop), seen, prop);
      }
    }

    return clone;
  } catch (error) {
    var _ref4;

    return _ref4 = {}, (0, _defineProperty3.default)(_ref4, symbols.type, 'serializationError'), (0, _defineProperty3.default)(_ref4, 'message', error && error.message), _ref4;
  }
}

var deserialize = function deserialize(data, root) {
  if (!data || (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object') return data;
  if (data instanceof Array) {
    return data.map(function (o) {
      return deserialize(o, root || data);
    });
  }
  if (data[symbols.reference]) {
    return data[symbols.reference].reduce(function (acc, next) {
      return acc[next];
    }, root || data);
  }
  for (var prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      data[prop] = deserialize(data[prop], root || data);
    }
  }
  return data;
};

// Custom polyfill that runs the queue with a backoff.
// If you change it, make sure it behaves reasonably well in Firefox.
var lastRunTimeMS = 5;
var cancelIdleCallback = window.cancelIdleCallback || clearTimeout;
var requestIdleCallback = window.requestIdleCallback || function reqIdleCallback(cb) {
  // Magic numbers determined by tweaking in Firefox.
  // There is no special meaning to them.
  var delayMS = 3000 * lastRunTimeMS;
  if (delayMS > 500) {
    delayMS = 500;
  }

  return setTimeout(function () {
    var startTime = now();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Infinity;
      }
    });
    var endTime = now();
    lastRunTimeMS = (endTime - startTime) / 1000;
  }, delayMS);
};

var Bridge = function () {
  function Bridge(wall) {
    (0, _classCallCheck3.default)(this, Bridge);
    this.$listeners = [];
    this.$buffer = [];

    this.$wall = wall;
    this.$serialize = serialize;
    this.$deserialize = deserialize;
    wall.listen(this.$handleMessage.bind(this));
  }

  (0, _createClass3.default)(Bridge, [{
    key: 'serializationOff',
    value: function serializationOff() {
      // When there is no need in serialization, dont waste resources
      this.$serialize = function (a) {
        return a;
      };
      this.$deserialize = function (a) {
        return a;
      };
    }
  }, {
    key: 'send',
    value: function send(eventName) {
      var eventData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.$buffer.push({ type: 'event', eventName: eventName, eventData: eventData });
      this.scheduleFlush();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.$wall.send({ type: 'pause' });
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.$wall.send({ type: 'resume' });
    }
  }, {
    key: 'sub',
    value: function sub(eventName, fn) {
      var _this = this;

      if (this.$listeners[eventName] === undefined) {
        this.$listeners[eventName] = [];
      }
      this.$listeners[eventName].push(fn);
      return function () {
        var ix = _this.$listeners[eventName].indexOf(fn);
        if (ix !== -1) {
          _this.$listeners[eventName].splice(ix, 1);
        }
      };
    }
  }, {
    key: 'scheduleFlush',
    value: function scheduleFlush() {
      if (!this.$flushHandle && this.$buffer.length) {
        var timeout = this.$paused ? 5000 : 500;
        this.$flushHandle = requestIdleCallback(this.flushBufferWhileIdle.bind(this), {
          timeout: timeout
        });
      }
    }
  }, {
    key: 'cancelFlush',
    value: function cancelFlush() {
      if (this.$flushHandle) {
        cancelIdleCallback(this.$flushHandle);
        this.$flushHandle = null;
      }
    }
  }, {
    key: 'flushBufferWhileIdle',
    value: function flushBufferWhileIdle(deadline) {
      this.$flushHandle = null;

      // Magic numbers were determined by tweaking in a heavy UI and seeing
      // what performs reasonably well both when DevTools are hidden and visible.
      // The goal is that we try to catch up but avoid blocking the UI.
      // When paused, it's okay to lag more, but not forever because otherwise
      // when user activates React tab, it will freeze syncing.
      var chunkCount = this.$paused ? 20 : 10;
      var chunkSize = Math.round(this.$buffer.length / chunkCount);
      var minChunkSize = this.$paused ? 50 : 100;

      while (this.$buffer.length && (deadline.timeRemaining() > 0 || deadline.didTimeout)) {
        var take = Math.min(this.$buffer.length, Math.max(minChunkSize, chunkSize));
        var currentBuffer = this.$buffer.splice(0, take);
        this.flushBufferSlice(currentBuffer);
      }

      if (this.$buffer.length) {
        this.scheduleFlush();
      } else {
        allowedComplexObjects.clear();
      }
    }
  }, {
    key: 'flushBufferSlice',
    value: function flushBufferSlice(bufferSlice) {
      var _this2 = this;

      var events = bufferSlice.map(function (_ref5) {
        var eventName = _ref5.eventName,
            eventData = _ref5.eventData;
        return {
          eventName: eventName,
          eventData: _this2.$serialize(eventData)
        };
      });
      this.$wall.send({ type: 'many-events', events: events });
    }
  }, {
    key: 'once',
    value: function once(eventName, fn) {
      var self = this;
      function listener(e, eventData) {
        fn.call(this, e, eventData);
        var ix = self.$listeners[eventName].indexOf(listener);
        if (ix !== -1) {
          self.$listeners[eventName].splice(ix, 1);
        }
      }
      return this.sub(eventName, listener);
    }
  }, {
    key: '$handleMessage',
    value: function $handleMessage(payload) {
      var _this3 = this;

      if (typeof payload === 'string') {
        var handlers = this.$listeners[payload];
        if (handlers) {
          handlers.forEach(function (fn) {
            return fn();
          });
        }
      }

      if (payload.type === 'resume') {
        this.$paused = false;
        this.scheduleFlush();
        return;
      }

      if (payload.type === 'pause') {
        this.$paused = true;
        this.cancelFlush();
        return;
      }

      if (payload.type === 'event') {
        var _handlers = this.$listeners[payload.eventName];
        var eventData = this.$deserialize(payload.eventData);
        if (_handlers) {
          _handlers.forEach(function (fn) {
            return fn(eventData);
          });
        }
      }

      if (payload.type === 'many-events') {
        payload.events.forEach(function (event) {
          var handlers = _this3.$listeners[event.eventName];
          var eventData = _this3.$deserialize(event.eventData);
          if (handlers) {
            handlers.forEach(function (fn) {
              return fn(eventData);
            });
          }
        });
      }
    }
  }]);
  return Bridge;
}();

exports.default = Bridge;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(73);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(8)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(32)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(77)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(44)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(19);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(15);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(21);
var ITERATOR = __webpack_require__(8)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(8)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(26);
var wksExt = __webpack_require__(70);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(29);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AbstractStore = function () {
  function AbstractStore() {
    var _this = this;

    (0, _classCallCheck3.default)(this, AbstractStore);
    this.$listeners = {};
    this.$disposables = [];

    this.emit = function (event) {
      if (_this.$listeners[event]) {
        _this.$listeners[event].forEach(function (fn) {
          return fn();
        });
      }
    };

    this.subscribe = function (event, fn) {
      _this.on(event, fn);
      var dispose = function dispose() {
        _this.off(event, fn);
        _this.removeDisposer(dispose);
      };
      _this.addDisposer(dispose);
      return dispose;
    };
  }

  (0, _createClass3.default)(AbstractStore, [{
    key: "setValueAndEmit",
    value: function setValueAndEmit(key, value) {
      if (this[key] !== value) {
        this[key] = value;
        this.emit(key);
      }
    }
  }, {
    key: "addDisposer",
    value: function addDisposer() {
      var _$disposables;

      (_$disposables = this.$disposables).push.apply(_$disposables, arguments);
    }
  }, {
    key: "removeDisposer",
    value: function removeDisposer(fn) {
      var idx = this.$disposables.indexOf(fn);
      if (idx !== -1) {
        this.$disposables.splice(idx, 1);
      }
    }
  }, {
    key: "on",
    value: function on(event, fn) {
      if (!this.$listeners[event]) {
        this.$listeners[event] = [];
      }
      this.$listeners[event].push(fn);
    }
  }, {
    key: "off",
    value: function off(event, fn) {
      var idx = this.$listeners[event].indexOf(fn);
      if (idx !== -1) {
        this.$listeners[event].splice(idx, 1);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.$disposables.forEach(function (fn) {
        return fn();
      });
      this.$disposables.splice(0);
    }
  }]);
  return AbstractStore;
}();

exports.default = AbstractStore;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(31);
var toAbsoluteIndex = __webpack_require__(78);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(34);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(15);
var getKeys = __webpack_require__(28);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var $export = __webpack_require__(10);
var meta = __webpack_require__(57);
var fails = __webpack_require__(20);
var hide = __webpack_require__(16);
var redefineAll = __webpack_require__(65);
var forOf = __webpack_require__(40);
var anInstance = __webpack_require__(66);
var isObject = __webpack_require__(14);
var setToStringTag = __webpack_require__(27);
var dP = __webpack_require__(12).f;
var each = __webpack_require__(112)(0);
var DESCRIPTORS = __webpack_require__(13);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(10);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(10);
var aFunction = __webpack_require__(29);
var ctx = __webpack_require__(18);
var forOf = __webpack_require__(40);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(103);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(90);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(18);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(19);
var call = __webpack_require__(67);
var isArrayIter = __webpack_require__(68);
var toLength = __webpack_require__(31);
var createProperty = __webpack_require__(91);
var getIterFn = __webpack_require__(54);

$export($export.S + $export.F * !__webpack_require__(69)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(23);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(52);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(59);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clean = function clean(data) {
  if (!data) return [];
  if (!data.eventName) {
    if (data.data) return clean(data.data);
    if (data.payload) return clean(data.payload);
    if (data.events) return clean(data.events);
  }
  if (data instanceof Array) return data.map(clean);
  return [data.eventName || data];
};

var stringify = function stringify(data) {
  try {
    return (0, _stringify2.default)(data);
  } catch (e) {
    return data;
  }
};

exports.default = function (title, data) {
  if (false) {
    var _console;

    var filename = (new Error().stack || '').match(/[^/]*\.js[:\d]*/)[0] || '';
    // eslint-disable-next-line no-console
    (_console = console).log.apply(_console, [title].concat((0, _toConsumableArray3.default)(clean(data).map(stringify)), [filename]));
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(191);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(175);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(61);
var hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(12).f;
var create = __webpack_require__(39);
var redefineAll = __webpack_require__(65);
var ctx = __webpack_require__(18);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(40);
var $iterDefine = __webpack_require__(49);
var step = __webpack_require__(100);
var setSpecies = __webpack_require__(105);
var DESCRIPTORS = __webpack_require__(13);
var fastKey = __webpack_require__(57).fastKey;
var validate = __webpack_require__(55);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var core = __webpack_require__(1);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(13);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(45);
var from = __webpack_require__(144);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(15);
var aFunction = __webpack_require__(29);
var SPECIES = __webpack_require__(8)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var invoke = __webpack_require__(157);
var html = __webpack_require__(63);
var cel = __webpack_require__(44);
var global = __webpack_require__(9);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(25)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(74);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(53);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(48);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(62);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(18);
var IObject = __webpack_require__(47);
var toObject = __webpack_require__(19);
var toLength = __webpack_require__(31);
var asc = __webpack_require__(135);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stringHash = __webpack_require__(222);

var _stringHash2 = _interopRequireDefault(_stringHash);

/* ::
type Pair = [ string, any ];
type Pairs = Pair[];
type PairsMapper = (pair: Pair) => Pair;
type ObjectMap = { [id:string]: any };
*/

var mapObj = function mapObj(obj, /* : ObjectMap */
fn /* : PairsMapper */
) /* : ObjectMap */{
    var keys = Object.keys(obj);
    var mappedObj = {};
    for (var i = 0; i < keys.length; i += 1) {
        var _fn = fn([keys[i], obj[keys[i]]]);

        var _fn2 = _slicedToArray(_fn, 2);

        var newKey = _fn2[0];
        var newValue = _fn2[1];

        mappedObj[newKey] = newValue;
    }
    return mappedObj;
};

exports.mapObj = mapObj;
var UPPERCASE_RE = /([A-Z])/g;
var UPPERCASE_RE_TO_KEBAB = function UPPERCASE_RE_TO_KEBAB(match /* : string */) {
    return (/* : string */'-' + match.toLowerCase()
    );
};

var kebabifyStyleName = function kebabifyStyleName(string /* : string */) /* : string */{
    var result = string.replace(UPPERCASE_RE, UPPERCASE_RE_TO_KEBAB);
    if (result[0] === 'm' && result[1] === 's' && result[2] === '-') {
        return '-' + result;
    }
    return result;
};

exports.kebabifyStyleName = kebabifyStyleName;
/**
 * CSS properties which accept numbers but are not in units of "px".
 * Taken from React's CSSProperty.js
 */
var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};

/**
 * Taken from React's CSSProperty.js
 *
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 * Taken from React's CSSProperty.js
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
// Taken from React's CSSProperty.js
Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
});

var stringifyValue = function stringifyValue(key, /* : string */
prop /* : any */
) /* : string */{
    if (typeof prop === "number") {
        if (isUnitlessNumber[key]) {
            return "" + prop;
        } else {
            return prop + "px";
        }
    } else {
        return '' + prop;
    }
};

exports.stringifyValue = stringifyValue;
var stringifyAndImportantifyValue = function stringifyAndImportantifyValue(key, /* : string */
prop /* : any */
) {
    return (/* : string */importantify(stringifyValue(key, prop))
    );
};

exports.stringifyAndImportantifyValue = stringifyAndImportantifyValue;
// Turn a string into a hash string of base-36 values (using letters and numbers)
var hashString = function hashString(string /* : string */) {
    return (/* string */(0, _stringHash2['default'])(string).toString(36)
    );
};

exports.hashString = hashString;
// Hash a javascript object using JSON.stringify. This is very fast, about 3
// microseconds on my computer for a sample object:
// http://jsperf.com/test-hashfnv32a-hash/5
//
// Note that this uses JSON.stringify to stringify the objects so in order for
// this to produce consistent hashes browsers need to have a consistent
// ordering of objects. Ben Alpert says that Facebook depends on this, so we
// can probably depend on this too.
var hashObject = function hashObject(object /* : ObjectMap */) {
    return (/* : string */hashString(JSON.stringify(object))
    );
};

exports.hashObject = hashObject;
// Given a single style value string like the "b" from "a: b;", adds !important
// to generate "b !important".
var importantify = function importantify(string /* : string */) {
    return (/* : string */
        // Bracket string character access is very fast, and in the default case we
        // normally don't expect there to be "!important" at the end of the string
        // so we can use this simple check to take an optimized path. If there
        // happens to be a "!" in this position, we follow up with a more thorough
        // check.
        string[string.length - 10] === '!' && string.slice(-11) === ' !important' ? string : string + ' !important'
    );
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(256);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(87);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = __webpack_require__(154);

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends4 = __webpack_require__(58);

var _extends5 = _interopRequireDefault(_extends4);

var _stringify = __webpack_require__(59);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LS_KEY = '@@mobx-devtools';
var getLSSettings = function getLSSettings() {
  try {
    return JSON.parse(window.localStorage.getItem(LS_KEY)) || {};
  } catch (e) {
    return {};
  }
};
var setLSSettings = function setLSSettings(settings) {
  window.localStorage.setItem(LS_KEY, (0, _stringify2.default)((0, _extends5.default)({}, getLSSettings(), settings)));
};

var memoryStorage = {};

exports.default = {
  get: function get() {
    for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    if (false) {
      // eslint-disable-next-line no-console
      console.warn('[preferences] get() expected strings, given ' + (0, _typeof3.default)(keys[0]));
    }
    return new _promise2.default(function (resolve) {
      if (chrome.storage) {
        chrome.storage.sync.get(keys, resolve);
      } else if (window.localStorage) {
        var settings = getLSSettings();
        resolve(keys.reduce(function (acc, key) {
          return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, key, settings[key]));
        }, {}));
      } else {
        resolve(keys.reduce(function (acc, key) {
          return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, key, memoryStorage[key]));
        }), {});
      }
    });
  },
  set: function set(settings) {
    return new _promise2.default(function (resolve) {
      if (chrome.storage) {
        chrome.storage.sync.set(settings, resolve);
      } else if (window.localStorage) {
        setLSSettings(settings);
        resolve();
      } else {
        for (var key in settings) {
          if (Object.prototype.hasOwnProperty.call(settings, key)) {
            memoryStorage[key] = settings[key];
          }
        }
      }
    });
  },
  delete: function _delete(key) {
    return new _promise2.default(function (resolve) {
      if (chrome.storage) {
        chrome.storage.sync.remove(key, resolve);
      } else if (window.localStorage) {
        setLSSettings((0, _defineProperty3.default)({}, key, undefined));
        resolve();
      } else {
        delete memoryStorage[key];
      }
    });
  }
};

/***/ }),
/* 117 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(275));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(96));

var _createClass2 = _interopRequireDefault(__webpack_require__(97));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(98));

var _CellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(277));

var _maxElementSize = __webpack_require__(278);

var _types = __webpack_require__(46);

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager =
/*#__PURE__*/
function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === void 0 ? (0, _maxElementSize.getMaxElementSize)() : _ref$maxScrollSize,
        params = (0, _objectWithoutProperties2["default"])(_ref, ["maxScrollSize"]);
    (0, _classCallCheck2["default"])(this, ScalingCellSizeAndPositionManager);
    (0, _defineProperty2["default"])(this, "_cellSizeAndPositionManager", void 0);
    (0, _defineProperty2["default"])(this, "_maxScrollSize", void 0);
    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager["default"](params);
    this._maxScrollSize = maxScrollSize;
  }

  (0, _createClass2["default"])(ScalingCellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: "configure",
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }
    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }
    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }
    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;
      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }
    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;
      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });
      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: "_getOffsetPercentage",
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;
      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: "_offsetToSafeOffset",
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: "_safeOffsetToOffset",
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);
  return ScalingCellSizeAndPositionManager;
}();

exports["default"] = ScalingCellSizeAndPositionManager;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(59);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _class, _temp, _class2, _temp2, _class3, _temp3;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(94);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _Bridge = __webpack_require__(51);

var _flash = __webpack_require__(289);

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BAD_INPUT = (0, _symbol2.default)('bad input');

var PreviewValue = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(PreviewValue, _React$PureComponent);

  function PreviewValue() {
    (0, _classCallCheck3.default)(this, PreviewValue);
    return (0, _possibleConstructorReturn3.default)(this, (PreviewValue.__proto__ || (0, _getPrototypeOf2.default)(PreviewValue)).apply(this, arguments));
  }

  (0, _createClass3.default)(PreviewValue, [{
    key: 'render',
    value: function render() {
      if (!this.props.data || this.props.data instanceof Date || (0, _typeof3.default)(this.props.data) !== 'object') {
        return _react2.default.createElement(PreviewSimpleValue, {
          change: this.props.change,
          data: this.props.data,
          path: this.props.path,
          editable: this.props.editable
        });
      }
      return _react2.default.createElement(PreviewComplexValue, {
        change: this.props.change,
        data: this.props.data,
        path: this.props.path,
        editable: this.props.editable
      });
    }
  }]);
  return PreviewValue;
}(_react2.default.PureComponent), _class.propTypes = {
  data: _propTypes2.default.any,
  change: _propTypes2.default.func,
  path: _propTypes2.default.array.isRequired,
  editable: _propTypes2.default.bool
}, _temp);
exports.default = PreviewValue;
var PreviewSimpleValue = (_temp2 = _class2 = function (_React$PureComponent2) {
  (0, _inherits3.default)(PreviewSimpleValue, _React$PureComponent2);

  function PreviewSimpleValue(props) {
    (0, _classCallCheck3.default)(this, PreviewSimpleValue);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (PreviewSimpleValue.__proto__ || (0, _getPrototypeOf2.default)(PreviewSimpleValue)).call(this, props));

    _this2.handleChange = function (e) {
      _this2.setState({
        text: e.target.value
      });
    };

    _this2.handleKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this2.submit(true);
        _this2.setState({
          editing: false
        });
      }
      if (e.key === 'Escape') {
        _this2.setState({
          editing: false
        });
      }
    };

    _this2.handleSubmit = function () {
      return _this2.submit(false);
    };

    _this2.handleStartEditing = function () {
      if (_this2.props.editable) {
        _this2.setState({
          editing: true,
          text: valueToText(_this2.props.data)
        });
      }
    };

    _this2.state = {
      text: '',
      editing: false
    };
    return _this2;
  }

  (0, _createClass3.default)(PreviewSimpleValue, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.editing && !prevState.editing) {
        this.selectAll();
      }
      if (!this.state.editing && this.props.data !== prevProps.data) {
        // eslint-disable-next-line react/no-find-dom-node
        (0, _flash2.default)(_reactDom2.default.findDOMNode(this), '#FFFF00', 'transparent', 1);
      }
    }
  }, {
    key: 'submit',
    value: function submit(editing) {
      if (this.state.text === valueToText(this.props.data)) {
        this.setState({
          editing: editing
        });
        return;
      }
      var value = textToValue(this.state.text);
      if (value === BAD_INPUT) {
        this.setState({
          text: valueToText(this.props.data),
          editing: editing
        });
        return;
      }
      this.props.change(this.props.path, value);
      this.setState({
        editing: editing
      });
    }
  }, {
    key: 'selectAll',
    value: function selectAll() {
      var input = this.input;

      if (this.state.text.match(/^".*"$/)) {
        input.selectionStart = 1;
        input.selectionEnd = input.value.length - 1;
      } else {
        input.selectionStart = 0;
        input.selectionEnd = input.value.length;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var editable = this.props.editable;
      var _state = this.state,
          editing = _state.editing,
          text = _state.text;


      if (editing) {
        return _react2.default.createElement('input', {
          autoFocus: true,
          ref: function ref(i) {
            _this3.input = i;
          },
          className: (0, _aphrodite.css)(styles.input),
          onChange: this.handleChange,
          onBlur: this.handleSubmit,
          onKeyDown: this.handleKeyDown,
          value: text
        });
      }

      var data = this.props.data;


      if (typeof data === 'string' && data.length > 200) {
        data = data.slice(0, 200) + '\u2026';
      }

      return _react2.default.createElement(
        'div',
        {
          onClick: this.handleStartEditing,
          className: (0, _aphrodite.css)(styles.simple, editable && styles.simpleEditable, typeof data === 'string' && styles.simpleString, typeof data === 'undefined' && styles.simpleUndefined)
        },
        valueToText(data)
      );
    }
  }]);
  return PreviewSimpleValue;
}(_react2.default.PureComponent), _class2.propTypes = {
  change: _propTypes2.default.func,
  data: _propTypes2.default.any,
  path: _propTypes2.default.array.isRequired,
  editable: _propTypes2.default.bool
}, _temp2);
var PreviewComplexValue = (_temp3 = _class3 = function (_React$PureComponent3) {
  (0, _inherits3.default)(PreviewComplexValue, _React$PureComponent3);

  function PreviewComplexValue() {
    (0, _classCallCheck3.default)(this, PreviewComplexValue);
    return (0, _possibleConstructorReturn3.default)(this, (PreviewComplexValue.__proto__ || (0, _getPrototypeOf2.default)(PreviewComplexValue)).apply(this, arguments));
  }

  (0, _createClass3.default)(PreviewComplexValue, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var mobxObject = data[_Bridge.symbols.mobxObject];
      if (Array.isArray(data)) {
        return _react2.default.createElement(
          'span',
          { className: (0, _aphrodite.css)(styles.previewComplex) },
          this.props.displayName || 'Array',
          '[',
          data.length,
          ']'
        );
      }
      switch (data[_Bridge.symbols.type]) {
        case 'serializationError':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewError) },
            'SerializerError'
          );

        case 'deptreeNode':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewDeptreeNode) },
            data[_Bridge.symbols.name]
          );

        case 'function':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex, mobxObject && styles.mobxObject) },
            this.props.displayName || data[_Bridge.symbols.name] || 'fn',
            '()'
          );
        case 'object':
        case 'map':
        case 'set':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex, mobxObject && styles.mobxObject) },
            (this.props.displayName || data[_Bridge.symbols.name]) + '{\u2026}'
          );
        case 'date':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex) },
            this.props.displayName || data[_Bridge.symbols.name]
          );
        case 'symbol':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex) },
            this.props.displayName || data[_Bridge.symbols.name]
          );
        case 'iterator':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex) },
            (this.props.displayName || data[_Bridge.symbols.name]) + '(\u2026)'
          );

        case 'array_buffer':
        case 'data_view':
        case 'array':
        case 'typed_array':
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex, mobxObject && styles.mobxObject) },
            (this.props.displayName || data[_Bridge.symbols.name]) + '[' + data[_Bridge.symbols.meta].length + ']'
          );

        case undefined:
        case null:
          return _react2.default.createElement(
            'span',
            { className: (0, _aphrodite.css)(styles.previewComplex) },
            this.props.displayName || '{…}'
          );
        default:
          return null;
      }
    }
  }]);
  return PreviewComplexValue;
}(_react2.default.PureComponent), _class3.propTypes = {
  data: _propTypes2.default.any,
  displayName: _propTypes2.default.string
}, _temp3);


function textToValue(txt) {
  if (!txt.length) {
    return BAD_INPUT;
  }
  if (txt === 'undefined') {
    return undefined;
  }
  try {
    return JSON.parse(txt);
  } catch (e) {
    return BAD_INPUT;
  }
}

function valueToText(value) {
  if (value === undefined) {
    return 'undefined';
  }
  if (typeof value === 'number') {
    return value.toString();
  }
  if (value instanceof Date) {
    return value.toString();
  }
  return (0, _stringify2.default)(value);
}

var styles = _aphrodite.StyleSheet.create({
  input: {
    flex: 1,
    minWidth: 50,
    boxSizing: 'border-box',
    border: 'none',
    padding: 0,
    outline: 'none',
    fontFamily: 'var(--font-family-monospace)'
  },
  simple: {
    display: 'inline-flex',
    flex: 1,
    whiteSpace: 'nowrap',
    cursor: 'default',
    color: 'var(--dataview-preview-value-primitive)'
  },
  mobxObject: {
    color: 'var(--primary-color)'
  },
  simpleString: {
    color: 'var(--dataview-preview-value-primitive-string)'
  },
  simpleUndefined: {
    color: 'var(--dataview-preview-value-primitive-undefined)'
  },
  simpleEditable: {
    cursor: 'default'
  },
  previewComplex: {
    color: 'var(--dataview-preview-value-complex)'
  },
  previewDeptreeNode: {
    color: 'var(--primary-color)'
  },
  previewError: {
    backgroundColor: '#ef383b',
    color: '#fff',
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 2
  }
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(13);
var getKeys = __webpack_require__(28);
var gOPS = __webpack_require__(72);
var pIE = __webpack_require__(53);
var toObject = __webpack_require__(19);
var IObject = __webpack_require__(47);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(19);
var $keys = __webpack_require__(28);

__webpack_require__(99)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(37);
module.exports = __webpack_require__(70).f('iterator');


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(126);
var step = __webpack_require__(100);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
__webpack_require__(50);
__webpack_require__(131);
__webpack_require__(132);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(56);
var META = __webpack_require__(57).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(42);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(32);
var wks = __webpack_require__(8);
var wksExt = __webpack_require__(70);
var wksDefine = __webpack_require__(71);
var enumKeys = __webpack_require__(129);
var isArray = __webpack_require__(101);
var anObject = __webpack_require__(15);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(48);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(130);
var $GOPD = __webpack_require__(111);
var $GOPS = __webpack_require__(72);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(28);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(53).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(26)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(28);
var gOPS = __webpack_require__(72);
var pIE = __webpack_require__(53);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(102).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71)('asyncIterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71)('observable');


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(136);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(101);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(120) });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(24);
__webpack_require__(37);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(145);
__webpack_require__(146);
module.exports = __webpack_require__(1).Set;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(104);
var validate = __webpack_require__(55);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(83)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(10);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(106)('Set') });


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(40);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(84)('Set');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(85)('Set');


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(19);
var $getPrototypeOf = __webpack_require__(64);

__webpack_require__(99)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(24);
__webpack_require__(37);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
module.exports = __webpack_require__(1).Map;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(104);
var validate = __webpack_require__(55);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(83)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(10);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(106)('Map') });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(84)('Map');


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(85)('Map');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(24);
__webpack_require__(37);
__webpack_require__(156);
__webpack_require__(160);
__webpack_require__(161);
module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var global = __webpack_require__(9);
var ctx = __webpack_require__(18);
var classof = __webpack_require__(45);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(29);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(40);
var speciesConstructor = __webpack_require__(107);
var task = __webpack_require__(108).set;
var microtask = __webpack_require__(158)();
var newPromiseCapabilityModule = __webpack_require__(74);
var perform = __webpack_require__(109);
var userAgent = __webpack_require__(159);
var promiseResolve = __webpack_require__(110);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(65)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(105)(PROMISE);
Wrapper = __webpack_require__(1)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 157 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var macrotask = __webpack_require__(108).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(25)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var global = __webpack_require__(9);
var speciesConstructor = __webpack_require__(107);
var promiseResolve = __webpack_require__(110);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(74);
var perform = __webpack_require__(109);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _inlineStylePrefixerStaticCreatePrefixer = __webpack_require__(202);

var _inlineStylePrefixerStaticCreatePrefixer2 = _interopRequireDefault(_inlineStylePrefixerStaticCreatePrefixer);

var _libStaticPrefixData = __webpack_require__(207);

var _libStaticPrefixData2 = _interopRequireDefault(_libStaticPrefixData);

var _orderedElements = __webpack_require__(165);

var _orderedElements2 = _interopRequireDefault(_orderedElements);

var _util = __webpack_require__(114);

var prefixAll = (0, _inlineStylePrefixerStaticCreatePrefixer2['default'])(_libStaticPrefixData2['default']);

/* ::
import type { SheetDefinition } from './index.js';
type StringHandlers = { [id:string]: Function };
type SelectorCallback = (selector: string) => any;
export type SelectorHandler = (
    selector: string,
    baseSelector: string,
    callback: SelectorCallback
) => string | null;
*/

/**
 * `selectorHandlers` are functions which handle special selectors which act
 * differently than normal style definitions. These functions look at the
 * current selector and can generate CSS for the styles in their subtree by
 * calling the callback with a new selector.
 *
 * For example, when generating styles with a base selector of '.foo' and the
 * following styles object:
 *
 *   {
 *     ':nth-child(2n)': {
 *       ':hover': {
 *         color: 'red'
 *       }
 *     }
 *   }
 *
 * when we reach the ':hover' style, we would call our selector handlers like
 *
 *   handler(':hover', '.foo:nth-child(2n)', callback)
 *
 * Since our `pseudoSelectors` handles ':hover' styles, that handler would call
 * the callback like
 *
 *   callback('.foo:nth-child(2n):hover')
 *
 * to generate its subtree `{ color: 'red' }` styles with a
 * '.foo:nth-child(2n):hover' selector. The callback would return CSS like
 *
 *   '.foo:nth-child(2n):hover{color:red !important;}'
 *
 * and the handler would then return that resulting CSS.
 *
 * `defaultSelectorHandlers` is the list of default handlers used in a call to
 * `generateCSS`.
 *
 * @name SelectorHandler
 * @function
 * @param {string} selector: The currently inspected selector. ':hover' in the
 *     example above.
 * @param {string} baseSelector: The selector of the parent styles.
 *     '.foo:nth-child(2n)' in the example above.
 * @param {function} generateSubtreeStyles: A function which can be called to
 *     generate CSS for the subtree of styles corresponding to the selector.
 *     Accepts a new baseSelector to use for generating those styles.
 * @returns {?string} The generated CSS for this selector, or null if we don't
 *     handle this selector.
 */
var defaultSelectorHandlers = [
// Handle pseudo-selectors, like :hover and :nth-child(3n)
function pseudoSelectors(selector, /* : string */
baseSelector, /* : string */
generateSubtreeStyles /* : Function */
) /* */{
    if (selector[0] !== ":") {
        return null;
    }
    return generateSubtreeStyles(baseSelector + selector);
},

// Handle media queries (or font-faces)
function mediaQueries(selector, /* : string */
baseSelector, /* : string */
generateSubtreeStyles /* : Function */
) /* */{
    if (selector[0] !== "@") {
        return null;
    }
    // Generate the styles normally, and then wrap them in the media query.
    var generated = generateSubtreeStyles(baseSelector);
    return selector + '{' + generated + '}';
}];

exports.defaultSelectorHandlers = defaultSelectorHandlers;
/**
 * Generate CSS for a selector and some styles.
 *
 * This function handles the media queries and pseudo selectors that can be used
 * in aphrodite styles.
 *
 * @param {string} selector: A base CSS selector for the styles to be generated
 *     with.
 * @param {Object} styleTypes: A list of properties of the return type of
 *     StyleSheet.create, e.g. [styles.red, styles.blue].
 * @param {Array.<SelectorHandler>} selectorHandlers: A list of selector
 *     handlers to use for handling special selectors. See
 *     `defaultSelectorHandlers`.
 * @param stringHandlers: See `generateCSSRuleset`
 * @param useImportant: See `generateCSSRuleset`
 *
 * To actually generate the CSS special-construct-less styles are passed to
 * `generateCSSRuleset`.
 *
 * For instance, a call to
 *
 *     generateCSS(".foo", [{
 *       color: "red",
 *       "@media screen": {
 *         height: 20,
 *         ":hover": {
 *           backgroundColor: "black"
 *         }
 *       },
 *       ":active": {
 *         fontWeight: "bold"
 *       }
 *     }], defaultSelectorHandlers);
 *
 * with the default `selectorHandlers` will make 5 calls to
 * `generateCSSRuleset`:
 *
 *     generateCSSRuleset(".foo", { color: "red" }, ...)
 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
 *     // These 2 will be wrapped in @media screen {}
 *     generateCSSRuleset(".foo", { height: 20 }, ...)
 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
 */
var generateCSS = function generateCSS(selector, /* : string */
styleTypes, /* : SheetDefinition[] */
selectorHandlers, /* : SelectorHandler[] */
stringHandlers, /* : StringHandlers */
useImportant /* : boolean */
) /* : string */{
    var merged = new _orderedElements2['default']();

    for (var i = 0; i < styleTypes.length; i++) {
        merged.addStyleType(styleTypes[i]);
    }

    var plainDeclarations = new _orderedElements2['default']();
    var generatedStyles = "";

    // TODO(emily): benchmark this to see if a plain for loop would be faster.
    merged.forEach(function (val, key) {
        // For each key, see if one of the selector handlers will handle these
        // styles.
        var foundHandler = selectorHandlers.some(function (handler) {
            var result = handler(key, selector, function (newSelector) {
                return generateCSS(newSelector, [val], selectorHandlers, stringHandlers, useImportant);
            });
            if (result != null) {
                // If the handler returned something, add it to the generated
                // CSS and stop looking for another handler.
                generatedStyles += result;
                return true;
            }
        });
        // If none of the handlers handled it, add it to the list of plain
        // style declarations.
        if (!foundHandler) {
            plainDeclarations.set(key, val, true);
        }
    });

    return generateCSSRuleset(selector, plainDeclarations, stringHandlers, useImportant, selectorHandlers) + generatedStyles;
};

exports.generateCSS = generateCSS;
/**
 * Helper method of generateCSSRuleset to facilitate custom handling of certain
 * CSS properties. Used for e.g. font families.
 *
 * See generateCSSRuleset for usage and documentation of paramater types.
 */
var runStringHandlers = function runStringHandlers(declarations, /* : OrderedElements */
stringHandlers, /* : StringHandlers */
selectorHandlers /* : SelectorHandler[] */
) /* : void */{
    if (!stringHandlers) {
        return;
    }

    var stringHandlerKeys = Object.keys(stringHandlers);
    for (var i = 0; i < stringHandlerKeys.length; i++) {
        var key = stringHandlerKeys[i];
        if (declarations.has(key)) {
            // A declaration exists for this particular string handler, so we
            // need to let the string handler interpret the declaration first
            // before proceeding.
            //
            // TODO(emily): Pass in a callback which generates CSS, similar to
            // how our selector handlers work, instead of passing in
            // `selectorHandlers` and have them make calls to `generateCSS`
            // themselves. Right now, this is impractical because our string
            // handlers are very specialized and do complex things.
            declarations.set(key, stringHandlers[key](declarations.get(key), selectorHandlers),

            // Preserve order here, since we are really replacing an
            // unprocessed style with a processed style, not overriding an
            // earlier style
            false);
        }
    }
};

var transformRule = function transformRule(key, /* : string */
value, /* : string */
transformValue /* : function */
) {
    return (/* : string */(0, _util.kebabifyStyleName)(key) + ':' + transformValue(key, value) + ';'
    );
};

/**
 * Generate a CSS ruleset with the selector and containing the declarations.
 *
 * This function assumes that the given declarations don't contain any special
 * children (such as media queries, pseudo-selectors, or descendant styles).
 *
 * Note that this method does not deal with nesting used for e.g.
 * psuedo-selectors or media queries. That responsibility is left to  the
 * `generateCSS` function.
 *
 * @param {string} selector: the selector associated with the ruleset
 * @param {Object} declarations: a map from camelCased CSS property name to CSS
 *     property value.
 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
 *     property name to a function which will map the given value to the value
 *     that is output.
 * @param {bool} useImportant: A boolean saying whether to append "!important"
 *     to each of the CSS declarations.
 * @returns {string} A string of raw CSS.
 *
 * Examples:
 *
 *    generateCSSRuleset(".blah", { color: "red" })
 *    -> ".blah{color: red !important;}"
 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
 *    -> ".blah{color: red}"
 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
 *    -> ".blah{color: RED}"
 *    generateCSSRuleset(".blah:hover", { color: "red" })
 *    -> ".blah:hover{color: red}"
 */
var generateCSSRuleset = function generateCSSRuleset(selector, /* : string */
declarations, /* : OrderedElements */
stringHandlers, /* : StringHandlers */
useImportant, /* : boolean */
selectorHandlers /* : SelectorHandler[] */
) /* : string */{
    // Mutates declarations
    runStringHandlers(declarations, stringHandlers, selectorHandlers);

    var originalElements = _extends({}, declarations.elements);

    // NOTE(emily): This mutates handledDeclarations.elements.
    var prefixedElements = prefixAll(declarations.elements);

    var elementNames = Object.keys(prefixedElements);
    if (elementNames.length !== declarations.keyOrder.length) {
        // There are some prefixed values, so we need to figure out how to sort
        // them.
        //
        // Loop through prefixedElements, looking for anything that is not in
        // sortOrder, which means it was added by prefixAll. This means that we
        // need to figure out where it should appear in the sortOrder.
        for (var i = 0; i < elementNames.length; i++) {
            if (!originalElements.hasOwnProperty(elementNames[i])) {
                // This element is not in the sortOrder, which means it is a prefixed
                // value that was added by prefixAll. Let's try to figure out where it
                // goes.
                var originalStyle = undefined;
                if (elementNames[i][0] === 'W') {
                    // This is a Webkit-prefixed style, like "WebkitTransition". Let's
                    // find its original style's sort order.
                    originalStyle = elementNames[i][6].toLowerCase() + elementNames[i].slice(7);
                } else if (elementNames[i][1] === 'o') {
                    // This is a Moz-prefixed style, like "MozTransition". We check
                    // the second character to avoid colliding with Ms-prefixed
                    // styles. Let's find its original style's sort order.
                    originalStyle = elementNames[i][3].toLowerCase() + elementNames[i].slice(4);
                } else {
                    // if (elementNames[i][1] === 's') {
                    // This is a Ms-prefixed style, like "MsTransition".
                    originalStyle = elementNames[i][2].toLowerCase() + elementNames[i].slice(3);
                }

                if (originalStyle && originalElements.hasOwnProperty(originalStyle)) {
                    var originalIndex = declarations.keyOrder.indexOf(originalStyle);
                    declarations.keyOrder.splice(originalIndex, 0, elementNames[i]);
                } else {
                    // We don't know what the original style was, so sort it to
                    // top. This can happen for styles that are added that don't
                    // have the same base name as the original style.
                    declarations.keyOrder.unshift(elementNames[i]);
                }
            }
        }
    }

    var transformValue = useImportant === false ? _util.stringifyValue : _util.stringifyAndImportantifyValue;

    var rules = [];
    for (var i = 0; i < declarations.keyOrder.length; i++) {
        var key = declarations.keyOrder[i];
        var value = prefixedElements[key];
        if (Array.isArray(value)) {
            // inline-style-prefixer returns an array when there should be
            // multiple rules for the same key. Here we flatten to multiple
            // pairs with the same key.
            for (var j = 0; j < value.length; j++) {
                rules.push(transformRule(key, value[j], transformValue));
            }
        } else {
            rules.push(transformRule(key, value, transformValue));
        }
    }

    if (rules.length) {
        return selector + '{' + rules.join("") + '}';
    } else {
        return "";
    }
};
exports.generateCSSRuleset = generateCSSRuleset;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MAP_EXISTS = typeof Map !== 'undefined';

var OrderedElements = (function () {
    /* ::
    elements: {[string]: any};
    keyOrder: string[];
    */

    function OrderedElements() {
        _classCallCheck(this, OrderedElements);

        this.elements = {};
        this.keyOrder = [];
    }

    _createClass(OrderedElements, [{
        key: 'forEach',
        value: function forEach(callback /* : (string, any) => void */) {
            for (var i = 0; i < this.keyOrder.length; i++) {
                // (value, key) to match Map's API
                callback(this.elements[this.keyOrder[i]], this.keyOrder[i]);
            }
        }
    }, {
        key: 'set',
        value: function set(key, /* : string */value, /* : any */shouldReorder /* : ?boolean */) {
            var _this = this;

            if (!this.elements.hasOwnProperty(key)) {
                this.keyOrder.push(key);
            } else if (shouldReorder) {
                var index = this.keyOrder.indexOf(key);
                this.keyOrder.splice(index, 1);
                this.keyOrder.push(key);
            }

            if (value == null) {
                this.elements[key] = value;
                return;
            }

            if (MAP_EXISTS && value instanceof Map || value instanceof OrderedElements) {
                var _ret = (function () {
                    // We have found a nested Map, so we need to recurse so that all
                    // of the nested objects and Maps are merged properly.
                    var nested = _this.elements.hasOwnProperty(key) ? _this.elements[key] : new OrderedElements();
                    value.forEach(function (value, key) {
                        nested.set(key, value, shouldReorder);
                    });
                    _this.elements[key] = nested;
                    return {
                        v: undefined
                    };
                })();

                if (typeof _ret === 'object') return _ret.v;
            }

            if (!Array.isArray(value) && typeof value === 'object') {
                // We have found a nested object, so we need to recurse so that all
                // of the nested objects and Maps are merged properly.
                var nested = this.elements.hasOwnProperty(key) ? this.elements[key] : new OrderedElements();
                var keys = Object.keys(value);
                for (var i = 0; i < keys.length; i += 1) {
                    nested.set(keys[i], value[keys[i]], shouldReorder);
                }
                this.elements[key] = nested;
                return;
            }

            this.elements[key] = value;
        }
    }, {
        key: 'get',
        value: function get(key /* : string */) /* : any */{
            return this.elements[key];
        }
    }, {
        key: 'has',
        value: function has(key /* : string */) /* : boolean */{
            return this.elements.hasOwnProperty(key);
        }
    }, {
        key: 'addStyleType',
        value: function addStyleType(styleType /* : any */) /* : void */{
            var _this2 = this;

            if (MAP_EXISTS && styleType instanceof Map || styleType instanceof OrderedElements) {
                styleType.forEach(function (value, key) {
                    _this2.set(key, value, true);
                });
            } else {
                var keys = Object.keys(styleType);
                for (var i = 0; i < keys.length; i++) {
                    this.set(keys[i], styleType[keys[i]], true);
                }
            }
        }
    }]);

    return OrderedElements;
})();

exports['default'] = OrderedElements;
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidRegex = isValidRegex;
exports.searchTextToRegExp = searchTextToRegExp;
exports.shouldSearchUseRegex = shouldSearchUseRegex;
exports.trimSearchText = trimSearchText;
function isValidRegex(needle) {
  var isValid = true;

  if (needle) {
    try {
      searchTextToRegExp(needle);
    } catch (error) {
      isValid = false;
    }
  }

  return isValid;
}

/**
 * Convert the specified search text to a RegExp.
 */
function searchTextToRegExp(needle) {
  return new RegExp(trimSearchText(needle), 'gi');
}

/**
 * Should the current search text be converted to a RegExp?
 */
function shouldSearchUseRegex(needle) {
  return !!needle && needle.charAt(0) === '/' && trimSearchText(needle).length > 0;
}

/**
 * '/foo/' => 'foo'
 * '/bar' => 'bar'
 * 'baz' => 'baz'
 */
function trimSearchText(needle) {
  if (needle.charAt(0) === '/') {
    return needle.substr(1);
  }
  if (needle.charAt(needle.length - 1) === '/') {
    return needle.substr(0, needle.length - 1);
  }
  return needle;
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextProvider = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(ContextProvider, _PureComponent);

  function ContextProvider() {
    (0, _classCallCheck3.default)(this, ContextProvider);
    return (0, _possibleConstructorReturn3.default)(this, (ContextProvider.__proto__ || (0, _getPrototypeOf2.default)(ContextProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContextProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { stores: this.props.stores };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ContextProvider;
}(_react.PureComponent), _class.propTypes = {
  stores: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired
}, _class.childContextTypes = {
  stores: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ContextProvider;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aphrodite = __webpack_require__(11);

exports.default = _aphrodite.StyleSheet.create({
  default: {
    // '--primary-color': '#f14748',
    '--primary-color': '#03a1ec',
    '--default-text-color': '#333',
    '--lighter-text-color': '#555',
    '--light-text-color': '#777',

    '--bar-color': '#efefef',
    '--bar-border-color': '#dadada',
    '--bar-active-button-bg': 'rgba(0, 0, 0, 0.07)',

    '--content-border-color': 'var(--bar-border-color)',
    '--split-dragger-color': 'rgba(0, 0, 0, 0.35)',

    '--treenode-bracket': '#777',
    '--treenode-tag-name': 'var(--primary-color)',
    '--treenode-arrow': '#666',
    '--treenode-props': '#666',
    '--treenode-props-key': 'inherit',
    '--treenode-props-ellipsis': 'inherit',
    '--treenode-props-value': '#555',
    '--treenode-props-value-prop-number': 'var(--treenode-props-value)',
    '--treenode-props-value-prop-string': 'var(--treenode-props-value)',
    '--treenode-props-value-prop-nonobject': 'var(--treenode-props-value)',
    '--treenode-props-value-prop-fn': 'var(--treenode-props-value)',
    '--treenode-props-value-prop-iterator': 'var(--treenode-props-value)',
    '--treenode-props-value-prop-symbol': 'var(--treenode-props-value)',
    '--treenode-props-value-prop-nested': 'var(--treenode-props-value)',
    '--treenode-props-value-array': 'var(--treenode-props-value)',
    '--treenode-props-value-object': 'var(--treenode-props-value)',
    '--treenode-props-value-object-attr': 'var(--treenode-props-value)',
    '--treenode-hovered-bg': 'rgba(0, 0, 0, 0.05)',
    '--treenode-selected-bg': 'var(--primary-color)',
    '--treenode-hover-guide': 'rgba(0, 0, 0, 0.1)',
    '--treenode-search-highlight': 'rgba(255, 255, 0, 0.5)',

    '--dataview-preview-key': '#881391',
    '--dataview-preview-value': 'var(--default-text-color)',
    '--dataview-preview-value-empty': 'var(--light-text-color)',
    '--dataview-preview-value-primitive': '#1c00cf',
    '--dataview-preview-value-primitive-string': '#c41a16',
    '--dataview-preview-value-primitive-undefined': '#777',
    '--dataview-preview-value-complex': '#616161',
    '--dataview-preview-value-missing': 'var(--light-text-color)',
    '--dataview-preview-punctuation': '#323232',
    '--dataview-arrow': '#6e6e6e',

    '--font-family-monospace': '"Hack", "SF Mono", "Menlo", "Monaco", monospace'
  }
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SecondaryPanel;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

SecondaryPanel.propTypes = {
  children: _propTypes2.default.node
};

function SecondaryPanel(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.panel) },
    children
  );
}

var styles = _aphrodite.StyleSheet.create({
  panel: {
    display: 'flex',
    flex: '0 0 auto',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    alignItems: 'center'
  }
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonRecord;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _icons = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ButtonRecord.propTypes = {
  active: _propTypes2.default.bool,
  showTipStartRecoding: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

function ButtonRecord(_ref) {
  var active = _ref.active,
      onClick = _ref.onClick,
      showTipStartRecoding = _ref.showTipStartRecoding;

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.button), onClick: onClick },
    _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.record, active && styles.recordActive) }),
    showTipStartRecoding && _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.tipStartRecoding) },
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.tipStartRecodingIcon) },
        _react2.default.createElement(_icons.StartRecordingArrow, null)
      ),
      'Click to start recording'
    )
  );
}

var styles = _aphrodite.StyleSheet.create({
  button: {
    display: 'inline-block',
    width: 33,
    height: 33,
    position: 'relative'
  },
  record: {
    display: 'block',
    margin: '10px 10px',
    width: 13,
    height: 13,
    borderRadius: '50%',
    backgroundColor: '#6E6E6E'
  },
  recordActive: {
    backgroundColor: '#ef3217',
    boxShadow: '0 0 0 2px rgba(239, 50, 23, 0.35)'
  },
  tipStartRecoding: {
    width: 160,
    boxSizing: 'border-box',
    paddingTop: 9,
    lineHeight: '16px',
    color: '#6e6e6e',
    height: 0,
    position: 'absolute',
    bottom: -5,
    left: 13,
    paddingLeft: 25
  },
  tipStartRecodingIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5
  }
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReloadIcon = exports.StartRecordingArrow = exports.ContextMenu = exports.ClearIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClearIcon = exports.ClearIcon = function ClearIcon() {
  return _react2.default.createElement(
    "svg",
    {
      baseProfile: "basic",
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 13 13"
    },
    _react2.default.createElement(
      "g",
      { stroke: "var(--light-text-color)", strokeWidth: "1.5", strokeMiterlimit: "10" },
      _react2.default.createElement("circle", { fill: "none", cx: "6.5", cy: "6.5", r: "5.75" }),
      _react2.default.createElement("path", { fill: "none", d: "M2.443 2.443l8.118 8.118" })
    )
  );
};

var ContextMenu = exports.ContextMenu = function ContextMenu() {
  return _react2.default.createElement(
    "svg",
    {
      baseProfile: "basic",
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 13 13"
    },
    _react2.default.createElement("path", { fill: "var(--primary-color)", d: "M5 0h3v3H5zM5 5h3v3H5zM5 10h3v3H5z" })
  );
};

var StartRecordingArrow = exports.StartRecordingArrow = function StartRecordingArrow() {
  return _react2.default.createElement(
    "svg",
    {
      baseProfile: "basic",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20"
    },
    _react2.default.createElement("path", {
      fill: "none",
      stroke: "var(--light-text-color)",
      strokeWidth: "1.2",
      strokeMiterlimit: "10",
      d: "M18.75 17C11.782 17 5.873 12.477 3.795 6.207"
    }),
    _react2.default.createElement("path", { fill: "var(--light-text-color)", d: "M7.406 7.93l-3.3-.73L1.29 9.068 3 1.25" })
  );
};

var ReloadIcon = exports.ReloadIcon = function ReloadIcon() {
  return _react2.default.createElement(
    "svg",
    {
      baseProfile: "basic",
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 13 13"
    },
    _react2.default.createElement("path", {
      fill: "none",
      stroke: "var(--light-text-color)",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      d: "M9.543 3.13C8.61 2.273 7.366 1.75 6 1.75 3.1 1.75.75 4.1.75 7S3.1 12.25 6 12.25 11.25 9.9 11.25 7"
    }),
    _react2.default.createElement("path", { fill: "var(--light-text-color)", d: "M6.3 4.655L12.136.923l-1.052 4.782" })
  );
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(58);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(11);

var _icons = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonClear = function (_React$PureComponent) {
  (0, _inherits3.default)(ButtonClear, _React$PureComponent);

  function ButtonClear() {
    (0, _classCallCheck3.default)(this, ButtonClear);
    return (0, _possibleConstructorReturn3.default)(this, (ButtonClear.__proto__ || (0, _getPrototypeOf2.default)(ButtonClear)).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonClear, [{
    key: 'render',
    value: function render() {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: (0, _aphrodite.css)(styles.button) }, this.props),
          _react2.default.createElement(_icons.ClearIcon, null)
        )
      );
    }
  }]);
  return ButtonClear;
}(_react2.default.PureComponent);

exports.default = ButtonClear;


var styles = _aphrodite.StyleSheet.create({
  button: {
    flex: '0 0 auto',
    display: 'inline-flex',
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _List["default"];
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _List["default"];
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_RowRendererParams", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_RowRendererParams;
  }
});

var _List = _interopRequireDefault(__webpack_require__(270));

var _types = __webpack_require__(183);

/***/ }),
/* 175 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 176 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(175);

var assertThisInitialized = __webpack_require__(117);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(271);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultOverscanIndicesGetter;
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = void 0;

var _types = __webpack_require__(46);

var SCROLL_DIRECTION_BACKWARD = -1;
exports.SCROLL_DIRECTION_BACKWARD = SCROLL_DIRECTION_BACKWARD;
var SCROLL_DIRECTION_FORWARD = 1;
exports.SCROLL_DIRECTION_FORWARD = SCROLL_DIRECTION_FORWARD;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
exports.SCROLL_DIRECTION_HORIZONTAL = SCROLL_DIRECTION_HORIZONTAL;
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

exports.SCROLL_DIRECTION_VERTICAL = SCROLL_DIRECTION_VERTICAL;

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultCellRangeRenderer;

var _types = __webpack_require__(46);

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;
  var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.

  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = "".concat(rowIndex, "-").concat(columnIndex);
      var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.

      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };
          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };
      var renderedCell = void 0; // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028

      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;
        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

var _interopRequireWildcard = __webpack_require__(95);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_RenderedRows = exports.bpfrpt_proptype_RowRenderer = exports.bpfrpt_proptype_RowRendererParams = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var bpfrpt_proptype_RowRendererParams =  true ? null : {
  "index": _propTypes["default"].number.isRequired,
  "isScrolling": _propTypes["default"].bool.isRequired,
  "isVisible": _propTypes["default"].bool.isRequired,
  "key": _propTypes["default"].string.isRequired,
  "parent": _propTypes["default"].object.isRequired,
  "style": _propTypes["default"].object.isRequired
};
exports.bpfrpt_proptype_RowRendererParams = bpfrpt_proptype_RowRendererParams;
var bpfrpt_proptype_RowRenderer =  true ? null : _propTypes["default"].func;
exports.bpfrpt_proptype_RowRenderer = bpfrpt_proptype_RowRenderer;
var bpfrpt_proptype_RenderedRows =  true ? null : {
  "overscanStartIndex": _propTypes["default"].number.isRequired,
  "overscanStopIndex": _propTypes["default"].number.isRequired,
  "startIndex": _propTypes["default"].number.isRequired,
  "stopIndex": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_RenderedRows = bpfrpt_proptype_RenderedRows;
var bpfrpt_proptype_Scroll =  true ? null : {
  "clientHeight": _propTypes["default"].number.isRequired,
  "scrollHeight": _propTypes["default"].number.isRequired,
  "scrollTop": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = ChangeDataViewerPopover;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _PreviewValue = __webpack_require__(119);

var _PreviewValue2 = _interopRequireDefault(_PreviewValue);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _Popover = __webpack_require__(185);

var _Popover2 = _interopRequireDefault(_Popover);

var _index = __webpack_require__(186);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ChangeDataViewerPopover.propTypes = {
  className: _propTypes2.default.string,
  displayName: _propTypes2.default.string,
  path: _propTypes2.default.array.isRequired,
  getValueByPath: _propTypes2.default.func,
  inspect: _propTypes2.default.func,
  stopInspecting: _propTypes2.default.func,
  showMenu: _propTypes2.default.func
};

function ChangeDataViewerPopover(_ref) {
  var className = _ref.className,
      displayName = _ref.displayName,
      path = _ref.path,
      getValueByPath = _ref.getValueByPath,
      inspect = _ref.inspect,
      stopInspecting = _ref.stopInspecting,
      showMenu = _ref.showMenu;

  var value = getValueByPath(path);
  var otype = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
  if (otype === 'number' || otype === 'string' || value === null || value === undefined || otype === 'boolean') {
    return _react2.default.createElement(_PreviewValue2.default, { data: value, className: className, path: path });
  }

  var dataViewer = _react2.default.createElement(_index2.default, {
    path: path,
    getValueByPath: getValueByPath,
    inspect: inspect,
    stopInspecting: stopInspecting,
    showMenu: showMenu,
    decorator: (0, _injectStores2.default)({
      subscribe: function subscribe(stores, props) {
        return {
          actionsLoggerStore: ['inspected--' + props.path.join('/')]
        };
      },
      shouldUpdate: function shouldUpdate() {
        return true;
      }
    })
  });

  return _react2.default.createElement(
    _Popover2.default,
    {
      requireClick: true,
      content: dataViewer,
      onShown: function onShown() {
        return inspect(path);
      } // eslint-disable-line react/jsx-no-bind
    },
    _react2.default.createElement(
      'span',
      {
        className: (0, _aphrodite.css)(styles.trigger) + ' ' + className
        // eslint-disable-next-line react/jsx-no-bind
        , onContextMenu: function onContextMenu(e) {
          if (typeof showMenu === 'function') {
            showMenu(e, undefined, path);
          }
        }
      },
      _react2.default.createElement(_PreviewValue2.default, { data: value, displayName: displayName, path: path })
    )
  );
}

var styles = _aphrodite.StyleSheet.create({
  trigger: {
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 2,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  }
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.availablePlacements = undefined;

var _toArray2 = __webpack_require__(290);

var _toArray3 = _interopRequireDefault(_toArray2);

var _toConsumableArray2 = __webpack_require__(52);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(94);

var _shallowequal = __webpack_require__(291);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _aphrodite = __webpack_require__(11);

var _ContextProvider = __webpack_require__(168);

var _ContextProvider2 = _interopRequireDefault(_ContextProvider);

var _theme = __webpack_require__(169);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availablePlacements = exports.availablePlacements = ['top', 'bottom' /* , 'right' */];
var between = function between(v, min, max) {
  return Math.max(Math.min(v, max), min);
};
var rectFromEl = function rectFromEl(el) {
  var rect = el.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
};
var ARROW_SIZE = 6;
// const MIN_WIDTH = 250;
var GUTTER = 20;

var popoverStyleForPlacement = function popoverStyleForPlacement(placement) {
  switch (placement) {
    case 'top':
      return styles.popoverTop;
    case 'bottom':
      return styles.popoverBottom;
    case 'right':
      return styles.popoverRight;
    default:
      return undefined;
  }
};

var arrowStyleForPlacement = function arrowStyleForPlacement(placement) {
  switch (placement) {
    case 'top':
      return styles.arrowTop;
    case 'bottom':
      return styles.arrowBottom;
    case 'right':
      return styles.arrowRight;
    default:
      return undefined;
  }
};

var activeHtmlPortals = [];

var PopoverBubble = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(PopoverBubble, _Component);

  function PopoverBubble(props) {
    (0, _classCallCheck3.default)(this, PopoverBubble);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PopoverBubble.__proto__ || (0, _getPrototypeOf2.default)(PopoverBubble)).call(this, props));

    _this.reposition = function () {
      var _this$props = _this.props,
          triggerHtmlElement = _this$props.triggerHtmlElement,
          placement = _this$props.placement;

      var selfRect = rectFromEl(_this.el);
      var triggerRect = rectFromEl(triggerHtmlElement);
      if ((0, _shallowequal2.default)(triggerRect, _this.$previousTriggerRect) && (0, _shallowequal2.default)(selfRect, _this.$previousSelfRect)) {
        return;
      }
      _this.$previousTriggerRect = triggerRect;
      _this.$previousSelfRect = selfRect;
      var placements = [placement].concat((0, _toConsumableArray3.default)(availablePlacements.filter(function (p) {
        return p !== placement;
      })));
      _this.setState(_this.calculate(placements, selfRect, triggerRect));
    };

    _this.state = {
      content: '',
      arrowCoordinates: { left: 0, top: 0 },
      bodyCoordinates: { left: 0, top: 0 }
    };
    return _this;
  }

  (0, _createClass3.default)(PopoverBubble, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.reposition();

      // required as some deep children may update after popover shown (DataViewer received data)
      this.$repositionInterval = setInterval(function () {
        return _this2.reposition();
      }, 100);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.$repositionInterval);
    }
  }, {
    key: 'calculate',
    value: function calculate(_ref, selfRect, triggerRect) {
      var _ref2 = (0, _toArray3.default)(_ref),
          placement = _ref2[0],
          nextPlacementsToTry = _ref2.slice(1);

      var htmlWidth = window.innerWidth;
      var htmlHeight = window.innerHeight;
      var notLast = nextPlacementsToTry.length > 0;
      var maxHeight = htmlHeight - 2 * GUTTER;
      var maxWidth = htmlWidth - 2 * GUTTER;
      var assumedHeight = Math.min(maxHeight, selfRect.height);
      // const assumedWidth = between(selfRect.width, MIN_WIDTH, maxWidth);

      switch (placement) {
        // case 'right': {
        //   if (notLast && triggerRect.right + assumedWidth + ARROW_SIZE > htmlWidth) {
        //     return this.calculate(nextPlacementsToTry, selfRect, triggerRect);
        //   }
        //   return {
        //     arrowCoordinates: {
        //       left: triggerRect.right + ARROW_SIZE,
        //       top: triggerRect.top + triggerRect.height / 2,
        //     },
        //     bodyCoordinates: {
        //       left: triggerRect.right + ARROW_SIZE,
        //       top: between(
        //         triggerRect.top + (triggerRect.height / 2 - selfRect.height / 2),
        //         htmlWidth - assumedWidth - GUTTER,
        //         htmlWidth - selfRect.width - GUTTER
        //       ),
        //     },
        //     maxWidth: Math.min(maxWidth, htmlWidth - triggerRect.right - ARROW_SIZE - 2 * GUTTER),
        //     maxHeight,
        //     placement,
        //   };
        // }
        case 'top':
          {
            var hOverlap = triggerRect.top - selfRect.height - ARROW_SIZE < 0;
            if (notLast && hOverlap) {
              return this.calculate(nextPlacementsToTry, selfRect, triggerRect);
            }
            return {
              arrowCoordinates: !hOverlap && {
                left: triggerRect.left + triggerRect.width / 2,
                top: triggerRect.top - ARROW_SIZE
              },
              bodyCoordinates: {
                left: between(triggerRect.left + (triggerRect.width / 2 - selfRect.width / 2), GUTTER, htmlWidth - GUTTER - selfRect.width),
                top: hOverlap ? htmlHeight - assumedHeight - GUTTER : triggerRect.top - selfRect.height - ARROW_SIZE
              },
              maxWidth: maxWidth,
              maxHeight: maxHeight,
              placement: placement
            };
          }
        case 'bottom':
          {
            var _hOverlap = triggerRect.bottom + selfRect.height + ARROW_SIZE > htmlHeight;
            if (notLast && _hOverlap) {
              return this.calculate(nextPlacementsToTry, selfRect, triggerRect);
            }
            return {
              arrowCoordinates: !_hOverlap && {
                left: triggerRect.left + triggerRect.width / 2,
                top: triggerRect.bottom + ARROW_SIZE
              },
              bodyCoordinates: {
                left: between(triggerRect.left + (triggerRect.width / 2 - selfRect.width / 2), GUTTER, htmlWidth - GUTTER - selfRect.width),
                top: _hOverlap ? htmlHeight - assumedHeight - GUTTER : triggerRect.bottom + ARROW_SIZE
              },
              maxWidth: maxWidth,
              maxHeight: maxHeight,
              placement: placement
            };
          }
        default:
          {
            throw new Error('Unexpected placement: ' + placement);
          }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          withArrow = _props.withArrow,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart;
      var content = this.state.content;
      var _state = this.state,
          arrowCoordinates = _state.arrowCoordinates,
          bodyCoordinates = _state.bodyCoordinates,
          maxWidth = _state.maxWidth,
          maxHeight = _state.maxHeight,
          placement = _state.placement;


      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(_theme2.default.default) },
        withArrow && arrowCoordinates && _react2.default.createElement('div', {
          className: (0, _aphrodite.css)(styles.arrow, arrowStyleForPlacement(placement)),
          style: { top: arrowCoordinates.top, left: arrowCoordinates.left }
        }),
        _react2.default.createElement(
          'div',
          {
            className: (0, _aphrodite.css)(styles.popover, popoverStyleForPlacement(placement)),
            style: {
              top: bodyCoordinates.top,
              left: bodyCoordinates.left,
              maxWidth: maxWidth,
              maxHeight: maxHeight
            },
            ref: function ref(el) {
              _this3.el = el;
            },
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onTouchStart: onTouchStart
          },
          content
        )
      );
    }
  }]);
  return PopoverBubble;
}(_react.Component), _class.propTypes = {
  placement: _propTypes2.default.oneOf(availablePlacements),
  withArrow: _propTypes2.default.bool.isRequired,
  triggerHtmlElement: _propTypes2.default.instanceOf(window.HTMLElement).isRequired,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func
}, _temp);

// eslint-disable-next-line react/no-multi-comp

var PopoverTrigger = (_temp2 = _class2 = function (_Component2) {
  (0, _inherits3.default)(PopoverTrigger, _Component2);

  function PopoverTrigger(props) {
    (0, _classCallCheck3.default)(this, PopoverTrigger);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (PopoverTrigger.__proto__ || (0, _getPrototypeOf2.default)(PopoverTrigger)).call(this, props));

    _this4.htmlPortal = document.createElement('div');
    _this4.popup = undefined;

    _this4.handleMouseEnter = function (e) {
      if (_this4.props.children.props.onMouseEnter) _this4.props.children.props.onMouseEnter(e);
      _this4.setState({ hovered: true });
    };

    _this4.handleMouseLeave = function (e) {
      if (_this4.props.children.props.onMouseLeave) _this4.props.children.props.onMouseLeave(e);
      _this4.setState({ hovered: false });
    };

    _this4.handleBubbleMouseEnter = function () {
      _this4.setState({ bubbleHovered: true });
    };

    _this4.handleBubbleMouseLeave = function () {
      _this4.setState({ bubbleHovered: false });
    };

    _this4.handleClick = function (e) {
      if (_this4.props.children.props.onClick) _this4.props.children.props.onClick(e);
      if (_this4.props.requireClick) {
        e.stopPropagation();
        if (_this4.state.shown) {
          _this4.hide();
        } else {
          _this4.show();
        }
      }
    };

    _this4.handleFinishInteractionAnywhere = function (e) {
      var clickInsideTrigger = _this4.triggerEl && _this4.triggerEl.contains(e.target);
      var clickInsideHtmlPortal = activeHtmlPortals.find(function (p) {
        return p.contains(e.target);
      }) !== undefined;
      if (clickInsideTrigger === false && clickInsideHtmlPortal === false) {
        document.removeEventListener('touchstart', _this4.handleFinishInteractionAnywhere, true);
        document.removeEventListener('click', _this4.handleFinishInteractionAnywhere, true);
        _this4.hide();
      }
    };

    _this4.show = function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.state;

      _this4.triggerEl = (0, _reactDom.findDOMNode)(_this4); // eslint-disable-line react/no-find-dom-node
      if (!(_this4.triggerEl instanceof window.HTMLElement)) return;
      if (!state.shown) {
        var _this4$props = _this4.props,
            placement = _this4$props.placement,
            content = _this4$props.content,
            withArrow = _this4$props.withArrow;

        if (!content) {
          return;
        }
        document.body.appendChild(_this4.htmlPortal);
        activeHtmlPortals.push(_this4.htmlPortal);

        (0, _reactDom.render)(_react2.default.createElement(
          _ContextProvider2.default,
          { stores: _this4.context.stores },
          _react2.default.createElement(PopoverBubble, {
            ref: function ref(el) {
              _this4.popup = el;
            },
            placement: placement,
            withArrow: withArrow,
            triggerHtmlElement: _this4.triggerEl,
            onMouseEnter: _this4.handleBubbleMouseEnter,
            onMouseLeave: _this4.handleBubbleMouseLeave,
            onTouchStart: _this4.handleBubbleMouseEnter
          })
        ), _this4.htmlPortal);

        _this4.popup.setState({ content: content });

        document.addEventListener('touchstart', _this4.handleFinishInteractionAnywhere, true);
        document.addEventListener('click', _this4.handleFinishInteractionAnywhere, true);

        window.addEventListener('resize', _this4.popup.reposition);
        document.addEventListener('scroll', _this4.popup.reposition, true);

        _this4.setState({ shown: true }, _this4.props.onShown);
      }
    };

    _this4.hide = function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.state;

      if (state.shown) {
        if (_this4.triggerEl) {
          _this4.triggerEl.removeEventListener('mouseleave', _this4.handleMouseLeave, true);
          _this4.triggerEl = undefined;
        }
        document.body.removeChild(_this4.htmlPortal);
        var idx = activeHtmlPortals.indexOf(_this4.htmlPortal);
        if (idx !== -1) activeHtmlPortals.splice(idx, 1);
        window.removeEventListener('resize', _this4.popup.reposition);
        document.removeEventListener('scroll', _this4.popup.reposition, true);
        (0, _reactDom.unmountComponentAtNode)(_this4.htmlPortal);
        _this4.popup = undefined;
        _this4.setState({ shown: false });
      }
    };

    _this4.state = {
      shown: false
    };
    return _this4;
  }

  (0, _createClass3.default)(PopoverTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.shown) {
        this.show();
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var _this5 = this;

      if (!nextState.shown && !nextProps.requireClick && (nextState.hovered || nextState.bubbleHovered || nextProps.shown)) {
        this.show(nextState);
      }
      setTimeout(function () {
        if (_this5.state.shown && !_this5.props.requireClick && !_this5.state.hovered && !_this5.state.bubbleHovered && !_this5.props.shown) {
          _this5.hide();
        }
      }, 50);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var content = this.props.content;

      if (this.popup) {
        this.popup.reposition();
        this.popup.setState({ content: content });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.cloneElement(_react2.default.Children.only(children), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onTouchStart: this.handleMouseEnter,
        onClick: this.handleClick
      });
    }
  }]);
  return PopoverTrigger;
}(_react.Component), _class2.propTypes = {
  onShown: _propTypes2.default.func,
  children: _propTypes2.default.node,
  placement: _propTypes2.default.oneOf(availablePlacements),
  content: _propTypes2.default.node,
  withArrow: _propTypes2.default.bool,
  requireClick: _propTypes2.default.bool,
  shown: _propTypes2.default.bool
}, _class2.defaultProps = {
  placement: 'bottom',
  requireClick: false,
  withArrow: true
}, _class2.contextTypes = {
  stores: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = PopoverTrigger;


var styles = _aphrodite.StyleSheet.create({
  popover: {
    position: 'fixed',
    boxSizing: 'border-box',
    zIndex: 100000,
    border: '1px solid',
    padding: '6px 10px',
    borderRadius: 3,
    fontSize: 13,
    lineHeight: '16px',
    fontWeight: 'normal',
    background: '#fff',
    borderColor: '#bbb',
    color: 'var(--default-text-color)',
    overflow: 'auto'
  },

  arrow: {
    position: 'fixed',
    width: 0,
    height: 0,
    zIndex: 100001,

    background: '#fff',
    borderColor: '#fff',
    color: 'white',
    opacity: 0.9,

    ':before': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderColor: 'transparent'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderColor: 'transparent'
    }
  },

  arrowTop: {
    ':before': {
      borderWidth: '7px 6px 0',
      transform: 'translateX(-50%)',
      borderTopColor: '#ddd'
    },

    ':after': {
      borderWidth: '6px 5px 0',
      transform: 'translate(-50%, -1px)',
      borderTopColor: '#fff'
    }
  },

  arrowBottom: {
    ':before': {
      borderWidth: '0 6px 7px',
      transform: 'translate(-50%, -7px)',
      borderBottomColor: '#ddd'
    },
    ':after': {
      borderWidth: '0 5px 6px',
      transform: 'translate(-50%, -5px)',
      borderBottomColor: '#fff'
    }
  },

  arrowRight: {
    ':before': {
      borderWidth: '6px 7px 6px 0',
      transform: 'translate(-7px, -50%)',
      borderRightColor: '#ddd'
    },

    ':after': {
      borderWidth: '5px 6px 5px 0',
      transform: 'translate(-5px, -50%)',
      borderRightColor: '#fff'
    }
  }
});

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(58);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(292);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = DataViewer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DataView = __webpack_require__(293);

var _DataView2 = _interopRequireDefault(_DataView);

var _DataItem = __webpack_require__(295);

var _DataItem2 = _interopRequireDefault(_DataItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

DataViewer.propTypes = {
  decorator: _propTypes2.default.func
};

function DataViewer(_ref) {
  var decorator = _ref.decorator,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ['decorator']);

  var WrappedDataView = decorator(_DataView2.default);
  var WrappedDataItem = decorator(_DataItem2.default);

  return _react2.default.createElement(WrappedDataView, (0, _extends3.default)({}, otherProps, { //eslint-disable-line
    ChildDataItem: WrappedDataItem,
    ChildDataView: WrappedDataView
  }));
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Draggable = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(Draggable, _React$Component);

  function Draggable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Draggable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Draggable.__proto__ || (0, _getPrototypeOf2.default)(Draggable)).call.apply(_ref, [this].concat(args))), _this), _this.onMove = function (evt) {
      evt.preventDefault();
      _this.props.onMove(evt.pageX, evt.pageY);
    }, _this.onUp = function (evt) {
      evt.preventDefault();
      var doc = _this.el.ownerDocument;
      doc.removeEventListener('mousemove', _this.onMove);
      doc.removeEventListener('mouseup', _this.onUp);
      _this.props.onStop();
    }, _this.startDragging = function (evt) {
      evt.preventDefault();
      var doc = _this.el.ownerDocument;
      doc.addEventListener('mousemove', _this.onMove);
      doc.addEventListener('mouseup', _this.onUp);
      _this.props.onStart();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Draggable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(el) {
            _this2.el = el;
          },
          style: this.props.style,
          className: this.props.className,
          onMouseDown: this.startDragging
        },
        this.props.children
      );
    }
  }]);
  return Draggable;
}(_react2.default.Component), _class.propTypes = {
  onStart: _propTypes2.default.func.isRequired,
  onStop: _propTypes2.default.func.isRequired,
  onMove: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node
}, _temp2);
exports.default = Draggable;

/***/ }),
/* 188 */,
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(58);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(94);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(194);

var _App2 = _interopRequireDefault(_App);

var _RichPanel = __webpack_require__(267);

var _RichPanel2 = _interopRequireDefault(_RichPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  var reload = function reload() {
    _reactDom2.default.unmountComponentAtNode(config.node);
    setTimeout(function () {
      // for some reason React 16 does unmountComponentAtNode asynchronously (?)
      config.node.innerHTML = '';
      render();
    }, 0);
  };

  var render = function render() {
    _reactDom2.default.render(_react2.default.createElement(
      _App2.default,
      (0, _extends3.default)({}, config, { // eslint-disable-line react/jsx-props-no-spreading
        reload: reload // eslint-disable-line react/jsx-no-bind
      }),
      _react2.default.createElement(_RichPanel2.default, null)
    ), config.node);
  };

  render();

  return function () {
    return _reactDom2.default.unmountComponentAtNode(config.node);
  };
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(162),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(162),r=__webpack_require__(192);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.14.0";


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(193);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

__webpack_require__(228);

var _Bridge = __webpack_require__(51);

var _Bridge2 = _interopRequireDefault(_Bridge);

var _stores = __webpack_require__(254);

var _stores2 = _interopRequireDefault(_stores);

var _Blocker = __webpack_require__(266);

var _Blocker2 = _interopRequireDefault(_Blocker);

var _ContextProvider = __webpack_require__(168);

var _ContextProvider2 = _interopRequireDefault(_ContextProvider);

var _theme = __webpack_require__(169);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(App, _React$PureComponent);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.$unMounted = false;
    _this.$disposables = [];

    _this.handleContextMenu = function (e) {
      return e.preventDefault();
    };

    _this.state = {
      loaded: false,
      connected: false,
      mobxFound: false
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.reloadSubscribe) {
        this.$unsubscribeReload = this.props.reloadSubscribe(function () {
          return _this2.reload();
        });
      }
      this.props.inject(function (wall, teardownWall) {
        _this2.$teardownWall = teardownWall;
        var bridge = new _Bridge2.default(wall);

        _this2.$disposables.push(bridge.sub('capabilities', function (_ref) {
          var mobxFound = _ref.mobxFound;

          _this2.setState({ mobxFound: mobxFound });
        }), bridge.sub('content-script-installation-error', function () {
          _this2.setState({ contentScriptInstallationError: true });
        }));

        bridge.send('backend:ping');
        var connectInterval = setInterval(function () {
          return bridge.send('backend:ping');
        }, 500);
        bridge.once('frontend:pong', function () {
          clearInterval(connectInterval);

          _this2.stores = (0, _stores2.default)(bridge);
          if (false) {
            window.$$frontendStores$$ = _this2.stores;
          }

          _this2.setState({ connected: true });
          bridge.send('get-capabilities');
        });

        if (!_this2.$unMounted) {
          _this2.setState({ loaded: true });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.$unMounted = true;
      this.reload();
    }
  }, {
    key: 'reload',
    value: function reload() {
      if (!this.$unMounted) this.setState({ loaded: false }, this.props.reload);
      this.teardown();
    }
  }, {
    key: 'teardown',
    value: function teardown() {
      if (this.$unsubscribeReload) {
        this.$unsubscribeReload();
        this.$unsubscribeReload = undefined;
      }
      if (this.$teardownWall) {
        this.$teardownWall();
        this.$teardownWall = undefined;
      }
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      if (this.state.contentScriptInstallationError) {
        return _react2.default.createElement(
          _Blocker2.default,
          null,
          'Error while installing content-script'
        );
      }
      if (!this.state.loaded) {
        return !this.props.quiet && _react2.default.createElement(
          _Blocker2.default,
          null,
          'Loading...'
        );
      }
      if (!this.state.connected) {
        return !this.props.quiet && _react2.default.createElement(
          _Blocker2.default,
          null,
          'Connecting...'
        );
      }
      if (this.state.mobxFound !== true) {
        return !this.props.quiet && _react2.default.createElement(
          _Blocker2.default,
          null,
          'Looking for mobx...'
        );
      }
      return _react2.default.createElement(
        _ContextProvider2.default,
        { stores: this.stores },
        _react2.default.Children.only(this.props.children)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.app, _theme2.default.default), onContextMenu: this.handleContextMenu },
        this.renderContent()
      );
    }
  }]);
  return App;
}(_react2.default.PureComponent), _class.propTypes = {
  quiet: _propTypes2.default.bool,
  reloadSubscribe: _propTypes2.default.func.isRequired,
  inject: _propTypes2.default.func.isRequired,
  reload: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
}, _class.defaultProps = {
  quiet: false
}, _temp);
exports.default = App;


var styles = _aphrodite.StyleSheet.create({
  app: {
    width: '100%',
    height: '100%',
    fontSize: 13,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontWeight: 400
  }
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(196), __esModule: true };

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);
module.exports = __webpack_require__(1).Object.setPrototypeOf;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(198).set });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(15);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(18)(Function.call, __webpack_require__(111).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(200);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Module with the same interface as the core aphrodite module,
// except that styles injected do not automatically have !important
// appended to them.


Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _generate = __webpack_require__(163);

var _exports2 = __webpack_require__(223);

var _exports3 = _interopRequireDefault(_exports2);

var useImportant = false; // Don't add !important to style definitions
exports['default'] = (0, _exports3['default'])(useImportant, _generate.defaultSelectorHandlers);
module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(203);

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(204);

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(205);

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(206);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(164);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var calc = __webpack_require__(208)
var crossFade = __webpack_require__(209)
var cursor = __webpack_require__(210)
var filter = __webpack_require__(211)
var flex = __webpack_require__(212)
var flexboxIE = __webpack_require__(213)
var flexboxOld = __webpack_require__(214)
var gradient = __webpack_require__(215)
var imageSet = __webpack_require__(216)
var position = __webpack_require__(217)
var sizing = __webpack_require__(218)
var transition = __webpack_require__(219)

module.exports =  {
  plugins: [calc,crossFade,cursor,filter,flex,flexboxIE,flexboxOld,gradient,imageSet,position,sizing,transition],
  prefixMap: {"transform":["Webkit","ms"],"transformOrigin":["Webkit","ms"],"transformOriginX":["Webkit","ms"],"transformOriginY":["Webkit","ms"],"backfaceVisibility":["Webkit"],"perspective":["Webkit"],"perspectiveOrigin":["Webkit"],"transformStyle":["Webkit"],"transformOriginZ":["Webkit"],"animation":["Webkit"],"animationDelay":["Webkit"],"animationDirection":["Webkit"],"animationFillMode":["Webkit"],"animationDuration":["Webkit"],"animationIterationCount":["Webkit"],"animationName":["Webkit"],"animationPlayState":["Webkit"],"animationTimingFunction":["Webkit"],"appearance":["Webkit","Moz"],"userSelect":["Webkit","Moz","ms"],"fontKerning":["Webkit"],"textEmphasisPosition":["Webkit"],"textEmphasis":["Webkit"],"textEmphasisStyle":["Webkit"],"textEmphasisColor":["Webkit"],"boxDecorationBreak":["Webkit"],"clipPath":["Webkit"],"maskImage":["Webkit"],"maskMode":["Webkit"],"maskRepeat":["Webkit"],"maskPosition":["Webkit"],"maskClip":["Webkit"],"maskOrigin":["Webkit"],"maskSize":["Webkit"],"maskComposite":["Webkit"],"mask":["Webkit"],"maskBorderSource":["Webkit"],"maskBorderMode":["Webkit"],"maskBorderSlice":["Webkit"],"maskBorderWidth":["Webkit"],"maskBorderOutset":["Webkit"],"maskBorderRepeat":["Webkit"],"maskBorder":["Webkit"],"maskType":["Webkit"],"textDecorationStyle":["Webkit","Moz"],"textDecorationSkip":["Webkit","Moz"],"textDecorationLine":["Webkit","Moz"],"textDecorationColor":["Webkit","Moz"],"filter":["Webkit"],"fontFeatureSettings":["Webkit","Moz"],"breakAfter":["Webkit","Moz","ms"],"breakBefore":["Webkit","Moz","ms"],"breakInside":["Webkit","Moz","ms"],"columnCount":["Webkit","Moz"],"columnFill":["Webkit","Moz"],"columnGap":["Webkit","Moz"],"columnRule":["Webkit","Moz"],"columnRuleColor":["Webkit","Moz"],"columnRuleStyle":["Webkit","Moz"],"columnRuleWidth":["Webkit","Moz"],"columns":["Webkit","Moz"],"columnSpan":["Webkit","Moz"],"columnWidth":["Webkit","Moz"],"flex":["Webkit","ms"],"flexBasis":["Webkit"],"flexDirection":["Webkit","ms"],"flexGrow":["Webkit"],"flexFlow":["Webkit","ms"],"flexShrink":["Webkit"],"flexWrap":["Webkit","ms"],"alignContent":["Webkit"],"alignItems":["Webkit"],"alignSelf":["Webkit"],"justifyContent":["Webkit"],"order":["Webkit"],"transitionDelay":["Webkit"],"transitionDuration":["Webkit"],"transitionProperty":["Webkit"],"transitionTimingFunction":["Webkit"],"backdropFilter":["Webkit"],"scrollSnapType":["Webkit","ms"],"scrollSnapPointsX":["Webkit","ms"],"scrollSnapPointsY":["Webkit","ms"],"scrollSnapDestination":["Webkit","ms"],"scrollSnapCoordinate":["Webkit","ms"],"shapeImageThreshold":["Webkit"],"shapeImageMargin":["Webkit"],"shapeImageOutside":["Webkit"],"hyphens":["Webkit","Moz","ms"],"flowInto":["Webkit","ms"],"flowFrom":["Webkit","ms"],"regionFragment":["Webkit","ms"],"boxSizing":["Moz"],"textAlignLast":["Moz"],"tabSize":["Moz"],"wrapFlow":["ms"],"wrapThrough":["ms"],"wrapMargin":["ms"],"touchAction":["ms"],"gridTemplateColumns":["ms"],"gridTemplateRows":["ms"],"gridTemplateAreas":["ms"],"gridTemplate":["ms"],"gridAutoColumns":["ms"],"gridAutoRows":["ms"],"gridAutoFlow":["ms"],"grid":["ms"],"gridRowStart":["ms"],"gridColumnStart":["ms"],"gridRowEnd":["ms"],"gridRow":["ms"],"gridColumn":["ms"],"gridColumnEnd":["ms"],"gridColumnGap":["ms"],"gridRowGap":["ms"],"gridArea":["ms"],"gridGap":["ms"],"textSizeAdjust":["Webkit","ms"],"borderImage":["Webkit"],"borderImageOutset":["Webkit"],"borderImageRepeat":["Webkit"],"borderImageSlice":["Webkit"],"borderImageSource":["Webkit"],"borderImageWidth":["Webkit"]}
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _isPrefixedValue = __webpack_require__(60);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(60);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(60);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(60);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(60);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(220);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(60);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(164);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(221);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = __webpack_require__(114);

var _inject = __webpack_require__(224);

/* ::
import type { SelectorHandler } from './generate.js';
export type SheetDefinition = { [id:string]: any };
export type SheetDefinitions = SheetDefinition | SheetDefinition[];
type RenderFunction = () => string;
type Extension = {
    selectorHandler: SelectorHandler
};
export type MaybeSheetDefinition = SheetDefinition | false | null | void
*/

var StyleSheet = {
    create: function create(sheetDefinition /* : SheetDefinition */) {
        return (0, _util.mapObj)(sheetDefinition, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var val = _ref2[1];

            var stringVal = JSON.stringify(val);
            return [key, {
                _len: stringVal.length,
                _name:  true ? (0, _util.hashString)(stringVal) : key + '_' + (0, _util.hashString)(stringVal),
                _definition: val
            }];
        });
    },

    rehydrate: function rehydrate() {
        var renderedClassNames /* : string[] */ = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        (0, _inject.addRenderedClassNames)(renderedClassNames);
    }
};

/**
 * Utilities for using Aphrodite server-side.
 */
var StyleSheetServer = {
    renderStatic: function renderStatic(renderFunc /* : RenderFunction */) {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
        var html = renderFunc();
        var cssContent = (0, _inject.flushToString)();

        return {
            html: html,
            css: {
                content: cssContent,
                renderedClassNames: (0, _inject.getRenderedClassNames)()
            }
        };
    }
};

/**
 * Utilities for using Aphrodite in tests.
 *
 * Not meant to be used in production.
 */
var StyleSheetTestUtils = {
    /**
     * Prevent styles from being injected into the DOM.
     *
     * This is useful in situations where you'd like to test rendering UI
     * components which use Aphrodite without any of the side-effects of
     * Aphrodite happening. Particularly useful for testing the output of
     * components when you have no DOM, e.g. testing in Node without a fake DOM.
     *
     * Should be paired with a subsequent call to
     * clearBufferAndResumeStyleInjection.
     */
    suppressStyleInjection: function suppressStyleInjection() {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
    },

    /**
     * Opposite method of preventStyleInject.
     */
    clearBufferAndResumeStyleInjection: function clearBufferAndResumeStyleInjection() {
        (0, _inject.reset)();
    }
};

/**
 * Generate the Aphrodite API exports, with given `selectorHandlers` and
 * `useImportant` state.
 */
var makeExports = function makeExports(useImportant, /* : boolean */
selectorHandlers /* : SelectorHandler[] */
) {
    return {
        StyleSheet: _extends({}, StyleSheet, {

            /**
             * Returns a version of the exports of Aphrodite (i.e. an object
             * with `css` and `StyleSheet` properties) which have some
             * extensions included.
             *
             * @param {Array.<Object>} extensions: An array of extensions to
             *     add to this instance of Aphrodite. Each object should have a
             *     single property on it, defining which kind of extension to
             *     add.
             * @param {SelectorHandler} [extensions[].selectorHandler]: A
             *     selector handler extension. See `defaultSelectorHandlers` in
             *     generate.js.
             *
             * @returns {Object} An object containing the exports of the new
             *     instance of Aphrodite.
             */
            extend: function extend(extensions /* : Extension[] */) {
                var extensionSelectorHandlers = extensions
                // Pull out extensions with a selectorHandler property
                .map(function (extension) {
                    return extension.selectorHandler;
                })
                // Remove nulls (i.e. extensions without a selectorHandler
                // property).
                .filter(function (handler) {
                    return handler;
                });

                return makeExports(useImportant, selectorHandlers.concat(extensionSelectorHandlers));
            }
        }),

        StyleSheetServer: StyleSheetServer,
        StyleSheetTestUtils: StyleSheetTestUtils,

        css: function css() /* : MaybeSheetDefinition[] */{
            for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
                styleDefinitions[_key] = arguments[_key];
            }

            return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions, selectorHandlers);
        }
    };
};

module.exports = makeExports;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _asap = __webpack_require__(225);

var _asap2 = _interopRequireDefault(_asap);

var _orderedElements = __webpack_require__(165);

var _orderedElements2 = _interopRequireDefault(_orderedElements);

var _generate = __webpack_require__(163);

var _util = __webpack_require__(114);

/* ::
import type { SheetDefinition, SheetDefinitions } from './index.js';
import type { MaybeSheetDefinition } from './exports.js';
import type { SelectorHandler } from './generate.js';
type ProcessedStyleDefinitions = {
  classNameBits: Array<string>,
  definitionBits: Array<Object>,
};
*/

// The current <style> tag we are inserting into, or null if we haven't
// inserted anything yet. We could find this each time using
// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
// faster.
var styleTag = null;

// Inject a string of styles into a <style> tag in the head of the document. This
// will automatically create a style tag and then continue to use it for
// multiple injections. It will also use a style tag with the `data-aphrodite`
// tag on it if that exists in the DOM. This could be used for e.g. reusing the
// same style tag that server-side rendering inserts.
var injectStyleTag = function injectStyleTag(cssContents /* : string */) {
    if (styleTag == null) {
        // Try to find a style tag with the `data-aphrodite` attribute first.
        styleTag = document.querySelector("style[data-aphrodite]");

        // If that doesn't work, generate a new style tag.
        if (styleTag == null) {
            // Taken from
            // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
            var head = document.head || document.getElementsByTagName('head')[0];
            styleTag = document.createElement('style');

            styleTag.type = 'text/css';
            styleTag.setAttribute("data-aphrodite", "");
            head.appendChild(styleTag);
        }
    }

    if (styleTag.styleSheet) {
        // $FlowFixMe: legacy Internet Explorer compatibility
        styleTag.styleSheet.cssText += cssContents;
    } else {
        styleTag.appendChild(document.createTextNode(cssContents));
    }
};

// Custom handlers for stringifying CSS values that have side effects
// (such as fontFamily, which can cause @font-face rules to be injected)
var stringHandlers = {
    // With fontFamily we look for objects that are passed in and interpret
    // them as @font-face rules that we need to inject. The value of fontFamily
    // can either be a string (as normal), an object (a single font face), or
    // an array of objects and strings.
    fontFamily: function fontFamily(val) {
        if (Array.isArray(val)) {
            return val.map(fontFamily).join(",");
        } else if (typeof val === "object") {
            injectStyleOnce(val.src, "@font-face", [val], false);
            return '"' + val.fontFamily + '"';
        } else {
            return val;
        }
    },

    // With animationName we look for an object that contains keyframes and
    // inject them as an `@keyframes` block, returning a uniquely generated
    // name. The keyframes object should look like
    //  animationName: {
    //    from: {
    //      left: 0,
    //      top: 0,
    //    },
    //    '50%': {
    //      left: 15,
    //      top: 5,
    //    },
    //    to: {
    //      left: 20,
    //      top: 20,
    //    }
    //  }
    // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
    // to use `animationName` here. Improve that so we can call this
    // `animation` instead of `animationName`.
    animationName: function animationName(val, selectorHandlers) {
        if (Array.isArray(val)) {
            return val.map(function (v) {
                return animationName(v, selectorHandlers);
            }).join(",");
        } else if (typeof val === "object") {
            // Generate a unique name based on the hash of the object. We can't
            // just use the hash because the name can't start with a number.
            // TODO(emily): this probably makes debugging hard, allow a custom
            // name?
            var _name = 'keyframe_' + (0, _util.hashObject)(val);

            // Since keyframes need 3 layers of nesting, we use `generateCSS` to
            // build the inner layers and wrap it in `@keyframes` ourselves.
            var finalVal = '@keyframes ' + _name + '{';

            // TODO see if we can find a way where checking for OrderedElements
            // here is not necessary. Alternatively, perhaps we should have a
            // utility method that can iterate over either a plain object, an
            // instance of OrderedElements, or a Map, and then use that here and
            // elsewhere.
            if (val instanceof _orderedElements2['default']) {
                val.forEach(function (valVal, valKey) {
                    finalVal += (0, _generate.generateCSS)(valKey, [valVal], selectorHandlers, stringHandlers, false);
                });
            } else {
                Object.keys(val).forEach(function (key) {
                    finalVal += (0, _generate.generateCSS)(key, [val[key]], selectorHandlers, stringHandlers, false);
                });
            }
            finalVal += '}';

            injectGeneratedCSSOnce(_name, finalVal);

            return _name;
        } else {
            return val;
        }
    }
};

// This is a map from Aphrodite's generated class names to `true` (acting as a
// set of class names)
var alreadyInjected = {};

// This is the buffer of styles which have not yet been flushed.
var injectionBuffer = "";

// A flag to tell if we are already buffering styles. This could happen either
// because we scheduled a flush call already, so newly added styles will
// already be flushed, or because we are statically buffering on the server.
var isBuffering = false;

var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
    if (alreadyInjected[key]) {
        return;
    }

    if (!isBuffering) {
        // We should never be automatically buffering on the server (or any
        // place without a document), so guard against that.
        if (typeof document === "undefined") {
            throw new Error("Cannot automatically buffer without a document");
        }

        // If we're not already buffering, schedule a call to flush the
        // current styles.
        isBuffering = true;
        (0, _asap2['default'])(flushToStyleTag);
    }

    injectionBuffer += generatedCSS;
    alreadyInjected[key] = true;
};

var injectStyleOnce = function injectStyleOnce(key, /* : string */
selector, /* : string */
definitions, /* : SheetDefinition[] */
useImportant /* : boolean */
) {
    var selectorHandlers /* : SelectorHandler[] */ = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];

    if (alreadyInjected[key]) {
        return;
    }

    var generated = (0, _generate.generateCSS)(selector, definitions, selectorHandlers, stringHandlers, useImportant);

    injectGeneratedCSSOnce(key, generated);
};

exports.injectStyleOnce = injectStyleOnce;
var reset = function reset() {
    injectionBuffer = "";
    alreadyInjected = {};
    isBuffering = false;
    styleTag = null;
};

exports.reset = reset;
var startBuffering = function startBuffering() {
    if (isBuffering) {
        throw new Error("Cannot buffer while already buffering");
    }
    isBuffering = true;
};

exports.startBuffering = startBuffering;
var flushToString = function flushToString() {
    isBuffering = false;
    var ret = injectionBuffer;
    injectionBuffer = "";
    return ret;
};

exports.flushToString = flushToString;
var flushToStyleTag = function flushToStyleTag() {
    var cssContent = flushToString();
    if (cssContent.length > 0) {
        injectStyleTag(cssContent);
    }
};

exports.flushToStyleTag = flushToStyleTag;
var getRenderedClassNames = function getRenderedClassNames() {
    return Object.keys(alreadyInjected);
};

exports.getRenderedClassNames = getRenderedClassNames;
var addRenderedClassNames = function addRenderedClassNames(classNames /* : string[] */) {
    classNames.forEach(function (className) {
        alreadyInjected[className] = true;
    });
};

exports.addRenderedClassNames = addRenderedClassNames;
var processStyleDefinitions = function processStyleDefinitions(styleDefinitions, /* : any[] */
result /* : ProcessedStyleDefinitions */
) /* : void */{
    for (var i = 0; i < styleDefinitions.length; i += 1) {
        // Filter out falsy values from the input, to allow for
        // `css(a, test && c)`
        if (styleDefinitions[i]) {
            if (Array.isArray(styleDefinitions[i])) {
                // We've encountered an array, so let's recurse
                processStyleDefinitions(styleDefinitions[i], result);
            } else {
                result.classNameBits.push(styleDefinitions[i]._name);
                result.definitionBits.push(styleDefinitions[i]._definition);
            }
        }
    }
};

// Sum up the lengths of the stringified style definitions (which was saved as _len property)
// and use modulus to return a single byte hash value.
// We append this extra byte to the 32bit hash to decrease the chance of hash collisions.
var getStyleDefinitionsLengthHash = function getStyleDefinitionsLengthHash(styleDefinitions /* : any[] */) {
    return (/* : string */(styleDefinitions.reduce(function (length, styleDefinition) {
            return length + (styleDefinition ? styleDefinition._len : 0);
        }, 0) % 36).toString(36)
    );
};

/**
 * Inject styles associated with the passed style definition objects, and return
 * an associated CSS class name.
 *
 * @param {boolean} useImportant If true, will append !important to generated
 *     CSS output. e.g. {color: red} -> "color: red !important".
 * @param {(Object|Object[])[]} styleDefinitions style definition objects, or
 *     arbitrarily nested arrays of them, as returned as properties of the
 *     return value of StyleSheet.create().
 */
var injectAndGetClassName = function injectAndGetClassName(useImportant, /* : boolean */
styleDefinitions, /* : MaybeSheetDefinition[] */
selectorHandlers /* : SelectorHandler[] */
) /* : string */{
    var processedStyleDefinitions /* : ProcessedStyleDefinitions */ = {
        classNameBits: [],
        definitionBits: []
    };
    // Mutates processedStyleDefinitions
    processStyleDefinitions(styleDefinitions, processedStyleDefinitions);

    // Break if there aren't any valid styles.
    if (processedStyleDefinitions.classNameBits.length === 0) {
        return "";
    }

    var className = undefined;
    if (true) {
        className = processedStyleDefinitions.classNameBits.length === 1 ? '_' + processedStyleDefinitions.classNameBits[0] : '_' + (0, _util.hashString)(processedStyleDefinitions.classNameBits.join()) + getStyleDefinitionsLengthHash(styleDefinitions);
    } else {
        className = processedStyleDefinitions.classNameBits.join("-o_O-");
    }

    injectStyleOnce(className, '.' + className, processedStyleDefinitions.definitionBits, useImportant, selectorHandlers);

    return className;
};
exports.injectAndGetClassName = injectAndGetClassName;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(226);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(227)))

/***/ }),
/* 227 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(252)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./hack.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./hack.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(230);
exports = module.exports = __webpack_require__(231)(false);
// imports


// module
exports.push([module.i, "/*!\n *  Hack v2.020 - https://sourcefoundry.org/hack/\n *  Licenses - Fonts: Hack Open Font License + Bitstream Vera license, CSS: MIT License\n */\n/* FONT PATHS\n * -------------------------- */\n@font-face {\n  font-family: 'Hack';\n  src: url(" + escape(__webpack_require__(232)) + ");\n  src: url(" + escape(__webpack_require__(233)) + "?#iefix&v=2.020) format('embedded-opentype'), url(" + escape(__webpack_require__(234)) + ") format('woff2'), url(" + escape(__webpack_require__(235)) + ") format('woff'), url(" + escape(__webpack_require__(236)) + ") format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Hack';\n  src: url(" + escape(__webpack_require__(237)) + ");\n  src: url(" + escape(__webpack_require__(238)) + "?#iefix&v=2.020) format('embedded-opentype'), url(" + escape(__webpack_require__(239)) + ") format('woff2'), url(" + escape(__webpack_require__(240)) + ") format('woff'), url(" + escape(__webpack_require__(241)) + ") format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Hack';\n  src: url(" + escape(__webpack_require__(242)) + ");\n  src: url(" + escape(__webpack_require__(243)) + "?#iefix&v=2.020) format('embedded-opentype'), url(" + escape(__webpack_require__(244)) + ") format('woff2'), url(" + escape(__webpack_require__(245)) + ") format('woff'), url(" + escape(__webpack_require__(246)) + ") format('truetype');\n  font-weight: 400;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'Hack';\n  src: url(" + escape(__webpack_require__(247)) + ");\n  src: url(" + escape(__webpack_require__(248)) + "?#iefix&v=2.020) format('embedded-opentype'), url(" + escape(__webpack_require__(249)) + ") format('woff2'), url(" + escape(__webpack_require__(250)) + ") format('woff'), url(" + escape(__webpack_require__(251)) + ") format('truetype');\n  font-weight: 700;\n  font-style: italic;\n}\n", ""]);

// exports


/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 231 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-regular-latin-webfont.eot";

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-regular-latin-webfont.eot";

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-regular-latin-webfont.woff2";

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-regular-latin-webfont.woff";

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-regular-latin-webfont.ttf";

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bold-latin-webfont.eot";

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bold-latin-webfont.eot";

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bold-latin-webfont.woff2";

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bold-latin-webfont.woff";

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bold-latin-webfont.ttf";

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-italic-latin-webfont.eot";

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-italic-latin-webfont.eot";

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-italic-latin-webfont.woff2";

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-italic-latin-webfont.woff";

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-italic-latin-webfont.ttf";

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bolditalic-latin-webfont.eot";

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bolditalic-latin-webfont.eot";

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bolditalic-latin-webfont.woff2";

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bolditalic-latin-webfont.woff";

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/hack-bolditalic-latin-webfont.ttf";

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(253);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 253 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionsStore = __webpack_require__(255);

var _ActionsStore2 = _interopRequireDefault(_ActionsStore);

var _UpdatesHighlighterStore = __webpack_require__(261);

var _UpdatesHighlighterStore2 = _interopRequireDefault(_UpdatesHighlighterStore);

var _TreeExplorerStore = __webpack_require__(262);

var _TreeExplorerStore2 = _interopRequireDefault(_TreeExplorerStore);

var _MSTChangesStore = __webpack_require__(264);

var _MSTChangesStore2 = _interopRequireDefault(_MSTChangesStore);

var _CapabilitiesStore = __webpack_require__(265);

var _CapabilitiesStore2 = _interopRequireDefault(_CapabilitiesStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (bridge) {
  return {
    actionsLoggerStore: new _ActionsStore2.default(bridge),
    updatesHighlighterStore: new _UpdatesHighlighterStore2.default(bridge),
    mstLoggerStore: new _MSTChangesStore2.default(bridge),
    treeExplorerStore: new _TreeExplorerStore2.default(bridge),
    capabilitiesStore: new _CapabilitiesStore2.default(bridge)
  };
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray2 = __webpack_require__(115);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractStore2 = __webpack_require__(75);

var _AbstractStore3 = _interopRequireDefault(_AbstractStore2);

var _preferences = __webpack_require__(116);

var _preferences2 = _interopRequireDefault(_preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsStore = function (_AbstractStore) {
  (0, _inherits3.default)(ActionsStore, _AbstractStore);

  function ActionsStore(bridge) {
    (0, _classCallCheck3.default)(this, ActionsStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActionsStore.__proto__ || (0, _getPrototypeOf2.default)(ActionsStore)).call(this));

    _this.logEnabled = false;
    _this.consoleLogEnabled = false;
    _this.logFilter = undefined;
    _this.logItemsById = {};
    _this.logItemsIds = [];
    _this.searchText = '';

    _this.bridge = bridge;

    _this.addDisposer(bridge.sub('appended-log-item', function (change) {
      if (_this.logItemsIds.length > 5000) {
        var removedIds = _this.logItemsIds.splice(0, _this.logItemsIds.length - 4900);
        removedIds.forEach(function (id) {
          delete _this.logItemsById[id];
        });
        _this.bridge.send('remove-log-items', removedIds);
      }
      _this.logItemsById[change.id] = change;
      _this.logItemsIds.push(change.id);
      _this.emit('log');
    }), bridge.sub('log-item-details', function (item) {
      if (_this.logItemsById[item.id]) {
        (0, _assign2.default)(_this.logItemsById[item.id], item);
        _this.emit(item.id);
      }
    }), bridge.sub('inspect-change-result', function (_ref) {
      var changeId = _ref.changeId,
          path = _ref.path,
          data = _ref.data;

      var obj = path.reduce(function (acc, next) {
        return acc && acc[next];
      }, _this.logItemsById[changeId]);
      if (obj) {
        (0, _assign2.default)(obj, data);
      }
      // if (__DEV__) console.log(`inspected--${path.join('/')}`, data);
      _this.emit('inspected--' + path.join('/'));
    }));

    _preferences2.default.get('logEnabled').then(function (_ref2) {
      var logEnabled = _ref2.logEnabled;

      if (logEnabled) _this.toggleLogging(true);
    });
    return _this;
  }

  (0, _createClass3.default)(ActionsStore, [{
    key: 'inspect',
    value: function inspect(changeId, path) {
      this.bridge.send('inspect-change', { changeId: changeId, path: path });
    }
  }, {
    key: 'stopInspecting',
    value: function stopInspecting(changeId, path) {
      this.bridge.send('stop-inspecting-change', { changeId: changeId, path: path });
    }
  }, {
    key: 'toggleLogging',
    value: function toggleLogging() {
      var logEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.logEnabled;

      _preferences2.default.set({ logEnabled: logEnabled });
      this.bridge.send('set-log-enabled', logEnabled);
      this.logEnabled = logEnabled;
      this.emit('logEnabled');
    }
  }, {
    key: 'toggleConsoleLogging',
    value: function toggleConsoleLogging() {
      var consoleLogEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.consoleLogEnabled;

      this.bridge.send('set-console-log-enabled', consoleLogEnabled);
      this.consoleLogEnabled = consoleLogEnabled;
      this.emit('consoleLogEnabled');
    }
  }, {
    key: 'getDetails',
    value: function getDetails(id) {
      this.bridge.send('get-log-item-details', id);
    }
  }, {
    key: 'clearLog',
    value: function clearLog() {
      this.logItemsIds = [];
      this.logItemsById = {};
      this.bridge.send('remove-all-log-items');
      this.emit('log');
    }
  }, {
    key: 'setSearchText',
    value: function setSearchText(text) {
      this.searchText = text;
      this.emit('log');
    }
  }, {
    key: 'setLogFilter',
    value: function setLogFilter(logFilter) {
      this.setValueAndEmit('logFilter', logFilter);
      this.logFilter = logFilter;
      this.emit('logFilter');
    }
  }, {
    key: 'showContextMenu',
    value: function showContextMenu(type, evt) {
      var _this2 = this;

      evt.preventDefault();

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      this.contextMenu = {
        x: evt.clientX,
        y: evt.clientY,
        items: this.getContextMenuActions(type, args),
        close: function close() {
          _this2.hideContextMenu();
        }
      };
      this.emit('contextMenu');
    }
  }, {
    key: 'hideContextMenu',
    value: function hideContextMenu() {
      this.contextMenu = undefined;
      this.emit('contextMenu');
    }
  }, {
    key: 'getContextMenuActions',
    value: function getContextMenuActions(type, args) {
      var _this3 = this;

      switch (type) {
        case 'attr':
          {
            var _args = (0, _slicedToArray3.default)(args, 2),
                changeId = _args[0],
                path = _args[1];

            return [{
              key: 'storeAsGlobal',
              title: 'Store as global variable',
              action: function action() {
                _this3.bridge.send('log:makeGlobal', { changeId: changeId, path: path });
                _this3.hideContextMenu();
              }
            }];
          }
        default:
          return [];
      }
    }
  }, {
    key: 'getFilteredLogItemsIds',
    value: function getFilteredLogItemsIds() {
      var _this4 = this;

      return this.logItemsIds.filter(function (id) {
        var logItem = _this4.logItemsById[id];
        if (!logItem || !logItem.name) {
          return false;
        }
        if (_this4.searchText[0] !== '/') {
          // case insensitive
          return logItem.name.toUpperCase().indexOf(_this4.searchText.toUpperCase()) !== -1;
        }
        try {
          // regex expression may be invalid
          var regex = new RegExp(_this4.searchText.slice(1), 'i');
          return regex.test(logItem.name);
        } catch (e) {
          return false;
        }
      });
    }
  }]);
  return ActionsStore;
}(_AbstractStore3.default);

exports.default = ActionsStore;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(257), __esModule: true };

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(24);
module.exports = __webpack_require__(258);


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(8)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(1).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(24);
module.exports = __webpack_require__(260);


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var get = __webpack_require__(54);
module.exports = __webpack_require__(1).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractStore2 = __webpack_require__(75);

var _AbstractStore3 = _interopRequireDefault(_AbstractStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpdatesHighlighterStore = function (_AbstractStore) {
  (0, _inherits3.default)(UpdatesHighlighterStore, _AbstractStore);

  function UpdatesHighlighterStore(bridge) {
    (0, _classCallCheck3.default)(this, UpdatesHighlighterStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UpdatesHighlighterStore.__proto__ || (0, _getPrototypeOf2.default)(UpdatesHighlighterStore)).call(this));

    _this.updatesEnabled = false;
    _this.updatesFilterByDuration = { slow: false, medium: false, fast: false };

    _this.bridge = bridge;
    return _this;
  }

  (0, _createClass3.default)(UpdatesHighlighterStore, [{
    key: 'toggleShowingUpdates',
    value: function toggleShowingUpdates() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.updatesEnabled;

      this.setUpdatesFilterByDuration({ slow: value, medium: value, fast: value });
    }
  }, {
    key: 'setUpdatesFilterByDuration',
    value: function setUpdatesFilterByDuration(_ref) {
      var slow = _ref.slow,
          medium = _ref.medium,
          fast = _ref.fast;

      var updatesEnabled = slow || medium || fast;
      this.updatesEnabled = updatesEnabled;
      this.emit('updatesEnabled');
      this.updatesFilterByDuration = { slow: slow, medium: medium, fast: fast };
      this.emit('updatesFilterByDuration');
      this.bridge.send('backend-mobx-react:set-displaying-updates-enabled', updatesEnabled);
      this.bridge.send('backend-mobx-react:set-displaying-updates-filter-by-duration', {
        slow: slow,
        medium: medium,
        fast: fast
      });
    }
  }]);
  return UpdatesHighlighterStore;
}(_AbstractStore3.default);

exports.default = UpdatesHighlighterStore;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray2 = __webpack_require__(115);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _SearchUtils = __webpack_require__(167);

var SearchUtils = _interopRequireWildcard(_SearchUtils);

var _nodeMatchesText = __webpack_require__(263);

var _nodeMatchesText2 = _interopRequireDefault(_nodeMatchesText);

var _AbstractStore2 = __webpack_require__(75);

var _AbstractStore3 = _interopRequireDefault(_AbstractStore2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeExplorerStore = function (_AbstractStore) {
  (0, _inherits3.default)(TreeExplorerStore, _AbstractStore);

  function TreeExplorerStore(bridge) {
    (0, _classCallCheck3.default)(this, TreeExplorerStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeExplorerStore.__proto__ || (0, _getPrototypeOf2.default)(TreeExplorerStore)).call(this));

    _this.roots = [];
    _this.loaded = false;
    _this.selectedNodeId = undefined;
    _this.hoveredNodeId = undefined;
    _this.isBottomTagSelected = undefined;
    _this.isBottomTagHovered = undefined;
    _this.nodeParentsById = {};
    _this.nodesById = {};
    _this.searchText = '';
    _this.pickingComponent = false;

    _this.bridge = bridge;

    _this.addDisposer(bridge.sub('frontend:mobx-react-components', function (components) {
      components.forEach(function (c) {
        return _this.addNode(c);
      });
      if (_this.prevSelectedNodeId && _this.nodesById[_this.prevSelectedNodeId]) {
        _this.select(_this.prevSelectedNodeId);
        _this.uncollapseParents(_this.prevSelectedNodeId);
      }
      _this.loaded = true;
      _this.emit('loaded');
    }));

    _this.addDisposer(bridge.sub('frontend:mobx-react-component-updated', function (component) {
      _this.updateNode(component);
    }));

    _this.addDisposer(bridge.sub('frontend:mobx-react-component-added', function (component) {
      _this.addNode(component);
    }));

    _this.addDisposer(bridge.sub('frontend:mobx-react-component-removed', function (component) {
      _this.removeNode(component);
    }));

    _this.addDisposer(bridge.sub('picked-component', function (_ref) {
      var componentId = _ref.componentId;

      _this.select(componentId, true);
      _this.uncollapseParents(componentId);
      _this.stopPickingComponent();
    }));

    _this.addDisposer(bridge.sub('inspect-component-result', function (_ref2) {
      var componentId = _ref2.componentId,
          path = _ref2.path,
          data = _ref2.data;

      var obj = path.reduce(function (acc, next) {
        return acc && acc[next];
      }, _this.nodesById[componentId]);
      if (obj) {
        (0, _assign2.default)(obj, data);
      }
      // if (__DEV__) console.log(`inspected--${path.join('/')}`, data);
      _this.emit('inspected--' + path.join('/'));
    }));
    return _this;
  }

  (0, _createClass3.default)(TreeExplorerStore, [{
    key: 'reset',
    value: function reset() {
      this.roots.splice(0);
      this.prevSelectedNodeId = this.selectedNodeId;
      this.hoveredNodeId = undefined;
      this.selectedNodeId = undefined;
      this.isBottomTagSelected = undefined;
      this.isBottomTagHovered = undefined;
      this.nodeParentsById = {};
      this.nodesById = {};
      this.breadcrumbHead = undefined;
      this.emit('roots');
      this.emit('breadcrumbHead');
    }
  }, {
    key: 'getComponents',
    value: function getComponents() {
      this.bridge.send('backend-mobx-react:get-observer-components');
    }
  }, {
    key: 'changeSearch',
    value: function changeSearch(text) {
      var _this2 = this;

      var needle = text.toLowerCase();
      if (needle === this.searchText.toLowerCase() && !this.refreshSearch) {
        return;
      }
      if (!text || SearchUtils.trimSearchText(text).length === 0) {
        this.searchRoots = null;
      } else {
        if (this.searchRoots && needle.indexOf(this.searchText.toLowerCase()) === 0 && !SearchUtils.shouldSearchUseRegex(text)) {
          this.searchRoots = this.searchRoots.filter(function (item) {
            var node = _this2.nodesById[item];
            return node.name && node.name.toLowerCase().indexOf(needle) !== -1 || node.text && node.text.toLowerCase().indexOf(needle) !== -1 || typeof node.children === 'string' && node.children.toLowerCase().indexOf(needle) !== -1;
          });
        } else {
          this.searchRoots = (0, _keys2.default)(this.nodesById).filter(function (key) {
            return (0, _nodeMatchesText2.default)(_this2.nodesById[key], needle, key, _this2);
          });
        }
        this.searchRoots.forEach(function (id) {
          if (_this2.hasBottom(id)) {
            _this2.nodesById[id].collapsed = true;
          }
        });
      }
      this.searchText = text;
      this.emit('searchText');
      this.emit('searchRoots');
      if (this.searchRoots && !this.searchRoots.includes(this.selectedNodeId)) {
        this.select(null, true);
      } else if (!this.searchRoots) {
        if (this.selectedNodeId) {
          this.uncollapseParents(this.selectedNodeId);
        } else {
          this.select(this.roots[0]);
        }
      }

      this.refreshSearch = false;
    }
  }, {
    key: 'hasBottom',
    value: function hasBottom(id) {
      var node = this.nodesById[id];
      var children = node.children;

      if (typeof children === 'string' || !children || !children.length || node.collapsed) {
        return false;
      }
      return true;
    }
  }, {
    key: 'getParent',
    value: function getParent(id) {
      return this.nodeParentsById[id];
    }
  }, {
    key: 'addRootId',
    value: function addRootId(id) {
      if (this.roots.includes(id)) return;
      this.roots.push(id);
      if (!this.selectedNodeId) this.select(id, true);
      this.emit('roots');
    }
  }, {
    key: 'removeRootId',
    value: function removeRootId(id) {
      var idx = this.roots.indexOf(id);
      if (idx !== -1) {
        this.roots.splice(idx, 1);
        this.emit('roots');
        if (this.selectedNodeId === id) {
          this.selectedNodeId = undefined;
          this.select(undefined);
        }
      }
    }
  }, {
    key: 'addNode',
    value: function addNode(node) {
      var _this3 = this;

      node.renders = 1;
      node.collapsed = true;
      this.nodesById[node.id] = node;
      if (node.children) {
        node.children.forEach(function (childId) {
          _this3.removeRootId(childId);
          _this3.nodeParentsById[childId] = node.id;
        });
      }
      this.emit(node.id);
      if (!this.nodeParentsById[node.id]) {
        this.addRootId(node.id);
      }
    }
  }, {
    key: 'updateNode',
    value: function updateNode(data) {
      var _this4 = this;

      if (data.children) {
        data.children.forEach(function (childId) {
          var ridx = _this4.roots.indexOf(childId);
          if (ridx !== -1) {
            _this4.roots.splice(ridx, 1);
            _this4.emit('roots');
          }
          if (!_this4.nodeParentsById[childId]) {
            _this4.nodeParentsById[childId] = data.id;
            var childNode = _this4.nodesById[childId];
            if (_this4.searchRoots && childNode && // fixme
            (0, _nodeMatchesText2.default)(childNode, _this4.searchText.toLowerCase(), childId, _this4)) {
              _this4.searchRoots = _this4.searchRoots.push(childId);
              _this4.emit('searchRoots');
              _this4.highlightSearch();
            }
          }
        });
      }
      if (this.nodesById[data.id]) {
        delete data.component; // fixme
        (0, _assign2.default)(this.nodesById[data.id], data);
        this.emit(data.id);
      } else {
        this.addNode(data);
      }
    }
  }, {
    key: 'removeNode',
    value: function removeNode(node) {
      var parentId = this.getParent(node.id);
      delete this.nodesById[node.id];
      delete this.nodeParentsById[node.id];
      if (parentId && this.nodesById[parentId]) {
        var idx = this.nodesById[parentId].children.indexOf(node.id);
        if (idx !== -1) {
          this.nodesById[parentId].children.splice(idx, 1);
          this.emit(parentId);
        }
      } else {
        var _idx = this.roots.indexOf(node.id);
        if (_idx !== -1) {
          this.roots.splice(_idx, 1);
          this.emit('roots');
        }
      }
      if (node.id === this.selectedNodeId) {
        this.selectTop(parentId, true);
      }
    }
  }, {
    key: 'highlight',
    value: function highlight(id) {
      this.bridge.send('highlight', id);
    }
  }, {
    key: 'hideHighlight',
    value: function hideHighlight() {
      this.bridge.send('stop-highlighting');
      if (!this.hoveredNodeId) {
        return;
      }
      var id = this.hoveredNodeId;
      this.hoveredNodeId = null;
      this.emit(id);
      this.emit('hoveredNodeId');
    }
  }, {
    key: 'setHover',
    value: function setHover(id, isHovered, isBottomTag) {
      if (isHovered) {
        var old = this.hoveredNodeId;
        this.hoveredNodeId = id;
        this.isBottomTagHovered = isBottomTag;
        if (old) {
          this.emit(old);
        }
        this.emit(id);
        this.emit('hoveredNodeId');
        this.highlight(id);
      } else if (this.hoveredNodeId === id) {
        this.hideHighlight();
        this.isBottomTagHovered = false;
      }
    }
  }, {
    key: 'selectBreadcrumb',
    value: function selectBreadcrumb(id) {
      this.uncollapseParents(id);
      this.changeSearch('');
      this.isBottomTagSelected = false;
      this.select(id, false, true);
    }
  }, {
    key: 'selectTop',
    value: function selectTop(id) {
      var noHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.isBottomTagSelected = false;
      this.select(id, noHighlight);
    }
  }, {
    key: 'selectBottom',
    value: function selectBottom(id) {
      this.isBottomTagSelected = !this.nodesById[id].collapsed && this.nodesById[id].children.length > 0;
      this.select(id);
    }
  }, {
    key: 'select',
    value: function select(id) {
      var noHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var keepBreadcrumb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var oldSel = this.selectedNodeId;
      this.selectedNodeId = id;
      if (oldSel) {
        this.emit(oldSel);
      }
      if (id) {
        this.emit(id);
      }
      if (!keepBreadcrumb) {
        this.breadcrumbHead = id;
        this.emit('breadcrumbHead');
      }
      this.emit('selectedNodeId');
      this.bridge.send('selectedNodeId', id);
      if (this.nodesById[id]) {
        this.bridge.send('getDeptree', { componentId: id, mobxid: this.nodesById[id].mobxid });
        this.inspect(['component']);
      }
      if (!noHighlight && id) {
        this.highlight(id);
      }
    }
  }, {
    key: 'inspect',
    value: function inspect(path) {
      this.bridge.send('inspect-component', { componentId: this.selectedNodeId, path: path });
    }
  }, {
    key: 'stopInspecting',
    value: function stopInspecting(path) {
      this.bridge.send('stop-inspecting-component', { componentId: this.selectedNodeId, path: path });
    }
  }, {
    key: 'changeValue',
    value: function changeValue(_ref3) {
      var path = _ref3.path,
          value = _ref3.value;

      this.bridge.send('change-value', { componentId: this.selectedNodeId, path: path, value: value });
    }
  }, {
    key: 'showContextMenu',
    value: function showContextMenu(type, evt) {
      var _this5 = this;

      evt.preventDefault();

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      this.contextMenu = {
        x: evt.clientX,
        y: evt.clientY,
        items: this.getContextMenuActions(type, args),
        close: function close() {
          _this5.hideContextMenu();
        }
      };
      this.emit('contextMenu');
    }
  }, {
    key: 'hideContextMenu',
    value: function hideContextMenu() {
      this.contextMenu = undefined;
      this.emit('contextMenu');
    }
  }, {
    key: 'pickComponent',
    value: function pickComponent() {
      this.pickingComponent = true;
      this.emit('pickingComponent');
      this.bridge.send('pick-component');
    }
  }, {
    key: 'stopPickingComponent',
    value: function stopPickingComponent() {
      this.pickingComponent = false;
      this.emit('pickingComponent');
      this.bridge.send('stop-picking-component');
    }
  }, {
    key: 'collapse',
    value: function collapse(id) {
      if (!this.nodesById[id].collapsed) {
        this.nodesById[id].collapsed = true;
        this.emit(id);
      }
    }
  }, {
    key: 'uncollapse',
    value: function uncollapse(id) {
      if (this.nodesById[id].collapsed) {
        this.nodesById[id].collapsed = false;
        this.emit(id);
      }
    }
  }, {
    key: 'uncollapseParents',
    value: function uncollapseParents(id) {
      if (this.searchRoots && this.searchRoots.includes(id)) {
        return;
      }
      var pid = this.nodeParentsById[id];
      while (pid) {
        this.uncollapse(pid);
        if (this.searchRoots && this.searchRoots.includes(pid)) {
          return;
        }
        pid = this.nodeParentsById[pid];
      }
    }
  }, {
    key: 'getContextMenuActions',
    value: function getContextMenuActions(type, args) {
      var _this6 = this;

      switch (type) {
        case 'tree':
          {
            var _args = (0, _slicedToArray3.default)(args, 2),
                id = _args[0],
                node = _args[1];

            var items = [];
            if (node.name) {
              items.push({
                key: 'showNodesOfType',
                title: 'Show all ' + node.name,
                action: function action() {
                  _this6.changeSearch(node.name);
                  _this6.hideContextMenu();
                }
              });
            }
            items.push({
              key: 'scrollToNode',
              title: 'Scroll to node',
              action: function action() {
                _this6.bridge.send('scrollToNode', { id: id });
                _this6.hideContextMenu();
              }
            });
            return items;
          }
        case 'attr':
          {
            var _args2 = (0, _slicedToArray3.default)(args, 5),
                _id = _args2[0],
                _node = _args2[1],
                val = _args2[2],
                path = _args2[3],
                name = _args2[4]; // eslint-disable-line no-unused-vars


            return [{
              key: 'storeAsGlobal',
              title: 'Store as global variable',
              action: function action() {
                _this6.bridge.send('makeGlobal', { id: _id, path: path });
                _this6.hideContextMenu();
              }
            }];
          }
        default:
          return [];
      }
    }
  }]);
  return TreeExplorerStore;
}(_AbstractStore3.default);

exports.default = TreeExplorerStore;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nodeMatchesText;

var _SearchUtils = __webpack_require__(167);

var SearchUtils = _interopRequireWildcard(_SearchUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function nodeMatchesText(node, needle) {
  var name = node.name;

  var useRegex = SearchUtils.shouldSearchUseRegex(needle);
  if (name) {
    return validString(name, needle, useRegex);
  }
  var text = node.text;

  if (text) {
    return validString(text, needle, useRegex);
  }
  var children = node.children;

  if (typeof children === 'string') {
    return validString(children, needle, useRegex);
  }
  return false;
}

function validString(str, needle, regex) {
  if (regex) {
    try {
      var regExp = SearchUtils.searchTextToRegExp(needle);
      return regExp.test(str.toLowerCase());
    } catch (error) {
      return false;
    }
  }
  return str.toLowerCase().indexOf(needle) !== -1;
}

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(82);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractStore2 = __webpack_require__(75);

var _AbstractStore3 = _interopRequireDefault(_AbstractStore2);

var _preferences = __webpack_require__(116);

var _preferences2 = _interopRequireDefault(_preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSTChangesStore = function (_AbstractStore) {
  (0, _inherits3.default)(MSTChangesStore, _AbstractStore);

  function MSTChangesStore(bridge) {
    (0, _classCallCheck3.default)(this, MSTChangesStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MSTChangesStore.__proto__ || (0, _getPrototypeOf2.default)(MSTChangesStore)).call(this));

    _this.mstLogEnabled = false;
    _this.itemsDataByRootId = {};
    _this.rootNamesById = {};

    _this.bridge = bridge;

    _this.addDisposer(bridge.sub('frontend:append-mst-log-items', function (newLogItem) {
      var rootId = newLogItem.rootId;

      if (!_this.itemsDataByRootId[rootId]) {
        if (!_this.activeRootId) {
          _this.activeRootId = rootId;
          _this.emit('activeRootId');
        }
        _this.itemsDataByRootId[rootId] = (0, _create2.default)(null);
        _this.itemsDataByRootId[rootId].logItemsIds = [];
        _this.itemsDataByRootId[rootId].logItemsById = {};
      }
      var itemData = _this.itemsDataByRootId[rootId];
      if (newLogItem.length > 500) {
        _this.spliceLogItems(rootId, 0, itemData.logItemsIds.length - 480);
      }
      itemData.activeLogItemId = newLogItem.id;
      itemData.activeLogItemIndex = itemData.logItemsIds.length;
      itemData.logItemsIds.push(newLogItem.id);
      itemData.logItemsById[newLogItem.id] = newLogItem;

      _this.emit('activeLogItemId');
      _this.emit('mstLogItems');
      _this.selectLogItemId(newLogItem.id);
    }), bridge.sub('mst-log-item-details', function (logItem) {
      var itemData = _this.itemsDataByRootId[logItem.rootId];
      if (!itemData) return;
      itemData.logItemsById[logItem.id] = logItem;
      _this.emit(logItem.id);
    }), bridge.sub('frontend:mst-roots', function (roots) {
      roots.forEach(function (_ref) {
        var id = _ref.id,
            name = _ref.name;

        _this.rootNamesById[id] = name;
      });
      _this.emit('mstRootsUpdated');
    }), bridge.sub('frontend:remove-mst-root', function (rootId) {
      delete _this.rootNamesById[rootId];
      delete _this.itemsDataByRootId[rootId];
      _this.emit('mstRootsUpdated');
    }));

    _preferences2.default.get('mstLogEnabled').then(function (_ref2) {
      var _ref2$mstLogEnabled = _ref2.mstLogEnabled,
          mstLogEnabled = _ref2$mstLogEnabled === undefined ? true : _ref2$mstLogEnabled;

      if (mstLogEnabled) _this.toggleMstLogging(true);
    });
    return _this;
  }

  (0, _createClass3.default)(MSTChangesStore, [{
    key: 'toggleMstLogging',
    value: function toggleMstLogging() {
      var mstLogEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.mstLogEnabled;

      if (mstLogEnabled !== this.mstLogEnabled) {
        this.mstLogEnabled = mstLogEnabled;
        _preferences2.default.set({ mstLogEnabled: mstLogEnabled });
        this.emit('mstLogEnabled');
        this.bridge.send('backend-mst:set-tracking-enabled', mstLogEnabled);
      }
    }
  }, {
    key: 'commitAll',
    value: function commitAll() {
      var _this2 = this;

      (0, _keys2.default)(this.itemsDataByRootId).forEach(function (rootId) {
        _this2.spliceLogItems(rootId, 0, _this2.itemsDataByRootId[rootId].logItemsIds.length - 1);
      });
      this.emit('mstLogItems');
    }
  }, {
    key: 'spliceLogItems',
    value: function spliceLogItems(rootId) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

      var itemData = this.itemsDataByRootId[rootId];
      if (!itemData) return;
      var logItemsIds = itemData.logItemsIds;

      var removedItemsIds = logItemsIds.splice(startIndex, endIndex);
      removedItemsIds.forEach(function (id) {
        delete itemData.logItemsById[id];
      });
      if (itemData.selectLogItemId && removedItemsIds.indexOf(itemData.selectedLogItemId) !== -1) {
        this.selectLogItemId(undefined);
      }
      this.bridge.send('backend-mst:forget-mst-items', { rootId: rootId, itemsIds: removedItemsIds });
    }
  }, {
    key: 'activateRootId',
    value: function activateRootId(rootId) {
      this.activeRootId = rootId;
      this.emit('activeRootId');
    }
  }, {
    key: 'activateLogItemId',
    value: function activateLogItemId(logItemId) {
      var rootId = this.activeRootId;
      var itemData = this.itemsDataByRootId[rootId];
      if (!itemData) return;
      this.bridge.send('backend-mst:activate-log-item-id', { rootId: rootId, logItemId: logItemId });
      itemData.activeLogItemId = logItemId;
      itemData.activeLogItemIndex = itemData.logItemsIds.indexOf(logItemId);
      this.emit('activeLogItemId');
    }
  }, {
    key: 'commitLogItemId',
    value: function commitLogItemId(logItemId) {
      this.activateLogItemId(logItemId);
      var rootId = this.activeRootId;
      var itemData = this.itemsDataByRootId[rootId];
      if (!itemData) return;
      var idx = itemData.logItemsIds.indexOf(logItemId);
      if (idx !== -1) {
        this.spliceLogItems(rootId, 0, idx);
      }
      this.emit('mstLogItems');
    }
  }, {
    key: 'cancelLogItemId',
    value: function cancelLogItemId(logItemId) {
      this.activateLogItemId(logItemId);
      var rootId = this.activeRootId;
      var itemData = this.itemsDataByRootId[rootId];
      if (!itemData) return;
      var idx = itemData.logItemsIds.indexOf(logItemId);
      if (idx !== -1 && idx !== 0) {
        this.activateLogItemId(itemData.logItemsIds[idx - 1]);
        this.spliceLogItems(rootId, idx);
      }
      this.emit('mstLogItems');
    }
  }, {
    key: 'selectLogItemId',
    value: function selectLogItemId(logItemId) {
      var rootId = this.activeRootId;
      var itemData = this.itemsDataByRootId[rootId];
      if (!itemData) return;
      itemData.selectedLogItemId = logItemId;
      this.emit('selectedLogItemId');
      this.getDetails(logItemId);
    }
  }, {
    key: 'getDetails',
    value: function getDetails(logItemId) {
      this.bridge.send('get-mst-log-item-details', {
        rootId: this.activeRootId,
        logItemId: logItemId
      });
    }
  }]);
  return MSTChangesStore;
}(_AbstractStore3.default);

exports.default = MSTChangesStore;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _AbstractStore2 = __webpack_require__(75);

var _AbstractStore3 = _interopRequireDefault(_AbstractStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CapabilitiesStore = function (_AbstractStore) {
  (0, _inherits3.default)(CapabilitiesStore, _AbstractStore);

  function CapabilitiesStore(bridge) {
    (0, _classCallCheck3.default)(this, CapabilitiesStore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CapabilitiesStore.__proto__ || (0, _getPrototypeOf2.default)(CapabilitiesStore)).call(this));

    _this.bridge = bridge;

    _this.addDisposer(bridge.sub('capabilities', function (capabilities) {
      _this.capabilities = capabilities;
      (0, _keys2.default)(capabilities).forEach(function (key) {
        if (_this[key] !== capabilities[key]) {
          _this[key] = capabilities[key];
          _this.emit(key);
        }
      });
    }));

    bridge.send('get-capabilities');
    return _this;
  }

  return CapabilitiesStore;
}(_AbstractStore3.default);

exports.default = CapabilitiesStore;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blocker = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Blocker, _React$PureComponent);

  function Blocker() {
    (0, _classCallCheck3.default)(this, Blocker);
    return (0, _possibleConstructorReturn3.default)(this, (Blocker.__proto__ || (0, _getPrototypeOf2.default)(Blocker)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blocker, [{
    key: 'renderIcon',
    value: function renderIcon() {
      switch (this.props.icon) {
        case 'mobx':
          return _react2.default.createElement(
            'svg',
            {
              baseProfile: 'basic',
              xmlns: 'http://www.w3.org/2000/svg',
              width: '128',
              height: '128',
              viewBox: '0 0 128 128'
            },
            _react2.default.createElement('path', {
              fill: 'none',
              stroke: '#333232',
              strokeWidth: '14',
              strokeMiterlimit: '10',
              d: 'M8 15h14v98H8M120 15h-14v98h14'
            }),
            _react2.default.createElement('path', {
              fill: 'none',
              stroke: 'var(--primary-color)',
              strokeWidth: '18',
              strokeLinecap: 'square',
              strokeMiterlimit: '10',
              d: 'M50 57l14 14 14-14'
            })
          );
        case 'pick':
          return _react2.default.createElement(
            'svg',
            {
              baseProfile: 'basic',
              xmlns: 'http://www.w3.org/2000/svg',
              width: '128',
              height: '128',
              viewBox: '-58.5 0 128 128'
            },
            _react2.default.createElement('path', { d: 'M-21.165 10.665L42.84 70.397l-30.943 2.67L29.5 112l-11.728 5.34L.7 77.864-21.165 98.66V10.664' })
          );
        default:
          return undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          onClick: this.props.onClick,
          style: {
            position: 'fixed',
            zIndex: 1,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '18px',
            background: 'rgba(255, 255, 255, 0.8)'
          }
        },
        this.renderIcon(),
        _react2.default.createElement(
          'div',
          { style: { margin: '10px' } },
          this.props.children
        )
      );
    }
  }]);
  return Blocker;
}(_react2.default.PureComponent), _class.propTypes = {
  children: _propTypes2.default.node,
  icon: _propTypes2.default.string,
  onClick: _propTypes2.default.func
}, _class.defaultProps = {
  icon: 'mobx',
  children: undefined,
  onClick: undefined
}, _temp);
exports.default = Blocker;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabChanges = __webpack_require__(268);

var _TabChanges2 = _interopRequireDefault(_TabChanges);

var _TabMST = __webpack_require__(299);

var _TabMST2 = _interopRequireDefault(_TabMST);

var _MainMenu = __webpack_require__(308);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _ContextMenu = __webpack_require__(311);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _preferences = __webpack_require__(116);

var _preferences2 = _interopRequireDefault(_preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RichPanel = (_dec = (0, _injectStores2.default)({
  subscribe: {
    actionsLoggerStore: ['logEnabled'],
    capabilitiesStore: ['mstFound'],
    mstLoggerStore: ['mstLogEnabled']
  },
  injectProps: function injectProps(_ref) {
    var actionsLoggerStore = _ref.actionsLoggerStore,
        capabilitiesStore = _ref.capabilitiesStore,
        mstLoggerStore = _ref.mstLoggerStore;
    return {
      mstFound: capabilitiesStore.mstFound,
      recordingActions: actionsLoggerStore.logEnabled,
      mstLogEnabled: mstLoggerStore.mstLogEnabled
    };
  }
}), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(RichPanel, _React$Component);

  function RichPanel() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RichPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = RichPanel.__proto__ || (0, _getPrototypeOf2.default)(RichPanel)).call.apply(_ref2, [this].concat(args))), _this), _this.handleTabChage = function (tab) {
      _this.setState({ activeTab: tab, preferredTab: tab });
      _preferences2.default.set({ lastTab: tab });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RichPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({ activeTab: this.getAvailableTabs()[0] });
      _preferences2.default.get('lastTab').then(function (_ref3) {
        var _ref3$lastTab = _ref3.lastTab,
            lastTab = _ref3$lastTab === undefined ? 'changes' : _ref3$lastTab;

        if (lastTab) {
          if (_this2.getAvailableTabs().includes(lastTab)) {
            _this2.setState({ activeTab: lastTab });
          } else {
            _this2.setState({ preferredTab: lastTab });
          }
        }
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.state.preferredTab && this.state.activeTab !== this.state.preferredTab && this.getAvailableTabs(nextProps).includes(this.state.preferredTab)) {
        // eslint-disable-next-line react/no-will-update-set-state
        this.setState(function (state) {
          return { activeTab: state.preferredTab };
        });
      }
    }
  }, {
    key: 'getAvailableTabs',
    value: function getAvailableTabs() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      return [props.mstFound && 'mst', 'changes'].filter(function (t) {
        return t;
      });
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      switch (this.state.activeTab) {
        case 'changes':
          return _react2.default.createElement(_TabChanges2.default, null);
        case 'mst':
          return _react2.default.createElement(_TabMST2.default, null);
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var availableTabs = this.getAvailableTabs();

      return _react2.default.createElement(
        'div',
        {
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }
        },
        _react2.default.createElement(_MainMenu2.default, {
          availableTabs: availableTabs,
          activeTab: this.state.activeTab,
          onTabChange: this.handleTabChage,
          processingTabs: [this.props.recordingActions && 'changes', this.props.mstLogEnabled && 'mst']
        }),
        this.renderContent(),
        _react2.default.createElement(_ContextMenu2.default, null)
      );
    }
  }]);
  return RichPanel;
}(_react2.default.Component), _class2.propTypes = {
  mstFound: _propTypes2.default.bool, // eslint-disable-line react/no-unused-prop-types
  recordingActions: _propTypes2.default.bool,
  mstLogEnabled: _propTypes2.default.bool
}, _temp2)) || _class);
exports.default = RichPanel;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _SecondaryPanel = __webpack_require__(170);

var _SecondaryPanel2 = _interopRequireDefault(_SecondaryPanel);

var _ButtonRecord = __webpack_require__(171);

var _ButtonRecord2 = _interopRequireDefault(_ButtonRecord);

var _ButtonClear = __webpack_require__(173);

var _ButtonClear2 = _interopRequireDefault(_ButtonClear);

var _Log = __webpack_require__(269);

var _Log2 = _interopRequireDefault(_Log);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _InputSearch = __webpack_require__(298);

var _InputSearch2 = _interopRequireDefault(_InputSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabChanges = (_dec = (0, _injectStores2.default)({
  subscribe: {
    actionsLoggerStore: ['logEnabled', 'log']
  },
  injectProps: function injectProps(_ref) {
    var actionsLoggerStore = _ref.actionsLoggerStore;
    return {
      searchText: actionsLoggerStore.searchText,
      logEnabled: actionsLoggerStore.logEnabled,
      logItemsIds: actionsLoggerStore.logItemsIds,
      clearLog: function clearLog() {
        actionsLoggerStore.clearLog();
      },
      toggleLogging: function toggleLogging() {
        actionsLoggerStore.toggleLogging();
      },
      setSearchText: function setSearchText(e) {
        actionsLoggerStore.setSearchText(e.target.value);
      }
    };
  }
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(TabChanges, _React$PureComponent);

  function TabChanges() {
    (0, _classCallCheck3.default)(this, TabChanges);
    return (0, _possibleConstructorReturn3.default)(this, (TabChanges.__proto__ || (0, _getPrototypeOf2.default)(TabChanges)).apply(this, arguments));
  }

  (0, _createClass3.default)(TabChanges, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.panel) },
        _react2.default.createElement(
          _SecondaryPanel2.default,
          null,
          _react2.default.createElement(_ButtonRecord2.default, {
            active: this.props.logEnabled,
            onClick: this.props.toggleLogging,
            showTipStartRecoding: !this.props.logEnabled && this.props.logItemsIds.length === 0
          }),
          _react2.default.createElement(_ButtonClear2.default, { onClick: this.props.clearLog }),
          _react2.default.createElement(_InputSearch2.default, { searchText: this.props.searchText, changeSearch: this.props.setSearchText })
        ),
        _react2.default.createElement(_Log2.default, null)
      );
    }
  }]);
  return TabChanges;
}(_react2.default.PureComponent), _class2.propTypes = {
  searchText: _propTypes2.default.string.isRequired,
  logEnabled: _propTypes2.default.bool.isRequired,
  logItemsIds: _propTypes2.default.array.isRequired,
  clearLog: _propTypes2.default.func.isRequired,
  toggleLogging: _propTypes2.default.func.isRequired,
  setSearchText: _propTypes2.default.func.isRequired
}, _temp)) || _class);
exports.default = TabChanges;


var styles = _aphrodite.StyleSheet.create({
  panel: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  panelBody: {
    display: 'flex',
    flex: '1 1 auto'
  },
  leftPane: {
    width: '100%',
    flex: '1 1 auto'
  },
  rightPane: {
    width: '100%',
    flex: '1 1 auto',
    padding: 10
  }
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp; /* eslint-disable react/jsx-no-bind */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _List = __webpack_require__(174);

var _List2 = _interopRequireDefault(_List);

var _LogItem = __webpack_require__(287);

var _LogItem2 = _interopRequireDefault(_LogItem);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_HEIGHT = 24;

var Log = (_dec = (0, _injectStores2.default)({
  subscribe: {
    actionsLoggerStore: ['log']
  },
  injectProps: function injectProps(_ref) {
    var actionsLoggerStore = _ref.actionsLoggerStore;
    return {
      logItemsById: actionsLoggerStore.logItemsById,
      logItemsIds: actionsLoggerStore.getFilteredLogItemsIds(),
      inspect: function inspect(changeId, path) {
        actionsLoggerStore.inspect(changeId, path);
      },
      stopInspecting: function stopInspecting(changeId, path) {
        actionsLoggerStore.stopInspecting(changeId, path);
      },
      getValueByPath: function getValueByPath(changeId, path) {
        return path.reduce(function (acc, next) {
          return acc && acc[next];
        }, actionsLoggerStore.logItemsById[changeId]);
      },
      showMenu: function showMenu(e, changeId, path) {
        e.preventDefault();
        actionsLoggerStore.showContextMenu('attr', e, changeId, path);
      }
    };
  }
}), _dec(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Log, _React$Component);

  function Log(props) {
    (0, _classCallCheck3.default)(this, Log);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Log.__proto__ || (0, _getPrototypeOf2.default)(Log)).call(this, props));

    _this.handleResize = function () {
      if (_this.resizeTimeout) return;
      _this.resizeTimeout = setTimeout(function () {
        _this.resizeTimeout = undefined;
        _this.updateSize();
      }, 200);
    };

    _this.handleScroll = function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;

      var autoScroll = scrollTop >= scrollHeight - clientHeight;
      if (autoScroll !== _this.state.autoScroll) {
        _this.setState({ autoScroll: autoScroll });
      }
    };

    _this.renderItem = function (_ref3) {
      var index = _ref3.index,
          style = _ref3.style;

      var id = _this.props.logItemsIds[index];
      var change = _this.props.logItemsById[id];

      if (!change.height) change.height = ITEM_HEIGHT;
      return _react2.default.createElement(
        'div',
        { style: style, key: id },
        _react2.default.createElement(_LogItem2.default, {
          getValueByPath: function getValueByPath(path) {
            return _this.props.getValueByPath(change.id, path);
          },
          inspect: function inspect(path) {
            return _this.props.inspect(change.id, path);
          },
          stopInspecting: function stopInspecting(path) {
            return _this.props.stopInspecting(change.id, path);
          },
          showMenu: function showMenu(e, _val, path) {
            return _this.props.showMenu(e, change.id, path);
          },
          change: change,
          onHeightUpdate: function onHeightUpdate() {
            return _this.list && _this.list.recomputeRowHeights(index);
          },
          preferredHeight: ITEM_HEIGHT
        })
      );
    };

    _this.state = {
      listHeight: 400,
      listWidth: 400,
      autoScroll: true
    };
    return _this;
  }

  (0, _createClass3.default)(Log, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeTimeout = setTimeout(function () {
        return _this2.updateSize();
      }, 0); // timeout for css applying
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'updateSize',
    value: function updateSize() {
      if (!this.containerEl) return;
      this.setState({
        listWidth: this.containerEl.offsetWidth,
        listHeight: this.containerEl.offsetHeight
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var rowCount = this.props.logItemsIds.length;
      var padding = 5;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _aphrodite.css)(styles.container),
          ref: function ref(el) {
            _this3.containerEl = el;
          }
        },
        _react2.default.createElement(_List2.default, {
          ref: function ref(list) {
            _this3.list = list;
          },
          onScroll: this.handleScroll,
          style: { width: 'auto', padding: padding, boxSizing: 'content-box' },
          containerStyle: { width: 'auto', maxWidth: 'none' },
          width: this.state.listWidth - padding * 2,
          height: this.state.listHeight - padding * 2,
          rowCount: rowCount,
          scrollToIndex: this.state.autoScroll && rowCount > 0 ? rowCount - 1 : undefined,
          rowHeight: function rowHeight(_ref4) {
            var index = _ref4.index;
            return _this3.props.logItemsById[_this3.props.logItemsIds[index]].height || ITEM_HEIGHT;
          },
          overscanCount: 1,
          rowRenderer: this.renderItem
        })
      );
    }
  }]);
  return Log;
}(_react2.default.Component), _class2.propTypes = {
  logItemsById: _propTypes2.default.object.isRequired,
  logItemsIds: _propTypes2.default.array.isRequired,
  inspect: _propTypes2.default.func.isRequired,
  stopInspecting: _propTypes2.default.func.isRequired,
  getValueByPath: _propTypes2.default.func.isRequired,
  showMenu: _propTypes2.default.func.isRequired
}, _temp)) || _class);
exports.default = Log;


var styles = _aphrodite.StyleSheet.create({
  container: {
    flex: '1 1 auto',
    overflow: 'hidden',
    height: '100%'
  }
});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

var _interopRequireWildcard = __webpack_require__(95);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(176));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(96));

var _createClass2 = _interopRequireDefault(__webpack_require__(97));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(177));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(178));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(117));

var _inherits2 = _interopRequireDefault(__webpack_require__(179));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(98));

var _Grid = _interopRequireWildcard(__webpack_require__(272));

var React = _interopRequireWildcard(__webpack_require__(0));

var _clsx = _interopRequireDefault(__webpack_require__(180));

var _types = __webpack_require__(183);

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _class, _temp;

var List = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Grid", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellRenderer", function (_ref) {
      var parent = _ref.parent,
          rowIndex = _ref.rowIndex,
          style = _ref.style,
          isScrolling = _ref.isScrolling,
          isVisible = _ref.isVisible,
          key = _ref.key;
      var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');

      if (widthDescriptor && widthDescriptor.writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRef", function (ref) {
      _this.Grid = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;
      var onScroll = _this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSectionRendered", function (_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
          rowStartIndex = _ref3.rowStartIndex,
          rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(List, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref4) {
      var alignment = _ref4.alignment,
          index = _ref4.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$columnIndex = _ref6.columnIndex,
          columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex,
          _ref6$rowIndex = _ref6.rowIndex,
          rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          noRowsRenderer = _this$props.noRowsRenderer,
          scrollToIndex = _this$props.scrollToIndex,
          width = _this$props.width;
      var classNames = (0, _clsx["default"])('ReactVirtualized__List', className);
      return React.createElement(_Grid["default"], (0, _extends2["default"])({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);
  return List;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : {
  "aria-label": _propTypes["default"].string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  "autoHeight": _propTypes["default"].bool.isRequired,

  /** Optional CSS class name */
  "className": _propTypes["default"].string,

  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  "estimatedRowSize": _propTypes["default"].number.isRequired,

  /** Height constraint for list (determines how many actual rows are rendered) */
  "height": _propTypes["default"].number.isRequired,

  /** Optional renderer to be used in place of rows when rowCount is 0 */
  "noRowsRenderer": function noRowsRenderer() {
    return (typeof _Grid.bpfrpt_proptype_NoContentRenderer === "function" ? _Grid.bpfrpt_proptype_NoContentRenderer.isRequired ? _Grid.bpfrpt_proptype_NoContentRenderer.isRequired : _Grid.bpfrpt_proptype_NoContentRenderer : _propTypes["default"].shape(_Grid.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },

  /** Callback invoked with information about the slice of rows that were just rendered.  */
  "onRowsRendered": _propTypes["default"].func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  "onScroll": _propTypes["default"].func.isRequired,

  /** See Grid#overscanIndicesGetter */
  "overscanIndicesGetter": function overscanIndicesGetter() {
    return (typeof _Grid.bpfrpt_proptype_OverscanIndicesGetter === "function" ? _Grid.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _Grid.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _Grid.bpfrpt_proptype_OverscanIndicesGetter : _propTypes["default"].shape(_Grid.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  "overscanRowCount": _propTypes["default"].number.isRequired,

  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  "rowHeight": function rowHeight() {
    return (typeof _Grid.bpfrpt_proptype_CellSize === "function" ? _Grid.bpfrpt_proptype_CellSize.isRequired ? _Grid.bpfrpt_proptype_CellSize.isRequired : _Grid.bpfrpt_proptype_CellSize : _propTypes["default"].shape(_Grid.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Responsible for rendering a row given an index; ({ index: number }): node */
  "rowRenderer": function rowRenderer() {
    return (typeof _types.bpfrpt_proptype_RowRenderer === "function" ? _types.bpfrpt_proptype_RowRenderer.isRequired ? _types.bpfrpt_proptype_RowRenderer.isRequired : _types.bpfrpt_proptype_RowRenderer : _propTypes["default"].shape(_types.bpfrpt_proptype_RowRenderer).isRequired).apply(this, arguments);
  },

  /** Number of rows in list. */
  "rowCount": _propTypes["default"].number.isRequired,

  /** See Grid#scrollToAlignment */
  "scrollToAlignment": function scrollToAlignment() {
    return (typeof _Grid.bpfrpt_proptype_Alignment === "function" ? _Grid.bpfrpt_proptype_Alignment.isRequired ? _Grid.bpfrpt_proptype_Alignment.isRequired : _Grid.bpfrpt_proptype_Alignment : _propTypes["default"].shape(_Grid.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToIndex": _propTypes["default"].number.isRequired,

  /** Vertical offset. */
  "scrollTop": _propTypes["default"].number,

  /** Optional inline style */
  "style": _propTypes["default"].object.isRequired,

  /** Tab index for focus */
  "tabIndex": _propTypes["default"].number,

  /** Width of list */
  "width": _propTypes["default"].number.isRequired
}), _temp);
exports["default"] = List;
(0, _defineProperty2["default"])(List, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});

/***/ }),
/* 271 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Grid["default"];
  }
});
Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function get() {
    return _Grid["default"];
  }
});
Object.defineProperty(exports, "accessibilityOverscanIndicesGetter", {
  enumerable: true,
  get: function get() {
    return _accessibilityOverscanIndicesGetter["default"];
  }
});
Object.defineProperty(exports, "defaultCellRangeRenderer", {
  enumerable: true,
  get: function get() {
    return _defaultCellRangeRenderer["default"];
  }
});
Object.defineProperty(exports, "defaultOverscanIndicesGetter", {
  enumerable: true,
  get: function get() {
    return _defaultOverscanIndicesGetter["default"];
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_NoContentRenderer", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_NoContentRenderer;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_Alignment", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_Alignment;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_CellPosition", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_CellPosition;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_CellSize", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_CellSize;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_OverscanIndicesGetter", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_OverscanIndicesGetter;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_RenderedSection", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_RenderedSection;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_CellRendererParams", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_CellRendererParams;
  }
});
Object.defineProperty(exports, "bpfrpt_proptype_Scroll", {
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_Scroll;
  }
});

var _Grid = _interopRequireDefault(__webpack_require__(273));

var _accessibilityOverscanIndicesGetter = _interopRequireDefault(__webpack_require__(286));

var _defaultCellRangeRenderer = _interopRequireDefault(__webpack_require__(182));

var _defaultOverscanIndicesGetter = _interopRequireDefault(__webpack_require__(181));

var _types = __webpack_require__(46);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

var _interopRequireWildcard = __webpack_require__(95);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(176));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(96));

var _createClass2 = _interopRequireDefault(__webpack_require__(97));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(177));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(178));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(117));

var _inherits2 = _interopRequireDefault(__webpack_require__(179));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(98));

var React = _interopRequireWildcard(__webpack_require__(0));

var _clsx = _interopRequireDefault(__webpack_require__(180));

var _calculateSizeAndPositionDataAndUpdateScrollOffset = _interopRequireDefault(__webpack_require__(274));

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(118));

var _createCallbackMemoizer = _interopRequireDefault(__webpack_require__(279));

var _defaultOverscanIndicesGetter = _interopRequireWildcard(__webpack_require__(181));

var _updateScrollIndexHelper = _interopRequireDefault(__webpack_require__(280));

var _defaultCellRangeRenderer = _interopRequireDefault(__webpack_require__(182));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(281));

var _reactLifecyclesCompat = __webpack_require__(283);

var _requestAnimationTimeout = __webpack_require__(284);

var _types = __webpack_require__(46);

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = DEFAULT_SCROLLING_RESET_TIME_INTERVAL;
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Grid);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Grid).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onGridRenderedMemoizer", (0, _createCallbackMemoizer["default"])());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScrollMemoizer", (0, _createCallbackMemoizer["default"])(false));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deferredInvalidateColumnIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deferredInvalidateRowIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_recomputeScrollLeftFlag", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_recomputeScrollTopFlag", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_horizontalScrollBarSize", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_verticalScrollBarSize", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_scrollbarPresenceChanged", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_scrollingContainer", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_childrenToDisplay", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnStartIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnStopIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowStartIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowStopIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedColumnStartIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedColumnStopIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedRowStartIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedRowStopIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_initialScrollTop", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_initialScrollLeft", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_disablePointerEventsTimeoutId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_styleCache", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellCache", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_debounceScrollEndedCallback", function () {
      _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache

      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_invokeOnGridRenderedHelper", function () {
      var onSectionRendered = _this.props.onSectionRendered;

      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    });
    var columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager["default"]({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager["default"]({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });
    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,
        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }

    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }

    return _this;
  }
  /**
   * Gets offsets for a given cell and alignment.
   */


  (0, _createClass2["default"])(Grid, [{
    key: "getOffsetForCell",
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = _objectSpread({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: "getTotalRowsHeight",
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: "getTotalColumnsWidth",
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: "handleScrollEvent",
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      this._debounceScrollEnded();

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          autoWidth = _this$props.autoWidth,
          height = _this$props.height,
          width = _this$props.width;
      var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }
    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          rowCount = _this$props2.rowCount;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;

      var _this$props3 = this.props,
          scrollToColumn = _this$props3.scrollToColumn,
          scrollToRow = _this$props3.scrollToRow;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.

      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.

      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
    /**
     * Ensure column and row are visible.
     */

  }, {
    key: "scrollToCell",
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;
      var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.

      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(_objectSpread({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(_objectSpread({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          getScrollbarSize = _this$props4.getScrollbarSize,
          height = _this$props4.height,
          scrollLeft = _this$props4.scrollLeft,
          scrollToColumn = _this$props4.scrollToColumn,
          scrollTop = _this$props4.scrollTop,
          scrollToRow = _this$props4.scrollToRow,
          width = _this$props4.width;
      var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.


      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = _objectSpread({}, prevState, {
            needToResetStyleCache: false
          });

          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      } // refs don't work in `react-test-renderer`


      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }

        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.


      var sizeIsBiggerThanZero = height > 0 && width > 0;

      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }

      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      } // Update onRowsRendered callback


      this._invokeOnGridRenderedHelper(); // Initialize onScroll callback


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props5 = this.props,
          autoHeight = _this$props5.autoHeight,
          autoWidth = _this$props5.autoWidth,
          columnCount = _this$props5.columnCount,
          height = _this$props5.height,
          rowCount = _this$props5.rowCount,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToColumn = _this$props5.scrollToColumn,
          scrollToRow = _this$props5.scrollToRow,
          width = _this$props5.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollPositionChangeReason = _this$state.scrollPositionChangeReason,
          scrollTop = _this$state.scrollTop,
          instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218


      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.


      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?

      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;

        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0, _updateScrollIndexHelper["default"])({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;

        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0, _updateScrollIndexHelper["default"])({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners


      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoContainerWidth = _this$props6.autoContainerWidth,
          autoHeight = _this$props6.autoHeight,
          autoWidth = _this$props6.autoWidth,
          className = _this$props6.className,
          containerProps = _this$props6.containerProps,
          containerRole = _this$props6.containerRole,
          containerStyle = _this$props6.containerStyle,
          height = _this$props6.height,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          role = _this$props6.role,
          style = _this$props6.style,
          tabIndex = _this$props6.tabIndex,
          width = _this$props6.width;
      var _this$state2 = this.state,
          instanceProps = _this$state2.instanceProps,
          needToResetStyleCache = _this$state2.needToResetStyleCache;

      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      } // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset


      if (!this.state.isScrolling) {
        this._resetStyleCache();
      } // calculate children to render here


      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      } // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23


      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      var childrenToDisplay = this._childrenToDisplay;
      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
      return React.createElement("div", (0, _extends2["default"])({
        ref: this._setScrollingContainerRef
      }, containerProps, {
        "aria-label": this.props['aria-label'],
        "aria-readonly": this.props['aria-readonly'],
        className: (0, _clsx["default"])('ReactVirtualized__Grid', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({}, gridStyle, {}, style),
        tabIndex: tabIndex
      }), childrenToDisplay.length > 0 && React.createElement("div", {
        className: "ReactVirtualized__Grid__innerScrollContainer",
        role: containerRole,
        style: _objectSpread({
          width: autoContainerWidth ? 'auto' : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: "_calculateChildrenToRender",
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;
      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.

      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });
        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        }); // Store for _invokeOnGridRenderedHelper()

        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });
        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        }); // Store for _invokeOnGridRenderedHelper()

        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.

        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          } // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).


          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        }); // update the indices

        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_debounceScrollEnded",
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_handleInvalidatedGridSize",

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
      }
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: "_maybeCallOnScrollbarPresenceChange",
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: "scrollToPosition",

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: "_updateScrollLeftForScrollToColumn",
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: "_resetStyleCache",
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.

      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = "".concat(rowIndex, "-").concat(columnIndex);
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: "_updateScrollTopForScrollToRow",
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;

      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });
      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      } // If scrolling is controlled outside this component, clear cache when scrolling stops


      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }

      var maybeStateA;
      var maybeStateB;
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset["default"])({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset["default"])({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });
      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)

      instanceProps.scrollbarSize = nextProps.getScrollbarSize();

      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;
      return _objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
    }
  }, {
    key: "_getEstimatedColumnSize",
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: "_getEstimatedRowSize",
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: "_getScrollToPositionStateUpdate",

    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }

      return {};
    }
  }, {
    key: "_wrapSizeGetter",
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;

      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollLeftForScrollToColumnStateUpdate",
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }

      return {};
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;

      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollTopForScrollToRowStateUpdate",
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }

      return {};
    }
  }]);
  return Grid;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : {
  "aria-label": _propTypes["default"].string.isRequired,
  "aria-readonly": _propTypes["default"].bool,

  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  "autoContainerWidth": _propTypes["default"].bool.isRequired,

  /**
   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  "autoHeight": _propTypes["default"].bool.isRequired,

  /**
   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  "autoWidth": _propTypes["default"].bool.isRequired,

  /** Responsible for rendering a cell given an row and column index.  */
  "cellRenderer": function cellRenderer() {
    return (typeof _types.bpfrpt_proptype_CellRenderer === "function" ? _types.bpfrpt_proptype_CellRenderer.isRequired ? _types.bpfrpt_proptype_CellRenderer.isRequired : _types.bpfrpt_proptype_CellRenderer : _propTypes["default"].shape(_types.bpfrpt_proptype_CellRenderer).isRequired).apply(this, arguments);
  },

  /** Responsible for rendering a group of cells given their index ranges.  */
  "cellRangeRenderer": function cellRangeRenderer() {
    return (typeof _types.bpfrpt_proptype_CellRangeRenderer === "function" ? _types.bpfrpt_proptype_CellRangeRenderer.isRequired ? _types.bpfrpt_proptype_CellRangeRenderer.isRequired : _types.bpfrpt_proptype_CellRangeRenderer : _propTypes["default"].shape(_types.bpfrpt_proptype_CellRangeRenderer).isRequired).apply(this, arguments);
  },

  /** Optional custom CSS class name to attach to root Grid element.  */
  "className": _propTypes["default"].string,

  /** Number of columns in grid.  */
  "columnCount": _propTypes["default"].number.isRequired,

  /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */
  "columnWidth": function columnWidth() {
    return (typeof _types.bpfrpt_proptype_CellSize === "function" ? _types.bpfrpt_proptype_CellSize.isRequired ? _types.bpfrpt_proptype_CellSize.isRequired : _types.bpfrpt_proptype_CellSize : _propTypes["default"].shape(_types.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Unfiltered props for the Grid container. */
  "containerProps": _propTypes["default"].object,

  /** ARIA role for the cell-container.  */
  "containerRole": _propTypes["default"].string.isRequired,

  /** Optional inline style applied to inner cell-container */
  "containerStyle": _propTypes["default"].object.isRequired,

  /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */
  "deferredMeasurementCache": _propTypes["default"].object,

  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  "estimatedColumnSize": _propTypes["default"].number.isRequired,

  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  "estimatedRowSize": _propTypes["default"].number.isRequired,

  /** Exposed for testing purposes only.  */
  "getScrollbarSize": _propTypes["default"].func.isRequired,

  /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */
  "height": _propTypes["default"].number.isRequired,

  /** Optional custom id to attach to root Grid element.  */
  "id": _propTypes["default"].string,

  /**
   * Override internal is-scrolling state tracking.
   * This property is primarily intended for use with the WindowScroller component.
   */
  "isScrolling": _propTypes["default"].bool,

  /**
   * Opt-out of isScrolling param passed to cellRangeRenderer.
   * To avoid the extra render when scroll stops.
   */
  "isScrollingOptOut": _propTypes["default"].bool.isRequired,

  /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */
  "noContentRenderer": function noContentRenderer() {
    return (typeof _types.bpfrpt_proptype_NoContentRenderer === "function" ? _types.bpfrpt_proptype_NoContentRenderer.isRequired ? _types.bpfrpt_proptype_NoContentRenderer.isRequired : _types.bpfrpt_proptype_NoContentRenderer : _propTypes["default"].shape(_types.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  "onScroll": _propTypes["default"].func.isRequired,

  /**
   * Called whenever a horizontal or vertical scrollbar is added or removed.
   * This prop is not intended for end-user use;
   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
   */
  "onScrollbarPresenceChange": _propTypes["default"].func.isRequired,

  /** Callback invoked with information about the section of the Grid that was just rendered.  */
  "onSectionRendered": _propTypes["default"].func.isRequired,

  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  "overscanColumnCount": _propTypes["default"].number.isRequired,

  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */
  "overscanIndicesGetter": function overscanIndicesGetter() {
    return (typeof _types.bpfrpt_proptype_OverscanIndicesGetter === "function" ? _types.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _types.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _types.bpfrpt_proptype_OverscanIndicesGetter : _propTypes["default"].shape(_types.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },

  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  "overscanRowCount": _propTypes["default"].number.isRequired,

  /** ARIA role for the grid element.  */
  "role": _propTypes["default"].string.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  "rowHeight": function rowHeight() {
    return (typeof _types.bpfrpt_proptype_CellSize === "function" ? _types.bpfrpt_proptype_CellSize.isRequired ? _types.bpfrpt_proptype_CellSize.isRequired : _types.bpfrpt_proptype_CellSize : _propTypes["default"].shape(_types.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Number of rows in grid.  */
  "rowCount": _propTypes["default"].number.isRequired,

  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  "scrollingResetTimeInterval": _propTypes["default"].number.isRequired,

  /** Horizontal offset. */
  "scrollLeft": _propTypes["default"].number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  "scrollToAlignment": function scrollToAlignment() {
    return (typeof _types.bpfrpt_proptype_Alignment === "function" ? _types.bpfrpt_proptype_Alignment.isRequired ? _types.bpfrpt_proptype_Alignment.isRequired : _types.bpfrpt_proptype_Alignment : _propTypes["default"].shape(_types.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },

  /** Column index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToColumn": _propTypes["default"].number.isRequired,

  /** Vertical offset. */
  "scrollTop": _propTypes["default"].number,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToRow": _propTypes["default"].number.isRequired,

  /** Optional inline style */
  "style": _propTypes["default"].object.isRequired,

  /** Tab index for focus */
  "tabIndex": _propTypes["default"].number,

  /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */
  "width": _propTypes["default"].number.isRequired
}), _temp);
(0, _defineProperty2["default"])(Grid, "defaultProps", {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer["default"],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: _scrollbarSize["default"],
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter["default"],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
});
(0, _reactLifecyclesCompat.polyfill)(Grid);
var _default = Grid;
exports["default"] = _default;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = calculateSizeAndPositionDataAndUpdateScrollOffset;

/**
 * Helper method that determines when to recalculate row or column metadata.
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.

    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(276);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 276 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(96));

var _createClass2 = _interopRequireDefault(__webpack_require__(97));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(98));

var _types = __webpack_require__(46);

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager =
/*#__PURE__*/
function () {
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  // Used in deferred mode to track which cells have been queued for measurement.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;
    (0, _classCallCheck2["default"])(this, CellSizeAndPositionManager);
    (0, _defineProperty2["default"])(this, "_cellSizeAndPositionData", {});
    (0, _defineProperty2["default"])(this, "_lastMeasuredIndex", -1);
    (0, _defineProperty2["default"])(this, "_lastBatchedIndex", -1);
    (0, _defineProperty2["default"])(this, "_cellCount", void 0);
    (0, _defineProperty2["default"])(this, "_cellSizeGetter", void 0);
    (0, _defineProperty2["default"])(this, "_estimatedCellSize", void 0);
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  (0, _createClass2["default"])(CellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var size = this._cellSizeGetter({
            index: i
          }); // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.


          if (size === undefined || isNaN(size)) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
          } else if (size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: 0
            };
            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: size
            };
            offset += size;
            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;

        case 'end':
          idealOffset = minOffset;
          break;

        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;

        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
          offset = params.offset;
      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;

      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;
      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;
        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: "_binarySearch",
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: "_exponentialSearch",
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      } // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.


      offset = Math.max(0, offset);
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);
  return CellSizeAndPositionManager;
}();

exports["default"] = CellSizeAndPositionManager;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaxElementSize = void 0;
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome;
};

var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }

  return DEFAULT_MAX_ELEMENT_SIZE;
};

exports.getMaxElementSize = getMaxElementSize;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createCallbackMemoizer;

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var cachedIndices = {};
  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;
    var keys = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];
      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });
    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateScrollIndexHelper;

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(118));

var _types = __webpack_require__(46);

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;
  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.

  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = scrollbarSize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canUseDOM__ = __webpack_require__(282);

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (__WEBPACK_IMPORTED_MODULE_0__canUseDOM__["a" /* default */]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_AnimationTimeoutId = exports.requestAnimationTimeout = exports.cancelAnimationTimeout = void 0;

var _animationFrame = __webpack_require__(285);

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var bpfrpt_proptype_AnimationTimeoutId =  true ? null : {
  "id": _propTypes["default"].number.isRequired
};
exports.bpfrpt_proptype_AnimationTimeoutId = bpfrpt_proptype_AnimationTimeoutId;

var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0, _animationFrame.caf)(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */


exports.cancelAnimationTimeout = cancelAnimationTimeout;

var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0, _animationFrame.raf)(timeout);
    }
  };

  var frame = {
    id: (0, _animationFrame.raf)(timeout)
  };
  return frame;
};

exports.requestAnimationTimeout = requestAnimationTimeout;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caf = exports.raf = void 0;
// Properly handle server-side rendering.
var win;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
} // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/


var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
exports.raf = raf;
var caf = cancel;
exports.caf = caf;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultOverscanIndicesGetter;
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = void 0;

var _types = __webpack_require__(46);

var SCROLL_DIRECTION_BACKWARD = -1;
exports.SCROLL_DIRECTION_BACKWARD = SCROLL_DIRECTION_BACKWARD;
var SCROLL_DIRECTION_FORWARD = 1;
exports.SCROLL_DIRECTION_FORWARD = SCROLL_DIRECTION_FORWARD;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
exports.SCROLL_DIRECTION_HORIZONTAL = SCROLL_DIRECTION_HORIZONTAL;
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

exports.SCROLL_DIRECTION_VERTICAL = SCROLL_DIRECTION_VERTICAL;

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;
  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _LObjDiff = __webpack_require__(288);

var _LObjDiff2 = _interopRequireDefault(_LObjDiff);

var _LObjDiffPreview = __webpack_require__(296);

var _LObjDiffPreview2 = _interopRequireDefault(_LObjDiffPreview);

var _icons = __webpack_require__(297);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _Popover = __webpack_require__(185);

var _Popover2 = _interopRequireDefault(_Popover);

var _ChangeDataViewerPopover = __webpack_require__(184);

var _ChangeDataViewerPopover2 = _interopRequireDefault(_ChangeDataViewerPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColor = function getColor(type) {
  switch (type) {
    case 'action':
      return '#0486e2';
    case 'reaction':
      return '#1fcc5c';
    default:
      return 'var(--lighter-text-color)';
  }
};

var LogItem = (_dec = (0, _injectStores2.default)({
  subscribe: function subscribe(stores, _ref) {
    var change = _ref.change;
    return {
      actionsLoggerStore: [change.id]
    };
  },
  injectProps: function injectProps(_ref2, _ref3) {
    var actionsLoggerStore = _ref2.actionsLoggerStore;
    var change = _ref3.change;
    return {
      getDetails: function getDetails() {
        actionsLoggerStore.getDetails(change.id);
      }
    };
  }
}), _dec(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(LogItem, _React$Component);

  function LogItem(props) {
    (0, _classCallCheck3.default)(this, LogItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LogItem.__proto__ || (0, _getPrototypeOf2.default)(LogItem)).call(this, props));

    _this.toggleOpen = function () {
      var change = _this.props.change;

      var isOpened = !_this.state.open;
      change.open = isOpened;
      if (isOpened && change.summary) {
        if (_this.props.getDetails) _this.props.getDetails();
      }

      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    };

    _this.recomputeHeight = function () {
      return setTimeout(function () {
        // timeout for css applying
        if (_this.props.onHeightUpdate && _this.el) {
          var height = _this.el.offsetHeight;
          if (_this.props.change.height !== height) {
            _this.props.change.height = _this.el.offsetHeight;
            _this.props.onHeightUpdate();
          }
        }
      }, 0);
    };

    _this.state = {
      open: Boolean(_this.props.change.open)
    };
    return _this;
  }

  (0, _createClass3.default)(LogItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.recomputeHeight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.recomputeHeight();
    }
  }, {
    key: 'renderChange',
    value: function renderChange() {
      var _this2 = this;

      var change = this.props.change;

      switch (change.type) {
        case 'action':
        case 'transaction':
        case 'reaction':
          return _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.headContent) },
            _react2.default.createElement(
              'span',
              { className: (0, _aphrodite.css)(styles.headContentTitle) },
              change.name ? change.name : change.type.toUpperCase().slice(0, 1) + change.type.slice(1)
            ),
            ' ',
            change.object && _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['object']),
              value: change.object,
              displayName: change.objectName,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu,
              className: (0, _aphrodite.css)(styles.headContentMisc)
            })
          );

        case 'add':
        case 'delete':
        case 'update':
        case 'splice':
          return _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.headContent) },
            _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['object']),
              value: change.object,
              displayName: change.objectName,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu,
              className: (0, _aphrodite.css)(styles.headContentMisc)
            }),
            _react2.default.createElement(
              _Popover2.default,
              {
                className: (0, _aphrodite.css)(styles.headContentMisc),
                requireClick: true
                // eslint-disable-next-line react/jsx-no-bind
                , onShown: function onShown() {
                  return _this2.props.getDetails && _this2.props.getDetails(change.id);
                },
                content: _react2.default.createElement(_LObjDiff2.default, {
                  change: change,
                  path: this.props.path,
                  getValueByPath: this.props.getValueByPath,
                  inspect: this.props.inspect,
                  stopInspecting: this.props.stopInspecting,
                  showMenu: this.props.showMenu
                })
              },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_LObjDiffPreview2.default, { change: change })
              )
            )
          );
        case 'compute':
          return _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.headContent, styles.headContentWithIcon) },
            _react2.default.createElement(_icons.IconComputed, { className: (0, _aphrodite.css)(styles.headContentIcon) }),
            _react2.default.createElement(
              'span',
              { className: (0, _aphrodite.css)(styles.headContentTitle) },
              'Computed',
              change.targetName
            ),
            change.object && _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['object']),
              value: change.object,
              displayName: change.objectName,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu
            }),
            _react2.default.createElement(
              'span',
              { className: (0, _aphrodite.css)(styles.headContentMisc) },
              'fn:'
            ),
            _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['fn']),
              value: change.fn,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu,
              className: (0, _aphrodite.css)(styles.headContentMisc)
            })
          );

        case 'error':
          return _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.headContent, styles.headContentWithIcon) },
            _react2.default.createElement(_icons.IconError, { className: (0, _aphrodite.css)(styles.headContentIcon) }),
            _react2.default.createElement(
              'span',
              { className: (0, _aphrodite.css)(styles.headContentTitle) },
              change.message
            )
          );

        case 'scheduled-reaction':
          return _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.headContent, styles.headContentWithIcon) },
            _react2.default.createElement(_icons.IconScheduledReaction, { className: (0, _aphrodite.css)(styles.headContentIcon) }),
            _react2.default.createElement(
              'span',
              { className: (0, _aphrodite.css)(styles.headContentTitle) },
              'Scheduled async reaction'
            ),
            _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['object']),
              value: change.object,
              displayName: change.objectName,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu,
              className: (0, _aphrodite.css)(styles.headContentMisc)
            })
          );

        case 'create':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { className: (0, _aphrodite.css)(styles.headContentTitle) },
              'Create'
            ),
            _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['object']),
              value: change.object,
              displayName: change.objectName,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu,
              className: (0, _aphrodite.css)(styles.headContentMisc)
            }),
            ':',
            _react2.default.createElement(_ChangeDataViewerPopover2.default, {
              path: this.props.path.concat(['newValue']),
              value: change.newValue,
              getValueByPath: this.props.getValueByPath,
              inspect: this.props.inspect,
              stopInspecting: this.props.stopInspecting,
              showMenu: this.props.showMenu,
              className: (0, _aphrodite.css)(styles.headContentMisc)
            })
          );

        default:
          return _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.headContent) },
            change.type
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var change = this.props.change;
      var open = this.state.open;

      var openable = this.props.change.hasChildren || (this.props.change.children || []).length > 0;
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(el) {
            _this3.el = el;
          },
          className: (0, _aphrodite.css)(styles.container, open && styles.containerOpen),
          style: { borderColor: getColor(change.type) }
        },
        _react2.default.createElement(
          'div',
          {
            className: (0, _aphrodite.css)(styles.head, openable && styles.headCollapsible),
            style: { lineHeight: this.props.preferredHeight + 'px' },
            onClick: openable ? this.toggleOpen : undefined
          },
          openable && _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.opener) },
            _react2.default.createElement('span', { className: (0, _aphrodite.css)(open ? styles.expandedArrow : styles.collapsedArrow) })
          ),
          this.renderChange()
        ),
        open && _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.body) },
          change.children && change.children.map(function (c, i) {
            return _react2.default.createElement(LogItem, {
              getValueByPath: _this3.props.getValueByPath,
              inspect: _this3.props.inspect,
              stopInspecting: _this3.props.stopInspecting,
              showMenu: _this3.props.showMenu,
              key: c.id,
              change: c,
              onHeightUpdate: _this3.recomputeHeight,
              path: _this3.props.path.concat(['children', i])
            });
          })
        )
      );
    }
  }]);
  return LogItem;
}(_react2.default.Component), _class2.propTypes = {
  getDetails: _propTypes2.default.func,
  path: _propTypes2.default.array,
  getValueByPath: _propTypes2.default.func,
  inspect: _propTypes2.default.func,
  stopInspecting: _propTypes2.default.func,
  showMenu: _propTypes2.default.func,
  preferredHeight: _propTypes2.default.number,
  onHeightUpdate: _propTypes2.default.func,
  change: _propTypes2.default.object.isRequired
}, _class2.defaultProps = {
  path: []
}, _temp)) || _class);
exports.default = LogItem;


var styles = _aphrodite.StyleSheet.create({
  container: {
    position: 'relative',
    paddingLeft: 13,
    marginBottom: 7
  },

  containerOpen: {
    height: 'auto',
    ':before': {
      content: '""',
      position: 'absolute',
      width: 3,
      top: 2,
      left: 0,
      bottom: 2,
      borderWidth: '1px 0 1px 1px',
      borderColor: 'inherit',
      borderStyle: 'solid'
    }
  },

  head: {
    display: 'flex',
    position: 'relative',
    borderColor: 'inherit',
    alignItems: 'flex-start',
    marginBottom: 4
  },

  headCollapsible: {
    cursor: 'pointer'
  },

  headContent: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  headContentWithIcon: {
    paddingLeft: 19
  },

  headContentTitle: {
    marginRight: 4
  },

  headContentIcon: {
    marginRight: 4,
    flex: '0 0 auto',
    alignSelf: 'center',
    marginLeft: -19
  },

  headContentMisc: {
    marginRight: 4
  },

  opener: {
    cursor: 'pointer',
    marginLeft: -10,
    paddingRight: 3,
    position: 'absolute',
    top: 0,
    borderColor: 'inherit'
  },

  body: {
    overflow: 'hidden'
  },

  collapsedArrow: {
    borderColor: 'transparent',
    borderLeftColor: 'inherit',
    borderStyle: 'solid',
    borderWidth: '4px 0 4px 7px',
    display: 'inline-block',
    marginLeft: 1,
    verticalAlign: 0
  },

  expandedArrow: {
    borderColor: 'transparent',
    borderTopColor: 'inherit',
    borderStyle: 'solid',
    borderWidth: '7px 4px 0 4px',
    display: 'inline-block',
    marginTop: 1,
    verticalAlign: 0
  }
});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /* eslint-disable react/no-array-index-key */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _ChangeDataViewerPopover = __webpack_require__(184);

var _ChangeDataViewerPopover2 = _interopRequireDefault(_ChangeDataViewerPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LObjDiff = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(LObjDiff, _React$PureComponent);

  function LObjDiff() {
    (0, _classCallCheck3.default)(this, LObjDiff);
    return (0, _possibleConstructorReturn3.default)(this, (LObjDiff.__proto__ || (0, _getPrototypeOf2.default)(LObjDiff)).apply(this, arguments));
  }

  (0, _createClass3.default)(LObjDiff, [{
    key: 'getDiff',
    value: function getDiff() {
      var change = this.props.change;

      switch (change.type) {
        case 'add':
          return {
            added: [{ name: change.name, value: change.newValue, path: ['newValue'] }]
          };
        case 'delete':
          return {
            removed: [{ name: change.name, value: change.oldValue, path: ['oldValue'] }]
          };
        case 'update':
          return {
            added: [{ name: change.name, value: change.newValue, path: ['newValue'] }],
            removed: [{ name: change.name, value: change.oldValue, path: ['oldValue'] }]
          };
        case 'splice':
          return {
            added: (change.added || []).map(function (value, i) {
              return {
                name: change.index + i,
                value: value,
                path: ['added', i]
              };
            }),
            removed: (change.removed || []).map(function (value, i) {
              return {
                name: change.index + i,
                value: value,
                path: ['removed', i]
              };
            })
          };
        default:
          return { added: [], removed: [] };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _getDiff = this.getDiff(),
          _getDiff$added = _getDiff.added,
          added = _getDiff$added === undefined ? [] : _getDiff$added,
          _getDiff$removed = _getDiff.removed,
          removed = _getDiff$removed === undefined ? [] : _getDiff$removed;

      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.container) },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.innerContainer) },
          removed.map(function (_ref, i) {
            var name = _ref.name,
                path = _ref.path;
            return _react2.default.createElement(
              'div',
              { className: (0, _aphrodite.css)(styles.diffRow, styles.removed), key: i },
              _react2.default.createElement(
                'div',
                { className: (0, _aphrodite.css)(styles.propName, styles.propNameRemoved) },
                name
              ),
              _react2.default.createElement(
                'div',
                { className: (0, _aphrodite.css)(styles.propValue, styles.propValueRemoved) },
                _react2.default.createElement(_ChangeDataViewerPopover2.default, {
                  path: _this2.props.path.concat(path),
                  getValueByPath: _this2.props.getValueByPath,
                  inspect: _this2.props.inspect,
                  stopInspecting: _this2.props.stopInspecting,
                  showMenu: _this2.props.showMenu
                })
              )
            );
          }),
          added.map(function (_ref2, i) {
            var name = _ref2.name,
                path = _ref2.path;
            return _react2.default.createElement(
              'div',
              { className: (0, _aphrodite.css)(styles.diffRow, styles.added), key: i },
              _react2.default.createElement(
                'div',
                { className: (0, _aphrodite.css)(styles.propName, styles.propNameAdded) },
                name
              ),
              _react2.default.createElement(
                'div',
                { className: (0, _aphrodite.css)(styles.propValue, styles.propValueAdded) },
                _react2.default.createElement(_ChangeDataViewerPopover2.default, {
                  path: _this2.props.path.concat(path),
                  getValueByPath: _this2.props.getValueByPath,
                  inspect: _this2.props.inspect,
                  stopInspecting: _this2.props.stopInspecting,
                  showMenu: _this2.props.showMenu
                })
              )
            );
          })
        )
      );
    }
  }]);
  return LObjDiff;
}(_react2.default.PureComponent), _class.propTypes = {
  change: _propTypes2.default.object.isRequired,
  path: _propTypes2.default.array.isRequired,
  getValueByPath: _propTypes2.default.func,
  inspect: _propTypes2.default.func,
  stopInspecting: _propTypes2.default.func,
  showMenu: _propTypes2.default.func
}, _temp);
exports.default = LObjDiff;


var styles = _aphrodite.StyleSheet.create({
  container: {
    fontFamily: 'const(--font-family-monospace)',
    width: '100%',
    maxHeight: 270,
    overflow: 'auto'
  },
  innerContainer: {
    display: 'table'
  },
  title: {},
  diffRow: {
    display: 'table-row'
  },
  propName: {
    display: 'table-cell',
    minWidth: 70,
    maxWidth: 180,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: 5
  },
  propNameRemoved: {
    backgroundColor: 'rgba(245, 0, 30, 0.13)'
  },
  propNameAdded: {
    backgroundColor: 'rgba(0, 246, 54, 0.18)'
  },
  propValue: {
    padding: '5px 5px 5px 20px',
    flex: '1 1 auto',
    display: 'table-cell',
    position: 'relative',
    ':before': {
      position: 'absolute',
      left: 5,
      flex: '0 0 auto'
    }
  },
  propValueRemoved: {
    backgroundColor: 'rgba(245, 0, 30, 0.07)',
    ':before': {
      content: '"-"'
    }
  },
  propValueAdded: {
    backgroundColor: 'rgba(0, 246, 54, 0.09)',
    ':before': {
      content: '"+"'
    }
  }
});

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flash;
function flash(node, flashColor, baseColor, duration) {
  node.style.transition = 'none';
  node.style.backgroundColor = flashColor;
  // force recalc
  void node.offsetTop; // eslint-disable-line no-void
  node.style.transition = 'background-color ' + duration + 's ease';
  node.style.backgroundColor = baseColor;
}

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(73);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 291 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = __webpack_require__(115);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /* eslint-disable react/no-array-index-key */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _Bridge = __webpack_require__(51);

var _Spinner = __webpack_require__(294);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSparseArrayHole = function renderSparseArrayHole(count, key) {
  return _react2.default.createElement(
    'li',
    { key: key },
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.head) },
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.sparseArrayHole) },
        'undefined \xD7',
        count
      )
    )
  );
};

var DataView = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(DataView, _React$Component);

  function DataView() {
    (0, _classCallCheck3.default)(this, DataView);
    return (0, _possibleConstructorReturn3.default)(this, (DataView.__proto__ || (0, _getPrototypeOf2.default)(DataView)).apply(this, arguments));
  }

  (0, _createClass3.default)(DataView, [{
    key: 'renderItem',
    value: function renderItem(name, key, editable, path) {
      return _react2.default.createElement(this.props.ChildDataItem, {
        key: key,
        name: name,
        path: path || this.props.path.concat([name]),
        startOpen: this.props.startOpen,
        getValueByPath: this.props.getValueByPath,
        inspect: this.props.inspect,
        stopInspecting: this.props.stopInspecting,
        change: this.props.change,
        showMenu: this.props.showMenu,
        editable: editable,
        ChildDataView: this.props.ChildDataView,
        ChildDataItem: this.props.ChildDataItem
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.getValueByPath(this.props.path);
      if (!value) {
        return _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.missing) },
          'null'
        );
      }
      var editable = this.props.change && value[_Bridge.symbols.editable] === true;

      var isArray = Array.isArray(value);
      var isDeptreeNode = value[_Bridge.symbols.type] === 'deptreeNode';
      var isMap = value[_Bridge.symbols.type] === 'map';
      var isSet = value[_Bridge.symbols.type] === 'set';
      var elements = [];
      if (isArray) {
        // Iterate over array, filling holes with special items
        var lastIndex = -1;
        value.forEach(function (item, i) {
          if (lastIndex < i - 1) {
            // Have we skipped over a hole?
            var holeCount = i - 1 - lastIndex;
            elements.push(renderSparseArrayHole(holeCount, i + '-hole'));
          }
          elements.push(_this2.renderItem(i, i, editable));
          lastIndex = i;
        });
        if (lastIndex < value.length - 1) {
          // Is there a hole at the end?
          var holeCount = value.length - 1 - lastIndex;
          elements.push(renderSparseArrayHole(holeCount, lastIndex + '-hole'));
        }
      } else if (isDeptreeNode) {
        value.dependencies.forEach(function (node, i) {
          elements.push(_react2.default.createElement(_this2.props.ChildDataItem, {
            key: i,
            name: i,
            path: _this2.props.path.concat(['dependencies', i]),
            startOpen: _this2.props.startOpen,
            getValueByPath: _this2.props.getValueByPath,
            inspect: _this2.props.inspect,
            stopInspecting: _this2.props.stopInspecting,
            change: _this2.props.change,
            showMenu: _this2.props.showMenu,
            editable: editable,
            ChildDataView: _this2.props.ChildDataView,
            ChildDataItem: _this2.props.ChildDataItem
          }));
        });
      } else if (isMap) {
        if (value[_Bridge.symbols.entries]) {
          value[_Bridge.symbols.entries].forEach(function (_ref, i) {
            var _ref2 = (0, _slicedToArray3.default)(_ref, 1),
                key = _ref2[0];

            return elements.push(_this2.renderItem(key, key, editable, _this2.props.path.concat([_Bridge.symbols.entries, i, 1])));
          });
        }
      } else if (isSet) {
        if (value[_Bridge.symbols.entries]) {
          value[_Bridge.symbols.entries].forEach(function (_ref3, i) {
            var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),
                key = _ref4[0];

            return elements.push(_this2.renderItem(key, key, editable, _this2.props.path.concat([_Bridge.symbols.entries, i, 1])));
          });
        }
      } else {
        // Iterate over a regular object
        var names = (0, _keys2.default)(value).filter(function (n) {
          return n[0] !== '@' || n[1] !== '@';
        });
        if (this.props.hidenKeysRegex) {
          names = names.filter(function (n) {
            return !_this2.props.hidenKeysRegex.test(n);
          });
        }
        if (!this.props.noSort) {
          names.sort(alphanumericSort);
        }
        names.forEach(function (name) {
          return elements.push(_this2.renderItem(name, name, editable));
        });
      }

      if (!elements.length) {
        if (value[_Bridge.symbols.inspected] === false) return _react2.default.createElement(_Spinner2.default, null);
        return _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.empty) },
          function () {
            switch (true) {
              case isArray:
                return 'Empty array';
              case isDeptreeNode:
                return 'No dependencies';
              case isMap:
                return 'Empty map';
              default:
                return 'Empty object';
            }
          }()
        );
      }

      return _react2.default.createElement(
        'ul',
        { className: (0, _aphrodite.css)(styles.container) + ' ' + this.props.className },
        elements
      );
    }
  }]);
  return DataView;
}(_react2.default.Component), _class.propTypes = {
  startOpen: _propTypes2.default.bool,
  change: _propTypes2.default.func,
  className: _propTypes2.default.string,
  path: _propTypes2.default.array.isRequired,
  getValueByPath: _propTypes2.default.func,
  inspect: _propTypes2.default.func,
  stopInspecting: _propTypes2.default.func,
  showMenu: _propTypes2.default.func,
  noSort: _propTypes2.default.func,
  hidenKeysRegex: _propTypes2.default.instanceOf(RegExp),
  ChildDataView: _propTypes2.default.func.isRequired,
  ChildDataItem: _propTypes2.default.func.isRequired
}, _temp);
exports.default = DataView;


function alphanumericSort(a, b) {
  if ('' + +a === a) {
    if ('' + +b !== b) {
      return -1;
    }
    return +a < +b ? -1 : 1;
  }
  return a < b ? -1 : 1;
}

var styles = _aphrodite.StyleSheet.create({
  container: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    marginLeft: '0.75rem',
    fontFamily: 'const(--font-family-monospace)',
    fontSize: 12
  },

  head: {
    display: 'flex',
    position: 'relative'
  },

  empty: {
    marginLeft: '0.75rem',
    padding: '0 5px',
    color: 'const(--dataview-preview-value-empty)',
    fontStyle: 'italic'
  },

  missing: {
    fontWeight: 'bold',
    marginLeft: '0.75rem',
    padding: '2px 5px',
    color: 'const(--dataview-preview-value-missing)'
  }
});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.spinner) });
};

var styles = _aphrodite.StyleSheet.create({
  spinner: {
    borderRadius: '50%',
    width: 22,
    height: 22,
    margin: '10px auto',
    position: 'relative',
    borderTop: '2px solid var(--primary-color)',
    borderRight: '2px solid var(--primary-color)',
    borderBottom: '2px solid transparent',
    borderLeft: '2px solid transparent',
    transform: 'translateZ(0)',
    animationName: [{
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }],
    animationDuration: '500ms',
    overflow: 'hidden',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _PreviewValue = __webpack_require__(119);

var _PreviewValue2 = _interopRequireDefault(_PreviewValue);

var _Bridge = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var truncate = function truncate(str) {
  return str.length > 40 ? str.slice(0, 40) + '\u2026' : str;
};

var DataItem = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(DataItem, _React$Component);

  function DataItem(props) {
    (0, _classCallCheck3.default)(this, DataItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataItem.__proto__ || (0, _getPrototypeOf2.default)(DataItem)).call(this, props));

    _this.toggleOpen = function () {
      if (_this.state.open) {
        _this.setState({ open: false });
        if (_this.value && _this.value[_Bridge.symbols.inspected] === true) {
          _this.props.stopInspecting(_this.props.path);
        }
      } else {
        _this.setState({ open: true });
        if (_this.value && _this.value[_Bridge.symbols.inspected] === false) {
          _this.props.inspect(_this.props.path);
        }
      }
    };

    _this.toggleBooleanValue = function (e) {
      _this.props.change(_this.props.path, e.target.checked);
    };

    _this.handleContextMenu = function (e) {
      if (typeof _this.props.showMenu === 'function') {
        _this.props.showMenu(e, _this.value, _this.props.path);
      }
    };

    _this.state = { open: Boolean(_this.props.startOpen) };
    return _this;
  }

  (0, _createClass3.default)(DataItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.value = this.props.getValueByPath(this.props.path);
      if (this.state.open && this.value && this.value[_Bridge.symbols.inspected] === false) {
        this.setState({ open: false });
      } else if (!this.state.open && this.value && this.value[_Bridge.symbols.inspected] === true) {
        this.setState({ open: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.value = nextProps.getValueByPath(nextProps.path);
      if (this.state.open && this.value && this.value[_Bridge.symbols.inspected] === false) {
        this.setState({ open: false });
      } else if (!this.state.open && this.value && this.value[_Bridge.symbols.inspected] === true) {
        this.setState({ open: true });
      }
    }
  }, {
    key: 'isSimple',
    value: function isSimple() {
      var value = this.value;

      var otype = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
      return value instanceof Date || otype === 'number' || otype === 'string' || value === null || value === undefined || otype === 'boolean';
    }
  }, {
    key: 'isDeptreeNode',
    value: function isDeptreeNode() {
      var value = this.value;

      return value && value[_Bridge.symbols.type] === 'deptreeNode';
    }
  }, {
    key: 'renderOpener',
    value: function renderOpener() {
      if (this.isSimple()) {
        if (typeof this.value === 'boolean' && this.props.editable) {
          return _react2.default.createElement('input', {
            checked: this.value,
            onChange: this.toggleBooleanValue,
            className: (0, _aphrodite.css)(styles.toggler),
            type: 'checkbox'
          });
        }
        return null;
      }
      if (this.isDeptreeNode() && this.value.dependencies.length === 0) return null;
      return _react2.default.createElement(
        'div',
        { onClick: this.toggleOpen, className: (0, _aphrodite.css)(styles.opener) },
        this.state.open ? _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.expandedArrow) }) : _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.collapsedArrow) })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.value;

      var complex = !this.isSimple();

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.head) },
          this.renderOpener(),
          _react2.default.createElement(
            'div',
            {
              className: (0, _aphrodite.css)([styles.name, complex && styles.nameComplex]),
              onClick: this.toggleOpen
            },
            truncate(this.props.name),
            ':'
          ),
          _react2.default.createElement(
            'div',
            { onContextMenu: this.handleContextMenu, className: (0, _aphrodite.css)(styles.preview) },
            _react2.default.createElement(_PreviewValue2.default, {
              editable: this.props.editable && this.isSimple(),
              path: this.props.path,
              data: value,
              change: this.props.change
            })
          )
        ),
        complex && this.state.open && _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.children) },
          _react2.default.createElement(this.props.ChildDataView, {
            value: value,
            path: this.props.path,
            getValueByPath: this.props.getValueByPath,
            inspect: this.props.inspect,
            stopInspecting: this.props.stopInspecting,
            change: this.props.change,
            showMenu: this.props.showMenu,
            ChildDataView: this.props.ChildDataView,
            ChildDataItem: this.props.ChildDataItem
          })
        )
      );
    }
  }]);
  return DataItem;
}(_react2.default.Component), _class.propTypes = {
  startOpen: _propTypes2.default.bool,
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  path: _propTypes2.default.array.isRequired,
  editable: _propTypes2.default.bool,
  getValueByPath: _propTypes2.default.func.isRequired,
  change: _propTypes2.default.func,
  inspect: _propTypes2.default.func,
  stopInspecting: _propTypes2.default.func,
  showMenu: _propTypes2.default.func,
  ChildDataView: _propTypes2.default.func.isRequired,
  ChildDataItem: _propTypes2.default.func.isRequired
}, _temp);
exports.default = DataItem;


var styles = _aphrodite.StyleSheet.create({
  children: {},

  opener: {
    cursor: 'pointer',
    marginLeft: -10,
    paddingRight: 3,
    position: 'absolute',
    top: 4
  },

  toggler: {
    left: -15,
    position: 'absolute',
    top: -1
  },

  head: {
    display: 'flex',
    position: 'relative'
  },

  value: {},

  name: {
    color: 'var(--dataview-preview-key)',
    margin: '2px 3px'
  },

  nameComplex: {
    cursor: 'pointer'
  },
  preview: {
    display: 'flex',
    margin: '2px 3px',
    whiteSpace: 'pre',
    wordBreak: 'break-word',
    flex: 1,
    color: 'var(--dataview-preview-value)',
    cursor: 'default'
  },

  collapsedArrow: {
    borderColor: 'transparent transparent transparent var(--dataview-arrow)',
    borderStyle: 'solid',
    borderWidth: '4px 0 4px 7px',
    display: 'inline-block',
    marginLeft: 1,
    verticalAlign: 'top'
  },

  expandedArrow: {
    borderColor: 'var(--dataview-arrow) transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '7px 4px 0 4px',
    display: 'inline-block',
    marginTop: 1,
    verticalAlign: 'top'
  }
});

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LObjDiffPreview = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(LObjDiffPreview, _React$PureComponent);

  function LObjDiffPreview() {
    (0, _classCallCheck3.default)(this, LObjDiffPreview);
    return (0, _possibleConstructorReturn3.default)(this, (LObjDiffPreview.__proto__ || (0, _getPrototypeOf2.default)(LObjDiffPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(LObjDiffPreview, [{
    key: 'getStats',
    value: function getStats() {
      var change = this.props.change;

      switch (change.type) {
        case 'add':
          return { addedCount: 1, removedCount: 0 };
        case 'delete':
          return { addedCount: 0, removedCount: 1 };
        case 'update':
          return { addedCount: 1, removedCount: 1 };
        case 'splice':
          return { addedCount: change.addedCount, removedCount: change.removedCount };
        default:
          return { addedCount: 0, removedCount: 0 };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getStats = this.getStats(),
          addedCount = _getStats.addedCount,
          removedCount = _getStats.removedCount;

      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.container) },
        addedCount > 0 && _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.added) },
          '+',
          addedCount
        ),
        removedCount > 0 && _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.removed) },
          '\u2212',
          removedCount
        )
      );
    }
  }]);
  return LObjDiffPreview;
}(_react2.default.PureComponent), _class.propTypes = {
  change: _propTypes2.default.object.isRequired
}, _temp);
exports.default = LObjDiffPreview;


var styles = _aphrodite.StyleSheet.create({
  container: {
    display: 'inline-flex',
    padding: '1px 1px 1px 6px',
    cursor: 'pointer',
    opacity: 0.9,
    userSelect: 'none',
    fontSize: 11,
    borderRadius: 3,
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },
  added: {
    marginRight: 5,
    color: '#28a745',
    fontWeight: 500
  },
  removed: {
    marginRight: 5,
    color: '#cb2431',
    fontWeight: 500
  }
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconError = exports.IconComputed = exports.IconScheduledReaction = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconScheduledReaction = exports.IconScheduledReaction = function IconScheduledReaction(props) {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '15',
      height: '15',
      viewBox: '0 0 15 15',
      className: props.className
    },
    _react2.default.createElement(
      'g',
      { fill: 'none', stroke: '#D57273', strokeMiterlimit: '10' },
      _react2.default.createElement('path', { d: 'M12.697 10.5a6 6 0 1 1 .115-5.792' }),
      _react2.default.createElement('path', { d: 'M7.5 7.5V3M7.5 7.5L10 10' })
    ),
    _react2.default.createElement(
      'g',
      { fill: '#D57273' },
      _react2.default.createElement('path', { d: 'M10.618 4.743L13.5 7.5l.947-3.874z' }),
      _react2.default.createElement('circle', { cx: '7.5', cy: '7.5', r: '.75' })
    )
  );
};

IconScheduledReaction.propTypes = _propTypes2.default.string;

var IconComputed = exports.IconComputed = function IconComputed(props) {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '15',
      height: '15',
      viewBox: '0 0 15 15',
      className: props.className
    },
    _react2.default.createElement(
      'g',
      { fill: '#7B56A3' },
      _react2.default.createElement('circle', { cx: '3.75', cy: '11.83', r: '2' }),
      _react2.default.createElement('circle', { cx: '3.75', cy: '3.17', r: '2' }),
      _react2.default.createElement('circle', { cx: '11.25', cy: '7.5', r: '2' })
    ),
    _react2.default.createElement(
      'g',
      { fill: 'none', stroke: '#7B56A3', strokeMiterlimit: '10' },
      _react2.default.createElement('path', { d: 'M6.25 7.5l-2.5 4.33' }),
      _react2.default.createElement('path', { d: 'M6.25 7.5l-2.5-4.33' }),
      _react2.default.createElement('path', { d: 'M6.25 7.5h5' })
    )
  );
};

IconComputed.propTypes = _propTypes2.default.string;

var IconError = exports.IconError = function IconError(props) {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '15',
      height: '15',
      viewBox: '0 0 15 15',
      className: props.className
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: '#E41E26',
      strokeLinejoin: 'round',
      strokeMiterlimit: '10',
      d: 'M1.414 13.5L7.501 2l6.085 11.5z'
    }),
    _react2.default.createElement(
      'g',
      { fill: '#E41E26' },
      _react2.default.createElement('path', { d: 'M6.848 6h1.304v2.589L7.99 10h-.97l-.172-1.411z' }),
      _react2.default.createElement('circle', { cx: '7.5', cy: '11.5', r: '.875' })
    )
  );
};

IconError.propTypes = _propTypes2.default.string;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputSearch = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(InputSearch, _React$PureComponent);

  function InputSearch() {
    (0, _classCallCheck3.default)(this, InputSearch);
    return (0, _possibleConstructorReturn3.default)(this, (InputSearch.__proto__ || (0, _getPrototypeOf2.default)(InputSearch)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputSearch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        type: 'search',
        value: this.props.searchText,
        onChange: this.props.changeSearch,
        placeholder: 'Search (string/regex)',
        style: {
          border: '1px solid rgba(0, 0, 0, 0.12)',
          padding: 3,
          borderRadius: 4,
          width: 133,
          marginLeft: 10
        }
      });
    }
  }]);
  return InputSearch;
}(_react2.default.PureComponent), _class.propTypes = {
  searchText: _propTypes2.default.string.isRequired,
  changeSearch: _propTypes2.default.func.isRequired
}, _temp);
exports.default = InputSearch;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _Player = __webpack_require__(300);

var _Player2 = _interopRequireDefault(_Player);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _SecondaryPanel = __webpack_require__(170);

var _SecondaryPanel2 = _interopRequireDefault(_SecondaryPanel);

var _ButtonRecord = __webpack_require__(171);

var _ButtonRecord2 = _interopRequireDefault(_ButtonRecord);

var _ButtonClear = __webpack_require__(173);

var _ButtonClear2 = _interopRequireDefault(_ButtonClear);

var _SplitPane = __webpack_require__(301);

var _SplitPane2 = _interopRequireDefault(_SplitPane);

var _TabsMenu = __webpack_require__(302);

var _TabsMenu2 = _interopRequireDefault(_TabsMenu);

var _MstLog = __webpack_require__(303);

var _MstLog2 = _interopRequireDefault(_MstLog);

var _LogItemExplorer = __webpack_require__(306);

var _LogItemExplorer2 = _interopRequireDefault(_LogItemExplorer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabMST = (_dec = (0, _injectStores2.default)({
  subscribe: {
    capabilitiesStore: ['mstFound'],
    mstLoggerStore: ['mstLogItems', 'mstLogEnabled', 'activeRootId', 'activeLogItemId', 'mstRootsUpdated']
  },
  injectProps: function injectProps(_ref) {
    var mstLoggerStore = _ref.mstLoggerStore,
        capabilitiesStore = _ref.capabilitiesStore;

    var itemData = mstLoggerStore.itemsDataByRootId[mstLoggerStore.activeRootId];
    return {
      mstFound: capabilitiesStore.mstFound,
      length: itemData ? itemData.logItemsIds.length : 0,
      activeLogItemIndex: itemData && itemData.activeLogItemIndex,
      rootsIds: (0, _keys2.default)(mstLoggerStore.itemsDataByRootId),
      rootNamesById: mstLoggerStore.rootNamesById,
      mstLogEnabled: mstLoggerStore.mstLogEnabled,
      activeRootId: mstLoggerStore.activeRootId,
      toggleMstLogging: function toggleMstLogging() {
        mstLoggerStore.toggleMstLogging();
      },
      commitAll: function commitAll() {
        mstLoggerStore.commitAll();
      },
      activateRootId: function activateRootId(id) {
        mstLoggerStore.activateRootId(id);
      },
      activateLogItemIndex: function activateLogItemIndex(index) {
        mstLoggerStore.activateLogItemId(itemData.logItemsIds[index]);
      }
    };
  }
}), _dec(_class = (_temp2 = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(TabMST, _React$PureComponent);

  function TabMST() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabMST);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = TabMST.__proto__ || (0, _getPrototypeOf2.default)(TabMST)).call.apply(_ref2, [this].concat(args))), _this), _this.handleKeyDown = function (e) {
      switch (e.keyCode) {
        case 37:
        case 38:
          {
            // left arrow
            // up arrow
            if (_this.props.activeLogItemIndex > 0) {
              e.preventDefault();
              _this.props.activateLogItemIndex(_this.props.activeLogItemIndex - 1);
            }
            break;
          }
        case 39:
        case 40:
          {
            // right arrow
            // down arrow
            if (_this.props.activeLogItemIndex < _this.props.length - 1) {
              e.preventDefault();
              _this.props.activateLogItemIndex(_this.props.activeLogItemIndex + 1);
            }
            break;
          }
        default:
          break;
      }
    }, _this.leftRenderer = function () {
      return _react2.default.createElement(_MstLog2.default, null);
    }, _this.rightRenderer = function () {
      return _react2.default.createElement(_LogItemExplorer2.default, null);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TabMST, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.mstFound) return null;

      if (this.props.rootsIds.length === 0) {
        return _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.emptyState) },
          'No roots'
        );
      }

      var tabs = this.props.rootsIds.map(function (id) {
        return {
          id: id,
          title: _this2.props.rootNamesById[id] || String(id)
        };
      });

      /* eslint-disable react/no-array-index-key */
      return _react2.default.createElement(
        'div',
        {
          className: (0, _aphrodite.css)(styles.tabmst),
          ref: function ref(el) {
            _this2.containerEl = el;
          }
        },
        _react2.default.createElement(
          _SecondaryPanel2.default,
          null,
          _react2.default.createElement(_ButtonRecord2.default, {
            active: this.props.mstLogEnabled,
            onClick: this.props.toggleMstLogging,
            showTipStartRecoding: !this.props.mstLogEnabled && this.props.length === 0
          }),
          _react2.default.createElement(_ButtonClear2.default, { onClick: this.props.commitAll })
        ),
        _react2.default.createElement(_TabsMenu2.default, {
          tabs: tabs,
          onChange: this.props.activateRootId,
          currentTabId: this.props.activeRootId
        }),
        _react2.default.createElement(_SplitPane2.default, {
          initialWidth: 10,
          initialHeight: 10,
          left: this.leftRenderer,
          right: this.rightRenderer,
          isVertical: false
        }),
        _react2.default.createElement(_Player2.default, {
          currentIndex: this.props.activeLogItemIndex,
          length: this.props.length,
          onIndexChange: this.props.activateLogItemIndex
        })
      );
    }
  }]);
  return TabMST;
}(_react2.default.PureComponent), _class2.propTypes = {
  mstFound: _propTypes2.default.bool,
  mstLogEnabled: _propTypes2.default.bool,
  length: _propTypes2.default.number.isRequired,
  rootsIds: _propTypes2.default.array.isRequired,
  rootNamesById: _propTypes2.default.object.isRequired,
  activeRootId: _propTypes2.default.any,
  activeLogItemIndex: _propTypes2.default.any,
  toggleMstLogging: _propTypes2.default.func.isRequired,
  activateRootId: _propTypes2.default.func.isRequired,
  activateLogItemIndex: _propTypes2.default.func.isRequired,
  commitAll: _propTypes2.default.func.isRequired
}, _temp2)) || _class);
exports.default = TabMST;


var styles = _aphrodite.StyleSheet.create({
  emptyState: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    color: '#777',
    fontWeight: 'bold'
  },
  tabmst: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column'
  }
});

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _Draggable = __webpack_require__(187);

var _Draggable2 = _interopRequireDefault(_Draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(Player, _React$Component);

  function Player() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Player.__proto__ || (0, _getPrototypeOf2.default)(Player)).call.apply(_ref, [this].concat(args))), _this), _this.handlePrev = function () {
      _this.props.onIndexChange(_this.props.currentIndex - 1);
    }, _this.handleNext = function () {
      _this.props.onIndexChange(_this.props.currentIndex + 1);
    }, _this.handleDraggableStart = function () {}, _this.handleDraggableMove = function (x) {
      var rect = _this.seekBar.getBoundingClientRect();
      var percent = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
      var targetIndex = Math.round((_this.props.length - 1) * percent);
      if (targetIndex !== _this.props.currentIndex) {
        _this.props.onIndexChange(targetIndex);
      }
    }, _this.handleDraggableStop = function () {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Player, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentIndex = _props.currentIndex,
          length = _props.length;

      var percent = length < 2 ? 100 : currentIndex / (length - 1) * 100;
      var prevDisabled = currentIndex === 0 || length < 2;
      var nextDisabled = currentIndex === length - 1;
      var disabled = prevDisabled && nextDisabled;
      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.player) },
        _react2.default.createElement(
          'span',
          {
            className: (0, _aphrodite.css)(styles.lrButton, prevDisabled && styles.lrButtonDisabled),
            onClick: this.handlePrev
          },
          _react2.default.createElement(IconLeft, null)
        ),
        _react2.default.createElement(
          'span',
          { className: (0, _aphrodite.css)(styles.progress) },
          currentIndex + 1,
          ' / ',
          length
        ),
        _react2.default.createElement(
          'span',
          {
            className: (0, _aphrodite.css)(styles.lrButton, nextDisabled && styles.lrButtonDisabled),
            onClick: this.handleNext
          },
          _react2.default.createElement(IconRight, null)
        ),
        _react2.default.createElement(
          'span',
          {
            ref: function ref(el) {
              _this2.seekBar = el;
            },
            className: (0, _aphrodite.css)(styles.seekBar, disabled && styles.seekBarDisabled)
          },
          _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.filledBar), style: { width: percent + '%' } }),
          _react2.default.createElement(
            _Draggable2.default,
            {
              onStart: this.handleDraggableStart,
              onMove: this.handleDraggableMove,
              onStop: this.handleDraggableStop
            },
            _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.handle), style: { left: percent + '%' } })
          )
        )
      );
    }
  }]);
  return Player;
}(_react2.default.Component), _class.propTypes = {
  length: _propTypes2.default.number.isRequired,
  currentIndex: _propTypes2.default.number.isRequired,
  onIndexChange: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = Player;


var IconLeft = function IconLeft() {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '13',
      viewBox: '0 0 12 13'
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: '#6E6E6E',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeMiterlimit: '10',
      d: 'M8.5 1.5l-5 5 5 5'
    })
  );
};

var IconRight = function IconRight() {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '13',
      viewBox: '0 0 12 13'
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: '#6E6E6E',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeMiterlimit: '10',
      d: 'M3.5 1.5l5 5-5 5'
    })
  );
};

var styles = _aphrodite.StyleSheet.create({
  player: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    backgroundImage: 'linear-gradient(to top, transparent, rgba(0, 0, 0, 0.05))',
    userSelect: 'none',
    cursor: 'default'
  },
  lrButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    marginRight: 10
  },
  lrButtonDisabled: {
    pointerEvents: 'none',
    filter: 'grayscale(1)',
    opacity: 0.7
  },
  progress: {
    flex: '0 0 auto',
    fontSize: 11,
    marginRight: 10,
    fontWeight: 100
  },
  seekBar: {
    flex: '1 1 auto',
    height: 2,
    backgroundColor: '#969696',
    position: 'relative'
  },
  seekBarDisabled: {
    pointerEvents: 'none',
    filter: 'grayscale(1)',
    opacity: 0.7
  },
  filledBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 2,
    backgroundColor: 'var(--primary-color)'
  },
  handle: {
    width: 20,
    height: 20,
    margin: -10,
    position: 'absolute',
    top: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':after': {
      content: '""',
      width: 12,
      height: 12,
      backgroundColor: 'var(--primary-color)',
      borderRadius: '50%'
    },
    ':hover': {
      ':after': {
        width: 14,
        height: 14
      }
    },
    ':active': {
      ':after': {
        width: 14,
        height: 14
      }
    }
  }
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _class, _temp; /* eslint-disable react/no-unused-state */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(11);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Draggable = __webpack_require__(187);

var _Draggable2 = _interopRequireDefault(_Draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shouldUseVerticalLayout(el) {
  return el.offsetWidth < IS_VERTICAL_BREAKPOINT;
}

var IS_VERTICAL_BREAKPOINT = 400;
var IGONORE_EVENT = (0, _symbol2.default)('IGONORE_EVENT');

var dispatchResizeEvent = function dispatchResizeEvent() {
  var event = document.createEvent('HTMLEvents');
  event[IGONORE_EVENT] = true;
  event.initEvent('resize', true, false);
  window.dispatchEvent(event);
};

var SplitPane = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(SplitPane, _React$Component);

  function SplitPane(props) {
    (0, _classCallCheck3.default)(this, SplitPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SplitPane.__proto__ || (0, _getPrototypeOf2.default)(SplitPane)).call(this, props));

    _this.handleResize = function (e) {
      if (e[IGONORE_EVENT]) return;
      if (!_this.resizeTimeout) {
        _this.resizeTimeout = setTimeout(_this.handleResizeTimeout, 50);
      }
    };

    _this.handleResizeTimeout = function () {
      _this.resizeTimeout = null;

      _this.setState({
        isVertical: shouldUseVerticalLayout(_this.el)
      }, dispatchResizeEvent);
    };

    _this.handleDraggableStart = function () {
      return _this.setState({ moving: true });
    };

    _this.handleDraggableMove = function (x, y) {
      var rect = _this.el.getBoundingClientRect();

      _this.setState(function (prevState) {
        return {
          width: prevState.isVertical ? prevState.width : Math.floor(rect.left + (rect.width - x)),
          height: !prevState.isVertical ? prevState.height : Math.floor(rect.top + (rect.height - y))
        };
      });
    };

    _this.handleDraggableStop = function () {
      return _this.setState({ moving: false }, dispatchResizeEvent);
    };

    _this.state = {
      moving: false,
      width: props.initialWidth,
      height: props.initialHeight
    };
    return _this;
  }

  (0, _createClass3.default)(SplitPane, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        // for css to be injected
        if (_this2.el) {
          var isVertical = shouldUseVerticalLayout(_this2.el);

          var width = Math.floor(_this2.el.offsetWidth * (isVertical ? 0.6 : 0.5));

          window.addEventListener('resize', _this2.handleResize, false);

          _this2.setState({
            width: Math.max(250, width),
            height: Math.floor(_this2.el.offsetHeight * 0.3),
            isVertical: isVertical
          }, dispatchResizeEvent);
        }
      }, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      clearTimeout(this.resizeTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isVertical = this.state.isVertical;
      var _state = this.state,
          height = _state.height,
          width = _state.width;


      return _react2.default.createElement(
        'div',
        {
          ref: function ref(el) {
            _this3.el = el;
          },
          className: (0, _aphrodite.css)(styles.container, isVertical ? styles.containerVertical : styles.containerHorizontal)
        },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.leftPaneContent) },
          this.props.left()
        ),
        _react2.default.createElement(
          'div',
          {
            style: isVertical ? { height: height } : { width: width },
            className: (0, _aphrodite.css)(styles.container, isVertical ? styles.containerVertical : styles.containerHorizontal, styles.rightPane)
          },
          _react2.default.createElement(
            _Draggable2.default,
            {
              className: (0, _aphrodite.css)(styles.dragger, isVertical ? styles.draggerVertical : styles.draggerHorizontal),
              onStart: this.handleDraggableStart,
              onMove: this.handleDraggableMove,
              onStop: this.handleDraggableStop
            },
            _react2.default.createElement('div', {
              className: (0, _aphrodite.css)(styles.draggerInner, isVertical ? styles.draggerInnerVert : styles.draggerInnerHor)
            })
          ),
          _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.rightPaneContent) },
            this.props.right()
          )
        )
      );
    }
  }]);
  return SplitPane;
}(_react2.default.Component), _class.propTypes = {
  initialWidth: _propTypes2.default.number.isRequired,
  initialHeight: _propTypes2.default.number.isRequired,
  left: _propTypes2.default.func.isRequired,
  right: _propTypes2.default.func.isRequired
}, _temp);
exports.default = SplitPane;


var styles = _aphrodite.StyleSheet.create({
  container: {
    display: 'flex',
    minWidth: 0,
    flex: 1
  },
  containerVertical: {
    flexDirection: 'column'
  },
  containerHorizontal: {
    flexDirection: 'row'
  },
  rightPane: {
    flex: 'initial',
    minHeight: 120,
    minWidth: 150
  },
  rightPaneContent: {
    display: 'flex',
    width: '100%'
  },
  leftPaneContent: {
    display: 'flex',
    minWidth: '30%',
    minHeight: '30%',
    flex: 1,
    overflow: 'hidden'
  },
  dragger: {
    position: 'relative',
    zIndex: 1
  },
  draggerVertical: {
    padding: '0.25rem 0',
    margin: '-0.25rem 0',
    cursor: 'ns-resize'
  },
  draggerHorizontal: {
    padding: '0 0.25rem',
    margin: '0 -0.25rem',
    cursor: 'ew-resize'
  },
  draggerInner: {
    backgroundColor: 'var(--split-dragger-color)',
    opacity: 0.4
  },
  draggerInnerVert: {
    height: '1px',
    width: '100%'
  },
  draggerInnerHor: {
    height: '100%',
    width: '1px'
  }
});

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsMenu = (_temp2 = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(TabsMenu, _React$PureComponent);

  function TabsMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabsMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabsMenu.__proto__ || (0, _getPrototypeOf2.default)(TabsMenu)).call.apply(_ref, [this].concat(args))), _this), _this.tabRenderer = function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title;
      return _react2.default.createElement(
        'div',
        {
          key: id
          // eslint-disable-next-line react/jsx-no-bind
          , onClick: function onClick() {
            return _this.props.onChange(id);
          },
          className: (0, _aphrodite.css)(styles.tab, _this.props.currentTabId === id && styles.tabActive),
          title: title
        },
        title
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TabsMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.tabs) },
        this.props.tabs.map(this.tabRenderer)
      );
    }
  }]);
  return TabsMenu;
}(_react2.default.PureComponent), _class.propTypes = {
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.any,
    title: _propTypes2.default.string
  })).isRequired,
  currentTabId: _propTypes2.default.any,
  onChange: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = TabsMenu;


var styles = _aphrodite.StyleSheet.create({
  tabs: {
    flex: '0 0 auto',
    display: 'flex',
    padding: '5px 5px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottom: '1px solid #ddd',
    cursor: 'default',
    userSelect: 'none'
  },
  tab: {
    padding: '3px 5px',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '1px 1px 0',
    fontSize: 13,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  tabActive: {
    borderColor: '#ddd',
    cursor: 'default',
    backgroundColor: '#fff'
  }
});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _List = __webpack_require__(174);

var _List2 = _interopRequireDefault(_List);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _MstLogItem = __webpack_require__(304);

var _MstLogItem2 = _interopRequireDefault(_MstLogItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_HEIGHT = 30;

var Log = (_dec = (0, _injectStores2.default)({
  subscribe: {
    mstLoggerStore: ['mstLogItems', 'activeRootId', 'selectedLogItemId', 'activeLogItemId']
  },
  injectProps: function injectProps(_ref) {
    var mstLoggerStore = _ref.mstLoggerStore;

    var itemData = mstLoggerStore.itemsDataByRootId[mstLoggerStore.activeRootId];
    return {
      logItemsIds: itemData ? itemData.logItemsIds : [],
      logItemsById: itemData ? itemData.logItemsById : [],
      selectedLogItemId: itemData && itemData.selectedLogItemId,
      activeLogItemId: itemData && itemData.activeLogItemId,
      activeRootId: mstLoggerStore.activeRootId,
      activateLogItemId: function activateLogItemId(id) {
        mstLoggerStore.activateLogItemId(id);
      },
      commitLogItemId: function commitLogItemId(id) {
        mstLoggerStore.commitLogItemId(id);
      },
      cancelLogItemId: function cancelLogItemId(id) {
        mstLoggerStore.cancelLogItemId(id);
      },
      selectLogItemId: function selectLogItemId(id) {
        mstLoggerStore.selectLogItemId(id);
      }
    };
  }
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(Log, _React$PureComponent);

  function Log(props) {
    (0, _classCallCheck3.default)(this, Log);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Log.__proto__ || (0, _getPrototypeOf2.default)(Log)).call(this, props));

    _this.handleResize = function () {
      if (_this.resizeTimeout) return;
      _this.resizeTimeout = setTimeout(function () {
        _this.updateSize();
      }, 200);
    };

    _this.handleScroll = function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;

      var autoScroll = scrollTop >= scrollHeight - clientHeight;
      if (autoScroll !== _this.state.autoScroll) {
        _this.setState({ autoScroll: autoScroll });
      }
    };

    _this.renderItem = function (_ref3) {
      var index = _ref3.index,
          style = _ref3.style,
          key = _ref3.key;

      var logItem = _this.props.logItemsById[_this.props.logItemsIds[index]];
      return _react2.default.createElement(_MstLogItem2.default, {
        style: style,
        key: key,
        logItem: logItem,
        selected: _this.props.selectedLogItemId === logItem.id,
        last: index === _this.props.logItemsIds.length - 1,
        active: _this.props.activeLogItemId === logItem.id,
        initial: index === 0,
        onSelect: _this.props.selectLogItemId,
        onCommit: _this.props.commitLogItemId,
        onCancel: _this.props.cancelLogItemId,
        onActivate: _this.props.activateLogItemId
      });
    };

    _this.state = {
      listHeight: 400,
      listWidth: 400,
      autoScroll: true
    };
    return _this;
  }

  (0, _createClass3.default)(Log, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeTimeout = setTimeout(function () {
        return _this2.updateSize();
      }, 0); // timeout for css applying
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'updateSize',
    value: function updateSize() {
      if (!this.containerEl) return;
      this.resizeTimeout = undefined;
      this.setState({
        listWidth: this.containerEl.offsetWidth,
        listHeight: this.containerEl.offsetHeight
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.activeRootId) return null;
      var padding = 5;
      var rowCount = this.props.logItemsIds.length;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _aphrodite.css)(styles.logItems),
          ref: function ref(el) {
            _this3.containerEl = el;
          }
        },
        _react2.default.createElement(_List2.default, {
          ref: function ref(list) {
            _this3.list = list;
          },
          onScroll: this.handleScroll,
          style: { width: 'auto', padding: padding, boxSizing: 'content-box' },
          containerStyle: { width: 'auto', maxWidth: 'none' },
          width: this.state.listWidth - padding * 2,
          height: this.state.listHeight - padding * 2,
          rowCount: rowCount,
          scrollToIndex: this.state.autoScroll && rowCount > 0 ? rowCount - 1 : undefined,
          rowHeight: ITEM_HEIGHT,
          overscanCount: 1,
          rowRenderer: this.renderItem
        })
      );
    }
  }]);
  return Log;
}(_react2.default.PureComponent), _class2.propTypes = {
  logItemsIds: _propTypes2.default.array.isRequired,
  logItemsById: _propTypes2.default.object.isRequired,
  activeRootId: _propTypes2.default.any,
  selectedLogItemId: _propTypes2.default.any,
  activeLogItemId: _propTypes2.default.any,
  activateLogItemId: _propTypes2.default.func.isRequired,
  cancelLogItemId: _propTypes2.default.func.isRequired,
  commitLogItemId: _propTypes2.default.func.isRequired,
  selectLogItemId: _propTypes2.default.func.isRequired
}, _temp)) || _class);
exports.default = Log;


var styles = _aphrodite.StyleSheet.create({
  logItems: {
    width: '100%'
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _pluralize = __webpack_require__(305);

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTitle = function getTitle(logItem, initial) {
  if (initial) {
    return 'Initial';
  }
  if (logItem.patches) {
    return logItem.patches.length + ' ' + (0, _pluralize2.default)(logItem.patches.length, 'patch', 'patches');
  }
  return 'Change';
};

// const tsToDate = (timestamp) => {
//   const d = new Date(timestamp);
//   const hh = `0${d.getHours()}`.slice(0, 2);
//   const mm = `0${d.getMinutes()}`.slice(0, 2);
//   const ss = `0${d.getSeconds()}`.slice(0, 2);
//   return `${hh}:${mm}:${ss}`;
// };

var MstLogItem = (_temp2 = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(MstLogItem, _React$PureComponent);

  function MstLogItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MstLogItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MstLogItem.__proto__ || (0, _getPrototypeOf2.default)(MstLogItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelect = function () {
      return _this.props.onSelect(_this.props.logItem.id);
    }, _this.handleActivate = function () {
      return _this.props.onActivate(_this.props.logItem.id);
    }, _this.handleCancel = function () {
      return _this.props.onCancel(_this.props.logItem.id);
    }, _this.handleCommit = function () {
      return _this.props.onCommit(_this.props.logItem.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MstLogItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          initial = _props.initial,
          selected = _props.selected,
          logItem = _props.logItem,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        {
          onClick: this.handleSelect,
          className: (0, _aphrodite.css)(styles.logItem, selected && styles.logItemSelected),
          style: style
        },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.title, selected && styles.titleSelected) },
          getTitle(logItem, initial)
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.rightButtons, selected && styles.rightButtonsSelected) },
          !initial && _react2.default.createElement(
            'div',
            { onClick: this.handleCommit, className: (0, _aphrodite.css)(styles.button), title: 'Commit' },
            _react2.default.createElement(CommitIcon, null)
          ),
          !initial && _react2.default.createElement(
            'div',
            { onClick: this.handleCancel, className: (0, _aphrodite.css)(styles.button), title: 'Cancel' },
            _react2.default.createElement(CancelIcon, null)
          ),
          !active && _react2.default.createElement(
            'div',
            {
              onClick: this.handleActivate,
              className: (0, _aphrodite.css)(styles.button),
              title: 'Time-travel here'
            },
            _react2.default.createElement(TravelIcon, null)
          ),
          active && _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.activeIndicator) })
        ),
        active && _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.activeIndicator) })
      );
    }
  }]);
  return MstLogItem;
}(_react2.default.PureComponent), _class.propTypes = {
  logItem: _propTypes2.default.object.isRequired,
  active: _propTypes2.default.bool,
  initial: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func.isRequired,
  onActivate: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onCommit: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object
}, _temp2);
exports.default = MstLogItem;


var TravelIcon = function TravelIcon() {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '15',
      height: '15',
      viewBox: '0 0 15 15'
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: 'var(--log-item-buttons-color)',
      strokeWidth: '1.2',
      d: 'M2.188 4.708a6 6 0 1 1 .115 5.792M7.5 7.5V3m0 4.5L10 10'
    }),
    _react2.default.createElement(
      'g',
      { fill: 'var(--log-item-buttons-color)' },
      _react2.default.createElement('path', { d: 'M.553 3.626L1.5 7.5l2.882-2.757L.553 3.626z' }),
      _react2.default.createElement('circle', { cx: '7.5', cy: '7.5', r: '.75' })
    )
  );
};

var CancelIcon = function CancelIcon() {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '15',
      height: '15',
      viewBox: '0 0 15 15'
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: 'var(--log-item-buttons-color)',
      strokeWidth: '1.4',
      strokeMiterlimit: '10',
      d: 'M2 13L13 2M13 13L2 2'
    })
  );
};

var CommitIcon = function CommitIcon() {
  return _react2.default.createElement(
    'svg',
    {
      baseProfile: 'basic',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '15',
      height: '15',
      viewBox: '0 0 15 15'
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: 'var(--log-item-buttons-color)',
      strokeMiterlimit: '10',
      d: 'M7.5 3.143v7.838'
    }),
    _react2.default.createElement(
      'g',
      { fill: 'var(--log-item-buttons-color)' },
      _react2.default.createElement('circle', { cx: '7.5', cy: '3.256', r: '2.256' }),
      _react2.default.createElement('path', { d: 'M4.708 10.164L7.5 15l2.792-4.836z' })
    )
  );
};

var styles = _aphrodite.StyleSheet.create({
  logItem: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontSize: 12,
    userSelect: 'none',
    cursor: 'default',
    '--log-item-buttons-pane-opacity': '0',
    '--log-item-buttons-color': '#000',
    '--log-item-primary-color': 'var(--primary-color)',
    '--log-item-date-color': 'inherit',
    ':hover': {
      '--log-item-date-color': 'transparent',
      '--log-item-buttons-pane-opacity': '0.95'
    },
    ':not(:last-child)': {
      borderBottom: '1px solid #eee'
    }
  },
  logItemSelected: {
    backgroundColor: 'var(--primary-color)',
    '--log-item-primary-color': '#fff',
    color: '#fff',
    ':hover': {
      '--log-item-buttons-color': '#fff'
    }
  },
  title: {
    padding: 5,
    flex: '1 1 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    direction: 'rtl',
    unicodeBidi: 'plaintext',
    textOverflow: 'ellipsis'
  },
  titleSelected: {
    filter: 'contrast(0.1) brightness(2)'
  },

  rightButtons: {
    opacity: 'var(--log-item-buttons-pane-opacity)',
    display: 'flex',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to right, transparent, #fff 10px)'
  },
  rightButtonsSelected: {
    backgroundImage: 'linear-gradient(to right, transparent, var(--primary-color) 10px)'
  },
  button: {
    flex: '0 0 auto',
    width: 35,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    position: 'relative',
    zIndex: 1, // overflow date
    ':hover': {
      opacity: 1
    }
  },
  activeIndicator: {
    flex: '0 0 auto',
    width: 35,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':after': {
      content: '""',
      width: 8,
      height: 8,
      backgroundColor: 'var(--log-item-primary-color)',
      borderRadius: '50%'
    }
  }
});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, word, plural) {
  if (typeof number !== 'number' || number % 100 !== 11 && number % 10 === 1) return word;
  return plural || word + 's';
};

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _aphrodite = __webpack_require__(11);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

var _DataViewer = __webpack_require__(186);

var _DataViewer2 = _interopRequireDefault(_DataViewer);

var _Collapsible = __webpack_require__(307);

var _Collapsible2 = _interopRequireDefault(_Collapsible);

var _PreviewValue = __webpack_require__(119);

var _PreviewValue2 = _interopRequireDefault(_PreviewValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogItemExplorer = (_dec = (0, _injectStores2.default)({
  subscribe: function subscribe(_ref) {
    var mstLoggerStore = _ref.mstLoggerStore;

    var itemData = mstLoggerStore.itemsDataByRootId[mstLoggerStore.activeRootId];
    return {
      mstLoggerStore: ['selectedLogItemId', itemData && itemData.selectedLogItemId]
    };
  },
  injectProps: function injectProps(_ref2) {
    var mstLoggerStore = _ref2.mstLoggerStore;

    var itemData = mstLoggerStore.itemsDataByRootId[mstLoggerStore.activeRootId];
    var logItem = itemData && itemData.logItemsById[itemData.selectedLogItemId];
    var initial = itemData && itemData.logItemsIds[0] === itemData.selectedLogItemId;
    return {
      logItem: logItem,
      initial: initial,
      getValueByPath: function getValueByPath(path) {
        return path.reduce(function (acc, next) {
          return acc && acc[next];
        }, logItem);
      }
    };
  }
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(LogItemExplorer, _React$PureComponent);

  function LogItemExplorer(props) {
    (0, _classCallCheck3.default)(this, LogItemExplorer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LogItemExplorer.__proto__ || (0, _getPrototypeOf2.default)(LogItemExplorer)).call(this, props));

    _this.handleResize = function () {
      if (_this.resizeTimeout) return;
      _this.resizeTimeout = setTimeout(function () {
        _this.updateSize();
      }, 200);
    };

    _this.dataDecorator = (0, _injectStores2.default)({
      subscribe: function subscribe(stores, _ref3) {
        var path = _ref3.path;
        return {
          treeExplorerStore: ['inspected--' + path.join('/')]
        };
      },
      shouldUpdate: function shouldUpdate() {
        return true;
      }
    });


    _this.state = {
      logExplorerHeight: 400
    };
    return _this;
  }

  (0, _createClass3.default)(LogItemExplorer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeTimeout = setTimeout(function () {
        return _this2.updateSize();
      }, 0); // timeout for css applying
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'updateSize',
    value: function updateSize() {
      if (!this.containerEl) return;
      this.resizeTimeout = undefined;
      this.setState({
        logExplorerHeight: this.containerEl.offsetHeight
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.logItem) return null;
      var padding = 5;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _aphrodite.css)(styles.logExplorer),
          ref: function ref(el) {
            _this3.containerEl = el;
          },
          style: { padding: padding, height: this.state.logExplorerHeight - padding * 2 }
        },
        this.props.logItem.snapshot && _react2.default.createElement(
          _Collapsible2.default,
          { head: 'State', startOpen: true },
          _react2.default.createElement(_DataViewer2.default, {
            path: ['snapshot'],
            getValueByPath: this.props.getValueByPath,
            decorator: this.dataDecorator
          })
        ),
        this.props.logItem.patches && !this.props.initial && _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.patches) },
          this.props.logItem.patches.map(function (patch) {
            var path = patch.path.replace(/^\//, '').replace(/\//g, '.');
            switch (patch.op) {
              case 'remove':
                return _react2.default.createElement(
                  'div',
                  null,
                  path,
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: (0, _aphrodite.css)(styles.removedLabel) },
                    'Removed'
                  )
                );
              default:
                return _react2.default.createElement(
                  'div',
                  null,
                  path,
                  ' = ',
                  _react2.default.createElement(_PreviewValue2.default, { data: patch.value })
                );
            }
          })
        )
      );
    }
  }]);
  return LogItemExplorer;
}(_react2.default.PureComponent), _class2.propTypes = {
  logItem: _propTypes2.default.object,
  initial: _propTypes2.default.bool.isRequired,
  getValueByPath: _propTypes2.default.func.isRequired
}, _temp)) || _class);
exports.default = LogItemExplorer;


var styles = _aphrodite.StyleSheet.create({
  logExplorer: {
    flex: '1 1 auto',
    overflow: 'auto'
  },
  patches: {
    marginTop: 20,
    paddingLeft: 15
  },
  removedLabel: {
    textTransform: 'uppercase',
    fontSize: 10,
    color: '#c41a16'
  }
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collapsible = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Collapsible, _React$PureComponent);

  function Collapsible(props) {
    (0, _classCallCheck3.default)(this, Collapsible);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Collapsible.__proto__ || (0, _getPrototypeOf2.default)(Collapsible)).call(this, props));

    _this.toggleOpen = function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    };

    _this.state = { open: Boolean(_this.props.startOpen) };
    return _this;
  }

  (0, _createClass3.default)(Collapsible, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.collapsible), style: this.props.style },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.head), onClick: this.toggleOpen },
          Boolean(this.props.children) && _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.opener), style: { top: this.props.verticalAlign } },
            this.state.open ? _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.expandedArrow) }) : _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.collapsedArrow) })
          ),
          this.props.head
        ),
        this.state.open && this.props.children
      );
    }
  }]);
  return Collapsible;
}(_react2.default.PureComponent), _class.propTypes = {
  head: _propTypes2.default.node,
  children: _propTypes2.default.node,
  startOpen: _propTypes2.default.bool,
  verticalAlign: _propTypes2.default.number,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  startOpen: true,
  verticalAlign: 4
}, _temp);
exports.default = Collapsible;


var styles = _aphrodite.StyleSheet.create({
  collapsible: {
    paddingLeft: 10
  },

  head: {
    display: 'flex',
    position: 'relative',
    cursor: 'pointer'
  },

  opener: {
    cursor: 'pointer',
    marginLeft: -10,
    paddingRight: 3,
    position: 'absolute'
  },

  collapsedArrow: {
    borderColor: 'transparent transparent transparent var(--dataview-arrow)',
    borderStyle: 'solid',
    borderWidth: '4px 0 4px 7px',
    display: 'inline-block',
    marginLeft: 1,
    verticalAlign: 'top'
  },

  expandedArrow: {
    borderColor: 'var(--dataview-arrow) transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '7px 4px 0 4px',
    display: 'inline-block',
    marginTop: 1,
    verticalAlign: 'top'
  }
});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainMenu;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _MainMenuTab = __webpack_require__(309);

var _MainMenuTab2 = _interopRequireDefault(_MainMenuTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTitle = function getTitle(type) {
  switch (type) {
    case 'changes':
      return 'Changes';
    case 'mst':
      return 'MST';
    default:
      return type;
  }
};

MainMenu.propTypes = {
  availableTabs: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  activeTab: _propTypes2.default.string.isRequired,
  onTabChange: _propTypes2.default.func.isRequired,
  processingTabs: _propTypes2.default.array.isRequired
};

function MainMenu(_ref) {
  var availableTabs = _ref.availableTabs,
      activeTab = _ref.activeTab,
      onTabChange = _ref.onTabChange,
      processingTabs = _ref.processingTabs;

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.container), 'data-test': 'MainMenu' },
    availableTabs.map(function (type) {
      return _react2.default.createElement(
        _MainMenuTab2.default,
        {
          key: type,
          type: type,
          active: activeTab === type,
          onClick: function onClick() {
            return onTabChange(type);
          } // eslint-disable-line react/jsx-no-bind
          , processing: processingTabs.includes(type)
        },
        getTitle(type)
      );
    })
  );
}

var styles = _aphrodite.StyleSheet.create({
  container: {
    display: 'flex',
    flex: '0 0 auto',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '0 10px'
  }
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = __webpack_require__(11);

var _icons = __webpack_require__(310);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Tab, _React$PureComponent);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: 'getIcon',
    value: function getIcon() {
      switch (this.props.type) {
        case 'changes':
          return _react2.default.createElement(_icons.ChangesIcon, null);
        case 'mst':
          return _react2.default.createElement(_icons.MSTIcon, null);
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          active = _props.active,
          onClick = _props.onClick,
          processing = _props.processing;

      return _react2.default.createElement(
        'span',
        {
          className: (0, _aphrodite.css)(styles.tab, active && styles.active, processing && styles.processing),
          onClick: onClick,
          'data-test': 'MainMenu-Tab-' + this.props.type
        },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.icon) },
          this.getIcon()
        ),
        _react2.default.createElement(
          'span',
          { className: (0, _aphrodite.css)(styles.tabLabel) },
          ' ',
          children
        )
      );
    }
  }]);
  return Tab;
}(_react2.default.PureComponent), _class.propTypes = {
  type: _propTypes2.default.oneOf(['changes', 'mst']),
  children: _propTypes2.default.node,
  active: _propTypes2.default.bool,
  processing: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
}, _temp);
exports.default = Tab;


var styles = _aphrodite.StyleSheet.create({
  tab: {
    display: 'flex',
    alignItems: 'center',
    border: '0 none',
    backgroundColor: 'transparent',
    color: '#616161',
    fontSize: 13,
    marginRight: 12,
    padding: '10px 3px',
    cursor: 'default',
    overflow: 'hidden'
  },
  active: {
    boxShadow: 'inset 0 -3px 0 0 var(--primary-color)'
  },
  processing: {
    position: 'relative',
    ':after': {
      content: '""',
      width: 6,
      height: 6,
      backgroundColor: '#ef3217',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: 2,
      marginTop: -9
    }
  },
  icon: {
    flex: '0 0 auto',
    display: 'inline-flex',
    marginRight: 3
  },
  tabLabel: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    userSelect: 'none'
  }
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MSTIcon = exports.ChangesIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChangesIcon = exports.ChangesIcon = function ChangesIcon() {
  return _react2.default.createElement(
    "svg",
    {
      baseProfile: "basic",
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "-3.5 17.5 16 16"
    },
    _react2.default.createElement(
      "g",
      { fill: "var(--light-text-color)" },
      _react2.default.createElement("path", { d: "M10.75 19.79h-12.6c-.36 0-.65-.288-.65-.645 0-.355.29-.645.65-.645h12.6c.36 0 .65.29.65.645 0 .357-.29.646-.65.646zM10.75 32.5h-12.6c-.36 0-.65-.29-.65-.646s.29-.646.65-.646h12.6c.36 0 .65.29.65.646s-.29.646-.65.646z" }),
      _react2.default.createElement("path", { d: "M10.75 21.676H6.708v1.292h4.042c.36 0 .65-.29.65-.646s-.29-.646-.65-.646zM2.193 21.676H-1.85c-.36 0-.65.29-.65.646s.29.646.65.646h4.042v-1.292z" }),
      _react2.default.createElement("path", { d: "M.306 28.03H-1.85c-.36 0-.65.29-.65.647s.29.645.65.645h3.463l-1.307-1.29zM10.75 28.03H8.593l-1.308 1.293h3.465c.36 0 .65-.29.65-.646s-.29-.646-.65-.646z" })
    ),
    _react2.default.createElement("path", { stroke: "var(--primary-color)", fill: "none", strokeWidth: "2", d: "M4.45 21.187V26.2" }),
    _react2.default.createElement("path", { fill: "var(--primary-color)", d: "M9.067 25.585H-.167l4.617 4.582" })
  );
};

var MSTIcon = exports.MSTIcon = function MSTIcon() {
  return _react2.default.createElement(
    "svg",
    {
      baseProfile: "basic",
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      strokeWidth: "1.6",
      fill: "none",
      strokeMiterlimit: "10"
    },
    _react2.default.createElement(
      "g",
      { stroke: "var(--light-text-color)" },
      _react2.default.createElement("circle", { cx: "2.5", cy: "12.5", r: "1.5" }),
      _react2.default.createElement("circle", { cx: "13.5", cy: "12.5", r: "1.5" }),
      _react2.default.createElement("path", { d: "M2.5 11.4V4.9a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v6.5" })
    ),
    _react2.default.createElement(
      "g",
      { stroke: "var(--primary-color)" },
      _react2.default.createElement("circle", { cx: "8", cy: "12.5", r: "1.5" }),
      _react2.default.createElement("path", { d: "M8 11.4V1.9" })
    )
  );
};

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(94);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _aphrodite = __webpack_require__(11);

var _injectStores = __webpack_require__(38);

var _injectStores2 = _interopRequireDefault(_injectStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_WIDTH = 150;

var ContextMenu = (_dec = (0, _injectStores2.default)({
  subscribe: {
    treeExplorerStore: ['contextMenu'],
    actionsLoggerStore: ['contextMenu']
  },
  injectProps: function injectProps(_ref) {
    var treeExplorerStore = _ref.treeExplorerStore,
        actionsLoggerStore = _ref.actionsLoggerStore;
    return {
      contextMenu: treeExplorerStore.contextMenu || actionsLoggerStore.contextMenu
    };
  }
}), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(ContextMenu, _React$Component);

  function ContextMenu() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContextMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = ContextMenu.__proto__ || (0, _getPrototypeOf2.default)(ContextMenu)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClickOutside = function (e) {
      if (_this.el && _this.el.contains(e.target)) return;
      _this.props.contextMenu.close();
      _this.unsubscribeClickOutside();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContextMenu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.portalHtmlEl = document.createElement('div');
      document.body.appendChild(this.portalHtmlEl);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.contextMenu) {
        this.subscribeClickOutside();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.contextMenu && !nextProps.contextMenu) {
        this.unsubscribeClickOutside();
      } else if (!this.props.contextMenu && nextProps.contextMenu) {
        this.subscribeClickOutside();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.portalHtmlEl);
    }
  }, {
    key: 'subscribeClickOutside',
    value: function subscribeClickOutside() {
      if (this.$subscribed) return;
      this.$subscribed = true;
      window.addEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'unsubscribeClickOutside',
    value: function unsubscribeClickOutside() {
      if (!this.$subscribed) return;
      this.$subscribed = false;
      window.removeEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var contextMenu = this.props.contextMenu;

      if (!this.props.contextMenu) return null;

      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        {
          className: (0, _aphrodite.css)(styles.container),
          style: { left: Math.min(contextMenu.x, window.innerWidth - MIN_WIDTH), top: contextMenu.y },
          ref: function ref(el) {
            _this2.el = el;
          }
        },
        contextMenu.items.map(function (item) {
          return item && _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(styles.item), key: item.key, onClick: item.action },
            item.title
          );
        })
      ), this.portalHtmlEl);
    }
  }]);
  return ContextMenu;
}(_react2.default.Component), _class2.propTypes = {
  contextMenu: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired,
    items: _propTypes2.default.array.isRequired,
    close: _propTypes2.default.func.isRequired
  })
}, _temp2)) || _class);
exports.default = ContextMenu;


var styles = _aphrodite.StyleSheet.create({
  container: {
    position: 'fixed',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    minWidth: MIN_WIDTH,
    zIndex: 100002
  },
  item: {
    color: '--default-text-color',
    padding: '5px 10px',
    cursor: 'pointer',
    ':not(:last-child)': {
      borderBottom: '1px solid #eee'
    },
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
  }
});

/***/ }),
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _debugConnection = __webpack_require__(92);

var _debugConnection2 = _interopRequireDefault(_debugConnection);

var _frontend = __webpack_require__(189);

var _frontend2 = _interopRequireDefault(_frontend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disconnectListener = void 0;

var inject = function inject(done) {
  var code = '\n      (function() {\n        var inject = function() {\n          // the prototype stuff is in case document.createElement has been modified\n          var script = document.constructor.prototype.createElement.call(document, \'script\');\n          script.src = "' + chrome.runtime.getURL('backend.js') + '";\n          document.documentElement.appendChild(script);\n          script.parentNode.removeChild(script);\n        }\n        if (!document.documentElement) {\n          document.addEventListener(\'DOMContentLoaded\', inject);\n        } else {\n          inject();\n        }\n      }());\n    ';
  chrome.devtools.inspectedWindow.eval(code, function (res, err) {
    if (err) {
      if (false) console.log(err); // eslint-disable-line no-console
      return;
    }

    var disconnected = false;

    var port = chrome.runtime.connect({
      name: '' + chrome.devtools.inspectedWindow.tabId
    });

    port.onDisconnect.addListener(function () {
      disconnected = true;
      if (disconnectListener) {
        disconnectListener();
      }
    });

    var wall = {
      listen: function listen(fn) {
        port.onMessage.addListener(function (message) {
          (0, _debugConnection2.default)('[background -> FRONTEND]', message);
          fn(message);
        });
      },
      send: function send(data) {
        if (disconnected) return;
        (0, _debugConnection2.default)('[FRONTEND -> background]', data);
        port.postMessage(data);
      }
    };

    done(wall, function () {
      return port.disconnect();
    });
  });
};

(0, _frontend2.default)({
  node: document.getElementById('container'),
  debugName: 'Panel UI',
  inject: inject,
  reloadSubscribe: function reloadSubscribe(reloadFn) {
    chrome.devtools.network.onNavigated.addListener(reloadFn);
    return function () {
      chrome.devtools.network.onNavigated.removeListener(reloadFn);
    };
  }
});

/***/ })
/******/ ]);