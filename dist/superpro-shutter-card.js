var SuperproShutterCard = (function (exports) {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

  // Lit 3.x comes from the npm package now; Rollup inlines it into the IIFE
  // bundle that lands in dist/superpro-shutter-card.js. The pre-v0.5 layout
  // shipped lit-core.min.js as a sibling file under dist/lit/ - that
  // directory is gone post-v0.5 because the bundle is self-contained.

  const VERSION = 'v1.0.1';


  const HA_CARD_NAME = "superpro-shutter-card";
  const HA_SHUTTER_NAME = `superpro-shutter`;
  const HA_HUI_VIEW = 'hui-view';
  const SPACE = ' ';

  const UNAVAILABLE = 'unavailable';
  const UNKNOWN = 'unknown';
  const NOT_KNOWN =[UNAVAILABLE,UNKNOWN,undefined, null ];

  const AUTO = 'auto';
  const LEFT = 'left';
  const RIGHT = 'right';
  const BOTTOM = 'bottom';
  const TOP = 'top';
  const UP = 'up';
  const DOWN = 'down';

  const MOUSEUP = 'up';
  const MOUSEDOWN = 'down';
  const MOUSEMOVE = 'move';

  const ADD_EVENT = 'add';
  const REMOVE_EVENT = 'remove';
  const IS_VERTICAL = [UP,DOWN];
  const NONE = 'none';
  const AUTO_TL = `${AUTO}-${TOP}-${LEFT}`;
  const AUTO_TR = `${AUTO}-${TOP}-${RIGHT}`;
  const AUTO_BL = `${AUTO}-${BOTTOM}-${LEFT}`;
  const AUTO_BR = `${AUTO}-${BOTTOM}-${RIGHT}`;
  /*
      from https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/#sizing-in-sections-view
      for getLayoutOptions() {
        size off cells.
        width:
           layout: between 80px and 120px depending on the screen size
        height: 56px
        gap between cells: 8px

      for getGridOptions() (used here)
        width:
           layout: between 27px and 40px depending on the screen size (width for code: size is LayoutWidth/3 )
        height: 56px
        gap between cells: 8px
  */
  const HA_GRID_PX_HEIGHT = 56;
  const HA_GRID_PX_WIDTH = 24; // beween 17 and 30 ???
  const HA_GRID_PX_GAP = 8;



  const PORTRAIT ="P";
  const LANDSCAPE ="L";

  // derived from: https://github.com/home-assistant/core/blob/dev/homeassistant/components/cover/__init__.py
  //               lines 101-108

  const ESC_FEATURE_OPEN              = 0b00000001; // 1
  const ESC_FEATURE_CLOSE             = 0b00000010; // 2
  const ESC_FEATURE_SET_POSITION      = 0b00000100; // 4
  const ESC_FEATURE_STOP              = 0b00001000; // 8
  const ESC_FEATURE_OPEN_TILT         = 0b00010000; // 16
  const ESC_FEATURE_CLOSE_TILT        = 0b00100000; // 32
  const ESC_FEATURE_SET_TILT_POSITION = 0b10000000; // 128

  const ESC_FEATURE_ALL               = 0b11111111; // 255
  const ESC_FEATURE_NO_TILT           = 0b00001111; // 15

  const SHUTTER_STATE_OPEN = 'open';
  const SHUTTER_STATE_CLOSED = 'closed';
  const SHUTTER_STATE_OPENING = 'opening';
  const SHUTTER_STATE_CLOSING = 'closing';
  const SHUTTER_STATE_PARTIAL_OPEN = 'partial_open'; // speudo state

  const SHUTTER_OPEN_PCT = 100;
  const SHUTTER_CLOSED_PCT = 0;

  const ESC_CLASS_BASE_NAME = 'esc-shutter';

  const ESC_CLASS_SHUTTER = `${ESC_CLASS_BASE_NAME}`;
  const ESC_CLASS_SHUTTER_SEPERATE = `${ESC_CLASS_BASE_NAME}-seperate`;
  const ESC_CLASS_SHUTTERS = `${ESC_CLASS_BASE_NAME}s`;
  const ESC_CLASS_TOP = `${ESC_CLASS_BASE_NAME}-${TOP}`;
  const ESC_CLASS_MIDDLE = `${ESC_CLASS_BASE_NAME}-middle`;
  const ESC_CLASS_BOTTOM = `${ESC_CLASS_BASE_NAME}-${BOTTOM}`;
  const ESC_CLASS_LABEL = `${ESC_CLASS_BASE_NAME}-label`;
  const ESC_CLASS_LABEL_DISABLED = `${ESC_CLASS_LABEL}-disabled`;
  const ESC_CLASS_TITLE_DISABLED = `${ESC_CLASS_BASE_NAME}-title-disabled`;
  const ESC_CLASS_POSITION = `${ESC_CLASS_BASE_NAME}-position`;
  const ESC_CLASS_BUTTONS = `${ESC_CLASS_BASE_NAME}-buttons`;
  const ESC_CLASS_TILT_BUTTONS = `${ESC_CLASS_BASE_NAME}-tilt-buttons`;
  const ESC_CLASS_BUTTONS_TOP = `${ESC_CLASS_BUTTONS}-${TOP}`;
  const ESC_CLASS_BUTTONS_BOTTOM = `${ESC_CLASS_BUTTONS}-${BOTTOM}`;
  const ESC_CLASS_BUTTONS_LEFT = `${ESC_CLASS_BUTTONS}-${LEFT}`;
  const ESC_CLASS_BUTTONS_RIGHT = `${ESC_CLASS_BUTTONS}-${RIGHT}`;
  const ESC_CLASS_SELECTOR = `${ESC_CLASS_BASE_NAME}-selector`;
  const ESC_CLASS_SELECTOR_PICTURE = `${ESC_CLASS_BASE_NAME}-selector-picture`;
  const ESC_CLASS_SELECTOR_PICKER = `${ESC_CLASS_BASE_NAME}-selector-picker`;
  const ESC_CLASS_SELECTOR_PARTIAL = `${ESC_CLASS_BASE_NAME}-selector-partial`;
  const ESC_CLASS_SELECTOR_SLIDE = `${ESC_CLASS_BASE_NAME}-selector-slide`;
  const ESC_CLASS_SELECTOR_SLIDE_SLATS = `${ESC_CLASS_SELECTOR_SLIDE}-slats`;
  const ESC_CLASS_SELECTOR_SLIDE_EDGE = `${ESC_CLASS_SELECTOR_SLIDE}-edge`;
  const ESC_CLASS_MOVEMENT_OVERLAY = `${ESC_CLASS_BASE_NAME}-movement-overlay`;
  const ESC_CLASS_MOVEMENT_UP = `${ESC_CLASS_BASE_NAME}-movement-up`;
  const ESC_CLASS_MOVEMENT_DOWN = `${ESC_CLASS_BASE_NAME}-movement-down`;
  const ESC_CLASS_HA_ICON = `${ESC_CLASS_BASE_NAME}-ha-icon`;
  const ESC_CLASS_HA_ICON_LOCK = `${ESC_CLASS_HA_ICON}-lock`;
  const ESC_CLASS_HA_ICON_TILT = `${ESC_CLASS_HA_ICON}-tilt`;
  const ESC_CLASS_TOP_LEFT = `${ESC_CLASS_BASE_NAME}-${TOP}-${LEFT}`;
  const ESC_CLASS_TOP_RIGHT = `${ESC_CLASS_BASE_NAME}-${TOP}-${RIGHT}`;
  const ESC_CLASS_TOP_ICON_TEXT = `${ESC_CLASS_BASE_NAME}-icon-text`;

  const POSITIONS =[AUTO,AUTO_BL,AUTO_BR,AUTO_TL,AUTO_TR,LEFT,RIGHT,TOP,BOTTOM,NONE];

  const ACTION_SHUTTER_OPEN = 'open_cover';
  const ACTION_SHUTTER_OPEN_TILT = 'open_cover_tilt';
  const ACTION_SHUTTER_CLOSE = 'close_cover';
  const ACTION_SHUTTER_CLOSE_TILT = 'close_cover_tilt';
  const ACTION_SHUTTER_STOP = 'stop_cover';
  const ACTION_SHUTTER_SET_POS = 'set_cover_position';
  const ACTION_SHUTTER_SET_POS_TILT = 'set_cover_tilt_position';

  const ICON_BUTTON_SIZE = 36; // original: 48
  const ICON_SIZE = 24;

  const FONT_SIZE_LABEL = 20;
  const FONT_SIZE_POSITION = 14;
  const LINE_HEIGHT_LABEL = 30;
  const LINE_HEIGHT_POSITION = 20;
  const MARGIN_POSITION = 5;

  const UNITY= 'px';

  const CONFIG_TYPE = "type";
  const CONFIG_SHUTTER_PRESET = 'shutter_preset';
  const CONFIG_TITLE = "title";
  const CONFIG_ENTITIES = 'entities';

  const HA_ALERT_SUCCESS = 'success';
  const HA_ALERT_WARNING = 'warning';
  const HA_ALERT_ERROR = 'error';
  const HA_ALERT_INFO = 'info';

  const CONFIG_DEBUG = 'debug';
  const CONFIG_ENTITY_ID = 'entity';
  const CONFIG_HEIGHT_PX = 'height_px';
  const CONFIG_WIDTH_PX = 'width_px';

  const CONFIG_BATTERY_ENTITY_ID = 'battery_entity';
  const CONFIG_SIGNAL_ENTITY_ID = 'signal_entity';

  const CONFIG_NAME = 'name';
  const CONFIG_PASSIVE_MODE = 'passive_mode';
  const CONFIG_IMAGE_MAP = 'image_map';
  const CONFIG_WINDOW_IMAGE = 'window_image';
  const CONFIG_VIEW_IMAGE = 'view_image';
  const CONFIG_SHUTTER_SLAT_IMAGE = 'shutter_slat_image';
  const CONFIG_SHUTTER_BOTTOM_IMAGE = 'shutter_bottom_image';
  const CONFIG_ROTATE_SLATS_SHUTTER_IMAGE = 'rotate_slat_image';
  const CONFIG_STRETCH_EDGE_SHUTTER_IMAGE = 'stretch_bottom_image';
  const CONFIG_BASE_HEIGHT_PX = 'base_height_px';
  const CONFIG_BASE_WIDTH_PX = 'base_width_px';
  const CONFIG_RESIZE_HEIGHT_PCT = 'resize_height_pct';
  const CONFIG_RESIZE_WIDTH_PCT = 'resize_width_pct';

  const CONFIG_SCALE_ICONS = 'scale_icons';
  const CONFIG_SCALE_TEXTS = 'scale_texts';
  const CONFIG_SCALE_BUTTONS = 'scale_buttons';
  const CONFIG_OFFSET_OPENED_PCT = 'top_offset_pct'; // TODO  rename: top->opened
  const CONFIG_OFFSET_CLOSED_PCT = 'bottom_offset_pct'; // TODO rename bottom->closed
  const CONFIG_BUTTONS_POSITION = 'buttons_position';
  const CONFIG_TITLE_POSITION = 'title_position';  // removed
  const CONFIG_NAME_POSITION = 'name_position';
  const CONFIG_NAME_DISABLED = 'name_disabled';
  const CONFIG_OPENING_POSITION = 'opening_position';
  const CONFIG_OPENING_DISABLED = 'opening_disabled';
  const CONFIG_INLINE_HEADER = 'inline_header';

  const CONFIG_INVERT_PCT       = 'invert_percentage'; // deprecated
  const CONFIG_INVERT_PCT_UI    = 'invert_percentage_ui'; //
  const CONFIG_INVERT_PCT_COVER = 'invert_percentage_cover'; // new

  const CONFIG_INVERT_PCT_TILT_UI    = 'invert_percentage_tilt_ui'; //
  const CONFIG_INVERT_PCT_TILT_COVER = 'invert_percentage_tilt_cover'; // new

  const CONFIG_TILT_SLIDER_ONLY = 'tilt_slider_only';

  const CONFIG_INVERT_OPEN_CLOSE       = 'invert_open_close'; // deprecated
  const CONFIG_INVERT_OPEN_CLOSE_UI    = 'invert_open_close_ui'; // new
  const CONFIG_INVERT_OPEN_CLOSE_COVER = 'invert_open_close_cover';

  const CONFIG_SHOW_TILT = 'show_tilt';
  const CONFIG_TILT_ANGLE_MIN = 'tilt_angle_min';
  const CONFIG_TILT_ANGLE_MAX = 'tilt_angle_max';

  const CONFIG_CLOSING_DIRECTION = 'closing_direction';
  const CONFIG_PARTIAL_CLOSE_PCT = 'partial_close_percentage';
  const CONFIG_OFFSET_IS_CLOSED_PCT = 'offset_closed_percentage'; // TODO rename
  const CONFIG_ALWAYS_PCT = 'always_percentage';
  const CONFIG_DISABLE_END_BUTTONS = 'disable_end_buttons';
  const CONFIG_DISABLE_STANDARD_BUTTONS = 'disable_standard_buttons';
  const CONFIG_DISABLE_PARTIAL_OPEN_BUTTONS = 'disable_partial_open_buttons';
  const CONFIG_PICKER_OVERLAP_PX = 'picker_overlap_px';
  const CONFIG_CURRENT_POSITION = 'current_position';

  const CONFIG_BUTTON_STOP_HIDE_STATES = 'button_stop_hide_states';
  const CONFIG_BUTTON_OPENED_HIDE_STATES = 'button_up_hide_states';  // TODO rename up->opened
  const CONFIG_BUTTON_CLOSED_HIDE_STATES = 'button_down_hide_states'; // TODO rename down->closed

  const DEPRECATED={
    [CONFIG_INVERT_PCT]: {new: CONFIG_INVERT_PCT_COVER}, // jan 2026 1.4.0-alpha
    [CONFIG_INVERT_OPEN_CLOSE]: {new: CONFIG_INVERT_OPEN_CLOSE_UI}, // jan 2026 1.4.0-alpha
  };
  const REMOVED={
    [CONFIG_TITLE_POSITION]: {new: CONFIG_NAME_POSITION},
  };
      const ICONCOLORS = {
        '-1': "grey",
        0: "red",
        1: "#FF4D00",// deep orange,
        2: "#FF7F00", // amber
        3: "orange",
        4: "#66B266", // sligly dim green
        5: "green",
      };

  const Z_INDEX_PARTIAL = 5;
  const Z_INDEX_PICKER  = 3;
  const Z_INDEX_PICTURE = 1;
  const Z_INDEX_MOVEMENT_ICON = 2;  // !important ??
  const Z_INDEX_SLIDE  = -1;
  const Z_INDEX_OVERLAY =-1;


  const ESC_ENTITY_ID = null;

  const ESC_BATTERY_ENTITY_ID = null;
  const ESC_SIGNAL_ENTITY_ID = null;

  const ESC_AWNING = 'awning';
  const ESC_CURTAIN = 'curtain';
  const ESC_TEST = 'test'; // used for testing purposes
  const ESC_SHADE = 'shade';
  const ESC_BLIND = 'blind';
  const ESC_ROLLER_SHUTTER = 'roller-shutter';

  const ESC_SHUTTER_PRESET = ESC_ROLLER_SHUTTER;
  const ESC_NAME = null;
  const ESC_PASSIVE_MODE = false;
  const ESC_IMAGE_MAP = `/local/community/${HA_CARD_NAME}/images`;
  const ESC_IMAGE_WINDOW = 'esc-window.png';
  const ESC_IMAGE_VIEW = 'esc-view.png';
  const ESC_IMAGE_SHUTTER_SLAT   = 'esc-shutter-slat.png';
  const ESC_IMAGE_SHUTTER_BOTTOM = 'esc-shutter-bottom.png';
  const ESC_ROTATE_MAIN_SHUTTER_IMAGE = true; // true: rotate slat image, false: use slat image as is
  const ESC_STRETCH_EDGE_SHUTTER_IMAGE = true; // true: stretch bottom image, false: use bottom image as is
  const ESC_BASE_HEIGHT_PX = 150; // image-height
  const ESC_BASE_WIDTH_PX = 150;  // image-width
  const ESC_RESIZE_HEIGHT_PCT = 100;
  const ESC_RESIZE_WIDTH_PCT  = 100;

  const ESC_DEBUG = false;
  const ESC_SCALE_ICONS = true;
  const ESC_SCALE_TEXTS = false;
  const ESC_SCALE_BUTTONS = false;
  const ESC_OPENED_OFFSET_PCT = 0;
  const ESC_CLOSED_OFFSET_PCT = 0;
  const ESC_BUTTONS_POSITION = LEFT;
  const ESC_TITLE_POSITION = null;  // deprecated
  const ESC_NAME_POSITION =TOP;
  const ESC_NAME_DISABLED = false;
  const ESC_OPENING_POSITION = TOP;
  const ESC_OPENING_DISABLED = false;
  const ESC_INLINE_HEADER = false;
  const ESC_INVERT_PCT_COVER = false;
  const ESC_INVERT_PCT_UI = false;
  const ESC_INVERT_OPEN_CLOSE_UI = false;
  const ESC_INVERT_OPEN_CLOSE_COVER = false;

  const ESC_INVERT_PCT_TILT_UI    = false;
  const ESC_INVERT_PCT_TILT_COVER = false;

  const ESC_TILT_SLIDER_ONLY = false;

  const ESC_SHOW_TILT = true;
  const ESC_TILT_ANGLE_MIN = 0;
  const ESC_TILT_ANGLE_MAX = 180;

  const ESC_CLOSING_DIRECTION = DOWN;
  const ESC_PARTIAL_CLOSE_PCT = 0;
  const ESC_OFFSET_CLOSED_PCT = 0;
  const ESC_ALWAYS_PCT = false;
  const ESC_DISABLE_END_BUTTONS = false;
  const ESC_DISABLE_STANDARD_BUTTONS = false;
  const ESC_DISABLE_PARTIAL_OPEN_BUTTONS = true;
  const ESC_PICKER_OVERLAP_PX = 20;
  const ESC_CURRENT_POSITION = 0;


  const ESC_MIN_RESIZE_WIDTH_PCT  =  20;
  const ESC_MAX_RESIZE_WIDTH_PCT  = 500;
  const ESC_MIN_RESIZE_HEIGHT_PCT =  20;
  const ESC_MAX_RESIZE_HEIGHT_PCT = 500;

  const ESC_BUTTON_STOP_HIDE_STATES = [];
  const ESC_BUTTON_OPENED_HIDE_STATES = [];
  const ESC_BUTTON_CLOSED_HIDE_STATES = [];

  const INVERT_OPEN_CLOSE_SETTING ={
    [SHUTTER_STATE_OPEN]: SHUTTER_STATE_CLOSED,
    [SHUTTER_STATE_CLOSED]: SHUTTER_STATE_OPEN,
    [SHUTTER_STATE_OPENING]: SHUTTER_STATE_CLOSING,
    [SHUTTER_STATE_CLOSING]: SHUTTER_STATE_OPENING,
    [ACTION_SHUTTER_OPEN]: ACTION_SHUTTER_CLOSE,
    [ACTION_SHUTTER_CLOSE]: ACTION_SHUTTER_OPEN,
    [SHUTTER_OPEN_PCT]: SHUTTER_CLOSED_PCT,
    [SHUTTER_CLOSED_PCT]: SHUTTER_OPEN_PCT,
    [UP]: DOWN,
    [DOWN]: UP,

  };

  const CONFIG_DEFAULT ={
    [CONFIG_TYPE]: "",
    [CONFIG_TITLE]: "",
    [CONFIG_ENTITIES]: "",

    [CONFIG_DEBUG]: ESC_DEBUG,

    [CONFIG_SHUTTER_PRESET]: ESC_SHUTTER_PRESET,
    [CONFIG_ENTITY_ID]: ESC_ENTITY_ID,

    [CONFIG_BATTERY_ENTITY_ID]: ESC_BATTERY_ENTITY_ID,
    [CONFIG_SIGNAL_ENTITY_ID]: ESC_SIGNAL_ENTITY_ID,

    [CONFIG_NAME]: ESC_NAME,
    [CONFIG_PASSIVE_MODE]: ESC_PASSIVE_MODE,
    [CONFIG_IMAGE_MAP]: ESC_IMAGE_MAP,
    [CONFIG_WINDOW_IMAGE]: ESC_IMAGE_WINDOW,
    [CONFIG_VIEW_IMAGE]: ESC_IMAGE_VIEW,
    [CONFIG_SHUTTER_SLAT_IMAGE]: ESC_IMAGE_SHUTTER_SLAT,
    [CONFIG_SHUTTER_BOTTOM_IMAGE]: ESC_IMAGE_SHUTTER_BOTTOM,
    [CONFIG_ROTATE_SLATS_SHUTTER_IMAGE]: ESC_ROTATE_MAIN_SHUTTER_IMAGE,
    [CONFIG_STRETCH_EDGE_SHUTTER_IMAGE]: ESC_STRETCH_EDGE_SHUTTER_IMAGE,
    [CONFIG_BASE_HEIGHT_PX]: ESC_BASE_HEIGHT_PX,
    [CONFIG_BASE_WIDTH_PX]: ESC_BASE_WIDTH_PX,
    [CONFIG_RESIZE_HEIGHT_PCT]: ESC_RESIZE_HEIGHT_PCT,
    [CONFIG_RESIZE_WIDTH_PCT]: ESC_RESIZE_WIDTH_PCT,

    [CONFIG_SCALE_ICONS]: ESC_SCALE_ICONS,
    [CONFIG_SCALE_BUTTONS]: ESC_SCALE_BUTTONS,
    [CONFIG_SCALE_TEXTS]: ESC_SCALE_TEXTS,
    [CONFIG_OFFSET_OPENED_PCT]: ESC_OPENED_OFFSET_PCT,
    [CONFIG_OFFSET_CLOSED_PCT]: ESC_CLOSED_OFFSET_PCT,
    [CONFIG_BUTTONS_POSITION]: ESC_BUTTONS_POSITION,
    [CONFIG_TITLE_POSITION]: ESC_TITLE_POSITION,  // deprecated
    [CONFIG_NAME_POSITION]: ESC_NAME_POSITION, // new
    [CONFIG_NAME_DISABLED]: ESC_NAME_DISABLED,
    [CONFIG_OPENING_POSITION]: ESC_OPENING_POSITION,
    [CONFIG_OPENING_DISABLED]: ESC_OPENING_DISABLED,
    [CONFIG_INLINE_HEADER]: ESC_INLINE_HEADER,

    [CONFIG_INVERT_PCT]   : ESC_INVERT_PCT_UI,
    [CONFIG_INVERT_PCT_UI]   : ESC_INVERT_PCT_UI,
    [CONFIG_INVERT_PCT_COVER]: ESC_INVERT_PCT_COVER,
    [CONFIG_INVERT_OPEN_CLOSE]   : ESC_INVERT_OPEN_CLOSE_UI,
    [CONFIG_INVERT_OPEN_CLOSE_UI]   : ESC_INVERT_OPEN_CLOSE_UI,
    [CONFIG_INVERT_OPEN_CLOSE_COVER]: ESC_INVERT_OPEN_CLOSE_COVER,

    [CONFIG_INVERT_PCT_TILT_UI]: ESC_INVERT_PCT_TILT_UI,
    [CONFIG_INVERT_PCT_TILT_COVER]: ESC_INVERT_PCT_TILT_COVER,
    [CONFIG_TILT_SLIDER_ONLY]: ESC_TILT_SLIDER_ONLY,

    [CONFIG_SHOW_TILT]: ESC_SHOW_TILT,
    [CONFIG_TILT_ANGLE_MIN]: ESC_TILT_ANGLE_MIN,
    [CONFIG_TILT_ANGLE_MAX]: ESC_TILT_ANGLE_MAX,

    [CONFIG_CLOSING_DIRECTION]: ESC_CLOSING_DIRECTION,
    [CONFIG_PARTIAL_CLOSE_PCT]: ESC_PARTIAL_CLOSE_PCT,
    [CONFIG_OFFSET_IS_CLOSED_PCT]: ESC_OFFSET_CLOSED_PCT,
    [CONFIG_ALWAYS_PCT]: ESC_ALWAYS_PCT,
    [CONFIG_DISABLE_END_BUTTONS]: ESC_DISABLE_END_BUTTONS,
    [CONFIG_DISABLE_STANDARD_BUTTONS]: ESC_DISABLE_STANDARD_BUTTONS,
    [CONFIG_DISABLE_PARTIAL_OPEN_BUTTONS]: ESC_DISABLE_PARTIAL_OPEN_BUTTONS,

    [CONFIG_PICKER_OVERLAP_PX]: ESC_PICKER_OVERLAP_PX,
    [CONFIG_CURRENT_POSITION]: ESC_CURRENT_POSITION,

    [CONFIG_BUTTON_STOP_HIDE_STATES]: ESC_BUTTON_STOP_HIDE_STATES,
    [CONFIG_BUTTON_OPENED_HIDE_STATES]: ESC_BUTTON_OPENED_HIDE_STATES,
    [CONFIG_BUTTON_CLOSED_HIDE_STATES]: ESC_BUTTON_CLOSED_HIDE_STATES,
  // Home assistant key words, not used but to prevent warnings
    ['view_layout']: null,
    ['grid_options']: null,



  };
  const ESC_PRESET = {
    [ESC_ROLLER_SHUTTER] : {
      [CONFIG_ROTATE_SLATS_SHUTTER_IMAGE]: true,
      [CONFIG_SHOW_TILT]: false,
      [CONFIG_NAME]: 'Roller Shutter',
    }  // default is using CONFIG_DEFAULT
    ,
    [ESC_AWNING]: {
      [CONFIG_INVERT_OPEN_CLOSE_UI]: true,
      [CONFIG_INVERT_PCT_UI]: true,
      [CONFIG_SHUTTER_SLAT_IMAGE]: 'esc-awning.png',
      [CONFIG_SHUTTER_BOTTOM_IMAGE]: 'esc-awning-bottom.png',
      [CONFIG_ROTATE_SLATS_SHUTTER_IMAGE]: true,
      [CONFIG_STRETCH_EDGE_SHUTTER_IMAGE]: false,
      [CONFIG_OFFSET_CLOSED_PCT]: 50,
      [CONFIG_CLOSING_DIRECTION]: DOWN,
      [CONFIG_SHOW_TILT]: false,
      [CONFIG_NAME]: 'Awning',
    },
    [ESC_CURTAIN]: {
      [CONFIG_CLOSING_DIRECTION]: RIGHT,
      [CONFIG_SHUTTER_SLAT_IMAGE]: 'esc-curtain.png',
      [CONFIG_SHUTTER_BOTTOM_IMAGE]: '',
      [CONFIG_ROTATE_SLATS_SHUTTER_IMAGE]: false,
      [CONFIG_SHOW_TILT]: false,
      [CONFIG_NAME]: 'Curtain',
    },
    [ESC_SHADE]: {
      [CONFIG_SHUTTER_SLAT_IMAGE]: '#00000080',
      [CONFIG_CLOSING_DIRECTION]: DOWN,
      [CONFIG_SHOW_TILT]: false,
      [CONFIG_NAME]: 'Shade',
    },
    [ESC_BLIND]: {
      [CONFIG_CLOSING_DIRECTION]: RIGHT,
      [CONFIG_SHUTTER_SLAT_IMAGE]: 'esc-blind.png',
      [CONFIG_ROTATE_SLATS_SHUTTER_IMAGE]: false,
      [CONFIG_WINDOW_IMAGE]: 'esc-window2.png',
      [CONFIG_SHUTTER_BOTTOM_IMAGE]: '',
      [CONFIG_SHOW_TILT]: true,
      [CONFIG_NAME]: 'Blind',
    },
    [ESC_TEST]: {
      [CONFIG_WINDOW_IMAGE]: '',
      [CONFIG_SHUTTER_SLAT_IMAGE]: 'rode_rechthoek.png',
      [CONFIG_SHUTTER_BOTTOM_IMAGE]: 'gele_rechthoek.png',
      [CONFIG_NAME]: 'Test',
    }
  };

  const LOCALIZE_TEXT= {
    // Search for this in Lokalise.com : component::cover::entity_component::_::state::
    [SHUTTER_STATE_OPEN]:    'component.cover.entity_component._.state.open',
    [SHUTTER_STATE_CLOSED]:  'component.cover.entity_component._.state.closed',
    [SHUTTER_STATE_CLOSING]: 'component.cover.entity_component._.state.closing',
    [SHUTTER_STATE_OPENING]: 'component.cover.entity_component._.state.opening',
    [ACTION_SHUTTER_OPEN]:       'ui.card.cover.open_cover',
    [ACTION_SHUTTER_OPEN_TILT]:  'ui.card.cover.open_cover_tilt',
    [ACTION_SHUTTER_STOP]:       'ui.card.cover.stop_cover',
    [ACTION_SHUTTER_CLOSE]:      'ui.card.cover.close_cover',
    [ACTION_SHUTTER_CLOSE_TILT]: 'ui.card.cover.close_cover_tilt',

    [UNAVAILABLE]: 'state.default.unavailable',
  };

  // v0.4 i18n: card-private string dict for the four locales covering >80% of HA's
  // active user base. We deliberately delegate cover states (open/closed/opening/
  // closing) and action verbs (open_cover, close_cover, stop_cover, *_tilt) to HA's
  // own `hass.localize()` via LOCALIZE_TEXT above - those already ship in every HA
  // language. This dict only carries strings HA core does NOT translate: the
  // "Battery"/"Signal" aria-prefixes, "locked" (passive-mode lock), and the
  // composite Fully/Partially open/closed labels used on the partial-open button
  // and the 3x2 position grid. Adding a new locale = add a key here. Falls back to
  // `en` for any locale not in the dict (graceful, no broken UI for non-EU users).
  // Preset config tokens (awning/curtain/roller-shutter/shade/blind) deliberately
  // stay untranslated because they are config keys, not labels - translating them
  // would break existing users' YAML.
  const TRANSLATIONS = {
    en: {
      battery: 'Battery',
      signal: 'Signal',
      locked: 'locked',
      fully_open: 'Fully open',
      fully_closed: 'Fully closed',
      partially_open: 'Partially open',
      partially_closed: 'Partially closed',
      tilt: 'Tilt',
    },
    de: {
      battery: 'Batterie',
      signal: 'Signal',
      locked: 'gesperrt',
      fully_open: 'Vollständig geöffnet',
      fully_closed: 'Vollständig geschlossen',
      partially_open: 'Teilweise geöffnet',
      partially_closed: 'Teilweise geschlossen',
      tilt: 'Lamellen',
    },
    fr: {
      battery: 'Batterie',
      signal: 'Signal',
      locked: 'verrouillé',
      fully_open: 'Entièrement ouvert',
      fully_closed: 'Entièrement fermé',
      partially_open: 'Partiellement ouvert',
      partially_closed: 'Partiellement fermé',
      tilt: 'Inclinaison',
    },
    es: {
      battery: 'Batería',
      signal: 'Señal',
      locked: 'bloqueado',
      fully_open: 'Totalmente abierto',
      fully_closed: 'Totalmente cerrado',
      partially_open: 'Parcialmente abierto',
      partially_closed: 'Parcialmente cerrado',
      tilt: 'Inclinación',
    },
  };


  const IMAGE_TYPES = [
    CONFIG_WINDOW_IMAGE,
    CONFIG_VIEW_IMAGE,
    CONFIG_SHUTTER_SLAT_IMAGE,
    CONFIG_SHUTTER_BOTTOM_IMAGE,
  ];
  const SHUTTER_CSS =`

      .${ESC_CLASS_SHUTTER} {
        overflow: visible;
      }
      .${ESC_CLASS_MIDDLE} {
        display: flex;
        flex-flow: var(--esc-flex-flow-middle);
        justify-content: center;
        align-items: center;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
      }
      .${ESC_CLASS_BUTTONS} {
        display: flex;
        flex: none;
        flex-flow: var(--esc-buttons-flex-flow);
        justify-content: center;
        align-items: center;
        max-width: 100%;
      }
      .${ESC_CLASS_TILT_BUTTONS} {
        display: flex;
        flex: none;
        flex-flow: var(--esc-buttons-flex-flow2);
        justify-content: center;
        align-items: center;
        max-width: 100%;
      }
      .${ESC_CLASS_BUTTONS_TOP} {
        flex-flow: row;
      }
      .${ESC_CLASS_BUTTONS_BOTTOM} {
        flex-flow: row;
      }
      .${ESC_CLASS_BUTTONS_LEFT} {
        flex-flow: column;
      }
      .${ESC_CLASS_BUTTONS_RIGHT} {
        flex-flow: column;
      }
      .${ESC_CLASS_BUTTONS} ha-icon-button {
        display: inline-block;
        width: min-content;
      }
      /* v0.3 a11y: visible keyboard-focus indicator. Honours --focus-ring-color
         from HA theme tokens, falls back to currentColor so it works on every
         palette. Mouse clicks don't trigger :focus-visible, only keyboard nav. */
      .${ESC_CLASS_BUTTONS} ha-icon-button:focus-visible,
      .${ESC_CLASS_TILT_BUTTONS} ha-icon-button:focus-visible {
        outline: 2px solid var(--focus-ring-color, currentColor);
        outline-offset: 2px;
        border-radius: 50%;
      }
      /* v0.3 a11y: screen-reader-only live region. Visible to AT, hidden visually. */
      .esc-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .${ESC_CLASS_SELECTOR} {
        max-width: 100%;
        margin: 2px;
        justify-content: center;
        position: relative;
        align-items: center;
        background-color: var(--esc-window-background-color);
        background-image: var(--esc-window-background-image);
        background-size: cover;
        background-position: center;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: var(--esc-selector-flex-basis);
      }
      .${ESC_CLASS_SELECTOR_PICTURE} {
        width: var(--esc-window-width);
        height: var(--esc-window-height);
        max-width: 100%;
        z-index: ${Z_INDEX_PICTURE};
        justify-content: center;
        position: relative;
        margin: auto;
        line-height: 0;
        overflow: var(--esc-overflow); /* prevents image overflow */
        image-rendering: auto;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        image-rendering: -webkit-optimize-contrast;
      }
      .${ESC_CLASS_SELECTOR_PICTURE}>img {
        justify-content: center;
        margin: auto;
        width: 100%;
        height: 100%;
      }
      .${ESC_CLASS_SELECTOR_PICKER} {
        z-index: ${Z_INDEX_PICKER};
        position: absolute;
        left: -50%;
        width: 100%;
        top: var(--esc-picker-top);
        height: var(--esc-picker-height);
        cursor: pointer;
        transform-origin: center;
        transform: var(--esc-transform-picker);
        touch-action: none;
        user-select: none;
      }
      .${ESC_CLASS_SELECTOR_SLIDE} {
        z-index: ${Z_INDEX_SLIDE};
        text-align: start;` /* align to left, solves #104 */ +`
        position: absolute;
        left: -50%;
        width: 100%;
        overflow: var(--esc-overflow);
        bottom: 100%;
        transform-origin: bottom;
        transform: var(--esc-transform-slide);
        image-rendering: auto;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        image-rendering: -webkit-optimize-contrast;
      }


      .${ESC_CLASS_SELECTOR_SLIDE_SLATS} {
        height: var(--esc-slide-slats-height);
        background-position: var(--esc-slide-background-main-position);
        background-image: var(--esc-slide-background-main-image);
        background-color: var(--esc-slide-background-main-color);

        background-repeat: repeat;
        background-size: var(--esc-slide-background-slats-size);
        transform: var(--esc-transform-undo-slats-rotate);
      }
      .tilt-slat1 {
        height: var(--esc-slide-slats-height);
        display: flex;
        flex-direction: column-reverse;
        overflow: var(--esc-overflow);
      }
      .tilt-slat2 {
        height: var(--esc-slat-height);
        width: 100%;
        flex-shrink: 0;
        overflow: var(--esc-overflow);
        perspective: 500px;
      }
      .tilt-slat-edge {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: grey;
      }
      .tilt-slat3 {
        z-index: 2;
        position: absolute;

        height: var(--esc-tilt-slat-height);
        width: var(--esc-tilt-slat-width);
        background-size: var(--esc-tilt-slat-background-size);

        transform-origin: var(--esc-tilt-slat-origin);

        transform: rotateX(var(--esc-tilt-angle-deg)) var(--esc-transform-tilt-slat-rotate);

        background-repeat: repeat;
        background-position: var(--esc-slide-background-main-position);
        background-color: var(--esc-slide-background-main-color);
        background-image: var(--esc-slide-background-main-image);
      }

      .${ESC_CLASS_SELECTOR_SLIDE_EDGE} {
        height: var(--esc-slide-edge-height);
        background-position: var(--esc-slide-background-edge-position);
        background-image: var(--esc-slide-background-edge-image);
        background-color: var(--esc-slide-background-edge-color);

        background-repeat: repeat;
        background-size: var(--esc-slide-background-edge-size);
      }
      .${ESC_CLASS_SELECTOR_PARTIAL} {
        z-index: ${Z_INDEX_PARTIAL};
        position: absolute;
        top: 0;
        left: -50%;
        width: 100%;
        height: 1px;
        background-color: grey;
        transform-origin: center center;
        transform: var(--esc-transform-partial);
      }
      .${ESC_CLASS_MOVEMENT_OVERLAY} {
        z-index: ${Z_INDEX_OVERLAY};
        display: var(--esc-movement-overlay-display);

        top : 0;
        height: 100%;
        width: 100%;
        position: absolute;
        /* v0.2 themable: fall back to legacy rgba overlay if integrator doesn't override.
           Reason for keeping a dark-tinted default: overlay must darken the card whether the
           HA theme is light or dark, so semi-transparent black still reads as "in motion". */
        background-color: var(--esc-movement-overlay-bg, rgba(0,0,0,0.3));
        text-align: center;
        --mdc-icon-size: 60px;
        transform-origin: center center;
      }
      .${ESC_CLASS_MOVEMENT_UP},
      .${ESC_CLASS_MOVEMENT_DOWN} {
        z-index: ${Z_INDEX_MOVEMENT_ICON} !important;
        transform: var(--esc-transform-movement);
        position: absolute;
        display: block;
      }
      .${ESC_CLASS_MOVEMENT_UP} {
        display: var(--esc-movement-overlay-up-display);
      }
      .${ESC_CLASS_MOVEMENT_DOWN} {
        display: var(--esc-movement-overlay-down-display);
      }
      .${ESC_CLASS_TOP}, .${ESC_CLASS_BOTTOM} {
        text-align: center;
        padding-top: calc(${8}px*var(--esc-text-scale));
        padding-bottom: calc(${8}px*var(--esc-text-scale));
      }
      .${ESC_CLASS_TOP}>.${ESC_CLASS_LABEL} {
         display: var(--esc-display-name-top);
      }
      .${ESC_CLASS_BOTTOM}>.${ESC_CLASS_LABEL}  {
         display: var(--esc-display-name-bottom);
      }
      .${ESC_CLASS_TOP}>.${ESC_CLASS_POSITION} {
         display: var(--esc-display-position-top);
      }
      .${ESC_CLASS_BOTTOM}>.${ESC_CLASS_POSITION}  {
         display: var(--esc-display-position-bottom);
      }
      .${ESC_CLASS_LABEL} {
        display: inline-block;
        clear: both;
        font-size: calc(${FONT_SIZE_LABEL}px*var(--esc-text-scale));
        line-height: calc(${LINE_HEIGHT_LABEL}px*var(--esc-text-scale));
        bottom: 0;
        position: relative;
        cursor: pointer;

      }
      .${ESC_CLASS_LABEL_DISABLED} {
        color: var(--secondary-text-color);
      }
      .${ESC_CLASS_TITLE_DISABLED} {
        display: hidden;
      }
      .${ESC_CLASS_POSITION} {
        display: inline-block;
        vertical-align: top;
        clear: both;
        font-size: calc(${FONT_SIZE_POSITION}px*var(--esc-text-scale));
        line-height: calc(${LINE_HEIGHT_POSITION}px*var(--esc-text-scale));
        height:      calc(${LINE_HEIGHT_POSITION}px*var(--esc-text-scale));
        border-radius: 5px;
        margin: ${MARGIN_POSITION}px;

      }
      .${ESC_CLASS_POSITION}>span {
        background-color: var(--secondary-background-color);
        padding: 2px 5px 2px 5px;
      }
      .${ESC_CLASS_HA_ICON} {
        padding-bottom: 10px;
        transform: var(--esc-button-rotate);

      }
      .${ESC_CLASS_HA_ICON_TILT} {
        padding-bottom: 10px;
      }
      .${ESC_CLASS_HA_ICON_LOCK} {
        position: relative;
        top: -0.3em;
        --mdc-icon-size: 10px;
      }
      .blankDiv{
        width: calc(var(--mdc-icon-size)*1.5);
        height: 1px;
      }
      .${ESC_CLASS_TOP_LEFT}, .${ESC_CLASS_TOP_RIGHT} {
        --mdc-icon-size: var(--icon-size-wifi-battery, 24px);
        position: absolute;
        padding: 0 10px 10px 10px;
        text-align: center;
      }
      .${ESC_CLASS_TOP_LEFT} {
        color: var(--esc-top-left-color);
        left: 0;
      }
      .${ESC_CLASS_TOP_RIGHT} {
        color: var(--esc-top-right-color);
        right: 0;
      }
      .${ESC_CLASS_TOP_ICON_TEXT} {
        text-align: center;
        line-height: var(--esc-top-icon-text-line-height);
        font-size: var(--esc-top-icon-text-font-size);
      }
`+
        // TILT test CSS
`
    .tilt-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .tilt-slider-wrap {
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: var(--esc-tilt-slider-rotate);
    }

    .tilt-slider-class {
      width: ${ESC_BASE_HEIGHT_PX}px;
      transform: scale(var(--esc-button-scale));
    }

    .tilt-slat-container {
      position: relative;
      box-sizing: border-box;
      /* v0.2 themable: divider-color + secondary-background-color are HA theme tokens
         that already flip with light/dark. Hardcoded grey + #f9f9f9 made the tilt
         widget glow white on a dark HA theme - this is the primary bug v0.2 fixes. */
      border: 1px solid var(--esc-tilt-container-border, var(--divider-color, grey));
      border-radius: 5px;
      display: flex;
      flex: none;
      flex-flow: var(--esc-buttons-flex-flow2);
      align-items: center;
      justify-content: center;
      background: var(--esc-tilt-container-bg, var(--secondary-background-color, #f9f9f9));
    }

    .tilt-slat-class {
      width: calc(var(--esc-button-scale)*${ICON_SIZE}px);
      height: calc(var(--esc-button-scale)*${ICON_SIZE}px);
      position: relative;
      transform: rotate(var(--esc-tilt-angle-deg-graph));
    }

    .tilt-line {
      width: calc(var(--esc-button-scale)*2px);
      height: calc(var(--esc-button-scale)*${ICON_BUTTON_SIZE-ICON_SIZE/2}px);
      /* v0.2 themable: fall back to HA's error-color so the indicator inherits the
         theme's accent; hard red was unreadable against HA red accent themes. */
      background: var(--esc-tilt-line-color, var(--error-color, red));
      position: absolute;
      top: calc(var(--esc-button-scale)*${ -12/2 +ICON_SIZE/4}px);
      left: calc(var(--esc-button-scale)*${ICON_SIZE/2}px);
      transform: translateX(-50%);
    }

    /* v0.2 signature: dark-mode filter for legacy PNG slat/edge/window assets.
       The upstream PNGs were baked at ~#F5F5F5 for light themes. Under HA's dark
       theme they glow like lightboxes against dark cards. Applying a modest
       brightness/contrast knock-down via filter preserves the slat rotation
       illusion while letting the card blend into dark dashboards.
       Opt-out via --esc-dark-asset-filter: none; on :host.
       Opt-in regardless of OS pref via data-force-dark="1" on :host. */
    @media (prefers-color-scheme: dark) {
      :host(:not([data-force-light="1"])) .${ESC_CLASS_SELECTOR_SLIDE_SLATS},
      :host(:not([data-force-light="1"])) .${ESC_CLASS_SELECTOR_SLIDE_EDGE},
      :host(:not([data-force-light="1"])) .${ESC_CLASS_SELECTOR_PICTURE} {
        filter: var(--esc-dark-asset-filter, brightness(0.82) contrast(1.08) saturate(0.92));
      }
    }
    :host([data-force-dark="1"]) .${ESC_CLASS_SELECTOR_SLIDE_SLATS},
    :host([data-force-dark="1"]) .${ESC_CLASS_SELECTOR_SLIDE_EDGE},
    :host([data-force-dark="1"]) .${ESC_CLASS_SELECTOR_PICTURE} {
      filter: var(--esc-dark-asset-filter, brightness(0.82) contrast(1.08) saturate(0.92));
    }
`  ;

  /**
   * LIT- element flow of update cycle:
   *
   * someProperty.hasChanged
   * requestUpdate
   * performUpdate
   * shouldUpdate
   * update
   * render
   * firstUpdated
   * updated
   * updateComplete
   */

  // Pure config-merge logic extracted from SuperproShutterCardNew#buildConfig so
  // it can be unit-tested without instantiating the LitElement. Behaviour is
  // byte-equivalent to the original private method - the class now delegates
  // here. messageCollector is invoked with (text, level, entityId) so callers
  // can route warnings to MessageManager (production) or capture them in an
  // array (tests). Returns the merged config object.
  function buildConfig(configBase, configSub, messageCollector = () => {}) {
    const entityId = (configSub && configSub.entity) || 'General';
    if (typeof configSub !== 'object' || configSub === null) {
      configSub = { [CONFIG_ENTITY_ID]: configSub };
    }
    const uniqueKeys = getUniqueKeysFromObjects(configSub, configBase);
    if (uniqueKeys.length > 0) {
      uniqueKeys.forEach((key) => {
        messageCollector(`Unknown keyword: [${key}], check your input!`, HA_ALERT_WARNING, entityId);
      });
    }
    const configPreset = { ...ESC_PRESET[configSub[CONFIG_SHUTTER_PRESET]] } || {};
    const newConfigSub = { ...configSub };

    Object.keys(DEPRECATED).forEach((key) => {
      if (newConfigSub[key] != null) {
        messageCollector(
          `Deprecated: [${key}], use '${DEPRECATED[key].new}'!`,
          HA_ALERT_WARNING,
          entityId,
        );
        newConfigSub[DEPRECATED[key].new] = newConfigSub[key];
        delete newConfigSub[key];
      }
    });

    Object.keys(REMOVED).forEach((key) => {
      if (newConfigSub[key] != null) {
        messageCollector(
          `Removed: [${key}], use '${REMOVED[key].new}'!`,
          HA_ALERT_ERROR,
          entityId,
        );
        newConfigSub[REMOVED[key].new] = newConfigSub[key];
        delete newConfigSub[key];
      }
    });

    return { ...configBase, ...configPreset, ...newConfigSub };
  }

  // Pure helper: keys present in obj1 but not in obj2. Hoisted out of the class
  // for the same reason as buildConfig - testability without LitElement boot.
  function getUniqueKeysFromObjects(obj1, obj2) {
    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);
    return keysObj1.filter((key) => !keysObj2.includes(key));
  }

  // Pure helper: 0..100 level -> ICONCOLORS key. Mirrors batteryIconColor()
  // and signalLevelIndex() which both quantise into 5 bands via /20 + round,
  // with -1 reserved for NaN/unavailable. Extracted so the colour bucketing
  // can be locked in tests without instantiating shutterCfg.
  function levelToColorKey(level) {
    const rounded = Math.round(level / 20);
    return Number.isNaN(rounded) ? -1 : rounded;
  }

  // Pure helper: percent -> tilt rotateX deg. Mirrors
  // SuperproShutter#getTiltAngle: linearly interpolate between min and max,
  // then negate (CSS rotateX direction). Extracted so we can lock the
  // transform in tests without booting Lit.
  function tiltAngleDeg(sliderPosition, tiltAngleMin = 0, tiltAngleMax = 180) {
    return -(tiltAngleMin + (sliderPosition / 100) * (tiltAngleMax - tiltAngleMin));
  }

  // Pure helper: clamp percentage with optional invert. UI/cover invert flags
  // matter at separate layers in the live class; this helper composes both
  // flips in one shot for tests that just need the final number.
  function normalisePosition(value, { invertCover = false, invertUi = false } = {}) {
    let pos = boundary(Number(value), 0, 100);
    if (invertCover) pos = 100 - pos;
    if (invertUi) pos = 100 - pos;
    return pos;
  }

  class SuperproShutterCardNew extends i{
    //reactive properties
    static properties = {
      // reactive variables from Home Assistant Card
      hass: {type: Object},
      config: {type: Object},
      // local reactive variables
      isShutterConfigLoaded: {type: Boolean, state: true},
      localCfgs: {type: Object, state: true},
      screenOrientation: {type: Object, state: true},
      escImagesLoaded: {type: Boolean, state: true},
      gridPixelWidth: {type: Number, state: true},
    };

    constructor() {
      super(); //  mandetory by Lit-element

      this.isShutterConfigLoaded = false;
      this.localCfgs = {};
      this.screenOrientation= LANDSCAPE;
      this.escImagesLoaded = false;
      this.gridPixelWidth = HA_GRID_PX_WIDTH;

      this.gridPixelHeight = HA_GRID_PX_HEIGHT;
      this.gridPixelGap = HA_GRID_PX_GAP;
      this.gridContainer = null;
      this.isResizeInProgress = false;

      this.messageManager= new MessageManager();
    }
    #defAllShutterConfig()
    {
      this.globalCfg = this.#buildConfig(CONFIG_DEFAULT,this.config);
      this.config.entities.map((currEntityCfg) => {
        let escCfg = this.#buildConfig(this.globalCfg,currEntityCfg);
        this.localCfgs[escCfg.entity] = new shutterCfg(this.hass,escCfg);
      });
      this.isShutterConfigLoaded = true;
    }

    // Thin wrapper: routes warnings to MessageManager, delegates the merge
    // logic to the free function above so unit tests can exercise it without
    // booting Lit. Public surface unchanged.
    #buildConfig(configBase, configSub) {
      return buildConfig(configBase, configSub, (text, level, entityId) => {
        this.messageManager.addMessage(text, level, entityId);
      });
    }

    getUniqueKeysFromObjects(obj1, obj2) {
      return getUniqueKeysFromObjects(obj1, obj2);
    }

  /*
  * OVERRIDE FUNCTIONS LIT ELEMENT
  */
    shouldUpdate(changedProperties) {

      //console.log('Card shouldUpdate Start');
      let doUpdate =false;

      if (this.isShutterConfigLoaded){

        changedProperties.forEach((oldValue, propName) => {
          //console.log(`Card shouldUpdate, Property ${propName} changed. oldValue: `,oldValue,`; new: `,this[propName]);
          // ******
          // TODO: improve select/search states
          // ******

          if (propName=='hass'){
            /* On hass update, check if there is a cover change */
              const liveStates = this[propName].states;

              // v1.0.1 dark theme: HA themes set hass.themes.darkMode independently
              // of OS prefers-color-scheme. Without this, the v0.2 slat-PNG dark
              // filter never engages on HA dark themes when the OS is in light
              // mode (common: HA dark theme via schedule, macOS light during day).
              // Reflect the HA-theme dark state to data-force-dark="1" which the
              // existing v0.2 :host([data-force-dark="1"]) CSS rule already styles.
              this.#applyHaDarkTheme();

              Object.keys(this.localCfgs).forEach(entityId =>{
                const liveEntityFromHass = liveStates[entityId];
                if (liveEntityFromHass) {
                  const cfg = this.localCfgs[entityId];
                  // v0.4 i18n: refresh hass on cfg so getT()/formatPercent() always
                  // read the current locale; also covers HA reconnects where the
                  // hass object identity changes and the captured localize closure
                  // would otherwise be stale.
                  cfg.updateHass(this[propName]);
                  let shutterState = `${liveEntityFromHass.state}-${liveEntityFromHass.attributes.current_position}-${liveEntityFromHass.attributes.current_tilt_position}`;
                  if (shutterState != cfg.shutterState){
                    doUpdate =true;
                    cfg.shutterState = shutterState;
                  }
                  // check battery entity change
                  const currentBatteryEntity = cfg.getBatteryEntity();
                  const batteryEntityId = currentBatteryEntity?.getEntityId() ?? null;
                  if (batteryEntityId) {
                    const batteryEntityFromHass = liveStates[batteryEntityId];
                    if (batteryEntityFromHass && batteryEntityFromHass.state !== currentBatteryEntity?.getState() ){
                      doUpdate =true;
                      cfg.setBatteryEntity(this.hass,batteryEntityId);
                      cfg.batteryState = NOT_KNOWN.includes(batteryEntityFromHass.state) ? UNAVAILABLE : batteryEntityFromHass.state;
                    }
                  }
                  // check signal entity change
                  const currentSignalEntity = cfg.getSignalEntity();
                  const signalEntityId = currentSignalEntity?.getEntityId();
                  if (signalEntityId) {
                    const signalEntityFromHass = liveStates[signalEntityId];
                    if (signalEntityFromHass && signalEntityFromHass.state !== currentSignalEntity?.getState() ){
                      doUpdate =true;
                      cfg.setSignalEntity(this.hass,signalEntityId);
                      cfg.signalState = NOT_KNOWN.includes(signalEntityFromHass.state) ? UNAVAILABLE : signalEntityFromHass.state;
                    }
                  }
                }
              });

          }else {
            /* On any other property change, do the update */
            doUpdate =true;
          }
        });
      }
      //console_log('Card shouldUpdate End: doUpdate=',doUpdate);
      //console_log('Card shouldUpdate ========================\n');
      return doUpdate;
    //    return changedProperties.has('prop1');
    }
    willUpdate(changedProperties){
      super.willUpdate();
    }
    update(changedProperties){
      super.update(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        console_log(`Card Update, Property ${propName} changed. oldValue: ${oldValue}; new: ${this[propName]}`);

      });
    }
    render() {
      //console.log('#@ CARD RENDER !!!!!!');
      if (!this.config || !this.hass || !this.isShutterConfigLoaded) {
        return b`Waiting ...`;
      }
      let showMessages = this.messageManager.countMessages() && this.closestElement('.element-preview',this) !== null;

      let htmlout = b`
        ${showMessages ? b`${this.messageManager.displayGroupMessages('GridSize')} ` : ''}
        ${showMessages ? b`${this.messageManager.displayGroupMessages('General')} ` : ''}
        <ha-card .header=${this.config.title}>
          <div class="${ESC_CLASS_SHUTTERS}">
            ${this.config.entities.map( // TODO replace config by global.cfg ??
              (currEntity) => {
                const entityId = currEntity.entity || currEntity;

                this.localCfgs[entityId].setCoverEntity(this.hass,entityId);
                this.localCfgs[entityId].setBatteryEntity(this.hass,currEntity.battery_entity);
                this.localCfgs[entityId].setSignalEntity(this.hass,currEntity.signal_entity);

                return b`
                  <superpro-shutter
                    .react_ShutterState=${this.localCfgs[entityId].shutterState}
                    .react_BatteryState=${this.localCfgs[entityId].batteryState}
                    .react_SignalState=${this.localCfgs[entityId].signalState}
                    .react_ScreenOrientation=${this.screenOrientation}
                    .react_EscImagesLoaded=${this.escImagesLoaded}

                    .hass=${this.hass}
                    .cfg=${this.localCfgs[entityId]}
                    .escImages=${this.escImages}
                  >
                  </superpro-shutter>
                  ${showMessages ? b`${this.messageManager.displayGroupMessages(entityId)} ` : ''}
                  <div class="${ESC_CLASS_SHUTTER_SEPERATE}"></div>
                `;              }
            )}
          </div>
        </ha-card>
      `;
      //console.log('### grid-width=',this.gridPixelWidth);

      //console.log('Card Render ready');
      return htmlout;
    }
    firstUpdated() {
    }
    updated(changedProperties) {
      super.updated(changedProperties);
    }
    getGrid(){
      if (!this.gridContainer){
        this.defGridContainer();
      }
      if (this.gridContainer) {
        //console.log('GridContainer');
        const style = getComputedStyle(this.gridContainer);
        const previousGridWidth = this.gridPixelWidth;
        const columns = style.getPropertyValue('grid-template-columns');
        this.gridPixelWidth = Math.ceil(parseFloat(columns.split(/\s+/)[0]));
        if (previousGridWidth !== this.gridPixelWidth) {
          //console.log(`#@#@ Card getGrid: changed from ${previousGridWidth} to ${this.gridPixelWidth} `);
          this.getGridOptions('from getGrid()');

        }
      }
    }
    defGridContainer(){
        let el = this;
        while (el) {
          el.tagName || '(unknown)';
          el.id || '(no id)';
          el.classList?.value || '(no class)';

          if (
              el.classList?.contains('container')) {
            break;
          }

          el = el.parentElement || el.getRootNode()?.host;
        }
        this.gridContainer = el;

        return el;
    }
    // v1.0.1: reflect HA-theme darkMode to a host attribute that the v0.2
    // :host([data-force-dark="1"]) CSS rule already targets. Idempotent: setting
    // the same attribute value is a no-op in the DOM, so calling this on every
    // hass update is cheap.
    #applyHaDarkTheme(){
      const isDark = this.hass?.themes?.darkMode === true;
      if (isDark){
        if (this.getAttribute('data-force-dark') !== '1'){
          this.setAttribute('data-force-dark', '1');
        }
      } else if (this.hasAttribute('data-force-dark')){
        this.removeAttribute('data-force-dark');
      }
    }
    connectedCallback() {
      super.connectedCallback();


      //const parent = this.parentElement;

      const gridContainer = this.defGridContainer();
      if (!gridContainer) {
        if (!this.isShutterConfigLoaded) {
          this.#defAllShutterConfig();
        }
        this.getGridOptionsInternal();
      }
      //console.log('Card connectedCallback: observing parent:',gridContainer);
      // Check grid layout changes


      /* get element of hui-view to detect resizing */
      Globals.huiView = findElementInBody(HA_HUI_VIEW);

      // v1.0.1: catch the case where hass arrives before connectedCallback runs
      // (e.g. element re-attached after view switch). shouldUpdate also calls
      // this; both paths converge on the same attribute, no race.
      this.#applyHaDarkTheme();

      this.messageManager.addMessage(`GridSize: rows: ${this.nbRows}, columns: ${this.nbCols}`,HA_ALERT_SUCCESS,'GridSize');
      this.startResizeObserver();
      //console_log('Card connectedCallback End');
    }
    startResizeObserver() {

      const onResize = (entries) => {
        /* Things todo when risize is detected */
        //console.log('#@ Card Resize detected by onResize',Globals.huiView?.getBoundingClientRect());
        if (!this.isResizeInProgress) {
          entries.forEach(entry => {
            this.checkOrientation(entry); // check orientation on huiView resize
          });
        }
        this.getGrid();
      };
      this.resizeObserver = new ResizeObserver(onResize);
      this.resizeObserver.observe(Globals.huiView);
    }
    // Check the orientation based on the window and div visibility
    disconnectedCallback() {
      //console.log('Card disconnectedCallback Start');
      super.disconnectedCallback();
      this.resizeObserver?.disconnect();
    }

    checkOrientation(element) {

      this.isResizeInProgress = true; // Set flag to indicate a resize operation is in progress

      // Get the window size
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Get the bounding rect of the element
      const rect = element.contentRect;

      // Calculate the visible width and height of the element within the viewport
      const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));
      const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));

      // Determine the orientation based on visible area and window size
      Globals.screenOrientation = {value: visibleWidth*1.4 > visibleHeight ? LANDSCAPE : PORTRAIT};
      this.screenOrientation = Globals.screenOrientation.value;
      console_log('Card Resize checkOrientation: screenOrientation:',this.screenOrientation);

      // After orientation check is done, reset the flag
      this.isResizeInProgress = false;
    }
    closestElement(selector, base = this) {
    // from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
      function __closestFrom(el) {
        if (!el || el === document || el === window) return null;
        let found = el.closest(selector);
        return found ? found : __closestFrom(el.getRootNode().host);
      }
      return __closestFrom(base);
    }


    static get styles() {
      const CSS = `
     .${ESC_CLASS_SHUTTERS} {
      padding: ${16}px;
     }
    .${ESC_CLASS_SHUTTER_SEPERATE}:not(:last-child) {
      height: ${5}px;
      margin-left: auto;
      margin-right: auto;
      width: 25%;
      border-width: 3px 0 0 0;
      border-style: solid;
      border-color: var(--divider-color);
    }
    `;
      return i$3`${r$2(CSS)}`;
    }
  /*
  * OVERRIDE FUNCTIONS HA CARD
  */
    async setConfig(config)
    {

      if (!config.entities) {
        throw new Error('You need to define entities');
      }
      this.config = config;
      this.escImages = new EscImages(this.config);
      this.escImagesLoaded = await this.escImages.processImages();
    }
    getCardSize() {
      return this.config.entities.length + 1;
    }

    //Section layout : we compute the size of the card. (experimental)
    getGridOptions(text="from External"){
      /**
       * load config is needed.
       */
      //console.log(`getGridOptions ${text}`);
      if (!this.isShutterConfigLoaded)
        this.#defAllShutterConfig();

      let options = this.getGridOptionsInternal();
      //console.log('getGridOptions results: ',options);
      return options;
    }

    getGridOptionsInternal(){

      let cardSize;
      let seperate=0;


      if (this.config && this.config.entities && this.isShutterConfigLoaded){
        var tempCardName="";
        cardSize= this.gridSizeCardTitle();

        Object.keys(this.localCfgs).forEach(key =>{
          let cfg = this.localCfgs[key];
          if (!tempCardName) tempCardName= cfg.friendlyName();
          let sizeCardTop = this.gridSizeCardTop(cfg);
          cardSize = this.gridAddVertical(cardSize,sizeCardTop);

          let sizeCardMiddle = this.gridSizeCardMiddle(cfg);
          cardSize = this.gridAddVertical(cardSize,sizeCardMiddle);

          let sizeCardBottom = this.gridSizeCardBottom(cfg);
          cardSize = this.gridAddVertical(cardSize,sizeCardBottom);

          cardSize = this.gridAddVertical(cardSize,{localWidthPx: 0,localHeightPx: seperate});
          seperate=8;  // size of seperation bar

        });
        // add padding
        cardSize = this.gridAddBoth(cardSize,{localWidthPx: 16,localHeightPx: 32});
      }
      this.closest('.container');
      /*
      *
      * Calculate the number of rows and columns
      * Use sizes from calculated cardSize and HA grid sizes
      */
      //console.log(`getGridOptionsInternal: cardSize: `,cardSize);
      this.nbRows= Math.ceil((cardSize.localHeightPx+this.gridPixelGap)/(this.gridPixelHeight+this.gridPixelGap));
      this.nbCols= Math.ceil((cardSize.localWidthPx+this.gridPixelGap)/(this.gridPixelWidth+this.gridPixelGap));
      //console.log(cardSize.localWidthPx, this.gridPixelWidth, this.gridPixelGap, `=> nbCols: ${this.nbCols}`);

      const divCard= this.closest('div.card');
      /* Set CSS variables for number of rows and columns */
      /* Used in CSS to set sizes */

      if (divCard){
        divCard.style.setProperty('--row-size',this.nbRows);
        divCard.style.setProperty('--column-size',this.nbCols);
      }
      //console.log(`getGridOptionsInternal: calculated nbRows: ${this.nbRows}, nbCols: ${this.nbCols} for card '${tempCardName}'`);
      return {
        rows: this.nbRows,
        columns: this.nbCols,
  //      min_rows: this.nbRows-1,
  //      max_rows: this.nbRows+1,
  //      min_columns: this.nbCols-1,
  //      max_columns: this.nbCols+1,
      };
   }
    gridSizeCardTitle(){

      // HA basic sizes for calculations:

      const haCardTitleFontHeight= 24;
      const haTitleHeightPx = 76;
      const haTitleFont = 'Roboto, Noto, sans-serif';

      let localHeightPx=0;
      let localWidthPx=0;

      let titleSize;
      if (this.config.title){
        // TODO: Add Card title to globalCfg
        titleSize= getTextSize(this.config.title,haTitleFont,haCardTitleFontHeight);
        localHeightPx = haTitleHeightPx;
        localWidthPx  = titleSize.width;
      }
      return {localWidthPx,localHeightPx};
    }

    gridSizeCardTop(cfg){

      // HA basic sizes for calculations:

      const haTitleFont = 'Roboto, Noto, sans-serif';
      const shutterTitleHeight = FONT_SIZE_LABEL * cfg.textScaleFactor();

      let localHeightPx=0;
      let localWidthPx =0;
      /*
      * Size shutter title row
      */
      if (!cfg.nameDisabled()){
        let titleSize = getTextSize(cfg.friendlyName(),haTitleFont,shutterTitleHeight,'400');

        let partHeightPx = LINE_HEIGHT_LABEL * cfg.textScaleFactor();
        let partWidthPx = titleSize.width;

        localHeightPx += partHeightPx;
        localWidthPx  += partWidthPx;
      }
      /*
      * Size shutter-opening row
      */
      if (!cfg.openingDisabled() && !cfg.inlineHeader()){
        let position =cfg.currentDevicePosition();
        let tiltPosition = cfg.currentDeviceTiltPosition();
        let pctSize = getTextSize(cfg.computePositionText(position,tiltPosition),haTitleFont,FONT_SIZE_POSITION * cfg.textScaleFactor());
        let partHeightPx = LINE_HEIGHT_POSITION * cfg.textScaleFactor() + 2*MARGIN_POSITION;  // including margin
        let partWidthPx = pctSize.width;
        localHeightPx += partHeightPx;
        localWidthPx = Math.max(localWidthPx,partWidthPx);
      }
      localHeightPx += 16; // padding

      return {localWidthPx,localHeightPx};
    }
    gridSizeCardMiddle(cfg){
      /*
      * size image
      */
      let sizeStandardButtons = this.gridSizeStandardButtons(cfg);
      let sizeWindowImage = this.gridSizeWindowImage(cfg);
      let sizePartialOpenButtons = this.gridSizePartialOpenButtons(cfg);
      let sizeTiltSection = this.gridSizeTiltSection(cfg);

      let cardSize;
      if (cfg.buttonsInRow()){
        cardSize = this.gridAddHorizontal(sizeStandardButtons,sizeWindowImage);
        cardSize = this.gridAddHorizontal(cardSize,sizePartialOpenButtons);
        cardSize = this.gridAddHorizontal(cardSize,sizeTiltSection);
      }else {
        cardSize = this.gridAddVertical(sizeStandardButtons,sizeWindowImage);
        cardSize = this.gridAddVertical(cardSize,sizePartialOpenButtons);
        cardSize = this.gridAddVertical(cardSize,sizeTiltSection);
      }
      //console.log('gridSizeCardMiddle: ',cardSize);
      return cardSize;
    }
    gridSizeCardBottom(cfg){

      // HA basic sizes for calculations:

      let localHeightPx=0;
      let localWidthPx =0;
      // TODO: Add definition
      localHeightPx += 16; // padding

      return {localWidthPx,localHeightPx};
    }
    gridSizeStandardButtons(cfg){
      // HA basic sizes for calculations:

      let localHeightPx=0;
      let localWidthPx =0;

      const haButtonSize = cfg.iconButtonSize();
      /*
      * size standard-buttons
      */
      if (!cfg.disableStandardButtons()) {
        if (cfg.buttonsInRow()){
          localHeightPx = haButtonSize*3;
          localWidthPx = haButtonSize;
        }else {
          localHeightPx = haButtonSize;
          localWidthPx = haButtonSize*3;
        }
      }
      //console.log('gridSizeStandardButtons: ',{localWidthPx,localHeightPx});
      return {localWidthPx,localHeightPx};
    };
    gridSizeTiltButtons(cfg){
      // HA basic sizes for calculations:

      let localHeightPx=0;
      let localWidthPx =0;

      const haButtonSize = cfg.iconButtonSize();

      /*
      * size tilt-buttons
      */
      if (cfg.showTilt() || cfg.partialActive()) {
        if (cfg.buttonsInRow()){
          if  (cfg.showTilt()) localHeightPx+=haButtonSize*2;
          if  (cfg.partialActive())  localHeightPx+=haButtonSize;
          localWidthPx += haButtonSize;
        }else {
          if  (cfg.showTilt()) localWidthPx+=haButtonSize*2;
          if  (cfg.partialActive())  localWidthPx+=haButtonSize;
          localHeightPx = haButtonSize;
        }
      }
      return {localWidthPx,localHeightPx};
    };
    gridSizeWindowImage(cfg){
      /*
      * size image
      */
      let localHeightPx = cfg.windowHeightPx();
      let localWidthPx = cfg.windowWidthPx();

      return {localWidthPx,localHeightPx};
    };
    gridSizeTiltSection(cfg){
      /*
      * size of tilt options
      */
      let localHeightPx = cfg.windowHeightPx();
      let localWidthPx = cfg.tiltSliderOnly() ? 20 : 56;  // TODO: to be improved

      return {localWidthPx,localHeightPx};
    };
    gridSizePartialOpenButtons(cfg){
      // HA basic sizes for calculations:

      let localHeightPx=0;
      let localWidthPx =0;

      const haButtonSize = cfg.iconButtonSize();

      /*
      * size partial-open-buttons
      */
      if (!cfg.disablePartialOpenButtons()) {
        if (cfg.buttonsInRow()){
          localHeightPx += haButtonSize*3;
          localWidthPx += haButtonSize*2;
        }else {
          localHeightPx += haButtonSize*2;
          localWidthPx += haButtonSize*3;
        }
      }
      return {localWidthPx,localHeightPx};
    };
    gridAddVertical(size1,size2){
      return {localWidthPx: Math.max(size1.localWidthPx,size2.localWidthPx),localHeightPx: size1.localHeightPx+size2.localHeightPx};
    }
    gridAddHorizontal(size1,size2){
      return {localWidthPx: size1.localWidthPx+size2.localWidthPx,localHeightPx: Math.max(size1.localHeightPx,size2.localHeightPx)};
    }
    gridAddBoth(size1,size2){
      return {localWidthPx: size1.localWidthPx+size2.localWidthPx,localHeightPx: size1.localHeightPx+size2.localHeightPx};
    }

    // ############################################################################################################
    static getStubConfig(hass, unusedEntities, allEntities) {
      //Search for a cover entity unused first then in all entities.
      let entityId = unusedEntities.find((eid) => eid.split(".")[0] === "cover" );
      if (!entityId) {
        entityId = allEntities.find((eid) => eid.split(".")[0] === "cover");
      }
      hass.states[entityId];
      return {
        "entities": [{
          "entity": entityId,
          "name": "My First Superpro Shutter Card",
          "top_offset_pct": 13,
          "button_up_hide_states": [
            SHUTTER_STATE_OPEN,
            SHUTTER_STATE_OPENING,
            SHUTTER_STATE_CLOSING
          ],
          "button_stop_hide_states": [
            SHUTTER_STATE_OPEN,
            SHUTTER_STATE_CLOSED,
            SHUTTER_STATE_PARTIAL_OPEN
          ],
          "button_down_hide_states": [
            SHUTTER_STATE_CLOSED,
            SHUTTER_STATE_OPENING,
            SHUTTER_STATE_CLOSING
          ]
        }]
      };
    }
  }


  class SuperproShutter extends i
  {
    // loaded from SuperproShutterCardNew():
    // - react_ShutterState
    // - react_BatteryState
    // - react_SignalState
    // - react_ScreenOrientation
    // - react_EscImagesLoaded

    // - hass
    // - cfg
    // - escImages

    //reactive properties
    static properties = {
      // reactive variables from parent card
      react_ShutterState: {type: String},        // for detecting state of shutter (open close etc)
      react_BatteryState: {type: String},        // for detecting battery state change
      react_SignalState: {type: String},         // for detecting signal state change
      react_ScreenOrientation: {type: Object},   // for chnage in screen orientation  by resize window or rotate device
      react_EscImagesLoaded: {type: Boolean},

      // local reactive variables
      react_ShutterPosition: {state: true},       // for dragging shutter onscreen
      react_TiltPosition: {state: true},         // for dragging tilt-shutter onscreen
      react_ResizeDivShutterSelector: {state: true,type: Boolean}, // for detecting resize of shutter div by responsive design
      // v0.3 a11y: reactive announcement string for screen-reader live region.
      // Updated via _scheduleAnnounce() with 500ms debounce so VoiceOver/NVDA
      // don't read every intermediate position during a drag or stream.
      _announcedPosition: {state: true},
    };
    constructor(){
      //console_log('Shutter constructor');
      super(); //  mandetory by Lit-element
        // local reactive variables
      this.react_ShutterPosition=-1;
      this.react_TiltPosition=-1;
      this.react_ResizeDivShutterSelector= false;

      this.screenPosition=-1;
      this.actualScreenPosition=-1; // position on the computerscreen
      this.actualTiltPosition=-1; // real tilt position
      this.positionText ='';
      this.action = '#';

      this[ESC_CLASS_SELECTOR]=null;

      // v0.3 a11y: live-region announcement state. _lastAnnouncedText avoids
      // re-announcing identical text (e.g. when render fires for unrelated reasons).
      this._announcedPosition = '';
      this._lastAnnouncedText = '';
      this._announceTimer = null;

      //console_log('Shutter constructor ready');
    }
    // v0.3 a11y: debounce position announcements by 500ms. Screen readers hear
    // the settled value rather than every transient position during opening/closing
    // or while the user drags the slider.
    _scheduleAnnounce(text){
      if (!text || text === this._lastAnnouncedText) return;
      if (this._announceTimer) clearTimeout(this._announceTimer);
      this._announceTimer = setTimeout(() => {
        this._lastAnnouncedText = text;
        this._announcedPosition = text;
        this._announceTimer = null;
      }, 500);
    }
    shouldUpdate(changedProperties)
    {
      changedProperties.forEach((oldValue, propName) => {
        //console.log(`Shutter shouldUpdate (${this.cfg.friendlyName()}), Property ${propName} changed. oldValue: `,oldValue,`; new: `,this[propName]);
      });
      return this.react_EscImagesLoaded ? true : false;
    }
    connectedCallback() {
      //console_log('Shutter connectedCallback');
      super.connectedCallback();

      //console_log('Shutter connectedCallback ready');
    }
    disconnectedCallback() {
      //console_log('Shutter disconnectedCallback');
      super.disconnectedCallback();
      if (this.resizeObserver) this.resizeObserver.disconnect();
      // v0.3 a11y: drop any pending announcement on detach so the timer doesn't
      // outlive the element (would write to a destroyed reactive property).
      if (this._announceTimer) {
        clearTimeout(this._announceTimer);
        this._announceTimer = null;
      }
      //console_log('Shutter disconnectedCallback ready');
    }

    startResizeObserver() {
      const onResize = (entries) => {
        /* Things todo when resize is detected */
        entries.forEach(entry =>{
          // keep size due to start-up sizing problem in card-editor.
          // TODO this should be solved by some async/await, but don't know how (yet)
          this.actualWidthEdit = Math.floor(entry.contentRect.width);
          this.actualHeightEdit= Math.floor(entry.contentRect.height);
        });
        this.react_ResizeDivShutterSelector = !this.react_ResizeDivShutterSelector;
      };
      this.resizeObserver = new ResizeObserver(onResize);
      this.resizeObserver.observe(this[ESC_CLASS_SELECTOR]);
    }
    update(changedProperties) {
      super.update(changedProperties);  // this calls the render() function.
      this.action='cover-update';
    }

    render()
    {
      let entityId = this.cfg.entityId();
      let positionText;
      if (this.action=='user-drag'){
        // position from screen-dragging shown
        this.actualScreenPosition = this.screenPosition;  // old
        this.actualShutterPosition = this.react_ShutterPosition;
        this.actualTiltPosition = this.cfg.currentBaseTiltPosition();
      }else if (this.action=='user-drag-tilt'){
        // tilt position from slider-dragging shown
        this.actualScreenPosition =  this.defScreenPositionFromCurrentPosition(); //old
        this.actualShutterPosition = this.cfg.currentDevicePosition();
        this.actualTiltPosition = this.react_TiltPosition;
      }else {
        // physical position cover shown.
        this.actualScreenPosition =  this.defScreenPositionFromCurrentPosition();
        this.actualShutterPosition = this.cfg.currentDevicePosition()?? 0;

        this.actualTiltPosition = this.cfg.currentDeviceTiltPosition() ?? 0;
        this.react_TiltPosition = this.actualTiltPosition; // TODO: logical not needed, but actual it does: check
      }
      positionText =  this.cfg.computePositionText(this.actualShutterPosition,this.actualTiltPosition);

      let htmlParts = new htmlCard(this,positionText);

      // v0.3 a11y: schedule a debounced announce. Only fires from the natural
      // settled-state render path (action !== 'user-drag') so dragging doesn't
      // generate hundreds of pending announcements.
      if (this.action !== 'user-drag' && this.action !== 'user-drag-tilt') {
        this._scheduleAnnounce(`${this.cfg.friendlyName()}: ${positionText.replace(/\s+/g,' ').trim()}`);
      }

      //console_log('Shutter Render ready');
      return b`
      <div
        class=${ESC_CLASS_SHUTTER}
        data-shutter="${entityId}"
        style = "${htmlParts.defStyleVars()}"
        role="group"
        aria-label="${this.cfg.friendlyName()}"
      >
        ${htmlParts.showBatteryIcon()}
        ${htmlParts.showSignalIcon()}

        ${htmlParts.showTopDiv()}

        <div class="${ESC_CLASS_MIDDLE}">
          ${htmlParts.showLeftButtons()}
          ${htmlParts.showCentralWindow()}
          ${!this.cfg.disablePartialOpenButtons() || this.cfg.showTilt()
            ? b`
              ${!this.cfg.disablePartialOpenButtons() ? htmlParts.showRightButtons():''}
              ${(this.cfg.showTilt()) ? htmlParts.showTiltSection():''}
            `
            : b`<div class='blankDiv'></div>`
          }
        </div>
        ${htmlParts.showBottomDiv()}
        <!-- v0.3 a11y: visually-hidden polite live region. Screen readers
             announce the debounced position update without disrupting focus. -->
        <div class="esc-sr-only" role="status" aria-live="polite" aria-atomic="true">
          ${this._announcedPosition || ''}
        </div>
      </div>
    `;
    }
    firstUpdated(changedProperties) {
      this[ESC_CLASS_SELECTOR] = findElement(this, `.${ESC_CLASS_SELECTOR}`);
      const picker = findElement(this, `.${ESC_CLASS_SELECTOR_PICKER}`);
      if (picker) {
        this.manageEvents(ADD_EVENT, MOUSEDOWN, picker, this.mouseDown);

      }

      // tilt .....
      if (this.cfg.showTilt()){
        this.tiltSlider = findElement(this,'.tilt-slider-class');

        this.manageEvents(ADD_EVENT, MOUSEDOWN, this.tiltSlider, this.mouseDownTilt);

      }
      this.startResizeObserver();
    }

    manageEvents(action, phase, target, handler) {
      const EVENTS = {
        [MOUSEDOWN]: ['touchstart', 'mousedown', 'pointerdown'],
        [MOUSEMOVE]: ['touchmove', 'mousemove', 'pointermove'],
        [MOUSEUP]:   ['touchend', 'mouseup', 'pointerup']
      };
      const eventMethod = {
         [ADD_EVENT]:    target.addEventListener.bind(target),
         [REMOVE_EVENT]: target.removeEventListener.bind(target)
      };


      for (const type of EVENTS[phase]) {
        if (phase === MOUSEDOWN && type === 'touchstart' && action === ADD_EVENT) {
          // Workaround: reattach touchstart as non-passive
          target.removeEventListener(type, handler);
          eventMethod[action](type, handler, { passive: false });
        } else {
          //method(type, handler);
          eventMethod[action](type, handler);
        }
      }
    }
    getOverflow(){
      return this.cfg.debug()?'visible':'hidden';
    }

    getTiltAngleDeg(sliderPosition){
      const angleDeg = this.getTiltAngle(sliderPosition)+'deg';
      return angleDeg;
    }
    getTiltAngleDegGraph(sliderPosition){
      const angleDeg =Math.min(-2,(Math.max(-178,this.getTiltAngle(sliderPosition))))+this.tiltIconRotate2()+'deg';
      return angleDeg;
    }
    getTiltAngle(sliderPosition){
      const angle = -(this.cfg.tiltAngleMin() + (sliderPosition / 100) * (this.cfg.tiltAngleMax() - this.cfg.tiltAngleMin()));
      return angle;
    }

    updated(changedProperties) {
      // after update and render


      // Log the properties that were updated
      //console_log('Shutter Updated');
      super.updated(changedProperties);

      if (this.cfg.showTilt()){
        this.tiltSlider.value = this.react_TiltPosition; // !!!!! Special ..Bug ??...
      }
      this.action='cover-update';
    }

  /**
   * TRANSFORM FUNCTIONS
   */

    transformDiv(screenPosition){
      // TODO: improve handling screenPosition
      const size_x = this.actualGlobalWidthPx();
      const size_y = this.actualGlobalHeightPx();
      const size_global = new xyPair(size_x,size_y);
      const size_local=this.cfg.switchAxis(size_global);
      return [
        this.cfg.transformTranslate(size_global.x/2,size_global.y/2), // to mid-point
        this.cfg.transformRotate(), // rotate around div transform-origin
        this.cfg.transformScale(size_global.x,size_global.y), // correct local sizes
        this.cfg.transformTranslate(0,-size_local.y/2 + screenPosition),  // Move to correct position
      ].join(SPACE);
    }
    transformPicker(screenPosition){
      // TODO: improve handling screenPosition
      const size_x = this.actualGlobalWidthPx();
      const size_y = this.actualGlobalHeightPx();
      const size_global = new xyPair(size_x,size_y);
      const size_local=this.cfg.switchAxis(size_global);
      return [
        this.cfg.transformTranslate(size_global.x/2,size_global.y/2), // to mid-point
        this.cfg.transformRotate(), // rotate around div transform-origin
        this.cfg.transformScalePicker(size_global.x,size_global.y), // correct local width of the Picker
        this.cfg.transformTranslate(0,-size_local.y/2 + screenPosition),  // Move to correct position

      ].join(SPACE);
    }
    transformSlide(screenPosition){
      // TODO: improve handling screenPosition
      const size_x = this.actualGlobalWidthPx();
      const size_y = this.actualGlobalHeightPx();
      const size_global = new xyPair(size_x,size_y);
      const size_local=this.cfg.switchAxis(size_global);
      return [
        this.cfg.transformTranslate(size_global.x/2,size_global.y/2), // to mid-point
        this.cfg.transformRotate(), // rotate around div transform-origin
        //this.cfg.transformScale(size_global.x,size_global.y), // correct local width of the Picker
        this.cfg.transformScalePicker(size_global.x,size_global.y), // correct local width of the Picker
        this.cfg.transformTranslate(0,-size_local.y/2 + screenPosition),  // Move to correct position

      ].join(SPACE);
    }
    transformUndoSlatsRotate(){

      let rotate;
      let size_x;
      let size_y;
      if (this.cfg.rotateSlatsImage()){
        size_x = 1;
        size_y = 1;
        rotate =  0;
      }else {
        size_x = this.actualGlobalWidthPx();
        size_y = this.slatsSlideHeightPx();
        rotate = -this.cfg.getCloseAngle();
      }
      return [
        this.cfg.transformRotate(rotate), // rotate around div transform-origin
        this.cfg.transformScale(size_x,size_y), // correct local width of the main
      ].join(SPACE);
    }
    transformTiltSlatRotate(){
      // --esc-transform-tilt-slat-rotate
      let rotate=0;
      if (this.cfg.rotateSlatsImage()){
        rotate = 0;
      }else {
        rotate = -90;
      }
      return [
        this.cfg.transformRotate(rotate), // rotate around div transform-origin
      ].join(SPACE);
    }
    tiltSliderRotate(){
      let rotate= this.cfg.buttonsInRow() ? -90 : 0;
      return this.cfg.transformRotate(rotate);
    }
    tiltIconRotate2(){
      let rotate= this.cfg.buttonsInRow() ? 0 : -90;
      return rotate;
    }
    tiltIconRotate3(){
      let rotate= -this.tiltIconRotate2();
      return this.cfg.transformRotate(rotate);
    }
    tiltSlatOrigin(){
      // --esc-tilt-slat-origin
      var origin;
      if (this.cfg.rotateSlatsImage()) {
        origin = '50% 50%';
      }else {
        const width = ((this.shutterSlatSize().x)/2)+UNITY;
        origin = `${width} ${width}`;
      }
      return origin;
    }
    transformPartial(){
      const size_x = this.actualGlobalWidthPx();
      const size_y = this.actualGlobalHeightPx();
      const size_global = new xyPair(size_x,size_y);
      const size_local=this.cfg.switchAxis(size_global);
      const position = this.defScreenPositionFromCurrentPosition(this.cfg.calcOffset(this.cfg.partial()));
      return [
        this.cfg.transformTranslate(size_global.x/2,size_global.y/2), // to mid-point
        this.cfg.transformRotate(), // rotate around div transform-origin
        this.cfg.transformScale(size_global.x,size_global.y), // correct local sizes
        this.cfg.transformTranslate(0,-size_local.y/2+position),  // Move to correct position
      ].join(SPACE);
    }
    transformMovement(){
      const size_x = this.actualGlobalWidthPx();
      const size_y = this.actualGlobalHeightPx();
      const size_global = new xyPair(size_x,size_y);
      const size_local=this.cfg.switchAxis(size_global);
      const position = this.offsetOpenedPx()+this.coverSizeMovingDirectionPx()/2.0;
      return [
        'translate(-50%, -50%)',
        this.cfg.transformTranslate(size_global.x/2,size_global.y/2), // to mid-point
        this.cfg.transformRotate(), // rotate around div transform-origin
        this.cfg.transformTranslate(0,-size_local.y/2+position),  // Move to correct position
      ].join(SPACE);
    }

    coverSizeMovingDirectionPx(){
      return this.cfg.verticalMovement() ? this.coverHeightPx():this.coverWidthPx();
    }
    windowSizeMovingDirectionPx(){
      return this.cfg.verticalMovement()
        ? this.actualGlobalHeightPx()
        : this.actualGlobalWidthPx();
    }
    slatSizeMovingDirectionPx(){
      //const value = this.cfg.verticalMovement() || this.cfg.rotateSlatsImage()
      const value = this.cfg.rotateSlatsImage()
        ? this.shutterSlatSize().y
        : this.shutterSlatSize().x;
      return value;
    }
    slatsSizeMovingDirectionPx(){
      const value = this.cfg.rotateSlatsImage()
        ? this.slideHeightPx()-this.shutterBottomSize().y
        : this.slideHeightPx();
      return value;
    }

    coverHeightPx(){
      return this.actualGlobalHeightPx()-this.offsetClosedPx() - this.offsetOpenedPx();
    }
    coverWidthPx(){
      return this.actualGlobalWidthPx()-this.offsetClosedPx() - this.offsetOpenedPx();
    }
    shutterBottomSize(){
      const imageSize = this.escImages.getShutterBottomImageSize(this.cfg.entityId());
      return imageSize;
    };

    shutterMainBackgroundPosition(){

      const direction=this.cfg.unrollUnfoldDirection();
      const dirs={
        [DOWN]:BOTTOM,
        [UP]:TOP,
        [LEFT]:LEFT,
        [RIGHT]:RIGHT
      };
      const position = this.cfg.rotateSlatsImage() ? BOTTOM : dirs[direction] || BOTTOM;
      return position;
    }
    shutterEdgeBackgroundPosition(){
      const position = BOTTOM;
      return position;
    }
  /*
        const y_size_bottom= this.escImages.getShutterBottomImageSize(this.cfg.entityId()).y+'px';
        [DOWN]:'center bottom '+y_size_bottom,
        [UP]:'center top '+y_size_bottom,
        [LEFT]:'left '+y_size_bottom+' center',
        [RIGHT]:'right '+y_size_bottom+' center',
  */

    shutterSlatSizePercentage(){
      let imageSize = this.shutterSlatSize();
      let imagePercentage;
      if (this.cfg.rotateSlatsImage()) {
        imagePercentage = this.sizePercentageSlat(imageSize);
      }else {
        if (!this.cfg.verticalMovement()) imageSize =  new xyPair(imageSize.y, imageSize.x);
        imagePercentage = this.sizePercentageSlat(imageSize);
        if (!this.cfg.verticalMovement()) imagePercentage = new xyPair(imagePercentage.y, imagePercentage.x);
        imagePercentage = new xyPair("50%","50%");
      }
      let size = `${imagePercentage.x} ${imagePercentage.y}`;
      return size;
    }
    shutterSlatsSizePercentage(){
      let imageSize = this.shutterSlatSize();
      let imagePercentage;
      if (this.cfg.rotateSlatsImage()) {
        imagePercentage = this.sizePercentage(imageSize);
      }else {
        if (!this.cfg.verticalMovement()) imageSize =  new xyPair(imageSize.y, imageSize.x);
        imagePercentage = this.sizePercentage(imageSize);
        if (!this.cfg.verticalMovement()) imagePercentage = new xyPair(imagePercentage.y, imagePercentage.x);
      }
      let size = `${imagePercentage.x} ${imagePercentage.y}`;
      return size;
    }
    shutterSlatSize(){
      let imageSize = this.escImages.getShutterSlatImageSize(this.cfg.entityId());
      return imageSize;
    }
    canShowTilt(){
      // when no size, no Tilt show possible
      return this.slatSizeMovingDirectionPx()? true:false;
    }


    shutterBottomSizePercentage(){
      const imageSize = this.escImages.getShutterBottomImageSize(this.cfg.entityId());
      let size;
      if (this.cfg.stretchEdgeImage()){
        size= `100% ${imageSize.y}px`;
      }else {
        size= `${imageSize.x}px ${imageSize.y}px`;
      }
      return size;
    }
    sizePercentage(imageSize){
      this.cfg.friendlyName();
      let width;
      let height = this.slatsSlideHeightPx();
      if (this.cfg.verticalMovement()) {
        width = this.cfg.windowWidthPx();
      }else {
        width = this.cfg.windowHeightPx();
      }
      let x = 100/(width/imageSize.x)+ "%"; // TODO stretch_bottom_image
      let y = 100/(height/imageSize.y)+ "%"; // TODO stretch_bottom_image
      let size = new xyPair(x,y);
      return size;

    }
    sizePercentageSlat(imageSize){
      let width;
      let height = this.shutterSlatSize().y;
      if (this.cfg.verticalMovement()) {
        width = this.cfg.windowWidthPx();
      }else {
        width = this.cfg.windowHeightPx();
      }

      // let factor = width / imageSize.x;
      let x = `calc(100% / (${width}/${imageSize.x}))`; // TODO stretch_bottom_image
      let y = `calc(100% / (${height}/${imageSize.y}))`; // TODO stretch_bottom_image
      let size = new xyPair(x,y);
      return size;

    }


    offsetOpenedPx(){
      return Math.round(this.cfg.offsetOpenedPct()/ 100 * this.windowSizeMovingDirectionPx());
    }
    offsetClosedPx(){
      return Math.round(this.cfg.offsetClosedPct())/ 100 * this.windowSizeMovingDirectionPx();
    }
    /**
     *
     * @returns Netto local height of the slats-part (= total - edge)
     */
    slatsSlideHeightPx(){
      return this.slideHeightPx()-this.shutterBottomSize().y;
    }
    /**
     * @return Local height of the slide-part
     */
    slideHeightPx(){
      const size = this.windowSizeMovingDirectionPx();
      return size;
    }
    slatHeightPx(){
      return this.slatSizeMovingDirectionPx();
    }
    slatHeightPx1(){
      return this.slatsSizeMovingDirectionPx();
    }
    coverOpenedPx(){
      return this.offsetOpenedPx();
    }
    coverClosedPx(){
      const size_global = new xyPair(this.actualGlobalWidthPx(),this.actualGlobalHeightPx());
      const size_local=this.cfg.switchAxis(size_global);

      return size_local.y-this.offsetClosedPx();
    }
    tiltSlatHeightPx(){
      let value;
      if (this.cfg.rotateSlatsImage()){
        value = this.shutterSlatSize().y;
      }else {
        value =this.slatHeightPx1();
      }
      return value;
    }
    tiltSlatWidthPx(){
      let value;

      if (this.cfg.rotateSlatsImage()){
        value = '100%';
      }else {
        value = (this.shutterSlatSize().x/this.cfg.windowWidthPx()*100)+'%';
      }
      return value;
    }
    tiltSlatBackgroundSize(){
      let value;
      if (this.cfg.rotateSlatsImage()){
        value = this.shutterSlatSizePercentage();
      }else {
        value = '100% '+(this.shutterSlatSize().y/this.cfg.windowHeightPx()*100)+'%';
      }
      return value;
    }

    defScreenPositionFromCurrentPosition(currentDevicePosition=this.cfg.currentDevicePosition()) {

      let visiblePosition = this.cfg.visiblePosition(currentDevicePosition);
      let screenPosition = this.offsetOpenedPx() + (this.coverSizeMovingDirectionPx() * (this.cfg.invertPosition(visiblePosition)) / 100) ;
      return screenPosition;

    }

    actualGlobalWidthPx() {
      let width;
      if (this.actualWidthEdit) {
        width= this.actualWidthEdit; // Should be solved by an async /await / promise ...
      }else {
        width = this[ESC_CLASS_SELECTOR]?.getBoundingClientRect()?.width ?? this.cfg.windowWidthPx();
      }
      return width;

    }
    actualGlobalHeightPx() {
      let height;
      if (this.actualHeightEdit) {
        height = this.actualHeightEdit; // Should be solved an by asymc /await / promise ...
      }else {
        height = this[ESC_CLASS_SELECTOR]?.getBoundingClientRect()?.height ?? this.cfg.windowHeightPx();
        //height = this.cfg.windowHeightPx();
      }
      return height;
    }

   //##########################################

    doHassMoreInfoOpen(entityIdValue) {
      if (!this.cfg.passiveMode()){
        let e = new Event('hass-more-info', { composed: true});
        e.detail= { entityId : entityIdValue};
        this.dispatchEvent(e);
      }
    }
    doOnclick(command, position=null) {

      this.action='user-pick';
      let entityId= this.cfg.entityId();

      if (position !==null) position = this.cfg.applyInvertToPosition(position);
      //command = this.cfg.applyInvertToCommand(command);

      const services ={
        [ACTION_SHUTTER_OPEN] : {'args': ''},
        [ACTION_SHUTTER_CLOSE] : {'args': ''},
        [ACTION_SHUTTER_STOP] : {'args': ''},
        [ACTION_SHUTTER_SET_POS] : {'args': {position: position}},
        [ACTION_SHUTTER_OPEN_TILT] : {'args': ''},
        [ACTION_SHUTTER_CLOSE_TILT] : {'args': ''},
        [ACTION_SHUTTER_SET_POS_TILT] : {'args': {tilt_position: position}},
      };
      //console.log('=> doOnclick: command:',command,'position:',position,'entityId:',entityId);
      this.callHassCoverService(entityId,command,services[command].args);
    }
    getBasePickPoint(event){
      /* get picked point */
      this.basePickPoint = this.getPoint(event);
      /* get current shutter position on screen */
      this.basePickPoint.shutterScreenPos = this.defScreenPositionFromCurrentPosition();

      console_log('screenPos: basePickPoint:',this.basePickPoint);
    }

    getShutterPosition(event){
      const screenPosition = this.getScreenPosFromPickPoint(event);
      const shutterPosition = this.getShutterPosFromScreenPos(screenPosition);
      return shutterPosition;
    }
    getTiltPosition(event){
      // since Tilt uses Silder, event is not needed
      const  tiltPosition = this.tiltSlider.value ?? 0;
      return tiltPosition;
    }

    getShutterPosFromScreenPos(screenPosition){
      let shutterPosition = SHUTTER_OPEN_PCT - Math.round((screenPosition - this.offsetOpenedPx()) * (this.cfg.offset()) / this.coverSizeMovingDirectionPx());
      return shutterPosition;
    }

    getScreenPosFromPickPoint(event){
      const pickPoint = this.getPoint(event);
      let delta = {x: pickPoint.x - this.basePickPoint.x ,
                   y: pickPoint.y - this.basePickPoint.y};
      let delta_local = this.cfg.rotateBackOrtho(delta);

      let newScreenPosition =
        Math.round(boundary(
          this.basePickPoint.shutterScreenPos+delta_local.y,
          this.coverOpenedPx(),
          this.coverClosedPx()
        ));
      return newScreenPosition;
    }
    getPoint(event){
      let point ={
        x: event.pageX ,
        y: event.pageY,
        coord: new xyPair(event.pageX,event.pageY),
        movementVertical: this.cfg.verticalMovement(),
        closingDir: this.cfg.unrollUnfoldDirection()
      };
      return point;
    }
    mouseDown = (event) =>
    {
      console_log('mouseDown:',event.type,event);
      if (event.pageY === undefined || this.cfg.passiveMode()) return;

      if (event.cancelable) {
        //Disable default drag event
        event.preventDefault();
      }
      this.action='user-drag';

      this.getBasePickPoint(event);

      this.manageEvents(ADD_EVENT, MOUSEMOVE, this, this.mouseMove);
    };
    mouseDownTilt = () => {
      this.action='user-drag-tilt';
      this.manageEvents(ADD_EVENT, MOUSEMOVE, this, this.mouseMoveTilt);
    }


    mouseMove = (event) =>
    {
      if (event.pageY === undefined) return;

      this.manageEvents(ADD_EVENT, MOUSEUP, this, this.mouseUp);

      this.action='user-drag';
      this.screenPosition = this.getScreenPosFromPickPoint(event); //old
      this.react_ShutterPosition = this.getShutterPosition(event);

      const tiltPosition = this.cfg.currentDeviceTiltPosition();
      this.positionText = this.cfg.computePositionText(this.react_ShutterPosition,tiltPosition);
    };
    mouseMoveTilt = (event) => { // mouseMoveTilt
      //console.log('event',event.pageY);
      this.manageEvents(ADD_EVENT, MOUSEUP, this, this.mouseUpTilt);
      this.action='user-drag-tilt';
      this.react_TiltPosition = this.getTiltPosition(event);

      const shutterPosition = this.cfg.currentDevicePosition();
      this.positionText = this.cfg.computePositionText(shutterPosition,this.react_TiltPosition);
    }
  mouseUpTilt = (event) => {
      this.action='user-pick';
      this.manageEvents(REMOVE_EVENT, MOUSEUP, this, this.mouseUpTilt);
      this.manageEvents(REMOVE_EVENT, MOUSEMOVE, this, this.mouseMoveTilt);

      const tiltPosition = this.getTiltPosition(event);
      this.sendShutterTiltPosition(this.cfg.entityId(),tiltPosition);
    }

    mouseUp = (event) =>
    {
      console_log('mouseUp:',event.type,event);
      if (event.pageY === undefined) return;

      this.action='user-pick';
      this.manageEvents(REMOVE_EVENT, MOUSEUP, this, this.mouseUp);
      this.manageEvents(REMOVE_EVENT, MOUSEMOVE, this, this.mouseMove);

      const shutterPosition = this.getShutterPosition(event);

      if (this.cfg.isCoverFeatureActive(ESC_FEATURE_SET_POSITION)){
        // send position to shutter
        this.sendShutterPosition(this.cfg.entityId(), shutterPosition);
      }else {
        // no ESC_FEATURE_SET_POSITION, so send open- or close-action
        const actionToSend = (shutterPosition > 50) ? ACTION_SHUTTER_OPEN : ACTION_SHUTTER_CLOSE;
        this.callHassCoverService(this.cfg.entityId(),actionToSend);
      }
    };

    sendShutterPosition( entityId, position)
    {
      this.callHassCoverService(entityId,ACTION_SHUTTER_SET_POS, { position: this.cfg.applyInvertToPosition(position) });
    }
    sendShutterTiltPosition( entityId, position)
    {
      this.callHassCoverService(entityId,ACTION_SHUTTER_SET_POS_TILT, { tilt_position: this.cfg.applyInvertToTiltPosition(position) });
    }
    callHassCoverService(entityId,command,args='')
    {
      //console.log(`callHassCoverService: command: ${command}, position: ${args.position ?? args.tilt_position}, entityId: ${entityId}`);
      if (!this.cfg.passiveMode()){
        const domain= 'cover';
        if (this.checkServiceAvailability(domain, command)) {
          this.hass.callService(domain, command, {
            entity_id: entityId,
            ...args
          });
          //console.log(`Service call: '${domain}'-'${command}' for entity '${entityId}' with args:`,args);
        } else {
          console.warn(`Service '${domain}'-'${command}' not available`);
        }
      }
    }
    checkServiceAvailability(serviceDomain, serviceName) {
      const services = this.hass.services;
      let check = services[serviceDomain]?.[serviceName] !== undefined;
      return check;
    }

    static get styles() {
      return i$3`${r$2(SHUTTER_CSS)}
    `
    }
  }
  class shutterCfg {

    #cfg={};
    #coverEntity=null;
    #batteryEntity=null;
    #signalEntity=null;
    #localize={};
    // v0.4 i18n: live hass reference so getT()/formatPercent() always read the
    // current locale. Refreshed via updateHass() on every parent hass update so
    // language switches in HA propagate without rebuilding the cfg.
    #hass=null;
    shutterState = NONE;
    batteryState = NONE;
    signalState = NONE;

    constructor(hass,escConfig)
    {
      let entityId = this.entityId(escConfig[CONFIG_ENTITY_ID] ? escConfig[CONFIG_ENTITY_ID] : escConfig);

        this.#hass = hass;
        this.#setLocalize(hass.localize);
        this.setCoverEntity(hass,entityId);

        this.setBatteryEntity(hass,escConfig[CONFIG_BATTERY_ENTITY_ID]);
        this.setSignalEntity(hass,escConfig[CONFIG_SIGNAL_ENTITY_ID]);

        this.debug(!!escConfig[CONFIG_DEBUG]);

        this.friendlyName(escConfig[CONFIG_NAME] || this.getCoverEntity()?.getFriendlyName() || UNKNOWN);

        this.invertPercentageCover(escConfig[CONFIG_INVERT_PCT_COVER]);
        this.invertPercentageUi(escConfig[CONFIG_INVERT_PCT_UI]);
        this.invertPercentageTiltCover(escConfig[CONFIG_INVERT_PCT_TILT_COVER]);
        this.invertPercentageTiltUi(escConfig[CONFIG_INVERT_PCT_TILT_UI]);
        this.invertOpenCloseUi(escConfig[CONFIG_INVERT_OPEN_CLOSE_UI]);
        this.invertOpenCloseCover(escConfig[CONFIG_INVERT_OPEN_CLOSE_COVER]);
        this.tiltSliderOnly(escConfig[CONFIG_TILT_SLIDER_ONLY]);
        this.passiveMode(escConfig[CONFIG_PASSIVE_MODE]);

        this.unrollUnfoldDirection(escConfig[CONFIG_CLOSING_DIRECTION]);

        let base_height_px = escConfig[CONFIG_BASE_HEIGHT_PX];
        let resize_height_pct = escConfig[CONFIG_RESIZE_HEIGHT_PCT];
        this.windowHeightPx(Math.round(boundary(resize_height_pct,ESC_MIN_RESIZE_HEIGHT_PCT,ESC_MAX_RESIZE_HEIGHT_PCT) / 100 * base_height_px));

        let base_width_px  = escConfig[CONFIG_BASE_WIDTH_PX];
        let resize_width_pct  = escConfig[CONFIG_RESIZE_WIDTH_PCT];
        this.windowWidthPx(Math.round(boundary(resize_width_pct, ESC_MIN_RESIZE_WIDTH_PCT ,ESC_MAX_RESIZE_WIDTH_PCT)  / 100 * base_width_px));

        this.rotateSlatsImage(escConfig[CONFIG_ROTATE_SLATS_SHUTTER_IMAGE]);
        this.stretchEdgeImage(escConfig[CONFIG_STRETCH_EDGE_SHUTTER_IMAGE]);

        this.scaleButtons(escConfig[CONFIG_SCALE_BUTTONS]);
        this.scaleIcons(escConfig[CONFIG_SCALE_ICONS]);
        this.scaleTexts(escConfig[CONFIG_SCALE_TEXTS]);

        this.partial(boundary(escConfig[CONFIG_PARTIAL_CLOSE_PCT]));
        this.offset(boundary(escConfig[CONFIG_OFFSET_IS_CLOSED_PCT]));

        this.offsetOpenedPct(boundary(escConfig[CONFIG_OFFSET_OPENED_PCT]));
        this.offsetClosedPct(boundary(escConfig[CONFIG_OFFSET_CLOSED_PCT]));

        this.showTilt(!!escConfig[CONFIG_SHOW_TILT]);

        this.tiltAngleMin(escConfig[CONFIG_TILT_ANGLE_MIN]);
        this.tiltAngleMax(escConfig[CONFIG_TILT_ANGLE_MAX]);

        this.defButtonPosition(escConfig);

        this.titlePosition(escConfig[CONFIG_TITLE_POSITION]);  //deprecated
        this.namePosition(escConfig[CONFIG_NAME_POSITION]);
        this.nameDisabled(escConfig[CONFIG_NAME_DISABLED]);

        this.openingPosition(escConfig[CONFIG_OPENING_POSITION]);
        this.openingDisabled(escConfig[CONFIG_OPENING_DISABLED]);
        this.inlineHeader(escConfig[CONFIG_INLINE_HEADER]);

        this.alwaysPercentage(!!escConfig[CONFIG_ALWAYS_PCT]);
        this.disableEndButtons(!!escConfig[CONFIG_DISABLE_END_BUTTONS]);
        this.pickerOverlapPx(ESC_PICKER_OVERLAP_PX);
        this.disableStandardButtons(escConfig[CONFIG_DISABLE_STANDARD_BUTTONS]);
        this.disablePartialOpenButtons(escConfig[CONFIG_DISABLE_PARTIAL_OPEN_BUTTONS]);

        this.buttonStopHideStates(escConfig[CONFIG_BUTTON_STOP_HIDE_STATES]  ? escConfig[CONFIG_BUTTON_STOP_HIDE_STATES] : ESC_BUTTON_STOP_HIDE_STATES);
        this.buttonOpenHideStates(escConfig[CONFIG_BUTTON_OPENED_HIDE_STATES]  ? escConfig[CONFIG_BUTTON_OPENED_HIDE_STATES] : ESC_BUTTON_OPENED_HIDE_STATES);
        this.buttonCloseHideStates(escConfig[CONFIG_BUTTON_CLOSED_HIDE_STATES]  ? escConfig[CONFIG_BUTTON_CLOSED_HIDE_STATES] : ESC_BUTTON_CLOSED_HIDE_STATES);

        Object.preventExtensions(this);
    }

    /*
     ** getters/setters
     */
    #getCfg(key,value= null){
      if (value!== null && this.#cfg[key]!=value){
        this.#cfg[key]= value;
      }
      return this.#cfg[key];
    }
    isCoverFeatureActive(feature=ESC_FEATURE_ALL){
      return Boolean((this.getCoverEntity()?.getSupportedFeatures() ?? ESC_FEATURE_NO_TILT) & feature);
    }
    #setLocalize(localize){
      this.#localize=localize;
    }
    getLocalize(text){
      return this.#localize(text);
    }
    // v0.4 i18n: refresh the live hass reference (and its localize fn) so that a
    // user toggling HA's language setting at runtime re-renders the card in the
    // new locale without page reload. Called from SuperproShutterCardNew's
    // shouldUpdate() when propName === 'hass'. Also covers the case where HA
    // swaps the hass object entirely (e.g. on reconnect) - the previous object's
    // localize() closure could be stale, this rebinds.
    updateHass(hass){
      if (!hass) return;
      this.#hass = hass;
      this.#setLocalize(hass.localize);
    }
    // v0.4 i18n: read a card-private string in the current HA UI locale. Strategy:
    // take first 2 chars of hass.locale.language (e.g. 'de-DE' → 'de'), look up
    // TRANSLATIONS[lang]?.[key]. Fall back to en for any locale we haven't shipped
    // (a Korean user sees English Battery/Signal labels, not a broken key). Final
    // fallback returns the key itself so missing keys are loud in dev but never
    // crash the render. Reactive: every render path resolves through this fresh,
    // and updateHass() keeps #hass current.
    getT(key){
      const lang = (this.#hass?.locale?.language || 'en').slice(0,2).toLowerCase();
      return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.en?.[key] ?? key;
    }
    // v0.4 i18n: locale-aware percent formatter. Intl.NumberFormat handles the
    // small but visible details: en/es render "55%" compact, de/fr render "55 %"
    // with a non-breaking space - users in those locales notice when it's wrong.
    // Input is the integer percent (0-100) that the rest of the code already
    // computes; we divide by 100 because Intl percent style expects a fraction.
    // maximumFractionDigits:0 keeps 50% as "50%" not "50.0%". try/catch guards
    // against ancient browsers without Intl.NumberFormat (theoretical; HA's min
    // browser supports it for years).
    formatPercent(value){
      const lang = (this.#hass?.locale?.language || 'en').slice(0,2).toLowerCase();
      try {
        return new Intl.NumberFormat(lang, { style: 'percent', maximumFractionDigits: 0 }).format(value / 100);
      } catch {
        return value + '%';
      }
    }
    setCoverEntity(hass,entityId){
      this.#coverEntity = entityId ? new haEntity(hass,entityId) : null;
    }
    getCoverEntity(){
      return this.#coverEntity;
    }
    setBatteryEntity(hass,entityId){
      this.#batteryEntity = entityId ? new haEntity(hass,entityId) : null;
    }
    getBatteryEntity(){
      return this.#batteryEntity;
    }
    setSignalEntity(hass,entityId){
      this.#signalEntity = entityId ? new haEntity(hass,entityId) : null;
    }
    // Get SignalInfo
    getSignalEntity(){
      return this.#signalEntity;
    }


    batteryLevel(){
      let state = this.#batteryEntity?.getState()?? UNAVAILABLE;
      return NOT_KNOWN.includes (state) ? '?' : state ;
    }
    signalLevel(){
      let state = this.#signalEntity?.getState()?? UNAVAILABLE;
      return  NOT_KNOWN.includes (state) ? '?' : state ;
    }
    batteryUnit(){
      let unit = this.#batteryEntity?.getUnitOfMeasurement() ?? UNAVAILABLE;
      return NOT_KNOWN.includes (unit) ? '?' : unit ;
    }
    signalUnit(){
      let unit = this.#signalEntity?.getUnitOfMeasurement() ?? UNAVAILABLE;
      return NOT_KNOWN.includes (unit) ? '?' : unit ;
    }

    rotateOrtho(coord,angle=this.getCloseAngle()){
      switch (angle){
        case (90):
          return { x: -coord.y, y:  coord.x };
        case (180):
          return { x: -coord.x, y: -coord.y };
        case (270):
          return { x:  coord.y, y: -coord.x };
        case (360):
        case (0):
          return { x:  coord.x, y:  coord.y };
        default:
          throw new Error(`Angle must be a multiple of 90 degrees. (angle= ${angle})`);
      }
    }
    rotateBackOrtho(coord,angle=this.getCloseAngle()){
      switch (angle){
        case (90):
          return { x:  coord.y, y: -coord.x };
        case (180):
          return { x: -coord.x, y: -coord.y };
        case (270):
          return { x: -coord.y, y:  coord.x };
        case (360):
        case (0):
          return { x:  coord.x, y:  coord.y };
        default:
          throw new Error(`Angle must be a multiple of 90 degrees. (angle= ${angle})`);
      }
    }
    switchAxis(coord,angle=this.getCloseAngle()){
      switch (angle){
        case (90):
        case (270):
          return { x: coord.y, y: coord.x };
        case (360):
        case (180):
        case (0):
          return { x: coord.x, y: coord.y };
        default:
         throw new Error(`Angle must be a multiple of 90 degrees. (angle= ${angle})`);
      }
    }



    viewImageRotate(){
      let transform =this.transformRotate();
      return transform;
    }
    buttonRotate(){
      let r = this.getCloseAngle() % 180;
      let transform = this.transformRotate(r);
      return transform;
    }
    transformScalePicker(x = this.actualGlobalWidthPx(),y = this.actualGlobalHeightPx()){
      let transform =`${this.verticalMovement() ? '': `scale(${y/x},1)`}`;
      return transform;
    }
    transformScale(x = this.actualGlobalWidthPx(),y = this.actualGlobalHeightPx()){
      let transform =`${this.verticalMovement() ? '': `scale(${y/x},${x/y})`}`;
      return transform;
     }
    transformTranslate(x=this.actualGlobalWidthPx(),y=this.actualGlobalHeightPx()){
      let transform =`translate(${x}px,${y}px)`;
      return transform;
    }
    transformRotate(r = this.getCloseAngle()){
      let transform =`rotate(${r}deg)`;
      return transform;
    }



    buttonsPosition(value = null){
      return this.#getCfg(CONFIG_BUTTONS_POSITION,value);
    }
    disableStandardButtons(value = null){
      return this.#getCfg(CONFIG_DISABLE_STANDARD_BUTTONS,value);
    }
    disablePartialOpenButtons(value = null){
      const disable = this.#getCfg(CONFIG_DISABLE_PARTIAL_OPEN_BUTTONS,value);
      return disable || !this.isCoverFeatureActive(ESC_FEATURE_SET_POSITION);
    }
    disableEndButtons(value = null){
      return this.#getCfg(CONFIG_DISABLE_END_BUTTONS,value);
    }
    entityId(value = null){
      return this.#getCfg(CONFIG_ENTITY_ID,value);
    }
    friendlyName(value = null){
      return this.#getCfg(CONFIG_NAME,value);
    }
    debug(value = null){
      return this.#getCfg(CONFIG_DEBUG,value);
    }
    invertPercentageUi(value = null){
      return this.#getCfg(CONFIG_INVERT_PCT_UI,value);
    }
    invertPercentageCover(value = null){
      return this.#getCfg(CONFIG_INVERT_PCT_COVER,value);
    }
    invertPercentageTiltUi(value = null){
      return this.#getCfg(CONFIG_INVERT_PCT_TILT_UI,value);
    }
    invertPercentageTiltCover(value = null){
      return this.#getCfg(CONFIG_INVERT_PCT_TILT_COVER,value);
    }
    invertOpenCloseUi(value = null){
      return this.#getCfg(CONFIG_INVERT_OPEN_CLOSE_UI,value);
    }
    invertOpenCloseCover(value = null){
      return this.#getCfg(CONFIG_INVERT_OPEN_CLOSE_COVER,value);
    }
    tiltSliderOnly(value = null){
      return this.#getCfg(CONFIG_TILT_SLIDER_ONLY,value);
    }
    openingDisabled(value = null){
      return this.#getCfg(CONFIG_OPENING_DISABLED,value);
    }
    passiveMode(value = null){
      let mode = this.#getCfg(CONFIG_PASSIVE_MODE,value);
      return mode;
    }
    windowHeightPx(value = null){
      return this.#getCfg(CONFIG_HEIGHT_PX,value);
    }
    windowWidthPx(value = null){
      return this.#getCfg(CONFIG_WIDTH_PX,value);
    }
    partial(value = null){
      var partial = this.#getCfg(CONFIG_PARTIAL_CLOSE_PCT,value);
      if (partial == SHUTTER_OPEN_PCT ||  partial == SHUTTER_CLOSED_PCT) partial = 0;
      partial = this.invertPosition(partial);
      // only when cover can set position
      return this.isCoverFeatureActive(ESC_FEATURE_SET_POSITION) ? partial : 0;
    }
    offset(value = null){
      var offset = this.#getCfg(CONFIG_OFFSET_IS_CLOSED_PCT,value);
      if (offset == SHUTTER_OPEN_PCT ||  offset == SHUTTER_CLOSED_PCT) offset = 0;
      offset = this.invertPosition(offset);
      // only when cover can set position
      return this.isCoverFeatureActive(ESC_FEATURE_SET_POSITION) ? offset : 0;
    }
    partialActive(){
      return this.partial() !=SHUTTER_OPEN_PCT && this.partial() != SHUTTER_CLOSED_PCT;
    }
    offsetActive(){
      return this.offset() !=SHUTTER_OPEN_PCT && this.offset() != SHUTTER_CLOSED_PCT;
    }

    rotateSlatsImage(value = null){
      return this.#getCfg(CONFIG_ROTATE_SLATS_SHUTTER_IMAGE,value);
    }
    stretchEdgeImage(value = null){
      return this.#getCfg(CONFIG_STRETCH_EDGE_SHUTTER_IMAGE,value);
    }
    scaleButtons(value = null){
      return this.#getCfg(CONFIG_SCALE_BUTTONS,value);
    }
    scaleIcons(value = null){
      return this.#getCfg(CONFIG_SCALE_ICONS,value);
    }
    scaleTexts(value = null){
      return this.#getCfg(CONFIG_SCALE_TEXTS,value);
    }
    offsetOpenedPct(value = null){
      return this.#getCfg(CONFIG_OFFSET_OPENED_PCT,value);
    }
    offsetClosedPct(value = null){
      return this.#getCfg(CONFIG_OFFSET_CLOSED_PCT,value);
    }
    showTilt(value=null){
      return (this.#getCfg(CONFIG_SHOW_TILT,value)) && this.isCoverFeatureActive(ESC_FEATURE_OPEN_TILT | ESC_FEATURE_CLOSE_TILT | ESC_FEATURE_SET_TILT_POSITION) ;
    }
    tiltAngleMin(value = null){
      return this.#getCfg(CONFIG_TILT_ANGLE_MIN,value );
    }
    tiltAngleMax(value = null){
      return this.#getCfg(CONFIG_TILT_ANGLE_MAX,value );
    }


    unrollUnfoldDirection(value = null){
      return this.#getCfg(CONFIG_CLOSING_DIRECTION,value);
    }
    nameDisabled(value = null){
      return this.#getCfg(CONFIG_NAME_DISABLED,value);
    }
    buttonStopHideStates(value = null){
      return this.#getCfg(CONFIG_BUTTON_STOP_HIDE_STATES,value);
    }
    buttonOpenCloseHideStates(upDown){
      upDown = this.applyInvertForButtonOpenCloseHideStates(upDown);
      if (upDown == UP) return this.buttonOpenHideStates();
      if (upDown == DOWN) return this.buttonCloseHideStates();
    }



    buttonOpenHideStates(value = null){
      return this.#getCfg(CONFIG_BUTTON_OPENED_HIDE_STATES,value);
    }

    buttonCloseHideStates(value = null){
      return this.#getCfg(CONFIG_BUTTON_CLOSED_HIDE_STATES,value);
    }

    // deprecated
    titlePosition(value = null){
      return this.#getCfg(CONFIG_NAME_POSITION,value);
    }

    namePosition(value = null){
      return this.#getCfg(CONFIG_NAME_POSITION,value);
    }
    inlineHeader(value = null){
      return this.#getCfg(CONFIG_INLINE_HEADER,value);
    }
    openingDisabled(value = null){
      if (value !== null  && this.#getCfg(CONFIG_OPENING_DISABLED,value) === null)
      {
        value = this.#getCfg(CONFIG_NAME_DISABLED);
      }
      return this.#getCfg(CONFIG_OPENING_DISABLED,value);
    }
    openingPosition(value = null){
      if (value !== null  && this.#getCfg(CONFIG_OPENING_POSITION,value) === null)
      {
        value = this.#getCfg(CONFIG_NAME_POSITION);
      }
      return this.#getCfg(CONFIG_OPENING_POSITION,value);
    }
    alwaysPercentage(value = null){
      return this.#getCfg(CONFIG_ALWAYS_PCT,value);
    }
    pickerOverlapPx(value = null){
      return this.#getCfg(CONFIG_PICKER_OVERLAP_PX,value);
    }
    /*
    ** end getters/setters
    */
    verticalMovement(){
      return IS_VERTICAL.includes(this.unrollUnfoldDirection());
    }


    currentUiPosition(position = this.currentDevicePosition()){
      position = this.applyInvertToUiPosition(position);
      return position;
    }
    currentDevicePosition(){
      let position = this.currentBasePosition();
      position = this.applyInvertToPosition(position);
      return position;
    }
    currentBasePosition(){
      let position;
      if (this.isCoverFeatureActive(ESC_FEATURE_SET_POSITION)){
        // known position
        position = this.getCoverEntity()?.getCurrentPosition() ?? 0;
      }else {
        // unknown position, so estimate from state
        position= this.getCoverEntity()?.getState()==SHUTTER_STATE_OPEN ? SHUTTER_OPEN_PCT :  SHUTTER_CLOSED_PCT;
      }
      return position;
    }

    currentUiTiltPosition(position = this.currentDeviceTiltPosition()){
      position = this.applyInvertToUiTiltPosition(position);
      return position;
    }
    currentDeviceTiltPosition(){
      let position = this.currentBaseTiltPosition();
      position = this.applyInvertToTiltPosition(position);
      return position;
    }
    currentBaseTiltPosition(){
      let position;
      if (this.isCoverFeatureActive(ESC_FEATURE_SET_TILT_POSITION)){
        // known position
        position = this.getCoverEntity()?.getCurrentTiltPosition() ?? null;
      }else {
        position= null;
      }
      return position;
    }

    applyInvertToPosition(position){
      if (this.invertPercentageCover()) position= this.invertPosition(position);
      return position;
    }
    applyInvertToTiltPosition(tiltPosition){
      if (this.invertPercentageTiltCover()) tiltPosition= this.invertPosition(tiltPosition);
      return tiltPosition;
    }
    applyInvertToUiPosition(position){
      if (this.invertPercentageUi()) position = this.invertPosition(position);
      return position;
    }
    applyInvertToUiTiltPosition(position){
      if (this.invertPercentageTiltUi()) position = this.invertPosition(position);
      return position;
    }
    invertPosition(position){
      position = 100-position;
      return position;
    }

    applyInvertForPositionToText(setting,debug=false){
      if (debug){
        console.log('SHUTTER: ',this.#getCfg(CONFIG_NAME));
        console.log('applyInvertForPositionToText start:',setting);
      }
      setting = this.applyInvertOpenClose(setting,debug);
      return setting;
    }
    applyInvertForOverlayDisplay(setting,debug=false){
      if (debug){
        console.log('SHUTTER: ',this.#getCfg(CONFIG_NAME));
        console.log('applyInvertForOverlayDisplay start:',setting);
      }
      setting = this.applyInvertOpenClose(setting,debug);
      //setting = this.applyInvertUiPercentage(setting, );
      //setting = this.applyInvertDirection(setting,debug);
      return setting;
    }
    applyInvertForShowButtonUpDownLabel(setting,debug=false){
      if (debug){
        console.log('SHUTTER: ',this.#getCfg(CONFIG_NAME));
        console.log('applyInvertForShowButtonUpDownLabel start:',setting);
      }
      setting = this.applyInvertOpenClose(setting,debug);
      //setting = this.applyInvertUiPercentage(setting, debug);
      setting = this.applyInvertDirection(setting,debug);
      return setting;
    }
    applyInvertForShowButtonUpDownClick(setting,debug){
      if (debug){
        console.log('SHUTTER: ',this.#getCfg(CONFIG_NAME));
        console.log('applyInvertForShowButtonUpDownClick start:',setting);
      }
      //setting = this.applyInvertOpenClose(setting,debug);
      //setting = this.applyInvertPercentage(setting, debug);
      //setting = this.applyInvertUiPercentage(setting, debug);
      setting = this.applyInvertDirection(setting,debug);
      setting = this.applyInvertCommands(setting,debug);
      return setting;
    }
    applyInvertForButtonOpenCloseHideStates(setting,debug=false){
      if (debug){
        console.log('SHUTTER: ',this.#getCfg(CONFIG_NAME));
        console.log('applyInvertForButtonOpenCloseHideStates start:',setting);
      }
      setting = this.applyInvertOpenClose(setting,debug);
      setting = this.applyInvertDirection(setting,debug);
      return setting;
    }

    applyInvertNone(setting){
      return setting;
    }
    applyInvertOpenCloseAndPercentage(setting,debug=false){
      setting = this.applyInvertOpenClose(setting,debug);
      setting = this.applyInvertPercentage(setting,debug);

      return setting;
    }
    applyInvertAll(setting,debug=false){
      setting = this.applyInvertOpenClose(setting,debug);
      setting = this.applyInvertPercentage(setting,debug);
      setting = this.applyInvertDirection(setting,debug);
      setting = this.applyInvertCommands(setting,debug);

      return setting;
    }

    applyInvertDirection(setting,debug=false){
      //return setting;
      if (this.#invertDirection()) setting = Object.keys(INVERT_OPEN_CLOSE_SETTING).includes(setting) ? INVERT_OPEN_CLOSE_SETTING[setting] : setting;
      if (debug) console.log('applyInvertDirection: ',setting);
      return setting;
    }

    applyInvertOpenClose(setting,debug=false){
      //return setting;
      if (this.invertOpenCloseUi()) setting = Object.keys(INVERT_OPEN_CLOSE_SETTING).includes(setting) ? INVERT_OPEN_CLOSE_SETTING[setting] : setting;
      if (debug) console.log('applyInvertOpenClose: ',setting);
      return setting;
    }
    applyInvertCommands(setting,debug=false){
      //return setting;
      if (this.invertOpenCloseCover()) setting = Object.keys(INVERT_OPEN_CLOSE_SETTING).includes(setting) ? INVERT_OPEN_CLOSE_SETTING[setting] : setting;
      if (debug) console.log('applyInvertCommands: ',setting);
      return setting;
    }
    applyInvertPercentage(setting,debug=false){
      //return setting;
      if (this.invertPercentageCover()) setting = Object.keys(INVERT_OPEN_CLOSE_SETTING).includes(setting) ? INVERT_OPEN_CLOSE_SETTING[setting] : setting;
      if (debug) console.log('applyInvertPercentage: ',setting);
      return setting;
    }
    applyInvertUiPercentage(setting,debug=false){
      //return setting;
      if (this.invertPercentageUi()) setting = Object.keys(INVERT_OPEN_CLOSE_SETTING).includes(setting) ? INVERT_OPEN_CLOSE_SETTING[setting] : setting;
      if (debug) console.log('applyInvertUiPercentage: ',setting);
      return setting;
    }

    #invertDirection(){
      return this.unrollUnfoldDirection() == RIGHT || this.unrollUnfoldDirection() == UP;
    }

    applyInvertToCommand(command){  // not used ....
      if (this.invertPercentageCover()) {
        if (command == ACTION_SHUTTER_OPEN) command = ACTION_SHUTTER_CLOSE;
        else if (command == ACTION_SHUTTER_CLOSE) command = ACTION_SHUTTER_OPEN;
      }
      return command;
    }
    getCloseAngle(){
      const direction= {
        [DOWN]:0,
        [LEFT]:90,
        [RIGHT]:270,
        [UP]:180
      };
      return direction[this.unrollUnfoldDirection()] || 0;
    }

    getOrientation(){
      return Globals.screenOrientation.value; // global variable !!
    }

    positionToState(position = this.currentDevicePosition()){
      // see for position and state definition:
      //  https://www.home-assistant.io/integrations/cover.template/#combining-value_template-and-position_template

      let state = this.getCoverEntity().getState() || UNAVAILABLE;
      let escState;
      if (state !== SHUTTER_STATE_OPENING && state !== SHUTTER_STATE_CLOSING) {
        //  shutter is not moving,
        if (position != SHUTTER_OPEN_PCT && position != SHUTTER_CLOSED_PCT){
          // shutter is not 0% or 100%
          escState= SHUTTER_STATE_PARTIAL_OPEN;
        }else {
          // shutter is 0% or 100%
          escState = position ? this.applyInvertOpenClose(SHUTTER_STATE_OPEN) : this.applyInvertOpenClose(SHUTTER_STATE_CLOSED);
        }
      }else  {
        //  shutter is moving,
        escState = this.applyInvertOpenClose(state);
        //escState = this.applyInvertOpenCloseAndPercentage(state);

      }
      if (position == this.applyInvertToPosition(SHUTTER_OPEN_PCT) && escState == (this.applyInvertOpenCloseAndPercentage(SHUTTER_STATE_OPENING))) {
        escState = this.applyInvertOpenCloseAndPercentage(SHUTTER_STATE_OPEN);

      }else if (position == this.applyInvertToPosition(SHUTTER_CLOSED_PCT) && escState== (this.applyInvertOpenCloseAndPercentage(SHUTTER_STATE_CLOSING))) {
        escState = this.applyInvertOpenCloseAndPercentage(SHUTTER_STATE_CLOSED);
      }
      //console.log(`positionToState: Cover=${this.getCoverEntity()?.getFriendlyName()}  state=${state} position=${position} => escSstate=${escState}`);
      return escState;
    }

    buttonsLeftActive(){
      if (this.disableStandardButtons() && !this.showTilt() && !this.partialActive())
        return false;
      else
        return true;
    }

    buttonsInRow(){
      return this.getButtonsPosition() == LEFT || this.getButtonsPosition() == RIGHT;
    }
    buttonsContainerReversed(){
      return this.getButtonsPosition() == BOTTOM || this.getButtonsPosition() == RIGHT;
    }
    disabledGlobaly() {
      return false;
      // return (NOT_KNOWN.includes(this.getCoverEntity().getState()));
    }
    coverButtonUpDisabled(){
      let disabled = false;
      if (this.disableEndButtons()) {
        if (this.coverIsClosed()) {
          disabled = false;
        } else if (this.coverIsOpen()) {
          disabled = true;
        }
      }
      return disabled;
    }
    coverButtonDownDisabled(){
      let disabled = false;
      if (this.disableEndButtons()) {
        if (this.coverIsClosed()) {
          disabled = true;
        } else if (this.coverIsOpen()) {
          disabled = false;
        }
      }
      return disabled;
    }
    coverButtonDisabled(upDown) {
      const isUp = upDown === UP;
      const isDown = upDown === DOWN;
      const inverted = this.#invertDirection();

      if (isUp) {
        return inverted ? this.coverButtonDownDisabled() : this.coverButtonUpDisabled();
      }
      if (isDown) {
        return inverted ? this.coverButtonUpDisabled() : this.coverButtonDownDisabled();
      }
      return false;
    }

    displayName(position){
        let displayType= this.inlineHeader() ? 'inline-block' : 'block';
        let display =(this.namePosition() != position || this.nameDisabled()) ? NONE : displayType;
        return display;
      }
    displayOpening(position){
      let displayType= this.inlineHeader() ? 'inline-block' : 'block';
      let display;
      if (this.inlineHeader()){
        display =(this.namePosition() != position || this.openingDisabled()) ? NONE : displayType;
      }else {
        display =(this.openingPosition() != position || this.openingDisabled()) ? NONE : displayType;
      }
      return display;
    }
    getButtonsPosition() {
      let position = this.buttonsPosition();
      if (position.startsWith(AUTO)) {
        const isLandscape = this.getOrientation() === LANDSCAPE;
        const isTopOrLeft = position === AUTO || position === AUTO_TL || position === AUTO_BL;
        position = isLandscape ? (isTopOrLeft ? LEFT : RIGHT) : (isTopOrLeft ? TOP : BOTTOM);
      }
      return position;
    }

    defButtonPosition(config) {
      const buttonsPosition = config[CONFIG_BUTTONS_POSITION]?.toLowerCase();
      this.buttonsPosition(POSITIONS.includes(buttonsPosition) ? buttonsPosition : ESC_BUTTONS_POSITION);
    }

    positionToText(position){
      let text='';
      if (this.isCoverFeatureActive(ESC_FEATURE_SET_POSITION)) {
        // position support
        if (typeof position === 'number') {
          if (this.alwaysPercentage()) {
            // v0.4 i18n: route the user-facing percent through Intl so de/fr get
            // their non-breaking-space "55 %" formatting.
            text = this.formatPercent(position);

          }else {
            const UiPosition = this.applyInvertToUiPosition(position);
            let state= this.positionToState(UiPosition);
            if (!this.debug()){
              if (state != SHUTTER_STATE_PARTIAL_OPEN){
                text = this.getLocalize(LOCALIZE_TEXT[(state)]);
              } else {
                // v0.4 i18n: same locale-aware percent for the partial-open case.
                text = this.formatPercent(position);
              }
            }else {
              // dev/debug string is intentionally English - it's diagnostic, not user-facing.
              text = `Dev: ${this.getCoverEntity().getState()} (${this.currentDevicePosition()}%)\nCard: ${state} (${position}%)`;
            }
          }
        } else {
          text = this.getLocalize(LOCALIZE_TEXT[UNAVAILABLE]);
        }
      }else {
        // no position support, so only open/closed
        if (this.applyInvertToPosition(position) > 50 ) {
          text = this.getLocalize(LOCALIZE_TEXT[this.applyInvertForPositionToText(SHUTTER_STATE_OPEN)]);
        } else {
          text = this.getLocalize(LOCALIZE_TEXT[this.applyInvertForPositionToText(SHUTTER_STATE_CLOSED)]);
        }
      }
      return text;
    }
    computePositionText(position,tiltPosition){
      //console.log(`computePositionText: position=${position}, tiltPosition=${tiltPosition}`);
      let positionText;
      if (NOT_KNOWN.includes(this.getCoverEntity().getState())){
        positionText = this.getLocalize(LOCALIZE_TEXT[UNAVAILABLE]);
      }else {
        let displayPosition = this.visiblePosition(position);
        displayPosition = this.currentUiPosition(displayPosition);
        positionText = this.positionToText(displayPosition);
        if (this.offsetActive()) {
          // v0.4 i18n: locale-aware percent for the offset-mode parenthetical.
          positionText += ` (${this.formatPercent(this.currentUiPosition(position))})`;
        }
        if (this.showTilt() && this.isCoverFeatureActive(ESC_FEATURE_SET_TILT_POSITION)) {
          tiltPosition = this.currentUiTiltPosition(tiltPosition);
          // v0.4 i18n: localized Tilt label + locale-aware percent. The slash
          // separator stays as-is across locales (it's punctuation, not a word).
          positionText += ` / ${this.getT('tilt')}: ${this.formatPercent(tiltPosition)}`;
        }
      }
      return positionText;
    }
    visiblePosition(currentDevicePosition) {
      // compute visible position from current position and offset
      var visiblePosition;
      this.offset();
      visiblePosition = this.calcVisualOffset(currentDevicePosition);
      return visiblePosition;
    }

    calcOffset(pct){
      let pct2;
      if (this.offsetActive()){
        pct2 =  Math.round(100 -  this.invertPosition(pct) * this.offset() / 100 );
        return pct2;
      }else {
        return pct;
      }
    }
    calcVisualOffset(pct){
      let pct2;
      if (this.offsetActive()) {
        pct2 = Math.max(0, Math.round((pct - this.invertPosition(this.offset())) * 100 / this.offset() ));
        return pct2;
      }else {
        return pct;
      }
    }
    coverIsOpen(){
      return (this.currentDevicePosition() == SHUTTER_OPEN_PCT);
    }
    coverIsClosed(){
      return (this.currentDevicePosition() == SHUTTER_CLOSED_PCT);
    }
    iconScaleFactor(){
      let scale_setting = this.scaleIcons();
      let scale = 1.0;
      switch(typeof(scale_setting)){
        case 'boolean':
          scale = scale_setting ? Math.min(this.windowWidthPx()/ESC_BASE_WIDTH_PX*1.25,1) : 1;
          break;
        case 'number':
          scale = boundary(scale_setting,0.1,2);
          break;
      }
      return scale;
    }
    textScaleFactor(){
      let scale_setting = this.scaleTexts();
      let scale = 1.0;
      switch(typeof(scale_setting)){
        case 'boolean':
          scale = scale_setting ? this.windowWidthPx()/ESC_BASE_WIDTH_PX : scale;
          break;
        case 'number':
          scale = boundary(scale_setting,0.1,2);
          break;
      }
      return scale;
    }
    iconScalePercent(){
      return Math.round(this.iconScaleFactor()*100)+'%';
    }

    iconButtonSize(){
      let size = ICON_BUTTON_SIZE;

      let scale_setting = this.scaleButtons();
      switch(typeof(scale_setting)){
        case 'boolean':
          if (scale_setting){
            let px;
            if (this.buttonsInRow()){
              px = this.windowHeightPx();
            }else {
              px = this.windowWidthPx();
            }
            size = Math.min(px/3.0,ICON_BUTTON_SIZE); // buttons fit in 1/3 of the size
          }
          break;
        case 'number':
          size = boundary(scale_setting,0.1,2)*ICON_BUTTON_SIZE;
          break;
      }
      return size;
    }
    buttonScaleFactor(){
      let scale=1;
      let scale_setting = this.scaleButtons();
      switch(typeof(scale_setting)){
        case 'boolean':
          if (scale_setting){
            let px;
            if (this.buttonsInRow()){
              px = this.windowHeightPx();
            }else {
              px = this.windowWidthPx();
            }
            scale = Math.min(px/3.0/ICON_BUTTON_SIZE,1);
          }
          break;
        case 'number':
          scale = boundary(scale_setting,0.1,2);
          break;
      }
      return scale;
    }
    iconSize(){
      let size = ICON_SIZE;

      let scale_setting = this.scaleButtons();
      switch(typeof(scale_setting)){
        case 'boolean':
          if (scale_setting){
            let px;
            if (this.buttonsInRow()){
              px = this.windowHeightPx();
            }else {
              px = this.windowWidthPx();
            }
            size = Math.min(px/(3.0*ICON_BUTTON_SIZE/ICON_SIZE),ICON_SIZE); // buttons fit in 1/3 of the size
          }
          break;
        case 'number':
          size = boundary(scale_setting,0.1,2)*ICON_SIZE;
          break;
      }
      return size;
    }
    iconSizeWifiBattery(){
      let size = ICON_SIZE;
      let scale_setting = this.scaleIcons();
      switch(typeof(scale_setting)){
        case 'boolean':
          if (scale_setting){
            let px = this.windowWidthPx();
            size = Math.min(px/6.0,ICON_SIZE);
          }
          break;
        case 'number':
          size = boundary(scale_setting,0.1,2)*ICON_SIZE;
          break;
      }
      return size;
    }
    batteryLevelText(){
      let level = this.batteryLevel();
      let unit = this.batteryUnit();
      return level+unit;
    }
    signalLevelText(){
      let level = this.signalLevel();
      let unit = this.signalUnit();
      return level+unit;
    }
    batteryLevelIcon(){

      let level = this.batteryLevel();
      let icon;
      let roundedLevel = Math.round(level / 10) * 10;
      roundedLevel = isNaN(roundedLevel) ? -1 : Math.min(roundedLevel,100);

  		switch (roundedLevel) {
  			case -1:
  				icon = 'mdi:battery-off-outline'; // mdi:battery should have an alias of mdi:battery-100, doesn't work in current HASS
  				break;
  			case 100:
  				icon = 'mdi:battery'; // mdi:battery should have an alias of mdi:battery-100, doesn't work in current HASS
  				break;
  			case 0:
  				icon = 'mdi:battery-outline'; // mdi:battery-outline should have an alias of mdi:battery-0, doesn't work in current HASS
  				break;
  			default:
  				icon = 'mdi:battery-' + roundedLevel;
  		}
      return icon;
    }
    batteryIconColor(){
      let level = this.batteryLevel();
      let roundedLevel = Math.round(level / 20);
      roundedLevel = isNaN(roundedLevel) ? -1 : roundedLevel;
      return ICONCOLORS[roundedLevel];
    }
    signalIconColor(){
      let iconLevelIndex= this.signalLevelIndex();
      return ICONCOLORS[iconLevelIndex];
    }
    signalLevelIndex(){
      let level = this.signalLevel();
      let unit = this.signalUnit();
      if (unit != '?' && level != '?'){
        const unitType ={
          'dB': {max: 100, min: 0},
          'dBm': {max: -40, min: -90},
          'lqi': {max: 255, min: 0}, // from Z2M values are 0-255 ??
          '%': {max: 100, min: 0},
          '?': {max: 100, min: 0}
        };
        let delta= unitType[unit].max-unitType[unit].min;
        let levelPercentage = (level-unitType[unit].min) / delta * 100;
        let levelIndex =Math.round(levelPercentage / 20);

        return levelIndex;
      }
      return 99;
    }
    signalLevelIcon(){
      let unit = this.signalUnit();
      let icon = 'mdi:wifi-strength-off-outline';
      if (unit != '?'){
        const iconStrength = {
          99: "alert-outline",
          0: "off-outline",
          1: "outline",
          2: "1",
          3: "2",
          4: "3",
          5: "4",
        };
        let iconLevelIndex= this.signalLevelIndex();
        icon = 'mdi:wifi-strength-'+iconStrength[iconLevelIndex];
      }
      return icon;
    }

  }


  class htmlCard{

    constructor(superproShutter,positionText){
      this.superproShutter=superproShutter;
      this.cfg =superproShutter.cfg;
      this.positionText =positionText;
      this.actualScreenPosition = superproShutter.actualScreenPosition;
      this.actualTiltPosition = superproShutter.actualTiltPosition;
      this.escImages= superproShutter.escImages;
      this.cfg = superproShutter.cfg;
    }

    defStyleVars(){
      let escState=this.cfg.positionToState();
      const viewImage=this.escImages.getViewImageSrc(this.cfg.entityId());

      // solves #103 see other lines with shutterSlatImage
      const shutterSlatImage=this.escImages.getShutterSlatImageSrc(this.cfg.entityId());
      const shutterBottomImage=this.escImages.getShutterBottomImageSrc(this.cfg.entityId());

      return `
      --mdc-icon-button-size: ${this.cfg.iconButtonSize()}${UNITY};
      --mdc-icon-size: ${this.cfg.iconSize()}${UNITY};
      --icon-size-wifi-battery: ${this.cfg.iconSizeWifiBattery()}${UNITY};

      --esc-overflow: ${this.superproShutter.getOverflow()};

      --esc-display-name-top: ${this.cfg.displayName(TOP)};
      --esc-display-name-bottom: ${this.cfg.displayName(BOTTOM)};
      --esc-display-position-top: ${this.cfg.displayOpening(TOP)};
      --esc-display-position-bottom: ${this.cfg.displayOpening(BOTTOM)};
      --esc-flex-flow-middle: ${!this.cfg.buttonsInRow() ? 'column': 'row'}${this.cfg.buttonsContainerReversed() ? '-reverse' : ''} nowrap;
      --esc-window-height: ${this.cfg.windowHeightPx()+UNITY};
      --esc-window-width: ${this.cfg.buttonsInRow() ? '100%': this.cfg.windowWidthPx()+UNITY};
      --esc-window-width2: ${this.cfg.windowWidthPx()+UNITY};
      --esc-window-background-image: ${viewImage.includes('.') ?  `url(${viewImage})` : ''};
      --esc-window-background-color: ${viewImage.includes('.') ? '' : `${viewImage}`};
      --esc-window-rotate: ${this.cfg.viewImageRotate()};
      --esc-button-rotate: ${this.cfg.buttonRotate()};

      --esc-transform-slide:  ${this.superproShutter.transformSlide(this.actualScreenPosition)};
      --esc-transform-picker: ${this.superproShutter.transformPicker(this.actualScreenPosition)};
      --esc-tilt-angle-deg: ${this.superproShutter.getTiltAngleDeg(this.superproShutter.react_TiltPosition)};
      --esc-tilt-angle-deg-graph: ${this.superproShutter.getTiltAngleDegGraph(this.superproShutter.react_TiltPosition)};

      --esc-transform-undo-slats-rotate:  ${this.superproShutter.transformUndoSlatsRotate()};
      --esc-transform-tilt-slat-rotate:  ${this.superproShutter.transformTiltSlatRotate()};
      --esc-transform-movement: ${this.superproShutter.transformMovement()};

      --esc-picker-top: -${this.cfg.pickerOverlapPx()+UNITY};
      --esc-picker-height: ${this.cfg.pickerOverlapPx()*2+UNITY};

      --esc-slat-height: ${this.superproShutter.slatHeightPx()+UNITY};

      --esc-tilt-slat-height: ${this.superproShutter.tiltSlatHeightPx()+UNITY};
      --esc-tilt-slat-width: ${this.superproShutter.tiltSlatWidthPx()};
      --esc-tilt-slat-origin: ${this.superproShutter.tiltSlatOrigin()};
      --esc-tilt-slat-background-size: ${this.superproShutter.tiltSlatBackgroundSize()};
      --esc-tilt-slider-rotate: ${this.superproShutter.tiltSliderRotate()};
      --esc-tilt-icon-rotate: ${(this.superproShutter.tiltIconRotate3())};

      --esc-slide-slats-height: ${this.superproShutter.slatsSlideHeightPx()+UNITY};
      --esc-slide-edge-height: ${this.superproShutter.shutterBottomSize().y+UNITY};

      --esc-transform-partial: ${this.superproShutter.transformPartial()};

      --esc-buttons-flex-flow: ${!this.cfg.buttonsInRow() ? 'row' : 'column'} nowrap;
      --esc-buttons-flex-flow2: ${!this.cfg.buttonsInRow() ? 'row-reverse' : 'column'} nowrap;

      --esc-movement-overlay-display: ${(escState == SHUTTER_STATE_OPENING || escState == SHUTTER_STATE_CLOSING) ? 'block' : NONE};
      --esc-movement-overlay-up-display: ${escState == this.cfg.applyInvertForOverlayDisplay(SHUTTER_STATE_OPENING) ? 'block' : NONE};
      --esc-movement-overlay-down-display: ${escState == this.cfg.applyInvertForOverlayDisplay(SHUTTER_STATE_CLOSING) ? 'block' : NONE};

      --esc-slide-background-main-image: ${shutterSlatImage.includes('.') ?  `url(${shutterSlatImage})` : ''};
      --esc-slide-background-edge-image: ${shutterBottomImage.includes('.') ?  `url(${shutterBottomImage})` : ''};

      --esc-slide-background-main-color: ${shutterSlatImage.includes('.') ? '' : `${shutterSlatImage}`};
      --esc-slide-background-edge-color: ${shutterBottomImage.includes('.') ? '' : `${shutterBottomImage}`};

      --esc-slide-background-slat-size: ${this.superproShutter.shutterSlatSizePercentage()};
      --esc-slide-background-slats-size: ${this.superproShutter.shutterSlatsSizePercentage()};
      --esc-slide-background-edge-size: ${this.superproShutter.shutterBottomSizePercentage()};

      --esc-slide-background-main-position: ${this.superproShutter.shutterMainBackgroundPosition()};
      --esc-slide-background-edge-position: ${this.superproShutter.shutterEdgeBackgroundPosition()};

      --esc-top-right-color: ${this.cfg.signalIconColor()};
      --esc-top-left-color: ${this.cfg.batteryIconColor()};

      --esc-top-icon-text-line-height: ${this.cfg.iconScalePercent()};
      --esc-top-icon-text-font-size: ${this.cfg.iconScalePercent()};
      --esc-text-scale: ${this.cfg.textScaleFactor()};
      --esc-button-scale: ${this.cfg.buttonScaleFactor()};

      --esc-selector-flex-basis: ${this.cfg.buttonsInRow() ? this.superproShutter.actualGlobalWidthPx():this.superproShutter.actualGlobalHeightPx()}${UNITY};
`;
    }


    showBatteryIcon(){
      return b`
        ${this.cfg.getBatteryEntity() ? b`
          <div class="${ESC_CLASS_TOP_LEFT}" role="img"
               aria-label="${this.cfg.getT('battery')} ${this.cfg.batteryLevelText()}">
            <ha-icon
              icon=${this.cfg.batteryLevelIcon()}
              class="${ESC_CLASS_HA_ICON}"
              aria-hidden="true"
            ></ha-icon>
            <div class="${ESC_CLASS_TOP_ICON_TEXT}" aria-hidden="true">
              ${this.cfg.batteryLevelText()}
            </div>
          </div>
          ` : ''
        }
    `;
    }
    showSignalIcon(){
      return b`
        ${this.cfg.getSignalEntity() ? b`
          <div class="${ESC_CLASS_TOP_RIGHT}" role="img"
               aria-label="${this.cfg.getT('signal')} ${this.cfg.signalLevelText()}">
            <ha-icon
              class="${ESC_CLASS_HA_ICON}"
              icon=${this.cfg.signalLevelIcon()}
              aria-hidden="true"
            ></ha-icon>
            <div class="${ESC_CLASS_TOP_ICON_TEXT}" aria-hidden="true">
              ${this.cfg.signalLevelText()}
            </div>
          </div>
          ` : ''
        }
    `;
    }
    showTopDiv(){
      return this.showTopBottomDiv(ESC_CLASS_TOP);
    }
    showBottomDiv(){
      return this.showTopBottomDiv(ESC_CLASS_BOTTOM);
    }
    showTopBottomDiv(escClassName){
      return b`
        <div class="${escClassName}">
          <div class="${ESC_CLASS_LABEL} ${this.cfg.disabledGlobaly() ? `${ESC_CLASS_LABEL_DISABLED}` : ''}"
            @click="${() => this.superproShutter.doHassMoreInfoOpen(this.cfg.entityId())}"
          >
            ${this.cfg.friendlyName()}
            ${this.cfg.passiveMode() ? b`
              <span class="${ESC_CLASS_HA_ICON_LOCK}" role="img" aria-label="${this.cfg.getT('locked')}">
                <ha-icon icon="mdi:lock" aria-hidden="true"></ha-icon>
              </span>
            `:''}
          </div>
          <div class="${ESC_CLASS_POSITION} ${this.cfg.disabledGlobaly() ? `${ESC_CLASS_LABEL_DISABLED}` : ''}">
            <span style="white-space: pre-line;">${this.positionText}</span>
          </div>
        </div>
    `;
    }

    showButtonUp(){
      return this.showButtonUpDown(ESC_FEATURE_OPEN,ACTION_SHUTTER_OPEN,UP,'mdi:arrow-up');
     }
    showButtonDown(){
      return this.showButtonUpDown(ESC_FEATURE_CLOSE,ACTION_SHUTTER_CLOSE,DOWN,'mdi:arrow-down');
    }
    showButtonUpDown(feature,action,upDown,icon){

      //console.log('==>>',this.cfg.friendlyName(), 'feature:',feature,', action:',action,', upDown:',upDown);
      //console.log('HideStates:', this.cfg.buttonOpenCloseHideStates(upDown));
      //console.log('positionToState:', this.cfg.positionToState());
      //console.log('Hide:',(this.cfg.buttonOpenCloseHideStates(upDown).includes(this.cfg.positionToState())))

      return b`
      ${!this.cfg.disableStandardButtons() &&
        !this.cfg.buttonOpenCloseHideStates(upDown).includes(this.cfg.positionToState()) &&
         this.cfg.isCoverFeatureActive(feature)
      ? b`
        <ha-icon-button
          label="${this.cfg.getLocalize(LOCALIZE_TEXT[this.cfg.applyInvertForShowButtonUpDownLabel(action)])}"
          aria-label="${this.cfg.getLocalize(LOCALIZE_TEXT[this.cfg.applyInvertForShowButtonUpDownLabel(action)])}"
          .disabled=${this.cfg.disabledGlobaly() || this.cfg.coverButtonDisabled(upDown)}
          @click=${()=> this.superproShutter.doOnclick(`${this.cfg.applyInvertForShowButtonUpDownClick(action,true)}`)} >
          <ha-icon
            class="${ESC_CLASS_HA_ICON}"
            icon="${icon}"
            aria-hidden="true">
          </ha-icon>
        </ha-icon-button>
      `
      : ''}
    `;
    }
    showButtonStop(){

      const action = ACTION_SHUTTER_STOP;
      const feature = ESC_FEATURE_STOP;
      const icon = "mdi:stop";

      return b`
      ${!this.cfg.disableStandardButtons() &&
        !this.cfg.buttonStopHideStates().includes(this.cfg.positionToState()) &&
         this.cfg.isCoverFeatureActive(feature)
      ? b`
        <ha-icon-button
          label="${this.cfg.getLocalize(LOCALIZE_TEXT[action])}"
          aria-label="${this.cfg.getLocalize(LOCALIZE_TEXT[action])}"
          .disabled=${this.cfg.disabledGlobaly()}
          @click=${()=> this.superproShutter.doOnclick(`${action}`)} >
          <ha-icon
            class="${ESC_CLASS_HA_ICON}"
            icon="${icon}"
            aria-hidden="true">
          </ha-icon>
        </ha-icon-button>
      `
      : ''
    }`;
    }
    showButtonPartial(){
      return b`
      ${this.cfg.partialActive()
        ? b`
          <ha-icon-button
            label="${this.cfg.getT(`partially_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`)} (${this.cfg.formatPercent(SHUTTER_OPEN_PCT - this.cfg.partial())})"
            aria-label="${this.cfg.getT(`partially_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`)} (${this.cfg.formatPercent(SHUTTER_OPEN_PCT - this.cfg.partial())})"
            .disabled=${this.cfg.disabledGlobaly()}
            @click="${()=> this.superproShutter.doOnclick(`${ACTION_SHUTTER_SET_POS}`, this.cfg.calcOffset(this.cfg.partial()))}" >
            <ha-icon class="${ESC_CLASS_HA_ICON}" icon="mdi:arrow-expand-vertical" aria-hidden="true"></ha-icon>
          </ha-icon-button>
        ` : ''}
    `;
    }
    showLeftButtons(){
      return b`
      ${this.cfg.buttonsLeftActive()
      ? b`
        <div class="${ESC_CLASS_BUTTONS}">
          ${this.showButtonUp()}
          ${this.showButtonStop()}
          ${this.showButtonDown()}
          ${this.showButtonPartial()}
        </div>
        ` : b`
        <div class='blankDiv'></div>
      `}
    `;
    }
    showCentralWindow(){
      return b`
      <div class="${ESC_CLASS_SELECTOR}">
        <div class="${ESC_CLASS_SELECTOR_PICTURE}">


        ${this.escImages.getWindowImageSrc(this.cfg.entityId()) ? b`<img src= "${this.escImages.getWindowImageSrc(this.cfg.entityId())} ">` : ''}

          ${this.showSlide()}
          ${this.cfg.partialActive()  //  show partial only if no offset is defined
            ? b`<div class="${ESC_CLASS_SELECTOR_PARTIAL}"></div>`
            : ''}
          <div class="${ESC_CLASS_MOVEMENT_OVERLAY}" aria-hidden="true">
            <ha-icon class="${ESC_CLASS_MOVEMENT_UP}" icon="mdi:arrow-up">
            </ha-icon>
            <ha-icon class="${ESC_CLASS_MOVEMENT_DOWN}" icon="mdi:arrow-down">
            </ha-icon>
          </div>
        </div>
        ${this.cfg.isCoverFeatureActive(ESC_FEATURE_SET_POSITION)
          ? b`<div class="${ESC_CLASS_SELECTOR_PICKER}"></div>`
          : ''}
      </div>
    `;
    }

    showSlide(){
       return b`
        <div class="${ESC_CLASS_SELECTOR_SLIDE}">
          ${this.showSlideSlats()}
          <div class="${ESC_CLASS_SELECTOR_SLIDE_EDGE}"></div>
        </div>
      `;
    }
    showSlideSlats(){
      // Only Tilt when SHowTilt and there is a size
      const output = this.cfg.showTilt() && this.superproShutter.canShowTilt()
       ? b`
        ${this.showSlatsTilt()}
      `
       : b`
        ${this.showSlats()}
      `;
      return output;
    }
    showSlatsTilt(){

      const sizeSlide = this.superproShutter.windowSizeMovingDirectionPx();
      const sizeSlat = this.superproShutter.slatSizeMovingDirectionPx() ;

      //const sizeSlat = new xyPair(100,51);
      const number = sizeSlat ? Math.ceil(sizeSlide / sizeSlat): 1;

      return b`
      <div class="tilt-slat1">
      ${Array.from({ length: number }, () =>
        b`
          <div class="tilt-slat2">
            <div class="tilt-slat-edge"></div>
            <div class="tilt-slat3">
            </div>
          </div>
          `
      )}
      </div>
    `;
    }
    showSlats(){

      return b`
        <div class="${ESC_CLASS_SELECTOR_SLIDE_SLATS}">
        </div>
      `;
    }
    showRightButtons(){

      const icons= {
        0: "M3 4H21V8H19V20H17V8H7V20H5V8H3V4Z",
        1: "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z",
        2: "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12Z",
        3: "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15Z",
        4: "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z",
        5: "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V20H8V18Z",

      };
      const pct= {
        0: SHUTTER_OPEN_PCT,
        1: 75,
        2: 50,
        3: 25,
        4: 10,
        5: SHUTTER_CLOSED_PCT,
      };

      const pointer={
        0: 0,  // up
        1: 1,  // middle
        2: 1,  // middle
        3: 1,  // middle
        4: 1,  // middle
        5: 2,  // down
      };

      // v0.4 i18n: position-grid labels (3x2 button cluster). applyInvertOpenClose
      // returns either 'open' or 'closed' (string token), so getT() composes the
      // correct localized phrase via the `partially_<token>`/`fully_<token>` keys.
      // Inversion (e.g. shutters where 100%=closed) flips token but NOT the
      // composition logic - cfg layer already handles direction semantics.
      const labels={
        0: this.cfg.getT(`fully_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_OPEN)}`),
        1: `${this.cfg.getT(`partially_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`)} ( ${this.cfg.formatPercent(this.cfg.invertPosition(pct[1]))} )`,
        2: `${this.cfg.getT(`partially_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`)} ( ${this.cfg.formatPercent(this.cfg.invertPosition(pct[2]))} )`,
        3: `${this.cfg.getT(`partially_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`)} ( ${this.cfg.formatPercent(this.cfg.invertPosition(pct[3]))} )`,
        4: `${this.cfg.getT(`partially_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`)} ( ${this.cfg.formatPercent(this.cfg.invertPosition(pct[4]))} )`,
        5: this.cfg.getT(`fully_${this.cfg.applyInvertOpenClose(SHUTTER_STATE_CLOSED)}`),
      };

      const disabled = {
        0: this.cfg.disabledGlobaly() || this.cfg.coverButtonUpDisabled(), // up
        1: this.cfg.disabledGlobaly(), // middle
        2: this.cfg.disabledGlobaly() || this.cfg.coverButtonDownDisabled(), // down
      };
      const click = Object.fromEntries(
        [0, 1, 2, 3, 4, 5].map(j => [j, () => this.superproShutter.doOnclick(`${ACTION_SHUTTER_SET_POS}`, this.cfg.calcOffset(pct[j]))])
      );

      return b`
        ${[0, 1].map(i => b`
          <div class="${ESC_CLASS_BUTTONS}">
            ${[i * 3, i * 3 + 1, i * 3 + 2].map(j => b`
              <ha-icon-button
                label=${labels[j]}
                aria-label=${labels[j]}
                .disabled=${disabled[pointer[j]]}
                @click=${click[j]}
                path=${icons[j]}>
              </ha-icon-button>
            `)}
          </div>
        `)}
    `;
    }

    // TILT test HTML
    showTiltSection(){
      return b`
        ${this.cfg.tiltSliderOnly() ? b`` : this.showTiltButtonColumn() }
        ${this.showTiltSliderColumn()}
    `;
    }
    showTiltButtonColumn(){
      return b`
      <div class="${ESC_CLASS_TILT_BUTTONS}">
        ${this.showButtonTiltUp()}
        ${this.showTiltPosition()}
        ${this.showButtonTiltDown()}
      </div>
    `;
    }
    showTiltSliderColumn(){
      return b`
      <div class="tilt-slider-wrap">
        <input type="range" id="tilt-slider" class ="tilt-slider-class" min="0" max="100" value="${this.actualTiltPosition}">
      </div>
    `;
    }
    showButtonTiltUp(){
      const icon = this.cfg.buttonsInRow() ? "mdi:arrow-top-right":"mdi:arrow-bottom-right" ;
      return this.showButtonTilt(ACTION_SHUTTER_OPEN_TILT,icon);
    }
    showTiltPosition(){
      return b`
      <div class="tilt-slat-container">
        <div class="tilt-slat-class">
          <div class="tilt-line"></div>
        </div>
        <div class="tilt-slat-class">
          <div class="tilt-line"></div>
        </div>
        <div class="tilt-slat-class">
          <div class="tilt-line"></div>
        </div>
      </div>
    `;
    }
    showButtonTiltDown(){

      const icon = this.cfg.buttonsInRow() ? "mdi:arrow-bottom-right":"mdi:arrow-bottom-left" ;
      return this.showButtonTilt(ACTION_SHUTTER_CLOSE_TILT,icon);
    }
    showButtonTilt(action,icon){
      return b`
          <ha-icon-button
            label="${this.cfg.getLocalize(LOCALIZE_TEXT[action])}"
            aria-label="${this.cfg.getLocalize(LOCALIZE_TEXT[action])}"
            .disabled=${this.cfg.disabledGlobaly()}
            @click="${()=> this.superproShutter.doOnclick(`${action}`)}">
            <ha-icon class="${ESC_CLASS_HA_ICON_TILT}" icon="${icon}" aria-hidden="true"></ha-icon>
          </ha-icon-button>
    `;
    }

  }

  class xyPair{

    constructor(x,y){
      this.x=x;
      this.y=y;
    }
  }

  class haEntity{
    #state;
    #attributes;
    #lastChanged;
    #lastUpdated;
    #context;
    #entityId;
    constructor(hass,entityId)
    {
      let entityInfo = hass.states[entityId];
      if (typeof entityInfo !== "undefined") {
        this.#state = entityInfo.state;
        this.#attributes = entityInfo.attributes;
        this.#lastChanged = entityInfo.last_changed;
        this.#lastUpdated =  entityInfo.last_updated;
        this.#context =  entityInfo.context;
        this.#entityId = entityInfo.entity_id;
      }else {
        this.#state = UNAVAILABLE;
        this.#attributes = UNAVAILABLE;
        this.#entityId = entityId || UNAVAILABLE;
        this.#lastChanged = UNAVAILABLE;
        this.#lastUpdated = UNAVAILABLE;
        this.#context = UNAVAILABLE;
      }
    };

    getState(){
      return this.#state || UNAVAILABLE;
    }
    getAttributes(){
      return this.#attributes || UNAVAILABLE;
    }
    getEntityId(){
      return this.#entityId || UNAVAILABLE;
    }
    getCurrentPosition(){
      return this.getAttributes()?.current_position ?? null;
    }
    getCurrentTiltPosition(){
      return this.getAttributes()?.current_tilt_position ?? null;
    }
    getFriendlyName(){
      return this.getAttributes()?.friendly_name ?? UNAVAILABLE;
    }
    getSupportedFeatures(){
      return this.getAttributes()?.supported_features ?? null;
    }
    getUnitOfMeasurement(){
      return this.getAttributes()?.unit_of_measurement ?? UNAVAILABLE;
    }
  }
  class MessageManager {
    constructor() {
      this.messageGroup = {};
    }

    // Add a message with subject
    addMessage(text, type= 'warning',subject = 'General') {
      const message = new Message(text, type, subject);
      if (!this.messageGroup[subject]) {
        this.messageGroup[subject] = { messages: []};
      }
      this.messageGroup[subject].messages.push(message);
      if (type == 'warning' || type == 'error'){
        console.warn(`Superpro Shutter Card (${subject}): "${message.text}"`);
  //    }else{
  //      console.info(`Superpro Shutter Card (${subject}): "${message.text}"`);
      }
    }

    // Display messages grouped by subject
    displayMessages() {
      let display= [];
      for (const subject in this.messageGroup) {
        const messages = this.messageGroup[subject].messages;

        if (messages.length > 0) {
          messages.forEach((message) => {
            //display.push (html`${message}`);
            display.push (message);
          });
        }
      }
      return b`${display.map(item => b`<ha-alert alert-type="${item.severity}">${item.text}</ha-alert>`)}`;
    }
    displayGroupMessages(subject) {
      let display= [];
      const messages = this.messageGroup[subject]?.messages ?? [];

      if (messages.length > 0) {
        messages.forEach((message) => {
            //display.push (html`${message}`);
            display.push (message);
        });
      }
      return b`${display.map(item => b`<ha-alert alert-type="${item.severity}">${item.text}</ha-alert>`)}`;
    }
    countMessages(){
      let counter=0;
      for (const subject in this.messageGroup) {
        counter += this.messageGroup[subject].messages.length;
      }
      return counter;
    }
  }
  class Message {
    constructor(text, severity = HA_ALERT_INFO, subject = 'General') {
      this.text = text;
      this.severity = severity;
      this.subject = subject;
    }
  }
  class EscImages{

    constructor(config){
      this.escImagesLoaded = false; // Mark images as not loaded
      this.images=[];
      this.imageTypes=[];
      this.width=[];
      this.height=[];
      var nImages=0;
      this.escImages={};
      let base_image_map = config[CONFIG_IMAGE_MAP] || ESC_IMAGE_MAP;
      let shutter_preset = config[CONFIG_SHUTTER_PRESET];

      //IMAGE_TYPES.forEach((image_type) =>
      for (const image_type of IMAGE_TYPES)
      {
        let imageRefs={};

        // Determine the initial image from CONFIG_DEFAULT
        let initImage = CONFIG_DEFAULT[image_type];

        // Check if a preset image exists for the shutter type, otherwise use the initial image
        let presetImage = (shutter_preset && ESC_PRESET[shutter_preset] && ESC_PRESET[shutter_preset][image_type]!== undefined)
          ? ESC_PRESET[shutter_preset][image_type]
          : initImage;

        // Use the config image if provided, otherwise use the preset image
        let configImage = (config[image_type]) ? config[image_type] : presetImage;

        // Resolve the final base image path or color
        let base_image = defImagePathOrColor(base_image_map, configImage);

        for (const entityConfig of config.entities)
        {
          let shutter_preset = entityConfig[CONFIG_SHUTTER_PRESET];

          let presetImage = (entityConfig[image_type]  || ESC_PRESET[shutter_preset] == undefined)
            ? entityConfig[image_type]
            : ESC_PRESET[shutter_preset][image_type];

          let image_map = entityConfig[CONFIG_IMAGE_MAP] || base_image_map;
          const entityId = entityConfig[CONFIG_ENTITY_ID] || entityConfig;

          let image = NOT_KNOWN.includes(presetImage)  ? base_image : defImagePathOrColor(image_map,presetImage);
          if (image){
            let src = image.replace(/([^:]\/)\/+/g, "/").trim(); // Remove double slashes and trim
            var key;
            if (!(this.images.includes(src))){
              this.images[nImages]=src;
              this.imageTypes[nImages]=image_type;
              key= nImages++;
            }else {
              key = this.images.findIndex(element => element == src);
            }
            imageRefs[entityId]={entityId,key};
          }else {
            imageRefs[entityId]={entityId,key: -1};

          }
        }      this.escImages[image_type]=imageRefs;

      }  }
    getWindowImageSrc(entityId){
      return this.getImageSrc(CONFIG_WINDOW_IMAGE,entityId);
    }
    getViewImageSrc(entityId){
      return this.getImageSrc(CONFIG_VIEW_IMAGE,entityId);
    }
    getShutterSlatImageSrc(entityId){
      return this.getImageSrc(CONFIG_SHUTTER_SLAT_IMAGE,entityId);
    }
    getShutterBottomImageSrc(entityId){
      return this.getImageSrc(CONFIG_SHUTTER_BOTTOM_IMAGE,entityId);
    }
    getImageSrc(image_type,entityId){
      const key = this.escImages[image_type][entityId].key;
      if (key < 0 || key >= this.images.length) {
        return ''; // Return a default empty string if the key is invalid
      }
      return this.images[key];
    }

    getWindowImageSize(entityId){
      return this.getImageSize(CONFIG_WINDOW_IMAGE,entityId);
    }
    getViewImageSize(entityId){
      return this.getImageSize(CONFIG_VIEW_IMAGE,entityId);
    }
    getShutterSlatImageSize(entityId){
      let imageSize = this.getImageSize(CONFIG_SHUTTER_SLAT_IMAGE,entityId);
      return imageSize;
    }
    getShutterBottomImageSize(entityId){
      return this.getImageSize(CONFIG_SHUTTER_BOTTOM_IMAGE,entityId);
    }
    getImageSize(image_type, entityId) {
      const key = this.escImages[image_type][entityId]?.key;
      if (key == null || key < 0 || key >= this.images.length) {
        return new xyPair(0, 0);
      }
      const  xy = new xyPair(this.width[key] || 0, this.height[key] || 0);
      return xy;
    }

    async processImages() {
      try {
        const images=this.images;
        const imageDimensions = await readImageDimensions(this);
        imageDimensions.forEach((value,key,array)=>{
          //this.width[key] = value.width;
          //this.height[key]= value.height;
          this.width[value.index] = value.width;
          this.height[value.index]= value.height;
        });

        this.escImagesLoaded = true; // Mark images as loaded
      } catch (error) {
          console.error('Failed to load image dimensions:', error);
      }
      return this.escImagesLoaded;
    }
  }
  /**
   * global functions
   */

  function boundary(value,val1=0,val2=100){
    let min = Math.min(val1,val2);
    let max = Math.max(val1,val2);
    return Math.max(min,Math.min(max,value));
  }
  function defImagePathOrColor(image_map,image,image_type)
  {
    let result;
    if (!image) return '';

    if (!image.includes('.')){
      // is Color
      result=image;
    }else {
      // is URL
      result =(image.includes('/') ? image : `${image_map}/${image}`);
    }
    return result;
  }

  function getTextSize(text, font = 'Arial', fontHeight=16, fontWeight='') {
    // Create a temporary canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set the fontstyle
    context.font = `${fontWeight} ${fontHeight}px ${font}`;

    // Measure and return the width of the text
    let data = context.measureText(text);
    let width = Math.ceil(data.width);
    let height =  Math.ceil(data.fontBoundingBoxAscent + data.fontBoundingBoxDescent);
    return {width,height,text,data};

  }

  /**
   * Main code
   */
  const Globals={
    huiView: null,
    screenOrientation: {value:LANDSCAPE},
  };

  customElements.define(HA_CARD_NAME, SuperproShutterCardNew);
  customElements.define(HA_SHUTTER_NAME, SuperproShutter);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "superpro-shutter-card",
    name: "Superpro Shutter Card",
    preview: true,
    description: "A rebranded shutter card for easy control of shutters (fork of enhanced-shutter-card)",
    documentationURL: "https://github.com/f17mkx/superpro-shutter-card"
  });

  console.info(
    `%c SUPERPRO-SHUTTER-CARD %c Version ${VERSION}`,
    'color: white; background: green; font-weight: 700',
    'color: black;background: white; font-weight: bold'
  );


  /**
   * function findElement() to find an element in DOM body, inluding shadow DOMs.
   * @param {*} selector
   * @returns
   */
  function findElementInBody(selector) {
    return findElement(document.body,selector);
  }

  // TODO: merge FinElement and findElements into one
  function findElement(base,selector) {
    // Search in the regular DOM
    let foundInDom = base.querySelector(selector);

    // If not found directly, search the element
    if (!foundInDom) foundInDom= recursiveSearch(base);
    //console_log('Found in recursiveSearch:',foundInDom.nodeName,foundInDom.className);
    return foundInDom;

    // Function to recursively search in shadow roots
    function searchInShadowDom(node) {
      // Check if the node has a shadow root
      if (node.shadowRoot) {
        // Search in the shadow root's DOM
        const foundInShadow = node.shadowRoot.querySelector(selector);
        if (foundInShadow) {
          //console_log('Found in recursiveSearch2:',foundInShadow.nodeName,foundInShadow.className);
          return foundInShadow;
        }
        // Recurse into any shadow DOMs within this shadow root
        node.shadowRoot.host;
        for (const child of node.shadowRoot.children) {
          const result = searchInShadowDom(child);
          if (result) {
            //console_log('Found in recursiveSearch3:',result.nodeName,result.className);
            return result;
          }
        }
      }
      for (const child of node.children) {
        const result = recursiveSearch(child);
        if (result) {
          //console_log('Found in recursiveSearch4:',result.nodeName,result.className);
          return result;
        }
      }
      return null;
    }

    // Start the search in the whole document, including all shadow DOMs
    function recursiveSearch(node) {
      // Search in the node itself
      if (node.matches && node.matches(selector)) {
        //console_log('Found in recursiveSearch5:',node.nodeName,node.ClassName);
        return node;
      }

      // Recurse into child nodes, including shadow roots if present
      if (node.shadowRoot) {
        const result = searchInShadowDom(node);
        if (result) {
          //console_log('Found in recursiveSearch6:',result.nodeName,result.className);
          return result;
        }
      }

      // Recurse into child nodes (excluding shadow roots)
      for (const child of node.children) {
        const result = recursiveSearch(child);
        if (result) {
          //console_log('Found in recursiveSearch7:',result.nodeName,result.className);
          return result;
        }
      }

      return null;
    }

  }
  function console_log(...args){
  }
  //*************************************************** */

  function isUrl(fileName){
    // Check if the file is a URL (starts with http:// or https://)
    return fileName.includes('.');
  }

  async function readImageDimensions(escImages) {
    const promises = [];
    // Loop through each file URL in the provided array


    for (let i = 0; i < escImages.images.length; i++) {
      const fileUrl = escImages.images[i];
      if (isUrl(fileUrl)) {
        const promise = new Promise((resolve, reject) => {
          const img = new Image();

          img.onload = function() {
              resolve({
                  url: fileUrl,
                  width: img.width,
                  height: img.height,
                  index: i // Store the index of the image in the original array
              });
          };
          img.onerror = function() {
  //          hass.callService("persistent_notification", "create", {
  //            title: "Notitie",
  //            message: "Dit is mijn melding vanuit de card"
  //          });
            const baseImage = `${ESC_IMAGE_MAP}/${CONFIG_DEFAULT[escImages.imageTypes[i]]}`;
            escImages.images[i]= baseImage; // Replace with default image on error

            const fallbackImg = new Image();

            fallbackImg.onload = function () {
              resolve({
                url: baseImage,
                width: fallbackImg.width,
                height: fallbackImg.height,
                index: i
              });
            };
            fallbackImg.src = baseImage;
          };

          img.src = fileUrl; // Set the src to the image URL directly

        });
        promises.push(promise);
      }
    }

    try {
        // Wait for all image dimensions to be loaded
        const results = await Promise.all(promises);
        return results;  // Return results with dimensions
    } catch (error) {
        console.error('Error loading images:', error);
        throw error;
    }
  }

  exports.CONFIG_DEFAULT = CONFIG_DEFAULT;
  exports.DEPRECATED = DEPRECATED;
  exports.ESC_PRESET = ESC_PRESET;
  exports.HA_CARD_NAME = HA_CARD_NAME;
  exports.HA_SHUTTER_NAME = HA_SHUTTER_NAME;
  exports.ICONCOLORS = ICONCOLORS;
  exports.INVERT_OPEN_CLOSE_SETTING = INVERT_OPEN_CLOSE_SETTING;
  exports.REMOVED = REMOVED;
  exports.SHUTTER_STATE_CLOSED = SHUTTER_STATE_CLOSED;
  exports.SHUTTER_STATE_CLOSING = SHUTTER_STATE_CLOSING;
  exports.SHUTTER_STATE_OPEN = SHUTTER_STATE_OPEN;
  exports.SHUTTER_STATE_OPENING = SHUTTER_STATE_OPENING;
  exports.UNAVAILABLE = UNAVAILABLE;
  exports.UNKNOWN = UNKNOWN;
  exports.VERSION = VERSION;
  exports.boundary = boundary;
  exports.buildConfig = buildConfig;
  exports.getUniqueKeysFromObjects = getUniqueKeysFromObjects;
  exports.levelToColorKey = levelToColorKey;
  exports.normalisePosition = normalisePosition;
  exports.tiltAngleDeg = tiltAngleDeg;

  return exports;

})({});
