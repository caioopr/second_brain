import{_ as h}from"./DmefPV-W.js";import{u as f,q as g}from"./CKuz-fka.js";import{_ as y,g as b,i as x,j as k,u,b as a,o as p,c,k as v,a as w,w as A,t as i,F as D}from"./3UfBpxt7.js";import"./B_MCOlHU.js";const N={class:"not-prose font-mono"},B={class:"text-gray-400 dark:text-gray-500"},q={__name:"latest-blog-posts",props:{limit:{type:Number,default:0}},async setup(_){let e,r;const d=_,{data:n}=([e,r]=b(()=>f("latest-posts",()=>{const t=g("/posts").where({_path:{$ne:"/posts"}}).only(["_path","title","publishedAt","tags"]).sort({publishedAt:-1});return t.limit(d.limit),t.find()})),e=await e,r(),e),l=x(()=>{if(!n.value)return[];const t=[];for(const s of n.value)s.postDate=new Date(s.publishedAt).toJSON().slice(0,10),t.push(s);return t});return(t,s)=>{const m=h;return k(t.$slots,"default",{posts:u(l)},()=>[a("section",N,[a("ul",null,[(p(!0),c(D,null,v(u(l),o=>(p(),c("li",{key:o._path},[w(m,{to:o._path,class:"column group hover:bg-gray-100 dark:hover:bg-gray-800"},{default:A(()=>[a("div",B,i(o.postDate),1),a("div",null,i(o.title),1)]),_:2},1032,["to"])]))),128))])])],!0)}}},V=y(q,[["__scopeId","data-v-62ebb245"]]);export{V as default};
