(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=()=>{const a=document.querySelector("[data-tab]");if(!a)return;const n=a.querySelector("[data-tab-nav]"),i=a.querySelectorAll("[data-tab-item]"),s=a.querySelectorAll("[data-tab-panel]"),e=a.querySelector(".tab__underline"),t=()=>{const r=a.querySelector(".tab__item--active");if(!r||!e)return;const l=n.getBoundingClientRect(),o=r.getBoundingClientRect(),c=o.left-l.left,d=o.width;e.style.left=c+"px",e.style.width=d+"px"};t(),window.addEventListener("resize",t),i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(c=>c.classList.remove("tab__item--active")),r.classList.add("tab__item--active");const l=r.getAttribute("data-tab-target");s.forEach(c=>c.classList.remove("tab__panel--active"));const o=a.querySelector(`[data-tab-panel="${l}"]`);o&&o.classList.add("tab__panel--active"),t()})})};u();
