import{z as r,i as n,o as c,c as h,u as o,R as u,B as l,y as d,S as f}from"./Dtaac8rE.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,a=n(()=>{var i;if((i=t.src)!=null&&i.startsWith("/")&&!t.src.startsWith("//")){const s=u(l(d().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return f(s,t.src)}return t.src});return(i,s)=>(c(),h("img",{src:o(a),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
