
/*! @timeone-group/webanalytics 0.1.0 https://github.com/https://github.com/TimeOne-Group/webanalytics.git#readme @license GPL-3.0 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*! @timeone-group/error-logger-js 0.2.3 https://github.com/https://github.com/TimeOne-Group/error-logger-js#readme @license GPL-3.0 */
  var AppError = /*#__PURE__*/function (_Error) {
    _inherits(AppError, _Error);

    var _super = _createSuper(AppError);

    /**
     * AppError Constructor
     * @param {integer} severity
     * @param  {...any} params
     */
    function AppError(severity) {
      var _this;

      _classCallCheck(this, AppError);

      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(params));
      _this.severity = severity;
      return _this;
    }

    return AppError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var Severity = {
    ERROR: 1,
    WARNING: 2
  };
  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */

  var Logger = {
    catchError: function catchError(error) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Logger';

      if (error instanceof AppError) {
        switch (error.severity) {
          case Severity.WARNING:
            console.warn("[".concat(prefix, "] WARNING ").concat(error.message));
            break;

          case Severity.ERROR:
          default:
            console.error("[".concat(prefix, "] ERROR ").concat(error.message));
            break;
        }
      } else if (error instanceof Error) {
        console.error("[".concat(prefix, "] ERROR(js-core) ").concat(error.message));
      } else {
        console.error("[".concat(prefix, "] ERROR Unabled to treat error"), error);
      }
    }
  };

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule$1(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var check$1 = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$2 =
    /* global globalThis -- safe */
    check$1(typeof globalThis == 'object' && globalThis) ||
    check$1(typeof window == 'object' && window) ||
    check$1(typeof self == 'object' && self) ||
    check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var fails$1 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors$1 = !fails$1(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var nativePropertyIsEnumerable$1 = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG$1 = getOwnPropertyDescriptor$3 && !nativePropertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$a = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$3(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable$1;

  var objectPropertyIsEnumerable$1 = {
  	f: f$a
  };

  var createPropertyDescriptor$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString$1 = {}.toString;

  var classofRaw$1 = function (it) {
    return toString$1.call(it).slice(8, -1);
  };

  var split$1 = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject$1 = fails$1(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw$1(it) == 'String' ? split$1.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject$1 = function (it) {
    return indexedObject$1(requireObjectCoercible$1(it));
  };

  var isObject$1 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive$1 = function (input, PREFERRED_STRING) {
    if (!isObject$1(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;

  var has$3 = function (it, key) {
    return hasOwnProperty$1.call(it, key);
  };

  var document$2 = global$2.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$1(document$2) && isObject$1(document$2.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$2.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine$1 = !descriptors$1 && !fails$1(function () {
    return Object.defineProperty(documentCreateElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$9 = descriptors$1 ? nativeGetOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$1(O);
    P = toPrimitive$1(P, true);
    if (ie8DomDefine$1) try {
      return nativeGetOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (has$3(O, P)) return createPropertyDescriptor$1(!objectPropertyIsEnumerable$1.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor$1 = {
  	f: f$9
  };

  var anObject$1 = function (it) {
    if (!isObject$1(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var nativeDefineProperty$1 = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$8 = descriptors$1 ? nativeDefineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPrimitive$1(P, true);
    anObject$1(Attributes);
    if (ie8DomDefine$1) try {
      return nativeDefineProperty$1(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty$1 = {
  	f: f$8
  };

  var createNonEnumerableProperty$1 = descriptors$1 ? function (object, key, value) {
    return objectDefineProperty$1.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal$1 = function (key, value) {
    try {
      createNonEnumerableProperty$1(global$2, key, value);
    } catch (error) {
      global$2[key] = value;
    } return value;
  };

  var SHARED$1 = '__core-js_shared__';
  var store$4 = global$2[SHARED$1] || setGlobal$1(SHARED$1, {});

  var sharedStore$1 = store$4;

  var functionToString$1 = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore$1.inspectSource != 'function') {
    sharedStore$1.inspectSource = function (it) {
      return functionToString$1.call(it);
    };
  }

  var inspectSource$1 = sharedStore$1.inspectSource;

  var WeakMap$3 = global$2.WeakMap;

  var nativeWeakMap$1 = typeof WeakMap$3 === 'function' && /native code/.test(inspectSource$1(WeakMap$3));

  var shared$1 = createCommonjsModule$1(function (module) {
  (module.exports = function (key, value) {
    return sharedStore$1[key] || (sharedStore$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.9.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id$1 = 0;
  var postfix$1 = Math.random();

  var uid$1 = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix$1).toString(36);
  };

  var keys$1 = shared$1('keys');

  var sharedKey$1 = function (key) {
    return keys$1[key] || (keys$1[key] = uid$1(key));
  };

  var hiddenKeys$3 = {};

  var WeakMap$2 = global$2.WeakMap;
  var set$1, get$1, has$2;

  var enforce$1 = function (it) {
    return has$2(it) ? get$1(it) : set$1(it, {});
  };

  var getterFor$1 = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$1(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap$1) {
    var store$3 = sharedStore$1.state || (sharedStore$1.state = new WeakMap$2());
    var wmget$1 = store$3.get;
    var wmhas$1 = store$3.has;
    var wmset$1 = store$3.set;
    set$1 = function (it, metadata) {
      metadata.facade = it;
      wmset$1.call(store$3, it, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return wmget$1.call(store$3, it) || {};
    };
    has$2 = function (it) {
      return wmhas$1.call(store$3, it);
    };
  } else {
    var STATE$1 = sharedKey$1('state');
    hiddenKeys$3[STATE$1] = true;
    set$1 = function (it, metadata) {
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE$1, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return has$3(it, STATE$1) ? it[STATE$1] : {};
    };
    has$2 = function (it) {
      return has$3(it, STATE$1);
    };
  }

  var internalState$1 = {
    set: set$1,
    get: get$1,
    has: has$2,
    enforce: enforce$1,
    getterFor: getterFor$1
  };

  var redefine$1 = createCommonjsModule$1(function (module) {
  var getInternalState = internalState$1.get;
  var enforceInternalState = internalState$1.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$3(value, 'name')) {
        createNonEnumerableProperty$1(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global$2) {
      if (simple) O[key] = value;
      else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty$1(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource$1(this);
  });
  });

  var path$1 = global$2;

  var aFunction$2 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$1 = function (namespace, method) {
    return arguments.length < 2 ? aFunction$2(path$1[namespace]) || aFunction$2(global$2[namespace])
      : path$1[namespace] && path$1[namespace][method] || global$2[namespace] && global$2[namespace][method];
  };

  var ceil$1 = Math.ceil;
  var floor$1 = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger$1 = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$1 : ceil$1)(argument);
  };

  var min$3 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    return argument > 0 ? min$3(toInteger$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max$1 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toInteger$1(index);
    return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$1($this);
      var length = toLength$1(O.length);
      var index = toAbsoluteIndex$1(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes$1 = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var indexOf$1 = arrayIncludes$1.indexOf;


  var objectKeysInternal$1 = function (object, names) {
    var O = toIndexedObject$1(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$3(hiddenKeys$3, key) && has$3(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$3(O, key = names[i++])) {
      ~indexOf$1(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$1 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$2 = enumBugKeys$1.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  var f$7 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal$1(O, hiddenKeys$2);
  };

  var objectGetOwnPropertyNames$1 = {
  	f: f$7
  };

  var f$6 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols$1 = {
  	f: f$6
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames$1.f(anObject$1(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols$1.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties$1 = function (target, source) {
    var keys = ownKeys$1(source);
    var defineProperty = objectDefineProperty$1.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor$1.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$3(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement$1 = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data$1[normalize$1(feature)];
    return value == POLYFILL$1 ? true
      : value == NATIVE$1 ? false
      : typeof detection == 'function' ? fails$1(detection)
      : !!detection;
  };

  var normalize$1 = isForced$1.normalize = function (string) {
    return String(string).replace(replacement$1, '.').toLowerCase();
  };

  var data$1 = isForced$1.data = {};
  var NATIVE$1 = isForced$1.NATIVE = 'N';
  var POLYFILL$1 = isForced$1.POLYFILL = 'P';

  var isForced_1$1 = isForced$1;

  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export$1 = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$2;
    } else if (STATIC) {
      target = global$2[TARGET] || setGlobal$1(TARGET, {});
    } else {
      target = (global$2[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$1(sourceProperty, 'sham', true);
      }
      // extend global
      redefine$1(target, key, sourceProperty, options);
    }
  };

  var engineIsNode$1 = classofRaw$1(global$2.process) == 'process';

  var engineUserAgent$1 = getBuiltIn$1('navigator', 'userAgent') || '';

  var process$1 = global$2.process;
  var versions$1 = process$1 && process$1.versions;
  var v8$1 = versions$1 && versions$1.v8;
  var match$1, version$1;

  if (v8$1) {
    match$1 = v8$1.split('.');
    version$1 = match$1[0] + match$1[1];
  } else if (engineUserAgent$1) {
    match$1 = engineUserAgent$1.match(/Edge\/(\d+)/);
    if (!match$1 || match$1[1] >= 74) {
      match$1 = engineUserAgent$1.match(/Chrome\/(\d+)/);
      if (match$1) version$1 = match$1[1];
    }
  }

  var engineV8Version$1 = version$1 && +version$1;

  var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$1(function () {
    /* global Symbol -- required for testing */
    return !Symbol.sham &&
      // Chrome 38 Symbol has incorrect toString conversion
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      (engineIsNode$1 ? engineV8Version$1 === 38 : engineV8Version$1 > 37 && engineV8Version$1 < 41);
  });

  var useSymbolAsUid$1 = nativeSymbol$1
    /* global Symbol -- safe */
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore$1 = shared$1('wks');
  var Symbol$2 = global$2.Symbol;
  var createWellKnownSymbol$1 = useSymbolAsUid$1 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

  var wellKnownSymbol$1 = function (name) {
    if (!has$3(WellKnownSymbolsStore$1, name) || !(nativeSymbol$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      if (nativeSymbol$1 && has$3(Symbol$2, name)) {
        WellKnownSymbolsStore$1[name] = Symbol$2[name];
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol$1('Symbol.' + name);
      }
    } return WellKnownSymbolsStore$1[name];
  };

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  var objectKeys$1 = Object.keys || function keys(O) {
    return objectKeysInternal$1(O, enumBugKeys$1);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  var objectDefineProperties$1 = descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$1(O);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty$1.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html$1 = getBuiltIn$1('document', 'documentElement');

  var GT$1 = '>';
  var LT$1 = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT$1 = 'script';
  var IE_PROTO$2 = sharedKey$1('IE_PROTO');

  var EmptyConstructor$1 = function () { /* empty */ };

  var scriptTag$1 = function (content) {
    return LT$1 + SCRIPT$1 + GT$1 + content + LT$1 + '/' + SCRIPT$1 + GT$1;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX$1 = function (activeXDocument) {
    activeXDocument.write(scriptTag$1(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame$1 = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT$1 + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag$1('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument$1;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument$1 = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument$1 ? NullProtoObjectViaActiveX$1(activeXDocument$1) : NullProtoObjectViaIFrame$1();
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$3[IE_PROTO$2] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate$1 = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor$1[PROTOTYPE$1] = anObject$1(O);
      result = new EmptyConstructor$1();
      EmptyConstructor$1[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$2] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties$1(result, Properties);
  };

  var UNSCOPABLES$1 = wellKnownSymbol$1('unscopables');
  var ArrayPrototype$2 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$2[UNSCOPABLES$1] == undefined) {
    objectDefineProperty$1.f(ArrayPrototype$2, UNSCOPABLES$1, {
      configurable: true,
      value: objectCreate$1(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$1 = function (key) {
    ArrayPrototype$2[UNSCOPABLES$1][key] = true;
  };

  var $includes = arrayIncludes$1.includes;


  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export$1({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var ceil = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger = function toInteger(argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  }; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible


  var requireObjectCoercible = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  }; // `String.prototype.{ codePointAt, at }` methods implementation


  var createMethod$1 = function createMethod$1(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  }

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$1 =
  /* global globalThis -- safe */
  check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  }; // Detect IE8's incomplete defineProperty implementation


  var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var isObject = function isObject(it) {
    return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document$1.createElement(it) : {};
  }; // Thank's IE8 for his funny defineProperty


  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var anObject = function anObject(it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  }; // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function toPrimitive(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  var f$4 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f$4
  };

  var createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function setGlobal(key, value) {
    try {
      createNonEnumerableProperty(global$1, key, value);
    } catch (error) {
      global$1[key] = value;
    }

    return value;
  };

  var SHARED = '__core-js_shared__';
  var store$2 = global$1[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store$2;
  var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;
  var WeakMap$1 = global$1.WeakMap;
  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));
  var hasOwnProperty = {}.hasOwnProperty;

  var has$1 = function has$1(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.9.1',
      mode: 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
  });
  var id = 0;
  var postfix = Math.random();

  var uid = function uid(key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function sharedKey(key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$1 = {};
  var WeakMap = global$1.WeakMap;
  var set, get, has;

  var enforce = function enforce(it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap) {
    var store$1 = sharedStore.state || (sharedStore.state = new WeakMap());
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;

    set = function set(it, metadata) {
      metadata.facade = it;
      wmset.call(store$1, it, metadata);
      return metadata;
    };

    get = function get(it) {
      return wmget.call(store$1, it) || {};
    };

    has = function has(it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;

    set = function set(it, metadata) {
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };

    get = function get(it) {
      return has$1(it, STATE) ? it[STATE] : {};
    };

    has = function has(it) {
      return has$1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };
  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  var f$3 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;
  var objectPropertyIsEnumerable = {
    f: f$3
  };
  var toString = {}.toString;

  var classofRaw = function classofRaw(it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object; // toObject with fallback for non-array-like ES3 strings

  var toIndexedObject = function toIndexedObject(it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  var f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$2
  };
  var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var state;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has$1(value, 'name')) {
          createNonEnumerableProperty(value, 'name', key);
        }

        state = enforceInternalState(value);

        if (!state.source) {
          state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
        }
      }

      if (O === global$1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
  });
  var path = global$1;

  var aFunction$1 = function aFunction$1(variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
  };

  var min$1 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength = function toLength(argument) {
    return argument > 0 ? min$1(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  }; // `Array.prototype.{ indexOf, includes }` methods implementation


  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  var indexOf = arrayIncludes.indexOf;

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (has$1(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
    }

    return result;
  }; // IE8- don't enum bug keys


  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames

  var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
    f: f$1
  };
  var f$5 = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f$5
  }; // all object keys, includes non-enumerable and symbols

  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function copyConstructorProperties(target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) === _typeof(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  }; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject


  var toObject = function toObject(argument) {
    return Object(requireObjectCoercible(argument));
  };

  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has$1(O, IE_PROTO$1)) return O[IE_PROTO$1];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype : null;
  };
  var engineIsNode = classofRaw(global$1.process) == 'process';
  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';
  var process = global$1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    /* global Symbol -- required for testing */
    return !Symbol.sham && ( // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    engineIsNode ? engineV8Version === 38 : engineV8Version > 37 && engineV8Version < 41);
  });
  var useSymbolAsUid = nativeSymbol
  /* global Symbol -- safe */
  && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';
  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global$1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function wellKnownSymbol(name) {
    if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && has$1(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore[name];
  };

  var ITERATOR$5 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function returnThis$2() {
    return this;
  }; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  if (!has$1(IteratorPrototype$2, ITERATOR$5)) {
    createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$5, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  }; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  }; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties


  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    }

    return O;
  };
  var html = getBuiltIn('document', 'documentElement');
  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function EmptyConstructor() {
    /* empty */
  };

  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var _NullProtoObject = function NullProtoObject() {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;

    while (length--) {
      delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    }

    return _NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO] = O;
    } else result = _NullProtoObject();

    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  var defineProperty$1 = objectDefineProperty.f;
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

  var setToStringTag = function setToStringTag(it, TAG, STATIC) {
    if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$3)) {
      defineProperty$1(it, TO_STRING_TAG$3, {
        configurable: true,
        value: TAG
      });
    }
  };

  var iterators = {};
  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  var returnThis$1 = function returnThis$1() {
    return this;
  };

  var createIteratorConstructor = function createIteratorConstructor(IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var aPossiblePrototype = function aPossiblePrototype(it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };
  /* eslint-disable no-proto -- safe */
  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.


  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function returnThis() {
    return this;
  };

  var defineIterator = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    } // define iterator


    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
    }

    iterators[NAME] = defaultIterator; // export additional methods

    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    return methods;
  };

  var charAt = stringMultibyte.charAt;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$1 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$1(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var aFunction = function aFunction(it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  }; // optional / simple context binding


  var functionBindContext = function functionBindContext(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var iteratorClose = function iteratorClose(iterator) {
    var returnMethod = iterator['return'];

    if (returnMethod !== undefined) {
      return anObject(returnMethod.call(iterator)).value;
    }
  }; // call something on iterator step with safe closing on error


  var callWithSafeIterationClosing = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
  };

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod = function isArrayIteratorMethod(it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$3] === it);
  };

  var createProperty = function createProperty(object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG$2] = 'z';
  var toStringTagSupport = String(test) === '[object z]';
  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };
  var ITERATOR$2 = wellKnownSymbol('iterator');

  var getIteratorMethod = function getIteratorMethod(it) {
    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || iterators[classof(it)];
  }; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from


  var arrayFrom = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();

      for (; !(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = toLength(O.length);
      result = new C(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$1] = function () {
      return this;
    }; // eslint-disable-next-line no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$1] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  _export({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    from: arrayFrom
  });

  path.Array.from;
  var freezing = !fails(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;
    var METADATA = uid('meta');
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var setMetadata = function setMetadata(it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + ++id,
          // object ID
          weakData: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!has$1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMetadata(it); // return object ID
      }

      return it[METADATA].objectID;
    };

    var getWeakData = function getWeakData(it, create) {
      if (!has$1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMetadata(it); // return the store of weak collections IDs
      }

      return it[METADATA].weakData;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has$1(it, METADATA)) setMetadata(it);
      return it;
    };

    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys$1[METADATA] = true;
  });

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose(iterator);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = toLength(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        }

        return new Result(false);
      }

      iterator = iterFn.call(iterable);
    }

    next = iterator.next;

    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator);
        throw error;
      }

      if (_typeof(result) == 'object' && result && result instanceof Result) return result;
    }

    return new Result(false);
  };

  var anInstance = function anInstance(it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  }; // makes subclassing work correct for wrapped built-ins


  var inheritIfRequired = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var collection = function collection(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function fixMethod(KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    var REPLACE = isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    })));

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      internalMetadata.REQUIRED = true;
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing

      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;

    _export({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);

    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var redefineAll = function redefineAll(target, src, options) {
    for (var key in src) {
      redefine(target, key, src[key], options);
    }

    return target;
  };

  var SPECIES = wellKnownSymbol('species');

  var setSpecies = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES]) {
      defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var defineProperty = objectDefineProperty.f;
  var fastKey = internalMetadata.fastKey;
  var setInternalState$1 = internalState.set;
  var internalStateGetterFor = internalState.getterFor;
  var collectionStrong = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME);
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          index: objectCreate(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!descriptors) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (descriptors) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function getEntry(that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (descriptors) state.size = 0;else that.size = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function _delete(key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (descriptors) state.size--;else that.size--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            }
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll(C.prototype, IS_MAP ? {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (descriptors) defineProperty(C.prototype, 'size', {
        get: function get() {
          return getInternalState(this).size;
        }
      });
      return C;
    },
    setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

      defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$1(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) {
          entry = entry.previous;
        } // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      setSpecies(CONSTRUCTOR_NAME);
    }
  }; // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects

  collection('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong); // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  }; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, {
      unsafe: true
    });
  } // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods


  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables = function addToUnscopables(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  var ITERATOR = wellKnownSymbol('iterator');
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global$1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;

    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }

      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }

      if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  path.Set;

  var Key = /*#__PURE__*/function () {
    function Key(prefix) {
      _classCallCheck(this, Key);

      this.prefix = prefix;
    }

    _createClass(Key, [{
      key: "get",
      value: function get(id) {
        return "".concat(this.prefix, "_").concat(id);
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        return this.get('INDEX');
      }
    }]);

    return Key;
  }();

  var lzString = createCommonjsModule(function (module) {
    // Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
    // This work is free. You can redistribute it and/or modify it
    // under the terms of the WTFPL, Version 2
    // For more information see LICENSE.txt or http://www.wtfpl.net/
    //
    // For more information, the home page:
    // http://pieroxy.net/blog/pages/lz-string/testing.html
    //
    // LZ-based compression algorithm, version 1.4.4
    var LZString = function () {
      // private property
      var f = String.fromCharCode;
      var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
      var baseReverseDic = {};

      function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
          baseReverseDic[alphabet] = {};

          for (var i = 0; i < alphabet.length; i++) {
            baseReverseDic[alphabet][alphabet.charAt(i)] = i;
          }
        }

        return baseReverseDic[alphabet][character];
      }

      var LZString = {
        compressToBase64: function compressToBase64(input) {
          if (input == null) return "";

          var res = LZString._compress(input, 6, function (a) {
            return keyStrBase64.charAt(a);
          });

          switch (res.length % 4) {
            // To produce valid Base64
            default: // When could this happen ?

            case 0:
              return res;

            case 1:
              return res + "===";

            case 2:
              return res + "==";

            case 3:
              return res + "=";
          }
        },
        decompressFromBase64: function decompressFromBase64(input) {
          if (input == null) return "";
          if (input == "") return null;
          return LZString._decompress(input.length, 32, function (index) {
            return getBaseValue(keyStrBase64, input.charAt(index));
          });
        },
        compressToUTF16: function compressToUTF16(input) {
          if (input == null) return "";
          return LZString._compress(input, 15, function (a) {
            return f(a + 32);
          }) + " ";
        },
        decompressFromUTF16: function decompressFromUTF16(compressed) {
          if (compressed == null) return "";
          if (compressed == "") return null;
          return LZString._decompress(compressed.length, 16384, function (index) {
            return compressed.charCodeAt(index) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function compressToUint8Array(uncompressed) {
          var compressed = LZString.compress(uncompressed);
          var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

          for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
            var current_value = compressed.charCodeAt(i);
            buf[i * 2] = current_value >>> 8;
            buf[i * 2 + 1] = current_value % 256;
          }

          return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function decompressFromUint8Array(compressed) {
          if (compressed === null || compressed === undefined) {
            return LZString.decompress(compressed);
          } else {
            var buf = new Array(compressed.length / 2); // 2 bytes per character

            for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
              buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
            }

            var result = [];
            buf.forEach(function (c) {
              result.push(f(c));
            });
            return LZString.decompress(result.join(''));
          }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
          if (input == null) return "";
          return LZString._compress(input, 6, function (a) {
            return keyStrUriSafe.charAt(a);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
          if (input == null) return "";
          if (input == "") return null;
          input = input.replace(/ /g, "+");
          return LZString._decompress(input.length, 32, function (index) {
            return getBaseValue(keyStrUriSafe, input.charAt(index));
          });
        },
        compress: function compress(uncompressed) {
          return LZString._compress(uncompressed, 16, function (a) {
            return f(a);
          });
        },
        _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
          if (uncompressed == null) return "";
          var i,
              value,
              context_dictionary = {},
              context_dictionaryToCreate = {},
              context_c = "",
              context_wc = "",
              context_w = "",
              context_enlargeIn = 2,
              // Compensate for the first entry which should not count
          context_dictSize = 3,
              context_numBits = 2,
              context_data = [],
              context_data_val = 0,
              context_data_position = 0,
              ii;

          for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);

            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
              context_dictionary[context_c] = context_dictSize++;
              context_dictionaryToCreate[context_c] = true;
            }

            context_wc = context_w + context_c;

            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
              context_w = context_wc;
            } else {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;

                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }

                  value = context_w.charCodeAt(0);

                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;

                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }

                    value = value >> 1;
                  }
                } else {
                  value = 1;

                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;

                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }

                    value = 0;
                  }

                  value = context_w.charCodeAt(0);

                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;

                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }

                    value = value >> 1;
                  }
                }

                context_enlargeIn--;

                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }

                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];

                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;

                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }

                  value = value >> 1;
                }
              }

              context_enlargeIn--;

              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              } // Add wc to the dictionary.


              context_dictionary[context_wc] = context_dictSize++;
              context_w = String(context_c);
            }
          } // Output the code for w.


          if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1;

                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }

                value = context_w.charCodeAt(0);

                for (i = 0; i < 8; i++) {
                  context_data_val = context_data_val << 1 | value & 1;

                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }

                  value = value >> 1;
                }
              } else {
                value = 1;

                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value;

                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }

                  value = 0;
                }

                value = context_w.charCodeAt(0);

                for (i = 0; i < 16; i++) {
                  context_data_val = context_data_val << 1 | value & 1;

                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }

                  value = value >> 1;
                }
              }

              context_enlargeIn--;

              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }

              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];

              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            }

            context_enlargeIn--;

            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
          } // Mark the end of the stream


          value = 2;

          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;

            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }

            value = value >> 1;
          } // Flush the last char


          while (true) {
            context_data_val = context_data_val << 1;

            if (context_data_position == bitsPerChar - 1) {
              context_data.push(getCharFromInt(context_data_val));
              break;
            } else context_data_position++;
          }

          return context_data.join('');
        },
        decompress: function decompress(compressed) {
          if (compressed == null) return "";
          if (compressed == "") return null;
          return LZString._decompress(compressed.length, 32768, function (index) {
            return compressed.charCodeAt(index);
          });
        },
        _decompress: function _decompress(length, resetValue, getNextValue) {
          var dictionary = [],
              enlargeIn = 4,
              dictSize = 4,
              numBits = 3,
              entry = "",
              result = [],
              i,
              w,
              bits,
              resb,
              maxpower,
              power,
              c,
              data = {
            val: getNextValue(0),
            position: resetValue,
            index: 1
          };

          for (i = 0; i < 3; i += 1) {
            dictionary[i] = i;
          }

          bits = 0;
          maxpower = Math.pow(2, 2);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          switch (bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;

              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;

                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }

                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }

              c = f(bits);
              break;

            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;

              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;

                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }

                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }

              c = f(bits);
              break;

            case 2:
              return "";
          }

          dictionary[3] = c;
          w = c;
          result.push(c);

          while (true) {
            if (data.index > length) {
              return "";
            }

            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            switch (c = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;

                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;

                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }

                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }

                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;

              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;

                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;

                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }

                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }

                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;

              case 2:
                return result.join('');
            }

            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }

            if (dictionary[c]) {
              entry = dictionary[c];
            } else {
              if (c === dictSize) {
                entry = w + w.charAt(0);
              } else {
                return null;
              }
            }

            result.push(entry); // Add w+entry[0] to the dictionary.

            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            w = entry;

            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
          }
        }
      };
      return LZString;
    }();

    if (module != null) {
      module.exports = LZString;
    }
  });
  var store = {};
  var InApp = {
    setItem: function setItem(key, value) {
      store[key] = value;
      return true;
    },
    getItem: function getItem(key) {
      return store[key];
    },
    removeItem: function removeItem(key) {
      delete store[key];
      return true;
    }
  };

  var Store = /*#__PURE__*/function () {
    function Store(engine) {
      _classCallCheck(this, Store);

      switch (engine) {
        case 'localStorage':
        case 'sessionStorage':
          this.engine = window[engine];
          break;

        case 'InApp':
          this.engine = InApp;
          break;

        default:
          throw new AppError(Severity.ERROR, 'Unknow engine');
      }
    }

    _createClass(Store, [{
      key: "set",
      value: function set(key, object) {
        this.engine.setItem(key, lzString.compressToBase64(JSON.stringify(object)));
      }
    }, {
      key: "get",
      value: function get(key) {
        var value = this.engine.getItem(key);

        if (value) {
          try {
            return JSON.parse(lzString.decompressFromBase64(value));
          } catch (e) {
            Logger.catchError(e);
            return null;
          }
        }

        return null;
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        return this.engine.removeItem(key);
      }
    }]);

    return Store;
  }();

  var DEFAULT_STORAGE = 'localStorage';
  var DEFAULT_PREFIX = 'storage-js';

  var StorageJS = /*#__PURE__*/function () {
    function StorageJS() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          storageEngine = _ref.storageEngine,
          defaultTTL = _ref.defaultTTL,
          prefix = _ref.prefix;

      _classCallCheck(this, StorageJS);

      this.store = new Store(storageEngine || DEFAULT_STORAGE);
      this.defaultTTL = defaultTTL || 0;
      this.key = new Key(prefix || DEFAULT_PREFIX);
    }

    _createClass(StorageJS, [{
      key: "save",
      value: function save(object) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            ttl = _ref2.ttl;

        if (!object.id) {
          throw new AppError(Severity.ERROR, 'Object must have an id property');
        }

        var savedObject = {
          object: object
        };
        var now = new Date().getTime();

        if (ttl) {
          savedObject.ttl = now + ttl * 1000;
        } else if (this.defaultTTL > 0) {
          savedObject.ttl = now + this.defaultTTL * 1000;
        }

        this.store.set(this.key.get(object.id), savedObject);
        this.addToIndex(object.id);
      }
    }, {
      key: "find",
      value: function find(id) {
        var savedObject = this.store.get(this.key.get(id));

        if (savedObject && (!savedObject.ttl || new Date().getTime() <= savedObject.ttl)) {
          return savedObject.object;
        }

        return {};
      }
    }, {
      key: "findAll",
      value: function findAll() {
        var _this = this;

        return Array.from(this.loadIndex()).map(function (id) {
          return _this.find(id);
        }).filter(function (object) {
          return !!object;
        });
      }
    }, {
      key: "delete",
      value: function _delete(id) {
        this.removeToIndex(id);
        return this.store.delete(this.key.get(id));
      }
    }, {
      key: "loadIndex",
      value: function loadIndex() {
        var index = this.store.get(this.key.getIndex());

        if (index) {
          return new Set(index);
        }

        return new Set();
      }
    }, {
      key: "addToIndex",
      value: function addToIndex(id) {
        var index = this.loadIndex();
        index.add(id);
        this.store.set(this.key.getIndex(), _toConsumableArray(index));
      }
    }, {
      key: "removeToIndex",
      value: function removeToIndex(id) {
        var index = this.loadIndex();
        index.delete(id);
        this.store.set(this.key.getIndex(), _toConsumableArray(index));
      }
    }, {
      key: "resetIndex",
      value: function resetIndex() {
        this.store.delete(this.key.getIndex());
      }
    }]);

    return StorageJS;
  }();

  /**
   * A JavaScript implementation of the SHA family of hashes - defined in FIPS PUB 180-4, FIPS PUB 202,
   * and SP 800-185 - as well as the corresponding HMAC implementation as defined in FIPS PUB 198-1.
   *
   * Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
   * Distributed under the BSD License
   * See http://caligatio.github.com/jsSHA/ for more information
   */
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  function n(t, n, e, r) {
    var i, s, o;
    var h = n || [0],
        u = (e = e || 0) >>> 3,
        w = -1 === r ? 3 : 0;

    for (i = 0; i < t.length; i += 1) {
      o = i + u, s = o >>> 2, h.length <= s && h.push(0), h[s] |= t[i] << 8 * (w + r * (o % 4));
    }

    return {
      value: h,
      binLen: 8 * t.length + e
    };
  }

  function e(e, r, i) {
    switch (r) {
      case "UTF8":
      case "UTF16BE":
      case "UTF16LE":
        break;

      default:
        throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
    }

    switch (e) {
      case "HEX":
        return function (t, n, e) {
          return function (t, n, e, r) {
            var i, s, o, h;
            if (0 != t.length % 2) throw new Error("String of HEX type must be in byte increments");
            var u = n || [0],
                w = (e = e || 0) >>> 3,
                c = -1 === r ? 3 : 0;

            for (i = 0; i < t.length; i += 2) {
              if (s = parseInt(t.substr(i, 2), 16), isNaN(s)) throw new Error("String of HEX type contains invalid characters");

              for (h = (i >>> 1) + w, o = h >>> 2; u.length <= o;) {
                u.push(0);
              }

              u[o] |= s << 8 * (c + r * (h % 4));
            }

            return {
              value: u,
              binLen: 4 * t.length + e
            };
          }(t, n, e, i);
        };

      case "TEXT":
        return function (t, n, e) {
          return function (t, n, e, r, i) {
            var s,
                o,
                h,
                u,
                w,
                c,
                f,
                a,
                l = 0;
            var A = e || [0],
                E = (r = r || 0) >>> 3;
            if ("UTF8" === n) for (f = -1 === i ? 3 : 0, h = 0; h < t.length; h += 1) {
              for (s = t.charCodeAt(h), o = [], 128 > s ? o.push(s) : 2048 > s ? (o.push(192 | s >>> 6), o.push(128 | 63 & s)) : 55296 > s || 57344 <= s ? o.push(224 | s >>> 12, 128 | s >>> 6 & 63, 128 | 63 & s) : (h += 1, s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(h)), o.push(240 | s >>> 18, 128 | s >>> 12 & 63, 128 | s >>> 6 & 63, 128 | 63 & s)), u = 0; u < o.length; u += 1) {
                for (c = l + E, w = c >>> 2; A.length <= w;) {
                  A.push(0);
                }

                A[w] |= o[u] << 8 * (f + i * (c % 4)), l += 1;
              }
            } else for (f = -1 === i ? 2 : 0, a = "UTF16LE" === n && 1 !== i || "UTF16LE" !== n && 1 === i, h = 0; h < t.length; h += 1) {
              for (s = t.charCodeAt(h), !0 === a && (u = 255 & s, s = u << 8 | s >>> 8), c = l + E, w = c >>> 2; A.length <= w;) {
                A.push(0);
              }

              A[w] |= s << 8 * (f + i * (c % 4)), l += 2;
            }
            return {
              value: A,
              binLen: 8 * l + r
            };
          }(t, r, n, e, i);
        };

      case "B64":
        return function (n, e, r) {
          return function (n, e, r, i) {
            var s,
                o,
                h,
                u,
                w,
                c,
                f,
                a = 0;
            var l = e || [0],
                A = (r = r || 0) >>> 3,
                E = -1 === i ? 3 : 0,
                H = n.indexOf("=");
            if (-1 === n.search(/^[a-zA-Z0-9=+/]+$/)) throw new Error("Invalid character in base-64 string");
            if (n = n.replace(/=/g, ""), -1 !== H && H < n.length) throw new Error("Invalid '=' found in base-64 string");

            for (o = 0; o < n.length; o += 4) {
              for (w = n.substr(o, 4), u = 0, h = 0; h < w.length; h += 1) {
                s = t.indexOf(w.charAt(h)), u |= s << 18 - 6 * h;
              }

              for (h = 0; h < w.length - 1; h += 1) {
                for (f = a + A, c = f >>> 2; l.length <= c;) {
                  l.push(0);
                }

                l[c] |= (u >>> 16 - 8 * h & 255) << 8 * (E + i * (f % 4)), a += 1;
              }
            }

            return {
              value: l,
              binLen: 8 * a + r
            };
          }(n, e, r, i);
        };

      case "BYTES":
        return function (t, n, e) {
          return function (t, n, e, r) {
            var i, s, o, h;
            var u = n || [0],
                w = (e = e || 0) >>> 3,
                c = -1 === r ? 3 : 0;

            for (s = 0; s < t.length; s += 1) {
              i = t.charCodeAt(s), h = s + w, o = h >>> 2, u.length <= o && u.push(0), u[o] |= i << 8 * (c + r * (h % 4));
            }

            return {
              value: u,
              binLen: 8 * t.length + e
            };
          }(t, n, e, i);
        };

      case "ARRAYBUFFER":
        try {
          new ArrayBuffer(0);
        } catch (t) {
          throw new Error("ARRAYBUFFER not supported by this environment");
        }

        return function (t, e, r) {
          return function (t, e, r, i) {
            return n(new Uint8Array(t), e, r, i);
          }(t, e, r, i);
        };

      case "UINT8ARRAY":
        try {
          new Uint8Array(0);
        } catch (t) {
          throw new Error("UINT8ARRAY not supported by this environment");
        }

        return function (t, e, r) {
          return n(t, e, r, i);
        };

      default:
        throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
    }
  }

  function r(n, e, r, i) {
    switch (n) {
      case "HEX":
        return function (t) {
          return function (t, n, e, r) {
            var i,
                s,
                o = "";
            var h = n / 8,
                u = -1 === e ? 3 : 0;

            for (i = 0; i < h; i += 1) {
              s = t[i >>> 2] >>> 8 * (u + e * (i % 4)), o += "0123456789abcdef".charAt(s >>> 4 & 15) + "0123456789abcdef".charAt(15 & s);
            }

            return r.outputUpper ? o.toUpperCase() : o;
          }(t, e, r, i);
        };

      case "B64":
        return function (n) {
          return function (n, e, r, i) {
            var s,
                o,
                h,
                u,
                w,
                c = "";
            var f = e / 8,
                a = -1 === r ? 3 : 0;

            for (s = 0; s < f; s += 3) {
              for (u = s + 1 < f ? n[s + 1 >>> 2] : 0, w = s + 2 < f ? n[s + 2 >>> 2] : 0, h = (n[s >>> 2] >>> 8 * (a + r * (s % 4)) & 255) << 16 | (u >>> 8 * (a + r * ((s + 1) % 4)) & 255) << 8 | w >>> 8 * (a + r * ((s + 2) % 4)) & 255, o = 0; o < 4; o += 1) {
                c += 8 * s + 6 * o <= e ? t.charAt(h >>> 6 * (3 - o) & 63) : i.b64Pad;
              }
            }

            return c;
          }(n, e, r, i);
        };

      case "BYTES":
        return function (t) {
          return function (t, n, e) {
            var r,
                i,
                s = "";
            var o = n / 8,
                h = -1 === e ? 3 : 0;

            for (r = 0; r < o; r += 1) {
              i = t[r >>> 2] >>> 8 * (h + e * (r % 4)) & 255, s += String.fromCharCode(i);
            }

            return s;
          }(t, e, r);
        };

      case "ARRAYBUFFER":
        try {
          new ArrayBuffer(0);
        } catch (t) {
          throw new Error("ARRAYBUFFER not supported by this environment");
        }

        return function (t) {
          return function (t, n, e) {
            var r;
            var i = n / 8,
                s = new ArrayBuffer(i),
                o = new Uint8Array(s),
                h = -1 === e ? 3 : 0;

            for (r = 0; r < i; r += 1) {
              o[r] = t[r >>> 2] >>> 8 * (h + e * (r % 4)) & 255;
            }

            return s;
          }(t, e, r);
        };

      case "UINT8ARRAY":
        try {
          new Uint8Array(0);
        } catch (t) {
          throw new Error("UINT8ARRAY not supported by this environment");
        }

        return function (t) {
          return function (t, n, e) {
            var r;
            var i = n / 8,
                s = -1 === e ? 3 : 0,
                o = new Uint8Array(i);

            for (r = 0; r < i; r += 1) {
              o[r] = t[r >>> 2] >>> 8 * (s + e * (r % 4)) & 255;
            }

            return o;
          }(t, e, r);
        };

      default:
        throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
    }
  }

  var i = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      s = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
      o = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      h = "Chosen SHA variant is not supported";

  function u(t, n) {
    var e, r;
    var i = t.binLen >>> 3,
        s = n.binLen >>> 3,
        o = i << 3,
        h = 4 - i << 3;

    if (i % 4 != 0) {
      for (e = 0; e < s; e += 4) {
        r = i + e >>> 2, t.value[r] |= n.value[e >>> 2] << o, t.value.push(0), t.value[r + 1] |= n.value[e >>> 2] >>> h;
      }

      return (t.value.length << 2) - 4 >= s + i && t.value.pop(), {
        value: t.value,
        binLen: t.binLen + n.binLen
      };
    }

    return {
      value: t.value.concat(n.value),
      binLen: t.binLen + n.binLen
    };
  }

  function w(t) {
    var n = {
      outputUpper: !1,
      b64Pad: "=",
      outputLen: -1
    },
        e = t || {},
        r = "Output length must be a multiple of 8";

    if (n.outputUpper = e.outputUpper || !1, e.b64Pad && (n.b64Pad = e.b64Pad), e.outputLen) {
      if (e.outputLen % 8 != 0) throw new Error(r);
      n.outputLen = e.outputLen;
    } else if (e.shakeLen) {
      if (e.shakeLen % 8 != 0) throw new Error(r);
      n.outputLen = e.shakeLen;
    }

    if ("boolean" != typeof n.outputUpper) throw new Error("Invalid outputUpper formatting option");
    if ("string" != typeof n.b64Pad) throw new Error("Invalid b64Pad formatting option");
    return n;
  }

  function c(t, n, r, i) {
    var s = t + " must include a value and format";

    if (!n) {
      if (!i) throw new Error(s);
      return i;
    }

    if (void 0 === n.value || !n.format) throw new Error(s);
    return e(n.format, n.encoding || "UTF8", r)(n.value);
  }

  var f = /*#__PURE__*/function () {
    function f(t, n, e) {
      _classCallCheck(this, f);

      var r = e || {};
      if (this.t = n, this.i = r.encoding || "UTF8", this.numRounds = r.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
      this.s = t, this.o = [], this.h = 0, this.u = !1, this.l = 0, this.A = !1, this.H = [], this.S = [];
    }

    _createClass(f, [{
      key: "update",
      value: function update(t) {
        var n,
            e = 0;
        var r = this.p >>> 5,
            i = this.m(t, this.o, this.h),
            s = i.binLen,
            o = i.value,
            h = s >>> 5;

        for (n = 0; n < h; n += r) {
          e + this.p <= s && (this.C = this.R(o.slice(n, n + r), this.C), e += this.p);
        }

        this.l += e, this.o = o.slice(e >>> 5), this.h = s % this.p, this.u = !0;
      }
    }, {
      key: "getHash",
      value: function getHash(t, n) {
        var e,
            i,
            s = this.U;
        var o = w(n);

        if (this.v) {
          if (-1 === o.outputLen) throw new Error("Output length must be specified in options");
          s = o.outputLen;
        }

        var h = r(t, s, this.K, o);
        if (this.A && this.T) return h(this.T(o));

        for (i = this.F(this.o.slice(), this.h, this.l, this.g(this.C), s), e = 1; e < this.numRounds; e += 1) {
          this.v && s % 32 != 0 && (i[i.length - 1] &= 16777215 >>> 24 - s % 32), i = this.F(i, s, 0, this.B(this.s), s);
        }

        return h(i);
      }
    }, {
      key: "setHMACKey",
      value: function setHMACKey(t, n, r) {
        if (!this.L) throw new Error("Variant does not support HMAC");
        if (this.u) throw new Error("Cannot set MAC key after calling update");
        var i = e(n, (r || {}).encoding || "UTF8", this.K);
        this.M(i(t));
      }
    }, {
      key: "M",
      value: function M(t) {
        var n = this.p >>> 3,
            e = n / 4 - 1;
        var r;
        if (1 !== this.numRounds) throw new Error("Cannot set numRounds with MAC");
        if (this.A) throw new Error("MAC key already set");

        for (n < t.binLen / 8 && (t.value = this.F(t.value, t.binLen, 0, this.B(this.s), this.U)); t.value.length <= e;) {
          t.value.push(0);
        }

        for (r = 0; r <= e; r += 1) {
          this.H[r] = 909522486 ^ t.value[r], this.S[r] = 1549556828 ^ t.value[r];
        }

        this.C = this.R(this.H, this.C), this.l = this.p, this.A = !0;
      }
    }, {
      key: "getHMAC",
      value: function getHMAC(t, n) {
        var e = w(n);
        return r(t, this.U, this.K, e)(this.k());
      }
    }, {
      key: "k",
      value: function k() {
        var t;
        if (!this.A) throw new Error("Cannot call getHMAC without first setting MAC key");
        var n = this.F(this.o.slice(), this.h, this.l, this.g(this.C), this.U);
        return t = this.R(this.S, this.B(this.s)), t = this.F(n, this.U, this.p, t, this.U), t;
      }
    }]);

    return f;
  }();

  function a(t, n) {
    return t << n | t >>> 32 - n;
  }

  function l(t, n) {
    return t >>> n | t << 32 - n;
  }

  function A(t, n) {
    return t >>> n;
  }

  function E(t, n, e) {
    return t ^ n ^ e;
  }

  function H(t, n, e) {
    return t & n ^ ~t & e;
  }

  function S(t, n, e) {
    return t & n ^ t & e ^ n & e;
  }

  function b(t) {
    return l(t, 2) ^ l(t, 13) ^ l(t, 22);
  }

  function p(t, n) {
    var e = (65535 & t) + (65535 & n);
    return (65535 & (t >>> 16) + (n >>> 16) + (e >>> 16)) << 16 | 65535 & e;
  }

  function d(t, n, e, r) {
    var i = (65535 & t) + (65535 & n) + (65535 & e) + (65535 & r);
    return (65535 & (t >>> 16) + (n >>> 16) + (e >>> 16) + (r >>> 16) + (i >>> 16)) << 16 | 65535 & i;
  }

  function m(t, n, e, r, i) {
    var s = (65535 & t) + (65535 & n) + (65535 & e) + (65535 & r) + (65535 & i);
    return (65535 & (t >>> 16) + (n >>> 16) + (e >>> 16) + (r >>> 16) + (i >>> 16) + (s >>> 16)) << 16 | 65535 & s;
  }

  function C(t) {
    return l(t, 7) ^ l(t, 18) ^ A(t, 3);
  }

  function y(t) {
    return l(t, 6) ^ l(t, 11) ^ l(t, 25);
  }

  function R(t) {
    return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  }

  function U(t, n) {
    var e, r, i, s, o, h, u;
    var w = [];

    for (e = n[0], r = n[1], i = n[2], s = n[3], o = n[4], u = 0; u < 80; u += 1) {
      w[u] = u < 16 ? t[u] : a(w[u - 3] ^ w[u - 8] ^ w[u - 14] ^ w[u - 16], 1), h = u < 20 ? m(a(e, 5), H(r, i, s), o, 1518500249, w[u]) : u < 40 ? m(a(e, 5), E(r, i, s), o, 1859775393, w[u]) : u < 60 ? m(a(e, 5), S(r, i, s), o, 2400959708, w[u]) : m(a(e, 5), E(r, i, s), o, 3395469782, w[u]), o = s, s = i, i = a(r, 30), r = e, e = h;
    }

    return n[0] = p(e, n[0]), n[1] = p(r, n[1]), n[2] = p(i, n[2]), n[3] = p(s, n[3]), n[4] = p(o, n[4]), n;
  }

  function v(t, n, e, r) {
    var i;
    var s = 15 + (n + 65 >>> 9 << 4),
        o = n + e;

    for (; t.length <= s;) {
      t.push(0);
    }

    for (t[n >>> 5] |= 128 << 24 - n % 32, t[s] = 4294967295 & o, t[s - 1] = o / 4294967296 | 0, i = 0; i < t.length; i += 16) {
      r = U(t.slice(i, i + 16), r);
    }

    return r;
  }

  var K = /*#__PURE__*/function (_f) {
    _inherits(K, _f);

    var _super = _createSuper(K);

    function K(t, n, r) {
      var _this;

      _classCallCheck(this, K);

      if ("SHA-1" !== t) throw new Error(h);
      _this = _super.call(this, t, n, r);
      var i = r || {};
      _this.L = !0, _this.T = _this.k, _this.K = -1, _this.m = e(_this.t, _this.i, _this.K), _this.R = U, _this.g = function (t) {
        return t.slice();
      }, _this.B = R, _this.F = v, _this.C = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], _this.p = 512, _this.U = 160, _this.v = !1, i.hmacKey && _this.M(c("hmacKey", i.hmacKey, _this.K));
      return _this;
    }

    return K;
  }(f);

  function T(t) {
    var n;
    return n = "SHA-224" == t ? s.slice() : o.slice(), n;
  }

  function F(t, n) {
    var e, r, s, o, h, u, w, c, f, a, E;
    var R = [];

    for (e = n[0], r = n[1], s = n[2], o = n[3], h = n[4], u = n[5], w = n[6], c = n[7], E = 0; E < 64; E += 1) {
      R[E] = E < 16 ? t[E] : d(l(U = R[E - 2], 17) ^ l(U, 19) ^ A(U, 10), R[E - 7], C(R[E - 15]), R[E - 16]), f = m(c, y(h), H(h, u, w), i[E], R[E]), a = p(b(e), S(e, r, s)), c = w, w = u, u = h, h = p(o, f), o = s, s = r, r = e, e = p(f, a);
    }

    var U;
    return n[0] = p(e, n[0]), n[1] = p(r, n[1]), n[2] = p(s, n[2]), n[3] = p(o, n[3]), n[4] = p(h, n[4]), n[5] = p(u, n[5]), n[6] = p(w, n[6]), n[7] = p(c, n[7]), n;
  }

  var g = /*#__PURE__*/function (_f2) {
    _inherits(g, _f2);

    var _super2 = _createSuper(g);

    function g(t, n, r) {
      var _this2;

      _classCallCheck(this, g);

      if ("SHA-224" !== t && "SHA-256" !== t) throw new Error(h);
      _this2 = _super2.call(this, t, n, r);
      var i = r || {};
      _this2.T = _this2.k, _this2.L = !0, _this2.K = -1, _this2.m = e(_this2.t, _this2.i, _this2.K), _this2.R = F, _this2.g = function (t) {
        return t.slice();
      }, _this2.B = T, _this2.F = function (n, e, r, i) {
        return function (t, n, e, r, i) {
          var s, o;
          var h = 15 + (n + 65 >>> 9 << 4),
              u = n + e;

          for (; t.length <= h;) {
            t.push(0);
          }

          for (t[n >>> 5] |= 128 << 24 - n % 32, t[h] = 4294967295 & u, t[h - 1] = u / 4294967296 | 0, s = 0; s < t.length; s += 16) {
            r = F(t.slice(s, s + 16), r);
          }

          return o = "SHA-224" === i ? [r[0], r[1], r[2], r[3], r[4], r[5], r[6]] : r, o;
        }(n, e, r, i, t);
      }, _this2.C = T(t), _this2.p = 512, _this2.U = "SHA-224" === t ? 224 : 256, _this2.v = !1, i.hmacKey && _this2.M(c("hmacKey", i.hmacKey, _this2.K));
      return _this2;
    }

    return g;
  }(f);

  var B = function B(t, n) {
    _classCallCheck(this, B);

    this.Y = t, this.N = n;
  };

  function L(t, n) {
    var e;
    return n > 32 ? (e = 64 - n, new B(t.N << n | t.Y >>> e, t.Y << n | t.N >>> e)) : 0 !== n ? (e = 32 - n, new B(t.Y << n | t.N >>> e, t.N << n | t.Y >>> e)) : t;
  }

  function M(t, n) {
    var e;
    return n < 32 ? (e = 32 - n, new B(t.Y >>> n | t.N << e, t.N >>> n | t.Y << e)) : (e = 64 - n, new B(t.N >>> n | t.Y << e, t.Y >>> n | t.N << e));
  }

  function k(t, n) {
    return new B(t.Y >>> n, t.N >>> n | t.Y << 32 - n);
  }

  function Y(t, n, e) {
    return new B(t.Y & n.Y ^ t.Y & e.Y ^ n.Y & e.Y, t.N & n.N ^ t.N & e.N ^ n.N & e.N);
  }

  function N(t) {
    var n = M(t, 28),
        e = M(t, 34),
        r = M(t, 39);
    return new B(n.Y ^ e.Y ^ r.Y, n.N ^ e.N ^ r.N);
  }

  function I(t, n) {
    var e, r;
    e = (65535 & t.N) + (65535 & n.N), r = (t.N >>> 16) + (n.N >>> 16) + (e >>> 16);
    var i = (65535 & r) << 16 | 65535 & e;
    e = (65535 & t.Y) + (65535 & n.Y) + (r >>> 16), r = (t.Y >>> 16) + (n.Y >>> 16) + (e >>> 16);
    return new B((65535 & r) << 16 | 65535 & e, i);
  }

  function X(t, n, e, r) {
    var i, s;
    i = (65535 & t.N) + (65535 & n.N) + (65535 & e.N) + (65535 & r.N), s = (t.N >>> 16) + (n.N >>> 16) + (e.N >>> 16) + (r.N >>> 16) + (i >>> 16);
    var o = (65535 & s) << 16 | 65535 & i;
    i = (65535 & t.Y) + (65535 & n.Y) + (65535 & e.Y) + (65535 & r.Y) + (s >>> 16), s = (t.Y >>> 16) + (n.Y >>> 16) + (e.Y >>> 16) + (r.Y >>> 16) + (i >>> 16);
    return new B((65535 & s) << 16 | 65535 & i, o);
  }

  function z(t, n, e, r, i) {
    var s, o;
    s = (65535 & t.N) + (65535 & n.N) + (65535 & e.N) + (65535 & r.N) + (65535 & i.N), o = (t.N >>> 16) + (n.N >>> 16) + (e.N >>> 16) + (r.N >>> 16) + (i.N >>> 16) + (s >>> 16);
    var h = (65535 & o) << 16 | 65535 & s;
    s = (65535 & t.Y) + (65535 & n.Y) + (65535 & e.Y) + (65535 & r.Y) + (65535 & i.Y) + (o >>> 16), o = (t.Y >>> 16) + (n.Y >>> 16) + (e.Y >>> 16) + (r.Y >>> 16) + (i.Y >>> 16) + (s >>> 16);
    return new B((65535 & o) << 16 | 65535 & s, h);
  }

  function x(t, n) {
    return new B(t.Y ^ n.Y, t.N ^ n.N);
  }

  function _(t) {
    var n = M(t, 19),
        e = M(t, 61),
        r = k(t, 6);
    return new B(n.Y ^ e.Y ^ r.Y, n.N ^ e.N ^ r.N);
  }

  function O(t) {
    var n = M(t, 1),
        e = M(t, 8),
        r = k(t, 7);
    return new B(n.Y ^ e.Y ^ r.Y, n.N ^ e.N ^ r.N);
  }

  function P(t) {
    var n = M(t, 14),
        e = M(t, 18),
        r = M(t, 41);
    return new B(n.Y ^ e.Y ^ r.Y, n.N ^ e.N ^ r.N);
  }

  var V = [new B(i[0], 3609767458), new B(i[1], 602891725), new B(i[2], 3964484399), new B(i[3], 2173295548), new B(i[4], 4081628472), new B(i[5], 3053834265), new B(i[6], 2937671579), new B(i[7], 3664609560), new B(i[8], 2734883394), new B(i[9], 1164996542), new B(i[10], 1323610764), new B(i[11], 3590304994), new B(i[12], 4068182383), new B(i[13], 991336113), new B(i[14], 633803317), new B(i[15], 3479774868), new B(i[16], 2666613458), new B(i[17], 944711139), new B(i[18], 2341262773), new B(i[19], 2007800933), new B(i[20], 1495990901), new B(i[21], 1856431235), new B(i[22], 3175218132), new B(i[23], 2198950837), new B(i[24], 3999719339), new B(i[25], 766784016), new B(i[26], 2566594879), new B(i[27], 3203337956), new B(i[28], 1034457026), new B(i[29], 2466948901), new B(i[30], 3758326383), new B(i[31], 168717936), new B(i[32], 1188179964), new B(i[33], 1546045734), new B(i[34], 1522805485), new B(i[35], 2643833823), new B(i[36], 2343527390), new B(i[37], 1014477480), new B(i[38], 1206759142), new B(i[39], 344077627), new B(i[40], 1290863460), new B(i[41], 3158454273), new B(i[42], 3505952657), new B(i[43], 106217008), new B(i[44], 3606008344), new B(i[45], 1432725776), new B(i[46], 1467031594), new B(i[47], 851169720), new B(i[48], 3100823752), new B(i[49], 1363258195), new B(i[50], 3750685593), new B(i[51], 3785050280), new B(i[52], 3318307427), new B(i[53], 3812723403), new B(i[54], 2003034995), new B(i[55], 3602036899), new B(i[56], 1575990012), new B(i[57], 1125592928), new B(i[58], 2716904306), new B(i[59], 442776044), new B(i[60], 593698344), new B(i[61], 3733110249), new B(i[62], 2999351573), new B(i[63], 3815920427), new B(3391569614, 3928383900), new B(3515267271, 566280711), new B(3940187606, 3454069534), new B(4118630271, 4000239992), new B(116418474, 1914138554), new B(174292421, 2731055270), new B(289380356, 3203993006), new B(460393269, 320620315), new B(685471733, 587496836), new B(852142971, 1086792851), new B(1017036298, 365543100), new B(1126000580, 2618297676), new B(1288033470, 3409855158), new B(1501505948, 4234509866), new B(1607167915, 987167468), new B(1816402316, 1246189591)];

  function Z(t) {
    return "SHA-384" === t ? [new B(3418070365, s[0]), new B(1654270250, s[1]), new B(2438529370, s[2]), new B(355462360, s[3]), new B(1731405415, s[4]), new B(41048885895, s[5]), new B(3675008525, s[6]), new B(1203062813, s[7])] : [new B(o[0], 4089235720), new B(o[1], 2227873595), new B(o[2], 4271175723), new B(o[3], 1595750129), new B(o[4], 2917565137), new B(o[5], 725511199), new B(o[6], 4215389547), new B(o[7], 327033209)];
  }

  function j(t, n) {
    var e, r, i, s, o, h, u, w, c, f, a, l;
    var A = [];

    for (e = n[0], r = n[1], i = n[2], s = n[3], o = n[4], h = n[5], u = n[6], w = n[7], a = 0; a < 80; a += 1) {
      a < 16 ? (l = 2 * a, A[a] = new B(t[l], t[l + 1])) : A[a] = X(_(A[a - 2]), A[a - 7], O(A[a - 15]), A[a - 16]), c = z(w, P(o), (H = h, S = u, new B((E = o).Y & H.Y ^ ~E.Y & S.Y, E.N & H.N ^ ~E.N & S.N)), V[a], A[a]), f = I(N(e), Y(e, r, i)), w = u, u = h, h = o, o = I(s, c), s = i, i = r, r = e, e = I(c, f);
    }

    var E, H, S;
    return n[0] = I(e, n[0]), n[1] = I(r, n[1]), n[2] = I(i, n[2]), n[3] = I(s, n[3]), n[4] = I(o, n[4]), n[5] = I(h, n[5]), n[6] = I(u, n[6]), n[7] = I(w, n[7]), n;
  }

  var q = /*#__PURE__*/function (_f3) {
    _inherits(q, _f3);

    var _super3 = _createSuper(q);

    function q(t, n, r) {
      var _this3;

      _classCallCheck(this, q);

      if ("SHA-384" !== t && "SHA-512" !== t) throw new Error(h);
      _this3 = _super3.call(this, t, n, r);
      var i = r || {};
      _this3.T = _this3.k, _this3.L = !0, _this3.K = -1, _this3.m = e(_this3.t, _this3.i, _this3.K), _this3.R = j, _this3.g = function (t) {
        return t.slice();
      }, _this3.B = Z, _this3.F = function (n, e, r, i) {
        return function (t, n, e, r, i) {
          var s, o;
          var h = 31 + (n + 129 >>> 10 << 5),
              u = n + e;

          for (; t.length <= h;) {
            t.push(0);
          }

          for (t[n >>> 5] |= 128 << 24 - n % 32, t[h] = 4294967295 & u, t[h - 1] = u / 4294967296 | 0, s = 0; s < t.length; s += 32) {
            r = j(t.slice(s, s + 32), r);
          }

          return o = "SHA-384" === i ? [(r = r)[0].Y, r[0].N, r[1].Y, r[1].N, r[2].Y, r[2].N, r[3].Y, r[3].N, r[4].Y, r[4].N, r[5].Y, r[5].N] : [r[0].Y, r[0].N, r[1].Y, r[1].N, r[2].Y, r[2].N, r[3].Y, r[3].N, r[4].Y, r[4].N, r[5].Y, r[5].N, r[6].Y, r[6].N, r[7].Y, r[7].N], o;
        }(n, e, r, i, t);
      }, _this3.C = Z(t), _this3.p = 1024, _this3.U = "SHA-384" === t ? 384 : 512, _this3.v = !1, i.hmacKey && _this3.M(c("hmacKey", i.hmacKey, _this3.K));
      return _this3;
    }

    return q;
  }(f);

  var D = [new B(0, 1), new B(0, 32898), new B(2147483648, 32906), new B(2147483648, 2147516416), new B(0, 32907), new B(0, 2147483649), new B(2147483648, 2147516545), new B(2147483648, 32777), new B(0, 138), new B(0, 136), new B(0, 2147516425), new B(0, 2147483658), new B(0, 2147516555), new B(2147483648, 139), new B(2147483648, 32905), new B(2147483648, 32771), new B(2147483648, 32770), new B(2147483648, 128), new B(0, 32778), new B(2147483648, 2147483658), new B(2147483648, 2147516545), new B(2147483648, 32896), new B(0, 2147483649), new B(2147483648, 2147516424)],
      G = [[0, 36, 3, 41, 18], [1, 44, 10, 45, 2], [62, 6, 43, 15, 61], [28, 55, 25, 21, 56], [27, 20, 39, 8, 14]];

  function J(t) {
    var n;
    var e = [];

    for (n = 0; n < 5; n += 1) {
      e[n] = [new B(0, 0), new B(0, 0), new B(0, 0), new B(0, 0), new B(0, 0)];
    }

    return e;
  }

  function Q(t) {
    var n;
    var e = [];

    for (n = 0; n < 5; n += 1) {
      e[n] = t[n].slice();
    }

    return e;
  }

  function W(t, n) {
    var e, r, i, s;
    var o = [],
        h = [];
    if (null !== t) for (r = 0; r < t.length; r += 2) {
      n[(r >>> 1) % 5][(r >>> 1) / 5 | 0] = x(n[(r >>> 1) % 5][(r >>> 1) / 5 | 0], new B(t[r + 1], t[r]));
    }

    for (e = 0; e < 24; e += 1) {
      for (s = J(), r = 0; r < 5; r += 1) {
        o[r] = (u = n[r][0], w = n[r][1], c = n[r][2], f = n[r][3], a = n[r][4], new B(u.Y ^ w.Y ^ c.Y ^ f.Y ^ a.Y, u.N ^ w.N ^ c.N ^ f.N ^ a.N));
      }

      for (r = 0; r < 5; r += 1) {
        h[r] = x(o[(r + 4) % 5], L(o[(r + 1) % 5], 1));
      }

      for (r = 0; r < 5; r += 1) {
        for (i = 0; i < 5; i += 1) {
          n[r][i] = x(n[r][i], h[r]);
        }
      }

      for (r = 0; r < 5; r += 1) {
        for (i = 0; i < 5; i += 1) {
          s[i][(2 * r + 3 * i) % 5] = L(n[r][i], G[r][i]);
        }
      }

      for (r = 0; r < 5; r += 1) {
        for (i = 0; i < 5; i += 1) {
          n[r][i] = x(s[r][i], new B(~s[(r + 1) % 5][i].Y & s[(r + 2) % 5][i].Y, ~s[(r + 1) % 5][i].N & s[(r + 2) % 5][i].N));
        }
      }

      n[0][0] = x(n[0][0], D[e]);
    }

    var u, w, c, f, a;
    return n;
  }

  function $(t) {
    var n,
        e,
        r = 0;
    var i = [0, 0],
        s = [4294967295 & t, t / 4294967296 & 2097151];

    for (n = 6; n >= 0; n--) {
      e = s[n >> 2] >>> 8 * n & 255, 0 === e && 0 === r || (i[r + 1 >> 2] |= e << 8 * (r + 1), r += 1);
    }

    return r = 0 !== r ? r : 1, i[0] |= r, {
      value: r + 1 > 4 ? i : [i[0]],
      binLen: 8 + 8 * r
    };
  }

  function tt(t) {
    return u($(t.binLen), t);
  }

  function nt(t, n) {
    var e,
        r = $(n);
    r = u(r, t);
    var i = n >>> 2,
        s = (i - r.value.length % i) % i;

    for (e = 0; e < s; e++) {
      r.value.push(0);
    }

    return r.value;
  }

  var et = /*#__PURE__*/function (_f4) {
    _inherits(et, _f4);

    var _super4 = _createSuper(et);

    function et(t, n, r) {
      var _this4;

      _classCallCheck(this, et);

      var i = 6,
          s = 0;
      _this4 = _super4.call(this, t, n, r);
      var o = r || {};

      if (1 !== _this4.numRounds) {
        if (o.kmacKey || o.hmacKey) throw new Error("Cannot set numRounds with MAC");
        if ("CSHAKE128" === _this4.s || "CSHAKE256" === _this4.s) throw new Error("Cannot set numRounds for CSHAKE variants");
      }

      switch (_this4.K = 1, _this4.m = e(_this4.t, _this4.i, _this4.K), _this4.R = W, _this4.g = Q, _this4.B = J, _this4.C = J(), _this4.v = !1, t) {
        case "SHA3-224":
          _this4.p = s = 1152, _this4.U = 224, _this4.L = !0, _this4.T = _this4.k;
          break;

        case "SHA3-256":
          _this4.p = s = 1088, _this4.U = 256, _this4.L = !0, _this4.T = _this4.k;
          break;

        case "SHA3-384":
          _this4.p = s = 832, _this4.U = 384, _this4.L = !0, _this4.T = _this4.k;
          break;

        case "SHA3-512":
          _this4.p = s = 576, _this4.U = 512, _this4.L = !0, _this4.T = _this4.k;
          break;

        case "SHAKE128":
          i = 31, _this4.p = s = 1344, _this4.U = -1, _this4.v = !0, _this4.L = !1, _this4.T = null;
          break;

        case "SHAKE256":
          i = 31, _this4.p = s = 1088, _this4.U = -1, _this4.v = !0, _this4.L = !1, _this4.T = null;
          break;

        case "KMAC128":
          i = 4, _this4.p = s = 1344, _this4.I(r), _this4.U = -1, _this4.v = !0, _this4.L = !1, _this4.T = _this4.X;
          break;

        case "KMAC256":
          i = 4, _this4.p = s = 1088, _this4.I(r), _this4.U = -1, _this4.v = !0, _this4.L = !1, _this4.T = _this4.X;
          break;

        case "CSHAKE128":
          _this4.p = s = 1344, i = _this4._(r), _this4.U = -1, _this4.v = !0, _this4.L = !1, _this4.T = null;
          break;

        case "CSHAKE256":
          _this4.p = s = 1088, i = _this4._(r), _this4.U = -1, _this4.v = !0, _this4.L = !1, _this4.T = null;
          break;

        default:
          throw new Error(h);
      }

      _this4.F = function (t, n, e, r, o) {
        return function (t, n, e, r, i, s, o) {
          var h,
              u,
              w = 0;
          var c = [],
              f = i >>> 5,
              a = n >>> 5;

          for (h = 0; h < a && n >= i; h += f) {
            r = W(t.slice(h, h + f), r), n -= i;
          }

          for (t = t.slice(h), n %= i; t.length < f;) {
            t.push(0);
          }

          for (h = n >>> 3, t[h >> 2] ^= s << h % 4 * 8, t[f - 1] ^= 2147483648, r = W(t, r); 32 * c.length < o && (u = r[w % 5][w / 5 | 0], c.push(u.N), !(32 * c.length >= o));) {
            c.push(u.Y), w += 1, 0 == 64 * w % i && (W(null, r), w = 0);
          }

          return c;
        }(t, n, 0, r, s, i, o);
      }, o.hmacKey && _this4.M(c("hmacKey", o.hmacKey, _this4.K));
      return _this4;
    }

    _createClass(et, [{
      key: "_",
      value: function _(t, n) {
        var e = function (t) {
          var n = t || {};
          return {
            funcName: c("funcName", n.funcName, 1, {
              value: [],
              binLen: 0
            }),
            customization: c("Customization", n.customization, 1, {
              value: [],
              binLen: 0
            })
          };
        }(t || {});

        n && (e.funcName = n);
        var r = u(tt(e.funcName), tt(e.customization));

        if (0 !== e.customization.binLen || 0 !== e.funcName.binLen) {
          var _t = nt(r, this.p >>> 3);

          for (var _n = 0; _n < _t.length; _n += this.p >>> 5) {
            this.C = this.R(_t.slice(_n, _n + (this.p >>> 5)), this.C), this.l += this.p;
          }

          return 4;
        }

        return 31;
      }
    }, {
      key: "I",
      value: function I(t) {
        var n = function (t) {
          var n = t || {};
          return {
            kmacKey: c("kmacKey", n.kmacKey, 1),
            funcName: {
              value: [1128353099],
              binLen: 32
            },
            customization: c("Customization", n.customization, 1, {
              value: [],
              binLen: 0
            })
          };
        }(t || {});

        this._(t, n.funcName);

        var e = nt(tt(n.kmacKey), this.p >>> 3);

        for (var _t2 = 0; _t2 < e.length; _t2 += this.p >>> 5) {
          this.C = this.R(e.slice(_t2, _t2 + (this.p >>> 5)), this.C), this.l += this.p;
        }

        this.A = !0;
      }
    }, {
      key: "X",
      value: function X(t) {
        var n = u({
          value: this.o.slice(),
          binLen: this.h
        }, function (t) {
          var n,
              e,
              r = 0;
          var i = [0, 0],
              s = [4294967295 & t, t / 4294967296 & 2097151];

          for (n = 6; n >= 0; n--) {
            e = s[n >> 2] >>> 8 * n & 255, 0 === e && 0 === r || (i[r >> 2] |= e << 8 * r, r += 1);
          }

          return r = 0 !== r ? r : 1, i[r >> 2] |= r << 8 * r, {
            value: r + 1 > 4 ? i : [i[0]],
            binLen: 8 + 8 * r
          };
        }(t.outputLen));
        return this.F(n.value, n.binLen, this.l, this.g(this.C), t.outputLen);
      }
    }]);

    return et;
  }(f);

  var _default = /*#__PURE__*/function () {
    function _default(t, n, e) {
      _classCallCheck(this, _default);

      if ("SHA-1" == t) this.O = new K(t, n, e);else if ("SHA-224" == t || "SHA-256" == t) this.O = new g(t, n, e);else if ("SHA-384" == t || "SHA-512" == t) this.O = new q(t, n, e);else {
        if ("SHA3-224" != t && "SHA3-256" != t && "SHA3-384" != t && "SHA3-512" != t && "SHAKE128" != t && "SHAKE256" != t && "CSHAKE128" != t && "CSHAKE256" != t && "KMAC128" != t && "KMAC256" != t) throw new Error(h);
        this.O = new et(t, n, e);
      }
    }

    _createClass(_default, [{
      key: "update",
      value: function update(t) {
        this.O.update(t);
      }
    }, {
      key: "getHash",
      value: function getHash(t, n) {
        return this.O.getHash(t, n);
      }
    }, {
      key: "setHMACKey",
      value: function setHMACKey(t, n, e) {
        this.O.setHMACKey(t, n, e);
      }
    }, {
      key: "getHMAC",
      value: function getHMAC(t, n) {
        return this.O.getHMAC(t, n);
      }
    }]);

    return _default;
  }();

  var Global = {
    TRACE_KEY: 'trace',
    STORAGE_PREFIX: 'TWA',
    STORAGE_DEFAULT_TTL: 34164000,
    // 13 months
    CONSENT_STORAGE_DEFAULT_TTL: 180,
    // 6 months
    CONSENT_KEY: 'consent',
    SALT_KEY: 'salt',
    VISITOR_KEY: 'visitor',
    DEFAULT_CONSENT_STATUS: 'exempt',
    COLLECT_URL: 'https://wa.timeone.io/e'
  };

  /*!
   * JavaScript Cookie v2.2.1
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   */

  var js_cookie = createCommonjsModule$1(function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  });

  var ConsentStatus = /*#__PURE__*/function () {
    function ConsentStatus(twaId) {
      _classCallCheck(this, ConsentStatus);

      this.twaId = twaId;
    }

    _createClass(ConsentStatus, [{
      key: "set",
      value: function set(status) {
        js_cookie.set(this.getKey(), status, {
          expires: Global.CONSENT_STORAGE_DEFAULT_TTL,
          sameSite: 'strict'
        });
      }
    }, {
      key: "get",
      value: function get() {
        return js_cookie.get(this.getKey());
      }
    }, {
      key: "getKey",
      value: function getKey() {
        return "".concat(Global.STORAGE_PREFIX, "_").concat(Global.CONSENT_KEY, "_").concat(this.twaId);
      }
    }]);

    return ConsentStatus;
  }();

  var MATCH$1 = wellKnownSymbol$1('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw$1(it) == 'RegExp');
  };

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var MATCH = wellKnownSymbol$1('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export$1({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~String(requireObjectCoercible$1(this))
        .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  function parse_str(str, array) {
    // eslint-disable-line camelcase
    //       discuss at: https://locutus.io/php/parse_str/
    //      original by: Cagri Ekin
    //      improved by: Michael White (https://getsprink.com)
    //      improved by: Jack
    //      improved by: Brett Zamir (https://brett-zamir.me)
    //      bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    //      bugfixed by: Brett Zamir (https://brett-zamir.me)
    //      bugfixed by: stag019
    //      bugfixed by: Brett Zamir (https://brett-zamir.me)
    //      bugfixed by: MIO_KODUKI (https://mio-koduki.blogspot.com/)
    // reimplemented by: stag019
    //         input by: Dreamer
    //         input by: Zaide (https://zaidesthings.com/)
    //         input by: David Pesta (https://davidpesta.com/)
    //         input by: jeicquest
    //      bugfixed by: Rafał Kukawski
    //           note 1: When no argument is specified, will put variables in global scope.
    //           note 1: When a particular argument has been passed, and the
    //           note 1: returned value is different parse_str of PHP.
    //           note 1: For example, a=b=c&d====c
    //        example 1: var $arr = {}
    //        example 1: parse_str('first=foo&second=bar', $arr)
    //        example 1: var $result = $arr
    //        returns 1: { first: 'foo', second: 'bar' }
    //        example 2: var $arr = {}
    //        example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', $arr)
    //        example 2: var $result = $arr
    //        returns 2: { str_a: "Jack and Jill didn't see the well." }
    //        example 3: var $abc = {3:'a'}
    //        example 3: parse_str('a[b]["c"]=def&a[q]=t+5', $abc)
    //        example 3: var $result = $abc
    //        returns 3: {"3":"a","a":{"b":{"c":"def"},"q":"t 5"}}
    //        example 4: var $arr = {}
    //        example 4: parse_str('a[][]=value', $arr)
    //        example 4: var $result = $arr
    //        returns 4: {"a":{"0":{"0":"value"}}}
    //        example 5: var $arr = {}
    //        example 5: parse_str('a=1&a[]=2', $arr)
    //        example 5: var $result = $arr
    //        returns 5: {"a":{"0":"2"}}
    var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&');
    var sal = strArr.length;
    var i;
    var j;
    var ct;
    var p;
    var lastObj;
    var obj;
    var chr;
    var tmp;
    var key;
    var value;
    var postLeftBracketPos;
    var keys;
    var keysLen;

    var _fixStr = function _fixStr(str) {
      return decodeURIComponent(str.replace(/\+/g, '%20'));
    };

    var $global = typeof window !== 'undefined' ? window : global;
    $global.$locutus = $global.$locutus || {};
    var $locutus = $global.$locutus;
    $locutus.php = $locutus.php || {};

    if (!array) {
      array = $global;
    }

    for (i = 0; i < sal; i++) {
      tmp = strArr[i].split('=');
      key = _fixStr(tmp[0]);
      value = tmp.length < 2 ? '' : _fixStr(tmp[1]);

      if (key.includes('__proto__') || key.includes('constructor') || key.includes('prototype')) {
        break;
      }

      while (key.charAt(0) === ' ') {
        key = key.slice(1);
      }

      if (key.indexOf('\x00') > -1) {
        key = key.slice(0, key.indexOf('\x00'));
      }

      if (key && key.charAt(0) !== '[') {
        keys = [];
        postLeftBracketPos = 0;

        for (j = 0; j < key.length; j++) {
          if (key.charAt(j) === '[' && !postLeftBracketPos) {
            postLeftBracketPos = j + 1;
          } else if (key.charAt(j) === ']') {
            if (postLeftBracketPos) {
              if (!keys.length) {
                keys.push(key.slice(0, postLeftBracketPos - 1));
              }

              keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos));
              postLeftBracketPos = 0;

              if (key.charAt(j + 1) !== '[') {
                break;
              }
            }
          }
        }

        if (!keys.length) {
          keys = [key];
        }

        for (j = 0; j < keys[0].length; j++) {
          chr = keys[0].charAt(j);

          if (chr === ' ' || chr === '.' || chr === '[') {
            keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
          }

          if (chr === '[') {
            break;
          }
        }

        obj = array;

        for (j = 0, keysLen = keys.length; j < keysLen; j++) {
          key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '');
          lastObj = obj;

          if ((key === '' || key === ' ') && j !== 0) {
            // Insert new dimension
            ct = -1;

            for (p in obj) {
              if (obj.hasOwnProperty(p)) {
                if (+p > ct && p.match(/^\d+$/g)) {
                  ct = +p;
                }
              }
            }

            key = ct + 1;
          } // if primitive value, replace with object


          if (Object(obj[key]) !== obj[key]) {
            obj[key] = {};
          }

          obj = obj[key];
        }

        lastObj[key] = value;
      }
    }
  }

  function uniqid(prefix, moreEntropy) {
    //  discuss at: https://locutus.io/php/uniqid/
    // original by: Kevin van Zonneveld (https://kvz.io)
    //  revised by: Kankrelune (https://www.webfaktory.info/)
    //      note 1: Uses an internal counter (in locutus global) to avoid collision
    //   example 1: var $id = uniqid()
    //   example 1: var $result = $id.length === 13
    //   returns 1: true
    //   example 2: var $id = uniqid('foo')
    //   example 2: var $result = $id.length === (13 + 'foo'.length)
    //   returns 2: true
    //   example 3: var $id = uniqid('bar', true)
    //   example 3: var $result = $id.length === (23 + 'bar'.length)
    //   returns 3: true
    if (typeof prefix === 'undefined') {
      prefix = '';
    }

    var retId;

    var _formatSeed = function _formatSeed(seed, reqWidth) {
      seed = parseInt(seed, 10).toString(16); // to hex str

      if (reqWidth < seed.length) {
        // so long we split
        return seed.slice(seed.length - reqWidth);
      }

      if (reqWidth > seed.length) {
        // so short we pad
        return Array(1 + (reqWidth - seed.length)).join('0') + seed;
      }

      return seed;
    };

    var $global = typeof window !== 'undefined' ? window : global;
    $global.$locutus = $global.$locutus || {};
    var $locutus = $global.$locutus;
    $locutus.php = $locutus.php || {};

    if (!$locutus.php.uniqidSeed) {
      // init seed with big random int
      $locutus.php.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }

    $locutus.php.uniqidSeed++; // start with prefix, add current milliseconds hex string

    retId = prefix;
    retId += _formatSeed(parseInt(new Date().getTime() / 1000, 10), 8); // add seed hex string

    retId += _formatSeed($locutus.php.uniqidSeed, 5);

    if (moreEntropy) {
      // for more entropy we add a float lower to 10
      retId += (Math.random() * 10).toFixed(8).toString();
    }

    return retId;
  }

  var buildCollectedFromQuery = function buildCollectedFromQuery(query, config) {
    var parsedQueryString = {};
    parse_str(query, parsedQueryString);
    return config.map(function (toCollect) {
      return {
        name: toCollect.field,
        value: parsedQueryString[toCollect.param] || null
      };
    }).filter(function (param) {
      return param.value !== null;
    });
  };

  var flattenToObject = function flattenToObject(array) {
    var flattenObject = {};
    array.forEach(function (object) {
      flattenObject[object.name] = object.value;
    });
    return flattenObject;
  };

  var buildAnonymusPageFromLocation = function buildAnonymusPageFromLocation(location) {
    return "".concat(location.protocol, "//").concat(location.host).concat(location.pathname);
  };

  var buildAnonymusReferer = function buildAnonymusReferer(referer) {
    if (referer) {
      return referer.split('?').shift();
    }

    return '';
  };

  var buildEvent = function buildEvent(event) {
    var newEvent = {};

    if (event.type) {
      newEvent.type = event.type;
    } else {
      throw new AppError(Severity.ERROR, 'Event must have type');
    }

    if (event.type === 'lead' || event.type === 'sale') {
      if (event.convDatas) {
        newEvent.conv_datas = event.convDatas;
      }

      if (event.convId) {
        newEvent.conv_id = event.convId;
      }

      if (event.type === 'sale' && event.convTurnover) {
        newEvent.conv_turnover = event.convTurnover;

        if (!event.convCurrency) {
          newEvent.conv_currency = 'EUR';
        } else {
          newEvent.conv_currency = event.convCurrency;
        }
      }
    }

    return newEvent;
  };

  var getAllDatas = function getAllDatas(store) {
    return store.findAll();
  };

  var TWA = /*#__PURE__*/function () {
    function TWA(id, config) {
      _classCallCheck(this, TWA);

      this.id = id;
      this.config = config;
      this.consentStatus = new ConsentStatus(id);
      this.setConsentStatus(this.getConsentStatus());
      this.env = 'prod';
    }

    _createClass(TWA, [{
      key: "getConfig",
      value: function getConfig() {
        return this.config;
      }
    }, {
      key: "getSavedTrace",
      value: function getSavedTrace() {
        var saved = this.store.find(Global.TRACE_KEY);
        return saved.trace || {};
      }
    }, {
      key: "getConsentStatus",
      value: function getConsentStatus() {
        return this.consentStatus.get() || Global.DEFAULT_CONSENT_STATUS;
      }
    }, {
      key: "getSalt",
      value: function getSalt() {
        var savedSalt = this.storeSession.find(Global.SALT_KEY);

        if (!savedSalt.salt) {
          savedSalt.salt = uniqid('salt', true);
          this.setSalt(savedSalt.salt);
        }

        return savedSalt.salt;
      }
    }, {
      key: "setSalt",
      value: function setSalt(salt) {
        this.storeSession.save({
          id: Global.SALT_KEY,
          salt: salt
        });
      }
    }, {
      key: "saveTrace",
      value: function saveTrace(trace) {
        this.store.save({
          id: Global.TRACE_KEY,
          trace: trace
        });
      }
    }, {
      key: "buildAnonymiseEvent",
      value: function buildAnonymiseEvent(event) {
        var anonymiseEvent = _objectSpread2({}, event);

        if (event.type === 'lead' || event.type === 'sale') {
          var convId;

          if (event.conv_id) {
            convId = event.conv_id;
          } else {
            convId = uniqid(event.type, true);
          }

          var shaObj = new _default('SHA-256', 'TEXT', {
            encoding: 'UTF8'
          });
          shaObj.update("".concat(this.getSalt()).concat(convId));
          anonymiseEvent.conv_id = shaObj.getHash('HEX');
        }

        return anonymiseEvent;
      }
    }, {
      key: "buildEventWithGlobalData",
      value: function buildEventWithGlobalData(event) {
        return _objectSpread2(_objectSpread2(_objectSpread2({}, event), this.buildTrace(window.location.search)), {}, {
          page: buildAnonymusPageFromLocation(window.location),
          referer: buildAnonymusReferer(window.document.referrer),
          time: new Date().getTime(),
          status: this.getConsentStatus()
        });
      }
    }, {
      key: "pushEvent",
      value: function pushEvent(event) {
        var toSaveEvent = this.buildEventWithGlobalData(this.buildAnonymiseEvent(buildEvent(event)));
        var toSend = true;

        if (toSaveEvent.conv_id) {
          var storedEvent = this.store.find(toSaveEvent.conv_id);

          if (storedEvent.id) {
            toSend = false;
          } else {
            this.store.save({
              id: toSaveEvent.conv_id
            });
          }
        }

        if (toSaveEvent.type === 'pageview') {
          var visitorSessionEvent = this.storeSession.find(Global.VISITOR_KEY);

          if (!visitorSessionEvent.id) {
            this.storeSession.save({
              id: Global.VISITOR_KEY
            });
            this.pushEvent(_objectSpread2(_objectSpread2({}, toSaveEvent), {}, {
              type: 'visitor'
            }));
          }
        }

        if (toSend) {
          var xhr = new XMLHttpRequest();
          xhr.open('POST', this.getUrlCollect());
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify(toSaveEvent));
          return toSaveEvent;
        }

        return {};
      }
    }, {
      key: "clearAll",
      value: function clearAll() {
        var _this = this;

        getAllDatas(this.store).forEach(function (event) {
          return _this.store.delete(event.id);
        });
        getAllDatas(this.storeSession).forEach(function (event) {
          return _this.storeSession.delete(event.id);
        });
        this.setConsentStatus(Global.DEFAULT_CONSENT_STATUS);
      }
    }, {
      key: "buildTrace",
      value: function buildTrace(query) {
        var toSaveTrace = _objectSpread2(_objectSpread2({}, this.getSavedTrace()), flattenToObject(buildCollectedFromQuery(query, this.config)));

        this.saveTrace(toSaveTrace);
        return toSaveTrace;
      }
    }, {
      key: "setConsentStatus",
      value: function setConsentStatus(status) {
        this.consentStatus.set(status);

        switch (status) {
          case 'optin':
          case 'exempt':
            this.store = new StorageJS({
              storageEngine: 'localStorage',
              prefix: Global.STORAGE_PREFIX,
              defaultTTL: Global.STORAGE_DEFAULT_TTL
            });
            this.storeSession = new StorageJS({
              storageEngine: 'sessionStorage',
              prefix: Global.STORAGE_PREFIX,
              defaultTTL: Global.STORAGE_DEFAULT_TTL
            });
            break;

          case 'optout':
            if (this.store) this.clearAll();
            this.store = new StorageJS({
              storageEngine: 'InApp',
              prefix: Global.STORAGE_PREFIX,
              defaultTTL: Global.STORAGE_DEFAULT_TTL
            });
            this.storeSession = this.store;
            break;

          default:
            throw new AppError(Severity.ERROR, 'Unknow status');
        }
      }
    }, {
      key: "setEnv",
      value: function setEnv(env) {
        this.env = env;
      }
    }, {
      key: "getUrlCollect",
      value: function getUrlCollect() {
        return "".concat(this.env === 'dev' ? './wa' : Global.COLLECT_URL, "/").concat(this.id);
      }
    }]);

    return TWA;
  }();

  var defaultConfig = [{
    field: 'source',
    param: 'utm_source'
  }, {
    field: 'source_medium',
    param: 'utm_medium'
  }, {
    field: 'source_campaign',
    param: 'utm_campaign'
  }, {
    field: 'source_content',
    param: 'utm_content'
  }, {
    field: 'source_term',
    param: 'utm_term'
  }];

  var cache = {};
  var debugConf = {};

  var checkIfExist = function checkIfExist(twaId) {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, "twaId ".concat(twaId, " not configured"));
    }
  };

  var showDebug = function showDebug(debug, object) {
    if (debug && debug.active) {
      document.getElementById(debug.element).value = JSON.stringify(object, null, 2);
    }
  };

  var Track = {
    init: function init(_ref) {
      var twaId = _ref.twaId,
          config = _ref.collect,
          env = _ref.env,
          debug = _ref.debug;

      if (!twaId) {
        throw new AppError(Severity.ERROR, 'Config must contain twaId');
      }

      cache[twaId] = new TWA(twaId, [].concat(_toConsumableArray(defaultConfig), _toConsumableArray(config)));

      if (env) {
        cache[twaId].setEnv(env);
      }

      if (debug && debug.active) {
        debugConf[twaId] = {
          active: true,
          element: debug.element || 'debug'
        };
      }
    },
    optin: function optin(_ref2) {
      var twaId = _ref2.twaId;
      checkIfExist(twaId);
      cache[twaId].setConsentStatus('optin');
    },
    exempt: function exempt(_ref3) {
      var twaId = _ref3.twaId;
      checkIfExist(twaId);
      cache[twaId].setConsentStatus('exempt');
    },
    optout: function optout(_ref4) {
      var twaId = _ref4.twaId;
      checkIfExist(twaId);
      cache[twaId].setConsentStatus('optout');
    },
    showConfig: function showConfig(_ref5) {
      var twaId = _ref5.twaId;
      checkIfExist(twaId);
      showDebug(debugConf[twaId], cache[twaId].getConfig());
    },
    showTrace: function showTrace(_ref6) {
      var twaId = _ref6.twaId;
      checkIfExist(twaId);
      showDebug(debugConf[twaId], cache[twaId].getSavedTrace());
    },
    showConsentStatus: function showConsentStatus(_ref7) {
      var twaId = _ref7.twaId;
      checkIfExist(twaId);
      showDebug(debugConf[twaId], cache[twaId].getConsentStatus());
    },
    clearAll: function clearAll(_ref8) {
      var twaId = _ref8.twaId;
      checkIfExist(twaId);
      cache[twaId].clearAll();
    },
    pageview: function pageview(_ref9) {
      var twaId = _ref9.twaId;
      checkIfExist(twaId);
      showDebug(debugConf[twaId], cache[twaId].pushEvent({
        type: 'pageview'
      }));
    },
    lead: function lead(_ref10) {
      var twaId = _ref10.twaId,
          convId = _ref10.convId,
          convDatas = _ref10.convDatas;
      checkIfExist(twaId);
      showDebug(debugConf[twaId], cache[twaId].pushEvent({
        type: 'lead',
        convId: convId,
        convDatas: convDatas
      }));
    },
    sale: function sale(_ref11) {
      var twaId = _ref11.twaId,
          convId = _ref11.convId,
          convDatas = _ref11.convDatas,
          convTurnover = _ref11.convTurnover,
          convCurrency = _ref11.convCurrency;
      checkIfExist(twaId);
      showDebug(debugConf[twaId], cache[twaId].pushEvent({
        type: 'sale',
        convId: convId,
        convDatas: convDatas,
        convTurnover: convTurnover,
        convCurrency: convCurrency
      }));
    }
  };

  var Proxy$1 = /*#__PURE__*/function () {
    function Proxy() {
      _classCallCheck(this, Proxy);
    }

    _createClass(Proxy, [{
      key: "push",
      value: // eslint-disable-next-line class-methods-use-this
      function push(args) {
        var _args = _toArray(args),
            functionName = _args[0],
            functionArgs = _args.slice(1);

        if (typeof Track[functionName] !== 'function') {
          throw new AppError(Severity.ERROR, "Undefined function ".concat(functionName));
        }

        return Track[functionName].apply(null, functionArgs);
      }
    }]);

    return Proxy;
  }();

  var WINDOW_VARNAME = 'TWA';

  try {
    if (typeof window[WINDOW_VARNAME] === 'undefined') {
      window[WINDOW_VARNAME] = new Proxy$1();
    } else if (_typeof(window[WINDOW_VARNAME]) === 'object' && Array.isArray(window[WINDOW_VARNAME])) {
      var proxyTmp = new Proxy$1();
      window[WINDOW_VARNAME].forEach(function (args) {
        return proxyTmp.push(args);
      });
      window[WINDOW_VARNAME] = proxyTmp;
    } else if (_typeof(window[WINDOW_VARNAME]) === 'object' && window[WINDOW_VARNAME] instanceof Proxy$1) {// Nothing
    } else {
      throw new AppError(Severity.ERROR, 'Unknown type');
    }
  } catch (e) {
    Logger.catchError(e, 'TWA - Tracker');
  }

}());
