!function(){const e=()=>{const e=document.getElementById("progress"),n=(document.getElementById("progress-value"),document.documentElement.scrollTop),o=document.documentElement.scrollHeight-document.documentElement.clientHeight,t=Math.round(100*n/o);console.log(t),e.style.display=n>100?"grid":"none",e.addEventListener("click",(()=>{document.documentElement.scrollTop=0})),e.style.background=`conic-gradient(#545454 ${t}%, #bbbbbb ${t}%)`};window.onscroll=e,window.onload=e}();
//# sourceMappingURL=index.a88e56db.js.map
