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
/******/ 	return __webpack_require__(__webpack_require__.s = 316);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */,
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
/* 6 */,
/* 7 */,
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
/* 11 */,
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
/* 30 */,
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
/* 38 */,
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
/* 46 */,
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
/* 60 */,
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
/* 75 */,
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
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
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
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
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
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopHighlightingAll = exports.stopHighlighting = exports.hightlight = undefined;

var _map = __webpack_require__(113);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showNodeAroundNode = function showNodeAroundNode(node, targetNode, outlineColor, backgroundColor) {
  if (!targetNode || !targetNode.offsetParent || !node) return;

  var offset = {
    top: targetNode.offsetTop,
    left: targetNode.offsetLeft,
    width: targetNode.offsetWidth,
    height: targetNode.offsetHeight
  };

  node.style.position = 'absolute';
  node.style.top = offset.top + 'px';
  node.style.left = offset.left + 'px';
  node.style.width = offset.width + 'px';
  node.style.height = offset.height + 'px';
  node.style.boxSizing = 'border-box';
  node.style.zIndex = '64998';
  node.style.pointerEvents = 'none';
  node.style.transition = 'none';
  node.style.opacity = 1;
  node.style.zIndex = '64998';
  node.style.outline = '2px solid ' + outlineColor;
  node.style.backgroundColor = backgroundColor;

  if (!targetNode.offsetParent.contains(node)) {
    targetNode.offsetParent.appendChild(node);
  }
};

var removeHoverNode = function removeHoverNode(hoverNode) {
  if (hoverNode) {
    if (hoverNode.parentNode) {
      hoverNode.parentNode.removeChild(hoverNode);
    }
    if (hoverNode.removeTimeout) {
      clearTimeout(hoverNode.removeTimeout);
      hoverNode.removeTimeout = undefined;
    }
    hoverNodesMap.delete(hoverNode);
  }
};

var hoverNodesMap = new _map2.default();

var addText = function addText(hoverNode, content) {
  if (!hoverNode.textNode) {
    hoverNode.textNode = document.createElement('span');
    hoverNode.appendChild(hoverNode.textNode);
  }
  hoverNode.textNode.style.fontFamily = 'verdana; sans-serif';
  hoverNode.textNode.style.padding = '0 4px 2px';
  hoverNode.textNode.style.color = 'rgba(0; 0; 0; 0.6)';
  hoverNode.textNode.style.fontSize = '10px';
  hoverNode.textNode.style.lineHeight = '12px';
  hoverNode.textNode.style.pointerEvents = 'none';
  hoverNode.textNode.style.float = 'right';
  hoverNode.textNode.style.borderBottomRightRadius = '2px';
  hoverNode.textNode.style.maxWidth = '100%';
  hoverNode.textNode.style.maxHeight = '100%';
  hoverNode.textNode.style.overflow = 'hidden';
  hoverNode.textNode.style.whiteSpace = 'nowrap';
  hoverNode.textNode.style.textOverflow = 'ellipsis';
  hoverNode.textNode.style.backgroundColor = content.backgroundColor;
  hoverNode.textNode.style.position = 'absolute';
  hoverNode.textNode.style.top = '0px';
  hoverNode.textNode.style.right = '0px';
  hoverNode.textNode.innerHTML = content.text;
};

var hightlight = exports.hightlight = function hightlight(node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      delay = _ref.delay,
      content = _ref.content,
      borderColor = _ref.borderColor,
      backgroundColor = _ref.backgroundColor;

  if (node && node.parentNode) {
    var hoverNode = hoverNodesMap.get(node);
    if (!hoverNode) {
      hoverNode = document.createElement('div');
      hoverNodesMap.set(node, hoverNode);
    }
    if (hoverNode.removeTimeout) {
      clearTimeout(hoverNode.removeTimeout);
    }
    showNodeAroundNode(hoverNode, node, borderColor, backgroundColor);
    if (typeof delay === 'number') {
      hoverNode.removeTimeout = setTimeout(function () {
        return removeHoverNode(hoverNode);
      }, delay);
    }
    if (content) {
      addText(hoverNode, content);
    }
  }
};

var stopHighlighting = exports.stopHighlighting = function stopHighlighting(node) {
  var hoverNode = hoverNodesMap.get(node);
  if (hoverNode) {
    removeHoverNode(hoverNode);
  }
};

var stopHighlightingAll = exports.stopHighlightingAll = function stopHighlightingAll() {
  return hoverNodesMap.forEach(removeHoverNode);
};

/***/ }),
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weakMap = __webpack_require__(313);

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = new _weakMap2.default();

var i = 0;

exports.default = function (object) {
  var id = object && map.get(object);
  if (id) return id;
  i += 1;
  if (object) map.set(object, i);
  return i;
};

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(320), __esModule: true };

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(154);

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(87);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _symbol = __webpack_require__(76);

var _symbol2 = _interopRequireDefault(_symbol);

var _set = __webpack_require__(88);

var _set2 = _interopRequireDefault(_set);

var _map = __webpack_require__(113);

var _map2 = _interopRequireDefault(_map);

var _Bridge = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (onResult) {
  var inspectedObject = void 0;
  var inspectionTree = {};
  var nodesByObject = new _map2.default();
  var invalidatedNodes = new _set2.default();
  var flushScheduled = void 0;
  var PATH = (0, _symbol2.default)('PATH');
  var PARENT = (0, _symbol2.default)('PARENT');
  var KEY = (0, _symbol2.default)('KEY');

  var getNodeForPath = function getNodeForPath(path) {
    return path.reduce(function (acc, next) {
      if (!acc[next]) {
        var _acc$next;

        acc[next] = (_acc$next = {}, (0, _defineProperty3.default)(_acc$next, KEY, next), (0, _defineProperty3.default)(_acc$next, PARENT, acc), (0, _defineProperty3.default)(_acc$next, PATH, (acc[PATH] || []).concat(next)), _acc$next);
      }
      return acc[next];
    }, inspectionTree);
  };

  var getInvalidatedParentForNode = function getInvalidatedParentForNode(node) {
    var current = node[PARENT];
    while (current) {
      if (invalidatedNodes.has(current)) return true;
      current = current[PARENT];
    }
    return false;
  };

  var getPathsForObject = function getPathsForObject(object) {
    return (nodesByObject.get(object) || []).map(function (node) {
      return node[PATH];
    });
  };

  var getObjectForPath = function getObjectForPath(path) {
    return path.reduce(function (acc, next) {
      return acc && acc[next === _Bridge.symbols.proto ? '__proto__' : next];
    }, inspectedObject);
  };

  var rememberPath = function rememberPath(path, object) {
    var node = getNodeForPath(path);
    var currentNodes = nodesByObject.get(object) || [];
    if (!currentNodes.includes(node)) {
      nodesByObject.set(object, currentNodes.concat(node));
    }
  };

  var forgetPath = function forgetPath(path) {
    if (path.length === 0) {
      for (var p in inspectionTree) {
        if (Object.prototype.hasOwnProperty.call(inspectionTree, p)) {
          delete inspectionTree[p];
        }
      }
      nodesByObject.clear();
      invalidatedNodes.clear();
      clearTimeout(flushScheduled);
      return;
    }

    var node = getNodeForPath(path);
    if (node) {
      for (var _p in node) {
        if (Object.prototype.hasOwnProperty.call(node, _p)) {
          forgetPath(path.concat(_p));
        }
      }
      var obj = getObjectForPath(path);
      if (obj) {
        var nodes = nodesByObject.get(obj) || [];
        var idx = nodes.indexOf(node);
        if (idx !== -1) {
          nodes.splice(idx, 1);
          if (nodes.length === 0) nodesByObject.delete(obj);
        }
      }
      delete node[PARENT][node[KEY]];
    }
  };

  var allowChildren = function allowChildren(node) {
    for (var p in node) {
      if (Object.prototype.hasOwnProperty.call(node, p)) {
        var obj = getObjectForPath(node[p][PATH]);
        if (obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') _Bridge.allowedComplexObjects.add(obj);
        allowChildren(node[p]);
      }
    }
  };

  var flush = function flush() {
    if (invalidatedNodes.length === 0) return;
    invalidatedNodes.forEach(function (node) {
      var invalidatedParent = getInvalidatedParentForNode(node);
      if (invalidatedParent) {
        invalidatedNodes.delete(node);
      }
    });
    invalidatedNodes.forEach(function (node) {
      allowChildren(node);
      fireResult(node[PATH], getObjectForPath(node[PATH]));
    });
    invalidatedNodes.clear();
  };

  var scheduleFlush = function scheduleFlush() {
    if (flushScheduled) return;
    _promise2.default.resolve().then(flush); // trailing flush in microtask
    flushScheduled = setTimeout(function () {
      flushScheduled = undefined;
      flush();
    }, 500);
  };

  var fireResult = function fireResult(path, data) {
    if (data && (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
      _Bridge.allowedComplexObjects.add(data);
    }
    onResult({ inspectedObject: inspectedObject, data: data, path: path });
  };

  return {
    handleUpdate: function handleUpdate(object) {
      getPathsForObject(object).forEach(function (path) {
        var node = path.reduce(function (acc, next) {
          if (!acc[next]) {
            acc[next] = {};
          }
          return acc[next];
        }, inspectionTree);
        invalidatedNodes.add(node);
        scheduleFlush();
      });
    },
    inspect: function inspect(path) {
      if (inspectedObject) {
        var data = getObjectForPath(path);
        var node = getNodeForPath(path);
        rememberPath(path, data);
        allowChildren(node);
        fireResult(path, data);
      }
    },
    forget: function forget(path) {
      forgetPath(path);
    },
    setInspectedObject: function setInspectedObject(obj) {
      if (!obj) {
        forgetPath([]);
      }
      inspectedObject = obj;
    },

    get inspectedObject() {
      return inspectedObject;
    }
  };
};

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bridge = __webpack_require__(51);

exports.default = function (value) {
  if (!value) {
    return;
  }

  var finalValue = value[_Bridge.symbols.type] === 'deptreeNode' ? value.node : value;

  var suffix = 0;
  var varname = 'temp';
  while (varname in window) {
    suffix += 1;
    varname = 'temp' + suffix;
  }
  window[varname] = finalValue;
  console.log(varname, finalValue); // eslint-disable-line no-console
};

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _backend = __webpack_require__(317);

var _backend2 = _interopRequireDefault(_backend);

var _Bridge = __webpack_require__(51);

var _Bridge2 = _interopRequireDefault(_Bridge);

var _debugConnection = __webpack_require__(92);

var _debugConnection2 = _interopRequireDefault(_debugConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backendId = Math.random().toString(32).slice(2); /*
                                                      * backend.js
                                                      *
                                                      * Injected to the app page when panel/window is activated.
                                                      */

function handshake(hook, contentScriptId) {
  var listeners = [];

  var bridge = new _Bridge2.default({
    listen: function listen(fn) {
      var listener = function listener(evt) {
        if (evt.data.source === 'mobx-devtools-content-script' && evt.data.contentScriptId === contentScriptId && evt.data.backendId === backendId) {
          (0, _debugConnection2.default)('[contentScript -> BACKEND]', evt);
          fn(evt.data.payload);
        }
      };
      listeners.push(listener);
      window.addEventListener('message', listener);
    },
    send: function send(data) {
      (0, _debugConnection2.default)('[BACKEND -> contentScript]', data);
      window.postMessage({
        source: 'mobx-devtools-backend',
        payload: data,
        contentScriptId: contentScriptId,
        backendId: backendId
      }, '*');
    }
  });

  var disposeBackend = (0, _backend2.default)(bridge, hook);

  bridge.once('disconnect', function () {
    (0, _debugConnection2.default)('[contentScript -x BACKEND]');
    listeners.forEach(function (listener) {
      return window.removeEventListener('message', listener);
    });
    listeners = [];
    disposeBackend();
  });
}

/*
  This mechanism ensures that each content-script can be messaging with only one backend
  and vice versa:
  1. Wait for `ping`
  2. As soon as pinged, stop listening to `ping` send `pong`,
     start waiting for `hello`/`connection-fail`
  3. If received `hello`, the connection is established,
     if recieved `connection-fail`, then content-script is already busy, return to paragraph 1
*/

function waitForPing() {
  function pingListener(evt) {
    if (evt.data.source === 'mobx-devtools-content-script' && evt.data.payload === 'backend:ping') {
      (0, _debugConnection2.default)('[contentScript -> BACKEND]', evt);
      var contentScriptId = evt.data.contentScriptId;


      window.removeEventListener('message', pingListener);
      clearTimeout(handshakeFailedTimeout);

      var payload = 'contentScript:pong';
      (0, _debugConnection2.default)('[contentScript -> BACKEND]', payload);
      window.postMessage({
        source: 'mobx-devtools-backend',
        payload: payload,
        contentScriptId: contentScriptId,
        backendId: backendId
      }, '*');

      var helloListener = function helloListener(e) {
        if (e.data.source === 'mobx-devtools-content-script' && e.data.payload === 'backend:hello' && e.data.contentScriptId === contentScriptId && e.data.backendId === backendId) {
          (0, _debugConnection2.default)('[contentScript -> BACKEND]', e);
          window.removeEventListener('message', helloListener);
          window.removeEventListener('message', failListener);
          // eslint-disable-next-line no-underscore-dangle
          handshake(window.__MOBX_DEVTOOLS_GLOBAL_HOOK__, contentScriptId);
        }
      };

      var failListener = function failListener(e) {
        if (e.data.source === 'mobx-devtools-content-script' && e.data.payload === 'backend:connection-failed' && e.data.contentScriptId === contentScriptId && e.data.backendId === backendId) {
          (0, _debugConnection2.default)('[contentScript -> BACKEND]', e);
          window.removeEventListener('message', helloListener);
          window.removeEventListener('message', failListener);
          waitForPing();
        }
      };

      window.addEventListener('message', helloListener);
      window.addEventListener('message', failListener);
    }
  }

  var handshakeFailedTimeout = setTimeout(function () {
    (0, _debugConnection2.default)('[BACKEND] handshake failed (timeout)');
    window.removeEventListener('message', pingListener);
  }, 10000);

  window.addEventListener('message', pingListener);
}

waitForPing();

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _cababilities = __webpack_require__(318);

var _cababilities2 = _interopRequireDefault(_cababilities);

var _mst = __webpack_require__(319);

var _mst2 = _interopRequireDefault(_mst);

var _mobxReactNodesTree = __webpack_require__(325);

var _mobxReactNodesTree2 = _interopRequireDefault(_mobxReactNodesTree);

var _mobxReactUpdatesHighlighter = __webpack_require__(328);

var _mobxReactUpdatesHighlighter2 = _interopRequireDefault(_mobxReactUpdatesHighlighter);

var _mobxLog = __webpack_require__(329);

var _mobxLog2 = _interopRequireDefault(_mobxLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (bridge, hook) {
  if (!hook) {
    if (false) {
      throw new Error('');
    }
    return function () {};
  }

  var disposables = [];

  var backends = [(0, _cababilities2.default)(bridge, hook), (0, _mst2.default)(bridge, hook), (0, _mobxReactNodesTree2.default)(bridge, hook), (0, _mobxReactUpdatesHighlighter2.default)(bridge, hook), (0, _mobxLog2.default)(bridge, hook)];

  backends.forEach(function (_ref) {
    var dispose = _ref.dispose;
    return disposables.push(dispose);
  });

  (0, _keys2.default)(hook.collections).forEach(function (mobxid) {
    backends.forEach(function (_ref2) {
      var setup = _ref2.setup;
      return setup(mobxid, hook.collections[mobxid]);
    });
  });

  disposables.push(bridge.sub('backend:ping', function () {
    return bridge.send('frontend:pong');
  }), hook.sub('instances-injected', function (mobxid) {
    backends.forEach(function (p) {
      return p.setup(mobxid, hook.collections[mobxid]);
    });
  }));

  return function dispose() {
    disposables.forEach(function (fn) {
      fn();
    });
  };
};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (bridge) {
  var mobxFound = false;
  var mobxReactFound = false;
  var mstFound = false;

  var sendCapabilities = function sendCapabilities() {
    return bridge.send('capabilities', {
      mobxFound: mobxFound,
      mobxReactFound: mobxReactFound,
      mstFound: mstFound
    });
  };

  sendCapabilities();

  var disposables = [bridge.sub('get-capabilities', sendCapabilities)];

  return {
    setup: function setup(mobxid, collection) {
      if (collection.mobx) {
        mobxFound = true;
      }
      if (collection.mobxReact) {
        mobxReactFound = true;
      }
      if (collection.mst) {
        mstFound = true;
      }
      sendCapabilities();
    },
    dispose: function dispose() {
      disposables.forEach(function (fn) {
        return fn();
      });
    }
  };
};

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

var _create = __webpack_require__(82);

var _create2 = _interopRequireDefault(_create);

var _getId = __webpack_require__(312);

var _getId2 = _interopRequireDefault(_getId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var summary = function summary(logItem) {
  var sum = (0, _create2.default)(null);
  var patches = logItem.patches;

  sum.patches = patches && patches.map(function (patch) {
    return {
      op: patch.op,
      path: patch.path,
      value: patch.value && (0, _typeof3.default)(patch.value) === 'object' ? {} : patch.value
    };
  });
  sum.id = logItem.id;
  sum.rootId = logItem.rootId;
  sum.timestamp = logItem.timestamp;
  return sum;
};

exports.default = function (bridge, hook) {
  var collections = {};
  var rootDataById = {};

  var trackingEnabled = false;
  var insideUntracked = false;

  var addLogItem = function addLogItem(rootId, _ref) {
    var snapshot = _ref.snapshot,
        patches = _ref.patches;

    var rootData = rootDataById[rootId];
    if (!rootData) return;
    var logItemId = (0, _getId2.default)();
    var logItem = {
      patches: patches,
      snapshot: snapshot,
      id: logItemId,
      rootId: rootId,
      timestamp: new Date().getTime()
    };
    rootData.logItemsById[logItemId] = logItem;
    rootData.activeLogItemId = logItemId;
    bridge.send('frontend:append-mst-log-items', summary(logItem));
    bridge.send('frontend:activeLogItemId', { rootId: rootId, logItemId: logItemId });
  };

  var addRoot = function addRoot(_ref2) {
    var root = _ref2.root,
        mobxid = _ref2.mobxid,
        name = _ref2.name;

    var _ref3 = collections[mobxid] || {},
        mst = _ref3.mst;

    if (mst) {
      var rootId = (0, _getId2.default)(root);
      if (rootDataById[rootId]) return;

      var patches = [];

      var rootDisposables = [mst.onPatch(root, function (patch) {
        if (trackingEnabled && !insideUntracked) {
          patches.push(patch);
        }
      }), mst.onSnapshot(root, function (snapshot) {
        if (trackingEnabled && !insideUntracked) {
          addLogItem(rootId, { snapshot: snapshot, patches: patches });
          patches = [];
        }
      })];

      mst.addDisposer(root, function () {
        return removeRoot(rootId);
      });

      rootDataById[rootId] = {
        logItemsById: {},
        activeLogItemId: undefined,
        root: root,
        mobxid: mobxid,
        dispose: function dispose() {
          return rootDisposables.forEach(function (fn) {
            return fn();
          });
        },
        rootId: rootId,
        mst: mst,
        name: name || root.toString && root.toString()
      };
    }
  };

  var removeRoot = function removeRoot(rootId) {
    var rootData = rootDataById[rootId];
    if (rootData) {
      rootData.dispose();
      delete rootData[rootId];
    }
    bridge.send('frontend:remove-mst-root', rootId);
  };

  var disposables = [function () {
    return (0, _keys2.default)(rootDataById).forEach(function (rootId) {
      return removeRoot(rootId);
    });
  }, hook.sub('mst-root', addRoot), hook.sub('mst-root-dispose', removeRoot), bridge.sub('backend-mst:set-tracking-enabled', function (val) {
    if (val === trackingEnabled) return;
    trackingEnabled = val;
    if (val) {
      bridge.send('frontend:mst-roots', (0, _keys2.default)(rootDataById).map(function (id) {
        return {
          id: id,
          name: rootDataById[id].name
        };
      }));
      (0, _keys2.default)(rootDataById).forEach(function (rootId) {
        var rootData = rootDataById[rootId];
        if ((0, _keys2.default)(rootData.logItemsById).length === 0) {
          addLogItem(rootId, { isInitial: true });
        }
      });
    }
  }), bridge.sub('backend-mst:activate-log-item-id', function (_ref4) {
    var rootId = _ref4.rootId,
        logItemId = _ref4.logItemId;

    var rootData = rootDataById[rootId];
    if (!rootData) return;
    var logItem = rootData.logItemsById[logItemId];
    if (!logItem) return;
    rootData.activeLogItemId = logItemId;
    insideUntracked = true;
    rootData.mst.applySnapshot(rootData.root, logItem.snapshot || {});
    insideUntracked = false;
  }), bridge.sub('backend-mst:forget-mst-items', function (_ref5) {
    var rootId = _ref5.rootId,
        itemsIds = _ref5.itemsIds;

    var rootDatum = rootDataById[rootId];
    if (!rootDatum) return;
    itemsIds.forEach(function (id) {
      delete rootDatum.logItemsById[id];
    });
  }), bridge.sub('get-mst-log-item-details', function (_ref6) {
    var rootId = _ref6.rootId,
        logItemId = _ref6.logItemId;

    var rootDatum = rootDataById[rootId];
    if (!rootDatum) return;
    bridge.send('mst-log-item-details', rootDatum.logItemsById[logItemId]);
  })];

  return {
    setup: function setup(mobxid, collection) {
      collections[mobxid] = collection;
      if (collection.mst) {
        hook.emit('get-mst-roots');
      }
    },
    dispose: function dispose() {
      disposables.forEach(function (fn) {
        return fn();
      });
    }
  };
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(37);
__webpack_require__(321);
__webpack_require__(323);
__webpack_require__(324);
module.exports = __webpack_require__(1).WeakMap;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var each = __webpack_require__(112)(0);
var redefine = __webpack_require__(56);
var meta = __webpack_require__(57);
var assign = __webpack_require__(120);
var weak = __webpack_require__(322);
var isObject = __webpack_require__(14);
var validate = __webpack_require__(55);
var NATIVE_WEAK_MAP = __webpack_require__(55);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(83)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(65);
var getWeak = __webpack_require__(57).getWeak;
var anObject = __webpack_require__(15);
var isObject = __webpack_require__(14);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(40);
var createArrayMethod = __webpack_require__(112);
var $has = __webpack_require__(17);
var validate = __webpack_require__(55);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(84)('WeakMap');


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(85)('WeakMap');


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(58);

var _extends3 = _interopRequireDefault(_extends2);

var _weakMap = __webpack_require__(313);

var _weakMap2 = _interopRequireDefault(_weakMap);

var _getId = __webpack_require__(312);

var _getId2 = _interopRequireDefault(_getId);

var _getDependencyTree = __webpack_require__(326);

var _getDependencyTree2 = _interopRequireDefault(_getDependencyTree);

var _highlight = __webpack_require__(188);

var _domNodePicker = __webpack_require__(327);

var _domNodePicker2 = _interopRequireDefault(_domNodePicker);

var _inspector = __webpack_require__(314);

var _inspector2 = _interopRequireDefault(_inspector);

var _storaTempValueInGlobalScope = __webpack_require__(315);

var _storaTempValueInGlobalScope2 = _interopRequireDefault(_storaTempValueInGlobalScope);

var _Bridge = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (bridge) {
  var collections = {};

  var mobxIdsByComponent = new _weakMap2.default();
  var componentsById = {};
  var parentComponentsById = {};
  var nodesById = {};
  var isTracking = false;
  var pickingComponentDisposer = void 0;

  var inspector = (0, _inspector2.default)(function (_ref) {
    var inspectedObject = _ref.inspectedObject,
        path = _ref.path,
        data = _ref.data;

    bridge.send('inspect-component-result', { componentId: inspectedObject.id, path: path, data: data });
  });

  var getComponentForNode = function getComponentForNode(node) {
    for (var mobxid in collections) {
      if (Object.prototype.hasOwnProperty.call(collections, mobxid)) {
        var mobxReact = collections[mobxid].mobxReact;

        var component = mobxReact && mobxReact.componentByNodeRegistery.get(node);
        if (component) {
          component = (0, _extends3.default)({
            props: component.props,
            state: component.state
          }, component);
          mobxIdsByComponent.set(component, mobxid);
          return component;
        }
      }
    }
    return undefined;
  };

  var addChild = function addChild(parentId, id) {
    if (!componentsById[parentId]) return;
    if (componentsById[parentId].children.includes(id)) return;
    componentsById[parentId].children.push(id);
    parentComponentsById[id] = parentId;
    if (isTracking) {
      bridge.send('frontend:mobx-react-component-updated', componentsById[parentId]);
    }
  };

  var removeChild = function removeChild(parentId, id) {
    if (!componentsById[parentId]) return;
    var idx = componentsById[parentId].children.indexOf(id);
    delete parentComponentsById[id];
    if (idx !== -1) {
      componentsById[parentId].children.splice(idx, 1);
      if (isTracking) {
        bridge.send('frontend:mobx-react-component-updated', componentsById[parentId]);
      }
    }
  };

  var getComponentName = function getComponentName(node) {
    if (node.constructor.displayName) {
      return node.constructor.displayName;
    }
    if (node.constructor.name) {
      return node.constructor.name;
    }
    return 'div';
  };

  var trackComponent = function trackComponent(component, node) {
    var id = (0, _getId2.default)(component);
    nodesById[id] = node;
    var newAdded = id in componentsById === false;
    if (newAdded) {
      var componentInfo = {
        id: id,
        component: component,
        mobxid: mobxIdsByComponent.get(component),
        children: [],
        name: getComponentName(component),
        renders: 0,
        props: component.props,
        state: component.state,
        context: component.context
      };
      componentsById[id] = componentInfo;
      if (isTracking) {
        if (newAdded) {
          bridge.send('frontend:mobx-react-component-added', componentInfo);
        }
      }
    } else {
      var _componentInfo = componentsById[id];
      _componentInfo.renders += 1;
      if (inspector.inspectedObject && id === inspector.inspectedObject.id) {
        inspector.inspect([]);
      } else {
        bridge.send('frontend:mobx-react-component-updated', _componentInfo);
      }
    }
    return id;
  };

  var traverse = function traverse(node, parentComponentId) {
    var component = getComponentForNode(node);
    var finalParentComponentId = parentComponentId;
    if (component) {
      var id = trackComponent(component, node);
      if (parentComponentId) {
        addChild(parentComponentId, id);
      }
      finalParentComponentId = id;
    }
    for (var i = 0; i < node.childNodes.length; i += 1) {
      traverse(node.childNodes[i], finalParentComponentId);
    }
  };

  var findParent = function findParent(node, mobxId) {
    var current = node.parentElement;
    while (current) {
      if (!collections[mobxId]) return undefined;
      var component = collections[mobxId].mobxReact.componentByNodeRegistery.get(current);
      if (component) {
        mobxIdsByComponent.set(component, mobxId);
        var id = (0, _getId2.default)(component);
        if (!nodesById[id]) trackComponent(component, current);
        return id;
      }
      current = current.parentElement;
    }
    return undefined;
  };

  var onRender = function onRender(_ref2, mobxid) {
    var component = _ref2.component,
        node = _ref2.node;

    mobxIdsByComponent.set(component, mobxid);
    var id = trackComponent(component, node);
    var parentId = findParent(node, mobxid);
    if (parentId && !componentsById[parentId].children.includes(id)) {
      addChild(parentId, id);
    }
  };

  var onDestroy = function onDestroy(_ref3, mobxid) {
    var component = _ref3.component;

    mobxIdsByComponent.delete(component, mobxid);
    var componentInfo = componentsById[(0, _getId2.default)(component)];
    if (componentInfo) {
      var parentId = parentComponentsById[componentInfo.id];
      if (parentId) removeChild(parentId, componentInfo.id);
      delete nodesById[componentInfo.id];
      delete componentsById[componentInfo.id];
      delete parentComponentsById[componentInfo.id];
      bridge.send('frontend:mobx-react-component-removed', componentInfo);
    }
  };

  var disposables = [bridge.sub('backend-mobx-react:get-observer-components', function () {
    if (isTracking) {
      bridge.send('frontend:mobx-react-components', (0, _keys2.default)(componentsById).map(function (id) {
        return componentsById[id];
      }));
    }
    traverse(document);
    bridge.send('frontend:mobx-react-components', (0, _keys2.default)(componentsById).map(function (id) {
      return componentsById[id];
    }));
    isTracking = true;
  }), bridge.sub('highlight', function (id) {
    (0, _highlight.stopHighlightingAll)();
    (0, _highlight.hightlight)(nodesById[id], { backgroundColor: 'rgba(0, 144, 255, 0.35)' });
  }), bridge.sub('stop-highlighting', _highlight.stopHighlightingAll), bridge.sub('getDeptree', function (_ref4) {
    var componentId = _ref4.componentId;

    var componentInfo = componentsById[componentId];
    if (!componentInfo) return;
    var $mobx = collections[componentInfo.mobxid].mobx.$mobx || '$mobx';
    componentInfo.dependencyTree = (0, _getDependencyTree2.default)(componentInfo.component.render[$mobx]);
    bridge.send('frontend:mobx-react-component-updated', componentInfo);
  }), bridge.sub('inspect-component', function (_ref5) {
    var componentId = _ref5.componentId,
        path = _ref5.path;

    if (!inspector.inspectedObject || componentId !== inspector.inspectedObject.id) {
      inspector.setInspectedObject(componentsById[componentId]);
    }
    inspector.inspect(path);
  }), bridge.sub('stop-inspecting-component', function (_ref6) {
    var componentId = _ref6.componentId,
        path = _ref6.path;

    if (inspector.inspectedObject && componentId === inspector.inspectedObject.id) {
      inspector.forget(path);
    }
  }), bridge.sub('pick-component', function () {
    if (!pickingComponentDisposer) {
      pickingComponentDisposer = (0, _domNodePicker2.default)(collections, function (component, mobxId) {
        bridge.send('picked-component', { componentId: (0, _getId2.default)(component), mobxId: mobxId });
        pickingComponentDisposer();
        pickingComponentDisposer = undefined;
      });
    }
  }), bridge.sub('stop-picking-component', function () {
    if (pickingComponentDisposer) {
      pickingComponentDisposer();
      pickingComponentDisposer = undefined;
    }
  }), bridge.sub('makeGlobal', function (_ref7) {
    var id = _ref7.id,
        path = _ref7.path;

    var componentInfo = componentsById[id];
    var value = path.reduce(function (acc, next) {
      return acc && acc[next];
    }, componentInfo);
    (0, _storaTempValueInGlobalScope2.default)(value);
  }), bridge.sub('selectedNodeId', function (id) {
    var componentInfo = componentsById[id];
    window.$m = componentInfo && componentInfo.component;
  }), bridge.sub('scrollToNode', function (_ref8) {
    var id = _ref8.id;

    var node = nodesById[id];
    if (!node) {
      return;
    }
    node.scrollIntoView();
    setTimeout(function () {
      return (0, _highlight.hightlight)(node, { backgroundColor: 'rgba(0, 144, 255, 0.35)' });
    }, 0);
    setTimeout(_highlight.stopHighlightingAll, 100);
    setTimeout(function () {
      return (0, _highlight.hightlight)(node, { backgroundColor: 'rgba(0, 144, 255, 0.35)' });
    }, 200);
    setTimeout(_highlight.stopHighlightingAll, 300);
  }), bridge.sub('change-value', function (_ref9) {
    var componentId = _ref9.componentId,
        path = _ref9.path,
        value = _ref9.value;

    var componentInfo = componentsById[componentId];
    var data = path.slice(0, -1).reduce(function (acc, next) {
      return acc && acc[next];
    }, componentInfo);
    var lastComponent = path.slice(-1)[0];
    if (!data || !lastComponent) {
      return;
    }
    if (data[_Bridge.symbols.type] === 'deptreeNode') {
      data = data.node;
    }
    data[lastComponent] = value;
    if (inspector.inspectedObject && componentId === inspector.inspectedObject.id) {
      inspector.inspect(path.slice(0, -1));
    }
  })];

  return {
    setup: function setup(mobxid, collection) {
      collections[mobxid] = collection;
      if (collection.mobxReact) {
        collection.mobxReact.trackComponents();
        disposables.push(collection.mobx.spy(function (report) {
          inspector.handleUpdate(report.object);
        }), collection.mobxReact.renderReporter.on(function (report) {
          if (isTracking) {
            switch (report.event) {
              case 'destroy':
                onDestroy(report, mobxid);
                break;
              case 'render':
                // timeout to let the dom render
                if (report.node) setTimeout(function () {
                  return onRender(report, mobxid);
                }, 16);
                break;
              default:
                break;
            }
          }
        }));
      }
    },
    dispose: function dispose() {
      disposables.forEach(function (fn) {
        return fn();
      });
    }
  };
};

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(87);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _set = __webpack_require__(88);

var _set2 = _interopRequireDefault(_set);

var _Bridge = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deduplicateDependencies = function deduplicateDependencies(depTree) {
  if (!depTree.dependencies) return;

  for (var i = depTree.dependencies.length - 1; i >= 0; i -= 1) {
    var name = depTree.dependencies[i].name;

    for (var i2 = i - 1; i2 >= 0; i2 -= 1) {
      if (depTree.dependencies[i2].name === name) {
        depTree.dependencies[i2].dependencies = [].concat(depTree.dependencies[i2].dependencies || [], depTree.dependencies[i].dependencies || []);
        depTree.dependencies.splice(i, 1);
        break;
      }
    }
  }
  depTree.dependencies.forEach(deduplicateDependencies);
};

var unique = function unique(list) {
  var seen = new _set2.default();
  return list.filter(function (item) {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  });
};

var getDepsTree = function getDepsTree(node) {
  var _ref;

  return _ref = {
    dependencies: node.observing ? unique(node.observing).map(function (n) {
      return getDepsTree(n);
    }) : [],
    node: node,
    constructorName: node.constructor.name
  }, (0, _defineProperty3.default)(_ref, _Bridge.symbols.name, node.name), (0, _defineProperty3.default)(_ref, _Bridge.symbols.type, 'deptreeNode'), _ref;
};

exports.default = function (node) {
  var dedupe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var tree = getDepsTree(node);
  if (dedupe) deduplicateDependencies(tree);
  return tree;
};

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _highlight = __webpack_require__(188);

exports.default = function (collections, done) {
  var find = function find(target) {
    var node = target;
    while (node) {
      for (var mobxid in collections) {
        if (collections[mobxid].mobxReact) {
          var component = collections[mobxid].mobxReact.componentByNodeRegistery.get(node);
          if (component) {
            return component;
          }
        }
      }
      node = node.parentNode;
    }
    return undefined;
  };

  var handleMouseMove = function handleMouseMove(e) {
    (0, _highlight.stopHighlightingAll)();
    if (find(e.target)) {
      (0, _highlight.hightlight)(e.target, { borderColor: 'lightBlue' });
    }
  };

  var handleClick = function handleClick(e) {
    var found = find(e.target);
    if (found) {
      e.stopPropagation();
      e.preventDefault();
      dispose();
      done(found);
    }
  };

  document.addEventListener('mousemove', handleMouseMove, true);
  document.addEventListener('click', handleClick, true);

  var dispose = function dispose() {
    document.removeEventListener('mousemove', handleMouseMove, true);
    document.removeEventListener('click', handleClick, true);
    (0, _highlight.stopHighlightingAll)();
  };

  return dispose;
};

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _highlight = __webpack_require__(188);

exports.default = function (bridge) {
  var updatesEnabled = false;
  var updatesFilterByDuration = { slow: false, medium: false, fast: false };

  var collections = {};

  var disposables = [bridge.sub('backend-mobx-react:set-displaying-updates-enabled', function (value) {
    updatesEnabled = value;
  }), bridge.sub('backend-mobx-react:set-displaying-updates-filter-by-duration', function (filter) {
    updatesFilterByDuration = filter;
  })];

  return {
    setup: function setup(mobxid, collection) {
      collections[mobxid] = collection;
      if (collection.mobxReact) {
        collection.mobxReact.trackComponents();
        disposables.push(collection.mobxReact.renderReporter.on(function (report) {
          if (updatesEnabled) {
            if (report.event === 'render') {
              var _updatesFilterByDurat = updatesFilterByDuration,
                  slow = _updatesFilterByDurat.slow,
                  medium = _updatesFilterByDurat.medium,
                  fast = _updatesFilterByDurat.fast;

              var isFast = report.totalTime < 25;
              var isMedium = !isFast && report.totalTime < 100;
              var isSlow = !isFast && !isMedium;
              var borderColor = void 0;
              var textBgColor = void 0;
              if (isFast) {
                if (!fast) return;
                borderColor = 'rgba(182, 218, 146, 0.75)';
                textBgColor = 'rgba(182, 218, 146, 0.75)';
              } else if (isMedium) {
                if (!medium) return;
                borderColor = 'rgba(228, 195, 66, 0.85)';
                textBgColor = 'rgba(228, 195, 66, 0.85)';
              } else if (isSlow) {
                if (!slow) return;
                borderColor = 'rgba(228, 171, 171, 0.95)';
                textBgColor = 'rgba(228, 171, 171, 0.95)';
              }
              (0, _highlight.hightlight)(report.node, {
                delay: 900,
                borderColor: borderColor,
                content: {
                  text: report.renderTime + ' / ' + report.totalTime + ' ms',
                  backgroundColor: textBgColor
                }
              });
            } else if (report.event === 'destroy') {
              (0, _highlight.stopHighlighting)(report.node);
            }
          }
        }));
      }
    },
    dispose: function dispose() {
      disposables.forEach(function (fn) {
        return fn();
      });
    }
  };
};

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(82);

var _create2 = _interopRequireDefault(_create);

var _changesProcessor = __webpack_require__(330);

var _changesProcessor2 = _interopRequireDefault(_changesProcessor);

var _consoleLogChange = __webpack_require__(331);

var _consoleLogChange2 = _interopRequireDefault(_consoleLogChange);

var _inspector = __webpack_require__(314);

var _inspector2 = _interopRequireDefault(_inspector);

var _storaTempValueInGlobalScope = __webpack_require__(315);

var _storaTempValueInGlobalScope2 = _interopRequireDefault(_storaTempValueInGlobalScope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var summary = function summary(change) {
  var sum = (0, _create2.default)(null);
  sum.summary = true;
  sum.id = change.id;
  sum.type = change.type;
  sum.name = change.name;
  sum.objectName = change.objectName;
  sum.oldValue = change.oldValue;
  sum.newValue = change.newValue;
  sum.hasChildren = change.children.length > 0;
  sum.timestamp = change.timestamp;
  sum.addedCount = change.addedCount;
  sum.removedCount = change.removedCount;
  sum.object = change.object;
  return sum;
};

exports.default = function (bridge) {
  var logEnabled = false;
  var consoleLogEnabled = false;
  var logFilter = undefined;

  var itemsById = {};

  var inspector = (0, _inspector2.default)(function (_ref) {
    var inspectedObject = _ref.inspectedObject,
        path = _ref.path,
        data = _ref.data;

    bridge.send('inspect-change-result', { changeId: inspectedObject.id, path: path, data: data });
  });

  var changesProcessor = (0, _changesProcessor2.default)(function (change) {
    if (logFilter) {
      try {
        var accept = logFilter(change);
        if (!accept) return;
      } catch (e) {
        console.warn('Error while evaluating logFilter:', e); // eslint-disable-line no-console
      }
    }
    if (logEnabled) {
      if (change) {
        itemsById[change.id] = change;
        bridge.send('appended-log-item', summary(change));
      }
    }
    if (consoleLogEnabled) {
      (0, _consoleLogChange2.default)(change);
    }
  });

  var disposables = [bridge.sub('set-log-enabled', function (value) {
    logEnabled = value;
    bridge.send('log-enabled', value);
    if (!logEnabled && !consoleLogEnabled) changesProcessor.reset();
  }), bridge.sub('set-console-log-enabled', function (value) {
    consoleLogEnabled = value;
    bridge.send('console-log-enabled', value);
    if (!logEnabled && !consoleLogEnabled) changesProcessor.reset();
  }), bridge.sub('get-log-item-details', function (id) {
    bridge.send('log-item-details', itemsById[id]);
    return itemsById[id];
  }), bridge.sub('remove-log-items', function (ids) {
    ids.forEach(function (id) {
      delete itemsById[id];
    });
  }), bridge.sub('remove-all-log-items', function () {
    itemsById = {};
  }), bridge.sub('inspect-change', function (_ref2) {
    var changeId = _ref2.changeId,
        path = _ref2.path;

    if (!inspector.inspectedObject || changeId !== inspector.inspectedObject.id) {
      inspector.setInspectedObject(itemsById[changeId]);
    }
    inspector.inspect(path);
  }), bridge.sub('stop-inspecting-change', function (_ref3) {
    var changeId = _ref3.changeId,
        path = _ref3.path;

    if (inspector.inspectedObject && changeId === inspector.inspectedObject.id) {
      inspector.forget(path);
    }
  }), bridge.sub('log:makeGlobal', function (_ref4) {
    var changeId = _ref4.changeId,
        path = _ref4.path;

    var change = itemsById[changeId];
    var value = path.reduce(function (acc, next) {
      return acc && acc[next];
    }, change);
    (0, _storaTempValueInGlobalScope2.default)(value);
  })];

  return {
    setup: function setup(mobxid, collection) {
      if (collection.mobx) {
        disposables.push(collection.mobx.spy(function (change) {
          if (logEnabled || consoleLogEnabled) {
            changesProcessor.push(change, collection.mobx);
          }
        }));
      }
    },
    dispose: function dispose() {
      disposables.forEach(function (fn) {
        return fn();
      });
    }
  };
};

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(82);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(33);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getId = function () {
  var i = 0;
  return function () {
    i += 1;
    return i;
  };
}();

function observableName(mobx, object) {
  if (!object || (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object') {
    return '';
  }
  return mobx.getDebugName(object);
}

function isPrimitive(value) {
  return value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}

function getNameForThis(mobx, who) {
  if (who === null || who === undefined) {
    return '';
  }
  if (who && (typeof who === 'undefined' ? 'undefined' : (0, _typeof3.default)(who)) === 'object') {
    var $mobx = mobx.$mobx || '$mobx';
    if (who && who[$mobx]) {
      return who[$mobx].name;
    }
    if (who.constructor) {
      return who.constructor.name || 'object';
    }
  }
  return '' + (typeof who === 'undefined' ? 'undefined' : (0, _typeof3.default)(who));
}

function formatValue(mobx, value) {
  if (isPrimitive(value)) {
    if (typeof value === 'string' && value.length > 100) {
      return value.substr(0, 97) + '...';
    }
    return value;
  }
  return '(' + getNameForThis(mobx, value) + ')';
}

exports.default = function (onChange) {
  var path = [];

  var push = function push(_change, mobx) {
    var change = (0, _create2.default)(null);
    for (var p in _change) {
      if (Object.prototype.hasOwnProperty.call(_change, p)) {
        change[p] = _change[p];
      }
    }
    change.id = getId();
    change.timestamp = Date.now();
    change.children = [];

    var isGroupStart = change.spyReportStart === true;
    var isGroupEnd = change.spyReportEnd === true;

    if (isGroupEnd) {
      if (path.length === 0) {
        // eslint-disable-next-line no-console
        if (false) console.warn('groupStart & groupEnd mismatch');
        return;
      }
      var superChange = path[path.length - 1];
      path.splice(path.length - 1);
      superChange.time = change.time;
      change.time = undefined;
      if (path.length === 0) {
        onChange(superChange);
      }
    } else {
      if (path.length > 0) {
        path[path.length - 1].children.push(change);
      }
      if (isGroupStart) {
        path.push(change);
      }
      switch (change.type) {
        case 'action':
          // name, target, arguments, fn
          change.targetName = getNameForThis(mobx, change.target);
          break;
        case 'transaction':
          // name, target
          change.targetName = getNameForThis(mobx, change.target);
          break;
        case 'scheduled-reaction':
          // object
          change.objectName = observableName(mobx, change.object);
          break;
        case 'reaction':
          // object, fn
          change.objectName = observableName(mobx, change.object);
          break;
        case 'compute':
          // object, target, fn
          change.objectName = observableName(mobx, change.object);
          change.targetName = getNameForThis(mobx, change.target);
          break;
        case 'error':
          // message
          if (path.length > 0) {
            onChange(path[0]);
            reset();
          } else {
            onChange(change);
          }
          return; // game over
        case 'update':
          // (array) object, index, newValue, oldValue
          // (map, obbject) object, name, newValue, oldValue
          // (value) object, newValue, oldValue
          change.objectName = observableName(mobx, change.object);
          change.newValue = formatValue(mobx, change.newValue);
          change.oldValue = formatValue(mobx, change.oldValue);
          break;
        case 'splice':
          change.objectName = observableName(mobx, change.object);
          // (array) object, index, added, removed, addedCount, removedCount
          break;
        case 'add':
          // (map, object) object, name, newValue
          change.objectName = observableName(mobx, change.object);
          change.newValue = formatValue(mobx, change.newValue);
          break;
        case 'delete':
          // (map) object, name, oldValue
          change.objectName = observableName(mobx, change.object);
          change.oldValue = formatValue(mobx, change.oldValue);
          break;
        case 'create':
          // (value) object, newValue
          change.objectName = observableName(mobx, change.object);
          change.newValue = formatValue(mobx, change.newValue);
          break;
        default:
          break;
      }

      if (path.length === 0) {
        onChange(change);
      }
    }
  };

  var reset = function reset() {
    if (path.length > 0) {
      path = [];
    }
  };

  return { push: push, reset: reset };
};

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(52);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = consoleLogChange;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var advicedToUseChrome = false;

var formatChange = function formatChange(change) {
  switch (change.type) {
    case 'action':
      // name, target, arguments, fn
      return ["%caction '%s' (%s)", 'color:dodgerblue', change.name, change.targetName];
    case 'transaction':
      // name, target
      return ["%ctransaction '%s' (%s)", 'color:gray', change.name, change.targetName];
    case 'scheduled-reaction':
      // object
      return ["%cscheduled async reaction '%s'", 'color:#10a210', change.objectName];
    case 'reaction':
      // object, fn
      return ["%creaction '%s'", 'color:#10a210', change.objectName];
    case 'compute':
      // object, target, fn
      return ["%ccomputed '%s' (%s)", 'color:#10a210', change.objectName, change.targetName];
    case 'error':
      // message
      return ['%cerror: %s', 'color:tomato', change.message];
    case 'update':
      // (array) object, index, newValue, oldValue
      // (map, obbject) object, name, newValue, oldValue
      // (value) object, newValue, oldValue
      if (change.index) {
        return ["updated '%s[%s]': %s (was: %s)", change.objectName, change.index, change.newValue, change.oldValue];
      }
      if (change.name) {
        return ["updated '%s.%s': %s (was: %s)", change.objectName, change.name, change.newValue, change.oldValue];
      }
      return ["updated '%s': %s (was: %s)", change.objectName, change.newValue, change.oldValue];
    case 'splice':
      // (array) object, index, added, removed, addedCount, removedCount
      return ["spliced '%s': index %d, added %d, removed %d", change.objectName, change.index, change.addedCount, change.removedCount];
    case 'add':
      // (map, object) object, name, newValue
      return ["set '%s.%s': %s", change.objectName, change.name, change.newValue];
    case 'delete':
      // (map) object, name, oldValue
      return ["removed '%s.%s' (was %s)", change.objectName, change.name, change.oldValue];
    case 'create':
      // (value) object, newValue
      return ["set '%s': %s", change.objectName, change.newValue];
    default:
      // generic fallback for future events
      return [change.type, change];
  }
};

var getAdditionalMessages = function getAdditionalMessages(change) {
  switch (change.type) {
    case 'action':
      return [{ type: 'misc-log', data: change.arguments, children: [] }, { type: 'misc-trace', children: [] }];
    case 'reaction':
      return [{ type: 'misc-trace', children: [] }];
    case 'error':
      // message
      return [{ type: 'misc-trace', children: [] }];
    case 'update':
      return [{
        type: 'misc-dir',
        data: { newValue: change.newValue, oldValue: change.oldValue },
        children: []
      }, { type: 'misc-trace', children: [] }];
    case 'splice':
      return [{
        type: 'misc-dir',
        data: { added: change.added, removed: change.removed },
        children: []
      }, { type: 'misc-trace', children: [] }];
    case 'add':
      return [{ type: 'misc-dir', data: { newValue: change.newValue }, children: [] }, { type: 'misc-trace', children: [] }];
    case 'delete':
      return [{ type: 'misc-dir', data: { oldValue: change.oldValue }, children: [] }, { type: 'misc-trace', children: [] }];
    case 'create':
      return [{ type: 'misc-dir', data: { newValue: change.newValue }, children: [] }, { type: 'misc-trace', children: [] }];
    default:
      return [];
  }
};

var consoleX = function () {
  var $consoleX = {
    log: function log() {},
    groupCollapsed: function groupCollapsed() {},
    groupEnd: function groupEnd() {},
    warn: function warn() {},
    trace: function trace() {}
  };
  if (typeof console === 'undefined') return $consoleX;

  if (console.log) {
    $consoleX.log = function () {
      var _console;

      return (_console = console).log.apply(_console, arguments);
    };
  }
  if (console.groupCollapsed) {
    $consoleX.groupCollapsed = function () {
      var _console2;

      return (_console2 = console).groupCollapsed.apply(_console2, arguments);
    };
  }
  if (console.groupEnd) {
    $consoleX.groupEnd = function () {
      var _console3;

      return (_console3 = console).groupEnd.apply(_console3, arguments);
    };
  }
  if (console.groupEnd) {
    $consoleX.groupEnd = function () {
      var _console4;

      return (_console4 = console).groupEnd.apply(_console4, arguments);
    };
  }
  if (console.warn) {
    $consoleX.warn = function () {
      var _console5;

      return (_console5 = console).warn.apply(_console5, arguments);
    };
  }
  // TODO: use stacktrace.js or similar and strip off unrelevant stuff?
  if (console.trace) {
    $consoleX.trace = function () {
      var _console6;

      return (_console6 = console).trace.apply(_console6, arguments);
    };
  }
  return $consoleX;
}();

consoleX.dir = function () {
  var _console7;

  return (_console7 = console).dir.apply(_console7, arguments);
};

function consoleLogChange(change) {
  if (advicedToUseChrome === false && typeof window.navigator !== 'undefined' && window.navigator.userAgent.indexOf('Chrome') === -1) {
    consoleX.warn('The output of the MobX logger is optimized for Chrome');
    advicedToUseChrome = true;
  }

  var additionalMessages = getAdditionalMessages(change);
  var group = change.children.length + additionalMessages.length > 0;

  if (group) {
    consoleX.groupCollapsed.apply(consoleX, (0, _toConsumableArray3.default)(formatChange(change)));

    for (var i = 0; i < change.children.length; i += 1) {
      consoleLogChange(change.children[i]);
    }

    for (var _i = 0; _i < additionalMessages.length; _i += 1) {
      var msg = additionalMessages[_i];
      if (msg.type === 'misc-log') {
        consoleX.log(msg.data);
      } else if (msg.type === 'misc-dir') {
        consoleX.dir(msg.data);
      } else if (msg.type === 'misc-trace') {
        consoleX.trace();
      }
    }

    consoleX.groupEnd();
  } else if (change.type === 'error') {
    consoleX.error.apply(consoleX, (0, _toConsumableArray3.default)(formatChange(change)));
  } else {
    consoleX.log.apply(consoleX, (0, _toConsumableArray3.default)(formatChange(change)));
  }
}

/***/ })
/******/ ]);