"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[9640],{33657:(e,t,i)=>{i.d(t,{B:()=>m});var r=i(59472),o=i(96054),n=i(10923),s=i(57002),a=i(53175),p=i(9678),l=i(79881);function c(e){return y[function(e){return e instanceof Blob?e.type:function(e){const t=(0,n.Ml)(e);return f[t]||d}(e.url)}(e)]||u}const y={},d="text/plain",u=y[d],f={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in f)y[f[e]]=e;var h=i(37704);function m(e){const t=(0,r.pC)(e)&&e.origins?e.origins:[void 0];return(i,s)=>{const y=function(e,t,i){if((0,r.pC)(e)&&"resource"===e.type)return function(e,t,i){const s=(0,a.VZ)(t,i);return{type:String,read:(e,t,i)=>{const r=(0,h.r)(e,t,i);return s.type===String?r:"function"==typeof s.type?new s.type({url:r}):void 0},write:{writer(t,a,l,y){if(!y||!y.resources)return"string"==typeof t?void(a[l]=(0,h.t)(t,y)):void(a[l]=t.write({},y));const d=function(e){return(0,r.Wi)(e)?null:"string"==typeof e?e:e.url}(t),u=d?(0,h.t)(d,{...y,verifyItemRelativeUrls:y&&y.verifyItemRelativeUrls?{writtenUrls:y.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,f=s.type!==String&&(!(0,o.l)(this)||y&&y.origin&&this.originIdOf(i)>(0,p.M9)(y.origin));y&&y.portalItem&&(0,r.pC)(u)&&!(0,n.YP)(u)?f?function(e,t,i,r,o,s,a,p){const l=a.portalItem.resourceFromPath(r),y=w(i,r,a);c(y)===(0,n.Ml)(l.path)?(v(e,t,l,y,a.resources.toUpdate),o[s]=r):g(e,t,i,r,o,s,a,p)}(this,i,t,u,a,l,y,e):function(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}(u,a,l,y):y&&y.portalItem&&((0,r.Wi)(u)||(0,r.pC)((0,h.i)(u))||(0,n.jc)(u)||f)?g(this,i,t,u,a,l,y,e):a[l]=u}}}}(e,t,i);switch((0,r.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=h.p;return{read:e,write:t}}}}(e,i,s);for(const e of t){const t=(0,l.CJ)(i,e,s);for(const e in y)t[e]=y[e]}}}function g(e,t,o,a,p,l,y,d){const u=(0,s.D)(),f=w(o,a,y),h=(0,n.v_)((0,r.U2)(d,"prefix"),u),m=`${h}.${c(f)}`,g=y.portalItem.resourceFromPath(m);(0,n.jc)(a)&&y.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(i.bind(i,54721))).default,{data:r}=await t(e,{responseType:"blob"});return r}(a).then((e=>{g.path=`${h}.${c(e)}`,p[l]=g.itemRelativeUrl})).catch((()=>{}))),v(e,t,g,f,y.resources.toAdd),p[l]=g.itemRelativeUrl}function v(e,t,i,r,o){o.push({resource:i,content:r,finish:i=>{!function(e,t,i){"string"==typeof e[t]?e[t]=i.url:e[t].url=i.url}(e,t,i)}})}function w(e,t,i){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}},69640:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var r,o=i(56140),n=i(32656),s=i(59691),a=i(59472),p=i(43072),l=i(39105),c=i(80621),y=i(79881),d=(i(95830),i(68055),i(36544),i(30590)),u=i(87566),f=i(33657),h=i(56700),m=i(87889),g=i(48899),v=i(78910),w=i(33716),_=i(10113),S=i(61393),b=i(18152),C=i(54209),I=i(54721),O=i(28293),x=i(58385),T=i(10923),R=(i(36348),i(82550)),U=i(15307),j=i(60538),M=i(28449),N=i(53817);let L=r=class extends x.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,M.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new U.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new N.Z;(0,M.Wt)(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new r({geometry:(0,R.d9)(this.geometry),type:this.type})}};(0,o._)([(0,y.Cb)({type:N.Z}),(0,f.B)()],L.prototype,"geometry",void 0),(0,o._)([(0,j.c)(["web-scene","portal-item"],"geometry")],L.prototype,"writeGeometry",null),(0,o._)([(0,y.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,f.B)()],L.prototype,"type",void 0),L=r=(0,o._)([(0,u.j)("esri.layers.support.SceneModification")],L);const P=L;var J;let Z=J=class extends((0,x.eC)(O.Z.ofType(P))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new J({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const i of e)this.add(P.fromJSON(i,t))}static fromJSON(e,t){const i=new J;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:(0,T.mN)(e),origin:"service"},o=await(0,I.default)(e,{responseType:"json",signal:(0,a.U2)(i,"signal")}),n=t.toJSON(),s=[];for(const e of o.data)s.push(P.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},r));return new J({url:e,items:s})}};(0,o._)([(0,y.Cb)({type:String})],Z.prototype,"url",void 0),Z=J=(0,o._)([(0,u.j)("esri.layers.support.SceneModifications")],Z);const V=Z;var D=i(37704);let z=class extends((0,S.V)((0,g.Y)((0,v.q)((0,w.I)((0,_.M)((0,p.R)((0,m.V)(h.Z)))))))){constructor(...e){super(...e),this.handles=new s.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,c.on)(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:(0,D.f)(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,a.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,l.r9)(e)}if(await this._fetchService(t),(0,a.pC)(this._modificationsSource)){const t=await V.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,a.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,o._)([(0,y.Cb)({type:String,readOnly:!0})],z.prototype,"geometryType",void 0),(0,o._)([(0,y.Cb)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,o._)([(0,y.Cb)({type:["IntegratedMeshLayer"]})],z.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,o._)([(0,y.Cb)({type:C.U4,readOnly:!0})],z.prototype,"nodePages",void 0),(0,o._)([(0,y.Cb)({type:[C.QI],readOnly:!0})],z.prototype,"materialDefinitions",void 0),(0,o._)([(0,y.Cb)({type:[C.Yh],readOnly:!0})],z.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,y.Cb)({type:[C.H3],readOnly:!0})],z.prototype,"geometryDefinitions",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],z.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,y.Cb)({type:V}),(0,f.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],z.prototype,"modifications",void 0),(0,o._)([(0,d.r)(["web-scene","portal-item"],"modifications")],z.prototype,"readModifications",null),(0,o._)([(0,y.Cb)(b.PV)],z.prototype,"elevationInfo",void 0),(0,o._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],z.prototype,"path",void 0),z=(0,o._)([(0,u.j)("esri.layers.IntegratedMeshLayer")],z);const A=z}}]);