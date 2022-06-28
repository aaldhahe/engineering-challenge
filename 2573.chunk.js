"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[2573],{85987:(e,t,r)=>{r.d(t,{QM:()=>a,hy:()=>i,uI:()=>s});var n=r(7584),o=r(33655);const s=(()=>{if(!("document"in n.Z))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,r=>{t.clearRect(0,0,1,e.height);const n=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of r.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function a(e,t,r,n){const{blurRadius:o,fieldOffset:s,field:a}=t,i=new Float64Array(r*n),l=function(e){const t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1);for(let o=0;o<=n.length;o++)n[o]=Math.exp(-((o-t)**2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}(o),c=Math.round(3*o);let d,u=Number.NEGATIVE_INFINITY;const h=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(a,s),f=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(f.has(t))continue;f.add(t);const o=e.readLegacyPointGeometry(),s=128;if(o.x<-s||o.x>=r+s||o.y<-s||o.y>n+s)continue;const a=+h(e),p=Math.round(o.x)-c,y=Math.round(o.y)-c,m=Math.max(0,p),w=Math.max(0,y),M=Math.min(n,Math.round(o.y)+c),g=Math.min(r,Math.round(o.x)+c);for(let e=w;e<M;e++){const t=l[e-y];for(let n=m;n<g;n++){const o=l[n-p];d=i[e*r+n]+=t*o*a,d>u&&(u=d)}}}}return{matrix:i.buffer,max:u}}function i(e,t,r,n,s,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const i=e.getImageData(0,0,t,t);r&&n&&i.data.set(new Uint8ClampedArray(function(e,t,r,n,s){const a=new Uint32Array(e*e),i="buffer"in t?t:new Float64Array(t),l="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),c=l.length/(s-n);for(let e=0;e<i.length;e++){const t=i[e],r=Math.floor((t-n)*c);a[e]=l[(0,o.uZ)(r,0,l.length-1)]}return a.buffer}(t,r,n,s,a))),e.putImageData(i,0,0)}},31887:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(56140),o=r(77204),s=r(79881),a=(r(95830),r(68055),r(36544),r(87566));let i=class extends o.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,s.Cb)({readOnly:!0})],i.prototype,"supportsTileUpdates",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"remoteClient",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"service",void 0),(0,n._)([(0,s.Cb)()],i.prototype,"spatialReference",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"tileInfo",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"tileStore",void 0),i=(0,n._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],i);const l=i},2573:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(56140),o=(r(95830),r(59472)),s=(r(79881),r(68055),r(36544),r(87566)),a=r(23229),i=r(85987),l=r(71286),c=r(31887),d=r(80964);class u{constructor(e,t){this.offset=e,this.extent=t}}let h=class extends c.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&(0,a.Hg)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);if((0,o.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&n.set(t.addOrUpdate.instance,t),t.end){const t=[],n=function(e){const t=e.key,r=new Map,n=256,o=l.I_,s=e.tileInfoView.tileInfo.isWrappable;return r.set((0,d.M)(t,-1,-1,s).id,new u([-o,-o],[o-n,o-n,o,o])),r.set((0,d.M)(t,0,-1,s).id,new u([0,-o],[0,o-n,o,o])),r.set((0,d.M)(t,1,-1,s).id,new u([o,-o],[0,o-n,n,o])),r.set((0,d.M)(t,-1,0,s).id,new u([-o,0],[o-n,0,o,o])),r.set((0,d.M)(t,1,0,s).id,new u([o,0],[0,0,n,o])),r.set((0,d.M)(t,-1,1,s).id,new u([-o,o],[o-n,0,o,n])),r.set((0,d.M)(t,0,1,s).id,new u([0,o],[0,0,o,n])),r.set((0,d.M)(t,1,1,s).id,new u([o,o],[0,0,n,n])),r}(e);this._tileKeyToFeatureSets.forEach(((r,s)=>{if(s===e.key.id)r.forEach((e=>(0,o.Po)(e.addOrUpdate,(e=>t.push(e)))));else if(n.has(s)){const e=n.get(s),[a,i]=e.offset;r.forEach((e=>(0,o.Po)(e.addOrUpdate,(e=>{const r=e.transform(a,i,1,1);t.push(r)}))))}}));const s=(0,i.QM)(t,this._schema.mesh,512,512),a={tileKey:e.key.id,intensityInfo:s},c=[s.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",a,{...r,transferList:c})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};h=(0,n._)([(0,s.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);const f=h},80964:(e,t,r)=>{function n(e,t,r,n){const o=e.clone(),s=1<<o.level,a=o.col+t,i=o.row+r;return n&&a<0?(o.col=a+s,o.world-=1):a>=s?(o.col=a-s,o.world+=1):o.col=a,o.row=i,o}r.d(t,{M:()=>n}),r(75191)}}]);