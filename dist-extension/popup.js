function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) {
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: () => e[k]
					});
				}
			}
		} }
	}
	return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r$2=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null}
var B$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};
E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F;
H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};
function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
function N$1(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.");}
react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b},toArray:function(a){return S$1(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r$2;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T$1}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$1.current.useContext(a)};
react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b)};
react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$1.current.useRef(a)};react_production_min.useState=function(a){return U$1.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";

{
  react.exports = react_production_min;
}

var reactExports = react.exports;
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const React$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: React
}, [reactExports]);

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p$1.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
} (scheduler_production_min));

{
  scheduler.exports = scheduler_production_min;
}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b);};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";

function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}

var reactDomExports = reactDom.exports;
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

var buffer = {};

var base64Js = {};

base64Js.byteLength = byteLength;
base64Js.toByteArray = toByteArray;
base64Js.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens (b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4);

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen;

  var i;
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = (tmp >> 16) & 0xFF;
    arr[curByte++] = (tmp >> 8) & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[curByte++] = (tmp >> 8) & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    );
  }

  return parts.join('')
}

var ieee754 = {};

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

ieee754.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = (nBytes * 8) - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
};

ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = (nBytes * 8) - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

(function (exports) {

	const base64 = base64Js;
	const ieee754$1 = ieee754;
	const customInspectSymbol =
	  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
	    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
	    : null;

	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	const K_MAX_LENGTH = 0x7fffffff;
	exports.kMaxLength = K_MAX_LENGTH;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
	 *               implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * We report that the browser does not support typed arrays if the are not subclassable
	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	 * for __proto__ and has a buggy typed array implementation.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

	if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
	    typeof console.error === 'function') {
	  console.error(
	    'This browser lacks typed array (Uint8Array) support which is required by ' +
	    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
	  );
	}

	function typedArraySupport () {
	  // Can typed array instances can be augmented?
	  try {
	    const arr = new Uint8Array(1);
	    const proto = { foo: function () { return 42 } };
	    Object.setPrototypeOf(proto, Uint8Array.prototype);
	    Object.setPrototypeOf(arr, proto);
	    return arr.foo() === 42
	  } catch (e) {
	    return false
	  }
	}

	Object.defineProperty(Buffer.prototype, 'parent', {
	  enumerable: true,
	  get: function () {
	    if (!Buffer.isBuffer(this)) return undefined
	    return this.buffer
	  }
	});

	Object.defineProperty(Buffer.prototype, 'offset', {
	  enumerable: true,
	  get: function () {
	    if (!Buffer.isBuffer(this)) return undefined
	    return this.byteOffset
	  }
	});

	function createBuffer (length) {
	  if (length > K_MAX_LENGTH) {
	    throw new RangeError('The value "' + length + '" is invalid for option "size"')
	  }
	  // Return an augmented `Uint8Array` instance
	  const buf = new Uint8Array(length);
	  Object.setPrototypeOf(buf, Buffer.prototype);
	  return buf
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new TypeError(
	        'The "string" argument must be of type string. Received type number'
	      )
	    }
	    return allocUnsafe(arg)
	  }
	  return from(arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192; // not used by this implementation

	function from (value, encodingOrOffset, length) {
	  if (typeof value === 'string') {
	    return fromString(value, encodingOrOffset)
	  }

	  if (ArrayBuffer.isView(value)) {
	    return fromArrayView(value)
	  }

	  if (value == null) {
	    throw new TypeError(
	      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
	      'or Array-like Object. Received type ' + (typeof value)
	    )
	  }

	  if (isInstance(value, ArrayBuffer) ||
	      (value && isInstance(value.buffer, ArrayBuffer))) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }

	  if (typeof SharedArrayBuffer !== 'undefined' &&
	      (isInstance(value, SharedArrayBuffer) ||
	      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }

	  if (typeof value === 'number') {
	    throw new TypeError(
	      'The "value" argument must not be of type number. Received type number'
	    )
	  }

	  const valueOf = value.valueOf && value.valueOf();
	  if (valueOf != null && valueOf !== value) {
	    return Buffer.from(valueOf, encodingOrOffset, length)
	  }

	  const b = fromObject(value);
	  if (b) return b

	  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
	      typeof value[Symbol.toPrimitive] === 'function') {
	    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
	  }

	  throw new TypeError(
	    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
	    'or Array-like Object. Received type ' + (typeof value)
	  )
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(value, encodingOrOffset, length)
	};

	// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
	// https://github.com/feross/buffer/pull/148
	Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
	Object.setPrototypeOf(Buffer, Uint8Array);

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be of type number')
	  } else if (size < 0) {
	    throw new RangeError('The value "' + size + '" is invalid for option "size"')
	  }
	}

	function alloc (size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpreted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(size).fill(fill, encoding)
	      : createBuffer(size).fill(fill)
	  }
	  return createBuffer(size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(size, fill, encoding)
	};

	function allocUnsafe (size) {
	  assertSize(size);
	  return createBuffer(size < 0 ? 0 : checked(size) | 0)
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(size)
	};

	function fromString (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('Unknown encoding: ' + encoding)
	  }

	  const length = byteLength(string, encoding) | 0;
	  let buf = createBuffer(length);

	  const actual = buf.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    buf = buf.slice(0, actual);
	  }

	  return buf
	}

	function fromArrayLike (array) {
	  const length = array.length < 0 ? 0 : checked(array.length) | 0;
	  const buf = createBuffer(length);
	  for (let i = 0; i < length; i += 1) {
	    buf[i] = array[i] & 255;
	  }
	  return buf
	}

	function fromArrayView (arrayView) {
	  if (isInstance(arrayView, Uint8Array)) {
	    const copy = new Uint8Array(arrayView);
	    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
	  }
	  return fromArrayLike(arrayView)
	}

	function fromArrayBuffer (array, byteOffset, length) {
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('"offset" is outside of buffer bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('"length" is outside of buffer bounds')
	  }

	  let buf;
	  if (byteOffset === undefined && length === undefined) {
	    buf = new Uint8Array(array);
	  } else if (length === undefined) {
	    buf = new Uint8Array(array, byteOffset);
	  } else {
	    buf = new Uint8Array(array, byteOffset, length);
	  }

	  // Return an augmented `Uint8Array` instance
	  Object.setPrototypeOf(buf, Buffer.prototype);

	  return buf
	}

	function fromObject (obj) {
	  if (Buffer.isBuffer(obj)) {
	    const len = checked(obj.length) | 0;
	    const buf = createBuffer(len);

	    if (buf.length === 0) {
	      return buf
	    }

	    obj.copy(buf, 0, 0, len);
	    return buf
	  }

	  if (obj.length !== undefined) {
	    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
	      return createBuffer(0)
	    }
	    return fromArrayLike(obj)
	  }

	  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
	    return fromArrayLike(obj.data)
	  }
	}

	function checked (length) {
	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= K_MAX_LENGTH) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return b != null && b._isBuffer === true &&
	    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
	};

	Buffer.compare = function compare (a, b) {
	  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
	  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError(
	      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
	    )
	  }

	  if (a === b) return 0

	  let x = a.length;
	  let y = b.length;

	  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer.concat = function concat (list, length) {
	  if (!Array.isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  let i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  const buffer = Buffer.allocUnsafe(length);
	  let pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    let buf = list[i];
	    if (isInstance(buf, Uint8Array)) {
	      if (pos + buf.length > buffer.length) {
	        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
	        buf.copy(buffer, pos);
	      } else {
	        Uint8Array.prototype.set.call(
	          buffer,
	          buf,
	          pos
	        );
	      }
	    } else if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    } else {
	      buf.copy(buffer, pos);
	    }
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    throw new TypeError(
	      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
	      'Received type ' + typeof string
	    )
	  }

	  const len = string.length;
	  const mustMatch = (arguments.length > 2 && arguments[2] === true);
	  if (!mustMatch && len === 0) return 0

	  // Use a for loop to avoid recursion
	  let loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) {
	          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
	        }
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  let loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
	// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
	// reliably in a browserify context because there could be multiple different
	// copies of the 'buffer' package in use. This method works even for Buffer
	// instances that were created from another copy of the `buffer` package.
	// See: https://github.com/feross/buffer/issues/154
	Buffer.prototype._isBuffer = true;

	function swap (b, n, m) {
	  const i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16 () {
	  const len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (let i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer.prototype.swap32 = function swap32 () {
	  const len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (let i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer.prototype.swap64 = function swap64 () {
	  const len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (let i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer.prototype.toString = function toString () {
	  const length = this.length;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer.prototype.toLocaleString = Buffer.prototype.toString;

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};

	Buffer.prototype.inspect = function inspect () {
	  let str = '';
	  const max = exports.INSPECT_MAX_BYTES;
	  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
	  if (this.length > max) str += ' ... ';
	  return '<Buffer ' + str + '>'
	};
	if (customInspectSymbol) {
	  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (isInstance(target, Uint8Array)) {
	    target = Buffer.from(target, target.offset, target.byteLength);
	  }
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError(
	      'The "target" argument must be one of type Buffer or Uint8Array. ' +
	      'Received type ' + (typeof target)
	    )
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  let x = thisEnd - thisStart;
	  let y = end - start;
	  const len = Math.min(x, y);

	  const thisCopy = this.slice(thisStart, thisEnd);
	  const targetCopy = target.slice(start, end);

	  for (let i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (numberIsNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  let indexSize = 1;
	  let arrLength = arr.length;
	  let valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  let i;
	  if (dir) {
	    let foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      let found = true;
	      for (let j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  const remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  const strLen = string.length;

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  let i;
	  for (i = 0; i < length; ++i) {
	    const parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (numberIsNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset >>> 0;
	    if (isFinite(length)) {
	      length = length >>> 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  const remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  let loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return asciiWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  const res = [];

	  let i = start;
	  while (i < end) {
	    const firstByte = buf[i];
	    let codePoint = null;
	    let bytesPerSequence = (firstByte > 0xEF)
	      ? 4
	      : (firstByte > 0xDF)
	          ? 3
	          : (firstByte > 0xBF)
	              ? 2
	              : 1;

	    if (i + bytesPerSequence <= end) {
	      let secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	const MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  const len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  let res = '';
	  let i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  let ret = '';
	  end = Math.min(buf.length, end);

	  for (let i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  let ret = '';
	  end = Math.min(buf.length, end);

	  for (let i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  const len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  let out = '';
	  for (let i = start; i < end; ++i) {
	    out += hexSliceLookupTable[buf[i]];
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  const bytes = buf.slice(start, end);
	  let res = '';
	  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
	  for (let i = 0; i < bytes.length - 1; i += 2) {
	    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256));
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  const len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  const newBuf = this.subarray(start, end);
	  // Return an augmented `Uint8Array` instance
	  Object.setPrototypeOf(newBuf, Buffer.prototype);

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUintLE =
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  let val = this[offset];
	  let mul = 1;
	  let i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUintBE =
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  let val = this[offset + --byteLength];
	  let mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUint8 =
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer.prototype.readUint16LE =
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer.prototype.readUint16BE =
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer.prototype.readUint32LE =
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer.prototype.readUint32BE =
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
	  offset = offset >>> 0;
	  validateNumber(offset, 'offset');
	  const first = this[offset];
	  const last = this[offset + 7];
	  if (first === undefined || last === undefined) {
	    boundsError(offset, this.length - 8);
	  }

	  const lo = first +
	    this[++offset] * 2 ** 8 +
	    this[++offset] * 2 ** 16 +
	    this[++offset] * 2 ** 24;

	  const hi = this[++offset] +
	    this[++offset] * 2 ** 8 +
	    this[++offset] * 2 ** 16 +
	    last * 2 ** 24;

	  return BigInt(lo) + (BigInt(hi) << BigInt(32))
	});

	Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
	  offset = offset >>> 0;
	  validateNumber(offset, 'offset');
	  const first = this[offset];
	  const last = this[offset + 7];
	  if (first === undefined || last === undefined) {
	    boundsError(offset, this.length - 8);
	  }

	  const hi = first * 2 ** 24 +
	    this[++offset] * 2 ** 16 +
	    this[++offset] * 2 ** 8 +
	    this[++offset];

	  const lo = this[++offset] * 2 ** 24 +
	    this[++offset] * 2 ** 16 +
	    this[++offset] * 2 ** 8 +
	    last;

	  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
	});

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  let val = this[offset];
	  let mul = 1;
	  let i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  let i = byteLength;
	  let mul = 1;
	  let val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  const val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  const val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
	  offset = offset >>> 0;
	  validateNumber(offset, 'offset');
	  const first = this[offset];
	  const last = this[offset + 7];
	  if (first === undefined || last === undefined) {
	    boundsError(offset, this.length - 8);
	  }

	  const val = this[offset + 4] +
	    this[offset + 5] * 2 ** 8 +
	    this[offset + 6] * 2 ** 16 +
	    (last << 24); // Overflow

	  return (BigInt(val) << BigInt(32)) +
	    BigInt(first +
	    this[++offset] * 2 ** 8 +
	    this[++offset] * 2 ** 16 +
	    this[++offset] * 2 ** 24)
	});

	Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
	  offset = offset >>> 0;
	  validateNumber(offset, 'offset');
	  const first = this[offset];
	  const last = this[offset + 7];
	  if (first === undefined || last === undefined) {
	    boundsError(offset, this.length - 8);
	  }

	  const val = (first << 24) + // Overflow
	    this[++offset] * 2 ** 16 +
	    this[++offset] * 2 ** 8 +
	    this[++offset];

	  return (BigInt(val) << BigInt(32)) +
	    BigInt(this[++offset] * 2 ** 24 +
	    this[++offset] * 2 ** 16 +
	    this[++offset] * 2 ** 8 +
	    last)
	});

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754$1.read(this, offset, true, 23, 4)
	};

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754$1.read(this, offset, false, 23, 4)
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754$1.read(this, offset, true, 52, 8)
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754$1.read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUintLE =
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) {
	    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  let mul = 1;
	  let i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUintBE =
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) {
	    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  let i = byteLength - 1;
	  let mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUint8 =
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeUint16LE =
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  this[offset] = (value & 0xff);
	  this[offset + 1] = (value >>> 8);
	  return offset + 2
	};

	Buffer.prototype.writeUint16BE =
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  this[offset] = (value >>> 8);
	  this[offset + 1] = (value & 0xff);
	  return offset + 2
	};

	Buffer.prototype.writeUint32LE =
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  this[offset + 3] = (value >>> 24);
	  this[offset + 2] = (value >>> 16);
	  this[offset + 1] = (value >>> 8);
	  this[offset] = (value & 0xff);
	  return offset + 4
	};

	Buffer.prototype.writeUint32BE =
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  this[offset] = (value >>> 24);
	  this[offset + 1] = (value >>> 16);
	  this[offset + 2] = (value >>> 8);
	  this[offset + 3] = (value & 0xff);
	  return offset + 4
	};

	function wrtBigUInt64LE (buf, value, offset, min, max) {
	  checkIntBI(value, min, max, buf, offset, 7);

	  let lo = Number(value & BigInt(0xffffffff));
	  buf[offset++] = lo;
	  lo = lo >> 8;
	  buf[offset++] = lo;
	  lo = lo >> 8;
	  buf[offset++] = lo;
	  lo = lo >> 8;
	  buf[offset++] = lo;
	  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
	  buf[offset++] = hi;
	  hi = hi >> 8;
	  buf[offset++] = hi;
	  hi = hi >> 8;
	  buf[offset++] = hi;
	  hi = hi >> 8;
	  buf[offset++] = hi;
	  return offset
	}

	function wrtBigUInt64BE (buf, value, offset, min, max) {
	  checkIntBI(value, min, max, buf, offset, 7);

	  let lo = Number(value & BigInt(0xffffffff));
	  buf[offset + 7] = lo;
	  lo = lo >> 8;
	  buf[offset + 6] = lo;
	  lo = lo >> 8;
	  buf[offset + 5] = lo;
	  lo = lo >> 8;
	  buf[offset + 4] = lo;
	  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
	  buf[offset + 3] = hi;
	  hi = hi >> 8;
	  buf[offset + 2] = hi;
	  hi = hi >> 8;
	  buf[offset + 1] = hi;
	  hi = hi >> 8;
	  buf[offset] = hi;
	  return offset + 8
	}

	Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
	  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
	});

	Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
	  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
	});

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    const limit = Math.pow(2, (8 * byteLength) - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  let i = 0;
	  let mul = 1;
	  let sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    const limit = Math.pow(2, (8 * byteLength) - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  let i = byteLength - 1;
	  let mul = 1;
	  let sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  this[offset] = (value & 0xff);
	  this[offset + 1] = (value >>> 8);
	  return offset + 2
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  this[offset] = (value >>> 8);
	  this[offset + 1] = (value & 0xff);
	  return offset + 2
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  this[offset] = (value & 0xff);
	  this[offset + 1] = (value >>> 8);
	  this[offset + 2] = (value >>> 16);
	  this[offset + 3] = (value >>> 24);
	  return offset + 4
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  this[offset] = (value >>> 24);
	  this[offset + 1] = (value >>> 16);
	  this[offset + 2] = (value >>> 8);
	  this[offset + 3] = (value & 0xff);
	  return offset + 4
	};

	Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
	  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
	});

	Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
	  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
	});

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  const len = end - start;

	  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
	    // Use built-in when available, missing from IE11
	    this.copyWithin(targetStart, start, end);
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, end),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	    if (val.length === 1) {
	      const code = val.charCodeAt(0);
	      if ((encoding === 'utf8' && code < 128) ||
	          encoding === 'latin1') {
	        // Fast path: If `val` fits into a single byte, use that numeric value.
	        val = code;
	      }
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  } else if (typeof val === 'boolean') {
	    val = Number(val);
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  let i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    const bytes = Buffer.isBuffer(val)
	      ? val
	      : Buffer.from(val, encoding);
	    const len = bytes.length;
	    if (len === 0) {
	      throw new TypeError('The value "' + val +
	        '" is invalid for argument "value"')
	    }
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// CUSTOM ERRORS
	// =============

	// Simplified versions from Node, changed for Buffer-only usage
	const errors = {};
	function E (sym, getMessage, Base) {
	  errors[sym] = class NodeError extends Base {
	    constructor () {
	      super();

	      Object.defineProperty(this, 'message', {
	        value: getMessage.apply(this, arguments),
	        writable: true,
	        configurable: true
	      });

	      // Add the error code to the name to include it in the stack trace.
	      this.name = `${this.name} [${sym}]`;
	      // Access the stack to generate the error message including the error code
	      // from the name.
	      this.stack; // eslint-disable-line no-unused-expressions
	      // Reset the name to the actual name.
	      delete this.name;
	    }

	    get code () {
	      return sym
	    }

	    set code (value) {
	      Object.defineProperty(this, 'code', {
	        configurable: true,
	        enumerable: true,
	        value,
	        writable: true
	      });
	    }

	    toString () {
	      return `${this.name} [${sym}]: ${this.message}`
	    }
	  };
	}

	E('ERR_BUFFER_OUT_OF_BOUNDS',
	  function (name) {
	    if (name) {
	      return `${name} is outside of buffer bounds`
	    }

	    return 'Attempt to access memory outside buffer bounds'
	  }, RangeError);
	E('ERR_INVALID_ARG_TYPE',
	  function (name, actual) {
	    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
	  }, TypeError);
	E('ERR_OUT_OF_RANGE',
	  function (str, range, input) {
	    let msg = `The value of "${str}" is out of range.`;
	    let received = input;
	    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
	      received = addNumericalSeparator(String(input));
	    } else if (typeof input === 'bigint') {
	      received = String(input);
	      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
	        received = addNumericalSeparator(received);
	      }
	      received += 'n';
	    }
	    msg += ` It must be ${range}. Received ${received}`;
	    return msg
	  }, RangeError);

	function addNumericalSeparator (val) {
	  let res = '';
	  let i = val.length;
	  const start = val[0] === '-' ? 1 : 0;
	  for (; i >= start + 4; i -= 3) {
	    res = `_${val.slice(i - 3, i)}${res}`;
	  }
	  return `${val.slice(0, i)}${res}`
	}

	// CHECK FUNCTIONS
	// ===============

	function checkBounds (buf, offset, byteLength) {
	  validateNumber(offset, 'offset');
	  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
	    boundsError(offset, buf.length - (byteLength + 1));
	  }
	}

	function checkIntBI (value, min, max, buf, offset, byteLength) {
	  if (value > max || value < min) {
	    const n = typeof min === 'bigint' ? 'n' : '';
	    let range;
	    {
	      if (min === 0 || min === BigInt(0)) {
	        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
	      } else {
	        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
	                `${(byteLength + 1) * 8 - 1}${n}`;
	      }
	    }
	    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
	  }
	  checkBounds(buf, offset, byteLength);
	}

	function validateNumber (value, name) {
	  if (typeof value !== 'number') {
	    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
	  }
	}

	function boundsError (value, length, type) {
	  if (Math.floor(value) !== value) {
	    validateNumber(value, type);
	    throw new errors.ERR_OUT_OF_RANGE('offset', 'an integer', value)
	  }

	  if (length < 0) {
	    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
	  }

	  throw new errors.ERR_OUT_OF_RANGE('offset',
	                                    `>= ${0} and <= ${length}`,
	                                    value)
	}

	// HELPER FUNCTIONS
	// ================

	const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node takes equal signs as end of the Base64 encoding
	  str = str.split('=')[0];
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = str.trim().replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  let codePoint;
	  const length = string.length;
	  let leadSurrogate = null;
	  const bytes = [];

	  for (let i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  const byteArray = [];
	  for (let i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  let c, hi, lo;
	  const byteArray = [];
	  for (let i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  let i;
	  for (i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
	// the `instanceof` check but they should be treated as of that type.
	// See: https://github.com/feross/buffer/issues/166
	function isInstance (obj, type) {
	  return obj instanceof type ||
	    (obj != null && obj.constructor != null && obj.constructor.name != null &&
	      obj.constructor.name === type.name)
	}
	function numberIsNaN (obj) {
	  // For IE11 support
	  return obj !== obj // eslint-disable-line no-self-compare
	}

	// Create lookup table for `toString('hex')`
	// See: https://github.com/feross/buffer/issues/219
	const hexSliceLookupTable = (function () {
	  const alphabet = '0123456789abcdef';
	  const table = new Array(256);
	  for (let i = 0; i < 16; ++i) {
	    const i16 = i * 16;
	    for (let j = 0; j < 16; ++j) {
	      table[i16 + j] = alphabet[i] + alphabet[j];
	    }
	  }
	  return table
	})();

	// Return not function with Error if BigInt not supported
	function defineBigIntMethod (fn) {
	  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
	}

	function BufferBigIntNotDefined () {
	  throw new Error('BigInt not supported')
	} 
} (buffer));

window.Buffer = buffer.Buffer;

function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$1(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}

const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = className => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = func => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = config => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  const parseClassName = className => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return className => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const sortModifiers = modifiers => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = mix => {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = key => {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = value => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = value => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = value => getIsArbitraryValue(value, 'number', isNumber);
const isInteger = value => Boolean(value) && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isTshirtSize = value => tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
const isArbitrarySize = value => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
const isArbitraryImage = value => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, '', isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
};
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

function cn(...inputs) {
  return twMerge(clsx$1(inputs));
}

const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// packages/core/primitive/src/primitive.tsx
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// packages/react/context/src/createContext.tsx
function createContextScope$2(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes$2(createScope, ...createContextScopeDeps)];
}
function composeContextScopes$2(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// packages/react/context/src/createContext.tsx
function createContextScope$1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    }
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName][index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes$1(createScope, ...createContextScopeDeps)];
}
function composeContextScopes$1(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// packages/react/compose-refs/src/composeRefs.tsx
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}

// packages/react/slot/src/Slot.tsx
var Slot = reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = reactExports.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
        return reactExports.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (reactExports.isValidElement(children)) {
    const childrenRef = getElementRef$1(children);
    return reactExports.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
function isSlottable(child) {
  return reactExports.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = createContextScope$1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React.useRef(null);
    const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection,
    createCollectionScope
  ];
}

// packages/react/context/src/createContext.tsx
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    }
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName][index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
var useLayoutEffect2 = Boolean(globalThis?.document) ? reactExports.useLayoutEffect : () => {
};

// packages/react/id/src/id.tsx
var useReactId = React$1["useId".toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// packages/react/primitive/src/Primitive.tsx
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}

// packages/react/use-callback-ref/src/useCallbackRef.tsx
function useCallbackRef(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// packages/react/use-controllable-state/src/useControllableState.tsx
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = reactExports.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = reactExports.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = reactExports.useRef(value);
  const handleChange = useCallbackRef(onChange);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

// packages/react/direction/src/Direction.tsx
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope$1]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection$1.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection$1(__scopeRovingFocusGroup);
  const isClickFocusRef = reactExports.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: reactExports.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: reactExports.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst$1(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection$1(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    reactExports.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collection$1.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst$1(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst$1(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root$4 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}

// packages/react/presence/src/Presence.tsx
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef({});
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope$2(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root$4,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2$1 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;

const Tabs = Root2$1;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config)=>{
    return (props)=>{
        var ref;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants , defaultVariants  } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1)=>{
            let { class: cvClass , className: cvClassName , ...compoundVariantOptions } = param1;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = reactExports.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
const AlertTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// packages/react/separator/src/Separator.tsx
var NAME$2 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME$2;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root$3 = Separator$1;

const Separator = reactExports.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root$3,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = Root$3.displayName;

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChartPie = createLucideIcon("ChartPie", [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const History = createLucideIcon("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Key = createLucideIcon("Key", [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LogOut = createLucideIcon("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Moon = createLucideIcon("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Sun = createLucideIcon("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const TriangleAlert = createLucideIcon("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Wallet = createLucideIcon("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]);

var src = {};

var sha256 = {};

var sha2 = {};

var _md = {};

var utils = {};

var crypto$1 = {};

Object.defineProperty(crypto$1, "__esModule", { value: true });
crypto$1.crypto = void 0;
crypto$1.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

(function (exports) {
	/**
	 * Utilities for hex, bytes, CSPRNG.
	 * @module
	 */
	/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.Hash = exports.nextTick = exports.swap32IfBE = exports.byteSwapIfBE = exports.swap8IfBE = exports.isLE = void 0;
	exports.isBytes = isBytes;
	exports.anumber = anumber;
	exports.abytes = abytes;
	exports.ahash = ahash;
	exports.aexists = aexists;
	exports.aoutput = aoutput;
	exports.u8 = u8;
	exports.u32 = u32;
	exports.clean = clean;
	exports.createView = createView;
	exports.rotr = rotr;
	exports.rotl = rotl;
	exports.byteSwap = byteSwap;
	exports.byteSwap32 = byteSwap32;
	exports.bytesToHex = bytesToHex;
	exports.hexToBytes = hexToBytes;
	exports.asyncLoop = asyncLoop;
	exports.utf8ToBytes = utf8ToBytes;
	exports.bytesToUtf8 = bytesToUtf8;
	exports.toBytes = toBytes;
	exports.kdfInputToBytes = kdfInputToBytes;
	exports.concatBytes = concatBytes;
	exports.checkOpts = checkOpts;
	exports.createHasher = createHasher;
	exports.createOptHasher = createOptHasher;
	exports.createXOFer = createXOFer;
	exports.randomBytes = randomBytes;
	// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
	// node.js versions earlier than v19 don't declare it in global scope.
	// For node.js, package.json#exports field mapping rewrites import
	// from `crypto` to `cryptoNode`, which imports native module.
	// Makes the utils un-importable in browsers without a bundler.
	// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
	const crypto_1 = crypto$1;
	/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */
	function isBytes(a) {
	    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
	}
	/** Asserts something is positive integer. */
	function anumber(n) {
	    if (!Number.isSafeInteger(n) || n < 0)
	        throw new Error('positive integer expected, got ' + n);
	}
	/** Asserts something is Uint8Array. */
	function abytes(b, ...lengths) {
	    if (!isBytes(b))
	        throw new Error('Uint8Array expected');
	    if (lengths.length > 0 && !lengths.includes(b.length))
	        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
	}
	/** Asserts something is hash */
	function ahash(h) {
	    if (typeof h !== 'function' || typeof h.create !== 'function')
	        throw new Error('Hash should be wrapped by utils.createHasher');
	    anumber(h.outputLen);
	    anumber(h.blockLen);
	}
	/** Asserts a hash instance has not been destroyed / finished */
	function aexists(instance, checkFinished = true) {
	    if (instance.destroyed)
	        throw new Error('Hash instance has been destroyed');
	    if (checkFinished && instance.finished)
	        throw new Error('Hash#digest() has already been called');
	}
	/** Asserts output is properly-sized byte array */
	function aoutput(out, instance) {
	    abytes(out);
	    const min = instance.outputLen;
	    if (out.length < min) {
	        throw new Error('digestInto() expects output buffer of length at least ' + min);
	    }
	}
	/** Cast u8 / u16 / u32 to u8. */
	function u8(arr) {
	    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
	}
	/** Cast u8 / u16 / u32 to u32. */
	function u32(arr) {
	    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
	}
	/** Zeroize a byte array. Warning: JS provides no guarantees. */
	function clean(...arrays) {
	    for (let i = 0; i < arrays.length; i++) {
	        arrays[i].fill(0);
	    }
	}
	/** Create DataView of an array for easy byte-level manipulation. */
	function createView(arr) {
	    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
	}
	/** The rotate right (circular right shift) operation for uint32 */
	function rotr(word, shift) {
	    return (word << (32 - shift)) | (word >>> shift);
	}
	/** The rotate left (circular left shift) operation for uint32 */
	function rotl(word, shift) {
	    return (word << shift) | ((word >>> (32 - shift)) >>> 0);
	}
	/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
	exports.isLE = (() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)();
	/** The byte swap operation for uint32 */
	function byteSwap(word) {
	    return (((word << 24) & 0xff000000) |
	        ((word << 8) & 0xff0000) |
	        ((word >>> 8) & 0xff00) |
	        ((word >>> 24) & 0xff));
	}
	/** Conditionally byte swap if on a big-endian platform */
	exports.swap8IfBE = exports.isLE
	    ? (n) => n
	    : (n) => byteSwap(n);
	/** @deprecated */
	exports.byteSwapIfBE = exports.swap8IfBE;
	/** In place byte swap for Uint32Array */
	function byteSwap32(arr) {
	    for (let i = 0; i < arr.length; i++) {
	        arr[i] = byteSwap(arr[i]);
	    }
	    return arr;
	}
	exports.swap32IfBE = exports.isLE
	    ? (u) => u
	    : byteSwap32;
	// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
	const hasHexBuiltin = /* @__PURE__ */ (() => 
	// @ts-ignore
	typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
	// Array where index 0xf0 (240) is mapped to string 'f0'
	const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
	/**
	 * Convert byte array to hex string. Uses built-in function, when available.
	 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
	 */
	function bytesToHex(bytes) {
	    abytes(bytes);
	    // @ts-ignore
	    if (hasHexBuiltin)
	        return bytes.toHex();
	    // pre-caching improves the speed 6x
	    let hex = '';
	    for (let i = 0; i < bytes.length; i++) {
	        hex += hexes[bytes[i]];
	    }
	    return hex;
	}
	// We use optimized technique to convert hex string to byte array
	const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
	function asciiToBase16(ch) {
	    if (ch >= asciis._0 && ch <= asciis._9)
	        return ch - asciis._0; // '2' => 50-48
	    if (ch >= asciis.A && ch <= asciis.F)
	        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
	    if (ch >= asciis.a && ch <= asciis.f)
	        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
	    return;
	}
	/**
	 * Convert hex string to byte array. Uses built-in function, when available.
	 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
	 */
	function hexToBytes(hex) {
	    if (typeof hex !== 'string')
	        throw new Error('hex string expected, got ' + typeof hex);
	    // @ts-ignore
	    if (hasHexBuiltin)
	        return Uint8Array.fromHex(hex);
	    const hl = hex.length;
	    const al = hl / 2;
	    if (hl % 2)
	        throw new Error('hex string expected, got unpadded hex of length ' + hl);
	    const array = new Uint8Array(al);
	    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
	        const n1 = asciiToBase16(hex.charCodeAt(hi));
	        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
	        if (n1 === undefined || n2 === undefined) {
	            const char = hex[hi] + hex[hi + 1];
	            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
	        }
	        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
	    }
	    return array;
	}
	/**
	 * There is no setImmediate in browser and setTimeout is slow.
	 * Call of async fn will return Promise, which will be fullfiled only on
	 * next scheduler queue processing step and this is exactly what we need.
	 */
	const nextTick = async () => { };
	exports.nextTick = nextTick;
	/** Returns control to thread each 'tick' ms to avoid blocking. */
	async function asyncLoop(iters, tick, cb) {
	    let ts = Date.now();
	    for (let i = 0; i < iters; i++) {
	        cb(i);
	        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
	        const diff = Date.now() - ts;
	        if (diff >= 0 && diff < tick)
	            continue;
	        await (0, exports.nextTick)();
	        ts += diff;
	    }
	}
	/**
	 * Converts string to bytes using UTF8 encoding.
	 * @example utf8ToBytes('abc') // Uint8Array.from([97, 98, 99])
	 */
	function utf8ToBytes(str) {
	    if (typeof str !== 'string')
	        throw new Error('string expected');
	    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
	}
	/**
	 * Converts bytes to string using UTF8 encoding.
	 * @example bytesToUtf8(Uint8Array.from([97, 98, 99])) // 'abc'
	 */
	function bytesToUtf8(bytes) {
	    return new TextDecoder().decode(bytes);
	}
	/**
	 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
	 * Warning: when Uint8Array is passed, it would NOT get copied.
	 * Keep in mind for future mutable operations.
	 */
	function toBytes(data) {
	    if (typeof data === 'string')
	        data = utf8ToBytes(data);
	    abytes(data);
	    return data;
	}
	/**
	 * Helper for KDFs: consumes uint8array or string.
	 * When string is passed, does utf8 decoding, using TextDecoder.
	 */
	function kdfInputToBytes(data) {
	    if (typeof data === 'string')
	        data = utf8ToBytes(data);
	    abytes(data);
	    return data;
	}
	/** Copies several Uint8Arrays into one. */
	function concatBytes(...arrays) {
	    let sum = 0;
	    for (let i = 0; i < arrays.length; i++) {
	        const a = arrays[i];
	        abytes(a);
	        sum += a.length;
	    }
	    const res = new Uint8Array(sum);
	    for (let i = 0, pad = 0; i < arrays.length; i++) {
	        const a = arrays[i];
	        res.set(a, pad);
	        pad += a.length;
	    }
	    return res;
	}
	function checkOpts(defaults, opts) {
	    if (opts !== undefined && {}.toString.call(opts) !== '[object Object]')
	        throw new Error('options should be object or undefined');
	    const merged = Object.assign(defaults, opts);
	    return merged;
	}
	/** For runtime check if class implements interface */
	class Hash {
	}
	exports.Hash = Hash;
	/** Wraps hash function, creating an interface on top of it */
	function createHasher(hashCons) {
	    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
	    const tmp = hashCons();
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = () => hashCons();
	    return hashC;
	}
	function createOptHasher(hashCons) {
	    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
	    const tmp = hashCons({});
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = (opts) => hashCons(opts);
	    return hashC;
	}
	function createXOFer(hashCons) {
	    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
	    const tmp = hashCons({});
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = (opts) => hashCons(opts);
	    return hashC;
	}
	exports.wrapConstructor = createHasher;
	exports.wrapConstructorWithOpts = createOptHasher;
	exports.wrapXOFConstructorWithOpts = createXOFer;
	/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
	function randomBytes(bytesLength = 32) {
	    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
	        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
	    }
	    // Legacy Node.js compatibility
	    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
	        return Uint8Array.from(crypto_1.crypto.randomBytes(bytesLength));
	    }
	    throw new Error('crypto.getRandomValues must be defined');
	}
	
} (utils));

Object.defineProperty(_md, "__esModule", { value: true });
_md.SHA512_IV = _md.SHA384_IV = _md.SHA224_IV = _md.SHA256_IV = _md.HashMD = void 0;
_md.setBigUint64 = setBigUint64;
_md.Chi = Chi;
_md.Maj = Maj;
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */
const utils_ts_1$2 = utils;
/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */
function Chi(a, b, c) {
    return (a & b) ^ (~a & c);
}
/** Majority function, true if any two inputs is true. */
function Maj(a, b, c) {
    return (a & b) ^ (a & c) ^ (b & c);
}
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */
class HashMD extends utils_ts_1$2.Hash {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_ts_1$2.createView)(this.buffer);
    }
    update(data) {
        (0, utils_ts_1$2.aexists)(this);
        data = (0, utils_ts_1$2.toBytes)(data);
        (0, utils_ts_1$2.abytes)(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_ts_1$2.createView)(data);
                for (; blockLen <= len - pos; pos += blockLen)
                    this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, utils_ts_1$2.aexists)(this);
        (0, utils_ts_1$2.aoutput)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, utils_ts_1$2.clean)(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_ts_1$2.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen)
            to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
_md.HashMD = HashMD;
/**
 * Initial SHA-2 state: fractional parts of square roots of first 16 primes 2..53.
 * Check out `test/misc/sha2-gen-iv.js` for recomputation guide.
 */
/** Initial SHA256 state. Bits 0..32 of frac part of sqrt of primes 2..19 */
_md.SHA256_IV = Uint32Array.from([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
]);
/** Initial SHA224 state. Bits 32..64 of frac part of sqrt of primes 23..53 */
_md.SHA224_IV = Uint32Array.from([
    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4,
]);
/** Initial SHA384 state. Bits 0..64 of frac part of sqrt of primes 23..53 */
_md.SHA384_IV = Uint32Array.from([
    0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939,
    0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
]);
/** Initial SHA512 state. Bits 0..64 of frac part of sqrt of primes 2..19 */
_md.SHA512_IV = Uint32Array.from([
    0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1,
    0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
]);

var _u64 = {};

Object.defineProperty(_u64, "__esModule", { value: true });
_u64.toBig = _u64.shrSL = _u64.shrSH = _u64.rotrSL = _u64.rotrSH = _u64.rotrBL = _u64.rotrBH = _u64.rotr32L = _u64.rotr32H = _u64.rotlSL = _u64.rotlSH = _u64.rotlBL = _u64.rotlBH = _u64.add5L = _u64.add5H = _u64.add4L = _u64.add4H = _u64.add3L = _u64.add3H = void 0;
_u64.add = add;
_u64.fromBig = fromBig;
_u64.split = split;
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i = 0; i < len; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
_u64.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
_u64.shrSH = shrSH;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
_u64.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
_u64.rotrSH = rotrSH;
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
_u64.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
_u64.rotrBH = rotrBH;
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
_u64.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
_u64.rotr32H = rotr32H;
const rotr32L = (h, _l) => h;
_u64.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
_u64.rotlSH = rotlSH;
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
_u64.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
_u64.rotlBH = rotlBH;
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
_u64.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
_u64.add3L = add3L;
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
_u64.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
_u64.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
_u64.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
_u64.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
_u64.add5H = add5H;
// prettier-ignore
const u64$1 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
_u64.default = u64$1;

Object.defineProperty(sha2, "__esModule", { value: true });
sha2.sha512_224 = sha2.sha512_256 = sha2.sha384 = sha2.sha512 = sha2.sha224 = sha2.sha256 = sha2.SHA512_256 = sha2.SHA512_224 = sha2.SHA384 = sha2.SHA512 = sha2.SHA224 = sha2.SHA256 = void 0;
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */
const _md_ts_1 = _md;
const u64 = _u64;
const utils_ts_1$1 = utils;
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */
// prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _md_ts_1.HashMD {
    constructor(outputLen = 32) {
        super(64, outputLen, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = _md_ts_1.SHA256_IV[0] | 0;
        this.B = _md_ts_1.SHA256_IV[1] | 0;
        this.C = _md_ts_1.SHA256_IV[2] | 0;
        this.D = _md_ts_1.SHA256_IV[3] | 0;
        this.E = _md_ts_1.SHA256_IV[4] | 0;
        this.F = _md_ts_1.SHA256_IV[5] | 0;
        this.G = _md_ts_1.SHA256_IV[6] | 0;
        this.H = _md_ts_1.SHA256_IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_ts_1$1.rotr)(W15, 7) ^ (0, utils_ts_1$1.rotr)(W15, 18) ^ (W15 >>> 3);
            const s1 = (0, utils_ts_1$1.rotr)(W2, 17) ^ (0, utils_ts_1$1.rotr)(W2, 19) ^ (W2 >>> 10);
            SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = (0, utils_ts_1$1.rotr)(E, 6) ^ (0, utils_ts_1$1.rotr)(E, 11) ^ (0, utils_ts_1$1.rotr)(E, 25);
            const T1 = (H + sigma1 + (0, _md_ts_1.Chi)(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const sigma0 = (0, utils_ts_1$1.rotr)(A, 2) ^ (0, utils_ts_1$1.rotr)(A, 13) ^ (0, utils_ts_1$1.rotr)(A, 22);
            const T2 = (sigma0 + (0, _md_ts_1.Maj)(A, B, C)) | 0;
            H = G;
            G = F;
            F = E;
            E = (D + T1) | 0;
            D = C;
            C = B;
            B = A;
            A = (T1 + T2) | 0;
        }
        // Add the compressed chunk to the current hash value
        A = (A + this.A) | 0;
        B = (B + this.B) | 0;
        C = (C + this.C) | 0;
        D = (D + this.D) | 0;
        E = (E + this.E) | 0;
        F = (F + this.F) | 0;
        G = (G + this.G) | 0;
        H = (H + this.H) | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, utils_ts_1$1.clean)(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, utils_ts_1$1.clean)(this.buffer);
    }
}
sha2.SHA256 = SHA256;
class SHA224 extends SHA256 {
    constructor() {
        super(28);
        this.A = _md_ts_1.SHA224_IV[0] | 0;
        this.B = _md_ts_1.SHA224_IV[1] | 0;
        this.C = _md_ts_1.SHA224_IV[2] | 0;
        this.D = _md_ts_1.SHA224_IV[3] | 0;
        this.E = _md_ts_1.SHA224_IV[4] | 0;
        this.F = _md_ts_1.SHA224_IV[5] | 0;
        this.G = _md_ts_1.SHA224_IV[6] | 0;
        this.H = _md_ts_1.SHA224_IV[7] | 0;
    }
}
sha2.SHA224 = SHA224;
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (() => u64.split([
    '0x428a2f98d728ae22', '0x7137449123ef65cd', '0xb5c0fbcfec4d3b2f', '0xe9b5dba58189dbbc',
    '0x3956c25bf348b538', '0x59f111f1b605d019', '0x923f82a4af194f9b', '0xab1c5ed5da6d8118',
    '0xd807aa98a3030242', '0x12835b0145706fbe', '0x243185be4ee4b28c', '0x550c7dc3d5ffb4e2',
    '0x72be5d74f27b896f', '0x80deb1fe3b1696b1', '0x9bdc06a725c71235', '0xc19bf174cf692694',
    '0xe49b69c19ef14ad2', '0xefbe4786384f25e3', '0x0fc19dc68b8cd5b5', '0x240ca1cc77ac9c65',
    '0x2de92c6f592b0275', '0x4a7484aa6ea6e483', '0x5cb0a9dcbd41fbd4', '0x76f988da831153b5',
    '0x983e5152ee66dfab', '0xa831c66d2db43210', '0xb00327c898fb213f', '0xbf597fc7beef0ee4',
    '0xc6e00bf33da88fc2', '0xd5a79147930aa725', '0x06ca6351e003826f', '0x142929670a0e6e70',
    '0x27b70a8546d22ffc', '0x2e1b21385c26c926', '0x4d2c6dfc5ac42aed', '0x53380d139d95b3df',
    '0x650a73548baf63de', '0x766a0abb3c77b2a8', '0x81c2c92e47edaee6', '0x92722c851482353b',
    '0xa2bfe8a14cf10364', '0xa81a664bbc423001', '0xc24b8b70d0f89791', '0xc76c51a30654be30',
    '0xd192e819d6ef5218', '0xd69906245565a910', '0xf40e35855771202a', '0x106aa07032bbd1b8',
    '0x19a4c116b8d2d0c8', '0x1e376c085141ab53', '0x2748774cdf8eeb99', '0x34b0bcb5e19b48a8',
    '0x391c0cb3c5c95a63', '0x4ed8aa4ae3418acb', '0x5b9cca4f7763e373', '0x682e6ff3d6b2b8a3',
    '0x748f82ee5defb2fc', '0x78a5636f43172f60', '0x84c87814a1f0ab72', '0x8cc702081a6439ec',
    '0x90befffa23631e28', '0xa4506cebde82bde9', '0xbef9a3f7b2c67915', '0xc67178f2e372532b',
    '0xca273eceea26619c', '0xd186b8c721c0c207', '0xeada7dd6cde0eb1e', '0xf57d4f7fee6ed178',
    '0x06f067aa72176fba', '0x0a637dc5a2c898a6', '0x113f9804bef90dae', '0x1b710b35131c471b',
    '0x28db77f523047d84', '0x32caab7b40c72493', '0x3c9ebe0a15c9bebc', '0x431d67c49c100d4c',
    '0x4cc5d4becb3e42b6', '0x597f299cfc657e2a', '0x5fcb6fab3ad6faec', '0x6c44198c4a475817'
].map(n => BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
const SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends _md_ts_1.HashMD {
    constructor(outputLen = 64) {
        super(128, outputLen, 16, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = _md_ts_1.SHA512_IV[0] | 0;
        this.Al = _md_ts_1.SHA512_IV[1] | 0;
        this.Bh = _md_ts_1.SHA512_IV[2] | 0;
        this.Bl = _md_ts_1.SHA512_IV[3] | 0;
        this.Ch = _md_ts_1.SHA512_IV[4] | 0;
        this.Cl = _md_ts_1.SHA512_IV[5] | 0;
        this.Dh = _md_ts_1.SHA512_IV[6] | 0;
        this.Dl = _md_ts_1.SHA512_IV[7] | 0;
        this.Eh = _md_ts_1.SHA512_IV[8] | 0;
        this.El = _md_ts_1.SHA512_IV[9] | 0;
        this.Fh = _md_ts_1.SHA512_IV[10] | 0;
        this.Fl = _md_ts_1.SHA512_IV[11] | 0;
        this.Gh = _md_ts_1.SHA512_IV[12] | 0;
        this.Gl = _md_ts_1.SHA512_IV[13] | 0;
        this.Hh = _md_ts_1.SHA512_IV[14] | 0;
        this.Hl = _md_ts_1.SHA512_IV[15] | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32((offset += 4));
        }
        for (let i = 16; i < 80; i++) {
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
            const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
            const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for (let i = 0; i < 80; i++) {
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
            const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = (Eh & Fh) ^ (~Eh & Gh);
            const CHIl = (El & Fl) ^ (~El & Gl);
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
            const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
            const MAJh = (Ah & Bh) ^ (Ah & Ch) ^ (Bh & Ch);
            const MAJl = (Al & Bl) ^ (Al & Cl) ^ (Bl & Cl);
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = u64.add3L(T1l, sigma0l, MAJl);
            Ah = u64.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, utils_ts_1$1.clean)(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, utils_ts_1$1.clean)(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
sha2.SHA512 = SHA512;
class SHA384 extends SHA512 {
    constructor() {
        super(48);
        this.Ah = _md_ts_1.SHA384_IV[0] | 0;
        this.Al = _md_ts_1.SHA384_IV[1] | 0;
        this.Bh = _md_ts_1.SHA384_IV[2] | 0;
        this.Bl = _md_ts_1.SHA384_IV[3] | 0;
        this.Ch = _md_ts_1.SHA384_IV[4] | 0;
        this.Cl = _md_ts_1.SHA384_IV[5] | 0;
        this.Dh = _md_ts_1.SHA384_IV[6] | 0;
        this.Dl = _md_ts_1.SHA384_IV[7] | 0;
        this.Eh = _md_ts_1.SHA384_IV[8] | 0;
        this.El = _md_ts_1.SHA384_IV[9] | 0;
        this.Fh = _md_ts_1.SHA384_IV[10] | 0;
        this.Fl = _md_ts_1.SHA384_IV[11] | 0;
        this.Gh = _md_ts_1.SHA384_IV[12] | 0;
        this.Gl = _md_ts_1.SHA384_IV[13] | 0;
        this.Hh = _md_ts_1.SHA384_IV[14] | 0;
        this.Hl = _md_ts_1.SHA384_IV[15] | 0;
    }
}
sha2.SHA384 = SHA384;
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */
/** SHA512/224 IV */
const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8, 0x19544da2, 0x73e19966, 0x89dcd4d6, 0x1dfab7ae, 0x32ff9c82, 0x679dd514, 0x582f9fcf,
    0x0f6d2b69, 0x7bd44da8, 0x77e36f73, 0x04c48942, 0x3f9d85a8, 0x6a1d36c8, 0x1112e6ad, 0x91d692a1,
]);
/** SHA512/256 IV */
const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194, 0xfc2bf72c, 0x9f555fa3, 0xc84c64c2, 0x2393b86b, 0x6f53b151, 0x96387719, 0x5940eabd,
    0x96283ee2, 0xa88effe3, 0xbe5e1e25, 0x53863992, 0x2b0199fc, 0x2c85b8aa, 0x0eb72ddc, 0x81c52ca2,
]);
class SHA512_224 extends SHA512 {
    constructor() {
        super(28);
        this.Ah = T224_IV[0] | 0;
        this.Al = T224_IV[1] | 0;
        this.Bh = T224_IV[2] | 0;
        this.Bl = T224_IV[3] | 0;
        this.Ch = T224_IV[4] | 0;
        this.Cl = T224_IV[5] | 0;
        this.Dh = T224_IV[6] | 0;
        this.Dl = T224_IV[7] | 0;
        this.Eh = T224_IV[8] | 0;
        this.El = T224_IV[9] | 0;
        this.Fh = T224_IV[10] | 0;
        this.Fl = T224_IV[11] | 0;
        this.Gh = T224_IV[12] | 0;
        this.Gl = T224_IV[13] | 0;
        this.Hh = T224_IV[14] | 0;
        this.Hl = T224_IV[15] | 0;
    }
}
sha2.SHA512_224 = SHA512_224;
class SHA512_256 extends SHA512 {
    constructor() {
        super(32);
        this.Ah = T256_IV[0] | 0;
        this.Al = T256_IV[1] | 0;
        this.Bh = T256_IV[2] | 0;
        this.Bl = T256_IV[3] | 0;
        this.Ch = T256_IV[4] | 0;
        this.Cl = T256_IV[5] | 0;
        this.Dh = T256_IV[6] | 0;
        this.Dl = T256_IV[7] | 0;
        this.Eh = T256_IV[8] | 0;
        this.El = T256_IV[9] | 0;
        this.Fh = T256_IV[10] | 0;
        this.Fl = T256_IV[11] | 0;
        this.Gh = T256_IV[12] | 0;
        this.Gl = T256_IV[13] | 0;
        this.Hh = T256_IV[14] | 0;
        this.Hl = T256_IV[15] | 0;
    }
}
sha2.SHA512_256 = SHA512_256;
/**
 * SHA2-256 hash function from RFC 4634.
 *
 * It is the fastest JS hash, even faster than Blake3.
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 */
sha2.sha256 = (0, utils_ts_1$1.createHasher)(() => new SHA256());
/** SHA2-224 hash function from RFC 4634 */
sha2.sha224 = (0, utils_ts_1$1.createHasher)(() => new SHA224());
/** SHA2-512 hash function from RFC 4634. */
sha2.sha512 = (0, utils_ts_1$1.createHasher)(() => new SHA512());
/** SHA2-384 hash function from RFC 4634. */
sha2.sha384 = (0, utils_ts_1$1.createHasher)(() => new SHA384());
/**
 * SHA2-512/256 "truncated" hash function, with improved resistance to length extension attacks.
 * See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
 */
sha2.sha512_256 = (0, utils_ts_1$1.createHasher)(() => new SHA512_256());
/**
 * SHA2-512/224 "truncated" hash function, with improved resistance to length extension attacks.
 * See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
 */
sha2.sha512_224 = (0, utils_ts_1$1.createHasher)(() => new SHA512_224());

Object.defineProperty(sha256, "__esModule", { value: true });
sha256.sha224 = sha256.SHA224 = sha256.sha256 = sha256.SHA256 = void 0;
/**
 * SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
 *
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 *
 * Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 * @deprecated
 */
const sha2_ts_1$1 = sha2;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha256.SHA256 = sha2_ts_1$1.SHA256;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha256.sha256 = sha2_ts_1$1.sha256;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha256.SHA224 = sha2_ts_1$1.SHA224;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha256.sha224 = sha2_ts_1$1.sha224;

var sha512 = {};

Object.defineProperty(sha512, "__esModule", { value: true });
sha512.sha512_256 = sha512.SHA512_256 = sha512.sha512_224 = sha512.SHA512_224 = sha512.sha384 = sha512.SHA384 = sha512.sha512 = sha512.SHA512 = void 0;
/**
 * SHA2-512 a.k.a. sha512 and sha384. It is slower than sha256 in js because u64 operations are slow.
 *
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [the paper on truncated SHA512/256](https://eprint.iacr.org/2010/548.pdf).
 * @module
 * @deprecated
 */
const sha2_ts_1 = sha2;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.SHA512 = sha2_ts_1.SHA512;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.sha512 = sha2_ts_1.sha512;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.SHA384 = sha2_ts_1.SHA384;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.sha384 = sha2_ts_1.sha384;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.SHA512_224 = sha2_ts_1.SHA512_224;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.sha512_224 = sha2_ts_1.sha512_224;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.SHA512_256 = sha2_ts_1.SHA512_256;
/** @deprecated Use import from `noble/hashes/sha2` module */
sha512.sha512_256 = sha2_ts_1.sha512_256;

var pbkdf2$1 = {};

var hmac = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hmac = exports.HMAC = void 0;
	/**
	 * HMAC: RFC2104 message authentication code.
	 * @module
	 */
	const utils_ts_1 = utils;
	class HMAC extends utils_ts_1.Hash {
	    constructor(hash, _key) {
	        super();
	        this.finished = false;
	        this.destroyed = false;
	        (0, utils_ts_1.ahash)(hash);
	        const key = (0, utils_ts_1.toBytes)(_key);
	        this.iHash = hash.create();
	        if (typeof this.iHash.update !== 'function')
	            throw new Error('Expected instance of class which extends utils.Hash');
	        this.blockLen = this.iHash.blockLen;
	        this.outputLen = this.iHash.outputLen;
	        const blockLen = this.blockLen;
	        const pad = new Uint8Array(blockLen);
	        // blockLen can be bigger than outputLen
	        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
	        for (let i = 0; i < pad.length; i++)
	            pad[i] ^= 0x36;
	        this.iHash.update(pad);
	        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
	        this.oHash = hash.create();
	        // Undo internal XOR && apply outer XOR
	        for (let i = 0; i < pad.length; i++)
	            pad[i] ^= 0x36 ^ 0x5c;
	        this.oHash.update(pad);
	        (0, utils_ts_1.clean)(pad);
	    }
	    update(buf) {
	        (0, utils_ts_1.aexists)(this);
	        this.iHash.update(buf);
	        return this;
	    }
	    digestInto(out) {
	        (0, utils_ts_1.aexists)(this);
	        (0, utils_ts_1.abytes)(out, this.outputLen);
	        this.finished = true;
	        this.iHash.digestInto(out);
	        this.oHash.update(out);
	        this.oHash.digestInto(out);
	        this.destroy();
	    }
	    digest() {
	        const out = new Uint8Array(this.oHash.outputLen);
	        this.digestInto(out);
	        return out;
	    }
	    _cloneInto(to) {
	        // Create new instance without calling constructor since key already in state and we don't know it.
	        to || (to = Object.create(Object.getPrototypeOf(this), {}));
	        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
	        to = to;
	        to.finished = finished;
	        to.destroyed = destroyed;
	        to.blockLen = blockLen;
	        to.outputLen = outputLen;
	        to.oHash = oHash._cloneInto(to.oHash);
	        to.iHash = iHash._cloneInto(to.iHash);
	        return to;
	    }
	    clone() {
	        return this._cloneInto();
	    }
	    destroy() {
	        this.destroyed = true;
	        this.oHash.destroy();
	        this.iHash.destroy();
	    }
	}
	exports.HMAC = HMAC;
	/**
	 * HMAC: RFC2104 message authentication code.
	 * @param hash - function that would be used e.g. sha256
	 * @param key - message key
	 * @param message - message data
	 * @example
	 * import { hmac } from '@noble/hashes/hmac';
	 * import { sha256 } from '@noble/hashes/sha2';
	 * const mac1 = hmac(sha256, 'key', 'message');
	 */
	const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
	exports.hmac = hmac;
	exports.hmac.create = (hash, key) => new HMAC(hash, key);
	
} (hmac));

Object.defineProperty(pbkdf2$1, "__esModule", { value: true });
pbkdf2$1.pbkdf2 = pbkdf2;
pbkdf2$1.pbkdf2Async = pbkdf2Async;
/**
 * PBKDF (RFC 2898). Can be used to create a key from password and salt.
 * @module
 */
const hmac_ts_1 = hmac;
// prettier-ignore
const utils_ts_1 = utils;
// Common prologue and epilogue for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    (0, utils_ts_1.ahash)(hash);
    const opts = (0, utils_ts_1.checkOpts)({ dkLen: 32, asyncTick: 10 }, _opts);
    const { c, dkLen, asyncTick } = opts;
    (0, utils_ts_1.anumber)(c);
    (0, utils_ts_1.anumber)(dkLen);
    (0, utils_ts_1.anumber)(asyncTick);
    if (c < 1)
        throw new Error('iterations (c) should be >= 1');
    const password = (0, utils_ts_1.kdfInputToBytes)(_password);
    const salt = (0, utils_ts_1.kdfInputToBytes)(_salt);
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = hmac_ts_1.hmac.create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW)
        prfW.destroy();
    (0, utils_ts_1.clean)(u);
    return DK;
}
/**
 * PBKDF2-HMAC: RFC 2898 key derivation function
 * @param hash - hash function that would be used e.g. sha256
 * @param password - password from which a derived key is generated
 * @param salt - cryptographic salt
 * @param opts - {c, dkLen} where c is work factor and dkLen is output message size
 * @example
 * const key = pbkdf2(sha256, 'password', 'salt', { dkLen: 32, c: Math.pow(2, 18) });
 */
function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, utils_ts_1.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for (let ui = 1; ui < c; ui++) {
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for (let i = 0; i < Ti.length; i++)
                Ti[i] ^= u[i];
        }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
/**
 * PBKDF2-HMAC: RFC 2898 key derivation function. Async version.
 * @example
 * await pbkdf2Async(sha256, 'password', 'salt', { dkLen: 32, c: 500_000 });
 */
async function pbkdf2Async(hash, password, salt, opts) {
    const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, utils_ts_1.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, utils_ts_1.asyncLoop)(c - 1, asyncTick, () => {
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for (let i = 0; i < Ti.length; i++)
                Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}

var _wordlists = {};

const require$$0$1 = [
	"abdikace",
	"abeceda",
	"adresa",
	"agrese",
	"akce",
	"aktovka",
	"alej",
	"alkohol",
	"amputace",
	"ananas",
	"andulka",
	"anekdota",
	"anketa",
	"antika",
	"anulovat",
	"archa",
	"arogance",
	"asfalt",
	"asistent",
	"aspirace",
	"astma",
	"astronom",
	"atlas",
	"atletika",
	"atol",
	"autobus",
	"azyl",
	"babka",
	"bachor",
	"bacil",
	"baculka",
	"badatel",
	"bageta",
	"bagr",
	"bahno",
	"bakterie",
	"balada",
	"baletka",
	"balkon",
	"balonek",
	"balvan",
	"balza",
	"bambus",
	"bankomat",
	"barbar",
	"baret",
	"barman",
	"baroko",
	"barva",
	"baterka",
	"batoh",
	"bavlna",
	"bazalka",
	"bazilika",
	"bazuka",
	"bedna",
	"beran",
	"beseda",
	"bestie",
	"beton",
	"bezinka",
	"bezmoc",
	"beztak",
	"bicykl",
	"bidlo",
	"biftek",
	"bikiny",
	"bilance",
	"biograf",
	"biolog",
	"bitva",
	"bizon",
	"blahobyt",
	"blatouch",
	"blecha",
	"bledule",
	"blesk",
	"blikat",
	"blizna",
	"blokovat",
	"bloudit",
	"blud",
	"bobek",
	"bobr",
	"bodlina",
	"bodnout",
	"bohatost",
	"bojkot",
	"bojovat",
	"bokorys",
	"bolest",
	"borec",
	"borovice",
	"bota",
	"boubel",
	"bouchat",
	"bouda",
	"boule",
	"bourat",
	"boxer",
	"bradavka",
	"brambora",
	"branka",
	"bratr",
	"brepta",
	"briketa",
	"brko",
	"brloh",
	"bronz",
	"broskev",
	"brunetka",
	"brusinka",
	"brzda",
	"brzy",
	"bublina",
	"bubnovat",
	"buchta",
	"buditel",
	"budka",
	"budova",
	"bufet",
	"bujarost",
	"bukvice",
	"buldok",
	"bulva",
	"bunda",
	"bunkr",
	"burza",
	"butik",
	"buvol",
	"buzola",
	"bydlet",
	"bylina",
	"bytovka",
	"bzukot",
	"capart",
	"carevna",
	"cedr",
	"cedule",
	"cejch",
	"cejn",
	"cela",
	"celer",
	"celkem",
	"celnice",
	"cenina",
	"cennost",
	"cenovka",
	"centrum",
	"cenzor",
	"cestopis",
	"cetka",
	"chalupa",
	"chapadlo",
	"charita",
	"chata",
	"chechtat",
	"chemie",
	"chichot",
	"chirurg",
	"chlad",
	"chleba",
	"chlubit",
	"chmel",
	"chmura",
	"chobot",
	"chochol",
	"chodba",
	"cholera",
	"chomout",
	"chopit",
	"choroba",
	"chov",
	"chrapot",
	"chrlit",
	"chrt",
	"chrup",
	"chtivost",
	"chudina",
	"chutnat",
	"chvat",
	"chvilka",
	"chvost",
	"chyba",
	"chystat",
	"chytit",
	"cibule",
	"cigareta",
	"cihelna",
	"cihla",
	"cinkot",
	"cirkus",
	"cisterna",
	"citace",
	"citrus",
	"cizinec",
	"cizost",
	"clona",
	"cokoliv",
	"couvat",
	"ctitel",
	"ctnost",
	"cudnost",
	"cuketa",
	"cukr",
	"cupot",
	"cvaknout",
	"cval",
	"cvik",
	"cvrkot",
	"cyklista",
	"daleko",
	"dareba",
	"datel",
	"datum",
	"dcera",
	"debata",
	"dechovka",
	"decibel",
	"deficit",
	"deflace",
	"dekl",
	"dekret",
	"demokrat",
	"deprese",
	"derby",
	"deska",
	"detektiv",
	"dikobraz",
	"diktovat",
	"dioda",
	"diplom",
	"disk",
	"displej",
	"divadlo",
	"divoch",
	"dlaha",
	"dlouho",
	"dluhopis",
	"dnes",
	"dobro",
	"dobytek",
	"docent",
	"dochutit",
	"dodnes",
	"dohled",
	"dohoda",
	"dohra",
	"dojem",
	"dojnice",
	"doklad",
	"dokola",
	"doktor",
	"dokument",
	"dolar",
	"doleva",
	"dolina",
	"doma",
	"dominant",
	"domluvit",
	"domov",
	"donutit",
	"dopad",
	"dopis",
	"doplnit",
	"doposud",
	"doprovod",
	"dopustit",
	"dorazit",
	"dorost",
	"dort",
	"dosah",
	"doslov",
	"dostatek",
	"dosud",
	"dosyta",
	"dotaz",
	"dotek",
	"dotknout",
	"doufat",
	"doutnat",
	"dovozce",
	"dozadu",
	"doznat",
	"dozorce",
	"drahota",
	"drak",
	"dramatik",
	"dravec",
	"draze",
	"drdol",
	"drobnost",
	"drogerie",
	"drozd",
	"drsnost",
	"drtit",
	"drzost",
	"duben",
	"duchovno",
	"dudek",
	"duha",
	"duhovka",
	"dusit",
	"dusno",
	"dutost",
	"dvojice",
	"dvorec",
	"dynamit",
	"ekolog",
	"ekonomie",
	"elektron",
	"elipsa",
	"email",
	"emise",
	"emoce",
	"empatie",
	"epizoda",
	"epocha",
	"epopej",
	"epos",
	"esej",
	"esence",
	"eskorta",
	"eskymo",
	"etiketa",
	"euforie",
	"evoluce",
	"exekuce",
	"exkurze",
	"expedice",
	"exploze",
	"export",
	"extrakt",
	"facka",
	"fajfka",
	"fakulta",
	"fanatik",
	"fantazie",
	"farmacie",
	"favorit",
	"fazole",
	"federace",
	"fejeton",
	"fenka",
	"fialka",
	"figurant",
	"filozof",
	"filtr",
	"finance",
	"finta",
	"fixace",
	"fjord",
	"flanel",
	"flirt",
	"flotila",
	"fond",
	"fosfor",
	"fotbal",
	"fotka",
	"foton",
	"frakce",
	"freska",
	"fronta",
	"fukar",
	"funkce",
	"fyzika",
	"galeje",
	"garant",
	"genetika",
	"geolog",
	"gilotina",
	"glazura",
	"glejt",
	"golem",
	"golfista",
	"gotika",
	"graf",
	"gramofon",
	"granule",
	"grep",
	"gril",
	"grog",
	"groteska",
	"guma",
	"hadice",
	"hadr",
	"hala",
	"halenka",
	"hanba",
	"hanopis",
	"harfa",
	"harpuna",
	"havran",
	"hebkost",
	"hejkal",
	"hejno",
	"hejtman",
	"hektar",
	"helma",
	"hematom",
	"herec",
	"herna",
	"heslo",
	"hezky",
	"historik",
	"hladovka",
	"hlasivky",
	"hlava",
	"hledat",
	"hlen",
	"hlodavec",
	"hloh",
	"hloupost",
	"hltat",
	"hlubina",
	"hluchota",
	"hmat",
	"hmota",
	"hmyz",
	"hnis",
	"hnojivo",
	"hnout",
	"hoblina",
	"hoboj",
	"hoch",
	"hodiny",
	"hodlat",
	"hodnota",
	"hodovat",
	"hojnost",
	"hokej",
	"holinka",
	"holka",
	"holub",
	"homole",
	"honitba",
	"honorace",
	"horal",
	"horda",
	"horizont",
	"horko",
	"horlivec",
	"hormon",
	"hornina",
	"horoskop",
	"horstvo",
	"hospoda",
	"hostina",
	"hotovost",
	"houba",
	"houf",
	"houpat",
	"houska",
	"hovor",
	"hradba",
	"hranice",
	"hravost",
	"hrazda",
	"hrbolek",
	"hrdina",
	"hrdlo",
	"hrdost",
	"hrnek",
	"hrobka",
	"hromada",
	"hrot",
	"hrouda",
	"hrozen",
	"hrstka",
	"hrubost",
	"hryzat",
	"hubenost",
	"hubnout",
	"hudba",
	"hukot",
	"humr",
	"husita",
	"hustota",
	"hvozd",
	"hybnost",
	"hydrant",
	"hygiena",
	"hymna",
	"hysterik",
	"idylka",
	"ihned",
	"ikona",
	"iluze",
	"imunita",
	"infekce",
	"inflace",
	"inkaso",
	"inovace",
	"inspekce",
	"internet",
	"invalida",
	"investor",
	"inzerce",
	"ironie",
	"jablko",
	"jachta",
	"jahoda",
	"jakmile",
	"jakost",
	"jalovec",
	"jantar",
	"jarmark",
	"jaro",
	"jasan",
	"jasno",
	"jatka",
	"javor",
	"jazyk",
	"jedinec",
	"jedle",
	"jednatel",
	"jehlan",
	"jekot",
	"jelen",
	"jelito",
	"jemnost",
	"jenom",
	"jepice",
	"jeseter",
	"jevit",
	"jezdec",
	"jezero",
	"jinak",
	"jindy",
	"jinoch",
	"jiskra",
	"jistota",
	"jitrnice",
	"jizva",
	"jmenovat",
	"jogurt",
	"jurta",
	"kabaret",
	"kabel",
	"kabinet",
	"kachna",
	"kadet",
	"kadidlo",
	"kahan",
	"kajak",
	"kajuta",
	"kakao",
	"kaktus",
	"kalamita",
	"kalhoty",
	"kalibr",
	"kalnost",
	"kamera",
	"kamkoliv",
	"kamna",
	"kanibal",
	"kanoe",
	"kantor",
	"kapalina",
	"kapela",
	"kapitola",
	"kapka",
	"kaple",
	"kapota",
	"kapr",
	"kapusta",
	"kapybara",
	"karamel",
	"karotka",
	"karton",
	"kasa",
	"katalog",
	"katedra",
	"kauce",
	"kauza",
	"kavalec",
	"kazajka",
	"kazeta",
	"kazivost",
	"kdekoliv",
	"kdesi",
	"kedluben",
	"kemp",
	"keramika",
	"kino",
	"klacek",
	"kladivo",
	"klam",
	"klapot",
	"klasika",
	"klaun",
	"klec",
	"klenba",
	"klepat",
	"klesnout",
	"klid",
	"klima",
	"klisna",
	"klobouk",
	"klokan",
	"klopa",
	"kloub",
	"klubovna",
	"klusat",
	"kluzkost",
	"kmen",
	"kmitat",
	"kmotr",
	"kniha",
	"knot",
	"koalice",
	"koberec",
	"kobka",
	"kobliha",
	"kobyla",
	"kocour",
	"kohout",
	"kojenec",
	"kokos",
	"koktejl",
	"kolaps",
	"koleda",
	"kolize",
	"kolo",
	"komando",
	"kometa",
	"komik",
	"komnata",
	"komora",
	"kompas",
	"komunita",
	"konat",
	"koncept",
	"kondice",
	"konec",
	"konfese",
	"kongres",
	"konina",
	"konkurs",
	"kontakt",
	"konzerva",
	"kopanec",
	"kopie",
	"kopnout",
	"koprovka",
	"korbel",
	"korektor",
	"kormidlo",
	"koroptev",
	"korpus",
	"koruna",
	"koryto",
	"korzet",
	"kosatec",
	"kostka",
	"kotel",
	"kotleta",
	"kotoul",
	"koukat",
	"koupelna",
	"kousek",
	"kouzlo",
	"kovboj",
	"koza",
	"kozoroh",
	"krabice",
	"krach",
	"krajina",
	"kralovat",
	"krasopis",
	"kravata",
	"kredit",
	"krejcar",
	"kresba",
	"kreveta",
	"kriket",
	"kritik",
	"krize",
	"krkavec",
	"krmelec",
	"krmivo",
	"krocan",
	"krok",
	"kronika",
	"kropit",
	"kroupa",
	"krovka",
	"krtek",
	"kruhadlo",
	"krupice",
	"krutost",
	"krvinka",
	"krychle",
	"krypta",
	"krystal",
	"kryt",
	"kudlanka",
	"kufr",
	"kujnost",
	"kukla",
	"kulajda",
	"kulich",
	"kulka",
	"kulomet",
	"kultura",
	"kuna",
	"kupodivu",
	"kurt",
	"kurzor",
	"kutil",
	"kvalita",
	"kvasinka",
	"kvestor",
	"kynolog",
	"kyselina",
	"kytara",
	"kytice",
	"kytka",
	"kytovec",
	"kyvadlo",
	"labrador",
	"lachtan",
	"ladnost",
	"laik",
	"lakomec",
	"lamela",
	"lampa",
	"lanovka",
	"lasice",
	"laso",
	"lastura",
	"latinka",
	"lavina",
	"lebka",
	"leckdy",
	"leden",
	"lednice",
	"ledovka",
	"ledvina",
	"legenda",
	"legie",
	"legrace",
	"lehce",
	"lehkost",
	"lehnout",
	"lektvar",
	"lenochod",
	"lentilka",
	"lepenka",
	"lepidlo",
	"letadlo",
	"letec",
	"letmo",
	"letokruh",
	"levhart",
	"levitace",
	"levobok",
	"libra",
	"lichotka",
	"lidojed",
	"lidskost",
	"lihovina",
	"lijavec",
	"lilek",
	"limetka",
	"linie",
	"linka",
	"linoleum",
	"listopad",
	"litina",
	"litovat",
	"lobista",
	"lodivod",
	"logika",
	"logoped",
	"lokalita",
	"loket",
	"lomcovat",
	"lopata",
	"lopuch",
	"lord",
	"losos",
	"lotr",
	"loudal",
	"louh",
	"louka",
	"louskat",
	"lovec",
	"lstivost",
	"lucerna",
	"lucifer",
	"lump",
	"lusk",
	"lustrace",
	"lvice",
	"lyra",
	"lyrika",
	"lysina",
	"madam",
	"madlo",
	"magistr",
	"mahagon",
	"majetek",
	"majitel",
	"majorita",
	"makak",
	"makovice",
	"makrela",
	"malba",
	"malina",
	"malovat",
	"malvice",
	"maminka",
	"mandle",
	"manko",
	"marnost",
	"masakr",
	"maskot",
	"masopust",
	"matice",
	"matrika",
	"maturita",
	"mazanec",
	"mazivo",
	"mazlit",
	"mazurka",
	"mdloba",
	"mechanik",
	"meditace",
	"medovina",
	"melasa",
	"meloun",
	"mentolka",
	"metla",
	"metoda",
	"metr",
	"mezera",
	"migrace",
	"mihnout",
	"mihule",
	"mikina",
	"mikrofon",
	"milenec",
	"milimetr",
	"milost",
	"mimika",
	"mincovna",
	"minibar",
	"minomet",
	"minulost",
	"miska",
	"mistr",
	"mixovat",
	"mladost",
	"mlha",
	"mlhovina",
	"mlok",
	"mlsat",
	"mluvit",
	"mnich",
	"mnohem",
	"mobil",
	"mocnost",
	"modelka",
	"modlitba",
	"mohyla",
	"mokro",
	"molekula",
	"momentka",
	"monarcha",
	"monokl",
	"monstrum",
	"montovat",
	"monzun",
	"mosaz",
	"moskyt",
	"most",
	"motivace",
	"motorka",
	"motyka",
	"moucha",
	"moudrost",
	"mozaika",
	"mozek",
	"mozol",
	"mramor",
	"mravenec",
	"mrkev",
	"mrtvola",
	"mrzet",
	"mrzutost",
	"mstitel",
	"mudrc",
	"muflon",
	"mulat",
	"mumie",
	"munice",
	"muset",
	"mutace",
	"muzeum",
	"muzikant",
	"myslivec",
	"mzda",
	"nabourat",
	"nachytat",
	"nadace",
	"nadbytek",
	"nadhoz",
	"nadobro",
	"nadpis",
	"nahlas",
	"nahnat",
	"nahodile",
	"nahradit",
	"naivita",
	"najednou",
	"najisto",
	"najmout",
	"naklonit",
	"nakonec",
	"nakrmit",
	"nalevo",
	"namazat",
	"namluvit",
	"nanometr",
	"naoko",
	"naopak",
	"naostro",
	"napadat",
	"napevno",
	"naplnit",
	"napnout",
	"naposled",
	"naprosto",
	"narodit",
	"naruby",
	"narychlo",
	"nasadit",
	"nasekat",
	"naslepo",
	"nastat",
	"natolik",
	"navenek",
	"navrch",
	"navzdory",
	"nazvat",
	"nebe",
	"nechat",
	"necky",
	"nedaleko",
	"nedbat",
	"neduh",
	"negace",
	"nehet",
	"nehoda",
	"nejen",
	"nejprve",
	"neklid",
	"nelibost",
	"nemilost",
	"nemoc",
	"neochota",
	"neonka",
	"nepokoj",
	"nerost",
	"nerv",
	"nesmysl",
	"nesoulad",
	"netvor",
	"neuron",
	"nevina",
	"nezvykle",
	"nicota",
	"nijak",
	"nikam",
	"nikdy",
	"nikl",
	"nikterak",
	"nitro",
	"nocleh",
	"nohavice",
	"nominace",
	"nora",
	"norek",
	"nositel",
	"nosnost",
	"nouze",
	"noviny",
	"novota",
	"nozdra",
	"nuda",
	"nudle",
	"nuget",
	"nutit",
	"nutnost",
	"nutrie",
	"nymfa",
	"obal",
	"obarvit",
	"obava",
	"obdiv",
	"obec",
	"obehnat",
	"obejmout",
	"obezita",
	"obhajoba",
	"obilnice",
	"objasnit",
	"objekt",
	"obklopit",
	"oblast",
	"oblek",
	"obliba",
	"obloha",
	"obluda",
	"obnos",
	"obohatit",
	"obojek",
	"obout",
	"obrazec",
	"obrna",
	"obruba",
	"obrys",
	"obsah",
	"obsluha",
	"obstarat",
	"obuv",
	"obvaz",
	"obvinit",
	"obvod",
	"obvykle",
	"obyvatel",
	"obzor",
	"ocas",
	"ocel",
	"ocenit",
	"ochladit",
	"ochota",
	"ochrana",
	"ocitnout",
	"odboj",
	"odbyt",
	"odchod",
	"odcizit",
	"odebrat",
	"odeslat",
	"odevzdat",
	"odezva",
	"odhadce",
	"odhodit",
	"odjet",
	"odjinud",
	"odkaz",
	"odkoupit",
	"odliv",
	"odluka",
	"odmlka",
	"odolnost",
	"odpad",
	"odpis",
	"odplout",
	"odpor",
	"odpustit",
	"odpykat",
	"odrazka",
	"odsoudit",
	"odstup",
	"odsun",
	"odtok",
	"odtud",
	"odvaha",
	"odveta",
	"odvolat",
	"odvracet",
	"odznak",
	"ofina",
	"ofsajd",
	"ohlas",
	"ohnisko",
	"ohrada",
	"ohrozit",
	"ohryzek",
	"okap",
	"okenice",
	"oklika",
	"okno",
	"okouzlit",
	"okovy",
	"okrasa",
	"okres",
	"okrsek",
	"okruh",
	"okupant",
	"okurka",
	"okusit",
	"olejnina",
	"olizovat",
	"omak",
	"omeleta",
	"omezit",
	"omladina",
	"omlouvat",
	"omluva",
	"omyl",
	"onehdy",
	"opakovat",
	"opasek",
	"operace",
	"opice",
	"opilost",
	"opisovat",
	"opora",
	"opozice",
	"opravdu",
	"oproti",
	"orbital",
	"orchestr",
	"orgie",
	"orlice",
	"orloj",
	"ortel",
	"osada",
	"oschnout",
	"osika",
	"osivo",
	"oslava",
	"oslepit",
	"oslnit",
	"oslovit",
	"osnova",
	"osoba",
	"osolit",
	"ospalec",
	"osten",
	"ostraha",
	"ostuda",
	"ostych",
	"osvojit",
	"oteplit",
	"otisk",
	"otop",
	"otrhat",
	"otrlost",
	"otrok",
	"otruby",
	"otvor",
	"ovanout",
	"ovar",
	"oves",
	"ovlivnit",
	"ovoce",
	"oxid",
	"ozdoba",
	"pachatel",
	"pacient",
	"padouch",
	"pahorek",
	"pakt",
	"palanda",
	"palec",
	"palivo",
	"paluba",
	"pamflet",
	"pamlsek",
	"panenka",
	"panika",
	"panna",
	"panovat",
	"panstvo",
	"pantofle",
	"paprika",
	"parketa",
	"parodie",
	"parta",
	"paruka",
	"paryba",
	"paseka",
	"pasivita",
	"pastelka",
	"patent",
	"patrona",
	"pavouk",
	"pazneht",
	"pazourek",
	"pecka",
	"pedagog",
	"pejsek",
	"peklo",
	"peloton",
	"penalta",
	"pendrek",
	"penze",
	"periskop",
	"pero",
	"pestrost",
	"petarda",
	"petice",
	"petrolej",
	"pevnina",
	"pexeso",
	"pianista",
	"piha",
	"pijavice",
	"pikle",
	"piknik",
	"pilina",
	"pilnost",
	"pilulka",
	"pinzeta",
	"pipeta",
	"pisatel",
	"pistole",
	"pitevna",
	"pivnice",
	"pivovar",
	"placenta",
	"plakat",
	"plamen",
	"planeta",
	"plastika",
	"platit",
	"plavidlo",
	"plaz",
	"plech",
	"plemeno",
	"plenta",
	"ples",
	"pletivo",
	"plevel",
	"plivat",
	"plnit",
	"plno",
	"plocha",
	"plodina",
	"plomba",
	"plout",
	"pluk",
	"plyn",
	"pobavit",
	"pobyt",
	"pochod",
	"pocit",
	"poctivec",
	"podat",
	"podcenit",
	"podepsat",
	"podhled",
	"podivit",
	"podklad",
	"podmanit",
	"podnik",
	"podoba",
	"podpora",
	"podraz",
	"podstata",
	"podvod",
	"podzim",
	"poezie",
	"pohanka",
	"pohnutka",
	"pohovor",
	"pohroma",
	"pohyb",
	"pointa",
	"pojistka",
	"pojmout",
	"pokazit",
	"pokles",
	"pokoj",
	"pokrok",
	"pokuta",
	"pokyn",
	"poledne",
	"polibek",
	"polknout",
	"poloha",
	"polynom",
	"pomalu",
	"pominout",
	"pomlka",
	"pomoc",
	"pomsta",
	"pomyslet",
	"ponechat",
	"ponorka",
	"ponurost",
	"popadat",
	"popel",
	"popisek",
	"poplach",
	"poprosit",
	"popsat",
	"popud",
	"poradce",
	"porce",
	"porod",
	"porucha",
	"poryv",
	"posadit",
	"posed",
	"posila",
	"poskok",
	"poslanec",
	"posoudit",
	"pospolu",
	"postava",
	"posudek",
	"posyp",
	"potah",
	"potkan",
	"potlesk",
	"potomek",
	"potrava",
	"potupa",
	"potvora",
	"poukaz",
	"pouto",
	"pouzdro",
	"povaha",
	"povidla",
	"povlak",
	"povoz",
	"povrch",
	"povstat",
	"povyk",
	"povzdech",
	"pozdrav",
	"pozemek",
	"poznatek",
	"pozor",
	"pozvat",
	"pracovat",
	"prahory",
	"praktika",
	"prales",
	"praotec",
	"praporek",
	"prase",
	"pravda",
	"princip",
	"prkno",
	"probudit",
	"procento",
	"prodej",
	"profese",
	"prohra",
	"projekt",
	"prolomit",
	"promile",
	"pronikat",
	"propad",
	"prorok",
	"prosba",
	"proton",
	"proutek",
	"provaz",
	"prskavka",
	"prsten",
	"prudkost",
	"prut",
	"prvek",
	"prvohory",
	"psanec",
	"psovod",
	"pstruh",
	"ptactvo",
	"puberta",
	"puch",
	"pudl",
	"pukavec",
	"puklina",
	"pukrle",
	"pult",
	"pumpa",
	"punc",
	"pupen",
	"pusa",
	"pusinka",
	"pustina",
	"putovat",
	"putyka",
	"pyramida",
	"pysk",
	"pytel",
	"racek",
	"rachot",
	"radiace",
	"radnice",
	"radon",
	"raft",
	"ragby",
	"raketa",
	"rakovina",
	"rameno",
	"rampouch",
	"rande",
	"rarach",
	"rarita",
	"rasovna",
	"rastr",
	"ratolest",
	"razance",
	"razidlo",
	"reagovat",
	"reakce",
	"recept",
	"redaktor",
	"referent",
	"reflex",
	"rejnok",
	"reklama",
	"rekord",
	"rekrut",
	"rektor",
	"reputace",
	"revize",
	"revma",
	"revolver",
	"rezerva",
	"riskovat",
	"riziko",
	"robotika",
	"rodokmen",
	"rohovka",
	"rokle",
	"rokoko",
	"romaneto",
	"ropovod",
	"ropucha",
	"rorejs",
	"rosol",
	"rostlina",
	"rotmistr",
	"rotoped",
	"rotunda",
	"roubenka",
	"roucho",
	"roup",
	"roura",
	"rovina",
	"rovnice",
	"rozbor",
	"rozchod",
	"rozdat",
	"rozeznat",
	"rozhodce",
	"rozinka",
	"rozjezd",
	"rozkaz",
	"rozloha",
	"rozmar",
	"rozpad",
	"rozruch",
	"rozsah",
	"roztok",
	"rozum",
	"rozvod",
	"rubrika",
	"ruchadlo",
	"rukavice",
	"rukopis",
	"ryba",
	"rybolov",
	"rychlost",
	"rydlo",
	"rypadlo",
	"rytina",
	"ryzost",
	"sadista",
	"sahat",
	"sako",
	"samec",
	"samizdat",
	"samota",
	"sanitka",
	"sardinka",
	"sasanka",
	"satelit",
	"sazba",
	"sazenice",
	"sbor",
	"schovat",
	"sebranka",
	"secese",
	"sedadlo",
	"sediment",
	"sedlo",
	"sehnat",
	"sejmout",
	"sekera",
	"sekta",
	"sekunda",
	"sekvoje",
	"semeno",
	"seno",
	"servis",
	"sesadit",
	"seshora",
	"seskok",
	"seslat",
	"sestra",
	"sesuv",
	"sesypat",
	"setba",
	"setina",
	"setkat",
	"setnout",
	"setrvat",
	"sever",
	"seznam",
	"shoda",
	"shrnout",
	"sifon",
	"silnice",
	"sirka",
	"sirotek",
	"sirup",
	"situace",
	"skafandr",
	"skalisko",
	"skanzen",
	"skaut",
	"skeptik",
	"skica",
	"skladba",
	"sklenice",
	"sklo",
	"skluz",
	"skoba",
	"skokan",
	"skoro",
	"skripta",
	"skrz",
	"skupina",
	"skvost",
	"skvrna",
	"slabika",
	"sladidlo",
	"slanina",
	"slast",
	"slavnost",
	"sledovat",
	"slepec",
	"sleva",
	"slezina",
	"slib",
	"slina",
	"sliznice",
	"slon",
	"sloupek",
	"slovo",
	"sluch",
	"sluha",
	"slunce",
	"slupka",
	"slza",
	"smaragd",
	"smetana",
	"smilstvo",
	"smlouva",
	"smog",
	"smrad",
	"smrk",
	"smrtka",
	"smutek",
	"smysl",
	"snad",
	"snaha",
	"snob",
	"sobota",
	"socha",
	"sodovka",
	"sokol",
	"sopka",
	"sotva",
	"souboj",
	"soucit",
	"soudce",
	"souhlas",
	"soulad",
	"soumrak",
	"souprava",
	"soused",
	"soutok",
	"souviset",
	"spalovna",
	"spasitel",
	"spis",
	"splav",
	"spodek",
	"spojenec",
	"spolu",
	"sponzor",
	"spornost",
	"spousta",
	"sprcha",
	"spustit",
	"sranda",
	"sraz",
	"srdce",
	"srna",
	"srnec",
	"srovnat",
	"srpen",
	"srst",
	"srub",
	"stanice",
	"starosta",
	"statika",
	"stavba",
	"stehno",
	"stezka",
	"stodola",
	"stolek",
	"stopa",
	"storno",
	"stoupat",
	"strach",
	"stres",
	"strhnout",
	"strom",
	"struna",
	"studna",
	"stupnice",
	"stvol",
	"styk",
	"subjekt",
	"subtropy",
	"suchar",
	"sudost",
	"sukno",
	"sundat",
	"sunout",
	"surikata",
	"surovina",
	"svah",
	"svalstvo",
	"svetr",
	"svatba",
	"svazek",
	"svisle",
	"svitek",
	"svoboda",
	"svodidlo",
	"svorka",
	"svrab",
	"sykavka",
	"sykot",
	"synek",
	"synovec",
	"sypat",
	"sypkost",
	"syrovost",
	"sysel",
	"sytost",
	"tabletka",
	"tabule",
	"tahoun",
	"tajemno",
	"tajfun",
	"tajga",
	"tajit",
	"tajnost",
	"taktika",
	"tamhle",
	"tampon",
	"tancovat",
	"tanec",
	"tanker",
	"tapeta",
	"tavenina",
	"tazatel",
	"technika",
	"tehdy",
	"tekutina",
	"telefon",
	"temnota",
	"tendence",
	"tenista",
	"tenor",
	"teplota",
	"tepna",
	"teprve",
	"terapie",
	"termoska",
	"textil",
	"ticho",
	"tiskopis",
	"titulek",
	"tkadlec",
	"tkanina",
	"tlapka",
	"tleskat",
	"tlukot",
	"tlupa",
	"tmel",
	"toaleta",
	"topinka",
	"topol",
	"torzo",
	"touha",
	"toulec",
	"tradice",
	"traktor",
	"tramp",
	"trasa",
	"traverza",
	"trefit",
	"trest",
	"trezor",
	"trhavina",
	"trhlina",
	"trochu",
	"trojice",
	"troska",
	"trouba",
	"trpce",
	"trpitel",
	"trpkost",
	"trubec",
	"truchlit",
	"truhlice",
	"trus",
	"trvat",
	"tudy",
	"tuhnout",
	"tuhost",
	"tundra",
	"turista",
	"turnaj",
	"tuzemsko",
	"tvaroh",
	"tvorba",
	"tvrdost",
	"tvrz",
	"tygr",
	"tykev",
	"ubohost",
	"uboze",
	"ubrat",
	"ubrousek",
	"ubrus",
	"ubytovna",
	"ucho",
	"uctivost",
	"udivit",
	"uhradit",
	"ujednat",
	"ujistit",
	"ujmout",
	"ukazatel",
	"uklidnit",
	"uklonit",
	"ukotvit",
	"ukrojit",
	"ulice",
	"ulita",
	"ulovit",
	"umyvadlo",
	"unavit",
	"uniforma",
	"uniknout",
	"upadnout",
	"uplatnit",
	"uplynout",
	"upoutat",
	"upravit",
	"uran",
	"urazit",
	"usednout",
	"usilovat",
	"usmrtit",
	"usnadnit",
	"usnout",
	"usoudit",
	"ustlat",
	"ustrnout",
	"utahovat",
	"utkat",
	"utlumit",
	"utonout",
	"utopenec",
	"utrousit",
	"uvalit",
	"uvolnit",
	"uvozovka",
	"uzdravit",
	"uzel",
	"uzenina",
	"uzlina",
	"uznat",
	"vagon",
	"valcha",
	"valoun",
	"vana",
	"vandal",
	"vanilka",
	"varan",
	"varhany",
	"varovat",
	"vcelku",
	"vchod",
	"vdova",
	"vedro",
	"vegetace",
	"vejce",
	"velbloud",
	"veletrh",
	"velitel",
	"velmoc",
	"velryba",
	"venkov",
	"veranda",
	"verze",
	"veselka",
	"veskrze",
	"vesnice",
	"vespodu",
	"vesta",
	"veterina",
	"veverka",
	"vibrace",
	"vichr",
	"videohra",
	"vidina",
	"vidle",
	"vila",
	"vinice",
	"viset",
	"vitalita",
	"vize",
	"vizitka",
	"vjezd",
	"vklad",
	"vkus",
	"vlajka",
	"vlak",
	"vlasec",
	"vlevo",
	"vlhkost",
	"vliv",
	"vlnovka",
	"vloupat",
	"vnucovat",
	"vnuk",
	"voda",
	"vodivost",
	"vodoznak",
	"vodstvo",
	"vojensky",
	"vojna",
	"vojsko",
	"volant",
	"volba",
	"volit",
	"volno",
	"voskovka",
	"vozidlo",
	"vozovna",
	"vpravo",
	"vrabec",
	"vracet",
	"vrah",
	"vrata",
	"vrba",
	"vrcholek",
	"vrhat",
	"vrstva",
	"vrtule",
	"vsadit",
	"vstoupit",
	"vstup",
	"vtip",
	"vybavit",
	"vybrat",
	"vychovat",
	"vydat",
	"vydra",
	"vyfotit",
	"vyhledat",
	"vyhnout",
	"vyhodit",
	"vyhradit",
	"vyhubit",
	"vyjasnit",
	"vyjet",
	"vyjmout",
	"vyklopit",
	"vykonat",
	"vylekat",
	"vymazat",
	"vymezit",
	"vymizet",
	"vymyslet",
	"vynechat",
	"vynikat",
	"vynutit",
	"vypadat",
	"vyplatit",
	"vypravit",
	"vypustit",
	"vyrazit",
	"vyrovnat",
	"vyrvat",
	"vyslovit",
	"vysoko",
	"vystavit",
	"vysunout",
	"vysypat",
	"vytasit",
	"vytesat",
	"vytratit",
	"vyvinout",
	"vyvolat",
	"vyvrhel",
	"vyzdobit",
	"vyznat",
	"vzadu",
	"vzbudit",
	"vzchopit",
	"vzdor",
	"vzduch",
	"vzdychat",
	"vzestup",
	"vzhledem",
	"vzkaz",
	"vzlykat",
	"vznik",
	"vzorek",
	"vzpoura",
	"vztah",
	"vztek",
	"xylofon",
	"zabrat",
	"zabydlet",
	"zachovat",
	"zadarmo",
	"zadusit",
	"zafoukat",
	"zahltit",
	"zahodit",
	"zahrada",
	"zahynout",
	"zajatec",
	"zajet",
	"zajistit",
	"zaklepat",
	"zakoupit",
	"zalepit",
	"zamezit",
	"zamotat",
	"zamyslet",
	"zanechat",
	"zanikat",
	"zaplatit",
	"zapojit",
	"zapsat",
	"zarazit",
	"zastavit",
	"zasunout",
	"zatajit",
	"zatemnit",
	"zatknout",
	"zaujmout",
	"zavalit",
	"zavelet",
	"zavinit",
	"zavolat",
	"zavrtat",
	"zazvonit",
	"zbavit",
	"zbrusu",
	"zbudovat",
	"zbytek",
	"zdaleka",
	"zdarma",
	"zdatnost",
	"zdivo",
	"zdobit",
	"zdroj",
	"zdvih",
	"zdymadlo",
	"zelenina",
	"zeman",
	"zemina",
	"zeptat",
	"zezadu",
	"zezdola",
	"zhatit",
	"zhltnout",
	"zhluboka",
	"zhotovit",
	"zhruba",
	"zima",
	"zimnice",
	"zjemnit",
	"zklamat",
	"zkoumat",
	"zkratka",
	"zkumavka",
	"zlato",
	"zlehka",
	"zloba",
	"zlom",
	"zlost",
	"zlozvyk",
	"zmapovat",
	"zmar",
	"zmatek",
	"zmije",
	"zmizet",
	"zmocnit",
	"zmodrat",
	"zmrzlina",
	"zmutovat",
	"znak",
	"znalost",
	"znamenat",
	"znovu",
	"zobrazit",
	"zotavit",
	"zoubek",
	"zoufale",
	"zplodit",
	"zpomalit",
	"zprava",
	"zprostit",
	"zprudka",
	"zprvu",
	"zrada",
	"zranit",
	"zrcadlo",
	"zrnitost",
	"zrno",
	"zrovna",
	"zrychlit",
	"zrzavost",
	"zticha",
	"ztratit",
	"zubovina",
	"zubr",
	"zvednout",
	"zvenku",
	"zvesela",
	"zvon",
	"zvrat",
	"zvukovod",
	"zvyk"
];

const require$$1 = [
	"的",
	"一",
	"是",
	"在",
	"不",
	"了",
	"有",
	"和",
	"人",
	"这",
	"中",
	"大",
	"为",
	"上",
	"个",
	"国",
	"我",
	"以",
	"要",
	"他",
	"时",
	"来",
	"用",
	"们",
	"生",
	"到",
	"作",
	"地",
	"于",
	"出",
	"就",
	"分",
	"对",
	"成",
	"会",
	"可",
	"主",
	"发",
	"年",
	"动",
	"同",
	"工",
	"也",
	"能",
	"下",
	"过",
	"子",
	"说",
	"产",
	"种",
	"面",
	"而",
	"方",
	"后",
	"多",
	"定",
	"行",
	"学",
	"法",
	"所",
	"民",
	"得",
	"经",
	"十",
	"三",
	"之",
	"进",
	"着",
	"等",
	"部",
	"度",
	"家",
	"电",
	"力",
	"里",
	"如",
	"水",
	"化",
	"高",
	"自",
	"二",
	"理",
	"起",
	"小",
	"物",
	"现",
	"实",
	"加",
	"量",
	"都",
	"两",
	"体",
	"制",
	"机",
	"当",
	"使",
	"点",
	"从",
	"业",
	"本",
	"去",
	"把",
	"性",
	"好",
	"应",
	"开",
	"它",
	"合",
	"还",
	"因",
	"由",
	"其",
	"些",
	"然",
	"前",
	"外",
	"天",
	"政",
	"四",
	"日",
	"那",
	"社",
	"义",
	"事",
	"平",
	"形",
	"相",
	"全",
	"表",
	"间",
	"样",
	"与",
	"关",
	"各",
	"重",
	"新",
	"线",
	"内",
	"数",
	"正",
	"心",
	"反",
	"你",
	"明",
	"看",
	"原",
	"又",
	"么",
	"利",
	"比",
	"或",
	"但",
	"质",
	"气",
	"第",
	"向",
	"道",
	"命",
	"此",
	"变",
	"条",
	"只",
	"没",
	"结",
	"解",
	"问",
	"意",
	"建",
	"月",
	"公",
	"无",
	"系",
	"军",
	"很",
	"情",
	"者",
	"最",
	"立",
	"代",
	"想",
	"已",
	"通",
	"并",
	"提",
	"直",
	"题",
	"党",
	"程",
	"展",
	"五",
	"果",
	"料",
	"象",
	"员",
	"革",
	"位",
	"入",
	"常",
	"文",
	"总",
	"次",
	"品",
	"式",
	"活",
	"设",
	"及",
	"管",
	"特",
	"件",
	"长",
	"求",
	"老",
	"头",
	"基",
	"资",
	"边",
	"流",
	"路",
	"级",
	"少",
	"图",
	"山",
	"统",
	"接",
	"知",
	"较",
	"将",
	"组",
	"见",
	"计",
	"别",
	"她",
	"手",
	"角",
	"期",
	"根",
	"论",
	"运",
	"农",
	"指",
	"几",
	"九",
	"区",
	"强",
	"放",
	"决",
	"西",
	"被",
	"干",
	"做",
	"必",
	"战",
	"先",
	"回",
	"则",
	"任",
	"取",
	"据",
	"处",
	"队",
	"南",
	"给",
	"色",
	"光",
	"门",
	"即",
	"保",
	"治",
	"北",
	"造",
	"百",
	"规",
	"热",
	"领",
	"七",
	"海",
	"口",
	"东",
	"导",
	"器",
	"压",
	"志",
	"世",
	"金",
	"增",
	"争",
	"济",
	"阶",
	"油",
	"思",
	"术",
	"极",
	"交",
	"受",
	"联",
	"什",
	"认",
	"六",
	"共",
	"权",
	"收",
	"证",
	"改",
	"清",
	"美",
	"再",
	"采",
	"转",
	"更",
	"单",
	"风",
	"切",
	"打",
	"白",
	"教",
	"速",
	"花",
	"带",
	"安",
	"场",
	"身",
	"车",
	"例",
	"真",
	"务",
	"具",
	"万",
	"每",
	"目",
	"至",
	"达",
	"走",
	"积",
	"示",
	"议",
	"声",
	"报",
	"斗",
	"完",
	"类",
	"八",
	"离",
	"华",
	"名",
	"确",
	"才",
	"科",
	"张",
	"信",
	"马",
	"节",
	"话",
	"米",
	"整",
	"空",
	"元",
	"况",
	"今",
	"集",
	"温",
	"传",
	"土",
	"许",
	"步",
	"群",
	"广",
	"石",
	"记",
	"需",
	"段",
	"研",
	"界",
	"拉",
	"林",
	"律",
	"叫",
	"且",
	"究",
	"观",
	"越",
	"织",
	"装",
	"影",
	"算",
	"低",
	"持",
	"音",
	"众",
	"书",
	"布",
	"复",
	"容",
	"儿",
	"须",
	"际",
	"商",
	"非",
	"验",
	"连",
	"断",
	"深",
	"难",
	"近",
	"矿",
	"千",
	"周",
	"委",
	"素",
	"技",
	"备",
	"半",
	"办",
	"青",
	"省",
	"列",
	"习",
	"响",
	"约",
	"支",
	"般",
	"史",
	"感",
	"劳",
	"便",
	"团",
	"往",
	"酸",
	"历",
	"市",
	"克",
	"何",
	"除",
	"消",
	"构",
	"府",
	"称",
	"太",
	"准",
	"精",
	"值",
	"号",
	"率",
	"族",
	"维",
	"划",
	"选",
	"标",
	"写",
	"存",
	"候",
	"毛",
	"亲",
	"快",
	"效",
	"斯",
	"院",
	"查",
	"江",
	"型",
	"眼",
	"王",
	"按",
	"格",
	"养",
	"易",
	"置",
	"派",
	"层",
	"片",
	"始",
	"却",
	"专",
	"状",
	"育",
	"厂",
	"京",
	"识",
	"适",
	"属",
	"圆",
	"包",
	"火",
	"住",
	"调",
	"满",
	"县",
	"局",
	"照",
	"参",
	"红",
	"细",
	"引",
	"听",
	"该",
	"铁",
	"价",
	"严",
	"首",
	"底",
	"液",
	"官",
	"德",
	"随",
	"病",
	"苏",
	"失",
	"尔",
	"死",
	"讲",
	"配",
	"女",
	"黄",
	"推",
	"显",
	"谈",
	"罪",
	"神",
	"艺",
	"呢",
	"席",
	"含",
	"企",
	"望",
	"密",
	"批",
	"营",
	"项",
	"防",
	"举",
	"球",
	"英",
	"氧",
	"势",
	"告",
	"李",
	"台",
	"落",
	"木",
	"帮",
	"轮",
	"破",
	"亚",
	"师",
	"围",
	"注",
	"远",
	"字",
	"材",
	"排",
	"供",
	"河",
	"态",
	"封",
	"另",
	"施",
	"减",
	"树",
	"溶",
	"怎",
	"止",
	"案",
	"言",
	"士",
	"均",
	"武",
	"固",
	"叶",
	"鱼",
	"波",
	"视",
	"仅",
	"费",
	"紧",
	"爱",
	"左",
	"章",
	"早",
	"朝",
	"害",
	"续",
	"轻",
	"服",
	"试",
	"食",
	"充",
	"兵",
	"源",
	"判",
	"护",
	"司",
	"足",
	"某",
	"练",
	"差",
	"致",
	"板",
	"田",
	"降",
	"黑",
	"犯",
	"负",
	"击",
	"范",
	"继",
	"兴",
	"似",
	"余",
	"坚",
	"曲",
	"输",
	"修",
	"故",
	"城",
	"夫",
	"够",
	"送",
	"笔",
	"船",
	"占",
	"右",
	"财",
	"吃",
	"富",
	"春",
	"职",
	"觉",
	"汉",
	"画",
	"功",
	"巴",
	"跟",
	"虽",
	"杂",
	"飞",
	"检",
	"吸",
	"助",
	"升",
	"阳",
	"互",
	"初",
	"创",
	"抗",
	"考",
	"投",
	"坏",
	"策",
	"古",
	"径",
	"换",
	"未",
	"跑",
	"留",
	"钢",
	"曾",
	"端",
	"责",
	"站",
	"简",
	"述",
	"钱",
	"副",
	"尽",
	"帝",
	"射",
	"草",
	"冲",
	"承",
	"独",
	"令",
	"限",
	"阿",
	"宣",
	"环",
	"双",
	"请",
	"超",
	"微",
	"让",
	"控",
	"州",
	"良",
	"轴",
	"找",
	"否",
	"纪",
	"益",
	"依",
	"优",
	"顶",
	"础",
	"载",
	"倒",
	"房",
	"突",
	"坐",
	"粉",
	"敌",
	"略",
	"客",
	"袁",
	"冷",
	"胜",
	"绝",
	"析",
	"块",
	"剂",
	"测",
	"丝",
	"协",
	"诉",
	"念",
	"陈",
	"仍",
	"罗",
	"盐",
	"友",
	"洋",
	"错",
	"苦",
	"夜",
	"刑",
	"移",
	"频",
	"逐",
	"靠",
	"混",
	"母",
	"短",
	"皮",
	"终",
	"聚",
	"汽",
	"村",
	"云",
	"哪",
	"既",
	"距",
	"卫",
	"停",
	"烈",
	"央",
	"察",
	"烧",
	"迅",
	"境",
	"若",
	"印",
	"洲",
	"刻",
	"括",
	"激",
	"孔",
	"搞",
	"甚",
	"室",
	"待",
	"核",
	"校",
	"散",
	"侵",
	"吧",
	"甲",
	"游",
	"久",
	"菜",
	"味",
	"旧",
	"模",
	"湖",
	"货",
	"损",
	"预",
	"阻",
	"毫",
	"普",
	"稳",
	"乙",
	"妈",
	"植",
	"息",
	"扩",
	"银",
	"语",
	"挥",
	"酒",
	"守",
	"拿",
	"序",
	"纸",
	"医",
	"缺",
	"雨",
	"吗",
	"针",
	"刘",
	"啊",
	"急",
	"唱",
	"误",
	"训",
	"愿",
	"审",
	"附",
	"获",
	"茶",
	"鲜",
	"粮",
	"斤",
	"孩",
	"脱",
	"硫",
	"肥",
	"善",
	"龙",
	"演",
	"父",
	"渐",
	"血",
	"欢",
	"械",
	"掌",
	"歌",
	"沙",
	"刚",
	"攻",
	"谓",
	"盾",
	"讨",
	"晚",
	"粒",
	"乱",
	"燃",
	"矛",
	"乎",
	"杀",
	"药",
	"宁",
	"鲁",
	"贵",
	"钟",
	"煤",
	"读",
	"班",
	"伯",
	"香",
	"介",
	"迫",
	"句",
	"丰",
	"培",
	"握",
	"兰",
	"担",
	"弦",
	"蛋",
	"沉",
	"假",
	"穿",
	"执",
	"答",
	"乐",
	"谁",
	"顺",
	"烟",
	"缩",
	"征",
	"脸",
	"喜",
	"松",
	"脚",
	"困",
	"异",
	"免",
	"背",
	"星",
	"福",
	"买",
	"染",
	"井",
	"概",
	"慢",
	"怕",
	"磁",
	"倍",
	"祖",
	"皇",
	"促",
	"静",
	"补",
	"评",
	"翻",
	"肉",
	"践",
	"尼",
	"衣",
	"宽",
	"扬",
	"棉",
	"希",
	"伤",
	"操",
	"垂",
	"秋",
	"宜",
	"氢",
	"套",
	"督",
	"振",
	"架",
	"亮",
	"末",
	"宪",
	"庆",
	"编",
	"牛",
	"触",
	"映",
	"雷",
	"销",
	"诗",
	"座",
	"居",
	"抓",
	"裂",
	"胞",
	"呼",
	"娘",
	"景",
	"威",
	"绿",
	"晶",
	"厚",
	"盟",
	"衡",
	"鸡",
	"孙",
	"延",
	"危",
	"胶",
	"屋",
	"乡",
	"临",
	"陆",
	"顾",
	"掉",
	"呀",
	"灯",
	"岁",
	"措",
	"束",
	"耐",
	"剧",
	"玉",
	"赵",
	"跳",
	"哥",
	"季",
	"课",
	"凯",
	"胡",
	"额",
	"款",
	"绍",
	"卷",
	"齐",
	"伟",
	"蒸",
	"殖",
	"永",
	"宗",
	"苗",
	"川",
	"炉",
	"岩",
	"弱",
	"零",
	"杨",
	"奏",
	"沿",
	"露",
	"杆",
	"探",
	"滑",
	"镇",
	"饭",
	"浓",
	"航",
	"怀",
	"赶",
	"库",
	"夺",
	"伊",
	"灵",
	"税",
	"途",
	"灭",
	"赛",
	"归",
	"召",
	"鼓",
	"播",
	"盘",
	"裁",
	"险",
	"康",
	"唯",
	"录",
	"菌",
	"纯",
	"借",
	"糖",
	"盖",
	"横",
	"符",
	"私",
	"努",
	"堂",
	"域",
	"枪",
	"润",
	"幅",
	"哈",
	"竟",
	"熟",
	"虫",
	"泽",
	"脑",
	"壤",
	"碳",
	"欧",
	"遍",
	"侧",
	"寨",
	"敢",
	"彻",
	"虑",
	"斜",
	"薄",
	"庭",
	"纳",
	"弹",
	"饲",
	"伸",
	"折",
	"麦",
	"湿",
	"暗",
	"荷",
	"瓦",
	"塞",
	"床",
	"筑",
	"恶",
	"户",
	"访",
	"塔",
	"奇",
	"透",
	"梁",
	"刀",
	"旋",
	"迹",
	"卡",
	"氯",
	"遇",
	"份",
	"毒",
	"泥",
	"退",
	"洗",
	"摆",
	"灰",
	"彩",
	"卖",
	"耗",
	"夏",
	"择",
	"忙",
	"铜",
	"献",
	"硬",
	"予",
	"繁",
	"圈",
	"雪",
	"函",
	"亦",
	"抽",
	"篇",
	"阵",
	"阴",
	"丁",
	"尺",
	"追",
	"堆",
	"雄",
	"迎",
	"泛",
	"爸",
	"楼",
	"避",
	"谋",
	"吨",
	"野",
	"猪",
	"旗",
	"累",
	"偏",
	"典",
	"馆",
	"索",
	"秦",
	"脂",
	"潮",
	"爷",
	"豆",
	"忽",
	"托",
	"惊",
	"塑",
	"遗",
	"愈",
	"朱",
	"替",
	"纤",
	"粗",
	"倾",
	"尚",
	"痛",
	"楚",
	"谢",
	"奋",
	"购",
	"磨",
	"君",
	"池",
	"旁",
	"碎",
	"骨",
	"监",
	"捕",
	"弟",
	"暴",
	"割",
	"贯",
	"殊",
	"释",
	"词",
	"亡",
	"壁",
	"顿",
	"宝",
	"午",
	"尘",
	"闻",
	"揭",
	"炮",
	"残",
	"冬",
	"桥",
	"妇",
	"警",
	"综",
	"招",
	"吴",
	"付",
	"浮",
	"遭",
	"徐",
	"您",
	"摇",
	"谷",
	"赞",
	"箱",
	"隔",
	"订",
	"男",
	"吹",
	"园",
	"纷",
	"唐",
	"败",
	"宋",
	"玻",
	"巨",
	"耕",
	"坦",
	"荣",
	"闭",
	"湾",
	"键",
	"凡",
	"驻",
	"锅",
	"救",
	"恩",
	"剥",
	"凝",
	"碱",
	"齿",
	"截",
	"炼",
	"麻",
	"纺",
	"禁",
	"废",
	"盛",
	"版",
	"缓",
	"净",
	"睛",
	"昌",
	"婚",
	"涉",
	"筒",
	"嘴",
	"插",
	"岸",
	"朗",
	"庄",
	"街",
	"藏",
	"姑",
	"贸",
	"腐",
	"奴",
	"啦",
	"惯",
	"乘",
	"伙",
	"恢",
	"匀",
	"纱",
	"扎",
	"辩",
	"耳",
	"彪",
	"臣",
	"亿",
	"璃",
	"抵",
	"脉",
	"秀",
	"萨",
	"俄",
	"网",
	"舞",
	"店",
	"喷",
	"纵",
	"寸",
	"汗",
	"挂",
	"洪",
	"贺",
	"闪",
	"柬",
	"爆",
	"烯",
	"津",
	"稻",
	"墙",
	"软",
	"勇",
	"像",
	"滚",
	"厘",
	"蒙",
	"芳",
	"肯",
	"坡",
	"柱",
	"荡",
	"腿",
	"仪",
	"旅",
	"尾",
	"轧",
	"冰",
	"贡",
	"登",
	"黎",
	"削",
	"钻",
	"勒",
	"逃",
	"障",
	"氨",
	"郭",
	"峰",
	"币",
	"港",
	"伏",
	"轨",
	"亩",
	"毕",
	"擦",
	"莫",
	"刺",
	"浪",
	"秘",
	"援",
	"株",
	"健",
	"售",
	"股",
	"岛",
	"甘",
	"泡",
	"睡",
	"童",
	"铸",
	"汤",
	"阀",
	"休",
	"汇",
	"舍",
	"牧",
	"绕",
	"炸",
	"哲",
	"磷",
	"绩",
	"朋",
	"淡",
	"尖",
	"启",
	"陷",
	"柴",
	"呈",
	"徒",
	"颜",
	"泪",
	"稍",
	"忘",
	"泵",
	"蓝",
	"拖",
	"洞",
	"授",
	"镜",
	"辛",
	"壮",
	"锋",
	"贫",
	"虚",
	"弯",
	"摩",
	"泰",
	"幼",
	"廷",
	"尊",
	"窗",
	"纲",
	"弄",
	"隶",
	"疑",
	"氏",
	"宫",
	"姐",
	"震",
	"瑞",
	"怪",
	"尤",
	"琴",
	"循",
	"描",
	"膜",
	"违",
	"夹",
	"腰",
	"缘",
	"珠",
	"穷",
	"森",
	"枝",
	"竹",
	"沟",
	"催",
	"绳",
	"忆",
	"邦",
	"剩",
	"幸",
	"浆",
	"栏",
	"拥",
	"牙",
	"贮",
	"礼",
	"滤",
	"钠",
	"纹",
	"罢",
	"拍",
	"咱",
	"喊",
	"袖",
	"埃",
	"勤",
	"罚",
	"焦",
	"潜",
	"伍",
	"墨",
	"欲",
	"缝",
	"姓",
	"刊",
	"饱",
	"仿",
	"奖",
	"铝",
	"鬼",
	"丽",
	"跨",
	"默",
	"挖",
	"链",
	"扫",
	"喝",
	"袋",
	"炭",
	"污",
	"幕",
	"诸",
	"弧",
	"励",
	"梅",
	"奶",
	"洁",
	"灾",
	"舟",
	"鉴",
	"苯",
	"讼",
	"抱",
	"毁",
	"懂",
	"寒",
	"智",
	"埔",
	"寄",
	"届",
	"跃",
	"渡",
	"挑",
	"丹",
	"艰",
	"贝",
	"碰",
	"拔",
	"爹",
	"戴",
	"码",
	"梦",
	"芽",
	"熔",
	"赤",
	"渔",
	"哭",
	"敬",
	"颗",
	"奔",
	"铅",
	"仲",
	"虎",
	"稀",
	"妹",
	"乏",
	"珍",
	"申",
	"桌",
	"遵",
	"允",
	"隆",
	"螺",
	"仓",
	"魏",
	"锐",
	"晓",
	"氮",
	"兼",
	"隐",
	"碍",
	"赫",
	"拨",
	"忠",
	"肃",
	"缸",
	"牵",
	"抢",
	"博",
	"巧",
	"壳",
	"兄",
	"杜",
	"讯",
	"诚",
	"碧",
	"祥",
	"柯",
	"页",
	"巡",
	"矩",
	"悲",
	"灌",
	"龄",
	"伦",
	"票",
	"寻",
	"桂",
	"铺",
	"圣",
	"恐",
	"恰",
	"郑",
	"趣",
	"抬",
	"荒",
	"腾",
	"贴",
	"柔",
	"滴",
	"猛",
	"阔",
	"辆",
	"妻",
	"填",
	"撤",
	"储",
	"签",
	"闹",
	"扰",
	"紫",
	"砂",
	"递",
	"戏",
	"吊",
	"陶",
	"伐",
	"喂",
	"疗",
	"瓶",
	"婆",
	"抚",
	"臂",
	"摸",
	"忍",
	"虾",
	"蜡",
	"邻",
	"胸",
	"巩",
	"挤",
	"偶",
	"弃",
	"槽",
	"劲",
	"乳",
	"邓",
	"吉",
	"仁",
	"烂",
	"砖",
	"租",
	"乌",
	"舰",
	"伴",
	"瓜",
	"浅",
	"丙",
	"暂",
	"燥",
	"橡",
	"柳",
	"迷",
	"暖",
	"牌",
	"秧",
	"胆",
	"详",
	"簧",
	"踏",
	"瓷",
	"谱",
	"呆",
	"宾",
	"糊",
	"洛",
	"辉",
	"愤",
	"竞",
	"隙",
	"怒",
	"粘",
	"乃",
	"绪",
	"肩",
	"籍",
	"敏",
	"涂",
	"熙",
	"皆",
	"侦",
	"悬",
	"掘",
	"享",
	"纠",
	"醒",
	"狂",
	"锁",
	"淀",
	"恨",
	"牲",
	"霸",
	"爬",
	"赏",
	"逆",
	"玩",
	"陵",
	"祝",
	"秒",
	"浙",
	"貌",
	"役",
	"彼",
	"悉",
	"鸭",
	"趋",
	"凤",
	"晨",
	"畜",
	"辈",
	"秩",
	"卵",
	"署",
	"梯",
	"炎",
	"滩",
	"棋",
	"驱",
	"筛",
	"峡",
	"冒",
	"啥",
	"寿",
	"译",
	"浸",
	"泉",
	"帽",
	"迟",
	"硅",
	"疆",
	"贷",
	"漏",
	"稿",
	"冠",
	"嫩",
	"胁",
	"芯",
	"牢",
	"叛",
	"蚀",
	"奥",
	"鸣",
	"岭",
	"羊",
	"凭",
	"串",
	"塘",
	"绘",
	"酵",
	"融",
	"盆",
	"锡",
	"庙",
	"筹",
	"冻",
	"辅",
	"摄",
	"袭",
	"筋",
	"拒",
	"僚",
	"旱",
	"钾",
	"鸟",
	"漆",
	"沈",
	"眉",
	"疏",
	"添",
	"棒",
	"穗",
	"硝",
	"韩",
	"逼",
	"扭",
	"侨",
	"凉",
	"挺",
	"碗",
	"栽",
	"炒",
	"杯",
	"患",
	"馏",
	"劝",
	"豪",
	"辽",
	"勃",
	"鸿",
	"旦",
	"吏",
	"拜",
	"狗",
	"埋",
	"辊",
	"掩",
	"饮",
	"搬",
	"骂",
	"辞",
	"勾",
	"扣",
	"估",
	"蒋",
	"绒",
	"雾",
	"丈",
	"朵",
	"姆",
	"拟",
	"宇",
	"辑",
	"陕",
	"雕",
	"偿",
	"蓄",
	"崇",
	"剪",
	"倡",
	"厅",
	"咬",
	"驶",
	"薯",
	"刷",
	"斥",
	"番",
	"赋",
	"奉",
	"佛",
	"浇",
	"漫",
	"曼",
	"扇",
	"钙",
	"桃",
	"扶",
	"仔",
	"返",
	"俗",
	"亏",
	"腔",
	"鞋",
	"棱",
	"覆",
	"框",
	"悄",
	"叔",
	"撞",
	"骗",
	"勘",
	"旺",
	"沸",
	"孤",
	"吐",
	"孟",
	"渠",
	"屈",
	"疾",
	"妙",
	"惜",
	"仰",
	"狠",
	"胀",
	"谐",
	"抛",
	"霉",
	"桑",
	"岗",
	"嘛",
	"衰",
	"盗",
	"渗",
	"脏",
	"赖",
	"涌",
	"甜",
	"曹",
	"阅",
	"肌",
	"哩",
	"厉",
	"烃",
	"纬",
	"毅",
	"昨",
	"伪",
	"症",
	"煮",
	"叹",
	"钉",
	"搭",
	"茎",
	"笼",
	"酷",
	"偷",
	"弓",
	"锥",
	"恒",
	"杰",
	"坑",
	"鼻",
	"翼",
	"纶",
	"叙",
	"狱",
	"逮",
	"罐",
	"络",
	"棚",
	"抑",
	"膨",
	"蔬",
	"寺",
	"骤",
	"穆",
	"冶",
	"枯",
	"册",
	"尸",
	"凸",
	"绅",
	"坯",
	"牺",
	"焰",
	"轰",
	"欣",
	"晋",
	"瘦",
	"御",
	"锭",
	"锦",
	"丧",
	"旬",
	"锻",
	"垄",
	"搜",
	"扑",
	"邀",
	"亭",
	"酯",
	"迈",
	"舒",
	"脆",
	"酶",
	"闲",
	"忧",
	"酚",
	"顽",
	"羽",
	"涨",
	"卸",
	"仗",
	"陪",
	"辟",
	"惩",
	"杭",
	"姚",
	"肚",
	"捉",
	"飘",
	"漂",
	"昆",
	"欺",
	"吾",
	"郎",
	"烷",
	"汁",
	"呵",
	"饰",
	"萧",
	"雅",
	"邮",
	"迁",
	"燕",
	"撒",
	"姻",
	"赴",
	"宴",
	"烦",
	"债",
	"帐",
	"斑",
	"铃",
	"旨",
	"醇",
	"董",
	"饼",
	"雏",
	"姿",
	"拌",
	"傅",
	"腹",
	"妥",
	"揉",
	"贤",
	"拆",
	"歪",
	"葡",
	"胺",
	"丢",
	"浩",
	"徽",
	"昂",
	"垫",
	"挡",
	"览",
	"贪",
	"慰",
	"缴",
	"汪",
	"慌",
	"冯",
	"诺",
	"姜",
	"谊",
	"凶",
	"劣",
	"诬",
	"耀",
	"昏",
	"躺",
	"盈",
	"骑",
	"乔",
	"溪",
	"丛",
	"卢",
	"抹",
	"闷",
	"咨",
	"刮",
	"驾",
	"缆",
	"悟",
	"摘",
	"铒",
	"掷",
	"颇",
	"幻",
	"柄",
	"惠",
	"惨",
	"佳",
	"仇",
	"腊",
	"窝",
	"涤",
	"剑",
	"瞧",
	"堡",
	"泼",
	"葱",
	"罩",
	"霍",
	"捞",
	"胎",
	"苍",
	"滨",
	"俩",
	"捅",
	"湘",
	"砍",
	"霞",
	"邵",
	"萄",
	"疯",
	"淮",
	"遂",
	"熊",
	"粪",
	"烘",
	"宿",
	"档",
	"戈",
	"驳",
	"嫂",
	"裕",
	"徙",
	"箭",
	"捐",
	"肠",
	"撑",
	"晒",
	"辨",
	"殿",
	"莲",
	"摊",
	"搅",
	"酱",
	"屏",
	"疫",
	"哀",
	"蔡",
	"堵",
	"沫",
	"皱",
	"畅",
	"叠",
	"阁",
	"莱",
	"敲",
	"辖",
	"钩",
	"痕",
	"坝",
	"巷",
	"饿",
	"祸",
	"丘",
	"玄",
	"溜",
	"曰",
	"逻",
	"彭",
	"尝",
	"卿",
	"妨",
	"艇",
	"吞",
	"韦",
	"怨",
	"矮",
	"歇"
];

const require$$2 = [
	"的",
	"一",
	"是",
	"在",
	"不",
	"了",
	"有",
	"和",
	"人",
	"這",
	"中",
	"大",
	"為",
	"上",
	"個",
	"國",
	"我",
	"以",
	"要",
	"他",
	"時",
	"來",
	"用",
	"們",
	"生",
	"到",
	"作",
	"地",
	"於",
	"出",
	"就",
	"分",
	"對",
	"成",
	"會",
	"可",
	"主",
	"發",
	"年",
	"動",
	"同",
	"工",
	"也",
	"能",
	"下",
	"過",
	"子",
	"說",
	"產",
	"種",
	"面",
	"而",
	"方",
	"後",
	"多",
	"定",
	"行",
	"學",
	"法",
	"所",
	"民",
	"得",
	"經",
	"十",
	"三",
	"之",
	"進",
	"著",
	"等",
	"部",
	"度",
	"家",
	"電",
	"力",
	"裡",
	"如",
	"水",
	"化",
	"高",
	"自",
	"二",
	"理",
	"起",
	"小",
	"物",
	"現",
	"實",
	"加",
	"量",
	"都",
	"兩",
	"體",
	"制",
	"機",
	"當",
	"使",
	"點",
	"從",
	"業",
	"本",
	"去",
	"把",
	"性",
	"好",
	"應",
	"開",
	"它",
	"合",
	"還",
	"因",
	"由",
	"其",
	"些",
	"然",
	"前",
	"外",
	"天",
	"政",
	"四",
	"日",
	"那",
	"社",
	"義",
	"事",
	"平",
	"形",
	"相",
	"全",
	"表",
	"間",
	"樣",
	"與",
	"關",
	"各",
	"重",
	"新",
	"線",
	"內",
	"數",
	"正",
	"心",
	"反",
	"你",
	"明",
	"看",
	"原",
	"又",
	"麼",
	"利",
	"比",
	"或",
	"但",
	"質",
	"氣",
	"第",
	"向",
	"道",
	"命",
	"此",
	"變",
	"條",
	"只",
	"沒",
	"結",
	"解",
	"問",
	"意",
	"建",
	"月",
	"公",
	"無",
	"系",
	"軍",
	"很",
	"情",
	"者",
	"最",
	"立",
	"代",
	"想",
	"已",
	"通",
	"並",
	"提",
	"直",
	"題",
	"黨",
	"程",
	"展",
	"五",
	"果",
	"料",
	"象",
	"員",
	"革",
	"位",
	"入",
	"常",
	"文",
	"總",
	"次",
	"品",
	"式",
	"活",
	"設",
	"及",
	"管",
	"特",
	"件",
	"長",
	"求",
	"老",
	"頭",
	"基",
	"資",
	"邊",
	"流",
	"路",
	"級",
	"少",
	"圖",
	"山",
	"統",
	"接",
	"知",
	"較",
	"將",
	"組",
	"見",
	"計",
	"別",
	"她",
	"手",
	"角",
	"期",
	"根",
	"論",
	"運",
	"農",
	"指",
	"幾",
	"九",
	"區",
	"強",
	"放",
	"決",
	"西",
	"被",
	"幹",
	"做",
	"必",
	"戰",
	"先",
	"回",
	"則",
	"任",
	"取",
	"據",
	"處",
	"隊",
	"南",
	"給",
	"色",
	"光",
	"門",
	"即",
	"保",
	"治",
	"北",
	"造",
	"百",
	"規",
	"熱",
	"領",
	"七",
	"海",
	"口",
	"東",
	"導",
	"器",
	"壓",
	"志",
	"世",
	"金",
	"增",
	"爭",
	"濟",
	"階",
	"油",
	"思",
	"術",
	"極",
	"交",
	"受",
	"聯",
	"什",
	"認",
	"六",
	"共",
	"權",
	"收",
	"證",
	"改",
	"清",
	"美",
	"再",
	"採",
	"轉",
	"更",
	"單",
	"風",
	"切",
	"打",
	"白",
	"教",
	"速",
	"花",
	"帶",
	"安",
	"場",
	"身",
	"車",
	"例",
	"真",
	"務",
	"具",
	"萬",
	"每",
	"目",
	"至",
	"達",
	"走",
	"積",
	"示",
	"議",
	"聲",
	"報",
	"鬥",
	"完",
	"類",
	"八",
	"離",
	"華",
	"名",
	"確",
	"才",
	"科",
	"張",
	"信",
	"馬",
	"節",
	"話",
	"米",
	"整",
	"空",
	"元",
	"況",
	"今",
	"集",
	"溫",
	"傳",
	"土",
	"許",
	"步",
	"群",
	"廣",
	"石",
	"記",
	"需",
	"段",
	"研",
	"界",
	"拉",
	"林",
	"律",
	"叫",
	"且",
	"究",
	"觀",
	"越",
	"織",
	"裝",
	"影",
	"算",
	"低",
	"持",
	"音",
	"眾",
	"書",
	"布",
	"复",
	"容",
	"兒",
	"須",
	"際",
	"商",
	"非",
	"驗",
	"連",
	"斷",
	"深",
	"難",
	"近",
	"礦",
	"千",
	"週",
	"委",
	"素",
	"技",
	"備",
	"半",
	"辦",
	"青",
	"省",
	"列",
	"習",
	"響",
	"約",
	"支",
	"般",
	"史",
	"感",
	"勞",
	"便",
	"團",
	"往",
	"酸",
	"歷",
	"市",
	"克",
	"何",
	"除",
	"消",
	"構",
	"府",
	"稱",
	"太",
	"準",
	"精",
	"值",
	"號",
	"率",
	"族",
	"維",
	"劃",
	"選",
	"標",
	"寫",
	"存",
	"候",
	"毛",
	"親",
	"快",
	"效",
	"斯",
	"院",
	"查",
	"江",
	"型",
	"眼",
	"王",
	"按",
	"格",
	"養",
	"易",
	"置",
	"派",
	"層",
	"片",
	"始",
	"卻",
	"專",
	"狀",
	"育",
	"廠",
	"京",
	"識",
	"適",
	"屬",
	"圓",
	"包",
	"火",
	"住",
	"調",
	"滿",
	"縣",
	"局",
	"照",
	"參",
	"紅",
	"細",
	"引",
	"聽",
	"該",
	"鐵",
	"價",
	"嚴",
	"首",
	"底",
	"液",
	"官",
	"德",
	"隨",
	"病",
	"蘇",
	"失",
	"爾",
	"死",
	"講",
	"配",
	"女",
	"黃",
	"推",
	"顯",
	"談",
	"罪",
	"神",
	"藝",
	"呢",
	"席",
	"含",
	"企",
	"望",
	"密",
	"批",
	"營",
	"項",
	"防",
	"舉",
	"球",
	"英",
	"氧",
	"勢",
	"告",
	"李",
	"台",
	"落",
	"木",
	"幫",
	"輪",
	"破",
	"亞",
	"師",
	"圍",
	"注",
	"遠",
	"字",
	"材",
	"排",
	"供",
	"河",
	"態",
	"封",
	"另",
	"施",
	"減",
	"樹",
	"溶",
	"怎",
	"止",
	"案",
	"言",
	"士",
	"均",
	"武",
	"固",
	"葉",
	"魚",
	"波",
	"視",
	"僅",
	"費",
	"緊",
	"愛",
	"左",
	"章",
	"早",
	"朝",
	"害",
	"續",
	"輕",
	"服",
	"試",
	"食",
	"充",
	"兵",
	"源",
	"判",
	"護",
	"司",
	"足",
	"某",
	"練",
	"差",
	"致",
	"板",
	"田",
	"降",
	"黑",
	"犯",
	"負",
	"擊",
	"范",
	"繼",
	"興",
	"似",
	"餘",
	"堅",
	"曲",
	"輸",
	"修",
	"故",
	"城",
	"夫",
	"夠",
	"送",
	"筆",
	"船",
	"佔",
	"右",
	"財",
	"吃",
	"富",
	"春",
	"職",
	"覺",
	"漢",
	"畫",
	"功",
	"巴",
	"跟",
	"雖",
	"雜",
	"飛",
	"檢",
	"吸",
	"助",
	"昇",
	"陽",
	"互",
	"初",
	"創",
	"抗",
	"考",
	"投",
	"壞",
	"策",
	"古",
	"徑",
	"換",
	"未",
	"跑",
	"留",
	"鋼",
	"曾",
	"端",
	"責",
	"站",
	"簡",
	"述",
	"錢",
	"副",
	"盡",
	"帝",
	"射",
	"草",
	"衝",
	"承",
	"獨",
	"令",
	"限",
	"阿",
	"宣",
	"環",
	"雙",
	"請",
	"超",
	"微",
	"讓",
	"控",
	"州",
	"良",
	"軸",
	"找",
	"否",
	"紀",
	"益",
	"依",
	"優",
	"頂",
	"礎",
	"載",
	"倒",
	"房",
	"突",
	"坐",
	"粉",
	"敵",
	"略",
	"客",
	"袁",
	"冷",
	"勝",
	"絕",
	"析",
	"塊",
	"劑",
	"測",
	"絲",
	"協",
	"訴",
	"念",
	"陳",
	"仍",
	"羅",
	"鹽",
	"友",
	"洋",
	"錯",
	"苦",
	"夜",
	"刑",
	"移",
	"頻",
	"逐",
	"靠",
	"混",
	"母",
	"短",
	"皮",
	"終",
	"聚",
	"汽",
	"村",
	"雲",
	"哪",
	"既",
	"距",
	"衛",
	"停",
	"烈",
	"央",
	"察",
	"燒",
	"迅",
	"境",
	"若",
	"印",
	"洲",
	"刻",
	"括",
	"激",
	"孔",
	"搞",
	"甚",
	"室",
	"待",
	"核",
	"校",
	"散",
	"侵",
	"吧",
	"甲",
	"遊",
	"久",
	"菜",
	"味",
	"舊",
	"模",
	"湖",
	"貨",
	"損",
	"預",
	"阻",
	"毫",
	"普",
	"穩",
	"乙",
	"媽",
	"植",
	"息",
	"擴",
	"銀",
	"語",
	"揮",
	"酒",
	"守",
	"拿",
	"序",
	"紙",
	"醫",
	"缺",
	"雨",
	"嗎",
	"針",
	"劉",
	"啊",
	"急",
	"唱",
	"誤",
	"訓",
	"願",
	"審",
	"附",
	"獲",
	"茶",
	"鮮",
	"糧",
	"斤",
	"孩",
	"脫",
	"硫",
	"肥",
	"善",
	"龍",
	"演",
	"父",
	"漸",
	"血",
	"歡",
	"械",
	"掌",
	"歌",
	"沙",
	"剛",
	"攻",
	"謂",
	"盾",
	"討",
	"晚",
	"粒",
	"亂",
	"燃",
	"矛",
	"乎",
	"殺",
	"藥",
	"寧",
	"魯",
	"貴",
	"鐘",
	"煤",
	"讀",
	"班",
	"伯",
	"香",
	"介",
	"迫",
	"句",
	"豐",
	"培",
	"握",
	"蘭",
	"擔",
	"弦",
	"蛋",
	"沉",
	"假",
	"穿",
	"執",
	"答",
	"樂",
	"誰",
	"順",
	"煙",
	"縮",
	"徵",
	"臉",
	"喜",
	"松",
	"腳",
	"困",
	"異",
	"免",
	"背",
	"星",
	"福",
	"買",
	"染",
	"井",
	"概",
	"慢",
	"怕",
	"磁",
	"倍",
	"祖",
	"皇",
	"促",
	"靜",
	"補",
	"評",
	"翻",
	"肉",
	"踐",
	"尼",
	"衣",
	"寬",
	"揚",
	"棉",
	"希",
	"傷",
	"操",
	"垂",
	"秋",
	"宜",
	"氫",
	"套",
	"督",
	"振",
	"架",
	"亮",
	"末",
	"憲",
	"慶",
	"編",
	"牛",
	"觸",
	"映",
	"雷",
	"銷",
	"詩",
	"座",
	"居",
	"抓",
	"裂",
	"胞",
	"呼",
	"娘",
	"景",
	"威",
	"綠",
	"晶",
	"厚",
	"盟",
	"衡",
	"雞",
	"孫",
	"延",
	"危",
	"膠",
	"屋",
	"鄉",
	"臨",
	"陸",
	"顧",
	"掉",
	"呀",
	"燈",
	"歲",
	"措",
	"束",
	"耐",
	"劇",
	"玉",
	"趙",
	"跳",
	"哥",
	"季",
	"課",
	"凱",
	"胡",
	"額",
	"款",
	"紹",
	"卷",
	"齊",
	"偉",
	"蒸",
	"殖",
	"永",
	"宗",
	"苗",
	"川",
	"爐",
	"岩",
	"弱",
	"零",
	"楊",
	"奏",
	"沿",
	"露",
	"桿",
	"探",
	"滑",
	"鎮",
	"飯",
	"濃",
	"航",
	"懷",
	"趕",
	"庫",
	"奪",
	"伊",
	"靈",
	"稅",
	"途",
	"滅",
	"賽",
	"歸",
	"召",
	"鼓",
	"播",
	"盤",
	"裁",
	"險",
	"康",
	"唯",
	"錄",
	"菌",
	"純",
	"借",
	"糖",
	"蓋",
	"橫",
	"符",
	"私",
	"努",
	"堂",
	"域",
	"槍",
	"潤",
	"幅",
	"哈",
	"竟",
	"熟",
	"蟲",
	"澤",
	"腦",
	"壤",
	"碳",
	"歐",
	"遍",
	"側",
	"寨",
	"敢",
	"徹",
	"慮",
	"斜",
	"薄",
	"庭",
	"納",
	"彈",
	"飼",
	"伸",
	"折",
	"麥",
	"濕",
	"暗",
	"荷",
	"瓦",
	"塞",
	"床",
	"築",
	"惡",
	"戶",
	"訪",
	"塔",
	"奇",
	"透",
	"梁",
	"刀",
	"旋",
	"跡",
	"卡",
	"氯",
	"遇",
	"份",
	"毒",
	"泥",
	"退",
	"洗",
	"擺",
	"灰",
	"彩",
	"賣",
	"耗",
	"夏",
	"擇",
	"忙",
	"銅",
	"獻",
	"硬",
	"予",
	"繁",
	"圈",
	"雪",
	"函",
	"亦",
	"抽",
	"篇",
	"陣",
	"陰",
	"丁",
	"尺",
	"追",
	"堆",
	"雄",
	"迎",
	"泛",
	"爸",
	"樓",
	"避",
	"謀",
	"噸",
	"野",
	"豬",
	"旗",
	"累",
	"偏",
	"典",
	"館",
	"索",
	"秦",
	"脂",
	"潮",
	"爺",
	"豆",
	"忽",
	"托",
	"驚",
	"塑",
	"遺",
	"愈",
	"朱",
	"替",
	"纖",
	"粗",
	"傾",
	"尚",
	"痛",
	"楚",
	"謝",
	"奮",
	"購",
	"磨",
	"君",
	"池",
	"旁",
	"碎",
	"骨",
	"監",
	"捕",
	"弟",
	"暴",
	"割",
	"貫",
	"殊",
	"釋",
	"詞",
	"亡",
	"壁",
	"頓",
	"寶",
	"午",
	"塵",
	"聞",
	"揭",
	"炮",
	"殘",
	"冬",
	"橋",
	"婦",
	"警",
	"綜",
	"招",
	"吳",
	"付",
	"浮",
	"遭",
	"徐",
	"您",
	"搖",
	"谷",
	"贊",
	"箱",
	"隔",
	"訂",
	"男",
	"吹",
	"園",
	"紛",
	"唐",
	"敗",
	"宋",
	"玻",
	"巨",
	"耕",
	"坦",
	"榮",
	"閉",
	"灣",
	"鍵",
	"凡",
	"駐",
	"鍋",
	"救",
	"恩",
	"剝",
	"凝",
	"鹼",
	"齒",
	"截",
	"煉",
	"麻",
	"紡",
	"禁",
	"廢",
	"盛",
	"版",
	"緩",
	"淨",
	"睛",
	"昌",
	"婚",
	"涉",
	"筒",
	"嘴",
	"插",
	"岸",
	"朗",
	"莊",
	"街",
	"藏",
	"姑",
	"貿",
	"腐",
	"奴",
	"啦",
	"慣",
	"乘",
	"夥",
	"恢",
	"勻",
	"紗",
	"扎",
	"辯",
	"耳",
	"彪",
	"臣",
	"億",
	"璃",
	"抵",
	"脈",
	"秀",
	"薩",
	"俄",
	"網",
	"舞",
	"店",
	"噴",
	"縱",
	"寸",
	"汗",
	"掛",
	"洪",
	"賀",
	"閃",
	"柬",
	"爆",
	"烯",
	"津",
	"稻",
	"牆",
	"軟",
	"勇",
	"像",
	"滾",
	"厘",
	"蒙",
	"芳",
	"肯",
	"坡",
	"柱",
	"盪",
	"腿",
	"儀",
	"旅",
	"尾",
	"軋",
	"冰",
	"貢",
	"登",
	"黎",
	"削",
	"鑽",
	"勒",
	"逃",
	"障",
	"氨",
	"郭",
	"峰",
	"幣",
	"港",
	"伏",
	"軌",
	"畝",
	"畢",
	"擦",
	"莫",
	"刺",
	"浪",
	"秘",
	"援",
	"株",
	"健",
	"售",
	"股",
	"島",
	"甘",
	"泡",
	"睡",
	"童",
	"鑄",
	"湯",
	"閥",
	"休",
	"匯",
	"舍",
	"牧",
	"繞",
	"炸",
	"哲",
	"磷",
	"績",
	"朋",
	"淡",
	"尖",
	"啟",
	"陷",
	"柴",
	"呈",
	"徒",
	"顏",
	"淚",
	"稍",
	"忘",
	"泵",
	"藍",
	"拖",
	"洞",
	"授",
	"鏡",
	"辛",
	"壯",
	"鋒",
	"貧",
	"虛",
	"彎",
	"摩",
	"泰",
	"幼",
	"廷",
	"尊",
	"窗",
	"綱",
	"弄",
	"隸",
	"疑",
	"氏",
	"宮",
	"姐",
	"震",
	"瑞",
	"怪",
	"尤",
	"琴",
	"循",
	"描",
	"膜",
	"違",
	"夾",
	"腰",
	"緣",
	"珠",
	"窮",
	"森",
	"枝",
	"竹",
	"溝",
	"催",
	"繩",
	"憶",
	"邦",
	"剩",
	"幸",
	"漿",
	"欄",
	"擁",
	"牙",
	"貯",
	"禮",
	"濾",
	"鈉",
	"紋",
	"罷",
	"拍",
	"咱",
	"喊",
	"袖",
	"埃",
	"勤",
	"罰",
	"焦",
	"潛",
	"伍",
	"墨",
	"欲",
	"縫",
	"姓",
	"刊",
	"飽",
	"仿",
	"獎",
	"鋁",
	"鬼",
	"麗",
	"跨",
	"默",
	"挖",
	"鏈",
	"掃",
	"喝",
	"袋",
	"炭",
	"污",
	"幕",
	"諸",
	"弧",
	"勵",
	"梅",
	"奶",
	"潔",
	"災",
	"舟",
	"鑑",
	"苯",
	"訟",
	"抱",
	"毀",
	"懂",
	"寒",
	"智",
	"埔",
	"寄",
	"屆",
	"躍",
	"渡",
	"挑",
	"丹",
	"艱",
	"貝",
	"碰",
	"拔",
	"爹",
	"戴",
	"碼",
	"夢",
	"芽",
	"熔",
	"赤",
	"漁",
	"哭",
	"敬",
	"顆",
	"奔",
	"鉛",
	"仲",
	"虎",
	"稀",
	"妹",
	"乏",
	"珍",
	"申",
	"桌",
	"遵",
	"允",
	"隆",
	"螺",
	"倉",
	"魏",
	"銳",
	"曉",
	"氮",
	"兼",
	"隱",
	"礙",
	"赫",
	"撥",
	"忠",
	"肅",
	"缸",
	"牽",
	"搶",
	"博",
	"巧",
	"殼",
	"兄",
	"杜",
	"訊",
	"誠",
	"碧",
	"祥",
	"柯",
	"頁",
	"巡",
	"矩",
	"悲",
	"灌",
	"齡",
	"倫",
	"票",
	"尋",
	"桂",
	"鋪",
	"聖",
	"恐",
	"恰",
	"鄭",
	"趣",
	"抬",
	"荒",
	"騰",
	"貼",
	"柔",
	"滴",
	"猛",
	"闊",
	"輛",
	"妻",
	"填",
	"撤",
	"儲",
	"簽",
	"鬧",
	"擾",
	"紫",
	"砂",
	"遞",
	"戲",
	"吊",
	"陶",
	"伐",
	"餵",
	"療",
	"瓶",
	"婆",
	"撫",
	"臂",
	"摸",
	"忍",
	"蝦",
	"蠟",
	"鄰",
	"胸",
	"鞏",
	"擠",
	"偶",
	"棄",
	"槽",
	"勁",
	"乳",
	"鄧",
	"吉",
	"仁",
	"爛",
	"磚",
	"租",
	"烏",
	"艦",
	"伴",
	"瓜",
	"淺",
	"丙",
	"暫",
	"燥",
	"橡",
	"柳",
	"迷",
	"暖",
	"牌",
	"秧",
	"膽",
	"詳",
	"簧",
	"踏",
	"瓷",
	"譜",
	"呆",
	"賓",
	"糊",
	"洛",
	"輝",
	"憤",
	"競",
	"隙",
	"怒",
	"粘",
	"乃",
	"緒",
	"肩",
	"籍",
	"敏",
	"塗",
	"熙",
	"皆",
	"偵",
	"懸",
	"掘",
	"享",
	"糾",
	"醒",
	"狂",
	"鎖",
	"淀",
	"恨",
	"牲",
	"霸",
	"爬",
	"賞",
	"逆",
	"玩",
	"陵",
	"祝",
	"秒",
	"浙",
	"貌",
	"役",
	"彼",
	"悉",
	"鴨",
	"趨",
	"鳳",
	"晨",
	"畜",
	"輩",
	"秩",
	"卵",
	"署",
	"梯",
	"炎",
	"灘",
	"棋",
	"驅",
	"篩",
	"峽",
	"冒",
	"啥",
	"壽",
	"譯",
	"浸",
	"泉",
	"帽",
	"遲",
	"矽",
	"疆",
	"貸",
	"漏",
	"稿",
	"冠",
	"嫩",
	"脅",
	"芯",
	"牢",
	"叛",
	"蝕",
	"奧",
	"鳴",
	"嶺",
	"羊",
	"憑",
	"串",
	"塘",
	"繪",
	"酵",
	"融",
	"盆",
	"錫",
	"廟",
	"籌",
	"凍",
	"輔",
	"攝",
	"襲",
	"筋",
	"拒",
	"僚",
	"旱",
	"鉀",
	"鳥",
	"漆",
	"沈",
	"眉",
	"疏",
	"添",
	"棒",
	"穗",
	"硝",
	"韓",
	"逼",
	"扭",
	"僑",
	"涼",
	"挺",
	"碗",
	"栽",
	"炒",
	"杯",
	"患",
	"餾",
	"勸",
	"豪",
	"遼",
	"勃",
	"鴻",
	"旦",
	"吏",
	"拜",
	"狗",
	"埋",
	"輥",
	"掩",
	"飲",
	"搬",
	"罵",
	"辭",
	"勾",
	"扣",
	"估",
	"蔣",
	"絨",
	"霧",
	"丈",
	"朵",
	"姆",
	"擬",
	"宇",
	"輯",
	"陝",
	"雕",
	"償",
	"蓄",
	"崇",
	"剪",
	"倡",
	"廳",
	"咬",
	"駛",
	"薯",
	"刷",
	"斥",
	"番",
	"賦",
	"奉",
	"佛",
	"澆",
	"漫",
	"曼",
	"扇",
	"鈣",
	"桃",
	"扶",
	"仔",
	"返",
	"俗",
	"虧",
	"腔",
	"鞋",
	"棱",
	"覆",
	"框",
	"悄",
	"叔",
	"撞",
	"騙",
	"勘",
	"旺",
	"沸",
	"孤",
	"吐",
	"孟",
	"渠",
	"屈",
	"疾",
	"妙",
	"惜",
	"仰",
	"狠",
	"脹",
	"諧",
	"拋",
	"黴",
	"桑",
	"崗",
	"嘛",
	"衰",
	"盜",
	"滲",
	"臟",
	"賴",
	"湧",
	"甜",
	"曹",
	"閱",
	"肌",
	"哩",
	"厲",
	"烴",
	"緯",
	"毅",
	"昨",
	"偽",
	"症",
	"煮",
	"嘆",
	"釘",
	"搭",
	"莖",
	"籠",
	"酷",
	"偷",
	"弓",
	"錐",
	"恆",
	"傑",
	"坑",
	"鼻",
	"翼",
	"綸",
	"敘",
	"獄",
	"逮",
	"罐",
	"絡",
	"棚",
	"抑",
	"膨",
	"蔬",
	"寺",
	"驟",
	"穆",
	"冶",
	"枯",
	"冊",
	"屍",
	"凸",
	"紳",
	"坯",
	"犧",
	"焰",
	"轟",
	"欣",
	"晉",
	"瘦",
	"禦",
	"錠",
	"錦",
	"喪",
	"旬",
	"鍛",
	"壟",
	"搜",
	"撲",
	"邀",
	"亭",
	"酯",
	"邁",
	"舒",
	"脆",
	"酶",
	"閒",
	"憂",
	"酚",
	"頑",
	"羽",
	"漲",
	"卸",
	"仗",
	"陪",
	"闢",
	"懲",
	"杭",
	"姚",
	"肚",
	"捉",
	"飄",
	"漂",
	"昆",
	"欺",
	"吾",
	"郎",
	"烷",
	"汁",
	"呵",
	"飾",
	"蕭",
	"雅",
	"郵",
	"遷",
	"燕",
	"撒",
	"姻",
	"赴",
	"宴",
	"煩",
	"債",
	"帳",
	"斑",
	"鈴",
	"旨",
	"醇",
	"董",
	"餅",
	"雛",
	"姿",
	"拌",
	"傅",
	"腹",
	"妥",
	"揉",
	"賢",
	"拆",
	"歪",
	"葡",
	"胺",
	"丟",
	"浩",
	"徽",
	"昂",
	"墊",
	"擋",
	"覽",
	"貪",
	"慰",
	"繳",
	"汪",
	"慌",
	"馮",
	"諾",
	"姜",
	"誼",
	"兇",
	"劣",
	"誣",
	"耀",
	"昏",
	"躺",
	"盈",
	"騎",
	"喬",
	"溪",
	"叢",
	"盧",
	"抹",
	"悶",
	"諮",
	"刮",
	"駕",
	"纜",
	"悟",
	"摘",
	"鉺",
	"擲",
	"頗",
	"幻",
	"柄",
	"惠",
	"慘",
	"佳",
	"仇",
	"臘",
	"窩",
	"滌",
	"劍",
	"瞧",
	"堡",
	"潑",
	"蔥",
	"罩",
	"霍",
	"撈",
	"胎",
	"蒼",
	"濱",
	"倆",
	"捅",
	"湘",
	"砍",
	"霞",
	"邵",
	"萄",
	"瘋",
	"淮",
	"遂",
	"熊",
	"糞",
	"烘",
	"宿",
	"檔",
	"戈",
	"駁",
	"嫂",
	"裕",
	"徙",
	"箭",
	"捐",
	"腸",
	"撐",
	"曬",
	"辨",
	"殿",
	"蓮",
	"攤",
	"攪",
	"醬",
	"屏",
	"疫",
	"哀",
	"蔡",
	"堵",
	"沫",
	"皺",
	"暢",
	"疊",
	"閣",
	"萊",
	"敲",
	"轄",
	"鉤",
	"痕",
	"壩",
	"巷",
	"餓",
	"禍",
	"丘",
	"玄",
	"溜",
	"曰",
	"邏",
	"彭",
	"嘗",
	"卿",
	"妨",
	"艇",
	"吞",
	"韋",
	"怨",
	"矮",
	"歇"
];

const require$$3 = [
	"가격",
	"가끔",
	"가난",
	"가능",
	"가득",
	"가르침",
	"가뭄",
	"가방",
	"가상",
	"가슴",
	"가운데",
	"가을",
	"가이드",
	"가입",
	"가장",
	"가정",
	"가족",
	"가죽",
	"각오",
	"각자",
	"간격",
	"간부",
	"간섭",
	"간장",
	"간접",
	"간판",
	"갈등",
	"갈비",
	"갈색",
	"갈증",
	"감각",
	"감기",
	"감소",
	"감수성",
	"감자",
	"감정",
	"갑자기",
	"강남",
	"강당",
	"강도",
	"강력히",
	"강변",
	"강북",
	"강사",
	"강수량",
	"강아지",
	"강원도",
	"강의",
	"강제",
	"강조",
	"같이",
	"개구리",
	"개나리",
	"개방",
	"개별",
	"개선",
	"개성",
	"개인",
	"객관적",
	"거실",
	"거액",
	"거울",
	"거짓",
	"거품",
	"걱정",
	"건강",
	"건물",
	"건설",
	"건조",
	"건축",
	"걸음",
	"검사",
	"검토",
	"게시판",
	"게임",
	"겨울",
	"견해",
	"결과",
	"결국",
	"결론",
	"결석",
	"결승",
	"결심",
	"결정",
	"결혼",
	"경계",
	"경고",
	"경기",
	"경력",
	"경복궁",
	"경비",
	"경상도",
	"경영",
	"경우",
	"경쟁",
	"경제",
	"경주",
	"경찰",
	"경치",
	"경향",
	"경험",
	"계곡",
	"계단",
	"계란",
	"계산",
	"계속",
	"계약",
	"계절",
	"계층",
	"계획",
	"고객",
	"고구려",
	"고궁",
	"고급",
	"고등학생",
	"고무신",
	"고민",
	"고양이",
	"고장",
	"고전",
	"고집",
	"고춧가루",
	"고통",
	"고향",
	"곡식",
	"골목",
	"골짜기",
	"골프",
	"공간",
	"공개",
	"공격",
	"공군",
	"공급",
	"공기",
	"공동",
	"공무원",
	"공부",
	"공사",
	"공식",
	"공업",
	"공연",
	"공원",
	"공장",
	"공짜",
	"공책",
	"공통",
	"공포",
	"공항",
	"공휴일",
	"과목",
	"과일",
	"과장",
	"과정",
	"과학",
	"관객",
	"관계",
	"관광",
	"관념",
	"관람",
	"관련",
	"관리",
	"관습",
	"관심",
	"관점",
	"관찰",
	"광경",
	"광고",
	"광장",
	"광주",
	"괴로움",
	"굉장히",
	"교과서",
	"교문",
	"교복",
	"교실",
	"교양",
	"교육",
	"교장",
	"교직",
	"교통",
	"교환",
	"교훈",
	"구경",
	"구름",
	"구멍",
	"구별",
	"구분",
	"구석",
	"구성",
	"구속",
	"구역",
	"구입",
	"구청",
	"구체적",
	"국가",
	"국기",
	"국내",
	"국립",
	"국물",
	"국민",
	"국수",
	"국어",
	"국왕",
	"국적",
	"국제",
	"국회",
	"군대",
	"군사",
	"군인",
	"궁극적",
	"권리",
	"권위",
	"권투",
	"귀국",
	"귀신",
	"규정",
	"규칙",
	"균형",
	"그날",
	"그냥",
	"그늘",
	"그러나",
	"그룹",
	"그릇",
	"그림",
	"그제서야",
	"그토록",
	"극복",
	"극히",
	"근거",
	"근교",
	"근래",
	"근로",
	"근무",
	"근본",
	"근원",
	"근육",
	"근처",
	"글씨",
	"글자",
	"금강산",
	"금고",
	"금년",
	"금메달",
	"금액",
	"금연",
	"금요일",
	"금지",
	"긍정적",
	"기간",
	"기관",
	"기념",
	"기능",
	"기독교",
	"기둥",
	"기록",
	"기름",
	"기법",
	"기본",
	"기분",
	"기쁨",
	"기숙사",
	"기술",
	"기억",
	"기업",
	"기온",
	"기운",
	"기원",
	"기적",
	"기준",
	"기침",
	"기혼",
	"기획",
	"긴급",
	"긴장",
	"길이",
	"김밥",
	"김치",
	"김포공항",
	"깍두기",
	"깜빡",
	"깨달음",
	"깨소금",
	"껍질",
	"꼭대기",
	"꽃잎",
	"나들이",
	"나란히",
	"나머지",
	"나물",
	"나침반",
	"나흘",
	"낙엽",
	"난방",
	"날개",
	"날씨",
	"날짜",
	"남녀",
	"남대문",
	"남매",
	"남산",
	"남자",
	"남편",
	"남학생",
	"낭비",
	"낱말",
	"내년",
	"내용",
	"내일",
	"냄비",
	"냄새",
	"냇물",
	"냉동",
	"냉면",
	"냉방",
	"냉장고",
	"넥타이",
	"넷째",
	"노동",
	"노란색",
	"노력",
	"노인",
	"녹음",
	"녹차",
	"녹화",
	"논리",
	"논문",
	"논쟁",
	"놀이",
	"농구",
	"농담",
	"농민",
	"농부",
	"농업",
	"농장",
	"농촌",
	"높이",
	"눈동자",
	"눈물",
	"눈썹",
	"뉴욕",
	"느낌",
	"늑대",
	"능동적",
	"능력",
	"다방",
	"다양성",
	"다음",
	"다이어트",
	"다행",
	"단계",
	"단골",
	"단독",
	"단맛",
	"단순",
	"단어",
	"단위",
	"단점",
	"단체",
	"단추",
	"단편",
	"단풍",
	"달걀",
	"달러",
	"달력",
	"달리",
	"닭고기",
	"담당",
	"담배",
	"담요",
	"담임",
	"답변",
	"답장",
	"당근",
	"당분간",
	"당연히",
	"당장",
	"대규모",
	"대낮",
	"대단히",
	"대답",
	"대도시",
	"대략",
	"대량",
	"대륙",
	"대문",
	"대부분",
	"대신",
	"대응",
	"대장",
	"대전",
	"대접",
	"대중",
	"대책",
	"대출",
	"대충",
	"대통령",
	"대학",
	"대한민국",
	"대합실",
	"대형",
	"덩어리",
	"데이트",
	"도대체",
	"도덕",
	"도둑",
	"도망",
	"도서관",
	"도심",
	"도움",
	"도입",
	"도자기",
	"도저히",
	"도전",
	"도중",
	"도착",
	"독감",
	"독립",
	"독서",
	"독일",
	"독창적",
	"동화책",
	"뒷모습",
	"뒷산",
	"딸아이",
	"마누라",
	"마늘",
	"마당",
	"마라톤",
	"마련",
	"마무리",
	"마사지",
	"마약",
	"마요네즈",
	"마을",
	"마음",
	"마이크",
	"마중",
	"마지막",
	"마찬가지",
	"마찰",
	"마흔",
	"막걸리",
	"막내",
	"막상",
	"만남",
	"만두",
	"만세",
	"만약",
	"만일",
	"만점",
	"만족",
	"만화",
	"많이",
	"말기",
	"말씀",
	"말투",
	"맘대로",
	"망원경",
	"매년",
	"매달",
	"매력",
	"매번",
	"매스컴",
	"매일",
	"매장",
	"맥주",
	"먹이",
	"먼저",
	"먼지",
	"멀리",
	"메일",
	"며느리",
	"며칠",
	"면담",
	"멸치",
	"명단",
	"명령",
	"명예",
	"명의",
	"명절",
	"명칭",
	"명함",
	"모금",
	"모니터",
	"모델",
	"모든",
	"모범",
	"모습",
	"모양",
	"모임",
	"모조리",
	"모집",
	"모퉁이",
	"목걸이",
	"목록",
	"목사",
	"목소리",
	"목숨",
	"목적",
	"목표",
	"몰래",
	"몸매",
	"몸무게",
	"몸살",
	"몸속",
	"몸짓",
	"몸통",
	"몹시",
	"무관심",
	"무궁화",
	"무더위",
	"무덤",
	"무릎",
	"무슨",
	"무엇",
	"무역",
	"무용",
	"무조건",
	"무지개",
	"무척",
	"문구",
	"문득",
	"문법",
	"문서",
	"문제",
	"문학",
	"문화",
	"물가",
	"물건",
	"물결",
	"물고기",
	"물론",
	"물리학",
	"물음",
	"물질",
	"물체",
	"미국",
	"미디어",
	"미사일",
	"미술",
	"미역",
	"미용실",
	"미움",
	"미인",
	"미팅",
	"미혼",
	"민간",
	"민족",
	"민주",
	"믿음",
	"밀가루",
	"밀리미터",
	"밑바닥",
	"바가지",
	"바구니",
	"바나나",
	"바늘",
	"바닥",
	"바닷가",
	"바람",
	"바이러스",
	"바탕",
	"박물관",
	"박사",
	"박수",
	"반대",
	"반드시",
	"반말",
	"반발",
	"반성",
	"반응",
	"반장",
	"반죽",
	"반지",
	"반찬",
	"받침",
	"발가락",
	"발걸음",
	"발견",
	"발달",
	"발레",
	"발목",
	"발바닥",
	"발생",
	"발음",
	"발자국",
	"발전",
	"발톱",
	"발표",
	"밤하늘",
	"밥그릇",
	"밥맛",
	"밥상",
	"밥솥",
	"방금",
	"방면",
	"방문",
	"방바닥",
	"방법",
	"방송",
	"방식",
	"방안",
	"방울",
	"방지",
	"방학",
	"방해",
	"방향",
	"배경",
	"배꼽",
	"배달",
	"배드민턴",
	"백두산",
	"백색",
	"백성",
	"백인",
	"백제",
	"백화점",
	"버릇",
	"버섯",
	"버튼",
	"번개",
	"번역",
	"번지",
	"번호",
	"벌금",
	"벌레",
	"벌써",
	"범위",
	"범인",
	"범죄",
	"법률",
	"법원",
	"법적",
	"법칙",
	"베이징",
	"벨트",
	"변경",
	"변동",
	"변명",
	"변신",
	"변호사",
	"변화",
	"별도",
	"별명",
	"별일",
	"병실",
	"병아리",
	"병원",
	"보관",
	"보너스",
	"보라색",
	"보람",
	"보름",
	"보상",
	"보안",
	"보자기",
	"보장",
	"보전",
	"보존",
	"보통",
	"보편적",
	"보험",
	"복도",
	"복사",
	"복숭아",
	"복습",
	"볶음",
	"본격적",
	"본래",
	"본부",
	"본사",
	"본성",
	"본인",
	"본질",
	"볼펜",
	"봉사",
	"봉지",
	"봉투",
	"부근",
	"부끄러움",
	"부담",
	"부동산",
	"부문",
	"부분",
	"부산",
	"부상",
	"부엌",
	"부인",
	"부작용",
	"부장",
	"부정",
	"부족",
	"부지런히",
	"부친",
	"부탁",
	"부품",
	"부회장",
	"북부",
	"북한",
	"분노",
	"분량",
	"분리",
	"분명",
	"분석",
	"분야",
	"분위기",
	"분필",
	"분홍색",
	"불고기",
	"불과",
	"불교",
	"불꽃",
	"불만",
	"불법",
	"불빛",
	"불안",
	"불이익",
	"불행",
	"브랜드",
	"비극",
	"비난",
	"비닐",
	"비둘기",
	"비디오",
	"비로소",
	"비만",
	"비명",
	"비밀",
	"비바람",
	"비빔밥",
	"비상",
	"비용",
	"비율",
	"비중",
	"비타민",
	"비판",
	"빌딩",
	"빗물",
	"빗방울",
	"빗줄기",
	"빛깔",
	"빨간색",
	"빨래",
	"빨리",
	"사건",
	"사계절",
	"사나이",
	"사냥",
	"사람",
	"사랑",
	"사립",
	"사모님",
	"사물",
	"사방",
	"사상",
	"사생활",
	"사설",
	"사슴",
	"사실",
	"사업",
	"사용",
	"사월",
	"사장",
	"사전",
	"사진",
	"사촌",
	"사춘기",
	"사탕",
	"사투리",
	"사흘",
	"산길",
	"산부인과",
	"산업",
	"산책",
	"살림",
	"살인",
	"살짝",
	"삼계탕",
	"삼국",
	"삼십",
	"삼월",
	"삼촌",
	"상관",
	"상금",
	"상대",
	"상류",
	"상반기",
	"상상",
	"상식",
	"상업",
	"상인",
	"상자",
	"상점",
	"상처",
	"상추",
	"상태",
	"상표",
	"상품",
	"상황",
	"새벽",
	"색깔",
	"색연필",
	"생각",
	"생명",
	"생물",
	"생방송",
	"생산",
	"생선",
	"생신",
	"생일",
	"생활",
	"서랍",
	"서른",
	"서명",
	"서민",
	"서비스",
	"서양",
	"서울",
	"서적",
	"서점",
	"서쪽",
	"서클",
	"석사",
	"석유",
	"선거",
	"선물",
	"선배",
	"선생",
	"선수",
	"선원",
	"선장",
	"선전",
	"선택",
	"선풍기",
	"설거지",
	"설날",
	"설렁탕",
	"설명",
	"설문",
	"설사",
	"설악산",
	"설치",
	"설탕",
	"섭씨",
	"성공",
	"성당",
	"성명",
	"성별",
	"성인",
	"성장",
	"성적",
	"성질",
	"성함",
	"세금",
	"세미나",
	"세상",
	"세월",
	"세종대왕",
	"세탁",
	"센터",
	"센티미터",
	"셋째",
	"소규모",
	"소극적",
	"소금",
	"소나기",
	"소년",
	"소득",
	"소망",
	"소문",
	"소설",
	"소속",
	"소아과",
	"소용",
	"소원",
	"소음",
	"소중히",
	"소지품",
	"소질",
	"소풍",
	"소형",
	"속담",
	"속도",
	"속옷",
	"손가락",
	"손길",
	"손녀",
	"손님",
	"손등",
	"손목",
	"손뼉",
	"손실",
	"손질",
	"손톱",
	"손해",
	"솔직히",
	"솜씨",
	"송아지",
	"송이",
	"송편",
	"쇠고기",
	"쇼핑",
	"수건",
	"수년",
	"수단",
	"수돗물",
	"수동적",
	"수면",
	"수명",
	"수박",
	"수상",
	"수석",
	"수술",
	"수시로",
	"수업",
	"수염",
	"수영",
	"수입",
	"수준",
	"수집",
	"수출",
	"수컷",
	"수필",
	"수학",
	"수험생",
	"수화기",
	"숙녀",
	"숙소",
	"숙제",
	"순간",
	"순서",
	"순수",
	"순식간",
	"순위",
	"숟가락",
	"술병",
	"술집",
	"숫자",
	"스님",
	"스물",
	"스스로",
	"스승",
	"스웨터",
	"스위치",
	"스케이트",
	"스튜디오",
	"스트레스",
	"스포츠",
	"슬쩍",
	"슬픔",
	"습관",
	"습기",
	"승객",
	"승리",
	"승부",
	"승용차",
	"승진",
	"시각",
	"시간",
	"시골",
	"시금치",
	"시나리오",
	"시댁",
	"시리즈",
	"시멘트",
	"시민",
	"시부모",
	"시선",
	"시설",
	"시스템",
	"시아버지",
	"시어머니",
	"시월",
	"시인",
	"시일",
	"시작",
	"시장",
	"시절",
	"시점",
	"시중",
	"시즌",
	"시집",
	"시청",
	"시합",
	"시험",
	"식구",
	"식기",
	"식당",
	"식량",
	"식료품",
	"식물",
	"식빵",
	"식사",
	"식생활",
	"식초",
	"식탁",
	"식품",
	"신고",
	"신규",
	"신념",
	"신문",
	"신발",
	"신비",
	"신사",
	"신세",
	"신용",
	"신제품",
	"신청",
	"신체",
	"신화",
	"실감",
	"실내",
	"실력",
	"실례",
	"실망",
	"실수",
	"실습",
	"실시",
	"실장",
	"실정",
	"실질적",
	"실천",
	"실체",
	"실컷",
	"실태",
	"실패",
	"실험",
	"실현",
	"심리",
	"심부름",
	"심사",
	"심장",
	"심정",
	"심판",
	"쌍둥이",
	"씨름",
	"씨앗",
	"아가씨",
	"아나운서",
	"아드님",
	"아들",
	"아쉬움",
	"아스팔트",
	"아시아",
	"아울러",
	"아저씨",
	"아줌마",
	"아직",
	"아침",
	"아파트",
	"아프리카",
	"아픔",
	"아홉",
	"아흔",
	"악기",
	"악몽",
	"악수",
	"안개",
	"안경",
	"안과",
	"안내",
	"안녕",
	"안동",
	"안방",
	"안부",
	"안주",
	"알루미늄",
	"알코올",
	"암시",
	"암컷",
	"압력",
	"앞날",
	"앞문",
	"애인",
	"애정",
	"액수",
	"앨범",
	"야간",
	"야단",
	"야옹",
	"약간",
	"약국",
	"약속",
	"약수",
	"약점",
	"약품",
	"약혼녀",
	"양념",
	"양력",
	"양말",
	"양배추",
	"양주",
	"양파",
	"어둠",
	"어려움",
	"어른",
	"어젯밤",
	"어쨌든",
	"어쩌다가",
	"어쩐지",
	"언니",
	"언덕",
	"언론",
	"언어",
	"얼굴",
	"얼른",
	"얼음",
	"얼핏",
	"엄마",
	"업무",
	"업종",
	"업체",
	"엉덩이",
	"엉망",
	"엉터리",
	"엊그제",
	"에너지",
	"에어컨",
	"엔진",
	"여건",
	"여고생",
	"여관",
	"여군",
	"여권",
	"여대생",
	"여덟",
	"여동생",
	"여든",
	"여론",
	"여름",
	"여섯",
	"여성",
	"여왕",
	"여인",
	"여전히",
	"여직원",
	"여학생",
	"여행",
	"역사",
	"역시",
	"역할",
	"연결",
	"연구",
	"연극",
	"연기",
	"연락",
	"연설",
	"연세",
	"연속",
	"연습",
	"연애",
	"연예인",
	"연인",
	"연장",
	"연주",
	"연출",
	"연필",
	"연합",
	"연휴",
	"열기",
	"열매",
	"열쇠",
	"열심히",
	"열정",
	"열차",
	"열흘",
	"염려",
	"엽서",
	"영국",
	"영남",
	"영상",
	"영양",
	"영역",
	"영웅",
	"영원히",
	"영하",
	"영향",
	"영혼",
	"영화",
	"옆구리",
	"옆방",
	"옆집",
	"예감",
	"예금",
	"예방",
	"예산",
	"예상",
	"예선",
	"예술",
	"예습",
	"예식장",
	"예약",
	"예전",
	"예절",
	"예정",
	"예컨대",
	"옛날",
	"오늘",
	"오락",
	"오랫동안",
	"오렌지",
	"오로지",
	"오른발",
	"오븐",
	"오십",
	"오염",
	"오월",
	"오전",
	"오직",
	"오징어",
	"오페라",
	"오피스텔",
	"오히려",
	"옥상",
	"옥수수",
	"온갖",
	"온라인",
	"온몸",
	"온종일",
	"온통",
	"올가을",
	"올림픽",
	"올해",
	"옷차림",
	"와이셔츠",
	"와인",
	"완성",
	"완전",
	"왕비",
	"왕자",
	"왜냐하면",
	"왠지",
	"외갓집",
	"외국",
	"외로움",
	"외삼촌",
	"외출",
	"외침",
	"외할머니",
	"왼발",
	"왼손",
	"왼쪽",
	"요금",
	"요일",
	"요즘",
	"요청",
	"용기",
	"용서",
	"용어",
	"우산",
	"우선",
	"우승",
	"우연히",
	"우정",
	"우체국",
	"우편",
	"운동",
	"운명",
	"운반",
	"운전",
	"운행",
	"울산",
	"울음",
	"움직임",
	"웃어른",
	"웃음",
	"워낙",
	"원고",
	"원래",
	"원서",
	"원숭이",
	"원인",
	"원장",
	"원피스",
	"월급",
	"월드컵",
	"월세",
	"월요일",
	"웨이터",
	"위반",
	"위법",
	"위성",
	"위원",
	"위험",
	"위협",
	"윗사람",
	"유난히",
	"유럽",
	"유명",
	"유물",
	"유산",
	"유적",
	"유치원",
	"유학",
	"유행",
	"유형",
	"육군",
	"육상",
	"육십",
	"육체",
	"은행",
	"음력",
	"음료",
	"음반",
	"음성",
	"음식",
	"음악",
	"음주",
	"의견",
	"의논",
	"의문",
	"의복",
	"의식",
	"의심",
	"의외로",
	"의욕",
	"의원",
	"의학",
	"이것",
	"이곳",
	"이념",
	"이놈",
	"이달",
	"이대로",
	"이동",
	"이렇게",
	"이력서",
	"이론적",
	"이름",
	"이민",
	"이발소",
	"이별",
	"이불",
	"이빨",
	"이상",
	"이성",
	"이슬",
	"이야기",
	"이용",
	"이웃",
	"이월",
	"이윽고",
	"이익",
	"이전",
	"이중",
	"이튿날",
	"이틀",
	"이혼",
	"인간",
	"인격",
	"인공",
	"인구",
	"인근",
	"인기",
	"인도",
	"인류",
	"인물",
	"인생",
	"인쇄",
	"인연",
	"인원",
	"인재",
	"인종",
	"인천",
	"인체",
	"인터넷",
	"인하",
	"인형",
	"일곱",
	"일기",
	"일단",
	"일대",
	"일등",
	"일반",
	"일본",
	"일부",
	"일상",
	"일생",
	"일손",
	"일요일",
	"일월",
	"일정",
	"일종",
	"일주일",
	"일찍",
	"일체",
	"일치",
	"일행",
	"일회용",
	"임금",
	"임무",
	"입대",
	"입력",
	"입맛",
	"입사",
	"입술",
	"입시",
	"입원",
	"입장",
	"입학",
	"자가용",
	"자격",
	"자극",
	"자동",
	"자랑",
	"자부심",
	"자식",
	"자신",
	"자연",
	"자원",
	"자율",
	"자전거",
	"자정",
	"자존심",
	"자판",
	"작가",
	"작년",
	"작성",
	"작업",
	"작용",
	"작은딸",
	"작품",
	"잔디",
	"잔뜩",
	"잔치",
	"잘못",
	"잠깐",
	"잠수함",
	"잠시",
	"잠옷",
	"잠자리",
	"잡지",
	"장관",
	"장군",
	"장기간",
	"장래",
	"장례",
	"장르",
	"장마",
	"장면",
	"장모",
	"장미",
	"장비",
	"장사",
	"장소",
	"장식",
	"장애인",
	"장인",
	"장점",
	"장차",
	"장학금",
	"재능",
	"재빨리",
	"재산",
	"재생",
	"재작년",
	"재정",
	"재채기",
	"재판",
	"재학",
	"재활용",
	"저것",
	"저고리",
	"저곳",
	"저녁",
	"저런",
	"저렇게",
	"저번",
	"저울",
	"저절로",
	"저축",
	"적극",
	"적당히",
	"적성",
	"적용",
	"적응",
	"전개",
	"전공",
	"전기",
	"전달",
	"전라도",
	"전망",
	"전문",
	"전반",
	"전부",
	"전세",
	"전시",
	"전용",
	"전자",
	"전쟁",
	"전주",
	"전철",
	"전체",
	"전통",
	"전혀",
	"전후",
	"절대",
	"절망",
	"절반",
	"절약",
	"절차",
	"점검",
	"점수",
	"점심",
	"점원",
	"점점",
	"점차",
	"접근",
	"접시",
	"접촉",
	"젓가락",
	"정거장",
	"정도",
	"정류장",
	"정리",
	"정말",
	"정면",
	"정문",
	"정반대",
	"정보",
	"정부",
	"정비",
	"정상",
	"정성",
	"정오",
	"정원",
	"정장",
	"정지",
	"정치",
	"정확히",
	"제공",
	"제과점",
	"제대로",
	"제목",
	"제발",
	"제법",
	"제삿날",
	"제안",
	"제일",
	"제작",
	"제주도",
	"제출",
	"제품",
	"제한",
	"조각",
	"조건",
	"조금",
	"조깅",
	"조명",
	"조미료",
	"조상",
	"조선",
	"조용히",
	"조절",
	"조정",
	"조직",
	"존댓말",
	"존재",
	"졸업",
	"졸음",
	"종교",
	"종로",
	"종류",
	"종소리",
	"종업원",
	"종종",
	"종합",
	"좌석",
	"죄인",
	"주관적",
	"주름",
	"주말",
	"주머니",
	"주먹",
	"주문",
	"주민",
	"주방",
	"주변",
	"주식",
	"주인",
	"주일",
	"주장",
	"주전자",
	"주택",
	"준비",
	"줄거리",
	"줄기",
	"줄무늬",
	"중간",
	"중계방송",
	"중국",
	"중년",
	"중단",
	"중독",
	"중반",
	"중부",
	"중세",
	"중소기업",
	"중순",
	"중앙",
	"중요",
	"중학교",
	"즉석",
	"즉시",
	"즐거움",
	"증가",
	"증거",
	"증권",
	"증상",
	"증세",
	"지각",
	"지갑",
	"지경",
	"지극히",
	"지금",
	"지급",
	"지능",
	"지름길",
	"지리산",
	"지방",
	"지붕",
	"지식",
	"지역",
	"지우개",
	"지원",
	"지적",
	"지점",
	"지진",
	"지출",
	"직선",
	"직업",
	"직원",
	"직장",
	"진급",
	"진동",
	"진로",
	"진료",
	"진리",
	"진짜",
	"진찰",
	"진출",
	"진통",
	"진행",
	"질문",
	"질병",
	"질서",
	"짐작",
	"집단",
	"집안",
	"집중",
	"짜증",
	"찌꺼기",
	"차남",
	"차라리",
	"차량",
	"차림",
	"차별",
	"차선",
	"차츰",
	"착각",
	"찬물",
	"찬성",
	"참가",
	"참기름",
	"참새",
	"참석",
	"참여",
	"참외",
	"참조",
	"찻잔",
	"창가",
	"창고",
	"창구",
	"창문",
	"창밖",
	"창작",
	"창조",
	"채널",
	"채점",
	"책가방",
	"책방",
	"책상",
	"책임",
	"챔피언",
	"처벌",
	"처음",
	"천국",
	"천둥",
	"천장",
	"천재",
	"천천히",
	"철도",
	"철저히",
	"철학",
	"첫날",
	"첫째",
	"청년",
	"청바지",
	"청소",
	"청춘",
	"체계",
	"체력",
	"체온",
	"체육",
	"체중",
	"체험",
	"초등학생",
	"초반",
	"초밥",
	"초상화",
	"초순",
	"초여름",
	"초원",
	"초저녁",
	"초점",
	"초청",
	"초콜릿",
	"촛불",
	"총각",
	"총리",
	"총장",
	"촬영",
	"최근",
	"최상",
	"최선",
	"최신",
	"최악",
	"최종",
	"추석",
	"추억",
	"추진",
	"추천",
	"추측",
	"축구",
	"축소",
	"축제",
	"축하",
	"출근",
	"출발",
	"출산",
	"출신",
	"출연",
	"출입",
	"출장",
	"출판",
	"충격",
	"충고",
	"충돌",
	"충분히",
	"충청도",
	"취업",
	"취직",
	"취향",
	"치약",
	"친구",
	"친척",
	"칠십",
	"칠월",
	"칠판",
	"침대",
	"침묵",
	"침실",
	"칫솔",
	"칭찬",
	"카메라",
	"카운터",
	"칼국수",
	"캐릭터",
	"캠퍼스",
	"캠페인",
	"커튼",
	"컨디션",
	"컬러",
	"컴퓨터",
	"코끼리",
	"코미디",
	"콘서트",
	"콜라",
	"콤플렉스",
	"콩나물",
	"쾌감",
	"쿠데타",
	"크림",
	"큰길",
	"큰딸",
	"큰소리",
	"큰아들",
	"큰어머니",
	"큰일",
	"큰절",
	"클래식",
	"클럽",
	"킬로",
	"타입",
	"타자기",
	"탁구",
	"탁자",
	"탄생",
	"태권도",
	"태양",
	"태풍",
	"택시",
	"탤런트",
	"터널",
	"터미널",
	"테니스",
	"테스트",
	"테이블",
	"텔레비전",
	"토론",
	"토마토",
	"토요일",
	"통계",
	"통과",
	"통로",
	"통신",
	"통역",
	"통일",
	"통장",
	"통제",
	"통증",
	"통합",
	"통화",
	"퇴근",
	"퇴원",
	"퇴직금",
	"튀김",
	"트럭",
	"특급",
	"특별",
	"특성",
	"특수",
	"특징",
	"특히",
	"튼튼히",
	"티셔츠",
	"파란색",
	"파일",
	"파출소",
	"판결",
	"판단",
	"판매",
	"판사",
	"팔십",
	"팔월",
	"팝송",
	"패션",
	"팩스",
	"팩시밀리",
	"팬티",
	"퍼센트",
	"페인트",
	"편견",
	"편의",
	"편지",
	"편히",
	"평가",
	"평균",
	"평생",
	"평소",
	"평양",
	"평일",
	"평화",
	"포스터",
	"포인트",
	"포장",
	"포함",
	"표면",
	"표정",
	"표준",
	"표현",
	"품목",
	"품질",
	"풍경",
	"풍속",
	"풍습",
	"프랑스",
	"프린터",
	"플라스틱",
	"피곤",
	"피망",
	"피아노",
	"필름",
	"필수",
	"필요",
	"필자",
	"필통",
	"핑계",
	"하느님",
	"하늘",
	"하드웨어",
	"하룻밤",
	"하반기",
	"하숙집",
	"하순",
	"하여튼",
	"하지만",
	"하천",
	"하품",
	"하필",
	"학과",
	"학교",
	"학급",
	"학기",
	"학년",
	"학력",
	"학번",
	"학부모",
	"학비",
	"학생",
	"학술",
	"학습",
	"학용품",
	"학원",
	"학위",
	"학자",
	"학점",
	"한계",
	"한글",
	"한꺼번에",
	"한낮",
	"한눈",
	"한동안",
	"한때",
	"한라산",
	"한마디",
	"한문",
	"한번",
	"한복",
	"한식",
	"한여름",
	"한쪽",
	"할머니",
	"할아버지",
	"할인",
	"함께",
	"함부로",
	"합격",
	"합리적",
	"항공",
	"항구",
	"항상",
	"항의",
	"해결",
	"해군",
	"해답",
	"해당",
	"해물",
	"해석",
	"해설",
	"해수욕장",
	"해안",
	"핵심",
	"핸드백",
	"햄버거",
	"햇볕",
	"햇살",
	"행동",
	"행복",
	"행사",
	"행운",
	"행위",
	"향기",
	"향상",
	"향수",
	"허락",
	"허용",
	"헬기",
	"현관",
	"현금",
	"현대",
	"현상",
	"현실",
	"현장",
	"현재",
	"현지",
	"혈액",
	"협력",
	"형부",
	"형사",
	"형수",
	"형식",
	"형제",
	"형태",
	"형편",
	"혜택",
	"호기심",
	"호남",
	"호랑이",
	"호박",
	"호텔",
	"호흡",
	"혹시",
	"홀로",
	"홈페이지",
	"홍보",
	"홍수",
	"홍차",
	"화면",
	"화분",
	"화살",
	"화요일",
	"화장",
	"화학",
	"확보",
	"확인",
	"확장",
	"확정",
	"환갑",
	"환경",
	"환영",
	"환율",
	"환자",
	"활기",
	"활동",
	"활발히",
	"활용",
	"활짝",
	"회견",
	"회관",
	"회복",
	"회색",
	"회원",
	"회장",
	"회전",
	"횟수",
	"횡단보도",
	"효율적",
	"후반",
	"후춧가루",
	"훈련",
	"훨씬",
	"휴식",
	"휴일",
	"흉내",
	"흐름",
	"흑백",
	"흑인",
	"흔적",
	"흔히",
	"흥미",
	"흥분",
	"희곡",
	"희망",
	"희생",
	"흰색",
	"힘껏"
];

const require$$4 = [
	"abaisser",
	"abandon",
	"abdiquer",
	"abeille",
	"abolir",
	"aborder",
	"aboutir",
	"aboyer",
	"abrasif",
	"abreuver",
	"abriter",
	"abroger",
	"abrupt",
	"absence",
	"absolu",
	"absurde",
	"abusif",
	"abyssal",
	"académie",
	"acajou",
	"acarien",
	"accabler",
	"accepter",
	"acclamer",
	"accolade",
	"accroche",
	"accuser",
	"acerbe",
	"achat",
	"acheter",
	"aciduler",
	"acier",
	"acompte",
	"acquérir",
	"acronyme",
	"acteur",
	"actif",
	"actuel",
	"adepte",
	"adéquat",
	"adhésif",
	"adjectif",
	"adjuger",
	"admettre",
	"admirer",
	"adopter",
	"adorer",
	"adoucir",
	"adresse",
	"adroit",
	"adulte",
	"adverbe",
	"aérer",
	"aéronef",
	"affaire",
	"affecter",
	"affiche",
	"affreux",
	"affubler",
	"agacer",
	"agencer",
	"agile",
	"agiter",
	"agrafer",
	"agréable",
	"agrume",
	"aider",
	"aiguille",
	"ailier",
	"aimable",
	"aisance",
	"ajouter",
	"ajuster",
	"alarmer",
	"alchimie",
	"alerte",
	"algèbre",
	"algue",
	"aliéner",
	"aliment",
	"alléger",
	"alliage",
	"allouer",
	"allumer",
	"alourdir",
	"alpaga",
	"altesse",
	"alvéole",
	"amateur",
	"ambigu",
	"ambre",
	"aménager",
	"amertume",
	"amidon",
	"amiral",
	"amorcer",
	"amour",
	"amovible",
	"amphibie",
	"ampleur",
	"amusant",
	"analyse",
	"anaphore",
	"anarchie",
	"anatomie",
	"ancien",
	"anéantir",
	"angle",
	"angoisse",
	"anguleux",
	"animal",
	"annexer",
	"annonce",
	"annuel",
	"anodin",
	"anomalie",
	"anonyme",
	"anormal",
	"antenne",
	"antidote",
	"anxieux",
	"apaiser",
	"apéritif",
	"aplanir",
	"apologie",
	"appareil",
	"appeler",
	"apporter",
	"appuyer",
	"aquarium",
	"aqueduc",
	"arbitre",
	"arbuste",
	"ardeur",
	"ardoise",
	"argent",
	"arlequin",
	"armature",
	"armement",
	"armoire",
	"armure",
	"arpenter",
	"arracher",
	"arriver",
	"arroser",
	"arsenic",
	"artériel",
	"article",
	"aspect",
	"asphalte",
	"aspirer",
	"assaut",
	"asservir",
	"assiette",
	"associer",
	"assurer",
	"asticot",
	"astre",
	"astuce",
	"atelier",
	"atome",
	"atrium",
	"atroce",
	"attaque",
	"attentif",
	"attirer",
	"attraper",
	"aubaine",
	"auberge",
	"audace",
	"audible",
	"augurer",
	"aurore",
	"automne",
	"autruche",
	"avaler",
	"avancer",
	"avarice",
	"avenir",
	"averse",
	"aveugle",
	"aviateur",
	"avide",
	"avion",
	"aviser",
	"avoine",
	"avouer",
	"avril",
	"axial",
	"axiome",
	"badge",
	"bafouer",
	"bagage",
	"baguette",
	"baignade",
	"balancer",
	"balcon",
	"baleine",
	"balisage",
	"bambin",
	"bancaire",
	"bandage",
	"banlieue",
	"bannière",
	"banquier",
	"barbier",
	"baril",
	"baron",
	"barque",
	"barrage",
	"bassin",
	"bastion",
	"bataille",
	"bateau",
	"batterie",
	"baudrier",
	"bavarder",
	"belette",
	"bélier",
	"belote",
	"bénéfice",
	"berceau",
	"berger",
	"berline",
	"bermuda",
	"besace",
	"besogne",
	"bétail",
	"beurre",
	"biberon",
	"bicycle",
	"bidule",
	"bijou",
	"bilan",
	"bilingue",
	"billard",
	"binaire",
	"biologie",
	"biopsie",
	"biotype",
	"biscuit",
	"bison",
	"bistouri",
	"bitume",
	"bizarre",
	"blafard",
	"blague",
	"blanchir",
	"blessant",
	"blinder",
	"blond",
	"bloquer",
	"blouson",
	"bobard",
	"bobine",
	"boire",
	"boiser",
	"bolide",
	"bonbon",
	"bondir",
	"bonheur",
	"bonifier",
	"bonus",
	"bordure",
	"borne",
	"botte",
	"boucle",
	"boueux",
	"bougie",
	"boulon",
	"bouquin",
	"bourse",
	"boussole",
	"boutique",
	"boxeur",
	"branche",
	"brasier",
	"brave",
	"brebis",
	"brèche",
	"breuvage",
	"bricoler",
	"brigade",
	"brillant",
	"brioche",
	"brique",
	"brochure",
	"broder",
	"bronzer",
	"brousse",
	"broyeur",
	"brume",
	"brusque",
	"brutal",
	"bruyant",
	"buffle",
	"buisson",
	"bulletin",
	"bureau",
	"burin",
	"bustier",
	"butiner",
	"butoir",
	"buvable",
	"buvette",
	"cabanon",
	"cabine",
	"cachette",
	"cadeau",
	"cadre",
	"caféine",
	"caillou",
	"caisson",
	"calculer",
	"calepin",
	"calibre",
	"calmer",
	"calomnie",
	"calvaire",
	"camarade",
	"caméra",
	"camion",
	"campagne",
	"canal",
	"caneton",
	"canon",
	"cantine",
	"canular",
	"capable",
	"caporal",
	"caprice",
	"capsule",
	"capter",
	"capuche",
	"carabine",
	"carbone",
	"caresser",
	"caribou",
	"carnage",
	"carotte",
	"carreau",
	"carton",
	"cascade",
	"casier",
	"casque",
	"cassure",
	"causer",
	"caution",
	"cavalier",
	"caverne",
	"caviar",
	"cédille",
	"ceinture",
	"céleste",
	"cellule",
	"cendrier",
	"censurer",
	"central",
	"cercle",
	"cérébral",
	"cerise",
	"cerner",
	"cerveau",
	"cesser",
	"chagrin",
	"chaise",
	"chaleur",
	"chambre",
	"chance",
	"chapitre",
	"charbon",
	"chasseur",
	"chaton",
	"chausson",
	"chavirer",
	"chemise",
	"chenille",
	"chéquier",
	"chercher",
	"cheval",
	"chien",
	"chiffre",
	"chignon",
	"chimère",
	"chiot",
	"chlorure",
	"chocolat",
	"choisir",
	"chose",
	"chouette",
	"chrome",
	"chute",
	"cigare",
	"cigogne",
	"cimenter",
	"cinéma",
	"cintrer",
	"circuler",
	"cirer",
	"cirque",
	"citerne",
	"citoyen",
	"citron",
	"civil",
	"clairon",
	"clameur",
	"claquer",
	"classe",
	"clavier",
	"client",
	"cligner",
	"climat",
	"clivage",
	"cloche",
	"clonage",
	"cloporte",
	"cobalt",
	"cobra",
	"cocasse",
	"cocotier",
	"coder",
	"codifier",
	"coffre",
	"cogner",
	"cohésion",
	"coiffer",
	"coincer",
	"colère",
	"colibri",
	"colline",
	"colmater",
	"colonel",
	"combat",
	"comédie",
	"commande",
	"compact",
	"concert",
	"conduire",
	"confier",
	"congeler",
	"connoter",
	"consonne",
	"contact",
	"convexe",
	"copain",
	"copie",
	"corail",
	"corbeau",
	"cordage",
	"corniche",
	"corpus",
	"correct",
	"cortège",
	"cosmique",
	"costume",
	"coton",
	"coude",
	"coupure",
	"courage",
	"couteau",
	"couvrir",
	"coyote",
	"crabe",
	"crainte",
	"cravate",
	"crayon",
	"créature",
	"créditer",
	"crémeux",
	"creuser",
	"crevette",
	"cribler",
	"crier",
	"cristal",
	"critère",
	"croire",
	"croquer",
	"crotale",
	"crucial",
	"cruel",
	"crypter",
	"cubique",
	"cueillir",
	"cuillère",
	"cuisine",
	"cuivre",
	"culminer",
	"cultiver",
	"cumuler",
	"cupide",
	"curatif",
	"curseur",
	"cyanure",
	"cycle",
	"cylindre",
	"cynique",
	"daigner",
	"damier",
	"danger",
	"danseur",
	"dauphin",
	"débattre",
	"débiter",
	"déborder",
	"débrider",
	"débutant",
	"décaler",
	"décembre",
	"déchirer",
	"décider",
	"déclarer",
	"décorer",
	"décrire",
	"décupler",
	"dédale",
	"déductif",
	"déesse",
	"défensif",
	"défiler",
	"défrayer",
	"dégager",
	"dégivrer",
	"déglutir",
	"dégrafer",
	"déjeuner",
	"délice",
	"déloger",
	"demander",
	"demeurer",
	"démolir",
	"dénicher",
	"dénouer",
	"dentelle",
	"dénuder",
	"départ",
	"dépenser",
	"déphaser",
	"déplacer",
	"déposer",
	"déranger",
	"dérober",
	"désastre",
	"descente",
	"désert",
	"désigner",
	"désobéir",
	"dessiner",
	"destrier",
	"détacher",
	"détester",
	"détourer",
	"détresse",
	"devancer",
	"devenir",
	"deviner",
	"devoir",
	"diable",
	"dialogue",
	"diamant",
	"dicter",
	"différer",
	"digérer",
	"digital",
	"digne",
	"diluer",
	"dimanche",
	"diminuer",
	"dioxyde",
	"directif",
	"diriger",
	"discuter",
	"disposer",
	"dissiper",
	"distance",
	"divertir",
	"diviser",
	"docile",
	"docteur",
	"dogme",
	"doigt",
	"domaine",
	"domicile",
	"dompter",
	"donateur",
	"donjon",
	"donner",
	"dopamine",
	"dortoir",
	"dorure",
	"dosage",
	"doseur",
	"dossier",
	"dotation",
	"douanier",
	"double",
	"douceur",
	"douter",
	"doyen",
	"dragon",
	"draper",
	"dresser",
	"dribbler",
	"droiture",
	"duperie",
	"duplexe",
	"durable",
	"durcir",
	"dynastie",
	"éblouir",
	"écarter",
	"écharpe",
	"échelle",
	"éclairer",
	"éclipse",
	"éclore",
	"écluse",
	"école",
	"économie",
	"écorce",
	"écouter",
	"écraser",
	"écrémer",
	"écrivain",
	"écrou",
	"écume",
	"écureuil",
	"édifier",
	"éduquer",
	"effacer",
	"effectif",
	"effigie",
	"effort",
	"effrayer",
	"effusion",
	"égaliser",
	"égarer",
	"éjecter",
	"élaborer",
	"élargir",
	"électron",
	"élégant",
	"éléphant",
	"élève",
	"éligible",
	"élitisme",
	"éloge",
	"élucider",
	"éluder",
	"emballer",
	"embellir",
	"embryon",
	"émeraude",
	"émission",
	"emmener",
	"émotion",
	"émouvoir",
	"empereur",
	"employer",
	"emporter",
	"emprise",
	"émulsion",
	"encadrer",
	"enchère",
	"enclave",
	"encoche",
	"endiguer",
	"endosser",
	"endroit",
	"enduire",
	"énergie",
	"enfance",
	"enfermer",
	"enfouir",
	"engager",
	"engin",
	"englober",
	"énigme",
	"enjamber",
	"enjeu",
	"enlever",
	"ennemi",
	"ennuyeux",
	"enrichir",
	"enrobage",
	"enseigne",
	"entasser",
	"entendre",
	"entier",
	"entourer",
	"entraver",
	"énumérer",
	"envahir",
	"enviable",
	"envoyer",
	"enzyme",
	"éolien",
	"épaissir",
	"épargne",
	"épatant",
	"épaule",
	"épicerie",
	"épidémie",
	"épier",
	"épilogue",
	"épine",
	"épisode",
	"épitaphe",
	"époque",
	"épreuve",
	"éprouver",
	"épuisant",
	"équerre",
	"équipe",
	"ériger",
	"érosion",
	"erreur",
	"éruption",
	"escalier",
	"espadon",
	"espèce",
	"espiègle",
	"espoir",
	"esprit",
	"esquiver",
	"essayer",
	"essence",
	"essieu",
	"essorer",
	"estime",
	"estomac",
	"estrade",
	"étagère",
	"étaler",
	"étanche",
	"étatique",
	"éteindre",
	"étendoir",
	"éternel",
	"éthanol",
	"éthique",
	"ethnie",
	"étirer",
	"étoffer",
	"étoile",
	"étonnant",
	"étourdir",
	"étrange",
	"étroit",
	"étude",
	"euphorie",
	"évaluer",
	"évasion",
	"éventail",
	"évidence",
	"éviter",
	"évolutif",
	"évoquer",
	"exact",
	"exagérer",
	"exaucer",
	"exceller",
	"excitant",
	"exclusif",
	"excuse",
	"exécuter",
	"exemple",
	"exercer",
	"exhaler",
	"exhorter",
	"exigence",
	"exiler",
	"exister",
	"exotique",
	"expédier",
	"explorer",
	"exposer",
	"exprimer",
	"exquis",
	"extensif",
	"extraire",
	"exulter",
	"fable",
	"fabuleux",
	"facette",
	"facile",
	"facture",
	"faiblir",
	"falaise",
	"fameux",
	"famille",
	"farceur",
	"farfelu",
	"farine",
	"farouche",
	"fasciner",
	"fatal",
	"fatigue",
	"faucon",
	"fautif",
	"faveur",
	"favori",
	"fébrile",
	"féconder",
	"fédérer",
	"félin",
	"femme",
	"fémur",
	"fendoir",
	"féodal",
	"fermer",
	"féroce",
	"ferveur",
	"festival",
	"feuille",
	"feutre",
	"février",
	"fiasco",
	"ficeler",
	"fictif",
	"fidèle",
	"figure",
	"filature",
	"filetage",
	"filière",
	"filleul",
	"filmer",
	"filou",
	"filtrer",
	"financer",
	"finir",
	"fiole",
	"firme",
	"fissure",
	"fixer",
	"flairer",
	"flamme",
	"flasque",
	"flatteur",
	"fléau",
	"flèche",
	"fleur",
	"flexion",
	"flocon",
	"flore",
	"fluctuer",
	"fluide",
	"fluvial",
	"folie",
	"fonderie",
	"fongible",
	"fontaine",
	"forcer",
	"forgeron",
	"formuler",
	"fortune",
	"fossile",
	"foudre",
	"fougère",
	"fouiller",
	"foulure",
	"fourmi",
	"fragile",
	"fraise",
	"franchir",
	"frapper",
	"frayeur",
	"frégate",
	"freiner",
	"frelon",
	"frémir",
	"frénésie",
	"frère",
	"friable",
	"friction",
	"frisson",
	"frivole",
	"froid",
	"fromage",
	"frontal",
	"frotter",
	"fruit",
	"fugitif",
	"fuite",
	"fureur",
	"furieux",
	"furtif",
	"fusion",
	"futur",
	"gagner",
	"galaxie",
	"galerie",
	"gambader",
	"garantir",
	"gardien",
	"garnir",
	"garrigue",
	"gazelle",
	"gazon",
	"géant",
	"gélatine",
	"gélule",
	"gendarme",
	"général",
	"génie",
	"genou",
	"gentil",
	"géologie",
	"géomètre",
	"géranium",
	"germe",
	"gestuel",
	"geyser",
	"gibier",
	"gicler",
	"girafe",
	"givre",
	"glace",
	"glaive",
	"glisser",
	"globe",
	"gloire",
	"glorieux",
	"golfeur",
	"gomme",
	"gonfler",
	"gorge",
	"gorille",
	"goudron",
	"gouffre",
	"goulot",
	"goupille",
	"gourmand",
	"goutte",
	"graduel",
	"graffiti",
	"graine",
	"grand",
	"grappin",
	"gratuit",
	"gravir",
	"grenat",
	"griffure",
	"griller",
	"grimper",
	"grogner",
	"gronder",
	"grotte",
	"groupe",
	"gruger",
	"grutier",
	"gruyère",
	"guépard",
	"guerrier",
	"guide",
	"guimauve",
	"guitare",
	"gustatif",
	"gymnaste",
	"gyrostat",
	"habitude",
	"hachoir",
	"halte",
	"hameau",
	"hangar",
	"hanneton",
	"haricot",
	"harmonie",
	"harpon",
	"hasard",
	"hélium",
	"hématome",
	"herbe",
	"hérisson",
	"hermine",
	"héron",
	"hésiter",
	"heureux",
	"hiberner",
	"hibou",
	"hilarant",
	"histoire",
	"hiver",
	"homard",
	"hommage",
	"homogène",
	"honneur",
	"honorer",
	"honteux",
	"horde",
	"horizon",
	"horloge",
	"hormone",
	"horrible",
	"houleux",
	"housse",
	"hublot",
	"huileux",
	"humain",
	"humble",
	"humide",
	"humour",
	"hurler",
	"hydromel",
	"hygiène",
	"hymne",
	"hypnose",
	"idylle",
	"ignorer",
	"iguane",
	"illicite",
	"illusion",
	"image",
	"imbiber",
	"imiter",
	"immense",
	"immobile",
	"immuable",
	"impact",
	"impérial",
	"implorer",
	"imposer",
	"imprimer",
	"imputer",
	"incarner",
	"incendie",
	"incident",
	"incliner",
	"incolore",
	"indexer",
	"indice",
	"inductif",
	"inédit",
	"ineptie",
	"inexact",
	"infini",
	"infliger",
	"informer",
	"infusion",
	"ingérer",
	"inhaler",
	"inhiber",
	"injecter",
	"injure",
	"innocent",
	"inoculer",
	"inonder",
	"inscrire",
	"insecte",
	"insigne",
	"insolite",
	"inspirer",
	"instinct",
	"insulter",
	"intact",
	"intense",
	"intime",
	"intrigue",
	"intuitif",
	"inutile",
	"invasion",
	"inventer",
	"inviter",
	"invoquer",
	"ironique",
	"irradier",
	"irréel",
	"irriter",
	"isoler",
	"ivoire",
	"ivresse",
	"jaguar",
	"jaillir",
	"jambe",
	"janvier",
	"jardin",
	"jauger",
	"jaune",
	"javelot",
	"jetable",
	"jeton",
	"jeudi",
	"jeunesse",
	"joindre",
	"joncher",
	"jongler",
	"joueur",
	"jouissif",
	"journal",
	"jovial",
	"joyau",
	"joyeux",
	"jubiler",
	"jugement",
	"junior",
	"jupon",
	"juriste",
	"justice",
	"juteux",
	"juvénile",
	"kayak",
	"kimono",
	"kiosque",
	"label",
	"labial",
	"labourer",
	"lacérer",
	"lactose",
	"lagune",
	"laine",
	"laisser",
	"laitier",
	"lambeau",
	"lamelle",
	"lampe",
	"lanceur",
	"langage",
	"lanterne",
	"lapin",
	"largeur",
	"larme",
	"laurier",
	"lavabo",
	"lavoir",
	"lecture",
	"légal",
	"léger",
	"légume",
	"lessive",
	"lettre",
	"levier",
	"lexique",
	"lézard",
	"liasse",
	"libérer",
	"libre",
	"licence",
	"licorne",
	"liège",
	"lièvre",
	"ligature",
	"ligoter",
	"ligue",
	"limer",
	"limite",
	"limonade",
	"limpide",
	"linéaire",
	"lingot",
	"lionceau",
	"liquide",
	"lisière",
	"lister",
	"lithium",
	"litige",
	"littoral",
	"livreur",
	"logique",
	"lointain",
	"loisir",
	"lombric",
	"loterie",
	"louer",
	"lourd",
	"loutre",
	"louve",
	"loyal",
	"lubie",
	"lucide",
	"lucratif",
	"lueur",
	"lugubre",
	"luisant",
	"lumière",
	"lunaire",
	"lundi",
	"luron",
	"lutter",
	"luxueux",
	"machine",
	"magasin",
	"magenta",
	"magique",
	"maigre",
	"maillon",
	"maintien",
	"mairie",
	"maison",
	"majorer",
	"malaxer",
	"maléfice",
	"malheur",
	"malice",
	"mallette",
	"mammouth",
	"mandater",
	"maniable",
	"manquant",
	"manteau",
	"manuel",
	"marathon",
	"marbre",
	"marchand",
	"mardi",
	"maritime",
	"marqueur",
	"marron",
	"marteler",
	"mascotte",
	"massif",
	"matériel",
	"matière",
	"matraque",
	"maudire",
	"maussade",
	"mauve",
	"maximal",
	"méchant",
	"méconnu",
	"médaille",
	"médecin",
	"méditer",
	"méduse",
	"meilleur",
	"mélange",
	"mélodie",
	"membre",
	"mémoire",
	"menacer",
	"mener",
	"menhir",
	"mensonge",
	"mentor",
	"mercredi",
	"mérite",
	"merle",
	"messager",
	"mesure",
	"métal",
	"météore",
	"méthode",
	"métier",
	"meuble",
	"miauler",
	"microbe",
	"miette",
	"mignon",
	"migrer",
	"milieu",
	"million",
	"mimique",
	"mince",
	"minéral",
	"minimal",
	"minorer",
	"minute",
	"miracle",
	"miroiter",
	"missile",
	"mixte",
	"mobile",
	"moderne",
	"moelleux",
	"mondial",
	"moniteur",
	"monnaie",
	"monotone",
	"monstre",
	"montagne",
	"monument",
	"moqueur",
	"morceau",
	"morsure",
	"mortier",
	"moteur",
	"motif",
	"mouche",
	"moufle",
	"moulin",
	"mousson",
	"mouton",
	"mouvant",
	"multiple",
	"munition",
	"muraille",
	"murène",
	"murmure",
	"muscle",
	"muséum",
	"musicien",
	"mutation",
	"muter",
	"mutuel",
	"myriade",
	"myrtille",
	"mystère",
	"mythique",
	"nageur",
	"nappe",
	"narquois",
	"narrer",
	"natation",
	"nation",
	"nature",
	"naufrage",
	"nautique",
	"navire",
	"nébuleux",
	"nectar",
	"néfaste",
	"négation",
	"négliger",
	"négocier",
	"neige",
	"nerveux",
	"nettoyer",
	"neurone",
	"neutron",
	"neveu",
	"niche",
	"nickel",
	"nitrate",
	"niveau",
	"noble",
	"nocif",
	"nocturne",
	"noirceur",
	"noisette",
	"nomade",
	"nombreux",
	"nommer",
	"normatif",
	"notable",
	"notifier",
	"notoire",
	"nourrir",
	"nouveau",
	"novateur",
	"novembre",
	"novice",
	"nuage",
	"nuancer",
	"nuire",
	"nuisible",
	"numéro",
	"nuptial",
	"nuque",
	"nutritif",
	"obéir",
	"objectif",
	"obliger",
	"obscur",
	"observer",
	"obstacle",
	"obtenir",
	"obturer",
	"occasion",
	"occuper",
	"océan",
	"octobre",
	"octroyer",
	"octupler",
	"oculaire",
	"odeur",
	"odorant",
	"offenser",
	"officier",
	"offrir",
	"ogive",
	"oiseau",
	"oisillon",
	"olfactif",
	"olivier",
	"ombrage",
	"omettre",
	"onctueux",
	"onduler",
	"onéreux",
	"onirique",
	"opale",
	"opaque",
	"opérer",
	"opinion",
	"opportun",
	"opprimer",
	"opter",
	"optique",
	"orageux",
	"orange",
	"orbite",
	"ordonner",
	"oreille",
	"organe",
	"orgueil",
	"orifice",
	"ornement",
	"orque",
	"ortie",
	"osciller",
	"osmose",
	"ossature",
	"otarie",
	"ouragan",
	"ourson",
	"outil",
	"outrager",
	"ouvrage",
	"ovation",
	"oxyde",
	"oxygène",
	"ozone",
	"paisible",
	"palace",
	"palmarès",
	"palourde",
	"palper",
	"panache",
	"panda",
	"pangolin",
	"paniquer",
	"panneau",
	"panorama",
	"pantalon",
	"papaye",
	"papier",
	"papoter",
	"papyrus",
	"paradoxe",
	"parcelle",
	"paresse",
	"parfumer",
	"parler",
	"parole",
	"parrain",
	"parsemer",
	"partager",
	"parure",
	"parvenir",
	"passion",
	"pastèque",
	"paternel",
	"patience",
	"patron",
	"pavillon",
	"pavoiser",
	"payer",
	"paysage",
	"peigne",
	"peintre",
	"pelage",
	"pélican",
	"pelle",
	"pelouse",
	"peluche",
	"pendule",
	"pénétrer",
	"pénible",
	"pensif",
	"pénurie",
	"pépite",
	"péplum",
	"perdrix",
	"perforer",
	"période",
	"permuter",
	"perplexe",
	"persil",
	"perte",
	"peser",
	"pétale",
	"petit",
	"pétrir",
	"peuple",
	"pharaon",
	"phobie",
	"phoque",
	"photon",
	"phrase",
	"physique",
	"piano",
	"pictural",
	"pièce",
	"pierre",
	"pieuvre",
	"pilote",
	"pinceau",
	"pipette",
	"piquer",
	"pirogue",
	"piscine",
	"piston",
	"pivoter",
	"pixel",
	"pizza",
	"placard",
	"plafond",
	"plaisir",
	"planer",
	"plaque",
	"plastron",
	"plateau",
	"pleurer",
	"plexus",
	"pliage",
	"plomb",
	"plonger",
	"pluie",
	"plumage",
	"pochette",
	"poésie",
	"poète",
	"pointe",
	"poirier",
	"poisson",
	"poivre",
	"polaire",
	"policier",
	"pollen",
	"polygone",
	"pommade",
	"pompier",
	"ponctuel",
	"pondérer",
	"poney",
	"portique",
	"position",
	"posséder",
	"posture",
	"potager",
	"poteau",
	"potion",
	"pouce",
	"poulain",
	"poumon",
	"pourpre",
	"poussin",
	"pouvoir",
	"prairie",
	"pratique",
	"précieux",
	"prédire",
	"préfixe",
	"prélude",
	"prénom",
	"présence",
	"prétexte",
	"prévoir",
	"primitif",
	"prince",
	"prison",
	"priver",
	"problème",
	"procéder",
	"prodige",
	"profond",
	"progrès",
	"proie",
	"projeter",
	"prologue",
	"promener",
	"propre",
	"prospère",
	"protéger",
	"prouesse",
	"proverbe",
	"prudence",
	"pruneau",
	"psychose",
	"public",
	"puceron",
	"puiser",
	"pulpe",
	"pulsar",
	"punaise",
	"punitif",
	"pupitre",
	"purifier",
	"puzzle",
	"pyramide",
	"quasar",
	"querelle",
	"question",
	"quiétude",
	"quitter",
	"quotient",
	"racine",
	"raconter",
	"radieux",
	"ragondin",
	"raideur",
	"raisin",
	"ralentir",
	"rallonge",
	"ramasser",
	"rapide",
	"rasage",
	"ratisser",
	"ravager",
	"ravin",
	"rayonner",
	"réactif",
	"réagir",
	"réaliser",
	"réanimer",
	"recevoir",
	"réciter",
	"réclamer",
	"récolter",
	"recruter",
	"reculer",
	"recycler",
	"rédiger",
	"redouter",
	"refaire",
	"réflexe",
	"réformer",
	"refrain",
	"refuge",
	"régalien",
	"région",
	"réglage",
	"régulier",
	"réitérer",
	"rejeter",
	"rejouer",
	"relatif",
	"relever",
	"relief",
	"remarque",
	"remède",
	"remise",
	"remonter",
	"remplir",
	"remuer",
	"renard",
	"renfort",
	"renifler",
	"renoncer",
	"rentrer",
	"renvoi",
	"replier",
	"reporter",
	"reprise",
	"reptile",
	"requin",
	"réserve",
	"résineux",
	"résoudre",
	"respect",
	"rester",
	"résultat",
	"rétablir",
	"retenir",
	"réticule",
	"retomber",
	"retracer",
	"réunion",
	"réussir",
	"revanche",
	"revivre",
	"révolte",
	"révulsif",
	"richesse",
	"rideau",
	"rieur",
	"rigide",
	"rigoler",
	"rincer",
	"riposter",
	"risible",
	"risque",
	"rituel",
	"rival",
	"rivière",
	"rocheux",
	"romance",
	"rompre",
	"ronce",
	"rondin",
	"roseau",
	"rosier",
	"rotatif",
	"rotor",
	"rotule",
	"rouge",
	"rouille",
	"rouleau",
	"routine",
	"royaume",
	"ruban",
	"rubis",
	"ruche",
	"ruelle",
	"rugueux",
	"ruiner",
	"ruisseau",
	"ruser",
	"rustique",
	"rythme",
	"sabler",
	"saboter",
	"sabre",
	"sacoche",
	"safari",
	"sagesse",
	"saisir",
	"salade",
	"salive",
	"salon",
	"saluer",
	"samedi",
	"sanction",
	"sanglier",
	"sarcasme",
	"sardine",
	"saturer",
	"saugrenu",
	"saumon",
	"sauter",
	"sauvage",
	"savant",
	"savonner",
	"scalpel",
	"scandale",
	"scélérat",
	"scénario",
	"sceptre",
	"schéma",
	"science",
	"scinder",
	"score",
	"scrutin",
	"sculpter",
	"séance",
	"sécable",
	"sécher",
	"secouer",
	"sécréter",
	"sédatif",
	"séduire",
	"seigneur",
	"séjour",
	"sélectif",
	"semaine",
	"sembler",
	"semence",
	"séminal",
	"sénateur",
	"sensible",
	"sentence",
	"séparer",
	"séquence",
	"serein",
	"sergent",
	"sérieux",
	"serrure",
	"sérum",
	"service",
	"sésame",
	"sévir",
	"sevrage",
	"sextuple",
	"sidéral",
	"siècle",
	"siéger",
	"siffler",
	"sigle",
	"signal",
	"silence",
	"silicium",
	"simple",
	"sincère",
	"sinistre",
	"siphon",
	"sirop",
	"sismique",
	"situer",
	"skier",
	"social",
	"socle",
	"sodium",
	"soigneux",
	"soldat",
	"soleil",
	"solitude",
	"soluble",
	"sombre",
	"sommeil",
	"somnoler",
	"sonde",
	"songeur",
	"sonnette",
	"sonore",
	"sorcier",
	"sortir",
	"sosie",
	"sottise",
	"soucieux",
	"soudure",
	"souffle",
	"soulever",
	"soupape",
	"source",
	"soutirer",
	"souvenir",
	"spacieux",
	"spatial",
	"spécial",
	"sphère",
	"spiral",
	"stable",
	"station",
	"sternum",
	"stimulus",
	"stipuler",
	"strict",
	"studieux",
	"stupeur",
	"styliste",
	"sublime",
	"substrat",
	"subtil",
	"subvenir",
	"succès",
	"sucre",
	"suffixe",
	"suggérer",
	"suiveur",
	"sulfate",
	"superbe",
	"supplier",
	"surface",
	"suricate",
	"surmener",
	"surprise",
	"sursaut",
	"survie",
	"suspect",
	"syllabe",
	"symbole",
	"symétrie",
	"synapse",
	"syntaxe",
	"système",
	"tabac",
	"tablier",
	"tactile",
	"tailler",
	"talent",
	"talisman",
	"talonner",
	"tambour",
	"tamiser",
	"tangible",
	"tapis",
	"taquiner",
	"tarder",
	"tarif",
	"tartine",
	"tasse",
	"tatami",
	"tatouage",
	"taupe",
	"taureau",
	"taxer",
	"témoin",
	"temporel",
	"tenaille",
	"tendre",
	"teneur",
	"tenir",
	"tension",
	"terminer",
	"terne",
	"terrible",
	"tétine",
	"texte",
	"thème",
	"théorie",
	"thérapie",
	"thorax",
	"tibia",
	"tiède",
	"timide",
	"tirelire",
	"tiroir",
	"tissu",
	"titane",
	"titre",
	"tituber",
	"toboggan",
	"tolérant",
	"tomate",
	"tonique",
	"tonneau",
	"toponyme",
	"torche",
	"tordre",
	"tornade",
	"torpille",
	"torrent",
	"torse",
	"tortue",
	"totem",
	"toucher",
	"tournage",
	"tousser",
	"toxine",
	"traction",
	"trafic",
	"tragique",
	"trahir",
	"train",
	"trancher",
	"travail",
	"trèfle",
	"tremper",
	"trésor",
	"treuil",
	"triage",
	"tribunal",
	"tricoter",
	"trilogie",
	"triomphe",
	"tripler",
	"triturer",
	"trivial",
	"trombone",
	"tronc",
	"tropical",
	"troupeau",
	"tuile",
	"tulipe",
	"tumulte",
	"tunnel",
	"turbine",
	"tuteur",
	"tutoyer",
	"tuyau",
	"tympan",
	"typhon",
	"typique",
	"tyran",
	"ubuesque",
	"ultime",
	"ultrason",
	"unanime",
	"unifier",
	"union",
	"unique",
	"unitaire",
	"univers",
	"uranium",
	"urbain",
	"urticant",
	"usage",
	"usine",
	"usuel",
	"usure",
	"utile",
	"utopie",
	"vacarme",
	"vaccin",
	"vagabond",
	"vague",
	"vaillant",
	"vaincre",
	"vaisseau",
	"valable",
	"valise",
	"vallon",
	"valve",
	"vampire",
	"vanille",
	"vapeur",
	"varier",
	"vaseux",
	"vassal",
	"vaste",
	"vecteur",
	"vedette",
	"végétal",
	"véhicule",
	"veinard",
	"véloce",
	"vendredi",
	"vénérer",
	"venger",
	"venimeux",
	"ventouse",
	"verdure",
	"vérin",
	"vernir",
	"verrou",
	"verser",
	"vertu",
	"veston",
	"vétéran",
	"vétuste",
	"vexant",
	"vexer",
	"viaduc",
	"viande",
	"victoire",
	"vidange",
	"vidéo",
	"vignette",
	"vigueur",
	"vilain",
	"village",
	"vinaigre",
	"violon",
	"vipère",
	"virement",
	"virtuose",
	"virus",
	"visage",
	"viseur",
	"vision",
	"visqueux",
	"visuel",
	"vital",
	"vitesse",
	"viticole",
	"vitrine",
	"vivace",
	"vivipare",
	"vocation",
	"voguer",
	"voile",
	"voisin",
	"voiture",
	"volaille",
	"volcan",
	"voltiger",
	"volume",
	"vorace",
	"vortex",
	"voter",
	"vouloir",
	"voyage",
	"voyelle",
	"wagon",
	"xénon",
	"yacht",
	"zèbre",
	"zénith",
	"zeste",
	"zoologie"
];

const require$$5 = [
	"abaco",
	"abbaglio",
	"abbinato",
	"abete",
	"abisso",
	"abolire",
	"abrasivo",
	"abrogato",
	"accadere",
	"accenno",
	"accusato",
	"acetone",
	"achille",
	"acido",
	"acqua",
	"acre",
	"acrilico",
	"acrobata",
	"acuto",
	"adagio",
	"addebito",
	"addome",
	"adeguato",
	"aderire",
	"adipe",
	"adottare",
	"adulare",
	"affabile",
	"affetto",
	"affisso",
	"affranto",
	"aforisma",
	"afoso",
	"africano",
	"agave",
	"agente",
	"agevole",
	"aggancio",
	"agire",
	"agitare",
	"agonismo",
	"agricolo",
	"agrumeto",
	"aguzzo",
	"alabarda",
	"alato",
	"albatro",
	"alberato",
	"albo",
	"albume",
	"alce",
	"alcolico",
	"alettone",
	"alfa",
	"algebra",
	"aliante",
	"alibi",
	"alimento",
	"allagato",
	"allegro",
	"allievo",
	"allodola",
	"allusivo",
	"almeno",
	"alogeno",
	"alpaca",
	"alpestre",
	"altalena",
	"alterno",
	"alticcio",
	"altrove",
	"alunno",
	"alveolo",
	"alzare",
	"amalgama",
	"amanita",
	"amarena",
	"ambito",
	"ambrato",
	"ameba",
	"america",
	"ametista",
	"amico",
	"ammasso",
	"ammenda",
	"ammirare",
	"ammonito",
	"amore",
	"ampio",
	"ampliare",
	"amuleto",
	"anacardo",
	"anagrafe",
	"analista",
	"anarchia",
	"anatra",
	"anca",
	"ancella",
	"ancora",
	"andare",
	"andrea",
	"anello",
	"angelo",
	"angolare",
	"angusto",
	"anima",
	"annegare",
	"annidato",
	"anno",
	"annuncio",
	"anonimo",
	"anticipo",
	"anzi",
	"apatico",
	"apertura",
	"apode",
	"apparire",
	"appetito",
	"appoggio",
	"approdo",
	"appunto",
	"aprile",
	"arabica",
	"arachide",
	"aragosta",
	"araldica",
	"arancio",
	"aratura",
	"arazzo",
	"arbitro",
	"archivio",
	"ardito",
	"arenile",
	"argento",
	"argine",
	"arguto",
	"aria",
	"armonia",
	"arnese",
	"arredato",
	"arringa",
	"arrosto",
	"arsenico",
	"arso",
	"artefice",
	"arzillo",
	"asciutto",
	"ascolto",
	"asepsi",
	"asettico",
	"asfalto",
	"asino",
	"asola",
	"aspirato",
	"aspro",
	"assaggio",
	"asse",
	"assoluto",
	"assurdo",
	"asta",
	"astenuto",
	"astice",
	"astratto",
	"atavico",
	"ateismo",
	"atomico",
	"atono",
	"attesa",
	"attivare",
	"attorno",
	"attrito",
	"attuale",
	"ausilio",
	"austria",
	"autista",
	"autonomo",
	"autunno",
	"avanzato",
	"avere",
	"avvenire",
	"avviso",
	"avvolgere",
	"azione",
	"azoto",
	"azzimo",
	"azzurro",
	"babele",
	"baccano",
	"bacino",
	"baco",
	"badessa",
	"badilata",
	"bagnato",
	"baita",
	"balcone",
	"baldo",
	"balena",
	"ballata",
	"balzano",
	"bambino",
	"bandire",
	"baraonda",
	"barbaro",
	"barca",
	"baritono",
	"barlume",
	"barocco",
	"basilico",
	"basso",
	"batosta",
	"battuto",
	"baule",
	"bava",
	"bavosa",
	"becco",
	"beffa",
	"belgio",
	"belva",
	"benda",
	"benevole",
	"benigno",
	"benzina",
	"bere",
	"berlina",
	"beta",
	"bibita",
	"bici",
	"bidone",
	"bifido",
	"biga",
	"bilancia",
	"bimbo",
	"binocolo",
	"biologo",
	"bipede",
	"bipolare",
	"birbante",
	"birra",
	"biscotto",
	"bisesto",
	"bisnonno",
	"bisonte",
	"bisturi",
	"bizzarro",
	"blando",
	"blatta",
	"bollito",
	"bonifico",
	"bordo",
	"bosco",
	"botanico",
	"bottino",
	"bozzolo",
	"braccio",
	"bradipo",
	"brama",
	"branca",
	"bravura",
	"bretella",
	"brevetto",
	"brezza",
	"briglia",
	"brillante",
	"brindare",
	"broccolo",
	"brodo",
	"bronzina",
	"brullo",
	"bruno",
	"bubbone",
	"buca",
	"budino",
	"buffone",
	"buio",
	"bulbo",
	"buono",
	"burlone",
	"burrasca",
	"bussola",
	"busta",
	"cadetto",
	"caduco",
	"calamaro",
	"calcolo",
	"calesse",
	"calibro",
	"calmo",
	"caloria",
	"cambusa",
	"camerata",
	"camicia",
	"cammino",
	"camola",
	"campale",
	"canapa",
	"candela",
	"cane",
	"canino",
	"canotto",
	"cantina",
	"capace",
	"capello",
	"capitolo",
	"capogiro",
	"cappero",
	"capra",
	"capsula",
	"carapace",
	"carcassa",
	"cardo",
	"carisma",
	"carovana",
	"carretto",
	"cartolina",
	"casaccio",
	"cascata",
	"caserma",
	"caso",
	"cassone",
	"castello",
	"casuale",
	"catasta",
	"catena",
	"catrame",
	"cauto",
	"cavillo",
	"cedibile",
	"cedrata",
	"cefalo",
	"celebre",
	"cellulare",
	"cena",
	"cenone",
	"centesimo",
	"ceramica",
	"cercare",
	"certo",
	"cerume",
	"cervello",
	"cesoia",
	"cespo",
	"ceto",
	"chela",
	"chiaro",
	"chicca",
	"chiedere",
	"chimera",
	"china",
	"chirurgo",
	"chitarra",
	"ciao",
	"ciclismo",
	"cifrare",
	"cigno",
	"cilindro",
	"ciottolo",
	"circa",
	"cirrosi",
	"citrico",
	"cittadino",
	"ciuffo",
	"civetta",
	"civile",
	"classico",
	"clinica",
	"cloro",
	"cocco",
	"codardo",
	"codice",
	"coerente",
	"cognome",
	"collare",
	"colmato",
	"colore",
	"colposo",
	"coltivato",
	"colza",
	"coma",
	"cometa",
	"commando",
	"comodo",
	"computer",
	"comune",
	"conciso",
	"condurre",
	"conferma",
	"congelare",
	"coniuge",
	"connesso",
	"conoscere",
	"consumo",
	"continuo",
	"convegno",
	"coperto",
	"copione",
	"coppia",
	"copricapo",
	"corazza",
	"cordata",
	"coricato",
	"cornice",
	"corolla",
	"corpo",
	"corredo",
	"corsia",
	"cortese",
	"cosmico",
	"costante",
	"cottura",
	"covato",
	"cratere",
	"cravatta",
	"creato",
	"credere",
	"cremoso",
	"crescita",
	"creta",
	"criceto",
	"crinale",
	"crisi",
	"critico",
	"croce",
	"cronaca",
	"crostata",
	"cruciale",
	"crusca",
	"cucire",
	"cuculo",
	"cugino",
	"cullato",
	"cupola",
	"curatore",
	"cursore",
	"curvo",
	"cuscino",
	"custode",
	"dado",
	"daino",
	"dalmata",
	"damerino",
	"daniela",
	"dannoso",
	"danzare",
	"datato",
	"davanti",
	"davvero",
	"debutto",
	"decennio",
	"deciso",
	"declino",
	"decollo",
	"decreto",
	"dedicato",
	"definito",
	"deforme",
	"degno",
	"delegare",
	"delfino",
	"delirio",
	"delta",
	"demenza",
	"denotato",
	"dentro",
	"deposito",
	"derapata",
	"derivare",
	"deroga",
	"descritto",
	"deserto",
	"desiderio",
	"desumere",
	"detersivo",
	"devoto",
	"diametro",
	"dicembre",
	"diedro",
	"difeso",
	"diffuso",
	"digerire",
	"digitale",
	"diluvio",
	"dinamico",
	"dinnanzi",
	"dipinto",
	"diploma",
	"dipolo",
	"diradare",
	"dire",
	"dirotto",
	"dirupo",
	"disagio",
	"discreto",
	"disfare",
	"disgelo",
	"disposto",
	"distanza",
	"disumano",
	"dito",
	"divano",
	"divelto",
	"dividere",
	"divorato",
	"doblone",
	"docente",
	"doganale",
	"dogma",
	"dolce",
	"domato",
	"domenica",
	"dominare",
	"dondolo",
	"dono",
	"dormire",
	"dote",
	"dottore",
	"dovuto",
	"dozzina",
	"drago",
	"druido",
	"dubbio",
	"dubitare",
	"ducale",
	"duna",
	"duomo",
	"duplice",
	"duraturo",
	"ebano",
	"eccesso",
	"ecco",
	"eclissi",
	"economia",
	"edera",
	"edicola",
	"edile",
	"editoria",
	"educare",
	"egemonia",
	"egli",
	"egoismo",
	"egregio",
	"elaborato",
	"elargire",
	"elegante",
	"elencato",
	"eletto",
	"elevare",
	"elfico",
	"elica",
	"elmo",
	"elsa",
	"eluso",
	"emanato",
	"emblema",
	"emesso",
	"emiro",
	"emotivo",
	"emozione",
	"empirico",
	"emulo",
	"endemico",
	"enduro",
	"energia",
	"enfasi",
	"enoteca",
	"entrare",
	"enzima",
	"epatite",
	"epilogo",
	"episodio",
	"epocale",
	"eppure",
	"equatore",
	"erario",
	"erba",
	"erboso",
	"erede",
	"eremita",
	"erigere",
	"ermetico",
	"eroe",
	"erosivo",
	"errante",
	"esagono",
	"esame",
	"esanime",
	"esaudire",
	"esca",
	"esempio",
	"esercito",
	"esibito",
	"esigente",
	"esistere",
	"esito",
	"esofago",
	"esortato",
	"esoso",
	"espanso",
	"espresso",
	"essenza",
	"esso",
	"esteso",
	"estimare",
	"estonia",
	"estroso",
	"esultare",
	"etilico",
	"etnico",
	"etrusco",
	"etto",
	"euclideo",
	"europa",
	"evaso",
	"evidenza",
	"evitato",
	"evoluto",
	"evviva",
	"fabbrica",
	"faccenda",
	"fachiro",
	"falco",
	"famiglia",
	"fanale",
	"fanfara",
	"fango",
	"fantasma",
	"fare",
	"farfalla",
	"farinoso",
	"farmaco",
	"fascia",
	"fastoso",
	"fasullo",
	"faticare",
	"fato",
	"favoloso",
	"febbre",
	"fecola",
	"fede",
	"fegato",
	"felpa",
	"feltro",
	"femmina",
	"fendere",
	"fenomeno",
	"fermento",
	"ferro",
	"fertile",
	"fessura",
	"festivo",
	"fetta",
	"feudo",
	"fiaba",
	"fiducia",
	"fifa",
	"figurato",
	"filo",
	"finanza",
	"finestra",
	"finire",
	"fiore",
	"fiscale",
	"fisico",
	"fiume",
	"flacone",
	"flamenco",
	"flebo",
	"flemma",
	"florido",
	"fluente",
	"fluoro",
	"fobico",
	"focaccia",
	"focoso",
	"foderato",
	"foglio",
	"folata",
	"folclore",
	"folgore",
	"fondente",
	"fonetico",
	"fonia",
	"fontana",
	"forbito",
	"forchetta",
	"foresta",
	"formica",
	"fornaio",
	"foro",
	"fortezza",
	"forzare",
	"fosfato",
	"fosso",
	"fracasso",
	"frana",
	"frassino",
	"fratello",
	"freccetta",
	"frenata",
	"fresco",
	"frigo",
	"frollino",
	"fronde",
	"frugale",
	"frutta",
	"fucilata",
	"fucsia",
	"fuggente",
	"fulmine",
	"fulvo",
	"fumante",
	"fumetto",
	"fumoso",
	"fune",
	"funzione",
	"fuoco",
	"furbo",
	"furgone",
	"furore",
	"fuso",
	"futile",
	"gabbiano",
	"gaffe",
	"galateo",
	"gallina",
	"galoppo",
	"gambero",
	"gamma",
	"garanzia",
	"garbo",
	"garofano",
	"garzone",
	"gasdotto",
	"gasolio",
	"gastrico",
	"gatto",
	"gaudio",
	"gazebo",
	"gazzella",
	"geco",
	"gelatina",
	"gelso",
	"gemello",
	"gemmato",
	"gene",
	"genitore",
	"gennaio",
	"genotipo",
	"gergo",
	"ghepardo",
	"ghiaccio",
	"ghisa",
	"giallo",
	"gilda",
	"ginepro",
	"giocare",
	"gioiello",
	"giorno",
	"giove",
	"girato",
	"girone",
	"gittata",
	"giudizio",
	"giurato",
	"giusto",
	"globulo",
	"glutine",
	"gnomo",
	"gobba",
	"golf",
	"gomito",
	"gommone",
	"gonfio",
	"gonna",
	"governo",
	"gracile",
	"grado",
	"grafico",
	"grammo",
	"grande",
	"grattare",
	"gravoso",
	"grazia",
	"greca",
	"gregge",
	"grifone",
	"grigio",
	"grinza",
	"grotta",
	"gruppo",
	"guadagno",
	"guaio",
	"guanto",
	"guardare",
	"gufo",
	"guidare",
	"ibernato",
	"icona",
	"identico",
	"idillio",
	"idolo",
	"idra",
	"idrico",
	"idrogeno",
	"igiene",
	"ignaro",
	"ignorato",
	"ilare",
	"illeso",
	"illogico",
	"illudere",
	"imballo",
	"imbevuto",
	"imbocco",
	"imbuto",
	"immane",
	"immerso",
	"immolato",
	"impacco",
	"impeto",
	"impiego",
	"importo",
	"impronta",
	"inalare",
	"inarcare",
	"inattivo",
	"incanto",
	"incendio",
	"inchino",
	"incisivo",
	"incluso",
	"incontro",
	"incrocio",
	"incubo",
	"indagine",
	"india",
	"indole",
	"inedito",
	"infatti",
	"infilare",
	"inflitto",
	"ingaggio",
	"ingegno",
	"inglese",
	"ingordo",
	"ingrosso",
	"innesco",
	"inodore",
	"inoltrare",
	"inondato",
	"insano",
	"insetto",
	"insieme",
	"insonnia",
	"insulina",
	"intasato",
	"intero",
	"intonaco",
	"intuito",
	"inumidire",
	"invalido",
	"invece",
	"invito",
	"iperbole",
	"ipnotico",
	"ipotesi",
	"ippica",
	"iride",
	"irlanda",
	"ironico",
	"irrigato",
	"irrorare",
	"isolato",
	"isotopo",
	"isterico",
	"istituto",
	"istrice",
	"italia",
	"iterare",
	"labbro",
	"labirinto",
	"lacca",
	"lacerato",
	"lacrima",
	"lacuna",
	"laddove",
	"lago",
	"lampo",
	"lancetta",
	"lanterna",
	"lardoso",
	"larga",
	"laringe",
	"lastra",
	"latenza",
	"latino",
	"lattuga",
	"lavagna",
	"lavoro",
	"legale",
	"leggero",
	"lembo",
	"lentezza",
	"lenza",
	"leone",
	"lepre",
	"lesivo",
	"lessato",
	"lesto",
	"letterale",
	"leva",
	"levigato",
	"libero",
	"lido",
	"lievito",
	"lilla",
	"limatura",
	"limitare",
	"limpido",
	"lineare",
	"lingua",
	"liquido",
	"lira",
	"lirica",
	"lisca",
	"lite",
	"litigio",
	"livrea",
	"locanda",
	"lode",
	"logica",
	"lombare",
	"londra",
	"longevo",
	"loquace",
	"lorenzo",
	"loto",
	"lotteria",
	"luce",
	"lucidato",
	"lumaca",
	"luminoso",
	"lungo",
	"lupo",
	"luppolo",
	"lusinga",
	"lusso",
	"lutto",
	"macabro",
	"macchina",
	"macero",
	"macinato",
	"madama",
	"magico",
	"maglia",
	"magnete",
	"magro",
	"maiolica",
	"malafede",
	"malgrado",
	"malinteso",
	"malsano",
	"malto",
	"malumore",
	"mana",
	"mancia",
	"mandorla",
	"mangiare",
	"manifesto",
	"mannaro",
	"manovra",
	"mansarda",
	"mantide",
	"manubrio",
	"mappa",
	"maratona",
	"marcire",
	"maretta",
	"marmo",
	"marsupio",
	"maschera",
	"massaia",
	"mastino",
	"materasso",
	"matricola",
	"mattone",
	"maturo",
	"mazurca",
	"meandro",
	"meccanico",
	"mecenate",
	"medesimo",
	"meditare",
	"mega",
	"melassa",
	"melis",
	"melodia",
	"meninge",
	"meno",
	"mensola",
	"mercurio",
	"merenda",
	"merlo",
	"meschino",
	"mese",
	"messere",
	"mestolo",
	"metallo",
	"metodo",
	"mettere",
	"miagolare",
	"mica",
	"micelio",
	"michele",
	"microbo",
	"midollo",
	"miele",
	"migliore",
	"milano",
	"milite",
	"mimosa",
	"minerale",
	"mini",
	"minore",
	"mirino",
	"mirtillo",
	"miscela",
	"missiva",
	"misto",
	"misurare",
	"mitezza",
	"mitigare",
	"mitra",
	"mittente",
	"mnemonico",
	"modello",
	"modifica",
	"modulo",
	"mogano",
	"mogio",
	"mole",
	"molosso",
	"monastero",
	"monco",
	"mondina",
	"monetario",
	"monile",
	"monotono",
	"monsone",
	"montato",
	"monviso",
	"mora",
	"mordere",
	"morsicato",
	"mostro",
	"motivato",
	"motosega",
	"motto",
	"movenza",
	"movimento",
	"mozzo",
	"mucca",
	"mucosa",
	"muffa",
	"mughetto",
	"mugnaio",
	"mulatto",
	"mulinello",
	"multiplo",
	"mummia",
	"munto",
	"muovere",
	"murale",
	"musa",
	"muscolo",
	"musica",
	"mutevole",
	"muto",
	"nababbo",
	"nafta",
	"nanometro",
	"narciso",
	"narice",
	"narrato",
	"nascere",
	"nastrare",
	"naturale",
	"nautica",
	"naviglio",
	"nebulosa",
	"necrosi",
	"negativo",
	"negozio",
	"nemmeno",
	"neofita",
	"neretto",
	"nervo",
	"nessuno",
	"nettuno",
	"neutrale",
	"neve",
	"nevrotico",
	"nicchia",
	"ninfa",
	"nitido",
	"nobile",
	"nocivo",
	"nodo",
	"nome",
	"nomina",
	"nordico",
	"normale",
	"norvegese",
	"nostrano",
	"notare",
	"notizia",
	"notturno",
	"novella",
	"nucleo",
	"nulla",
	"numero",
	"nuovo",
	"nutrire",
	"nuvola",
	"nuziale",
	"oasi",
	"obbedire",
	"obbligo",
	"obelisco",
	"oblio",
	"obolo",
	"obsoleto",
	"occasione",
	"occhio",
	"occidente",
	"occorrere",
	"occultare",
	"ocra",
	"oculato",
	"odierno",
	"odorare",
	"offerta",
	"offrire",
	"offuscato",
	"oggetto",
	"oggi",
	"ognuno",
	"olandese",
	"olfatto",
	"oliato",
	"oliva",
	"ologramma",
	"oltre",
	"omaggio",
	"ombelico",
	"ombra",
	"omega",
	"omissione",
	"ondoso",
	"onere",
	"onice",
	"onnivoro",
	"onorevole",
	"onta",
	"operato",
	"opinione",
	"opposto",
	"oracolo",
	"orafo",
	"ordine",
	"orecchino",
	"orefice",
	"orfano",
	"organico",
	"origine",
	"orizzonte",
	"orma",
	"ormeggio",
	"ornativo",
	"orologio",
	"orrendo",
	"orribile",
	"ortensia",
	"ortica",
	"orzata",
	"orzo",
	"osare",
	"oscurare",
	"osmosi",
	"ospedale",
	"ospite",
	"ossa",
	"ossidare",
	"ostacolo",
	"oste",
	"otite",
	"otre",
	"ottagono",
	"ottimo",
	"ottobre",
	"ovale",
	"ovest",
	"ovino",
	"oviparo",
	"ovocito",
	"ovunque",
	"ovviare",
	"ozio",
	"pacchetto",
	"pace",
	"pacifico",
	"padella",
	"padrone",
	"paese",
	"paga",
	"pagina",
	"palazzina",
	"palesare",
	"pallido",
	"palo",
	"palude",
	"pandoro",
	"pannello",
	"paolo",
	"paonazzo",
	"paprica",
	"parabola",
	"parcella",
	"parere",
	"pargolo",
	"pari",
	"parlato",
	"parola",
	"partire",
	"parvenza",
	"parziale",
	"passivo",
	"pasticca",
	"patacca",
	"patologia",
	"pattume",
	"pavone",
	"peccato",
	"pedalare",
	"pedonale",
	"peggio",
	"peloso",
	"penare",
	"pendice",
	"penisola",
	"pennuto",
	"penombra",
	"pensare",
	"pentola",
	"pepe",
	"pepita",
	"perbene",
	"percorso",
	"perdonato",
	"perforare",
	"pergamena",
	"periodo",
	"permesso",
	"perno",
	"perplesso",
	"persuaso",
	"pertugio",
	"pervaso",
	"pesatore",
	"pesista",
	"peso",
	"pestifero",
	"petalo",
	"pettine",
	"petulante",
	"pezzo",
	"piacere",
	"pianta",
	"piattino",
	"piccino",
	"picozza",
	"piega",
	"pietra",
	"piffero",
	"pigiama",
	"pigolio",
	"pigro",
	"pila",
	"pilifero",
	"pillola",
	"pilota",
	"pimpante",
	"pineta",
	"pinna",
	"pinolo",
	"pioggia",
	"piombo",
	"piramide",
	"piretico",
	"pirite",
	"pirolisi",
	"pitone",
	"pizzico",
	"placebo",
	"planare",
	"plasma",
	"platano",
	"plenario",
	"pochezza",
	"poderoso",
	"podismo",
	"poesia",
	"poggiare",
	"polenta",
	"poligono",
	"pollice",
	"polmonite",
	"polpetta",
	"polso",
	"poltrona",
	"polvere",
	"pomice",
	"pomodoro",
	"ponte",
	"popoloso",
	"porfido",
	"poroso",
	"porpora",
	"porre",
	"portata",
	"posa",
	"positivo",
	"possesso",
	"postulato",
	"potassio",
	"potere",
	"pranzo",
	"prassi",
	"pratica",
	"precluso",
	"predica",
	"prefisso",
	"pregiato",
	"prelievo",
	"premere",
	"prenotare",
	"preparato",
	"presenza",
	"pretesto",
	"prevalso",
	"prima",
	"principe",
	"privato",
	"problema",
	"procura",
	"produrre",
	"profumo",
	"progetto",
	"prolunga",
	"promessa",
	"pronome",
	"proposta",
	"proroga",
	"proteso",
	"prova",
	"prudente",
	"prugna",
	"prurito",
	"psiche",
	"pubblico",
	"pudica",
	"pugilato",
	"pugno",
	"pulce",
	"pulito",
	"pulsante",
	"puntare",
	"pupazzo",
	"pupilla",
	"puro",
	"quadro",
	"qualcosa",
	"quasi",
	"querela",
	"quota",
	"raccolto",
	"raddoppio",
	"radicale",
	"radunato",
	"raffica",
	"ragazzo",
	"ragione",
	"ragno",
	"ramarro",
	"ramingo",
	"ramo",
	"randagio",
	"rantolare",
	"rapato",
	"rapina",
	"rappreso",
	"rasatura",
	"raschiato",
	"rasente",
	"rassegna",
	"rastrello",
	"rata",
	"ravveduto",
	"reale",
	"recepire",
	"recinto",
	"recluta",
	"recondito",
	"recupero",
	"reddito",
	"redimere",
	"regalato",
	"registro",
	"regola",
	"regresso",
	"relazione",
	"remare",
	"remoto",
	"renna",
	"replica",
	"reprimere",
	"reputare",
	"resa",
	"residente",
	"responso",
	"restauro",
	"rete",
	"retina",
	"retorica",
	"rettifica",
	"revocato",
	"riassunto",
	"ribadire",
	"ribelle",
	"ribrezzo",
	"ricarica",
	"ricco",
	"ricevere",
	"riciclato",
	"ricordo",
	"ricreduto",
	"ridicolo",
	"ridurre",
	"rifasare",
	"riflesso",
	"riforma",
	"rifugio",
	"rigare",
	"rigettato",
	"righello",
	"rilassato",
	"rilevato",
	"rimanere",
	"rimbalzo",
	"rimedio",
	"rimorchio",
	"rinascita",
	"rincaro",
	"rinforzo",
	"rinnovo",
	"rinomato",
	"rinsavito",
	"rintocco",
	"rinuncia",
	"rinvenire",
	"riparato",
	"ripetuto",
	"ripieno",
	"riportare",
	"ripresa",
	"ripulire",
	"risata",
	"rischio",
	"riserva",
	"risibile",
	"riso",
	"rispetto",
	"ristoro",
	"risultato",
	"risvolto",
	"ritardo",
	"ritegno",
	"ritmico",
	"ritrovo",
	"riunione",
	"riva",
	"riverso",
	"rivincita",
	"rivolto",
	"rizoma",
	"roba",
	"robotico",
	"robusto",
	"roccia",
	"roco",
	"rodaggio",
	"rodere",
	"roditore",
	"rogito",
	"rollio",
	"romantico",
	"rompere",
	"ronzio",
	"rosolare",
	"rospo",
	"rotante",
	"rotondo",
	"rotula",
	"rovescio",
	"rubizzo",
	"rubrica",
	"ruga",
	"rullino",
	"rumine",
	"rumoroso",
	"ruolo",
	"rupe",
	"russare",
	"rustico",
	"sabato",
	"sabbiare",
	"sabotato",
	"sagoma",
	"salasso",
	"saldatura",
	"salgemma",
	"salivare",
	"salmone",
	"salone",
	"saltare",
	"saluto",
	"salvo",
	"sapere",
	"sapido",
	"saporito",
	"saraceno",
	"sarcasmo",
	"sarto",
	"sassoso",
	"satellite",
	"satira",
	"satollo",
	"saturno",
	"savana",
	"savio",
	"saziato",
	"sbadiglio",
	"sbalzo",
	"sbancato",
	"sbarra",
	"sbattere",
	"sbavare",
	"sbendare",
	"sbirciare",
	"sbloccato",
	"sbocciato",
	"sbrinare",
	"sbruffone",
	"sbuffare",
	"scabroso",
	"scadenza",
	"scala",
	"scambiare",
	"scandalo",
	"scapola",
	"scarso",
	"scatenare",
	"scavato",
	"scelto",
	"scenico",
	"scettro",
	"scheda",
	"schiena",
	"sciarpa",
	"scienza",
	"scindere",
	"scippo",
	"sciroppo",
	"scivolo",
	"sclerare",
	"scodella",
	"scolpito",
	"scomparto",
	"sconforto",
	"scoprire",
	"scorta",
	"scossone",
	"scozzese",
	"scriba",
	"scrollare",
	"scrutinio",
	"scuderia",
	"scultore",
	"scuola",
	"scuro",
	"scusare",
	"sdebitare",
	"sdoganare",
	"seccatura",
	"secondo",
	"sedano",
	"seggiola",
	"segnalato",
	"segregato",
	"seguito",
	"selciato",
	"selettivo",
	"sella",
	"selvaggio",
	"semaforo",
	"sembrare",
	"seme",
	"seminato",
	"sempre",
	"senso",
	"sentire",
	"sepolto",
	"sequenza",
	"serata",
	"serbato",
	"sereno",
	"serio",
	"serpente",
	"serraglio",
	"servire",
	"sestina",
	"setola",
	"settimana",
	"sfacelo",
	"sfaldare",
	"sfamato",
	"sfarzoso",
	"sfaticato",
	"sfera",
	"sfida",
	"sfilato",
	"sfinge",
	"sfocato",
	"sfoderare",
	"sfogo",
	"sfoltire",
	"sforzato",
	"sfratto",
	"sfruttato",
	"sfuggito",
	"sfumare",
	"sfuso",
	"sgabello",
	"sgarbato",
	"sgonfiare",
	"sgorbio",
	"sgrassato",
	"sguardo",
	"sibilo",
	"siccome",
	"sierra",
	"sigla",
	"signore",
	"silenzio",
	"sillaba",
	"simbolo",
	"simpatico",
	"simulato",
	"sinfonia",
	"singolo",
	"sinistro",
	"sino",
	"sintesi",
	"sinusoide",
	"sipario",
	"sisma",
	"sistole",
	"situato",
	"slitta",
	"slogatura",
	"sloveno",
	"smarrito",
	"smemorato",
	"smentito",
	"smeraldo",
	"smilzo",
	"smontare",
	"smottato",
	"smussato",
	"snellire",
	"snervato",
	"snodo",
	"sobbalzo",
	"sobrio",
	"soccorso",
	"sociale",
	"sodale",
	"soffitto",
	"sogno",
	"soldato",
	"solenne",
	"solido",
	"sollazzo",
	"solo",
	"solubile",
	"solvente",
	"somatico",
	"somma",
	"sonda",
	"sonetto",
	"sonnifero",
	"sopire",
	"soppeso",
	"sopra",
	"sorgere",
	"sorpasso",
	"sorriso",
	"sorso",
	"sorteggio",
	"sorvolato",
	"sospiro",
	"sosta",
	"sottile",
	"spada",
	"spalla",
	"spargere",
	"spatola",
	"spavento",
	"spazzola",
	"specie",
	"spedire",
	"spegnere",
	"spelatura",
	"speranza",
	"spessore",
	"spettrale",
	"spezzato",
	"spia",
	"spigoloso",
	"spillato",
	"spinoso",
	"spirale",
	"splendido",
	"sportivo",
	"sposo",
	"spranga",
	"sprecare",
	"spronato",
	"spruzzo",
	"spuntino",
	"squillo",
	"sradicare",
	"srotolato",
	"stabile",
	"stacco",
	"staffa",
	"stagnare",
	"stampato",
	"stantio",
	"starnuto",
	"stasera",
	"statuto",
	"stelo",
	"steppa",
	"sterzo",
	"stiletto",
	"stima",
	"stirpe",
	"stivale",
	"stizzoso",
	"stonato",
	"storico",
	"strappo",
	"stregato",
	"stridulo",
	"strozzare",
	"strutto",
	"stuccare",
	"stufo",
	"stupendo",
	"subentro",
	"succoso",
	"sudore",
	"suggerito",
	"sugo",
	"sultano",
	"suonare",
	"superbo",
	"supporto",
	"surgelato",
	"surrogato",
	"sussurro",
	"sutura",
	"svagare",
	"svedese",
	"sveglio",
	"svelare",
	"svenuto",
	"svezia",
	"sviluppo",
	"svista",
	"svizzera",
	"svolta",
	"svuotare",
	"tabacco",
	"tabulato",
	"tacciare",
	"taciturno",
	"tale",
	"talismano",
	"tampone",
	"tannino",
	"tara",
	"tardivo",
	"targato",
	"tariffa",
	"tarpare",
	"tartaruga",
	"tasto",
	"tattico",
	"taverna",
	"tavolata",
	"tazza",
	"teca",
	"tecnico",
	"telefono",
	"temerario",
	"tempo",
	"temuto",
	"tendone",
	"tenero",
	"tensione",
	"tentacolo",
	"teorema",
	"terme",
	"terrazzo",
	"terzetto",
	"tesi",
	"tesserato",
	"testato",
	"tetro",
	"tettoia",
	"tifare",
	"tigella",
	"timbro",
	"tinto",
	"tipico",
	"tipografo",
	"tiraggio",
	"tiro",
	"titanio",
	"titolo",
	"titubante",
	"tizio",
	"tizzone",
	"toccare",
	"tollerare",
	"tolto",
	"tombola",
	"tomo",
	"tonfo",
	"tonsilla",
	"topazio",
	"topologia",
	"toppa",
	"torba",
	"tornare",
	"torrone",
	"tortora",
	"toscano",
	"tossire",
	"tostatura",
	"totano",
	"trabocco",
	"trachea",
	"trafila",
	"tragedia",
	"tralcio",
	"tramonto",
	"transito",
	"trapano",
	"trarre",
	"trasloco",
	"trattato",
	"trave",
	"treccia",
	"tremolio",
	"trespolo",
	"tributo",
	"tricheco",
	"trifoglio",
	"trillo",
	"trincea",
	"trio",
	"tristezza",
	"triturato",
	"trivella",
	"tromba",
	"trono",
	"troppo",
	"trottola",
	"trovare",
	"truccato",
	"tubatura",
	"tuffato",
	"tulipano",
	"tumulto",
	"tunisia",
	"turbare",
	"turchino",
	"tuta",
	"tutela",
	"ubicato",
	"uccello",
	"uccisore",
	"udire",
	"uditivo",
	"uffa",
	"ufficio",
	"uguale",
	"ulisse",
	"ultimato",
	"umano",
	"umile",
	"umorismo",
	"uncinetto",
	"ungere",
	"ungherese",
	"unicorno",
	"unificato",
	"unisono",
	"unitario",
	"unte",
	"uovo",
	"upupa",
	"uragano",
	"urgenza",
	"urlo",
	"usanza",
	"usato",
	"uscito",
	"usignolo",
	"usuraio",
	"utensile",
	"utilizzo",
	"utopia",
	"vacante",
	"vaccinato",
	"vagabondo",
	"vagliato",
	"valanga",
	"valgo",
	"valico",
	"valletta",
	"valoroso",
	"valutare",
	"valvola",
	"vampata",
	"vangare",
	"vanitoso",
	"vano",
	"vantaggio",
	"vanvera",
	"vapore",
	"varano",
	"varcato",
	"variante",
	"vasca",
	"vedetta",
	"vedova",
	"veduto",
	"vegetale",
	"veicolo",
	"velcro",
	"velina",
	"velluto",
	"veloce",
	"venato",
	"vendemmia",
	"vento",
	"verace",
	"verbale",
	"vergogna",
	"verifica",
	"vero",
	"verruca",
	"verticale",
	"vescica",
	"vessillo",
	"vestale",
	"veterano",
	"vetrina",
	"vetusto",
	"viandante",
	"vibrante",
	"vicenda",
	"vichingo",
	"vicinanza",
	"vidimare",
	"vigilia",
	"vigneto",
	"vigore",
	"vile",
	"villano",
	"vimini",
	"vincitore",
	"viola",
	"vipera",
	"virgola",
	"virologo",
	"virulento",
	"viscoso",
	"visione",
	"vispo",
	"vissuto",
	"visura",
	"vita",
	"vitello",
	"vittima",
	"vivanda",
	"vivido",
	"viziare",
	"voce",
	"voga",
	"volatile",
	"volere",
	"volpe",
	"voragine",
	"vulcano",
	"zampogna",
	"zanna",
	"zappato",
	"zattera",
	"zavorra",
	"zefiro",
	"zelante",
	"zelo",
	"zenzero",
	"zerbino",
	"zibetto",
	"zinco",
	"zircone",
	"zitto",
	"zolla",
	"zotico",
	"zucchero",
	"zufolo",
	"zulu",
	"zuppa"
];

const require$$6 = [
	"ábaco",
	"abdomen",
	"abeja",
	"abierto",
	"abogado",
	"abono",
	"aborto",
	"abrazo",
	"abrir",
	"abuelo",
	"abuso",
	"acabar",
	"academia",
	"acceso",
	"acción",
	"aceite",
	"acelga",
	"acento",
	"aceptar",
	"ácido",
	"aclarar",
	"acné",
	"acoger",
	"acoso",
	"activo",
	"acto",
	"actriz",
	"actuar",
	"acudir",
	"acuerdo",
	"acusar",
	"adicto",
	"admitir",
	"adoptar",
	"adorno",
	"aduana",
	"adulto",
	"aéreo",
	"afectar",
	"afición",
	"afinar",
	"afirmar",
	"ágil",
	"agitar",
	"agonía",
	"agosto",
	"agotar",
	"agregar",
	"agrio",
	"agua",
	"agudo",
	"águila",
	"aguja",
	"ahogo",
	"ahorro",
	"aire",
	"aislar",
	"ajedrez",
	"ajeno",
	"ajuste",
	"alacrán",
	"alambre",
	"alarma",
	"alba",
	"álbum",
	"alcalde",
	"aldea",
	"alegre",
	"alejar",
	"alerta",
	"aleta",
	"alfiler",
	"alga",
	"algodón",
	"aliado",
	"aliento",
	"alivio",
	"alma",
	"almeja",
	"almíbar",
	"altar",
	"alteza",
	"altivo",
	"alto",
	"altura",
	"alumno",
	"alzar",
	"amable",
	"amante",
	"amapola",
	"amargo",
	"amasar",
	"ámbar",
	"ámbito",
	"ameno",
	"amigo",
	"amistad",
	"amor",
	"amparo",
	"amplio",
	"ancho",
	"anciano",
	"ancla",
	"andar",
	"andén",
	"anemia",
	"ángulo",
	"anillo",
	"ánimo",
	"anís",
	"anotar",
	"antena",
	"antiguo",
	"antojo",
	"anual",
	"anular",
	"anuncio",
	"añadir",
	"añejo",
	"año",
	"apagar",
	"aparato",
	"apetito",
	"apio",
	"aplicar",
	"apodo",
	"aporte",
	"apoyo",
	"aprender",
	"aprobar",
	"apuesta",
	"apuro",
	"arado",
	"araña",
	"arar",
	"árbitro",
	"árbol",
	"arbusto",
	"archivo",
	"arco",
	"arder",
	"ardilla",
	"arduo",
	"área",
	"árido",
	"aries",
	"armonía",
	"arnés",
	"aroma",
	"arpa",
	"arpón",
	"arreglo",
	"arroz",
	"arruga",
	"arte",
	"artista",
	"asa",
	"asado",
	"asalto",
	"ascenso",
	"asegurar",
	"aseo",
	"asesor",
	"asiento",
	"asilo",
	"asistir",
	"asno",
	"asombro",
	"áspero",
	"astilla",
	"astro",
	"astuto",
	"asumir",
	"asunto",
	"atajo",
	"ataque",
	"atar",
	"atento",
	"ateo",
	"ático",
	"atleta",
	"átomo",
	"atraer",
	"atroz",
	"atún",
	"audaz",
	"audio",
	"auge",
	"aula",
	"aumento",
	"ausente",
	"autor",
	"aval",
	"avance",
	"avaro",
	"ave",
	"avellana",
	"avena",
	"avestruz",
	"avión",
	"aviso",
	"ayer",
	"ayuda",
	"ayuno",
	"azafrán",
	"azar",
	"azote",
	"azúcar",
	"azufre",
	"azul",
	"baba",
	"babor",
	"bache",
	"bahía",
	"baile",
	"bajar",
	"balanza",
	"balcón",
	"balde",
	"bambú",
	"banco",
	"banda",
	"baño",
	"barba",
	"barco",
	"barniz",
	"barro",
	"báscula",
	"bastón",
	"basura",
	"batalla",
	"batería",
	"batir",
	"batuta",
	"baúl",
	"bazar",
	"bebé",
	"bebida",
	"bello",
	"besar",
	"beso",
	"bestia",
	"bicho",
	"bien",
	"bingo",
	"blanco",
	"bloque",
	"blusa",
	"boa",
	"bobina",
	"bobo",
	"boca",
	"bocina",
	"boda",
	"bodega",
	"boina",
	"bola",
	"bolero",
	"bolsa",
	"bomba",
	"bondad",
	"bonito",
	"bono",
	"bonsái",
	"borde",
	"borrar",
	"bosque",
	"bote",
	"botín",
	"bóveda",
	"bozal",
	"bravo",
	"brazo",
	"brecha",
	"breve",
	"brillo",
	"brinco",
	"brisa",
	"broca",
	"broma",
	"bronce",
	"brote",
	"bruja",
	"brusco",
	"bruto",
	"buceo",
	"bucle",
	"bueno",
	"buey",
	"bufanda",
	"bufón",
	"búho",
	"buitre",
	"bulto",
	"burbuja",
	"burla",
	"burro",
	"buscar",
	"butaca",
	"buzón",
	"caballo",
	"cabeza",
	"cabina",
	"cabra",
	"cacao",
	"cadáver",
	"cadena",
	"caer",
	"café",
	"caída",
	"caimán",
	"caja",
	"cajón",
	"cal",
	"calamar",
	"calcio",
	"caldo",
	"calidad",
	"calle",
	"calma",
	"calor",
	"calvo",
	"cama",
	"cambio",
	"camello",
	"camino",
	"campo",
	"cáncer",
	"candil",
	"canela",
	"canguro",
	"canica",
	"canto",
	"caña",
	"cañón",
	"caoba",
	"caos",
	"capaz",
	"capitán",
	"capote",
	"captar",
	"capucha",
	"cara",
	"carbón",
	"cárcel",
	"careta",
	"carga",
	"cariño",
	"carne",
	"carpeta",
	"carro",
	"carta",
	"casa",
	"casco",
	"casero",
	"caspa",
	"castor",
	"catorce",
	"catre",
	"caudal",
	"causa",
	"cazo",
	"cebolla",
	"ceder",
	"cedro",
	"celda",
	"célebre",
	"celoso",
	"célula",
	"cemento",
	"ceniza",
	"centro",
	"cerca",
	"cerdo",
	"cereza",
	"cero",
	"cerrar",
	"certeza",
	"césped",
	"cetro",
	"chacal",
	"chaleco",
	"champú",
	"chancla",
	"chapa",
	"charla",
	"chico",
	"chiste",
	"chivo",
	"choque",
	"choza",
	"chuleta",
	"chupar",
	"ciclón",
	"ciego",
	"cielo",
	"cien",
	"cierto",
	"cifra",
	"cigarro",
	"cima",
	"cinco",
	"cine",
	"cinta",
	"ciprés",
	"circo",
	"ciruela",
	"cisne",
	"cita",
	"ciudad",
	"clamor",
	"clan",
	"claro",
	"clase",
	"clave",
	"cliente",
	"clima",
	"clínica",
	"cobre",
	"cocción",
	"cochino",
	"cocina",
	"coco",
	"código",
	"codo",
	"cofre",
	"coger",
	"cohete",
	"cojín",
	"cojo",
	"cola",
	"colcha",
	"colegio",
	"colgar",
	"colina",
	"collar",
	"colmo",
	"columna",
	"combate",
	"comer",
	"comida",
	"cómodo",
	"compra",
	"conde",
	"conejo",
	"conga",
	"conocer",
	"consejo",
	"contar",
	"copa",
	"copia",
	"corazón",
	"corbata",
	"corcho",
	"cordón",
	"corona",
	"correr",
	"coser",
	"cosmos",
	"costa",
	"cráneo",
	"cráter",
	"crear",
	"crecer",
	"creído",
	"crema",
	"cría",
	"crimen",
	"cripta",
	"crisis",
	"cromo",
	"crónica",
	"croqueta",
	"crudo",
	"cruz",
	"cuadro",
	"cuarto",
	"cuatro",
	"cubo",
	"cubrir",
	"cuchara",
	"cuello",
	"cuento",
	"cuerda",
	"cuesta",
	"cueva",
	"cuidar",
	"culebra",
	"culpa",
	"culto",
	"cumbre",
	"cumplir",
	"cuna",
	"cuneta",
	"cuota",
	"cupón",
	"cúpula",
	"curar",
	"curioso",
	"curso",
	"curva",
	"cutis",
	"dama",
	"danza",
	"dar",
	"dardo",
	"dátil",
	"deber",
	"débil",
	"década",
	"decir",
	"dedo",
	"defensa",
	"definir",
	"dejar",
	"delfín",
	"delgado",
	"delito",
	"demora",
	"denso",
	"dental",
	"deporte",
	"derecho",
	"derrota",
	"desayuno",
	"deseo",
	"desfile",
	"desnudo",
	"destino",
	"desvío",
	"detalle",
	"detener",
	"deuda",
	"día",
	"diablo",
	"diadema",
	"diamante",
	"diana",
	"diario",
	"dibujo",
	"dictar",
	"diente",
	"dieta",
	"diez",
	"difícil",
	"digno",
	"dilema",
	"diluir",
	"dinero",
	"directo",
	"dirigir",
	"disco",
	"diseño",
	"disfraz",
	"diva",
	"divino",
	"doble",
	"doce",
	"dolor",
	"domingo",
	"don",
	"donar",
	"dorado",
	"dormir",
	"dorso",
	"dos",
	"dosis",
	"dragón",
	"droga",
	"ducha",
	"duda",
	"duelo",
	"dueño",
	"dulce",
	"dúo",
	"duque",
	"durar",
	"dureza",
	"duro",
	"ébano",
	"ebrio",
	"echar",
	"eco",
	"ecuador",
	"edad",
	"edición",
	"edificio",
	"editor",
	"educar",
	"efecto",
	"eficaz",
	"eje",
	"ejemplo",
	"elefante",
	"elegir",
	"elemento",
	"elevar",
	"elipse",
	"élite",
	"elixir",
	"elogio",
	"eludir",
	"embudo",
	"emitir",
	"emoción",
	"empate",
	"empeño",
	"empleo",
	"empresa",
	"enano",
	"encargo",
	"enchufe",
	"encía",
	"enemigo",
	"enero",
	"enfado",
	"enfermo",
	"engaño",
	"enigma",
	"enlace",
	"enorme",
	"enredo",
	"ensayo",
	"enseñar",
	"entero",
	"entrar",
	"envase",
	"envío",
	"época",
	"equipo",
	"erizo",
	"escala",
	"escena",
	"escolar",
	"escribir",
	"escudo",
	"esencia",
	"esfera",
	"esfuerzo",
	"espada",
	"espejo",
	"espía",
	"esposa",
	"espuma",
	"esquí",
	"estar",
	"este",
	"estilo",
	"estufa",
	"etapa",
	"eterno",
	"ética",
	"etnia",
	"evadir",
	"evaluar",
	"evento",
	"evitar",
	"exacto",
	"examen",
	"exceso",
	"excusa",
	"exento",
	"exigir",
	"exilio",
	"existir",
	"éxito",
	"experto",
	"explicar",
	"exponer",
	"extremo",
	"fábrica",
	"fábula",
	"fachada",
	"fácil",
	"factor",
	"faena",
	"faja",
	"falda",
	"fallo",
	"falso",
	"faltar",
	"fama",
	"familia",
	"famoso",
	"faraón",
	"farmacia",
	"farol",
	"farsa",
	"fase",
	"fatiga",
	"fauna",
	"favor",
	"fax",
	"febrero",
	"fecha",
	"feliz",
	"feo",
	"feria",
	"feroz",
	"fértil",
	"fervor",
	"festín",
	"fiable",
	"fianza",
	"fiar",
	"fibra",
	"ficción",
	"ficha",
	"fideo",
	"fiebre",
	"fiel",
	"fiera",
	"fiesta",
	"figura",
	"fijar",
	"fijo",
	"fila",
	"filete",
	"filial",
	"filtro",
	"fin",
	"finca",
	"fingir",
	"finito",
	"firma",
	"flaco",
	"flauta",
	"flecha",
	"flor",
	"flota",
	"fluir",
	"flujo",
	"flúor",
	"fobia",
	"foca",
	"fogata",
	"fogón",
	"folio",
	"folleto",
	"fondo",
	"forma",
	"forro",
	"fortuna",
	"forzar",
	"fosa",
	"foto",
	"fracaso",
	"frágil",
	"franja",
	"frase",
	"fraude",
	"freír",
	"freno",
	"fresa",
	"frío",
	"frito",
	"fruta",
	"fuego",
	"fuente",
	"fuerza",
	"fuga",
	"fumar",
	"función",
	"funda",
	"furgón",
	"furia",
	"fusil",
	"fútbol",
	"futuro",
	"gacela",
	"gafas",
	"gaita",
	"gajo",
	"gala",
	"galería",
	"gallo",
	"gamba",
	"ganar",
	"gancho",
	"ganga",
	"ganso",
	"garaje",
	"garza",
	"gasolina",
	"gastar",
	"gato",
	"gavilán",
	"gemelo",
	"gemir",
	"gen",
	"género",
	"genio",
	"gente",
	"geranio",
	"gerente",
	"germen",
	"gesto",
	"gigante",
	"gimnasio",
	"girar",
	"giro",
	"glaciar",
	"globo",
	"gloria",
	"gol",
	"golfo",
	"goloso",
	"golpe",
	"goma",
	"gordo",
	"gorila",
	"gorra",
	"gota",
	"goteo",
	"gozar",
	"grada",
	"gráfico",
	"grano",
	"grasa",
	"gratis",
	"grave",
	"grieta",
	"grillo",
	"gripe",
	"gris",
	"grito",
	"grosor",
	"grúa",
	"grueso",
	"grumo",
	"grupo",
	"guante",
	"guapo",
	"guardia",
	"guerra",
	"guía",
	"guiño",
	"guion",
	"guiso",
	"guitarra",
	"gusano",
	"gustar",
	"haber",
	"hábil",
	"hablar",
	"hacer",
	"hacha",
	"hada",
	"hallar",
	"hamaca",
	"harina",
	"haz",
	"hazaña",
	"hebilla",
	"hebra",
	"hecho",
	"helado",
	"helio",
	"hembra",
	"herir",
	"hermano",
	"héroe",
	"hervir",
	"hielo",
	"hierro",
	"hígado",
	"higiene",
	"hijo",
	"himno",
	"historia",
	"hocico",
	"hogar",
	"hoguera",
	"hoja",
	"hombre",
	"hongo",
	"honor",
	"honra",
	"hora",
	"hormiga",
	"horno",
	"hostil",
	"hoyo",
	"hueco",
	"huelga",
	"huerta",
	"hueso",
	"huevo",
	"huida",
	"huir",
	"humano",
	"húmedo",
	"humilde",
	"humo",
	"hundir",
	"huracán",
	"hurto",
	"icono",
	"ideal",
	"idioma",
	"ídolo",
	"iglesia",
	"iglú",
	"igual",
	"ilegal",
	"ilusión",
	"imagen",
	"imán",
	"imitar",
	"impar",
	"imperio",
	"imponer",
	"impulso",
	"incapaz",
	"índice",
	"inerte",
	"infiel",
	"informe",
	"ingenio",
	"inicio",
	"inmenso",
	"inmune",
	"innato",
	"insecto",
	"instante",
	"interés",
	"íntimo",
	"intuir",
	"inútil",
	"invierno",
	"ira",
	"iris",
	"ironía",
	"isla",
	"islote",
	"jabalí",
	"jabón",
	"jamón",
	"jarabe",
	"jardín",
	"jarra",
	"jaula",
	"jazmín",
	"jefe",
	"jeringa",
	"jinete",
	"jornada",
	"joroba",
	"joven",
	"joya",
	"juerga",
	"jueves",
	"juez",
	"jugador",
	"jugo",
	"juguete",
	"juicio",
	"junco",
	"jungla",
	"junio",
	"juntar",
	"júpiter",
	"jurar",
	"justo",
	"juvenil",
	"juzgar",
	"kilo",
	"koala",
	"labio",
	"lacio",
	"lacra",
	"lado",
	"ladrón",
	"lagarto",
	"lágrima",
	"laguna",
	"laico",
	"lamer",
	"lámina",
	"lámpara",
	"lana",
	"lancha",
	"langosta",
	"lanza",
	"lápiz",
	"largo",
	"larva",
	"lástima",
	"lata",
	"látex",
	"latir",
	"laurel",
	"lavar",
	"lazo",
	"leal",
	"lección",
	"leche",
	"lector",
	"leer",
	"legión",
	"legumbre",
	"lejano",
	"lengua",
	"lento",
	"leña",
	"león",
	"leopardo",
	"lesión",
	"letal",
	"letra",
	"leve",
	"leyenda",
	"libertad",
	"libro",
	"licor",
	"líder",
	"lidiar",
	"lienzo",
	"liga",
	"ligero",
	"lima",
	"límite",
	"limón",
	"limpio",
	"lince",
	"lindo",
	"línea",
	"lingote",
	"lino",
	"linterna",
	"líquido",
	"liso",
	"lista",
	"litera",
	"litio",
	"litro",
	"llaga",
	"llama",
	"llanto",
	"llave",
	"llegar",
	"llenar",
	"llevar",
	"llorar",
	"llover",
	"lluvia",
	"lobo",
	"loción",
	"loco",
	"locura",
	"lógica",
	"logro",
	"lombriz",
	"lomo",
	"lonja",
	"lote",
	"lucha",
	"lucir",
	"lugar",
	"lujo",
	"luna",
	"lunes",
	"lupa",
	"lustro",
	"luto",
	"luz",
	"maceta",
	"macho",
	"madera",
	"madre",
	"maduro",
	"maestro",
	"mafia",
	"magia",
	"mago",
	"maíz",
	"maldad",
	"maleta",
	"malla",
	"malo",
	"mamá",
	"mambo",
	"mamut",
	"manco",
	"mando",
	"manejar",
	"manga",
	"maniquí",
	"manjar",
	"mano",
	"manso",
	"manta",
	"mañana",
	"mapa",
	"máquina",
	"mar",
	"marco",
	"marea",
	"marfil",
	"margen",
	"marido",
	"mármol",
	"marrón",
	"martes",
	"marzo",
	"masa",
	"máscara",
	"masivo",
	"matar",
	"materia",
	"matiz",
	"matriz",
	"máximo",
	"mayor",
	"mazorca",
	"mecha",
	"medalla",
	"medio",
	"médula",
	"mejilla",
	"mejor",
	"melena",
	"melón",
	"memoria",
	"menor",
	"mensaje",
	"mente",
	"menú",
	"mercado",
	"merengue",
	"mérito",
	"mes",
	"mesón",
	"meta",
	"meter",
	"método",
	"metro",
	"mezcla",
	"miedo",
	"miel",
	"miembro",
	"miga",
	"mil",
	"milagro",
	"militar",
	"millón",
	"mimo",
	"mina",
	"minero",
	"mínimo",
	"minuto",
	"miope",
	"mirar",
	"misa",
	"miseria",
	"misil",
	"mismo",
	"mitad",
	"mito",
	"mochila",
	"moción",
	"moda",
	"modelo",
	"moho",
	"mojar",
	"molde",
	"moler",
	"molino",
	"momento",
	"momia",
	"monarca",
	"moneda",
	"monja",
	"monto",
	"moño",
	"morada",
	"morder",
	"moreno",
	"morir",
	"morro",
	"morsa",
	"mortal",
	"mosca",
	"mostrar",
	"motivo",
	"mover",
	"móvil",
	"mozo",
	"mucho",
	"mudar",
	"mueble",
	"muela",
	"muerte",
	"muestra",
	"mugre",
	"mujer",
	"mula",
	"muleta",
	"multa",
	"mundo",
	"muñeca",
	"mural",
	"muro",
	"músculo",
	"museo",
	"musgo",
	"música",
	"muslo",
	"nácar",
	"nación",
	"nadar",
	"naipe",
	"naranja",
	"nariz",
	"narrar",
	"nasal",
	"natal",
	"nativo",
	"natural",
	"náusea",
	"naval",
	"nave",
	"navidad",
	"necio",
	"néctar",
	"negar",
	"negocio",
	"negro",
	"neón",
	"nervio",
	"neto",
	"neutro",
	"nevar",
	"nevera",
	"nicho",
	"nido",
	"niebla",
	"nieto",
	"niñez",
	"niño",
	"nítido",
	"nivel",
	"nobleza",
	"noche",
	"nómina",
	"noria",
	"norma",
	"norte",
	"nota",
	"noticia",
	"novato",
	"novela",
	"novio",
	"nube",
	"nuca",
	"núcleo",
	"nudillo",
	"nudo",
	"nuera",
	"nueve",
	"nuez",
	"nulo",
	"número",
	"nutria",
	"oasis",
	"obeso",
	"obispo",
	"objeto",
	"obra",
	"obrero",
	"observar",
	"obtener",
	"obvio",
	"oca",
	"ocaso",
	"océano",
	"ochenta",
	"ocho",
	"ocio",
	"ocre",
	"octavo",
	"octubre",
	"oculto",
	"ocupar",
	"ocurrir",
	"odiar",
	"odio",
	"odisea",
	"oeste",
	"ofensa",
	"oferta",
	"oficio",
	"ofrecer",
	"ogro",
	"oído",
	"oír",
	"ojo",
	"ola",
	"oleada",
	"olfato",
	"olivo",
	"olla",
	"olmo",
	"olor",
	"olvido",
	"ombligo",
	"onda",
	"onza",
	"opaco",
	"opción",
	"ópera",
	"opinar",
	"oponer",
	"optar",
	"óptica",
	"opuesto",
	"oración",
	"orador",
	"oral",
	"órbita",
	"orca",
	"orden",
	"oreja",
	"órgano",
	"orgía",
	"orgullo",
	"oriente",
	"origen",
	"orilla",
	"oro",
	"orquesta",
	"oruga",
	"osadía",
	"oscuro",
	"osezno",
	"oso",
	"ostra",
	"otoño",
	"otro",
	"oveja",
	"óvulo",
	"óxido",
	"oxígeno",
	"oyente",
	"ozono",
	"pacto",
	"padre",
	"paella",
	"página",
	"pago",
	"país",
	"pájaro",
	"palabra",
	"palco",
	"paleta",
	"pálido",
	"palma",
	"paloma",
	"palpar",
	"pan",
	"panal",
	"pánico",
	"pantera",
	"pañuelo",
	"papá",
	"papel",
	"papilla",
	"paquete",
	"parar",
	"parcela",
	"pared",
	"parir",
	"paro",
	"párpado",
	"parque",
	"párrafo",
	"parte",
	"pasar",
	"paseo",
	"pasión",
	"paso",
	"pasta",
	"pata",
	"patio",
	"patria",
	"pausa",
	"pauta",
	"pavo",
	"payaso",
	"peatón",
	"pecado",
	"pecera",
	"pecho",
	"pedal",
	"pedir",
	"pegar",
	"peine",
	"pelar",
	"peldaño",
	"pelea",
	"peligro",
	"pellejo",
	"pelo",
	"peluca",
	"pena",
	"pensar",
	"peñón",
	"peón",
	"peor",
	"pepino",
	"pequeño",
	"pera",
	"percha",
	"perder",
	"pereza",
	"perfil",
	"perico",
	"perla",
	"permiso",
	"perro",
	"persona",
	"pesa",
	"pesca",
	"pésimo",
	"pestaña",
	"pétalo",
	"petróleo",
	"pez",
	"pezuña",
	"picar",
	"pichón",
	"pie",
	"piedra",
	"pierna",
	"pieza",
	"pijama",
	"pilar",
	"piloto",
	"pimienta",
	"pino",
	"pintor",
	"pinza",
	"piña",
	"piojo",
	"pipa",
	"pirata",
	"pisar",
	"piscina",
	"piso",
	"pista",
	"pitón",
	"pizca",
	"placa",
	"plan",
	"plata",
	"playa",
	"plaza",
	"pleito",
	"pleno",
	"plomo",
	"pluma",
	"plural",
	"pobre",
	"poco",
	"poder",
	"podio",
	"poema",
	"poesía",
	"poeta",
	"polen",
	"policía",
	"pollo",
	"polvo",
	"pomada",
	"pomelo",
	"pomo",
	"pompa",
	"poner",
	"porción",
	"portal",
	"posada",
	"poseer",
	"posible",
	"poste",
	"potencia",
	"potro",
	"pozo",
	"prado",
	"precoz",
	"pregunta",
	"premio",
	"prensa",
	"preso",
	"previo",
	"primo",
	"príncipe",
	"prisión",
	"privar",
	"proa",
	"probar",
	"proceso",
	"producto",
	"proeza",
	"profesor",
	"programa",
	"prole",
	"promesa",
	"pronto",
	"propio",
	"próximo",
	"prueba",
	"público",
	"puchero",
	"pudor",
	"pueblo",
	"puerta",
	"puesto",
	"pulga",
	"pulir",
	"pulmón",
	"pulpo",
	"pulso",
	"puma",
	"punto",
	"puñal",
	"puño",
	"pupa",
	"pupila",
	"puré",
	"quedar",
	"queja",
	"quemar",
	"querer",
	"queso",
	"quieto",
	"química",
	"quince",
	"quitar",
	"rábano",
	"rabia",
	"rabo",
	"ración",
	"radical",
	"raíz",
	"rama",
	"rampa",
	"rancho",
	"rango",
	"rapaz",
	"rápido",
	"rapto",
	"rasgo",
	"raspa",
	"rato",
	"rayo",
	"raza",
	"razón",
	"reacción",
	"realidad",
	"rebaño",
	"rebote",
	"recaer",
	"receta",
	"rechazo",
	"recoger",
	"recreo",
	"recto",
	"recurso",
	"red",
	"redondo",
	"reducir",
	"reflejo",
	"reforma",
	"refrán",
	"refugio",
	"regalo",
	"regir",
	"regla",
	"regreso",
	"rehén",
	"reino",
	"reír",
	"reja",
	"relato",
	"relevo",
	"relieve",
	"relleno",
	"reloj",
	"remar",
	"remedio",
	"remo",
	"rencor",
	"rendir",
	"renta",
	"reparto",
	"repetir",
	"reposo",
	"reptil",
	"res",
	"rescate",
	"resina",
	"respeto",
	"resto",
	"resumen",
	"retiro",
	"retorno",
	"retrato",
	"reunir",
	"revés",
	"revista",
	"rey",
	"rezar",
	"rico",
	"riego",
	"rienda",
	"riesgo",
	"rifa",
	"rígido",
	"rigor",
	"rincón",
	"riñón",
	"río",
	"riqueza",
	"risa",
	"ritmo",
	"rito",
	"rizo",
	"roble",
	"roce",
	"rociar",
	"rodar",
	"rodeo",
	"rodilla",
	"roer",
	"rojizo",
	"rojo",
	"romero",
	"romper",
	"ron",
	"ronco",
	"ronda",
	"ropa",
	"ropero",
	"rosa",
	"rosca",
	"rostro",
	"rotar",
	"rubí",
	"rubor",
	"rudo",
	"rueda",
	"rugir",
	"ruido",
	"ruina",
	"ruleta",
	"rulo",
	"rumbo",
	"rumor",
	"ruptura",
	"ruta",
	"rutina",
	"sábado",
	"saber",
	"sabio",
	"sable",
	"sacar",
	"sagaz",
	"sagrado",
	"sala",
	"saldo",
	"salero",
	"salir",
	"salmón",
	"salón",
	"salsa",
	"salto",
	"salud",
	"salvar",
	"samba",
	"sanción",
	"sandía",
	"sanear",
	"sangre",
	"sanidad",
	"sano",
	"santo",
	"sapo",
	"saque",
	"sardina",
	"sartén",
	"sastre",
	"satán",
	"sauna",
	"saxofón",
	"sección",
	"seco",
	"secreto",
	"secta",
	"sed",
	"seguir",
	"seis",
	"sello",
	"selva",
	"semana",
	"semilla",
	"senda",
	"sensor",
	"señal",
	"señor",
	"separar",
	"sepia",
	"sequía",
	"ser",
	"serie",
	"sermón",
	"servir",
	"sesenta",
	"sesión",
	"seta",
	"setenta",
	"severo",
	"sexo",
	"sexto",
	"sidra",
	"siesta",
	"siete",
	"siglo",
	"signo",
	"sílaba",
	"silbar",
	"silencio",
	"silla",
	"símbolo",
	"simio",
	"sirena",
	"sistema",
	"sitio",
	"situar",
	"sobre",
	"socio",
	"sodio",
	"sol",
	"solapa",
	"soldado",
	"soledad",
	"sólido",
	"soltar",
	"solución",
	"sombra",
	"sondeo",
	"sonido",
	"sonoro",
	"sonrisa",
	"sopa",
	"soplar",
	"soporte",
	"sordo",
	"sorpresa",
	"sorteo",
	"sostén",
	"sótano",
	"suave",
	"subir",
	"suceso",
	"sudor",
	"suegra",
	"suelo",
	"sueño",
	"suerte",
	"sufrir",
	"sujeto",
	"sultán",
	"sumar",
	"superar",
	"suplir",
	"suponer",
	"supremo",
	"sur",
	"surco",
	"sureño",
	"surgir",
	"susto",
	"sutil",
	"tabaco",
	"tabique",
	"tabla",
	"tabú",
	"taco",
	"tacto",
	"tajo",
	"talar",
	"talco",
	"talento",
	"talla",
	"talón",
	"tamaño",
	"tambor",
	"tango",
	"tanque",
	"tapa",
	"tapete",
	"tapia",
	"tapón",
	"taquilla",
	"tarde",
	"tarea",
	"tarifa",
	"tarjeta",
	"tarot",
	"tarro",
	"tarta",
	"tatuaje",
	"tauro",
	"taza",
	"tazón",
	"teatro",
	"techo",
	"tecla",
	"técnica",
	"tejado",
	"tejer",
	"tejido",
	"tela",
	"teléfono",
	"tema",
	"temor",
	"templo",
	"tenaz",
	"tender",
	"tener",
	"tenis",
	"tenso",
	"teoría",
	"terapia",
	"terco",
	"término",
	"ternura",
	"terror",
	"tesis",
	"tesoro",
	"testigo",
	"tetera",
	"texto",
	"tez",
	"tibio",
	"tiburón",
	"tiempo",
	"tienda",
	"tierra",
	"tieso",
	"tigre",
	"tijera",
	"tilde",
	"timbre",
	"tímido",
	"timo",
	"tinta",
	"tío",
	"típico",
	"tipo",
	"tira",
	"tirón",
	"titán",
	"títere",
	"título",
	"tiza",
	"toalla",
	"tobillo",
	"tocar",
	"tocino",
	"todo",
	"toga",
	"toldo",
	"tomar",
	"tono",
	"tonto",
	"topar",
	"tope",
	"toque",
	"tórax",
	"torero",
	"tormenta",
	"torneo",
	"toro",
	"torpedo",
	"torre",
	"torso",
	"tortuga",
	"tos",
	"tosco",
	"toser",
	"tóxico",
	"trabajo",
	"tractor",
	"traer",
	"tráfico",
	"trago",
	"traje",
	"tramo",
	"trance",
	"trato",
	"trauma",
	"trazar",
	"trébol",
	"tregua",
	"treinta",
	"tren",
	"trepar",
	"tres",
	"tribu",
	"trigo",
	"tripa",
	"triste",
	"triunfo",
	"trofeo",
	"trompa",
	"tronco",
	"tropa",
	"trote",
	"trozo",
	"truco",
	"trueno",
	"trufa",
	"tubería",
	"tubo",
	"tuerto",
	"tumba",
	"tumor",
	"túnel",
	"túnica",
	"turbina",
	"turismo",
	"turno",
	"tutor",
	"ubicar",
	"úlcera",
	"umbral",
	"unidad",
	"unir",
	"universo",
	"uno",
	"untar",
	"uña",
	"urbano",
	"urbe",
	"urgente",
	"urna",
	"usar",
	"usuario",
	"útil",
	"utopía",
	"uva",
	"vaca",
	"vacío",
	"vacuna",
	"vagar",
	"vago",
	"vaina",
	"vajilla",
	"vale",
	"válido",
	"valle",
	"valor",
	"válvula",
	"vampiro",
	"vara",
	"variar",
	"varón",
	"vaso",
	"vecino",
	"vector",
	"vehículo",
	"veinte",
	"vejez",
	"vela",
	"velero",
	"veloz",
	"vena",
	"vencer",
	"venda",
	"veneno",
	"vengar",
	"venir",
	"venta",
	"venus",
	"ver",
	"verano",
	"verbo",
	"verde",
	"vereda",
	"verja",
	"verso",
	"verter",
	"vía",
	"viaje",
	"vibrar",
	"vicio",
	"víctima",
	"vida",
	"vídeo",
	"vidrio",
	"viejo",
	"viernes",
	"vigor",
	"vil",
	"villa",
	"vinagre",
	"vino",
	"viñedo",
	"violín",
	"viral",
	"virgo",
	"virtud",
	"visor",
	"víspera",
	"vista",
	"vitamina",
	"viudo",
	"vivaz",
	"vivero",
	"vivir",
	"vivo",
	"volcán",
	"volumen",
	"volver",
	"voraz",
	"votar",
	"voto",
	"voz",
	"vuelo",
	"vulgar",
	"yacer",
	"yate",
	"yegua",
	"yema",
	"yerno",
	"yeso",
	"yodo",
	"yoga",
	"yogur",
	"zafiro",
	"zanja",
	"zapato",
	"zarza",
	"zona",
	"zorro",
	"zumo",
	"zurdo"
];

const require$$7 = [
	"あいこくしん",
	"あいさつ",
	"あいだ",
	"あおぞら",
	"あかちゃん",
	"あきる",
	"あけがた",
	"あける",
	"あこがれる",
	"あさい",
	"あさひ",
	"あしあと",
	"あじわう",
	"あずかる",
	"あずき",
	"あそぶ",
	"あたえる",
	"あたためる",
	"あたりまえ",
	"あたる",
	"あつい",
	"あつかう",
	"あっしゅく",
	"あつまり",
	"あつめる",
	"あてな",
	"あてはまる",
	"あひる",
	"あぶら",
	"あぶる",
	"あふれる",
	"あまい",
	"あまど",
	"あまやかす",
	"あまり",
	"あみもの",
	"あめりか",
	"あやまる",
	"あゆむ",
	"あらいぐま",
	"あらし",
	"あらすじ",
	"あらためる",
	"あらゆる",
	"あらわす",
	"ありがとう",
	"あわせる",
	"あわてる",
	"あんい",
	"あんがい",
	"あんこ",
	"あんぜん",
	"あんてい",
	"あんない",
	"あんまり",
	"いいだす",
	"いおん",
	"いがい",
	"いがく",
	"いきおい",
	"いきなり",
	"いきもの",
	"いきる",
	"いくじ",
	"いくぶん",
	"いけばな",
	"いけん",
	"いこう",
	"いこく",
	"いこつ",
	"いさましい",
	"いさん",
	"いしき",
	"いじゅう",
	"いじょう",
	"いじわる",
	"いずみ",
	"いずれ",
	"いせい",
	"いせえび",
	"いせかい",
	"いせき",
	"いぜん",
	"いそうろう",
	"いそがしい",
	"いだい",
	"いだく",
	"いたずら",
	"いたみ",
	"いたりあ",
	"いちおう",
	"いちじ",
	"いちど",
	"いちば",
	"いちぶ",
	"いちりゅう",
	"いつか",
	"いっしゅん",
	"いっせい",
	"いっそう",
	"いったん",
	"いっち",
	"いってい",
	"いっぽう",
	"いてざ",
	"いてん",
	"いどう",
	"いとこ",
	"いない",
	"いなか",
	"いねむり",
	"いのち",
	"いのる",
	"いはつ",
	"いばる",
	"いはん",
	"いびき",
	"いひん",
	"いふく",
	"いへん",
	"いほう",
	"いみん",
	"いもうと",
	"いもたれ",
	"いもり",
	"いやがる",
	"いやす",
	"いよかん",
	"いよく",
	"いらい",
	"いらすと",
	"いりぐち",
	"いりょう",
	"いれい",
	"いれもの",
	"いれる",
	"いろえんぴつ",
	"いわい",
	"いわう",
	"いわかん",
	"いわば",
	"いわゆる",
	"いんげんまめ",
	"いんさつ",
	"いんしょう",
	"いんよう",
	"うえき",
	"うえる",
	"うおざ",
	"うがい",
	"うかぶ",
	"うかべる",
	"うきわ",
	"うくらいな",
	"うくれれ",
	"うけたまわる",
	"うけつけ",
	"うけとる",
	"うけもつ",
	"うける",
	"うごかす",
	"うごく",
	"うこん",
	"うさぎ",
	"うしなう",
	"うしろがみ",
	"うすい",
	"うすぎ",
	"うすぐらい",
	"うすめる",
	"うせつ",
	"うちあわせ",
	"うちがわ",
	"うちき",
	"うちゅう",
	"うっかり",
	"うつくしい",
	"うったえる",
	"うつる",
	"うどん",
	"うなぎ",
	"うなじ",
	"うなずく",
	"うなる",
	"うねる",
	"うのう",
	"うぶげ",
	"うぶごえ",
	"うまれる",
	"うめる",
	"うもう",
	"うやまう",
	"うよく",
	"うらがえす",
	"うらぐち",
	"うらない",
	"うりあげ",
	"うりきれ",
	"うるさい",
	"うれしい",
	"うれゆき",
	"うれる",
	"うろこ",
	"うわき",
	"うわさ",
	"うんこう",
	"うんちん",
	"うんてん",
	"うんどう",
	"えいえん",
	"えいが",
	"えいきょう",
	"えいご",
	"えいせい",
	"えいぶん",
	"えいよう",
	"えいわ",
	"えおり",
	"えがお",
	"えがく",
	"えきたい",
	"えくせる",
	"えしゃく",
	"えすて",
	"えつらん",
	"えのぐ",
	"えほうまき",
	"えほん",
	"えまき",
	"えもじ",
	"えもの",
	"えらい",
	"えらぶ",
	"えりあ",
	"えんえん",
	"えんかい",
	"えんぎ",
	"えんげき",
	"えんしゅう",
	"えんぜつ",
	"えんそく",
	"えんちょう",
	"えんとつ",
	"おいかける",
	"おいこす",
	"おいしい",
	"おいつく",
	"おうえん",
	"おうさま",
	"おうじ",
	"おうせつ",
	"おうたい",
	"おうふく",
	"おうべい",
	"おうよう",
	"おえる",
	"おおい",
	"おおう",
	"おおどおり",
	"おおや",
	"おおよそ",
	"おかえり",
	"おかず",
	"おがむ",
	"おかわり",
	"おぎなう",
	"おきる",
	"おくさま",
	"おくじょう",
	"おくりがな",
	"おくる",
	"おくれる",
	"おこす",
	"おこなう",
	"おこる",
	"おさえる",
	"おさない",
	"おさめる",
	"おしいれ",
	"おしえる",
	"おじぎ",
	"おじさん",
	"おしゃれ",
	"おそらく",
	"おそわる",
	"おたがい",
	"おたく",
	"おだやか",
	"おちつく",
	"おっと",
	"おつり",
	"おでかけ",
	"おとしもの",
	"おとなしい",
	"おどり",
	"おどろかす",
	"おばさん",
	"おまいり",
	"おめでとう",
	"おもいで",
	"おもう",
	"おもたい",
	"おもちゃ",
	"おやつ",
	"おやゆび",
	"およぼす",
	"おらんだ",
	"おろす",
	"おんがく",
	"おんけい",
	"おんしゃ",
	"おんせん",
	"おんだん",
	"おんちゅう",
	"おんどけい",
	"かあつ",
	"かいが",
	"がいき",
	"がいけん",
	"がいこう",
	"かいさつ",
	"かいしゃ",
	"かいすいよく",
	"かいぜん",
	"かいぞうど",
	"かいつう",
	"かいてん",
	"かいとう",
	"かいふく",
	"がいへき",
	"かいほう",
	"かいよう",
	"がいらい",
	"かいわ",
	"かえる",
	"かおり",
	"かかえる",
	"かがく",
	"かがし",
	"かがみ",
	"かくご",
	"かくとく",
	"かざる",
	"がぞう",
	"かたい",
	"かたち",
	"がちょう",
	"がっきゅう",
	"がっこう",
	"がっさん",
	"がっしょう",
	"かなざわし",
	"かのう",
	"がはく",
	"かぶか",
	"かほう",
	"かほご",
	"かまう",
	"かまぼこ",
	"かめれおん",
	"かゆい",
	"かようび",
	"からい",
	"かるい",
	"かろう",
	"かわく",
	"かわら",
	"がんか",
	"かんけい",
	"かんこう",
	"かんしゃ",
	"かんそう",
	"かんたん",
	"かんち",
	"がんばる",
	"きあい",
	"きあつ",
	"きいろ",
	"ぎいん",
	"きうい",
	"きうん",
	"きえる",
	"きおう",
	"きおく",
	"きおち",
	"きおん",
	"きかい",
	"きかく",
	"きかんしゃ",
	"ききて",
	"きくばり",
	"きくらげ",
	"きけんせい",
	"きこう",
	"きこえる",
	"きこく",
	"きさい",
	"きさく",
	"きさま",
	"きさらぎ",
	"ぎじかがく",
	"ぎしき",
	"ぎじたいけん",
	"ぎじにってい",
	"ぎじゅつしゃ",
	"きすう",
	"きせい",
	"きせき",
	"きせつ",
	"きそう",
	"きぞく",
	"きぞん",
	"きたえる",
	"きちょう",
	"きつえん",
	"ぎっちり",
	"きつつき",
	"きつね",
	"きてい",
	"きどう",
	"きどく",
	"きない",
	"きなが",
	"きなこ",
	"きぬごし",
	"きねん",
	"きのう",
	"きのした",
	"きはく",
	"きびしい",
	"きひん",
	"きふく",
	"きぶん",
	"きぼう",
	"きほん",
	"きまる",
	"きみつ",
	"きむずかしい",
	"きめる",
	"きもだめし",
	"きもち",
	"きもの",
	"きゃく",
	"きやく",
	"ぎゅうにく",
	"きよう",
	"きょうりゅう",
	"きらい",
	"きらく",
	"きりん",
	"きれい",
	"きれつ",
	"きろく",
	"ぎろん",
	"きわめる",
	"ぎんいろ",
	"きんかくじ",
	"きんじょ",
	"きんようび",
	"ぐあい",
	"くいず",
	"くうかん",
	"くうき",
	"くうぐん",
	"くうこう",
	"ぐうせい",
	"くうそう",
	"ぐうたら",
	"くうふく",
	"くうぼ",
	"くかん",
	"くきょう",
	"くげん",
	"ぐこう",
	"くさい",
	"くさき",
	"くさばな",
	"くさる",
	"くしゃみ",
	"くしょう",
	"くすのき",
	"くすりゆび",
	"くせげ",
	"くせん",
	"ぐたいてき",
	"くださる",
	"くたびれる",
	"くちこみ",
	"くちさき",
	"くつした",
	"ぐっすり",
	"くつろぐ",
	"くとうてん",
	"くどく",
	"くなん",
	"くねくね",
	"くのう",
	"くふう",
	"くみあわせ",
	"くみたてる",
	"くめる",
	"くやくしょ",
	"くらす",
	"くらべる",
	"くるま",
	"くれる",
	"くろう",
	"くわしい",
	"ぐんかん",
	"ぐんしょく",
	"ぐんたい",
	"ぐんて",
	"けあな",
	"けいかく",
	"けいけん",
	"けいこ",
	"けいさつ",
	"げいじゅつ",
	"けいたい",
	"げいのうじん",
	"けいれき",
	"けいろ",
	"けおとす",
	"けおりもの",
	"げきか",
	"げきげん",
	"げきだん",
	"げきちん",
	"げきとつ",
	"げきは",
	"げきやく",
	"げこう",
	"げこくじょう",
	"げざい",
	"けさき",
	"げざん",
	"けしき",
	"けしごむ",
	"けしょう",
	"げすと",
	"けたば",
	"けちゃっぷ",
	"けちらす",
	"けつあつ",
	"けつい",
	"けつえき",
	"けっこん",
	"けつじょ",
	"けっせき",
	"けってい",
	"けつまつ",
	"げつようび",
	"げつれい",
	"けつろん",
	"げどく",
	"けとばす",
	"けとる",
	"けなげ",
	"けなす",
	"けなみ",
	"けぬき",
	"げねつ",
	"けねん",
	"けはい",
	"げひん",
	"けぶかい",
	"げぼく",
	"けまり",
	"けみかる",
	"けむし",
	"けむり",
	"けもの",
	"けらい",
	"けろけろ",
	"けわしい",
	"けんい",
	"けんえつ",
	"けんお",
	"けんか",
	"げんき",
	"けんげん",
	"けんこう",
	"けんさく",
	"けんしゅう",
	"けんすう",
	"げんそう",
	"けんちく",
	"けんてい",
	"けんとう",
	"けんない",
	"けんにん",
	"げんぶつ",
	"けんま",
	"けんみん",
	"けんめい",
	"けんらん",
	"けんり",
	"こあくま",
	"こいぬ",
	"こいびと",
	"ごうい",
	"こうえん",
	"こうおん",
	"こうかん",
	"ごうきゅう",
	"ごうけい",
	"こうこう",
	"こうさい",
	"こうじ",
	"こうすい",
	"ごうせい",
	"こうそく",
	"こうたい",
	"こうちゃ",
	"こうつう",
	"こうてい",
	"こうどう",
	"こうない",
	"こうはい",
	"ごうほう",
	"ごうまん",
	"こうもく",
	"こうりつ",
	"こえる",
	"こおり",
	"ごかい",
	"ごがつ",
	"ごかん",
	"こくご",
	"こくさい",
	"こくとう",
	"こくない",
	"こくはく",
	"こぐま",
	"こけい",
	"こける",
	"ここのか",
	"こころ",
	"こさめ",
	"こしつ",
	"こすう",
	"こせい",
	"こせき",
	"こぜん",
	"こそだて",
	"こたい",
	"こたえる",
	"こたつ",
	"こちょう",
	"こっか",
	"こつこつ",
	"こつばん",
	"こつぶ",
	"こてい",
	"こてん",
	"ことがら",
	"ことし",
	"ことば",
	"ことり",
	"こなごな",
	"こねこね",
	"このまま",
	"このみ",
	"このよ",
	"ごはん",
	"こひつじ",
	"こふう",
	"こふん",
	"こぼれる",
	"ごまあぶら",
	"こまかい",
	"ごますり",
	"こまつな",
	"こまる",
	"こむぎこ",
	"こもじ",
	"こもち",
	"こもの",
	"こもん",
	"こやく",
	"こやま",
	"こゆう",
	"こゆび",
	"こよい",
	"こよう",
	"こりる",
	"これくしょん",
	"ころっけ",
	"こわもて",
	"こわれる",
	"こんいん",
	"こんかい",
	"こんき",
	"こんしゅう",
	"こんすい",
	"こんだて",
	"こんとん",
	"こんなん",
	"こんびに",
	"こんぽん",
	"こんまけ",
	"こんや",
	"こんれい",
	"こんわく",
	"ざいえき",
	"さいかい",
	"さいきん",
	"ざいげん",
	"ざいこ",
	"さいしょ",
	"さいせい",
	"ざいたく",
	"ざいちゅう",
	"さいてき",
	"ざいりょう",
	"さうな",
	"さかいし",
	"さがす",
	"さかな",
	"さかみち",
	"さがる",
	"さぎょう",
	"さくし",
	"さくひん",
	"さくら",
	"さこく",
	"さこつ",
	"さずかる",
	"ざせき",
	"さたん",
	"さつえい",
	"ざつおん",
	"ざっか",
	"ざつがく",
	"さっきょく",
	"ざっし",
	"さつじん",
	"ざっそう",
	"さつたば",
	"さつまいも",
	"さてい",
	"さといも",
	"さとう",
	"さとおや",
	"さとし",
	"さとる",
	"さのう",
	"さばく",
	"さびしい",
	"さべつ",
	"さほう",
	"さほど",
	"さます",
	"さみしい",
	"さみだれ",
	"さむけ",
	"さめる",
	"さやえんどう",
	"さゆう",
	"さよう",
	"さよく",
	"さらだ",
	"ざるそば",
	"さわやか",
	"さわる",
	"さんいん",
	"さんか",
	"さんきゃく",
	"さんこう",
	"さんさい",
	"ざんしょ",
	"さんすう",
	"さんせい",
	"さんそ",
	"さんち",
	"さんま",
	"さんみ",
	"さんらん",
	"しあい",
	"しあげ",
	"しあさって",
	"しあわせ",
	"しいく",
	"しいん",
	"しうち",
	"しえい",
	"しおけ",
	"しかい",
	"しかく",
	"じかん",
	"しごと",
	"しすう",
	"じだい",
	"したうけ",
	"したぎ",
	"したて",
	"したみ",
	"しちょう",
	"しちりん",
	"しっかり",
	"しつじ",
	"しつもん",
	"してい",
	"してき",
	"してつ",
	"じてん",
	"じどう",
	"しなぎれ",
	"しなもの",
	"しなん",
	"しねま",
	"しねん",
	"しのぐ",
	"しのぶ",
	"しはい",
	"しばかり",
	"しはつ",
	"しはらい",
	"しはん",
	"しひょう",
	"しふく",
	"じぶん",
	"しへい",
	"しほう",
	"しほん",
	"しまう",
	"しまる",
	"しみん",
	"しむける",
	"じむしょ",
	"しめい",
	"しめる",
	"しもん",
	"しゃいん",
	"しゃうん",
	"しゃおん",
	"じゃがいも",
	"しやくしょ",
	"しゃくほう",
	"しゃけん",
	"しゃこ",
	"しゃざい",
	"しゃしん",
	"しゃせん",
	"しゃそう",
	"しゃたい",
	"しゃちょう",
	"しゃっきん",
	"じゃま",
	"しゃりん",
	"しゃれい",
	"じゆう",
	"じゅうしょ",
	"しゅくはく",
	"じゅしん",
	"しゅっせき",
	"しゅみ",
	"しゅらば",
	"じゅんばん",
	"しょうかい",
	"しょくたく",
	"しょっけん",
	"しょどう",
	"しょもつ",
	"しらせる",
	"しらべる",
	"しんか",
	"しんこう",
	"じんじゃ",
	"しんせいじ",
	"しんちく",
	"しんりん",
	"すあげ",
	"すあし",
	"すあな",
	"ずあん",
	"すいえい",
	"すいか",
	"すいとう",
	"ずいぶん",
	"すいようび",
	"すうがく",
	"すうじつ",
	"すうせん",
	"すおどり",
	"すきま",
	"すくう",
	"すくない",
	"すける",
	"すごい",
	"すこし",
	"ずさん",
	"すずしい",
	"すすむ",
	"すすめる",
	"すっかり",
	"ずっしり",
	"ずっと",
	"すてき",
	"すてる",
	"すねる",
	"すのこ",
	"すはだ",
	"すばらしい",
	"ずひょう",
	"ずぶぬれ",
	"すぶり",
	"すふれ",
	"すべて",
	"すべる",
	"ずほう",
	"すぼん",
	"すまい",
	"すめし",
	"すもう",
	"すやき",
	"すらすら",
	"するめ",
	"すれちがう",
	"すろっと",
	"すわる",
	"すんぜん",
	"すんぽう",
	"せあぶら",
	"せいかつ",
	"せいげん",
	"せいじ",
	"せいよう",
	"せおう",
	"せかいかん",
	"せきにん",
	"せきむ",
	"せきゆ",
	"せきらんうん",
	"せけん",
	"せこう",
	"せすじ",
	"せたい",
	"せたけ",
	"せっかく",
	"せっきゃく",
	"ぜっく",
	"せっけん",
	"せっこつ",
	"せっさたくま",
	"せつぞく",
	"せつだん",
	"せつでん",
	"せっぱん",
	"せつび",
	"せつぶん",
	"せつめい",
	"せつりつ",
	"せなか",
	"せのび",
	"せはば",
	"せびろ",
	"せぼね",
	"せまい",
	"せまる",
	"せめる",
	"せもたれ",
	"せりふ",
	"ぜんあく",
	"せんい",
	"せんえい",
	"せんか",
	"せんきょ",
	"せんく",
	"せんげん",
	"ぜんご",
	"せんさい",
	"せんしゅ",
	"せんすい",
	"せんせい",
	"せんぞ",
	"せんたく",
	"せんちょう",
	"せんてい",
	"せんとう",
	"せんぬき",
	"せんねん",
	"せんぱい",
	"ぜんぶ",
	"ぜんぽう",
	"せんむ",
	"せんめんじょ",
	"せんもん",
	"せんやく",
	"せんゆう",
	"せんよう",
	"ぜんら",
	"ぜんりゃく",
	"せんれい",
	"せんろ",
	"そあく",
	"そいとげる",
	"そいね",
	"そうがんきょう",
	"そうき",
	"そうご",
	"そうしん",
	"そうだん",
	"そうなん",
	"そうび",
	"そうめん",
	"そうり",
	"そえもの",
	"そえん",
	"そがい",
	"そげき",
	"そこう",
	"そこそこ",
	"そざい",
	"そしな",
	"そせい",
	"そせん",
	"そそぐ",
	"そだてる",
	"そつう",
	"そつえん",
	"そっかん",
	"そつぎょう",
	"そっけつ",
	"そっこう",
	"そっせん",
	"そっと",
	"そとがわ",
	"そとづら",
	"そなえる",
	"そなた",
	"そふぼ",
	"そぼく",
	"そぼろ",
	"そまつ",
	"そまる",
	"そむく",
	"そむりえ",
	"そめる",
	"そもそも",
	"そよかぜ",
	"そらまめ",
	"そろう",
	"そんかい",
	"そんけい",
	"そんざい",
	"そんしつ",
	"そんぞく",
	"そんちょう",
	"ぞんび",
	"ぞんぶん",
	"そんみん",
	"たあい",
	"たいいん",
	"たいうん",
	"たいえき",
	"たいおう",
	"だいがく",
	"たいき",
	"たいぐう",
	"たいけん",
	"たいこ",
	"たいざい",
	"だいじょうぶ",
	"だいすき",
	"たいせつ",
	"たいそう",
	"だいたい",
	"たいちょう",
	"たいてい",
	"だいどころ",
	"たいない",
	"たいねつ",
	"たいのう",
	"たいはん",
	"だいひょう",
	"たいふう",
	"たいへん",
	"たいほ",
	"たいまつばな",
	"たいみんぐ",
	"たいむ",
	"たいめん",
	"たいやき",
	"たいよう",
	"たいら",
	"たいりょく",
	"たいる",
	"たいわん",
	"たうえ",
	"たえる",
	"たおす",
	"たおる",
	"たおれる",
	"たかい",
	"たかね",
	"たきび",
	"たくさん",
	"たこく",
	"たこやき",
	"たさい",
	"たしざん",
	"だじゃれ",
	"たすける",
	"たずさわる",
	"たそがれ",
	"たたかう",
	"たたく",
	"ただしい",
	"たたみ",
	"たちばな",
	"だっかい",
	"だっきゃく",
	"だっこ",
	"だっしゅつ",
	"だったい",
	"たてる",
	"たとえる",
	"たなばた",
	"たにん",
	"たぬき",
	"たのしみ",
	"たはつ",
	"たぶん",
	"たべる",
	"たぼう",
	"たまご",
	"たまる",
	"だむる",
	"ためいき",
	"ためす",
	"ためる",
	"たもつ",
	"たやすい",
	"たよる",
	"たらす",
	"たりきほんがん",
	"たりょう",
	"たりる",
	"たると",
	"たれる",
	"たれんと",
	"たろっと",
	"たわむれる",
	"だんあつ",
	"たんい",
	"たんおん",
	"たんか",
	"たんき",
	"たんけん",
	"たんご",
	"たんさん",
	"たんじょうび",
	"だんせい",
	"たんそく",
	"たんたい",
	"だんち",
	"たんてい",
	"たんとう",
	"だんな",
	"たんにん",
	"だんねつ",
	"たんのう",
	"たんぴん",
	"だんぼう",
	"たんまつ",
	"たんめい",
	"だんれつ",
	"だんろ",
	"だんわ",
	"ちあい",
	"ちあん",
	"ちいき",
	"ちいさい",
	"ちえん",
	"ちかい",
	"ちから",
	"ちきゅう",
	"ちきん",
	"ちけいず",
	"ちけん",
	"ちこく",
	"ちさい",
	"ちしき",
	"ちしりょう",
	"ちせい",
	"ちそう",
	"ちたい",
	"ちたん",
	"ちちおや",
	"ちつじょ",
	"ちてき",
	"ちてん",
	"ちぬき",
	"ちぬり",
	"ちのう",
	"ちひょう",
	"ちへいせん",
	"ちほう",
	"ちまた",
	"ちみつ",
	"ちみどろ",
	"ちめいど",
	"ちゃんこなべ",
	"ちゅうい",
	"ちゆりょく",
	"ちょうし",
	"ちょさくけん",
	"ちらし",
	"ちらみ",
	"ちりがみ",
	"ちりょう",
	"ちるど",
	"ちわわ",
	"ちんたい",
	"ちんもく",
	"ついか",
	"ついたち",
	"つうか",
	"つうじょう",
	"つうはん",
	"つうわ",
	"つかう",
	"つかれる",
	"つくね",
	"つくる",
	"つけね",
	"つける",
	"つごう",
	"つたえる",
	"つづく",
	"つつじ",
	"つつむ",
	"つとめる",
	"つながる",
	"つなみ",
	"つねづね",
	"つのる",
	"つぶす",
	"つまらない",
	"つまる",
	"つみき",
	"つめたい",
	"つもり",
	"つもる",
	"つよい",
	"つるぼ",
	"つるみく",
	"つわもの",
	"つわり",
	"てあし",
	"てあて",
	"てあみ",
	"ていおん",
	"ていか",
	"ていき",
	"ていけい",
	"ていこく",
	"ていさつ",
	"ていし",
	"ていせい",
	"ていたい",
	"ていど",
	"ていねい",
	"ていひょう",
	"ていへん",
	"ていぼう",
	"てうち",
	"ておくれ",
	"てきとう",
	"てくび",
	"でこぼこ",
	"てさぎょう",
	"てさげ",
	"てすり",
	"てそう",
	"てちがい",
	"てちょう",
	"てつがく",
	"てつづき",
	"でっぱ",
	"てつぼう",
	"てつや",
	"でぬかえ",
	"てぬき",
	"てぬぐい",
	"てのひら",
	"てはい",
	"てぶくろ",
	"てふだ",
	"てほどき",
	"てほん",
	"てまえ",
	"てまきずし",
	"てみじか",
	"てみやげ",
	"てらす",
	"てれび",
	"てわけ",
	"てわたし",
	"でんあつ",
	"てんいん",
	"てんかい",
	"てんき",
	"てんぐ",
	"てんけん",
	"てんごく",
	"てんさい",
	"てんし",
	"てんすう",
	"でんち",
	"てんてき",
	"てんとう",
	"てんない",
	"てんぷら",
	"てんぼうだい",
	"てんめつ",
	"てんらんかい",
	"でんりょく",
	"でんわ",
	"どあい",
	"といれ",
	"どうかん",
	"とうきゅう",
	"どうぐ",
	"とうし",
	"とうむぎ",
	"とおい",
	"とおか",
	"とおく",
	"とおす",
	"とおる",
	"とかい",
	"とかす",
	"ときおり",
	"ときどき",
	"とくい",
	"とくしゅう",
	"とくてん",
	"とくに",
	"とくべつ",
	"とけい",
	"とける",
	"とこや",
	"とさか",
	"としょかん",
	"とそう",
	"とたん",
	"とちゅう",
	"とっきゅう",
	"とっくん",
	"とつぜん",
	"とつにゅう",
	"とどける",
	"ととのえる",
	"とない",
	"となえる",
	"となり",
	"とのさま",
	"とばす",
	"どぶがわ",
	"とほう",
	"とまる",
	"とめる",
	"ともだち",
	"ともる",
	"どようび",
	"とらえる",
	"とんかつ",
	"どんぶり",
	"ないかく",
	"ないこう",
	"ないしょ",
	"ないす",
	"ないせん",
	"ないそう",
	"なおす",
	"ながい",
	"なくす",
	"なげる",
	"なこうど",
	"なさけ",
	"なたでここ",
	"なっとう",
	"なつやすみ",
	"ななおし",
	"なにごと",
	"なにもの",
	"なにわ",
	"なのか",
	"なふだ",
	"なまいき",
	"なまえ",
	"なまみ",
	"なみだ",
	"なめらか",
	"なめる",
	"なやむ",
	"ならう",
	"ならび",
	"ならぶ",
	"なれる",
	"なわとび",
	"なわばり",
	"にあう",
	"にいがた",
	"にうけ",
	"におい",
	"にかい",
	"にがて",
	"にきび",
	"にくしみ",
	"にくまん",
	"にげる",
	"にさんかたんそ",
	"にしき",
	"にせもの",
	"にちじょう",
	"にちようび",
	"にっか",
	"にっき",
	"にっけい",
	"にっこう",
	"にっさん",
	"にっしょく",
	"にっすう",
	"にっせき",
	"にってい",
	"になう",
	"にほん",
	"にまめ",
	"にもつ",
	"にやり",
	"にゅういん",
	"にりんしゃ",
	"にわとり",
	"にんい",
	"にんか",
	"にんき",
	"にんげん",
	"にんしき",
	"にんずう",
	"にんそう",
	"にんたい",
	"にんち",
	"にんてい",
	"にんにく",
	"にんぷ",
	"にんまり",
	"にんむ",
	"にんめい",
	"にんよう",
	"ぬいくぎ",
	"ぬかす",
	"ぬぐいとる",
	"ぬぐう",
	"ぬくもり",
	"ぬすむ",
	"ぬまえび",
	"ぬめり",
	"ぬらす",
	"ぬんちゃく",
	"ねあげ",
	"ねいき",
	"ねいる",
	"ねいろ",
	"ねぐせ",
	"ねくたい",
	"ねくら",
	"ねこぜ",
	"ねこむ",
	"ねさげ",
	"ねすごす",
	"ねそべる",
	"ねだん",
	"ねつい",
	"ねっしん",
	"ねつぞう",
	"ねったいぎょ",
	"ねぶそく",
	"ねふだ",
	"ねぼう",
	"ねほりはほり",
	"ねまき",
	"ねまわし",
	"ねみみ",
	"ねむい",
	"ねむたい",
	"ねもと",
	"ねらう",
	"ねわざ",
	"ねんいり",
	"ねんおし",
	"ねんかん",
	"ねんきん",
	"ねんぐ",
	"ねんざ",
	"ねんし",
	"ねんちゃく",
	"ねんど",
	"ねんぴ",
	"ねんぶつ",
	"ねんまつ",
	"ねんりょう",
	"ねんれい",
	"のいず",
	"のおづま",
	"のがす",
	"のきなみ",
	"のこぎり",
	"のこす",
	"のこる",
	"のせる",
	"のぞく",
	"のぞむ",
	"のたまう",
	"のちほど",
	"のっく",
	"のばす",
	"のはら",
	"のべる",
	"のぼる",
	"のみもの",
	"のやま",
	"のらいぬ",
	"のらねこ",
	"のりもの",
	"のりゆき",
	"のれん",
	"のんき",
	"ばあい",
	"はあく",
	"ばあさん",
	"ばいか",
	"ばいく",
	"はいけん",
	"はいご",
	"はいしん",
	"はいすい",
	"はいせん",
	"はいそう",
	"はいち",
	"ばいばい",
	"はいれつ",
	"はえる",
	"はおる",
	"はかい",
	"ばかり",
	"はかる",
	"はくしゅ",
	"はけん",
	"はこぶ",
	"はさみ",
	"はさん",
	"はしご",
	"ばしょ",
	"はしる",
	"はせる",
	"ぱそこん",
	"はそん",
	"はたん",
	"はちみつ",
	"はつおん",
	"はっかく",
	"はづき",
	"はっきり",
	"はっくつ",
	"はっけん",
	"はっこう",
	"はっさん",
	"はっしん",
	"はったつ",
	"はっちゅう",
	"はってん",
	"はっぴょう",
	"はっぽう",
	"はなす",
	"はなび",
	"はにかむ",
	"はぶらし",
	"はみがき",
	"はむかう",
	"はめつ",
	"はやい",
	"はやし",
	"はらう",
	"はろうぃん",
	"はわい",
	"はんい",
	"はんえい",
	"はんおん",
	"はんかく",
	"はんきょう",
	"ばんぐみ",
	"はんこ",
	"はんしゃ",
	"はんすう",
	"はんだん",
	"ぱんち",
	"ぱんつ",
	"はんてい",
	"はんとし",
	"はんのう",
	"はんぱ",
	"はんぶん",
	"はんぺん",
	"はんぼうき",
	"はんめい",
	"はんらん",
	"はんろん",
	"ひいき",
	"ひうん",
	"ひえる",
	"ひかく",
	"ひかり",
	"ひかる",
	"ひかん",
	"ひくい",
	"ひけつ",
	"ひこうき",
	"ひこく",
	"ひさい",
	"ひさしぶり",
	"ひさん",
	"びじゅつかん",
	"ひしょ",
	"ひそか",
	"ひそむ",
	"ひたむき",
	"ひだり",
	"ひたる",
	"ひつぎ",
	"ひっこし",
	"ひっし",
	"ひつじゅひん",
	"ひっす",
	"ひつぜん",
	"ぴったり",
	"ぴっちり",
	"ひつよう",
	"ひてい",
	"ひとごみ",
	"ひなまつり",
	"ひなん",
	"ひねる",
	"ひはん",
	"ひびく",
	"ひひょう",
	"ひほう",
	"ひまわり",
	"ひまん",
	"ひみつ",
	"ひめい",
	"ひめじし",
	"ひやけ",
	"ひやす",
	"ひよう",
	"びょうき",
	"ひらがな",
	"ひらく",
	"ひりつ",
	"ひりょう",
	"ひるま",
	"ひるやすみ",
	"ひれい",
	"ひろい",
	"ひろう",
	"ひろき",
	"ひろゆき",
	"ひんかく",
	"ひんけつ",
	"ひんこん",
	"ひんしゅ",
	"ひんそう",
	"ぴんち",
	"ひんぱん",
	"びんぼう",
	"ふあん",
	"ふいうち",
	"ふうけい",
	"ふうせん",
	"ぷうたろう",
	"ふうとう",
	"ふうふ",
	"ふえる",
	"ふおん",
	"ふかい",
	"ふきん",
	"ふくざつ",
	"ふくぶくろ",
	"ふこう",
	"ふさい",
	"ふしぎ",
	"ふじみ",
	"ふすま",
	"ふせい",
	"ふせぐ",
	"ふそく",
	"ぶたにく",
	"ふたん",
	"ふちょう",
	"ふつう",
	"ふつか",
	"ふっかつ",
	"ふっき",
	"ふっこく",
	"ぶどう",
	"ふとる",
	"ふとん",
	"ふのう",
	"ふはい",
	"ふひょう",
	"ふへん",
	"ふまん",
	"ふみん",
	"ふめつ",
	"ふめん",
	"ふよう",
	"ふりこ",
	"ふりる",
	"ふるい",
	"ふんいき",
	"ぶんがく",
	"ぶんぐ",
	"ふんしつ",
	"ぶんせき",
	"ふんそう",
	"ぶんぽう",
	"へいあん",
	"へいおん",
	"へいがい",
	"へいき",
	"へいげん",
	"へいこう",
	"へいさ",
	"へいしゃ",
	"へいせつ",
	"へいそ",
	"へいたく",
	"へいてん",
	"へいねつ",
	"へいわ",
	"へきが",
	"へこむ",
	"べにいろ",
	"べにしょうが",
	"へらす",
	"へんかん",
	"べんきょう",
	"べんごし",
	"へんさい",
	"へんたい",
	"べんり",
	"ほあん",
	"ほいく",
	"ぼうぎょ",
	"ほうこく",
	"ほうそう",
	"ほうほう",
	"ほうもん",
	"ほうりつ",
	"ほえる",
	"ほおん",
	"ほかん",
	"ほきょう",
	"ぼきん",
	"ほくろ",
	"ほけつ",
	"ほけん",
	"ほこう",
	"ほこる",
	"ほしい",
	"ほしつ",
	"ほしゅ",
	"ほしょう",
	"ほせい",
	"ほそい",
	"ほそく",
	"ほたて",
	"ほたる",
	"ぽちぶくろ",
	"ほっきょく",
	"ほっさ",
	"ほったん",
	"ほとんど",
	"ほめる",
	"ほんい",
	"ほんき",
	"ほんけ",
	"ほんしつ",
	"ほんやく",
	"まいにち",
	"まかい",
	"まかせる",
	"まがる",
	"まける",
	"まこと",
	"まさつ",
	"まじめ",
	"ますく",
	"まぜる",
	"まつり",
	"まとめ",
	"まなぶ",
	"まぬけ",
	"まねく",
	"まほう",
	"まもる",
	"まゆげ",
	"まよう",
	"まろやか",
	"まわす",
	"まわり",
	"まわる",
	"まんが",
	"まんきつ",
	"まんぞく",
	"まんなか",
	"みいら",
	"みうち",
	"みえる",
	"みがく",
	"みかた",
	"みかん",
	"みけん",
	"みこん",
	"みじかい",
	"みすい",
	"みすえる",
	"みせる",
	"みっか",
	"みつかる",
	"みつける",
	"みてい",
	"みとめる",
	"みなと",
	"みなみかさい",
	"みねらる",
	"みのう",
	"みのがす",
	"みほん",
	"みもと",
	"みやげ",
	"みらい",
	"みりょく",
	"みわく",
	"みんか",
	"みんぞく",
	"むいか",
	"むえき",
	"むえん",
	"むかい",
	"むかう",
	"むかえ",
	"むかし",
	"むぎちゃ",
	"むける",
	"むげん",
	"むさぼる",
	"むしあつい",
	"むしば",
	"むじゅん",
	"むしろ",
	"むすう",
	"むすこ",
	"むすぶ",
	"むすめ",
	"むせる",
	"むせん",
	"むちゅう",
	"むなしい",
	"むのう",
	"むやみ",
	"むよう",
	"むらさき",
	"むりょう",
	"むろん",
	"めいあん",
	"めいうん",
	"めいえん",
	"めいかく",
	"めいきょく",
	"めいさい",
	"めいし",
	"めいそう",
	"めいぶつ",
	"めいれい",
	"めいわく",
	"めぐまれる",
	"めざす",
	"めした",
	"めずらしい",
	"めだつ",
	"めまい",
	"めやす",
	"めんきょ",
	"めんせき",
	"めんどう",
	"もうしあげる",
	"もうどうけん",
	"もえる",
	"もくし",
	"もくてき",
	"もくようび",
	"もちろん",
	"もどる",
	"もらう",
	"もんく",
	"もんだい",
	"やおや",
	"やける",
	"やさい",
	"やさしい",
	"やすい",
	"やすたろう",
	"やすみ",
	"やせる",
	"やそう",
	"やたい",
	"やちん",
	"やっと",
	"やっぱり",
	"やぶる",
	"やめる",
	"ややこしい",
	"やよい",
	"やわらかい",
	"ゆうき",
	"ゆうびんきょく",
	"ゆうべ",
	"ゆうめい",
	"ゆけつ",
	"ゆしゅつ",
	"ゆせん",
	"ゆそう",
	"ゆたか",
	"ゆちゃく",
	"ゆでる",
	"ゆにゅう",
	"ゆびわ",
	"ゆらい",
	"ゆれる",
	"ようい",
	"ようか",
	"ようきゅう",
	"ようじ",
	"ようす",
	"ようちえん",
	"よかぜ",
	"よかん",
	"よきん",
	"よくせい",
	"よくぼう",
	"よけい",
	"よごれる",
	"よさん",
	"よしゅう",
	"よそう",
	"よそく",
	"よっか",
	"よてい",
	"よどがわく",
	"よねつ",
	"よやく",
	"よゆう",
	"よろこぶ",
	"よろしい",
	"らいう",
	"らくがき",
	"らくご",
	"らくさつ",
	"らくだ",
	"らしんばん",
	"らせん",
	"らぞく",
	"らたい",
	"らっか",
	"られつ",
	"りえき",
	"りかい",
	"りきさく",
	"りきせつ",
	"りくぐん",
	"りくつ",
	"りけん",
	"りこう",
	"りせい",
	"りそう",
	"りそく",
	"りてん",
	"りねん",
	"りゆう",
	"りゅうがく",
	"りよう",
	"りょうり",
	"りょかん",
	"りょくちゃ",
	"りょこう",
	"りりく",
	"りれき",
	"りろん",
	"りんご",
	"るいけい",
	"るいさい",
	"るいじ",
	"るいせき",
	"るすばん",
	"るりがわら",
	"れいかん",
	"れいぎ",
	"れいせい",
	"れいぞうこ",
	"れいとう",
	"れいぼう",
	"れきし",
	"れきだい",
	"れんあい",
	"れんけい",
	"れんこん",
	"れんさい",
	"れんしゅう",
	"れんぞく",
	"れんらく",
	"ろうか",
	"ろうご",
	"ろうじん",
	"ろうそく",
	"ろくが",
	"ろこつ",
	"ろじうら",
	"ろしゅつ",
	"ろせん",
	"ろてん",
	"ろめん",
	"ろれつ",
	"ろんぎ",
	"ろんぱ",
	"ろんぶん",
	"ろんり",
	"わかす",
	"わかめ",
	"わかやま",
	"わかれる",
	"わしつ",
	"わじまし",
	"わすれもの",
	"わらう",
	"われる"
];

const require$$8 = [
	"abacate",
	"abaixo",
	"abalar",
	"abater",
	"abduzir",
	"abelha",
	"aberto",
	"abismo",
	"abotoar",
	"abranger",
	"abreviar",
	"abrigar",
	"abrupto",
	"absinto",
	"absoluto",
	"absurdo",
	"abutre",
	"acabado",
	"acalmar",
	"acampar",
	"acanhar",
	"acaso",
	"aceitar",
	"acelerar",
	"acenar",
	"acervo",
	"acessar",
	"acetona",
	"achatar",
	"acidez",
	"acima",
	"acionado",
	"acirrar",
	"aclamar",
	"aclive",
	"acolhida",
	"acomodar",
	"acoplar",
	"acordar",
	"acumular",
	"acusador",
	"adaptar",
	"adega",
	"adentro",
	"adepto",
	"adequar",
	"aderente",
	"adesivo",
	"adeus",
	"adiante",
	"aditivo",
	"adjetivo",
	"adjunto",
	"admirar",
	"adorar",
	"adquirir",
	"adubo",
	"adverso",
	"advogado",
	"aeronave",
	"afastar",
	"aferir",
	"afetivo",
	"afinador",
	"afivelar",
	"aflito",
	"afluente",
	"afrontar",
	"agachar",
	"agarrar",
	"agasalho",
	"agenciar",
	"agilizar",
	"agiota",
	"agitado",
	"agora",
	"agradar",
	"agreste",
	"agrupar",
	"aguardar",
	"agulha",
	"ajoelhar",
	"ajudar",
	"ajustar",
	"alameda",
	"alarme",
	"alastrar",
	"alavanca",
	"albergue",
	"albino",
	"alcatra",
	"aldeia",
	"alecrim",
	"alegria",
	"alertar",
	"alface",
	"alfinete",
	"algum",
	"alheio",
	"aliar",
	"alicate",
	"alienar",
	"alinhar",
	"aliviar",
	"almofada",
	"alocar",
	"alpiste",
	"alterar",
	"altitude",
	"alucinar",
	"alugar",
	"aluno",
	"alusivo",
	"alvo",
	"amaciar",
	"amador",
	"amarelo",
	"amassar",
	"ambas",
	"ambiente",
	"ameixa",
	"amenizar",
	"amido",
	"amistoso",
	"amizade",
	"amolador",
	"amontoar",
	"amoroso",
	"amostra",
	"amparar",
	"ampliar",
	"ampola",
	"anagrama",
	"analisar",
	"anarquia",
	"anatomia",
	"andaime",
	"anel",
	"anexo",
	"angular",
	"animar",
	"anjo",
	"anomalia",
	"anotado",
	"ansioso",
	"anterior",
	"anuidade",
	"anunciar",
	"anzol",
	"apagador",
	"apalpar",
	"apanhado",
	"apego",
	"apelido",
	"apertada",
	"apesar",
	"apetite",
	"apito",
	"aplauso",
	"aplicada",
	"apoio",
	"apontar",
	"aposta",
	"aprendiz",
	"aprovar",
	"aquecer",
	"arame",
	"aranha",
	"arara",
	"arcada",
	"ardente",
	"areia",
	"arejar",
	"arenito",
	"aresta",
	"argiloso",
	"argola",
	"arma",
	"arquivo",
	"arraial",
	"arrebate",
	"arriscar",
	"arroba",
	"arrumar",
	"arsenal",
	"arterial",
	"artigo",
	"arvoredo",
	"asfaltar",
	"asilado",
	"aspirar",
	"assador",
	"assinar",
	"assoalho",
	"assunto",
	"astral",
	"atacado",
	"atadura",
	"atalho",
	"atarefar",
	"atear",
	"atender",
	"aterro",
	"ateu",
	"atingir",
	"atirador",
	"ativo",
	"atoleiro",
	"atracar",
	"atrevido",
	"atriz",
	"atual",
	"atum",
	"auditor",
	"aumentar",
	"aura",
	"aurora",
	"autismo",
	"autoria",
	"autuar",
	"avaliar",
	"avante",
	"avaria",
	"avental",
	"avesso",
	"aviador",
	"avisar",
	"avulso",
	"axila",
	"azarar",
	"azedo",
	"azeite",
	"azulejo",
	"babar",
	"babosa",
	"bacalhau",
	"bacharel",
	"bacia",
	"bagagem",
	"baiano",
	"bailar",
	"baioneta",
	"bairro",
	"baixista",
	"bajular",
	"baleia",
	"baliza",
	"balsa",
	"banal",
	"bandeira",
	"banho",
	"banir",
	"banquete",
	"barato",
	"barbado",
	"baronesa",
	"barraca",
	"barulho",
	"baseado",
	"bastante",
	"batata",
	"batedor",
	"batida",
	"batom",
	"batucar",
	"baunilha",
	"beber",
	"beijo",
	"beirada",
	"beisebol",
	"beldade",
	"beleza",
	"belga",
	"beliscar",
	"bendito",
	"bengala",
	"benzer",
	"berimbau",
	"berlinda",
	"berro",
	"besouro",
	"bexiga",
	"bezerro",
	"bico",
	"bicudo",
	"bienal",
	"bifocal",
	"bifurcar",
	"bigorna",
	"bilhete",
	"bimestre",
	"bimotor",
	"biologia",
	"biombo",
	"biosfera",
	"bipolar",
	"birrento",
	"biscoito",
	"bisneto",
	"bispo",
	"bissexto",
	"bitola",
	"bizarro",
	"blindado",
	"bloco",
	"bloquear",
	"boato",
	"bobagem",
	"bocado",
	"bocejo",
	"bochecha",
	"boicotar",
	"bolada",
	"boletim",
	"bolha",
	"bolo",
	"bombeiro",
	"bonde",
	"boneco",
	"bonita",
	"borbulha",
	"borda",
	"boreal",
	"borracha",
	"bovino",
	"boxeador",
	"branco",
	"brasa",
	"braveza",
	"breu",
	"briga",
	"brilho",
	"brincar",
	"broa",
	"brochura",
	"bronzear",
	"broto",
	"bruxo",
	"bucha",
	"budismo",
	"bufar",
	"bule",
	"buraco",
	"busca",
	"busto",
	"buzina",
	"cabana",
	"cabelo",
	"cabide",
	"cabo",
	"cabrito",
	"cacau",
	"cacetada",
	"cachorro",
	"cacique",
	"cadastro",
	"cadeado",
	"cafezal",
	"caiaque",
	"caipira",
	"caixote",
	"cajado",
	"caju",
	"calafrio",
	"calcular",
	"caldeira",
	"calibrar",
	"calmante",
	"calota",
	"camada",
	"cambista",
	"camisa",
	"camomila",
	"campanha",
	"camuflar",
	"canavial",
	"cancelar",
	"caneta",
	"canguru",
	"canhoto",
	"canivete",
	"canoa",
	"cansado",
	"cantar",
	"canudo",
	"capacho",
	"capela",
	"capinar",
	"capotar",
	"capricho",
	"captador",
	"capuz",
	"caracol",
	"carbono",
	"cardeal",
	"careca",
	"carimbar",
	"carneiro",
	"carpete",
	"carreira",
	"cartaz",
	"carvalho",
	"casaco",
	"casca",
	"casebre",
	"castelo",
	"casulo",
	"catarata",
	"cativar",
	"caule",
	"causador",
	"cautelar",
	"cavalo",
	"caverna",
	"cebola",
	"cedilha",
	"cegonha",
	"celebrar",
	"celular",
	"cenoura",
	"censo",
	"centeio",
	"cercar",
	"cerrado",
	"certeiro",
	"cerveja",
	"cetim",
	"cevada",
	"chacota",
	"chaleira",
	"chamado",
	"chapada",
	"charme",
	"chatice",
	"chave",
	"chefe",
	"chegada",
	"cheiro",
	"cheque",
	"chicote",
	"chifre",
	"chinelo",
	"chocalho",
	"chover",
	"chumbo",
	"chutar",
	"chuva",
	"cicatriz",
	"ciclone",
	"cidade",
	"cidreira",
	"ciente",
	"cigana",
	"cimento",
	"cinto",
	"cinza",
	"ciranda",
	"circuito",
	"cirurgia",
	"citar",
	"clareza",
	"clero",
	"clicar",
	"clone",
	"clube",
	"coado",
	"coagir",
	"cobaia",
	"cobertor",
	"cobrar",
	"cocada",
	"coelho",
	"coentro",
	"coeso",
	"cogumelo",
	"coibir",
	"coifa",
	"coiote",
	"colar",
	"coleira",
	"colher",
	"colidir",
	"colmeia",
	"colono",
	"coluna",
	"comando",
	"combinar",
	"comentar",
	"comitiva",
	"comover",
	"complexo",
	"comum",
	"concha",
	"condor",
	"conectar",
	"confuso",
	"congelar",
	"conhecer",
	"conjugar",
	"consumir",
	"contrato",
	"convite",
	"cooperar",
	"copeiro",
	"copiador",
	"copo",
	"coquetel",
	"coragem",
	"cordial",
	"corneta",
	"coronha",
	"corporal",
	"correio",
	"cortejo",
	"coruja",
	"corvo",
	"cosseno",
	"costela",
	"cotonete",
	"couro",
	"couve",
	"covil",
	"cozinha",
	"cratera",
	"cravo",
	"creche",
	"credor",
	"creme",
	"crer",
	"crespo",
	"criada",
	"criminal",
	"crioulo",
	"crise",
	"criticar",
	"crosta",
	"crua",
	"cruzeiro",
	"cubano",
	"cueca",
	"cuidado",
	"cujo",
	"culatra",
	"culminar",
	"culpar",
	"cultura",
	"cumprir",
	"cunhado",
	"cupido",
	"curativo",
	"curral",
	"cursar",
	"curto",
	"cuspir",
	"custear",
	"cutelo",
	"damasco",
	"datar",
	"debater",
	"debitar",
	"deboche",
	"debulhar",
	"decalque",
	"decimal",
	"declive",
	"decote",
	"decretar",
	"dedal",
	"dedicado",
	"deduzir",
	"defesa",
	"defumar",
	"degelo",
	"degrau",
	"degustar",
	"deitado",
	"deixar",
	"delator",
	"delegado",
	"delinear",
	"delonga",
	"demanda",
	"demitir",
	"demolido",
	"dentista",
	"depenado",
	"depilar",
	"depois",
	"depressa",
	"depurar",
	"deriva",
	"derramar",
	"desafio",
	"desbotar",
	"descanso",
	"desenho",
	"desfiado",
	"desgaste",
	"desigual",
	"deslize",
	"desmamar",
	"desova",
	"despesa",
	"destaque",
	"desviar",
	"detalhar",
	"detentor",
	"detonar",
	"detrito",
	"deusa",
	"dever",
	"devido",
	"devotado",
	"dezena",
	"diagrama",
	"dialeto",
	"didata",
	"difuso",
	"digitar",
	"dilatado",
	"diluente",
	"diminuir",
	"dinastia",
	"dinheiro",
	"diocese",
	"direto",
	"discreta",
	"disfarce",
	"disparo",
	"disquete",
	"dissipar",
	"distante",
	"ditador",
	"diurno",
	"diverso",
	"divisor",
	"divulgar",
	"dizer",
	"dobrador",
	"dolorido",
	"domador",
	"dominado",
	"donativo",
	"donzela",
	"dormente",
	"dorsal",
	"dosagem",
	"dourado",
	"doutor",
	"drenagem",
	"drible",
	"drogaria",
	"duelar",
	"duende",
	"dueto",
	"duplo",
	"duquesa",
	"durante",
	"duvidoso",
	"eclodir",
	"ecoar",
	"ecologia",
	"edificar",
	"edital",
	"educado",
	"efeito",
	"efetivar",
	"ejetar",
	"elaborar",
	"eleger",
	"eleitor",
	"elenco",
	"elevador",
	"eliminar",
	"elogiar",
	"embargo",
	"embolado",
	"embrulho",
	"embutido",
	"emenda",
	"emergir",
	"emissor",
	"empatia",
	"empenho",
	"empinado",
	"empolgar",
	"emprego",
	"empurrar",
	"emulador",
	"encaixe",
	"encenado",
	"enchente",
	"encontro",
	"endeusar",
	"endossar",
	"enfaixar",
	"enfeite",
	"enfim",
	"engajado",
	"engenho",
	"englobar",
	"engomado",
	"engraxar",
	"enguia",
	"enjoar",
	"enlatar",
	"enquanto",
	"enraizar",
	"enrolado",
	"enrugar",
	"ensaio",
	"enseada",
	"ensino",
	"ensopado",
	"entanto",
	"enteado",
	"entidade",
	"entortar",
	"entrada",
	"entulho",
	"envergar",
	"enviado",
	"envolver",
	"enxame",
	"enxerto",
	"enxofre",
	"enxuto",
	"epiderme",
	"equipar",
	"ereto",
	"erguido",
	"errata",
	"erva",
	"ervilha",
	"esbanjar",
	"esbelto",
	"escama",
	"escola",
	"escrita",
	"escuta",
	"esfinge",
	"esfolar",
	"esfregar",
	"esfumado",
	"esgrima",
	"esmalte",
	"espanto",
	"espelho",
	"espiga",
	"esponja",
	"espreita",
	"espumar",
	"esquerda",
	"estaca",
	"esteira",
	"esticar",
	"estofado",
	"estrela",
	"estudo",
	"esvaziar",
	"etanol",
	"etiqueta",
	"euforia",
	"europeu",
	"evacuar",
	"evaporar",
	"evasivo",
	"eventual",
	"evidente",
	"evoluir",
	"exagero",
	"exalar",
	"examinar",
	"exato",
	"exausto",
	"excesso",
	"excitar",
	"exclamar",
	"executar",
	"exemplo",
	"exibir",
	"exigente",
	"exonerar",
	"expandir",
	"expelir",
	"expirar",
	"explanar",
	"exposto",
	"expresso",
	"expulsar",
	"externo",
	"extinto",
	"extrato",
	"fabricar",
	"fabuloso",
	"faceta",
	"facial",
	"fada",
	"fadiga",
	"faixa",
	"falar",
	"falta",
	"familiar",
	"fandango",
	"fanfarra",
	"fantoche",
	"fardado",
	"farelo",
	"farinha",
	"farofa",
	"farpa",
	"fartura",
	"fatia",
	"fator",
	"favorita",
	"faxina",
	"fazenda",
	"fechado",
	"feijoada",
	"feirante",
	"felino",
	"feminino",
	"fenda",
	"feno",
	"fera",
	"feriado",
	"ferrugem",
	"ferver",
	"festejar",
	"fetal",
	"feudal",
	"fiapo",
	"fibrose",
	"ficar",
	"ficheiro",
	"figurado",
	"fileira",
	"filho",
	"filme",
	"filtrar",
	"firmeza",
	"fisgada",
	"fissura",
	"fita",
	"fivela",
	"fixador",
	"fixo",
	"flacidez",
	"flamingo",
	"flanela",
	"flechada",
	"flora",
	"flutuar",
	"fluxo",
	"focal",
	"focinho",
	"fofocar",
	"fogo",
	"foguete",
	"foice",
	"folgado",
	"folheto",
	"forjar",
	"formiga",
	"forno",
	"forte",
	"fosco",
	"fossa",
	"fragata",
	"fralda",
	"frango",
	"frasco",
	"fraterno",
	"freira",
	"frente",
	"fretar",
	"frieza",
	"friso",
	"fritura",
	"fronha",
	"frustrar",
	"fruteira",
	"fugir",
	"fulano",
	"fuligem",
	"fundar",
	"fungo",
	"funil",
	"furador",
	"furioso",
	"futebol",
	"gabarito",
	"gabinete",
	"gado",
	"gaiato",
	"gaiola",
	"gaivota",
	"galega",
	"galho",
	"galinha",
	"galocha",
	"ganhar",
	"garagem",
	"garfo",
	"gargalo",
	"garimpo",
	"garoupa",
	"garrafa",
	"gasoduto",
	"gasto",
	"gata",
	"gatilho",
	"gaveta",
	"gazela",
	"gelado",
	"geleia",
	"gelo",
	"gemada",
	"gemer",
	"gemido",
	"generoso",
	"gengiva",
	"genial",
	"genoma",
	"genro",
	"geologia",
	"gerador",
	"germinar",
	"gesso",
	"gestor",
	"ginasta",
	"gincana",
	"gingado",
	"girafa",
	"girino",
	"glacial",
	"glicose",
	"global",
	"glorioso",
	"goela",
	"goiaba",
	"golfe",
	"golpear",
	"gordura",
	"gorjeta",
	"gorro",
	"gostoso",
	"goteira",
	"governar",
	"gracejo",
	"gradual",
	"grafite",
	"gralha",
	"grampo",
	"granada",
	"gratuito",
	"graveto",
	"graxa",
	"grego",
	"grelhar",
	"greve",
	"grilo",
	"grisalho",
	"gritaria",
	"grosso",
	"grotesco",
	"grudado",
	"grunhido",
	"gruta",
	"guache",
	"guarani",
	"guaxinim",
	"guerrear",
	"guiar",
	"guincho",
	"guisado",
	"gula",
	"guloso",
	"guru",
	"habitar",
	"harmonia",
	"haste",
	"haver",
	"hectare",
	"herdar",
	"heresia",
	"hesitar",
	"hiato",
	"hibernar",
	"hidratar",
	"hiena",
	"hino",
	"hipismo",
	"hipnose",
	"hipoteca",
	"hoje",
	"holofote",
	"homem",
	"honesto",
	"honrado",
	"hormonal",
	"hospedar",
	"humorado",
	"iate",
	"ideia",
	"idoso",
	"ignorado",
	"igreja",
	"iguana",
	"ileso",
	"ilha",
	"iludido",
	"iluminar",
	"ilustrar",
	"imagem",
	"imediato",
	"imenso",
	"imersivo",
	"iminente",
	"imitador",
	"imortal",
	"impacto",
	"impedir",
	"implante",
	"impor",
	"imprensa",
	"impune",
	"imunizar",
	"inalador",
	"inapto",
	"inativo",
	"incenso",
	"inchar",
	"incidir",
	"incluir",
	"incolor",
	"indeciso",
	"indireto",
	"indutor",
	"ineficaz",
	"inerente",
	"infantil",
	"infestar",
	"infinito",
	"inflamar",
	"informal",
	"infrator",
	"ingerir",
	"inibido",
	"inicial",
	"inimigo",
	"injetar",
	"inocente",
	"inodoro",
	"inovador",
	"inox",
	"inquieto",
	"inscrito",
	"inseto",
	"insistir",
	"inspetor",
	"instalar",
	"insulto",
	"intacto",
	"integral",
	"intimar",
	"intocado",
	"intriga",
	"invasor",
	"inverno",
	"invicto",
	"invocar",
	"iogurte",
	"iraniano",
	"ironizar",
	"irreal",
	"irritado",
	"isca",
	"isento",
	"isolado",
	"isqueiro",
	"italiano",
	"janeiro",
	"jangada",
	"janta",
	"jararaca",
	"jardim",
	"jarro",
	"jasmim",
	"jato",
	"javali",
	"jazida",
	"jejum",
	"joaninha",
	"joelhada",
	"jogador",
	"joia",
	"jornal",
	"jorrar",
	"jovem",
	"juba",
	"judeu",
	"judoca",
	"juiz",
	"julgador",
	"julho",
	"jurado",
	"jurista",
	"juro",
	"justa",
	"labareda",
	"laboral",
	"lacre",
	"lactante",
	"ladrilho",
	"lagarta",
	"lagoa",
	"laje",
	"lamber",
	"lamentar",
	"laminar",
	"lampejo",
	"lanche",
	"lapidar",
	"lapso",
	"laranja",
	"lareira",
	"largura",
	"lasanha",
	"lastro",
	"lateral",
	"latido",
	"lavanda",
	"lavoura",
	"lavrador",
	"laxante",
	"lazer",
	"lealdade",
	"lebre",
	"legado",
	"legendar",
	"legista",
	"leigo",
	"leiloar",
	"leitura",
	"lembrete",
	"leme",
	"lenhador",
	"lentilha",
	"leoa",
	"lesma",
	"leste",
	"letivo",
	"letreiro",
	"levar",
	"leveza",
	"levitar",
	"liberal",
	"libido",
	"liderar",
	"ligar",
	"ligeiro",
	"limitar",
	"limoeiro",
	"limpador",
	"linda",
	"linear",
	"linhagem",
	"liquidez",
	"listagem",
	"lisura",
	"litoral",
	"livro",
	"lixa",
	"lixeira",
	"locador",
	"locutor",
	"lojista",
	"lombo",
	"lona",
	"longe",
	"lontra",
	"lorde",
	"lotado",
	"loteria",
	"loucura",
	"lousa",
	"louvar",
	"luar",
	"lucidez",
	"lucro",
	"luneta",
	"lustre",
	"lutador",
	"luva",
	"macaco",
	"macete",
	"machado",
	"macio",
	"madeira",
	"madrinha",
	"magnata",
	"magreza",
	"maior",
	"mais",
	"malandro",
	"malha",
	"malote",
	"maluco",
	"mamilo",
	"mamoeiro",
	"mamute",
	"manada",
	"mancha",
	"mandato",
	"manequim",
	"manhoso",
	"manivela",
	"manobrar",
	"mansa",
	"manter",
	"manusear",
	"mapeado",
	"maquinar",
	"marcador",
	"maresia",
	"marfim",
	"margem",
	"marinho",
	"marmita",
	"maroto",
	"marquise",
	"marreco",
	"martelo",
	"marujo",
	"mascote",
	"masmorra",
	"massagem",
	"mastigar",
	"matagal",
	"materno",
	"matinal",
	"matutar",
	"maxilar",
	"medalha",
	"medida",
	"medusa",
	"megafone",
	"meiga",
	"melancia",
	"melhor",
	"membro",
	"memorial",
	"menino",
	"menos",
	"mensagem",
	"mental",
	"merecer",
	"mergulho",
	"mesada",
	"mesclar",
	"mesmo",
	"mesquita",
	"mestre",
	"metade",
	"meteoro",
	"metragem",
	"mexer",
	"mexicano",
	"micro",
	"migalha",
	"migrar",
	"milagre",
	"milenar",
	"milhar",
	"mimado",
	"minerar",
	"minhoca",
	"ministro",
	"minoria",
	"miolo",
	"mirante",
	"mirtilo",
	"misturar",
	"mocidade",
	"moderno",
	"modular",
	"moeda",
	"moer",
	"moinho",
	"moita",
	"moldura",
	"moleza",
	"molho",
	"molinete",
	"molusco",
	"montanha",
	"moqueca",
	"morango",
	"morcego",
	"mordomo",
	"morena",
	"mosaico",
	"mosquete",
	"mostarda",
	"motel",
	"motim",
	"moto",
	"motriz",
	"muda",
	"muito",
	"mulata",
	"mulher",
	"multar",
	"mundial",
	"munido",
	"muralha",
	"murcho",
	"muscular",
	"museu",
	"musical",
	"nacional",
	"nadador",
	"naja",
	"namoro",
	"narina",
	"narrado",
	"nascer",
	"nativa",
	"natureza",
	"navalha",
	"navegar",
	"navio",
	"neblina",
	"nebuloso",
	"negativa",
	"negociar",
	"negrito",
	"nervoso",
	"neta",
	"neural",
	"nevasca",
	"nevoeiro",
	"ninar",
	"ninho",
	"nitidez",
	"nivelar",
	"nobreza",
	"noite",
	"noiva",
	"nomear",
	"nominal",
	"nordeste",
	"nortear",
	"notar",
	"noticiar",
	"noturno",
	"novelo",
	"novilho",
	"novo",
	"nublado",
	"nudez",
	"numeral",
	"nupcial",
	"nutrir",
	"nuvem",
	"obcecado",
	"obedecer",
	"objetivo",
	"obrigado",
	"obscuro",
	"obstetra",
	"obter",
	"obturar",
	"ocidente",
	"ocioso",
	"ocorrer",
	"oculista",
	"ocupado",
	"ofegante",
	"ofensiva",
	"oferenda",
	"oficina",
	"ofuscado",
	"ogiva",
	"olaria",
	"oleoso",
	"olhar",
	"oliveira",
	"ombro",
	"omelete",
	"omisso",
	"omitir",
	"ondulado",
	"oneroso",
	"ontem",
	"opcional",
	"operador",
	"oponente",
	"oportuno",
	"oposto",
	"orar",
	"orbitar",
	"ordem",
	"ordinal",
	"orfanato",
	"orgasmo",
	"orgulho",
	"oriental",
	"origem",
	"oriundo",
	"orla",
	"ortodoxo",
	"orvalho",
	"oscilar",
	"ossada",
	"osso",
	"ostentar",
	"otimismo",
	"ousadia",
	"outono",
	"outubro",
	"ouvido",
	"ovelha",
	"ovular",
	"oxidar",
	"oxigenar",
	"pacato",
	"paciente",
	"pacote",
	"pactuar",
	"padaria",
	"padrinho",
	"pagar",
	"pagode",
	"painel",
	"pairar",
	"paisagem",
	"palavra",
	"palestra",
	"palheta",
	"palito",
	"palmada",
	"palpitar",
	"pancada",
	"panela",
	"panfleto",
	"panqueca",
	"pantanal",
	"papagaio",
	"papelada",
	"papiro",
	"parafina",
	"parcial",
	"pardal",
	"parede",
	"partida",
	"pasmo",
	"passado",
	"pastel",
	"patamar",
	"patente",
	"patinar",
	"patrono",
	"paulada",
	"pausar",
	"peculiar",
	"pedalar",
	"pedestre",
	"pediatra",
	"pedra",
	"pegada",
	"peitoral",
	"peixe",
	"pele",
	"pelicano",
	"penca",
	"pendurar",
	"peneira",
	"penhasco",
	"pensador",
	"pente",
	"perceber",
	"perfeito",
	"pergunta",
	"perito",
	"permitir",
	"perna",
	"perplexo",
	"persiana",
	"pertence",
	"peruca",
	"pescado",
	"pesquisa",
	"pessoa",
	"petiscar",
	"piada",
	"picado",
	"piedade",
	"pigmento",
	"pilastra",
	"pilhado",
	"pilotar",
	"pimenta",
	"pincel",
	"pinguim",
	"pinha",
	"pinote",
	"pintar",
	"pioneiro",
	"pipoca",
	"piquete",
	"piranha",
	"pires",
	"pirueta",
	"piscar",
	"pistola",
	"pitanga",
	"pivete",
	"planta",
	"plaqueta",
	"platina",
	"plebeu",
	"plumagem",
	"pluvial",
	"pneu",
	"poda",
	"poeira",
	"poetisa",
	"polegada",
	"policiar",
	"poluente",
	"polvilho",
	"pomar",
	"pomba",
	"ponderar",
	"pontaria",
	"populoso",
	"porta",
	"possuir",
	"postal",
	"pote",
	"poupar",
	"pouso",
	"povoar",
	"praia",
	"prancha",
	"prato",
	"praxe",
	"prece",
	"predador",
	"prefeito",
	"premiar",
	"prensar",
	"preparar",
	"presilha",
	"pretexto",
	"prevenir",
	"prezar",
	"primata",
	"princesa",
	"prisma",
	"privado",
	"processo",
	"produto",
	"profeta",
	"proibido",
	"projeto",
	"prometer",
	"propagar",
	"prosa",
	"protetor",
	"provador",
	"publicar",
	"pudim",
	"pular",
	"pulmonar",
	"pulseira",
	"punhal",
	"punir",
	"pupilo",
	"pureza",
	"puxador",
	"quadra",
	"quantia",
	"quarto",
	"quase",
	"quebrar",
	"queda",
	"queijo",
	"quente",
	"querido",
	"quimono",
	"quina",
	"quiosque",
	"rabanada",
	"rabisco",
	"rachar",
	"racionar",
	"radial",
	"raiar",
	"rainha",
	"raio",
	"raiva",
	"rajada",
	"ralado",
	"ramal",
	"ranger",
	"ranhura",
	"rapadura",
	"rapel",
	"rapidez",
	"raposa",
	"raquete",
	"raridade",
	"rasante",
	"rascunho",
	"rasgar",
	"raspador",
	"rasteira",
	"rasurar",
	"ratazana",
	"ratoeira",
	"realeza",
	"reanimar",
	"reaver",
	"rebaixar",
	"rebelde",
	"rebolar",
	"recado",
	"recente",
	"recheio",
	"recibo",
	"recordar",
	"recrutar",
	"recuar",
	"rede",
	"redimir",
	"redonda",
	"reduzida",
	"reenvio",
	"refinar",
	"refletir",
	"refogar",
	"refresco",
	"refugiar",
	"regalia",
	"regime",
	"regra",
	"reinado",
	"reitor",
	"rejeitar",
	"relativo",
	"remador",
	"remendo",
	"remorso",
	"renovado",
	"reparo",
	"repelir",
	"repleto",
	"repolho",
	"represa",
	"repudiar",
	"requerer",
	"resenha",
	"resfriar",
	"resgatar",
	"residir",
	"resolver",
	"respeito",
	"ressaca",
	"restante",
	"resumir",
	"retalho",
	"reter",
	"retirar",
	"retomada",
	"retratar",
	"revelar",
	"revisor",
	"revolta",
	"riacho",
	"rica",
	"rigidez",
	"rigoroso",
	"rimar",
	"ringue",
	"risada",
	"risco",
	"risonho",
	"robalo",
	"rochedo",
	"rodada",
	"rodeio",
	"rodovia",
	"roedor",
	"roleta",
	"romano",
	"roncar",
	"rosado",
	"roseira",
	"rosto",
	"rota",
	"roteiro",
	"rotina",
	"rotular",
	"rouco",
	"roupa",
	"roxo",
	"rubro",
	"rugido",
	"rugoso",
	"ruivo",
	"rumo",
	"rupestre",
	"russo",
	"sabor",
	"saciar",
	"sacola",
	"sacudir",
	"sadio",
	"safira",
	"saga",
	"sagrada",
	"saibro",
	"salada",
	"saleiro",
	"salgado",
	"saliva",
	"salpicar",
	"salsicha",
	"saltar",
	"salvador",
	"sambar",
	"samurai",
	"sanar",
	"sanfona",
	"sangue",
	"sanidade",
	"sapato",
	"sarda",
	"sargento",
	"sarjeta",
	"saturar",
	"saudade",
	"saxofone",
	"sazonal",
	"secar",
	"secular",
	"seda",
	"sedento",
	"sediado",
	"sedoso",
	"sedutor",
	"segmento",
	"segredo",
	"segundo",
	"seiva",
	"seleto",
	"selvagem",
	"semanal",
	"semente",
	"senador",
	"senhor",
	"sensual",
	"sentado",
	"separado",
	"sereia",
	"seringa",
	"serra",
	"servo",
	"setembro",
	"setor",
	"sigilo",
	"silhueta",
	"silicone",
	"simetria",
	"simpatia",
	"simular",
	"sinal",
	"sincero",
	"singular",
	"sinopse",
	"sintonia",
	"sirene",
	"siri",
	"situado",
	"soberano",
	"sobra",
	"socorro",
	"sogro",
	"soja",
	"solda",
	"soletrar",
	"solteiro",
	"sombrio",
	"sonata",
	"sondar",
	"sonegar",
	"sonhador",
	"sono",
	"soprano",
	"soquete",
	"sorrir",
	"sorteio",
	"sossego",
	"sotaque",
	"soterrar",
	"sovado",
	"sozinho",
	"suavizar",
	"subida",
	"submerso",
	"subsolo",
	"subtrair",
	"sucata",
	"sucesso",
	"suco",
	"sudeste",
	"sufixo",
	"sugador",
	"sugerir",
	"sujeito",
	"sulfato",
	"sumir",
	"suor",
	"superior",
	"suplicar",
	"suposto",
	"suprimir",
	"surdina",
	"surfista",
	"surpresa",
	"surreal",
	"surtir",
	"suspiro",
	"sustento",
	"tabela",
	"tablete",
	"tabuada",
	"tacho",
	"tagarela",
	"talher",
	"talo",
	"talvez",
	"tamanho",
	"tamborim",
	"tampa",
	"tangente",
	"tanto",
	"tapar",
	"tapioca",
	"tardio",
	"tarefa",
	"tarja",
	"tarraxa",
	"tatuagem",
	"taurino",
	"taxativo",
	"taxista",
	"teatral",
	"tecer",
	"tecido",
	"teclado",
	"tedioso",
	"teia",
	"teimar",
	"telefone",
	"telhado",
	"tempero",
	"tenente",
	"tensor",
	"tentar",
	"termal",
	"terno",
	"terreno",
	"tese",
	"tesoura",
	"testado",
	"teto",
	"textura",
	"texugo",
	"tiara",
	"tigela",
	"tijolo",
	"timbrar",
	"timidez",
	"tingido",
	"tinteiro",
	"tiragem",
	"titular",
	"toalha",
	"tocha",
	"tolerar",
	"tolice",
	"tomada",
	"tomilho",
	"tonel",
	"tontura",
	"topete",
	"tora",
	"torcido",
	"torneio",
	"torque",
	"torrada",
	"torto",
	"tostar",
	"touca",
	"toupeira",
	"toxina",
	"trabalho",
	"tracejar",
	"tradutor",
	"trafegar",
	"trajeto",
	"trama",
	"trancar",
	"trapo",
	"traseiro",
	"tratador",
	"travar",
	"treino",
	"tremer",
	"trepidar",
	"trevo",
	"triagem",
	"tribo",
	"triciclo",
	"tridente",
	"trilogia",
	"trindade",
	"triplo",
	"triturar",
	"triunfal",
	"trocar",
	"trombeta",
	"trova",
	"trunfo",
	"truque",
	"tubular",
	"tucano",
	"tudo",
	"tulipa",
	"tupi",
	"turbo",
	"turma",
	"turquesa",
	"tutelar",
	"tutorial",
	"uivar",
	"umbigo",
	"unha",
	"unidade",
	"uniforme",
	"urologia",
	"urso",
	"urtiga",
	"urubu",
	"usado",
	"usina",
	"usufruir",
	"vacina",
	"vadiar",
	"vagaroso",
	"vaidoso",
	"vala",
	"valente",
	"validade",
	"valores",
	"vantagem",
	"vaqueiro",
	"varanda",
	"vareta",
	"varrer",
	"vascular",
	"vasilha",
	"vassoura",
	"vazar",
	"vazio",
	"veado",
	"vedar",
	"vegetar",
	"veicular",
	"veleiro",
	"velhice",
	"veludo",
	"vencedor",
	"vendaval",
	"venerar",
	"ventre",
	"verbal",
	"verdade",
	"vereador",
	"vergonha",
	"vermelho",
	"verniz",
	"versar",
	"vertente",
	"vespa",
	"vestido",
	"vetorial",
	"viaduto",
	"viagem",
	"viajar",
	"viatura",
	"vibrador",
	"videira",
	"vidraria",
	"viela",
	"viga",
	"vigente",
	"vigiar",
	"vigorar",
	"vilarejo",
	"vinco",
	"vinheta",
	"vinil",
	"violeta",
	"virada",
	"virtude",
	"visitar",
	"visto",
	"vitral",
	"viveiro",
	"vizinho",
	"voador",
	"voar",
	"vogal",
	"volante",
	"voleibol",
	"voltagem",
	"volumoso",
	"vontade",
	"vulto",
	"vuvuzela",
	"xadrez",
	"xarope",
	"xeque",
	"xeretar",
	"xerife",
	"xingar",
	"zangado",
	"zarpar",
	"zebu",
	"zelador",
	"zombar",
	"zoologia",
	"zumbido"
];

const require$$9 = [
	"abandon",
	"ability",
	"able",
	"about",
	"above",
	"absent",
	"absorb",
	"abstract",
	"absurd",
	"abuse",
	"access",
	"accident",
	"account",
	"accuse",
	"achieve",
	"acid",
	"acoustic",
	"acquire",
	"across",
	"act",
	"action",
	"actor",
	"actress",
	"actual",
	"adapt",
	"add",
	"addict",
	"address",
	"adjust",
	"admit",
	"adult",
	"advance",
	"advice",
	"aerobic",
	"affair",
	"afford",
	"afraid",
	"again",
	"age",
	"agent",
	"agree",
	"ahead",
	"aim",
	"air",
	"airport",
	"aisle",
	"alarm",
	"album",
	"alcohol",
	"alert",
	"alien",
	"all",
	"alley",
	"allow",
	"almost",
	"alone",
	"alpha",
	"already",
	"also",
	"alter",
	"always",
	"amateur",
	"amazing",
	"among",
	"amount",
	"amused",
	"analyst",
	"anchor",
	"ancient",
	"anger",
	"angle",
	"angry",
	"animal",
	"ankle",
	"announce",
	"annual",
	"another",
	"answer",
	"antenna",
	"antique",
	"anxiety",
	"any",
	"apart",
	"apology",
	"appear",
	"apple",
	"approve",
	"april",
	"arch",
	"arctic",
	"area",
	"arena",
	"argue",
	"arm",
	"armed",
	"armor",
	"army",
	"around",
	"arrange",
	"arrest",
	"arrive",
	"arrow",
	"art",
	"artefact",
	"artist",
	"artwork",
	"ask",
	"aspect",
	"assault",
	"asset",
	"assist",
	"assume",
	"asthma",
	"athlete",
	"atom",
	"attack",
	"attend",
	"attitude",
	"attract",
	"auction",
	"audit",
	"august",
	"aunt",
	"author",
	"auto",
	"autumn",
	"average",
	"avocado",
	"avoid",
	"awake",
	"aware",
	"away",
	"awesome",
	"awful",
	"awkward",
	"axis",
	"baby",
	"bachelor",
	"bacon",
	"badge",
	"bag",
	"balance",
	"balcony",
	"ball",
	"bamboo",
	"banana",
	"banner",
	"bar",
	"barely",
	"bargain",
	"barrel",
	"base",
	"basic",
	"basket",
	"battle",
	"beach",
	"bean",
	"beauty",
	"because",
	"become",
	"beef",
	"before",
	"begin",
	"behave",
	"behind",
	"believe",
	"below",
	"belt",
	"bench",
	"benefit",
	"best",
	"betray",
	"better",
	"between",
	"beyond",
	"bicycle",
	"bid",
	"bike",
	"bind",
	"biology",
	"bird",
	"birth",
	"bitter",
	"black",
	"blade",
	"blame",
	"blanket",
	"blast",
	"bleak",
	"bless",
	"blind",
	"blood",
	"blossom",
	"blouse",
	"blue",
	"blur",
	"blush",
	"board",
	"boat",
	"body",
	"boil",
	"bomb",
	"bone",
	"bonus",
	"book",
	"boost",
	"border",
	"boring",
	"borrow",
	"boss",
	"bottom",
	"bounce",
	"box",
	"boy",
	"bracket",
	"brain",
	"brand",
	"brass",
	"brave",
	"bread",
	"breeze",
	"brick",
	"bridge",
	"brief",
	"bright",
	"bring",
	"brisk",
	"broccoli",
	"broken",
	"bronze",
	"broom",
	"brother",
	"brown",
	"brush",
	"bubble",
	"buddy",
	"budget",
	"buffalo",
	"build",
	"bulb",
	"bulk",
	"bullet",
	"bundle",
	"bunker",
	"burden",
	"burger",
	"burst",
	"bus",
	"business",
	"busy",
	"butter",
	"buyer",
	"buzz",
	"cabbage",
	"cabin",
	"cable",
	"cactus",
	"cage",
	"cake",
	"call",
	"calm",
	"camera",
	"camp",
	"can",
	"canal",
	"cancel",
	"candy",
	"cannon",
	"canoe",
	"canvas",
	"canyon",
	"capable",
	"capital",
	"captain",
	"car",
	"carbon",
	"card",
	"cargo",
	"carpet",
	"carry",
	"cart",
	"case",
	"cash",
	"casino",
	"castle",
	"casual",
	"cat",
	"catalog",
	"catch",
	"category",
	"cattle",
	"caught",
	"cause",
	"caution",
	"cave",
	"ceiling",
	"celery",
	"cement",
	"census",
	"century",
	"cereal",
	"certain",
	"chair",
	"chalk",
	"champion",
	"change",
	"chaos",
	"chapter",
	"charge",
	"chase",
	"chat",
	"cheap",
	"check",
	"cheese",
	"chef",
	"cherry",
	"chest",
	"chicken",
	"chief",
	"child",
	"chimney",
	"choice",
	"choose",
	"chronic",
	"chuckle",
	"chunk",
	"churn",
	"cigar",
	"cinnamon",
	"circle",
	"citizen",
	"city",
	"civil",
	"claim",
	"clap",
	"clarify",
	"claw",
	"clay",
	"clean",
	"clerk",
	"clever",
	"click",
	"client",
	"cliff",
	"climb",
	"clinic",
	"clip",
	"clock",
	"clog",
	"close",
	"cloth",
	"cloud",
	"clown",
	"club",
	"clump",
	"cluster",
	"clutch",
	"coach",
	"coast",
	"coconut",
	"code",
	"coffee",
	"coil",
	"coin",
	"collect",
	"color",
	"column",
	"combine",
	"come",
	"comfort",
	"comic",
	"common",
	"company",
	"concert",
	"conduct",
	"confirm",
	"congress",
	"connect",
	"consider",
	"control",
	"convince",
	"cook",
	"cool",
	"copper",
	"copy",
	"coral",
	"core",
	"corn",
	"correct",
	"cost",
	"cotton",
	"couch",
	"country",
	"couple",
	"course",
	"cousin",
	"cover",
	"coyote",
	"crack",
	"cradle",
	"craft",
	"cram",
	"crane",
	"crash",
	"crater",
	"crawl",
	"crazy",
	"cream",
	"credit",
	"creek",
	"crew",
	"cricket",
	"crime",
	"crisp",
	"critic",
	"crop",
	"cross",
	"crouch",
	"crowd",
	"crucial",
	"cruel",
	"cruise",
	"crumble",
	"crunch",
	"crush",
	"cry",
	"crystal",
	"cube",
	"culture",
	"cup",
	"cupboard",
	"curious",
	"current",
	"curtain",
	"curve",
	"cushion",
	"custom",
	"cute",
	"cycle",
	"dad",
	"damage",
	"damp",
	"dance",
	"danger",
	"daring",
	"dash",
	"daughter",
	"dawn",
	"day",
	"deal",
	"debate",
	"debris",
	"decade",
	"december",
	"decide",
	"decline",
	"decorate",
	"decrease",
	"deer",
	"defense",
	"define",
	"defy",
	"degree",
	"delay",
	"deliver",
	"demand",
	"demise",
	"denial",
	"dentist",
	"deny",
	"depart",
	"depend",
	"deposit",
	"depth",
	"deputy",
	"derive",
	"describe",
	"desert",
	"design",
	"desk",
	"despair",
	"destroy",
	"detail",
	"detect",
	"develop",
	"device",
	"devote",
	"diagram",
	"dial",
	"diamond",
	"diary",
	"dice",
	"diesel",
	"diet",
	"differ",
	"digital",
	"dignity",
	"dilemma",
	"dinner",
	"dinosaur",
	"direct",
	"dirt",
	"disagree",
	"discover",
	"disease",
	"dish",
	"dismiss",
	"disorder",
	"display",
	"distance",
	"divert",
	"divide",
	"divorce",
	"dizzy",
	"doctor",
	"document",
	"dog",
	"doll",
	"dolphin",
	"domain",
	"donate",
	"donkey",
	"donor",
	"door",
	"dose",
	"double",
	"dove",
	"draft",
	"dragon",
	"drama",
	"drastic",
	"draw",
	"dream",
	"dress",
	"drift",
	"drill",
	"drink",
	"drip",
	"drive",
	"drop",
	"drum",
	"dry",
	"duck",
	"dumb",
	"dune",
	"during",
	"dust",
	"dutch",
	"duty",
	"dwarf",
	"dynamic",
	"eager",
	"eagle",
	"early",
	"earn",
	"earth",
	"easily",
	"east",
	"easy",
	"echo",
	"ecology",
	"economy",
	"edge",
	"edit",
	"educate",
	"effort",
	"egg",
	"eight",
	"either",
	"elbow",
	"elder",
	"electric",
	"elegant",
	"element",
	"elephant",
	"elevator",
	"elite",
	"else",
	"embark",
	"embody",
	"embrace",
	"emerge",
	"emotion",
	"employ",
	"empower",
	"empty",
	"enable",
	"enact",
	"end",
	"endless",
	"endorse",
	"enemy",
	"energy",
	"enforce",
	"engage",
	"engine",
	"enhance",
	"enjoy",
	"enlist",
	"enough",
	"enrich",
	"enroll",
	"ensure",
	"enter",
	"entire",
	"entry",
	"envelope",
	"episode",
	"equal",
	"equip",
	"era",
	"erase",
	"erode",
	"erosion",
	"error",
	"erupt",
	"escape",
	"essay",
	"essence",
	"estate",
	"eternal",
	"ethics",
	"evidence",
	"evil",
	"evoke",
	"evolve",
	"exact",
	"example",
	"excess",
	"exchange",
	"excite",
	"exclude",
	"excuse",
	"execute",
	"exercise",
	"exhaust",
	"exhibit",
	"exile",
	"exist",
	"exit",
	"exotic",
	"expand",
	"expect",
	"expire",
	"explain",
	"expose",
	"express",
	"extend",
	"extra",
	"eye",
	"eyebrow",
	"fabric",
	"face",
	"faculty",
	"fade",
	"faint",
	"faith",
	"fall",
	"false",
	"fame",
	"family",
	"famous",
	"fan",
	"fancy",
	"fantasy",
	"farm",
	"fashion",
	"fat",
	"fatal",
	"father",
	"fatigue",
	"fault",
	"favorite",
	"feature",
	"february",
	"federal",
	"fee",
	"feed",
	"feel",
	"female",
	"fence",
	"festival",
	"fetch",
	"fever",
	"few",
	"fiber",
	"fiction",
	"field",
	"figure",
	"file",
	"film",
	"filter",
	"final",
	"find",
	"fine",
	"finger",
	"finish",
	"fire",
	"firm",
	"first",
	"fiscal",
	"fish",
	"fit",
	"fitness",
	"fix",
	"flag",
	"flame",
	"flash",
	"flat",
	"flavor",
	"flee",
	"flight",
	"flip",
	"float",
	"flock",
	"floor",
	"flower",
	"fluid",
	"flush",
	"fly",
	"foam",
	"focus",
	"fog",
	"foil",
	"fold",
	"follow",
	"food",
	"foot",
	"force",
	"forest",
	"forget",
	"fork",
	"fortune",
	"forum",
	"forward",
	"fossil",
	"foster",
	"found",
	"fox",
	"fragile",
	"frame",
	"frequent",
	"fresh",
	"friend",
	"fringe",
	"frog",
	"front",
	"frost",
	"frown",
	"frozen",
	"fruit",
	"fuel",
	"fun",
	"funny",
	"furnace",
	"fury",
	"future",
	"gadget",
	"gain",
	"galaxy",
	"gallery",
	"game",
	"gap",
	"garage",
	"garbage",
	"garden",
	"garlic",
	"garment",
	"gas",
	"gasp",
	"gate",
	"gather",
	"gauge",
	"gaze",
	"general",
	"genius",
	"genre",
	"gentle",
	"genuine",
	"gesture",
	"ghost",
	"giant",
	"gift",
	"giggle",
	"ginger",
	"giraffe",
	"girl",
	"give",
	"glad",
	"glance",
	"glare",
	"glass",
	"glide",
	"glimpse",
	"globe",
	"gloom",
	"glory",
	"glove",
	"glow",
	"glue",
	"goat",
	"goddess",
	"gold",
	"good",
	"goose",
	"gorilla",
	"gospel",
	"gossip",
	"govern",
	"gown",
	"grab",
	"grace",
	"grain",
	"grant",
	"grape",
	"grass",
	"gravity",
	"great",
	"green",
	"grid",
	"grief",
	"grit",
	"grocery",
	"group",
	"grow",
	"grunt",
	"guard",
	"guess",
	"guide",
	"guilt",
	"guitar",
	"gun",
	"gym",
	"habit",
	"hair",
	"half",
	"hammer",
	"hamster",
	"hand",
	"happy",
	"harbor",
	"hard",
	"harsh",
	"harvest",
	"hat",
	"have",
	"hawk",
	"hazard",
	"head",
	"health",
	"heart",
	"heavy",
	"hedgehog",
	"height",
	"hello",
	"helmet",
	"help",
	"hen",
	"hero",
	"hidden",
	"high",
	"hill",
	"hint",
	"hip",
	"hire",
	"history",
	"hobby",
	"hockey",
	"hold",
	"hole",
	"holiday",
	"hollow",
	"home",
	"honey",
	"hood",
	"hope",
	"horn",
	"horror",
	"horse",
	"hospital",
	"host",
	"hotel",
	"hour",
	"hover",
	"hub",
	"huge",
	"human",
	"humble",
	"humor",
	"hundred",
	"hungry",
	"hunt",
	"hurdle",
	"hurry",
	"hurt",
	"husband",
	"hybrid",
	"ice",
	"icon",
	"idea",
	"identify",
	"idle",
	"ignore",
	"ill",
	"illegal",
	"illness",
	"image",
	"imitate",
	"immense",
	"immune",
	"impact",
	"impose",
	"improve",
	"impulse",
	"inch",
	"include",
	"income",
	"increase",
	"index",
	"indicate",
	"indoor",
	"industry",
	"infant",
	"inflict",
	"inform",
	"inhale",
	"inherit",
	"initial",
	"inject",
	"injury",
	"inmate",
	"inner",
	"innocent",
	"input",
	"inquiry",
	"insane",
	"insect",
	"inside",
	"inspire",
	"install",
	"intact",
	"interest",
	"into",
	"invest",
	"invite",
	"involve",
	"iron",
	"island",
	"isolate",
	"issue",
	"item",
	"ivory",
	"jacket",
	"jaguar",
	"jar",
	"jazz",
	"jealous",
	"jeans",
	"jelly",
	"jewel",
	"job",
	"join",
	"joke",
	"journey",
	"joy",
	"judge",
	"juice",
	"jump",
	"jungle",
	"junior",
	"junk",
	"just",
	"kangaroo",
	"keen",
	"keep",
	"ketchup",
	"key",
	"kick",
	"kid",
	"kidney",
	"kind",
	"kingdom",
	"kiss",
	"kit",
	"kitchen",
	"kite",
	"kitten",
	"kiwi",
	"knee",
	"knife",
	"knock",
	"know",
	"lab",
	"label",
	"labor",
	"ladder",
	"lady",
	"lake",
	"lamp",
	"language",
	"laptop",
	"large",
	"later",
	"latin",
	"laugh",
	"laundry",
	"lava",
	"law",
	"lawn",
	"lawsuit",
	"layer",
	"lazy",
	"leader",
	"leaf",
	"learn",
	"leave",
	"lecture",
	"left",
	"leg",
	"legal",
	"legend",
	"leisure",
	"lemon",
	"lend",
	"length",
	"lens",
	"leopard",
	"lesson",
	"letter",
	"level",
	"liar",
	"liberty",
	"library",
	"license",
	"life",
	"lift",
	"light",
	"like",
	"limb",
	"limit",
	"link",
	"lion",
	"liquid",
	"list",
	"little",
	"live",
	"lizard",
	"load",
	"loan",
	"lobster",
	"local",
	"lock",
	"logic",
	"lonely",
	"long",
	"loop",
	"lottery",
	"loud",
	"lounge",
	"love",
	"loyal",
	"lucky",
	"luggage",
	"lumber",
	"lunar",
	"lunch",
	"luxury",
	"lyrics",
	"machine",
	"mad",
	"magic",
	"magnet",
	"maid",
	"mail",
	"main",
	"major",
	"make",
	"mammal",
	"man",
	"manage",
	"mandate",
	"mango",
	"mansion",
	"manual",
	"maple",
	"marble",
	"march",
	"margin",
	"marine",
	"market",
	"marriage",
	"mask",
	"mass",
	"master",
	"match",
	"material",
	"math",
	"matrix",
	"matter",
	"maximum",
	"maze",
	"meadow",
	"mean",
	"measure",
	"meat",
	"mechanic",
	"medal",
	"media",
	"melody",
	"melt",
	"member",
	"memory",
	"mention",
	"menu",
	"mercy",
	"merge",
	"merit",
	"merry",
	"mesh",
	"message",
	"metal",
	"method",
	"middle",
	"midnight",
	"milk",
	"million",
	"mimic",
	"mind",
	"minimum",
	"minor",
	"minute",
	"miracle",
	"mirror",
	"misery",
	"miss",
	"mistake",
	"mix",
	"mixed",
	"mixture",
	"mobile",
	"model",
	"modify",
	"mom",
	"moment",
	"monitor",
	"monkey",
	"monster",
	"month",
	"moon",
	"moral",
	"more",
	"morning",
	"mosquito",
	"mother",
	"motion",
	"motor",
	"mountain",
	"mouse",
	"move",
	"movie",
	"much",
	"muffin",
	"mule",
	"multiply",
	"muscle",
	"museum",
	"mushroom",
	"music",
	"must",
	"mutual",
	"myself",
	"mystery",
	"myth",
	"naive",
	"name",
	"napkin",
	"narrow",
	"nasty",
	"nation",
	"nature",
	"near",
	"neck",
	"need",
	"negative",
	"neglect",
	"neither",
	"nephew",
	"nerve",
	"nest",
	"net",
	"network",
	"neutral",
	"never",
	"news",
	"next",
	"nice",
	"night",
	"noble",
	"noise",
	"nominee",
	"noodle",
	"normal",
	"north",
	"nose",
	"notable",
	"note",
	"nothing",
	"notice",
	"novel",
	"now",
	"nuclear",
	"number",
	"nurse",
	"nut",
	"oak",
	"obey",
	"object",
	"oblige",
	"obscure",
	"observe",
	"obtain",
	"obvious",
	"occur",
	"ocean",
	"october",
	"odor",
	"off",
	"offer",
	"office",
	"often",
	"oil",
	"okay",
	"old",
	"olive",
	"olympic",
	"omit",
	"once",
	"one",
	"onion",
	"online",
	"only",
	"open",
	"opera",
	"opinion",
	"oppose",
	"option",
	"orange",
	"orbit",
	"orchard",
	"order",
	"ordinary",
	"organ",
	"orient",
	"original",
	"orphan",
	"ostrich",
	"other",
	"outdoor",
	"outer",
	"output",
	"outside",
	"oval",
	"oven",
	"over",
	"own",
	"owner",
	"oxygen",
	"oyster",
	"ozone",
	"pact",
	"paddle",
	"page",
	"pair",
	"palace",
	"palm",
	"panda",
	"panel",
	"panic",
	"panther",
	"paper",
	"parade",
	"parent",
	"park",
	"parrot",
	"party",
	"pass",
	"patch",
	"path",
	"patient",
	"patrol",
	"pattern",
	"pause",
	"pave",
	"payment",
	"peace",
	"peanut",
	"pear",
	"peasant",
	"pelican",
	"pen",
	"penalty",
	"pencil",
	"people",
	"pepper",
	"perfect",
	"permit",
	"person",
	"pet",
	"phone",
	"photo",
	"phrase",
	"physical",
	"piano",
	"picnic",
	"picture",
	"piece",
	"pig",
	"pigeon",
	"pill",
	"pilot",
	"pink",
	"pioneer",
	"pipe",
	"pistol",
	"pitch",
	"pizza",
	"place",
	"planet",
	"plastic",
	"plate",
	"play",
	"please",
	"pledge",
	"pluck",
	"plug",
	"plunge",
	"poem",
	"poet",
	"point",
	"polar",
	"pole",
	"police",
	"pond",
	"pony",
	"pool",
	"popular",
	"portion",
	"position",
	"possible",
	"post",
	"potato",
	"pottery",
	"poverty",
	"powder",
	"power",
	"practice",
	"praise",
	"predict",
	"prefer",
	"prepare",
	"present",
	"pretty",
	"prevent",
	"price",
	"pride",
	"primary",
	"print",
	"priority",
	"prison",
	"private",
	"prize",
	"problem",
	"process",
	"produce",
	"profit",
	"program",
	"project",
	"promote",
	"proof",
	"property",
	"prosper",
	"protect",
	"proud",
	"provide",
	"public",
	"pudding",
	"pull",
	"pulp",
	"pulse",
	"pumpkin",
	"punch",
	"pupil",
	"puppy",
	"purchase",
	"purity",
	"purpose",
	"purse",
	"push",
	"put",
	"puzzle",
	"pyramid",
	"quality",
	"quantum",
	"quarter",
	"question",
	"quick",
	"quit",
	"quiz",
	"quote",
	"rabbit",
	"raccoon",
	"race",
	"rack",
	"radar",
	"radio",
	"rail",
	"rain",
	"raise",
	"rally",
	"ramp",
	"ranch",
	"random",
	"range",
	"rapid",
	"rare",
	"rate",
	"rather",
	"raven",
	"raw",
	"razor",
	"ready",
	"real",
	"reason",
	"rebel",
	"rebuild",
	"recall",
	"receive",
	"recipe",
	"record",
	"recycle",
	"reduce",
	"reflect",
	"reform",
	"refuse",
	"region",
	"regret",
	"regular",
	"reject",
	"relax",
	"release",
	"relief",
	"rely",
	"remain",
	"remember",
	"remind",
	"remove",
	"render",
	"renew",
	"rent",
	"reopen",
	"repair",
	"repeat",
	"replace",
	"report",
	"require",
	"rescue",
	"resemble",
	"resist",
	"resource",
	"response",
	"result",
	"retire",
	"retreat",
	"return",
	"reunion",
	"reveal",
	"review",
	"reward",
	"rhythm",
	"rib",
	"ribbon",
	"rice",
	"rich",
	"ride",
	"ridge",
	"rifle",
	"right",
	"rigid",
	"ring",
	"riot",
	"ripple",
	"risk",
	"ritual",
	"rival",
	"river",
	"road",
	"roast",
	"robot",
	"robust",
	"rocket",
	"romance",
	"roof",
	"rookie",
	"room",
	"rose",
	"rotate",
	"rough",
	"round",
	"route",
	"royal",
	"rubber",
	"rude",
	"rug",
	"rule",
	"run",
	"runway",
	"rural",
	"sad",
	"saddle",
	"sadness",
	"safe",
	"sail",
	"salad",
	"salmon",
	"salon",
	"salt",
	"salute",
	"same",
	"sample",
	"sand",
	"satisfy",
	"satoshi",
	"sauce",
	"sausage",
	"save",
	"say",
	"scale",
	"scan",
	"scare",
	"scatter",
	"scene",
	"scheme",
	"school",
	"science",
	"scissors",
	"scorpion",
	"scout",
	"scrap",
	"screen",
	"script",
	"scrub",
	"sea",
	"search",
	"season",
	"seat",
	"second",
	"secret",
	"section",
	"security",
	"seed",
	"seek",
	"segment",
	"select",
	"sell",
	"seminar",
	"senior",
	"sense",
	"sentence",
	"series",
	"service",
	"session",
	"settle",
	"setup",
	"seven",
	"shadow",
	"shaft",
	"shallow",
	"share",
	"shed",
	"shell",
	"sheriff",
	"shield",
	"shift",
	"shine",
	"ship",
	"shiver",
	"shock",
	"shoe",
	"shoot",
	"shop",
	"short",
	"shoulder",
	"shove",
	"shrimp",
	"shrug",
	"shuffle",
	"shy",
	"sibling",
	"sick",
	"side",
	"siege",
	"sight",
	"sign",
	"silent",
	"silk",
	"silly",
	"silver",
	"similar",
	"simple",
	"since",
	"sing",
	"siren",
	"sister",
	"situate",
	"six",
	"size",
	"skate",
	"sketch",
	"ski",
	"skill",
	"skin",
	"skirt",
	"skull",
	"slab",
	"slam",
	"sleep",
	"slender",
	"slice",
	"slide",
	"slight",
	"slim",
	"slogan",
	"slot",
	"slow",
	"slush",
	"small",
	"smart",
	"smile",
	"smoke",
	"smooth",
	"snack",
	"snake",
	"snap",
	"sniff",
	"snow",
	"soap",
	"soccer",
	"social",
	"sock",
	"soda",
	"soft",
	"solar",
	"soldier",
	"solid",
	"solution",
	"solve",
	"someone",
	"song",
	"soon",
	"sorry",
	"sort",
	"soul",
	"sound",
	"soup",
	"source",
	"south",
	"space",
	"spare",
	"spatial",
	"spawn",
	"speak",
	"special",
	"speed",
	"spell",
	"spend",
	"sphere",
	"spice",
	"spider",
	"spike",
	"spin",
	"spirit",
	"split",
	"spoil",
	"sponsor",
	"spoon",
	"sport",
	"spot",
	"spray",
	"spread",
	"spring",
	"spy",
	"square",
	"squeeze",
	"squirrel",
	"stable",
	"stadium",
	"staff",
	"stage",
	"stairs",
	"stamp",
	"stand",
	"start",
	"state",
	"stay",
	"steak",
	"steel",
	"stem",
	"step",
	"stereo",
	"stick",
	"still",
	"sting",
	"stock",
	"stomach",
	"stone",
	"stool",
	"story",
	"stove",
	"strategy",
	"street",
	"strike",
	"strong",
	"struggle",
	"student",
	"stuff",
	"stumble",
	"style",
	"subject",
	"submit",
	"subway",
	"success",
	"such",
	"sudden",
	"suffer",
	"sugar",
	"suggest",
	"suit",
	"summer",
	"sun",
	"sunny",
	"sunset",
	"super",
	"supply",
	"supreme",
	"sure",
	"surface",
	"surge",
	"surprise",
	"surround",
	"survey",
	"suspect",
	"sustain",
	"swallow",
	"swamp",
	"swap",
	"swarm",
	"swear",
	"sweet",
	"swift",
	"swim",
	"swing",
	"switch",
	"sword",
	"symbol",
	"symptom",
	"syrup",
	"system",
	"table",
	"tackle",
	"tag",
	"tail",
	"talent",
	"talk",
	"tank",
	"tape",
	"target",
	"task",
	"taste",
	"tattoo",
	"taxi",
	"teach",
	"team",
	"tell",
	"ten",
	"tenant",
	"tennis",
	"tent",
	"term",
	"test",
	"text",
	"thank",
	"that",
	"theme",
	"then",
	"theory",
	"there",
	"they",
	"thing",
	"this",
	"thought",
	"three",
	"thrive",
	"throw",
	"thumb",
	"thunder",
	"ticket",
	"tide",
	"tiger",
	"tilt",
	"timber",
	"time",
	"tiny",
	"tip",
	"tired",
	"tissue",
	"title",
	"toast",
	"tobacco",
	"today",
	"toddler",
	"toe",
	"together",
	"toilet",
	"token",
	"tomato",
	"tomorrow",
	"tone",
	"tongue",
	"tonight",
	"tool",
	"tooth",
	"top",
	"topic",
	"topple",
	"torch",
	"tornado",
	"tortoise",
	"toss",
	"total",
	"tourist",
	"toward",
	"tower",
	"town",
	"toy",
	"track",
	"trade",
	"traffic",
	"tragic",
	"train",
	"transfer",
	"trap",
	"trash",
	"travel",
	"tray",
	"treat",
	"tree",
	"trend",
	"trial",
	"tribe",
	"trick",
	"trigger",
	"trim",
	"trip",
	"trophy",
	"trouble",
	"truck",
	"true",
	"truly",
	"trumpet",
	"trust",
	"truth",
	"try",
	"tube",
	"tuition",
	"tumble",
	"tuna",
	"tunnel",
	"turkey",
	"turn",
	"turtle",
	"twelve",
	"twenty",
	"twice",
	"twin",
	"twist",
	"two",
	"type",
	"typical",
	"ugly",
	"umbrella",
	"unable",
	"unaware",
	"uncle",
	"uncover",
	"under",
	"undo",
	"unfair",
	"unfold",
	"unhappy",
	"uniform",
	"unique",
	"unit",
	"universe",
	"unknown",
	"unlock",
	"until",
	"unusual",
	"unveil",
	"update",
	"upgrade",
	"uphold",
	"upon",
	"upper",
	"upset",
	"urban",
	"urge",
	"usage",
	"use",
	"used",
	"useful",
	"useless",
	"usual",
	"utility",
	"vacant",
	"vacuum",
	"vague",
	"valid",
	"valley",
	"valve",
	"van",
	"vanish",
	"vapor",
	"various",
	"vast",
	"vault",
	"vehicle",
	"velvet",
	"vendor",
	"venture",
	"venue",
	"verb",
	"verify",
	"version",
	"very",
	"vessel",
	"veteran",
	"viable",
	"vibrant",
	"vicious",
	"victory",
	"video",
	"view",
	"village",
	"vintage",
	"violin",
	"virtual",
	"virus",
	"visa",
	"visit",
	"visual",
	"vital",
	"vivid",
	"vocal",
	"voice",
	"void",
	"volcano",
	"volume",
	"vote",
	"voyage",
	"wage",
	"wagon",
	"wait",
	"walk",
	"wall",
	"walnut",
	"want",
	"warfare",
	"warm",
	"warrior",
	"wash",
	"wasp",
	"waste",
	"water",
	"wave",
	"way",
	"wealth",
	"weapon",
	"wear",
	"weasel",
	"weather",
	"web",
	"wedding",
	"weekend",
	"weird",
	"welcome",
	"west",
	"wet",
	"whale",
	"what",
	"wheat",
	"wheel",
	"when",
	"where",
	"whip",
	"whisper",
	"wide",
	"width",
	"wife",
	"wild",
	"will",
	"win",
	"window",
	"wine",
	"wing",
	"wink",
	"winner",
	"winter",
	"wire",
	"wisdom",
	"wise",
	"wish",
	"witness",
	"wolf",
	"woman",
	"wonder",
	"wood",
	"wool",
	"word",
	"work",
	"world",
	"worry",
	"worth",
	"wrap",
	"wreck",
	"wrestle",
	"wrist",
	"write",
	"wrong",
	"yard",
	"year",
	"yellow",
	"you",
	"young",
	"youth",
	"zebra",
	"zero",
	"zone",
	"zoo"
];

Object.defineProperty(_wordlists, "__esModule", { value: true });
// browserify by default only pulls in files that are hard coded in requires
// In order of last to first in this file, the default wordlist will be chosen
// based on what is present. (Bundles may remove wordlists they don't need)
const wordlists = {};
_wordlists.wordlists = wordlists;
let _default;
var _default_1 = _wordlists._default = _default;
try {
    _default_1 = _wordlists._default = _default = require$$0$1;
    wordlists.czech = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$1;
    wordlists.chinese_simplified = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$2;
    wordlists.chinese_traditional = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$3;
    wordlists.korean = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$4;
    wordlists.french = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$5;
    wordlists.italian = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$6;
    wordlists.spanish = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$7;
    wordlists.japanese = _default;
    wordlists.JA = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$8;
    wordlists.portuguese = _default;
}
catch (err) { }
try {
    _default_1 = _wordlists._default = _default = require$$9;
    wordlists.english = _default;
    wordlists.EN = _default;
}
catch (err) { }

Object.defineProperty(src, "__esModule", { value: true });
const sha256_1 = sha256;
const sha512_1 = sha512;
const pbkdf2_1 = pbkdf2$1;
const utils_1 = utils;
const _wordlists_1 = _wordlists;
let DEFAULT_WORDLIST = _wordlists_1._default;
const INVALID_MNEMONIC = 'Invalid mnemonic';
const INVALID_ENTROPY = 'Invalid entropy';
const INVALID_CHECKSUM = 'Invalid mnemonic checksum';
const WORDLIST_REQUIRED = 'A wordlist is required but a default could not be found.\n' +
    'Please pass a 2048 word array explicitly.';
function normalize(str) {
    return (str || '').normalize('NFKD');
}
function lpad(str, padString, length) {
    while (str.length < length) {
        str = padString + str;
    }
    return str;
}
function binaryToByte(bin) {
    return parseInt(bin, 2);
}
function bytesToBinary(bytes) {
    return bytes.map((x) => lpad(x.toString(2), '0', 8)).join('');
}
function deriveChecksumBits(entropyBuffer) {
    const ENT = entropyBuffer.length * 8;
    const CS = ENT / 32;
    const hash = sha256_1.sha256(Uint8Array.from(entropyBuffer));
    return bytesToBinary(Array.from(hash)).slice(0, CS);
}
function salt(password) {
    return 'mnemonic' + (password || '');
}
function mnemonicToSeedSync(mnemonic, password) {
    const mnemonicBuffer = Uint8Array.from(Buffer.from(normalize(mnemonic), 'utf8'));
    const saltBuffer = Uint8Array.from(Buffer.from(salt(normalize(password)), 'utf8'));
    const res = pbkdf2_1.pbkdf2(sha512_1.sha512, mnemonicBuffer, saltBuffer, {
        c: 2048,
        dkLen: 64,
    });
    return Buffer.from(res);
}
var mnemonicToSeedSync_1 = src.mnemonicToSeedSync = mnemonicToSeedSync;
function mnemonicToSeed$1(mnemonic, password) {
    const mnemonicBuffer = Uint8Array.from(Buffer.from(normalize(mnemonic), 'utf8'));
    const saltBuffer = Uint8Array.from(Buffer.from(salt(normalize(password)), 'utf8'));
    return pbkdf2_1.pbkdf2Async(sha512_1.sha512, mnemonicBuffer, saltBuffer, {
        c: 2048,
        dkLen: 64,
    }).then((res) => Buffer.from(res));
}
src.mnemonicToSeed = mnemonicToSeed$1;
function mnemonicToEntropy(mnemonic, wordlist) {
    wordlist = wordlist || DEFAULT_WORDLIST;
    if (!wordlist) {
        throw new Error(WORDLIST_REQUIRED);
    }
    const words = normalize(mnemonic).split(' ');
    if (words.length % 3 !== 0) {
        throw new Error(INVALID_MNEMONIC);
    }
    // convert word indices to 11 bit binary strings
    const bits = words
        .map((word) => {
        const index = wordlist.indexOf(word);
        if (index === -1) {
            throw new Error(INVALID_MNEMONIC);
        }
        return lpad(index.toString(2), '0', 11);
    })
        .join('');
    // split the binary string into ENT/CS
    const dividerIndex = Math.floor(bits.length / 33) * 32;
    const entropyBits = bits.slice(0, dividerIndex);
    const checksumBits = bits.slice(dividerIndex);
    // calculate the checksum and compare
    const entropyBytes = entropyBits.match(/(.{1,8})/g).map(binaryToByte);
    if (entropyBytes.length < 16) {
        throw new Error(INVALID_ENTROPY);
    }
    if (entropyBytes.length > 32) {
        throw new Error(INVALID_ENTROPY);
    }
    if (entropyBytes.length % 4 !== 0) {
        throw new Error(INVALID_ENTROPY);
    }
    const entropy = Buffer.from(entropyBytes);
    const newChecksum = deriveChecksumBits(entropy);
    if (newChecksum !== checksumBits) {
        throw new Error(INVALID_CHECKSUM);
    }
    return entropy.toString('hex');
}
src.mnemonicToEntropy = mnemonicToEntropy;
function entropyToMnemonic(entropy, wordlist) {
    if (!Buffer.isBuffer(entropy)) {
        entropy = Buffer.from(entropy, 'hex');
    }
    wordlist = wordlist || DEFAULT_WORDLIST;
    if (!wordlist) {
        throw new Error(WORDLIST_REQUIRED);
    }
    // 128 <= ENT <= 256
    if (entropy.length < 16) {
        throw new TypeError(INVALID_ENTROPY);
    }
    if (entropy.length > 32) {
        throw new TypeError(INVALID_ENTROPY);
    }
    if (entropy.length % 4 !== 0) {
        throw new TypeError(INVALID_ENTROPY);
    }
    const entropyBits = bytesToBinary(Array.from(entropy));
    const checksumBits = deriveChecksumBits(entropy);
    const bits = entropyBits + checksumBits;
    const chunks = bits.match(/(.{1,11})/g);
    const words = chunks.map((binary) => {
        const index = binaryToByte(binary);
        return wordlist[index];
    });
    return wordlist[0] === '\u3042\u3044\u3053\u304f\u3057\u3093' // Japanese wordlist
        ? words.join('\u3000')
        : words.join(' ');
}
src.entropyToMnemonic = entropyToMnemonic;
function generateMnemonic$1(strength, rng, wordlist) {
    strength = strength || 128;
    if (strength % 32 !== 0) {
        throw new TypeError(INVALID_ENTROPY);
    }
    rng = rng || ((size) => Buffer.from(utils_1.randomBytes(size)));
    return entropyToMnemonic(rng(strength / 8), wordlist);
}
var generateMnemonic_1 = src.generateMnemonic = generateMnemonic$1;
function validateMnemonic$1(mnemonic, wordlist) {
    try {
        mnemonicToEntropy(mnemonic, wordlist);
    }
    catch (e) {
        return false;
    }
    return true;
}
var validateMnemonic_1 = src.validateMnemonic = validateMnemonic$1;
function setDefaultWordlist(language) {
    const result = _wordlists_1.wordlists[language];
    if (result) {
        DEFAULT_WORDLIST = result;
    }
    else {
        throw new Error('Could not find wordlist for language "' + language + '"');
    }
}
src.setDefaultWordlist = setDefaultWordlist;
function getDefaultWordlist() {
    if (!DEFAULT_WORDLIST) {
        throw new Error('No Default Wordlist set');
    }
    return Object.keys(_wordlists_1.wordlists).filter((lang) => {
        if (lang === 'JA' || lang === 'EN') {
            return false;
        }
        return _wordlists_1.wordlists[lang].every((word, index) => word === DEFAULT_WORDLIST[index]);
    })[0];
}
src.getDefaultWordlist = getDefaultWordlist;
var _wordlists_2 = _wordlists;
src.wordlists = _wordlists_2.wordlists;

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var naclFast = {exports: {}};

const __viteBrowserExternal = {};

const __viteBrowserExternal$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: __viteBrowserExternal
}, Symbol.toStringTag, { value: 'Module' }));

const require$$0 = /*@__PURE__*/getAugmentedNamespace(__viteBrowserExternal$1);

(function (module) {
	(function(nacl) {

	// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
	// Public domain.
	//
	// Implementation derived from TweetNaCl version 20140427.
	// See for details: http://tweetnacl.cr.yp.to/

	var gf = function(init) {
	  var i, r = new Float64Array(16);
	  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
	  return r;
	};

	//  Pluggable, initialized in high-level API below.
	var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

	var _0 = new Uint8Array(16);
	var _9 = new Uint8Array(32); _9[0] = 9;

	var gf0 = gf(),
	    gf1 = gf([1]),
	    _121665 = gf([0xdb41, 1]),
	    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
	    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
	    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
	    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
	    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

	function ts64(x, i, h, l) {
	  x[i]   = (h >> 24) & 0xff;
	  x[i+1] = (h >> 16) & 0xff;
	  x[i+2] = (h >>  8) & 0xff;
	  x[i+3] = h & 0xff;
	  x[i+4] = (l >> 24)  & 0xff;
	  x[i+5] = (l >> 16)  & 0xff;
	  x[i+6] = (l >>  8)  & 0xff;
	  x[i+7] = l & 0xff;
	}

	function vn(x, xi, y, yi, n) {
	  var i,d = 0;
	  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
	  return (1 & ((d - 1) >>> 8)) - 1;
	}

	function crypto_verify_16(x, xi, y, yi) {
	  return vn(x,xi,y,yi,16);
	}

	function crypto_verify_32(x, xi, y, yi) {
	  return vn(x,xi,y,yi,32);
	}

	function core_salsa20(o, p, k, c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }
	   x0 =  x0 +  j0 | 0;
	   x1 =  x1 +  j1 | 0;
	   x2 =  x2 +  j2 | 0;
	   x3 =  x3 +  j3 | 0;
	   x4 =  x4 +  j4 | 0;
	   x5 =  x5 +  j5 | 0;
	   x6 =  x6 +  j6 | 0;
	   x7 =  x7 +  j7 | 0;
	   x8 =  x8 +  j8 | 0;
	   x9 =  x9 +  j9 | 0;
	  x10 = x10 + j10 | 0;
	  x11 = x11 + j11 | 0;
	  x12 = x12 + j12 | 0;
	  x13 = x13 + j13 | 0;
	  x14 = x14 + j14 | 0;
	  x15 = x15 + j15 | 0;

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x1 >>>  0 & 0xff;
	  o[ 5] = x1 >>>  8 & 0xff;
	  o[ 6] = x1 >>> 16 & 0xff;
	  o[ 7] = x1 >>> 24 & 0xff;

	  o[ 8] = x2 >>>  0 & 0xff;
	  o[ 9] = x2 >>>  8 & 0xff;
	  o[10] = x2 >>> 16 & 0xff;
	  o[11] = x2 >>> 24 & 0xff;

	  o[12] = x3 >>>  0 & 0xff;
	  o[13] = x3 >>>  8 & 0xff;
	  o[14] = x3 >>> 16 & 0xff;
	  o[15] = x3 >>> 24 & 0xff;

	  o[16] = x4 >>>  0 & 0xff;
	  o[17] = x4 >>>  8 & 0xff;
	  o[18] = x4 >>> 16 & 0xff;
	  o[19] = x4 >>> 24 & 0xff;

	  o[20] = x5 >>>  0 & 0xff;
	  o[21] = x5 >>>  8 & 0xff;
	  o[22] = x5 >>> 16 & 0xff;
	  o[23] = x5 >>> 24 & 0xff;

	  o[24] = x6 >>>  0 & 0xff;
	  o[25] = x6 >>>  8 & 0xff;
	  o[26] = x6 >>> 16 & 0xff;
	  o[27] = x6 >>> 24 & 0xff;

	  o[28] = x7 >>>  0 & 0xff;
	  o[29] = x7 >>>  8 & 0xff;
	  o[30] = x7 >>> 16 & 0xff;
	  o[31] = x7 >>> 24 & 0xff;

	  o[32] = x8 >>>  0 & 0xff;
	  o[33] = x8 >>>  8 & 0xff;
	  o[34] = x8 >>> 16 & 0xff;
	  o[35] = x8 >>> 24 & 0xff;

	  o[36] = x9 >>>  0 & 0xff;
	  o[37] = x9 >>>  8 & 0xff;
	  o[38] = x9 >>> 16 & 0xff;
	  o[39] = x9 >>> 24 & 0xff;

	  o[40] = x10 >>>  0 & 0xff;
	  o[41] = x10 >>>  8 & 0xff;
	  o[42] = x10 >>> 16 & 0xff;
	  o[43] = x10 >>> 24 & 0xff;

	  o[44] = x11 >>>  0 & 0xff;
	  o[45] = x11 >>>  8 & 0xff;
	  o[46] = x11 >>> 16 & 0xff;
	  o[47] = x11 >>> 24 & 0xff;

	  o[48] = x12 >>>  0 & 0xff;
	  o[49] = x12 >>>  8 & 0xff;
	  o[50] = x12 >>> 16 & 0xff;
	  o[51] = x12 >>> 24 & 0xff;

	  o[52] = x13 >>>  0 & 0xff;
	  o[53] = x13 >>>  8 & 0xff;
	  o[54] = x13 >>> 16 & 0xff;
	  o[55] = x13 >>> 24 & 0xff;

	  o[56] = x14 >>>  0 & 0xff;
	  o[57] = x14 >>>  8 & 0xff;
	  o[58] = x14 >>> 16 & 0xff;
	  o[59] = x14 >>> 24 & 0xff;

	  o[60] = x15 >>>  0 & 0xff;
	  o[61] = x15 >>>  8 & 0xff;
	  o[62] = x15 >>> 16 & 0xff;
	  o[63] = x15 >>> 24 & 0xff;
	}

	function core_hsalsa20(o,p,k,c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x5 >>>  0 & 0xff;
	  o[ 5] = x5 >>>  8 & 0xff;
	  o[ 6] = x5 >>> 16 & 0xff;
	  o[ 7] = x5 >>> 24 & 0xff;

	  o[ 8] = x10 >>>  0 & 0xff;
	  o[ 9] = x10 >>>  8 & 0xff;
	  o[10] = x10 >>> 16 & 0xff;
	  o[11] = x10 >>> 24 & 0xff;

	  o[12] = x15 >>>  0 & 0xff;
	  o[13] = x15 >>>  8 & 0xff;
	  o[14] = x15 >>> 16 & 0xff;
	  o[15] = x15 >>> 24 & 0xff;

	  o[16] = x6 >>>  0 & 0xff;
	  o[17] = x6 >>>  8 & 0xff;
	  o[18] = x6 >>> 16 & 0xff;
	  o[19] = x6 >>> 24 & 0xff;

	  o[20] = x7 >>>  0 & 0xff;
	  o[21] = x7 >>>  8 & 0xff;
	  o[22] = x7 >>> 16 & 0xff;
	  o[23] = x7 >>> 24 & 0xff;

	  o[24] = x8 >>>  0 & 0xff;
	  o[25] = x8 >>>  8 & 0xff;
	  o[26] = x8 >>> 16 & 0xff;
	  o[27] = x8 >>> 24 & 0xff;

	  o[28] = x9 >>>  0 & 0xff;
	  o[29] = x9 >>>  8 & 0xff;
	  o[30] = x9 >>> 16 & 0xff;
	  o[31] = x9 >>> 24 & 0xff;
	}

	function crypto_core_salsa20(out,inp,k,c) {
	  core_salsa20(out,inp,k,c);
	}

	function crypto_core_hsalsa20(out,inp,k,c) {
	  core_hsalsa20(out,inp,k,c);
	}

	var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
	            // "expand 32-byte k"

	function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	    mpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	  }
	  return 0;
	}

	function crypto_stream_salsa20(c,cpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = x[i];
	  }
	  return 0;
	}

	function crypto_stream(c,cpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20(c,cpos,d,sn,s);
	}

	function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
	}

	/*
	* Port of Andrew Moon's Poly1305-donna-16. Public domain.
	* https://github.com/floodyberry/poly1305-donna
	*/

	var poly1305 = function(key) {
	  this.buffer = new Uint8Array(16);
	  this.r = new Uint16Array(10);
	  this.h = new Uint16Array(10);
	  this.pad = new Uint16Array(8);
	  this.leftover = 0;
	  this.fin = 0;

	  var t0, t1, t2, t3, t4, t5, t6, t7;

	  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
	  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
	  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
	  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
	  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
	  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	  this.r[9] = ((t7 >>>  5)) & 0x007f;

	  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
	  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
	  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
	  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
	  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
	  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
	  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
	  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
	};

	poly1305.prototype.blocks = function(m, mpos, bytes) {
	  var hibit = this.fin ? 0 : (1 << 11);
	  var t0, t1, t2, t3, t4, t5, t6, t7, c;
	  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

	  var h0 = this.h[0],
	      h1 = this.h[1],
	      h2 = this.h[2],
	      h3 = this.h[3],
	      h4 = this.h[4],
	      h5 = this.h[5],
	      h6 = this.h[6],
	      h7 = this.h[7],
	      h8 = this.h[8],
	      h9 = this.h[9];

	  var r0 = this.r[0],
	      r1 = this.r[1],
	      r2 = this.r[2],
	      r3 = this.r[3],
	      r4 = this.r[4],
	      r5 = this.r[5],
	      r6 = this.r[6],
	      r7 = this.r[7],
	      r8 = this.r[8],
	      r9 = this.r[9];

	  while (bytes >= 16) {
	    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
	    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
	    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
	    h5 += ((t4 >>>  1)) & 0x1fff;
	    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
	    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	    h9 += ((t7 >>> 5)) | hibit;

	    c = 0;

	    d0 = c;
	    d0 += h0 * r0;
	    d0 += h1 * (5 * r9);
	    d0 += h2 * (5 * r8);
	    d0 += h3 * (5 * r7);
	    d0 += h4 * (5 * r6);
	    c = (d0 >>> 13); d0 &= 0x1fff;
	    d0 += h5 * (5 * r5);
	    d0 += h6 * (5 * r4);
	    d0 += h7 * (5 * r3);
	    d0 += h8 * (5 * r2);
	    d0 += h9 * (5 * r1);
	    c += (d0 >>> 13); d0 &= 0x1fff;

	    d1 = c;
	    d1 += h0 * r1;
	    d1 += h1 * r0;
	    d1 += h2 * (5 * r9);
	    d1 += h3 * (5 * r8);
	    d1 += h4 * (5 * r7);
	    c = (d1 >>> 13); d1 &= 0x1fff;
	    d1 += h5 * (5 * r6);
	    d1 += h6 * (5 * r5);
	    d1 += h7 * (5 * r4);
	    d1 += h8 * (5 * r3);
	    d1 += h9 * (5 * r2);
	    c += (d1 >>> 13); d1 &= 0x1fff;

	    d2 = c;
	    d2 += h0 * r2;
	    d2 += h1 * r1;
	    d2 += h2 * r0;
	    d2 += h3 * (5 * r9);
	    d2 += h4 * (5 * r8);
	    c = (d2 >>> 13); d2 &= 0x1fff;
	    d2 += h5 * (5 * r7);
	    d2 += h6 * (5 * r6);
	    d2 += h7 * (5 * r5);
	    d2 += h8 * (5 * r4);
	    d2 += h9 * (5 * r3);
	    c += (d2 >>> 13); d2 &= 0x1fff;

	    d3 = c;
	    d3 += h0 * r3;
	    d3 += h1 * r2;
	    d3 += h2 * r1;
	    d3 += h3 * r0;
	    d3 += h4 * (5 * r9);
	    c = (d3 >>> 13); d3 &= 0x1fff;
	    d3 += h5 * (5 * r8);
	    d3 += h6 * (5 * r7);
	    d3 += h7 * (5 * r6);
	    d3 += h8 * (5 * r5);
	    d3 += h9 * (5 * r4);
	    c += (d3 >>> 13); d3 &= 0x1fff;

	    d4 = c;
	    d4 += h0 * r4;
	    d4 += h1 * r3;
	    d4 += h2 * r2;
	    d4 += h3 * r1;
	    d4 += h4 * r0;
	    c = (d4 >>> 13); d4 &= 0x1fff;
	    d4 += h5 * (5 * r9);
	    d4 += h6 * (5 * r8);
	    d4 += h7 * (5 * r7);
	    d4 += h8 * (5 * r6);
	    d4 += h9 * (5 * r5);
	    c += (d4 >>> 13); d4 &= 0x1fff;

	    d5 = c;
	    d5 += h0 * r5;
	    d5 += h1 * r4;
	    d5 += h2 * r3;
	    d5 += h3 * r2;
	    d5 += h4 * r1;
	    c = (d5 >>> 13); d5 &= 0x1fff;
	    d5 += h5 * r0;
	    d5 += h6 * (5 * r9);
	    d5 += h7 * (5 * r8);
	    d5 += h8 * (5 * r7);
	    d5 += h9 * (5 * r6);
	    c += (d5 >>> 13); d5 &= 0x1fff;

	    d6 = c;
	    d6 += h0 * r6;
	    d6 += h1 * r5;
	    d6 += h2 * r4;
	    d6 += h3 * r3;
	    d6 += h4 * r2;
	    c = (d6 >>> 13); d6 &= 0x1fff;
	    d6 += h5 * r1;
	    d6 += h6 * r0;
	    d6 += h7 * (5 * r9);
	    d6 += h8 * (5 * r8);
	    d6 += h9 * (5 * r7);
	    c += (d6 >>> 13); d6 &= 0x1fff;

	    d7 = c;
	    d7 += h0 * r7;
	    d7 += h1 * r6;
	    d7 += h2 * r5;
	    d7 += h3 * r4;
	    d7 += h4 * r3;
	    c = (d7 >>> 13); d7 &= 0x1fff;
	    d7 += h5 * r2;
	    d7 += h6 * r1;
	    d7 += h7 * r0;
	    d7 += h8 * (5 * r9);
	    d7 += h9 * (5 * r8);
	    c += (d7 >>> 13); d7 &= 0x1fff;

	    d8 = c;
	    d8 += h0 * r8;
	    d8 += h1 * r7;
	    d8 += h2 * r6;
	    d8 += h3 * r5;
	    d8 += h4 * r4;
	    c = (d8 >>> 13); d8 &= 0x1fff;
	    d8 += h5 * r3;
	    d8 += h6 * r2;
	    d8 += h7 * r1;
	    d8 += h8 * r0;
	    d8 += h9 * (5 * r9);
	    c += (d8 >>> 13); d8 &= 0x1fff;

	    d9 = c;
	    d9 += h0 * r9;
	    d9 += h1 * r8;
	    d9 += h2 * r7;
	    d9 += h3 * r6;
	    d9 += h4 * r5;
	    c = (d9 >>> 13); d9 &= 0x1fff;
	    d9 += h5 * r4;
	    d9 += h6 * r3;
	    d9 += h7 * r2;
	    d9 += h8 * r1;
	    d9 += h9 * r0;
	    c += (d9 >>> 13); d9 &= 0x1fff;

	    c = (((c << 2) + c)) | 0;
	    c = (c + d0) | 0;
	    d0 = c & 0x1fff;
	    c = (c >>> 13);
	    d1 += c;

	    h0 = d0;
	    h1 = d1;
	    h2 = d2;
	    h3 = d3;
	    h4 = d4;
	    h5 = d5;
	    h6 = d6;
	    h7 = d7;
	    h8 = d8;
	    h9 = d9;

	    mpos += 16;
	    bytes -= 16;
	  }
	  this.h[0] = h0;
	  this.h[1] = h1;
	  this.h[2] = h2;
	  this.h[3] = h3;
	  this.h[4] = h4;
	  this.h[5] = h5;
	  this.h[6] = h6;
	  this.h[7] = h7;
	  this.h[8] = h8;
	  this.h[9] = h9;
	};

	poly1305.prototype.finish = function(mac, macpos) {
	  var g = new Uint16Array(10);
	  var c, mask, f, i;

	  if (this.leftover) {
	    i = this.leftover;
	    this.buffer[i++] = 1;
	    for (; i < 16; i++) this.buffer[i] = 0;
	    this.fin = 1;
	    this.blocks(this.buffer, 0, 16);
	  }

	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  for (i = 2; i < 10; i++) {
	    this.h[i] += c;
	    c = this.h[i] >>> 13;
	    this.h[i] &= 0x1fff;
	  }
	  this.h[0] += (c * 5);
	  c = this.h[0] >>> 13;
	  this.h[0] &= 0x1fff;
	  this.h[1] += c;
	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  this.h[2] += c;

	  g[0] = this.h[0] + 5;
	  c = g[0] >>> 13;
	  g[0] &= 0x1fff;
	  for (i = 1; i < 10; i++) {
	    g[i] = this.h[i] + c;
	    c = g[i] >>> 13;
	    g[i] &= 0x1fff;
	  }
	  g[9] -= (1 << 13);

	  mask = (c ^ 1) - 1;
	  for (i = 0; i < 10; i++) g[i] &= mask;
	  mask = ~mask;
	  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

	  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
	  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
	  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
	  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
	  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
	  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
	  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
	  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

	  f = this.h[0] + this.pad[0];
	  this.h[0] = f & 0xffff;
	  for (i = 1; i < 8; i++) {
	    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
	    this.h[i] = f & 0xffff;
	  }

	  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
	  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
	  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
	  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
	  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
	  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
	  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
	  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
	  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
	  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
	  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
	  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
	  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
	  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
	  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
	  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
	};

	poly1305.prototype.update = function(m, mpos, bytes) {
	  var i, want;

	  if (this.leftover) {
	    want = (16 - this.leftover);
	    if (want > bytes)
	      want = bytes;
	    for (i = 0; i < want; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    bytes -= want;
	    mpos += want;
	    this.leftover += want;
	    if (this.leftover < 16)
	      return;
	    this.blocks(this.buffer, 0, 16);
	    this.leftover = 0;
	  }

	  if (bytes >= 16) {
	    want = bytes - (bytes % 16);
	    this.blocks(m, mpos, want);
	    mpos += want;
	    bytes -= want;
	  }

	  if (bytes) {
	    for (i = 0; i < bytes; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    this.leftover += bytes;
	  }
	};

	function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
	  var s = new poly1305(k);
	  s.update(m, mpos, n);
	  s.finish(out, outpos);
	  return 0;
	}

	function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
	  var x = new Uint8Array(16);
	  crypto_onetimeauth(x,0,m,mpos,n,k);
	  return crypto_verify_16(h,hpos,x,0);
	}

	function crypto_secretbox(c,m,d,n,k) {
	  var i;
	  if (d < 32) return -1;
	  crypto_stream_xor(c,0,m,0,d,n,k);
	  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
	  for (i = 0; i < 16; i++) c[i] = 0;
	  return 0;
	}

	function crypto_secretbox_open(m,c,d,n,k) {
	  var i;
	  var x = new Uint8Array(32);
	  if (d < 32) return -1;
	  crypto_stream(x,0,32,n,k);
	  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
	  crypto_stream_xor(m,0,c,0,d,n,k);
	  for (i = 0; i < 32; i++) m[i] = 0;
	  return 0;
	}

	function set25519(r, a) {
	  var i;
	  for (i = 0; i < 16; i++) r[i] = a[i]|0;
	}

	function car25519(o) {
	  var i, v, c = 1;
	  for (i = 0; i < 16; i++) {
	    v = o[i] + c + 65535;
	    c = Math.floor(v / 65536);
	    o[i] = v - c * 65536;
	  }
	  o[0] += c-1 + 37 * (c-1);
	}

	function sel25519(p, q, b) {
	  var t, c = ~(b-1);
	  for (var i = 0; i < 16; i++) {
	    t = c & (p[i] ^ q[i]);
	    p[i] ^= t;
	    q[i] ^= t;
	  }
	}

	function pack25519(o, n) {
	  var i, j, b;
	  var m = gf(), t = gf();
	  for (i = 0; i < 16; i++) t[i] = n[i];
	  car25519(t);
	  car25519(t);
	  car25519(t);
	  for (j = 0; j < 2; j++) {
	    m[0] = t[0] - 0xffed;
	    for (i = 1; i < 15; i++) {
	      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
	      m[i-1] &= 0xffff;
	    }
	    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
	    b = (m[15]>>16) & 1;
	    m[14] &= 0xffff;
	    sel25519(t, m, 1-b);
	  }
	  for (i = 0; i < 16; i++) {
	    o[2*i] = t[i] & 0xff;
	    o[2*i+1] = t[i]>>8;
	  }
	}

	function neq25519(a, b) {
	  var c = new Uint8Array(32), d = new Uint8Array(32);
	  pack25519(c, a);
	  pack25519(d, b);
	  return crypto_verify_32(c, 0, d, 0);
	}

	function par25519(a) {
	  var d = new Uint8Array(32);
	  pack25519(d, a);
	  return d[0] & 1;
	}

	function unpack25519(o, n) {
	  var i;
	  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
	  o[15] &= 0x7fff;
	}

	function A(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
	}

	function Z(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
	}

	function M(o, a, b) {
	  var v, c,
	     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
	     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
	    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
	    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
	    b0 = b[0],
	    b1 = b[1],
	    b2 = b[2],
	    b3 = b[3],
	    b4 = b[4],
	    b5 = b[5],
	    b6 = b[6],
	    b7 = b[7],
	    b8 = b[8],
	    b9 = b[9],
	    b10 = b[10],
	    b11 = b[11],
	    b12 = b[12],
	    b13 = b[13],
	    b14 = b[14],
	    b15 = b[15];

	  v = a[0];
	  t0 += v * b0;
	  t1 += v * b1;
	  t2 += v * b2;
	  t3 += v * b3;
	  t4 += v * b4;
	  t5 += v * b5;
	  t6 += v * b6;
	  t7 += v * b7;
	  t8 += v * b8;
	  t9 += v * b9;
	  t10 += v * b10;
	  t11 += v * b11;
	  t12 += v * b12;
	  t13 += v * b13;
	  t14 += v * b14;
	  t15 += v * b15;
	  v = a[1];
	  t1 += v * b0;
	  t2 += v * b1;
	  t3 += v * b2;
	  t4 += v * b3;
	  t5 += v * b4;
	  t6 += v * b5;
	  t7 += v * b6;
	  t8 += v * b7;
	  t9 += v * b8;
	  t10 += v * b9;
	  t11 += v * b10;
	  t12 += v * b11;
	  t13 += v * b12;
	  t14 += v * b13;
	  t15 += v * b14;
	  t16 += v * b15;
	  v = a[2];
	  t2 += v * b0;
	  t3 += v * b1;
	  t4 += v * b2;
	  t5 += v * b3;
	  t6 += v * b4;
	  t7 += v * b5;
	  t8 += v * b6;
	  t9 += v * b7;
	  t10 += v * b8;
	  t11 += v * b9;
	  t12 += v * b10;
	  t13 += v * b11;
	  t14 += v * b12;
	  t15 += v * b13;
	  t16 += v * b14;
	  t17 += v * b15;
	  v = a[3];
	  t3 += v * b0;
	  t4 += v * b1;
	  t5 += v * b2;
	  t6 += v * b3;
	  t7 += v * b4;
	  t8 += v * b5;
	  t9 += v * b6;
	  t10 += v * b7;
	  t11 += v * b8;
	  t12 += v * b9;
	  t13 += v * b10;
	  t14 += v * b11;
	  t15 += v * b12;
	  t16 += v * b13;
	  t17 += v * b14;
	  t18 += v * b15;
	  v = a[4];
	  t4 += v * b0;
	  t5 += v * b1;
	  t6 += v * b2;
	  t7 += v * b3;
	  t8 += v * b4;
	  t9 += v * b5;
	  t10 += v * b6;
	  t11 += v * b7;
	  t12 += v * b8;
	  t13 += v * b9;
	  t14 += v * b10;
	  t15 += v * b11;
	  t16 += v * b12;
	  t17 += v * b13;
	  t18 += v * b14;
	  t19 += v * b15;
	  v = a[5];
	  t5 += v * b0;
	  t6 += v * b1;
	  t7 += v * b2;
	  t8 += v * b3;
	  t9 += v * b4;
	  t10 += v * b5;
	  t11 += v * b6;
	  t12 += v * b7;
	  t13 += v * b8;
	  t14 += v * b9;
	  t15 += v * b10;
	  t16 += v * b11;
	  t17 += v * b12;
	  t18 += v * b13;
	  t19 += v * b14;
	  t20 += v * b15;
	  v = a[6];
	  t6 += v * b0;
	  t7 += v * b1;
	  t8 += v * b2;
	  t9 += v * b3;
	  t10 += v * b4;
	  t11 += v * b5;
	  t12 += v * b6;
	  t13 += v * b7;
	  t14 += v * b8;
	  t15 += v * b9;
	  t16 += v * b10;
	  t17 += v * b11;
	  t18 += v * b12;
	  t19 += v * b13;
	  t20 += v * b14;
	  t21 += v * b15;
	  v = a[7];
	  t7 += v * b0;
	  t8 += v * b1;
	  t9 += v * b2;
	  t10 += v * b3;
	  t11 += v * b4;
	  t12 += v * b5;
	  t13 += v * b6;
	  t14 += v * b7;
	  t15 += v * b8;
	  t16 += v * b9;
	  t17 += v * b10;
	  t18 += v * b11;
	  t19 += v * b12;
	  t20 += v * b13;
	  t21 += v * b14;
	  t22 += v * b15;
	  v = a[8];
	  t8 += v * b0;
	  t9 += v * b1;
	  t10 += v * b2;
	  t11 += v * b3;
	  t12 += v * b4;
	  t13 += v * b5;
	  t14 += v * b6;
	  t15 += v * b7;
	  t16 += v * b8;
	  t17 += v * b9;
	  t18 += v * b10;
	  t19 += v * b11;
	  t20 += v * b12;
	  t21 += v * b13;
	  t22 += v * b14;
	  t23 += v * b15;
	  v = a[9];
	  t9 += v * b0;
	  t10 += v * b1;
	  t11 += v * b2;
	  t12 += v * b3;
	  t13 += v * b4;
	  t14 += v * b5;
	  t15 += v * b6;
	  t16 += v * b7;
	  t17 += v * b8;
	  t18 += v * b9;
	  t19 += v * b10;
	  t20 += v * b11;
	  t21 += v * b12;
	  t22 += v * b13;
	  t23 += v * b14;
	  t24 += v * b15;
	  v = a[10];
	  t10 += v * b0;
	  t11 += v * b1;
	  t12 += v * b2;
	  t13 += v * b3;
	  t14 += v * b4;
	  t15 += v * b5;
	  t16 += v * b6;
	  t17 += v * b7;
	  t18 += v * b8;
	  t19 += v * b9;
	  t20 += v * b10;
	  t21 += v * b11;
	  t22 += v * b12;
	  t23 += v * b13;
	  t24 += v * b14;
	  t25 += v * b15;
	  v = a[11];
	  t11 += v * b0;
	  t12 += v * b1;
	  t13 += v * b2;
	  t14 += v * b3;
	  t15 += v * b4;
	  t16 += v * b5;
	  t17 += v * b6;
	  t18 += v * b7;
	  t19 += v * b8;
	  t20 += v * b9;
	  t21 += v * b10;
	  t22 += v * b11;
	  t23 += v * b12;
	  t24 += v * b13;
	  t25 += v * b14;
	  t26 += v * b15;
	  v = a[12];
	  t12 += v * b0;
	  t13 += v * b1;
	  t14 += v * b2;
	  t15 += v * b3;
	  t16 += v * b4;
	  t17 += v * b5;
	  t18 += v * b6;
	  t19 += v * b7;
	  t20 += v * b8;
	  t21 += v * b9;
	  t22 += v * b10;
	  t23 += v * b11;
	  t24 += v * b12;
	  t25 += v * b13;
	  t26 += v * b14;
	  t27 += v * b15;
	  v = a[13];
	  t13 += v * b0;
	  t14 += v * b1;
	  t15 += v * b2;
	  t16 += v * b3;
	  t17 += v * b4;
	  t18 += v * b5;
	  t19 += v * b6;
	  t20 += v * b7;
	  t21 += v * b8;
	  t22 += v * b9;
	  t23 += v * b10;
	  t24 += v * b11;
	  t25 += v * b12;
	  t26 += v * b13;
	  t27 += v * b14;
	  t28 += v * b15;
	  v = a[14];
	  t14 += v * b0;
	  t15 += v * b1;
	  t16 += v * b2;
	  t17 += v * b3;
	  t18 += v * b4;
	  t19 += v * b5;
	  t20 += v * b6;
	  t21 += v * b7;
	  t22 += v * b8;
	  t23 += v * b9;
	  t24 += v * b10;
	  t25 += v * b11;
	  t26 += v * b12;
	  t27 += v * b13;
	  t28 += v * b14;
	  t29 += v * b15;
	  v = a[15];
	  t15 += v * b0;
	  t16 += v * b1;
	  t17 += v * b2;
	  t18 += v * b3;
	  t19 += v * b4;
	  t20 += v * b5;
	  t21 += v * b6;
	  t22 += v * b7;
	  t23 += v * b8;
	  t24 += v * b9;
	  t25 += v * b10;
	  t26 += v * b11;
	  t27 += v * b12;
	  t28 += v * b13;
	  t29 += v * b14;
	  t30 += v * b15;

	  t0  += 38 * t16;
	  t1  += 38 * t17;
	  t2  += 38 * t18;
	  t3  += 38 * t19;
	  t4  += 38 * t20;
	  t5  += 38 * t21;
	  t6  += 38 * t22;
	  t7  += 38 * t23;
	  t8  += 38 * t24;
	  t9  += 38 * t25;
	  t10 += 38 * t26;
	  t11 += 38 * t27;
	  t12 += 38 * t28;
	  t13 += 38 * t29;
	  t14 += 38 * t30;
	  // t15 left as is

	  // first car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  // second car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  o[ 0] = t0;
	  o[ 1] = t1;
	  o[ 2] = t2;
	  o[ 3] = t3;
	  o[ 4] = t4;
	  o[ 5] = t5;
	  o[ 6] = t6;
	  o[ 7] = t7;
	  o[ 8] = t8;
	  o[ 9] = t9;
	  o[10] = t10;
	  o[11] = t11;
	  o[12] = t12;
	  o[13] = t13;
	  o[14] = t14;
	  o[15] = t15;
	}

	function S(o, a) {
	  M(o, a, a);
	}

	function inv25519(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 253; a >= 0; a--) {
	    S(c, c);
	    if(a !== 2 && a !== 4) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function pow2523(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 250; a >= 0; a--) {
	      S(c, c);
	      if(a !== 1) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function crypto_scalarmult(q, n, p) {
	  var z = new Uint8Array(32);
	  var x = new Float64Array(80), r, i;
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf();
	  for (i = 0; i < 31; i++) z[i] = n[i];
	  z[31]=(n[31]&127)|64;
	  z[0]&=248;
	  unpack25519(x,p);
	  for (i = 0; i < 16; i++) {
	    b[i]=x[i];
	    d[i]=a[i]=c[i]=0;
	  }
	  a[0]=d[0]=1;
	  for (i=254; i>=0; --i) {
	    r=(z[i>>>3]>>>(i&7))&1;
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	    A(e,a,c);
	    Z(a,a,c);
	    A(c,b,d);
	    Z(b,b,d);
	    S(d,e);
	    S(f,a);
	    M(a,c,a);
	    M(c,b,e);
	    A(e,a,c);
	    Z(a,a,c);
	    S(b,a);
	    Z(c,d,f);
	    M(a,c,_121665);
	    A(a,a,d);
	    M(c,c,a);
	    M(a,d,f);
	    M(d,b,x);
	    S(b,e);
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	  }
	  for (i = 0; i < 16; i++) {
	    x[i+16]=a[i];
	    x[i+32]=c[i];
	    x[i+48]=b[i];
	    x[i+64]=d[i];
	  }
	  var x32 = x.subarray(32);
	  var x16 = x.subarray(16);
	  inv25519(x32,x32);
	  M(x16,x16,x32);
	  pack25519(q,x16);
	  return 0;
	}

	function crypto_scalarmult_base(q, n) {
	  return crypto_scalarmult(q, n, _9);
	}

	function crypto_box_keypair(y, x) {
	  randombytes(x, 32);
	  return crypto_scalarmult_base(y, x);
	}

	function crypto_box_beforenm(k, y, x) {
	  var s = new Uint8Array(32);
	  crypto_scalarmult(s, x, y);
	  return crypto_core_hsalsa20(k, _0, s, sigma);
	}

	var crypto_box_afternm = crypto_secretbox;
	var crypto_box_open_afternm = crypto_secretbox_open;

	function crypto_box(c, m, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_afternm(c, m, d, n, k);
	}

	function crypto_box_open(m, c, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_open_afternm(m, c, d, n, k);
	}

	var K = [
	  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	];

	function crypto_hashblocks_hl(hh, hl, m, n) {
	  var wh = new Int32Array(16), wl = new Int32Array(16),
	      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
	      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
	      th, tl, i, j, h, l, a, b, c, d;

	  var ah0 = hh[0],
	      ah1 = hh[1],
	      ah2 = hh[2],
	      ah3 = hh[3],
	      ah4 = hh[4],
	      ah5 = hh[5],
	      ah6 = hh[6],
	      ah7 = hh[7],

	      al0 = hl[0],
	      al1 = hl[1],
	      al2 = hl[2],
	      al3 = hl[3],
	      al4 = hl[4],
	      al5 = hl[5],
	      al6 = hl[6],
	      al7 = hl[7];

	  var pos = 0;
	  while (n >= 128) {
	    for (i = 0; i < 16; i++) {
	      j = 8 * i + pos;
	      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
	      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
	    }
	    for (i = 0; i < 80; i++) {
	      bh0 = ah0;
	      bh1 = ah1;
	      bh2 = ah2;
	      bh3 = ah3;
	      bh4 = ah4;
	      bh5 = ah5;
	      bh6 = ah6;
	      bh7 = ah7;

	      bl0 = al0;
	      bl1 = al1;
	      bl2 = al2;
	      bl3 = al3;
	      bl4 = al4;
	      bl5 = al5;
	      bl6 = al6;
	      bl7 = al7;

	      // add
	      h = ah7;
	      l = al7;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma1
	      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
	      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Ch
	      h = (ah4 & ah5) ^ (~ah4 & ah6);
	      l = (al4 & al5) ^ (~al4 & al6);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // K
	      h = K[i*2];
	      l = K[i*2+1];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // w
	      h = wh[i%16];
	      l = wl[i%16];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      th = c & 0xffff | d << 16;
	      tl = a & 0xffff | b << 16;

	      // add
	      h = th;
	      l = tl;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma0
	      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
	      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Maj
	      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
	      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh7 = (c & 0xffff) | (d << 16);
	      bl7 = (a & 0xffff) | (b << 16);

	      // add
	      h = bh3;
	      l = bl3;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      h = th;
	      l = tl;

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh3 = (c & 0xffff) | (d << 16);
	      bl3 = (a & 0xffff) | (b << 16);

	      ah1 = bh0;
	      ah2 = bh1;
	      ah3 = bh2;
	      ah4 = bh3;
	      ah5 = bh4;
	      ah6 = bh5;
	      ah7 = bh6;
	      ah0 = bh7;

	      al1 = bl0;
	      al2 = bl1;
	      al3 = bl2;
	      al4 = bl3;
	      al5 = bl4;
	      al6 = bl5;
	      al7 = bl6;
	      al0 = bl7;

	      if (i%16 === 15) {
	        for (j = 0; j < 16; j++) {
	          // add
	          h = wh[j];
	          l = wl[j];

	          a = l & 0xffff; b = l >>> 16;
	          c = h & 0xffff; d = h >>> 16;

	          h = wh[(j+9)%16];
	          l = wl[(j+9)%16];

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma0
	          th = wh[(j+1)%16];
	          tl = wl[(j+1)%16];
	          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
	          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma1
	          th = wh[(j+14)%16];
	          tl = wl[(j+14)%16];
	          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
	          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          b += a >>> 16;
	          c += b >>> 16;
	          d += c >>> 16;

	          wh[j] = (c & 0xffff) | (d << 16);
	          wl[j] = (a & 0xffff) | (b << 16);
	        }
	      }
	    }

	    // add
	    h = ah0;
	    l = al0;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[0];
	    l = hl[0];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[0] = ah0 = (c & 0xffff) | (d << 16);
	    hl[0] = al0 = (a & 0xffff) | (b << 16);

	    h = ah1;
	    l = al1;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[1];
	    l = hl[1];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[1] = ah1 = (c & 0xffff) | (d << 16);
	    hl[1] = al1 = (a & 0xffff) | (b << 16);

	    h = ah2;
	    l = al2;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[2];
	    l = hl[2];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[2] = ah2 = (c & 0xffff) | (d << 16);
	    hl[2] = al2 = (a & 0xffff) | (b << 16);

	    h = ah3;
	    l = al3;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[3];
	    l = hl[3];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[3] = ah3 = (c & 0xffff) | (d << 16);
	    hl[3] = al3 = (a & 0xffff) | (b << 16);

	    h = ah4;
	    l = al4;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[4];
	    l = hl[4];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[4] = ah4 = (c & 0xffff) | (d << 16);
	    hl[4] = al4 = (a & 0xffff) | (b << 16);

	    h = ah5;
	    l = al5;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[5];
	    l = hl[5];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[5] = ah5 = (c & 0xffff) | (d << 16);
	    hl[5] = al5 = (a & 0xffff) | (b << 16);

	    h = ah6;
	    l = al6;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[6];
	    l = hl[6];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[6] = ah6 = (c & 0xffff) | (d << 16);
	    hl[6] = al6 = (a & 0xffff) | (b << 16);

	    h = ah7;
	    l = al7;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[7];
	    l = hl[7];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[7] = ah7 = (c & 0xffff) | (d << 16);
	    hl[7] = al7 = (a & 0xffff) | (b << 16);

	    pos += 128;
	    n -= 128;
	  }

	  return n;
	}

	function crypto_hash(out, m, n) {
	  var hh = new Int32Array(8),
	      hl = new Int32Array(8),
	      x = new Uint8Array(256),
	      i, b = n;

	  hh[0] = 0x6a09e667;
	  hh[1] = 0xbb67ae85;
	  hh[2] = 0x3c6ef372;
	  hh[3] = 0xa54ff53a;
	  hh[4] = 0x510e527f;
	  hh[5] = 0x9b05688c;
	  hh[6] = 0x1f83d9ab;
	  hh[7] = 0x5be0cd19;

	  hl[0] = 0xf3bcc908;
	  hl[1] = 0x84caa73b;
	  hl[2] = 0xfe94f82b;
	  hl[3] = 0x5f1d36f1;
	  hl[4] = 0xade682d1;
	  hl[5] = 0x2b3e6c1f;
	  hl[6] = 0xfb41bd6b;
	  hl[7] = 0x137e2179;

	  crypto_hashblocks_hl(hh, hl, m, n);
	  n %= 128;

	  for (i = 0; i < n; i++) x[i] = m[b-n+i];
	  x[n] = 128;

	  n = 256-128*(n<112?1:0);
	  x[n-9] = 0;
	  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
	  crypto_hashblocks_hl(hh, hl, x, n);

	  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

	  return 0;
	}

	function add(p, q) {
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf(),
	      g = gf(), h = gf(), t = gf();

	  Z(a, p[1], p[0]);
	  Z(t, q[1], q[0]);
	  M(a, a, t);
	  A(b, p[0], p[1]);
	  A(t, q[0], q[1]);
	  M(b, b, t);
	  M(c, p[3], q[3]);
	  M(c, c, D2);
	  M(d, p[2], q[2]);
	  A(d, d, d);
	  Z(e, b, a);
	  Z(f, d, c);
	  A(g, d, c);
	  A(h, b, a);

	  M(p[0], e, f);
	  M(p[1], h, g);
	  M(p[2], g, f);
	  M(p[3], e, h);
	}

	function cswap(p, q, b) {
	  var i;
	  for (i = 0; i < 4; i++) {
	    sel25519(p[i], q[i], b);
	  }
	}

	function pack(r, p) {
	  var tx = gf(), ty = gf(), zi = gf();
	  inv25519(zi, p[2]);
	  M(tx, p[0], zi);
	  M(ty, p[1], zi);
	  pack25519(r, ty);
	  r[31] ^= par25519(tx) << 7;
	}

	function scalarmult(p, q, s) {
	  var b, i;
	  set25519(p[0], gf0);
	  set25519(p[1], gf1);
	  set25519(p[2], gf1);
	  set25519(p[3], gf0);
	  for (i = 255; i >= 0; --i) {
	    b = (s[(i/8)|0] >> (i&7)) & 1;
	    cswap(p, q, b);
	    add(q, p);
	    add(p, p);
	    cswap(p, q, b);
	  }
	}

	function scalarbase(p, s) {
	  var q = [gf(), gf(), gf(), gf()];
	  set25519(q[0], X);
	  set25519(q[1], Y);
	  set25519(q[2], gf1);
	  M(q[3], X, Y);
	  scalarmult(p, q, s);
	}

	function crypto_sign_keypair(pk, sk, seeded) {
	  var d = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()];
	  var i;

	  if (!seeded) randombytes(sk, 32);
	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  scalarbase(p, d);
	  pack(pk, p);

	  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
	  return 0;
	}

	var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

	function modL(r, x) {
	  var carry, i, j, k;
	  for (i = 63; i >= 32; --i) {
	    carry = 0;
	    for (j = i - 32, k = i - 12; j < k; ++j) {
	      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
	      carry = Math.floor((x[j] + 128) / 256);
	      x[j] -= carry * 256;
	    }
	    x[j] += carry;
	    x[i] = 0;
	  }
	  carry = 0;
	  for (j = 0; j < 32; j++) {
	    x[j] += carry - (x[31] >> 4) * L[j];
	    carry = x[j] >> 8;
	    x[j] &= 255;
	  }
	  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
	  for (i = 0; i < 32; i++) {
	    x[i+1] += x[i] >> 8;
	    r[i] = x[i] & 255;
	  }
	}

	function reduce(r) {
	  var x = new Float64Array(64), i;
	  for (i = 0; i < 64; i++) x[i] = r[i];
	  for (i = 0; i < 64; i++) r[i] = 0;
	  modL(r, x);
	}

	// Note: difference from C - smlen returned, not passed as argument.
	function crypto_sign(sm, m, n, sk) {
	  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
	  var i, j, x = new Float64Array(64);
	  var p = [gf(), gf(), gf(), gf()];

	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  var smlen = n + 64;
	  for (i = 0; i < n; i++) sm[64 + i] = m[i];
	  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

	  crypto_hash(r, sm.subarray(32), n+32);
	  reduce(r);
	  scalarbase(p, r);
	  pack(sm, p);

	  for (i = 32; i < 64; i++) sm[i] = sk[i];
	  crypto_hash(h, sm, n + 64);
	  reduce(h);

	  for (i = 0; i < 64; i++) x[i] = 0;
	  for (i = 0; i < 32; i++) x[i] = r[i];
	  for (i = 0; i < 32; i++) {
	    for (j = 0; j < 32; j++) {
	      x[i+j] += h[i] * d[j];
	    }
	  }

	  modL(sm.subarray(32), x);
	  return smlen;
	}

	function unpackneg(r, p) {
	  var t = gf(), chk = gf(), num = gf(),
	      den = gf(), den2 = gf(), den4 = gf(),
	      den6 = gf();

	  set25519(r[2], gf1);
	  unpack25519(r[1], p);
	  S(num, r[1]);
	  M(den, num, D);
	  Z(num, num, r[2]);
	  A(den, r[2], den);

	  S(den2, den);
	  S(den4, den2);
	  M(den6, den4, den2);
	  M(t, den6, num);
	  M(t, t, den);

	  pow2523(t, t);
	  M(t, t, num);
	  M(t, t, den);
	  M(t, t, den);
	  M(r[0], t, den);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) M(r[0], r[0], I);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) return -1;

	  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

	  M(r[3], r[0], r[1]);
	  return 0;
	}

	function crypto_sign_open(m, sm, n, pk) {
	  var i;
	  var t = new Uint8Array(32), h = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()],
	      q = [gf(), gf(), gf(), gf()];

	  if (n < 64) return -1;

	  if (unpackneg(q, pk)) return -1;

	  for (i = 0; i < n; i++) m[i] = sm[i];
	  for (i = 0; i < 32; i++) m[i+32] = pk[i];
	  crypto_hash(h, m, n);
	  reduce(h);
	  scalarmult(p, q, h);

	  scalarbase(q, sm.subarray(32));
	  add(p, q);
	  pack(t, p);

	  n -= 64;
	  if (crypto_verify_32(sm, 0, t, 0)) {
	    for (i = 0; i < n; i++) m[i] = 0;
	    return -1;
	  }

	  for (i = 0; i < n; i++) m[i] = sm[i + 64];
	  return n;
	}

	var crypto_secretbox_KEYBYTES = 32,
	    crypto_secretbox_NONCEBYTES = 24,
	    crypto_secretbox_ZEROBYTES = 32,
	    crypto_secretbox_BOXZEROBYTES = 16,
	    crypto_scalarmult_BYTES = 32,
	    crypto_scalarmult_SCALARBYTES = 32,
	    crypto_box_PUBLICKEYBYTES = 32,
	    crypto_box_SECRETKEYBYTES = 32,
	    crypto_box_BEFORENMBYTES = 32,
	    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
	    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
	    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
	    crypto_sign_BYTES = 64,
	    crypto_sign_PUBLICKEYBYTES = 32,
	    crypto_sign_SECRETKEYBYTES = 64,
	    crypto_sign_SEEDBYTES = 32,
	    crypto_hash_BYTES = 64;

	nacl.lowlevel = {
	  crypto_core_hsalsa20: crypto_core_hsalsa20,
	  crypto_stream_xor: crypto_stream_xor,
	  crypto_stream: crypto_stream,
	  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
	  crypto_stream_salsa20: crypto_stream_salsa20,
	  crypto_onetimeauth: crypto_onetimeauth,
	  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
	  crypto_verify_16: crypto_verify_16,
	  crypto_verify_32: crypto_verify_32,
	  crypto_secretbox: crypto_secretbox,
	  crypto_secretbox_open: crypto_secretbox_open,
	  crypto_scalarmult: crypto_scalarmult,
	  crypto_scalarmult_base: crypto_scalarmult_base,
	  crypto_box_beforenm: crypto_box_beforenm,
	  crypto_box_afternm: crypto_box_afternm,
	  crypto_box: crypto_box,
	  crypto_box_open: crypto_box_open,
	  crypto_box_keypair: crypto_box_keypair,
	  crypto_hash: crypto_hash,
	  crypto_sign: crypto_sign,
	  crypto_sign_keypair: crypto_sign_keypair,
	  crypto_sign_open: crypto_sign_open,

	  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
	  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
	  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
	  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
	  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
	  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
	  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
	  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
	  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
	  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
	  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
	  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
	  crypto_sign_BYTES: crypto_sign_BYTES,
	  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
	  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
	  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
	  crypto_hash_BYTES: crypto_hash_BYTES,

	  gf: gf,
	  D: D,
	  L: L,
	  pack25519: pack25519,
	  unpack25519: unpack25519,
	  M: M,
	  A: A,
	  S: S,
	  Z: Z,
	  pow2523: pow2523,
	  add: add,
	  set25519: set25519,
	  modL: modL,
	  scalarmult: scalarmult,
	  scalarbase: scalarbase,
	};

	/* High-level API */

	function checkLengths(k, n) {
	  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
	  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
	}

	function checkBoxLengths(pk, sk) {
	  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
	  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
	}

	function checkArrayTypes() {
	  for (var i = 0; i < arguments.length; i++) {
	    if (!(arguments[i] instanceof Uint8Array))
	      throw new TypeError('unexpected type, use Uint8Array');
	  }
	}

	function cleanup(arr) {
	  for (var i = 0; i < arr.length; i++) arr[i] = 0;
	}

	nacl.randomBytes = function(n) {
	  var b = new Uint8Array(n);
	  randombytes(b, n);
	  return b;
	};

	nacl.secretbox = function(msg, nonce, key) {
	  checkArrayTypes(msg, nonce, key);
	  checkLengths(key, nonce);
	  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
	  var c = new Uint8Array(m.length);
	  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
	  crypto_secretbox(c, m, m.length, nonce, key);
	  return c.subarray(crypto_secretbox_BOXZEROBYTES);
	};

	nacl.secretbox.open = function(box, nonce, key) {
	  checkArrayTypes(box, nonce, key);
	  checkLengths(key, nonce);
	  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
	  var m = new Uint8Array(c.length);
	  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
	  if (c.length < 32) return null;
	  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
	  return m.subarray(crypto_secretbox_ZEROBYTES);
	};

	nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
	nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
	nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

	nacl.scalarMult = function(n, p) {
	  checkArrayTypes(n, p);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult(q, n, p);
	  return q;
	};

	nacl.scalarMult.base = function(n) {
	  checkArrayTypes(n);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult_base(q, n);
	  return q;
	};

	nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
	nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

	nacl.box = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox(msg, nonce, k);
	};

	nacl.box.before = function(publicKey, secretKey) {
	  checkArrayTypes(publicKey, secretKey);
	  checkBoxLengths(publicKey, secretKey);
	  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
	  crypto_box_beforenm(k, publicKey, secretKey);
	  return k;
	};

	nacl.box.after = nacl.secretbox;

	nacl.box.open = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox.open(msg, nonce, k);
	};

	nacl.box.open.after = nacl.secretbox.open;

	nacl.box.keyPair = function() {
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
	  crypto_box_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.box.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  crypto_scalarmult_base(pk, secretKey);
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
	nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
	nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
	nacl.box.nonceLength = crypto_box_NONCEBYTES;
	nacl.box.overheadLength = nacl.secretbox.overheadLength;

	nacl.sign = function(msg, secretKey) {
	  checkArrayTypes(msg, secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
	  crypto_sign(signedMsg, msg, msg.length, secretKey);
	  return signedMsg;
	};

	nacl.sign.open = function(signedMsg, publicKey) {
	  checkArrayTypes(signedMsg, publicKey);
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var tmp = new Uint8Array(signedMsg.length);
	  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
	  if (mlen < 0) return null;
	  var m = new Uint8Array(mlen);
	  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
	  return m;
	};

	nacl.sign.detached = function(msg, secretKey) {
	  var signedMsg = nacl.sign(msg, secretKey);
	  var sig = new Uint8Array(crypto_sign_BYTES);
	  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
	  return sig;
	};

	nacl.sign.detached.verify = function(msg, sig, publicKey) {
	  checkArrayTypes(msg, sig, publicKey);
	  if (sig.length !== crypto_sign_BYTES)
	    throw new Error('bad signature size');
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var i;
	  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
	  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
	  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
	};

	nacl.sign.keyPair = function() {
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  crypto_sign_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.sign.keyPair.fromSeed = function(seed) {
	  checkArrayTypes(seed);
	  if (seed.length !== crypto_sign_SEEDBYTES)
	    throw new Error('bad seed size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  for (var i = 0; i < 32; i++) sk[i] = seed[i];
	  crypto_sign_keypair(pk, sk, true);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
	nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
	nacl.sign.seedLength = crypto_sign_SEEDBYTES;
	nacl.sign.signatureLength = crypto_sign_BYTES;

	nacl.hash = function(msg) {
	  checkArrayTypes(msg);
	  var h = new Uint8Array(crypto_hash_BYTES);
	  crypto_hash(h, msg, msg.length);
	  return h;
	};

	nacl.hash.hashLength = crypto_hash_BYTES;

	nacl.verify = function(x, y) {
	  checkArrayTypes(x, y);
	  // Zero length arguments are considered not equal.
	  if (x.length === 0 || y.length === 0) return false;
	  if (x.length !== y.length) return false;
	  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
	};

	nacl.setPRNG = function(fn) {
	  randombytes = fn;
	};

	(function() {
	  // Initialize PRNG if environment provides CSPRNG.
	  // If not, methods calling randombytes will throw.
	  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
	  if (crypto && crypto.getRandomValues) {
	    // Browsers.
	    var QUOTA = 65536;
	    nacl.setPRNG(function(x, n) {
	      var i, v = new Uint8Array(n);
	      for (i = 0; i < n; i += QUOTA) {
	        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
	      }
	      for (i = 0; i < n; i++) x[i] = v[i];
	      cleanup(v);
	    });
	  } else if (typeof commonjsRequire !== 'undefined') {
	    // Node.js.
	    crypto = require$$0;
	    if (crypto && crypto.randomBytes) {
	      nacl.setPRNG(function(x, n) {
	        var i, v = crypto.randomBytes(n);
	        for (i = 0; i < n; i++) x[i] = v[i];
	        cleanup(v);
	      });
	    }
	  }
	})();

	})(module.exports ? module.exports : (self.nacl = self.nacl || {})); 
} (naclFast));

var naclFastExports = naclFast.exports;

const BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function bufferToHex(buffer) {
  return Buffer.from(buffer).toString("hex");
}
function bufferToBase64(buffer) {
  return Buffer.from(buffer).toString("base64");
}
function base58Encode(buffer) {
  if (buffer.length === 0) return "";
  let num = BigInt("0x" + buffer.toString("hex"));
  let encoded = "";
  while (num > 0n) {
    const remainder = num % 58n;
    num = num / 58n;
    encoded = BASE58_ALPHABET[Number(remainder)] + encoded;
  }
  for (let i = 0; i < buffer.length && buffer[i] === 0; i++) {
    encoded = "1" + encoded;
  }
  return encoded;
}
async function createOctraAddress(publicKey) {
  const hash = Buffer.from(
    await crypto.subtle.digest("SHA-256", publicKey)
  );
  const base58Hash = base58Encode(hash);
  return "oct" + base58Hash;
}
async function deriveMasterKey(seed) {
  const key = Buffer.from("Octra seed", "utf8");
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-512" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", cryptoKey, seed);
  const macBuffer = Buffer.from(mac);
  return {
    masterPrivateKey: macBuffer.slice(0, 32),
    masterChainCode: macBuffer.slice(32, 64)
  };
}
function generateMnemonic() {
  return generateMnemonic_1();
}
function validateMnemonic(mnemonic) {
  return validateMnemonic_1(mnemonic);
}
function mnemonicToSeed(mnemonic) {
  return mnemonicToSeedSync_1(mnemonic);
}
async function generateWalletFromMnemonic(mnemonic) {
  if (!validateMnemonic(mnemonic)) {
    throw new Error("Invalid mnemonic phrase");
  }
  const seed = mnemonicToSeed(mnemonic);
  const { masterPrivateKey } = await deriveMasterKey(seed);
  const keyPair = naclFastExports.sign.keyPair.fromSeed(masterPrivateKey);
  const privateKey = Buffer.from(keyPair.secretKey.slice(0, 32));
  const publicKey = Buffer.from(keyPair.publicKey);
  const address = await createOctraAddress(publicKey);
  return {
    mnemonic,
    privateKey: bufferToBase64(privateKey),
    publicKey: bufferToHex(publicKey),
    address,
    balance: 0,
    nonce: 0
  };
}

async function generateWallet() {
  const mnemonic = generateMnemonic();
  const walletData = await generateWalletFromMnemonic(mnemonic);
  return {
    address: walletData.address,
    privateKey: walletData.privateKey,
    mnemonic: walletData.mnemonic,
    publicKey: walletData.publicKey
  };
}
async function importWalletFromPrivateKey(privateKey) {
  let cleanKey = privateKey.trim();
  let keyBuffer;
  if (cleanKey.startsWith("0x")) {
    cleanKey = cleanKey.slice(2);
    if (cleanKey.length !== 64) {
      throw new Error("Invalid private key length");
    }
    keyBuffer = Buffer.from(cleanKey, "hex");
  } else {
    try {
      keyBuffer = Buffer.from(cleanKey, "base64");
      if (keyBuffer.length !== 32) {
        throw new Error("Invalid private key length");
      }
    } catch (error) {
      throw new Error("Invalid private key format");
    }
  }
  const keyPair = naclFastExports.sign.keyPair.fromSeed(keyBuffer);
  const publicKey = Buffer.from(keyPair.publicKey);
  const address = await createOctraAddress(publicKey);
  return {
    address,
    privateKey: bufferToBase64(keyBuffer),
    publicKey: bufferToHex(publicKey)
  };
}
async function importWalletFromMnemonic(mnemonic) {
  const words = mnemonic.trim().split(/\s+/);
  if (words.length !== 12 && words.length !== 24) {
    throw new Error("Invalid mnemonic length. Must be 12 or 24 words.");
  }
  if (!validateMnemonic(mnemonic)) {
    throw new Error("Invalid mnemonic phrase");
  }
  const walletData = await generateWalletFromMnemonic(mnemonic);
  return {
    address: walletData.address,
    privateKey: walletData.privateKey,
    mnemonic: walletData.mnemonic,
    publicKey: walletData.publicKey
  };
}

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = reactExports.useState(memoryState);
  reactExports.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

function GenerateWallet({ onWalletGenerated }) {
  const [generatedWallet, setGeneratedWallet] = reactExports.useState(null);
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [hasBackedUp, setHasBackedUp] = reactExports.useState(false);
  const { toast } = useToast();
  const handleGenerateWallet = async () => {
    setIsGenerating(true);
    try {
      const wallet = await generateWallet();
      setGeneratedWallet(wallet);
      setHasBackedUp(false);
      toast({
        title: "Wallet Generated!",
        description: "Please backup your wallet information securely"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate wallet",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };
  const handleSaveWallet = () => {
    if (!generatedWallet) return;
    if (!hasBackedUp) {
      toast({
        title: "Backup Required",
        description: "Please confirm that you have backed up your wallet information",
        variant: "destructive"
      });
      return;
    }
    onWalletGenerated(generatedWallet);
  };
  if (!generatedWallet) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Make sure to backup your wallet information securely. Loss of private key or mnemonic phrase will result in permanent loss of funds." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleGenerateWallet,
          disabled: isGenerating,
          className: "w-full",
          size: "lg",
          children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
            "Generating..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Generate New Wallet"
          ] })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: "border-green-200 bg-green-50 dark:bg-green-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-green-800 dark:text-green-200", children: "Wallet generated successfully! Please backup the information below." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Wallet Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3 bg-muted rounded-md font-mono text-sm break-all", children: generatedWallet.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => copyToClipboard(generatedWallet.address, "Address"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    generatedWallet.mnemonic && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Mnemonic Phrase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-muted rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: generatedWallet.mnemonic.split(" ").map((word, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "w-8 h-6 text-xs", children: index + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm", children: word })
      ] }, index)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => copyToClipboard(generatedWallet.mnemonic, "Mnemonic"),
          className: "w-full mt-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4 mr-2" }),
            "Copy Mnemonic Phrase"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Private Key (Base64)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3 bg-muted rounded-md font-mono text-sm break-all", children: generatedWallet.privateKey }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => copyToClipboard(generatedWallet.privateKey, "Private Key"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Please confirm that you have securely backed up your wallet information. This includes your private key and mnemonic phrase." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            id: "backup-confirm",
            checked: hasBackedUp,
            onChange: (e) => setHasBackedUp(e.target.checked),
            className: "rounded"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "backup-confirm", className: "text-sm", children: "I have securely backed up my wallet information" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setGeneratedWallet(null),
            className: "flex-1",
            children: "Generate Another"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleSaveWallet,
            disabled: !hasBackedUp,
            className: "flex-1",
            size: "lg",
            children: "Continue to Wallet"
          }
        )
      ] })
    ] })
  ] });
}

const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

var NAME$1 = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME$1;
var Root$2 = Label$1;

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$2,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = Root$2.displayName;

function ImportWallet({ onWalletImported }) {
  const [privateKey, setPrivateKey] = reactExports.useState("");
  const [mnemonic, setMnemonic] = reactExports.useState("");
  const [isImporting, setIsImporting] = reactExports.useState(false);
  const { toast } = useToast();
  const handleImportFromPrivateKey = async () => {
    if (!privateKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a private key",
        variant: "destructive"
      });
      return;
    }
    setIsImporting(true);
    try {
      const wallet = await importWalletFromPrivateKey(privateKey.trim());
      onWalletImported(wallet);
      toast({
        title: "Success!",
        description: "Wallet imported successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to import wallet. Please check your private key.",
        variant: "destructive"
      });
    } finally {
      setIsImporting(false);
    }
  };
  const handleImportFromMnemonic = async () => {
    if (!mnemonic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a mnemonic phrase",
        variant: "destructive"
      });
      return;
    }
    setIsImporting(true);
    try {
      const wallet = await importWalletFromMnemonic(mnemonic.trim());
      onWalletImported(wallet);
      toast({
        title: "Success!",
        description: "Wallet imported successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to import wallet. Please check your mnemonic phrase.",
        variant: "destructive"
      });
    } finally {
      setIsImporting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Only import wallets from trusted sources. Never share your private key or mnemonic phrase with anyone." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "private-key", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "private-key", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-4 w-4" }),
          "Private Key"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "mnemonic", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
          "Mnemonic"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "private-key", className: "space-y-4 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "private-key", children: "Private Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "private-key",
              type: "password",
              placeholder: "Enter your private key (Base64 or Hex)",
              value: privateKey,
              onChange: (e) => setPrivateKey(e.target.value),
              className: "font-mono"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter your private key in Base64 or Hex format (with or without 0x prefix)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleImportFromPrivateKey,
            disabled: isImporting || !privateKey.trim(),
            className: "w-full",
            size: "lg",
            children: isImporting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
              "Importing..."
            ] }) : "Import from Private Key"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "mnemonic", className: "space-y-4 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "mnemonic", children: "Mnemonic Phrase" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "mnemonic",
              placeholder: "Enter your 12 or 24 word mnemonic phrase",
              value: mnemonic,
              onChange: (e) => setMnemonic(e.target.value),
              rows: 4,
              className: "font-mono"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter your mnemonic phrase separated by spaces (12 or 24 words)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleImportFromMnemonic,
            disabled: isImporting || !mnemonic.trim(),
            className: "w-full",
            size: "lg",
            children: isImporting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
              "Importing..."
            ] }) : "Import from Mnemonic"
          }
        )
      ] })
    ] })
  ] });
}

function WelcomeScreen({ onWalletCreated }) {
  const [activeTab, setActiveTab] = reactExports.useState("generate");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-primary rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-8 w-8 text-primary-foreground" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-2", children: "Welcome to Octra Wallet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-6", children: "Your secure gateway to the Octra blockchain" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Get Started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Create a new wallet or import an existing one to begin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "generate", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            "Create New Wallet"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "import", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            "Import Wallet"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "generate", className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Create New Wallet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Generate a brand new wallet with a secure mnemonic phrase" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GenerateWallet, { onWalletGenerated: onWalletCreated })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "import", className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Import Existing Wallet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Restore your wallet using a private key or mnemonic phrase" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImportWallet, { onWalletImported: onWalletCreated })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "By using Octra Wallet, you agree to our terms of service and privacy policy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Always keep your private keys and mnemonic phrase secure and never share them with anyone." })
    ] })
  ] }) });
}

var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope$2(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = reactExports.useState("idle");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps.referrerPolicy);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = reactExports.useState(delayMs === void 0);
    reactExports.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback$1.displayName = FALLBACK_NAME;
function useImageLoadingStatus(src, referrerPolicy) {
  const [loadingStatus, setLoadingStatus] = reactExports.useState("idle");
  useLayoutEffect2(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted) return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    return () => {
      isMounted = false;
    };
  }, [src, referrerPolicy]);
  return loadingStatus;
}
var Root$1 = Avatar$1;
var Image = AvatarImage$1;
var Fallback = AvatarFallback$1;

const Avatar = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$1,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = Root$1.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = Fallback.displayName;

const initialState = {
  theme: "light",
  setTheme: () => null
};
const ThemeProviderContext = reactExports.createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = reactExports.useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  reactExports.useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === storageKey && e.newValue) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [storageKey]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = reactExports.useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: toggleTheme, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle theme" })
  ] });
}

async function fetchBalance(address) {
  try {
    const response = await fetch(`/api/address/${address}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch balance:", response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    const balance = typeof data.balance === "string" ? parseFloat(data.balance) : data.balance || 0;
    const nonce = typeof data.nonce === "number" ? data.nonce : data.nonce || 0;
    if (isNaN(balance) || typeof nonce !== "number") {
      console.warn("Invalid balance or nonce in API response", { balance, nonce });
      return { balance: 0, nonce: 0 };
    }
    return { balance, nonce };
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
}
async function fetchPendingTransactions(address) {
  try {
    const response = await fetch(`/api/staging`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch pending transactions:", response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
      if (!data.staged_transactions || !Array.isArray(data.staged_transactions)) {
        console.warn("Staging response does not contain staged_transactions array:", data);
        return [];
      }
    } catch (parseError) {
      console.error("Failed to parse staging JSON:", parseError);
      return [];
    }
    const userTransactions = data.staged_transactions.filter(
      (tx) => tx.from.toLowerCase() === address.toLowerCase() || tx.to.toLowerCase() === address.toLowerCase()
    );
    return userTransactions;
  } catch (error) {
    console.error("Error fetching pending transactions:", error);
    return [];
  }
}
async function fetchTransactionHistory(address) {
  try {
    const [confirmedResponse, pendingTransactions] = await Promise.all([
      fetch(`/api/address/${address}`),
      fetchPendingTransactions(address)
    ]);
    if (!confirmedResponse.ok) {
      const errorText = await confirmedResponse.text();
      console.error("Failed to fetch transaction history:", confirmedResponse.status, errorText);
      throw new Error(`HTTP error! status: ${confirmedResponse.status} - ${errorText}`);
    }
    const responseText = await confirmedResponse.text();
    let apiData;
    try {
      apiData = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse transaction history JSON:", parseError);
      throw new Error("Invalid JSON response from server");
    }
    const confirmedTransactionPromises = apiData.recent_transactions.map(async (recentTx) => {
      try {
        const txDetails = await fetchTransactionDetails(recentTx.hash);
        return {
          hash: txDetails.tx_hash,
          from: txDetails.parsed_tx.from,
          to: txDetails.parsed_tx.to,
          amount: parseFloat(txDetails.parsed_tx.amount),
          timestamp: txDetails.parsed_tx.timestamp,
          status: "confirmed",
          type: txDetails.parsed_tx.from.toLowerCase() === address.toLowerCase() ? "sent" : "received"
        };
      } catch (error) {
        console.error("Failed to fetch transaction details for hash:", recentTx.hash, error);
        return {
          hash: recentTx.hash,
          from: "unknown",
          to: "unknown",
          amount: 0,
          timestamp: Date.now() / 1e3,
          status: "confirmed",
          type: "received"
        };
      }
    });
    const confirmedTransactions = await Promise.all(confirmedTransactionPromises);
    const pendingTransactionsFormatted = pendingTransactions.map((tx) => ({
      hash: tx.hash,
      from: tx.from,
      to: tx.to,
      amount: parseFloat(tx.amount),
      timestamp: tx.timestamp,
      status: "pending",
      type: tx.from.toLowerCase() === address.toLowerCase() ? "sent" : "received"
    }));
    const allTransactions = [...pendingTransactionsFormatted, ...confirmedTransactions].sort((a, b) => b.timestamp - a.timestamp);
    const result = {
      transactions: allTransactions,
      balance: parseFloat(apiData.balance)
    };
    return result;
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    throw error;
  }
}
async function fetchTransactionDetails(hash) {
  try {
    const response = await fetch(`/api/tx/${hash}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch transaction details:", response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse transaction details JSON:", parseError);
      throw new Error("Invalid JSON response from server");
    }
    return data;
  } catch (error) {
    console.error("Error fetching transaction details:", error);
    throw error;
  }
}
async function getTransactionHistory(address) {
  try {
    const result = await fetchTransactionHistory(address);
    return result.transactions || [];
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    return [];
  }
}

function WalletDashboard({ wallet, onDisconnect }) {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [balance, setBalance] = reactExports.useState(null);
  const [transactions, setTransactions] = reactExports.useState([]);
  const [isLoadingBalance, setIsLoadingBalance] = reactExports.useState(true);
  const [isLoadingTransactions, setIsLoadingTransactions] = reactExports.useState(true);
  const { toast } = useToast();
  reactExports.useEffect(() => {
    const fetchInitialData = async () => {
      if (!wallet) return;
      try {
        setIsLoadingBalance(true);
        const balanceData = await fetchBalance(wallet.address);
        setBalance(balanceData.balance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
        toast({
          title: "Error",
          description: "Failed to fetch wallet balance",
          variant: "destructive"
        });
      } finally {
        setIsLoadingBalance(false);
      }
      try {
        setIsLoadingTransactions(true);
        const historyData = await getTransactionHistory(wallet.address);
        if (Array.isArray(historyData)) {
          const transformedTxs = historyData.map((tx) => ({
            ...tx,
            type: tx.from?.toLowerCase() === wallet.address.toLowerCase() ? "sent" : "received"
          }));
          setTransactions(transformedTxs);
        }
      } catch (error) {
        console.error("Failed to fetch transaction history:", error);
        toast({
          title: "Error",
          description: "Failed to fetch transaction history",
          variant: "destructive"
        });
      } finally {
        setIsLoadingTransactions(false);
      }
    };
    fetchInitialData();
  }, [wallet, toast]);
  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };
  const handleDisconnect = () => {
    if (window.confirm("Are you sure you want to disconnect your wallet? Make sure you have backed up your private key or mnemonic phrase.")) {
      onDisconnect();
    }
  };
  const openFullApp = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
  };
  const truncateAddress = (address) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full overflow-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-sm font-bold", children: "Octra Wallet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: truncateAddress(wallet.address) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => copyToClipboard(wallet.address, "Address"),
                className: "h-4 w-4 p-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-2 w-2" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: openFullApp,
            className: "h-6 w-6 p-0",
            title: "Open in new tab",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: handleDisconnect,
            className: "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-xs px-2 py-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3 w-3 mr-1" }),
              "Disconnect"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3 h-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "overview", className: "flex items-center gap-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-3 w-3" }),
          "Overview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "send", className: "flex items-center gap-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3" }),
          "Send"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "history", className: "flex items-center gap-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-3 w-3" }),
          "History"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-3 mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: balance !== null ? `${balance.toFixed(8)}` : "0.00000000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "OCT" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setActiveTab("send"),
              className: "text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3 mr-1" }),
                "Send"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => setActiveTab("history"),
              className: "text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-3 w-3 mr-1" }),
                "History"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "send", className: "mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "For complex transactions, use the full app" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: openFullApp,
            className: "w-full text-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 mr-1" }),
              "Open Full Send Interface"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "history", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium", children: "Recent Transactions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: openFullApp,
              className: "text-xs p-1",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
            }
          )
        ] }),
        isLoadingTransactions ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Loading..." }) : transactions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No transactions found" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-40 overflow-y-auto", children: transactions.slice(0, 5).map((tx, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b pb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            tx.type === "sent" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500", children: "↗" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-500", children: "↙" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                tx.amount?.toFixed(4) || "0.0000",
                " OCT"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: new Date(tx.timestamp * 1e3).toLocaleDateString() })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: tx.status === "confirmed" ? "default" : "secondary",
              className: "text-xs",
              children: tx.status
            }
          )
        ] }, tx.hash || index)) })
      ] }) }) })
    ] }) })
  ] });
}

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

var _excluded$1r = ["color"];
var Cross2Icon = /*#__PURE__*/reactExports.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1r);

  return reactExports.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), reactExports.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = reactExports.useContext(DismissableLayerContext);
    const [node, setNode] = reactExports.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = reactExports.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    reactExports.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    reactExports.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    reactExports.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = reactExports.forwardRef((props, forwardedRef) => {
  const context = reactExports.useContext(DismissableLayerContext);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent$1(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent$1(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent$1(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;

var PORTAL_NAME = "Portal";
var Portal = reactExports.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = reactExports.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// packages/react/visually-hidden/src/VisuallyHidden.tsx
var NAME = "VisuallyHidden";
var VisuallyHidden = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;

var PROVIDER_NAME = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = createCollection("Toast");
var [createToastContext, createToastScope] = createContextScope$2("Toast", [createCollectionScope]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
var ToastProvider$1 = (props) => {
  const {
    __scopeToast,
    label = "Notification",
    duration = 5e3,
    swipeDirection = "right",
    swipeThreshold = 50,
    children
  } = props;
  const [viewport, setViewport] = reactExports.useState(null);
  const [toastCount, setToastCount] = reactExports.useState(0);
  const isFocusedToastEscapeKeyDownRef = reactExports.useRef(false);
  const isClosePausedRef = reactExports.useRef(false);
  if (!label.trim()) {
    console.error(
      `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToastProviderProvider,
    {
      scope: __scopeToast,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange: setViewport,
      onToastAdd: reactExports.useCallback(() => setToastCount((prevCount) => prevCount + 1), []),
      onToastRemove: reactExports.useCallback(() => setToastCount((prevCount) => prevCount - 1), []),
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef,
      children
    }
  ) });
};
ToastProvider$1.displayName = PROVIDER_NAME;
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      hotkey = VIEWPORT_DEFAULT_HOTKEY,
      label = "Notifications ({hotkey})",
      ...viewportProps
    } = props;
    const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const wrapperRef = reactExports.useRef(null);
    const headFocusProxyRef = reactExports.useRef(null);
    const tailFocusProxyRef = reactExports.useRef(null);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        const isHotkeyPressed = hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key);
        if (isHotkeyPressed) ref.current?.focus();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);
    reactExports.useEffect(() => {
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = () => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        };
        const handleResume = () => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside) handleResume();
        };
        wrapper.addEventListener("focusin", handlePause);
        wrapper.addEventListener("focusout", handleFocusOutResume);
        wrapper.addEventListener("pointermove", handlePause);
        wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
        window.addEventListener("blur", handlePause);
        window.addEventListener("focus", handleResume);
        return () => {
          wrapper.removeEventListener("focusin", handlePause);
          wrapper.removeEventListener("focusout", handleFocusOutResume);
          wrapper.removeEventListener("pointermove", handlePause);
          wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
          window.removeEventListener("blur", handlePause);
          window.removeEventListener("focus", handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef]);
    const getSortedTabbableCandidates = reactExports.useCallback(
      ({ tabbingDirection }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      },
      [getItems]
    );
    reactExports.useEffect(() => {
      const viewport = ref.current;
      if (viewport) {
        const handleKeyDown = (event) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.current?.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              isTabbingBackwards ? headFocusProxyRef.current?.focus() : tailFocusProxyRef.current?.focus();
            }
          }
        };
        viewport.addEventListener("keydown", handleKeyDown);
        return () => viewport.removeEventListener("keydown", handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Branch,
      {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: { pointerEvents: hasToasts ? void 0 : "none" },
        children: [
          hasToasts && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FocusProxy,
            {
              ref: headFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.ol, { tabIndex: -1, ...viewportProps, ref: composedRefs }) }),
          hasToasts && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FocusProxy,
            {
              ref: tailFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          )
        ]
      }
    );
  }
);
ToastViewport$1.displayName = VIEWPORT_NAME;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      VisuallyHidden,
      {
        "aria-hidden": true,
        tabIndex: 0,
        ...proxyProps,
        ref: forwardedRef,
        style: { position: "fixed" },
        onFocus: (event) => {
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !context.viewport?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
      }
    );
  }
);
FocusProxy.displayName = FOCUS_PROXY_NAME;
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
    const [open = true, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToastImpl,
      {
        open,
        ...toastProps,
        ref: forwardedRef,
        onClose: () => setOpen(false),
        onPause: useCallbackRef(props.onPause),
        onResume: useCallbackRef(props.onResume),
        onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
          event.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "move");
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
        }),
        onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
          event.currentTarget.setAttribute("data-swipe", "cancel");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "end");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
          setOpen(false);
        })
      }
    ) });
  }
);
Toast$1.displayName = TOAST_NAME;
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
  onClose() {
  }
});
var ToastImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      type = "foreground",
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd,
      ...toastProps
    } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [node, setNode] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const pointerStartRef = reactExports.useRef(null);
    const swipeDeltaRef = reactExports.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = reactExports.useRef(0);
    const closeTimerRemainingTimeRef = reactExports.useRef(duration);
    const closeTimerRef = reactExports.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = useCallbackRef(() => {
      const isFocusInToast = node?.contains(document.activeElement);
      if (isFocusInToast) context.viewport?.focus();
      onClose();
    });
    const startTimer = reactExports.useCallback(
      (duration2) => {
        if (!duration2 || duration2 === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
      },
      [handleClose]
    );
    reactExports.useEffect(() => {
      const viewport = context.viewport;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.current);
          onResume?.();
        };
        const handlePause = () => {
          const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
          closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
          window.clearTimeout(closeTimerRef.current);
          onPause?.();
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    }, [context.viewport, duration, onPause, onResume, startTimer]);
    reactExports.useEffect(() => {
      if (open && !context.isClosePausedRef.current) startTimer(duration);
    }, [open, duration, context.isClosePausedRef, startTimer]);
    reactExports.useEffect(() => {
      onToastAdd();
      return () => onToastRemove();
    }, [onToastAdd, onToastRemove]);
    const announceTextContent = reactExports.useMemo(() => {
      return node ? getAnnounceTextContent(node) : null;
    }, [node]);
    if (!context.viewport) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      announceTextContent && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToastAnnounce,
        {
          __scopeToast,
          role: "status",
          "aria-live": type === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: announceTextContent
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToastInteractiveProvider, { scope: __scopeToast, onClose: handleClose, children: reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            asChild: true,
            onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, () => {
              if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
              context.isFocusedToastEscapeKeyDownRef.current = false;
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": open ? "open" : "closed",
                "data-swipe-direction": context.swipeDirection,
                ...toastProps,
                ref: composedRefs,
                style: { userSelect: "none", touchAction: "none", ...props.style },
                onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                  if (event.key !== "Escape") return;
                  onEscapeKeyDown?.(event.nativeEvent);
                  if (!event.nativeEvent.defaultPrevented) {
                    context.isFocusedToastEscapeKeyDownRef.current = true;
                    handleClose();
                  }
                }),
                onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
                  if (event.button !== 0) return;
                  pointerStartRef.current = { x: event.clientX, y: event.clientY };
                }),
                onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
                  if (!pointerStartRef.current) return;
                  const x = event.clientX - pointerStartRef.current.x;
                  const y = event.clientY - pointerStartRef.current.y;
                  const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                  const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
                  const clamp = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
                  const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
                  const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
                  const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                  const delta = { x: clampedX, y: clampedY };
                  const eventDetail = { originalEvent: event, delta };
                  if (hasSwipeMoveStarted) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                      discrete: false
                    });
                  } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                      discrete: false
                    });
                    event.target.setPointerCapture(event.pointerId);
                  } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                    pointerStartRef.current = null;
                  }
                }),
                onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                  const delta = swipeDeltaRef.current;
                  const target = event.target;
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                  swipeDeltaRef.current = null;
                  pointerStartRef.current = null;
                  if (delta) {
                    const toast = event.currentTarget;
                    const eventDetail = { originalEvent: event, delta };
                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                      handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                        discrete: true
                      });
                    } else {
                      handleAndDispatchCustomEvent(
                        TOAST_SWIPE_CANCEL,
                        onSwipeCancel,
                        eventDetail,
                        {
                          discrete: true
                        }
                      );
                    }
                    toast.addEventListener("click", (event2) => event2.preventDefault(), {
                      once: true
                    });
                  }
                })
              }
            )
          }
        ) }),
        context.viewport
      ) })
    ] });
  }
);
var ToastAnnounce = (props) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = useToastProviderContext(TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = reactExports.useState(false);
  const [isAnnounced, setIsAnnounced] = reactExports.useState(false);
  useNextFrame(() => setRenderAnnounceText(true));
  reactExports.useEffect(() => {
    const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { ...announceProps, children: renderAnnounceText && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    context.label,
    " ",
    children
  ] }) }) });
};
var TITLE_NAME = "ToastTitle";
var ToastTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...titleProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...titleProps, ref: forwardedRef });
  }
);
ToastTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "ToastDescription";
var ToastDescription$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...descriptionProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...descriptionProps, ref: forwardedRef });
  }
);
ToastDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "ToastAction";
var ToastAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { altText, ...actionProps } = props;
    if (!altText.trim()) {
      console.error(
        `Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`
      );
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAnnounceExclude, { altText, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose$1, { ...actionProps, ref: forwardedRef }) });
  }
);
ToastAction$1.displayName = ACTION_NAME;
var CLOSE_NAME = "ToastClose";
var ToastClose$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAnnounceExclude, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
      }
    ) });
  }
);
ToastClose$1.displayName = CLOSE_NAME;
var ToastAnnounceExclude = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeToast, altText, ...announceExcludeProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": altText || void 0,
      ...announceExcludeProps,
      ref: forwardedRef
    }
  );
});
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText) textContent.push(altText);
        } else {
          textContent.push(...getAnnounceTextContent(node));
        }
      }
    }
  });
  return textContent;
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, { bubbles: true, cancelable: true, detail });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}
var isDeltaInDirection = (delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
};
function useNextFrame(callback = () => {
}) {
  const fn = useCallbackRef(callback);
  useLayoutEffect2(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
var Provider = ToastProvider$1;
var Viewport = ToastViewport$1;
var Root2 = Toast$1;
var Title = ToastTitle$1;
var Description = ToastDescription$1;
var Action = ToastAction$1;
var Close = ToastClose$1;

const ToastProvider = Provider;
const ToastViewport = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = reactExports.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = Root2.displayName;
const ToastAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = Action.displayName;
const ToastClose = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cross2Icon, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = Close.displayName;
const ToastTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = Title.displayName;
const ToastDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = Description.displayName;

function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastViewport, { className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] sm:bottom-4 bottom-4 sm:top-auto top-auto" })
  ] });
}

function ExtensionApp() {
  const [wallet, setWallet] = reactExports.useState(null);
  const [wallets, setWallets] = reactExports.useState([]);
  reactExports.useEffect(() => {
    chrome.storage.local.get(["wallets"], (result) => {
      if (result.wallets) {
        const parsedWallets = result.wallets;
        setWallets(parsedWallets);
        if (parsedWallets.length > 0) {
          setWallet(parsedWallets[0]);
        }
      }
    });
  }, []);
  const saveWallet = (newWallet) => {
    const updatedWallets = [...wallets, newWallet];
    setWallets(updatedWallets);
    setWallet(newWallet);
    chrome.storage.local.set({ wallets: updatedWallets });
  };
  const disconnectWallet = () => {
    setWallet(null);
    setWallets([]);
    chrome.storage.local.remove(["wallets"]);
    chrome.storage.local.set({ "octra-wallet-theme": "light" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { defaultTheme: "light", storageKey: "octra-wallet-theme", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800", children: [
    !wallet ? /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeScreen, { onWalletCreated: saveWallet }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WalletDashboard, { wallet, onDisconnect: disconnectWallet }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}

const debugCSS = () => {
  console.log("🔍 Debugging CSS loading...");
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  console.log("CSS links found:", cssLinks.length);
  cssLinks.forEach((link, index) => {
    console.log(`CSS ${index + 1}:`, link.getAttribute("href"));
  });
  const body = document.body;
  const computedStyle = window.getComputedStyle(body);
  console.log("Body background:", computedStyle.backgroundColor);
  console.log("Body font-family:", computedStyle.fontFamily);
  const rootStyle = window.getComputedStyle(document.documentElement);
  console.log("CSS variable --background:", rootStyle.getPropertyValue("--background"));
};
const removeLoading = () => {
  const loadingEl = document.querySelector(".loading");
  if (loadingEl) {
    loadingEl.remove();
    console.log("✅ Loading indicator removed");
  }
};
const initApp = () => {
  console.log("🚀 Initializing extension app...");
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("❌ Root element not found");
    return;
  }
  debugCSS();
  rootElement.innerHTML = "";
  try {
    const root = createRoot(rootElement);
    root.render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExtensionApp, {}) })
    );
    console.log("✅ React app rendered");
    setTimeout(() => {
      removeLoading();
      setTimeout(debugCSS, 100);
    }, 100);
  } catch (error) {
    console.error("❌ Error rendering React app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h3 style="color: #dc2626;">Extension Error</h3>
        <p>Failed to load the wallet interface.</p>
        <p style="font-size: 12px; color: #666;">${error.message}</p>
      </div>
    `;
  }
};
const waitForCSS = () => {
  const cssLink = document.querySelector('link[href="styles.css"]');
  if (cssLink) {
    cssLink.addEventListener("load", () => {
      console.log("✅ CSS loaded successfully");
      initApp();
    });
    cssLink.addEventListener("error", () => {
      console.warn("⚠️ CSS failed to load, proceeding anyway");
      initApp();
    });
    setTimeout(() => {
      console.log("⏰ CSS load timeout, proceeding anyway");
      initApp();
    }, 2e3);
  } else {
    console.warn("⚠️ CSS link not found, proceeding anyway");
    initApp();
  }
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", waitForCSS);
} else {
  waitForCSS();
}
