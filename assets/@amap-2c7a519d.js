var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function m(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var w={exports:{}};(function(c,y){(function(A,v){c.exports=v()})(h,function(){function A(n){var d=[];return n.AMapUI&&d.push(v(n.AMapUI)),n.Loca&&d.push(I(n.Loca)),Promise.all(d)}function v(n){return new Promise(function(d,e){var a=[];if(n.plugins)for(var i=0;i<n.plugins.length;i+=1)u.AMapUI.plugins.indexOf(n.plugins[i])==-1&&a.push(n.plugins[i]);if(t.AMapUI===o.failed)e("前次请求 AMapUI 失败");else if(t.AMapUI===o.notload){t.AMapUI=o.loading,u.AMapUI.version=n.version||u.AMapUI.version,i=u.AMapUI.version;var l=document.body||document.head,s=document.createElement("script");s.type="text/javascript",s.src="https://webapi.amap.com/ui/"+i+"/main.js",s.onerror=function(p){t.AMapUI=o.failed,e("请求 AMapUI 失败")},s.onload=function(){if(t.AMapUI=o.loaded,a.length)window.AMapUI.loadUI(a,function(){for(var p=0,f=a.length;p<f;p++){var M=a[p].split("/").slice(-1)[0];window.AMapUI[M]=arguments[p]}for(d();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()});else for(d();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},l.appendChild(s)}else t.AMapUI===o.loaded?n.version&&n.version!==u.AMapUI.version?e("不允许多个版本 AMapUI 混用"):a.length?window.AMapUI.loadUI(a,function(){for(var p=0,f=a.length;p<f;p++){var M=a[p].split("/").slice(-1)[0];window.AMapUI[M]=arguments[p]}d()}):d():n.version&&n.version!==u.AMapUI.version?e("不允许多个版本 AMapUI 混用"):r.AMapUI.push(function(p){p?e(p):a.length?window.AMapUI.loadUI(a,function(){for(var f=0,M=a.length;f<M;f++){var U=a[f].split("/").slice(-1)[0];window.AMapUI[U]=arguments[f]}d()}):d()})})}function I(n){return new Promise(function(d,e){if(t.Loca===o.failed)e("前次请求 Loca 失败");else if(t.Loca===o.notload){t.Loca=o.loading,u.Loca.version=n.version||u.Loca.version;var a=u.Loca.version,i=u.AMap.version.startsWith("2"),l=a.startsWith("2");if(i&&!l||!i&&l)e("JSAPI 与 Loca 版本不对应！！");else{i=u.key,l=document.body||document.head;var s=document.createElement("script");s.type="text/javascript",s.src="https://webapi.amap.com/loca?v="+a+"&key="+i,s.onerror=function(p){t.Loca=o.failed,e("请求 AMapUI 失败")},s.onload=function(){for(t.Loca=o.loaded,d();r.Loca.length;)r.Loca.splice(0,1)[0]()},l.appendChild(s)}}else t.Loca===o.loaded?n.version&&n.version!==u.Loca.version?e("不允许多个版本 Loca 混用"):d():n.version&&n.version!==u.Loca.version?e("不允许多个版本 Loca 混用"):r.Loca.push(function(p){p?e(p):e()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o;(function(n){n.notload="notload",n.loading="loading",n.loaded="loaded",n.failed="failed"})(o||(o={}));var u={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},r={AMap:[],AMapUI:[],Loca:[]},g=[],b=function(n){typeof n=="function"&&(t.AMap===o.loaded?n(window.AMap):g.push(n))};return{load:function(n){return new Promise(function(d,e){if(t.AMap==o.failed)e("");else if(t.AMap==o.notload){var a=n.key,i=n.version,l=n.plugins;a?(window.AMap&&location.host!=="lbs.amap.com"&&e("禁止多种API加载方式混用"),u.key=a,u.AMap.version=i||u.AMap.version,u.AMap.plugins=l||u.AMap.plugins,t.AMap=o.loading,i=document.body||document.head,window.___onAPILoaded=function(p){if(delete window.___onAPILoaded,p)t.AMap=o.failed,e(p);else for(t.AMap=o.loaded,A(n).then(function(){d(window.AMap)}).catch(e);g.length;)g.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+u.AMap.version+"&key="+a+"&plugin="+u.AMap.plugins.join(","),l.onerror=function(p){t.AMap=o.failed,e(p)},i.appendChild(l)):e("请填写key")}else if(t.AMap==o.loaded)if(n.key&&n.key!==u.key)e("多个不一致的 key");else if(n.version&&n.version!==u.AMap.version)e("不允许多个版本 JSAPI 混用");else{if(a=[],n.plugins)for(i=0;i<n.plugins.length;i+=1)u.AMap.plugins.indexOf(n.plugins[i])==-1&&a.push(n.plugins[i]);a.length?window.AMap.plugin(a,function(){A(n).then(function(){d(window.AMap)}).catch(e)}):A(n).then(function(){d(window.AMap)}).catch(e)}else if(n.key&&n.key!==u.key)e("多个不一致的 key");else if(n.version&&n.version!==u.AMap.version)e("不允许多个版本 JSAPI 混用");else{var s=[];if(n.plugins)for(i=0;i<n.plugins.length;i+=1)u.AMap.plugins.indexOf(n.plugins[i])==-1&&s.push(n.plugins[i]);b(function(){s.length?window.AMap.plugin(s,function(){A(n).then(function(){d(window.AMap)}).catch(e)}):A(n).then(function(){d(window.AMap)}).catch(e)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,u={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},r={AMap:[],AMapUI:[],Loca:[]}}}})})(w);var L=w.exports;const P=m(L);export{P as A,h as c,m as g};
