function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=t.parcelRequire216a;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequire216a=s),s("dpZmf");var n=s("9OeKo"),o=s("brr8Z"),l=s("5gHzC"),c=s("9N7Qa"),i=s("2nhTy"),d=s("44W7Q"),u=s("dLF68"),m=s("9BQbI"),g=s("7JPzN");new(0,o.default)("#slider");const h=new(0,l.default),f=(new(0,c.default)("queue"),{cardsUl:document.querySelector(".gallery__list"),pagination:document.querySelector(".gallery__pagination"),header:document.querySelector("header"),footer:document.querySelector("footer"),main:document.querySelector("main"),searchForm:document.querySelector(".hero-home__form"),loader:document.querySelector(".loader"),homeLinks:document.querySelectorAll(".js-home"),teamLink:document.querySelector(".open-team-modal")}),y=e(n)((()=>{const e=document.querySelector(".search-fail");e&&(e.remove(),f.searchForm.removeEventListener("input",y))}),250);let p;function v(e){f.cardsUl.innerHTML=(0,d.default)({results:e.results,base_path:l.default.IMAGES_BASE_URL}),f.pagination.innerHTML=(0,i.default)(e)}async function L(e){let t;const r=document.querySelector(".search-fail");r&&r.remove();const a=sessionStorage.getItem("search_query");if(a){f.searchForm.elements.searchQuery.value=a,f.loader.classList.remove("is-hidden");try{t=await h.fetchNextSearch("",e),sessionStorage.setItem("search_current_page",t.page),v(t)}catch(e){console.log(e.message)}finally{f.loader.classList.add("is-hidden")}}else{f.searchForm.elements.searchQuery.value="",f.loader.classList.remove("is-hidden");try{t=await h.fetchNextTrending(e),sessionStorage.setItem("trending_current_page",t.page),v(t)}catch(e){console.log(e.message)}finally{f.loader.classList.add("is-hidden")}}}f.teamLink.addEventListener("click",(e=>{e.preventDefault();new(0,m.default)(u.teamMembers).show()})),f.homeLinks.forEach((e=>{e.addEventListener("click",(e=>{sessionStorage.removeItem("search_current_page"),sessionStorage.removeItem("search_query"),sessionStorage.removeItem("trending_current_page")}))})),f.cardsUl.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("LI");t&&(p=new(0,g.default)(h.getCachedMovieById(t.dataset.id),{onClose:()=>{p&&(p=null)},onChange:null}),p.show())})),f.searchForm.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector(".search-fail");t&&t.remove();const r=e.target.elements.searchQuery.value.trim().toLowerCase();if(!r)return;let a;e.target.elements.searchQuery.value=r,f.loader.classList.remove("is-hidden");try{a=await h.fetchNextSearch(r),sessionStorage.setItem("search_current_page",1)}catch(e){return void console.error(e.message)}finally{f.loader.classList.add("is-hidden")}if(!a.results.length){const t=document.createElement("DIV");return t.textContent="Search result not successful. Enter the correct movie name and try again.",t.classList.add("search-fail"),e.target.appendChild(t),void f.searchForm.addEventListener("input",y)}sessionStorage.setItem("search_query",r),v(a)})),f.pagination.addEventListener("click",(async e=>{if(e.target.classList.contains("gallery__pag-button--current")){if("1"===e.target.dataset.pages)return;const t=`<form style=""><input type="number" name="page" max="${e.target.dataset.pages}" min="1" value="${e.target.textContent}" style="width:100%; height:100%"></form>`;e.target.innerHTML=t;const r=e.target.querySelector("form");return r.elements.page.focus(),r.elements.page.select(),r.addEventListener("submit",(async t=>{t.preventDefault(),L(t.target.elements.page.value),e.target.textContent=e.target.dataset.curpage}),{once:!0}),void r.elements.page.addEventListener("blur",(t=>{r.remove(),e.target.textContent=e.target.dataset.curpage}),{once:!0})}const t=e.target.dataset.page;t&&(L(t),window.scrollTo({top:0,behavior:"smooth"}))})),(async()=>{const e=sessionStorage.getItem("search_query");if(e){f.searchForm.elements.searchQuery.value=e;const t=sessionStorage.getItem("search_current_page");let r;f.loader.classList.remove("is-hidden");try{r=await h.fetchNextSearch(e,t||1)}catch(e){console.error(e.message)}finally{f.loader.classList.add("is-hidden")}v(r)}else{const e=sessionStorage.getItem("trending_current_page");let t;f.loader.classList.remove("is-hidden");try{t=await h.fetchNextTrending(e||1)}catch(e){console.error(e.message)}finally{f.loader.classList.add("is-hidden")}if(!t.results.length)return void(f.cardsUl.innerHTML="<li>There is no trending movies.</li>");v(t)}})(),addEventListener("storage",(e=>{"watched"!==e.key&&"queue"!==e.key||p&&p.updateButtonsState()}));
//# sourceMappingURL=index.2c94c10e.js.map
