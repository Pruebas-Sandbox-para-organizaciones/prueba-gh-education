import{_ as f,a2 as g,o as e,c as t,F as _,L as c,C as i,z as o,t as u,a as h}from"./framework.f5583048.js";import{g as m,s as y}from"./index.ebaa5f8a.js";const v={data(){return{general:[],role:null}},props:{data:{type:String,required:!0}},async beforeMount(){if(m().length!==0){const s=y.getters.userData;this.role=s.role;let l=await g(()=>import(this.data),[]);this.general=l.default.data}}},x={key:0},k={key:0},D=["href"];function V(s,l,w,B,r,E){return e(),t("div",null,[r.role!==null||r.role==="Owner"?(e(),t("ul",x,[(e(!0),t(_,null,c(r.general,(a,d)=>(e(),t("li",{key:d},[o("h2",null,u(a.text),1),o("ul",null,[(e(!0),t(_,null,c(a.items,(n,p)=>(e(),t("div",{key:p},[!n.hidden&&r.role!==null||r.role==="Owner"?(e(),t("li",k,[o("a",{href:n.link},u(n.text),9,D),h("     ")])):i("",!0)]))),128))])]))),128))])):i("",!0)])}const O=f(v,[["render",V],["__scopeId","data-v-998f2c3c"]]);export{O as g};