if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const r=e=>n(e,c),f={module:{uri:c},exports:s,require:r};i[c]=Promise.all(o.map((e=>f[e]||r(e)))).then((e=>(d(...e),s)))}}define(["./workbox-6716fad7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"b124e6583f08bde3274de935da9e7dd6"},{url:"favicon.ico",revision:"da67f2b78b073d81f371ca38db6b80df"},{url:"icons/android-chrome-72x72.png",revision:"6fc498c2f7c2ea37b1816a864fb68153"},{url:"icons/apple-touch-icon.png",revision:"0c797d0bda202510690aba01ce1879ec"},{url:"icons/favicon-16x16.png",revision:"3ffba05d309192e034114fc7d8428421"},{url:"icons/favicon-32x32.png",revision:"dc7c7a9363b4b4400b25e6df0660fd8a"},{url:"icons/favicon.ico",revision:"da67f2b78b073d81f371ca38db6b80df"},{url:"icons/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"icons/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"icons/mstile-150x150.png",revision:"2ad21ba39d63d212239da486deedebc9"},{url:"manifest.json",revision:"16d1c501fd4e4cbf6b5e0a66d4c377a3"},{url:"static/js/733.7f06d76c.js",revision:null},{url:"static/js/733.7f06d76c.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"static/js/main.7dd318a0.js",revision:null},{url:"static/js/main.7dd318a0.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
//# sourceMappingURL=service-worker.js.map
