"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(l,i){
var s=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/array-ctors/dist'),v=require('@stdlib/array-base-zeros/dist'),g=require('@stdlib/array-defaults/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist'),m=g.get("dtypes.default");function d(r){var e,t;if(!s(r))throw new TypeError(a('02Z2d',r));if(arguments.length>1?e=arguments[1]:e=m,e==="generic")return v(r);if(t=o(e),t===null)throw new TypeError(a('02Z37',e));return new t(r)}i.exports=d
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
