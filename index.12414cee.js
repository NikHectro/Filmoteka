function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire216a;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequire216a=o);var l,r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,h=u||m||Function("return this")(),p=Object.prototype.toString,f=Math.max,g=Math.min,v=function(){return h.Date.now()};function _(e,t,n){var a,o,l,r,s,i,c=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=a,l=o;return a=o=void 0,c=t,r=e.apply(l,n)}function p(e){return c=e,s=setTimeout(L,t),d?h(e):r}function _(e){var n=e-i;return void 0===i||n>=t||n<0||u&&e-c>=l}function L(){var e=v();if(_(e))return w(e);s=setTimeout(L,function(e){var n=t-(e-i);return u?g(n,l-(e-c)):n}(e))}function w(e){return s=void 0,m&&a?h(e):(a=o=void 0,r)}function x(){var e=v(),n=_(e);if(a=arguments,o=this,i=e,n){if(void 0===s)return p(i);if(u)return s=setTimeout(L,t),h(i)}return void 0===s&&(s=setTimeout(L,t)),r}return t=b(t)||0,y(n)&&(d=!!n.leading,l=(u="maxWait"in n)?f(b(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=i=o=s=void 0},x.flush=function(){return void 0===s?r:w(v())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):s.test(e)?NaN:+e}l=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),_(e,t,{leading:a,maxWait:t,trailing:o})};var L=o("brr8Z"),w=o("5gHzC"),x=o("9N7Qa"),S=o("2nhTy"),E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.default=function(e,t){k.default(e,t),t.add(e)};var T,k=(T=o("7K24o"))&&T.__esModule?T:{default:T};var M=new WeakSet;class O{show(){document.body.style.overflow="hidden";const t=`\n    <div class="backdrop is-hidden">\n      <div class="modal-wrapper ${this.containerClass||""}">\n        <button class="modal__btn-close"></button>\n        <div class="modal-content">\n          ${this.markup}\n        </div>\n      </div>\n    </div>\n    `;document.body.insertAdjacentHTML("beforeend",t);const n=document.querySelector(".backdrop");n.classList.remove("is-hidden");document.querySelector(".modal__btn-close").addEventListener("click",this.close),n.addEventListener("click",e(E)(this,M,I).bind(this))}close(){document.body.style.overflow="initial";const e=document.querySelector(".backdrop");e.classList.add("is-hidden"),setTimeout((()=>{e.remove()}),500)}constructor(t,n){e(q)(this,M),this.markup=t,n.containerClass&&(this.containerClass=n.containerClass),console.log(this.containerClass)}}function I(e){console.log(this),e.target.classList.contains("backdrop")&&this.close()}var C=o("44W7Q");var j=e(o("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n    <img class="modal__img" src="'+c(typeof(l=null!=(l=d(n,"full_path")||(null!=t?d(t,"full_path"):t))?l:s)===i?l.call(r,{name:"full_path",hash:{},data:o,loc:{start:{line:2,column:33},end:{line:2,column:46}}}):l)+'" alt="image-film" />\n    <div class="modal__description">\n      <h2 class="modal__title">'+c(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:s)===i?l.call(r,{name:"title",hash:{},data:o,loc:{start:{line:4,column:31},end:{line:4,column:40}}}):l)+'</h2>\n\n      \x3c!-- <ul class="modal__list">\n        <li class="modal__item"> --\x3e\n      <table class="modal__table">\n        <tr class="modal__tr">\n          <td class="modal__td-lable">Vote / Votes</td>\n          <td class="modal__td-text">\n            <span class="modal__td-text--accent">7.3</span>\n            <span class="modal__td-text--slash">/</span>\n            <span class="modal__td-text--all">1260</span>\n          </td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td-lable">Popularity</td>\n          <td class="modal__td-text">100.2</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td-lable">Original Title</td>\n          <td class="modal__td-text">A FISTFUL OF LEAD</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td-lable">Genre</td>\n          <td class="modal__td-text">'+c(typeof(l=null!=(l=d(n,"info")||(null!=t?d(t,"info"):t))?l:s)===i?l.call(r,{name:"info",hash:{},data:o,loc:{start:{line:27,column:37},end:{line:27,column:45}}}):l)+'</td>\n        </tr>\n      </table>\n\n      <h2 class="modal__subtitle">About</h2>\n\n      <p class="modal__text">\n        '+c(typeof(l=null!=(l=d(n,"overview")||(null!=t?d(t,"overview"):t))?l:s)===i?l.call(r,{name:"overview",hash:{},data:o,loc:{start:{line:34,column:8},end:{line:34,column:20}}}):l)+'\n      </p>\n      <ul class="modal__button-list">\n        <li class="modal__button-item">\n          <button\n            class="modal__button modal__button--accent modal__button--watched"\n            type="button"\n            data-action="watched"\n          >\n            add to <span> watched</span>\n          </button>\n        </li>\n        <li>\n          <button\n            class="modal__button modal__button--accent modal__button--queued"\n            type="button"\n            data-action="queued"\n          >\n            add to queue\n          </button>\n        </li>\n      </ul>\n    </div>\n'},useData:!0});var N=e(o("amrNH")).template({1:function(e,t,n,a,o){var l,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <li class="team-item">\n    <img\n    class="team-image"\n    src='+c(typeof(l=null!=(l=d(n,"photo")||(null!=t?d(t,"photo"):t))?l:s)===i?l.call(r,{name:"photo",hash:{},data:o,loc:{start:{line:7,column:8},end:{line:7,column:17}}}):l)+"\n    alt="+c(typeof(l=null!=(l=d(n,"name")||(null!=t?d(t,"name"):t))?l:s)===i?l.call(r,{name:"name",hash:{},data:o,loc:{start:{line:8,column:8},end:{line:8,column:16}}}):l)+'\n    />\n    <div class="overlay">\n                  <p class="overlay__text">'+c(typeof(l=null!=(l=d(n,"quote")||(null!=t?d(t,"quote"):t))?l:s)===i?l.call(r,{name:"quote",hash:{},data:o,loc:{start:{line:11,column:43},end:{line:11,column:52}}}):l)+'\n                </p></div>\n    <div class="member-description">\n    <h3 class="team-member">'+c(typeof(l=null!=(l=d(n,"name")||(null!=t?d(t,"name"):t))?l:s)===i?l.call(r,{name:"name",hash:{},data:o,loc:{start:{line:14,column:28},end:{line:14,column:36}}}):l)+'</h3>\n    <p lang="en" class="team-member-text ">'+c(typeof(l=null!=(l=d(n,"role")||(null!=t?d(t,"role"):t))?l:s)===i?l.call(r,{name:"role",hash:{},data:o,loc:{start:{line:15,column:43},end:{line:15,column:51}}}):l)+"</p></div>\n    </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l;return'<h2 class="modal__title">Team BAVOVNA</h2>\n  <ul class="team-pics ">\n'+(null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:3,column:0},end:{line:17,column:9}}}))?l:"")+"  </ul>"},useData:!0});const D=[{photo:"https://avatars.githubusercontent.com/u/32988243?v=4",name:"Сергій Сєров",role:"Team Lead",quote:"«Що ми робимо в житті, відгукнеться луною в вічності». («Гладіатор»)."},{photo:"https://avatars.githubusercontent.com/u/99733904?v=4",name:"Нікіта Крутоголов",role:"Scrum Master",quote:"«Нехай прибуде з тобою Сила!». («Зоряні Війни»)."},{photo:"https://avatars.githubusercontent.com/u/28190277?v=4",name:"Максим Бай",role:"Developer",quote:"«– Ти любиш музику? – А ти любиш дихати?». («Це дуже кумедна історія»). "},{photo:"https://avatars.githubusercontent.com/u/15800167?v=4",name:"Марія Чворун",role:"Developer",quote:"«Я є Грут», («Охоронці Галактики»). "},{photo:"https://avatars.githubusercontent.com/u/94764038?v=4",name:"Самуїл Семченко",role:"Developer",quote:"«Не говори:” Я помилився ». Краще скажи: «Треба ж як цікаво вийшло». («Льодовиковий період»). "}],F=throttle((()=>{const e=document.getElementById("progress"),t=(document.getElementById("progress-value"),document.documentElement.scrollTop),n=document.documentElement.scrollHeight-document.documentElement.clientHeight,a=Math.round(100*t/n);console.log(a),e.style.display=t>100?"grid":"none",e.addEventListener("click",(()=>{document.documentElement.scrollTop=0})),e.style.background=`conic-gradient(#545454 ${a}%, #bbbbbb ${a}%)`}),THROTTLE_DELAY);window.onscroll=F,window.onload=F;new(0,L.default)("#slider");const A=new(0,w.default),H=new(0,x.default)("queue");document.querySelectorAll(".modal").forEach((e=>e.style.display="none"));const $={cardsUl:document.querySelector(".gallery__list"),pagination:document.querySelector(".gallery__pagination"),header:document.querySelector("header"),footer:document.querySelector("footer"),main:document.querySelector("main"),searchForm:document.querySelector(".hero-home__form"),loader:document.querySelector(".loader"),homeLinks:document.querySelectorAll(".js-home"),teamLink:document.querySelector(".open-team-modal")},P=e(l)((()=>{const e=document.querySelector(".search-fail");e&&(e.remove(),$.searchForm.removeEventListener("input",P))}),250);function U(e){$.cardsUl.innerHTML=(0,C.default)({results:e.results,base_path:w.default.IMAGES_BASE_URL}),$.pagination.innerHTML=(0,S.default)(e)}async function B(e){let t;const n=document.querySelector(".search-fail");n&&n.remove();const a=sessionStorage.getItem("search_query");if(a){$.searchForm.elements.searchQuery.value=a,$.loader.classList.remove("is-hidden");try{t=await A.fetchNextSearch("",e),sessionStorage.setItem("search_current_page",t.page),U(t)}catch(e){console.log(e.message)}finally{$.loader.classList.add("is-hidden")}}else{$.searchForm.elements.searchQuery.value="",$.loader.classList.remove("is-hidden");try{t=await A.fetchNextTrending(e),sessionStorage.setItem("trending_current_page",t.page),U(t)}catch(e){console.log(e.message)}finally{$.loader.classList.add("is-hidden")}}}$.teamLink.addEventListener("click",(e=>{teamModal=new O(N(D)),teamModal.show()})),$.homeLinks.forEach((e=>{e.addEventListener("click",(e=>{sessionStorage.removeItem("search_current_page"),sessionStorage.removeItem("search_query"),sessionStorage.removeItem("trending_current_page")}))})),$.cardsUl.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("LI");if(!t)return;console.log(A.getCachedMovieById(t.dataset.id));new O(j(A.getCachedMovieById(t.dataset.id)),{containerClass:"movie-info"}).show(),H.inList(t.dataset.id)?H.removeFromList(t.dataset.id):H.addToList(A.getCachedMovieById(t.dataset.id))})),$.searchForm.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector(".search-fail");t&&t.remove();const n=e.target.elements.searchQuery.value.trim().toLowerCase();if(!n)return;let a;e.target.elements.searchQuery.value=n,$.loader.classList.remove("is-hidden");try{a=await A.fetchNextSearch(n),sessionStorage.setItem("search_current_page",1)}catch(e){return void console.error(e.message)}finally{$.loader.classList.add("is-hidden")}if(!a.results.length){const t=document.createElement("DIV");return t.textContent="Search result not successful. Enter the correct movie name and try again.",t.classList.add("search-fail"),e.target.appendChild(t),void $.searchForm.addEventListener("input",P)}sessionStorage.setItem("search_query",n),U(a)})),$.pagination.addEventListener("click",(async e=>{if(e.target.classList.contains("gallery__pag-button--current")){if("1"===e.target.dataset.pages)return;const t=`<form style=""><input type="number" name="page" max="${e.target.dataset.pages}" min="1" value="${e.target.textContent}" style="width:100%; height:100%"></form>`;e.target.innerHTML=t;const n=e.target.querySelector("form");return n.elements.page.focus(),n.elements.page.select(),n.addEventListener("submit",(async t=>{t.preventDefault(),B(t.target.elements.page.value),e.target.textContent=e.target.dataset.curpage}),{once:!0}),void n.elements.page.addEventListener("blur",(t=>{n.remove(),e.target.textContent=e.target.dataset.curpage}),{once:!0})}const t=e.target.dataset.page;t&&B(t)})),(async()=>{const e=sessionStorage.getItem("search_query");if(e){$.searchForm.elements.searchQuery.value=e;const t=sessionStorage.getItem("search_current_page");let n;$.loader.classList.remove("is-hidden");try{n=await A.fetchNextSearch(e,t||1)}catch(e){console.error(e.message)}finally{$.loader.classList.add("is-hidden")}U(n)}else{const e=sessionStorage.getItem("trending_current_page");let t;$.loader.classList.remove("is-hidden");try{t=await A.fetchNextTrending(e||1)}catch(e){console.error(e.message)}finally{$.loader.classList.add("is-hidden")}if(!t.results.length)return void($.cardsUl.innerHTML="<li>There is no trending movies.</li>");U(t)}})();
//# sourceMappingURL=index.12414cee.js.map
