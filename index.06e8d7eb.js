function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=t.parcelRequire216a;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequire216a=s),s("dpZmf");var n=s("9OeKo"),o=s("brr8Z"),l=s("5gHzC");s("9N7Qa");var i=s("2nhTy"),c=s("44W7Q"),d=s("dLF68"),u=s("9BQbI"),m=s("7JPzN");new(0,o.default)("#slider");const g=new(0,l.default),h={cardsUl:document.querySelector(".gallery__list"),pagination:document.querySelector(".gallery__pagination"),header:document.querySelector("header"),footer:document.querySelector("footer"),main:document.querySelector("main"),searchForm:document.querySelector(".hero-home__form"),loader:document.querySelector(".loader"),homeLinks:document.querySelectorAll(".js-home"),teamLink:document.querySelector(".open-team-modal")},f=e(n)((()=>{const e=document.querySelector(".search-fail");e&&(e.remove(),h.searchForm.removeEventListener("input",f))}),250);let y;function p(e){h.cardsUl.innerHTML=(0,c.default)({results:e.results.map(((e,t)=>({...e,lazy:t>2}))),base_path:l.default.IMAGES_BASE_URL}),h.pagination.innerHTML=(0,i.default)(e)}async function v(e){let t;const r=document.querySelector(".search-fail");r&&r.remove();const a=sessionStorage.getItem("search_query");if(a){h.searchForm.elements.searchQuery.value=a,h.loader.classList.remove("is-hidden");try{t=await g.fetchNextSearch("",e),sessionStorage.setItem("search_current_page",t.page),p(t)}catch(e){console.error(e.message)}finally{h.loader.classList.add("is-hidden")}}else{h.searchForm.elements.searchQuery.value="",h.loader.classList.remove("is-hidden");try{t=await g.fetchNextTrending(e),sessionStorage.setItem("trending_current_page",t.page),p(t)}catch(e){console.error(e.message)}finally{h.loader.classList.add("is-hidden")}}}h.teamLink.addEventListener("click",(e=>{e.preventDefault();new(0,u.default)(d.teamMembers).show()})),h.homeLinks.forEach((e=>{e.addEventListener("click",(e=>{sessionStorage.removeItem("search_current_page"),sessionStorage.removeItem("search_query"),sessionStorage.removeItem("trending_current_page")}))})),h.cardsUl.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("LI");t&&(y=new(0,m.default)(g.getCachedMovieById(t.dataset.id),{onClose:()=>{y&&(y=null)},onChange:null}),y.show())})),h.searchForm.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector(".search-fail");t&&t.remove();const r=e.target.elements.searchQuery.value.trim().toLowerCase();if(!r)return;let a;e.target.elements.searchQuery.value=r,h.loader.classList.remove("is-hidden");try{a=await g.fetchNextSearch(r),sessionStorage.setItem("search_current_page",1)}catch(e){return void console.error(e.message)}finally{h.loader.classList.add("is-hidden")}if(!a.results.length){const t=document.createElement("DIV");return t.textContent="Search result not successful. Enter the correct movie name and try again.",t.classList.add("search-fail"),e.target.appendChild(t),void h.searchForm.addEventListener("input",f)}sessionStorage.setItem("search_query",r),p(a)})),h.pagination.addEventListener("click",(async e=>{if(e.target.classList.contains("gallery__pag-button--current")){if("1"===e.target.dataset.pages)return;const t=`<form style=""><input type="number" name="page" max="${e.target.dataset.pages}" min="1" value="${e.target.textContent}" style="width:100%; height:100%"></form>`;e.target.innerHTML=t;const r=e.target.querySelector("form");return r.elements.page.focus(),r.elements.page.select(),r.addEventListener("submit",(async t=>{t.preventDefault(),v(t.target.elements.page.value),e.target.textContent=e.target.dataset.curpage}),{once:!0}),void r.elements.page.addEventListener("blur",(t=>{r.remove(),e.target.textContent=e.target.dataset.curpage}),{once:!0})}const t=e.target.dataset.page;t&&(v(t),window.scrollTo({top:0,behavior:"smooth"}))})),window.addEventListener("storage",(e=>{"watched"!==e.key&&"queue"!==e.key||y&&y.updateButtonsState()})),(async()=>{const e=sessionStorage.getItem("search_query");if(e){h.searchForm.elements.searchQuery.value=e;const t=sessionStorage.getItem("search_current_page");let r;h.loader.classList.remove("is-hidden");try{r=await g.fetchNextSearch(e,t||1)}catch(e){console.error(e.message)}finally{h.loader.classList.add("is-hidden")}p(r)}else{const e=sessionStorage.getItem("trending_current_page");let t;h.loader.classList.remove("is-hidden");try{t=await g.fetchNextTrending(e||1)}catch(e){console.error(e.message)}finally{h.loader.classList.add("is-hidden")}if(!t.results.length)return void(h.cardsUl.innerHTML="<li>There is no trending movies.</li>");p(t)}})();
//# sourceMappingURL=index.06e8d7eb.js.map