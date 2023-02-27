import{f as d,h as _,j as h,aE as p,c as m,aF as u,l as n,m as r,M as t,R as s,u as a,F as f,W as g,N as v,aG as x,aH as N,aI as y,Q as b,n as T,P as k,_ as w}from"./nav-8b619150.js";import{N as P}from"./NoteViewer-cd570ae2.js";import{u as L}from"./index-31ded5c8.js";const V={class:"m-4"},F={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},E={class:"text-lg"},H={class:"font-bold flex gap-2"},B={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),M={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(D){_(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),L({title:`Notes - ${m.title}`});const i=u(()=>N.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,l)=>(n(),r("div",{id:"page-root",style:v(a(x))},[t("div",V,[t("div",F,[t("h1",S,s(a(m).title),1),t("div",j,s(new Date().toLocaleString()),1)]),(n(!0),r(f,null,g(a(i),(e,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",E,[t("div",H,[t("div",B,s(e==null?void 0:e.no)+"/"+s(a(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),C])]),T(P,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),r("hr",M)):k("v-if",!0)]))),128))])],4))}}),G=w(z,[["__file","/home/runner/work/TechFeedEN-14-LT/TechFeedEN-14-LT/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{G as default};
