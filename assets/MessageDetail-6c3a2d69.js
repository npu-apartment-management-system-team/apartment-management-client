import{s as d,N as f,L as g,f as v,e as y}from"./vant-60b60113.js";import{a as x}from"./index-d7686055.js";import{u as D}from"./vue-router-05758286.js";import{_ as N}from"./index-0443e69d.js";import{b as r,c as C,R as M,V as b,C as t,u as h,W as i,U as a,J as w,X as c,K as B}from"./@vue-802b571a.js";import"./@vant-176bc72f.js";import"./index-b20d8b23.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./pinia-f48910fc.js";import"./@vueuse-94ed6524.js";import"./pinia-plugin-persistedstate-c44f3b64.js";const V={class:"message-container"},k={id:"time"},L={__name:"MessageDetail",setup(R){const o=D(),n=r(""),s=r({code:1,msg:"",result:[]});return C(async()=>{const l=o.currentRoute.value.query.id,e=await x(l);console.log(e),e!==null&&e.code===2e3?(s.value.result=e.result.messageDetail,n.value=e.result.senderAdmin.name):d({type:"danger",message:"获取信息详情失败"})}),(l,e)=>{const _=f,u=v,m=y,p=g;return M(),b(w,null,[t(_,{title:n.value,"left-text":"返回","left-arrow":"",onClickLeft:e[0]||(e[0]=T=>h(o).go(-1))},null,8,["title"]),i("div",V,[t(p,null,{default:a(()=>[i("div",k,c(s.value.result.createTime),1),t(m,{inset:"",style:{"margin-top":"2%"}},{default:a(()=>[t(u,null,{default:a(()=>[B(c(s.value.result.message),1)]),_:1})]),_:1})]),_:1})])],64)}}},$=N(L,[["__scopeId","data-v-faa90c5b"]]);export{$ as default};
