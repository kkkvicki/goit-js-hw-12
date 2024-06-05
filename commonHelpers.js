import{i as y,a as h,S as p}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const L="44181266-af3c2b6af304225fcb13b5858",b="https://pixabay.com/api/";function l(e){y.error({message:e,position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}async function w(e,r=1,n=15){const s=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:n});try{return(await h.get(`${b}?${s}`)).data}catch(t){throw console.error("Error fetching images:",t),t}}let d;function v(e,r){const n=e.map(s=>S(s)).join("");r.insertAdjacentHTML("beforeend",n),d?d.refresh():d=new p(".gallery a",{captionDelay:250,captionsData:"alt"})}function S({largeImageURL:e,webformatURL:r,tags:n,likes:s,views:t,comments:o,downloads:a}){return`
    <div class="photo-card">
      <a href="${e}" class="gallery-link">
        <img src="${r}" alt="${n}" class="gallery-image" />
        <div class="info">
          <ul class="info-list">
            <li><strong>Likes:</strong> ${s}</li>
            <li><strong>Views:</strong> ${t}</li>
            <li><strong>Comments:</strong> ${o}</li>
            <li><strong>Downloads:</strong> ${a}</li>
          </ul>
        </div>
      </a>
    </div>
  `}function q(e){e.classList.remove("hidden")}function E(e){e.classList.add("hidden")}function $(e){e.innerHTML=""}const P=document.querySelector("#search-form"),C=document.querySelector("#search-input"),u=document.querySelector("#image-gallery"),g=document.querySelector("#loading-indicator"),i=document.querySelector("#load-more-button");let f="",c=1;i.style.display="none";P.addEventListener("submit",async e=>{if(e.preventDefault(),f=C.value.trim(),!f){l("Please enter a request"),i.style.display="none";return}c=1,$(u),i.style.display="none",await m()});i.addEventListener("click",async()=>{c+=1,await m()});async function m(){q(g);try{const e=await w(f,c),r=e.hits,n=e.totalHits;if(r.length===0&&c===1){l("Sorry, there are no images matching your search query. Please try again!");return}v(r,u),u.childElementCount>=n?(l("We're sorry, but you've reached the end of search results."),i.style.display="none"):r.length>0&&(i.style.display="block"),I()}catch(e){l("Error fetching images"),console.error(e)}finally{E(g)}}function I(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
