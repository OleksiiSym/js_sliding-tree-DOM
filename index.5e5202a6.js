document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.innerHTML=e.firstChild.textContent,e.insertBefore(t,e.firstChild),e.firstChild.nextSibling.remove(),t.addEventListener("click",function(){var t=e.querySelector("ul");t.hidden=!t.hidden})});
//# sourceMappingURL=index.5e5202a6.js.map
