import{b as c,s as t,c as m,N as fe,F as he,B as be,U as _e,d as ke,f as Ce,R as Ve,g as we,P as Ue,h as Ie,i as xe,j as ze,e as $e}from"./vant-70475d99.js";import{v as E,b as q,a as De,c as Ae}from"./validatorUtil-fa8d24ca.js";import{b as T,p as Y,s as Se,__tla as Ze}from"./ocrUtil-32f59570.js";import{_ as f}from"./index-a79a0e8e.js";import{u as Fe}from"./vue-router-05758286.js";import{e as Me}from"./jsencrypt-da988b81.js";import{d as Ne,s as Pe}from"./pinia-f48910fc.js";import{b as o,c as Re,E as je,R as p,V as Ee,C as r,u as h,U as u,K as g,i as qe,S as v,Y as V,W as x,Z as Be,_ as Ge}from"./@vue-802b571a.js";import{_ as Je,__tla as Le}from"./index-affbebf5.js";import"./@vant-176bc72f.js";import"./ali-oss-9dda75ed.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./js-encrypt-af0330d8.js";import"./@vueuse-94ed6524.js";import"./pinia-plugin-persistedstate-c44f3b64.js";let H,Oe=Promise.all([(()=>{try{return Ze}catch{}})(),(()=>{try{return Le}catch{}})()]).then(async()=>{const Q=Ne("registerDtoCache",()=>({registerCache:o({registerDto:{username:"",password:"",departmentId:"",name:"",personalId:"",personalCardUrl:"",faceUrl:"",email:"",sex:0,isCadre:0},checkSmsDisabled:!1,checkMailDisabled:!1,checkIdFront:!1})}),{persist:{storage:sessionStorage,paths:["registerCache"],key:"registerCache"}});let Z,B,G,J,L,O;Z=z=>(Be("data-v-aa96c464"),z=z(),Ge(),z),B={class:"register-form"},G=Z(()=>x("h3",{class:"title"},"\u5458\u5DE5\u516C\u5BD3\u7BA1\u7406\u7CFB\u7EDF\u2014\u2014\u6CE8\u518C",-1)),J=Z(()=>x("a",null,"\u60A8\u786E\u8BA4\u6CE8\u518C\u5219\u4EE3\u8868\u60A8\u8BA4\u53EF\u6211\u4EEC\u7684",-1)),L={class:"submit-revise-btn"},O={__name:"UserRegister",setup(z){const F=Fe(),W=Q(),{registerCache:w}=Pe(W),l=o({username:"",password:"",departmentId:"",name:"",personalId:"",personalCardUrl:"",faceUrl:"",email:"",sex:0,isCadre:0}),$=o(!0),b=o({phone:"",code:""}),M=o(""),X=async()=>{if(!E(l.value.username)){t({type:"danger",message:"\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"});return}c({duration:0,forbidClick:!0,message:"\u8BF7\u6C42\u9A8C\u8BC1\u7801\u53D1\u9001\u4E2D"});const a={phone:l.value.username};try{const{data:e}=await f.post("/api/auth/sendsms",a);if(e.code!==null&&e.code===2e3){t({type:"success",message:"\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001"}),M.value="300s",$.value=!1;let n=300;const d=setInterval(()=>{n--,M.value=n+"s",n===0&&(clearInterval(d),$.value=!0)},1e3)}else t({type:"danger",message:`\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25,${e.msg},\u8BF7\u91CD\u8BD5`})}catch(e){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${e},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}},y=o(!1),ee=async()=>{if(b.value.phone=l.value.username,!q(b.value.code)||!E(b.value.phone)){t({type:"danger",message:"\u683C\u5F0F\u4E0D\u6B63\u786E"});return}c({duration:0,forbidClick:!0,message:"\u8BF7\u6C42\u9A8C\u8BC1\u7801\u9A8C\u8BC1\u4E2D"});try{const{data:a}=await f.post("/api/auth/checksms",b.value);a.code!==null&&a.code===2e3?(t({type:"success",message:"\u9A8C\u8BC1\u7801\u9A8C\u8BC1\u6210\u529F"}),y.value=!0):t({type:"danger",message:`\u9A8C\u8BC1\u7801\u9A8C\u8BC1\u5931\u8D25,${a.msg},\u8BF7\u91CD\u8BD5`})}catch(a){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${a},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}},_=o({email:"",code:""}),D=o([]),k=o(!1),A=o(!0),N=o(""),ae=async()=>{if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(l.value.email)){t({type:"danger",message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"});return}c({duration:0,forbidClick:!0,message:"\u8BF7\u6C42\u9A8C\u8BC1\u7801\u53D1\u9001\u4E2D"});const a={email:l.value.email};try{const{data:e}=await f.post("/api/auth/sendmail",a);if(e.code!==null&&e.code===2e3){t({type:"success",message:"\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001"}),N.value="300s",A.value=!1;let n=300;const d=setInterval(()=>{n--,N.value=n+"s",n===0&&(clearInterval(d),A.value=!1)},1e3)}else t({type:"danger",message:`\u9A8C\u8BC1\u7801\u53D1\u9001\u5931\u8D25,${e.msg},\u8BF7\u91CD\u8BD5`})}catch(e){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${e},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}},le=async()=>{if(_.value.email=l.value.email,!q(_.value.code)||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(_.value.code)){t({type:"danger",message:"\u683C\u5F0F\u4E0D\u6B63\u786E"});return}c({duration:0,forbidClick:!0,message:"\u8BF7\u6C42\u90AE\u7BB1\u9A8C\u8BC1\u4E2D"});try{const{data:a}=await f.post("/api/auth/checkmail",_.value);a.code!==null&&a.code===2e3?(t({type:"success",message:"\u90AE\u7BB1\u9A8C\u8BC1\u6210\u529F"}),k.value=!0):t({type:"danger",message:`\u90AE\u7BB1\u9A8C\u8BC1\u5931\u8D25,${a.msg},\u8BF7\u91CD\u8BD5`})}catch(a){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${a},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}};let S=!1;const se=a=>a.content.size>10*1024*1024?(t({type:"danger",message:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M"}),!1):/image\/(png|jpg|jpeg|JPG|PNG)/.test(a.file.type)?!0:(t({type:"danger",message:"\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E"}),!1);let C=o("");const te=async a=>{c({duration:0,forbidClick:!0,message:"\u4EBA\u8138\u7167\u7247\u4E0A\u4F20\u4E2D"});try{const e=T(a.content,a.file.name);if(!e.name.endsWith("jpg"))return t({type:"danger",message:"\u4EBA\u8138\u7167\u7247\u683C\u5F0F\u4E0D\u6B63\u786E"}),!1;const n=await Y("apartment/user/face/",l.value.name+"_"+e.name,e);return n.url!==void 0&&(l.value.faceUrl=n.url),!0}catch{t({type:"danger",message:"\u4EBA\u8138\u7167\u7247\u4E0A\u4F20\u5931\u8D25,\u8BF7\u91CD\u8BD5"})}finally{m()}return!1},re=async a=>{if(se(a)){c({duration:0,forbidClick:!0,message:"\u6B63\u5728\u8BC6\u522B\u8EAB\u4EFD\u8BC1"});try{const{data:e}=await Se(a);if(e.code===2e3){const n=JSON.parse(e.data);if(n.data.face!==null){const d=n.data.face;if(d.warning.isCopy!==0||d.warning.isReshoot!==0){t({type:"danger",message:"\u8BC6\u522B\u5230\u7FFB\u62CD\u6216\u590D\u5236\u3002\u8BF7\u8BC6\u522B\u539F\u4EF6\u8EAB\u4EFD\u8BC1"});return}l.value.name=d.data.name,l.value.personalId=d.data.idNumber,l.value.sex=d.data.sex==="\u7537"?0:1,C.value=d.data.sex,S=!0,m(),c({duration:0,forbidClick:!0,message:"\u6B63\u5728\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u7167\u7247\u5230\u540E\u53F0\u5B58\u50A8"});const I=T(a.content,a.file.name),i=await Y("apartment/user/idcard/",l.value.name+"_"+I.name,I);l.value.personalCardUrl=i.url}else t({type:"danger",message:"\u8EAB\u4EFD\u8BC1\u8BC6\u522B\u5931\u8D25,\u8BF7\u91CD\u8BD5"})}else t({type:"danger",message:`\u8EAB\u4EFD\u8BC1\u8BC6\u522B\u5931\u8D25,${e.msg},\u8BF7\u91CD\u8BD5`})}catch(e){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${e},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}}},P=o([]),R=o([]),j=[],de=async()=>{c({duration:0,forbidClick:!0,message:"\u6B63\u5728\u8FDB\u884C\u4EBA\u8BC1\u6838\u9A8C"});try{if(D.value.length===0){t({type:"danger",message:"\u8BF7\u4E0A\u4F20\u7167\u7247\u4EE5\u4F9B\u5165\u4F4F\u4EBA\u8138\u8BC6\u522B"});return}if(!await te(D.value[0]))return;if(!S){t({type:"danger",message:"\u8BF7\u5148\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u6B63\u9762\u7167\u7247"});return}const a={faceUrl:l.value.faceUrl,name:l.value.name,personalId:l.value.personalId},e=await f.post("/api/auth/faceVerification",a);if(e.data.code===2e3)m(),c({duration:0,forbidClick:!0,message:"\u4EBA\u8BC1\u6838\u9A8C\u6210\u529F,\u6B63\u5728\u8FDB\u884C\u4E0A\u4F20\u6CE8\u518C\u4FE1\u606F"});else{m(),t({type:"danger",message:`\u4EBA\u8BC1\u6838\u9A8C\u5931\u8D25,${e.data.msg},\u8BF7\u91CD\u8BD5`});return}P.value.indexOf("isCadre")!==-1&&(l.value.isCadre=1),l.value.password=Me(l.value.password),l.value.departmentId=R.value.find(d=>d.name===l.value.departmentId).id;const{data:n}=await f.post("/api/auth/register/user",l.value);n.code===2e3?(t({type:"success",message:"\u6CE8\u518C\u6210\u529F,\u8BF7\u60A8\u767B\u5F55"}),await F.push("/login")):t({type:"danger",message:n.message})}catch(a){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${a},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}},ne=async()=>{c({duration:0,forbidClick:!0,message:"\u6B63\u5728\u83B7\u53D6\u90E8\u95E8\u5217\u8868"});try{const{data:a}=await f.get("/api/management/department/list");a.code===2e3?(R.value=a.result.list,R.value.forEach(e=>{j.push({text:e.name,value:e.id})})):t({type:"danger",message:a.message})}catch(a){t({type:"danger",message:`\u670D\u52A1\u5668\u5F02\u5E38${a},\u8BF7\u901A\u77E5\u7BA1\u7406\u5458`})}finally{m()}};Re(async()=>{await ne(),w.value.registerDto.username!==""&&(l.value=w.value.registerDto,y.value=w.value.checkSmsDisabled,k.value=w.value.checkMailDisabled,S=w.value.checkIdFront,C.value=l.value.sex===0?"\u7537":"\u5973")}),je(()=>{W.$patch(a=>{a.registerCache.registerDto=l.value,a.registerCache.checkSmsDisabled=y.value,a.registerCache.checkMailDisabled=k.value,a.registerCache.checkIdFront=S})});const U=o(!1),ue=({selectedValues:a})=>{l.value.departmentId=j.find(e=>e.value===a[0]).text,U.value=!1};return(a,e)=>{const n=fe,d=be,I=_e,i=ke,K=Ce,oe=Ve,ie=we,me=Ue,ce=Ie,pe=xe,ge=ze,ve=$e,ye=he;return p(),Ee("div",B,[r(n,{title:"\u6CE8\u518C","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:e[0]||(e[0]=s=>h(F).go(-1))}),G,r(ye,{onSubmit:e[20]||(e[20]=s=>de())},{default:u(()=>[r(ve,{inset:"",style:{padding:"1%"}},{default:u(()=>[r(I,{style:{width:"60%",margin:"0 auto"},"after-read":re},{default:u(()=>[r(d,{plain:"",block:"",type:"primary",size:"small"},{default:u(()=>[g(" \u62CD\u6444\u60A8\u7684\u8EAB\u4EFD\u8BC1-\u6B63\u9762-\u4EE5\u81EA\u52A8\u586B\u5145 ")]),_:1})]),_:1}),r(i,{modelValue:l.value.personalId,"onUpdate:modelValue":e[1]||(e[1]=s=>l.value.personalId=s),center:"",disabled:"",clearable:"",label:"\u8EAB\u4EFD\u8BC1\u53F7",placeholder:"\u8BE5\u4F4D\u7F6E\u4F1A\u88AB\u81EA\u52A8\u586B\u5145"},null,8,["modelValue"]),r(i,{modelValue:l.value.name,"onUpdate:modelValue":e[2]||(e[2]=s=>l.value.name=s),center:"",disabled:"",clearable:"",label:"\u771F\u5B9E\u59D3\u540D",placeholder:"\u8BE5\u4F4D\u7F6E\u4F1A\u88AB\u81EA\u52A8\u586B\u5145"},null,8,["modelValue"]),r(i,{modelValue:h(C),"onUpdate:modelValue":e[3]||(e[3]=s=>qe(C)?C.value=s:C=s),center:"",disabled:"",clearable:"",label:"\u6027\u522B",placeholder:"\u8BE5\u4F4D\u7F6E\u4F1A\u88AB\u81EA\u52A8\u586B\u5145"},null,8,["modelValue"]),r(ie,null,{default:u(()=>[r(oe,{class:"personCard"},{default:u(()=>[r(K,{span:"8"},{default:u(()=>[g(" \u4EBA\u8138\u7167\u7247 ")]),_:1}),r(K,{span:"16"},{default:u(()=>[r(I,{capture:"camera",modelValue:D.value,"onUpdate:modelValue":e[4]||(e[4]=s=>D.value=s),"max-count":1,"max-size":10*1024*1024},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),r(i,{modelValue:l.value.username,"onUpdate:modelValue":e[5]||(e[5]=s=>l.value.username=s),name:"\u624B\u673A\u53F7",label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"tel",clearable:"",rules:[{validator:h(E),message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"}],disabled:y.value},null,8,["modelValue","rules","disabled"]),y.value?V("",!0):(p(),v(i,{key:0,modelValue:b.value.code,"onUpdate:modelValue":e[7]||(e[7]=s=>b.value.code=s),center:"",clearable:"",type:"digit",label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",rules:[{validator:h(q),message:"\u5E94\u4E3A4\u4F4D\u6570\u5B57"}]},{button:u(()=>[$.value?(p(),v(d,{key:0,size:"small",type:"primary",onClick:e[6]||(e[6]=s=>X()),disabled:y.value},{default:u(()=>[g(" \u53D1\u9001\u9A8C\u8BC1\u7801 ")]),_:1},8,["disabled"])):$.value?V("",!0):(p(),v(d,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":M.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"])),y.value?V("",!0):(p(),v(d,{key:1,plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"},onClick:e[8]||(e[8]=s=>ee())},{default:u(()=>[g("\u9A8C\u8BC1\u624B\u673A\u53F7\u7801 ")]),_:1})),r(i,{modelValue:l.value.password,"onUpdate:modelValue":e[9]||(e[9]=s=>l.value.password=s),name:"\u5BC6\u7801",label:"\u5BC6\u7801",type:"password",placeholder:"\u8BF7\u8BBE\u7F6E\u5BC6\u7801",autocomplete:"off",rules:[{validator:h(De),message:"\u5E94\u4E3A4-16\u4F4D\u6570\u5B57/\u5B57\u6BCD/\u4E0B\u5212\u7EBF"}]},null,8,["modelValue","rules"]),r(i,{modelValue:l.value.email,"onUpdate:modelValue":e[10]||(e[10]=s=>l.value.email=s),center:"",clearable:"",label:"\u90AE\u7BB1",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1(\u975E\u5F3A\u5236)",disabled:k.value},null,8,["modelValue","disabled"]),k.value?V("",!0):(p(),v(i,{key:2,modelValue:_.value.code,"onUpdate:modelValue":e[12]||(e[12]=s=>_.value.code=s),center:"",clearable:"",type:"digit",label:"\u90AE\u7BB1\u9A8C\u8BC1\u7801",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",rules:[{required:!1,validator:h(Ae),message:"\u5E94\u4E3A4\u4F4D\u6570\u5B57"}]},{button:u(()=>[A.value?(p(),v(d,{key:0,size:"small",type:"primary",onClick:e[11]||(e[11]=s=>ae())},{default:u(()=>[g(" \u53D1\u9001\u9A8C\u8BC1\u7801 ")]),_:1})):A.value?V("",!0):(p(),v(d,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":N.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"])),k.value?V("",!0):(p(),v(d,{key:3,plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"},onClick:e[13]||(e[13]=s=>le())},{default:u(()=>[g(" \u9A8C\u8BC1\u90AE\u7BB1 ")]),_:1})),r(i,{modelValue:l.value.departmentId,"onUpdate:modelValue":e[14]||(e[14]=s=>l.value.departmentId=s),"is-link":"",readonly:"",label:"\u5355\u4F4D",placeholder:"\u8BF7\u9009\u62E9\u60A8\u6240\u5C5E\u7684\u5355\u4F4D",onClick:e[15]||(e[15]=s=>U.value=!0),rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u60A8\u6240\u5C5E\u7684\u5355\u4F4D"}]},null,8,["modelValue"]),r(ce,{show:U.value,"onUpdate:show":e[17]||(e[17]=s=>U.value=s),round:"",position:"bottom"},{default:u(()=>[r(me,{columns:j,onCancel:e[16]||(e[16]=s=>U.value=!1),onConfirm:ue})]),_:1},8,["show"]),r(ge,{modelValue:P.value,"onUpdate:modelValue":e[18]||(e[18]=s=>P.value=s),direction:"horizontal",class:"checkbox-area"},{default:u(()=>[r(pe,{name:"isCadre"},{default:u(()=>[g("\u6211\u662F\u5904\u7EA7\u4EE5\u4E0A\u5E72\u90E8")]),_:1})]),_:1},8,["modelValue"])]),_:1}),x("p",null,[J,x("a",{style:{color:"#5CA0FF"},onClick:e[19]||(e[19]=s=>h(F).push("/privacy"))},"\u9690\u79C1\u653F\u7B56")]),x("div",L,[r(d,{plain:"",block:"",type:"primary","native-type":"submit"},{default:u(()=>[g(" \u6CE8\u518C ")]),_:1})])]),_:1})])}}},H=Je(O,[["__scopeId","data-v-aa96c464"]])});export{Oe as __tla,H as default};
