"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[499],{52606:(e,t,i)=>{i.d(t,{vF:()=>_,_D:()=>d,tB:()=>f,VO:()=>y,kr:()=>R}),i(36348);var n=i(32656),s=i(59472),r=i(93533),a=i(28449),o=i(41241),l=i(52937),p=i(61106);const u=5e-4,h=function(e,t){const i=(e.isWGS84||e.isWebMercator)&&(t.isWGS84||t.isWebMercator);return!(e.equals(t)||i)},c={3395:20037508.342789244,3410:17334193.943686873,3832:3339584.723798206,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,8858:7396237.374497803,8859:2465412.4581659334,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53025:7276828.3848298555,53031:10384677.558821043,53034:20015086.79602057,53036:7389443.187332862,53037:2463147.729110953,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54025:7311399.09166516,54031:10396310.810074743,54034:20037508.342789244,54050:808820.9223376509,54053:1920897.3915568967,54079:20037508.342789244,54080:20037508.342789244,54099:13524439.768288724,54100:20037508.342789244,54101:20037508.342789244,102038:4297258.582585486,102299:5013965.117483125};function d(e,t,i){if(!h(e.spatialReference,t))return null;if(!(0,a.kR)())throw new n.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");return i?(0,a.rS)(t,e.spatialReference,e):(0,a.rS)(e.spatialReference,t,e)}function y(e,t,i,s=null){if(e.spatialReference.equals(t))return e;const r=h(e.spatialReference,t);if(r&&!(0,a.kR)())throw new n.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");const p=i.center,u=new l.Z({xmin:p.x-e.x/2,xmax:p.x+e.x/2,ymin:p.y-e.y/2,ymax:p.y+e.y/2,spatialReference:e.spatialReference}),c=r?(0,a.iV)(u,t,s):(0,o.iV)(u,t);return null==c?null:{x:c.xmax-c.xmin,y:c.ymax-c.ymin}}function x(e,t=.01){return(0,r.c9)(e)?t/(0,r.c9)(e):0}function m(e,t,i=null,s=!0){const r=e.spatialReference;if(r.equals(t))return e;const l=h(r,t);if(l&&!(0,a.kR)())throw new n.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");const p=l?(0,a.iV)(e,t,i):(0,o.iV)(e,t);if(p&&s&&t.isGeographic){const[t,i]=b(r,!0),n=x(r);n&&null!=t&&null!=i&&(Math.abs(e.x-t)<n&&Math.abs(180-p.x)<u?p.x-=360:Math.abs(e.x-i)<n&&Math.abs(180+p.x)<u&&(p.x+=360))}return p}function f(e,t,i=null,n=!0){if(e.spatialReference.equals(t))return e;const r=function(e,t=!1){const i=v(e.spatialReference);if(!(0,s.pC)(i))return 0;const n=t?0:-i/2;return w(e.xmax,n,i,!0)-w(e.xmin,n,i,!1)}(e),a=v(e.spatialReference,!0);return(0,s.pC)(a)&&0!==r?function(e){const t=v(e[0].spatialReference);if(e.length<2||!(0,s.pC)(t))return e[0];let{xmin:i,xmax:n,ymin:r,ymax:a}=e[0];for(let i=1;i<e.length;i++){const s=e[i];n=s.xmax+t*i,r=Math.min(r,s.ymin),a=Math.max(a,s.ymax)}return new l.Z({xmin:i,xmax:n,ymin:r,ymax:a,spatialReference:e[0].spatialReference})}(e.clone().normalize().map((e=>g(e,t,i,n)))):g(e,t,i,n)}function g(e,t,i=null,s=!0){const r=e.spatialReference;if(r.equals(t))return e;const l=h(r,t);if(l&&!(0,a.kR)())throw new n.Z("rasterprojectionhelper-projectExtent","projection engine is not loaded");const c=l?(0,a.iV)(e,t,i):(0,o.iV)(e,t);let[d,y]=b(r,!0);if(c&&s&&r.isWebMercator&&t.isGeographic&&null!=d&&null!=y){const n=.001,s=1e3;if(Math.abs(e.xmin-d)<n&&Math.abs(y-e.xmax)>s&&Math.abs(180-c.xmax)<u){c.xmin=-180;const n=[];n.push(new p.Z(e.xmax,e.ymin,r)),n.push(new p.Z(e.xmax,(e.ymin+e.ymax)/2,r)),n.push(new p.Z(e.xmax,e.ymax,r));const s=n.map((e=>m(e,t,i))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));c.xmax=Math.max.apply(null,s)}if(Math.abs(e.xmax-y)<n&&Math.abs(d-e.xmin)>s&&Math.abs(180+c.xmin)<u){c.xmax=180;const n=[];n.push(new p.Z(e.xmin,e.ymin,r)),n.push(new p.Z(e.xmin,(e.ymin+e.ymax)/2,r)),n.push(new p.Z(e.xmin,e.ymax,r));const s=n.map((e=>m(e,t,i))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));c.xmin=Math.min.apply(null,s)}}[d,y]=b(t,!0);const f=x(t);return f&&null!=d&&null!=y&&(Math.abs(c.xmin-d)<f&&(c.xmin=d),Math.abs(c.xmax-y)<f&&(c.xmax=y)),c}function v(e,t=!1){const i=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*i:e.wkid&&e.isGeographic?360:2*c[e.wkid]||null}function b(e,t=!1){const i=[],n=v(e,t);return(0,s.pC)(n)&&(i.push(-n/2),i.push(n/2)),i}function w(e,t,i,n){let s=(e-t)/i;return s-Math.floor(s)!=0?s=Math.floor(s):n&&(s-=1),s}function R(e,t,i){const{storageInfo:n,pixelSize:r}=t;let a,o=!1;const{pyramidResolutions:l}=n;if((0,s.pC)(l)&&l.length){const n=(e.x+e.y)/2,s=l[l.length-1],u=(s.x+s.y)/2,h=(r.x+r.y)/2;if(n<=h)a=0;else if(n>=u)a=l.length,o=n/u>8;else{let e,t=h;for(let s=1;s<=l.length;s++){if(e=(l[s-1].x+l[s-1].y)/2,n<=e){n===e?a=s:"down"===i?(a=s-1,o=n/t>8):a="up"===i||n-t>e-n||n/t>2?s:s-1;break}t=e}}const c=0===a?r:l[a-1];return{pyramidLevel:a,pyramidResolution:new p.Z({x:c.x,y:c.y,spatialReference:t.spatialReference}),excessiveReading:o}}const u=Math.log(e.x/r.x)/Math.LN2,h=Math.log(e.y/r.y)/Math.LN2,c=t.storageInfo.maximumPyramidLevel||0;a="down"===i?Math.floor(Math.min(u,h)):"up"===i?Math.ceil(Math.max(u,h)):Math.round((u+h)/2),a<0?a=0:a>c&&(o=a>c+3,a=c);const d=2**a;return{pyramidLevel:a,pyramidResolution:new p.Z({x:d*t.nativePixelSize.x,y:d*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function _(e,t,i=512,n=!0){const{extent:s,spatialReference:a,pixelSize:o}=e,l=y(new p.Z({x:o.x,y:o.y,spatialReference:a}),t,s);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(l.x+l.y)/2,h=(0,r.c9)(t),c=u*h*96*39.37,d=t.isGeographic?256/i*295828763.7958547:256/i*591657527.591555;let x=!1;const m=f(s,t);n&&(t.isGeographic||t.isWebMercator)&&(x=m.xmin*m.xmax<0);let g,v=c;const b=1.001;if(x){v=d;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,i=e*(96*h*39.37),n=t.isGeographic?4326:3857;g=y(new p.Z({x:e,y:e,spatialReference:{wkid:n}}),a,m),g.x*=v/i,g.y*=v/i}else{g={x:o.x,y:o.y};const t=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let i=0;for(;v<d*(b/2)&&i<t;)i++,v*=2,g.x*=2,g.y*=2;Math.max(v,d)/Math.min(v,d)<=b&&(v=d)}const w=[v],R=[{x:g.x,y:g.y}],_=Math.min(70.5310735,c)/b;for(;v>=_;)v/=2,g.x/=2,g.y/=2,w.push(v),R.push({x:g.x,y:g.y});return{projectedPixelSize:l,scales:w,srcResolutions:R,isCustomTilingScheme:!x}}},81558:(e,t,i)=>{i.d(t,{y:()=>S});var n=i(56140),s=i(28293),r=i(32105),a=i(80621),o=i(79881),l=(i(95830),i(68055),i(36544),i(87566)),p=i(17149),u=i(58385);let h=class extends u.wq{};h=(0,n._)([(0,l.j)("esri.views.layers.support.ClipArea")],h);const c=h;var d;let y=d=class extends c{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new d({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,n._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,n._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,n._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,n._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],y.prototype,"version",null),y=d=(0,n._)([(0,l.j)("esri.views.layers.support.ClipRect")],y);const x=y;i(36348);var m,f=i(39718),g=i(56885),v=i(52937),b=i(53817);const w={base:f.Z,key:"type",typeMap:{extent:v.Z,polygon:b.Z}};let R=m=class extends c{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new m({geometry:this.geometry.clone()})}};(0,n._)([(0,o.Cb)({types:w,json:{read:g.im,write:!0}})],R.prototype,"geometry",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],R.prototype,"version",null),R=m=(0,n._)([(0,l.j)("esri.views.layers.support.Geometry")],R);const _=R;let C=class extends c{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,n._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],C.prototype,"version",null),C=(0,n._)([(0,l.j)("esri.views.layers.support.Path")],C);const M=C,j=s.Z.ofType({key:"type",base:c,typeMap:{rect:x,path:M,geometry:_}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new j,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,a.S1)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,a.S1)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,a.S1)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,a.S1)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,n=i.minScale,s=i.maxScale;if(null!=n&&null!=s){let i=!n,r=!s;!i&&e<=n&&(i=!0),!r&&e>=s&&(r=!0),t=i&&r}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,n._)([(0,o.Cb)({type:j,set(e){const t=(0,r.Z)(e,this._get("clips"),j);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"updating",null),(0,n._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,n._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},48164:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(56140),s=i(82677),r=i(35470),a=i(77204),o=i(35326),l=i(36544),p=i(75044),u=i(79881),h=(i(95830),i(68055),i(87566));let c=class extends((0,a.p)((0,o.I)((0,p.v)(r.Z.EventedMixin(s.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,n._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,n._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,n._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,n._)([(0,u.Cb)()],c.prototype,"visible",null),c=(0,n._)([(0,h.j)("esri.views.layers.LayerView")],c);const d=c},21707:(e,t,i)=>{i.d(t,{V:()=>a,e:()=>r});var n=i(59472),s=i(4665);async function r(e,t=e.popupTemplate){if(!(0,n.pC)(t))return[];const i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=t,{objectIdField:a,typeIdField:o,globalIdField:l,relationships:p}=e;if(i.includes("*"))return["*"];const u=r?await(0,s.CH)(e):[],h=(0,s.Q0)(e.fieldsIndex,[...i,...u]);return o&&h.push(o),h&&a&&e.fieldsIndex.has(a)&&-1===h.indexOf(a)&&h.push(a),h&&l&&e.fieldsIndex.has(l)&&-1===h.indexOf(l)&&h.push(l),p&&p.forEach((t=>{const{keyField:i}=t;h&&i&&e.fieldsIndex.has(i)&&-1===h.indexOf(i)&&h.push(i)})),h}function a(e,t){return e.popupTemplate?e.popupTemplate:(0,n.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,n.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);