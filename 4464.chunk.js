"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[4464],{42766:(t,e,i)=>{i.d(e,{Z:()=>m});var s,l=i(56140),n=(i(95830),i(32656)),r=i(58385),o=i(82550),a=i(36544),h=i(59472),f=i(79881),c=i(60263),u=i(87566);const p=a.Z.getLogger("esri.layers.support.PixelBlock");let x=s=class extends r.wq{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(t,e){return new(s.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"u32":e=Uint32Array;break;case"f32":e=Float32Array;break;case"f64":e=Float64Array;break;case"c64":case"c128":case"unknown":e=Float32Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}getPlaneCount(){return this.pixels&&this.pixels.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new n.Z("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let e=0;if(t)for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||"f64"===t||"f32"===t)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,l]=e,n=this.pixels,r=this.width*this.height,o=n.length;let a,h,f;const c=[];for(let e=0;e<o;e++){f=s.createEmptyBand(t,r),a=n[e];for(let t=0;t<r;t++)h=a[t],f[t]=h>l?l:h<i?i:h;c.push(f)}this.pixels=c,this.pixelType=t}extractBands(t){if((0,h.Wi)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;const e=this.pixels.length,i=t.some((t=>t>=this.pixels.length)),l=e===t.length&&!t.some(((t,e)=>t!==e));return i||l?this:new s({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>this.pixels[t])),statistics:this.statistics&&t.map((t=>this.statistics[t]))})}clone(){const t=new s({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=s.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const s=this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=s?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=(0,o.d9)(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:s}=this;if(!t||!s||!s.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let l,n,r,o;l=n=r=s[0],s.length>=3?(n=s[1],r=s[2]):2===s.length&&(n=s[1]);const a=new Uint32Array(t),h=this.width*this.height;if(l.length===h)if(e&&e.length===h)if(i)for(o=0;o<h;o++)e[o]&&(a[o]=e[o]<<24|r[o]<<16|n[o]<<8|l[o]);else for(o=0;o<h;o++)e[o]&&(a[o]=255<<24|r[o]<<16|n[o]<<8|l[o]);else for(o=0;o<h;o++)a[o]=255<<24|r[o]<<16|n[o]<<8|l[o];else p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:s}=this;if(!t||!e||!e.length)return void p.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const l=this.pixelType;let n=1,r=0,o=1;if(s&&s.length>0)r=s.map((t=>t.minValue)).reduce(((t,e)=>Math.min(t,e))),o=s.map((t=>t.maxValue-t.minValue)).reduce(((t,e)=>Math.max(t,e))),n=255/o;else{let t=255;"s8"===l?(r=-128,t=127):"u16"===l?t=65535:"s16"===l?(r=-32768,t=32767):"u32"===l?t=4294967295:"s32"===l?(r=-2147483648,t=2147483647):"f32"===l?(r=-34e38,t=34e38):"f64"===l&&(r=-Number.MAX_VALUE,t=Number.MAX_VALUE),n=255/(t-r)}const a=new Uint32Array(t),h=this.width*this.height;let f,c,u,x,m;if(f=c=u=e[0],f.length!==h)return p.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(c=e[1],e.length>=3&&(u=e[2]),i&&i.length===h)for(x=0;x<h;x++)i[x]&&(a[x]=255<<24|(u[x]-r)*n<<16|(c[x]-r)*n<<8|(f[x]-r)*n);else for(x=0;x<h;x++)a[x]=255<<24|(u[x]-r)*n<<16|(c[x]-r)*n<<8|(f[x]-r)*n;else if(i&&i.length===h)for(x=0;x<h;x++)m=(f[x]-r)*n,i[x]&&(a[x]=255<<24|m<<16|m<<8|m);else for(x=0;x<h;x++)m=(f[x]-r)*n,a[x]=255<<24|m<<16|m<<8|m}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let s,l,n,r;s=l=n=e[0],e.length>=3?(l=e[1],n=e[2]):2===e.length&&(l=e[1]);const o=this.width*this.height;if(s.length!==o)return p.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let a=0;if(i&&i.length===o)for(r=0;r<o;r++)t[a++]=s[r],t[a++]=l[r],t[a++]=n[r],t[a++]=1&i[r];else for(r=0;r<o;r++)t[a++]=s[r],t[a++]=l[r],t[a++]=n[r],t[a++]=1}_calculateBandStatistics(t,e){let i=1/0,s=-1/0;const l=t.length;let n,r=0;if(e)for(n=0;n<l;n++)e[n]&&(r=t[n],i=r<i?r:i,s=r>s?r:s);else for(n=0;n<l;n++)r=t[n],i=r<i?r:i,s=r>s?r:s;return{minValue:i,maxValue:s}}};(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"width",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"height",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"pixelType",void 0),(0,l._)([(0,c.p)("pixelType")],x.prototype,"castPixelType",null),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"validPixelCount",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"mask",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"maskIsAlpha",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"pixels",void 0),(0,l._)([(0,f.Cb)({json:{write:!0}})],x.prototype,"statistics",void 0),x=s=(0,l._)([(0,u.j)("esri.layers.support.PixelBlock")],x);const m=x},44464:(t,e,i)=>{i.d(e,{Uk:()=>v,SJ:()=>o,Pz:()=>r,oc:()=>f,hE:()=>h,Hv:()=>a,qF:()=>n,XV:()=>u,us:()=>d,Kh:()=>x,zp:()=>p,Vl:()=>b,dy:()=>c});var s=i(42766);const l=function(t){return t&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0};function n(t,e){if(null==e||!e.length||!l(t))return t;const i=t.pixels.length;return e&&e.some((t=>t>=i))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some(((t,e)=>t!==e))?new s.Z({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((e=>t.pixels[e])),statistics:t.statistics&&e.map((e=>t.statistics[e]))}):t}function r(t){if(!t)return;const e=t.colormap;if(!e||0===e.length)return;const i=e.sort(((t,e)=>t[0]-e[0]));let s=0;i[0][0]<0&&(s=i[0][0]);const l=Math.max(256,i[i.length-1][0]-s+1),n=new Uint8Array(4*l),r=[];let o,a=0,h=0;const f=5===i[0].length;if(l>65536)return i.forEach((t=>{r[t[0]-s]=f?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:r,offset:s,alphaSpecified:f};if(t.fillUnspecified)for(o=i[h],a=o[0]-s;a<l;a++)n[4*a]=o[1],n[4*a+1]=o[2],n[4*a+2]=o[3],n[4*a+3]=f?o[4]:255,a===o[0]-s&&(o=h===i.length-1?o:i[++h]);else for(a=0;a<i.length;a++)o=i[a],h=4*(o[0]-s),n[h]=o[1],n[h+1]=o[2],n[h+2]=o[3],n[h+3]=f?o[4]:255;return{indexedColormap:n,offset:s,alphaSpecified:f}}function o(t,e){if(!l(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;const i=t.clone(),s=i.pixels;let n=i.mask;const r=i.width*i.height;if(1!==s.length)return t;const{indexedColormap:o,indexed2DColormap:a,offset:h,alphaSpecified:f}=e,c=o.length-1;let u=0;const p=s[0],x=new Uint8Array(p.length),m=new Uint8Array(p.length),d=new Uint8Array(p.length);let g,y=0;if(o)if(n)for(u=0;u<r;u++)n[u]&&(y=4*(p[u]-h),y<h||y>c?n[u]=0:(x[u]=o[y],m[u]=o[y+1],d[u]=o[y+2],n[u]=o[y+3]));else{for(n=new Uint8Array(r),u=0;u<r;u++)y=4*(p[u]-h),y<h||y>c?n[u]=0:(x[u]=o[y],m[u]=o[y+1],d[u]=o[y+2],n[u]=o[y+3]);i.mask=n}else if(n)for(u=0;u<r;u++)n[u]&&(g=a[p[u]],x[u]=g[0],m[u]=g[1],d[u]=g[2],n[u]=g[3]);else{for(n=new Uint8Array(r),u=0;u<r;u++)g=a[p[u]],x[u]=g[0],m[u]=g[1],d[u]=g[2],n[u]=g[3];i.mask=n}return i.pixels=[x,m,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function a(t){if(!l(t))return null;t.statistics||t.updateStatistics();const{pixels:e,mask:i,pixelType:s,statistics:n}=t,r=t.width*t.height,o=e.length;let a,h,f,c,u;const p=[],x=[];let m,d,g,y,w,k,A,M,b,v;const C=256;for(c=0;c<o;c++){if(m=new Uint32Array(C),g=e[c],"u8"===s)if(a=-.5,h=255.5,i)for(u=0;u<r;u++)i[u]&&m[g[u]]++;else for(u=0;u<r;u++)m[g[u]]++;else{if(a=n[c].minValue,h=n[c].maxValue,f=(h-a)/C,d=new Uint32Array(257),i)for(u=0;u<r;u++)i[u]&&d[Math.floor((g[u]-a)/f)]++;else for(u=0;u<r;u++)d[Math.floor((g[u]-a)/f)]++;for(u=0;u<255;u++)m[u]=d[u];m[255]=d[255]+d[256]}for(p.push({min:a,max:h,size:C,counts:m}),y=0,w=0,M=0,u=0;u<C;u++)y+=m[u],w+=u*m[u];for(b=w/y,u=0;u<C;u++)M+=m[u]*(u-b)**2;v=Math.sqrt(M/(y-1)),f=(h-a)/C,k=(b+.5)*f+a,A=v*f,x.push({min:a,max:h,avg:k,stddev:A})}return{statistics:x,histograms:p}}function h(t){const{minCutOff:e,maxCutOff:i,gamma:s,pixelType:l}=t,n=t.outMin||0,r=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(l))return null;const o=e.length;let a,h,f=0;"s8"===l?f=-127:"s16"===l&&(f=-32767);let c=256;["u16","s16"].indexOf(l)>-1&&(c=65536);const u=[],p=[],x=r-n;for(a=0;a<o;a++)p[a]=i[a]-e[a],u[a]=x/(i[a]-e[a]);const m=s&&s.length>=o,d=[];if(m)for(a=0;a<o;a++)s[a]>1?s[a]>2?d[a]=6.5+(s[a]-2)**2.5:d[a]=6.5+100*(2-s[a])**4:d[a]=1;let g;const y=[];let w,k,A;if(m)for(a=0;a<o;a++){for(A=[],h=0;h<c;h++)w=h+f,g=(w-e[a])/p[a],k=1,s[a]>1&&(k-=(1/x)**(g*d[a])),w<i[a]&&w>e[a]?A[h]=Math.floor(k*x*g**(1/s[a]))+n:w>=i[a]?A[h]=r:A[h]=n;y[a]=A}else for(a=0;a<o;a++){for(A=[],h=0;h<c;h++)w=h+f,w<=e[a]?A[h]=n:w>=i[a]?A[h]=r:A[h]=Math.floor((w-e[a])/p[a]*x)+n;y[a]=A}if(null!=t.contrastOffset){const e=function(t,e){const i=Math.min(Math.max(t,-100),100),s=Math.min(Math.max(e,-100),100),l=255;let n,r;const o=new Uint8Array(256);for(n=0;n<256;n++)i>0&&i<100?r=(200*n-25500+510*s)/(2*(100-i))+128:i<=0&&i>-100?r=(200*n-25500+510*s)*(100+i)/2e4+128:100===i?(r=200*n-25500+256*(100-i)+510*s,r=r>0?l:0):-100===i&&(r=128),o[n]=r>l?l:r<0?0:r;return o}(t.contrastOffset,t.brightnessOffset);for(a=0;a<o;a++)for(A=y[a],h=0;h<c;h++)A[h]=e[A[h]]}return{lut:y,offset:f}}function f(t,e=256){e=Math.min(e,256);const{size:i,counts:s}=t,l=new Uint8Array(i),n=s.reduce(((t,i)=>t+i/e),0);let r=0,o=0,a=0,h=n;for(let t=0;t<i;t++)if(a+=s[t],!(t<i-1&&a+s[t+1]<h)){for(;r<e-1&&h<a;)r++,h+=n;for(let e=o;e<=t;e++)l[e]=r;o=t+1}for(let t=o;t<i;t++)l[t]=e-1;return l}function c(t,e){if(!l(t))return null;const i=t.clone(),{pixels:s,mask:n}=i,{minCutOff:r,maxCutOff:o,gamma:a}=e,h=e.outMin||0,f=e.outMax||255,c=i.width*i.height,u=s.length;let p,x,m,d,g;const y=f-h,w=[],k=[];for(p=0;p<u;p++)k[p]=o[p]-r[p],w[p]=y/(o[p]-r[p]);const A=a&&a.length>=u,M=[];if(A)for(p=0;p<u;p++)a[p]>1?a[p]>2?M[p]=6.5+(a[p]-2)**2.5:M[p]=6.5+100*(2-a[p])**4:M[p]=1;if(A)if(null!=n){for(x=0;x<c;x++)if(n[x])for(p=0;p<u;p++)m=s[p][x],g=(m-r[p])/k[p],d=1,a[p]>1&&(d-=(1/y)**(g*M[p])),m<o[p]&&m>r[p]?s[p][x]=Math.floor(d*y*g**(1/a[p]))+h:m>=o[p]?s[p][x]=f:s[p][x]=h}else for(x=0;x<c;x++)for(p=0;p<u;p++)m=s[p][x],g=(m-r[p])/k[p],d=1,a[p]>1&&(d-=(1/y)**(g*M[p])),m<o[p]&&m>r[p]?s[p][x]=Math.floor(d*y*g**(1/a[p]))+h:m>=o[p]?s[p][x]=f:s[p][x]=h;else if(null!=n){for(x=0;x<c;x++)if(n[x])for(p=0;p<u;p++)m=s[p][x],m<o[p]&&m>r[p]?s[p][x]=Math.floor((m-r[p])/k[p]*y)+h:m>=o[p]?s[p][x]=f:s[p][x]=h}else for(x=0;x<c;x++)for(p=0;p<u;p++)m=s[p][x],m<o[p]&&m>r[p]?s[p][x]=Math.floor((m-r[p])/k[p]*y)+h:m>=o[p]?s[p][x]=f:s[p][x]=h;return i.pixelType="u8",i.updateStatistics(),i}function u(t,e){if(!l(t))return null;const{pixels:i,mask:n}=t,r=t.width*t.height,o=i.length;let a=e.lut;const{offset:h}=e;let f,c;a&&1===a[0].length&&(a=i.map((()=>a)));const u=[];let p,x,m;if(h)if(null==n)for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),c=0;c<r;c++)m[c]=x[p[c]-h];u.push(m)}else for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),c=0;c<r;c++)n[c]&&(m[c]=x[p[c]-h]);u.push(m)}else if(null==n)for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),c=0;c<r;c++)m[c]=x[p[c]];u.push(m)}else for(f=0;f<o;f++){for(p=i[f],x=a[f],m=new Uint8Array(r),c=0;c<r;c++)n[c]&&(m[c]=x[p[c]]);u.push(m)}const d=new s.Z({width:t.width,height:t.height,pixels:u,mask:n,pixelType:"u8"});return d.updateStatistics(),d}function p(t,e){if(!l(t))return null;const i=t.clone(),{pixels:s}=i,n=i.width*i.height,r=e.length,o=Math.floor(r/2),a=e[Math.floor(o)],h=s[0];let f,c,u,p,x,m,d=!1;const g=new Uint8Array(n),y=new Uint8Array(n),w=new Uint8Array(n);let k=i.mask;const A=4===e[0].mappedColor.length;for(k||(k=new Uint8Array(n),k.fill(A?255:1),i.mask=k),x=0;x<n;x++)if(k[x]){for(f=h[x],d=!1,m=o,c=a,u=0,p=r-1;p-u>1;){if(f===c.value){d=!0;break}f>c.value?u=m:p=m,m=Math.floor((u+p)/2),c=e[Math.floor(m)]}d||(f===e[u].value?(c=e[u],d=!0):f===e[p].value?(c=e[p],d=!0):f<e[u].value?(d=!1,c=null):f>e[u].value&&(f<e[p].value?(c=e[u],d=!0):p===r-1?(d=!1,c=null):(c=e[p],d=!0))),d?(g[x]=c.mappedColor[0],y[x]=c.mappedColor[1],w[x]=c.mappedColor[2],k[x]=c.mappedColor[3]):g[x]=y[x]=w[x]=k[x]=0}return i.pixels=[g,y,w],i.mask=k,i.pixelType="u8",i.maskIsAlpha=A,i}function x(t,e){if(!t||0===t.length)return null;const i=t.filter((t=>t.pixelBlock))[0];if(!i)return null;const s=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,l=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,n=.01*Math.min(s,l),r=t.sort(((t,e)=>Math.abs(t.extent.ymax-e.extent.ymax)>n?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>n?t.extent.xmin-e.extent.xmin:0)),o=Math.min.apply(null,r.map((t=>t.extent.xmin))),a=Math.min.apply(null,r.map((t=>t.extent.ymin))),h=Math.max.apply(null,r.map((t=>t.extent.xmax))),f=Math.max.apply(null,r.map((t=>t.extent.ymax))),c={x:Math.round((e.xmin-o)/s),y:Math.round((f-e.ymax)/l)},u={width:Math.round((h-o)/s),height:Math.round((f-a)/l)},p={width:Math.round((e.xmax-e.xmin)/s),height:Math.round((e.ymax-e.ymin)/l)};return Math.round(u.width/i.pixelBlock.width)*Math.round(u.height/i.pixelBlock.height)!==r.length||c.x<0||c.y<0||u.width<p.width||u.height<p.height?null:{extent:e,pixelBlock:d(r.map((t=>t.pixelBlock)),u,c,p)}}function m(t,e,i,s,l,n){const{width:r,height:o}=i.block,{x:a,y:h}=i.offset,{width:f,height:c}=i.mosaic,u=function(t,e,i,s,l,n,r,o){return{xmin:l<=i*t?0:l<i*t+t?l-i*t:t,ymin:n<=s*e?0:n<s*e+e?n-s*e:e,xmax:l+r<=i*t?0:l+r<i*t+t?l+r-i*t:t,ymax:n+o<=s*e?0:n+o<s*e+e?n+o-s*e:e}}(r,o,s,l,a,h,f,c);let p=0,x=0;if(n){const t=n.hasGCSSShiftTransform?360:n.halfWorldWidth,e=r*n.resolutionX,i=n.startX+s*e,l=i+e;i<t&&l>t?x=n.rightPadding:i>=t&&(p=n.leftMargin-n.rightPadding,x=0)}if(u.xmax-=x,"number"!=typeof e)for(let i=u.ymin;i<u.ymax;i++){const n=(l*o+i-h)*f+(s*r-a)+p,c=i*r;for(let i=u.xmin;i<u.xmax;i++)t[n+i]=e[c+i]}else for(let i=u.ymin;i<u.ymax;i++){const n=(l*o+i-h)*f+(s*r-a)+p;for(let i=u.xmin;i<u.xmax;i++)t[n+i]=e}}function d(t,e,i,n,r){const o=t.filter((t=>l(t)))[0];if(null==o)return null;const a=n?n.width:e.width,h=n?n.height:e.height,f=o.width,c=o.height,u=e.width/f,p=e.height/c,x={offset:i||{x:0,y:0},mosaic:n||e,block:{width:f,height:c}},d=o.pixelType,g=s.Z.getPixelArrayConstructor(d),y=o.pixels.length,w=[];let k,A,M;for(let e=0;e<y;e++){A=new g(a*h);for(let i=0;i<p;i++)for(let s=0;s<u;s++){const n=t[i*u+s];l(n)&&(k=n.pixels[e],m(A,k,x,s,i,r))}w.push(A)}if(t.some((t=>null==t||t.mask&&t.mask.length>0))){M=new Uint8Array(a*h);for(let e=0;e<p;e++)for(let i=0;i<u;i++){const s=t[e*u+i];m(M,(s?s.mask:null)||(s?1:0),x,i,e,r)}}const b=new s.Z({width:a,height:h,pixels:w,pixelType:d,mask:M});return b.updateStatistics(),b}function g(t){if(!l(t))return null;const e=t.clone(),{width:i,height:s,pixels:n,mask:r}=t,o=n[0],a=e.pixels[0];for(let t=2;t<s-1;t++){const e=new Map;for(let s=t-2;s<t+2;s++)for(let t=0;t<4;t++){const l=s*i+t;k(e,o[l],r?r[l]:1)}a[t*i]=y(e),a[t*i+1]=a[t*i+2]=a[t*i];let s=3;for(;s<i-1;s++){let l=(t-2)*i+s+1;k(e,o[l],r?r[l]:1),l=(t-1)*i+s+1,k(e,o[l],r?r[l]:1),l=t*i+s+1,k(e,o[l],r?r[l]:1),l=(t+1)*i+s+1,k(e,o[l],r?r[l]:1),l=(t-2)*i+s-3,w(e,o[l],r?r[l]:1),l=(t-1)*i+s-3,w(e,o[l],r?r[l]:1),l=t*i+s-3,w(e,o[l],r?r[l]:1),l=(t+1)*i+s-3,w(e,o[l],r?r[l]:1),a[t*i+s]=y(e)}a[t*i+s+1]=a[t*i+s]}for(let t=0;t<i;t++)a[t]=a[i+t]=a[2*i+t],a[(s-1)*i+t]=a[(s-2)*i+t];return e.updateStatistics(),e}function y(t){if(0===t.size)return 0;let e=0,i=-1,s=0;const l=t.keys();let n=l.next();for(;!n.done;)s=t.get(n.value),s>e&&(i=n.value,e=s),n=l.next();return i}function w(t,e,i){if(0===i)return;const s=t.get(e);1===s?t.delete(e):t.set(e,s-1)}function k(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function A(t,e,i){let{x:n,y:r}=e;const{width:o,height:a}=i;if(0===n&&0===r&&a===t.height&&o===t.width)return t;const{width:h,height:f}=t,c=Math.max(0,r),u=Math.max(0,n),p=Math.min(n+o,h),x=Math.min(r+a,f);if(p<0||x<0||!l(t))return null;n=Math.max(0,-n),r=Math.max(0,-r);const{pixels:m,mask:d}=t,g=o*a,y=m.length,w=[];for(let e=0;e<y;e++){const i=m[e],l=s.Z.createEmptyBand(t.pixelType,g);for(let t=c;t<x;t++){const e=t*h;let s=(t+r-c)*o+n;for(let t=u;t<p;t++)l[s++]=i[e+t]}w.push(l)}const k=new Uint8Array(g);for(let t=c;t<x;t++){const e=t*h;let i=(t+r-c)*o+n;for(let t=u;t<p;t++)k[i++]=d?d[e+t]:1}const A=new s.Z({width:i.width,height:i.height,pixelType:t.pixelType,pixels:w,mask:k});return A.updateStatistics(),A}function M(t,e=!0){if(!l(t))return null;const{pixels:i,width:n,height:r,mask:o,pixelType:a}=t,h=[],f=Math.round(n/2),c=Math.round(r/2),u=r-1,p=n-1;for(let t=0;t<i.length;t++){const l=i[t],o=s.Z.createEmptyBand(a,f*c);let x=0;for(let t=0;t<r;t+=2)for(let i=0;i<n;i+=2){const s=l[t*n+i];if(e){const e=i===p?s:l[t*n+i+1],r=t===u?s:l[t*n+i+n],a=i===p?r:t===u?e:l[t*n+i+n+1];o[x++]=(s+e+r+a)/4}else o[x++]=s}h.push(o)}let x=null;if(o){x=new Uint8Array(f*c);let t=0;for(let i=0;i<r;i+=2)for(let s=0;s<n;s+=2){const l=o[i*n+s];if(e){const e=s===p?l:o[i*n+s+1],r=i===u?l:o[i*n+s+n],a=s===p?r:i===u?e:o[i*n+s+n+1];x[t++]=l*e*r*a?1:0}else x[t++]=l}}return new s.Z({width:f,height:c,pixelType:a,pixels:h,mask:x})}function b(t,e,i){if(!l(t))return null;const{width:s,height:n}=e;let{width:r,height:o}=t;const a=new Map,h={x:0,y:0},f=null==i?1:1+i;let c=t;for(let t=0;t<f;t++){const i=Math.ceil(r/s),l=Math.ceil(o/n);for(let r=0;r<l;r++){h.y=r*n;for(let l=0;l<i;l++){h.x=l*s;const i=A(c,h,e);a.set(`${t}/${r}/${l}`,i)}}t<f-1&&(c=M(c)),r=Math.round(r/2),o=Math.round(o/2)}return a}function v(t,e,i,n,r="nearest"){if(!l(t))return null;"majority"===r&&(t=g(t));const{pixels:o,mask:a,pixelType:h}=t,f=t.width,c=t.height,u=s.Z.getPixelArrayConstructor(h),p=o.length,{width:x,height:m}=e,d=n.cols,y=n.rows,w=Math.ceil(x/d),k=Math.ceil(m/y);let A,M,b,v,C,U,B,T=!1;for(let t=0;t<i.length;t+=3)-1===i[t]&&-1===i[t+1]&&-1===i[t+2]&&(T=!0);const _=new Float32Array(x*m),P=new Float32Array(x*m);let S,F,G=0;const I="majority"===r?0:.5;for(let t=0;t<k;t++)for(let e=0;e<w;e++){A=12*(t*w+e),M=i[A],b=i[A+1],v=i[A+2],C=i[A+3],U=i[A+4],B=i[A+5];for(let i=0;i<y;i++){G=(t*y+i)*x+e*d,F=(i+.5)/y;for(let t=0;t<i;t++)S=(t+.5)/d,_[G+t]=Math.round((M*S+b*F+v)*f-I),P[G+t]=Math.round((C*S+U*F+B)*c-I)}A+=6,M=i[A],b=i[A+1],v=i[A+2],C=i[A+3],U=i[A+4],B=i[A+5];for(let i=0;i<y;i++){G=(t*y+i)*x+e*d,F=(i+.5)/y;for(let t=i;t<d;t++)S=(t+.5)/d,_[G+t]=Math.round((M*S+b*F+v)*f-I),P[G+t]=Math.round((C*S+U*F+B)*c-I)}}const R=(t,e)=>{for(let i=0;i<m;i++){A=i*x;for(let i=0;i<x;i++)_[A]<0||P[A]<0?t[A]=0:t[A]=e[_[A]+P[A]*f],A++}},V=[];let Z;for(let t=0;t<p;t++)Z=new u(x*m),R(Z,o[t]),V.push(Z);const j=new s.Z({width:x,height:m,pixelType:h,pixels:V});if(a)j.mask=new Uint8Array(x*m),R(j.mask,a);else if(T){j.mask=new Uint8Array(x*m);for(let t=0;t<x*m;t++)j.mask[t]=_[t]<0||P[t]<0?0:1}return j.updateStatistics(),j}}}]);