import{_ as p}from"./Dzq5k5qi.js";import{u as d,q as m}from"./9JLk3ELK.js";import{_ as f,g,i as y,j as h,u as i,b as r,o as u,c as _,k as v,a as k,w,t as x,F as b}from"./CMp_UR4U.js";import"./cECPJHly.js";const q={class:"not-prose font-mono"},B={class:"group hover:bg-gray-100 dark:hover:bg-gray-800"},C={__name:"collections-list",async setup(L){let o,a;const{data:c}=([o,a]=g(()=>d("collections-list",()=>m("/posts").where({_path:{$ne:"/posts"}}).only(["collections"]).find())),o=await o,a(),o),l=y(()=>{if(!c.value)return[];let t=[];for(const e of c.value)if(e.collections!==""){let s=e.collections.split(",");t=[...new Set(t.concat(s))]}return t});return(t,e)=>{const s=p;return h(t.$slots,"default",{posts:i(l)},()=>[r("section",q,[r("ul",null,[(u(!0),_(b,null,v(i(l),n=>(u(),_("li",{key:n},[k(s,{to:`/collections/collection?title=${n}`,class:"column group hover:bg-gray-100 dark:hover:bg-gray-800"},{default:w(()=>[r("div",B,x(n),1)]),_:2},1032,["to"])]))),128))])])],!0)}}},D=f(C,[["__scopeId","data-v-6d5de845"]]);export{D as default};
