!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Toast=e():t.Toast=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);n(2);e.default=n(6).default},function(t,e,n){var i=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);t.exports=o.locals||{}},function(t,e,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],c=e.base?r[0]+e.base:r[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=a(l),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(s[f].references++,s[f].updater(d)):s.push({identifier:l,updater:m(d,e),references:1}),i.push(l)}return i}function u(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function p(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h=null,v=0;function m(t,e){var n,i,o;if(e.singleton){var r=v++;n=h||(h=u(e)),i=d.bind(null,n,r,!1),o=d.bind(null,n,r,!0)}else n=u(e),i=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=c(t,e),u=0;u<n.length;u++){var l=a(n[u]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=r}}}},function(t,e,n){(e=n(5)(!1)).push([t.i,":root {\n\t--max-width: 250px;\n}\n\nbody {\n\tpadding: 0;\n\tmargin: 0;\n}\n\n#toasts-container {\n\tposition: fixed;\n\ttop: 20px;\n\tright: 20px;\n}\n\n#toasts-content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#toasts-container.position-left {\n\tright: unset;\n\tleft: 20px;\n\talign-items: flex-start;\n}\n\n#toasts-container.position-right {\n\tleft: unset;\n\tright: 20px;\n\talign-items: flex-end;\n}\n\n#toasts-container.position-top {\n\tbottom: unset;\n\ttop: 20px;\n\tjustify-content: flex-start;\n}\n\n#toasts-container.position-bottom {\n\ttop: unset;\n\tbottom: 20px;\n\tjustify-content: flex-end;\n}\n\n.night-mode .toast {\n\tbackground-color: rgb(51, 51, 51) !important;\n\tcolor: #fff !important;\n\tborder: 0 !important;\n}\n\n.toast {\n\tuser-select: none;\n\tz-index: 10000 !important;\n\tcursor: pointer;\n\ttop: 0;\n\theight: auto;\n\tpadding: 10px 25px;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\twidth: var(--max-width);\n\tposition: relative;\n    border: 1px solid rgb(195, 193, 195);\n    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);\n    background-color: #fff;\n\tborder-radius: .25rem;\n    line-height: 1.4;\n\tfont-family: sans-serif;\n}\n\n.toast:not(:first-of-type) {\n\tmargin-top: 5px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"default",(function(){return s}));var o=document.getElementById("toasts-content"),r=0,s=function(){function t(e){var n=e.content,i=e.persistent,o=e.interactable,s=e.timeout;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.identifier="toast-".concat(r),r++,this.visible=!1,this.content=n,this.persistent=void 0!==i&&i,this.timeout=s||6e3,this.interactable=void 0===o||o,this.persistent||this.startTimer(),this.interactable&&this.dragListener()}var e,n,s;return e=t,(n=[{key:"content",get:function(){return this._content},set:function(t){this._content=t,this.visible?this.element.innerHTML=this.content:(o.insertAdjacentHTML("beforeend",'<div class="toast '.concat(this.identifier,'">').concat(this.content,"</div>")),this.find()),this.visible=!0}},{key:"startTimer",value:function(){setTimeout(this.destroy.bind(this),this.timeout)}},{key:"dragListener",value:function(){var t=this;this.element.addEventListener("mousedown",(function(e){var n=t.element.getBoundingClientRect().x,i=e.clientX-n,o=function(e){var o=e.pageX,r=1.2-Math.abs(o-i-n)/100;t.element.style.opacity=r,t.element.style.left="".concat(o-i-n,"px")};window.addEventListener("mousemove",o,!1),window.addEventListener("mouseup",(function(){t.handleInputLoss(),window.removeEventListener("mousemove",o,!1)}),!1)}),!1),this.element.addEventListener("touchstart",(function(e){var n=t.element.getBoundingClientRect().x,i=e.touches[0].clientX-n,o=function(e){var o=e.touches;if(1===o.length){var r=o[0].pageX,s=1.2-Math.abs(r-i-n)/100;t.element.style.opacity=s,t.element.style.left="".concat(r-i-n,"px")}};window.addEventListener("touchmove",o,!1),window.addEventListener("touchend",(function(){t.handleInputLoss(),window.removeEventListener("touchmove",o,!1)}),!1)}),!1)}},{key:"handleInputLoss",value:function(){var t=this;if(this.element.style.opacity<.15)return this.destroy();this.element.style.opacity=1,this.element.style.left=0,this.element.style.transition="opacity .2s linear, left .2s linear",setTimeout((function(){t.element.style.transition=null}),200)}},{key:"find",value:function(){for(var t=0;t<o.childNodes.length;t++)if(o.childNodes[t].classList.contains(this.identifier))return this.element=o.childNodes[t]}},{key:"destroy",value:function(){this.element.remove()}},{key:"show",value:function(){this.visible||(this.element.style.display="block",this.visible=!0)}},{key:"hide",value:function(){this.visible&&(this.element.style.display="none",this.visible=!1)}}])&&i(e.prototype,n),s&&i(e,s),t}()}])}));