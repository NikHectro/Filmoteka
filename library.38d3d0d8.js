var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire216a;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire216a=n),n("dpZmf");var s=n("brr8Z"),r=n("9N7Qa"),o=n("5gHzC"),i=n("2nhTy"),d=n("44W7Q"),l=n("7JPzN"),c=n("9BQbI"),u=n("dLF68");new(0,s.default)("#slider");const g=new(0,r.default)("queue"),m=new(0,r.default)("watched"),p={watchedBtn:document.querySelector('header [data-action="watched"]'),queueBtn:document.querySelector('header [data-action="queue"]'),cardsUl:document.querySelector(".gallery__list"),pagination:document.querySelector(".gallery__pagination"),loader:document.querySelector(".loader"),teamLink:document.querySelector(".open-team-modal")};let f;function h(){f&&(f=null)}function w(){let e="watched"===y?sessionStorage.getItem("watched_page")||1:sessionStorage.getItem("queue_page")||1;e=Math.min(e,"watched"===y?m.getTotalPages():g.getTotalPages()),L(e)}p.teamLink.addEventListener("click",(e=>{e.preventDefault();new(0,c.default)(u.teamMembers).show()})),p.watchedBtn.closest("UL").addEventListener("click",(e=>{const t=e.target.dataset.action;t&&v(t)})),p.cardsUl.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("LI");t&&!t.classList.contains("gallery__no-entries")&&(f=new(0,l.default)("watched"===y?m.getItemById(t.dataset.id):g.getItemById(t.dataset.id),{onClose:h,onChange:e=>{e===y&&w()}}),f.show())})),p.pagination.addEventListener("click",(async e=>{if(e.target.classList.contains("gallery__pag-button--current")){if("1"===e.target.dataset.pages)return;const t=`<form style=""><input type="number" name="page" max="${e.target.dataset.pages}" min="1" value="${e.target.textContent}" style="width:100%; height:100%"></form>`;e.target.innerHTML=t;const a=e.target.querySelector("form");return a.elements.page.focus(),a.elements.page.select(),a.addEventListener("submit",(async t=>{t.preventDefault(),L(t.target.elements.page.value),e.target.textContent=e.target.dataset.curpage}),{once:!0}),void a.elements.page.addEventListener("blur",(t=>{a.remove(),e.target.textContent=e.target.dataset.curpage}),{once:!0})}const t=e.target.dataset.page;t&&(L(t),window.scrollTo({top:0,behavior:"smooth"}))})),addEventListener("storage",(e=>{"watched"!==e.key&&"queue"!==e.key||(f&&f.updateButtonsState(),w())}));let y=sessionStorage.getItem("library_mode");function v(e){let t;switch(y=e,sessionStorage.setItem("library_mode",e),e){case"watched":p.watchedBtn.classList.add("is-active"),p.queueBtn.classList.remove("is-active"),t=sessionStorage.getItem("watched_page")||1;break;case"queue":p.watchedBtn.classList.remove("is-active"),p.queueBtn.classList.add("is-active"),t=sessionStorage.getItem("queue_page")||1;break;default:return}L(t)}async function L(e){let t;switch(p.loader.classList.remove("is-hidden"),y){case"watched":t=await m.fetchNext(e),t&&sessionStorage.setItem("watched_page",t.page);break;case"queue":t=await g.fetchNext(e),t&&sessionStorage.setItem("queue_page",t.page);break;default:return void p.loader.classList.add("is-hidden")}!function(e){p.cardsUl.innerHTML=e?(0,d.default)({results:e.results.map(((e,t)=>({...e,lazy:t>2}))),base_path:o.default.IMAGES_BASE_URL,showRating:1}):`<li class="gallery__no-entries">There are no entries in the ${y} list yet</li>`,p.pagination.innerHTML=e?(0,i.default)(e):""}(t),p.loader.classList.add("is-hidden")}y||(y="watched"),v(y);
//# sourceMappingURL=library.38d3d0d8.js.map
