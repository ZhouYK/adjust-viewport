const dpr = window.devicePixelRatio;
const scale = (1/dpr).toFixed(3);
let metaEl = document.querySelector('meta[name="viewport"]');
const contentValue = `initial-scale=${scale}, minimum-scale=${scale}, maximum-scale=${scale}, user-scalable=no`;
if (metaEl) {
  metaEl.setAttribute('content', contentValue);
} else {
  metaEl = document.createElement('meta');
  metaEl.setAttribute('name','viewport');
  metaEl.setAttribute('content', contentValue);
  document.head.appendChild(metaEl);
};
