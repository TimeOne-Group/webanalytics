
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
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

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
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

  var toString$2 = {}.toString;

  var classofRaw$1 = function (it) {
    return toString$2.call(it).slice(8, -1);
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

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  var objectKeys$1 = Object.keys || function keys(O) {
    return objectKeysInternal$1(O, enumBugKeys$1);
  };

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return Object(requireObjectCoercible$1(argument));
  };

  var nativeAssign = Object.assign;
  var defineProperty$2 = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !nativeAssign || fails$1(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors$1 && nativeAssign({ b: 1 }, nativeAssign(defineProperty$2({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$2(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    /* global Symbol -- required for testing */
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys$1(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$1(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols$1.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable$1.f;
    while (argumentsLength > index) {
      var S = indexedObject$1(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys$1(S).concat(getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors$1 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : nativeAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  _export$1({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
    assign: objectAssign
  });

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

  /*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */
  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  /* eslint-disable space-unary-ops */

  /* Public constants ==========================================================*/

  /* ===========================================================================*/
  //const Z_FILTERED          = 1;
  //const Z_HUFFMAN_ONLY      = 2;
  //const Z_RLE               = 3;
  var Z_FIXED = 4; //const Z_DEFAULT_STRATEGY  = 0;

  /* Possible values of the data_type field (though see inflate()) */

  var Z_BINARY = 0;
  var Z_TEXT = 1; //const Z_ASCII             = 1; // = Z_TEXT

  var Z_UNKNOWN = 2;
  /*============================================================================*/

  function zero(buf) {
    var len = buf.length;

    while (--len >= 0) {
      buf[len] = 0;
    }
  } // From zutil.h


  var STORED_BLOCK = 0;
  var STATIC_TREES = 1;
  var DYN_TREES = 2;
  /* The three kinds of block type */

  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  /* The minimum and maximum match lengths */
  // From deflate.h

  /* ===========================================================================
   * Internal compression state.
   */

  var LENGTH_CODES = 29;
  /* number of length codes, not counting the special END_BLOCK code */

  var LITERALS = 256;
  /* number of literal bytes 0..255 */

  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  /* number of Literal or Length codes, including the END_BLOCK code */

  var D_CODES = 30;
  /* number of distance codes */

  var BL_CODES = 19;
  /* number of codes used to transfer the bit lengths */

  var HEAP_SIZE = 2 * L_CODES + 1;
  /* maximum heap size */

  var MAX_BITS = 15;
  /* All codes must not exceed MAX_BITS bits */

  var Buf_size = 16;
  /* size of bit buffer in bi_buf */

  /* ===========================================================================
   * Constants
   */

  var MAX_BL_BITS = 7;
  /* Bit length codes must not exceed MAX_BL_BITS bits */

  var END_BLOCK = 256;
  /* end of block literal code */

  var REP_3_6 = 16;
  /* repeat previous bit length 3-6 times (2 bits of repeat count) */

  var REPZ_3_10 = 17;
  /* repeat a zero length 3-10 times  (3 bits of repeat count) */

  var REPZ_11_138 = 18;
  /* repeat a zero length 11-138 times  (7 bits of repeat count) */

  /* eslint-disable comma-spacing,array-bracket-spacing */

  var extra_lbits =
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
  var extra_dbits =
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  var extra_blbits =
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
  var bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  /* eslint-enable comma-spacing,array-bracket-spacing */

  /* The lengths of the bit length codes are sent in order of decreasing
   * probability, to avoid transmitting the lengths for unused bit length codes.
   */

  /* ===========================================================================
   * Local data. These are initialized only once.
   */
  // We pre-fill arrays with 0 to avoid uninitialized gaps

  var DIST_CODE_LEN = 512;
  /* see definition of array dist_code below */
  // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1

  var static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  /* The static literal tree. Since the bit lengths are imposed, there is no
   * need for the L_CODES extra codes used during heap construction. However
   * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
   * below).
   */

  var static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  /* The static distance tree. (Actually a trivial tree since all codes use
   * 5 bits.)
   */

  var _dist_code = new Array(DIST_CODE_LEN);

  zero(_dist_code);
  /* Distance codes. The first 256 values correspond to the distances
   * 3 .. 258, the last 256 values correspond to the top 8 bits of
   * the 15 bit distances.
   */

  var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);

  zero(_length_code);
  /* length code for each normalized match length (0 == MIN_MATCH) */

  var base_length = new Array(LENGTH_CODES);
  zero(base_length);
  /* First normalized length for each code (0 = MIN_MATCH) */

  var base_dist = new Array(D_CODES);
  zero(base_dist);
  /* First normalized distance for each code (0 = distance of 1) */

  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    /* static tree or NULL */

    this.extra_bits = extra_bits;
    /* extra bits for each code or NULL */

    this.extra_base = extra_base;
    /* base index for extra_bits */

    this.elems = elems;
    /* max number of elements in the tree */

    this.max_length = max_length;
    /* max bit length for the codes */
    // show if `static_tree` has data or dummy - needed for monomorphic objects

    this.has_stree = static_tree && static_tree.length;
  }

  var static_l_desc;
  var static_d_desc;
  var static_bl_desc;

  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    /* the dynamic tree */

    this.max_code = 0;
    /* largest code with non zero frequency */

    this.stat_desc = stat_desc;
    /* the corresponding static tree */
  }

  var d_code = function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  };
  /* ===========================================================================
   * Output a short LSB first on the stream.
   * IN assertion: there is enough room in pendingBuf.
   */


  var put_short = function put_short(s, w) {
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
  };
  /* ===========================================================================
   * Send a value on a given number of bits.
   * IN assertion: length <= 16 and value fits in length bits.
   */


  var send_bits = function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
      s.bi_buf |= value << s.bi_valid & 0xffff;
      put_short(s, s.bi_buf);
      s.bi_buf = value >> Buf_size - s.bi_valid;
      s.bi_valid += length - Buf_size;
    } else {
      s.bi_buf |= value << s.bi_valid & 0xffff;
      s.bi_valid += length;
    }
  };

  var send_code = function send_code(s, c, tree) {
    send_bits(s, tree[c * 2]
    /*.Code*/
    , tree[c * 2 + 1]
    /*.Len*/
    );
  };
  /* ===========================================================================
   * Reverse the first len bits of a code, using straightforward code (a faster
   * method would use a table)
   * IN assertion: 1 <= len <= 15
   */


  var bi_reverse = function bi_reverse(code, len) {
    var res = 0;

    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);

    return res >>> 1;
  };
  /* ===========================================================================
   * Flush the bit buffer, keeping at most 7 bits in it.
   */


  var bi_flush = function bi_flush(s) {
    if (s.bi_valid === 16) {
      put_short(s, s.bi_buf);
      s.bi_buf = 0;
      s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
      s.pending_buf[s.pending++] = s.bi_buf & 0xff;
      s.bi_buf >>= 8;
      s.bi_valid -= 8;
    }
  };
  /* ===========================================================================
   * Compute the optimal bit lengths for a tree and update the total bit length
   * for the current block.
   * IN assertion: the fields freq and dad are set, heap[heap_max] and
   *    above are the tree nodes sorted by increasing frequency.
   * OUT assertions: the field len is set to the optimal bit length, the
   *     array bl_count contains the frequencies for each bit length.
   *     The length opt_len is updated; static_len is also updated if stree is
   *     not null.
   */


  var gen_bitlen = function gen_bitlen(s, desc) //    deflate_state *s;
  //    tree_desc *desc;    /* the tree descriptor */
  {
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h;
    /* heap index */

    var n, m;
    /* iterate over the tree elements */

    var bits;
    /* bit length */

    var xbits;
    /* extra bits */

    var f;
    /* frequency */

    var overflow = 0;
    /* number of elements with bit length too large */

    for (bits = 0; bits <= MAX_BITS; bits++) {
      s.bl_count[bits] = 0;
    }
    /* In a first pass, compute the optimal bit lengths (which may
     * overflow in the case of the bit length tree).
     */


    tree[s.heap[s.heap_max] * 2 + 1]
    /*.Len*/
    = 0;
    /* root of the heap */

    for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1]
      /*.Dad*/
      * 2 + 1]
      /*.Len*/
      + 1;

      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }

      tree[n * 2 + 1]
      /*.Len*/
      = bits;
      /* We overwrite tree[n].Dad which is no longer needed */

      if (n > max_code) {
        continue;
      }
      /* not a leaf node */


      s.bl_count[bits]++;
      xbits = 0;

      if (n >= base) {
        xbits = extra[n - base];
      }

      f = tree[n * 2]
      /*.Freq*/
      ;
      s.opt_len += f * (bits + xbits);

      if (has_stree) {
        s.static_len += f * (stree[n * 2 + 1]
        /*.Len*/
        + xbits);
      }
    }

    if (overflow === 0) {
      return;
    } // Trace((stderr,"\nbit length overflow\n"));

    /* This happens for example on obj2 and pic of the Calgary corpus */

    /* Find the first bit length which could increase: */


    do {
      bits = max_length - 1;

      while (s.bl_count[bits] === 0) {
        bits--;
      }

      s.bl_count[bits]--;
      /* move one leaf down the tree */

      s.bl_count[bits + 1] += 2;
      /* move one overflow item as its brother */

      s.bl_count[max_length]--;
      /* The brother of the overflow item also moves one step up,
       * but this does not affect bl_count[max_length]
       */

      overflow -= 2;
    } while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
     * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
     * lengths instead of fixing only the wrong ones. This idea is taken
     * from 'ar' written by Haruhiko Okumura.)
     */


    for (bits = max_length; bits !== 0; bits--) {
      n = s.bl_count[bits];

      while (n !== 0) {
        m = s.heap[--h];

        if (m > max_code) {
          continue;
        }

        if (tree[m * 2 + 1]
        /*.Len*/
        !== bits) {
          // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
          s.opt_len += (bits - tree[m * 2 + 1]
          /*.Len*/
          ) * tree[m * 2]
          /*.Freq*/
          ;
          tree[m * 2 + 1]
          /*.Len*/
          = bits;
        }

        n--;
      }
    }
  };
  /* ===========================================================================
   * Generate the codes for a given tree and bit counts (which need not be
   * optimal).
   * IN assertion: the array bl_count contains the bit length statistics for
   * the given tree and the field len is set for all tree elements.
   * OUT assertion: the field code is set for all tree elements of non
   *     zero code length.
   */


  var gen_codes = function gen_codes(tree, max_code, bl_count) //    ct_data *tree;             /* the tree to decorate */
  //    int max_code;              /* largest code with non zero frequency */
  //    ushf *bl_count;            /* number of codes at each bit length */
  {
    var next_code = new Array(MAX_BITS + 1);
    /* next code value for each bit length */

    var code = 0;
    /* running code value */

    var bits;
    /* bit index */

    var n;
    /* code index */

    /* The distribution counts are first used to generate the code values
     * without bit reversal.
     */

    for (bits = 1; bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
     * must be all ones.
     */
    //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));


    for (n = 0; n <= max_code; n++) {
      var len = tree[n * 2 + 1]
      /*.Len*/
      ;

      if (len === 0) {
        continue;
      }
      /* Now reverse the bits */


      tree[n * 2]
      /*.Code*/
      = bi_reverse(next_code[len]++, len); //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
      //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
  };
  /* ===========================================================================
   * Initialize the various 'constant' tables.
   */


  var tr_static_init = function tr_static_init() {
    var n;
    /* iterates over tree elements */

    var bits;
    /* bit counter */

    var length;
    /* length value */

    var code;
    /* code value */

    var dist;
    /* distance index */

    var bl_count = new Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */
    // do check in _tr_init()
    //if (static_init_done) return;

    /* For some embedded targets, global variables are not initialized: */

    /*#ifdef NO_INIT_GLOBAL_POINTERS
      static_l_desc.static_tree = static_ltree;
      static_l_desc.extra_bits = extra_lbits;
      static_d_desc.static_tree = static_dtree;
      static_d_desc.extra_bits = extra_dbits;
      static_bl_desc.extra_bits = extra_blbits;
    #endif*/

    /* Initialize the mapping length (0..255) -> length code (0..28) */

    length = 0;

    for (code = 0; code < LENGTH_CODES - 1; code++) {
      base_length[code] = length;

      for (n = 0; n < 1 << extra_lbits[code]; n++) {
        _length_code[length++] = code;
      }
    } //Assert (length == 256, "tr_static_init: length != 256");

    /* Note that the length 255 (match length 258) can be represented
     * in two different ways: code 284 + 5 bits or code 285, so we
     * overwrite length_code[255] to use the best encoding:
     */


    _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */

    dist = 0;

    for (code = 0; code < 16; code++) {
      base_dist[code] = dist;

      for (n = 0; n < 1 << extra_dbits[code]; n++) {
        _dist_code[dist++] = code;
      }
    } //Assert (dist == 256, "tr_static_init: dist != 256");


    dist >>= 7;
    /* from now on, all distances are divided by 128 */

    for (; code < D_CODES; code++) {
      base_dist[code] = dist << 7;

      for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
        _dist_code[256 + dist++] = code;
      }
    } //Assert (dist == 256, "tr_static_init: 256+dist != 512");

    /* Construct the codes of the static literal tree */


    for (bits = 0; bits <= MAX_BITS; bits++) {
      bl_count[bits] = 0;
    }

    n = 0;

    while (n <= 143) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 8;
      n++;
      bl_count[8]++;
    }

    while (n <= 255) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 9;
      n++;
      bl_count[9]++;
    }

    while (n <= 279) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 7;
      n++;
      bl_count[7]++;
    }

    while (n <= 287) {
      static_ltree[n * 2 + 1]
      /*.Len*/
      = 8;
      n++;
      bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
     * tree construction to get a canonical Huffman tree (longest code
     * all ones)
     */


    gen_codes(static_ltree, L_CODES + 1, bl_count);
    /* The static distance tree is trivial: */

    for (n = 0; n < D_CODES; n++) {
      static_dtree[n * 2 + 1]
      /*.Len*/
      = 5;
      static_dtree[n * 2]
      /*.Code*/
      = bi_reverse(n, 5);
    } // Now data ready and we can init static trees


    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS); //static_init_done = true;
  };
  /* ===========================================================================
   * Initialize a new block.
   */


  var init_block = function init_block(s) {
    var n;
    /* iterates over tree elements */

    /* Initialize the trees. */

    for (n = 0; n < L_CODES; n++) {
      s.dyn_ltree[n * 2]
      /*.Freq*/
      = 0;
    }

    for (n = 0; n < D_CODES; n++) {
      s.dyn_dtree[n * 2]
      /*.Freq*/
      = 0;
    }

    for (n = 0; n < BL_CODES; n++) {
      s.bl_tree[n * 2]
      /*.Freq*/
      = 0;
    }

    s.dyn_ltree[END_BLOCK * 2]
    /*.Freq*/
    = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
  };
  /* ===========================================================================
   * Flush the bit buffer and align the output on a byte boundary
   */


  var bi_windup = function bi_windup(s) {
    if (s.bi_valid > 8) {
      put_short(s, s.bi_buf);
    } else if (s.bi_valid > 0) {
      //put_byte(s, (Byte)s->bi_buf);
      s.pending_buf[s.pending++] = s.bi_buf;
    }

    s.bi_buf = 0;
    s.bi_valid = 0;
  };
  /* ===========================================================================
   * Copy a stored block, storing first the length and its
   * one's complement if requested.
   */


  var copy_block = function copy_block(s, buf, len, header) //DeflateState *s;
  //charf    *buf;    /* the input data */
  //unsigned len;     /* its length */
  //int      header;  /* true if block header must be written */
  {
    bi_windup(s);
    /* align on byte boundary */

    if (header) {
      put_short(s, len);
      put_short(s, ~len);
    } //  while (len--) {
    //    put_byte(s, *buf++);
    //  }


    s.pending_buf.set(s.window.subarray(buf, buf + len), s.pending);
    s.pending += len;
  };
  /* ===========================================================================
   * Compares to subtrees, using the tree depth as tie breaker when
   * the subtrees have equal frequency. This minimizes the worst case length.
   */


  var smaller = function smaller(tree, n, m, depth) {
    var _n2 = n * 2;

    var _m2 = m * 2;

    return tree[_n2]
    /*.Freq*/
    < tree[_m2]
    /*.Freq*/
    || tree[_n2]
    /*.Freq*/
    === tree[_m2]
    /*.Freq*/
    && depth[n] <= depth[m];
  };
  /* ===========================================================================
   * Restore the heap property by moving down the tree starting at node k,
   * exchanging a node with the smallest of its two sons if necessary, stopping
   * when the heap property is re-established (each father smaller than its
   * two sons).
   */


  var pqdownheap = function pqdownheap(s, tree, k) //    deflate_state *s;
  //    ct_data *tree;  /* the tree to restore */
  //    int k;               /* node to move down */
  {
    var v = s.heap[k];
    var j = k << 1;
    /* left son of k */

    while (j <= s.heap_len) {
      /* Set j to the smallest of the two sons: */
      if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
        j++;
      }
      /* Exit if v is smaller than both sons */


      if (smaller(tree, v, s.heap[j], s.depth)) {
        break;
      }
      /* Exchange v with the smallest son */


      s.heap[k] = s.heap[j];
      k = j;
      /* And continue down the tree, setting j to the left son of k */

      j <<= 1;
    }

    s.heap[k] = v;
  }; // inlined manually
  // const SMALLEST = 1;

  /* ===========================================================================
   * Send the block data compressed using the given Huffman trees
   */


  var compress_block = function compress_block(s, ltree, dtree) //    deflate_state *s;
  //    const ct_data *ltree; /* literal tree */
  //    const ct_data *dtree; /* distance tree */
  {
    var dist;
    /* distance of matched string */

    var lc;
    /* match length or unmatched char (if dist == 0) */

    var lx = 0;
    /* running index in l_buf */

    var code;
    /* the code to send */

    var extra;
    /* number of extra bits to send */

    if (s.last_lit !== 0) {
      do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;

        if (dist === 0) {
          send_code(s, lc, ltree);
          /* send a literal byte */
          //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
        } else {
          /* Here, lc is the match length - MIN_MATCH */
          code = _length_code[lc];
          send_code(s, code + LITERALS + 1, ltree);
          /* send the length code */

          extra = extra_lbits[code];

          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s, lc, extra);
            /* send the extra length bits */
          }

          dist--;
          /* dist is now the match distance - 1 */

          code = d_code(dist); //Assert (code < D_CODES, "bad d_code");

          send_code(s, code, dtree);
          /* send the distance code */

          extra = extra_dbits[code];

          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s, dist, extra);
            /* send the extra distance bits */
          }
        }
        /* literal or match pair ? */

        /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
        //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
        //       "pendingBuf overflow");

      } while (lx < s.last_lit);
    }

    send_code(s, END_BLOCK, ltree);
  };
  /* ===========================================================================
   * Construct one Huffman tree and assigns the code bit strings and lengths.
   * Update the total bit length for the current block.
   * IN assertion: the field freq is set for all tree elements.
   * OUT assertions: the fields len and code are set to the optimal bit length
   *     and corresponding code. The length opt_len is updated; static_len is
   *     also updated if stree is not null. The field max_code is set.
   */


  var build_tree = function build_tree(s, desc) //    deflate_state *s;
  //    tree_desc *desc; /* the tree descriptor */
  {
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m;
    /* iterate over heap elements */

    var max_code = -1;
    /* largest code with non zero frequency */

    var node;
    /* new node being created */

    /* Construct the initial heap, with least frequent element in
     * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
     * heap[0] is not used.
     */

    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;

    for (n = 0; n < elems; n++) {
      if (tree[n * 2]
      /*.Freq*/
      !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1]
        /*.Len*/
        = 0;
      }
    }
    /* The pkzip format requires that at least one distance code exists,
     * and that at least one bit should be sent even if there is only one
     * possible code. So to avoid special checks later on we force at least
     * two codes of non zero frequency.
     */


    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2]
      /*.Freq*/
      = 1;
      s.depth[node] = 0;
      s.opt_len--;

      if (has_stree) {
        s.static_len -= stree[node * 2 + 1]
        /*.Len*/
        ;
      }
      /* node is 0 or 1 so it does not have extra bits */

    }

    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
     * establish sub-heaps of increasing lengths:
     */

    for (n = s.heap_len >> 1
    /*int /2*/
    ; n >= 1; n--) {
      pqdownheap(s, tree, n);
    }
    /* Construct the Huffman tree by repeatedly combining the least two
     * frequent nodes.
     */


    node = elems;
    /* next internal node of the tree */

    do {
      //pqremove(s, tree, n);  /* n = node of least frequency */

      /*** pqremove ***/
      n = s.heap[1
      /*SMALLEST*/
      ];
      s.heap[1
      /*SMALLEST*/
      ] = s.heap[s.heap_len--];
      pqdownheap(s, tree, 1
      /*SMALLEST*/
      );
      /***/

      m = s.heap[1
      /*SMALLEST*/
      ];
      /* m = node of next least frequency */

      s.heap[--s.heap_max] = n;
      /* keep the nodes sorted by frequency */

      s.heap[--s.heap_max] = m;
      /* Create a new node father of n and m */

      tree[node * 2]
      /*.Freq*/
      = tree[n * 2]
      /*.Freq*/
      + tree[m * 2]
      /*.Freq*/
      ;
      s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
      tree[n * 2 + 1]
      /*.Dad*/
      = tree[m * 2 + 1]
      /*.Dad*/
      = node;
      /* and insert the new node in the heap */

      s.heap[1
      /*SMALLEST*/
      ] = node++;
      pqdownheap(s, tree, 1
      /*SMALLEST*/
      );
    } while (s.heap_len >= 2);

    s.heap[--s.heap_max] = s.heap[1
    /*SMALLEST*/
    ];
    /* At this point, the fields freq and dad are set. We can now
     * generate the bit lengths.
     */

    gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */

    gen_codes(tree, max_code, s.bl_count);
  };
  /* ===========================================================================
   * Scan a literal or distance tree to determine the frequencies of the codes
   * in the bit length tree.
   */


  var scan_tree = function scan_tree(s, tree, max_code) //    deflate_state *s;
  //    ct_data *tree;   /* the tree to be scanned */
  //    int max_code;    /* and its largest code of non zero frequency */
  {
    var n;
    /* iterates over all tree elements */

    var prevlen = -1;
    /* last emitted length */

    var curlen;
    /* length of current code */

    var nextlen = tree[0 * 2 + 1]
    /*.Len*/
    ;
    /* length of next code */

    var count = 0;
    /* repeat count of the current code */

    var max_count = 7;
    /* max repeat count */

    var min_count = 4;
    /* min repeat count */

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }

    tree[(max_code + 1) * 2 + 1]
    /*.Len*/
    = 0xffff;
    /* guard */

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1]
      /*.Len*/
      ;

      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        s.bl_tree[curlen * 2]
        /*.Freq*/
        += count;
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          s.bl_tree[curlen * 2] /*.Freq*/++;
        }

        s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
      } else if (count <= 10) {
        s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
      } else {
        s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
      }

      count = 0;
      prevlen = curlen;

      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };
  /* ===========================================================================
   * Send a literal or distance tree in compressed form, using the codes in
   * bl_tree.
   */


  var send_tree = function send_tree(s, tree, max_code) //    deflate_state *s;
  //    ct_data *tree; /* the tree to be scanned */
  //    int max_code;       /* and its largest code of non zero frequency */
  {
    var n;
    /* iterates over all tree elements */

    var prevlen = -1;
    /* last emitted length */

    var curlen;
    /* length of current code */

    var nextlen = tree[0 * 2 + 1]
    /*.Len*/
    ;
    /* length of next code */

    var count = 0;
    /* repeat count of the current code */

    var max_count = 7;
    /* max repeat count */

    var min_count = 4;
    /* min repeat count */

    /* tree[max_code+1].Len = -1; */

    /* guard already set */

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1]
      /*.Len*/
      ;

      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(s, curlen, s.bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s, curlen, s.bl_tree);
          count--;
        } //Assert(count >= 3 && count <= 6, " 3_6?");


        send_code(s, REP_3_6, s.bl_tree);
        send_bits(s, count - 3, 2);
      } else if (count <= 10) {
        send_code(s, REPZ_3_10, s.bl_tree);
        send_bits(s, count - 3, 3);
      } else {
        send_code(s, REPZ_11_138, s.bl_tree);
        send_bits(s, count - 11, 7);
      }

      count = 0;
      prevlen = curlen;

      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };
  /* ===========================================================================
   * Construct the Huffman tree for the bit lengths and return the index in
   * bl_order of the last bit length code to send.
   */


  var build_bl_tree = function build_bl_tree(s) {
    var max_blindex;
    /* index of last bit length code of non zero freq */

    /* Determine the bit length frequencies for literal and distance trees */

    scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */

    build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
     * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
     */

    /* Determine the number of bit length codes to send. The pkzip format
     * requires that at least 4 bit length codes be sent. (appnote.txt says
     * 3 but the actual value used is 4.)
     */

    for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (s.bl_tree[bl_order[max_blindex] * 2 + 1]
      /*.Len*/
      !== 0) {
        break;
      }
    }
    /* Update opt_len to include the bit length tree and counts */


    s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4; //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));

    return max_blindex;
  };
  /* ===========================================================================
   * Send the header for a block using dynamic Huffman trees: the counts, the
   * lengths of the bit length codes, the literal tree and the distance tree.
   * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
   */


  var send_all_trees = function send_all_trees(s, lcodes, dcodes, blcodes) //    deflate_state *s;
  //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
  {
    var rank;
    /* index in bl_order */
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));

    send_bits(s, lcodes - 257, 5);
    /* not +255 as stated in appnote.txt */

    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4);
    /* not -3 as stated in appnote.txt */

    for (rank = 0; rank < blcodes; rank++) {
      //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
      send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]
      /*.Len*/
      , 3);
    } //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));


    send_tree(s, s.dyn_ltree, lcodes - 1);
    /* literal tree */
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

    send_tree(s, s.dyn_dtree, dcodes - 1);
    /* distance tree */
    //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
  };
  /* ===========================================================================
   * Check if the data type is TEXT or BINARY, using the following algorithm:
   * - TEXT if the two conditions below are satisfied:
   *    a) There are no non-portable control characters belonging to the
   *       "black list" (0..6, 14..25, 28..31).
   *    b) There is at least one printable character belonging to the
   *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
   * - BINARY otherwise.
   * - The following partially-portable control characters form a
   *   "gray list" that is ignored in this detection algorithm:
   *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
   * IN assertion: the fields Freq of dyn_ltree are set.
   */


  var detect_data_type = function detect_data_type(s) {
    /* black_mask is the bit mask of black-listed bytes
     * set bits 0..6, 14..25, and 28..31
     * 0xf3ffc07f = binary 11110011111111111100000001111111
     */
    var black_mask = 0xf3ffc07f;
    var n;
    /* Check for non-textual ("black-listed") bytes. */

    for (n = 0; n <= 31; n++, black_mask >>>= 1) {
      if (black_mask & 1 && s.dyn_ltree[n * 2]
      /*.Freq*/
      !== 0) {
        return Z_BINARY;
      }
    }
    /* Check for textual ("white-listed") bytes. */


    if (s.dyn_ltree[9 * 2]
    /*.Freq*/
    !== 0 || s.dyn_ltree[10 * 2]
    /*.Freq*/
    !== 0 || s.dyn_ltree[13 * 2]
    /*.Freq*/
    !== 0) {
      return Z_TEXT;
    }

    for (n = 32; n < LITERALS; n++) {
      if (s.dyn_ltree[n * 2]
      /*.Freq*/
      !== 0) {
        return Z_TEXT;
      }
    }
    /* There are no "black-listed" or "white-listed" bytes:
     * this stream either is empty or has tolerated ("gray-listed") bytes only.
     */


    return Z_BINARY;
  };

  var static_init_done = false;
  /* ===========================================================================
   * Initialize the tree data structures for a new zlib stream.
   */

  var _tr_init = function _tr_init(s) {
    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }

    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */

    init_block(s);
  };
  /* ===========================================================================
   * Send a stored block
   */


  var _tr_stored_block = function _tr_stored_block(s, buf, stored_len, last) //DeflateState *s;
  //charf *buf;       /* input block */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */
  {
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    /* send block type */

    copy_block(s, buf, stored_len, true);
    /* with header */
  };
  /* ===========================================================================
   * Send one empty static block to give enough lookahead for inflate.
   * This takes 10 bits, of which 7 may remain in the bit buffer.
   */


  var _tr_align = function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
  };
  /* ===========================================================================
   * Determine the best encoding for the current block: dynamic trees, static
   * trees or store, and output the encoded block to the zip file.
   */


  var _tr_flush_block = function _tr_flush_block(s, buf, stored_len, last) //DeflateState *s;
  //charf *buf;       /* input block, or NULL if too old */
  //ulg stored_len;   /* length of input block */
  //int last;         /* one if this is the last block for a file */
  {
    var opt_lenb, static_lenb;
    /* opt_len and static_len in bytes */

    var max_blindex = 0;
    /* index of last bit length code of non zero freq */

    /* Build the Huffman trees unless a stored block is forced */

    if (s.level > 0) {
      /* Check if the file is binary or text */
      if (s.strm.data_type === Z_UNKNOWN) {
        s.strm.data_type = detect_data_type(s);
      }
      /* Construct the literal and distance trees */


      build_tree(s, s.l_desc); // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
      //        s->static_len));

      build_tree(s, s.d_desc); // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
      //        s->static_len));

      /* At this point, opt_len and static_len are the total bit lengths of
       * the compressed block data, excluding the tree representations.
       */

      /* Build the bit length tree for the above two trees, and get the index
       * in bl_order of the last bit length code to send.
       */

      max_blindex = build_bl_tree(s);
      /* Determine the best encoding. Compute the block lengths in bytes. */

      opt_lenb = s.opt_len + 3 + 7 >>> 3;
      static_lenb = s.static_len + 3 + 7 >>> 3; // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
      //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
      //        s->last_lit));

      if (static_lenb <= opt_lenb) {
        opt_lenb = static_lenb;
      }
    } else {
      // Assert(buf != (char*)0, "lost buf");
      opt_lenb = static_lenb = stored_len + 5;
      /* force a stored block */
    }

    if (stored_len + 4 <= opt_lenb && buf !== -1) {
      /* 4: two words for the lengths */

      /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
       * Otherwise we can't have processed more than WSIZE input bytes since
       * the last block flush, because compression would have been
       * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
       * transform a block into a stored block.
       */
      _tr_stored_block(s, buf, stored_len, last);
    } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
      send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s, static_ltree, static_dtree);
    } else {
      send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s, s.dyn_ltree, s.dyn_dtree);
    } // Assert (s->compressed_len == s->bits_sent, "bad compressed size");

    /* The above check is made mod 2^32, for files larger than 512 MB
     * and uLong implemented on 32 bits.
     */


    init_block(s);

    if (last) {
      bi_windup(s);
    } // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
    //       s->compressed_len-7*last));

  };
  /* ===========================================================================
   * Save the match info and tally the frequency counts. Return true if
   * the current block must be flushed.
   */


  var _tr_tally = function _tr_tally(s, dist, lc) //    deflate_state *s;
  //    unsigned dist;  /* distance of matched string */
  //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
  {
    //let out_length, in_length, dcode;
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
    s.last_lit++;

    if (dist === 0) {
      /* lc is the unmatched char */
      s.dyn_ltree[lc * 2] /*.Freq*/++;
    } else {
      s.matches++;
      /* Here, lc is the match length - MIN_MATCH */

      dist--;
      /* dist = match distance - 1 */
      //Assert((ush)dist < (ush)MAX_DIST(s) &&
      //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
      //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

      s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /*.Freq*/++;
      s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
    } // (!) This block is disabled in zlib defaults,
    // don't enable it for binary compatibility
    //#ifdef TRUNCATE_BLOCK
    //  /* Try to guess if it is profitable to stop the current block here */
    //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
    //    /* Compute an upper bound for the compressed length */
    //    out_length = s.last_lit*8;
    //    in_length = s.strstart - s.block_start;
    //
    //    for (dcode = 0; dcode < D_CODES; dcode++) {
    //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
    //    }
    //    out_length >>>= 3;
    //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
    //    //       s->last_lit, in_length, out_length,
    //    //       100L - out_length*100L/in_length));
    //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
    //      return true;
    //    }
    //  }
    //#endif


    return s.last_lit === s.lit_bufsize - 1;
    /* We avoid equality with lit_bufsize because of wraparound at 64K
     * on 16 bit machines and because stored blocks are restricted to
     * 64K-1 bytes.
     */
  };

  var _tr_init_1 = _tr_init;
  var _tr_stored_block_1 = _tr_stored_block;
  var _tr_flush_block_1 = _tr_flush_block;
  var _tr_tally_1 = _tr_tally;
  var _tr_align_1 = _tr_align;
  var trees = {
    _tr_init: _tr_init_1,
    _tr_stored_block: _tr_stored_block_1,
    _tr_flush_block: _tr_flush_block_1,
    _tr_tally: _tr_tally_1,
    _tr_align: _tr_align_1
  }; // Note: adler32 takes 12% for level 0 and 2% for level 6.
  // It isn't worth it to make additional optimizations as in original.
  // Small size is preferable.
  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var adler32 = function adler32(adler, buf, len, pos) {
    var s1 = adler & 0xffff | 0,
        s2 = adler >>> 16 & 0xffff | 0,
        n = 0;

    while (len !== 0) {
      // Set limit ~ twice less than 5552, to keep
      // s2 in 31-bits, because we force signed ints.
      // in other case %= will fail.
      n = len > 2000 ? 2000 : len;
      len -= n;

      do {
        s1 = s1 + buf[pos++] | 0;
        s2 = s2 + s1 | 0;
      } while (--n);

      s1 %= 65521;
      s2 %= 65521;
    }

    return s1 | s2 << 16 | 0;
  };

  var adler32_1 = adler32; // Note: we can't get significant speed boost here.
  // So write code to minimize size - no pregenerated tables
  // and array tools dependencies.
  // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.
  // Use ordinary array, since untyped makes no boost here

  var makeTable = function makeTable() {
    var c,
        table = [];

    for (var n = 0; n < 256; n++) {
      c = n;

      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
      }

      table[n] = c;
    }

    return table;
  }; // Create table on load. Just 255 signed longs. Not a problem.


  var crcTable = new Uint32Array(makeTable());

  var crc32 = function crc32(crc, buf, len, pos) {
    var t = crcTable;
    var end = pos + len;
    crc ^= -1;

    for (var i = pos; i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return crc ^ -1; // >>> 0;
  };

  var crc32_1 = crc32; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var messages = {
    2: 'need dictionary',

    /* Z_NEED_DICT       2  */
    1: 'stream end',

    /* Z_STREAM_END      1  */
    0: '',

    /* Z_OK              0  */
    '-1': 'file error',

    /* Z_ERRNO         (-1) */
    '-2': 'stream error',

    /* Z_STREAM_ERROR  (-2) */
    '-3': 'data error',

    /* Z_DATA_ERROR    (-3) */
    '-4': 'insufficient memory',

    /* Z_MEM_ERROR     (-4) */
    '-5': 'buffer error',

    /* Z_BUF_ERROR     (-5) */
    '-6': 'incompatible version'
    /* Z_VERSION_ERROR (-6) */

  }; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var constants = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,

    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,

    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,

    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,

    /* The deflate compression method */
    Z_DEFLATED: 8 //Z_NULL:                 null // Use -1 or null inline, depending on var type

  }; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var _tr_init$1 = trees._tr_init,
      _tr_stored_block$1 = trees._tr_stored_block,
      _tr_flush_block$1 = trees._tr_flush_block,
      _tr_tally$1 = trees._tr_tally,
      _tr_align$1 = trees._tr_align;
  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  var Z_NO_FLUSH = constants.Z_NO_FLUSH,
      Z_PARTIAL_FLUSH = constants.Z_PARTIAL_FLUSH,
      Z_FULL_FLUSH = constants.Z_FULL_FLUSH,
      Z_FINISH = constants.Z_FINISH,
      Z_BLOCK = constants.Z_BLOCK,
      Z_OK = constants.Z_OK,
      Z_STREAM_END = constants.Z_STREAM_END,
      Z_STREAM_ERROR = constants.Z_STREAM_ERROR,
      Z_DATA_ERROR = constants.Z_DATA_ERROR,
      Z_BUF_ERROR = constants.Z_BUF_ERROR,
      Z_DEFAULT_COMPRESSION = constants.Z_DEFAULT_COMPRESSION,
      Z_FILTERED = constants.Z_FILTERED,
      Z_HUFFMAN_ONLY = constants.Z_HUFFMAN_ONLY,
      Z_RLE = constants.Z_RLE,
      Z_FIXED$1 = constants.Z_FIXED,
      Z_DEFAULT_STRATEGY = constants.Z_DEFAULT_STRATEGY,
      Z_UNKNOWN$1 = constants.Z_UNKNOWN,
      Z_DEFLATED = constants.Z_DEFLATED;
  /*============================================================================*/

  var MAX_MEM_LEVEL = 9;
  /* Maximum value for memLevel in deflateInit2 */

  var MAX_WBITS = 15;
  /* 32K LZ77 window */

  var DEF_MEM_LEVEL = 8;
  var LENGTH_CODES$1 = 29;
  /* number of length codes, not counting the special END_BLOCK code */

  var LITERALS$1 = 256;
  /* number of literal bytes 0..255 */

  var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
  /* number of Literal or Length codes, including the END_BLOCK code */

  var D_CODES$1 = 30;
  /* number of distance codes */

  var BL_CODES$1 = 19;
  /* number of codes used to transfer the bit lengths */

  var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
  /* maximum heap size */

  var MAX_BITS$1 = 15;
  /* All codes must not exceed MAX_BITS bits */

  var MIN_MATCH$1 = 3;
  var MAX_MATCH$1 = 258;
  var MIN_LOOKAHEAD = MAX_MATCH$1 + MIN_MATCH$1 + 1;
  var PRESET_DICT = 0x20;
  var INIT_STATE = 42;
  var EXTRA_STATE = 69;
  var NAME_STATE = 73;
  var COMMENT_STATE = 91;
  var HCRC_STATE = 103;
  var BUSY_STATE = 113;
  var FINISH_STATE = 666;
  var BS_NEED_MORE = 1;
  /* block not completed, need more input or more output */

  var BS_BLOCK_DONE = 2;
  /* block flush performed */

  var BS_FINISH_STARTED = 3;
  /* finish started, need only more output at next deflate */

  var BS_FINISH_DONE = 4;
  /* finish done, accept no more input or output */

  var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

  var err = function err(strm, errorCode) {
    strm.msg = messages[errorCode];
    return errorCode;
  };

  var rank = function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
  };

  var zero$1 = function zero$1(buf) {
    var len = buf.length;

    while (--len >= 0) {
      buf[len] = 0;
    }
  };
  /* eslint-disable new-cap */


  var HASH_ZLIB = function HASH_ZLIB(s, prev, data) {
    return (prev << s.hash_shift ^ data) & s.hash_mask;
  }; // This hash causes less collisions, https://github.com/nodeca/pako/issues/135
  // But breaks binary compatibility
  //let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;


  var HASH = HASH_ZLIB;
  /* =========================================================================
   * Flush as much pending output as possible. All deflate() output goes
   * through this function so some applications may wish to modify it
   * to avoid allocating a large strm->output buffer and copying into it.
   * (See also read_buf()).
   */

  var flush_pending = function flush_pending(strm) {
    var s = strm.state; //_tr_flush_bits(s);

    var len = s.pending;

    if (len > strm.avail_out) {
      len = strm.avail_out;
    }

    if (len === 0) {
      return;
    }

    strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;

    if (s.pending === 0) {
      s.pending_out = 0;
    }
  };

  var flush_block_only = function flush_block_only(s, last) {
    _tr_flush_block$1(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);

    s.block_start = s.strstart;
    flush_pending(s.strm);
  };

  var put_byte = function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
  };
  /* =========================================================================
   * Put a short in the pending buffer. The 16-bit value is put in MSB order.
   * IN assertion: the stream state is correct and there is enough room in
   * pending_buf.
   */


  var putShortMSB = function putShortMSB(s, b) {
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
  };
  /* ===========================================================================
   * Read a new buffer from the current input stream, update the adler32
   * and total number of bytes read.  All deflate() input goes through
   * this function so some applications may wish to modify it to avoid
   * allocating a large strm->input buffer and copying from it.
   * (See also flush_pending()).
   */


  var read_buf = function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;

    if (len > size) {
      len = size;
    }

    if (len === 0) {
      return 0;
    }

    strm.avail_in -= len; // zmemcpy(buf, strm->next_in, len);

    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);

    if (strm.state.wrap === 1) {
      strm.adler = adler32_1(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
      strm.adler = crc32_1(strm.adler, buf, len, start);
    }

    strm.next_in += len;
    strm.total_in += len;
    return len;
  };
  /* ===========================================================================
   * Set match_start to the longest match starting at the given string and
   * return its length. Matches shorter or equal to prev_length are discarded,
   * in which case the result is equal to prev_length and match_start is
   * garbage.
   * IN assertions: cur_match is the head of the hash chain for the current
   *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
   * OUT assertion: the match length is not greater than s->lookahead.
   */


  var longest_match = function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length;
    /* max hash chain length */

    var scan = s.strstart;
    /* current string */

    var match;
    /* matched string */

    var len;
    /* length of current match */

    var best_len = s.prev_length;
    /* best match length so far */

    var nice_match = s.nice_match;
    /* stop if match long enough */

    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0
    /*NIL*/
    ;
    var _win = s.window; // shortcut

    var wmask = s.w_mask;
    var prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
     * we prevent matches with the string of window index 0.
     */

    var strend = s.strstart + MAX_MATCH$1;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
     * It is easy to get rid of this optimization if necessary.
     */
    // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

    /* Do not waste too much time if we already have a good match: */

    if (s.prev_length >= s.good_match) {
      chain_length >>= 2;
    }
    /* Do not look for matches beyond the end of the input. This is necessary
     * to make deflate deterministic.
     */


    if (nice_match > s.lookahead) {
      nice_match = s.lookahead;
    } // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");


    do {
      // Assert(cur_match < s->strstart, "no future");
      match = cur_match;
      /* Skip to next match if the match length cannot increase
       * or if the match length is less than 2.  Note that the checks below
       * for insufficient lookahead only occur occasionally for performance
       * reasons.  Therefore uninitialized memory will be accessed, and
       * conditional jumps will be made that depend on those values.
       * However the length of the match is limited to the lookahead, so
       * the output of deflate is not affected by the uninitialized values.
       */

      if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
        continue;
      }
      /* The check at best_len-1 can be removed because it will be made
       * again later. (This heuristic is not always a win.)
       * It is not necessary to compare scan[2] and match[2] since they
       * are always equal when the other bytes match, given that
       * the hash keys are equal and that HASH_BITS >= 8.
       */


      scan += 2;
      match++; // Assert(*scan == *match, "match[2]?");

      /* We check for insufficient lookahead only every 8th comparison;
       * the 256th check will be made at strstart+258.
       */

      do {
        /*jshint noempty:false*/
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend); // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");


      len = MAX_MATCH$1 - (strend - scan);
      scan = strend - MAX_MATCH$1;

      if (len > best_len) {
        s.match_start = cur_match;
        best_len = len;

        if (len >= nice_match) {
          break;
        }

        scan_end1 = _win[scan + best_len - 1];
        scan_end = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

    if (best_len <= s.lookahead) {
      return best_len;
    }

    return s.lookahead;
  };
  /* ===========================================================================
   * Fill the window when the lookahead becomes insufficient.
   * Updates strstart and lookahead.
   *
   * IN assertion: lookahead < MIN_LOOKAHEAD
   * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
   *    At least one byte has been read, or avail_in == 0; reads are
   *    performed for at least two bytes (required for the zip translate_eol
   *    option -- not supported here).
   */


  var fill_window = function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str; //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

    do {
      more = s.window_size - s.lookahead - s.strstart; // JS ints have 32 bit, block below not needed

      /* Deal with !@#$% 64K limit: */
      //if (sizeof(int) <= 2) {
      //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
      //        more = wsize;
      //
      //  } else if (more == (unsigned)(-1)) {
      //        /* Very unlikely, but possible on 16 bit machine if
      //         * strstart == 0 && lookahead == 1 (input done a byte at time)
      //         */
      //        more--;
      //    }
      //}

      /* If the window is almost full and there is insufficient lookahead,
       * move the upper half to the lower one to make room in the upper half.
       */

      if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
        s.window.set(s.window.subarray(_w_size, _w_size + _w_size), 0);
        s.match_start -= _w_size;
        s.strstart -= _w_size;
        /* we now have strstart >= MAX_DIST */

        s.block_start -= _w_size;
        /* Slide the hash table (could be avoided with 32 bit values
         at the expense of memory usage). We slide even when level == 0
         to keep the hash table consistent if we switch back to level > 0
         later. (Using level 0 permanently is not an optimal usage of
         zlib, so we don't care about this pathological case.)
         */

        n = s.hash_size;
        p = n;

        do {
          m = s.head[--p];
          s.head[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);

        n = _w_size;
        p = n;

        do {
          m = s.prev[--p];
          s.prev[p] = m >= _w_size ? m - _w_size : 0;
          /* If n is not on any hash chain, prev[n] is garbage but
           * its value will never be used.
           */
        } while (--n);

        more += _w_size;
      }

      if (s.strm.avail_in === 0) {
        break;
      }
      /* If there was no sliding:
       *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
       *    more == window_size - lookahead - strstart
       * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
       * => more >= window_size - 2*WSIZE + 2
       * In the BIG_MEM or MMAP case (not yet supported),
       *   window_size == input_size + MIN_LOOKAHEAD  &&
       *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
       * Otherwise, window_size == 2*WSIZE so more >= 2.
       * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
       */
      //Assert(more >= 2, "more < 2");


      n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
      s.lookahead += n;
      /* Initialize the hash value now that we have some input: */

      if (s.lookahead + s.insert >= MIN_MATCH$1) {
        str = s.strstart - s.insert;
        s.ins_h = s.window[str];
        /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */

        s.ins_h = HASH(s, s.ins_h, s.window[str + 1]); //#if MIN_MATCH != 3
        //        Call update_hash() MIN_MATCH-3 more times
        //#endif

        while (s.insert) {
          /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
          s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH$1 - 1]);
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
          s.insert--;

          if (s.lookahead + s.insert < MIN_MATCH$1) {
            break;
          }
        }
      }
      /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
       * but this is not important since only literal bytes will be emitted.
       */

    } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    /* If the WIN_INIT bytes after the end of the current data have never been
     * written, then zero those bytes in order to avoid memory check reports of
     * the use of uninitialized (or uninitialised as Julian writes) bytes by
     * the longest match routines.  Update the high water mark for the next
     * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
     * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
     */
    //  if (s.high_water < s.window_size) {
    //    const curr = s.strstart + s.lookahead;
    //    let init = 0;
    //
    //    if (s.high_water < curr) {
    //      /* Previous high water mark below current data -- zero WIN_INIT
    //       * bytes or up to end of window, whichever is less.
    //       */
    //      init = s.window_size - curr;
    //      if (init > WIN_INIT)
    //        init = WIN_INIT;
    //      zmemzero(s->window + curr, (unsigned)init);
    //      s->high_water = curr + init;
    //    }
    //    else if (s->high_water < (ulg)curr + WIN_INIT) {
    //      /* High water mark at or above current data, but below current data
    //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
    //       * to end of window, whichever is less.
    //       */
    //      init = (ulg)curr + WIN_INIT - s->high_water;
    //      if (init > s->window_size - s->high_water)
    //        init = s->window_size - s->high_water;
    //      zmemzero(s->window + s->high_water, (unsigned)init);
    //      s->high_water += init;
    //    }
    //  }
    //
    //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
    //    "not enough room for search");

  };
  /* ===========================================================================
   * Copy without compression as much as possible from the input stream, return
   * the current block state.
   * This function does not insert new strings in the dictionary since
   * uncompressible data is probably not useful. This function is used
   * only for the level=0 compression option.
   * NOTE: this function should be optimized to avoid extra copying from
   * window to pending_buf.
   */


  var deflate_stored = function deflate_stored(s, flush) {
    /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
     * to pending_buf_size, and each stored block has a 5 byte header:
     */
    var max_block_size = 0xffff;

    if (max_block_size > s.pending_buf_size - 5) {
      max_block_size = s.pending_buf_size - 5;
    }
    /* Copy as much as possible from input to output: */


    for (;;) {
      /* Fill the window as much as possible: */
      if (s.lookahead <= 1) {
        //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
        //  s->block_start >= (long)s->w_size, "slide too late");
        //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
        //        s.block_start >= s.w_size)) {
        //        throw  new Error("slide too late");
        //      }
        fill_window(s);

        if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */

      } //Assert(s->block_start >= 0L, "block gone");
      //    if (s.block_start < 0) throw new Error("block gone");


      s.strstart += s.lookahead;
      s.lookahead = 0;
      /* Emit a stored block if pending_buf will be full: */

      var max_start = s.block_start + max_block_size;

      if (s.strstart === 0 || s.strstart >= max_start) {
        /* strstart == 0 is possible when wraparound on 16-bit machine */
        s.lookahead = s.strstart - max_start;
        s.strstart = max_start;
        /*** FLUSH_BLOCK(s, 0); ***/

        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
      /* Flush if we may have to slide, otherwise block_start may become
       * negative and the data will be gone:
       */


      if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = 0;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.strstart > s.block_start) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_NEED_MORE;
  };
  /* ===========================================================================
   * Compress as much as possible from the input stream, return the current
   * block state.
   * This function does not perform lazy evaluation of matches and inserts
   * new strings in the dictionary only for unmatched strings or for short
   * matches. It is used only for the fast compression options.
   */


  var deflate_fast = function deflate_fast(s, flush) {
    var hash_head;
    /* head of the hash chain */

    var bflush;
    /* set if current block must be flushed */

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);

        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
          /* flush the current block */
        }
      }
      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */


      hash_head = 0
      /*NIL*/
      ;

      if (s.lookahead >= MIN_MATCH$1) {
        /*** INSERT_STRING(s, s.strstart, hash_head); ***/
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
        /***/
      }
      /* Find the longest match, discarding those <= prev_length.
       * At this point we have always match_length < MIN_MATCH
       */


      if (hash_head !== 0
      /*NIL*/
      && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        s.match_length = longest_match(s, hash_head);
        /* longest_match() sets match_start */
      }

      if (s.match_length >= MIN_MATCH$1) {
        // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

        /*** _tr_tally_dist(s, s.strstart - s.match_start,
                       s.match_length - MIN_MATCH, bflush); ***/
        bflush = _tr_tally$1(s, s.strstart - s.match_start, s.match_length - MIN_MATCH$1);
        s.lookahead -= s.match_length;
        /* Insert new strings in the hash table only if the match length
         * is not too large. This saves time but degrades compression.
         */

        if (s.match_length <= s.max_lazy_match
        /*max_insert_length*/
        && s.lookahead >= MIN_MATCH$1) {
          s.match_length--;
          /* string at strstart already in table */

          do {
            s.strstart++;
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/

            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/

            /* strstart never exceeds WSIZE-MAX_MATCH, so there are
             * always MIN_MATCH bytes ahead.
             */
          } while (--s.match_length !== 0);

          s.strstart++;
        } else {
          s.strstart += s.match_length;
          s.match_length = 0;
          s.ins_h = s.window[s.strstart];
          /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */

          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]); //#if MIN_MATCH != 3
          //                Call UPDATE_HASH() MIN_MATCH-3 more times
          //#endif

          /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
           * matter since it will be recomputed at next deflate call.
           */
        }
      } else {
        /* No match, output a literal byte */
        //Tracevv((stderr,"%c", s.window[s.strstart]));

        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = _tr_tally$1(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  };
  /* ===========================================================================
   * Same as above, but achieves better compression. We use a lazy
   * evaluation for matches: a match is finally adopted only if there is
   * no better match at the next window position.
   */


  var deflate_slow = function deflate_slow(s, flush) {
    var hash_head;
    /* head of hash chain */

    var bflush;
    /* set if current block must be flushed */

    var max_insert;
    /* Process the input block. */

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);

        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */

      }
      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */


      hash_head = 0
      /*NIL*/
      ;

      if (s.lookahead >= MIN_MATCH$1) {
        /*** INSERT_STRING(s, s.strstart, hash_head); ***/
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
        /***/
      }
      /* Find the longest match, discarding those <= prev_length.
       */


      s.prev_length = s.match_length;
      s.prev_match = s.match_start;
      s.match_length = MIN_MATCH$1 - 1;

      if (hash_head !== 0
      /*NIL*/
      && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD
      /*MAX_DIST(s)*/
      ) {
          /* To simplify the code, we prevent matches with the string
           * of window index 0 (in particular we have to avoid a match
           * of the string with itself at the start of the input file).
           */
          s.match_length = longest_match(s, hash_head);
          /* longest_match() sets match_start */

          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH$1 && s.strstart - s.match_start > 4096
          /*TOO_FAR*/
          )) {
            /* If prev_match is also MIN_MATCH, match_start is garbage
             * but we will ignore the current match anyway.
             */
            s.match_length = MIN_MATCH$1 - 1;
          }
        }
      /* If there was a match at the previous step and the current
       * match is not better, output the previous match:
       */


      if (s.prev_length >= MIN_MATCH$1 && s.match_length <= s.prev_length) {
        max_insert = s.strstart + s.lookahead - MIN_MATCH$1;
        /* Do not insert strings in hash table beyond this. */
        //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

        /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                       s.prev_length - MIN_MATCH, bflush);***/

        bflush = _tr_tally$1(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH$1);
        /* Insert in hash table all strings up to the end of the match.
         * strstart-1 and strstart are already inserted. If there is not
         * enough lookahead, the last two strings are not inserted in
         * the hash table.
         */

        s.lookahead -= s.prev_length - 1;
        s.prev_length -= 2;

        do {
          if (++s.strstart <= max_insert) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
        } while (--s.prev_length !== 0);

        s.match_available = 0;
        s.match_length = MIN_MATCH$1 - 1;
        s.strstart++;

        if (bflush) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }
      } else if (s.match_available) {
        /* If there was no match at the previous position, output a
         * single literal. If there was a match but the current match
         * is longer, truncate the previous match to a single literal.
         */
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));

        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
        bflush = _tr_tally$1(s, 0, s.window[s.strstart - 1]);

        if (bflush) {
          /*** FLUSH_BLOCK_ONLY(s, 0) ***/
          flush_block_only(s, false);
          /***/
        }

        s.strstart++;
        s.lookahead--;

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        /* There is no previous match to compare with, wait for
         * the next step to decide.
         */
        s.match_available = 1;
        s.strstart++;
        s.lookahead--;
      }
    } //Assert (flush != Z_NO_FLUSH, "no flush?");


    if (s.match_available) {
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));

      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally$1(s, 0, s.window[s.strstart - 1]);
      s.match_available = 0;
    }

    s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  };
  /* ===========================================================================
   * For Z_RLE, simply look for runs of bytes, generate matches only of distance
   * one.  Do not maintain a hash table.  (It will be regenerated if this run of
   * deflate switches away from Z_RLE.)
   */


  var deflate_rle = function deflate_rle(s, flush) {
    var bflush;
    /* set if current block must be flushed */

    var prev;
    /* byte at distance one to match */

    var scan, strend;
    /* scan goes up to strend for length of run */

    var _win = s.window;

    for (;;) {
      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the longest run, plus one for the unrolled loop.
       */
      if (s.lookahead <= MAX_MATCH$1) {
        fill_window(s);

        if (s.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        if (s.lookahead === 0) {
          break;
        }
        /* flush the current block */

      }
      /* See how many times the previous byte repeats */


      s.match_length = 0;

      if (s.lookahead >= MIN_MATCH$1 && s.strstart > 0) {
        scan = s.strstart - 1;
        prev = _win[scan];

        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s.strstart + MAX_MATCH$1;

          do {
            /*jshint noempty:false*/
          } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);

          s.match_length = MAX_MATCH$1 - (strend - scan);

          if (s.match_length > s.lookahead) {
            s.match_length = s.lookahead;
          }
        } //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");

      }
      /* Emit match if have run of MIN_MATCH or longer, else emit literal */


      if (s.match_length >= MIN_MATCH$1) {
        //check_match(s, s.strstart, s.strstart - 1, s.match_length);

        /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
        bflush = _tr_tally$1(s, 1, s.match_length - MIN_MATCH$1);
        s.lookahead -= s.match_length;
        s.strstart += s.match_length;
        s.match_length = 0;
      } else {
        /* No match, output a literal byte */
        //Tracevv((stderr,"%c", s->window[s->strstart]));

        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = _tr_tally$1(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = 0;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  };
  /* ===========================================================================
   * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
   * (It will be regenerated if this run of deflate switches away from Huffman.)
   */


  var deflate_huff = function deflate_huff(s, flush) {
    var bflush;
    /* set if current block must be flushed */

    for (;;) {
      /* Make sure that we have a literal to write. */
      if (s.lookahead === 0) {
        fill_window(s);

        if (s.lookahead === 0) {
          if (flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }

          break;
          /* flush the current block */
        }
      }
      /* Output a literal byte */


      s.match_length = 0; //Tracevv((stderr,"%c", s->window[s->strstart]));

      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/

      bflush = _tr_tally$1(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    }

    s.insert = 0;

    if (flush === Z_FINISH) {
      /*** FLUSH_BLOCK(s, 1); ***/
      flush_block_only(s, true);

      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      /***/


      return BS_FINISH_DONE;
    }

    if (s.last_lit) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }

    return BS_BLOCK_DONE;
  };
  /* Values for max_lazy_match, good_match and max_chain_length, depending on
   * the desired pack level (0..9). The values given below have been tuned to
   * exclude worst case performance for pathological files. Better values may be
   * found for specific files.
   */


  function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }

  var configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),
  /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),
  /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),
  /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),
  /* 3 */
  new Config(4, 4, 16, 16, deflate_slow),
  /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),
  /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),
  /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),
  /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),
  /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)
  /* 9 max compression */
  ];
  /* ===========================================================================
   * Initialize the "longest match" routines for a new zlib stream
   */

  var lm_init = function lm_init(s) {
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/

    zero$1(s.head); // Fill with NIL (= 0);

    /* Set the default configuration parameters:
     */

    s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH$1 - 1;
    s.match_available = 0;
    s.ins_h = 0;
  };

  function DeflateState() {
    this.strm = null;
    /* pointer back to this zlib stream */

    this.status = 0;
    /* as the name implies */

    this.pending_buf = null;
    /* output still pending */

    this.pending_buf_size = 0;
    /* size of pending_buf */

    this.pending_out = 0;
    /* next pending byte to output to the stream */

    this.pending = 0;
    /* nb of bytes in the pending buffer */

    this.wrap = 0;
    /* bit 0 true for zlib, bit 1 true for gzip */

    this.gzhead = null;
    /* gzip header information to write */

    this.gzindex = 0;
    /* where in extra, name, or comment */

    this.method = Z_DEFLATED;
    /* can only be DEFLATED */

    this.last_flush = -1;
    /* value of flush param for previous deflate call */

    this.w_size = 0;
    /* LZ77 window size (32K by default) */

    this.w_bits = 0;
    /* log2(w_size)  (8..16) */

    this.w_mask = 0;
    /* w_size - 1 */

    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
     * and move to the first half later to keep a dictionary of at least wSize
     * bytes. With this organization, matches are limited to a distance of
     * wSize-MAX_MATCH bytes, but this ensures that IO is always
     * performed with a length multiple of the block size.
     */

    this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
     * is directly used as sliding window.
     */

    this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
     * array to 64K, this link is maintained only for the last 32K strings.
     * An index in this array is thus a window index modulo 32K.
     */

    this.head = null;
    /* Heads of the hash chains or NIL. */

    this.ins_h = 0;
    /* hash index of string to be inserted */

    this.hash_size = 0;
    /* number of elements in hash table */

    this.hash_bits = 0;
    /* log2(hash_size) */

    this.hash_mask = 0;
    /* hash_size-1 */

    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
     * step. It must be such that after MIN_MATCH steps, the oldest
     * byte no longer takes part in the hash key, that is:
     *   hash_shift * MIN_MATCH >= hash_bits
     */

    this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
     * negative when the window is moved backwards.
     */

    this.match_length = 0;
    /* length of best match */

    this.prev_match = 0;
    /* previous match */

    this.match_available = 0;
    /* set if previous match exists */

    this.strstart = 0;
    /* start of string to insert */

    this.match_start = 0;
    /* start of matching string */

    this.lookahead = 0;
    /* number of valid bytes ahead in window */

    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
     * are discarded. This is used in the lazy match evaluation.
     */

    this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
     * length.  A higher limit improves compression ratio but degrades the
     * speed.
     */

    this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
     * smaller than this value. This mechanism is used only for compression
     * levels >= 4.
     */
    // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;

    /* Insert new strings in the hash table only if the match length is not
     * greater than this length. This saves time but degrades compression.
     * max_insert_length is used only for compression levels <= 3.
     */

    this.level = 0;
    /* compression level (1..9) */

    this.strategy = 0;
    /* favor or force Huffman coding*/

    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */

    this.nice_match = 0;
    /* Stop searching when current match exceeds this */

    /* used by trees.c: */

    /* Didn't use ct_data typedef below to suppress compiler warning */
    // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective

    this.dyn_ltree = new Uint16Array(HEAP_SIZE$1 * 2);
    this.dyn_dtree = new Uint16Array((2 * D_CODES$1 + 1) * 2);
    this.bl_tree = new Uint16Array((2 * BL_CODES$1 + 1) * 2);
    zero$1(this.dyn_ltree);
    zero$1(this.dyn_dtree);
    zero$1(this.bl_tree);
    this.l_desc = null;
    /* desc. for literal tree */

    this.d_desc = null;
    /* desc. for distance tree */

    this.bl_desc = null;
    /* desc. for bit length tree */
    //ush bl_count[MAX_BITS+1];

    this.bl_count = new Uint16Array(MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */
    //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */

    this.heap = new Uint16Array(2 * L_CODES$1 + 1);
    /* heap used to build the Huffman trees */

    zero$1(this.heap);
    this.heap_len = 0;
    /* number of elements in the heap */

    this.heap_max = 0;
    /* element of largest frequency */

    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
     * The same heap array is used to build all trees.
     */

    this.depth = new Uint16Array(2 * L_CODES$1 + 1); //uch depth[2*L_CODES+1];

    zero$1(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
     */

    this.l_buf = 0;
    /* buffer index for literals or lengths */

    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
     * limiting lit_bufsize to 64K:
     *   - frequencies can be kept in 16 bit counters
     *   - if compression is not successful for the first block, all input
     *     data is still in the window so we can still emit a stored block even
     *     when input comes from standard input.  (This can also be done for
     *     all blocks if lit_bufsize is not greater than 32K.)
     *   - if compression is not successful for a file smaller than 64K, we can
     *     even emit a stored file instead of a stored block (saving 5 bytes).
     *     This is applicable only for zip (not gzip or zlib).
     *   - creating new Huffman trees less frequently may not provide fast
     *     adaptation to changes in the input data statistics. (Take for
     *     example a binary file with poorly compressible code followed by
     *     a highly compressible string table.) Smaller buffer sizes give
     *     fast adaptation but have of course the overhead of transmitting
     *     trees more frequently.
     *   - I can't count above 4
     */

    this.last_lit = 0;
    /* running index in l_buf */

    this.d_buf = 0;
    /* Buffer index for distances. To simplify the code, d_buf and l_buf have
     * the same number of elements. To use different lengths, an extra flag
     * array would be necessary.
     */

    this.opt_len = 0;
    /* bit length of current block with optimal trees */

    this.static_len = 0;
    /* bit length of current block with static trees */

    this.matches = 0;
    /* number of string matches in current block */

    this.insert = 0;
    /* bytes at end of window left to insert */

    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
     * significant bits).
     */

    this.bi_valid = 0;
    /* Number of valid bits in bi_buf.  All bits above the last valid bit
     * are always zero.
     */
    // Used for window memory init. We safely ignore it for JS. That makes
    // sense only for pointers and memory check tools.
    //this.high_water = 0;

    /* High water mark offset in window for initialized bytes -- bytes above
     * this are set to zero in order to avoid memory check warnings when
     * longest match routines access bytes past the input.  This is then
     * updated to the new high water mark.
     */
  }

  var deflateResetKeep = function deflateResetKeep(strm) {
    if (!strm || !strm.state) {
      return err(strm, Z_STREAM_ERROR);
    }

    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN$1;
    var s = strm.state;
    s.pending = 0;
    s.pending_out = 0;

    if (s.wrap < 0) {
      s.wrap = -s.wrap;
      /* was made negative by deflate(..., Z_FINISH); */
    }

    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
    : 1; // adler32(0, Z_NULL, 0)

    s.last_flush = Z_NO_FLUSH;

    _tr_init$1(s);

    return Z_OK;
  };

  var deflateReset = function deflateReset(strm) {
    var ret = deflateResetKeep(strm);

    if (ret === Z_OK) {
      lm_init(strm.state);
    }

    return ret;
  };

  var deflateSetHeader = function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }

    if (strm.state.wrap !== 2) {
      return Z_STREAM_ERROR;
    }

    strm.state.gzhead = head;
    return Z_OK;
  };

  var deflateInit2 = function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) {
      // === Z_NULL
      return Z_STREAM_ERROR;
    }

    var wrap = 1;

    if (level === Z_DEFAULT_COMPRESSION) {
      level = 6;
    }

    if (windowBits < 0) {
      /* suppress zlib wrapper */
      wrap = 0;
      windowBits = -windowBits;
    } else if (windowBits > 15) {
      wrap = 2;
      /* write gzip wrapper instead */

      windowBits -= 16;
    }

    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED$1) {
      return err(strm, Z_STREAM_ERROR);
    }

    if (windowBits === 8) {
      windowBits = 9;
    }
    /* until 256-byte window bug fixed */


    var s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);
    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size); // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */

    s.lit_bufsize = 1 << memLevel + 6;
    /* 16K elements by default */

    s.pending_buf_size = s.lit_bufsize * 4; //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
    //s->pending_buf = (uchf *) overlay;

    s.pending_buf = new Uint8Array(s.pending_buf_size); // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);

    s.d_buf = 1 * s.lit_bufsize; //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;

    s.l_buf = (1 + 2) * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
  };

  var deflateInit = function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
  };

  var deflate = function deflate(strm, flush) {
    var beg, val; // for gzip header write only

    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    }

    var s = strm.state;

    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
      return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    }

    s.strm = strm;
    /* just in case */

    var old_flush = s.last_flush;
    s.last_flush = flush;
    /* Write the header */

    if (s.status === INIT_STATE) {
      if (s.wrap === 2) {
        // GZIP header
        strm.adler = 0; //crc32(0L, Z_NULL, 0);

        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);

        if (!s.gzhead) {
          // s->gzhead == Z_NULL
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
        } else {
          put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
          put_byte(s, s.gzhead.time & 0xff);
          put_byte(s, s.gzhead.time >> 8 & 0xff);
          put_byte(s, s.gzhead.time >> 16 & 0xff);
          put_byte(s, s.gzhead.time >> 24 & 0xff);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 0xff);

          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 0xff);
            put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
          }

          if (s.gzhead.hcrc) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
          }

          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      } else // DEFLATE header
        {
          var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;

          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }

          header |= level_flags << 6;

          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }

          header += 31 - header % 31;
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          /* Save the adler32 of the preset dictionary: */

          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
          }

          strm.adler = 1; // adler32(0L, Z_NULL, 0);
        }
    } //#ifdef GZIP


    if (s.status === EXTRA_STATE) {
      if (s.gzhead.extra
      /* != Z_NULL*/
      ) {
          beg = s.pending;
          /* start of bytes to update crc */

          while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              flush_pending(strm);
              beg = s.pending;

              if (s.pending === s.pending_buf_size) {
                break;
              }
            }

            put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
            s.gzindex++;
          }

          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }

          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
        s.status = NAME_STATE;
      }
    }

    if (s.status === NAME_STATE) {
      if (s.gzhead.name
      /* != Z_NULL*/
      ) {
          beg = s.pending;
          /* start of bytes to update crc */
          //int val;

          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              flush_pending(strm);
              beg = s.pending;

              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            } // JS specific: little magic to add zero terminator to end of string


            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }

            put_byte(s, val);
          } while (val !== 0);

          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }

          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
        s.status = COMMENT_STATE;
      }
    }

    if (s.status === COMMENT_STATE) {
      if (s.gzhead.comment
      /* != Z_NULL*/
      ) {
          beg = s.pending;
          /* start of bytes to update crc */
          //int val;

          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              flush_pending(strm);
              beg = s.pending;

              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            } // JS specific: little magic to add zero terminator to end of string


            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }

            put_byte(s, val);
          } while (val !== 0);

          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }

          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
        s.status = HCRC_STATE;
      }
    }

    if (s.status === HCRC_STATE) {
      if (s.gzhead.hcrc) {
        if (s.pending + 2 > s.pending_buf_size) {
          flush_pending(strm);
        }

        if (s.pending + 2 <= s.pending_buf_size) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, strm.adler >> 8 & 0xff);
          strm.adler = 0; //crc32(0L, Z_NULL, 0);

          s.status = BUSY_STATE;
        }
      } else {
        s.status = BUSY_STATE;
      }
    } //#endif

    /* Flush as much pending output as possible */


    if (s.pending !== 0) {
      flush_pending(strm);

      if (strm.avail_out === 0) {
        /* Since avail_out is 0, deflate will be called again with
         * more output space, but possibly with both pending and
         * avail_in equal to zero. There won't be anything to do,
         * but this is not an error situation so make sure we
         * return OK instead of BUF_ERROR at next call of deflate:
         */
        s.last_flush = -1;
        return Z_OK;
      }
      /* Make sure there is something to do and avoid duplicate consecutive
       * flushes. For repeated and useless calls with Z_FINISH, we keep
       * returning Z_STREAM_END instead of Z_BUF_ERROR.
       */

    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
      return err(strm, Z_BUF_ERROR);
    }
    /* User must not provide more input after the first FINISH: */


    if (s.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR);
    }
    /* Start a new block or continue the current one.
     */


    if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
      var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);

      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s.status = FINISH_STATE;
      }

      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          /* avoid BUF_ERROR next call, see above */
        }

        return Z_OK;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
         * of deflate should use the same flush parameter to make sure
         * that the flush is complete. So we don't have to output an
         * empty block here, this will be done at next call. This also
         * ensures that for a very small output buffer, we emit at most
         * one empty block.
         */
      }

      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          _tr_align$1(s);
        } else if (flush !== Z_BLOCK) {
          /* FULL_FLUSH or SYNC_FLUSH */
          _tr_stored_block$1(s, 0, 0, false);
          /* For a full flush, this empty block will be recognized
           * as a special marker by inflate_sync().
           */


          if (flush === Z_FULL_FLUSH) {
            /*** CLEAR_HASH(s); ***/

            /* forget history */
            zero$1(s.head); // Fill with NIL (= 0);

            if (s.lookahead === 0) {
              s.strstart = 0;
              s.block_start = 0;
              s.insert = 0;
            }
          }
        }

        flush_pending(strm);

        if (strm.avail_out === 0) {
          s.last_flush = -1;
          /* avoid BUF_ERROR at next call, see above */

          return Z_OK;
        }
      }
    } //Assert(strm->avail_out > 0, "bug2");
    //if (strm.avail_out <= 0) { throw new Error("bug2");}


    if (flush !== Z_FINISH) {
      return Z_OK;
    }

    if (s.wrap <= 0) {
      return Z_STREAM_END;
    }
    /* Write the trailer */


    if (s.wrap === 2) {
      put_byte(s, strm.adler & 0xff);
      put_byte(s, strm.adler >> 8 & 0xff);
      put_byte(s, strm.adler >> 16 & 0xff);
      put_byte(s, strm.adler >> 24 & 0xff);
      put_byte(s, strm.total_in & 0xff);
      put_byte(s, strm.total_in >> 8 & 0xff);
      put_byte(s, strm.total_in >> 16 & 0xff);
      put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }

    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
     * to flush the rest.
     */

    if (s.wrap > 0) {
      s.wrap = -s.wrap;
    }
    /* write the trailer only once! */


    return s.pending !== 0 ? Z_OK : Z_STREAM_END;
  };

  var deflateEnd = function deflateEnd(strm) {
    if (!strm
    /*== Z_NULL*/
    || !strm.state
    /*== Z_NULL*/
    ) {
        return Z_STREAM_ERROR;
      }

    var status = strm.state.status;

    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
      return err(strm, Z_STREAM_ERROR);
    }

    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
  };
  /* =========================================================================
   * Initializes the compression dictionary from the given byte
   * sequence without producing any compressed output.
   */


  var deflateSetDictionary = function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;

    if (!strm
    /*== Z_NULL*/
    || !strm.state
    /*== Z_NULL*/
    ) {
        return Z_STREAM_ERROR;
      }

    var s = strm.state;
    var wrap = s.wrap;

    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
      return Z_STREAM_ERROR;
    }
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */


    if (wrap === 1) {
      /* adler32(strm->adler, dictionary, dictLength); */
      strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    }

    s.wrap = 0;
    /* avoid computing Adler-32 in read_buf */

    /* if dictionary would fill window, just replace the history */

    if (dictLength >= s.w_size) {
      if (wrap === 0) {
        /* already empty otherwise */

        /*** CLEAR_HASH(s); ***/
        zero$1(s.head); // Fill with NIL (= 0);

        s.strstart = 0;
        s.block_start = 0;
        s.insert = 0;
      }
      /* use the tail */
      // dictionary = dictionary.slice(dictLength - s.w_size);


      var tmpDict = new Uint8Array(s.w_size);
      tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
      dictionary = tmpDict;
      dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */


    var avail = strm.avail_in;
    var next = strm.next_in;
    var input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);

    while (s.lookahead >= MIN_MATCH$1) {
      var str = s.strstart;
      var n = s.lookahead - (MIN_MATCH$1 - 1);

      do {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH$1 - 1]);
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
      } while (--n);

      s.strstart = str;
      s.lookahead = MIN_MATCH$1 - 1;
      fill_window(s);
    }

    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH$1 - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
  };

  var deflateInit_1 = deflateInit;
  var deflateInit2_1 = deflateInit2;
  var deflateReset_1 = deflateReset;
  var deflateResetKeep_1 = deflateResetKeep;
  var deflateSetHeader_1 = deflateSetHeader;
  var deflate_2 = deflate;
  var deflateEnd_1 = deflateEnd;
  var deflateSetDictionary_1 = deflateSetDictionary;
  var deflateInfo = 'pako deflate (from Nodeca project)';
  /* Not implemented
  module.exports.deflateBound = deflateBound;
  module.exports.deflateCopy = deflateCopy;
  module.exports.deflateParams = deflateParams;
  module.exports.deflatePending = deflatePending;
  module.exports.deflatePrime = deflatePrime;
  module.exports.deflateTune = deflateTune;
  */

  var deflate_1 = {
    deflateInit: deflateInit_1,
    deflateInit2: deflateInit2_1,
    deflateReset: deflateReset_1,
    deflateResetKeep: deflateResetKeep_1,
    deflateSetHeader: deflateSetHeader_1,
    deflate: deflate_2,
    deflateEnd: deflateEnd_1,
    deflateSetDictionary: deflateSetDictionary_1,
    deflateInfo: deflateInfo
  };

  var _has = function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };

  var assign = function assign(obj
  /*from1, from2, from3, ...*/
  ) {
    var sources = Array.prototype.slice.call(arguments, 1);

    while (sources.length) {
      var source = sources.shift();

      if (!source) {
        continue;
      }

      if (_typeof(source) !== 'object') {
        throw new TypeError(source + 'must be non-object');
      }

      for (var p in source) {
        if (_has(source, p)) {
          obj[p] = source[p];
        }
      }
    }

    return obj;
  }; // Join array of chunks to single array.


  var flattenChunks = function flattenChunks(chunks) {
    // calculate data length
    var len = 0;

    for (var i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    } // join chunks


    var result = new Uint8Array(len);

    for (var _i = 0, pos = 0, _l = chunks.length; _i < _l; _i++) {
      var chunk = chunks[_i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  };

  var common = {
    assign: assign,
    flattenChunks: flattenChunks
  }; // String encode/decode helpers
  // Quick check if we can use fast array to bin string conversion
  //
  // - apply(Array) can fail on Android 2.2
  // - apply(Uint8Array) can fail on iOS 5.1 Safari
  //

  var STR_APPLY_UIA_OK = true;

  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (__) {
    STR_APPLY_UIA_OK = false;
  } // Table with utf8 lengths (calculated by first byte of sequence)
  // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
  // because max possible codepoint is 0x10ffff


  var _utf8len = new Uint8Array(256);

  for (var q$1 = 0; q$1 < 256; q$1++) {
    _utf8len[q$1] = q$1 >= 252 ? 6 : q$1 >= 248 ? 5 : q$1 >= 240 ? 4 : q$1 >= 224 ? 3 : q$1 >= 192 ? 2 : 1;
  }

  _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
  // convert string to array (typed, when possible)

  var string2buf = function string2buf(str) {
    var buf,
        c,
        c2,
        m_pos,
        i,
        str_len = str.length,
        buf_len = 0; // count binary size

    for (m_pos = 0; m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);

      if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);

        if ((c2 & 0xfc00) === 0xdc00) {
          c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
          m_pos++;
        }
      }

      buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    } // allocate buffer


    buf = new Uint8Array(buf_len); // convert

    for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);

      if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);

        if ((c2 & 0xfc00) === 0xdc00) {
          c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
          m_pos++;
        }
      }

      if (c < 0x80) {
        /* one byte */
        buf[i++] = c;
      } else if (c < 0x800) {
        /* two bytes */
        buf[i++] = 0xC0 | c >>> 6;
        buf[i++] = 0x80 | c & 0x3f;
      } else if (c < 0x10000) {
        /* three bytes */
        buf[i++] = 0xE0 | c >>> 12;
        buf[i++] = 0x80 | c >>> 6 & 0x3f;
        buf[i++] = 0x80 | c & 0x3f;
      } else {
        /* four bytes */
        buf[i++] = 0xf0 | c >>> 18;
        buf[i++] = 0x80 | c >>> 12 & 0x3f;
        buf[i++] = 0x80 | c >>> 6 & 0x3f;
        buf[i++] = 0x80 | c & 0x3f;
      }
    }

    return buf;
  }; // Helper


  var buf2binstring = function buf2binstring(buf, len) {
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK) {
        return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
      }
    }

    var result = '';

    for (var i = 0; i < len; i++) {
      result += String.fromCharCode(buf[i]);
    }

    return result;
  }; // convert array to string


  var buf2string = function buf2string(buf, max) {
    var i, out;
    var len = max || buf.length; // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.

    var utf16buf = new Array(len * 2);

    for (out = 0, i = 0; i < len;) {
      var c = buf[i++]; // quick process ascii

      if (c < 0x80) {
        utf16buf[out++] = c;
        continue;
      }

      var c_len = _utf8len[c]; // skip 5 & 6 byte codes

      if (c_len > 4) {
        utf16buf[out++] = 0xfffd;
        i += c_len - 1;
        continue;
      } // apply mask on first byte


      c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07; // join the rest

      while (c_len > 1 && i < len) {
        c = c << 6 | buf[i++] & 0x3f;
        c_len--;
      } // terminated by end of string?


      if (c_len > 1) {
        utf16buf[out++] = 0xfffd;
        continue;
      }

      if (c < 0x10000) {
        utf16buf[out++] = c;
      } else {
        c -= 0x10000;
        utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
        utf16buf[out++] = 0xdc00 | c & 0x3ff;
      }
    }

    return buf2binstring(utf16buf, out);
  }; // Calculate max possible position in utf8 buffer,
  // that will not break sequence. If that's not possible
  // - (very small limits) return max size as is.
  //
  // buf[] - utf8 bytes array
  // max   - length limit (mandatory);


  var utf8border = function utf8border(buf, max) {
    max = max || buf.length;

    if (max > buf.length) {
      max = buf.length;
    } // go back from last position, until start of sequence found


    var pos = max - 1;

    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
      pos--;
    } // Very small and broken sequence,
    // return max, because we should return something anyway.


    if (pos < 0) {
      return max;
    } // If we came to start of buffer - that means buffer is too small,
    // return max too.


    if (pos === 0) {
      return max;
    }

    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };

  var strings = {
    string2buf: string2buf,
    buf2string: buf2string,
    utf8border: utf8border
  }; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function ZStream() {
    /* next input byte */
    this.input = null; // JS specific, because we have no pointers

    this.next_in = 0;
    /* number of bytes available at input */

    this.avail_in = 0;
    /* total number of input bytes read so far */

    this.total_in = 0;
    /* next output byte should be put there */

    this.output = null; // JS specific, because we have no pointers

    this.next_out = 0;
    /* remaining free space at output */

    this.avail_out = 0;
    /* total number of bytes output so far */

    this.total_out = 0;
    /* last error message, NULL if no error */

    this.msg = ''
    /*Z_NULL*/
    ;
    /* not visible by applications */

    this.state = null;
    /* best guess about the data type: binary or text */

    this.data_type = 2
    /*Z_UNKNOWN*/
    ;
    /* adler32 value of the uncompressed data */

    this.adler = 0;
  }

  var zstream = ZStream;
  var toString$1 = Object.prototype.toString;
  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  var Z_NO_FLUSH$1 = constants.Z_NO_FLUSH,
      Z_SYNC_FLUSH = constants.Z_SYNC_FLUSH,
      Z_FULL_FLUSH$1 = constants.Z_FULL_FLUSH,
      Z_FINISH$1 = constants.Z_FINISH,
      Z_OK$1 = constants.Z_OK,
      Z_STREAM_END$1 = constants.Z_STREAM_END,
      Z_DEFAULT_COMPRESSION$1 = constants.Z_DEFAULT_COMPRESSION,
      Z_DEFAULT_STRATEGY$1 = constants.Z_DEFAULT_STRATEGY,
      Z_DEFLATED$1 = constants.Z_DEFLATED;
  /* ===========================================================================*/

  /**
   * class Deflate
   *
   * Generic JS-style wrapper for zlib calls. If you don't need
   * streaming behaviour - use more simple functions: [[deflate]],
   * [[deflateRaw]] and [[gzip]].
   **/

  /* internal
   * Deflate.chunks -> Array
   *
   * Chunks of output data, if [[Deflate#onData]] not overridden.
   **/

  /**
   * Deflate.result -> Uint8Array
   *
   * Compressed result, generated by default [[Deflate#onData]]
   * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
   * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
   **/

  /**
   * Deflate.err -> Number
   *
   * Error code after deflate finished. 0 (Z_OK) on success.
   * You will not need it in real life, because deflate errors
   * are possible only on wrong options or bad `onData` / `onEnd`
   * custom handlers.
   **/

  /**
   * Deflate.msg -> String
   *
   * Error message, if [[Deflate.err]] != 0
   **/

  /**
   * new Deflate(options)
   * - options (Object): zlib deflate options.
   *
   * Creates new deflator instance with specified params. Throws exception
   * on bad params. Supported options:
   *
   * - `level`
   * - `windowBits`
   * - `memLevel`
   * - `strategy`
   * - `dictionary`
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Additional options, for internal needs:
   *
   * - `chunkSize` - size of generated data chunks (16K by default)
   * - `raw` (Boolean) - do raw deflate
   * - `gzip` (Boolean) - create gzip wrapper
   * - `header` (Object) - custom header for gzip
   *   - `text` (Boolean) - true if compressed data believed to be text
   *   - `time` (Number) - modification time, unix timestamp
   *   - `os` (Number) - operation system code
   *   - `extra` (Array) - array of bytes with extra data (max 65536)
   *   - `name` (String) - file name (binary string)
   *   - `comment` (String) - comment (binary string)
   *   - `hcrc` (Boolean) - true if header crc should be added
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako')
   *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
   *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
   *
   * const deflate = new pako.Deflate({ level: 3});
   *
   * deflate.push(chunk1, false);
   * deflate.push(chunk2, true);  // true -> last chunk
   *
   * if (deflate.err) { throw new Error(deflate.err); }
   *
   * console.log(deflate.result);
   * ```
   **/

  function Deflate(options) {
    this.options = common.assign({
      level: Z_DEFAULT_COMPRESSION$1,
      method: Z_DEFLATED$1,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY$1
    }, options || {});
    var opt = this.options;

    if (opt.raw && opt.windowBits > 0) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
      opt.windowBits += 16;
    }

    this.err = 0; // error code, if happens (0 = Z_OK)

    this.msg = ''; // error message

    this.ended = false; // used to avoid multiple onEnd() calls

    this.chunks = []; // chunks of compressed data

    this.strm = new zstream();
    this.strm.avail_out = 0;
    var status = deflate_1.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);

    if (status !== Z_OK$1) {
      throw new Error(messages[status]);
    }

    if (opt.header) {
      deflate_1.deflateSetHeader(this.strm, opt.header);
    }

    if (opt.dictionary) {
      var dict; // Convert data if needed

      if (typeof opt.dictionary === 'string') {
        // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
      } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }

      status = deflate_1.deflateSetDictionary(this.strm, dict);

      if (status !== Z_OK$1) {
        throw new Error(messages[status]);
      }

      this._dict_set = true;
    }
  }
  /**
   * Deflate#push(data[, flush_mode]) -> Boolean
   * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
   *   converted to utf8 byte sequence.
   * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
   *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
   *
   * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
   * new compressed chunks. Returns `true` on success. The last data block must
   * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
   * buffers and call [[Deflate#onEnd]].
   *
   * On fail call [[Deflate#onEnd]] with error code and return false.
   *
   * ##### Example
   *
   * ```javascript
   * push(chunk, false); // push one of data chunks
   * ...
   * push(chunk, true);  // push last chunk
   * ```
   **/


  Deflate.prototype.push = function (data, flush_mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;

    var status, _flush_mode;

    if (this.ended) {
      return false;
    }

    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH$1 : Z_NO_FLUSH$1; // Convert data if needed

    if (typeof data === 'string') {
      // If we need to compress text, change encoding to utf8.
      strm.input = strings.string2buf(data);
    } else if (toString$1.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }

    strm.next_in = 0;
    strm.avail_in = strm.input.length;

    for (;;) {
      if (strm.avail_out === 0) {
        strm.output = new Uint8Array(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      } // Make sure avail_out > 6 to avoid repeating markers


      if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH$1) && strm.avail_out <= 6) {
        this.onData(strm.output.subarray(0, strm.next_out));
        strm.avail_out = 0;
        continue;
      }

      status = deflate_1.deflate(strm, _flush_mode); // Ended => flush and finish

      if (status === Z_STREAM_END$1) {
        if (strm.next_out > 0) {
          this.onData(strm.output.subarray(0, strm.next_out));
        }

        status = deflate_1.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK$1;
      } // Flush if out buffer full


      if (strm.avail_out === 0) {
        this.onData(strm.output);
        continue;
      } // Flush if requested and has data


      if (_flush_mode > 0 && strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
        strm.avail_out = 0;
        continue;
      }

      if (strm.avail_in === 0) break;
    }

    return true;
  };
  /**
   * Deflate#onData(chunk) -> Void
   * - chunk (Uint8Array): output data.
   *
   * By default, stores data blocks in `chunks[]` property and glue
   * those in `onEnd`. Override this handler, if you need another behaviour.
   **/


  Deflate.prototype.onData = function (chunk) {
    this.chunks.push(chunk);
  };
  /**
   * Deflate#onEnd(status) -> Void
   * - status (Number): deflate status. 0 (Z_OK) on success,
   *   other if not.
   *
   * Called once after you tell deflate that the input stream is
   * complete (Z_FINISH). By default - join collected chunks,
   * free memory and fill `results` / `err` properties.
   **/


  Deflate.prototype.onEnd = function (status) {
    // On success - join
    if (status === Z_OK$1) {
      this.result = common.flattenChunks(this.chunks);
    }

    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  /**
   * deflate(data[, options]) -> Uint8Array
   * - data (Uint8Array|String): input data to compress.
   * - options (Object): zlib deflate options.
   *
   * Compress `data` with deflate algorithm and `options`.
   *
   * Supported options are:
   *
   * - level
   * - windowBits
   * - memLevel
   * - strategy
   * - dictionary
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Sugar (options):
   *
   * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
   *   negative windowBits implicitly.
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako')
   * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
   *
   * console.log(pako.deflate(data));
   * ```
   **/


  function deflate$1(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true); // That will never happens, if you don't cheat with options :)

    if (deflator.err) {
      throw deflator.msg || messages[deflator.err];
    }

    return deflator.result;
  }
  /**
   * deflateRaw(data[, options]) -> Uint8Array
   * - data (Uint8Array|String): input data to compress.
   * - options (Object): zlib deflate options.
   *
   * The same as [[deflate]], but creates raw data, without wrapper
   * (header and adler32 crc).
   **/


  function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate$1(input, options);
  }
  /**
   * gzip(data[, options]) -> Uint8Array
   * - data (Uint8Array|String): input data to compress.
   * - options (Object): zlib deflate options.
   *
   * The same as [[deflate]], but create gzip wrapper instead of
   * deflate one.
   **/


  function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate$1(input, options);
  }

  var Deflate_1 = Deflate;
  var deflate_2$1 = deflate$1;
  var deflateRaw_1 = deflateRaw;
  var gzip_1 = gzip;
  var constants$1 = constants;
  var deflate_1$1 = {
    Deflate: Deflate_1,
    deflate: deflate_2$1,
    deflateRaw: deflateRaw_1,
    gzip: gzip_1,
    constants: constants$1
  }; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.
  // See state defs from inflate.js

  var BAD = 30;
  /* got a data error -- remain here until reset */

  var TYPE = 12;
  /* i: waiting for type bits, including last-flag bit */

  /*
     Decode literal, length, and distance codes and write out the resulting
     literal and match bytes until either not enough input or output is
     available, an end-of-block is encountered, or a data error is encountered.
     When large enough input and output buffers are supplied to inflate(), for
     example, a 16K input buffer and a 64K output buffer, more than 95% of the
     inflate execution time is spent in this routine.

     Entry assumptions:

          state.mode === LEN
          strm.avail_in >= 6
          strm.avail_out >= 258
          start >= strm.avail_out
          state.bits < 8

     On return, state.mode is one of:

          LEN -- ran out of enough output space or enough available input
          TYPE -- reached end of block code, inflate() to interpret next block
          BAD -- error in block data

     Notes:

      - The maximum input bits used by a length/distance pair is 15 bits for the
        length code, 5 bits for the length extra, 15 bits for the distance code,
        and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
        Therefore if strm.avail_in >= 6, then there is enough input to avoid
        checking for available input while decoding.

      - The maximum bytes that a single length/distance pair can output is 258
        bytes, which is the maximum length that can be coded.  inflate_fast()
        requires strm.avail_out >= 258 for each loop to avoid checking for
        output space.
   */

  var inffast = function inflate_fast(strm, start) {
    var _in;
    /* local strm.input */


    var last;
    /* have enough input while in < last */

    var _out;
    /* local strm.output */


    var beg;
    /* inflate()'s initial strm.output */

    var end;
    /* while out < end, enough space available */
    //#ifdef INFLATE_STRICT

    var dmax;
    /* maximum distance from zlib header */
    //#endif

    var wsize;
    /* window size or zero if not using window */

    var whave;
    /* valid bytes in the window */

    var wnext;
    /* window write index */
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools

    var s_window;
    /* allocated sliding window, if wsize != 0 */

    var hold;
    /* local strm.hold */

    var bits;
    /* local strm.bits */

    var lcode;
    /* local strm.lencode */

    var dcode;
    /* local strm.distcode */

    var lmask;
    /* mask for first level of length codes */

    var dmask;
    /* mask for first level of distance codes */

    var here;
    /* retrieved table entry */

    var op;
    /* code bits, operation, extra bits, or */

    /*  window position, window bytes to copy */

    var len;
    /* match length, unused bytes */

    var dist;
    /* match distance */

    var from;
    /* where to copy match from */

    var from_source;
    var input, output; // JS specific, because we have no pointers

    /* copy state to local variables */

    var state = strm.state; //here = state.here;

    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257); //#ifdef INFLATE_STRICT

    dmax = state.dmax; //#endif

    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
       input data or output space */

    top: do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }

      here = lcode[hold & lmask];

      dolen: for (;;) {
        // Goto emulation
        op = here >>> 24
        /*here.bits*/
        ;
        hold >>>= op;
        bits -= op;
        op = here >>> 16 & 0xff
        /*here.op*/
        ;

        if (op === 0) {
          /* literal */
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          output[_out++] = here & 0xffff
          /*here.val*/
          ;
        } else if (op & 16) {
          /* length base */
          len = here & 0xffff
          /*here.val*/
          ;
          op &= 15;
          /* number of extra bits */

          if (op) {
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
            }

            len += hold & (1 << op) - 1;
            hold >>>= op;
            bits -= op;
          } //Tracevv((stderr, "inflate:         length %u\n", len));


          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }

          here = dcode[hold & dmask];

          dodist: for (;;) {
            // goto emulation
            op = here >>> 24
            /*here.bits*/
            ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff
            /*here.op*/
            ;

            if (op & 16) {
              /* distance base */
              dist = here & 0xffff
              /*here.val*/
              ;
              op &= 15;
              /* number of extra bits */

              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;

                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
              }

              dist += hold & (1 << op) - 1; //#ifdef INFLATE_STRICT

              if (dist > dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break top;
              } //#endif


              hold >>>= op;
              bits -= op; //Tracevv((stderr, "inflate:         distance %u\n", dist));

              op = _out - beg;
              /* max distance in output */

              if (dist > op) {
                /* see if copy from window */
                op = dist - op;
                /* distance back in window */

                if (op > whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  } // (!) This block is disabled in zlib defaults,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //                if (len <= op - whave) {
                  //                  do {
                  //                    output[_out++] = 0;
                  //                  } while (--len);
                  //                  continue top;
                  //                }
                  //                len -= op - whave;
                  //                do {
                  //                  output[_out++] = 0;
                  //                } while (--op > whave);
                  //                if (op === 0) {
                  //                  from = _out - dist;
                  //                  do {
                  //                    output[_out++] = output[from++];
                  //                  } while (--len);
                  //                  continue top;
                  //                }
                  //#endif

                }

                from = 0; // window index

                from_source = s_window;

                if (wnext === 0) {
                  /* very common case */
                  from += wsize - op;

                  if (op < len) {
                    /* some from window */
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = _out - dist;
                    /* rest from output */

                    from_source = output;
                  }
                } else if (wnext < op) {
                  /* wrap around window */
                  from += wsize + wnext - op;
                  op -= wnext;

                  if (op < len) {
                    /* some from end of window */
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = 0;

                    if (wnext < len) {
                      /* some from start of window */
                      op = wnext;
                      len -= op;

                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);

                      from = _out - dist;
                      /* rest from output */

                      from_source = output;
                    }
                  }
                } else {
                  /* contiguous in window */
                  from += wnext - op;

                  if (op < len) {
                    /* some from window */
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = _out - dist;
                    /* rest from output */

                    from_source = output;
                  }
                }

                while (len > 2) {
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  output[_out++] = from_source[from++];
                  len -= 3;
                }

                if (len) {
                  output[_out++] = from_source[from++];

                  if (len > 1) {
                    output[_out++] = from_source[from++];
                  }
                }
              } else {
                from = _out - dist;
                /* copy direct from output */

                do {
                  /* minimum length is three */
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  output[_out++] = output[from++];
                  len -= 3;
                } while (len > 2);

                if (len) {
                  output[_out++] = output[from++];

                  if (len > 1) {
                    output[_out++] = output[from++];
                  }
                }
              }
            } else if ((op & 64) === 0) {
              /* 2nd level distance code */
              here = dcode[(here & 0xffff) + (
              /*here.val*/
              hold & (1 << op) - 1)];
              continue dodist;
            } else {
              strm.msg = 'invalid distance code';
              state.mode = BAD;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        } else if ((op & 64) === 0) {
          /* 2nd level length code */
          here = lcode[(here & 0xffff) + (
          /*here.val*/
          hold & (1 << op) - 1)];
          continue dolen;
        } else if (op & 32) {
          /* end-of-block */
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.mode = TYPE;
          break top;
        } else {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break top;
        }

        break; // need to emulate goto via "continue"
      }
    } while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */


    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */

    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
  }; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.


  var MAXBITS = 15;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592; //const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var lbase = new Uint16Array([
  /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
  var lext = new Uint8Array([
  /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
  var dbase = new Uint16Array([
  /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
  var dext = new Uint8Array([
  /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);

  var inflate_table = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits; //here = opts.here; /* table entry for duplication */

    var len = 0;
    /* a code's length in bits */

    var sym = 0;
    /* index of code symbols */

    var min = 0,
        max = 0;
    /* minimum and maximum code lengths */

    var root = 0;
    /* number of index bits for root table */

    var curr = 0;
    /* number of index bits for current table */

    var drop = 0;
    /* code bits to drop for sub-table */

    var left = 0;
    /* number of prefix codes available */

    var used = 0;
    /* code entries in table used */

    var huff = 0;
    /* Huffman code */

    var incr;
    /* for incrementing code, index */

    var fill;
    /* index for replicating entries */

    var low;
    /* low bits for current root entry */

    var mask;
    /* mask for low root bits */

    var next;
    /* next available space in table */

    var base = null;
    /* base value table to use */

    var base_index = 0; //  let shoextra;    /* extra bits table to use */

    var end;
    /* use base and extra for symbol > end */

    var count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */

    var offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */

    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    /*
     Process a set of code lengths to create a canonical Huffman code.  The
     code lengths are lens[0..codes-1].  Each length corresponds to the
     symbols 0..codes-1.  The Huffman code is generated by first sorting the
     symbols by length from short to long, and retaining the symbol order
     for codes with equal lengths.  Then the code starts with all zero bits
     for the first code of the shortest length, and the codes are integer
     increments for the same length, and zeros are appended as the length
     increases.  For the deflate format, these bits are stored backwards
     from their more natural integer increment ordering, and so when the
     decoding tables are built in the large loop below, the integer codes
     are incremented backwards.
      This routine assumes, but does not check, that all of the entries in
     lens[] are in the range 0..MAXBITS.  The caller must assure this.
     1..MAXBITS is interpreted as that code length.  zero means that that
     symbol does not occur in this code.
      The codes are sorted by computing a count of codes for each length,
     creating from that a table of starting indices for each length in the
     sorted table, and then entering the symbols in order in the sorted
     table.  The sorted table is work[], with that space being provided by
     the caller.
      The length counts are used for other purposes as well, i.e. finding
     the minimum and maximum length codes, determining if there are any
     codes at all, checking for a valid set of lengths, and looking ahead
     at length counts to determine sub-table sizes when building the
     decoding tables.
     */

    /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */

    for (len = 0; len <= MAXBITS; len++) {
      count[len] = 0;
    }

    for (sym = 0; sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }
    /* bound code lengths, force root to be within code lengths */


    root = bits;

    for (max = MAXBITS; max >= 1; max--) {
      if (count[max] !== 0) {
        break;
      }
    }

    if (root > max) {
      root = max;
    }

    if (max === 0) {
      /* no symbols to code at all */
      //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
      //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
      //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
      table[table_index++] = 1 << 24 | 64 << 16 | 0; //table.op[opts.table_index] = 64;
      //table.bits[opts.table_index] = 1;
      //table.val[opts.table_index++] = 0;

      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      opts.bits = 1;
      return 0;
      /* no symbols, but wait for decoding to report error */
    }

    for (min = 1; min < max; min++) {
      if (count[min] !== 0) {
        break;
      }
    }

    if (root < min) {
      root = min;
    }
    /* check for an over-subscribed or incomplete set of lengths */


    left = 1;

    for (len = 1; len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];

      if (left < 0) {
        return -1;
      }
      /* over-subscribed */

    }

    if (left > 0 && (type === CODES || max !== 1)) {
      return -1;
      /* incomplete set */
    }
    /* generate offsets into symbol table for each length for sorting */


    offs[1] = 0;

    for (len = 1; len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }
    /* sort symbols by length, by symbol order within each length */


    for (sym = 0; sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }
    /*
     Create and fill in decoding tables.  In this loop, the table being
     filled is at next and has curr index bits.  The code being used is huff
     with length len.  That code is converted to an index by dropping drop
     bits off of the bottom.  For codes where len is less than drop + curr,
     those top drop + curr - len bits are incremented through all values to
     fill the table with replicated entries.
      root is the number of index bits for the root table.  When len exceeds
     root, sub-tables are created pointed to by the root entry with an index
     of the low root bits of huff.  This is saved in low to check for when a
     new sub-table should be started.  drop is zero when the root table is
     being filled, and drop is root when sub-tables are being filled.
      When a new sub-table is needed, it is necessary to look ahead in the
     code lengths to determine what size sub-table is needed.  The length
     counts are used for this, and so count[] is decremented as codes are
     entered in the tables.
      used keeps track of how many table entries have been allocated from the
     provided *table space.  It is checked for LENS and DIST tables against
     the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
     the initial root table size constants.  See the comments in inftrees.h
     for more information.
      sym increments through all symbols, and the loop terminates when
     all codes of length max, i.e. all codes, have been processed.  This
     routine permits incomplete codes, so another loop after this one fills
     in the rest of the decoding tables with invalid code markers.
     */

    /* set up for code type */
    // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8


    if (type === CODES) {
      base = extra = work;
      /* dummy value--not used */

      end = 19;
    } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
    } else {
      /* DISTS */
      base = dbase;
      extra = dext;
      end = -1;
    }
    /* initialize opts for loop */


    huff = 0;
    /* starting code */

    sym = 0;
    /* starting code symbol */

    len = min;
    /* starting code length */

    next = table_index;
    /* current table to fill in */

    curr = root;
    /* current table index bits */

    drop = 0;
    /* current bits to drop from code for index */

    low = -1;
    /* trigger new sub-table when len > root */

    used = 1 << root;
    /* use root table entries */

    mask = used - 1;
    /* mask for comparing low */

    /* check available table space */

    if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
      return 1;
    }
    /* process all codes and make table entries */


    for (;;) {
      /* create table entry */
      here_bits = len - drop;

      if (work[sym] < end) {
        here_op = 0;
        here_val = work[sym];
      } else if (work[sym] > end) {
        here_op = extra[extra_index + work[sym]];
        here_val = base[base_index + work[sym]];
      } else {
        here_op = 32 + 64;
        /* end of block */

        here_val = 0;
      }
      /* replicate for those indices with low len bits equal to huff */


      incr = 1 << len - drop;
      fill = 1 << curr;
      min = fill;
      /* save offset to next table */

      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
      } while (fill !== 0);
      /* backwards increment the len-bit code huff */


      incr = 1 << len - 1;

      while (huff & incr) {
        incr >>= 1;
      }

      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }
      /* go to next symbol, update count, len */


      sym++;

      if (--count[len] === 0) {
        if (len === max) {
          break;
        }

        len = lens[lens_index + work[sym]];
      }
      /* create new sub-table if needed */


      if (len > root && (huff & mask) !== low) {
        /* if first time, transition to sub-tables */
        if (drop === 0) {
          drop = root;
        }
        /* increment past last table */


        next += min;
        /* here min is 1 << curr */

        /* determine length of next table */

        curr = len - drop;
        left = 1 << curr;

        while (curr + drop < max) {
          left -= count[curr + drop];

          if (left <= 0) {
            break;
          }

          curr++;
          left <<= 1;
        }
        /* check for enough space */


        used += 1 << curr;

        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        /* point entry in root table to sub-table */


        low = huff & mask;
        /*table.op[low] = curr;
        table.bits[low] = root;
        table.val[low] = next - opts.table_index;*/

        table[low] = root << 24 | curr << 16 | next - table_index | 0;
      }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
     at most one remaining entry, since if the code is incomplete, the
     maximum code length that was allowed to get this far is one bit) */


    if (huff !== 0) {
      //table.op[next + huff] = 64;            /* invalid code marker */
      //table.bits[next + huff] = len - drop;
      //table.val[next + huff] = 0;
      table[next + huff] = len - drop << 24 | 64 << 16 | 0;
    }
    /* set return parameters */
    //opts.table_index += used;


    opts.bits = root;
    return 0;
  };

  var inftrees = inflate_table; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  var CODES$1 = 0;
  var LENS$1 = 1;
  var DISTS$1 = 2;
  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  var Z_FINISH$2 = constants.Z_FINISH,
      Z_BLOCK$1 = constants.Z_BLOCK,
      Z_TREES = constants.Z_TREES,
      Z_OK$2 = constants.Z_OK,
      Z_STREAM_END$2 = constants.Z_STREAM_END,
      Z_NEED_DICT = constants.Z_NEED_DICT,
      Z_STREAM_ERROR$1 = constants.Z_STREAM_ERROR,
      Z_DATA_ERROR$1 = constants.Z_DATA_ERROR,
      Z_MEM_ERROR = constants.Z_MEM_ERROR,
      Z_BUF_ERROR$1 = constants.Z_BUF_ERROR,
      Z_DEFLATED$2 = constants.Z_DEFLATED;
  /* STATES ====================================================================*/

  /* ===========================================================================*/

  var HEAD = 1;
  /* i: waiting for magic header */

  var FLAGS = 2;
  /* i: waiting for method and flags (gzip) */

  var TIME = 3;
  /* i: waiting for modification time (gzip) */

  var OS = 4;
  /* i: waiting for extra flags and operating system (gzip) */

  var EXLEN = 5;
  /* i: waiting for extra length (gzip) */

  var EXTRA = 6;
  /* i: waiting for extra bytes (gzip) */

  var NAME = 7;
  /* i: waiting for end of file name (gzip) */

  var COMMENT = 8;
  /* i: waiting for end of comment (gzip) */

  var HCRC = 9;
  /* i: waiting for header crc (gzip) */

  var DICTID = 10;
  /* i: waiting for dictionary check value */

  var DICT = 11;
  /* waiting for inflateSetDictionary() call */

  var TYPE$1 = 12;
  /* i: waiting for type bits, including last-flag bit */

  var TYPEDO = 13;
  /* i: same, but skip check to exit inflate on new block */

  var STORED = 14;
  /* i: waiting for stored size (length and complement) */

  var COPY_ = 15;
  /* i/o: same as COPY below, but only first time in */

  var COPY = 16;
  /* i/o: waiting for input or output to copy stored block */

  var TABLE = 17;
  /* i: waiting for dynamic block table lengths */

  var LENLENS = 18;
  /* i: waiting for code length code lengths */

  var CODELENS = 19;
  /* i: waiting for length/lit and distance code lengths */

  var LEN_ = 20;
  /* i: same as LEN below, but only first time in */

  var LEN = 21;
  /* i: waiting for length/lit/eob code */

  var LENEXT = 22;
  /* i: waiting for length extra bits */

  var DIST = 23;
  /* i: waiting for distance code */

  var DISTEXT = 24;
  /* i: waiting for distance extra bits */

  var MATCH = 25;
  /* o: waiting for output space to copy string */

  var LIT = 26;
  /* o: waiting for output space to write literal */

  var CHECK = 27;
  /* i: waiting for 32-bit check value */

  var LENGTH = 28;
  /* i: waiting for 32-bit length (gzip) */

  var DONE = 29;
  /* finished check, done -- remain here until reset */

  var BAD$1 = 30;
  /* got a data error -- remain here until reset */

  var MEM = 31;
  /* got an inflate() memory error -- remain here until reset */

  var SYNC = 32;
  /* looking for synchronization bytes to restart inflate() */

  /* ===========================================================================*/

  var ENOUGH_LENS$1 = 852;
  var ENOUGH_DISTS$1 = 592; //const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

  var MAX_WBITS$1 = 15;
  /* 32K LZ77 window */

  var DEF_WBITS = MAX_WBITS$1;

  var zswap32 = function zswap32(q) {
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
  };

  function InflateState() {
    this.mode = 0;
    /* current inflate mode */

    this.last = false;
    /* true if processing last block */

    this.wrap = 0;
    /* bit 0 true for zlib, bit 1 true for gzip */

    this.havedict = false;
    /* true if dictionary provided */

    this.flags = 0;
    /* gzip header method and flags (0 if zlib) */

    this.dmax = 0;
    /* zlib header max distance (INFLATE_STRICT) */

    this.check = 0;
    /* protected copy of check value */

    this.total = 0;
    /* protected copy of output count */
    // TODO: may be {}

    this.head = null;
    /* where to save gzip header information */

    /* sliding window */

    this.wbits = 0;
    /* log base 2 of requested window size */

    this.wsize = 0;
    /* window size or zero if not using window */

    this.whave = 0;
    /* valid bytes in the window */

    this.wnext = 0;
    /* window write index */

    this.window = null;
    /* allocated sliding window, if needed */

    /* bit accumulator */

    this.hold = 0;
    /* input bit accumulator */

    this.bits = 0;
    /* number of bits in "in" */

    /* for string and stored block copying */

    this.length = 0;
    /* literal or length of data to copy */

    this.offset = 0;
    /* distance back to copy string from */

    /* for table and code decoding */

    this.extra = 0;
    /* extra bits needed */

    /* fixed and dynamic code tables */

    this.lencode = null;
    /* starting table for length/literal codes */

    this.distcode = null;
    /* starting table for distance codes */

    this.lenbits = 0;
    /* index bits for lencode */

    this.distbits = 0;
    /* index bits for distcode */

    /* dynamic table building */

    this.ncode = 0;
    /* number of code length code lengths */

    this.nlen = 0;
    /* number of length code lengths */

    this.ndist = 0;
    /* number of distance code lengths */

    this.have = 0;
    /* number of code lengths in lens[] */

    this.next = null;
    /* next available space in codes[] */

    this.lens = new Uint16Array(320);
    /* temporary storage for code lengths */

    this.work = new Uint16Array(288);
    /* work area for code table building */

    /*
     because we don't have pointers in js, we use lencode and distcode directly
     as buffers so we don't need codes
    */
    //this.codes = new Int32Array(ENOUGH);       /* space for code tables */

    this.lendyn = null;
    /* dynamic table for length/literal codes (JS specific) */

    this.distdyn = null;
    /* dynamic table for distance codes (JS specific) */

    this.sane = 0;
    /* if false, allow invalid distance too far */

    this.back = 0;
    /* bits back of last unprocessed length/lit */

    this.was = 0;
    /* initial length of match */
  }

  var inflateResetKeep = function inflateResetKeep(strm) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    var state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = '';
    /*Z_NULL*/

    if (state.wrap) {
      /* to support ill-conceived Java test suite */
      strm.adler = state.wrap & 1;
    }

    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null
    /*Z_NULL*/
    ;
    state.hold = 0;
    state.bits = 0; //state.lencode = state.distcode = state.next = state.codes;

    state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS$1);
    state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS$1);
    state.sane = 1;
    state.back = -1; //Tracev((stderr, "inflate: reset\n"));

    return Z_OK$2;
  };

  var inflateReset = function inflateReset(strm) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    var state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
  };

  var inflateReset2 = function inflateReset2(strm, windowBits) {
    var wrap;
    /* get the state */

    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    var state = strm.state;
    /* extract wrap request from windowBits parameter */

    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else {
      wrap = (windowBits >> 4) + 1;

      if (windowBits < 48) {
        windowBits &= 15;
      }
    }
    /* set number of window bits, free window if different */


    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR$1;
    }

    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }
    /* update state and reset the rest of it */


    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  };

  var inflateInit2 = function inflateInit2(strm, windowBits) {
    if (!strm) {
      return Z_STREAM_ERROR$1;
    } //strm.msg = Z_NULL;                 /* in case we return an error */


    var state = new InflateState(); //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));

    strm.state = state;
    state.window = null
    /*Z_NULL*/
    ;
    var ret = inflateReset2(strm, windowBits);

    if (ret !== Z_OK$2) {
      strm.state = null
      /*Z_NULL*/
      ;
    }

    return ret;
  };

  var inflateInit = function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
  };
  /*
   Return state with length and distance decoding tables and index sizes set to
   fixed code decoding.  Normally this returns fixed tables from inffixed.h.
   If BUILDFIXED is defined, then instead this routine builds the tables the
   first time it's called, and returns those tables the first time and
   thereafter.  This reduces the size of the code by about 2K bytes, in
   exchange for a little execution time.  However, BUILDFIXED should not be
   used for threaded applications, since the rewriting of the tables and virgin
   may not be thread-safe.
   */


  var virgin = true;
  var lenfix, distfix; // We have no pointers in JS, so keep tables separate

  var fixedtables = function fixedtables(state) {
    /* build fixed huffman tables if first call (may not be thread safe) */
    if (virgin) {
      lenfix = new Int32Array(512);
      distfix = new Int32Array(32);
      /* literal/length table */

      var sym = 0;

      while (sym < 144) {
        state.lens[sym++] = 8;
      }

      while (sym < 256) {
        state.lens[sym++] = 9;
      }

      while (sym < 280) {
        state.lens[sym++] = 7;
      }

      while (sym < 288) {
        state.lens[sym++] = 8;
      }

      inftrees(LENS$1, state.lens, 0, 288, lenfix, 0, state.work, {
        bits: 9
      });
      /* distance table */

      sym = 0;

      while (sym < 32) {
        state.lens[sym++] = 5;
      }

      inftrees(DISTS$1, state.lens, 0, 32, distfix, 0, state.work, {
        bits: 5
      });
      /* do this just once */

      virgin = false;
    }

    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  };
  /*
   Update the window with the last wsize (normally 32K) bytes written before
   returning.  If window does not exist yet, create it.  This is only called
   when a window is already in use, or when output has been written during this
   inflate call, but the end of the deflate stream has not been reached yet.
   It is also called to create a window for dictionary data when a dictionary
   is loaded.

   Providing output buffers larger than 32K to inflate() should provide a speed
   advantage, since only the last 32K of output is copied to the sliding window
   upon return from inflate(), and since all distances after the first 32K of
   output will fall in the output data, making match copies simpler and faster.
   The advantage may be dependent on the size of the processor's data caches.
   */


  var updatewindow = function updatewindow(strm, src, end, copy) {
    var dist;
    var state = strm.state;
    /* if it hasn't been done already, allocate space for the window */

    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;
      state.window = new Uint8Array(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */


    if (copy >= state.wsize) {
      state.window.set(src.subarray(end - state.wsize, end), 0);
      state.wnext = 0;
      state.whave = state.wsize;
    } else {
      dist = state.wsize - state.wnext;

      if (dist > copy) {
        dist = copy;
      } //zmemcpy(state->window + state->wnext, end - copy, dist);


      state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
      copy -= dist;

      if (copy) {
        //zmemcpy(state->window, end - copy, copy);
        state.window.set(src.subarray(end - copy, end), 0);
        state.wnext = copy;
        state.whave = state.wsize;
      } else {
        state.wnext += dist;

        if (state.wnext === state.wsize) {
          state.wnext = 0;
        }

        if (state.whave < state.wsize) {
          state.whave += dist;
        }
      }
    }

    return 0;
  };

  var inflate = function inflate(strm, flush) {
    var state;
    var input, output; // input/output buffers

    var next;
    /* next input INDEX */

    var put;
    /* next output INDEX */

    var have, left;
    /* available input and output */

    var hold;
    /* bit buffer */

    var bits;
    /* bits in bit buffer */

    var _in, _out;
    /* save starting available input and output */


    var copy;
    /* number of stored or match bytes to copy */

    var from;
    /* where to copy match bytes from */

    var from_source;
    var here = 0;
    /* current decoding table entry */

    var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //let last;                   /* parent table entry */

    var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)

    var len;
    /* length to copy for repeats, bits to drop */

    var ret;
    /* return code */

    var hbuf = new Uint8Array(4);
    /* buffer for gzip header crc calculation */

    var opts;
    var n; // temporary variable for NEED_BITS

    var order =
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);

    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
      return Z_STREAM_ERROR$1;
    }

    state = strm.state;

    if (state.mode === TYPE$1) {
      state.mode = TYPEDO;
    }
    /* skip check */
    //--- LOAD() ---


    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits; //---

    _in = have;
    _out = left;
    ret = Z_OK$2;

    inf_leave: // goto emulation
    for (;;) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          } //=== NEEDBITS(16);


          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (state.wrap & 2 && hold === 0x8b1f) {
            /* gzip header */
            state.check = 0
            /*crc32(0L, Z_NULL, 0)*/
            ; //=== CRC2(state.check, hold);

            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
            //=== INITBITS();

            hold = 0;
            bits = 0; //===//

            state.mode = FLAGS;
            break;
          }

          state.flags = 0;
          /* expect zlib header */

          if (state.head) {
            state.head.done = false;
          }

          if (!(state.wrap & 1) ||
          /* check if zlib header allowed */
          (((hold & 0xff) <<
          /*BITS(8)*/
          8) + (hold >> 8)) % 31) {
            strm.msg = 'incorrect header check';
            state.mode = BAD$1;
            break;
          }

          if ((hold & 0x0f) !==
          /*BITS(4)*/
          Z_DEFLATED$2) {
            strm.msg = 'unknown compression method';
            state.mode = BAD$1;
            break;
          } //--- DROPBITS(4) ---//


          hold >>>= 4;
          bits -= 4; //---//

          len = (hold & 0x0f) +
          /*BITS(4)*/
          8;

          if (state.wbits === 0) {
            state.wbits = len;
          } else if (len > state.wbits) {
            strm.msg = 'invalid window size';
            state.mode = BAD$1;
            break;
          } // !!! pako patch. Force use `options.windowBits` if passed.
          // Required to always use max window size by default.


          state.dmax = 1 << state.wbits; //state.dmax = 1 << len;
          //Tracev((stderr, "inflate:   zlib header ok\n"));

          strm.adler = state.check = 1
          /*adler32(0L, Z_NULL, 0)*/
          ;
          state.mode = hold & 0x200 ? DICTID : TYPE$1; //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          break;

        case FLAGS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.flags = hold;

          if ((state.flags & 0xff) !== Z_DEFLATED$2) {
            strm.msg = 'unknown compression method';
            state.mode = BAD$1;
            break;
          }

          if (state.flags & 0xe000) {
            strm.msg = 'unknown header flags set';
            state.mode = BAD$1;
            break;
          }

          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }

          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//

          state.mode = TIME;

        /* falls through */

        case TIME:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (state.head) {
            state.head.time = hold;
          }

          if (state.flags & 0x0200) {
            //=== CRC4(state.check, hold)
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            hbuf[2] = hold >>> 16 & 0xff;
            hbuf[3] = hold >>> 24 & 0xff;
            state.check = crc32_1(state.check, hbuf, 4, 0); //===
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//

          state.mode = OS;

        /* falls through */

        case OS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (state.head) {
            state.head.xflags = hold & 0xff;
            state.head.os = hold >> 8;
          }

          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//

          state.mode = EXLEN;

        /* falls through */

        case EXLEN:
          if (state.flags & 0x0400) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.length = hold;

            if (state.head) {
              state.head.extra_len = hold;
            }

            if (state.flags & 0x0200) {
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = hold >>> 8 & 0xff;
              state.check = crc32_1(state.check, hbuf, 2, 0); //===//
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
          } else if (state.head) {
            state.head.extra = null
            /*Z_NULL*/
            ;
          }

          state.mode = EXTRA;

        /* falls through */

        case EXTRA:
          if (state.flags & 0x0400) {
            copy = state.length;

            if (copy > have) {
              copy = have;
            }

            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;

                if (!state.head.extra) {
                  // Use untyped array for more convenient processing later
                  state.head.extra = new Uint8Array(state.head.extra_len);
                }

                state.head.extra.set(input.subarray(next, // extra field is limited to 65536 bytes
                // - no need for additional size check
                next + copy),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len); //zmemcpy(state.head.extra + len, next,
                //        len + copy > state.head.extra_max ?
                //        state.head.extra_max - len : copy);
              }

              if (state.flags & 0x0200) {
                state.check = crc32_1(state.check, input, copy, next);
              }

              have -= copy;
              next += copy;
              state.length -= copy;
            }

            if (state.length) {
              break inf_leave;
            }
          }

          state.length = 0;
          state.mode = NAME;

        /* falls through */

        case NAME:
          if (state.flags & 0x0800) {
            if (have === 0) {
              break inf_leave;
            }

            copy = 0;

            do {
              // TODO: 2 or 1 bytes?
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */

              if (state.head && len && state.length < 65536
              /*state.head.name_max*/
              ) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);

            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }

            have -= copy;
            next += copy;

            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }

          state.length = 0;
          state.mode = COMMENT;

        /* falls through */

        case COMMENT:
          if (state.flags & 0x1000) {
            if (have === 0) {
              break inf_leave;
            }

            copy = 0;

            do {
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */

              if (state.head && len && state.length < 65536
              /*state.head.comm_max*/
              ) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);

            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }

            have -= copy;
            next += copy;

            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }

          state.mode = HCRC;

        /* falls through */

        case HCRC:
          if (state.flags & 0x0200) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            if (hold !== (state.check & 0xffff)) {
              strm.msg = 'header crc mismatch';
              state.mode = BAD$1;
              break;
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
          }

          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }

          strm.adler = state.check = 0;
          state.mode = TYPE$1;
          break;

        case DICTID:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          strm.adler = state.check = zswap32(hold); //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          state.mode = DICT;

        /* falls through */

        case DICT:
          if (state.havedict === 0) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits; //---

            return Z_NEED_DICT;
          }

          strm.adler = state.check = 1
          /*adler32(0L, Z_NULL, 0)*/
          ;
          state.mode = TYPE$1;

        /* falls through */

        case TYPE$1:
          if (flush === Z_BLOCK$1 || flush === Z_TREES) {
            break inf_leave;
          }

        /* falls through */

        case TYPEDO:
          if (state.last) {
            //--- BYTEBITS() ---//
            hold >>>= bits & 7;
            bits -= bits & 7; //---//

            state.mode = CHECK;
            break;
          } //=== NEEDBITS(3); */


          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.last = hold & 0x01
          /*BITS(1)*/
          ; //--- DROPBITS(1) ---//

          hold >>>= 1;
          bits -= 1; //---//

          switch (hold & 0x03) {
            /*BITS(2)*/
            case 0:
              /* stored block */
              //Tracev((stderr, "inflate:     stored block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = STORED;
              break;

            case 1:
              /* fixed block */
              fixedtables(state); //Tracev((stderr, "inflate:     fixed codes block%s\n",
              //        state.last ? " (last)" : ""));

              state.mode = LEN_;
              /* decode codes */

              if (flush === Z_TREES) {
                //--- DROPBITS(2) ---//
                hold >>>= 2;
                bits -= 2; //---//

                break inf_leave;
              }

              break;

            case 2:
              /* dynamic block */
              //Tracev((stderr, "inflate:     dynamic codes block%s\n",
              //        state.last ? " (last)" : ""));
              state.mode = TABLE;
              break;

            case 3:
              strm.msg = 'invalid block type';
              state.mode = BAD$1;
          } //--- DROPBITS(2) ---//


          hold >>>= 2;
          bits -= 2; //---//

          break;

        case STORED:
          //--- BYTEBITS() ---// /* go to byte boundary */
          hold >>>= bits & 7;
          bits -= bits & 7; //---//
          //=== NEEDBITS(32); */

          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
            strm.msg = 'invalid stored block lengths';
            state.mode = BAD$1;
            break;
          }

          state.length = hold & 0xffff; //Tracev((stderr, "inflate:       stored length %u\n",
          //        state.length));
          //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          state.mode = COPY_;

          if (flush === Z_TREES) {
            break inf_leave;
          }

        /* falls through */

        case COPY_:
          state.mode = COPY;

        /* falls through */

        case COPY:
          copy = state.length;

          if (copy) {
            if (copy > have) {
              copy = have;
            }

            if (copy > left) {
              copy = left;
            }

            if (copy === 0) {
              break inf_leave;
            } //--- zmemcpy(put, next, copy); ---


            output.set(input.subarray(next, next + copy), put); //---//

            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          } //Tracev((stderr, "inflate:       stored end\n"));


          state.mode = TYPE$1;
          break;

        case TABLE:
          //=== NEEDBITS(14); */
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.nlen = (hold & 0x1f) +
          /*BITS(5)*/
          257; //--- DROPBITS(5) ---//

          hold >>>= 5;
          bits -= 5; //---//

          state.ndist = (hold & 0x1f) +
          /*BITS(5)*/
          1; //--- DROPBITS(5) ---//

          hold >>>= 5;
          bits -= 5; //---//

          state.ncode = (hold & 0x0f) +
          /*BITS(4)*/
          4; //--- DROPBITS(4) ---//

          hold >>>= 4;
          bits -= 4; //---//
          //#ifndef PKZIP_BUG_WORKAROUND

          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = 'too many length or distance symbols';
            state.mode = BAD$1;
            break;
          } //#endif
          //Tracev((stderr, "inflate:       table sizes ok\n"));


          state.have = 0;
          state.mode = LENLENS;

        /* falls through */

        case LENLENS:
          while (state.have < state.ncode) {
            //=== NEEDBITS(3);
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
            //--- DROPBITS(3) ---//

            hold >>>= 3;
            bits -= 3; //---//
          }

          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          } // We have separate tables & no pointers. 2 commented lines below not needed.
          //state.next = state.codes;
          //state.lencode = state.next;
          // Switch to use dynamic table


          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = {
            bits: state.lenbits
          };
          ret = inftrees(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;

          if (ret) {
            strm.msg = 'invalid code lengths set';
            state.mode = BAD$1;
            break;
          } //Tracev((stderr, "inflate:       code lengths ok\n"));


          state.have = 0;
          state.mode = CODELENS;

        /* falls through */

        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (;;) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              /*BITS(state.lenbits)*/

              here_bits = here >>> 24;
              here_op = here >>> 16 & 0xff;
              here_val = here & 0xffff;

              if (here_bits <= bits) {
                break;
              } //--- PULLBYTE() ---//


              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8; //---//
            }

            if (here_val < 16) {
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits; //---//

              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                //=== NEEDBITS(here.bits + 2);
                n = here_bits + 2;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//
                //--- DROPBITS(here.bits) ---//


                hold >>>= here_bits;
                bits -= here_bits; //---//

                if (state.have === 0) {
                  strm.msg = 'invalid bit length repeat';
                  state.mode = BAD$1;
                  break;
                }

                len = state.lens[state.have - 1];
                copy = 3 + (hold & 0x03); //BITS(2);
                //--- DROPBITS(2) ---//

                hold >>>= 2;
                bits -= 2; //---//
              } else if (here_val === 17) {
                //=== NEEDBITS(here.bits + 3);
                n = here_bits + 3;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//
                //--- DROPBITS(here.bits) ---//


                hold >>>= here_bits;
                bits -= here_bits; //---//

                len = 0;
                copy = 3 + (hold & 0x07); //BITS(3);
                //--- DROPBITS(3) ---//

                hold >>>= 3;
                bits -= 3; //---//
              } else {
                //=== NEEDBITS(here.bits + 7);
                n = here_bits + 7;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//
                //--- DROPBITS(here.bits) ---//


                hold >>>= here_bits;
                bits -= here_bits; //---//

                len = 0;
                copy = 11 + (hold & 0x7f); //BITS(7);
                //--- DROPBITS(7) ---//

                hold >>>= 7;
                bits -= 7; //---//
              }

              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD$1;
                break;
              }

              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          /* handle error breaks in while */


          if (state.mode === BAD$1) {
            break;
          }
          /* check for end-of-block code (better have one) */


          if (state.lens[256] === 0) {
            strm.msg = 'invalid code -- missing end-of-block';
            state.mode = BAD$1;
            break;
          }
          /* build code tables -- note: do not change the lenbits or distbits
             values here (9 and 6) without reading the comments in inftrees.h
             concerning the ENOUGH constants, which depend on those values */


          state.lenbits = 9;
          opts = {
            bits: state.lenbits
          };
          ret = inftrees(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;

          state.lenbits = opts.bits; // state.lencode = state.next;

          if (ret) {
            strm.msg = 'invalid literal/lengths set';
            state.mode = BAD$1;
            break;
          }

          state.distbits = 6; //state.distcode.copy(state.codes);
          // Switch to use dynamic table

          state.distcode = state.distdyn;
          opts = {
            bits: state.distbits
          };
          ret = inftrees(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;

          state.distbits = opts.bits; // state.distcode = state.next;

          if (ret) {
            strm.msg = 'invalid distances set';
            state.mode = BAD$1;
            break;
          } //Tracev((stderr, 'inflate:       codes ok\n'));


          state.mode = LEN_;

          if (flush === Z_TREES) {
            break inf_leave;
          }

        /* falls through */

        case LEN_:
          state.mode = LEN;

        /* falls through */

        case LEN:
          if (have >= 6 && left >= 258) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits; //---

            inffast(strm, _out); //--- LOAD() ---

            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits; //---

            if (state.mode === TYPE$1) {
              state.back = -1;
            }

            break;
          }

          state.back = 0;

          for (;;) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            /*BITS(state.lenbits)*/

            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          }

          if (here_op && (here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;

            for (;;) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
              /*BITS(last.bits + last.op)*/
              last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 0xff;
              here_val = here & 0xffff;

              if (last_bits + here_bits <= bits) {
                break;
              } //--- PULLBYTE() ---//


              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8; //---//
            } //--- DROPBITS(last.bits) ---//


            hold >>>= last_bits;
            bits -= last_bits; //---//

            state.back += last_bits;
          } //--- DROPBITS(here.bits) ---//


          hold >>>= here_bits;
          bits -= here_bits; //---//

          state.back += here_bits;
          state.length = here_val;

          if (here_op === 0) {
            //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            state.mode = LIT;
            break;
          }

          if (here_op & 32) {
            //Tracevv((stderr, "inflate:         end of block\n"));
            state.back = -1;
            state.mode = TYPE$1;
            break;
          }

          if (here_op & 64) {
            strm.msg = 'invalid literal/length code';
            state.mode = BAD$1;
            break;
          }

          state.extra = here_op & 15;
          state.mode = LENEXT;

        /* falls through */

        case LENEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;

            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.length += hold & (1 << state.extra) - 1
            /*BITS(state.extra)*/
            ; //--- DROPBITS(state.extra) ---//

            hold >>>= state.extra;
            bits -= state.extra; //---//

            state.back += state.extra;
          } //Tracevv((stderr, "inflate:         length %u\n", state.length));


          state.was = state.length;
          state.mode = DIST;

        /* falls through */

        case DIST:
          for (;;) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            /*BITS(state.distbits)*/

            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          }

          if ((here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;

            for (;;) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
              /*BITS(last.bits + last.op)*/
              last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 0xff;
              here_val = here & 0xffff;

              if (last_bits + here_bits <= bits) {
                break;
              } //--- PULLBYTE() ---//


              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8; //---//
            } //--- DROPBITS(last.bits) ---//


            hold >>>= last_bits;
            bits -= last_bits; //---//

            state.back += last_bits;
          } //--- DROPBITS(here.bits) ---//


          hold >>>= here_bits;
          bits -= here_bits; //---//

          state.back += here_bits;

          if (here_op & 64) {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break;
          }

          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;

        /* falls through */

        case DISTEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;

            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            state.offset += hold & (1 << state.extra) - 1
            /*BITS(state.extra)*/
            ; //--- DROPBITS(state.extra) ---//

            hold >>>= state.extra;
            bits -= state.extra; //---//

            state.back += state.extra;
          } //#ifdef INFLATE_STRICT


          if (state.offset > state.dmax) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD$1;
            break;
          } //#endif
          //Tracevv((stderr, "inflate:         distance %u\n", state.offset));


          state.mode = MATCH;

        /* falls through */

        case MATCH:
          if (left === 0) {
            break inf_leave;
          }

          copy = _out - left;

          if (state.offset > copy) {
            /* copy from window */
            copy = state.offset - copy;

            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD$1;
                break;
              } // (!) This block is disabled in zlib defaults,
              // don't enable it for binary compatibility
              //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
              //          Trace((stderr, "inflate.c too far\n"));
              //          copy -= state.whave;
              //          if (copy > state.length) { copy = state.length; }
              //          if (copy > left) { copy = left; }
              //          left -= copy;
              //          state.length -= copy;
              //          do {
              //            output[put++] = 0;
              //          } while (--copy);
              //          if (state.length === 0) { state.mode = LEN; }
              //          break;
              //#endif

            }

            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }

            if (copy > state.length) {
              copy = state.length;
            }

            from_source = state.window;
          } else {
            /* copy from output */
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }

          if (copy > left) {
            copy = left;
          }

          left -= copy;
          state.length -= copy;

          do {
            output[put++] = from_source[from++];
          } while (--copy);

          if (state.length === 0) {
            state.mode = LEN;
          }

          break;

        case LIT:
          if (left === 0) {
            break inf_leave;
          }

          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;

        case CHECK:
          if (state.wrap) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }

              have--; // Use '|' instead of '+' to make sure that result is signed

              hold |= input[next++] << bits;
              bits += 8;
            } //===//


            _out -= left;
            strm.total_out += _out;
            state.total += _out;

            if (_out) {
              strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
            }

            _out = left; // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too

            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = 'incorrect data check';
              state.mode = BAD$1;
              break;
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
          }

          state.mode = LENGTH;

        /* falls through */

        case LENGTH:
          if (state.wrap && state.flags) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }

              have--;
              hold += input[next++] << bits;
              bits += 8;
            } //===//


            if (hold !== (state.total & 0xffffffff)) {
              strm.msg = 'incorrect length check';
              state.mode = BAD$1;
              break;
            } //=== INITBITS();


            hold = 0;
            bits = 0; //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
          }

          state.mode = DONE;

        /* falls through */

        case DONE:
          ret = Z_STREAM_END$2;
          break inf_leave;

        case BAD$1:
          ret = Z_DATA_ERROR$1;
          break inf_leave;

        case MEM:
          return Z_MEM_ERROR;

        case SYNC:
        /* falls through */

        default:
          return Z_STREAM_ERROR$1;
      }
    } // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

    /*
       Return from inflate(), updating the total counts and the check value.
       If there was no progress during the inflate() call, return a buffer
       error.  Call updatewindow() to create and/or update the window state.
       Note: a memory error from inflate() is non-recoverable.
     */
    //--- RESTORE() ---


    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits; //---

    if (state.wsize || _out !== strm.avail_out && state.mode < BAD$1 && (state.mode < CHECK || flush !== Z_FINISH$2)) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
    }

    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;

    if (state.wrap && _out) {
      strm.adler = state.check =
      /*UPDATE(state.check, strm.next_out - _out, _out);*/
      state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
    }

    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE$1 ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);

    if ((_in === 0 && _out === 0 || flush === Z_FINISH$2) && ret === Z_OK$2) {
      ret = Z_BUF_ERROR$1;
    }

    return ret;
  };

  var inflateEnd = function inflateEnd(strm) {
    if (!strm || !strm.state
    /*|| strm->zfree == (free_func)0*/
    ) {
        return Z_STREAM_ERROR$1;
      }

    var state = strm.state;

    if (state.window) {
      state.window = null;
    }

    strm.state = null;
    return Z_OK$2;
  };

  var inflateGetHeader = function inflateGetHeader(strm, head) {
    /* check state */
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR$1;
    }

    var state = strm.state;

    if ((state.wrap & 2) === 0) {
      return Z_STREAM_ERROR$1;
    }
    /* save header structure */


    state.head = head;
    head.done = false;
    return Z_OK$2;
  };

  var inflateSetDictionary = function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    /* check state */

    if (!strm
    /* == Z_NULL */
    || !strm.state
    /* == Z_NULL */
    ) {
        return Z_STREAM_ERROR$1;
      }

    state = strm.state;

    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR$1;
    }
    /* check for correct dictionary identifier */


    if (state.mode === DICT) {
      dictid = 1;
      /* adler32(0, null, 0)*/

      /* dictid = adler32(dictid, dictionary, dictLength); */

      dictid = adler32_1(dictid, dictionary, dictLength, 0);

      if (dictid !== state.check) {
        return Z_DATA_ERROR$1;
      }
    }
    /* copy dictionary to window using updatewindow(), which will amend the
     existing dictionary if appropriate */


    ret = updatewindow(strm, dictionary, dictLength, dictLength);

    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }

    state.havedict = 1; // Tracev((stderr, "inflate:   dictionary set\n"));

    return Z_OK$2;
  };

  var inflateReset_1 = inflateReset;
  var inflateReset2_1 = inflateReset2;
  var inflateResetKeep_1 = inflateResetKeep;
  var inflateInit_1 = inflateInit;
  var inflateInit2_1 = inflateInit2;
  var inflate_2 = inflate;
  var inflateEnd_1 = inflateEnd;
  var inflateGetHeader_1 = inflateGetHeader;
  var inflateSetDictionary_1 = inflateSetDictionary;
  var inflateInfo = 'pako inflate (from Nodeca project)';
  /* Not implemented
  module.exports.inflateCopy = inflateCopy;
  module.exports.inflateGetDictionary = inflateGetDictionary;
  module.exports.inflateMark = inflateMark;
  module.exports.inflatePrime = inflatePrime;
  module.exports.inflateSync = inflateSync;
  module.exports.inflateSyncPoint = inflateSyncPoint;
  module.exports.inflateUndermine = inflateUndermine;
  */

  var inflate_1 = {
    inflateReset: inflateReset_1,
    inflateReset2: inflateReset2_1,
    inflateResetKeep: inflateResetKeep_1,
    inflateInit: inflateInit_1,
    inflateInit2: inflateInit2_1,
    inflate: inflate_2,
    inflateEnd: inflateEnd_1,
    inflateGetHeader: inflateGetHeader_1,
    inflateSetDictionary: inflateSetDictionary_1,
    inflateInfo: inflateInfo
  }; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
  // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
  //
  // This software is provided 'as-is', without any express or implied
  // warranty. In no event will the authors be held liable for any damages
  // arising from the use of this software.
  //
  // Permission is granted to anyone to use this software for any purpose,
  // including commercial applications, and to alter it and redistribute it
  // freely, subject to the following restrictions:
  //
  // 1. The origin of this software must not be misrepresented; you must not
  //   claim that you wrote the original software. If you use this software
  //   in a product, an acknowledgment in the product documentation would be
  //   appreciated but is not required.
  // 2. Altered source versions must be plainly marked as such, and must not be
  //   misrepresented as being the original software.
  // 3. This notice may not be removed or altered from any source distribution.

  function GZheader() {
    /* true if compressed data believed to be text */
    this.text = 0;
    /* modification time */

    this.time = 0;
    /* extra flags (not used when writing a gzip file) */

    this.xflags = 0;
    /* operating system */

    this.os = 0;
    /* pointer to extra field or Z_NULL if none */

    this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */

    this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //

    /* space at extra (only when reading header) */
    // this.extra_max  = 0;

    /* pointer to zero-terminated file name or Z_NULL */

    this.name = '';
    /* space at name (only when reading header) */
    // this.name_max   = 0;

    /* pointer to zero-terminated comment or Z_NULL */

    this.comment = '';
    /* space at comment (only when reading header) */
    // this.comm_max   = 0;

    /* true if there was or will be a header crc */

    this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */

    this.done = false;
  }

  var gzheader = GZheader;
  var toString$1$1 = Object.prototype.toString;
  /* Public constants ==========================================================*/

  /* ===========================================================================*/

  var Z_NO_FLUSH$2 = constants.Z_NO_FLUSH,
      Z_FINISH$3 = constants.Z_FINISH,
      Z_OK$3 = constants.Z_OK,
      Z_STREAM_END$3 = constants.Z_STREAM_END,
      Z_NEED_DICT$1 = constants.Z_NEED_DICT,
      Z_STREAM_ERROR$2 = constants.Z_STREAM_ERROR,
      Z_DATA_ERROR$2 = constants.Z_DATA_ERROR,
      Z_MEM_ERROR$1 = constants.Z_MEM_ERROR;
  /* ===========================================================================*/

  /**
   * class Inflate
   *
   * Generic JS-style wrapper for zlib calls. If you don't need
   * streaming behaviour - use more simple functions: [[inflate]]
   * and [[inflateRaw]].
   **/

  /* internal
   * inflate.chunks -> Array
   *
   * Chunks of output data, if [[Inflate#onData]] not overridden.
   **/

  /**
   * Inflate.result -> Uint8Array|String
   *
   * Uncompressed result, generated by default [[Inflate#onData]]
   * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
   * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
   **/

  /**
   * Inflate.err -> Number
   *
   * Error code after inflate finished. 0 (Z_OK) on success.
   * Should be checked if broken data possible.
   **/

  /**
   * Inflate.msg -> String
   *
   * Error message, if [[Inflate.err]] != 0
   **/

  /**
   * new Inflate(options)
   * - options (Object): zlib inflate options.
   *
   * Creates new inflator instance with specified params. Throws exception
   * on bad params. Supported options:
   *
   * - `windowBits`
   * - `dictionary`
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information on these.
   *
   * Additional options, for internal needs:
   *
   * - `chunkSize` - size of generated data chunks (16K by default)
   * - `raw` (Boolean) - do raw inflate
   * - `to` (String) - if equal to 'string', then result will be converted
   *   from utf8 to utf16 (javascript) string. When string output requested,
   *   chunk length can differ from `chunkSize`, depending on content.
   *
   * By default, when no options set, autodetect deflate/gzip data format via
   * wrapper header.
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako')
   * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
   * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
   *
   * const inflate = new pako.Inflate({ level: 3});
   *
   * inflate.push(chunk1, false);
   * inflate.push(chunk2, true);  // true -> last chunk
   *
   * if (inflate.err) { throw new Error(inflate.err); }
   *
   * console.log(inflate.result);
   * ```
   **/

  function Inflate(options) {
    this.options = common.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ''
    }, options || {});
    var opt = this.options; // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.

    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
      opt.windowBits = -opt.windowBits;

      if (opt.windowBits === 0) {
        opt.windowBits = -15;
      }
    } // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate


    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
      opt.windowBits += 32;
    } // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible


    if (opt.windowBits > 15 && opt.windowBits < 48) {
      // bit 3 (16) -> gzipped data
      // bit 4 (32) -> autodetect gzip/deflate
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }

    this.err = 0; // error code, if happens (0 = Z_OK)

    this.msg = ''; // error message

    this.ended = false; // used to avoid multiple onEnd() calls

    this.chunks = []; // chunks of compressed data

    this.strm = new zstream();
    this.strm.avail_out = 0;
    var status = inflate_1.inflateInit2(this.strm, opt.windowBits);

    if (status !== Z_OK$3) {
      throw new Error(messages[status]);
    }

    this.header = new gzheader();
    inflate_1.inflateGetHeader(this.strm, this.header); // Setup dictionary

    if (opt.dictionary) {
      // Convert data if needed
      if (typeof opt.dictionary === 'string') {
        opt.dictionary = strings.string2buf(opt.dictionary);
      } else if (toString$1$1.call(opt.dictionary) === '[object ArrayBuffer]') {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }

      if (opt.raw) {
        //In raw mode we need to set the dictionary early
        status = inflate_1.inflateSetDictionary(this.strm, opt.dictionary);

        if (status !== Z_OK$3) {
          throw new Error(messages[status]);
        }
      }
    }
  }
  /**
   * Inflate#push(data[, flush_mode]) -> Boolean
   * - data (Uint8Array|ArrayBuffer): input data
   * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
   *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
   *   `true` means Z_FINISH.
   *
   * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
   * new output chunks. Returns `true` on success. If end of stream detected,
   * [[Inflate#onEnd]] will be called.
   *
   * `flush_mode` is not needed for normal operation, because end of stream
   * detected automatically. You may try to use it for advanced things, but
   * this functionality was not tested.
   *
   * On fail call [[Inflate#onEnd]] with error code and return false.
   *
   * ##### Example
   *
   * ```javascript
   * push(chunk, false); // push one of data chunks
   * ...
   * push(chunk, true);  // push last chunk
   * ```
   **/


  Inflate.prototype.push = function (data, flush_mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;

    var status, _flush_mode, last_avail_out;

    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH$3 : Z_NO_FLUSH$2; // Convert data if needed

    if (toString$1$1.call(data) === '[object ArrayBuffer]') {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }

    strm.next_in = 0;
    strm.avail_in = strm.input.length;

    for (;;) {
      if (strm.avail_out === 0) {
        strm.output = new Uint8Array(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }

      status = inflate_1.inflate(strm, _flush_mode);

      if (status === Z_NEED_DICT$1 && dictionary) {
        status = inflate_1.inflateSetDictionary(strm, dictionary);

        if (status === Z_OK$3) {
          status = inflate_1.inflate(strm, _flush_mode);
        } else if (status === Z_DATA_ERROR$2) {
          // Replace code with more verbose
          status = Z_NEED_DICT$1;
        }
      } // Skip snyc markers if more data follows and not raw mode


      while (strm.avail_in > 0 && status === Z_STREAM_END$3 && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
        inflate_1.inflateReset(strm);
        status = inflate_1.inflate(strm, _flush_mode);
      }

      switch (status) {
        case Z_STREAM_ERROR$2:
        case Z_DATA_ERROR$2:
        case Z_NEED_DICT$1:
        case Z_MEM_ERROR$1:
          this.onEnd(status);
          this.ended = true;
          return false;
      } // Remember real `avail_out` value, because we may patch out buffer content
      // to align utf8 strings boundaries.


      last_avail_out = strm.avail_out;

      if (strm.next_out) {
        if (strm.avail_out === 0 || status === Z_STREAM_END$3) {
          if (this.options.to === 'string') {
            var next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
            var tail = strm.next_out - next_out_utf8;
            var utf8str = strings.buf2string(strm.output, next_out_utf8); // move tail & realign counters

            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;
            if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
            this.onData(utf8str);
          } else {
            this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
          }
        }
      } // Must repeat iteration if out buffer is full


      if (status === Z_OK$3 && last_avail_out === 0) continue; // Finalize if end of stream reached.

      if (status === Z_STREAM_END$3) {
        status = inflate_1.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return true;
      }

      if (strm.avail_in === 0) break;
    }

    return true;
  };
  /**
   * Inflate#onData(chunk) -> Void
   * - chunk (Uint8Array|String): output data. When string output requested,
   *   each chunk will be string.
   *
   * By default, stores data blocks in `chunks[]` property and glue
   * those in `onEnd`. Override this handler, if you need another behaviour.
   **/


  Inflate.prototype.onData = function (chunk) {
    this.chunks.push(chunk);
  };
  /**
   * Inflate#onEnd(status) -> Void
   * - status (Number): inflate status. 0 (Z_OK) on success,
   *   other if not.
   *
   * Called either after you tell inflate that the input stream is
   * complete (Z_FINISH). By default - join collected chunks,
   * free memory and fill `results` / `err` properties.
   **/


  Inflate.prototype.onEnd = function (status) {
    // On success - join
    if (status === Z_OK$3) {
      if (this.options.to === 'string') {
        this.result = this.chunks.join('');
      } else {
        this.result = common.flattenChunks(this.chunks);
      }
    }

    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  /**
   * inflate(data[, options]) -> Uint8Array|String
   * - data (Uint8Array): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * Decompress `data` with inflate/ungzip and `options`. Autodetect
   * format via wrapper header by default. That's why we don't provide
   * separate `ungzip` method.
   *
   * Supported options are:
   *
   * - windowBits
   *
   * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
   * for more information.
   *
   * Sugar (options):
   *
   * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
   *   negative windowBits implicitly.
   * - `to` (String) - if equal to 'string', then result will be converted
   *   from utf8 to utf16 (javascript) string. When string output requested,
   *   chunk length can differ from `chunkSize`, depending on content.
   *
   *
   * ##### Example:
   *
   * ```javascript
   * const pako = require('pako');
   * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
   * let output;
   *
   * try {
   *   output = pako.inflate(input);
   * } catch (err)
   *   console.log(err);
   * }
   * ```
   **/


  function inflate$1(input, options) {
    var inflator = new Inflate(options);
    inflator.push(input); // That will never happens, if you don't cheat with options :)

    if (inflator.err) throw inflator.msg || messages[inflator.err];
    return inflator.result;
  }
  /**
   * inflateRaw(data[, options]) -> Uint8Array|String
   * - data (Uint8Array): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * The same as [[inflate]], but creates raw data, without wrapper
   * (header and adler32 crc).
   **/


  function inflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return inflate$1(input, options);
  }
  /**
   * ungzip(data[, options]) -> Uint8Array|String
   * - data (Uint8Array): input data to decompress.
   * - options (Object): zlib inflate options.
   *
   * Just shortcut to [[inflate]], because it autodetects format
   * by header.content. Done for convenience.
   **/


  var Inflate_1 = Inflate;
  var inflate_2$1 = inflate$1;
  var inflateRaw_1 = inflateRaw;
  var ungzip = inflate$1;
  var constants$2 = constants;
  var inflate_1$1 = {
    Inflate: Inflate_1,
    inflate: inflate_2$1,
    inflateRaw: inflateRaw_1,
    ungzip: ungzip,
    constants: constants$2
  };
  var Deflate$1 = deflate_1$1.Deflate,
      deflate$2 = deflate_1$1.deflate,
      deflateRaw$1 = deflate_1$1.deflateRaw,
      gzip$1 = deflate_1$1.gzip;
  var Inflate$1 = inflate_1$1.Inflate,
      inflate$2 = inflate_1$1.inflate,
      inflateRaw$1 = inflate_1$1.inflateRaw,
      ungzip$1 = inflate_1$1.ungzip;
  var Deflate_1$1 = Deflate$1;
  var deflate_1$2 = deflate$2;
  var deflateRaw_1$1 = deflateRaw$1;
  var gzip_1$1 = gzip$1;
  var Inflate_1$1 = Inflate$1;
  var inflate_1$2 = inflate$2;
  var inflateRaw_1$1 = inflateRaw$1;
  var ungzip_1 = ungzip$1;
  var constants_1 = constants;
  var pako = {
    Deflate: Deflate_1$1,
    deflate: deflate_1$2,
    deflateRaw: deflateRaw_1$1,
    gzip: gzip_1$1,
    Inflate: Inflate_1$1,
    inflate: inflate_1$2,
    inflateRaw: inflateRaw_1$1,
    ungzip: ungzip_1,
    constants: constants_1
  };

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
        this.engine.setItem(key, Array.from(pako.deflate(JSON.stringify(object))).join(','));
      }
    }, {
      key: "get",
      value: function get(key) {
        var value = this.engine.getItem(key);

        if (value) {
          try {
            var compressed = new Uint8Array(value.split(','));
            return JSON.parse(pako.inflate(compressed, {
              to: 'string'
            }));
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

  var strictUriEncode = function strictUriEncode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
      return "%".concat(x.charCodeAt(0).toString(16).toUpperCase());
    });
  };

  var token = '%[a-f0-9]{2}';
  var singleMatcher = new RegExp(token, 'gi');
  var multiMatcher = new RegExp('(' + token + ')+', 'gi');

  function decodeComponents(components, split) {
    try {
      // Try to decode the entire string first
      return decodeURIComponent(components.join(''));
    } catch (err) {// Do nothing
    }

    if (components.length === 1) {
      return components;
    }

    split = split || 1; // Split the array in 2 parts

    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
  }

  function decode(input) {
    try {
      return decodeURIComponent(input);
    } catch (err) {
      var tokens = input.match(singleMatcher);

      for (var i = 1; i < tokens.length; i++) {
        input = decodeComponents(tokens, i).join('');
        tokens = input.match(singleMatcher);
      }

      return input;
    }
  }

  function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
      '%FE%FF': "\uFFFD\uFFFD",
      '%FF%FE': "\uFFFD\uFFFD"
    };
    var match = multiMatcher.exec(input);

    while (match) {
      try {
        // Decode as big chunks as possible
        replaceMap[match[0]] = decodeURIComponent(match[0]);
      } catch (err) {
        var result = decode(match[0]);

        if (result !== match[0]) {
          replaceMap[match[0]] = result;
        }
      }

      match = multiMatcher.exec(input);
    } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


    replaceMap['%C2'] = "\uFFFD";
    var entries = Object.keys(replaceMap);

    for (var i = 0; i < entries.length; i++) {
      // Replace all decoded components
      var key = entries[i];
      input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
    }

    return input;
  }

  var decodeUriComponent = function decodeUriComponent(encodedURI) {
    if (typeof encodedURI !== 'string') {
      throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + _typeof(encodedURI) + '`');
    }

    try {
      encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

      return decodeURIComponent(encodedURI);
    } catch (err) {
      // Fallback to a more advanced decoder
      return customDecodeURIComponent(encodedURI);
    }
  };

  var splitOnFirst = function splitOnFirst(string, separator) {
    if (!(typeof string === 'string' && typeof separator === 'string')) {
      throw new TypeError('Expected the arguments to be of type `string`');
    }

    if (separator === '') {
      return [string];
    }

    var separatorIndex = string.indexOf(separator);

    if (separatorIndex === -1) {
      return [string];
    }

    return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
  };

  var filterObj = function filterObj(obj, predicate) {
    var ret = {};
    var keys = Object.keys(obj);
    var isArr = Array.isArray(predicate);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = obj[key];

      if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
        ret[key] = val;
      }
    }

    return ret;
  };

  var queryString = createCommonjsModule$1(function (module, exports) {

    var isNullOrUndefined = function isNullOrUndefined(value) {
      return value === null || value === undefined;
    };

    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case 'index':
          return function (key) {
            return function (result, value) {
              var index = result.length;

              if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                return result;
              }

              if (value === null) {
                return [].concat(_toConsumableArray(result), [[encode(key, options), '[', index, ']'].join('')]);
              }

              return [].concat(_toConsumableArray(result), [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
            };
          };

        case 'bracket':
          return function (key) {
            return function (result, value) {
              if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                return result;
              }

              if (value === null) {
                return [].concat(_toConsumableArray(result), [[encode(key, options), '[]'].join('')]);
              }

              return [].concat(_toConsumableArray(result), [[encode(key, options), '[]=', encode(value, options)].join('')]);
            };
          };

        case 'comma':
        case 'separator':
          return function (key) {
            return function (result, value) {
              if (value === null || value === undefined || value.length === 0) {
                return result;
              }

              if (result.length === 0) {
                return [[encode(key, options), '=', encode(value, options)].join('')];
              }

              return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
            };
          };

        default:
          return function (key) {
            return function (result, value) {
              if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                return result;
              }

              if (value === null) {
                return [].concat(_toConsumableArray(result), [encode(key, options)]);
              }

              return [].concat(_toConsumableArray(result), [[encode(key, options), '=', encode(value, options)].join('')]);
            };
          };
      }
    }

    function parserForArrayFormat(options) {
      var result;

      switch (options.arrayFormat) {
        case 'index':
          return function (key, value, accumulator) {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, '');

            if (!result) {
              accumulator[key] = value;
              return;
            }

            if (accumulator[key] === undefined) {
              accumulator[key] = {};
            }

            accumulator[key][result[1]] = value;
          };

        case 'bracket':
          return function (key, value, accumulator) {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, '');

            if (!result) {
              accumulator[key] = value;
              return;
            }

            if (accumulator[key] === undefined) {
              accumulator[key] = [value];
              return;
            }

            accumulator[key] = [].concat(accumulator[key], value);
          };

        case 'comma':
        case 'separator':
          return function (key, value, accumulator) {
            var isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
            var isEncodedArray = typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode(value, options) : value;
            var newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(function (item) {
              return decode(item, options);
            }) : value === null ? value : decode(value, options);
            accumulator[key] = newValue;
          };

        default:
          return function (key, value, accumulator) {
            if (accumulator[key] === undefined) {
              accumulator[key] = value;
              return;
            }

            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }

    function validateArrayFormatSeparator(value) {
      if (typeof value !== 'string' || value.length !== 1) {
        throw new TypeError('arrayFormatSeparator must be single character string');
      }
    }

    function encode(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }

      return value;
    }

    function decode(value, options) {
      if (options.decode) {
        return decodeUriComponent(value);
      }

      return value;
    }

    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }

      if (_typeof(input) === 'object') {
        return keysSorter(Object.keys(input)).sort(function (a, b) {
          return Number(a) - Number(b);
        }).map(function (key) {
          return input[key];
        });
      }

      return input;
    }

    function removeHash(input) {
      var hashStart = input.indexOf('#');

      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }

      return input;
    }

    function getHash(url) {
      var hash = '';
      var hashStart = url.indexOf('#');

      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }

      return hash;
    }

    function extract(input) {
      input = removeHash(input);
      var queryStart = input.indexOf('?');

      if (queryStart === -1) {
        return '';
      }

      return input.slice(queryStart + 1);
    }

    function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
        value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
        value = value.toLowerCase() === 'true';
      }

      return value;
    }

    function parse(query, options) {
      options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      var formatter = parserForArrayFormat(options); // Create an object with no prototype

      var ret = Object.create(null);

      if (typeof query !== 'string') {
        return ret;
      }

      query = query.trim().replace(/^[?#&]/, '');

      if (!query) {
        return ret;
      }

      var _iterator = _createForOfIteratorHelper(query.split('&')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var param = _step.value;

          if (param === '') {
            continue;
          }

          var _splitOnFirst = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='),
              _splitOnFirst2 = _slicedToArray(_splitOnFirst, 2),
              _key = _splitOnFirst2[0],
              _value = _splitOnFirst2[1]; // Missing `=` should be `null`:
          // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters


          _value = _value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? _value : decode(_value, options);
          formatter(decode(_key, options), _value, ret);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      for (var _i = 0, _Object$keys = Object.keys(ret); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var value = ret[key];

        if (_typeof(value) === 'object' && value !== null) {
          for (var _i2 = 0, _Object$keys2 = Object.keys(value); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            value[k] = parseValue(value[k], options);
          }
        } else {
          ret[key] = parseValue(value, options);
        }
      }

      if (options.sort === false) {
        return ret;
      }

      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function (result, key) {
        var value = ret[key];

        if (Boolean(value) && _typeof(value) === 'object' && !Array.isArray(value)) {
          // Sort object keys, not values
          result[key] = keysSorter(value);
        } else {
          result[key] = value;
        }

        return result;
      }, Object.create(null));
    }

    exports.extract = extract;
    exports.parse = parse;

    exports.stringify = function (object, options) {
      if (!object) {
        return '';
      }

      options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);

      var shouldFilter = function shouldFilter(key) {
        return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
      };

      var formatter = encoderForArrayFormat(options);
      var objectCopy = {};

      for (var _i3 = 0, _Object$keys3 = Object.keys(object); _i3 < _Object$keys3.length; _i3++) {
        var key = _Object$keys3[_i3];

        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }

      var keys = Object.keys(objectCopy);

      if (options.sort !== false) {
        keys.sort(options.sort);
      }

      return keys.map(function (key) {
        var value = object[key];

        if (value === undefined) {
          return '';
        }

        if (value === null) {
          return encode(key, options);
        }

        if (Array.isArray(value)) {
          return value.reduce(formatter(key), []).join('&');
        }

        return encode(key, options) + '=' + encode(value, options);
      }).filter(function (x) {
        return x.length > 0;
      }).join('&');
    };

    exports.parseUrl = function (url, options) {
      options = Object.assign({
        decode: true
      }, options);

      var _splitOnFirst3 = splitOnFirst(url, '#'),
          _splitOnFirst4 = _slicedToArray(_splitOnFirst3, 2),
          url_ = _splitOnFirst4[0],
          hash = _splitOnFirst4[1];

      return Object.assign({
        url: url_.split('?')[0] || '',
        query: parse(extract(url), options)
      }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: decode(hash, options)
      } : {});
    };

    exports.stringifyUrl = function (object, options) {
      options = Object.assign({
        encode: true,
        strict: true
      }, options);
      var url = removeHash(object.url).split('?')[0] || '';
      var queryFromUrl = exports.extract(object.url);
      var parsedQueryFromUrl = exports.parse(queryFromUrl, {
        sort: false
      });
      var query = Object.assign(parsedQueryFromUrl, object.query);
      var queryString = exports.stringify(query, options);

      if (queryString) {
        queryString = "?".concat(queryString);
      }

      var hash = getHash(object.url);

      if (object.fragmentIdentifier) {
        hash = "#".concat(encode(object.fragmentIdentifier, options));
      }

      return "".concat(url).concat(queryString).concat(hash);
    };

    exports.pick = function (input, filter, options) {
      options = Object.assign({
        parseFragmentIdentifier: true
      }, options);

      var _exports$parseUrl = exports.parseUrl(input, options),
          url = _exports$parseUrl.url,
          query = _exports$parseUrl.query,
          fragmentIdentifier = _exports$parseUrl.fragmentIdentifier;

      return exports.stringifyUrl({
        url: url,
        query: filterObj(query, filter),
        fragmentIdentifier: fragmentIdentifier
      }, options);
    };

    exports.exclude = function (input, filter, options) {
      var exclusionFilter = Array.isArray(filter) ? function (key) {
        return !filter.includes(key);
      } : function (key, value) {
        return !filter(key, value);
      };
      return exports.pick(input, exclusionFilter, options);
    };
  });

  var IDX = 256,
      HEX = [],
      BUFFER;

  while (IDX--) {
    HEX[IDX] = (IDX + 256).toString(16).substring(1);
  }

  function v4() {
    var i = 0,
        num,
        out = '';

    if (!BUFFER || IDX + 16 > 256) {
      BUFFER = Array(i = 256);

      while (i--) {
        BUFFER[i] = 256 * Math.random() | 0;
      }

      i = IDX = 0;
    }

    for (; i < 16; i++) {
      num = BUFFER[IDX + i];
      if (i == 6) out += HEX[num & 15 | 64];else if (i == 8) out += HEX[num & 63 | 128];else out += HEX[num];
      if (i & 1 && i > 1 && i < 11) out += '-';
    }

    IDX++;
    return out;
  }

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
    SALT_KEY: 'salt'
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

  var buildCollectedFromQuery = function buildCollectedFromQuery(query, config) {
    var parsedQueryString = queryString.parse(query);
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

  var TWA = /*#__PURE__*/function () {
    function TWA(id, config) {
      _classCallCheck(this, TWA);

      this.id = id;
      this.config = config;
      this.consentStatus = new ConsentStatus(id);
      this.setConsentStatus(this.getConsentStatus());
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
        return this.consentStatus.get() || 'exempt';
      }
    }, {
      key: "getSalt",
      value: function getSalt() {
        var savedSalt = this.storeSession.find(Global.SALT_KEY);

        if (!savedSalt.salt) {
          savedSalt.salt = v4();
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
        var anonymiseEvent = Object.assign(event, {});

        if (event.type === 'lead' || event.type === 'sale') {
          var eventId;
          eventId = v4();

          if (event.convId) {
            eventId = event.convId;
            delete anonymiseEvent.convId;
          }

          var shaObj = new _default('SHA-256', 'TEXT', {
            encoding: 'UTF8'
          });
          shaObj.update("".concat(this.getSalt()).concat(eventId));
          anonymiseEvent.conv_id = shaObj.getHash('HEX');
        }

        return anonymiseEvent;
      }
    }, {
      key: "pushEvent",
      value: function pushEvent(event) {
        var anonymiseEvent = this.buildAnonymiseEvent(event);
        var toSaveEvent = Object.assign(anonymiseEvent, this.buildTrace(window.location.search), {
          page: buildAnonymusPageFromLocation(window.location),
          referer: buildAnonymusReferer(window.document.referrer),
          time: new Date().getTime(),
          status: this.getConsentStatus()
        }); // eslint-disable-next-line no-console

        console.log(toSaveEvent);
      }
    }, {
      key: "getAllDatas",
      value: function getAllDatas() {
        return this.store.findAll();
      }
    }, {
      key: "clearAll",
      value: function clearAll() {
        var _this = this;

        var events = this.getAllDatas();
        events.forEach(function (event) {
          return _this.store.delete(event.id);
        });
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

  var checkIfExist = function checkIfExist(twaId) {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, "twaId ".concat(twaId, " not configured"));
    }
  };

  var Track = {
    init: function init(_ref) {
      var twaId = _ref.twaId,
          config = _ref.collect;

      if (!twaId) {
        throw new AppError(Severity.ERROR, 'Config must contain twaId');
      }

      cache[twaId] = new TWA(twaId, [].concat(_toConsumableArray(defaultConfig), _toConsumableArray(config)));
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
      console.log(cache[twaId].getConfig());
    },
    showTrace: function showTrace(_ref6) {
      var twaId = _ref6.twaId;
      checkIfExist(twaId);
      console.log(cache[twaId].getSavedTrace());
    },
    showConsentStatus: function showConsentStatus(_ref7) {
      var twaId = _ref7.twaId;
      checkIfExist(twaId);
      console.log(cache[twaId].getConsentStatus());
    },
    clearAll: function clearAll(_ref8) {
      var twaId = _ref8.twaId;
      checkIfExist(twaId);
      cache[twaId].clearAll();
    },
    pageview: function pageview(_ref9) {
      var twaId = _ref9.twaId;
      checkIfExist(twaId);
      cache[twaId].pushEvent({
        type: 'pageview'
      });
    },
    lead: function lead(_ref10) {
      var twaId = _ref10.twaId,
          convId = _ref10.convId;
      checkIfExist(twaId);
      cache[twaId].pushEvent({
        type: 'lead',
        convId: convId
      });
    },
    sale: function sale(_ref11) {
      var twaId = _ref11.twaId;
      checkIfExist(twaId);
      cache[twaId].pushEvent({
        type: 'sale'
      });
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
        var result;

        try {
          var _args = _toArray(args),
              functionName = _args[0],
              functionArgs = _args.slice(1);

          if (typeof Track[functionName] !== 'function') {
            throw new AppError(Severity.ERROR, "Undefined function ".concat(functionName));
          }

          result = Track[functionName].apply(null, functionArgs);
        } catch (e) {
          Logger.catchError(e);
        }

        return result;
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
