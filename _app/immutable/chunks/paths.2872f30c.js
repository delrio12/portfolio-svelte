import{A as c,s as _}from"./scheduler.98dcdc08.js";const e=[];function d(o,a=c){let n;const i=new Set;function r(t){if(_(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function p(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=a(r,f)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:p}}var u;const h=((u=globalThis.__sveltekit_1871snp)==null?void 0:u.base)??"/portfolio-svelte";var l;const q=((l=globalThis.__sveltekit_1871snp)==null?void 0:l.assets)??h;export{q as a,h as b,d as w};
