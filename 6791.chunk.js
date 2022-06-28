"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[6791],{26791:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(56140),r=i(79881),a=(i(95830),i(68055),i(36544),i(87566)),n=(i(91494),i(84570)),l=(i(86920),i(88378),i(5627),i(8634),i(74038),i(23956));class o extends l.Z{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}doRender(e){const t=this.createRenderParams(e),{context:i,painter:s,profiler:r}=t;this._prevFBO=i.getBoundFramebufferObject(),r.recordContainerStart(this.name);const a=this._getFbo(t),n=s.getRenderTarget();i.bindFramebuffer(a),s.setRenderTarget(a),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(e);for(const e of this.children)e.processRender(t);for(const t of this.children)t.afterRender(e);s.setRenderTarget(n),i.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),s.blitTexture(i,a.colorTexture,9728),s.compositeLayer(t,this.computedOpacity),r.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:i}=e,{width:s,height:r}=t.getViewport();if(s!==this._lastWidth||r!==this._lastHeight)if(this._lastWidth=s,this._lastHeight=r,this._renderTarget)this._renderTarget.resize(s,r);else{const e={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:s,height:r},a={colorTarget:0,depthStencilTarget:3};this._renderTarget=new n.Z(t,a,e,i.getSharedStencilBuffer())}return this._renderTarget}}var h=i(81558),d=i(28293),p=i(32105),y=i(48164);let u=class extends y.Z{constructor(e){super(e),this.type="group",this.layerViews=new d.Z}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}set layerViews(e){this._set("layerViews",(0,p.Z)(e,this._get("layerViews")))}isUpdating(){return this.layerViews.some((e=>e.updating))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((t=>t.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const t=this._findLayerViewForLayer(e);return t&&t.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((t=>{t.visible=t===e})))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(t=>this._layerViewVisibleHandler(t,e)),!0))).toArray(),"grouplayerview:visible");const t=e.added[e.added.length-1];let i=null;t&&t.visible&&(i=t),this._enforceVisibility(i)}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating()}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((t=>{t.visible=e}));break}case"exclusive":this._enforceExclusiveVisibility(e)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(e,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&t)}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}_updateUpdating(){this.notifyChange("updating")}};(0,s._)([(0,r.Cb)({cast:p.R})],u.prototype,"layerViews",null),(0,s._)([(0,r.Cb)()],u.prototype,"view",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),u=(0,s._)([(0,a.j)("esri.views.layers.GroupLayerView")],u);const c=u;let g=class extends((0,h.y)(c)){constructor(){super(...arguments),this.container=new o}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}hitTest(e,t){return null}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};g=(0,s._)([(0,a.j)("esri.views.2d.layers.GroupLayerView2D")],g);const v=g},81558:(e,t,i)=>{i.d(t,{y:()=>S});var s=i(56140),r=i(28293),a=i(32105),n=i(80621),l=i(79881),o=(i(95830),i(68055),i(36544),i(87566)),h=i(17149),d=i(58385);let p=class extends d.wq{};p=(0,s._)([(0,o.j)("esri.views.layers.support.ClipArea")],p);const y=p;var u;let c=u=class extends y{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"version",null),c=u=(0,s._)([(0,o.j)("esri.views.layers.support.ClipRect")],c);const g=c;i(36348);var v,b=i(39718),_=i(56885),w=i(52937),f=i(53817);const V={base:b.Z,key:"type",typeMap:{extent:w.Z,polygon:f.Z}};let m=v=class extends y{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new v({geometry:this.geometry.clone()})}};(0,s._)([(0,l.Cb)({types:V,json:{read:_.im,write:!0}})],m.prototype,"geometry",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"version",null),m=v=(0,s._)([(0,o.j)("esri.views.layers.support.Geometry")],m);const C=m;let O=class extends y{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],O.prototype,"path",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],O.prototype,"version",null),O=(0,s._)([(0,o.j)("esri.views.layers.support.Path")],O);const R=O,L=r.Z.ofType({key:"type",base:y,typeMap:{rect:g,path:R,geometry:C}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new L,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new h.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,n.S1)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,n.S1)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,n.S1)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,n.S1)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,l.Cb)({type:L,set(e){const t=(0,a.Z)(e,this._get("clips"),L);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updating",null),(0,s._)([(0,l.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,o.j)("esri.views.2d.layers.LayerView2D")],t),t}},48164:(e,t,i)=>{i.d(t,{Z:()=>u});var s=i(56140),r=i(82677),a=i(35470),n=i(77204),l=i(35326),o=i(36544),h=i(75044),d=i(79881),p=(i(95830),i(68055),i(87566));let y=class extends((0,n.p)((0,l.I)((0,h.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],y.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],y.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],y.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],y.prototype,"visible",null),y=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],y);const u=y}}]);