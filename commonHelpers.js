import{S as L,a as S,i as f}from"./assets/vendor-c145bea9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const b=document.querySelector(".form"),d=document.querySelector(".gallery"),p=document.querySelector(".text-input"),m=new L(".gallery a",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".loader");n.style.display="none";const i=document.querySelector(".load-more");i.style.display="none";let l=1,y="";b.addEventListener("submit",async e=>{e.preventDefault(),y=p.value,l=1,d.innerHTML="",p.value="",n.style.display="block",i.style.display="none";try{const r=await g(y,1);if(r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}const s=r.hits.reduce((t,o)=>t+h(o),"");d.innerHTML=s,m.refresh(),v(r.totalHits)}catch(r){c(r.toString())}finally{n.style.display="none"}});i.addEventListener("click",async()=>{n.style.display="block",i.style.display="none";try{const e=await g(y,l+1);if(n.style.display="none",e.hits.length===0){c("Sorry, there are no more images for your search query.");return}const a=e.hits.reduce((r,s)=>r+h(s),"");d.innerHTML+=a,m.refresh(),l++,v(e.totalHits),w()}catch(e){c(e.toString())}});async function g(e,a){const r=new URLSearchParams({key:"41485835-9295c11e9848689b047a2c35a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:40}),s=await S.get(`https://pixabay.com/api/?${r}`);if(n.style.display="none",s.status!==200)throw new Error(s.status);return s.data}function h(e){return`<li>
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="info">
        <div class="image-info">
          <span>Likes</span>
          <span class="image-value">${e.likes}</span>
        </div>
        <div class="image-info">
          <span>Views</span>
          <span class="image-value">${e.views}</span>
        </div>
        <div class="image-info">
          <span>Comments</span>
          <span class="image-value">${e.comments}</span>
        </div>
        <div class="image-info">
          <span>Downloads</span>
          <span class="image-value">${e.downloads}</span>
        </div>
      </div>
    </li>`}function c(e){f.error({message:e,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}function v(e){e>l*40?i.style.display="block":(i.style.display="none",f.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#008CBA",position:"topRight"}))}function w(){const e=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
