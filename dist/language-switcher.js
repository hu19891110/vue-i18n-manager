!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=23)}({17:function(e,t){e.exports='<div class="language-switcher">\n  <div class="language-switcher-wrapper">\n    <button\n      class="button language"\n      v-for="language in languages"\n      @click="$setLanguage(language.code)">\n        <span class="label">{{ getLabel(language) }}</span>\n    </button>\n  </div>\n</div>\n'},23:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),u=r(o);t.default={template:u.default,props:{label:{type:String,default:"code"}},computed:{languages:function(){return this.$store.getters.availableLanguages}},methods:{getLabel:function(e){var t=e[this.label];return t?t:e.code}}}}})});