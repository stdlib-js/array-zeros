// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n){var i,o;if(!r(n))throw new TypeError(s("01H2p",n));if("generic"===(i=arguments.length>1?arguments[1]:"float64"))return t(n);if(null===(o=e(i)))throw new TypeError(s("01H3J",i));return new o(n)}export{n as default};
//# sourceMappingURL=index.mjs.map
