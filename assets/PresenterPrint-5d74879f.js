import{d as _,u as p,a as d,c as m,b as u,r as h,o as a,e as n,f as t,t as s,g as r,F as f,h as g,n as v,i as x,j as b,k as y,l as k,m as N,_ as P}from"./index-a7dfd494.js";import{N as w}from"./NoteDisplay-e56da04f.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},z={class:"font-bold flex gap-2"},B={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){p(`
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
`),d({title:`Notes - ${m.title}`});const c=u(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(a(),n("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",D,[t("h1",L,s(r(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(c.value,(e,i)=>(a(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",z,[t("div",B,s(e==null?void 0:e.no)+"/"+s(r(b)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(a(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/blaze/Desktop/ppt/fe-conference-ppt/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
