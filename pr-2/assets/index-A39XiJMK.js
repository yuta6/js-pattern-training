(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=()=>{document.querySelectorAll("[data-modal-trigger]").forEach(o=>{const r=document.querySelector(`[data-modal-id="${o.dataset.modalTrigger}"]`);o.addEventListener("click",()=>{r.showModal()});const c=r.querySelector("[data-modal-close]");c&&c.addEventListener("click",()=>{r.close()}),r.addEventListener("click",e=>{e.target===r&&r.close()})})};l();
