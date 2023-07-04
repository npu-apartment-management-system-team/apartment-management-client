import{s as v,B as S,L as R,f as T,R as V,g as E,e as $}from"./vant-70475d99.js";import{h as q}from"./index-3d323645.js";import{u as z}from"./vue-router-05758286.js";import{_ as D}from"./index-affbebf5.js";import{b as o,c as G,R as u,V as g,W as y,C as n,U as e,J as h,K as s,$ as I,S as U,X as l}from"./@vue-802b571a.js";import"./@vant-176bc72f.js";import"./index-a79a0e8e.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./pinia-f48910fc.js";import"./@vueuse-94ed6524.js";import"./pinia-plugin-persistedstate-c44f3b64.js";const F={class:"apply-btn-container"},J={class:"application-card-container"},K={__name:"ApplicationList",setup(M){const L=z(),p=o({pageNum:1,pageSize:10}),b=o({10:"入住申请完成",11:"提交入住申请",12:"本单位入住审批",13:"房寓段入住审批",14:"房建段入住分配宿舍",15:"入住待缴纳押金",16:"入住申请被本单位驳回",17:"入住申请被房建段驳回",18:"缴纳押金超时",19:"班组长确认超时",110:"用户撤回入住申请",20:"调宿申请完成",21:"提交调宿申请",22:"本单位通过调宿申请",23:"房建段通过调宿申请",24:"房建段分配新宿舍",25:"原有宿管确认离宿",26:"调宿申请被本单位驳回",27:"调宿申请被房建段驳回",28:"缴纳押金超时",29:"班组长确认超时",210:"用户撤回调宿申请",30:"退宿申请完成",31:"提交退宿申请",32:"班组长确认退宿超时",33:"用户撤回退宿申请"}),w=o({0:"入住申请",1:"调宿申请",2:"退宿申请"}),r=o([]),k=o(0),i=o(!1),_=o(!1),d=async()=>{i.value=!0;try{const t=await q(p.value);t!==null&&t.code===2e3?(r.value.push(...t.result.list),k.value=t.total,p.value.pageNum++,t.result.list!==p.value.pageSize&&(_.value=!0)):t!==null?v({type:"danger",message:`获取申请列表失败：${t.msg}`}):v({type:"danger",message:"获取申请列表失败：未知错误"})}finally{i.value=!1}};G(async()=>{await d()});const x=async t=>{await L.push({name:"main-application-detail",query:{id:t.id}})};return(t,m)=>{const C=S,f=T,c=V,A=E,B=$,N=R;return u(),g(h,null,[y("div",F,[n(C,{type:"primary",plain:"",block:""},{default:e(()=>[s("新增申请")]),_:1})]),y("div",J,[n(N,{loading:i.value,"onUpdate:loading":m[0]||(m[0]=a=>i.value=a),finished:_.value,"finished-text":"没有更多申请了",onLoad:d},{default:e(()=>[(u(!0),g(h,null,I(r.value,a=>(u(),U(B,{inset:"",style:{"margin-top":"2%"},key:a},{default:e(()=>[n(A,{class:"application-item",onClick:W=>x(a)},{default:e(()=>[n(c,null,{default:e(()=>[n(f,{span:"12"},{default:e(()=>[s(" 申请序列号: "+l(a.id),1)]),_:2},1024),n(f,{span:"12"},{default:e(()=>[s(" 申请类型: "+l(w.value[a.type]),1)]),_:2},1024)]),_:2},1024),n(c,null,{default:e(()=>[s(" 申请进度: "+l(b.value[a.applicationStatus]),1)]),_:2},1024),n(c,null,{default:e(()=>[s(" 提交时间: "+l(a.createTime),1)]),_:2},1024),n(c,null,{default:e(()=>[s(" 最后更新时间: "+l(a.updateTime),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},8,["loading","finished"])])],64)}}},ot=D(K,[["__scopeId","data-v-024bbe12"]]);export{ot as default};
