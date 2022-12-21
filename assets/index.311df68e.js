(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const x={};function W(e){x.context=e}const J=(e,t)=>e===t,O={equals:J};let P=q;const v=1,N=2,R={owned:null,cleanups:null,context:null,owner:null};var a=null;let y=null,f=null,d=null,g=null,B=0;function X(e,t){const s=f,i=a,n=e.length===0,o=n?R:{owned:null,cleanups:null,context:null,owner:t||i},r=n?e:()=>e(()=>M(()=>D(o)));a=o,f=null;try{return S(r,!0)}finally{f=s,a=i}}function F(e,t){t=t?Object.assign({},O,t):O;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=n=>(typeof n=="function"&&(n=n(s.value)),j(s,n));return[z.bind(s),i]}function A(e,t,s){const i=k(e,t,!1,v);V(i)}function Y(e,t,s){P=se;const i=k(e,t,!1,v);i.user=!0,g?g.push(i):V(i)}function M(e){const t=f;f=null;try{return e()}finally{f=t}}function z(){const e=y;if(this.sources&&(this.state||e))if(this.state===v||e)V(this);else{const t=d;d=null,S(()=>H(this),!1),d=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function j(e,t,s){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n],r=y&&y.running;r&&y.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?d.push(o):g.push(o),o.observers&&G(o)),r||(o.state=v)}if(d.length>1e6)throw d=[],new Error},!1)),t}function V(e){if(!e.fn)return;D(e);const t=a,s=f,i=B;f=a=e,ee(e,e.value,i),f=s,a=t}function ee(e,t,s){let i;try{i=e.fn(t)}catch(n){e.pure&&(e.state=v),K(n)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?j(e,i):e.value=i,e.updatedAt=s)}function k(e,t,s,i=v,n){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:s};return a===null||a!==R&&(a.owned?a.owned.push(o):a.owned=[o]),o}function _(e){const t=y;if(e.state===0||t)return;if(e.state===N||t)return H(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&s.push(e);for(let i=s.length-1;i>=0;i--)if(e=s[i],e.state===v||t)V(e);else if(e.state===N||t){const n=d;d=null,S(()=>H(e,s[0]),!1),d=n}}function S(e,t){if(d)return e();let s=!1;t||(d=[]),g?s=!0:g=[],B++;try{const i=e();return te(s),i}catch(i){d||(g=null),K(i)}}function te(e){if(d&&(q(d),d=null),e)return;const t=g;g=null,t.length&&S(()=>P(t),!1)}function q(e){for(let t=0;t<e.length;t++)_(e[t])}function se(e){let t,s=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[s++]=i:_(i)}for(x.context&&W(),t=0;t<s;t++)_(e[t])}function H(e,t){const s=y;e.state=0;for(let i=0;i<e.sources.length;i+=1){const n=e.sources[i];n.sources&&(n.state===v||s?n!==t&&_(n):(n.state===N||s)&&H(n,t))}}function G(e){const t=y;for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];(!i.state||t)&&(i.state=N,i.pure?d.push(i):g.push(i),i.observers&&G(i))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),i=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const o=n.pop(),r=s.observerSlots.pop();i<n.length&&(o.sourceSlots[r]=i,n[i]=o,s.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ne(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function K(e){throw e=ne(e),e}function w(e,t){return M(()=>e(t||{}))}function ie(e,t,s){let i=s.length,n=t.length,o=i,r=0,l=0,u=t[n-1].nextSibling,c=null;for(;r<n||l<o;){if(t[r]===s[l]){r++,l++;continue}for(;t[n-1]===s[o-1];)n--,o--;if(n===r){const h=o<i?l?s[l-1].nextSibling:s[o-l]:u;for(;l<o;)e.insertBefore(s[l++],h)}else if(o===l)for(;r<n;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[o-1]&&s[l]===t[n-1]){const h=t[--n].nextSibling;e.insertBefore(s[l++],t[r++].nextSibling),e.insertBefore(s[--o],h),t[n]=s[o]}else{if(!c){c=new Map;let p=l;for(;p<o;)c.set(s[p],p++)}const h=c.get(t[r]);if(h!=null)if(l<h&&h<o){let p=r,m=1,E;for(;++p<n&&p<o&&!((E=c.get(t[p]))==null||E!==h+m);)m++;if(m>h-l){const Q=t[r];for(;l<h;)e.insertBefore(s[l++],Q)}else e.replaceChild(s[l++],t[r++])}else r++;else t[r++].remove()}}}function le(e,t,s,i={}){let n;return X(o=>{n=o,t===document?e():C(t,e(),t.firstChild?null:void 0,s)},i.owner),()=>{n(),t.textContent=""}}function b(e,t,s){const i=document.createElement("template");i.innerHTML=e;let n=i.content.firstChild;return s&&(n=n.firstChild),n}function C(e,t,s,i){if(s!==void 0&&!i&&(i=[]),typeof t!="function")return T(e,t,i,s);A(n=>T(e,t(),n,s),i)}function T(e,t,s,i,n){for(x.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const o=typeof t,r=i!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,o==="string"||o==="number"){if(x.context)return s;if(o==="number"&&(t=t.toString()),r){let l=s[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),s=$(e,s,i,l)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||o==="boolean"){if(x.context)return s;s=$(e,s,i)}else{if(o==="function")return A(()=>{let l=t();for(;typeof l=="function";)l=l();s=T(e,l,s,i)}),()=>s;if(Array.isArray(t)){const l=[],u=s&&Array.isArray(s);if(L(l,t,s,n))return A(()=>s=T(e,l,s,i,!0)),()=>s;if(x.context){if(!l.length)return s;for(let c=0;c<l.length;c++)if(l[c].parentNode)return s=l}if(l.length===0){if(s=$(e,s,i),r)return s}else u?s.length===0?U(e,l,i):ie(e,s,l):(s&&$(e),U(e,l));s=l}else if(t instanceof Node){if(x.context&&t.parentNode)return s=r?[t]:t;if(Array.isArray(s)){if(r)return s=$(e,s,i,t);$(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function L(e,t,s,i){let n=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],u=s&&s[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))n=L(e,l,u)||n;else if(typeof l=="function")if(i){for(;typeof l=="function";)l=l();n=L(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||n}else e.push(l),n=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return n}function U(e,t,s=null){for(let i=0,n=t.length;i<n;i++)e.insertBefore(t[i],s)}function $(e,t,s,i){if(s===void 0)return e.textContent="";const n=i||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(n!==l){const u=l.parentNode===e;!o&&!r?u?e.replaceChild(n,l):e.insertBefore(n,s):u&&l.remove()}else o=!0}}else e.insertBefore(n,s);return[n]}const oe=b('<div class="w-full text-[#333333] font-semibold text-xs leading-6 p-1"></div>'),re=e=>(()=>{const t=oe.cloneNode(!0);return C(t,()=>e.title),t})(),fe=b('<div class="w-[18px] h-[18px] absolute ml-1"></div>'),I=e=>(()=>{const t=fe.cloneNode(!0);return C(t,()=>e.children),t})(),ue=b('<div class=""></div>'),Z=e=>(()=>{const t=ue.cloneNode(!0);return C(t,()=>e.children),t})(),ce=b('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 18" fill="none"><path d="M9.75 0.40625H2.25C1.79479 0.408305 1.35881 0.590047 1.03693 0.911931C0.715047 1.23381 0.533305 1.66979 0.53125 2.125V15.875C0.533305 16.3302 0.715047 16.7662 1.03693 17.0881C1.35881 17.41 1.79479 17.5917 2.25 17.5938H9.75C10.2052 17.5917 10.6412 17.41 10.9631 17.0881C11.285 16.7662 11.4667 16.3302 11.4688 15.875V2.125C11.4667 1.66979 11.285 1.23381 10.9631 0.911931C10.6412 0.590047 10.2052 0.408305 9.75 0.40625ZM10.5312 15.875C10.5312 16.0822 10.4489 16.2809 10.3024 16.4274C10.1559 16.5739 9.9572 16.6562 9.75 16.6562H2.25C2.0428 16.6562 1.84409 16.5739 1.69757 16.4274C1.55106 16.2809 1.46875 16.0822 1.46875 15.875V2.125C1.46875 1.9178 1.55106 1.71909 1.69757 1.57257C1.84409 1.42606 2.0428 1.34375 2.25 1.34375H9.75C9.9572 1.34375 10.1559 1.42606 10.3024 1.57257C10.4489 1.71909 10.5312 1.9178 10.5312 2.125V15.875ZM6.78125 3.6875C6.78125 3.84202 6.73543 3.99306 6.64959 4.12154C6.56374 4.25002 6.44173 4.35015 6.29897 4.40928C6.15622 4.46841 5.99913 4.48388 5.84759 4.45374C5.69604 4.42359 5.55683 4.34919 5.44757 4.23993C5.33831 4.13067 5.26391 3.99146 5.23376 3.83991C5.20362 3.68837 5.21909 3.53128 5.27822 3.38853C5.33735 3.24577 5.43748 3.12376 5.56596 3.03791C5.69444 2.95207 5.84548 2.90625 6 2.90625C6.2072 2.90625 6.40591 2.98856 6.55243 3.13507C6.69894 3.28159 6.78125 3.4803 6.78125 3.6875Z" fill="black"></path></svg>'),de=b('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 15" fill="none"><path d="M14.25 0.28125H1.75C1.29479 0.283305 0.858814 0.465047 0.536931 0.786931C0.215047 1.10881 0.0333051 1.54479 0.03125 2V10.75C0.0333051 11.2052 0.215047 11.6412 0.536931 11.9631C0.858814 12.285 1.29479 12.4667 1.75 12.4688H7.53125V14.0312H5.5C5.37568 14.0312 5.25645 14.0806 5.16854 14.1685C5.08064 14.2565 5.03125 14.3757 5.03125 14.5C5.03125 14.6243 5.08064 14.7435 5.16854 14.8315C5.25645 14.9194 5.37568 14.9688 5.5 14.9688H10.5C10.6243 14.9688 10.7435 14.9194 10.8315 14.8315C10.9194 14.7435 10.9688 14.6243 10.9688 14.5C10.9688 14.3757 10.9194 14.2565 10.8315 14.1685C10.7435 14.0806 10.6243 14.0312 10.5 14.0312H8.46875V12.4688H14.25C14.7052 12.4667 15.1412 12.285 15.4631 11.9631C15.785 11.6412 15.9667 11.2052 15.9688 10.75V2C15.9667 1.54479 15.785 1.10881 15.4631 0.786931C15.1412 0.465047 14.7052 0.283305 14.25 0.28125ZM1.75 1.21875H14.25C14.4572 1.21875 14.6559 1.30106 14.8024 1.44757C14.9489 1.59409 15.0312 1.7928 15.0312 2V8.40625H0.96875V2C0.96875 1.7928 1.05106 1.59409 1.19757 1.44757C1.34409 1.30106 1.5428 1.21875 1.75 1.21875ZM14.25 11.5312H1.75C1.5428 11.5312 1.34409 11.4489 1.19757 11.3024C1.05106 11.1559 0.96875 10.9572 0.96875 10.75V9.34375H15.0312V10.75C15.0312 10.9572 14.9489 11.1559 14.8024 11.3024C14.6559 11.4489 14.4572 11.5312 14.25 11.5312Z" fill="black"></path></svg>'),he=b('<div class="w-full"><div class="px-2 py-3"><div class="flex items-center gap-x-1 w-full"><div class="rounded bg-white w-full"><div class="flex items-center gap-x-1 w-full relative"><input type="text" class="text-[#1D1D1F] text-xs leading-5 w-full pl-[26px] pr-1 py-1 rounded border border-transparent focus-visible:outline-0 focus-visible:border-[#3394EE] focus-visible:border hover:border hover:border-[#00000033]"></div></div><div class="rounded bg-white w-full"><div class="flex items-center w-full"><input type="text" class="text-[#1D1D1F] text-xs leading-5 w-full pl-[26px] pr-1 py-1 rounded border border-transparent focus-visible:outline-0 focus-visible:border-[#3394EE] focus-visible:border hover:border hover:border-[#00000033]"></div></div></div></div><div class="block h-[1px] w-full bg-[#00000033]"></div></div>'),ae=()=>{const[e,t]=F(320),[s,i]=F(1920);return Y(()=>console.log("count =",e())),(()=>{const n=he.cloneNode(!0),o=n.firstChild,r=o.firstChild,l=r.firstChild,u=l.firstChild,c=u.firstChild,h=l.nextSibling,p=h.firstChild,m=p.firstChild;return C(o,w(re,{title:"Viewport"}),r),C(u,w(I,{get children(){return w(Z,{get children(){return ce.cloneNode(!0)}})}}),c),c.addEventListener("change",E=>t(Number(E.target.nodeValue))),C(p,w(I,{get children(){return w(Z,{get children(){return de.cloneNode(!0)}})}}),m),A(()=>c.value=e()),A(()=>m.value=s()),n})()},pe=b('<div class="w-[250px] h-screen border-r-[1px] border-[#00000033]"></div>'),ge=()=>(()=>{const e=pe.cloneNode(!0);return C(e,w(ae,{})),e})(),Ce=b("<div></div>"),we=()=>(()=>{const e=Ce.cloneNode(!0);return C(e,w(ge,{})),e})();le(()=>w(we,{}),document.getElementById("root"));
