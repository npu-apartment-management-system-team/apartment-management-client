import{s as l,N as P,F as z,d as I,P as M,h as O,B as R,U as q,e as A}from"./vant-70475d99.js";import{u as B}from"./vue-router-05758286.js";import{b as K,p as L,__tla as N}from"./ocrUtil-0a228bac.js";import{u as S}from"./index-e822aa76.js";import{s as Y}from"./pinia-f48910fc.js";import{c as j}from"./index-01613056.js";import{_ as E,__tla as G}from"./index-6fc4864a.js";import{b as v,c as H,R as J,V as T,C as s,u as Q,U as n,K as w,W as X}from"./@vue-802b571a.js";import"./@vant-176bc72f.js";import"./index-f2a9fb39.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./ali-oss-340f17ce.js";import"./@amap-2c7a519d.js";import"./@vueuse-94ed6524.js";import"./pinia-plugin-persistedstate-c44f3b64.js";let U,Z=Promise.all([(()=>{try{return N}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{let _,h,b;_={class:"create-application-form"},h={class:"submit-application-btn"},b={__name:"CreateApplication",setup(ee){const x=B(),V=S(),{currentUser:C}=Y(V),y=[{text:"\u5165\u4F4F\u7533\u8BF7",value:0},{text:"\u8C03\u5BBF\u7533\u8BF7",value:1},{text:"\u9000\u5BBF\u7533\u8BF7",value:2}],i=v(!1),p=v({type:0,fileUrl:""}),u=v({type:"",fileUrl:""}),$=async({selectedValues:a})=>{i.value=!1,p.value.type=a[0],u.value.type=y[a[0]].text};H(()=>{l({type:"warning",message:"\u8BF7\u786E\u8BA4\u60A8\u6CA1\u6709\u8FDB\u884C\u4E2D\u7684\u7533\u8BF7"})});const r=v([]),k=a=>a.size>20*1024*1024?(l({type:"danger",message:"\u6750\u6599\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC720M"}),!1):!a.name.endsWith(".pdf")&&!a.name.endsWith(".doc")&&!a.name.endsWith(".docx")?(l({type:"danger",message:"\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E,\u8BF7\u4F7F\u7528PDF\u6216WORD"}),!1):!0,W=async()=>{try{if(r.value[0]===void 0){l({type:"danger",message:"\u8BF7\u4E0A\u4F20\u60A8\u7684\u7533\u8BF7\u6750\u6599"});return}let a=new Date,e=a.getDate(),m=a.getMonth()+1,d=a.getFullYear();const c=K(r.value[0].content,C.value.name+"_"+u.value.type+ +"_"+`${d}-${m}-${e}`+r.value[0].file.name.substring(r.value[0].file.name.lastIndexOf("."))),f=await L(`apartment/user/application/${d}/${m}/`,c.name,c);if(f.url!==void 0){p.value.fileUrl=f.url,p.value.type=y.find(g=>u.value.type===g.text).value;const o=await j(p.value);o!==null&&o.code===2e3&&(l({type:"success",message:"\u7533\u8BF7\u63D0\u4EA4\u6210\u529F"}),await x.push("/main/application/application-list")),o!==null?l({type:"danger",message:`\u7533\u8BF7\u63D0\u4EA4\u5931\u8D25,${o.msg}`}):l({type:"danger",message:"\u7533\u8BF7\u63D0\u4EA4\u5931\u8D25,\u8BF7\u91CD\u8BD5"})}else l({type:"danger",message:"\u8BC1\u660E\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25,\u8BF7\u91CD\u8BD5"})}catch{l({type:"danger",message:"\u672A\u77E5\u5F02\u5E38,\u7533\u8BF7\u63D0\u4EA4\u5931\u8D25"})}};return(a,e)=>{const m=P,d=I,c=M,f=O,o=R,g=q,D=A,F=z;return J(),T("div",_,[s(m,{title:"\u65B0\u589E\u7533\u8BF7\u4FE1\u606F","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:e[0]||(e[0]=t=>Q(x).go(-1))}),s(F,{onSubmit:e[6]||(e[6]=t=>W())},{default:n(()=>[s(D,{inset:"",style:{"margin-top":"5%"}},{default:n(()=>[s(d,{modelValue:u.value.type,"onUpdate:modelValue":e[1]||(e[1]=t=>u.value.type=t),"is-link":"",readonly:"",label:"\u7533\u8BF7\u7C7B\u578B",placeholder:"\u8BF7\u9009\u62E9\u60A8\u7684\u7533\u8BF7\u7C7B\u578B",onClick:e[2]||(e[2]=t=>i.value=!0),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u60A8\u6240\u5C5E\u7684\u5355\u4F4D"}]},null,8,["modelValue"]),s(f,{show:i.value,"onUpdate:show":e[4]||(e[4]=t=>i.value=t),round:"",position:"bottom"},{default:n(()=>[s(c,{columns:y,onCancel:e[3]||(e[3]=t=>i.value=!1),onConfirm:$})]),_:1},8,["show"]),s(g,{class:"file-uploader","before-read":k,modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=t=>r.value=t),reupload:"","max-count":"1"},{default:n(()=>[s(o,{plain:"",block:"",type:"primary",size:"small"},{default:n(()=>[w(" \u8BF7\u9009\u62E9\u60A8\u7684\u7533\u8BF7\u6750\u6599 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),X("div",h,[s(o,{plain:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[w(" \u63D0\u4EA4\u7533\u8BF7 ")]),_:1})])]),_:1})])}}},U=E(b,[["__scopeId","data-v-a22f367e"]])});export{Z as __tla,U as default};
