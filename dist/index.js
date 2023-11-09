"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(f,a){
var s=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/array-ctors/dist'),v=require('@stdlib/array-base-zeros/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e){var r,t;if(!s(e))throw new TypeError(i('02Z2d',e));if(arguments.length>1?r=arguments[1]:r="float64",r==="generic")return v(e);if(t=o(r),t===null)throw new TypeError(i('02Z37',r));return new t(e)}a.exports=g
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
