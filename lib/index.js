/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.RCP=t():e.RCP=t()}(self,(()=>(()=>{"use strict";var e={43:(e,t,r)=>{var n=r(466),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,s=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!f.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:a.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},751:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),f=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var S=h.prototype=new b;S.constructor=h,_(S,m.prototype),S.isPureReactComponent=!0;var E=Array.isArray,R=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,u={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)R.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=t[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var i=Array(f),s=0;s<f;s++)i[s]=arguments[s+2];u.children=i}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:r,type:e,key:c,ref:a,props:u,_owner:j.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var $=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var f=!1;if(null===e)f=!0;else switch(a){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return c=c(f=e),e=""===u?"."+x(f,0):u,E(c)?(o="",null!=e&&(o=e.replace($,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||f&&f.key===c.key?"":(""+c.key).replace($,"$&/")+"/")+e)),t.push(c)),1;if(f=0,u=""===u?".":u+":",E(e))for(var i=0;i<e.length;i++){var s=u+x(a=e[i],i);f+=C(a,t,o,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(a=e.next()).done;)f+=C(a=a.value,t,o,s=u+x(a,i++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function P(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function g(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},D={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:D,ReactCurrentOwner:j};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=h,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=j.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)R.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==f?f[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){f=Array(i);for(var s=0;s<i;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:g}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},466:(e,t,r)=>{e.exports=r(751)},823:(e,t,r)=>{e.exports=r(43)},364:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Demo=void 0,(n=r(466))&&n.__esModule;var n,o=r(823);t.Demo=function(){return(0,o.jsx)("div",{children:"Demo Component"})}},767:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(364);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}))}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(767)})()));