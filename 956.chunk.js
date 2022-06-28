"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[956],{50956:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>y});var t=r(54721),n=r(32656),l=r(59472),s=r(10923),i=r(97849),u=r(6357);async function y(e){var a;const t=null==(a=e.properties)?void 0:a.customParameters,s=await async function(e,a){let r=(0,i.Qc)(e);if((0,l.Wi)(r)&&(r=await d(e,a)),(0,l.Wi)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:s}=r;let y;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":y=null!=s?"FeatureLayer":async function(e,a){return(await h(e,a)).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":y=h(e,a).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!a||"LERC"!==a.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":y=h(r.url.path,a).then((e=>{const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const r=e.layers[0].layerType;if(null!=a[r])return a[r]}return"SceneLayer"}));break;default:y=o[t]}const c="FeatureServer"===t,b={parsedUrl:r,Constructor:null,layerOrTableId:c?s:null,sublayerIds:null,tableIds:null},w=await y;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==s){const r=await f(e,t,a);if(c&&(b.sublayerInfos=r.layerInfos,b.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length)b.sublayerIds=r.layerIds,b.tableIds=r.tableIds;else if(c){var p,L;b.layerOrTableId=null!=(p=r.layerIds[0])?p:r.tableIds[0],b.sourceJSON=null!=(L=r.layerInfos[0])?L:r.tableInfos[0]}}return b.Constructor=await async function(e){return(0,u.T[e])()}(w),b}(e.url,t),y={...e.properties,url:e.url};if(!s.sublayerIds)return null!=s.layerOrTableId&&(y.layerId=s.layerOrTableId,y.sourceJSON=s.sourceJSON),new s.Constructor(y);const c=new(0,(await r.e(9647).then(r.bind(r,19647))).default)({title:s.parsedUrl.title});return function(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(t)&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,o(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,o(a.tableInfos,r));e.tables.add(n)}))}(c,s,y),c}function o(e,a){return e?e.find((e=>e.id===a)):null}async function d(e,a){var r;const t=await h(e,a);let n=null,u=null;const y=t.type;if("Feature Layer"===y||"Table"===y?(n="FeatureServer",u=t.id):"indexedVector"===y?n="VectorTileServer":t.hasOwnProperty("mapName")?n="MapServer":t.hasOwnProperty("bandCount")&&t.hasOwnProperty("pixelSizeX")?n="ImageServer":t.hasOwnProperty("maxRecordCount")&&t.hasOwnProperty("allowGeometryUpdates")?n="FeatureServer":t.hasOwnProperty("streamUrls")?n="StreamServer":c(t)?(n="SceneServer",u=t.id):t.hasOwnProperty("layers")&&c(null==(r=t.layers)?void 0:r[0])&&(n="SceneServer"),!n)return null;const o=null!=u?(0,i.DR)(e):null;return{title:(0,l.pC)(o)&&t.name||(0,s.vt)(e),serverType:n,sublayer:u,url:{path:(0,l.pC)(o)?o.serviceUrl:(0,s.mN)(e).path}}}function c(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function f(e,a,r){var t,n;let l,s=!1;if("FeatureServer"===a){const a=await async function(e,a){var r,t;let n=await h(e,a);n=n||{},n.layers=(null==(r=n.layers)?void 0:r.filter(b))||[];const l={serviceJSON:n};if(n.currentVersion<10.5)return l;const s=await h(e+"/layers",a);return l.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(b))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,r);s=!!a.layersJSON,l=a.layersJSON||a.serviceJSON}else l=await h(e,r);const i=null==(t=l)?void 0:t.layers,u=null==(n=l)?void 0:n.tables;return{layerIds:(null==i?void 0:i.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:s?i:[],tableInfos:s?u:[]}}function b(e){return!e.type||"Feature Layer"===e.type}async function h(e,a){return(await(0,t.default)(e,{responseType:"json",query:{f:"json",...a}})).data}},6357:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(7945).then(r.bind(r,87945))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(7586),r.e(1318)]).then(r.bind(r,31318))).default,CSVLayer:async()=>(await r.e(7337).then(r.bind(r,77337))).default,ElevationLayer:async()=>(await r.e(9522).then(r.bind(r,29522))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,67912))).default,GroupLayer:async()=>(await r.e(9647).then(r.bind(r,19647))).default,GeoRSSLayer:async()=>(await r.e(6222).then(r.bind(r,56222))).default,ImageryLayer:async()=>(await r.e(3712).then(r.bind(r,53712))).default,ImageryTileLayer:async()=>(await r.e(6418).then(r.bind(r,66418))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(7586),r.e(9640)]).then(r.bind(r,69640))).default,KMLLayer:async()=>(await r.e(4334).then(r.bind(r,94334))).default,MapImageLayer:async()=>(await r.e(8309).then(r.bind(r,8309))).default,MapNotesLayer:async()=>(await r.e(2386).then(r.bind(r,42386))).default,OGCFeatureLayer:async()=>(await r.e(382).then(r.bind(r,382))).default,OpenStreetMapLayer:async()=>(await r.e(117).then(r.bind(r,50117))).default,PointCloudLayer:async()=>(await r.e(8342).then(r.bind(r,78342))).default,RouteLayer:async()=>(await r.e(3504).then(r.bind(r,53504))).default,SceneLayer:async()=>(await Promise.all([r.e(7586),r.e(3687)]).then(r.bind(r,93687))).default,StreamLayer:async()=>(await r.e(2416).then(r.bind(r,2416))).default,TileLayer:async()=>(await r.e(6577).then(r.bind(r,26577))).default,UnknownLayer:async()=>(await r.e(2095).then(r.bind(r,32095))).default,UnsupportedLayer:async()=>(await r.e(1983).then(r.bind(r,51983))).default,VectorTileLayer:async()=>(await Promise.all([r.e(6017),r.e(5247)]).then(r.bind(r,57680))).default,WebTileLayer:async()=>(await r.e(5874).then(r.bind(r,95874))).default,WFSLayer:async()=>(await r.e(1811).then(r.bind(r,11811))).default,WMSLayer:async()=>(await r.e(5824).then(r.bind(r,15824))).default,WMTSLayer:async()=>(await r.e(2853).then(r.bind(r,82853))).default}}}]);