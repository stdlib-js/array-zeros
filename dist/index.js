"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(T,n){
var o=require('@stdlib/array-base-assert-contains/dist').factory,v=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,g=require('@stdlib/array-ctors/dist'),m=require('@stdlib/array-base-zeros/dist'),d=require('@stdlib/array-dtypes/dist'),c=require('@stdlib/array-defaults/dist'),f=require('@stdlib/array-base-join/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist'),l=c.get("dtypes.default"),t=d("numeric_and_generic"),p=o(t);function q(r){var e,a;if(!v(r))throw new TypeError(i('02Z2d',r));if(arguments.length>1){if(e=arguments[1],!p(e))throw new TypeError(i('02ZDQ',f(t,'", "'),e))}else e=l;if(e==="generic")return m(r);if(a=g(e),a===null)throw new TypeError(i('02Z37',e));return new a(r)}n.exports=q
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
