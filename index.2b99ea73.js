!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire216a;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire216a=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){var r=a.default(e,t,"get");return l.default(e,r)};var a=s(o("1UHsN")),l=s(o("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,r){c.default(e,t),t.set(e,r)};var d,c=(d=o("5k7tO"))&&d.__esModule?d:{default:d};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){var n=p.default(e,t,"set");return v.default(e,n,r),r};var p=m(o("1UHsN")),v=m(o("jdVyQ"));function m(e){return e&&e.__esModule?e:{default:e}}var g={};function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,r){t&&_(e.prototype,t);r&&_(e,r);return e};var y=new WeakMap;new(function(){"use strict";function t(r){e(i)(this,t),e(f)(this,y,{writable:!0,value:void 0}),this.switcherRef=document.querySelector(r),this.switcherRef.addEventListener("change",this.toggleTheme.bind(this)),"theme-dark"===localStorage.getItem("theme")?(this.setTheme("theme-dark"),this.switcherRef.checked=!1):(this.setTheme("theme-light"),this.switcherRef.checked=!0)}return e(g)(t,[{key:"setTheme",value:function(t){e(h)(this,y,t),localStorage.setItem("theme",t),document.documentElement.className=t}},{key:"toggleTheme",value:function(){"theme-dark"===localStorage.getItem("theme")?this.setTheme("theme-light"):this.setTheme("theme-dark")}},{key:"theme",get:function(){return e(u)(this,y)},set:function(e){this.setTheme(e)}}]),t}())("#slider")}();
//# sourceMappingURL=index.2b99ea73.js.map
