function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire216a;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire216a=a);var o,s=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,m=d||f||Function("return this")(),g=Object.prototype.toString,h=Math.max,y=Math.min,p=function(){return m.Date.now()};function v(e,t,r){var n,a,o,s,i,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,o=a;return n=a=void 0,l=t,s=e.apply(o,r)}function g(e){return l=e,i=setTimeout(S,t),u?m(e):s}function v(e){var r=e-c;return void 0===c||r>=t||r<0||d&&e-l>=o}function S(){var e=p();if(v(e))return b(e);i=setTimeout(S,function(e){var r=t-(e-c);return d?y(r,o-(e-l)):r}(e))}function b(e){return i=void 0,f&&n?m(e):(n=a=void 0,s)}function x(){var e=p(),r=v(e);if(n=arguments,a=this,c=e,r){if(void 0===i)return g(c);if(d)return i=setTimeout(S,t),m(c)}return void 0===i&&(i=setTimeout(S,t)),s}return t=_(t)||0,L(r)&&(u=!!r.leading,o=(d="maxWait"in r)?h(_(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),x.cancel=function(){void 0!==i&&clearTimeout(i),l=0,n=c=a=i=void 0},x.flush=function(){return void 0===i?s:b(p())},x}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(L(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=L(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var r=c.test(e);return r||l.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}o=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return L(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),v(e,t,{leading:n,maxWait:t,trailing:a})};var S=a("brr8Z"),b=a("5gHzC"),x=a("9N7Qa"),w=a("2nhTy"),q=a("44W7Q");new(0,S.default)("#slider");const E=new(0,b.default),T=new(0,x.default)("queue");document.querySelectorAll(".modal").forEach((e=>e.style.display="none"));const I={cardsUl:document.querySelector(".gallery__list"),pagination:document.querySelector(".gallery__pagination"),header:document.querySelector("header"),footer:document.querySelector("footer"),main:document.querySelector("main"),searchForm:document.querySelector(".hero-home__form"),loader:document.querySelector(".loader"),homeLinks:document.querySelectorAll(".js-home")},N=e(o)((()=>{const e=document.querySelector(".search-fail");e&&(e.remove(),I.searchForm.removeEventListener("input",N))}),250);function j(e){I.cardsUl.innerHTML=(0,q.default)({results:e.results,base_path:b.default.IMAGES_BASE_URL}),I.pagination.innerHTML=(0,w.default)(e)}async function F(e){let t;const r=document.querySelector(".search-fail");r&&r.remove();const n=sessionStorage.getItem("search_query");if(n){I.searchForm.elements.searchQuery.value=n,I.loader.classList.remove("is-hidden");try{t=await E.fetchNextSearch("",e),sessionStorage.setItem("search_current_page",t.page),j(t)}catch(e){console.log(e.message)}finally{I.loader.classList.add("is-hidden")}}else{I.searchForm.elements.searchQuery.value="",I.loader.classList.remove("is-hidden");try{t=await E.fetchNextTrending(e),sessionStorage.setItem("trending_current_page",t.page),j(t)}catch(e){console.log(e.message)}finally{I.loader.classList.add("is-hidden")}}}I.homeLinks.forEach((e=>{e.addEventListener("click",(e=>{sessionStorage.removeItem("search_current_page"),sessionStorage.removeItem("search_query"),sessionStorage.removeItem("trending_current_page")}))})),I.cardsUl.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("LI");t&&(T.inList(t.dataset.id)?T.removeFromList(t.dataset.id):T.addToList(E.getCachedMovieById(t.dataset.id)))})),I.searchForm.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector(".search-fail");t&&t.remove();const r=e.target.elements.searchQuery.value.trim().toLowerCase();if(!r)return;let n;e.target.elements.searchQuery.value=r,I.loader.classList.remove("is-hidden");try{n=await E.fetchNextSearch(r),sessionStorage.setItem("search_current_page",1)}catch(e){return void console.error(e.message)}finally{I.loader.classList.add("is-hidden")}if(!n.results.length){const t=document.createElement("DIV");return t.textContent="Search result not successful. Enter the correct movie name and try again.",t.classList.add("search-fail"),e.target.appendChild(t),void I.searchForm.addEventListener("input",N)}sessionStorage.setItem("search_query",r),j(n)})),I.pagination.addEventListener("click",(async e=>{if(e.target.classList.contains("gallery__pag-button--current")){if("1"===e.target.dataset.pages)return;const t=`<form style=""><input type="number" name="page" max="${e.target.dataset.pages}" min="1" value="${e.target.textContent}" style="width:100%; height:100%"></form>`;e.target.innerHTML=t;const r=e.target.querySelector("form");return r.elements.page.focus(),r.elements.page.select(),r.addEventListener("submit",(async t=>{t.preventDefault(),F(t.target.elements.page.value),e.target.textContent=e.target.dataset.curpage}),{once:!0}),void r.elements.page.addEventListener("blur",(t=>{r.remove(),e.target.textContent=e.target.dataset.curpage}),{once:!0})}const t=e.target.dataset.page;t&&F(t)})),(async()=>{const e=sessionStorage.getItem("search_query");if(e){I.searchForm.elements.searchQuery.value=e;const t=sessionStorage.getItem("search_current_page");let r;I.loader.classList.remove("is-hidden");try{r=await E.fetchNextSearch(e,t||1)}catch(e){console.error(e.message)}finally{I.loader.classList.add("is-hidden")}j(r)}else{const e=sessionStorage.getItem("trending_current_page");let t;I.loader.classList.remove("is-hidden");try{t=await E.fetchNextTrending(e||1)}catch(e){console.error(e.message)}finally{I.loader.classList.add("is-hidden")}if(!t.results.length)return void(I.cardsUl.innerHTML="<li>There is no trending movies.</li>");j(t)}})();
//# sourceMappingURL=index.8170d45e.js.map