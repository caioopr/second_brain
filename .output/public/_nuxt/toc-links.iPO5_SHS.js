import{_ as r}from"./nuxt-link.DHbCmIMk.js";import{m as i,o as n,c as a,F as u,h as m,a as l,w as d,i as _,t as v,u as h,n as p}from"./entry.gD2Sq1bb.js";const f={__name:"toc-links",props:{links:Array,level:{type:Number,default:0},activeId:{type:String,default:null}},setup(e){const s=i();return(k,y)=>{const o=r,c=x;return n(),a("ul",null,[(n(!0),a(u,null,m(e.links,t=>(n(),a("li",{key:t.id},[l(o,{to:{path:h(s).path,hash:`#${t.id}`},class:p({"ml-4":e.level,"hover:text-blue-800 hover:font-semibold":!0})},{default:d(()=>[_(v(t.text),1)]),_:2},1032,["to","class"]),l(c,{links:t.children,level:e.level+1,"active-id":e.activeId},null,8,["links","level","active-id"])]))),128))])}}},x=f;export{x as default};
