function Dw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Aw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Symbol.for("react.element"),Nw=Symbol.for("react.portal"),$w=Symbol.for("react.fragment"),Rw=Symbol.for("react.strict_mode"),Pw=Symbol.for("react.profiler"),Ow=Symbol.for("react.provider"),Lw=Symbol.for("react.context"),bw=Symbol.for("react.forward_ref"),Mw=Symbol.for("react.suspense"),Fw=Symbol.for("react.memo"),zw=Symbol.for("react.lazy"),zf=Symbol.iterator;function Bw(e){return e===null||typeof e!="object"?null:(e=zf&&e[zf]||e["@@iterator"],typeof e=="function"?e:null)}var Sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eg=Object.assign,xg={};function _i(e,t,n){this.props=e,this.context=t,this.refs=xg,this.updater=n||Sg}_i.prototype.isReactComponent={};_i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kg(){}kg.prototype=_i.prototype;function Fh(e,t,n){this.props=e,this.context=t,this.refs=xg,this.updater=n||Sg}var zh=Fh.prototype=new kg;zh.constructor=Fh;Eg(zh,_i.prototype);zh.isPureReactComponent=!0;var Bf=Array.isArray,Tg=Object.prototype.hasOwnProperty,Bh={current:null},Ig={key:!0,ref:!0,__self:!0,__source:!0};function _g(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Tg.call(t,r)&&!Ig.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qs,type:e,key:s,ref:o,props:i,_owner:Bh.current}}function jw(e,t){return{$$typeof:Qs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qs}function Uw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jf=/\/+/g;function gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uw(""+e.key):t.toString(36)}function Ko(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qs:case Nw:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+gu(o,0):r,Bf(i)?(n="",e!=null&&(n=e.replace(jf,"$&/")+"/"),Ko(i,t,n,"",function(u){return u})):i!=null&&(jh(i)&&(i=jw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Bf(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+gu(s,a);o+=Ko(s,t,n,l,i)}else if(l=Bw(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+gu(s,a++),o+=Ko(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(e,t,n){if(e==null)return e;var r=[],i=0;return Ko(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Vw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},qo={transition:null},Hw={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Bh};J.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!jh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=_i;J.Fragment=$w;J.Profiler=Pw;J.PureComponent=Fh;J.StrictMode=Rw;J.Suspense=Mw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hw;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eg({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Bh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Tg.call(t,l)&&!Ig.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qs,type:e.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(e){return e={$$typeof:Lw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ow,_context:e},e.Consumer=e};J.createElement=_g;J.createFactory=function(e){var t=_g.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:bw,render:e}};J.isValidElement=jh;J.lazy=function(e){return{$$typeof:zw,_payload:{_status:-1,_result:e},_init:Vw}};J.memo=function(e,t){return{$$typeof:Fw,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return yt.current.useCallback(e,t)};J.useContext=function(e){return yt.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};J.useEffect=function(e,t){return yt.current.useEffect(e,t)};J.useId=function(){return yt.current.useId()};J.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return yt.current.useMemo(e,t)};J.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};J.useRef=function(e){return yt.current.useRef(e)};J.useState=function(e){return yt.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return yt.current.useTransition()};J.version="18.2.0";(function(e){e.exports=J})(b);const Zt=Aw(b.exports),oc=Dw({__proto__:null,default:Zt},[b.exports]);var ac={},Dg={exports:{}},Rt={},Ag={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,j){var U=_.length;_.push(j);e:for(;0<U;){var fe=U-1>>>1,A=_[fe];if(0<i(A,j))_[fe]=j,_[U]=A,U=fe;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var j=_[0],U=_.pop();if(U!==j){_[0]=U;e:for(var fe=0,A=_.length,$=A>>>1;fe<$;){var O=2*(fe+1)-1,V=_[O],w=O+1,Z=_[w];if(0>i(V,U))w<A&&0>i(Z,V)?(_[fe]=Z,_[w]=U,fe=w):(_[fe]=V,_[O]=U,fe=O);else if(w<A&&0>i(Z,U))_[fe]=Z,_[w]=U,fe=w;else break e}}return j}function i(_,j){var U=_.sortIndex-j.sortIndex;return U!==0?U:_.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=_)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function C(_){if(v=!1,g(_),!y)if(n(l)!==null)y=!0,cn(T);else{var j=n(u);j!==null&&ft(C,j.startTime-_)}}function T(_,j){y=!1,v&&(v=!1,p(P),P=-1),m=!0;var U=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||_&&!Fe());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,d=h.priorityLevel;var A=fe(h.expirationTime<=j);j=e.unstable_now(),typeof A=="function"?h.callback=A:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var $=!0;else{var O=n(u);O!==null&&ft(C,O.startTime-j),$=!1}return $}finally{h=null,d=U,m=!1}}var N=!1,R=null,P=-1,re=5,W=-1;function Fe(){return!(e.unstable_now()-W<re)}function Re(){if(R!==null){var _=e.unstable_now();W=_;var j=!0;try{j=R(!0,_)}finally{j?We():(N=!1,R=null)}}else N=!1}var We;if(typeof f=="function")We=function(){f(Re)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,nt=It.port2;It.port1.onmessage=Re,We=function(){nt.postMessage(null)}}else We=function(){S(Re,0)};function cn(_){R=_,N||(N=!0,We())}function ft(_,j){P=S(function(){_(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,cn(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var U=d;d=j;try{return _()}finally{d=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,j){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var U=d;d=_;try{return j()}finally{d=U}},e.unstable_scheduleCallback=function(_,j,U){var fe=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?fe+U:fe):U=fe,_){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=U+A,_={id:c++,callback:j,priorityLevel:_,startTime:U,expirationTime:A,sortIndex:-1},U>fe?(_.sortIndex=U,t(u,_),n(l)===null&&_===n(u)&&(v?(p(P),P=-1):v=!0,ft(C,U-fe))):(_.sortIndex=A,t(l,_),y||m||(y=!0,cn(T))),_},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(_){var j=d;return function(){var U=d;d=j;try{return _.apply(this,arguments)}finally{d=U}}}})(Ng);(function(e){e.exports=Ng})(Ag);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g=b.exports,Nt=Ag.exports;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,gs={};function Rr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(gs[e]=t,e=0;e<t.length;e++)Rg.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=Object.prototype.hasOwnProperty,Ww=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uf={},Vf={};function Kw(e){return lc.call(Vf,e)?!0:lc.call(Uf,e)?!1:Ww.test(e)?Vf[e]=!0:(Uf[e]=!0,!1)}function qw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gw(e,t,n,r){if(t===null||typeof t>"u"||qw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function Vh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uh,Vh);et[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uh,Vh);et[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uh,Vh);et[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hh(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gw(t,n,i,r)&&(n=null),r||i===null?Kw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _n=$g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Og=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),Hf=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,yu;function Gi(e){if(yu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yu=t&&t[1]||""}return`
`+yu+e}var vu=!1;function wu(e,t){if(!e||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gi(e):""}function Qw(e){switch(e.tag){case 5:return Gi(e.type);case 16:return Gi("Lazy");case 13:return Gi("Suspense");case 19:return Gi("SuspenseList");case 0:case 2:case 15:return e=wu(e.type,!1),e;case 11:return e=wu(e.type.render,!1),e;case 1:return e=wu(e.type,!0),e;default:return""}}function dc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case jr:return"Portal";case uc:return"Profiler";case Wh:return"StrictMode";case cc:return"Suspense";case hc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Og:return(e.displayName||"Context")+".Consumer";case Pg:return(e._context.displayName||"Context")+".Provider";case Kh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qh:return t=e.displayName||null,t!==null?t:dc(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return dc(e(t))}catch{}}return null}function Yw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dc(t);case 8:return t===Wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xw(e){var t=bg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=Xw(e))}function Mg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fc(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fg(e,t){t=t.checked,t!=null&&Hh(e,"checked",t,!1)}function pc(e,t){Fg(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mc(e,t.type,n):t.hasOwnProperty("defaultValue")&&mc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mc(e,t,n){(t!=="number"||ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qi=Array.isArray;function ni(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Qi(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function zg(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,jg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ys(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jw=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(e){Jw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ts[t]=ts[e]})});function Ug(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ts.hasOwnProperty(e)&&ts[e]?(""+t).trim():t+"px"}function Vg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ug(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zw=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(e,t){if(t){if(Zw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function wc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function Gh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sc=null,ri=null,ii=null;function Qf(e){if(e=Js(e)){if(typeof Sc!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ol(t),Sc(e.stateNode,e.type,t))}}function Hg(e){ri?ii?ii.push(e):ii=[e]:ri=e}function Wg(){if(ri){var e=ri,t=ii;if(ii=ri=null,Qf(e),t)for(e=0;e<t.length;e++)Qf(t[e])}}function Kg(e,t){return e(t)}function qg(){}var Cu=!1;function Gg(e,t,n){if(Cu)return e(t,n);Cu=!0;try{return Kg(e,t,n)}finally{Cu=!1,(ri!==null||ii!==null)&&(qg(),Wg())}}function vs(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ec=!1;if(wn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Ec=!1}function eC(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ns=!1,ca=null,ha=!1,xc=null,tC={onError:function(e){ns=!0,ca=e}};function nC(e,t,n,r,i,s,o,a,l){ns=!1,ca=null,eC.apply(tC,arguments)}function rC(e,t,n,r,i,s,o,a,l){if(nC.apply(this,arguments),ns){if(ns){var u=ca;ns=!1,ca=null}else throw Error(x(198));ha||(ha=!0,xc=u)}}function Pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(Pr(e)!==e)throw Error(x(188))}function iC(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yf(i),e;if(s===r)return Yf(i),t;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Yg(e){return e=iC(e),e!==null?Xg(e):null}function Xg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xg(e);if(t!==null)return t;e=e.sibling}return null}var Jg=Nt.unstable_scheduleCallback,Xf=Nt.unstable_cancelCallback,sC=Nt.unstable_shouldYield,oC=Nt.unstable_requestPaint,De=Nt.unstable_now,aC=Nt.unstable_getCurrentPriorityLevel,Qh=Nt.unstable_ImmediatePriority,Zg=Nt.unstable_UserBlockingPriority,da=Nt.unstable_NormalPriority,lC=Nt.unstable_LowPriority,ey=Nt.unstable_IdlePriority,nl=null,on=null;function uC(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:dC,cC=Math.log,hC=Math.LN2;function dC(e){return e>>>=0,e===0?32:31-(cC(e)/hC|0)|0}var ko=64,To=4194304;function Yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yi(a):(s&=o,s!==0&&(r=Yi(s)))}else o=n&~i,o!==0?r=Yi(o):s!==0&&(r=Yi(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Yt(t),i=1<<n,r|=e[n],t&=~i;return r}function fC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Yt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=fC(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function kc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ty(){var e=ko;return ko<<=1,(ko&4194240)===0&&(ko=64),e}function Su(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yt(t),e[t]=n}function mC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Yh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function ny(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ry,Xh,iy,sy,oy,Tc=!1,Io=[],Fn=null,zn=null,Bn=null,ws=new Map,Cs=new Map,Pn=[],gC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":ws.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(t.pointerId)}}function ji(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Js(t),t!==null&&Xh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yC(e,t,n,r,i){switch(t){case"focusin":return Fn=ji(Fn,e,t,n,r,i),!0;case"dragenter":return zn=ji(zn,e,t,n,r,i),!0;case"mouseover":return Bn=ji(Bn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ws.set(s,ji(ws.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cs.set(s,ji(Cs.get(s)||null,e,t,n,r,i)),!0}return!1}function ay(e){var t=dr(e.target);if(t!==null){var n=Pr(t);if(n!==null){if(t=n.tag,t===13){if(t=Qg(n),t!==null){e.blockedOn=t,oy(e.priority,function(){iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ic(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cc=r,n.target.dispatchEvent(r),Cc=null}else return t=Js(n),t!==null&&Xh(t),e.blockedOn=n,!1;t.shift()}return!0}function Zf(e,t,n){Go(e)&&n.delete(t)}function vC(){Tc=!1,Fn!==null&&Go(Fn)&&(Fn=null),zn!==null&&Go(zn)&&(zn=null),Bn!==null&&Go(Bn)&&(Bn=null),ws.forEach(Zf),Cs.forEach(Zf)}function Ui(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,vC)))}function Ss(e){function t(i){return Ui(i,e)}if(0<Io.length){Ui(Io[0],e);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&Ui(Fn,e),zn!==null&&Ui(zn,e),Bn!==null&&Ui(Bn,e),ws.forEach(t),Cs.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)ay(n),n.blockedOn===null&&Pn.shift()}var si=_n.ReactCurrentBatchConfig,pa=!0;function wC(e,t,n,r){var i=ce,s=si.transition;si.transition=null;try{ce=1,Jh(e,t,n,r)}finally{ce=i,si.transition=s}}function CC(e,t,n,r){var i=ce,s=si.transition;si.transition=null;try{ce=4,Jh(e,t,n,r)}finally{ce=i,si.transition=s}}function Jh(e,t,n,r){if(pa){var i=Ic(e,t,n,r);if(i===null)$u(e,t,r,ma,n),Jf(e,r);else if(yC(i,e,t,n,r))r.stopPropagation();else if(Jf(e,r),t&4&&-1<gC.indexOf(e)){for(;i!==null;){var s=Js(i);if(s!==null&&ry(s),s=Ic(e,t,n,r),s===null&&$u(e,t,r,ma,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $u(e,t,r,null,n)}}var ma=null;function Ic(e,t,n,r){if(ma=null,e=Gh(r),e=dr(e),e!==null)if(t=Pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ma=e,null}function ly(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aC()){case Qh:return 1;case Zg:return 4;case da:case lC:return 16;case ey:return 536870912;default:return 16}default:return 16}}var Ln=null,Zh=null,Qo=null;function uy(){if(Qo)return Qo;var e,t=Zh,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Qo=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function ep(){return!1}function Pt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:ep,this.isPropagationStopped=ep,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=Pt(Di),Xs=xe({},Di,{view:0,detail:0}),SC=Pt(Xs),Eu,xu,Vi,rl=xe({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vi&&(Vi&&e.type==="mousemove"?(Eu=e.screenX-Vi.screenX,xu=e.screenY-Vi.screenY):xu=Eu=0,Vi=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),tp=Pt(rl),EC=xe({},rl,{dataTransfer:0}),xC=Pt(EC),kC=xe({},Xs,{relatedTarget:0}),ku=Pt(kC),TC=xe({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),IC=Pt(TC),_C=xe({},Di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),DC=Pt(_C),AC=xe({},Di,{data:0}),np=Pt(AC),NC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=RC[e])?!!t[e]:!1}function td(){return PC}var OC=xe({},Xs,{key:function(e){if(e.key){var t=NC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$C[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LC=Pt(OC),bC=xe({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Pt(bC),MC=xe({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),FC=Pt(MC),zC=xe({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),BC=Pt(zC),jC=xe({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),UC=Pt(jC),VC=[9,13,27,32],nd=wn&&"CompositionEvent"in window,rs=null;wn&&"documentMode"in document&&(rs=document.documentMode);var HC=wn&&"TextEvent"in window&&!rs,cy=wn&&(!nd||rs&&8<rs&&11>=rs),ip=String.fromCharCode(32),sp=!1;function hy(e,t){switch(e){case"keyup":return VC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function WC(e,t){switch(e){case"compositionend":return dy(t);case"keypress":return t.which!==32?null:(sp=!0,ip);case"textInput":return e=t.data,e===ip&&sp?null:e;default:return null}}function KC(e,t){if(Vr)return e==="compositionend"||!nd&&hy(e,t)?(e=uy(),Qo=Zh=Ln=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cy&&t.locale!=="ko"?null:t.data;default:return null}}var qC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qC[e.type]:t==="textarea"}function fy(e,t,n,r){Hg(r),t=ga(t,"onChange"),0<t.length&&(n=new ed("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var is=null,Es=null;function GC(e){ky(e,0)}function il(e){var t=Kr(e);if(Mg(t))return e}function QC(e,t){if(e==="change")return t}var py=!1;if(wn){var Tu;if(wn){var Iu="oninput"in document;if(!Iu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Iu=typeof ap.oninput=="function"}Tu=Iu}else Tu=!1;py=Tu&&(!document.documentMode||9<document.documentMode)}function lp(){is&&(is.detachEvent("onpropertychange",my),Es=is=null)}function my(e){if(e.propertyName==="value"&&il(Es)){var t=[];fy(t,Es,e,Gh(e)),Gg(GC,t)}}function YC(e,t,n){e==="focusin"?(lp(),is=t,Es=n,is.attachEvent("onpropertychange",my)):e==="focusout"&&lp()}function XC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Es)}function JC(e,t){if(e==="click")return il(t)}function ZC(e,t){if(e==="input"||e==="change")return il(t)}function eS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:eS;function xs(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lc.call(t,i)||!en(e[i],t[i]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,t){var n=up(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yy(){for(var e=window,t=ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ua(e.document)}return t}function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tS(e){var t=yy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(r!==null&&rd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=cp(n,s);var o=cp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nS=wn&&"documentMode"in document&&11>=document.documentMode,Hr=null,_c=null,ss=null,Dc=!1;function hp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||Hr==null||Hr!==ua(r)||(r=Hr,"selectionStart"in r&&rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&xs(ss,r)||(ss=r,r=ga(_c,"onSelect"),0<r.length&&(t=new ed("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},_u={},vy={};wn&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function sl(e){if(_u[e])return _u[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vy)return _u[e]=t[n];return e}var wy=sl("animationend"),Cy=sl("animationiteration"),Sy=sl("animationstart"),Ey=sl("transitionend"),xy=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){xy.set(e,t),Rr(t,[e])}for(var Du=0;Du<dp.length;Du++){var Au=dp[Du],rS=Au.toLowerCase(),iS=Au[0].toUpperCase()+Au.slice(1);ir(rS,"on"+iS)}ir(wy,"onAnimationEnd");ir(Cy,"onAnimationIteration");ir(Sy,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Ey,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function fp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rC(r,t,void 0,e),e.currentTarget=null}function ky(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}}}if(ha)throw e=xc,ha=!1,xc=null,e}function ge(e,t){var n=t[Pc];n===void 0&&(n=t[Pc]=new Set);var r=e+"__bubble";n.has(r)||(Ty(t,e,2,!1),n.add(r))}function Nu(e,t,n){var r=0;t&&(r|=4),Ty(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[Ao]){e[Ao]=!0,Rg.forEach(function(n){n!=="selectionchange"&&(sS.has(n)||Nu(n,!1,e),Nu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Nu("selectionchange",!1,t))}}function Ty(e,t,n,r){switch(ly(t)){case 1:var i=wC;break;case 4:i=CC;break;default:i=Jh}n=i.bind(null,t,n,e),i=void 0,!Ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $u(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gg(function(){var u=s,c=Gh(n),h=[];e:{var d=xy.get(e);if(d!==void 0){var m=ed,y=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":m=LC;break;case"focusin":y="focus",m=ku;break;case"focusout":y="blur",m=ku;break;case"beforeblur":case"afterblur":m=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=xC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=FC;break;case wy:case Cy:case Sy:m=IC;break;case Ey:m=BC;break;case"scroll":m=SC;break;case"wheel":m=UC;break;case"copy":case"cut":case"paste":m=DC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=rp}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=vs(f,p),C!=null&&v.push(Ts(f,C,g)))),S)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",d&&n!==Cc&&(y=n.relatedTarget||n.fromElement)&&(dr(y)||y[Cn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?dr(y):null,y!==null&&(S=Pr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=tp,C="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=rp,C="onPointerLeave",p="onPointerEnter",f="pointer"),S=m==null?d:Kr(m),g=y==null?d:Kr(y),d=new v(C,f+"leave",m,n,c),d.target=S,d.relatedTarget=g,C=null,dr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=S,C=v),S=C,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=Fr(g))f++;for(g=0,C=p;C;C=Fr(C))g++;for(;0<f-g;)v=Fr(v),f--;for(;0<g-f;)p=Fr(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Fr(v),p=Fr(p)}v=null}else v=null;m!==null&&pp(h,d,m,v,!1),y!==null&&S!==null&&pp(h,S,y,v,!0)}}e:{if(d=u?Kr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=QC;else if(op(d))if(py)T=ZC;else{T=XC;var N=YC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=JC);if(T&&(T=T(e,u))){fy(h,T,n,c);break e}N&&N(e,d,u),e==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&mc(d,"number",d.value)}switch(N=u?Kr(u):window,e){case"focusin":(op(N)||N.contentEditable==="true")&&(Hr=N,_c=u,ss=null);break;case"focusout":ss=_c=Hr=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,hp(h,n,c);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":hp(h,n,c)}var R;if(nd)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vr?hy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cy&&n.locale!=="ko"&&(Vr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vr&&(R=uy()):(Ln=c,Zh="value"in Ln?Ln.value:Ln.textContent,Vr=!0)),N=ga(u,P),0<N.length&&(P=new np(P,e,null,n,c),h.push({event:P,listeners:N}),R?P.data=R:(R=dy(n),R!==null&&(P.data=R)))),(R=HC?WC(e,n):KC(e,n))&&(u=ga(u,"onBeforeInput"),0<u.length&&(c=new np("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}ky(h,t)})}function Ts(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ga(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vs(e,n),s!=null&&r.unshift(Ts(e,s,i)),s=vs(e,t),s!=null&&r.push(Ts(e,s,i))),e=e.return}return r}function Fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vs(n,s),l!=null&&o.unshift(Ts(n,l,a))):i||(l=vs(n,s),l!=null&&o.push(Ts(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var oS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function mp(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(aS,"")}function No(e,t,n){if(t=mp(t),mp(e)!==t&&n)throw Error(x(425))}function ya(){}var Ac=null,Nc=null;function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(cS)}:Rc;function cS(e){setTimeout(function(){throw e})}function Ru(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ss(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ss(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),rn="__reactFiber$"+Ai,Is="__reactProps$"+Ai,Cn="__reactContainer$"+Ai,Pc="__reactEvents$"+Ai,hS="__reactListeners$"+Ai,dS="__reactHandles$"+Ai;function dr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cn]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yp(e);e!==null;){if(n=e[rn])return n;e=yp(e)}return t}e=n,n=e.parentNode}return null}function Js(e){return e=e[rn]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ol(e){return e[Is]||null}var Oc=[],qr=-1;function sr(e){return{current:e}}function ye(e){0>qr||(e.current=Oc[qr],Oc[qr]=null,qr--)}function pe(e,t){qr++,Oc[qr]=e.current,e.current=t}var er={},ht=sr(er),xt=sr(!1),Er=er;function di(e,t){var n=e.type.contextTypes;if(!n)return er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function va(){ye(xt),ye(ht)}function vp(e,t,n){if(ht.current!==er)throw Error(x(168));pe(ht,t),pe(xt,n)}function Iy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,Yw(e)||"Unknown",i));return xe({},n,r)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,Er=ht.current,pe(ht,e),pe(xt,xt.current),!0}function wp(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Iy(e,t,Er),r.__reactInternalMemoizedMergedChildContext=e,ye(xt),ye(ht),pe(ht,e)):ye(xt),pe(xt,n)}var dn=null,al=!1,Pu=!1;function _y(e){dn===null?dn=[e]:dn.push(e)}function fS(e){al=!0,_y(e)}function or(){if(!Pu&&dn!==null){Pu=!0;var e=0,t=ce;try{var n=dn;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dn=null,al=!1}catch(i){throw dn!==null&&(dn=dn.slice(e+1)),Jg(Qh,or),i}finally{ce=t,Pu=!1}}return null}var Gr=[],Qr=0,Ca=null,Sa=0,Lt=[],bt=0,xr=null,fn=1,pn="";function ur(e,t){Gr[Qr++]=Sa,Gr[Qr++]=Ca,Ca=e,Sa=t}function Dy(e,t,n){Lt[bt++]=fn,Lt[bt++]=pn,Lt[bt++]=xr,xr=e;var r=fn;e=pn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Yt(t)+i|n<<i|r,pn=s+e}else fn=1<<s|n<<i|r,pn=e}function id(e){e.return!==null&&(ur(e,1),Dy(e,1,0))}function sd(e){for(;e===Ca;)Ca=Gr[--Qr],Gr[Qr]=null,Sa=Gr[--Qr],Gr[Qr]=null;for(;e===xr;)xr=Lt[--bt],Lt[bt]=null,pn=Lt[--bt],Lt[bt]=null,fn=Lt[--bt],Lt[bt]=null}var At=null,Dt=null,ve=!1,Gt=null;function Ay(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Dt=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Dt=null,!0):!1;default:return!1}}function Lc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bc(e){if(ve){var t=Dt;if(t){var n=t;if(!Cp(e,t)){if(Lc(e))throw Error(x(418));t=jn(n.nextSibling);var r=At;t&&Cp(e,t)?Ay(r,n):(e.flags=e.flags&-4097|2,ve=!1,At=e)}}else{if(Lc(e))throw Error(x(418));e.flags=e.flags&-4097|2,ve=!1,At=e}}}function Sp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function $o(e){if(e!==At)return!1;if(!ve)return Sp(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$c(e.type,e.memoizedProps)),t&&(t=Dt)){if(Lc(e))throw Ny(),Error(x(418));for(;t;)Ay(e,t),t=jn(t.nextSibling)}if(Sp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=At?jn(e.stateNode.nextSibling):null;return!0}function Ny(){for(var e=Dt;e;)e=jn(e.nextSibling)}function fi(){Dt=At=null,ve=!1}function od(e){Gt===null?Gt=[e]:Gt.push(e)}var pS=_n.ReactCurrentBatchConfig;function Kt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ea=sr(null),xa=null,Yr=null,ad=null;function ld(){ad=Yr=xa=null}function ud(e){var t=Ea.current;ye(Ea),e._currentValue=t}function Mc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oi(e,t){xa=e,ad=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(St=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(ad!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(xa===null)throw Error(x(308));Yr=e,xa.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var fr=null;function cd(e){fr===null?fr=[e]:fr.push(e)}function $y(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Sn(e,r)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function hd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ry(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Sn(e,n)}return i=r.interleaved,i===null?(t.next=t,cd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Sn(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yh(e,n)}}function Ep(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,r){var i=e.updateQueue;Rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(d=t,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=xe({},h,d);break e;case 2:Rn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Tr|=o,e.lanes=o,e.memoizedState=h}}function xp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Py=new $g.Component().refs;function Fc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Hn(e),s=gn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Un(e,s,i),t!==null&&(Xt(t,e,i,r),Xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=Hn(e),s=gn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Un(e,s,i),t!==null&&(Xt(t,e,i,r),Xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Hn(e),i=gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,r),t!==null&&(Xt(t,e,r,n),Xo(t,e,r))}};function kp(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!xs(n,r)||!xs(i,s):!0}function Oy(e,t,n){var r=!1,i=er,s=t.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=kt(t)?Er:ht.current,r=t.contextTypes,s=(r=r!=null)?di(e,i):er),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Tp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function zc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Py,hd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=kt(t)?Er:ht.current,i.context=di(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Fc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ll.enqueueReplaceState(i,i.state,null),ka(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Py&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ip(e){var t=e._init;return t(e._payload)}function Ly(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,C){return f===null||f.tag!==6?(f=Bu(g,p.mode,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,C){var T=g.type;return T===Ur?c(p,f,g.props.children,C,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$n&&Ip(T)===f.type)?(C=i(f,g.props),C.ref=Hi(p,f,g),C.return=p,C):(C=ra(g.type,g.key,g.props,null,p.mode,C),C.ref=Hi(p,f,g),C.return=p,C)}function u(p,f,g,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ju(g,p.mode,C),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,C,T){return f===null||f.tag!==7?(f=wr(g,p.mode,C,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case So:return g=ra(f.type,f.key,f.props,null,p.mode,g),g.ref=Hi(p,null,f),g.return=p,g;case jr:return f=ju(f,p.mode,g),f.return=p,f;case $n:var C=f._init;return h(p,C(f._payload),g)}if(Qi(f)||zi(f))return f=wr(f,p.mode,g,null),f.return=p,f;Ro(p,f)}return null}function d(p,f,g,C){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(p,f,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return g.key===T?l(p,f,g,C):null;case jr:return g.key===T?u(p,f,g,C):null;case $n:return T=g._init,d(p,f,T(g._payload),C)}if(Qi(g)||zi(g))return T!==null?null:c(p,f,g,C,null);Ro(p,g)}return null}function m(p,f,g,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,a(f,p,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case So:return p=p.get(C.key===null?g:C.key)||null,l(f,p,C,T);case jr:return p=p.get(C.key===null?g:C.key)||null,u(f,p,C,T);case $n:var N=C._init;return m(p,f,g,N(C._payload),T)}if(Qi(C)||zi(C))return p=p.get(g)||null,c(f,p,C,T,null);Ro(f,C)}return null}function y(p,f,g,C){for(var T=null,N=null,R=f,P=f=0,re=null;R!==null&&P<g.length;P++){R.index>P?(re=R,R=null):re=R.sibling;var W=d(p,R,g[P],C);if(W===null){R===null&&(R=re);break}e&&R&&W.alternate===null&&t(p,R),f=s(W,f,P),N===null?T=W:N.sibling=W,N=W,R=re}if(P===g.length)return n(p,R),ve&&ur(p,P),T;if(R===null){for(;P<g.length;P++)R=h(p,g[P],C),R!==null&&(f=s(R,f,P),N===null?T=R:N.sibling=R,N=R);return ve&&ur(p,P),T}for(R=r(p,R);P<g.length;P++)re=m(R,p,P,g[P],C),re!==null&&(e&&re.alternate!==null&&R.delete(re.key===null?P:re.key),f=s(re,f,P),N===null?T=re:N.sibling=re,N=re);return e&&R.forEach(function(Fe){return t(p,Fe)}),ve&&ur(p,P),T}function v(p,f,g,C){var T=zi(g);if(typeof T!="function")throw Error(x(150));if(g=T.call(g),g==null)throw Error(x(151));for(var N=T=null,R=f,P=f=0,re=null,W=g.next();R!==null&&!W.done;P++,W=g.next()){R.index>P?(re=R,R=null):re=R.sibling;var Fe=d(p,R,W.value,C);if(Fe===null){R===null&&(R=re);break}e&&R&&Fe.alternate===null&&t(p,R),f=s(Fe,f,P),N===null?T=Fe:N.sibling=Fe,N=Fe,R=re}if(W.done)return n(p,R),ve&&ur(p,P),T;if(R===null){for(;!W.done;P++,W=g.next())W=h(p,W.value,C),W!==null&&(f=s(W,f,P),N===null?T=W:N.sibling=W,N=W);return ve&&ur(p,P),T}for(R=r(p,R);!W.done;P++,W=g.next())W=m(R,p,P,W.value,C),W!==null&&(e&&W.alternate!==null&&R.delete(W.key===null?P:W.key),f=s(W,f,P),N===null?T=W:N.sibling=W,N=W);return e&&R.forEach(function(Re){return t(p,Re)}),ve&&ur(p,P),T}function S(p,f,g,C){if(typeof g=="object"&&g!==null&&g.type===Ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case So:e:{for(var T=g.key,N=f;N!==null;){if(N.key===T){if(T=g.type,T===Ur){if(N.tag===7){n(p,N.sibling),f=i(N,g.props.children),f.return=p,p=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$n&&Ip(T)===N.type){n(p,N.sibling),f=i(N,g.props),f.ref=Hi(p,N,g),f.return=p,p=f;break e}n(p,N);break}else t(p,N);N=N.sibling}g.type===Ur?(f=wr(g.props.children,p.mode,C,g.key),f.return=p,p=f):(C=ra(g.type,g.key,g.props,null,p.mode,C),C.ref=Hi(p,f,g),C.return=p,p=C)}return o(p);case jr:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ju(g,p.mode,C),f.return=p,p=f}return o(p);case $n:return N=g._init,S(p,f,N(g._payload),C)}if(Qi(g))return y(p,f,g,C);if(zi(g))return v(p,f,g,C);Ro(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Bu(g,p.mode,C),f.return=p,p=f),o(p)):n(p,f)}return S}var pi=Ly(!0),by=Ly(!1),Zs={},an=sr(Zs),_s=sr(Zs),Ds=sr(Zs);function pr(e){if(e===Zs)throw Error(x(174));return e}function dd(e,t){switch(pe(Ds,t),pe(_s,e),pe(an,Zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yc(t,e)}ye(an),pe(an,t)}function mi(){ye(an),ye(_s),ye(Ds)}function My(e){pr(Ds.current);var t=pr(an.current),n=yc(t,e.type);t!==n&&(pe(_s,e),pe(an,n))}function fd(e){_s.current===e&&(ye(an),ye(_s))}var Se=sr(0);function Ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ou=[];function pd(){for(var e=0;e<Ou.length;e++)Ou[e]._workInProgressVersionPrimary=null;Ou.length=0}var Jo=_n.ReactCurrentDispatcher,Lu=_n.ReactCurrentBatchConfig,kr=0,Ee=null,Pe=null,Be=null,Ia=!1,os=!1,As=0,mS=0;function it(){throw Error(x(321))}function md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function gd(e,t,n,r,i,s){if(kr=s,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=e===null||e.memoizedState===null?wS:CS,e=n(r,i),os){s=0;do{if(os=!1,As=0,25<=s)throw Error(x(301));s+=1,Be=Pe=null,t.updateQueue=null,Jo.current=SS,e=n(r,i)}while(os)}if(Jo.current=_a,t=Pe!==null&&Pe.next!==null,kr=0,Be=Pe=Ee=null,Ia=!1,t)throw Error(x(300));return e}function yd(){var e=As!==0;return As=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ee.memoizedState=Be=e:Be=Be.next=e,Be}function jt(){if(Pe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Be===null?Ee.memoizedState:Be.next;if(t!==null)Be=t,Pe=e;else{if(e===null)throw Error(x(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Be===null?Ee.memoizedState=Be=e:Be=Be.next=e}return Be}function Ns(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=jt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ee.lanes|=c,Tr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ee.lanes|=s,Tr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mu(e){var t=jt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);en(s,t.memoizedState)||(St=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Fy(){}function zy(e,t){var n=Ee,r=jt(),i=t(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,vd(Uy.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,$s(9,jy.bind(null,n,r,i,t),void 0,null),je===null)throw Error(x(349));(kr&30)!==0||By(n,t,i)}return i}function By(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jy(e,t,n,r){t.value=n,t.getSnapshot=r,Vy(t)&&Hy(e)}function Uy(e,t,n){return n(function(){Vy(t)&&Hy(e)})}function Vy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function Hy(e){var t=Sn(e,1);t!==null&&Xt(t,e,1,-1)}function _p(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:e},t.queue=e,e=e.dispatch=vS.bind(null,Ee,e),[t.memoizedState,e]}function $s(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wy(){return jt().memoizedState}function Zo(e,t,n,r){var i=nn();Ee.flags|=e,i.memoizedState=$s(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&md(r,o.deps)){i.memoizedState=$s(t,n,s,r);return}}Ee.flags|=e,i.memoizedState=$s(1|t,n,s,r)}function Dp(e,t){return Zo(8390656,8,e,t)}function vd(e,t){return ul(2048,8,e,t)}function Ky(e,t){return ul(4,2,e,t)}function qy(e,t){return ul(4,4,e,t)}function Gy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qy(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Gy.bind(null,t,e),n)}function wd(){}function Yy(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&md(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xy(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&md(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jy(e,t,n){return(kr&21)===0?(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n):(en(n,t)||(n=ty(),Ee.lanes|=n,Tr|=n,e.baseState=!0),t)}function gS(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Lu.transition;Lu.transition={};try{e(!1),t()}finally{ce=n,Lu.transition=r}}function Zy(){return jt().memoizedState}function yS(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(e))t0(t,n);else if(n=$y(e,t,n,r),n!==null){var i=gt();Xt(n,e,r,i),n0(n,t,r)}}function vS(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(e))t0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=t.interleaved;l===null?(i.next=i,cd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=$y(e,t,i,r),n!==null&&(i=gt(),Xt(n,e,r,i),n0(n,t,r))}}function e0(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function t0(e,t){os=Ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function n0(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yh(e,n)}}var _a={readContext:Bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},wS={readContext:Bt,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:Dp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,Gy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yS.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:_p,useDebugValue:wd,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=_p(!1),t=e[0];return e=gS.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=nn();if(ve){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),je===null)throw Error(x(349));(kr&30)!==0||By(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Dp(Uy.bind(null,r,s,e),[e]),r.flags|=2048,$s(9,jy.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=nn(),t=je.identifierPrefix;if(ve){var n=pn,r=fn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=As++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},CS={readContext:Bt,useCallback:Yy,useContext:Bt,useEffect:vd,useImperativeHandle:Qy,useInsertionEffect:Ky,useLayoutEffect:qy,useMemo:Xy,useReducer:bu,useRef:Wy,useState:function(){return bu(Ns)},useDebugValue:wd,useDeferredValue:function(e){var t=jt();return Jy(t,Pe.memoizedState,e)},useTransition:function(){var e=bu(Ns)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Fy,useSyncExternalStore:zy,useId:Zy,unstable_isNewReconciler:!1},SS={readContext:Bt,useCallback:Yy,useContext:Bt,useEffect:vd,useImperativeHandle:Qy,useInsertionEffect:Ky,useLayoutEffect:qy,useMemo:Xy,useReducer:Mu,useRef:Wy,useState:function(){return Mu(Ns)},useDebugValue:wd,useDeferredValue:function(e){var t=jt();return Pe===null?t.memoizedState=e:Jy(t,Pe.memoizedState,e)},useTransition:function(){var e=Mu(Ns)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Fy,useSyncExternalStore:zy,useId:Zy,unstable_isNewReconciler:!1};function gi(e,t){try{var n="",r=t;do n+=Qw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Fu(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Bc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function r0(e,t,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Aa||(Aa=!0,Yc=r),Bc(e,t)},n}function i0(e,t,n){n=gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bc(e,t),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ap(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ES;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bS.bind(null,e,t,n),t.then(e,e))}function Np(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $p(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xS=_n.ReactCurrentOwner,St=!1;function pt(e,t,n,r){t.child=e===null?by(t,null,n,r):pi(t,e.child,n,r)}function Rp(e,t,n,r,i){n=n.render;var s=t.ref;return oi(t,i),r=gd(e,t,n,r,s,i),n=yd(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(ve&&n&&id(t),t.flags|=1,pt(e,t,r,i),t.child)}function Pp(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!_d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,s0(e,t,s,r,i)):(e=ra(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(o,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=Wn(s,r),e.ref=t.ref,e.return=t,t.child=e}function s0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(xs(s,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(St=!0);else return t.lanes=e.lanes,En(e,t,i)}return jc(e,t,n,r,i)}function o0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Jr,_t),_t|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(Jr,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Jr,_t),_t|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,pe(Jr,_t),_t|=r;return pt(e,t,i,n),t.child}function a0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,n,r,i){var s=kt(n)?Er:ht.current;return s=di(t,s),oi(t,i),n=gd(e,t,n,r,s,i),r=yd(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(ve&&r&&id(t),t.flags|=1,pt(e,t,n,i),t.child)}function Op(e,t,n,r,i){if(kt(n)){var s=!0;wa(t)}else s=!1;if(oi(t,i),t.stateNode===null)ea(e,t),Oy(t,n,r),zc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=kt(n)?Er:ht.current,u=di(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tp(t,o,r,u),Rn=!1;var d=t.memoizedState;o.state=d,ka(t,r,o,i),l=t.memoizedState,a!==r||d!==l||xt.current||Rn?(typeof c=="function"&&(Fc(t,n,c,r),l=t.memoizedState),(a=Rn||kp(t,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ry(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Kt(t.type,a),o.props=u,h=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=kt(n)?Er:ht.current,l=di(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Tp(t,o,r,l),Rn=!1,d=t.memoizedState,o.state=d,ka(t,r,o,i);var y=t.memoizedState;a!==h||d!==y||xt.current||Rn?(typeof m=="function"&&(Fc(t,n,m,r),y=t.memoizedState),(u=Rn||kp(t,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Uc(e,t,n,r,s,i)}function Uc(e,t,n,r,i,s){a0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&wp(t,n,!1),En(e,t,s);r=t.stateNode,xS.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pi(t,e.child,null,s),t.child=pi(t,null,a,s)):pt(e,t,a,s),t.memoizedState=r.state,i&&wp(t,n,!0),t.child}function l0(e){var t=e.stateNode;t.pendingContext?vp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vp(e,t.context,!1),dd(e,t.containerInfo)}function Lp(e,t,n,r,i){return fi(),od(i),t.flags|=256,pt(e,t,n,r),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Hc(e){return{baseLanes:e,cachePool:null,transitions:null}}function u0(e,t,n){var r=t.pendingProps,i=Se.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(Se,i&1),e===null)return bc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dl(o,r,0,null),e=wr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Hc(n),t.memoizedState=Vc,e):Cd(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kS(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=wr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Hc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Vc,r}return s=e.child,e=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cd(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Po(e,t,n,r){return r!==null&&od(r),pi(t,e.child,null,n),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kS(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Fu(Error(x(422))),Po(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=wr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&pi(t,e.child,null,o),t.child.memoizedState=Hc(o),t.memoizedState=Vc,s);if((t.mode&1)===0)return Po(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Fu(s,r,void 0),Po(e,t,o,r)}if(a=(o&e.childLanes)!==0,St||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(e,i),Xt(r,e,i,-1))}return Id(),r=Fu(Error(x(421))),Po(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=MS.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Dt=jn(i.nextSibling),At=t,ve=!0,Gt=null,e!==null&&(Lt[bt++]=fn,Lt[bt++]=pn,Lt[bt++]=xr,fn=e.id,pn=e.overflow,xr=t),t=Cd(t,r.children),t.flags|=4096,t)}function bp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mc(e.return,t,n)}function zu(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(pt(e,t,r.children,n),r=Se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bp(e,n,t);else if(e.tag===19)bp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(Se,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ta(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zu(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ta(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zu(t,!0,n,null,s);break;case"together":zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function TS(e,t,n){switch(t.tag){case 3:l0(t),fi();break;case 5:My(t);break;case 1:kt(t.type)&&wa(t);break;case 4:dd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;pe(Ea,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(Se,Se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?u0(e,t,n):(pe(Se,Se.current&1),e=En(e,t,n),e!==null?e.sibling:null);pe(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return c0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,o0(e,t,n)}return En(e,t,n)}var h0,Wc,d0,f0;h0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};d0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pr(an.current);var s=null;switch(n){case"input":i=fc(e,i),r=fc(e,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=gc(e,i),r=gc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ya)}vc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};f0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wi(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function IS(e,t,n){var r=t.pendingProps;switch(sd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return kt(t.type)&&va(),st(t),null;case 3:return r=t.stateNode,mi(),ye(xt),ye(ht),pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gt!==null&&(Zc(Gt),Gt=null))),Wc(e,t),st(t),null;case 5:fd(t);var i=pr(Ds.current);if(n=t.type,e!==null&&t.stateNode!=null)d0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return st(t),null}if(e=pr(an.current),$o(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[rn]=t,r[Is]=s,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Xi.length;i++)ge(Xi[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Wf(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":qf(r,s),ge("invalid",r)}vc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",""+a]):gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Eo(r),Kf(r,s,!0);break;case"textarea":Eo(r),Gf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rn]=t,e[Is]=r,h0(e,t,!1,!1),t.stateNode=e;e:{switch(o=wc(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xi.length;i++)ge(Xi[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Wf(e,r),i=fc(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),ge("invalid",e);break;case"textarea":qf(e,r),i=gc(e,r),ge("invalid",e);break;default:i=r}vc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vg(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jg(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(e,l):typeof l=="number"&&ys(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",e):l!=null&&Hh(e,s,l,o))}switch(n){case"input":Eo(e),Kf(e,r,!1);break;case"textarea":Eo(e),Gf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ni(e,!!r.multiple,s,!1):r.defaultValue!=null&&ni(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)f0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=pr(Ds.current),pr(an.current),$o(t)){if(r=t.stateNode,n=t.memoizedProps,r[rn]=t,(s=r.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=t,t.stateNode=r}return st(t),null;case 13:if(ye(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&Dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ny(),fi(),t.flags|=98560,s=!1;else if(s=$o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(x(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[rn]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;st(t),s=!1}else Gt!==null&&(Zc(Gt),Gt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Se.current&1)!==0?Oe===0&&(Oe=3):Id())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return mi(),Wc(e,t),e===null&&ks(t.stateNode.containerInfo),st(t),null;case 10:return ud(t.type._context),st(t),null;case 17:return kt(t.type)&&va(),st(t),null;case 19:if(ye(Se),s=t.memoizedState,s===null)return st(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Wi(s,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Ta(e),o!==null){for(t.flags|=128,Wi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(Se,Se.current&1|2),t.child}e=e.sibling}s.tail!==null&&De()>yi&&(t.flags|=128,r=!0,Wi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ta(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return st(t),null}else 2*De()-s.renderingStartTime>yi&&n!==1073741824&&(t.flags|=128,r=!0,Wi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,n=Se.current,pe(Se,r?n&1|2:n&1),t):(st(t),null);case 22:case 23:return Td(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(_t&1073741824)!==0&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function _S(e,t){switch(sd(t),t.tag){case 1:return kt(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mi(),ye(xt),ye(ht),pd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return fd(t),null;case 13:if(ye(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Se),null;case 4:return mi(),null;case 10:return ud(t.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var Oo=!1,at=!1,DS=typeof WeakSet=="function"?WeakSet:Set,L=null;function Xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Kc(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Mp=!1;function AS(e,t){if(Ac=pa,e=yy(),rd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:e,selectionRange:n},pa=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Kt(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(C){Te(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Mp,Mp=!1,y}function as(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kc(t,n,s)}i=i.next}while(i!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function p0(e){var t=e.alternate;t!==null&&(e.alternate=null,p0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[Is],delete t[Pc],delete t[hS],delete t[dS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m0(e){return e.tag===5||e.tag===3||e.tag===4}function Fp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}var Qe=null,qt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)g0(e,t,n),n=n.sibling}function g0(e,t,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:at||Xr(n,t);case 6:var r=Qe,i=qt;Qe=null,Nn(e,t,n),Qe=r,qt=i,Qe!==null&&(qt?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(qt?(e=Qe,n=n.stateNode,e.nodeType===8?Ru(e.parentNode,n):e.nodeType===1&&Ru(e,n),Ss(e)):Ru(Qe,n.stateNode));break;case 4:r=Qe,i=qt,Qe=n.stateNode.containerInfo,qt=!0,Nn(e,t,n),Qe=r,qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Kc(n,t,o),i=i.next}while(i!==r)}Nn(e,t,n);break;case 1:if(!at&&(Xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,t,a)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Nn(e,t,n),at=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function zp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new DS),t.forEach(function(r){var i=FS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,qt=!1;break e;case 3:Qe=a.stateNode.containerInfo,qt=!0;break e;case 4:Qe=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(Qe===null)throw Error(x(160));g0(s,o,i),Qe=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)y0(t,e),t=t.sibling}function y0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),tn(e),r&4){try{as(3,e,e.return),cl(3,e)}catch(v){Te(e,e.return,v)}try{as(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Ht(t,e),tn(e),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(Ht(t,e),tn(e),r&512&&n!==null&&Xr(n,n.return),e.flags&32){var i=e.stateNode;try{ys(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fg(i,s),wc(a,o);var u=wc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Vg(i,h):c==="dangerouslySetInnerHTML"?jg(i,h):c==="children"?ys(i,h):Hh(i,c,h,u)}switch(a){case"input":pc(i,s);break;case"textarea":zg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ni(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ni(i,!!s.multiple,s.defaultValue,!0):ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Is]=s}catch(v){Te(e,e.return,v)}}break;case 6:if(Ht(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Te(e,e.return,v)}}break;case 3:if(Ht(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ss(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Ht(t,e),tn(e);break;case 13:Ht(t,e),tn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xd=De())),r&4&&zp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||c,Ht(t,e),at=u):Ht(t,e),tn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(L=e,c=e.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,m=d.child,d.tag){case 0:case 11:case 14:case 15:as(4,d,d.return);break;case 1:Xr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Xr(d,d.return);break;case 22:if(d.memoizedState!==null){jp(h);continue}}m!==null?(m.return=d,L=m):jp(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ug("display",o))}catch(v){Te(e,e.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Te(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ht(t,e),tn(e),r&4&&zp(e);break;case 21:break;default:Ht(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var s=Fp(e);Qc(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fp(e);Gc(e,a,o);break;default:throw Error(x(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function NS(e,t,n){L=e,v0(e)}function v0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Oo;var u=at;if(Oo=o,(at=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Up(i):l!==null?(l.return=o,L=l):Up(i);for(;s!==null;)L=s,v0(s),s=s.sibling;L=i,Oo=a,at=u}Bp(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):Bp(e)}}function Bp(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:at||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&xp(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xp(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ss(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}at||t.flags&512&&qc(t)}catch(d){Te(t,t.return,d)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function jp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Up(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(l){Te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Te(t,i,l)}}var s=t.return;try{qc(t)}catch(l){Te(t,s,l)}break;case 5:var o=t.return;try{qc(t)}catch(l){Te(t,o,l)}}}catch(l){Te(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var $S=Math.ceil,Da=_n.ReactCurrentDispatcher,Sd=_n.ReactCurrentOwner,zt=_n.ReactCurrentBatchConfig,ne=0,je=null,$e=null,Je=0,_t=0,Jr=sr(0),Oe=0,Rs=null,Tr=0,hl=0,Ed=0,ls=null,Ct=null,xd=0,yi=1/0,hn=null,Aa=!1,Yc=null,Vn=null,Lo=!1,bn=null,Na=0,us=0,Xc=null,ta=-1,na=0;function gt(){return(ne&6)!==0?De():ta!==-1?ta:ta=De()}function Hn(e){return(e.mode&1)===0?1:(ne&2)!==0&&Je!==0?Je&-Je:pS.transition!==null?(na===0&&(na=ty()),na):(e=ce,e!==0||(e=window.event,e=e===void 0?16:ly(e.type)),e)}function Xt(e,t,n,r){if(50<us)throw us=0,Xc=null,Error(x(185));Ys(e,n,r),((ne&2)===0||e!==je)&&(e===je&&((ne&2)===0&&(hl|=n),Oe===4&&On(e,Je)),Tt(e,r),n===1&&ne===0&&(t.mode&1)===0&&(yi=De()+500,al&&or()))}function Tt(e,t){var n=e.callbackNode;pC(e,t);var r=fa(e,e===je?Je:0);if(r===0)n!==null&&Xf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xf(n),t===1)e.tag===0?fS(Vp.bind(null,e)):_y(Vp.bind(null,e)),uS(function(){(ne&6)===0&&or()}),n=null;else{switch(ny(r)){case 1:n=Qh;break;case 4:n=Zg;break;case 16:n=da;break;case 536870912:n=ey;break;default:n=da}n=I0(n,w0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function w0(e,t){if(ta=-1,na=0,(ne&6)!==0)throw Error(x(327));var n=e.callbackNode;if(ai()&&e.callbackNode!==n)return null;var r=fa(e,e===je?Je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=$a(e,r);else{t=r;var i=ne;ne|=2;var s=S0();(je!==e||Je!==t)&&(hn=null,yi=De()+500,vr(e,t));do try{OS();break}catch(a){C0(e,a)}while(1);ld(),Da.current=s,ne=i,$e!==null?t=0:(je=null,Je=0,t=Oe)}if(t!==0){if(t===2&&(i=kc(e),i!==0&&(r=i,t=Jc(e,i))),t===1)throw n=Rs,vr(e,0),On(e,r),Tt(e,De()),n;if(t===6)On(e,r);else{if(i=e.current.alternate,(r&30)===0&&!RS(i)&&(t=$a(e,r),t===2&&(s=kc(e),s!==0&&(r=s,t=Jc(e,s))),t===1))throw n=Rs,vr(e,0),On(e,r),Tt(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:cr(e,Ct,hn);break;case 3:if(On(e,r),(r&130023424)===r&&(t=xd+500-De(),10<t)){if(fa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rc(cr.bind(null,e,Ct,hn),t);break}cr(e,Ct,hn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){e.timeoutHandle=Rc(cr.bind(null,e,Ct,hn),r);break}cr(e,Ct,hn);break;case 5:cr(e,Ct,hn);break;default:throw Error(x(329))}}}return Tt(e,De()),e.callbackNode===n?w0.bind(null,e):null}function Jc(e,t){var n=ls;return e.current.memoizedState.isDehydrated&&(vr(e,t).flags|=256),e=$a(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&Zc(t)),e}function Zc(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function RS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~Ed,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n;e[n]=-1,t&=~r}}function Vp(e){if((ne&6)!==0)throw Error(x(327));ai();var t=fa(e,0);if((t&1)===0)return Tt(e,De()),null;var n=$a(e,t);if(e.tag!==0&&n===2){var r=kc(e);r!==0&&(t=r,n=Jc(e,r))}if(n===1)throw n=Rs,vr(e,0),On(e,t),Tt(e,De()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,Ct,hn),Tt(e,De()),null}function kd(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(yi=De()+500,al&&or())}}function Ir(e){bn!==null&&bn.tag===0&&(ne&6)===0&&ai();var t=ne;ne|=1;var n=zt.transition,r=ce;try{if(zt.transition=null,ce=1,e)return e()}finally{ce=r,zt.transition=n,ne=t,(ne&6)===0&&or()}}function Td(){_t=Jr.current,ye(Jr)}function vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lS(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:mi(),ye(xt),ye(ht),pd();break;case 5:fd(r);break;case 4:mi();break;case 13:ye(Se);break;case 19:ye(Se);break;case 10:ud(r.type._context);break;case 22:case 23:Td()}n=n.return}if(je=e,$e=e=Wn(e.current,null),Je=_t=t,Oe=0,Rs=null,Ed=hl=Tr=0,Ct=ls=null,fr!==null){for(t=0;t<fr.length;t++)if(n=fr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fr=null}return e}function C0(e,t){do{var n=$e;try{if(ld(),Jo.current=_a,Ia){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ia=!1}if(kr=0,Be=Pe=Ee=null,os=!1,As=0,Sd.current=null,n===null||n.return===null){Oe=1,Rs=t,$e=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Np(o);if(m!==null){m.flags&=-257,$p(m,o,a,s,t),m.mode&1&&Ap(s,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if((t&1)===0){Ap(s,u,t),Id();break e}l=Error(x(426))}}else if(ve&&a.mode&1){var S=Np(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),$p(S,o,a,s,t),od(gi(l,a));break e}}s=l=gi(l,a),Oe!==4&&(Oe=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=r0(s,l,t);Ep(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vn===null||!Vn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=i0(s,a,t);Ep(s,C);break e}}s=s.return}while(s!==null)}x0(n)}catch(T){t=T,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function S0(){var e=Da.current;return Da.current=_a,e===null?_a:e}function Id(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),je===null||(Tr&268435455)===0&&(hl&268435455)===0||On(je,Je)}function $a(e,t){var n=ne;ne|=2;var r=S0();(je!==e||Je!==t)&&(hn=null,vr(e,t));do try{PS();break}catch(i){C0(e,i)}while(1);if(ld(),ne=n,Da.current=r,$e!==null)throw Error(x(261));return je=null,Je=0,Oe}function PS(){for(;$e!==null;)E0($e)}function OS(){for(;$e!==null&&!sC();)E0($e)}function E0(e){var t=T0(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?x0(e):$e=t,Sd.current=null}function x0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=IS(n,t,_t),n!==null){$e=n;return}}else{if(n=_S(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Oe===0&&(Oe=5)}function cr(e,t,n){var r=ce,i=zt.transition;try{zt.transition=null,ce=1,LS(e,t,n,r)}finally{zt.transition=i,ce=r}return null}function LS(e,t,n,r){do ai();while(bn!==null);if((ne&6)!==0)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(mC(e,s),e===je&&($e=je=null,Je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Lo||(Lo=!0,I0(da,function(){return ai(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=zt.transition,zt.transition=null;var o=ce;ce=1;var a=ne;ne|=4,Sd.current=null,AS(e,n),y0(n,e),tS(Nc),pa=!!Ac,Nc=Ac=null,e.current=n,NS(n),oC(),ne=a,ce=o,zt.transition=s}else e.current=n;if(Lo&&(Lo=!1,bn=e,Na=i),s=e.pendingLanes,s===0&&(Vn=null),uC(n.stateNode),Tt(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Aa)throw Aa=!1,e=Yc,Yc=null,e;return(Na&1)!==0&&e.tag!==0&&ai(),s=e.pendingLanes,(s&1)!==0?e===Xc?us++:(us=0,Xc=e):us=0,or(),null}function ai(){if(bn!==null){var e=ny(Na),t=zt.transition,n=ce;try{if(zt.transition=null,ce=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,Na=0,(ne&6)!==0)throw Error(x(331));var i=ne;for(ne|=4,L=e.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:as(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,m=c.return;if(p0(c),c===u){L=null;break}if(d!==null){d.return=m,L=d;break}L=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var f=e.current;for(L=f;L!==null;){o=L;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,L=g;else e:for(o=f;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(T){Te(a,a.return,T)}if(a===o){L=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,L=C;break e}L=a.return}}if(ne=i,or(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{ce=n,zt.transition=t}}return!1}function Hp(e,t,n){t=gi(n,t),t=r0(e,t,1),e=Un(e,t,1),t=gt(),e!==null&&(Ys(e,1,t),Tt(e,t))}function Te(e,t,n){if(e.tag===3)Hp(e,e,n);else for(;t!==null;){if(t.tag===3){Hp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=gi(n,e),e=i0(t,e,1),t=Un(t,e,1),e=gt(),t!==null&&(Ys(t,1,e),Tt(t,e));break}}t=t.return}}function bS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Je&n)===n&&(Oe===4||Oe===3&&(Je&130023424)===Je&&500>De()-xd?vr(e,0):Ed|=n),Tt(e,t)}function k0(e,t){t===0&&((e.mode&1)===0?t=1:(t=To,To<<=1,(To&130023424)===0&&(To=4194304)));var n=gt();e=Sn(e,t),e!==null&&(Ys(e,t,n),Tt(e,n))}function MS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),k0(e,n)}function FS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),k0(e,n)}var T0;T0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)St=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return St=!1,TS(e,t,n);St=(e.flags&131072)!==0}else St=!1,ve&&(t.flags&1048576)!==0&&Dy(t,Sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ea(e,t),e=t.pendingProps;var i=di(t,ht.current);oi(t,n),i=gd(null,t,r,e,i,n);var s=yd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(s=!0,wa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(t),i.updater=ll,t.stateNode=i,i._reactInternals=t,zc(t,r,e,n),t=Uc(null,t,r,!0,s,n)):(t.tag=0,ve&&s&&id(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=BS(r),e=Kt(r,e),i){case 0:t=jc(null,t,r,e,n);break e;case 1:t=Op(null,t,r,e,n);break e;case 11:t=Rp(null,t,r,e,n);break e;case 14:t=Pp(null,t,r,Kt(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),jc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),Op(e,t,r,i,n);case 3:e:{if(l0(t),e===null)throw Error(x(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ry(e,t),ka(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=gi(Error(x(423)),t),t=Lp(e,t,r,n,i);break e}else if(r!==i){i=gi(Error(x(424)),t),t=Lp(e,t,r,n,i);break e}else for(Dt=jn(t.stateNode.containerInfo.firstChild),At=t,ve=!0,Gt=null,n=by(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fi(),r===i){t=En(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return My(t),e===null&&bc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,$c(r,i)?o=null:s!==null&&$c(r,s)&&(t.flags|=32),a0(e,t),pt(e,t,o,n),t.child;case 6:return e===null&&bc(t),null;case 13:return u0(e,t,n);case 4:return dd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pi(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),Rp(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,pe(Ea,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!xt.current){t=En(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=gn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mc(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mc(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oi(t,n),i=Bt(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=Kt(r,t.pendingProps),i=Kt(r.type,i),Pp(e,t,r,i,n);case 15:return s0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),ea(e,t),t.tag=1,kt(r)?(e=!0,wa(t)):e=!1,oi(t,n),Oy(t,r,i),zc(t,r,i,n),Uc(null,t,r,!0,e,n);case 19:return c0(e,t,n);case 22:return o0(e,t,n)}throw Error(x(156,t.tag))};function I0(e,t){return Jg(e,t)}function zS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new zS(e,t,n,r)}function _d(e){return e=e.prototype,!(!e||!e.isReactComponent)}function BS(e){if(typeof e=="function")return _d(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kh)return 11;if(e===qh)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ra(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")_d(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ur:return wr(n.children,i,s,t);case Wh:o=8,i|=8;break;case uc:return e=Ft(12,n,t,i|2),e.elementType=uc,e.lanes=s,e;case cc:return e=Ft(13,n,t,i),e.elementType=cc,e.lanes=s,e;case hc:return e=Ft(19,n,t,i),e.elementType=hc,e.lanes=s,e;case Lg:return dl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pg:o=10;break e;case Og:o=9;break e;case Kh:o=11;break e;case qh:o=14;break e;case $n:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ft(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function wr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Lg,e.lanes=n,e.stateNode={isHidden:!1},e}function Bu(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function ju(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(e,t,n,r,i,s,o,a,l){return e=new jS(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ft(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(s),e}function US(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _0(e){if(!e)return er;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(kt(n))return Iy(e,n,t)}return t}function D0(e,t,n,r,i,s,o,a,l){return e=Dd(n,r,!0,e,i,s,o,a,l),e.context=_0(null),n=e.current,r=gt(),i=Hn(n),s=gn(r,i),s.callback=t!=null?t:null,Un(n,s,i),e.current.lanes=i,Ys(e,i,r),Tt(e,r),e}function fl(e,t,n,r){var i=t.current,s=gt(),o=Hn(i);return n=_0(n),t.context===null?t.context=n:t.pendingContext=n,t=gn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Un(i,t,o),e!==null&&(Xt(e,i,o,s),Xo(e,i,o)),o}function Ra(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ad(e,t){Wp(e,t),(e=e.alternate)&&Wp(e,t)}function VS(){return null}var A0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nd(e){this._internalRoot=e}pl.prototype.render=Nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));fl(e,t,null,null)};pl.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){fl(null,e,null,null)}),t[Cn]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&ay(e)}};function $d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function HS(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ra(o);s.call(u)}}var o=D0(t,r,e,0,null,!1,!1,"",Kp);return e._reactRootContainer=o,e[Cn]=o.current,ks(e.nodeType===8?e.parentNode:e),Ir(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ra(l);a.call(u)}}var l=Dd(e,0,!1,null,null,!1,!1,"",Kp);return e._reactRootContainer=l,e[Cn]=l.current,ks(e.nodeType===8?e.parentNode:e),Ir(function(){fl(t,l,n,r)}),l}function gl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ra(o);a.call(l)}}fl(t,o,e,i)}else o=HS(n,t,e,i,r);return Ra(o)}ry=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yi(t.pendingLanes);n!==0&&(Yh(t,n|1),Tt(t,De()),(ne&6)===0&&(yi=De()+500,or()))}break;case 13:Ir(function(){var r=Sn(e,1);if(r!==null){var i=gt();Xt(r,e,1,i)}}),Ad(e,1)}};Xh=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=gt();Xt(t,e,134217728,n)}Ad(e,134217728)}};iy=function(e){if(e.tag===13){var t=Hn(e),n=Sn(e,t);if(n!==null){var r=gt();Xt(n,e,t,r)}Ad(e,t)}};sy=function(){return ce};oy=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Sc=function(e,t,n){switch(t){case"input":if(pc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ol(r);if(!i)throw Error(x(90));Mg(r),pc(r,i)}}}break;case"textarea":zg(e,n);break;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}};Kg=kd;qg=Ir;var WS={usingClientEntryPoint:!1,Events:[Js,Kr,ol,Hg,Wg,kd]},Ki={findFiberByHostInstance:dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KS={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||VS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{nl=bo.inject(KS),on=bo}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(t))throw Error(x(200));return US(e,t,null,n)};Rt.createRoot=function(e,t){if(!$d(e))throw Error(x(299));var n=!1,r="",i=A0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dd(e,1,!1,null,null,n,!1,r,i),e[Cn]=t.current,ks(e.nodeType===8?e.parentNode:e),new Nd(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Yg(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Ir(e)};Rt.hydrate=function(e,t,n){if(!ml(t))throw Error(x(200));return gl(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!$d(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=A0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=D0(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Cn]=t.current,ks(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pl(t)};Rt.render=function(e,t,n){if(!ml(t))throw Error(x(200));return gl(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!ml(e))throw Error(x(40));return e._reactRootContainer?(Ir(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1};Rt.unstable_batchedUpdates=kd;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return gl(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Rt})(Dg);var qp=Dg.exports;ac.createRoot=qp.createRoot,ac.hydrateRoot=qp.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}var Mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mn||(Mn={}));const Gp="popstate";function qS(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:a="",hash:l=""}=Or(i.location.hash.substr(1));return eh("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:th(s))}function r(i,s){GS(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return YS(t,n,r,e)}function GS(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function QS(){return Math.random().toString(36).substr(2,8)}function Qp(e){return{usr:e.state,key:e.key}}function eh(e,t,n,r){return n===void 0&&(n=null),Pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Or(t):t,{state:n,key:t&&t.key||r||QS()})}function th(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function YS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Mn.Pop,l=null;function u(){a=Mn.Pop,l&&l({action:a,location:d.location})}function c(m,y){a=Mn.Push;let v=eh(d.location,m,y);n&&n(v,m);let S=Qp(v),p=d.createHref(v);try{o.pushState(S,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:v})}function h(m,y){a=Mn.Replace;let v=eh(d.location,m,y);n&&n(v,m);let S=Qp(v),p=d.createHref(v);o.replaceState(S,"",p),s&&l&&l({action:a,location:v})}let d={get action(){return a},get location(){return e(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gp,u),l=m,()=>{i.removeEventListener(Gp,u),l=null}},createHref(m){return t(i,m)},push:c,replace:h,go(m){return o.go(m)}};return d}var Yp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yp||(Yp={}));function XS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Or(t):t,i=$0(r.pathname||"/",n);if(i==null)return null;let s=N0(e);JS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=aE(s[a],i);return o}function N0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Ue(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Kn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),N0(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:sE(a,i.index),routesMeta:l})}),t}function JS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:oE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZS=/^:\w+$/,eE=3,tE=2,nE=1,rE=10,iE=-2,Xp=e=>e==="*";function sE(e,t){let n=e.split("/"),r=n.length;return n.some(Xp)&&(r+=iE),t&&(r+=tE),n.filter(i=>!Xp(i)).reduce((i,s)=>i+(ZS.test(s)?eE:s===""?nE:rE),r)}function oE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function aE(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=lE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:fE(Kn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function lE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=cE(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function uE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),R0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function cE(e,t){try{return decodeURIComponent(e)}catch(n){return R0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function R0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Or(e):e;return{pathname:n?n.startsWith("/")?n:dE(n,t):t,search:pE(r),hash:mE(i)}}function dE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function P0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Or(e):(i=Pa({},e),Ue(!i.pathname||!i.pathname.includes("?"),Uu("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),Uu("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),Uu("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=t.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?t[h]:"/"}let l=hE(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),fE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class gE{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function yE(e){return e instanceof gE}var yl={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=b.exports,wE=Symbol.for("react.element"),CE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,EE=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xE={key:!0,ref:!0,__self:!0,__source:!0};function O0(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)SE.call(t,r)&&!xE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wE,type:e,key:s,ref:o,props:i,_owner:EE.current}}vl.Fragment=CE;vl.jsx=O0;vl.jsxs=O0;(function(e){e.exports=vl})(yl);const kE=yl.exports.Fragment,E=yl.exports.jsx,te=yl.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nh(){return nh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nh.apply(this,arguments)}function TE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const IE=typeof Object.is=="function"?Object.is:TE,{useState:_E,useEffect:DE,useLayoutEffect:AE,useDebugValue:NE}=oc;function $E(e,t,n){const r=t(),[{inst:i},s]=_E({inst:{value:r,getSnapshot:t}});return AE(()=>{i.value=r,i.getSnapshot=t,Vu(i)&&s({inst:i})},[e,r,t]),DE(()=>(Vu(i)&&s({inst:i}),e(()=>{Vu(i)&&s({inst:i})})),[e]),NE(r),r}function Vu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!IE(n,r)}catch{return!0}}function RE(e,t,n){return t()}const PE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OE=!PE,LE=OE?RE:$E;"useSyncExternalStore"in oc&&(e=>e.useSyncExternalStore)(oc);const bE=b.exports.createContext(null),ME=b.exports.createContext(null),L0=b.exports.createContext(null),Rd=b.exports.createContext(null),wl=b.exports.createContext(null),eo=b.exports.createContext({outlet:null,matches:[]}),b0=b.exports.createContext(null);function FE(e,t){let{relative:n}=t===void 0?{}:t;to()||Ue(!1);let{basename:r,navigator:i}=b.exports.useContext(Rd),{hash:s,pathname:o,search:a}=F0(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function to(){return b.exports.useContext(wl)!=null}function Cl(){return to()||Ue(!1),b.exports.useContext(wl).location}function M0(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function zE(){to()||Ue(!1);let{basename:e,navigator:t}=b.exports.useContext(Rd),{matches:n}=b.exports.useContext(eo),{pathname:r}=Cl(),i=JSON.stringify(M0(n).map(a=>a.pathnameBase)),s=b.exports.useRef(!1);return b.exports.useEffect(()=>{s.current=!0}),b.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let u=P0(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Kn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function F0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.exports.useContext(eo),{pathname:i}=Cl(),s=JSON.stringify(M0(r).map(o=>o.pathnameBase));return b.exports.useMemo(()=>P0(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function BE(e,t){to()||Ue(!1);let n=b.exports.useContext(L0),{matches:r}=b.exports.useContext(eo),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Cl(),l;if(t){var u;let y=typeof t=="string"?Or(t):t;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||Ue(!1),l=y}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=XS(e,{pathname:h}),m=HE(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Kn([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:Kn([o,y.pathnameBase])})),r,n||void 0);return t?E(wl.Provider,{value:{location:nh({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Mn.Pop},children:m}):m}function jE(){let e=KE(),t=yE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return te(kE,{children:[E("h2",{children:"Unhandled Thrown Error!"}),E("h3",{style:{fontStyle:"italic"},children:t}),n?E("pre",{style:i,children:n}):null,E("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),te("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",E("code",{style:s,children:"errorElement"})," props on\xA0",E("code",{style:s,children:"<Route>"})]})]})}class UE extends b.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E(b0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function VE(e){let{routeContext:t,match:n,children:r}=e,i=b.exports.useContext(bE);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),E(eo.Provider,{value:t,children:r})}function HE(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ue(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||E(jE,{}):null,c=()=>E(VE,{match:o,routeContext:{outlet:s,matches:t.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?E(UE,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Jp;(function(e){e.UseRevalidator="useRevalidator"})(Jp||(Jp={}));var rh;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(rh||(rh={}));function WE(e){let t=b.exports.useContext(L0);return t||Ue(!1),t}function KE(){var e;let t=b.exports.useContext(b0),n=WE(rh.UseRouteError),r=b.exports.useContext(eo),i=r.matches[r.matches.length-1];return t||(r||Ue(!1),i.route.id||Ue(!1),(e=n.errors)==null?void 0:e[i.route.id])}function Br(e){Ue(!1)}function qE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:s,static:o=!1}=e;to()&&Ue(!1);let a=t.replace(/^\/*/,"/"),l=b.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Or(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=b.exports.useMemo(()=>{let v=$0(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:E(Rd.Provider,{value:l,children:E(wl.Provider,{children:n,value:{location:y,navigationType:i}})})}function GE(e){let{children:t,location:n}=e,r=b.exports.useContext(ME),i=r&&!t?r.router.routes:ih(t);return BE(i,n)}var Zp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Zp||(Zp={}));new Promise(()=>{});function ih(e,t){t===void 0&&(t=[]);let n=[];return b.exports.Children.forEach(e,(r,i)=>{if(!b.exports.isValidElement(r))return;if(r.type===b.exports.Fragment){n.push.apply(n,ih(r.props.children,t));return}r.type!==Br&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let s=[...t,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ih(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function QE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function YE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function XE(e,t){return e.button===0&&(!t||t==="_self")&&!YE(e)}const JE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ZE(e){let{basename:t,children:n,window:r}=e,i=b.exports.useRef();i.current==null&&(i.current=qS({window:r,v5Compat:!0}));let s=i.current,[o,a]=b.exports.useState({action:s.action,location:s.location});return b.exports.useLayoutEffect(()=>s.listen(a),[s]),E(qE,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const no=b.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,h=QE(t,JE),d=FE(u,{relative:i}),m=e2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(v){r&&r(v),v.defaultPrevented||m(v)}return E("a",{...h,href:d,onClick:s?r:y,ref:n,target:l})});var em;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(em||(em={}));var tm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tm||(tm={}));function e2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=zE(),l=Cl(),u=F0(e,{relative:o});return b.exports.useCallback(c=>{if(XE(c,n)){c.preventDefault();let h=r!==void 0?r:th(l)===th(u);a(e,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Pd={exports:{}},he={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Sl=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),kl=Symbol.for("react.provider"),Tl=Symbol.for("react.context"),t2=Symbol.for("react.server_context"),Il=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),n2=Symbol.for("react.offscreen"),z0;z0=Symbol.for("react.module.reference");function Ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Od:switch(e=e.type,e){case Sl:case xl:case El:case _l:case Dl:return e;default:switch(e=e&&e.$$typeof,e){case t2:case Tl:case Il:case Nl:case Al:case kl:return e;default:return t}}case Ld:return t}}}he.ContextConsumer=Tl;he.ContextProvider=kl;he.Element=Od;he.ForwardRef=Il;he.Fragment=Sl;he.Lazy=Nl;he.Memo=Al;he.Portal=Ld;he.Profiler=xl;he.StrictMode=El;he.Suspense=_l;he.SuspenseList=Dl;he.isAsyncMode=function(){return!1};he.isConcurrentMode=function(){return!1};he.isContextConsumer=function(e){return Ut(e)===Tl};he.isContextProvider=function(e){return Ut(e)===kl};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Od};he.isForwardRef=function(e){return Ut(e)===Il};he.isFragment=function(e){return Ut(e)===Sl};he.isLazy=function(e){return Ut(e)===Nl};he.isMemo=function(e){return Ut(e)===Al};he.isPortal=function(e){return Ut(e)===Ld};he.isProfiler=function(e){return Ut(e)===xl};he.isStrictMode=function(e){return Ut(e)===El};he.isSuspense=function(e){return Ut(e)===_l};he.isSuspenseList=function(e){return Ut(e)===Dl};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Sl||e===xl||e===El||e===_l||e===Dl||e===n2||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===Al||e.$$typeof===kl||e.$$typeof===Tl||e.$$typeof===Il||e.$$typeof===z0||e.getModuleId!==void 0)};he.typeOf=Ut;(function(e){e.exports=he})(Pd);function r2(e){function t(A,$,O,V,w){for(var Z=0,D=0,ke=0,se=0,ue,Q,Ke=0,wt=0,ie,rt=ie=ue=0,oe=0,qe=0,Mi=0,Ge=0,wo=O.length,Fi=wo-1,Vt,K="",_e="",pu="",mu="",An;oe<wo;){if(Q=O.charCodeAt(oe),oe===Fi&&D+se+ke+Z!==0&&(D!==0&&(Q=D===47?10:47),se=ke=Z=0,wo++,Fi++),D+se+ke+Z===0){if(oe===Fi&&(0<qe&&(K=K.replace(d,"")),0<K.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:K+=O.charAt(oe)}Q=59}switch(Q){case 123:for(K=K.trim(),ue=K.charCodeAt(0),ie=1,Ge=++oe;oe<wo;){switch(Q=O.charCodeAt(oe)){case 123:ie++;break;case 125:ie--;break;case 47:switch(Q=O.charCodeAt(oe+1)){case 42:case 47:e:{for(rt=oe+1;rt<Fi;++rt)switch(O.charCodeAt(rt)){case 47:if(Q===42&&O.charCodeAt(rt-1)===42&&oe+2!==rt){oe=rt+1;break e}break;case 10:if(Q===47){oe=rt+1;break e}}oe=rt}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;oe++<Fi&&O.charCodeAt(oe)!==Q;);}if(ie===0)break;oe++}switch(ie=O.substring(Ge,oe),ue===0&&(ue=(K=K.replace(h,"").trim()).charCodeAt(0)),ue){case 64:switch(0<qe&&(K=K.replace(d,"")),Q=K.charCodeAt(1),Q){case 100:case 109:case 115:case 45:qe=$;break;default:qe=cn}if(ie=t($,qe,ie,Q,w+1),Ge=ie.length,0<_&&(qe=n(cn,K,Mi),An=a(3,ie,qe,$,We,Re,Ge,Q,w,V),K=qe.join(""),An!==void 0&&(Ge=(ie=An.trim()).length)===0&&(Q=0,ie="")),0<Ge)switch(Q){case 115:K=K.replace(N,o);case 100:case 109:case 45:ie=K+"{"+ie+"}";break;case 107:K=K.replace(f,"$1 $2"),ie=K+"{"+ie+"}",ie=nt===1||nt===2&&s("@"+ie,3)?"@-webkit-"+ie+"@"+ie:"@"+ie;break;default:ie=K+ie,V===112&&(ie=(_e+=ie,""))}else ie="";break;default:ie=t($,n($,K,Mi),ie,V,w+1)}pu+=ie,ie=Mi=qe=rt=ue=0,K="",Q=O.charCodeAt(++oe);break;case 125:case 59:if(K=(0<qe?K.replace(d,""):K).trim(),1<(Ge=K.length))switch(rt===0&&(ue=K.charCodeAt(0),ue===45||96<ue&&123>ue)&&(Ge=(K=K.replace(" ",":")).length),0<_&&(An=a(1,K,$,A,We,Re,_e.length,V,w,V))!==void 0&&(Ge=(K=An.trim()).length)===0&&(K="\0\0"),ue=K.charCodeAt(0),Q=K.charCodeAt(1),ue){case 0:break;case 64:if(Q===105||Q===99){mu+=K+O.charAt(oe);break}default:K.charCodeAt(Ge-1)!==58&&(_e+=i(K,ue,Q,K.charCodeAt(2)))}Mi=qe=rt=ue=0,K="",Q=O.charCodeAt(++oe)}}switch(Q){case 13:case 10:D===47?D=0:1+ue===0&&V!==107&&0<K.length&&(qe=1,K+="\0"),0<_*U&&a(0,K,$,A,We,Re,_e.length,V,w,V),Re=1,We++;break;case 59:case 125:if(D+se+ke+Z===0){Re++;break}default:switch(Re++,Vt=O.charAt(oe),Q){case 9:case 32:if(se+Z+D===0)switch(Ke){case 44:case 58:case 9:case 32:Vt="";break;default:Q!==32&&(Vt=" ")}break;case 0:Vt="\\0";break;case 12:Vt="\\f";break;case 11:Vt="\\v";break;case 38:se+D+Z===0&&(qe=Mi=1,Vt="\f"+Vt);break;case 108:if(se+D+Z+It===0&&0<rt)switch(oe-rt){case 2:Ke===112&&O.charCodeAt(oe-3)===58&&(It=Ke);case 8:wt===111&&(It=wt)}break;case 58:se+D+Z===0&&(rt=oe);break;case 44:D+ke+se+Z===0&&(qe=1,Vt+="\r");break;case 34:case 39:D===0&&(se=se===Q?0:se===0?Q:se);break;case 91:se+D+ke===0&&Z++;break;case 93:se+D+ke===0&&Z--;break;case 41:se+D+Z===0&&ke--;break;case 40:if(se+D+Z===0){if(ue===0)switch(2*Ke+3*wt){case 533:break;default:ue=1}ke++}break;case 64:D+ke+se+Z+rt+ie===0&&(ie=1);break;case 42:case 47:if(!(0<se+Z+ke))switch(D){case 0:switch(2*Q+3*O.charCodeAt(oe+1)){case 235:D=47;break;case 220:Ge=oe,D=42}break;case 42:Q===47&&Ke===42&&Ge+2!==oe&&(O.charCodeAt(Ge+2)===33&&(_e+=O.substring(Ge,oe+1)),Vt="",D=0)}}D===0&&(K+=Vt)}wt=Ke,Ke=Q,oe++}if(Ge=_e.length,0<Ge){if(qe=$,0<_&&(An=a(2,_e,qe,A,We,Re,Ge,V,w,V),An!==void 0&&(_e=An).length===0))return mu+_e+pu;if(_e=qe.join(",")+"{"+_e+"}",nt*It!==0){switch(nt!==2||s(_e,2)||(It=0),It){case 111:_e=_e.replace(C,":-moz-$1")+_e;break;case 112:_e=_e.replace(g,"::-webkit-input-$1")+_e.replace(g,"::-moz-$1")+_e.replace(g,":-ms-input-$1")+_e}It=0}}return mu+_e+pu}function n(A,$,O){var V=$.trim().split(S);$=V;var w=V.length,Z=A.length;switch(Z){case 0:case 1:var D=0;for(A=Z===0?"":A[0]+" ";D<w;++D)$[D]=r(A,$[D],O).trim();break;default:var ke=D=0;for($=[];D<w;++D)for(var se=0;se<Z;++se)$[ke++]=r(A[se]+" ",V[D],O).trim()}return $}function r(A,$,O){var V=$.charCodeAt(0);switch(33>V&&(V=($=$.trim()).charCodeAt(0)),V){case 38:return $.replace(p,"$1"+A.trim());case 58:return A.trim()+$.replace(p,"$1"+A.trim());default:if(0<1*O&&0<$.indexOf("\f"))return $.replace(p,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+$}function i(A,$,O,V){var w=A+";",Z=2*$+3*O+4*V;if(Z===944){A=w.indexOf(":",9)+1;var D=w.substring(A,w.length-1).trim();return D=w.substring(0,A).trim()+D+";",nt===1||nt===2&&s(D,1)?"-webkit-"+D+D:D}if(nt===0||nt===2&&!s(w,1))return w;switch(Z){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(Fe,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return D=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+w+"-ms-flex-pack"+D+w;case 1005:return y.test(w)?w.replace(m,":-webkit-")+w.replace(m,":-moz-")+w:w;case 1e3:switch(D=w.substring(13).trim(),$=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt($)){case 226:D=w.replace(T,"tb");break;case 232:D=w.replace(T,"tb-rl");break;case 220:D=w.replace(T,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+D+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch($=(w=A).length-10,D=(w.charCodeAt($)===33?w.substring(0,$):w).substring(A.indexOf(":",7)+1).trim(),Z=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:w=w.replace(D,"-webkit-"+D)+";"+w;break;case 207:case 102:w=w.replace(D,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+w.replace(D,"-webkit-"+D)+";"+w.replace(D,"-ms-"+D+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return D=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+D+"-ms-flex-"+D+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(P,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(P,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(W.test(A)===!0)return(D=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?i(A.replace("stretch","fill-available"),$,O,V).replace(":fill-available",":stretch"):w.replace(D,"-webkit-"+D)+w.replace(D,"-moz-"+D.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,O+V===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+w}return w}function s(A,$){var O=A.indexOf($===1?":":"{"),V=A.substring(0,$!==3?O:10);return O=A.substring(O+1,A.length-1),j($!==2?V:V.replace(re,"$1"),O,$)}function o(A,$){var O=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return O!==$+";"?O.replace(R," or ($1)").substring(4):"("+$+")"}function a(A,$,O,V,w,Z,D,ke,se,ue){for(var Q=0,Ke=$,wt;Q<_;++Q)switch(wt=ft[Q].call(c,A,Ke,O,V,w,Z,D,ke,se,ue)){case void 0:case!1:case!0:case null:break;default:Ke=wt}if(Ke!==$)return Ke}function l(A){switch(A){case void 0:case null:_=ft.length=0;break;default:if(typeof A=="function")ft[_++]=A;else if(typeof A=="object")for(var $=0,O=A.length;$<O;++$)l(A[$]);else U=!!A|0}return l}function u(A){return A=A.prefix,A!==void 0&&(j=null,A?typeof A!="function"?nt=1:(nt=2,j=A):nt=0),u}function c(A,$){var O=A;if(33>O.charCodeAt(0)&&(O=O.trim()),fe=O,O=[fe],0<_){var V=a(-1,$,O,O,We,Re,0,0,0,0);V!==void 0&&typeof V=="string"&&($=V)}var w=t(cn,O,$,0,0);return 0<_&&(V=a(-2,w,O,O,We,Re,w.length,0,0,0),V!==void 0&&(w=V)),fe="",It=0,Re=We=1,w}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,C=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,P=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,Fe=/([^-])(image-set\()/,Re=1,We=1,It=0,nt=1,cn=[],ft=[],_=0,j=null,U=0,fe="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var i2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nm=s2(function(e){return o2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),B0={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,bd=He?Symbol.for("react.element"):60103,Md=He?Symbol.for("react.portal"):60106,$l=He?Symbol.for("react.fragment"):60107,Rl=He?Symbol.for("react.strict_mode"):60108,Pl=He?Symbol.for("react.profiler"):60114,Ol=He?Symbol.for("react.provider"):60109,Ll=He?Symbol.for("react.context"):60110,Fd=He?Symbol.for("react.async_mode"):60111,bl=He?Symbol.for("react.concurrent_mode"):60111,Ml=He?Symbol.for("react.forward_ref"):60112,Fl=He?Symbol.for("react.suspense"):60113,a2=He?Symbol.for("react.suspense_list"):60120,zl=He?Symbol.for("react.memo"):60115,Bl=He?Symbol.for("react.lazy"):60116,l2=He?Symbol.for("react.block"):60121,u2=He?Symbol.for("react.fundamental"):60117,c2=He?Symbol.for("react.responder"):60118,h2=He?Symbol.for("react.scope"):60119;function Ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bd:switch(e=e.type,e){case Fd:case bl:case $l:case Pl:case Rl:case Fl:return e;default:switch(e=e&&e.$$typeof,e){case Ll:case Ml:case Bl:case zl:case Ol:return e;default:return t}}case Md:return t}}}function j0(e){return Ot(e)===bl}de.AsyncMode=Fd;de.ConcurrentMode=bl;de.ContextConsumer=Ll;de.ContextProvider=Ol;de.Element=bd;de.ForwardRef=Ml;de.Fragment=$l;de.Lazy=Bl;de.Memo=zl;de.Portal=Md;de.Profiler=Pl;de.StrictMode=Rl;de.Suspense=Fl;de.isAsyncMode=function(e){return j0(e)||Ot(e)===Fd};de.isConcurrentMode=j0;de.isContextConsumer=function(e){return Ot(e)===Ll};de.isContextProvider=function(e){return Ot(e)===Ol};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bd};de.isForwardRef=function(e){return Ot(e)===Ml};de.isFragment=function(e){return Ot(e)===$l};de.isLazy=function(e){return Ot(e)===Bl};de.isMemo=function(e){return Ot(e)===zl};de.isPortal=function(e){return Ot(e)===Md};de.isProfiler=function(e){return Ot(e)===Pl};de.isStrictMode=function(e){return Ot(e)===Rl};de.isSuspense=function(e){return Ot(e)===Fl};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$l||e===bl||e===Pl||e===Rl||e===Fl||e===a2||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===zl||e.$$typeof===Ol||e.$$typeof===Ll||e.$$typeof===Ml||e.$$typeof===u2||e.$$typeof===c2||e.$$typeof===h2||e.$$typeof===l2)};de.typeOf=Ot;(function(e){e.exports=de})(B0);var zd=B0.exports,d2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},p2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},U0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bd={};Bd[zd.ForwardRef]=p2;Bd[zd.Memo]=U0;function rm(e){return zd.isMemo(e)?U0:Bd[e.$$typeof]||d2}var m2=Object.defineProperty,g2=Object.getOwnPropertyNames,im=Object.getOwnPropertySymbols,y2=Object.getOwnPropertyDescriptor,v2=Object.getPrototypeOf,sm=Object.prototype;function V0(e,t,n){if(typeof t!="string"){if(sm){var r=v2(t);r&&r!==sm&&V0(e,r,n)}var i=g2(t);im&&(i=i.concat(im(t)));for(var s=rm(e),o=rm(t),a=0;a<i.length;++a){var l=i[a];if(!f2[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=y2(t,l);try{m2(e,l,u)}catch{}}}}return e}var w2=V0;function Qt(){return(Qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var om=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},sh=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Pd.exports.typeOf(e)},Oa=Object.freeze([]),qn=Object.freeze({});function vi(e){return typeof e=="function"}function am(e){return e.displayName||e.name||"Component"}function jd(e){return e&&typeof e.styledComponentId=="string"}var wi=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ud=typeof window<"u"&&"HTMLElement"in window,C2=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),S2={};function _r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E2=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&_r(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ia=new Map,La=new Map,cs=1,Mo=function(e){if(ia.has(e))return ia.get(e);for(;La.has(cs);)cs++;var t=cs++;return ia.set(e,t),La.set(t,e),t},x2=function(e){return La.get(e)},k2=function(e,t){t>=cs&&(cs=t+1),ia.set(e,t),La.set(t,e)},T2="style["+wi+'][data-styled-version="5.3.6"]',I2=new RegExp("^"+wi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),_2=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},D2=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(I2);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(k2(u,l),_2(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},A2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},H0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(wi))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(wi,"active"),r.setAttribute("data-styled-version","5.3.6");var o=A2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},N2=function(){function e(n){var r=this.element=H0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}_r(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),$2=function(){function e(n){var r=this.element=H0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),R2=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),lm=Ud,P2={isServer:!Ud,useCSSOMInjection:!C2},ba=function(){function e(n,r,i){n===void 0&&(n=qn),r===void 0&&(r={}),this.options=Qt({},P2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ud&&lm&&(lm=!1,function(s){for(var o=document.querySelectorAll(T2),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(wi)!=="active"&&(D2(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Mo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new R2(o):s?new N2(o):new $2(o),new E2(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Mo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Mo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Mo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=x2(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=wi+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),O2=/(a)(d)/gi,um=function(e){return String.fromCharCode(e+(e>25?39:97))};function oh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=um(t%52)+n;return(um(t%52)+n).replace(O2,"$1-$2")}var Zr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},W0=function(e){return Zr(5381,e)};function K0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vi(n)&&!jd(n))return!1}return!0}var L2=W0("5.3.6"),b2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&K0(t),this.componentId=n,this.baseHash=Zr(L2,n),this.baseStyle=r,ba.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Dr(this.rules,t,n,r).join(""),a=oh(Zr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Zr(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var y=Dr(m,t,n,r),v=Array.isArray(y)?y.join(""):y;c=Zr(c,v+d),h+=v}}if(h){var S=oh(c>>>0);if(!n.hasNameForId(i,S)){var p=r(h,"."+S,void 0,i);n.insertRules(i,S,p)}s.push(S)}}return s.join(" ")},e}(),M2=/^\s*\/\/.*$/gm,F2=[":","[",".","#"];function z2(e){var t,n,r,i,s=e===void 0?qn:e,o=s.options,a=o===void 0?qn:o,l=s.plugins,u=l===void 0?Oa:l,c=new r2(a),h=[],d=function(v){function S(p){if(p)try{v(p+"}")}catch{}}return function(p,f,g,C,T,N,R,P,re,W){switch(p){case 1:if(re===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(g[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),m=function(v,S,p){return S===0&&F2.indexOf(p[n.length])!==-1||p.match(i)?v:"."+t};function y(v,S,p,f){f===void 0&&(f="&");var g=v.replace(M2,""),C=S&&p?p+" "+S+" { "+g+" }":g;return t=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!S?"":S,C)}return c.use([].concat(u,[function(v,S,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(v){if(v===-2){var S=h;return h=[],S}}])),y.hash=u.length?u.reduce(function(v,S){return S.name||_r(15),Zr(v,S.name)},5381).toString():"",y}var q0=Zt.createContext();q0.Consumer;var G0=Zt.createContext(),B2=(G0.Consumer,new ba),ah=z2();function Q0(){return b.exports.useContext(q0)||B2}function Y0(){return b.exports.useContext(G0)||ah}var j2=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ah);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return _r(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ah),this.name+t.hash},e}(),U2=/([A-Z])/,V2=/([A-Z])/g,H2=/^ms-/,W2=function(e){return"-"+e.toLowerCase()};function cm(e){return U2.test(e)?e.replace(V2,W2).replace(H2,"-ms-"):e}var hm=function(e){return e==null||e===!1||e===""};function Dr(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Dr(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(hm(e))return"";if(jd(e))return"."+e.styledComponentId;if(vi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Dr(l,t,n,r)}var u;return e instanceof j2?n?(e.inject(n,r),e.getName(r)):e:sh(e)?function c(h,d){var m,y,v=[];for(var S in h)h.hasOwnProperty(S)&&!hm(h[S])&&(Array.isArray(h[S])&&h[S].isCss||vi(h[S])?v.push(cm(S)+":",h[S],";"):sh(h[S])?v.push.apply(v,c(h[S],S)):v.push(cm(S)+": "+(m=S,(y=h[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||m in i2?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(e):e.toString()}var dm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vd(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return vi(e)||sh(e)?dm(Dr(om(Oa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:dm(Dr(om(e,n)))}var X0=function(e,t,n){return n===void 0&&(n=qn),e.theme!==n.theme&&e.theme||t||n.theme},K2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q2=/(^-|-$)/g;function Hu(e){return e.replace(K2,"-").replace(q2,"")}var J0=function(e){return oh(W0(e)>>>0)};function Fo(e){return typeof e=="string"&&!0}var lh=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},G2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Q2(e,t,n){var r=e[n];lh(t)&&lh(r)?Z0(r,t):e[n]=t}function Z0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(lh(o))for(var a in o)G2(a)&&Q2(e,o[a],a)}return e}var Ps=Zt.createContext();Ps.Consumer;function Y2(e){var t=b.exports.useContext(Ps),n=b.exports.useMemo(function(){return function(r,i){if(!r)return _r(14);if(vi(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?_r(8):i?Qt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Zt.createElement(Ps.Provider,{value:n},e.children):null}var Wu={};function e1(e,t,n){var r=jd(e),i=!Fo(e),s=t.attrs,o=s===void 0?Oa:s,a=t.componentId,l=a===void 0?function(f,g){var C=typeof f!="string"?"sc":Hu(f);Wu[C]=(Wu[C]||0)+1;var T=C+"-"+J0("5.3.6"+C+Wu[C]);return g?g+"-"+T:T}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(f){return Fo(f)?"styled."+f:"Styled("+am(f)+")"}(e):u,h=t.displayName&&t.componentId?Hu(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(f,g,C){return e.shouldForwardProp(f,g,C)&&t.shouldForwardProp(f,g,C)}:e.shouldForwardProp);var y,v=new b2(n,h,r?e.componentStyle:void 0),S=v.isStatic&&o.length===0,p=function(f,g){return function(C,T,N,R){var P=C.attrs,re=C.componentStyle,W=C.defaultProps,Fe=C.foldedComponentIds,Re=C.shouldForwardProp,We=C.styledComponentId,It=C.target,nt=function(V,w,Z){V===void 0&&(V=qn);var D=Qt({},w,{theme:V}),ke={};return Z.forEach(function(se){var ue,Q,Ke,wt=se;for(ue in vi(wt)&&(wt=wt(D)),wt)D[ue]=ke[ue]=ue==="className"?(Q=ke[ue],Ke=wt[ue],Q&&Ke?Q+" "+Ke:Q||Ke):wt[ue]}),[D,ke]}(X0(T,b.exports.useContext(Ps),W)||qn,T,P),cn=nt[0],ft=nt[1],_=function(V,w,Z,D){var ke=Q0(),se=Y0(),ue=w?V.generateAndInjectStyles(qn,ke,se):V.generateAndInjectStyles(Z,ke,se);return ue}(re,R,cn),j=N,U=ft.$as||T.$as||ft.as||T.as||It,fe=Fo(U),A=ft!==T?Qt({},T,{},ft):T,$={};for(var O in A)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?$.as=A[O]:(Re?Re(O,nm,U):!fe||nm(O))&&($[O]=A[O]));return T.style&&ft.style!==T.style&&($.style=Qt({},T.style,{},ft.style)),$.className=Array.prototype.concat(Fe,We,_!==We?_:null,T.className,ft.className).filter(Boolean).join(" "),$.ref=j,b.exports.createElement(U,$)}(y,f,g,S)};return p.displayName=c,(y=Zt.forwardRef(p)).attrs=d,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=m,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Oa,y.styledComponentId=h,y.target=r?e.target:e,y.withComponent=function(f){var g=t.componentId,C=function(N,R){if(N==null)return{};var P,re,W={},Fe=Object.keys(N);for(re=0;re<Fe.length;re++)P=Fe[re],R.indexOf(P)>=0||(W[P]=N[P]);return W}(t,["componentId"]),T=g&&g+"-"+(Fo(f)?f:Hu(am(f)));return e1(f,Qt({},C,{attrs:d,componentId:T}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?Z0({},e.defaultProps,f):f}}),y.toString=function(){return"."+y.styledComponentId},i&&w2(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var uh=function(e){return function t(n,r,i){if(i===void 0&&(i=qn),!Pd.exports.isValidElementType(r))return _r(1,String(r));var s=function(){return n(r,i,Vd.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Qt({},i,{},o))},s.attrs=function(o){return t(n,r,Qt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(e1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){uh[e]=uh(e)});var X2=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=K0(n),ba.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Dr(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&ba.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function t1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vd.apply(void 0,[e].concat(n)),s="sc-global-"+J0(JSON.stringify(i)),o=new X2(i,s);function a(u){var c=Q0(),h=Y0(),d=b.exports.useContext(Ps),m=b.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(m,u,c,d,h),b.exports.useLayoutEffect(function(){if(!c.server)return l(m,u,c,d,h),function(){return o.removeStyles(m,c)}},[m,u,c,d,h]),null}function l(u,c,h,d,m){if(o.isStatic)o.renderStyles(u,S2,h,m);else{var y=Qt({},c,{theme:X0(c,d,a.defaultProps)});o.renderStyles(u,y,h,m)}}return Zt.memo(a)}const Dn=uh,J2="linear-gradient(to right, rgb(5, 109, 255) 0%, rgb(197, 51, 255) 100%)",Z2="linear-gradient(to left, rgb(5, 109, 255) 0%, rgb(197, 51, 255) 100%)",ex="linear-gradient(to top left, rgb(118, 37, 202) 0%, rgb(224, 29, 207) 100%)",tx="linear-gradient(to top left, rgb(118, 37, 202) 0%, rgb(224, 29, 207) 100%)",nx="linear-gradient(to right, rgba(224, 29, 207, 0.92) 0%, rgba(6, 41, 214, 0.92) 100%)",rx="linear-gradient(to right, rgba(224, 29, 207, 0.92) 0%, rgba(6, 41, 214, 0.92) 100%)",ix="linear-gradient(to bottom right, rgba(224, 29, 207, 0.92) 0%, rgba(6, 41, 214, 0.92) 100%)",sx="linear-gradient(to top right, rgba(224, 29, 207, 0.92) 0%, rgba(6, 41, 214, 0.92) 100%)",ox="linear-gradient(to bottom, rgba(6, 41, 214, 0.85)0%, rgba(6, 41, 214, 0.85) 100%)",ax="#333",lx="#888",ux="#f7f7f7",cx="rgb(5, 109, 255)",hx="rgb(197, 51, 255)",dx="rgb(118, 37, 202)",fx=Object.freeze(Object.defineProperty({__proto__:null,blueToPurpleRight:J2,blueToPurpleLeft:Z2,purpleToPinkRight:ex,purpleToPinkLeft:tx,purpleToNavyRight:nx,purpleToNavyLeft:rx,purpleToNavyBottomTo:ix,purpleToNavyTopTo:sx,Navy:ox,text:ax,desc:lx,bg:ux,blue:cx,pink:hx,purple:dx},Symbol.toStringTag,{value:"Module"}));function Hd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wd(e,t,n){return t&&fm(e.prototype,t),n&&fm(e,n),e}function pm(e){return+e.replace(/px/,"")}function px(e){var t=window.devicePixelRatio,n=getComputedStyle(e),r=pm(n.getPropertyValue("width")),i=pm(n.getPropertyValue("height"));e.setAttribute("width",(r*t).toString()),e.setAttribute("height",(i*t).toString())}function Wt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=Math.random()*(t-e)+e;return Math.floor(r*Math.pow(10,n))/Math.pow(10,n)}function mm(e){return e[Wt(0,e.length)]}var mx=.00125,gx=5e-4,yx=9e-4,vx=1e-5,wx=6,Cx=80,Sx=.9,Ex=1.7,xx=.2,kx=.6,Tx=.03,Ix=.07,gm=15,ym=82,_x=150,Dx=100,Ax=250,Nx=40,$x=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function vm(e){var t=1920;return Math.log(e)/Math.log(t)}var wm=function(){function e(t){Hd(this,e);var n=t.initialPosition,r=t.direction,i=t.confettiRadius,s=t.confettiColors,o=t.emojis,a=t.emojiSize,l=t.canvasWidth,u=Wt(Sx,Ex,3),c=u*vm(l);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=Wt(xx,kx,3),this.rotationSpeed=o.length?.01:Wt(Tx,Ix,3)*vm(l),this.dragForceCoefficient=Wt(gx,yx,6),this.radius={x:i,y:i},this.initialRadius=i,this.rotationAngle=r==="left"?Wt(0,.2,3):Wt(-.2,0,3),this.emojiSize=a,this.emojiRotationAngle=Wt(0,2*Math.PI),this.radiusYUpdateDirection="down";var h=r==="left"?Wt(ym,gm)*Math.PI/180:Wt(-gm,-ym)*Math.PI/180;this.absCos=Math.abs(Math.cos(h)),this.absSin=Math.abs(Math.sin(h));var d=Wt(-_x,0),m={x:n.x+(r==="left"?-d:d)*this.absCos,y:n.y-d*this.absSin};this.currentPosition=Object.assign({},m),this.initialPosition=Object.assign({},m),this.color=o.length?null:mm(s),this.emoji=o.length?mm(o):null,this.createdAt=new Date().getTime(),this.direction=r}return Wd(e,[{key:"draw",value:function(n){var r=this.currentPosition,i=this.radius,s=this.color,o=this.emoji,a=this.rotationAngle,l=this.emojiRotationAngle,u=this.emojiSize,c=window.devicePixelRatio;s?(n.fillStyle=s,n.beginPath(),n.ellipse(r.x*c,r.y*c,i.x*c,i.y*c,a,0,2*Math.PI),n.fill()):o&&(n.font="".concat(u,"px serif"),n.save(),n.translate(c*r.x,c*r.y),n.rotate(l),n.textAlign="center",n.fillText(o,0,0),n.restore())}},{key:"updatePosition",value:function(n,r){var i=this.confettiSpeed,s=this.dragForceCoefficient,o=this.finalConfettiSpeedX,a=this.radiusYUpdateDirection,l=this.rotationSpeed,u=this.createdAt,c=this.direction,h=r-u;if(i.x>o&&(this.confettiSpeed.x-=s*n),this.currentPosition.x+=i.x*(c==="left"?-this.absCos:this.absCos)*n,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*h+mx*Math.pow(h,2)/2,this.rotationSpeed-=this.emoji?1e-4:vx*n,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*n%(2*Math.PI);return}a==="down"?(this.radius.y-=n*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=n*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(n){return this.currentPosition.y<n+Dx}}]),e}();function Rx(){var e=document.createElement("canvas");return e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1000",e.style.pointerEvents="none",document.body.appendChild(e),e}function Px(e){var t=e.confettiRadius,n=t===void 0?wx:t,r=e.confettiNumber,i=r===void 0?e.confettiesNumber||(e.emojis?Nx:Ax):r,s=e.confettiColors,o=s===void 0?$x:s,a=e.emojis,l=a===void 0?e.emojies||[]:a,u=e.emojiSize,c=u===void 0?Cx:u;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:n,confettiNumber:i,confettiColors:o,emojis:l,emojiSize:c}}var Ox=function(){function e(t){var n=this;Hd(this,e),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(r){return n.resolvePromise=r})}return Wd(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var n;(n=this.shapes).push.apply(n,arguments)}},{key:"complete",value:function(){var n;return this.shapes.length?!1:((n=this.resolvePromise)===null||n===void 0||n.call(this),!0)}},{key:"processShapes",value:function(n,r,i){var s=this,o=n.timeDelta,a=n.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(o,a),l.draw(s.canvasContext),i?l.getIsVisibleOnCanvas(r):!0})}}]),e}(),n1=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Hd(this,e),this.activeConfettiBatches=[],this.canvas=t.canvas||Rx(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return Wd(e,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,px(this.canvas);var n=new Date().getTime(),r=n-this.lastUpdated,i=this.canvas.offsetHeight,s=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:r,currentTime:n},i,s),s?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(n)}},{key:"queueAnimationFrameIfNeeded",value:function(n){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=n||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=Px(n),i=r.confettiRadius,s=r.confettiNumber,o=r.confettiColors,a=r.emojis,l=r.emojiSize,u=this.canvas.getBoundingClientRect(),c=u.width,h=u.height,d=h*5/7,m={x:0,y:d},y={x:c,y:d},v=new Ox(this.canvasContext),S=0;S<s/2;S++){var p=new wm({initialPosition:m,direction:"right",confettiRadius:i,confettiColors:o,confettiNumber:s,emojis:a,emojiSize:l,canvasWidth:c}),f=new wm({initialPosition:y,direction:"left",confettiRadius:i,confettiColors:o,confettiNumber:s,emojis:a,emojiSize:l,canvasWidth:c});v.addShapes(p,f)}return this.activeConfettiBatches.push(v),this.queueAnimationFrameIfNeeded(),v.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}}]),e}();const Cm=new n1,Lx=()=>(b.exports.useEffect(()=>{Cm.addConfetti({confettiNumber:600});const e=setInterval(()=>{Cm.addConfetti({confettiNumber:600})},4e3);return()=>{clearInterval(e)}},[]),E(bx,{children:te("main",{className:"mainContainer",children:[E("img",{src:"main-face.png",alt:"\uCD95\uD558\uD558\uB294 \uC5BC\uAD74",className:"faceImg"}),te("h1",{className:"title",children:["\uD658\uC601\uD569\uB2C8\uB2E4.",E("br",{}),E("span",{className:"impact",children:"JUSTCODE 6\uAE30 \uC624\uD504\uB77C\uC778 \uC218\uB8CC\uC2DD"}),"\uC73C\uB85C",E("br",{}),"\uCD08\uB300\uD569\uB2C8\uB2E4 :D"]}),E(no,{to:"/home",children:E("button",{className:"btn",children:"\uD655\uC778\uD558\uAE30"})})]})})),bx=Dn.div`
  width: 100%;
  height: 100vh;
  background: ${({theme:e})=>e.blueToPurpleRight};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    height: 70%;
    min-height: 570px;
    padding: 50px;
    border-radius: 20px;
    background-color: #fff;
    font-size: 33px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    color: ${({theme:e})=>e.text};
    transition: 300ms;

    @media screen and (min-width: 414px) and (max-width: 909px) {
      font-size: 28px;
      padding: 30px;
      transition: 300ms;
    }

    @media screen and (max-width: 414px) {
      width: 90%;
      font-size: 24px;
      padding: 15px;
      transition: 300ms;
    }

    .faceImg {
      width: 18rem;

      @media screen and (max-width: 413px) {
        width: 16rem;
      }
    }

    .title {
      margin-top: -20px;
      line-height: 40px;
      font-weight: 900;
      text-align: center;
      text-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

      .impact {
        background-image: ${({theme:e})=>e.purpleToNavyRight};
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        line-height: 35px;
      }

      @media screen and (max-width: 413px) {
        line-height: 29px;
      }
    }

    .btn {
      width: 25%;
      min-width: 218px;
      padding: 15px;
      margin-top: 10px;
      background: ${({theme:e})=>e.blueToPurpleLeft};
      border: none;
      border-radius: 15px;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${({theme:e})=>e.purpleToNavyRight};
        transform: scale(101%);
        transition: 250ms;

        &:active {
          background: ${({theme:e})=>e.Navy};
        }
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        font-size: 18px;
        padding: 13px;
      }

      @media screen and (max-width: 413px) {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 12px;
      }
    }
  }
`;var r1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sm=Zt.createContext&&Zt.createContext(r1),Gn=globalThis&&globalThis.__assign||function(){return Gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gn.apply(this,arguments)},Mx=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function i1(e){return e&&e.map(function(t,n){return Zt.createElement(t.tag,Gn({key:n},t.attr),i1(t.child))})}function jl(e){return function(t){return E(Fx,{...Gn({attr:Gn({},e.attr)},t),children:i1(e.child)})}}function Fx(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=Mx(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),te("svg",{...Gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Gn(Gn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&E("title",{children:s}),e.children]})};return Sm!==void 0?E(Sm.Consumer,{children:function(n){return t(n)}}):t(r1)}function s1(e){return jl({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"}}]})(e)}const zx=()=>{const[e,t]=b.exports.useState(!1);return b.exports.useEffect(()=>{const n=setInterval(()=>{t(r=>!r)},600);return()=>{clearInterval(n)}},[]),E(jx,{children:te("main",{className:"mainContainer",children:[E("div",{className:"titleContainer",children:E("h1",{className:"title",children:te("span",{className:"impact",children:["JUSTCODE 6\uAE30 ",E("br",{}),"\uC624\uD504\uB77C\uC778 \uC218\uB8CC\uC2DD \uC77C\uC815"]})})}),te("div",{className:"contentContainer",children:[te("p",{className:"content",children:["\uC2DC\uAC04 : ",E("b",{children:"2022\uB144 10\uC6D4 28\uC77C \uAE08\uC694\uC77C \uC624\uD6C4 5\uC2DC"})]}),te("p",{className:"content",children:["\uC7A5\uC18C : ",E("b",{children:"\uC704\uC6CC\uD06C \uC120\uB989 2\uD638\uC810 \uD68C\uC758\uC2E4"})]}),te("p",{className:"content",children:["\uB4DC\uB808\uC2A4 \uCF54\uB4DC : ",E("b",{children:"\uD560\uB85C\uC708"}),te("span",{className:"desc",children:["\uADF8\uB0E5 \uC624\uC154\uB3C4 \uB429\uB2C8\uB2E4. ",E("br",{}),"\uC0E4\uC774\uAC78&\uC0E4\uC774\uBF40\uC774\uB4E4\uC744 \uC704\uD55C \uBA38\uB9AC\uD540\uC744 \uC900\uBE44\uD588\uC5B4\uC694 ;D"]})]})]}),E(Bx,{size:"2rem",$blink:e}),E(no,{to:"/form",children:E("button",{className:"btn",children:"\uCC38\uC11D \uC5EC\uBD80 \uC54C\uB9AC\uAE30"})})]})})},Bx=Dn(s1)`
  margin-bottom: 1.25rem;
  transform: ${({blink:e})=>e?"translateY(-3px) rotate(180deg)":"translateY(5px) rotate(180deg)"};
  opacity: ${({$blink:e})=>e?0:1};
  visibility: ${({$blink:e})=>e?"hidden":"visible"};
  transition: 200ms;
`,jx=Dn.div`
  width: 100%;
  height: 100vh;
  background: ${({theme:e})=>e.blueToPurpleRight};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 70%;
    min-height: 600px;
    padding: 3.125rem;
    border-radius: 1.25rem;
    background-color: #fff;
    font-size: 2.063rem;
    box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.15);
    color: ${({theme:e})=>e.text};
    line-height: 2.5rem;
    transition: 300ms;

    @media screen and (min-width: 414px) and (max-width: 909px) {
      transition: 300ms;
      width: 70%;
      font-size: 1.75rem;
      padding: 1.875rem;
      line-height: 2.188rem;
    }

    @media screen and (min-width: 414px) and (max-width: 599px) {
      transition: 300ms;
      width: 70%;
      line-height: 2.188rem;
      padding: 1.25rem 0;
    }

    @media screen and (max-width: 414px) {
      transition: 300ms;
      width: 90%;
      font-size: 1.688rem;
      padding: 1.125rem 0;
    }

    .titleContainer {
      width: 70%;
      border-bottom: 1px solid #ccc;
      margin-bottom: 2.5rem;

      .title {
        margin-bottom: 1.875rem;
        font-weight: 900;
        text-align: center;
        text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

        .impact {
          background-image: ${({theme:e})=>e.blueToPurpleRight};
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }
      }
    }

    .contentContainer {
      text-align: center;
      margin-bottom: 1.875rem;
      font-size: 1.25rem;

      .content {
        margin-bottom: 1.875rem;

        &:last-child {
          margin-bottom: 0;
          line-height: 1.875rem;
        }
      }

      .desc {
        display: block;
        font-size: 0.875rem;
        line-height: 1.063rem;
        color: ${({theme:e})=>e.desc};
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        font-size: 1.25rem;
        line-height: 1.25rem;
      }

      @media screen and (min-width: 414px) and (max-width: 599px) {
        line-height: 2.188rem;
        font-size: 1.125rem;
      }

      @media screen and (max-width: 413px) {
        font-size: 1.125rem;
        line-height: 1.813rem;
      }
    }

    .btn {
      width: 25%;
      background: ${({theme:e})=>e.blueToPurpleLeft};
      min-width: 218px;
      padding: 15px;
      border: none;
      border-radius: 15px;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${({theme:e})=>e.purpleToNavyRight};
        transition: 250ms;
        transform: scale(101%);

        &:active {
          background: ${({theme:e})=>e.Navy};
        }
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        font-size: 1.125rem;
        padding: 0.813rem;
      }

      @media screen and (max-width: 413px) {
        font-size: 1.125rem;
        margin-bottom: 1.875rem;
        padding: 0.75rem;
      }
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ux=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},a1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ux(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Vx=function(e){const t=o1(e);return a1.encodeByteArray(t,!0)},Ma=function(e){return Vx(e).replace(/\./g,"")},Hx=function(e){try{return a1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Wx(){return typeof indexedDB=="object"}function Kx(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function qx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=()=>qx().__FIREBASE_DEFAULTS__,Qx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Yx=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hx(e[1]);return t&&JSON.parse(t)},l1=()=>{try{return Gx()||Qx()||Yx()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Xx=e=>{var t,n;return(n=(t=l1())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Jx=e=>{const t=Xx(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Zx=()=>{var e;return(e=l1())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="FirebaseError";class Ni extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nk,Object.setPrototypeOf(this,Ni.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,u1.prototype.create)}}class u1{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?rk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ni(i,a,r)}}function rk(e,t){return e.replace(ik,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ik=/\{\$([^}]+)}/g;function ch(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Em(s)&&Em(o)){if(!ch(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Em(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){return e&&e._delegate?e._delegate:e}class Ls{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ek;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ak(t))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=hr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hr){return this.instances.has(t)}getOptions(t=hr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ok(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hr){return this.component?this.component.multipleInstances?t:hr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ok(e){return e===hr?void 0:e}function ak(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const uk={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ck=ae.INFO,hk={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},dk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=hk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c1{constructor(t){this.name=t,this._logLevel=ck,this._logHandler=dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const fk=(e,t)=>t.some(n=>e instanceof n);let xm,km;function pk(){return xm||(xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mk(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h1=new WeakMap,hh=new WeakMap,d1=new WeakMap,Ku=new WeakMap,Kd=new WeakMap;function gk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Qn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&h1.set(n,e)}).catch(()=>{}),Kd.set(t,e),t}function yk(e){if(hh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});hh.set(e,t)}let dh={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||d1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function vk(e){dh=e(dh)}function wk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qu(this),t,...n);return d1.set(r,t.sort?t.sort():[t]),Qn(r)}:mk().includes(e)?function(...t){return e.apply(qu(this),t),Qn(h1.get(this))}:function(...t){return Qn(e.apply(qu(this),t))}}function Ck(e){return typeof e=="function"?wk(e):(e instanceof IDBTransaction&&yk(e),fk(e,pk())?new Proxy(e,dh):e)}function Qn(e){if(e instanceof IDBRequest)return gk(e);if(Ku.has(e))return Ku.get(e);const t=Ck(e);return t!==e&&(Ku.set(e,t),Kd.set(t,e)),t}const qu=e=>Kd.get(e);function Sk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qn(o.result),l.oldVersion,l.newVersion,Qn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ek=["get","getKey","getAll","getAllKeys","count"],xk=["put","add","delete","clear"],Gu=new Map;function Tm(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gu.get(t))return Gu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ek.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gu.set(t,s),s}vk(e=>({...e,get:(t,n,r)=>Tm(t,n)||e.get(t,n,r),has:(t,n)=>!!Tm(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tk(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fh="@firebase/app",Im="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new c1("@firebase/app"),Ik="@firebase/app-compat",_k="@firebase/analytics-compat",Dk="@firebase/analytics",Ak="@firebase/app-check-compat",Nk="@firebase/app-check",$k="@firebase/auth",Rk="@firebase/auth-compat",Pk="@firebase/database",Ok="@firebase/database-compat",Lk="@firebase/functions",bk="@firebase/functions-compat",Mk="@firebase/installations",Fk="@firebase/installations-compat",zk="@firebase/messaging",Bk="@firebase/messaging-compat",jk="@firebase/performance",Uk="@firebase/performance-compat",Vk="@firebase/remote-config",Hk="@firebase/remote-config-compat",Wk="@firebase/storage",Kk="@firebase/storage-compat",qk="@firebase/firestore",Gk="@firebase/firestore-compat",Qk="firebase",Yk="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="[DEFAULT]",Xk={[fh]:"fire-core",[Ik]:"fire-core-compat",[Dk]:"fire-analytics",[_k]:"fire-analytics-compat",[Nk]:"fire-app-check",[Ak]:"fire-app-check-compat",[$k]:"fire-auth",[Rk]:"fire-auth-compat",[Pk]:"fire-rtdb",[Ok]:"fire-rtdb-compat",[Lk]:"fire-fn",[bk]:"fire-fn-compat",[Mk]:"fire-iid",[Fk]:"fire-iid-compat",[zk]:"fire-fcm",[Bk]:"fire-fcm-compat",[jk]:"fire-perf",[Uk]:"fire-perf-compat",[Vk]:"fire-rc",[Hk]:"fire-rc-compat",[Wk]:"fire-gcs",[Kk]:"fire-gcs-compat",[qk]:"fire-fst",[Gk]:"fire-fst-compat","fire-js":"fire-js",[Qk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map,mh=new Map;function Jk(e,t){try{e.container.addComponent(t)}catch(n){Ar.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function za(e){const t=e.name;if(mh.has(t))return Ar.debug(`There were multiple attempts to register component ${t}.`),!1;mh.set(t,e);for(const n of Fa.values())Jk(n,e);return!0}function Zk(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yn=new u1("app","Firebase",eT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=Yk;function qd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ph,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=Zx()),!n)throw Yn.create("no-options");const s=Fa.get(i);if(s){if(ch(n,s.options)&&ch(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new lk(i);for(const l of mh.values())o.addComponent(l);const a=new tT(n,r,o);return Fa.set(i,a),a}function rT(e=ph){const t=Fa.get(e);if(!t&&e===ph)return qd();if(!t)throw Yn.create("no-app",{appName:e});return t}function li(e,t,n){var r;let i=(r=Xk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}za(new Ls(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebase-heartbeat-database",sT=1,bs="firebase-heartbeat-store";let Qu=null;function f1(){return Qu||(Qu=Sk(iT,sT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(bs)}}}).catch(e=>{throw Yn.create("idb-open",{originalErrorMessage:e.message})})),Qu}async function oT(e){var t;try{return(await f1()).transaction(bs).objectStore(bs).get(p1(e))}catch(n){if(n instanceof Ni)Ar.warn(n.message);else{const r=Yn.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Ar.warn(r.message)}}}async function _m(e,t){var n;try{const i=(await f1()).transaction(bs,"readwrite");return await i.objectStore(bs).put(t,p1(e)),i.done}catch(r){if(r instanceof Ni)Ar.warn(r.message);else{const i=Yn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ar.warn(i.message)}}}function p1(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=1024,lT=30*24*60*60*1e3;class uT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dm(),{heartbeatsToSend:n,unsentEntries:r}=cT(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dm(){return new Date().toISOString().substring(0,10)}function cT(e,t=aT){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Am(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Am(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wx()?Kx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _m(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _m(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Am(e){return Ma(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(e){za(new Ls("platform-logger",t=>new kk(t),"PRIVATE")),za(new Ls("heartbeat",t=>new uT(t),"PRIVATE")),li(fh,Im,e),li(fh,Im,"esm2017"),li("fire-js","")}dT("");var fT="firebase",pT="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li(fT,pT,"app");var mT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Gd=Gd||{},H=mT||self;function Ba(){}function Ul(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ro(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function gT(e){return Object.prototype.hasOwnProperty.call(e,Yu)&&e[Yu]||(e[Yu]=++yT)}var Yu="closure_uid_"+(1e9*Math.random()>>>0),yT=0;function vT(e,t,n){return e.call.apply(e.bind,arguments)}function wT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=vT:ut=wT,ut.apply(null,arguments)}function zo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function tt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var CT=0;ar.prototype.s=!1;ar.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CT!=0)&&gT(this)};ar.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const m1=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Qd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Nm(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ul(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var ST=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{H.addEventListener("test",Ba,t),H.removeEventListener("test",Ba,t)}catch{}return e}();function ja(e){return/^[\s\xa0]*$/.test(e)}var $m=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Xu(e,t){return e<t?-1:e>t?1:0}function Vl(){var e=H.navigator;return e&&(e=e.userAgent)?e:""}function sn(e){return Vl().indexOf(e)!=-1}function Yd(e){return Yd[" "](e),e}Yd[" "]=Ba;function ET(e){var t=TT;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var xT=sn("Opera"),Ci=sn("Trident")||sn("MSIE"),g1=sn("Edge"),gh=g1||Ci,y1=sn("Gecko")&&!(Vl().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),kT=Vl().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function v1(){var e=H.document;return e?e.documentMode:void 0}var Ua;e:{var Ju="",Zu=function(){var e=Vl();if(y1)return/rv:([^\);]+)(\)|;)/.exec(e);if(g1)return/Edge\/([\d\.]+)/.exec(e);if(Ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kT)return/WebKit\/(\S+)/.exec(e);if(xT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Zu&&(Ju=Zu?Zu[1]:""),Ci){var ec=v1();if(ec!=null&&ec>parseFloat(Ju)){Ua=String(ec);break e}}Ua=Ju}var TT={};function IT(){return ET(function(){let e=0;const t=$m(String(Ua)).split("."),n=$m("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=Xu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Xu(i[2].length==0,s[2].length==0)||Xu(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var yh;if(H.document&&Ci){var Rm=v1();yh=Rm||parseInt(Ua,10)||void 0}else yh=void 0;var _T=yh;function Ms(e,t){if(ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y1){e:{try{Yd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:DT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ms.X.h.call(this)}}tt(Ms,ct);var DT={2:"touch",3:"pen",4:"mouse"};Ms.prototype.h=function(){Ms.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var io="closure_listenable_"+(1e6*Math.random()|0),AT=0;function NT(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++AT,this.ba=this.ea=!1}function Hl(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Xd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w1(e){const t={};for(const n in e)t[n]=e[n];return t}const Pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C1(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Pm.length;s++)n=Pm[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Wl(e){this.src=e,this.g={},this.h=0}Wl.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=wh(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new NT(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function vh(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=m1(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Hl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function wh(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var Jd="closure_lm_"+(1e6*Math.random()|0),tc={};function S1(e,t,n,r,i){if(r&&r.once)return x1(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)S1(e,t[s],n,r,i);return null}return n=tf(n),e&&e[io]?e.N(t,n,ro(r)?!!r.capture:!!r,i):E1(e,t,n,!1,r,i)}function E1(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ro(i)?!!i.capture:!!i,a=ef(e);if(a||(e[Jd]=a=new Wl(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=$T(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ST||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(T1(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $T(){function e(n){return t.call(e.src,e.listener,n)}const t=RT;return e}function x1(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)x1(e,t[s],n,r,i);return null}return n=tf(n),e&&e[io]?e.O(t,n,ro(r)?!!r.capture:!!r,i):E1(e,t,n,!0,r,i)}function k1(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)k1(e,t[s],n,r,i);else r=ro(r)?!!r.capture:!!r,n=tf(n),e&&e[io]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=wh(s,n,r,i),-1<n&&(Hl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=ef(e))&&(t=e.g[t.toString()],e=-1,t&&(e=wh(t,n,r,i)),(n=-1<e?t[e]:null)&&Zd(n))}function Zd(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[io])vh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(T1(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ef(t))?(vh(n,e),n.h==0&&(n.src=null,t[Jd]=null)):Hl(e)}}}function T1(e){return e in tc?tc[e]:tc[e]="on"+e}function RT(e,t){if(e.ba)e=!0;else{t=new Ms(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Zd(e),e=n.call(r,t)}return e}function ef(e){return e=e[Jd],e instanceof Wl?e:null}var nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function tf(e){return typeof e=="function"?e:(e[nc]||(e[nc]=function(t){return e.handleEvent(t)}),e[nc])}function Ve(){ar.call(this),this.i=new Wl(this),this.P=this,this.I=null}tt(Ve,ar);Ve.prototype[io]=!0;Ve.prototype.removeEventListener=function(e,t,n,r){k1(this,e,t,n,r)};function Ze(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new ct(t,e);else if(t instanceof ct)t.target=t.target||e;else{var i=t;t=new ct(r,e),C1(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Bo(o,r,!0,t)&&i}if(o=t.g=e,i=Bo(o,r,!0,t)&&i,i=Bo(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Bo(o,r,!1,t)&&i}Ve.prototype.M=function(){if(Ve.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Hl(n[r]);delete e.g[t],e.h--}}this.I=null};Ve.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ve.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Bo(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&vh(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var nf=H.JSON.stringify;function PT(){var e=D1;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class OT{constructor(){this.h=this.g=null}add(t,n){const r=I1.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var I1=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new LT,e=>e.reset());class LT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bT(e){H.setTimeout(()=>{throw e},0)}function _1(e,t){Ch||MT(),Sh||(Ch(),Sh=!0),D1.add(e,t)}var Ch;function MT(){var e=H.Promise.resolve(void 0);Ch=function(){e.then(FT)}}var Sh=!1,D1=new OT;function FT(){for(var e;e=PT();){try{e.h.call(e.g)}catch(n){bT(n)}var t=I1;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Sh=!1}function Kl(e,t){Ve.call(this),this.h=e||1,this.g=t||H,this.j=ut(this.lb,this),this.l=Date.now()}tt(Kl,Ve);M=Kl.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ze(this,"tick"),this.ca&&(rf(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rf(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}M.M=function(){Kl.X.M.call(this),rf(this),delete this.g};function sf(e,t,n){if(typeof e=="function")n&&(e=ut(e,n));else if(e&&typeof e.handleEvent=="function")e=ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:H.setTimeout(e,t||0)}function A1(e){e.g=sf(()=>{e.g=null,e.i&&(e.i=!1,A1(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zT extends ar{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:A1(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(e){ar.call(this),this.h=e,this.g={}}tt(Fs,ar);var Om=[];function N1(e,t,n,r){Array.isArray(n)||(n&&(Om[0]=n.toString()),n=Om);for(var i=0;i<n.length;i++){var s=S1(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function $1(e){Xd(e.g,function(t,n){this.g.hasOwnProperty(n)&&Zd(t)},e),e.g={}}Fs.prototype.M=function(){Fs.X.M.call(this),$1(this)};Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ql(){this.g=!0}ql.prototype.Aa=function(){this.g=!1};function BT(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function jT(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ei(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+VT(e,n)+(r?" "+r:"")})}function UT(e,t){e.info(function(){return"TIMEOUT: "+t})}ql.prototype.info=function(){};function VT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return nf(n)}catch{return t}}var Lr={},Lm=null;function Gl(){return Lm=Lm||new Ve}Lr.Pa="serverreachability";function R1(e){ct.call(this,Lr.Pa,e)}tt(R1,ct);function zs(e){const t=Gl();Ze(t,new R1(t))}Lr.STAT_EVENT="statevent";function P1(e,t){ct.call(this,Lr.STAT_EVENT,e),this.stat=t}tt(P1,ct);function mt(e){const t=Gl();Ze(t,new P1(t,e))}Lr.Qa="timingevent";function O1(e,t){ct.call(this,Lr.Qa,e),this.size=t}tt(O1,ct);function so(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){e()},t)}var Ql={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},L1={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function of(){}of.prototype.h=null;function bm(e){return e.h||(e.h=e.i())}function b1(){}var oo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function af(){ct.call(this,"d")}tt(af,ct);function lf(){ct.call(this,"c")}tt(lf,ct);var Eh;function Yl(){}tt(Yl,of);Yl.prototype.g=function(){return new XMLHttpRequest};Yl.prototype.i=function(){return{}};Eh=new Yl;function ao(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Fs(this),this.O=HT,e=gh?125:void 0,this.T=new Kl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new M1}function M1(){this.i=null,this.g="",this.h=!1}var HT=45e3,xh={},Va={};M=ao.prototype;M.setTimeout=function(e){this.O=e};function kh(e,t,n){e.K=1,e.v=Jl(xn(t)),e.s=n,e.P=!0,F1(e,null)}function F1(e,t){e.F=Date.now(),lo(e),e.A=xn(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),K1(n.i,"t",r),e.C=0,n=e.l.H,e.h=new M1,e.g=fv(e.l,n?t:null,!e.s),0<e.N&&(e.L=new zT(ut(e.La,e,e.g),e.N)),N1(e.S,e.g,"readystatechange",e.ib),t=e.H?w1(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),zs(),BT(e.j,e.u,e.A,e.m,e.U,e.s)}M.ib=function(e){e=e.target;const t=this.L;t&&mn(e)==3?t.l():this.La(e)};M.La=function(e){try{if(e==this.g)e:{const c=mn(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||gh||this.g&&(this.h.h||this.g.fa()||Bm(this.g)))){this.I||c!=4||t==7||(t==8||0>=h?zs(3):zs(2)),Xl(this);var n=this.g.aa();this.Y=n;t:if(z1(this)){var r=Bm(this.g);e="";var i=r.length,s=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),hs(this);var o="";break t}this.h.i=new H.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,jT(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ja(a)){var u=a;break t}}u=null}if(n=u)ei(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Th(this,n);else{this.i=!1,this.o=3,mt(12),mr(this),hs(this);break e}}this.P?(B1(this,c,o),gh&&this.i&&c==3&&(N1(this.S,this.T,"tick",this.hb),this.T.start())):(ei(this.j,this.m,o,null),Th(this,o)),c==4&&mr(this),this.i&&!this.I&&(c==4?uv(this.l,this):(this.i=!1,lo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),mr(this),hs(this)}}}catch{}finally{}};function z1(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function B1(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=WT(e,n),i==Va){t==4&&(e.o=4,mt(14),r=!1),ei(e.j,e.m,null,"[Incomplete Response]");break}else if(i==xh){e.o=4,mt(15),ei(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ei(e.j,e.m,i,null),Th(e,i);z1(e)&&i!=Va&&i!=xh&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,mt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),mf(t),t.K=!0,mt(11))):(ei(e.j,e.m,n,"[Invalid Chunked Response]"),mr(e),hs(e))}M.hb=function(){if(this.g){var e=mn(this.g),t=this.g.fa();this.C<t.length&&(Xl(this),B1(this,e,t),this.i&&e!=4&&lo(this))}};function WT(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Va:(n=Number(t.substring(n,r)),isNaN(n)?xh:(r+=1,r+n>t.length?Va:(t=t.substr(r,n),e.C=r+n,t)))}M.cancel=function(){this.I=!0,mr(this)};function lo(e){e.V=Date.now()+e.O,j1(e,e.O)}function j1(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=so(ut(e.gb,e),t)}function Xl(e){e.B&&(H.clearTimeout(e.B),e.B=null)}M.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(UT(this.j,this.A),this.K!=2&&(zs(),mt(17)),mr(this),this.o=2,hs(this)):j1(this,this.V-e)};function hs(e){e.l.G==0||e.I||uv(e.l,e)}function mr(e){Xl(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,rf(e.T),$1(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Th(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ih(n.h,e))){if(!e.J&&Ih(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ka(n),tu(n);else break e;pf(n),mt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=so(ut(n.cb,n),6e3));if(1>=Q1(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gr(n,11)}else if((e.J||n.g==e)&&Ka(n),!ja(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(uf(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,we(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=dv(r,r.H?r.ka:null,r.V),o.J){Y1(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Xl(a),lo(a)),r.g=o}else av(r);0<n.i.length&&nu(n)}else u[0]!="stop"&&u[0]!="close"||gr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gr(n,7):ff(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}zs(4)}catch{}}function KT(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ul(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function qT(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ul(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function U1(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ul(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=qT(e),r=KT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var V1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cr(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Cr){this.h=t!==void 0?t:e.h,Ha(this,e.j),this.s=e.s,this.g=e.g,Wa(this,e.m),this.l=e.l,t=e.i;var n=new Bs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mm(this,n),this.o=e.o}else e&&(n=String(e).match(V1))?(this.h=!!t,Ha(this,n[1]||"",!0),this.s=Ji(n[2]||""),this.g=Ji(n[3]||"",!0),Wa(this,n[4]),this.l=Ji(n[5]||"",!0),Mm(this,n[6]||"",!0),this.o=Ji(n[7]||"")):(this.h=!!t,this.i=new Bs(null,this.h))}Cr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zi(t,Fm,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Zi(t,Fm,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Zi(n,n.charAt(0)=="/"?XT:YT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Zi(n,ZT)),e.join("")};function xn(e){return new Cr(e)}function Ha(e,t,n){e.j=n?Ji(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wa(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mm(e,t,n){t instanceof Bs?(e.i=t,eI(e.i,e.h)):(n||(t=Zi(t,JT)),e.i=new Bs(t,e.h))}function we(e,t,n){e.i.set(t,n)}function Jl(e){return we(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ji(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,QT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function QT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Fm=/[#\/\?@]/g,YT=/[#\?:]/g,XT=/[#\?]/g,JT=/[#\?@]/g,ZT=/#/g;function Bs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function lr(e){e.g||(e.g=new Map,e.h=0,e.i&&GT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}M=Bs.prototype;M.add=function(e,t){lr(this),this.i=null,e=$i(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function H1(e,t){lr(e),t=$i(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function W1(e,t){return lr(e),t=$i(e,t),e.g.has(t)}M.forEach=function(e,t){lr(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};M.oa=function(){lr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};M.W=function(e){lr(this);let t=[];if(typeof e=="string")W1(this,e)&&(t=t.concat(this.g.get($i(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};M.set=function(e,t){return lr(this),this.i=null,e=$i(this,e),W1(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};M.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function K1(e,t,n){H1(e,t),0<n.length&&(e.i=null,e.g.set($i(e,t),Qd(n)),e.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function $i(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function eI(e,t){t&&!e.j&&(lr(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(H1(this,r),K1(this,i,n))},e)),e.j=t}var tI=class{constructor(e,t){this.h=e,this.g=t}};function q1(e){this.l=e||nI,H.PerformanceNavigationTiming?(e=H.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(H.g&&H.g.Ga&&H.g.Ga()&&H.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nI=10;function G1(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Q1(e){return e.h?1:e.g?e.g.size:0}function Ih(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function uf(e,t){e.g?e.g.add(t):e.h=t}function Y1(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}q1.prototype.cancel=function(){if(this.i=X1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function X1(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Qd(e.i)}function cf(){}cf.prototype.stringify=function(e){return H.JSON.stringify(e,void 0)};cf.prototype.parse=function(e){return H.JSON.parse(e,void 0)};function rI(){this.g=new cf}function iI(e,t,n){const r=n||"";try{U1(e,function(i,s){let o=i;ro(i)&&(o=nf(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sI(e,t){const n=new ql;if(H.Image){const r=new Image;r.onload=zo(jo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=zo(jo,n,r,"TestLoadImage: error",!1,t),r.onabort=zo(jo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=zo(jo,n,r,"TestLoadImage: timeout",!1,t),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function jo(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function uo(e){this.l=e.ac||null,this.j=e.jb||!1}tt(uo,of);uo.prototype.g=function(){return new Zl(this.l,this.j)};uo.prototype.i=function(e){return function(){return e}}({});function Zl(e,t){Ve.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=hf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Zl,Ve);var hf=0;M=Zl.prototype;M.open=function(e,t){if(this.readyState!=hf)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,js(this)};M.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||H).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=hf};M.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;J1(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function J1(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}M.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?co(this):js(this),this.readyState==3&&J1(this)}};M.Va=function(e){this.g&&(this.response=this.responseText=e,co(this))};M.Ua=function(e){this.g&&(this.response=e,co(this))};M.ga=function(){this.g&&co(this)};function co(e){e.readyState=4,e.l=null,e.j=null,e.A=null,js(e)}M.setRequestHeader=function(e,t){this.v.append(e,t)};M.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function js(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var oI=H.JSON.parse;function Ie(e){Ve.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Z1,this.K=this.L=!1}tt(Ie,Ve);var Z1="",aI=/^https?$/i,lI=["POST","PUT"];M=Ie.prototype;M.Ka=function(e){this.L=e};M.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Eh.g(),this.C=this.u?bm(this.u):bm(Eh),this.g.onreadystatechange=ut(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){zm(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&e instanceof H.FormData,!(0<=m1(lI,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{nv(this),0<this.B&&((this.K=uI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.qa,this)):this.A=sf(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){zm(this,s)}};function uI(e){return Ci&&IT()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}M.qa=function(){typeof Gd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function zm(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ev(e),eu(e)}function ev(e){e.D||(e.D=!0,Ze(e,"complete"),Ze(e,"error"))}M.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ze(this,"complete"),Ze(this,"abort"),eu(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eu(this,!0)),Ie.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?tv(this):this.fb())};M.fb=function(){tv(this)};function tv(e){if(e.h&&typeof Gd<"u"&&(!e.C[1]||mn(e)!=4||e.aa()!=2)){if(e.v&&mn(e)==4)sf(e.Ha,0,e);else if(Ze(e,"readystatechange"),mn(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(V1)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!aI.test(i?i.toLowerCase():"")}n=r}if(n)Ze(e,"complete"),Ze(e,"success");else{e.m=6;try{var o=2<mn(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",ev(e)}}finally{eu(e)}}}}function eu(e,t){if(e.g){nv(e);const n=e.g,r=e.C[0]?Ba:null;e.g=null,e.C=null,t||Ze(e,"ready");try{n.onreadystatechange=r}catch{}}}function nv(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(H.clearTimeout(e.A),e.A=null)}function mn(e){return e.g?e.g.readyState:0}M.aa=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),oI(t)}};function Bm(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Z1:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rv(e){let t="";return Xd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function df(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):we(e,t,n))}function qi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function iv(e){this.Ca=0,this.i=[],this.j=new ql,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qi("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qi("baseRetryDelayMs",5e3,e),this.bb=qi("retryDelaySeedMs",1e4,e),this.$a=qi("forwardChannelMaxRetries",2,e),this.ta=qi("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new q1(e&&e.concurrentRequestLimit),this.Fa=new rI,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=iv.prototype;M.ma=8;M.G=1;function ff(e){if(sv(e),e.G==3){var t=e.U++,n=xn(e.F);we(n,"SID",e.I),we(n,"RID",t),we(n,"TYPE","terminate"),ho(e,n),t=new ao(e,e.j,t,void 0),t.K=2,t.v=Jl(xn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(t.v.toString(),"")),!n&&H.Image&&(new Image().src=t.v,n=!0),n||(t.g=fv(t.l,null),t.g.da(t.v)),t.F=Date.now(),lo(t)}hv(e)}function tu(e){e.g&&(mf(e),e.g.cancel(),e.g=null)}function sv(e){tu(e),e.u&&(H.clearTimeout(e.u),e.u=null),Ka(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&H.clearTimeout(e.m),e.m=null)}function nu(e){G1(e.h)||e.m||(e.m=!0,_1(e.Ja,e),e.C=0)}function cI(e,t){return Q1(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=so(ut(e.Ja,e,t),cv(e,e.C)),e.C++,!0)}M.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ao(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=w1(s),C1(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ov(this,i,t),n=xn(this.F),we(n,"RID",e),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),ho(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(rv(s)))+"&"+t:this.o&&df(n,this.o,s)),uf(this.h,i),this.Ya&&we(n,"TYPE","init"),this.O?(we(n,"$req",t),we(n,"SID","null"),i.Z=!0,kh(i,n,null)):kh(i,n,t),this.G=2}}else this.G==3&&(e?jm(this,e):this.i.length==0||G1(this.h)||jm(this))};function jm(e,t){var n;t?n=t.m:n=e.U++;const r=xn(e.F);we(r,"SID",e.I),we(r,"RID",n),we(r,"AID",e.T),ho(e,r),e.o&&e.s&&df(r,e.o,e.s),n=new ao(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ov(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),uf(e.h,n),kh(n,r,t)}function ho(e,t){e.ia&&Xd(e.ia,function(n,r){we(t,r,n)}),e.l&&U1({},function(n,r){we(t,r,n)})}function ov(e,t,n){n=Math.min(e.i.length,n);var r=e.l?ut(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{iI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function av(e){e.g||e.u||(e.Z=1,_1(e.Ia,e),e.A=0)}function pf(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=so(ut(e.Ia,e),cv(e,e.A)),e.A++,!0)}M.Ia=function(){if(this.u=null,lv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=so(ut(this.eb,this),e)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mt(10),tu(this),lv(this))};function mf(e){e.B!=null&&(H.clearTimeout(e.B),e.B=null)}function lv(e){e.g=new ao(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=xn(e.sa);we(t,"RID","rpc"),we(t,"SID",e.I),we(t,"CI",e.L?"0":"1"),we(t,"AID",e.T),we(t,"TYPE","xmlhttp"),ho(e,t),e.o&&e.s&&df(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Jl(xn(t)),n.s=null,n.P=!0,F1(n,e)}M.cb=function(){this.v!=null&&(this.v=null,tu(this),pf(this),mt(19))};function Ka(e){e.v!=null&&(H.clearTimeout(e.v),e.v=null)}function uv(e,t){var n=null;if(e.g==t){Ka(e),mf(e),e.g=null;var r=2}else if(Ih(e.h,t))n=t.D,Y1(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Gl(),Ze(r,new O1(r,n)),nu(e)}else av(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&cI(e,t)||r==2&&pf(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}}function cv(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function gr(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=ut(e.kb,e);n||(n=new Cr("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Ha(n,"https"),Jl(n)),sI(n.toString(),r)}else mt(2);e.G=0,e.l&&e.l.va(t),hv(e),sv(e)}M.kb=function(e){e?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function hv(e){if(e.G=0,e.la=[],e.l){const t=X1(e.h);(t.length!=0||e.i.length!=0)&&(Nm(e.la,t),Nm(e.la,e.i),e.h.i.length=0,Qd(e.i),e.i.length=0),e.l.ua()}}function dv(e,t,n){var r=n instanceof Cr?xn(n):new Cr(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Wa(r,r.m);else{var i=H.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Cr(null,void 0);r&&Ha(s,r),t&&(s.g=t),i&&Wa(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&we(r,n,t),we(r,"VER",e.ma),ho(e,r),r}function fv(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Ie(new uo({jb:!0})):new Ie(e.ra),t.Ka(e.H),t}function pv(){}M=pv.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function qa(){if(Ci&&!(10<=Number(_T)))throw Error("Environmental error: no available transport.")}qa.prototype.g=function(e,t){return new $t(e,t)};function $t(e,t){Ve.call(this),this.g=new iv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ja(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ja(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ri(this)}tt($t,Ve);$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;mt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=dv(e,null,e.V),nu(e)};$t.prototype.close=function(){ff(this.g)};$t.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=nf(e),e=n);t.i.push(new tI(t.ab++,e)),t.G==3&&nu(t)};$t.prototype.M=function(){this.g.l=null,delete this.j,ff(this.g),delete this.g,$t.X.M.call(this)};function mv(e){af.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}tt(mv,af);function gv(){lf.call(this),this.status=1}tt(gv,lf);function Ri(e){this.g=e}tt(Ri,pv);Ri.prototype.xa=function(){Ze(this.g,"a")};Ri.prototype.wa=function(e){Ze(this.g,new mv(e))};Ri.prototype.va=function(e){Ze(this.g,new gv)};Ri.prototype.ua=function(){Ze(this.g,"b")};qa.prototype.createWebChannel=qa.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Ql.NO_ERROR=0;Ql.TIMEOUT=8;Ql.HTTP_ERROR=6;L1.COMPLETE="complete";b1.EventType=oo;oo.OPEN="a";oo.CLOSE="b";oo.ERROR="c";oo.MESSAGE="d";Ve.prototype.listen=Ve.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;var hI=function(){return new qa},dI=function(){return Gl()},rc=Ql,fI=L1,pI=Lr,Um={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mI=uo,Uo=b1,gI=Ie;const Vm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new c1("@firebase/firestore");function Hm(){return Nr.logLevel}function F(e,...t){if(Nr.logLevel<=ae.DEBUG){const n=t.map(gf);Nr.debug(`Firestore (${Pi}): ${e}`,...n)}}function kn(e,...t){if(Nr.logLevel<=ae.ERROR){const n=t.map(gf);Nr.error(`Firestore (${Pi}): ${e}`,...n)}}function _h(e,...t){if(Nr.logLevel<=ae.WARN){const n=t.map(gf);Nr.warn(`Firestore (${Pi}): ${e}`,...n)}}function gf(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e="Unexpected state"){const t=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+e;throw kn(t),new Error(t)}function me(e,t){e||q()}function G(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ni{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class vI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wI{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new yv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return me(t===null||typeof t=="string"),new ot(t)}}class CI{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class SI{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new CI(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xI{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new EI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=kI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function le(e,t){return e<t?-1:e>t?1:0}function Si(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Le.fromMillis(Date.now())}static fromDate(t){return Le.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?le(this.nanoseconds,t.nanoseconds):le(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new Le(0,0))}static max(){return new Y(new Le(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,n,r){n===void 0?n=0:n>t.length&&q(),r===void 0?r=t.length-n:r>t.length-n&&q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Us.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Us?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ce extends Us{construct(t,n,r){return new Ce(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const TI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Us{construct(t,n,r){return new lt(t,n,r)}static isValidIdentifier(t){return TI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(Ce.fromString(t))}static fromName(t){return new z(Ce.fromString(t).popFirst(5))}static empty(){return new z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ce.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ce.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new Ce(t.slice()))}}function II(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new tr(i,z.empty(),t)}function _I(e){return new tr(e.readTime,e.key,-1)}class tr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(Y.min(),z.empty(),-1)}static max(){return new tr(Y.max(),z.empty(),-1)}}function DI(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=z.comparator(e.documentKey,t.documentKey),n!==0?n:le(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==AI)throw e;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,r)=>{n(t)})}static reject(t){return new k((n,r)=>{r(t)})}static waitFor(t){return new k((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=k.resolve(!1);for(const r of t)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new k((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new k((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function po(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Oi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yf.at=-1;class Me{constructor(t,n){this.comparator=t,this.root=n||Ye.EMPTY}insert(t,n){return new Me(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new Me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vo(this.root,t,this.comparator,!0)}}class Vo{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:Ye.EMPTY,this.right=s!=null?s:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Ye(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t,this.data=new Me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Km(this.data.getIterator())}getIteratorFrom(t){return new Km(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new be(this.comparator);return n.data=t,n}}class Km{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new ln([])}unionWith(t){let n=new be(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ln(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Si(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new dt(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new dt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return le(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const $I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(e){if(me(!!e),typeof e=="string"){let t=0;const n=$I.exec(e);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ne(e.seconds),nanos:Ne(e.nanos)}}function Ne(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ei(e){return typeof e=="string"?dt.fromBase64String(e):dt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sv(e){const t=e.mapValue.fields.__previous_value__;return Cv(t)?Sv(t):t}function Vs(e){const t=nr(e.mapValue.fields.__local_write_time__.timestampValue);return new Le(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t,n,r,i,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Hs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hs&&t.projectId===this.projectId&&t.database===this.database}}function ru(e){return e==null}function Ga(e){return e===0&&1/e==-1/0}function PI(e){return typeof e=="number"&&Number.isInteger(e)&&!Ga(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cv(e)?4:OI(e)?9007199254740991:10:q()}function un(e,t){if(e===t)return!0;const n=$r(e);if(n!==$r(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Vs(e).isEqual(Vs(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=nr(r.timestampValue),o=nr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Ei(r.bytesValue).isEqual(Ei(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?Ga(s)===Ga(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return Si(e.arrayValue.values||[],t.arrayValue.values||[],un);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Wm(s)!==Wm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!un(s[a],o[a])))return!1;return!0}(e,t);default:return q()}}function Ws(e,t){return(e.values||[]).find(n=>un(n,t))!==void 0}function xi(e,t){if(e===t)return 0;const n=$r(e),r=$r(t);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return qm(e.timestampValue,t.timestampValue);case 4:return qm(Vs(e),Vs(t));case 5:return le(e.stringValue,t.stringValue);case 6:return function(i,s){const o=Ei(i),a=Ei(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=le(o[l],a[l]);if(u!==0)return u}return le(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=le(Ne(i.latitude),Ne(s.latitude));return o!==0?o:le(Ne(i.longitude),Ne(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=xi(o[l],a[l]);if(u)return u}return le(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Ho.mapValue&&s===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(s===Ho.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=le(a[c],u[c]);if(h!==0)return h;const d=xi(o[a[c]],l[u[c]]);if(d!==0)return d}return le(a.length,u.length)}(e.mapValue,t.mapValue);default:throw q()}}function qm(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return le(e,t);const n=nr(e),r=nr(t),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function ui(e){return Dh(e)}function Dh(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=nr(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ei(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,z.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Dh(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Dh(r.fields[a])}`;return s+"}"}(e.mapValue):q();var t,n}function Ah(e){return!!e&&"integerValue"in e}function vf(e){return!!e&&"arrayValue"in e}function Gm(e){return!!e&&"nullValue"in e}function Qm(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sa(e){return!!e&&"mapValue"in e}function ds(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Oi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ds(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ds(e.arrayValue.values[n]);return t}return Object.assign({},e)}function OI(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ds(n)}setAll(t){let n=lt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return un(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];sa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Oi(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Mt(ds(this.value))}}function Ev(e){const t=[];return Oi(e.fields,(n,r)=>{const i=new lt([n]);if(sa(r)){const s=Ev(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ln(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n,r,i,s,o){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Xe(t,0,Y.min(),Y.min(),Mt.empty(),0)}static newFoundDocument(t,n,r){return new Xe(t,1,n,Y.min(),r,0)}static newNoDocument(t,n){return new Xe(t,2,n,Y.min(),Mt.empty(),0)}static newUnknownDocument(t,n){return new Xe(t,3,n,Y.min(),Mt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Ym(e,t=null,n=[],r=[],i=null,s=null,o=null){return new LI(e,t,n,r,i,s,o)}function wf(e){const t=G(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ui(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ru(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ui(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ui(r)).join(",")),t.ht=n}return t.ht}function bI(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ui(r.value)}`;var r}).join(", ")}]`),ru(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ui(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ui(n)).join(",")),`Target(${t})`}function Cf(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!HI(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!un(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Jm(e.startAt,t.startAt)&&Jm(e.endAt,t.endAt)}function Nh(e){return z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Et extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,r):new MI(t,n,r):n==="array-contains"?new BI(t,r):n==="in"?new jI(t,r):n==="not-in"?new UI(t,r):n==="array-contains-any"?new VI(t,r):new Et(t,n,r)}static lt(t,n,r){return n==="in"?new FI(t,r):new zI(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(xi(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.ft(xi(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class MI extends Et{constructor(t,n,r){super(t,n,r),this.key=z.fromName(r.referenceValue)}matches(t){const n=z.comparator(t.key,this.key);return this.ft(n)}}class FI extends Et{constructor(t,n){super(t,"in",n),this.keys=xv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class zI extends Et{constructor(t,n){super(t,"not-in",n),this.keys=xv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function xv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class BI extends Et{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return vf(n)&&Ws(n.arrayValue,this.value)}}class jI extends Et{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class UI extends Et{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class VI extends Et{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!vf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}class Qa{constructor(t,n){this.position=t,this.inclusive=n}}class fs{constructor(t,n="asc"){this.field=t,this.dir=n}}function HI(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Xm(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jm(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!un(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function WI(e,t,n,r,i,s,o,a){return new iu(e,t,n,r,i,s,o,a)}function kv(e){return new iu(e)}function Zm(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function KI(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function qI(e){for(const t of e.filters)if(t.dt())return t.field;return null}function GI(e){return e.collectionGroup!==null}function Ks(e){const t=G(e);if(t._t===null){t._t=[];const n=qI(t),r=KI(t);if(n!==null&&r===null)n.isKeyField()||t._t.push(new fs(n)),t._t.push(new fs(lt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new fs(lt.keyField(),s))}}}return t._t}function Tn(e){const t=G(e);if(!t.wt)if(t.limitType==="F")t.wt=Ym(t.path,t.collectionGroup,Ks(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Ks(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new fs(s.field,o))}const r=t.endAt?new Qa(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Qa(t.startAt.position,t.startAt.inclusive):null;t.wt=Ym(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.wt}function $h(e,t,n){return new iu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function su(e,t){return Cf(Tn(e),Tn(t))&&e.limitType===t.limitType}function Tv(e){return`${wf(Tn(e))}|lt:${e.limitType}`}function Rh(e){return`Query(target=${bI(Tn(e))}; limitType=${e.limitType})`}function Sf(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Xm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(i,s,o){const a=Xm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(e,t)}function QI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Iv(e){return(t,n)=>{let r=!1;for(const i of Ks(e)){const s=YI(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YI(e,t,n){const r=e.field.isKeyField()?z.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?xi(a,l):q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(t)?"-0":t}}function Dv(e){return{integerValue:""+e}}function XI(e,t){return PI(t)?Dv(t):_v(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this._=void 0}}function JI(e,t,n){return e instanceof Ya?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof qs?Nv(e,t):e instanceof Gs?$v(e,t):function(r,i){const s=Av(r,i),o=eg(s)+eg(r.yt);return Ah(s)&&Ah(r.yt)?Dv(o):_v(r.It,o)}(e,t)}function ZI(e,t,n){return e instanceof qs?Nv(e,t):e instanceof Gs?$v(e,t):n}function Av(e,t){return e instanceof Xa?Ah(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Ya extends ou{}class qs extends ou{constructor(t){super(),this.elements=t}}function Nv(e,t){const n=Rv(t);for(const r of e.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends ou{constructor(t){super(),this.elements=t}}function $v(e,t){let n=Rv(t);for(const r of e.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class Xa extends ou{constructor(t,n){super(),this.It=t,this.yt=n}}function eg(e){return Ne(e.integerValue||e.doubleValue)}function Rv(e){return vf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function e_(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof qs&&r instanceof qs||n instanceof Gs&&r instanceof Gs?Si(n.elements,r.elements,un):n instanceof Xa&&r instanceof Xa?un(n.yt,r.yt):n instanceof Ya&&r instanceof Ya}(e.transform,t.transform)}class t_{constructor(t,n){this.version=t,this.transformResults=n}}class yn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new yn}static exists(t){return new yn(void 0,t)}static updateTime(t){return new yn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oa(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class au{}function Pv(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Lv(e.key,yn.none()):new mo(e.key,e.data,yn.none());{const n=e.data,r=Mt.empty();let i=new be(lt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(e.key,r,new ln(i.toArray()),yn.none())}}function n_(e,t,n){e instanceof mo?function(r,i,s){const o=r.value.clone(),a=ng(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof br?function(r,i,s){if(!oa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ng(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Ov(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function ps(e,t,n,r){return e instanceof mo?function(i,s,o,a){if(!oa(i.precondition,s))return o;const l=i.value.clone(),u=rg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof br?function(i,s,o,a){if(!oa(i.precondition,s))return o;const l=rg(i.fieldTransforms,a,s),u=s.data;return u.setAll(Ov(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,s,o){return oa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function r_(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Av(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function tg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Si(n,r,(i,s)=>e_(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class mo extends au{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends au{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ov(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ng(e,t,n){const r=new Map;me(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ZI(o,a,n[i]))}return r}function rg(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JI(s,o,t))}return r}class Lv extends au{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i_ extends au{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ee;function o_(e){switch(e){default:return q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function bv(e){if(e===void 0)return kn("GRPC error has no .code"),I.UNKNOWN;switch(e){case Ae.OK:return I.OK;case Ae.CANCELLED:return I.CANCELLED;case Ae.UNKNOWN:return I.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return I.INTERNAL;case Ae.UNAVAILABLE:return I.UNAVAILABLE;case Ae.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ae.NOT_FOUND:return I.NOT_FOUND;case Ae.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ae.ABORTED:return I.ABORTED;case Ae.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ae.DATA_LOSS:return I.DATA_LOSS;default:return q()}}(ee=Ae||(Ae={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Oi(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return wv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Me(z.comparator);function In(){return a_}const Mv=new Me(z.comparator);function es(...e){let t=Mv;for(const n of e)t=t.insert(n.key,n);return t}function Fv(e){let t=Mv;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function yr(){return ms()}function zv(){return ms()}function ms(){return new Li(e=>e.toString(),(e,t)=>e.isEqual(t))}const l_=new Me(z.comparator),u_=new be(z.comparator);function X(...e){let t=u_;for(const n of e)t=t.add(n);return t}const c_=new be(le);function Bv(){return c_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,go.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new lu(Y.min(),i,Bv(),In(),X())}}class go{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new go(r,n,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,n,r,i){this.Tt=t,this.removedTargetIds=n,this.key=r,this.Et=i}}class jv{constructor(t,n){this.targetId=t,this.At=n}}class Uv{constructor(t,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ig{constructor(){this.Rt=0,this.bt=og(),this.Pt=dt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=X(),n=X(),r=X();return this.bt.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new go(this.Pt,this.vt,t,n,r)}Nt(){this.Vt=!1,this.bt=og()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class h_{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=In(),this.qt=sg(),this.Kt=new be(le)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const r=this.zt(n);switch(t.state){case 0:this.Ht(n)&&r.Ct(t.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(t.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(t.resumeToken));break;default:q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,r=t.At.count,i=this.Xt(n);if(i){const s=i.target;if(Nh(s))if(r===0){const o=new z(s.path);this.jt(n,o,Xe.newNoDocument(o,Y.min()))}else me(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Nh(a.target)){const l=new z(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Xe.newNoDocument(l,t))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=X();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(t));const i=new lu(t,n,this.Kt,this.Ut,r);return this.Ut=In(),this.qt=sg(),this.Kt=new be(le),i}Qt(t,n){if(!this.Ht(t))return;const r=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,r){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new ig,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new be(le),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||F("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new ig),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function sg(){return new Me(z.comparator)}function og(){return new Me(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),f_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class p_{constructor(t,n){this.databaseId=t,this.gt=n}}function Ja(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vv(e,t){return e.gt?t.toBase64():t.toUint8Array()}function m_(e,t){return Ja(e,t.toTimestamp())}function vn(e){return me(!!e),Y.fromTimestamp(function(t){const n=nr(t);return new Le(n.seconds,n.nanos)}(e))}function Ef(e,t){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Hv(e){const t=Ce.fromString(e);return me(qv(t)),t}function Ph(e,t){return Ef(e.databaseId,t.path)}function ic(e,t){const n=Hv(t);if(n.get(1)!==e.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(Wv(n))}function Oh(e,t){return Ef(e.databaseId,t)}function g_(e){const t=Hv(e);return t.length===4?Ce.emptyPath():Wv(t)}function Lh(e){return new Ce(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wv(e){return me(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ag(e,t,n){return{name:Ph(e,t),fields:n.value.mapValue.fields}}function y_(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.gt?(me(u===void 0||typeof u=="string"),dt.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),dt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:bv(l.code);return new B(u,l.message||"")}(o);n=new Uv(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ic(e,r.document.name),s=vn(r.document.updateTime),o=new Mt({mapValue:{fields:r.document.fields}}),a=Xe.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new aa(l,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ic(e,r.document),s=r.readTime?vn(r.readTime):Y.min(),o=Xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new aa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ic(e,r.document),s=r.removedTargetIds||[];n=new aa([],s,i,null)}else{if(!("filter"in t))return q();{t.filter;const r=t.filter;r.targetId;const i=r.count||0,s=new s_(i),o=r.targetId;n=new jv(o,s)}}return n}function v_(e,t){let n;if(t instanceof mo)n={update:ag(e,t.key,t.value)};else if(t instanceof Lv)n={delete:Ph(e,t.key)};else if(t instanceof br)n={update:ag(e,t.key,t.data),updateMask:D_(t.fieldMask)};else{if(!(t instanceof i_))return q();n={verify:Ph(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ya)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xa)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:m_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(e,t.precondition)),n}function w_(e,t){return e&&e.length>0?(me(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?vn(r.updateTime):vn(i);return s.isEqual(Y.min())&&(s=vn(i)),new t_(s,r.transformResults||[])}(n,t))):[]}function C_(e,t){return{documents:[Oh(e,t.path)]}}function S_(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Oh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Oh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Qm(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NAN"}};if(Gm(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Qm(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NAN"}};if(Gm(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(h.field),op:T_(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:zr(c.field),direction:k_(c.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||ru(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function E_(e){let t=g_(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=Kv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new fs(ti(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ru(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Qa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Qa(d,h)}(n.endAt)),WI(t,i,o,s,a,"F",l,u)}function x_(e,t){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Kv(e){return e?e.unaryFilter!==void 0?[__(e)]:e.fieldFilter!==void 0?[I_(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Kv(t)).reduce((t,n)=>t.concat(n)):q():[]}function k_(e){return d_[e]}function T_(e){return f_[e]}function zr(e){return{fieldPath:e.canonicalString()}}function ti(e){return lt.fromServerFormat(e.fieldPath)}function I_(e){return Et.create(ti(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}function __(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ti(e.unaryFilter.field);return Et.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ti(e.unaryFilter.field);return Et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ti(e.unaryFilter.field);return Et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ti(e.unaryFilter.field);return Et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function D_(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function qv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&n_(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ps(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ps(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=zv();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Pv(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),X())}isEqual(t){return this.batchId===t.batchId&&Si(this.mutations,t.mutations,(n,r)=>tg(n,r))&&Si(this.baseMutations,t.baseMutations,(n,r)=>tg(n,r))}}class xf{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){me(t.mutations.length===r.length);let i=l_;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xf(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,n,r,i,s=Y.min(),o=Y.min(),a=dt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Sr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.re=t}}function R_(e){const t=E_({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?$h(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.Ye=new O_}addToCollectionParentIndex(t,n){return this.Ye.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(tr.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(tr.min())}updateCollectionGroup(t,n,r){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class O_{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new be(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new be(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ki(0)}static vn(){return new ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.changes=new Li(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.getBaseDocument(t,n,r))).next(i=>(r!==null&&ps(r.mutation,i,ln.empty(),Le.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,n,r=X()){const i=yr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=es();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=yr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,X()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=In();const o=ms(),a=ms();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof br)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ps(c.mutation,u,c.mutation.getFieldMask(),Le.now()))}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new b_(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ms();let i=new Me((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ln.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=zv();c.forEach(d=>{if(!s.has(d)){const m=Pv(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):GI(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):k.resolve(yr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.getBaseDocument(t,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,X())).next(c=>({batchId:a,changes:Fv(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new z(n)).next(r=>{let i=es();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=es();return this.indexManager.getCollectionParents(t,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new iu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Xe.newInvalidDocument(u)))});let o=es();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ps(u.mutation,l,ln.empty(),Le.now()),Sf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(t,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):k.resolve(Xe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:vn(r.createTime)}),k.resolve()}getNamedQuery(t,n){return k.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(r){return{name:r.name,query:R_(r.bundledQuery),readTime:vn(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.overlays=new Me(z.comparator),this.es=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const r=yr();return k.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ue(t,n,s)}),k.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),k.resolve()}getOverlaysForCollection(t,n,r){const i=yr(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=yr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ue(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new N_(n,r));let s=this.es.get(n);s===void 0&&(s=X(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.ns=new be(ze.ss),this.rs=new be(ze.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const r=new ze(t,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.cs(new ze(t,n))}hs(t,n){t.forEach(r=>this.removeReference(r,n))}ls(t){const n=new z(new Ce([])),r=new ze(n,t),i=new ze(n,t+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new z(new Ce([])),r=new ze(n,t),i=new ze(n,t+1);let s=X();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new ze(t,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ze{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return z.comparator(t.key,n.key)||le(t._s,n._s)}static os(t,n){return le(t._s,n._s)||z.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new be(ze.ss)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(t,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new be(le);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),k.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new ze(new z(s),0);let a=new be(le);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){me(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return k.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=r})}An(t){}containsKey(t,n){const r=new ze(n,0),i=this.gs.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t){this.Es=t,this.docs=new Me(z.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(t,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),k.resolve(r)}getAllFromCollection(t,n,r){let i=In();const s=new z(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||DI(_I(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(t,n,r,i){q()}As(t,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new U_(this)}getSize(t){return k.resolve(this.size)}}class U_ extends L_{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(r)}),k.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.persistence=t,this.Rs=new Li(n=>wf(n),Cf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.bs=0,this.Ps=new kf,this.targetCount=0,this.vs=ki.Pn()}forEachTarget(t,n){return this.Rs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new ki(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.Dn(n),k.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const r=this.Rs.get(n)||null;return k.resolve(r)}addMatchingKeys(t,n,r){return this.Ps.us(n,r),k.resolve()}removeMatchingKeys(t,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ps.ds(n);return k.resolve(r)}containsKey(t,n){return k.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new yf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new V_(this),this.indexManager=new P_,this.remoteDocumentCache=function(r){return new j_(r)}(r=>this.referenceDelegate.xs(r)),this.It=new $_(n),this.Ns=new F_(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new z_,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Vs[t.toKey()];return r||(r=new B_(n,this.referenceDelegate),this.Vs[t.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,r){F("MemoryPersistence","Starting transaction:",t);const i=new W_(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(t,n){return k.or(Object.values(this.Vs).map(r=>()=>r.containsKey(t,n)))}}class W_ extends NI{constructor(t){super(),this.currentSequenceNumber=t}}class Tf{constructor(t){this.persistence=t,this.Fs=new kf,this.$s=null}static Bs(t){return new Tf(t)}get Ls(){if(this.$s)return this.$s;throw q()}addReference(t,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),k.resolve()}removeReference(t,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,r=>{const i=z.fromPath(r);return this.Us(t,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Si=r,this.Di=i}static Ci(t,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new If(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.ki(t,n).next(s=>s||this.Oi(t,n,i,r)).next(s=>s||this.Mi(t,n))}ki(t,n){if(Zm(n))return k.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$h(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=X(...s);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(t,$h(n,null,"F")):this.Bi(t,u,n,l)}))})))}Oi(t,n,r,i){return Zm(n)||i.isEqual(Y.min())?this.Mi(t,n):this.Ni.getDocuments(t,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(t,n):(Hm()<=ae.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rh(n)),this.Bi(t,o,n,II(i,-1)))})}Fi(t,n){let r=new be(Iv(t));return n.forEach((i,s)=>{Sf(t,s)&&(r=r.add(s))}),r}$i(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,n){return Hm()<=ae.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Rh(n)),this.Ni.getDocumentsMatchingQuery(t,n,tr.min())}Bi(t,n,r,i){return this.Ni.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,n,r,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new Me(le),this.qi=new Li(s=>wf(s),Cf),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(r)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new M_(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function G_(e,t,n,r){return new q_(e,t,n,r)}async function Gv(e,t){const n=G(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Q_(e,t){const n=G(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const v=l.docVersions.get(m);me(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=X();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Qv(e){const t=G(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Y_(e,t){const n=G(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.has(h)?m=m.withResumeToken(dt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,v,S){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=In(),u=X();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(X_(s,o,t.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Y.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function X_(e,t,n){let r=X(),i=X();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=In();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function J_(e,t){const n=G(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Z_(e,t){const n=G(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,t).next(s=>s?(i=s,k.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Sr(t,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(t,r.targetId)),r})}async function bh(e,t,n){const r=G(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!po(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function lg(e,t,n){const r=G(e);let i=Y.min(),s=X();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),h=c.qi.get(u);return h!==void 0?k.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Tn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,t,n?i:Y.min(),n?s:X())).next(a=>(eD(r,QI(t),a),{documents:a,Hi:s})))}function eD(e,t,n){let r=e.Ki.get(t)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Ki.set(t,r)}class ug{constructor(){this.activeTargetIds=Bv()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tD{constructor(){this.Lr=new ug,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,r){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new ug,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,r,i,s){const o=this.ho(t,n);F("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(t,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw _h("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",r),l})}_o(t,n,r,i,s,o){return this.ao(t,n,r,i,s)}lo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Pi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}ho(t,n){const r=rD[t];return`${this.oo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,r,i){return new Promise((s,o)=>{const a=new gI;a.setWithCredentials(!0),a.listenOnce(fI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case rc.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),s(u);break;case rc.TIMEOUT:F("Connection",'RPC "'+t+'" timed out'),o(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const c=a.getStatus();if(F("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new B(d,h.message))}else o(new B(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(I.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{F("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(t,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=hI(),o=dI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new mI({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new iD({Hr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,v,S)=>{y.listen(v,p=>{try{S(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,Uo.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),m(u,Uo.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),m(u,Uo.EventType.ERROR,y=>{h||(h=!0,_h("Connection","WebChannel transport errored:",y),d.io(new B(I.UNAVAILABLE,"The operation could not be completed")))}),m(u,Uo.EventType.MESSAGE,y=>{var v;if(!h){const S=y.data[0];me(!!S);const p=S,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){F("Connection","WebChannel received error:",f);const g=f.status;let C=function(N){const R=Ae[N];if(R!==void 0)return bv(R)}(g),T=f.message;C===void 0&&(C=I.INTERNAL,T="Unknown error status: "+g+" with message "+f.message),h=!0,d.io(new B(C,T)),u.close()}else F("Connection","WebChannel received:",S),d.ro(S)}}),m(o,pI.STAT_EVENT,y=>{y.stat===Um.PROXY?F("Connection","Detected buffering proxy"):y.stat===Um.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(e){return new p_(e,!0)}class Yv{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t,n,r,i,s,o,a,l){this.Hs=t,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Yv(t,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,t!==4?this.No.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{t(()=>{const i=new B(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(t,n){const r=this.Go(this.Do);this.stream=this.Wo(t,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return n=>{this.Hs.enqueueAndForget(()=>this.Do===t?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oD extends Xv{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(t,n){return this.So.wo("Listen",t,n)}onMessage(t){this.No.reset();const n=y_(this.It,t),r=function(i){if(!("targetChange"in i))return Y.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?vn(s.readTime):Y.min()}(t);return this.listener.zo(n,r)}Ho(t){const n={};n.database=Lh(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Nh(a)?{documents:C_(i,a)}:{query:S_(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Vv(i,s.resumeToken):s.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=Ja(i,s.snapshotVersion.toTimestamp())),o}(this.It,t);const r=x_(this.It,t);r&&(n.labels=r),this.Lo(n)}Jo(t){const n={};n.database=Lh(this.It),n.removeTarget=t,this.Lo(n)}}class aD extends Xv{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,n){return this.So.wo("Write",t,n)}onMessage(t){if(me(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const n=w_(t.writeResults,t.commitTime),r=vn(t.commitTime);return this.listener.tu(r,n)}return me(!t.writeResults||t.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Lh(this.It),this.Lo(t)}Zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>v_(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}_o(t,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(I.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class uD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(t){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,t==="Online"&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(kn(n),this.uu=!1):F("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Mr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l.wu.add(4),await yo(l),l.yu.set("Unknown"),l.wu.delete(4),await cu(l)}(this))})}),this.yu=new uD(r,i)}}async function cu(e){if(Mr(e))for(const t of e.mu)await t(!0)}async function yo(e){for(const t of e.mu)await t(!1)}function Jv(e,t){const n=G(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),Af(n)?Df(n):bi(n).Oo()&&_f(n,t))}function Zv(e,t){const n=G(e),r=bi(n);n._u.delete(t),r.Oo()&&ew(n,t),n._u.size===0&&(r.Oo()?r.$o():Mr(n)&&n.yu.set("Unknown"))}function _f(e,t){e.pu.Mt(t.targetId),bi(e).Ho(t)}function ew(e,t){e.pu.Mt(t),bi(e).Jo(t)}function Df(e){e.pu=new h_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e._u.get(t)||null}),bi(e).start(),e.yu.cu()}function Af(e){return Mr(e)&&!bi(e).ko()&&e._u.size>0}function Mr(e){return G(e).wu.size===0}function tw(e){e.pu=void 0}async function hD(e){e._u.forEach((t,n)=>{_f(e,t)})}async function dD(e,t){tw(e),Af(e)?(e.yu.lu(t),Df(e)):e.yu.set("Unknown")}async function fD(e,t,n){if(e.yu.set("Online"),t instanceof Uv&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(e,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Za(e,r)}else if(t instanceof aa?e.pu.Gt(t):t instanceof jv?e.pu.Yt(t):e.pu.Wt(t),!n.isEqual(Y.min()))try{const r=await Qv(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(dt.EMPTY_BYTE_STRING,l.snapshotVersion)),ew(i,a);const u=new Sr(l.target,a,1,l.sequenceNumber);_f(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Za(e,r)}}async function Za(e,t,n){if(!po(t))throw t;e.wu.add(1),await yo(e),e.yu.set("Offline"),n||(n=()=>Qv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await cu(e)})}function nw(e,t){return t().catch(n=>Za(e,n,t))}async function hu(e){const t=G(e),n=rr(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;pD(t);)try{const i=await J_(t.localStore,r);if(i===null){t.du.length===0&&n.$o();break}r=i.batchId,mD(t,i)}catch(i){await Za(t,i)}rw(t)&&iw(t)}function pD(e){return Mr(e)&&e.du.length<10}function mD(e,t){e.du.push(t);const n=rr(e);n.Oo()&&n.Xo&&n.Zo(t.mutations)}function rw(e){return Mr(e)&&!rr(e).ko()&&e.du.length>0}function iw(e){rr(e).start()}async function gD(e){rr(e).nu()}async function yD(e){const t=rr(e);for(const n of e.du)t.Zo(n.mutations)}async function vD(e,t,n){const r=e.du.shift(),i=xf.from(r,t,n);await nw(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await hu(e)}async function wD(e,t){t&&rr(e).Xo&&await async function(n,r){if(i=r.code,o_(i)&&i!==I.ABORTED){const s=n.du.shift();rr(n).Fo(),await nw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await hu(n)}var i}(e,t),rw(e)&&iw(e)}async function hg(e,t){const n=G(e);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Mr(n);n.wu.add(3),await yo(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await cu(n)}async function CD(e,t){const n=G(e);t?(n.wu.delete(2),await cu(n)):t||(n.wu.add(2),await yo(n),n.yu.set("Unknown"))}function bi(e){return e.Iu||(e.Iu=function(t,n,r){const i=G(t);return i.iu(),new oD(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:hD.bind(null,e),Zr:dD.bind(null,e),zo:fD.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),Af(e)?Df(e):e.yu.set("Unknown")):(await e.Iu.stop(),tw(e))})),e.Iu}function rr(e){return e.Tu||(e.Tu=function(t,n,r){const i=G(t);return i.iu(),new aD(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:gD.bind(null,e),Zr:wD.bind(null,e),eu:yD.bind(null,e),tu:vD.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await hu(e)):(await e.Tu.stop(),e.du.length>0&&(F("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Nf(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(e,t){if(kn("AsyncQueue",`${t}: ${e}`),po(e))return new B(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this.comparator=t?(n,r)=>t(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=es(),this.sortedSet=new Me(this.comparator)}static emptySet(t){return new ci(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ci)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ci;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.Eu=new Me(z.comparator)}track(t){const n=t.doc.key,r=this.Eu.get(n);r?t.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,t):t.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Eu=this.Eu.remove(n):t.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):q():this.Eu=this.Eu.insert(n,t)}Au(){const t=[];return this.Eu.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ti{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ti(t,n,ci.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&su(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.Ru=void 0,this.listeners=[]}}class ED{constructor(){this.queries=new Li(t=>Tv(t),su),this.onlineState="Unknown",this.bu=new Set}}async function xD(e,t){const n=G(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SD),i)try{s.Ru=await n.onListen(r)}catch(o){const a=$f(o,`Initialization of query '${Rh(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.vu(s.Ru)&&Rf(n)}async function kD(e,t){const n=G(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TD(e,t){const n=G(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&Rf(n)}function ID(e,t,n){const r=G(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Rf(e){e.bu.forEach(t=>{t.next()})}class _D{constructor(t,n,r){this.query=t,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ti(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),n=!0):this.xu(t,this.onlineState)&&(this.Nu(t),n=!0),this.Du=t,n}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),n=!0),n}xu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Cu(t){if(t.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(t){t=Ti.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t){this.key=t}}class ow{constructor(t){this.key=t}}class DD{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=X(),this.mutatedKeys=X(),this.Gu=Iv(t),this.Qu=new ci(this.Gu)}get ju(){return this.Uu}Wu(t,n){const r=n?n.zu:new dg,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),m=Sf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),S=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),S=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),S=!0):d&&!m&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Ti(this.query,t.Qu,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new dg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=X(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return t.forEach(r=>{this.Ku.has(r)||n.push(new ow(r))}),this.Ku.forEach(r=>{t.has(r)||n.push(new sw(r))}),n}tc(t){this.Uu=t.Hi,this.Ku=X();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Ti.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class AD{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class ND{constructor(t){this.key=t,this.nc=!1}}class $D{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Li(a=>Tv(a),su),this.rc=new Map,this.oc=new Set,this.uc=new Me(z.comparator),this.cc=new Map,this.ac=new kf,this.hc={},this.lc=new Map,this.fc=ki.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function RD(e,t){const n=UD(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Z_(n.localStore,Tn(t));n.isPrimaryClient&&Jv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await PD(n,t,r,a==="current",o.resumeToken)}return i}async function PD(e,t,n,r,i){e._c=(h,d,m)=>async function(y,v,S,p){let f=v.view.Wu(S);f.$i&&(f=await lg(y.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const g=p&&p.targetChanges.get(v.targetId),C=v.view.applyChanges(f,y.isPrimaryClient,g);return pg(y,v.targetId,C.Xu),C.snapshot}(e,h,d,m);const s=await lg(e.localStore,t,!0),o=new DD(t,s.Hi),a=o.Wu(s.documents),l=go.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);pg(e,n,u.Xu);const c=new AD(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function OD(e,t){const n=G(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!su(s,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zv(n.remoteStore,r.targetId),Mh(n,r.targetId)}).catch(fo)):(Mh(n,r.targetId),await bh(n.localStore,r.targetId,!0))}async function LD(e,t,n){const r=VD(e);try{const i=await function(s,o){const a=G(s),l=Le.now(),u=o.reduce((d,m)=>d.add(m.key),X());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=In(),y=X();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((S,p)=>{p.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const S=[];for(const p of o){const f=r_(p,c.get(p.key).overlayedDocument);f!=null&&S.push(new br(p.key,f,Ev(f.value.mapValue),yn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Fv(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Me(le)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await vo(r,i.changes),await hu(r.remoteStore)}catch(i){const s=$f(i,"Failed to persist write");n.reject(s)}}async function aw(e,t){const n=G(e);try{const r=await Y_(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?me(o.nc):i.removedDocuments.size>0&&(me(o.nc),o.nc=!1))}),await vo(n,r,t)}catch(r){await fo(r)}}function fg(e,t,n){const r=G(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Rf(a)}(r.eventManager,t),i.length&&r.sc.zo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bD(e,t,n){const r=G(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let o=new Me(z.comparator);o=o.insert(s,Xe.newNoDocument(s,Y.min()));const a=X().add(s),l=new lu(Y.min(),new Map,new be(le),o,a);await aw(r,l),r.uc=r.uc.remove(s),r.cc.delete(t),Pf(r)}else await bh(r.localStore,t,!1).then(()=>Mh(r,t,n)).catch(fo)}async function MD(e,t){const n=G(e),r=t.batch.batchId;try{const i=await Q_(n.localStore,t);uw(n,r,null),lw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vo(n,i)}catch(i){await fo(i)}}async function FD(e,t,n){const r=G(e);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,t);uw(r,t,n),lw(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vo(r,i)}catch(i){await fo(i)}}function lw(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function uw(e,t,n){const r=G(e);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Mh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(r=>{e.ac.containsKey(r)||cw(e,r)})}function cw(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Zv(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Pf(e))}function pg(e,t,n){for(const r of n)r instanceof sw?(e.ac.addReference(r.key,t),zD(e,r)):r instanceof ow?(F("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||cw(e,r.key)):q()}function zD(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(F("SyncEngine","New document in limbo: "+n),e.oc.add(r),Pf(e))}function Pf(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new z(Ce.fromString(t)),r=e.fc.next();e.cc.set(r,new ND(n)),e.uc=e.uc.insert(n,r),Jv(e.remoteStore,new Sr(Tn(kv(n.path)),r,2,yf.at))}}async function vo(e,t,n){const r=G(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=If.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!po(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function BD(e,t){const n=G(e);if(!n.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await Gv(n.localStore,t);n.currentUser=t,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new B(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await vo(n,r.ji)}}function jD(e,t){const n=G(e),r=n.cc.get(t);if(r&&r.nc)return X().add(r.key);{let i=X();const s=n.rc.get(t);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function UD(e){const t=G(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bD.bind(null,t),t.sc.zo=TD.bind(null,t.eventManager),t.sc.wc=ID.bind(null,t.eventManager),t}function VD(e){const t=G(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=MD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=FD.bind(null,t),t}class HD{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=uu(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return G_(this.persistence,new K_,t.initialUser,this.It)}yc(t){return new H_(Tf.Bs,this.It)}gc(t){return new tD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WD{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BD.bind(null,this.syncEngine),await CD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ED}createDatastore(t){const n=uu(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new sD(i));var i;return function(s,o,a,l){return new lD(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>fg(this.syncEngine,a,0),o=cg.C()?new cg:new nD,new cD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,l,u){const c=new $D(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=G(t);F("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await yo(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(e,t,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function KD(e,t,n,r){if(t===!0&&r===!0)throw new B(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mg(e){if(!z.isDocumentKey(e))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function gg(e){if(z.isDocumentKey(e))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Of(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":q()}function el(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Of(e);throw new B(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new Map;class vg{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,KD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vg(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yI;switch(n.type){case"gapi":const r=n.client;return new SI(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yg.get(t);n&&(F("ComponentProvider","Removing Datastore"),yg.delete(t),n.terminate())}(this),Promise.resolve()}}function qD(e,t,n,r={}){var i;const s=(e=el(e,du))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&_h("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ot.MOCK_USER;else{o=tk(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ot(l)}e._authCredentials=new vI(new yv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class fu{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fu(this.firestore,t,this._query)}}class Jn extends fu{constructor(t,n,r){super(t,n,kv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new z(t))}withConverter(t){return new Jn(this.firestore,t,this._path)}}function dw(e,t,...n){if(e=Os(e),hw("collection","path",t),e instanceof du){const r=Ce.fromString(t,...n);return gg(r),new Jn(e,null,r)}{if(!(e instanceof Jt||e instanceof Jn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ce.fromString(t,...n));return gg(r),new Jn(e.firestore,null,r)}}function GD(e,t,...n){if(e=Os(e),arguments.length===1&&(t=vv.R()),hw("doc","path",t),e instanceof du){const r=Ce.fromString(t,...n);return mg(r),new Jt(e,null,new z(r))}{if(!(e instanceof Jt||e instanceof Jn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ce.fromString(t,...n));return mg(r),new Jt(e.firestore,e instanceof Jn?e.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):kn("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=vv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=$f(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function XD(e,t){e.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gv(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function JD(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ZD(e);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>hg(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>hg(t.remoteStore,s)),e.onlineComponents=t}async function ZD(e){return e.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await XD(e,new HD)),e.offlineComponents}async function fw(e){return e.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await JD(e,new WD)),e.onlineComponents}function eA(e){return fw(e).then(t=>t.syncEngine)}async function tA(e){const t=await fw(e),n=t.eventManager;return n.onListen=RD.bind(null,t.syncEngine),n.onUnlisten=OD.bind(null,t.syncEngine),n}function nA(e,t,n={}){const r=new Xn;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new QD({next:h=>{s.enqueueAndForget(()=>kD(i,c)),h.fromCache&&a.source==="server"?l.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new _D(o,u,{includeMetadataChanges:!0,ku:!0});return xD(i,c)}(await tA(e),e.asyncQueue,t,n,r)),r.promise}class rA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Yv(this,"async_queue_retry"),this.Wc=()=>{const n=sc();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const t=sc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Xn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(t){if(!po(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Nf.createAndSchedule(this,t,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&q()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class Lf extends du{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new rA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gw(this),this._firestoreClient.terminate()}}function pw(e,t){const n=typeof e=="object"?e:rT(),r=typeof e=="string"?e:t||"(default)",i=Zk(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jx("firestore");s&&qD(i,...s)}return i}function mw(e){return e._firestoreClient||gw(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function gw(e){var t;const n=e._freezeSettings(),r=function(i,s,o,a){return new RI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new YD(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ii(dt.fromBase64String(t))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ii(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return le(this._lat,t._lat)||le(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=/^__.*__$/;class sA{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new br(t,this.data,this.fieldMask,n,this.fieldTransforms):new mo(t,this.data,n,this.fieldTransforms)}}function vw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ff{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Ff(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:r,oa:!1});return i.ua(t),i}ca(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:r,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return tl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(vw(this.sa)&&iA.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class oA{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=r||uu(t)}da(t,n,r,i=!1){return new Ff({sa:t,methodName:n,fa:r,path:lt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function aA(e){const t=e._freezeSettings(),n=uu(e._databaseId);return new oA(e._databaseId,!!t.ignoreUndefinedProperties,n)}function lA(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);Ew("Data must be an object, but it was:",o,r);const a=Cw(r,o);let l,u;if(s.merge)l=new ln(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=uA(t,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hA(c,d)||c.push(d)}l=new ln(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new sA(new Mt(a),l,u)}function ww(e,t){if(Sw(e=Os(e)))return Ew("Unsupported field value:",t,e),Cw(e,t);if(e instanceof yw)return function(n,r){if(!vw(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ww(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Os(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XI(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Le.fromDate(n);return{timestampValue:Ja(r.It,i)}}if(n instanceof Le){const i=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ja(r.It,i)}}if(n instanceof Mf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ii)return{bytesValue:Vv(r.It,n._byteString)};if(n instanceof Jt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ef(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Of(n)}`)}(e,t)}function Cw(e,t){const n={};return wv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oi(e,(r,i)=>{const s=ww(i,t.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Sw(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Le||e instanceof Mf||e instanceof Ii||e instanceof Jt||e instanceof yw)}function Ew(e,t,n){if(!Sw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Of(n);throw r==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function uA(e,t,n){if((t=Os(t))instanceof bf)return t._internalPath;if(typeof t=="string")return xw(e,t);throw tl("Field path arguments must be of type string or ",e,!1,void 0,n)}const cA=new RegExp("[~\\*/\\[\\]]");function xw(e,t,n){if(t.search(cA)>=0)throw tl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bf(...t.split("."))._internalPath}catch{throw tl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(I.INVALID_ARGUMENT,a+e+l)}function hA(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Tw("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dA extends kw{data(){return super.data()}}function Tw(e,t){return typeof t=="string"?xw(e,t):t instanceof bf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{convertValue(t,n="none"){switch($r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ne(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ei(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw q()}}convertObject(t,n){const r={};return Oi(t.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Mf(Ne(t.latitude),Ne(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Sv(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vs(t));default:return null}}convertTimestamp(t){const n=nr(t);return new Le(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ce.fromString(t);me(qv(r));const i=new Hs(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gA extends kw{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Tw("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class la extends gA{data(t={}){return super.data(t)}}class yA{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new la(this._firestore,this._userDataWriter,r.key,r,new Wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new la(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Wo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new la(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Wo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:vA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vA(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class wA extends pA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ii(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function CA(e){e=el(e,fu);const t=el(e.firestore,Lf),n=mw(t),r=new wA(t);return fA(e._query),nA(n,e._query).then(i=>new yA(t,r,e,i))}function SA(e,t){const n=el(e.firestore,Lf),r=GD(e),i=mA(e.converter,t);return EA(n,[lA(aA(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function EA(e,t){return function(n,r){const i=new Xn;return n.asyncQueue.enqueueAndForget(async()=>LD(await eA(n),r,i)),i.promise}(mw(e),t)}(function(e,t=!0){(function(n){Pi=n})(nT),za(new Ls("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Lf(new wI(n.getProvider("auth-internal")),new xI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),li(Vm,"3.7.1",e),li(Vm,"3.7.1","esm2017")})();const xA=({name:e,setName:t})=>{const[n,r]=b.exports.useState(""),[i,s]=b.exports.useState("\uCC38\uC11D"),[o,a]=b.exports.useState("\uBA39\uC74C"),[l,u]=b.exports.useState(""),c=S=>{t(S.target.value)},h=S=>{r(S.target.value)},d=S=>{s(S.target.id)},m=S=>{a(S.target.id)},y=S=>{u(S.target.value)},v=async()=>{qd({apiKey:"AIzaSyBMtJ45y_ERKMzF7DlPlT7LA8iA_HG261w",authDomain:"justcode-6th-invitation.firebaseapp.com",projectId:"justcode-6th-invitation",storageBucket:"justcode-6th-invitation.appspot.com",messagingSenderId:"685076478393",appId:"1 =685076478393 =web =7172e25743aed4f902de68",measurementId:"G-Z00PR9BZX1"});const p=pw(),f={name:e,email:n,attend:i,dinner:o,memo:l,createdAt:new Date};await SA(dw(p,"attend-survey"),f)};return E(kA,{children:te("main",{className:"mainContainer",children:[te("div",{className:"wrapContainer",children:[E("div",{className:"titleContainer",children:E("h1",{className:"title",children:te("span",{className:"impact",children:["JUSTCODE 6\uAE30 ",E("br",{}),"\uC624\uD504\uB77C\uC778 \uC218\uB8CC\uC2DD \uCC38\uAC00 \uC5EC\uBD80 \uC870\uC0AC"]})})}),te("form",{className:"formContainer",onSubmit:S=>S.preventDefault(),children:[te("div",{className:"inputContent flex",children:[E("label",{htmlFor:"name",children:"\uC774\uB984"}),E("input",{id:"name",type:"text",onChange:c,value:e})]}),te("div",{className:"inputContent flex",children:[E("label",{htmlFor:"name",children:"\uC774\uBA54\uC77C"}),E("input",{id:"email",type:"text",onChange:h,value:n})]}),E("span",{className:"desc",children:"\uC624\uD504\uB77C\uC778 \uC218\uB8CC\uC2DD\uC5D0 \uCC38\uC11D\uD558\uC2DC\uB098\uC694?"}),te("div",{className:"inputContent flex",children:[E("label",{children:"\uCC38\uC11D \uC5EC\uBD80"}),te("div",{onChange:d,children:[E("input",{name:"yseorno1",id:"\uCC38\uC11D",type:"radio",defaultChecked:!0}),E("label",{htmlFor:"\uCC38\uC11D",children:"\uCC38\uC11D"}),E("input",{name:"yseorno1",id:"\uBD88\uCC38\uC11D",type:"radio"}),E("label",{htmlFor:"\uBD88\uCC38\uC11D",children:"\uBD88\uCC38\uC11D"})]})]}),E("span",{className:"desc",children:"\uB9CC\uC57D \uC778\uC6D0\uC774 \uBAA8\uC778\uB2E4\uBA74 \uC800\uB141 \uC2DD\uC0AC \uCC38\uC11D \uC758\uD5A5\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?"}),te("div",{className:"inputContent flex",children:[E("label",{children:"\uC2DD\uC0AC \uC5EC\uBD80"}),te("div",{onChange:m,children:[E("input",{name:"yseorno2",id:"\uBA39\uC74C",type:"radio",defaultChecked:!0}),E("label",{htmlFor:"\uBA39\uC74C",children:"\uCC38\uC11D"}),E("input",{name:"yseorno2",id:"\uC548\uBA39\uC74C",type:"radio"}),E("label",{htmlFor:"\uC548\uBA39\uC74C",children:"\uBD88\uCC38\uC11D"})]})]}),te("div",{className:"textareaContainer inputContent",children:[E("label",{htmlFor:"yes",children:"\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uD558\uACE0\uC2F6\uC740 \uB9D0"}),E("textarea",{value:l,onChange:y,name:"memo",id:"memo",placeholder:"\uC218\uB8CC\uD558\uBA70 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uD558\uACE0\uC2F6\uC740 \uB9D0\uC774 \uC788\uB2E4\uBA74 \uC801\uC5B4\uC8FC\uC138\uC694! \uADF8\uB3D9\uC548 \uACE0\uC0DD\uD558\uC168\uC2B5\uB2C8\uB2E4 :)"})]})]})]}),E(no,{to:"/complete",onClick:()=>{v()},children:E("button",{className:"btn",children:"\uC81C\uCD9C\uD558\uAE30"})})]})})},kA=Dn.div`
  width: 100%;
  height: 100vh;
  background: ${({theme:e})=>e.purpleToNavyBottomTo};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3.125rem 0;
    width: 50%;
    height: 70%;
    min-height: 600px;
    max-width: 700px;
    border-radius: 1.25rem;
    background-color: #fff;
    font-size: 1.875rem;
    box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.15);
    color: ${({theme:e})=>e.text};
    line-height: 2.188rem;
    transition: 300ms;

    @media screen and (min-width: 414px) and (max-width: 768px) {
      width: 80%;
      height: 60%;
      padding: 2rem 0;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }

    @media screen and (max-width: 414px) {
      width: 90%;
      height: 90%;
      padding: 1rem 0;
      font-size: 1.3rem;
      line-height: 1.5rem;
    }

    @media screen and (min-height: 735px) and (max-height: 990px) {
      width: 90%;
      height: 90%;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }

    @media screen and (max-height: 735px) {
      width: 90%;
      height: 90%;
      padding: 1rem 0;
      font-size: 1.3rem;
      line-height: 1.5rem;
    }

    .wrapContainer {
      width: 100%;

      .titleContainer {
        margin-bottom: 1.875rem;
        font-weight: 900;
        text-align: center;
        text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

        .impact {
          background-image: ${({theme:e})=>e.purpleToNavyTopTo};
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }
      }

      .formContainer {
        width: 70%;
        margin: 0 auto;
        padding-bottom: 1.25em;
        text-align: center;

        @media screen and (min-width: 414px) and (max-width: 768px) {
          width: 85%;
          padding-bottom: 0.8em;
        }

        @media screen and (max-width: 414px) {
          width: 90%;
          padding-bottom: 0.6em;
        }

        @media screen and (min-height: 735px) and (max-height: 990px) {
          padding-bottom: 0.6em;
        }

        @media screen and (max-height: 735px) {
          padding-bottom: 0.6em;
        }

        input {
          border: none;
          background-color: ${({theme:e})=>e.bg};
          border-radius: 0.938rem;
          padding: 8px;
        }

        input[type='text'] {
          width: 80%;
        }

        label {
          margin-right: 10px;
          font-size: 1.125rem;
          font-weight: 700;

          @media screen and (min-width: 414px) and (max-width: 768px) {
            font-size: 1rem;
          }

          @media screen and (max-width: 414px) {
            font-size: 0.8rem;
          }

          @media screen and (max-height: 735px) {
            font-size: 1rem;
          }
        }

        .inputContent {
          margin-bottom: 1.25rem;

          @media screen and (min-width: 414px) and (max-width: 768px) {
            margin-bottom: 0.8rem;
          }

          @media screen and (max-width: 414px) {
            margin-bottom: 0.6rem;
          }
        }

        .desc {
          display: block;
          font-size: 0.875rem;
          line-height: 1.063rem;
          color: ${({theme:e})=>e.desc};
          margin-top: 1.875rem;
          text-align: left;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .textareaContainer {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #ccc;
          padding-top: 1.25rem;

          textarea {
            border: none;
            background-color: ${({theme:e})=>e.bg};
            border-radius: 1.25rem;
            padding: 0.938rem;
            width: 100%;
            height: 5rem;
            resize: none;
          }
        }
      }
    }

    .btn {
      width: 25%;
      min-width: 218px;
      padding: 0.938rem;
      background: ${({theme:e})=>e.purpleToNavyRight};

      border: none;
      border-radius: 0.938rem;
      color: #fff;
      font-size: 1.375rem;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

      @media screen and (min-width: 414px) and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.8rem;
      }

      @media screen and (max-width: 414px) {
        font-size: 1rem;
        padding: 0.8rem;
      }

      &:hover {
        transform: scale(101%);
        transition: 250ms;
        background: ${({theme:e})=>e.blueToPurpleLeft};

        &:active {
          background: ${({theme:e})=>e.Navy};
        }
      }
    }
  }
`;function TA(e){return jl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M233 25.93L153.2 220.3l25.3 4.6 25.2-23.9 4.6 34.5 30.5 16.6-31.3 15-6.3 34.1-24-25.1-34.4 4.5 16.5-30.6-9.8-20.6-62.33 151.7c-2.47 12.6.28 22 7.44 30.9 7.29 9 19.69 17 35.89 23.2 7.2 2.8 15 5.2 23.4 7.2l3.1-9.9-24.4-32.6 40.7-.6 23.5-33.2 13.2 38.5 38.9 12.1-32.7 24.4.1 10.1c13.2.8 26.7 1 40.2.6 46.6-1.3 93.1-9.2 124.6-21.6 15.8-6.2 27.7-13.6 33.9-20.7 6.2-7.1 7.6-12.5 4.5-20.5L301.3 158.8l-4.5-.2-21.8 27-9.1-33.5-32.5-12.4 29.1-19 1.7-34.09L233 25.93zm74.7 247.97l25.5 31.8 40.7-1.8-22.4 34 14.3 38.1-39.3-10.7-31.8 25.4-1.9-40.7-34-22.4 38.1-14.4 10.8-39.3zm129 133.6c-1.8 5-4.5 9.7-8.1 13.8-1.9 2.2-4.1 4.3-6.5 6.3.3 4.5-.1 8.5-1.1 12-2.7 10.2-9.7 17.5-21.8 23.1-24.2 11.2-67.6 12.5-114 5.9-.5-.1-1-.2-1.5-.2-8.8.7-17.8 1.1-26.7 1.4-19.5.5-39.1 0-57.9-1.8 27 8 55.7 14.4 83.6 18.4 48.1 6.8 93.4 6.9 124.1-7.4 15.4-7.1 27.3-18.7 31.6-34.7 2.9-10.9 2.3-23.1-1.7-36.8z"}}]})(e)}function IA(e){return jl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M122.7 23.32l1.7 21.87-16.7 14.25 21.4 5.17 8.4 20.25L149 66.18l21.8-1.75-14.2-16.71 5.1-21.32-20.3 8.35-18.7-11.43zM464 32a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM239.8 42.5a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zm183.9 6.84c-9.2 1.74-17.7 7.18-25.9 14.28-7.6 6.53-14.7 14.66-20.7 23.45-18.8 3.01-37.6 10.67-50.2 21.13-16.1 13.2-30.4 35.8-38.2 59.1-7.4 3.1-14.4 6.8-20.1 10.8-15.5 10.9-23.5 31.8-29.4 50-5.9 18.3-8.8 34.3-8.8 34.3l17.8 3.2s2.7-15 8.1-31.9c5.5-16.9 14.8-35.3 22.7-40.8 1.3-.9 3-1.9 4.5-2.8-.6 5.7-.6 11.4.3 16.8 1.8 11.4 8 22.3 19 28.2 7.8 4.2 16.6 3.2 24 .2 7.4-3.1 14-8.2 19.7-14.2 5.7-6 10.4-13.1 13.2-20.6 2.8-7.5 3.8-16 .2-23.9h-.1c-3.9-8.4-11.4-13.8-19.4-16.1-8-2.3-16.6-2.2-25.2-.9-1.5.2-2.9.7-4.4 1 7.4-15.8 18-30.7 27.5-38.6 6.2-5.1 16.6-10 27.7-13.6-1.4 3.8-2.5 7.6-3 11.5-1.6 10.5.7 21.9 9.1 29.7 6.1 5.6 14.3 6.5 21.5 5.3 7.1-1.2 14-4.4 20.2-8.5 6.2-4.2 11.7-9.4 15.6-15.5 3.9-6.1 6.5-13.9 4-21.7v-.1c-3.3-10.07-11.5-16.99-20.6-20.27-3.9-1.4-8-2.19-12.2-2.66 2.9-3.26 5.9-6.31 8.9-8.92 6.8-5.84 13.7-9.5 17.6-10.23l-3.4-17.68zM174.8 84.39l-15.2 9.56 34.5 55.25-56.4 2.9 26.5 57.8 16.4-7.6-15.5-33.6 60.6-3.1-50.9-81.21zm216.4 19.31c6.1-.1 11.5.6 15.5 2.1 5.4 1.9 8.1 4.3 9.5 8.8.4 1.1.2 3.3-1.9 6.6-2.2 3.4-6.1 7.2-10.5 10.2-4.5 3-9.5 5.1-13.2 5.7-3.8.7-5.5 0-6.3-.7-3.5-3.2-4.5-7.2-3.5-13.9.8-5.4 3.3-11.9 7-18.6 1.2 0 2.3-.2 3.4-.2zM94.99 123a16 16 0 0 0-16 16 16 16 0 0 0 16 16A16 16 0 0 0 111 139a16 16 0 0 0-16.01-16zm356.11 37.2l-14.4 16.6-21.8-1.8 11.4 18.8-8.5 20.2 21.4-5 16.6 14.3 1.9-21.9 18.7-11.4-20.2-8.5-5.1-21.3zm-123.5 16.5c2.9.1 5.6.5 7.7 1.1 4.3 1.2 6.6 3 8.2 6.4.9 1.9 1 5.4-.7 10-1.7 4.7-5.2 10.1-9.4 14.6s-9.3 8.1-13.5 9.8c-4.2 1.7-6.8 1.6-8.5.7h-.1c-5.8-3.2-8.6-7.8-9.7-15.2-1-6.3-.3-14.3 1.8-22.9 4.9-1.7 9.8-3.1 14.5-3.8 3.5-.5 6.7-.7 9.7-.7zm-202.4 51.9c-7.2-.2-11.7 1.5-14.5 4.3-2.8 2.8-4.5 7.3-4.3 14.5.2 7.3 2.6 16.9 7.2 27.6 9.2 21.5 27.3 47.4 51.6 71.8 24.3 24.3 50.3 42.3 71.8 51.5 10.6 4.6 20.2 7 27.5 7.2 7.3.3 11.7-1.5 14.5-4.3 2.8-2.8 4.6-7.2 4.3-14.5-.2-7.3-2.6-16.9-7.2-27.6-9.2-21.4-27.2-47.4-51.5-71.7-24.3-24.4-50.3-42.4-71.8-51.6-10.7-4.6-20.3-7-27.6-7.2zm232 31.3l-33 54-29.1-27.9-12.4 13 45.1 43.3 33.8-55.2 38.7 32.3 89.3-38.2-7-16.6-79.3 34-46.1-38.7zM93.43 272.6l-17.64 57.9c41.41 49.1 89.71 76.7 142.11 94.7l21.6-6.6c-3.1-1.1-6.4-2.4-9.7-3.8-24.4-10.4-51.7-29.6-77.3-55.3-25.7-25.7-44.9-53-55.34-77.4-1.41-3.2-2.65-6.4-3.73-9.5zm-23.82 78.2l-14.01 46c28.89 27 59 39.2 90.6 50.2l43.4-13.2c-43.2-17.6-84-43.3-119.99-83zM368 352a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM49.81 415.9l-20.29 66.6 88.28-26.9c-22.77-9.1-45.78-20.7-67.99-39.7z"}}]})(e)}function _A(e){return jl({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"}},{tag:"path",attr:{d:"M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"}},{tag:"path",attr:{d:"M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]})(e)}const DA=({name:e,setName:t})=>{const[n,r]=b.exports.useState(!1),[i,s]=b.exports.useState(!1),o=new n1,[a,l]=b.exports.useState(!1);return b.exports.useEffect(()=>{!e&&t("\uC800\uCF54 6\uAE30"),o.addConfetti({confettiNumber:500});const u=setInterval(()=>{r(h=>!h),s(h=>!h)},300),c=setInterval(()=>{l(h=>!h)},2200);return()=>{clearInterval(u),clearInterval(c)}},[]),E(RA,{children:E("div",{className:"mainContainer",children:te("div",{className:"contentContainer",children:[E(IA,{size:"3rem",className:"icon"}),E("p",{children:"\uAC10\uC0AC\uD569\uB2C8\uB2E4!"}),E("span",{className:"info impact",children:"\uC81C\uCD9C\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),te("p",{children:[E($A,{fire:i,children:"\u{1F525}"}),E("span",{className:"impact",children:e}),"\uB2D8 ",E("br",{}),"\uADF8\uB3D9\uC548 \uACE0\uC0DD\uB9CE\uC73C\uC168\uC2B5\uB2C8\uB2E4."]}),E("p",{children:"\uCDE8\uC9C1\uAE4C\uC9C0 \uD654\uC774\uD305!"}),E("br",{}),te("p",{children:["\uC218\uB8CC\uC2DD \uB54C \uB9CC\uB098\uC694",E(NA,{shake:n,children:"\u{1F44B}"})]}),te(no,{to:"/message",children:[E(_A,{className:"message",size:"1.8rem"}),te(AA,{$blink:a,children:[E(s1,{size:"1.5rem"}),E("p",{className:"desc",children:"\uB20C\uB7EC\uC11C \uBAA8\uB450\uC758 \uBA54\uC138\uC9C0 \uBCF4\uB7EC\uAC00\uAE30"})]})]})]})})})},AA=Dn.div`
  color: ${({theme:e})=>e.text};
  transform: ${({$blink:e})=>e?"scale(99%) translateY(-8px)":"scale(102%) translateY(0)"};
  transition: 200ms;
  opacity: ${({$blink:e})=>e?1:0};

  .desc {
    transform: ${({$blink:e})=>e?"scale(99%) translateY(-10px)":"scale(102%) translateY(-10px)"};
    color: ${({theme:e})=>e.text};
    font-size: 0.8rem;
    transition: 200ms;
  }
`,NA=Dn.span`
  transition: 300ms;
  display: inline-block;
  transform: ${({shake:e})=>e?"rotate(0)":"rotate(20deg)"};
`,$A=Dn.span`
  margin-right: 5px;
  transition: 300ms;
  display: inline-block;
  transform: ${({fire:e})=>e?"":"scale(110%) translateY(-2px)"};
`,RA=Dn.div`
  width: 100%;
  height: 100vh;
  background: ${({theme:e})=>e.blueToPurpleLeft};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0;
    width: 50%;
    height: 50%;
    min-height: 600px;
    max-width: 700px;
    border-radius: 20px;
    background-color: #fff;
    font-size: 27px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    color: ${({theme:e})=>e.text};
    line-height: 36px;
    transition: 300ms;

    @media screen and (max-width: 540px) {
      width: 80%;
      font-size: 23px;
      line-height: 26px;
      padding: 25px 15px 20px 15px;
      transition: 300ms;
    }

    .contentContainer {
      font-weight: 600;
      text-align: center;
      text-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
      transform: translateY(20px);

      .icon {
        color: ${({theme:e})=>e.blue};
      }

      .info {
        display: block;
        margin-bottom: 30px;
      }

      .impact {
        font-weight: 900;
        background-image: ${({theme:e})=>e.blueToPurpleLeft};
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }

      .message {
        margin-top: 15px;
        cursor: pointer;
        color: ${({theme:e})=>e.purple};

        &:hover {
          color: ${({theme:e})=>e.blue};
        }

        &:active {
          color: ${({theme:e})=>e.pink};
        }
      }
    }
  }
`,PA=()=>{const[e,t]=b.exports.useState();return b.exports.useEffect(()=>{(async()=>{const i=qd({apiKey:"AIzaSyBMtJ45y_ERKMzF7DlPlT7LA8iA_HG261w",authDomain:"justcode-6th-invitation.firebaseapp.com",projectId:"justcode-6th-invitation",storageBucket:"justcode-6th-invitation.appspot.com",messagingSenderId:"685076478393",appId:"1 =685076478393 =web =7172e25743aed4f902de68",measurementId:"G-Z00PR9BZX1"}),s=pw(i),o=dw(s,"attend-survey"),a=await CA(o);let l=[];a.forEach((c,h)=>{l.push({id:c._document.key.path.segments[6],name:c._document.data.value.mapValue.fields.name.stringValue,email:c._document.data.value.mapValue.fields.email.stringValue,attend:c._document.data.value.mapValue.fields.attend.stringValue,dinner:c._document.data.value.mapValue.fields.dinner.stringValue,memo:c._document.data.value.mapValue.fields.memo.stringValue,createdAt:c._document.data.value.mapValue.fields.createdAt.timestampValue})});const u=l.map(c=>c.name===""?{...c,name:"\uC775\uBA85"}:c).filter(c=>c.name!=="Joomi"&&c.name!=="\uAE40\uCE58\uB9C1"&&c.memo!=="");t(u)})()},[]),E(OA,{children:te("div",{className:"mainContainer",children:[E(no,{to:"/",className:"goToHome",children:E(TA,{size:"2.5rem"})}),E("div",{className:"titleContainer",children:te("h1",{children:[E("span",{className:"title",children:"\uB9C8\uC9C0\uB9C9 \uD55C\uB9C8\uB514"})," \u{1F600}"]})}),E("ul",{className:"contentContainer",children:e&&e.map(n=>te("li",{className:"card",children:[E("p",{className:"name",children:n.name}),E("p",{className:"memo",children:n.memo})]},n.id))})]})})},OA=Dn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      to top left,
      rgb(118, 37, 202) 0%,
      rgb(224, 29, 207) 100%
    )
    no-repeat;

  .mainContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 70%;
    min-height: 600px;
    padding: 3.125rem;
    border-radius: 1.25rem;
    background-color: #fff;
    box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.15);
    color: ${({theme:e})=>e.text};
    transition: 300ms;

    @media screen and (max-width: 615px) {
      width: 90%;
      height: 85%;
      padding: 1rem;
    }

    .goToHome {
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
      color: ${({theme:e})=>e.pink};

      &:hover {
        color: ${({theme:e})=>e.blue};
      }

      &:active {
        color: ${({theme:e})=>e.purple};
      }

      @media screen and (max-width: 615px) {
        padding: 10px;
        top: 0;
        left: 0;
      }
    }

    .titleContainer {
      font-size: 2rem;
      margin-bottom: 1.875rem;
      font-weight: 900;
      text-align: center;
      text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

      @media screen and (max-width: 615px) {
        font-size: 1.5rem;
      }

      .title {
        background-image: ${({theme:e})=>e.purpleToNavyRight};
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
    }

    .contentContainer {
      width: 100%;
      height: 80%;
      padding: 30px;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 615px) {
        padding: 10px;
      }

      .card {
        width: 85%;
        min-width: 200px;
        padding: 20px;
        margin-bottom: 30px;
        border-radius: 1.25rem;
        border: 2px solid ${({theme:e})=>e.blue};
        box-shadow: 4px 4px 0.8rem rgba(0, 0, 0, 0.15);

        @media screen and (max-width: 615px) {
          width: 100%;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &:nth-child(2n) {
          border: 2px solid ${({theme:e})=>e.purple};
        }

        .name {
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 1.4rem;
          margin-bottom: 5px;
        }

        .memo {
          line-height: 1.2rem;
        }
      }
    }
  }
`,LA=()=>{const[e,t]=b.exports.useState("");return E(ZE,{children:E(Y2,{theme:fx,children:te(GE,{children:[E(Br,{path:"/",element:E(Lx,{})}),E(Br,{path:"/home",element:E(zx,{})}),E(Br,{path:"/form",element:E(xA,{name:e,setName:t})}),E(Br,{path:"/complete",element:E(DA,{name:e,setName:t})}),E(Br,{path:"/message",element:E(PA,{})})]})})})};var Iw=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},_w=Vd(wg||(wg=Iw([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));t1(Cg||(Cg=Iw(["",""],["",""])),_w);var wg,Cg;const bA=t1`
${_w}

* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
}

ul, ol, li {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  button {
    cursor: pointer;
  }


  b {
    font-weight: 700;
  }

  input,
  textarea {
    outline: none;
  }

  body{
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

`;ac.createRoot(document.getElementById("root")).render(te(Zt.StrictMode,{children:[E(bA,{}),E(LA,{})]}));
