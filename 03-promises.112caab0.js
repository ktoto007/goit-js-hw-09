var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),u=document.querySelector('[name="amount"]'),d=document.querySelector('[type="submit"]');function a(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}d.addEventListener("click",(function(e){e.preventDefault();let t=Number(r.value);const o=Number(l.value),n=Number(u.value);d.disabled=!0;for(let e=1;e<=n;e+=1)a(e,t).then((({position:e,delay:t})=>{i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),t+=o,e===n&&setTimeout((()=>{d.disabled=!1}),t)}));
//# sourceMappingURL=03-promises.112caab0.js.map