"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[2386],{42386:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var o=r(56140),i=(r(36348),r(15988)),l=(r(99702),r(28293)),a=r(32656),n=r(82550),s=r(59472),y=r(43072),p=r(10103),u=r(15307),d=r(79881),c=(r(68055),r(95830),r(36544),r(30590)),m=r(87566),f=r(60538),b=r(28449),g=r(91535),S=r(27780),h=r(67912),w=r(94394),C=r(56700),O=r(53277),_=r(57407),N=r(78910),v=r(33716),J=r(10113),L=r(70834),T=r(5674),x=r(48142),Z=r(88083),M=r(44190),I=r(73032),R=r(52937);function j(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const D=new L.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),E=new L.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let F=class extends w.Z{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,o._)([(0,d.Cb)({readOnly:!0})],F.prototype,"sublayers",null),(0,o._)([(0,d.Cb)()],F.prototype,"layer",void 0),(0,o._)([(0,d.Cb)({readOnly:!0})],F.prototype,"visibilityMode",void 0),F=(0,o._)([(0,m.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],F);const G=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new T.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new x.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new Z.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new Z.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new M.Z).toJSON()}];let P=class extends((0,_.h)((0,J.M)((0,N.q)((0,v.I)((0,y.R)(C.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=I.Z.WGS84,this.sublayers=new l.Z(G.map((e=>new F({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!j(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!j(t))return null;const o=t.layers.map((e=>{const t=new h.default;return t.read(e,r),t}));return new l.Z({items:o})}readLegacyfeatureCollectionJSON(e,t){return j(t)?(0,n.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new R.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:I.Z.WGS84});const r=I.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?R.Z.fromJSON(r).union(e):e}),new R.Z({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?I.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):I.Z.WGS84}readSublayers(e,t,r){if(j(t))return null;const o=[];for(let e=0;e<t.layers.length;e++){var a;const{layerDefinition:r,featureSet:l}=t.layers[e],n=null!=(a=r.geometryType)?a:l.geometryType,s=G.find((e=>{var t,o,i;return n===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(o=t.renderer)||null==(i=o.symbol)?void 0:i.type)===e.identifyingSymbol.type}));if(s){const e=new F({id:s.layerId,title:r.name,layer:this,graphics:l.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>i.Z.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(e)}}return new l.Z(o)}writeSublayers(e,t,r,o){const{minScale:i,maxScale:l}=this;if((0,s.Wi)(e))return;const n=e.some((e=>e.graphics.length>0));var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(n&&(null==o||null==(y=o.messages)||y.push(new a.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const u=[];let d=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,s.pC)(e.geometry)){d=e.geometry.spatialReference.toJSON();break e}for(const t of G){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(u,r,t,i,l,d,o)}(0,p.RB)("featureCollection.layers",u,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,n.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,s.Wi)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const o of r.graphics)if((0,s.pC)(o.geometry)){const r=o.geometry;e?(0,S.fS)(r.spatialReference,e)||((0,b.Up)(r.spatialReference,e)||(0,b.kR)()||await(0,b.zD)(),o.geometry=(0,b.iV)(r,e)):e=r.spatialReference,t.push(o)}const r=await(0,g.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return(0,s.Wi)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,i,l,a){const y=[];if(!(0,s.Wi)(t)){for(const e of t.graphics)this._writeMapNote(y,e,r.geometryType,a);this._normalizeObjectIds(y,D),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,n.d9)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[D.toJSON(),E.toJSON()],spatialReference:l},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if((0,s.Wi)(t))return;const{geometry:i,symbol:l,popupTemplate:a}=t;if((0,s.Wi)(i))return;var n,y;if(i.type!==r)return void(null==o||null==(n=o.messages)||n.push(new u.Z("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if((0,s.Wi)(l))return void(null==o||null==(y=o.messages)||y.push(new u.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:i.toJSON(),symbol:l.toJSON()};(0,s.pC)(a)&&(p.popupInfo=a.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,O.S)(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"capabilities",void 0),(0,o._)([(0,c.r)(["portal-item","web-map"],"capabilities",["layers"])],P.prototype,"readCapabilities",null),(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"featureCollections",void 0),(0,o._)([(0,c.r)(["web-map","portal-item"],"featureCollections",["layers"])],P.prototype,"readFeatureCollections",null),(0,o._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],P.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,c.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],P.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],P.prototype,"featureCollectionType",void 0),(0,o._)([(0,d.Cb)({json:{write:!1}})],P.prototype,"fullExtent",void 0),(0,o._)([(0,c.r)(["web-map","portal-item"],"fullExtent",["layers"])],P.prototype,"readFullExtent",null),(0,o._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],P.prototype,"legendEnabled",void 0),(0,o._)([(0,d.Cb)({type:["show","hide"]})],P.prototype,"listMode",void 0),(0,o._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"minScale",void 0),(0,o._)([(0,c.r)(["web-map","portal-item"],"minScale",["layers"])],P.prototype,"readMinScale",null),(0,o._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"maxScale",void 0),(0,o._)([(0,c.r)(["web-map","portal-item"],"maxScale",["layers"])],P.prototype,"readMaxScale",null),(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"multipointLayer",null),(0,o._)([(0,d.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],P.prototype,"operationalLayerType",void 0),(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"pointLayer",null),(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"polygonLayer",null),(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"polylineLayer",null),(0,o._)([(0,d.Cb)({type:I.Z})],P.prototype,"spatialReference",void 0),(0,o._)([(0,c.r)(["web-map","portal-item"],"spatialReference",["layers"])],P.prototype,"readSpatialReference",null),(0,o._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],P.prototype,"sublayers",void 0),(0,o._)([(0,c.r)("web-map","sublayers",["layers"])],P.prototype,"readSublayers",null),(0,o._)([(0,f.c)("web-map","sublayers")],P.prototype,"writeSublayers",null),(0,o._)([(0,d.Cb)({readOnly:!0})],P.prototype,"textLayer",null),(0,o._)([(0,d.Cb)()],P.prototype,"title",void 0),(0,o._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),P=(0,o._)([(0,m.j)("esri.layers.MapNotesLayer")],P);const W=P},53277:(e,t,r)=>{r.d(t,{S:()=>i,X:()=>o});const o=1;function i(e,t){let r=0;for(const i of t){var o;const t=null==(o=i.attributes)?void 0:o[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);