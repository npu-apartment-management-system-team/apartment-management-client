import{s as l,l as w,N as S,e as x,d as b}from"./vant-70475d99.js";import{u as B}from"./vue-router-05758286.js";import{a as C,b as A}from"./index-3d323645.js";import{_ as T}from"./index-affbebf5.js";import{b as p,c as U,R as N,V as h,C as n,u as k,U as D,Z as E,_ as I,W as d}from"./@vue-802b571a.js";import"./@vant-176bc72f.js";import"./index-a79a0e8e.js";import"./axios-4a70c6fc.js";import"./js-cookie-edb2da2a.js";import"./pinia-f48910fc.js";import"./@vueuse-94ed6524.js";import"./pinia-plugin-persistedstate-c44f3b64.js";const R=i=>(E("data-v-1f0cdefd"),i=i(),I(),i),$={class:"application-detail-form"},G=R(()=>d("div",{class:"pay-deposit-warning"},[d("div",null," 如须缴纳押金请至订单界面 "),d("div",null," 押金订单将会自动生成 "),d("div",null,' 房间信息请至"我的"界面查看 ')],-1)),L={__name:"ApplicationDetail",setup(i){const r=B();let u=0;const m=p({10:"入住申请完成",11:"提交入住申请",12:"本单位入住审批",13:"房寓段入住审批",14:"房建段入住分配宿舍",15:"入住待缴纳押金",16:"入住申请被本单位驳回",17:"入住申请被房建段驳回",18:"缴纳押金超时",19:"班组长确认超时",110:"用户撤回入住申请",20:"调宿申请完成",21:"提交调宿申请",22:"本单位通过调宿申请",23:"房建段通过调宿申请",24:"房建段分配新宿舍",25:"原有宿管确认离宿",26:"调宿申请被本单位驳回",27:"调宿申请被房建段驳回",28:"缴纳押金超时",29:"班组长确认超时",210:"用户撤回调宿申请",30:"退宿申请完成",31:"提交退宿申请",32:"班组长确认退宿超时",33:"用户撤回退宿申请"}),c=p({0:"入住申请",1:"调宿申请",2:"退宿申请"}),v=p({0:"未缴纳",1:"已缴纳",2:"已退回"}),a=p({}),f=async o=>{try{const e=await C(o);e!==null&&e.code===2e3?a.value=e.result:e!==null?l({type:"danger",message:`获取申请失败：${e.msg}`}):l({type:"danger",message:"获取申请失败：未知错误"})}catch{l({type:"danger",message:"获取申请失败：未知错误"})}},y=[10,110,20,210,30,33],g=async()=>{if(y.indexOf(a.value.applicationStatus)!==-1){l({type:"warning",message:"该申请已经无法撤回"});return}try{w({title:"提示",message:"您确定要撤回该申请吗?",confirmButtonText:"确认撤回",cancelButtonText:"取消",confirmButtonColor:"#f00",showCancelButton:!0}).then(async()=>{const o=await A(u);o!==null&&o.code===2e3?(l({type:"success",message:"撤回申请成功"}),await f(u)):o!==null?l({type:"danger",message:`撤回申请失败：${o.msg}`}):l({type:"danger",message:"撤回申请失败：未知错误"})}).catch(()=>{l({type:"primary",message:"已取消撤回"})})}catch{l({type:"danger",message:"撤回申请失败失败：未知错误"})}};return U(async()=>{u=r.currentRoute.value.query.id,await f(u)}),(o,e)=>{const _=S,s=b,V=x;return N(),h("div",$,[n(_,{title:"查看申请信息","left-text":"返回","left-arrow":"","right-text":"撤回该申请",onClickRight:e[0]||(e[0]=t=>g()),onClickLeft:e[1]||(e[1]=t=>k(r).go(-1))}),n(V,{inset:"",style:{"margin-top":"5%"}},{default:D(()=>[n(s,{modelValue:a.value.id,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.id=t),readonly:"",label:"申请编号"},null,8,["modelValue"]),n(s,{modelValue:c.value[a.value.type],"onUpdate:modelValue":e[3]||(e[3]=t=>c.value[a.value.type]=t),readonly:"",label:"申请类型"},null,8,["modelValue"]),n(s,{modelValue:m.value[a.value.applicationStatus],"onUpdate:modelValue":e[4]||(e[4]=t=>m.value[a.value.applicationStatus]=t),readonly:"",label:"申请类型"},null,8,["modelValue"]),n(s,{modelValue:v.value[a.value.depositStatus],"onUpdate:modelValue":e[5]||(e[5]=t=>v.value[a.value.depositStatus]=t),readonly:"",label:"押金状态"},null,8,["modelValue"]),n(s,{modelValue:a.value.createTime,"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.createTime=t),readonly:"",label:"发起时间"},null,8,["modelValue"]),n(s,{modelValue:a.value.updateTime,"onUpdate:modelValue":e[7]||(e[7]=t=>a.value.updateTime=t),readonly:"",label:"更新时间"},null,8,["modelValue"])]),_:1}),G])}}},Q=T(L,[["__scopeId","data-v-1f0cdefd"]]);export{Q as default};
