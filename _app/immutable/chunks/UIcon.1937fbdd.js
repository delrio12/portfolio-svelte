import{t as F,a as q,S as E,i as L}from"./index.bc2cb9f6.js";import{y as P,s as K,f as Q,g as V,h as B,d as C,j as R,i as H,A as T}from"./scheduler.98dcdc08.js";import{w as O,b as G}from"./paths.24ff2d06.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){F(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,c,i,r,S,m,h,g,v){let p=e.length,u=i.length,f=p;const b={};for(;f--;)b[e[f].key]=f;const y=[],k=new Map,A=new Map,_=[];for(f=u;f--;){const o=v(c,i,f),l=a(o);let d=r.get(l);d?n&&_.push(()=>d.p(o,t)):(d=h(l,o),d.c()),k.set(l,y[f]=d),l in b&&A.set(l,Math.abs(f-b[l]))}const j=new Set,N=new Set;function J(o){q(o,1),o.m(S,g),r.set(o.key,o),g=o.first,u--}for(;p&&u;){const o=y[u-1],l=e[p-1],d=o.key,w=l.key;o===l?(g=o.first,p--,u--):k.has(w)?!r.has(d)||j.has(d)?J(o):N.has(w)?p--:A.get(d)>A.get(w)?(N.add(d),J(o)):(j.add(w),p--):(m(l,r),p--)}for(;p--;){const o=e[p];k.has(o.key)||m(o,r)}for(;u;)J(y[u-1]);return P(_),y}const I="@riadh-adrani-theme",W=e=>{localStorage.setItem(I,JSON.stringify(e))},U=O(!1),x=e=>U.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return W(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(I);e?x(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?x(!0):x(!1)},M=e=>`${G}/logos/${e}`,s=(e,t)=>t?{dark:M(t),light:M(e)}:M(e),as={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),MaterialUI:s("material-ui.svg"),Redux:s("redux.png"),StyledComponents:s("styled-components.svg")};let D;U.subscribe(e=>D=e);const os=e=>typeof e=="string"?e:D?e.dark:e.light;globalThis&&globalThis.__awaiter;function X(e){let t,a;return{c(){t=Q("i"),this.h()},l(n){t=V(n,"I",{class:!0}),B(t).forEach(C),this.h()},h(){R(t,"class",a=`${e[0]} ${e[1]}`)},m(n,c){H(n,t,c)},p(n,[c]){c&3&&a!==(a=`${n[0]} ${n[1]}`)&&R(t,"class",a)},i:T,o:T,d(n){n&&C(t)}}}function z(e,t,a){let{icon:n=void 0}=t,{classes:c=""}=t;return e.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,c=i.classes)},[n,c]}class is extends E{constructor(t){super(),L(this,t,z,X,K,{icon:0,classes:1})}}export{as as A,is as U,x as a,es as b,ss as e,os as g,ns as o,U as t,ts as u};
