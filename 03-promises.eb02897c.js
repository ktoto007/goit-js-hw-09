!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]'),l=document.querySelector('[type="submit"]');function d(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}l.addEventListener("click",(function(e){e.preventDefault();var n=Number(u.value),o=Number(a.value),t=Number(c.value);for(l.disabled=!0,i=1;i<=t;i+=1){d(i,n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o,i===t&&setTimeout((function(){l.disabled=!1}),n)}}))}();
//# sourceMappingURL=03-promises.eb02897c.js.map