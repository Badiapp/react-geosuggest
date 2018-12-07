(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Geosuggest = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

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

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var validateFormat = function validateFormat(format) {};

    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);

      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
      }
    }

    var invariant_1 = invariant;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */

    var emptyObject = {};

    var emptyObject_1 = emptyObject;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

    function makeEmptyFunction(arg) {
      return function () {
        return arg;
      };
    }

    /**
     * This function accepts and discards inputs; it has no side effects. This is
     * primarily useful idiomatically for overridable function endpoints which
     * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
     */
    var emptyFunction = function emptyFunction() {};

    emptyFunction.thatReturns = makeEmptyFunction;
    emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction.thatReturnsThis = function () {
      return this;
    };
    emptyFunction.thatReturnsArgument = function (arg) {
      return arg;
    };

    var emptyFunction_1 = emptyFunction;

    var r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
    r?Symbol.for("react.forward_ref"):60112;var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);invariant_1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e);}
    var E={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||E;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function G(){}
    G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=emptyObject_1;this.updater=e||E;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
    function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return {$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
    function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return {result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
    function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0;}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c);}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
    h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++);}
    function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,emptyFunction_1.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a));}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b);}
    var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b);},count:function(a){return null==a?0:S(a,"",emptyFunction_1.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,emptyFunction_1.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return {current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
    _calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
    b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l;}return {$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
    assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default?Z.default:Z;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var react_development = createCommonjsModule(function (module) {
    });

    var react = createCommonjsModule(function (module) {

    {
      module.exports = react_production_min;
    }
    });
    var react_1 = react.createElement;
    var react_2 = react.Component;
    var react_3 = react.PureComponent;

    var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames () {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg) && arg.length) {
    				var inner = classNames.apply(null, arg);
    				if (inner) {
    					classes.push(inner);
    				}
    			} else if (argType === 'object') {
    				for (var key in arg) {
    					if (hasOwn.call(arg, key) && arg[key]) {
    						classes.push(key);
    					}
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if (module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else {
    		window.classNames = classNames;
    	}
    }());
    });

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max,
        nativeMin = Math.min;

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = function() {
      return root.Date.now();
    };

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    var lodash_debounce = debounce;

    /* istanbul ignore next */
    /* tslint:disable:no-empty */
    /**
     * Default values
     */
    var defaults = {
        autoActivateFirstSuggest: false,
        children: undefined,
        defaultsHidden: true,
        disabled: false,
        fixtures: [],
        getSuggestLabel: function (suggest) { return suggest.description; },
        highlightMatch: true,
        ignoreEnter: false,
        ignoreTab: false,
        initialValue: '',
        maxFixtures: 10,
        minLength: 1,
        onKeyDown: function () { },
        onKeyPress: function () { },
        placeholder: 'Search places',
        queryDelay: 250,
        skipSuggest: function () { return false; },
        style: {}
    };

    /**
     * Attributes allowed on input elements
     */
    var allowedAttributes = [
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'autoFocus',
        'disabled',
        'form',
        'formAction',
        'formEncType',
        'formMethod',
        'formNoValidate',
        'formTarget',
        'height',
        'id',
        'inputMode',
        'maxLength',
        'name',
        'onClick',
        'onContextMenu',
        'onCopy',
        'onCut',
        'onDoubleClick',
        'onMouseDown',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseMove',
        'onMouseOut',
        'onMouseOver',
        'onMouseUp',
        'onPaste',
        'pattern',
        'placeholder',
        'readOnly',
        'required',
        'size',
        'spellCheck',
        'tabIndex',
        'title',
        'aria-atomic',
        'aria-busy',
        'aria-controls',
        'aria-current',
        'aria-describedby',
        'aria-details',
        'aria-disabled',
        'aria-dropeffect',
        'aria-errormessage',
        'aria-flowto',
        'aria-grabbed',
        'aria-haspopup',
        'aria-hidden',
        'aria-invalid',
        'aria-keyshortcuts',
        'aria-label',
        'aria-labelledby',
        'aria-live',
        'aria-owns',
        'aria-relevant',
        'aria-roledescription',
        'aria-activedescendant',
        'aria-autocomplete',
        'aria-multiline',
        'aria-placeholder',
        'aria-readonly',
        'aria-required'
    ];
    /**
     * Filter the properties for only allowed input properties
     */
    function filterInputAttributes (props) {
        var attributes = {};
        allowedAttributes.forEach(function (allowedAttribute) {
            if (props[allowedAttribute]) {
                attributes[allowedAttribute] = props[allowedAttribute];
            }
        });
        return attributes;
    }

    /**
     * The input field
     */
    var default_1 = /** @class */ (function (_super) {
        __extends(default_1, _super);
        /**
         * The constructor.
         */
        function default_1(props) {
            var _this = _super.call(this, props) || this;
            /* tslint:enable:no-empty */
            /**
             * The reference to the input element
             */
            _this.input = null;
            _this.onChange = _this.onChange.bind(_this);
            _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
            return _this;
        }
        /**
         * When the input got changed
         */
        default_1.prototype.onChange = function () {
            if (this.input) {
                this.props.onChange(this.input.value);
            }
        };
        /**
         * When a key gets pressed in the input
         */
        default_1.prototype.onInputKeyDown = function (event) {
            // Call props.onKeyDown if defined
            // Gives the developer a little bit more control if needed
            if (this.props.onKeyDown) {
                this.props.onKeyDown(event);
            }
            switch (event.which) {
                case 40: // DOWN
                    if (!event.shiftKey) {
                        event.preventDefault();
                        this.props.onNext();
                    }
                    break;
                case 38: // UP
                    if (!event.shiftKey) {
                        event.preventDefault();
                        this.props.onPrev();
                    }
                    break;
                case 13: // ENTER
                    if (this.props.doNotSubmitOnEnter) {
                        event.preventDefault();
                    }
                    if (!this.props.ignoreEnter) {
                        this.props.onSelect();
                    }
                    break;
                case 9: // TAB
                    if (!this.props.ignoreTab) {
                        this.props.onSelect();
                    }
                    break;
                case 27: // ESC
                    this.props.onEscape();
                    break;
                /* istanbul ignore next */
                default:
                    break;
            }
        };
        /**
         * Focus the input
         */
        default_1.prototype.focus = function () {
            if (this.input) {
                this.input.focus();
            }
        };
        /**
         * Blur the input
         */
        default_1.prototype.blur = function () {
            if (this.input) {
                this.input.blur();
            }
        };
        /**
         * Render the view
         */
        default_1.prototype.render = function () {
            var _this = this;
            var attributes = filterInputAttributes(this.props);
            var classes = classnames('geosuggest__input', this.props.className);
            return (react_1("input", __assign({ className: classes, ref: function (i) { return (_this.input = i); }, type: "text" }, attributes, { value: this.props.value, style: this.props.style, onKeyDown: this.onInputKeyDown, onChange: this.onChange, onKeyPress: this.props.onKeyPress, onFocus: this.props.onFocus, onBlur: this.props.onBlur })));
        };
        /* tslint:disable:no-empty */
        /**
         * Default values for the properties
         */
        default_1.defaultProps = {
            autoComplete: 'nope',
            className: '',
            onBlur: function () { },
            onChange: function () { },
            onEscape: function () { },
            onFocus: function () { },
            onKeyDown: function () { },
            onKeyPress: function () { },
            onNext: function () { },
            onPrev: function () { },
            onSelect: function () { },
            value: ''
        };
        return default_1;
    }(react_3));

    /**
     * A single Geosuggest item in the list
     */
    var default_1$1 = /** @class */ (function (_super) {
        __extends(default_1, _super);
        /**
         * The constructor.
         */
        function default_1(props) {
            var _this = _super.call(this, props) || this;
            /**
             * The reference to the suggest element
             */
            _this.ref = null;
            _this.onClick = _this.onClick.bind(_this);
            return _this;
        }
        /**
         * Makes a text bold
         */
        default_1.prototype.makeBold = function (element, key) {
            return (react_1("b", { className: "geosuggest__item__matched-text", key: key }, element));
        };
        /**
         * Replace matched text with the same in bold
         */
        default_1.prototype.formatMatchedText = function (userInput, suggest) {
            if (!userInput || !suggest.matchedSubstrings) {
                return suggest.label;
            }
            var start = suggest.matchedSubstrings.offset;
            var length = suggest.matchedSubstrings.length;
            var end = start + length;
            var boldPart = this.makeBold(suggest.label.substring(start, end), suggest.label);
            var pre = '';
            var post = '';
            if (start > 0) {
                pre = suggest.label.slice(0, start);
            }
            if (end < suggest.label.length) {
                post = suggest.label.slice(end);
            }
            return (react_1("span", null,
                pre,
                boldPart,
                post));
        };
        /**
         * Checking if item just became active and scrolling if needed.
         */
        default_1.prototype.componentWillReceiveProps = function (nextProps) {
            if (nextProps.isActive && !this.props.isActive) {
                this.scrollIfNeeded();
            }
        };
        /**
         * Scrolling current item to the center of the list if item needs scrolling.
         * Item is scrolled to the center of the list.
         */
        default_1.prototype.scrollIfNeeded = function () {
            var element = this.ref;
            var parent = element && element.parentElement;
            if (!element || !parent) {
                return;
            }
            var overTop = element.offsetTop - parent.offsetTop < parent.scrollTop;
            var overBottom = element.offsetTop - parent.offsetTop + element.clientHeight >
                parent.scrollTop + parent.clientHeight;
            if (overTop || overBottom) {
                parent.scrollTop =
                    element.offsetTop -
                        parent.offsetTop -
                        parent.clientHeight / 2 +
                        element.clientHeight / 2;
            }
        };
        /**
         * When the suggest item got clicked
         */
        default_1.prototype.onClick = function (event) {
            event.preventDefault();
            this.props.onSelect(this.props.suggest);
        };
        /**
         * Render the view
         */
        default_1.prototype.render = function () {
            var _this = this;
            var _a;
            var suggest = this.props.suggest;
            var classes = classnames('geosuggest__item', this.props.className, this.props.suggestItemClassName, { 'geosuggest__item--active': this.props.isActive }, (_a = {},
                _a[this.props.activeClassName || ''] = this.props.activeClassName
                    ? this.props.isActive
                    : null,
                _a));
            var content = suggest.label;
            if (this.props.renderSuggestItem) {
                content = this.props.renderSuggestItem(suggest, this.props.userInput);
            }
            else if (this.props.isHighlightMatch) {
                content = this.formatMatchedText(this.props.userInput, suggest);
            }
            return (react_1("li", { className: classes, ref: function (li) { return (_this.ref = li); }, style: this.props.style, onMouseDown: this.props.onMouseDown, onMouseOut: this.props.onMouseOut, onClick: this.onClick }, content));
        };
        return default_1;
    }(react_3));

    /**
     * The list with suggestions.
     */
    var default_1$2 = /** @class */ (function (_super) {
        __extends(default_1, _super);
        function default_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Whether or not it is hidden
         */
        default_1.prototype.isHidden = function () {
            if (this.props.children) {
                return this.props.isHidden;
            }
            return this.props.isHidden || this.props.suggests.length === 0;
        };
        /**
         * There are new properties available for the list
         */
        default_1.prototype.componentWillReceiveProps = function (nextProps) {
            if (nextProps.suggests !== this.props.suggests) {
                if (nextProps.suggests.length === 0) {
                    this.props.onSuggestNoResults();
                }
            }
        };
        /**
         * Render the view
         * @return {Function} The React element to render
         */
        default_1.prototype.render = function () {
            var _this = this;
            var _a;
            var classes = classnames('geosuggest__suggests', this.props.suggestsClassName, { 'geosuggest__suggests--hidden': this.isHidden() }, (_a = {},
                _a[this.props.hiddenClassName || ''] = this.props.hiddenClassName
                    ? this.isHidden()
                    : null,
                _a));
            if (!this.props.userInput && !!this.props.children) {
                return (react_1("ul", { className: classes, style: this.props.style }, this.props.children));
            }
            return (react_1("ul", { className: classes, style: this.props.style }, this.props.suggests.map(function (suggest) {
                var isActive = _this.props.activeSuggest &&
                    suggest.placeId === _this.props.activeSuggest.placeId || false;
                return (react_1(default_1$1, { key: suggest.placeId, className: suggest.className || '', userInput: _this.props.userInput, isHighlightMatch: _this.props.isHighlightMatch, suggest: suggest, style: _this.props.suggestItemStyle, suggestItemClassName: _this.props.suggestItemClassName, isActive: isActive, activeClassName: _this.props.suggestItemActiveClassName, onMouseDown: _this.props.onSuggestMouseDown, onMouseOut: _this.props.onSuggestMouseOut, onSelect: _this.props.onSuggestSelect, renderSuggestItem: _this.props.renderSuggestItem }));
            })));
        };
        return default_1;
    }(react_3));

    /* global window */
    // Escapes special characters in user input for regex
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    /**
     * Entry point for the Geosuggest component
     */
    var default_1$3 = /** @class */ (function (_super) {
        __extends(default_1$$1, _super);
        /**
         * The constructor. Sets the initial state.
         */
        function default_1$$1(props) {
            var _this = _super.call(this, props) || this;
            /**
             * The Google Map instance
             */
            _this.googleMaps = null;
            /**
             * The autocomple service to get suggests
             */
            _this.autocompleteService = null;
            /**
             * The places service to get place details
             */
            _this.placesService = null;
            /**
             * The sessionToken service to use session based monetization
             */
            _this.sessionToken = undefined;
            /**
             * The geocoder to get geocoded results
             */
            _this.geocoder = null;
            /**
             * The input component
             */
            _this.input = null;
            var isSuggestsHidden = true;
            if (!!props.children && !props.defaultsHidden) {
                isSuggestsHidden = false;
            }
            _this.state = {
                activeSuggest: null,
                ignoreBlur: false,
                isLoading: false,
                isSuggestsHidden: isSuggestsHidden,
                suggests: [],
                userInput: props.initialValue || ''
            };
            _this.onInputChange = _this.onInputChange.bind(_this);
            _this.onAfterInputChange = _this.onAfterInputChange.bind(_this);
            _this.onInputFocus = _this.onInputFocus.bind(_this);
            _this.onInputBlur = _this.onInputBlur.bind(_this);
            _this.onNext = _this.onNext.bind(_this);
            _this.onPrev = _this.onPrev.bind(_this);
            _this.onSelect = _this.onSelect.bind(_this);
            _this.onSuggestMouseDown = _this.onSuggestMouseDown.bind(_this);
            _this.onSuggestMouseOut = _this.onSuggestMouseOut.bind(_this);
            _this.onSuggestNoResults = _this.onSuggestNoResults.bind(_this);
            _this.hideSuggests = _this.hideSuggests.bind(_this);
            _this.selectSuggest = _this.selectSuggest.bind(_this);
            if (props.queryDelay) {
                _this.onAfterInputChange = lodash_debounce(_this.onAfterInputChange, props.queryDelay);
            }
            return _this;
        }
        /**
         * Change inputValue if prop changes
         */
        default_1$$1.prototype.componentWillReceiveProps = function (props) {
            if (this.props.initialValue !== props.initialValue) {
                this.setState({ userInput: props.initialValue || '' });
            }
        };
        /**
         * Called on the client side after component is mounted.
         * Google api sdk object will be obtained and cached as a instance property.
         * Necessary objects of google api will also be determined and saved.
         */
        default_1$$1.prototype.componentWillMount = function () {
            if (typeof window === 'undefined') {
                return;
            }
            var googleMaps = this.props.googleMaps ||
                (window.google &&
                    window.google.maps) ||
                this.googleMaps;
            /* istanbul ignore next */
            if (!googleMaps) {
                if (console) {
                    // tslint:disable-next-line:no-console
                    console.error('Google maps API was not found in the page.');
                }
                return;
            }
            this.googleMaps = googleMaps;
            this.autocompleteService = new googleMaps.places.AutocompleteService();
            this.placesService = new googleMaps.places.PlacesService(document.createElement('div'));
            this.sessionToken = new googleMaps.places.AutocompleteSessionToken();
            this.geocoder = new googleMaps.Geocoder();
        };
        /**
         * When the component will unmount
         */
        default_1$$1.prototype.componentWillUnmount = function () {
            clearTimeout(this.timer);
        };
        /**
         * When the input changed
         */
        default_1$$1.prototype.onInputChange = function (userInput) {
            if (!userInput) {
                if (this.props.onSuggestSelect) {
                    this.props.onSuggestSelect();
                }
            }
            this.setState({ userInput: userInput }, this.onAfterInputChange);
        };
        /**
         * On After the input got changed
         */
        default_1$$1.prototype.onAfterInputChange = function () {
            this.showSuggests();
            if (this.props.onChange) {
                this.props.onChange(this.state.userInput);
            }
        };
        /**
         * When the input gets focused
         */
        default_1$$1.prototype.onInputFocus = function () {
            if (this.props.onFocus) {
                this.props.onFocus();
            }
            this.showSuggests();
        };
        /**
         * When the input gets blurred
         */
        default_1$$1.prototype.onInputBlur = function () {
            if (!this.state.ignoreBlur) {
                this.hideSuggests();
            }
        };
        default_1$$1.prototype.onNext = function () {
            this.activateSuggest('next');
        };
        default_1$$1.prototype.onPrev = function () {
            this.activateSuggest('prev');
        };
        default_1$$1.prototype.onSelect = function () {
            this.selectSuggest(this.state.activeSuggest);
        };
        default_1$$1.prototype.onSuggestMouseDown = function () {
            this.setState({ ignoreBlur: true });
        };
        default_1$$1.prototype.onSuggestMouseOut = function () {
            this.setState({ ignoreBlur: false });
        };
        default_1$$1.prototype.onSuggestNoResults = function () {
            if (this.props.onSuggestNoResults) {
                this.props.onSuggestNoResults(this.state.userInput);
            }
        };
        /**
         * Focus the input
         */
        default_1$$1.prototype.focus = function () {
            if (this.input) {
                this.input.focus();
            }
        };
        /**
         * Blur the input
         */
        default_1$$1.prototype.blur = function () {
            if (this.input) {
                this.input.blur();
            }
        };
        /**
         * Update the value of the user input
         */
        default_1$$1.prototype.update = function (userInput) {
            this.setState({ userInput: userInput });
            if (this.props.onChange) {
                this.props.onChange(userInput);
            }
        };
        /*
         * Clear the input and close the suggestion pane
         */
        default_1$$1.prototype.clear = function () {
            this.setState({ userInput: '' }, this.hideSuggests);
        };
        /**
         * Search for new suggests
         */
        default_1$$1.prototype.searchSuggests = function () {
            var _this = this;
            if (!this.state.userInput) {
                this.updateSuggests();
                return;
            }
            var options = {
                input: this.state.userInput,
                sessionToken: this.sessionToken
            };
            var inputLength = this.state.userInput.length;
            var isShorterThanMinLength = this.props.minLength && inputLength < this.props.minLength;
            if (isShorterThanMinLength) {
                return;
            }
            var _a = this.props, location = _a.location, radius = _a.radius, bounds = _a.bounds, types = _a.types, country = _a.country;
            /* tslint:disable:curly */
            if (location)
                options.location = location;
            if (radius)
                options.radius = Number(this.props.radius);
            if (bounds)
                options.bounds = bounds;
            if (types)
                options.types = types;
            if (country)
                options.componentRestrictions = { country: country };
            /* tslint:enable:curly */
            this.setState({ isLoading: true }, function () {
                if (!_this.autocompleteService) {
                    _this.setState({ isLoading: false });
                    return;
                }
                _this.autocompleteService.getPlacePredictions(options, function (suggestsGoogle) {
                    _this.setState({ isLoading: false });
                    _this.updateSuggests(suggestsGoogle || [], // can be null
                    function () {
                        if (_this.props.autoActivateFirstSuggest &&
                            !_this.state.activeSuggest) {
                            _this.activateSuggest('next');
                        }
                    });
                });
            });
        };
        /**
         * Update the suggests
         */
        default_1$$1.prototype.updateSuggests = function (suggestsGoogle, 
        // tslint:disable-next-line:no-empty
        callback) {
            var _this = this;
            if (suggestsGoogle === void 0) { suggestsGoogle = []; }
            if (callback === void 0) { 
            // tslint:disable-next-line:no-empty
            callback = function () { }; }
            var suggests = [];
            var userInput = this.state.userInput;
            var _a = this.props, skipSuggest = _a.skipSuggest, maxFixtures = _a.maxFixtures, fixtures = _a.fixtures;
            var regex = new RegExp(escapeRegExp(userInput), 'gim');
            var fixturesSearched = 0;
            var activeSuggest = null;
            if (fixtures) {
                fixtures.forEach(function (fixture) {
                    if (maxFixtures && fixturesSearched >= maxFixtures) {
                        return;
                    }
                    if ((skipSuggest && !skipSuggest(fixture)) && fixture.label.match(regex)) {
                        fixturesSearched++;
                        suggests.push({
                            className: fixture.className,
                            isFixture: true,
                            label: fixture.label,
                            location: fixture.location,
                            matchedSubstrings: {
                                length: userInput.length,
                                offset: fixture.label.indexOf(userInput)
                            },
                            placeId: fixture.label
                        });
                    }
                });
            }
            suggestsGoogle.forEach(function (suggest) {
                if (skipSuggest && !skipSuggest(suggest)) {
                    suggests.push({
                        description: suggest.description,
                        isFixture: false,
                        label: _this.props.getSuggestLabel ? _this.props.getSuggestLabel(suggest) : '',
                        matchedSubstrings: suggest.matched_substrings[0],
                        placeId: suggest.place_id,
                        type: suggest.types && suggest.types.length ? suggest.types[0] : ''
                    });
                }
            });
            activeSuggest = this.updateActiveSuggest(suggests);
            if (this.props.onUpdateSuggests) {
                this.props.onUpdateSuggests(suggests, activeSuggest);
            }
            this.setState({ suggests: suggests, activeSuggest: activeSuggest }, callback);
        };
        /**
         * Return the new activeSuggest object after suggests have been updated
         */
        default_1$$1.prototype.updateActiveSuggest = function (suggests) {
            if (suggests === void 0) { suggests = []; }
            var activeSuggest = this.state.activeSuggest;
            if (activeSuggest) {
                var newSuggest = suggests.filter(function (listedSuggest) { return activeSuggest &&
                    activeSuggest.placeId === listedSuggest.placeId &&
                    activeSuggest.isFixture === listedSuggest.isFixture; })[0];
                activeSuggest = newSuggest || null;
            }
            return activeSuggest;
        };
        /**
         * Show the suggestions
         */
        default_1$$1.prototype.showSuggests = function () {
            this.searchSuggests();
            this.setState({ isSuggestsHidden: false });
        };
        /**
         * Hide the suggestions
         */
        default_1$$1.prototype.hideSuggests = function () {
            var _this = this;
            if (this.props.onBlur) {
                this.props.onBlur(this.state.userInput);
            }
            this.timer = window.setTimeout(function () {
                _this.setState({
                    activeSuggest: null,
                    isSuggestsHidden: true
                });
            }, 100);
        };
        /**
         * Activate a new suggest
         */
        default_1$$1.prototype.activateSuggest = function (direction) {
            if (this.state.isSuggestsHidden) {
                this.showSuggests();
                return;
            }
            var suggestsCount = this.state.suggests.length - 1;
            var next = direction === 'next';
            var newActiveSuggest = null;
            var newIndex = 0;
            var i = 0;
            for (i; i <= suggestsCount; i++) {
                if (this.state.suggests[i] === this.state.activeSuggest) {
                    newIndex = next ? i + 1 : i - 1;
                }
            }
            if (!this.state.activeSuggest) {
                newIndex = next ? 0 : suggestsCount;
            }
            if (newIndex >= 0 && newIndex <= suggestsCount) {
                newActiveSuggest = this.state.suggests[newIndex];
            }
            if (this.props.onActivateSuggest) {
                this.props.onActivateSuggest(newActiveSuggest);
            }
            this.setState({ activeSuggest: newActiveSuggest });
        };
        /**
         * When an item got selected
         */
        default_1$$1.prototype.selectSuggest = function (suggestToSelect) {
            var suggest = suggestToSelect || {
                isFixture: false,
                label: this.state.userInput,
                placeId: this.state.userInput
            };
            this.setState({
                isSuggestsHidden: true,
                userInput: typeof suggest.label !== 'object' ? suggest.label : (suggest.description || '')
            });
            if (suggest.location) {
                this.setState({ ignoreBlur: false });
                if (this.props.onSuggestSelect) {
                    this.props.onSuggestSelect(suggest);
                }
                return;
            }
            this.geocodeSuggest(suggest);
        };
        /**
         * Geocode a suggest
         */
        default_1$$1.prototype.geocodeSuggest = function (suggestToGeocode) {
            var _this = this;
            if (!this.geocoder) {
                return;
            }
            if (suggestToGeocode.placeId && !suggestToGeocode.isFixture && this.placesService) {
                var options = {
                    placeId: suggestToGeocode.placeId,
                    sessionToken: this.sessionToken
                };
                this.placesService.getDetails(options, function (results, status) {
                    if (status === _this.googleMaps.places.PlacesServiceStatus.OK) {
                        var gmaps = results;
                        var location_1 = gmaps.geometry.location;
                        var suggest = __assign({}, suggestToGeocode, { gmaps: gmaps, location: {
                                lat: location_1.lat(),
                                lng: location_1.lng()
                            } });
                        _this.sessionToken = new google.maps.places.AutocompleteSessionToken();
                        if (_this.props.onSuggestSelect) {
                            _this.props.onSuggestSelect(suggest);
                        }
                    }
                });
            }
            else {
                var options = {
                    address: suggestToGeocode.label,
                    bounds: this.props.bounds,
                    componentRestrictions: this.props.country
                        ? { country: this.props.country }
                        : undefined,
                    location: this.props.location
                };
                this.geocoder.geocode(options, function (results, status) {
                    if (status === _this.googleMaps.GeocoderStatus.OK) {
                        var gmaps = results[0];
                        var location_2 = gmaps.geometry.location;
                        var suggest = __assign({}, suggestToGeocode, { gmaps: gmaps, location: {
                                lat: location_2.lat(),
                                lng: location_2.lng()
                            } });
                        if (_this.props.onSuggestSelect) {
                            _this.props.onSuggestSelect(suggest);
                        }
                    }
                });
            }
        };
        /**
         * Render the view
         */
        default_1$$1.prototype.render = function () {
            var _this = this;
            var attributes = filterInputAttributes(this.props);
            var classes = classnames('geosuggest', this.props.className, {
                'geosuggest--loading': this.state.isLoading
            });
            var shouldRenderLabel = this.props.label && attributes.id;
            var input = (react_1(default_1, __assign({ className: this.props.inputClassName, ref: function (i) { return (_this.input = i); }, value: this.state.userInput, doNotSubmitOnEnter: !this.state.isSuggestsHidden, ignoreTab: this.props.ignoreTab, ignoreEnter: this.props.ignoreEnter, style: this.props.style && this.props.style.input, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onKeyDown: this.props.onKeyDown, onKeyPress: this.props.onKeyPress, onNext: this.onNext, onPrev: this.onPrev, onSelect: this.onSelect, onEscape: this.hideSuggests }, attributes)));
            var suggestionsList = (react_1(default_1$2, { isHidden: this.state.isSuggestsHidden, style: this.props.style && this.props.style.suggests, suggestItemStyle: this.props.style && this.props.style.suggestItem, userInput: this.state.userInput, isHighlightMatch: Boolean(this.props.highlightMatch), suggestsClassName: this.props.suggestsClassName, suggestItemClassName: this.props.suggestItemClassName, suggests: this.state.suggests, hiddenClassName: this.props.suggestsHiddenClassName, suggestItemActiveClassName: this.props.suggestItemActiveClassName, activeSuggest: this.state.activeSuggest, onSuggestNoResults: this.onSuggestNoResults, onSuggestMouseDown: this.onSuggestMouseDown, onSuggestMouseOut: this.onSuggestMouseOut, onSuggestSelect: this.selectSuggest, renderSuggestItem: this.props.renderSuggestItem }, this.props.children));
            return (react_1("div", { className: classes },
                react_1("div", { className: "geosuggest__input-wrapper" },
                    shouldRenderLabel && (react_1("label", { className: "geosuggest__label", htmlFor: attributes.id }, this.props.label)),
                    input),
                react_1("div", { className: "geosuggest__suggests-wrapper" }, suggestionsList)));
        };
        /**
         * Default values for the properties
         */
        default_1$$1.defaultProps = defaults;
        return default_1$$1;
    }(react_2));

    return default_1$3;

})));
