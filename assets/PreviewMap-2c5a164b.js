import{b as $,s as y,c as L,N as R}from"./vant-82459928.js";import{A as P}from"./@amap-2c7a519d.js";import{u as b}from"./vue-router-05758286.js";import{u as q}from"./@vueuse-94ed6524.js";import{_ as x}from"./index-96976a65.js";import{s as T,w as A,c as B,E as C,R as I,V as S,C as D,u as E,Z as N,_ as V,W}from"./@vue-802b571a.js";import"./@vant-176bc72f.js";import"./pinia-f48910fc.js";import"./js-cookie-edb2da2a.js";import"./pinia-plugin-persistedstate-c44f3b64.js";window._AMapSecurityConfig={serviceHost:"https://amap.wangminan.me/_AMapService/backup"};const j=async()=>await P.load({key:"488832cc9add2a49a6f41bf8b8dbf109",version:"2.0",plugins:["AMap.Driving","AMap.Geocoder","AMap.Geolocation","AMap.ToolBar"]});const z=l=>(N("data-v-98631516"),l=l(),V(),l),F={class:"container"},G=z(()=>W("div",{id:"route-map"},null,-1)),O={__name:"PreviewMap",setup(l){const v=q(),o=b();let r=T(null),n,s,p,m,f,d;const g=async()=>{s=new n.LngLat(o.currentRoute.value.query.departureLng,o.currentRoute.value.query.departureLat),m=o.currentRoute.value.query.queryType,m==="route"&&(p=new n.LngLat(o.currentRoute.value.query.arriveLng,o.currentRoute.value.query.arriveLat))};function h(e){const t=_(e),a=new n.Marker({position:t[0],icon:"https://webapi.amap.com/theme/v1.3/markers/n/start.png",map:r.value}),i=new n.Marker({position:t[t.length-1],icon:"https://webapi.amap.com/theme/v1.3/markers/n/end.png",map:r.value}),c=new n.Polyline({path:t,isOutline:!0,outlineColor:"#ffeeee",borderWeight:2,strokeWeight:5,strokeColor:"#0091ff",lineJoin:"round"});c.setMap(r),r.value.setFitView([a,i,c])}function _(e){const t=[];let a=0,i=e.steps.length;for(;a<i;a++){const c=e.steps[a];let u=0,M=c.path.length;for(;u<M;u++)t.push(c.path[u])}return t}const w=async e=>{r.value=new e.Map("route-map",{resizeEnable:!0,mapStyle:v.value?"amap://styles/dark":"amap://styles/normal",viewMode:"3D",zoom:15,center:[o.currentRoute.value.query.departureLng,o.currentRoute.value.query.departureLat]}),m==="route"?(f=new e.Driving({policy:e.DrivingPolicy.LEAST_TIME,map:r.value}),f.search(s,p,function(t,a){t==="complete"?a.routes&&a.routes.length&&h(a.routes[0]):y({type:"danger",message:"路线规划失败，请检查输入地点是否在杭州市范围内"})})):(r.value.clearMap(),d=new e.Marker({position:s,icon:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",offset:new e.Pixel(-13,-30)}),d.setLabel({offset:new e.Pixel(0,20),content:"<div class='info'>这是您的公寓位置</div>",direction:"right"}),r.value.add(d),r.value.setFitView())};A(v,async e=>{console.log(e),await g(),await w(n)});const k=async()=>{if(m==="route"){const e=`${s.lng},${s.lat},${o.currentRoute.value.query.departurePoint}`,t=`${p.lng},${p.lat},${o.currentRoute.value.query.arrivePoint}`,a="car",i=0,c="gaode",u=1;window.location.href=`https://uri.amap.com/navigation?policy=${i}&from=${e}&to=${t}&mode=${a}&coordinate=${c}&callnative=${u}`}else window.location.href=`https://uri.amap.com/marker?position=${s.lng},${s.lat}&name=我的公寓`};return B(async()=>{$({duration:0,forbidClick:!0,message:"正在加载地图..."});try{n=await j(),await g(),await w(n)}catch(e){y({type:"danger",message:`地图加载失败,${e.message}`})}finally{L()}}),C(()=>{document.getElementById("route-map").remove()}),(e,t)=>{const a=R;return I(),S("div",F,[D(a,{title:"行程预览","left-text":"返回","right-text":"使用高德地图打开","left-arrow":"",onClickLeft:t[0]||(t[0]=i=>E(o).go(-1)),onClickRight:t[1]||(t[1]=i=>k())}),G])}}},ae=x(O,[["__scopeId","data-v-98631516"]]);export{ae as default};
