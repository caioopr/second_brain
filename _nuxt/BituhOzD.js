import{g as _,h as f,i as d,u as i,o,c as r,F as g,j as m,f as y,t as h}from"./Dtaac8rE.js";import{u as v,q as k}from"./42QxghXC.js";import"./kUxjys2F.js";const x={key:0},C=["onClick"],D={__name:"filter-posts",async setup(q){let a,u;const n=_("selectedTags",()=>[]),{data:c}=([a,u]=f(()=>v("tags-list",()=>k("/posts").where({_path:{$ne:"/posts"}}).only(["tags"]).find())),a=await a,u(),a),l=d(()=>{if(!c.value)return[];let t=[];for(const e of c.value)if(e.tags!==""){let s=e.tags.split(",");t=t.concat(s)}return t});function p(t){if(!n.value)return;const e=n.value.indexOf(t);if(e!==-1){n.value.pop(e);return}n.value.push(t)}return(t,e)=>i(l).length!==0?(o(),r("div",x,[(o(!0),r(g,null,m(i(l),s=>(o(),r("button",{key:s,onClick:w=>p(s)},h(s),9,C))),128))])):y("",!0)}};export{D as default};