!(function(){var fn=Object.defineProperty,dn=Object.defineProperties;var pn=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var ct=(u,s,t)=>s in u?fn(u,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[s]=t,re=(u,s)=>{for(var t in s||(s={}))ft.call(s,t)&&ct(u,t,s[t]);if(we)for(var t of we(s))dt.call(s,t)&&ct(u,t,s[t]);return u},ze=(u,s)=>dn(u,pn(s));var Ye=(u,s)=>{var t={};for(var p in u)ft.call(u,p)&&s.indexOf(p)<0&&(t[p]=u[p]);if(u!=null&&we)for(var p of we(u))s.indexOf(p)<0&&dt.call(u,p)&&(t[p]=u[p]);return t};(self.webpackChunk_rc_component_textarea=self.webpackChunk_rc_component_textarea||[]).push([[904],{94103:function(u,s,t){"use strict";var p;p={value:!0},s.ZP=c,p=O;var z=h(t(67294));function x(d){if(typeof WeakMap!="function")return null;var f=new WeakMap,g=new WeakMap;return(x=function(i){return i?g:f})(d)}function h(d,f){if(!f&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var g=x(f);if(g&&g.has(d))return g.get(d);var i={__proto__:null},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in d)if(m!=="default"&&Object.prototype.hasOwnProperty.call(d,m)){var o=C?Object.getOwnPropertyDescriptor(d,m):null;o&&(o.get||o.set)?Object.defineProperty(i,m,o):i[m]=d[m]}return i.default=d,g&&g.set(d,i),i}function O(d,f){return f.max?f.strategy(d)<=f.max:!0}function c(d,f){return z.useMemo(()=>{let g={};f&&(g.show=typeof f=="object"&&f.formatter?f.formatter:!!f),g=re(re({},g),d);const m=g,{show:i}=m,C=Ye(m,["show"]);return ze(re({},C),{show:!!i,showFormatter:typeof i=="function"?i:void 0,strategy:C.strategy||(o=>o.length)})},[d,f])}},77830:function(u,s){"use strict";var t;t={value:!0},t=p,t=z,s.rJ=h,t=O;function p(c){return!!(c.addonBefore||c.addonAfter)}function z(c){return!!(c.prefix||c.suffix||c.allowClear)}function x(c,d,f){const g=d.cloneNode(!0),i=Object.create(c,{target:{value:g},currentTarget:{value:g}});return g.value=f,typeof d.selectionStart=="number"&&typeof d.selectionEnd=="number"&&(g.selectionStart=d.selectionStart,g.selectionEnd=d.selectionEnd),g.setSelectionRange=(...C)=>{d.setSelectionRange(...C)},i}function h(c,d,f,g){if(!f)return;let i=d;if(d.type==="click"){i=x(d,c,""),f(i);return}if(c.type!=="file"&&g!==void 0){i=x(d,c,g),f(i);return}f(i)}function O(c,d){if(!c)return;c.focus(d);const{cursor:f}=d||{};if(f){const g=c.value.length;switch(f){case"start":c.setSelectionRange(0,0);break;case"end":c.setSelectionRange(g,g);break;default:c.setSelectionRange(0,g)}}}},10763:function(u,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;function t(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},96607:function(u,s,t){"use strict";var p;p={value:!0},s.Z=O;var z=t(67294),x=h(t(19831));function h(c){return c&&c.__esModule?c:{default:c}}function O(c,d){const[f,g]=(0,z.useState)(c),i=d!==void 0?d:f;return(0,x.default)(C=>{C||g(d)},[d]),[i,g]}},19831:function(u,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.useLayoutUpdateEffect=s.default=void 0;var p=O(t(67294)),z=x(t(10763));function x(i){return i&&i.__esModule?i:{default:i}}function h(i){if(typeof WeakMap!="function")return null;var C=new WeakMap,m=new WeakMap;return(h=function(o){return o?m:C})(i)}function O(i,C){if(!C&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var m=h(C);if(m&&m.has(i))return m.get(i);var o={__proto__:null},q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var J in i)if(J!=="default"&&Object.prototype.hasOwnProperty.call(i,J)){var R=q?Object.getOwnPropertyDescriptor(i,J):null;R&&(R.get||R.set)?Object.defineProperty(o,J,R):o[J]=i[J]}return o.default=i,m&&m.set(i,o),o}const c=(0,z.default)()?p.useLayoutEffect:p.useEffect,d=(i,C)=>{const m=p.useRef(!0);c(()=>i(m.current),C),c(()=>(m.current=!1,()=>{m.current=!0}),[])},f=(i,C)=>{d(m=>{if(!m)return i()},C)};s.useLayoutUpdateEffect=f;var g=s.default=d},86440:function(u,s){"use strict";var t;t={value:!0},s.Z=void 0;let p=f=>+setTimeout(f,16),z=f=>clearTimeout(f);typeof window!="undefined"&&"requestAnimationFrame"in window&&(p=f=>window.requestAnimationFrame(f),z=f=>window.cancelAnimationFrame(f));let x=0;const h=new Map;function O(f){h.delete(f)}const c=(f,g=1)=>{x+=1;const i=x;function C(m){if(m===0)O(i),f();else{const o=p(()=>{C(m-1)});h.set(i,o)}}return C(g),i};c.cancel=f=>{const g=h.get(f);return O(f),z(g)};var d=s.Z=c},19128:function(u,s,t){"use strict";var p;t.r(s),t.d(s,{demos:function(){return g}});var z=t(15009),x=t.n(z),h=t(99289),O=t.n(h),c=t(67294),d=t(15155),f=t(69945),g={"docs-demo-simple-demo-simple":{component:c.memo(c.lazy(function(){return t.e(433).then(t.bind(t,17262))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(18647).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.1.2"}},entry:"index.tsx"},context:{react:p||(p=t.t(c,2)),"@rc-component/textarea":d},renderOpts:{compile:function(){var i=O()(x()().mark(function m(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},m)}));function C(){return i.apply(this,arguments)}return C}()}},"docs-demo-simple-demo-autosize":{component:c.memo(c.lazy(function(){return t.e(433).then(t.bind(t,16151))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(33214).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.1.2"}},entry:"index.tsx"},context:{react:p||(p=t.t(c,2)),"@rc-component/textarea":d},renderOpts:{compile:function(){var i=O()(x()().mark(function m(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},m)}));function C(){return i.apply(this,arguments)}return C}()}},"docs-demo-simple-demo-allowclear":{component:c.memo(c.lazy(function(){return t.e(433).then(t.bind(t,98144))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(80654).Z},"@rc-component/textarea":{type:"NPM",value:"1.1.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/textarea":d,react:p||(p=t.t(c,2))},renderOpts:{compile:function(){var i=O()(x()().mark(function m(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},m)}));function C(){return i.apply(this,arguments)}return C}()}},"docs-demo-simple-demo-showcount":{component:c.memo(c.lazy(function(){return t.e(433).then(t.bind(t,88941))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(672).Z},"@rc-component/textarea":{type:"NPM",value:"1.1.2"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:t(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":f,"@rc-component/textarea":d,react:p||(p=t.t(c,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":f},renderOpts:{compile:function(){var i=O()(x()().mark(function m(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},m)}));function C(){return i.apply(this,arguments)}return C}()}}}},11171:function(u,s,t){"use strict";t.r(s),t.d(s,{demos:function(){return z}});var p=t(67294),z={}},15155:function(u,s,t){"use strict";t.r(s),t.d(s,{ResizableTextArea:function(){return ut},default:function(){return _t}});var p=t(9783),z=t.n(p),x=t(97857),h=t.n(x),O=t(19632),c=t.n(O),d=t(5574),f=t.n(d),g=t(13769),i=t.n(g),C=t(93967),m=t.n(C),o=t(67294);function q(e){return!!(e.addonBefore||e.addonAfter)}function J(e){return!!(e.prefix||e.suffix||e.allowClear)}function R(e,n,r){const a=n.cloneNode(!0),l=Object.create(e,{target:{value:a},currentTarget:{value:a}});return a.value=r,typeof n.selectionStart=="number"&&typeof n.selectionEnd=="number"&&(a.selectionStart=n.selectionStart,a.selectionEnd=n.selectionEnd),a.setSelectionRange=(...y)=>{n.setSelectionRange(...y)},l}function mn(e,n,r,a){if(!r)return;let l=n;if(n.type==="click"){l=R(n,e,""),r(l);return}if(e.type!=="file"&&a!==void 0){l=R(n,e,a),r(l);return}r(l)}function vn(e,n){if(!e)return;e.focus(n);const{cursor:r}=n||{};if(r){const a=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Oe.apply(this,arguments)}var pt=o.forwardRef((e,n)=>{var pe,ue,xe;const{inputElement:r,children:a,prefixCls:l,prefix:y,suffix:v,addonBefore:I,addonAfter:S,className:A,style:V,disabled:$,readOnly:F,focused:U,triggerFocus:P,allowClear:w,value:Z,handleReset:te,hidden:H,classes:N,classNames:E,dataAttrs:j,styles:M,components:T,onClear:X}=e,Q=a!=null?a:r,ae=(T==null?void 0:T.affixWrapper)||"span",ee=(T==null?void 0:T.groupWrapper)||"span",G=(T==null?void 0:T.wrapper)||"span",oe=(T==null?void 0:T.groupAddon)||"span",fe=(0,o.useRef)(null),de=B=>{var W;(W=fe.current)!=null&&W.contains(B.target)&&(P==null||P())},se=J(e);let Y=(0,o.cloneElement)(Q,{value:Z,className:m()((pe=Q.props)==null?void 0:pe.className,!se&&(E==null?void 0:E.variant))||null});const ne=(0,o.useRef)(null);if(o.useImperativeHandle(n,()=>({nativeElement:ne.current||fe.current})),se){let B=null;if(w){const he=!$&&!F&&Z,ye=`${l}-clear-icon`,Ee=typeof w=="object"&&(w!=null&&w.clearIcon)?w.clearIcon:"\u2716";B=o.createElement("button",{type:"button",tabIndex:-1,onClick:me=>{te==null||te(me),X==null||X()},onMouseDown:me=>me.preventDefault(),className:m()(ye,{[`${ye}-hidden`]:!he,[`${ye}-has-suffix`]:!!v})},Ee)}const W=`${l}-affix-wrapper`,k=m()(W,{[`${l}-disabled`]:$,[`${W}-disabled`]:$,[`${W}-focused`]:U,[`${W}-readonly`]:F,[`${W}-input-with-clear-btn`]:v&&w&&Z},N==null?void 0:N.affixWrapper,E==null?void 0:E.affixWrapper,E==null?void 0:E.variant),_=(v||w)&&o.createElement("span",{className:m()(`${l}-suffix`,E==null?void 0:E.suffix),style:M==null?void 0:M.suffix},B,v);Y=o.createElement(ae,Oe({className:k,style:M==null?void 0:M.affixWrapper,onClick:de},j==null?void 0:j.affixWrapper,{ref:fe}),y&&o.createElement("span",{className:m()(`${l}-prefix`,E==null?void 0:E.prefix),style:M==null?void 0:M.prefix},y),Y,_)}if(q(e)){const B=`${l}-group`,W=`${B}-addon`,k=`${B}-wrapper`,_=m()(`${l}-wrapper`,B,N==null?void 0:N.wrapper,E==null?void 0:E.wrapper),he=m()(k,{[`${k}-disabled`]:$},N==null?void 0:N.group,E==null?void 0:E.groupWrapper);Y=o.createElement(ee,{className:he,ref:ne},o.createElement(G,{className:_},I&&o.createElement(oe,{className:W},I),Y,S&&o.createElement(oe,{className:W},S)))}return o.cloneElement(Y,{className:m()((ue=Y.props)==null?void 0:ue.className,A)||null,style:re(re({},(xe=Y.props)==null?void 0:xe.style),V),hidden:H})});function xn(e){const n=React.useRef();return n.current=e,React.useCallback((...a)=>{var l;return(l=n.current)==null?void 0:l.call(n,...a)},[])}var hn=null;function mt(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}const ke=mt()?o.useLayoutEffect:o.useEffect,vt=(e,n)=>{const r=React.useRef(!0);ke(()=>e(r.current),n),ke(()=>(r.current=!1,()=>{r.current=!0}),[])},yn=(e,n)=>{vt(r=>{if(!r)return e()},n)};var Rn=null;function En(e){const n=React.useRef(!1),[r,a]=React.useState(e);React.useEffect(()=>(n.current=!1,()=>{n.current=!0}),[]);function l(y,v){v&&n.current||a(y)}return[r,l]}function Pe(e){return e!==void 0}function Cn(e,n){const{defaultValue:r,value:a,onChange:l,postState:y}=n||{},[v,I]=useState(()=>Pe(a)?a:Pe(r)?typeof r=="function"?r():r:typeof e=="function"?e():e),S=a!==void 0?a:v,A=y?y(S):S,V=useEvent(l),[$,F]=useState([S]);useLayoutUpdateEffect(()=>{const P=$[0];v!==P&&V(v,P)},[$]),useLayoutUpdateEffect(()=>{Pe(a)||I(a)},[a]);const U=useEvent((P,w)=>{I(P,w),F([S],w)});return[A,U]}function In(e,n){return n.max?n.strategy(e)<=n.max:!0}function bn(e,n){return React.useMemo(()=>{let r={};n&&(r.show=typeof n=="object"&&n.formatter?n.formatter:!!n),r=re(re({},r),e);const y=r,{show:a}=y,l=Ye(y,["show"]);return ze(re({},l),{show:!!a,showFormatter:typeof a=="function"?a:void 0,strategy:l.strategy||(v=>v.length)})},[e,n])}function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Je.apply(this,arguments)}const Sn=null;var wn=null,zn=null,gt=t(94103),Xe=t(77830),Qe=t(96607);function _e(e){var n,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(n=0;n<l;n++)e[n]&&(r=_e(e[n]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function Re(){for(var e,n,r=0,a="",l=arguments.length;r<l;r++)(e=arguments[r])&&(n=_e(e))&&(a&&(a+=" "),a+=n);return a}var On=null,xt=t(52677),ht=t.n(xt);const yt=Symbol.for("react.element"),Rt=Symbol.for("react.transitional.element"),Et=Symbol.for("react.fragment");function qe(e){return e&&typeof e=="object"&&(e.$$typeof===yt||e.$$typeof===Rt)&&e.type===Et}function Ae(e,n={}){let r=[];return o.Children.forEach(e,a=>{a==null&&!n.keepEmpty||(Array.isArray(a)?r=r.concat(Ae(a)):qe(a)&&a.props?r=r.concat(Ae(a.props.children,n)):r.push(a))}),r}let Me={};const Ct=[],It=e=>{Ct.push(e)};function bt(e,n){}function St(e,n){}function wt(){Me={}}function et(e,n,r){!n&&!Me[r]&&(e(!1,r),Me[r]=!0)}function Te(e,n){et(bt,e,n)}function zt(e,n){et(St,e,n)}Te.preMessage=It,Te.resetWarned=wt,Te.noteOnce=zt;var Pn=null;function tt(e){return e instanceof HTMLElement||e instanceof SVGElement}function Le(e){return e&&typeof e=="object"&&tt(e.nativeElement)?e.nativeElement:tt(e)?e:null}function An(e){const n=Le(e);if(n)return n;if(e&&typeof e=="object"&&"current"in e){const r=Le(e.current);if(r)return r}return null}var je=t(59864);function Ot(e,n,r){const a=o.useRef({});return(!("value"in a.current)||r(a.current.condition,n))&&(a.current.value=e(),a.current.condition=n),a.current.value}const Pt=Number(o.version.split(".")[0]),At=(e,n)=>{typeof e=="function"?e(n):typeof e=="object"&&e&&"current"in e&&(e.current=n)},Mt=(...e)=>{const n=e.filter(Boolean);return n.length<=1?n[0]:r=>{e.forEach(a=>{At(a,r)})}},Tt=(...e)=>Ot(()=>Mt(...e),e,(n,r)=>n.length!==r.length||n.every((a,l)=>a!==r[l])),nt=e=>{var r,a;if(!e)return!1;if(Ve(e)&&Pt>=19)return!0;const n=(0,je.isMemo)(e)?e.type.type:e.type;return!(typeof n=="function"&&!((r=n.prototype)!=null&&r.render)&&n.$$typeof!==je.ForwardRef||typeof e=="function"&&!((a=e.prototype)!=null&&a.render)&&e.$$typeof!==je.ForwardRef)};function Ve(e){return(0,o.isValidElement)(e)&&!qe(e)}const Mn=e=>Ve(e)&&nt(e),Lt=e=>{if(e&&Ve(e)){const n=e;return n.props.propertyIsEnumerable("ref")?n.props.ref:n.ref}return null},$e=o.createContext(null);function jt({children:e,onBatchResize:n}){const r=o.useRef(0),a=o.useRef([]),l=o.useContext($e),y=o.useCallback((v,I,S)=>{r.current+=1;const A=r.current;a.current.push({size:v,element:I,data:S}),Promise.resolve().then(()=>{A===r.current&&(n==null||n(a.current),a.current=[])}),l==null||l(v,I,S)},[n,l]);return o.createElement($e.Provider,{value:y},e)}const ce=new Map;function Vt(e){e.forEach(n=>{var a;const{target:r}=n;(a=ce.get(r))==null||a.forEach(l=>l(r))})}let Ne;function rt(){return Ne||(Ne=new ResizeObserver(Vt)),Ne}const Tn=null,Ln=null;function $t(e,n){ce.has(e)||(ce.set(e,new Set),rt().observe(e)),ce.get(e).add(n)}function Nt(e,n){ce.has(e)&&(ce.get(e).delete(n),ce.get(e).size||(rt().unobserve(e),ce.delete(e)))}function Ft(e,n){const{children:r,disabled:a}=e,l=o.useRef(null),y=o.useContext($e),v=typeof r=="function",I=v?r(l):r,S=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),A=!v&&o.isValidElement(I)&&nt(I),V=A?Lt(I):null,$=Tt(V,l),F=()=>Le(l.current);o.useImperativeHandle(n,()=>F());const U=o.useRef(e);U.current=e;const P=o.useCallback(w=>{const{onResize:Z,data:te}=U.current,{width:H,height:N}=w.getBoundingClientRect(),{offsetWidth:E,offsetHeight:j}=w,M=Math.floor(H),T=Math.floor(N);if(S.current.width!==M||S.current.height!==T||S.current.offsetWidth!==E||S.current.offsetHeight!==j){const X={width:M,height:T,offsetWidth:E,offsetHeight:j};S.current=X;const Q=E===Math.round(H)?H:E,ae=j===Math.round(N)?N:j,ee=ze(re({},X),{offsetWidth:Q,offsetHeight:ae});y==null||y(ee,w,te),Z&&Promise.resolve().then(()=>{Z(ee,w)})}},[]);return o.useEffect(()=>{const w=F();return w&&!a&&$t(w,P),()=>Nt(w,P)},[l.current,a]),A?o.cloneElement(I,{ref:$}):I}var Wt=o.forwardRef(Ft);function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Fe.apply(this,arguments)}const Dt="rc-observer-key";function Ut(e,n){const{children:r}=e;return(typeof r=="function"?[r]:Ae(r)).map((l,y)=>{const v=(l==null?void 0:l.key)||`${Dt}-${y}`;return o.createElement(Wt,Fe({},e,{key:v,ref:y===0?n:void 0}),l)})}const at=o.forwardRef(Ut);at.Collection=jt;var Bt=at,ot=t(19831),st=t(86440),Kt=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Zt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],We={},K;function Ht(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(n&&We[r])return We[r];var a=window.getComputedStyle(e),l=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),y=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),v=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),I=Zt.map(function(A){return"".concat(A,":").concat(a.getPropertyValue(A))}).join(";"),S={sizingStyle:I,paddingSize:y,borderSize:v,boxSizing:l};return n&&r&&(We[r]=S),S}function Gt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;K||(K=document.createElement("textarea"),K.setAttribute("tab-index","-1"),K.setAttribute("aria-hidden","true"),K.setAttribute("name","hiddenTextarea"),document.body.appendChild(K)),e.getAttribute("wrap")?K.setAttribute("wrap",e.getAttribute("wrap")):K.removeAttribute("wrap");var l=Ht(e,n),y=l.paddingSize,v=l.borderSize,I=l.boxSizing,S=l.sizingStyle;K.setAttribute("style","".concat(S,";").concat(Kt)),K.value=e.value||e.placeholder||"";var A=void 0,V=void 0,$,F=K.scrollHeight;if(I==="border-box"?F+=v:I==="content-box"&&(F-=y),r!==null||a!==null){K.value=" ";var U=K.scrollHeight-y;r!==null&&(A=U*r,I==="border-box"&&(A=A+y+v),F=Math.max(A,F)),a!==null&&(V=U*a,I==="border-box"&&(V=V+y+v),$=F>V?"":"hidden",F=Math.min(V,F))}var P={height:F,overflowY:$,resize:"none"};return A&&(P.minHeight=A),V&&(P.maxHeight=V),P}var ge=t(85893),Yt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],De=0,Ue=1,Be=2,kt=o.forwardRef(function(e,n){var r=e,a=r.prefixCls,l=r.defaultValue,y=r.value,v=r.autoSize,I=r.onResize,S=r.className,A=r.style,V=r.disabled,$=r.onChange,F=r.onInternalAutoSize,U=i()(r,Yt),P=(0,Qe.Z)(l,y),w=f()(P,2),Z=w[0],te=w[1],H=Z!=null?Z:"",N=function(_){te(_.target.value),$==null||$(_)},E=o.useRef();o.useImperativeHandle(n,function(){return{textArea:E.current}});var j=o.useMemo(function(){return v&&ht()(v)==="object"?[v.minRows,v.maxRows]:[]},[v]),M=f()(j,2),T=M[0],X=M[1],Q=!!v,ae=o.useState(Be),ee=f()(ae,2),G=ee[0],oe=ee[1],fe=o.useState(),de=f()(fe,2),se=de[0],Y=de[1],ne=function(){oe(De)};(0,ot.default)(function(){Q&&ne()},[y,T,X,Q]),(0,ot.default)(function(){if(G===De)oe(Ue);else if(G===Ue){var k=Gt(E.current,!1,T,X);oe(Be),Y(k)}},[G]);var pe=o.useRef(),ue=function(){st.Z.cancel(pe.current)},xe=function(_){G===Be&&(I==null||I(_),v&&(ue(),pe.current=(0,st.Z)(function(){ne()})))};o.useEffect(function(){return ue},[]);var B=Q?se:null,W=h()(h()({},A),B);return(G===De||G===Ue)&&(W.overflowY="hidden",W.overflowX="hidden"),(0,ge.jsx)(Bt,{onResize:xe,disabled:!(v||I),children:(0,ge.jsx)("textarea",h()(h()({},U),{},{ref:E,style:W,className:Re(a,S,z()({},"".concat(a,"-disabled"),V)),disabled:V,value:H,onChange:N}))})}),ut=kt,Jt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],Xt=o.forwardRef(function(e,n){var r,a=e.defaultValue,l=e.value,y=e.onFocus,v=e.onBlur,I=e.onChange,S=e.allowClear,A=e.maxLength,V=e.onCompositionStart,$=e.onCompositionEnd,F=e.suffix,U=e.prefixCls,P=U===void 0?"rc-textarea":U,w=e.showCount,Z=e.count,te=e.className,H=e.style,N=e.disabled,E=e.hidden,j=e.classNames,M=e.styles,T=e.onResize,X=e.onClear,Q=e.onPressEnter,ae=e.readOnly,ee=e.autoSize,G=e.onKeyDown,oe=i()(e,Jt),fe=(0,Qe.Z)(a,l),de=f()(fe,2),se=de[0],Y=de[1],ne=se==null?"":String(se),pe=o.useState(!1),ue=f()(pe,2),xe=ue[0],B=ue[1],W=o.useRef(!1),k=o.useState(null),_=f()(k,2),he=_[0],ye=_[1],Ee=(0,o.useRef)(null),me=(0,o.useRef)(null),ie=function(){var b;return(b=me.current)===null||b===void 0?void 0:b.textArea},Ke=function(){ie().focus()};(0,o.useImperativeHandle)(n,function(){var D;return{resizableTextArea:me.current,focus:Ke,blur:function(){ie().blur()},nativeElement:((D=Ee.current)===null||D===void 0?void 0:D.nativeElement)||ie()}}),(0,o.useEffect)(function(){B(function(D){return!N&&D})},[N]);var it=o.useState(null),Ze=f()(it,2),be=Ze[0],qt=Ze[1];o.useEffect(function(){if(be){var D;(D=ie()).setSelectionRange.apply(D,c()(be))}},[be]);var L=(0,gt.ZP)(Z,w),le=(r=L.max)!==null&&r!==void 0?r:A,He=Number(le)>0,Ce=L.strategy(ne),en=!!le&&Ce>le,lt=function(b,ve){var Se=ve;!W.current&&L.exceedFormatter&&L.max&&L.strategy(ve)>L.max&&(Se=L.exceedFormatter(ve,{max:L.max}),ve!==Se&&qt([ie().selectionStart||0,ie().selectionEnd||0])),Y(Se),(0,Xe.rJ)(b.currentTarget,b,I,Se)},tn=function(b){W.current=!0,V==null||V(b)},nn=function(b){W.current=!1,lt(b,b.currentTarget.value),$==null||$(b)},rn=function(b){lt(b,b.target.value)},an=function(b){b.key==="Enter"&&Q&&!b.nativeEvent.isComposing&&Q(b),G==null||G(b)},on=function(b){B(!0),y==null||y(b)},sn=function(b){B(!1),v==null||v(b)},un=function(b){Y(""),Ke(),(0,Xe.rJ)(ie(),b,I)},Ge=F,Ie;L.show&&(L.showFormatter?Ie=L.showFormatter({value:ne,count:Ce,maxLength:le}):Ie="".concat(Ce).concat(He?" / ".concat(le):""),Ge=(0,ge.jsxs)(ge.Fragment,{children:[Ge,(0,ge.jsx)("span",{className:Re("".concat(P,"-data-count"),j==null?void 0:j.count),style:M==null?void 0:M.count,children:Ie})]}));var ln=function(b){var ve;T==null||T(b),(ve=ie())!==null&&ve!==void 0&&ve.style.height&&ye(!0)},cn=!ee&&!w&&!S;return(0,ge.jsx)(pt,{ref:Ee,value:ne,allowClear:S,handleReset:un,suffix:Ge,prefixCls:P,classNames:h()(h()({},j),{},{affixWrapper:Re(j==null?void 0:j.affixWrapper,z()(z()({},"".concat(P,"-show-count"),w),"".concat(P,"-textarea-allow-clear"),S))}),disabled:N,focused:xe,className:Re(te,en&&"".concat(P,"-out-of-range")),style:h()(h()({},H),he&&!cn?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Ie=="string"?Ie:void 0}},hidden:E,readOnly:ae,onClear:X,children:(0,ge.jsx)(ut,h()(h()({},oe),{},{autoSize:ee,maxLength:A,onKeyDown:an,onChange:rn,onFocus:on,onBlur:sn,onCompositionStart:tn,onCompositionEnd:nn,className:Re(j==null?void 0:j.textarea),style:h()({resize:H==null?void 0:H.resize},M==null?void 0:M.textarea),disabled:N,prefixCls:P,onResize:ln,ref:me,readOnly:ae}))})}),Qt=Xt,_t=Qt},69945:function(u,s,t){"use strict";t.r(s)},49726:function(u,s,t){"use strict";t.r(s),t.d(s,{texts:function(){return p}});const p=[]},51446:function(u,s,t){"use strict";t.r(s),t.d(s,{texts:function(){return p}});const p=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(u,s){"use strict";s.Z=`@textarea-prefix-cls: rc-textarea;

.rc-textarea-affix-wrapper {
  display: inline-block;
  box-sizing: border-box;

  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 1px solid #1677ff;
  }
}

.@{textarea-prefix-cls}-out-of-range {
  &,
  & textarea {
    color: red;
  }
}
`},80654:function(u,s){"use strict";s.Z=`/* eslint-disable no-console */
import Textarea from '@rc-component/textarea';
import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('hello\\nworld');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <Textarea autoSize allowClear />
      <p>controlled</p>
      <Textarea value={value} onChange={onChange} allowClear />
    </div>
  );
}
`},33214:function(u,s){"use strict";s.Z=`/* eslint-disable no-console */
import React, { useState } from 'react';
import Textarea from '@rc-component/textarea';

export default function App() {
  const [value, setValue] = useState('hello\\nworld');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  const onResize = ({ width, height }) => {
    console.log(\`size is changed, width:\${width} height:\${height}\`);
  };

  return (
    <div>
      <p>when set to true</p>
      <Textarea
        autoSize
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
      <p>when set to object of minRows and maxRows</p>
      <Textarea
        autoSize={{ minRows: 5, maxRows: 15 }}
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
`},672:function(u,s){"use strict";s.Z=`/* eslint-disable no-console */
import Textarea from '@rc-component/textarea';
import React, { useState } from 'react';
import '../../assets/index.less';

export default function App() {
  const [value, setValue] = useState('hello\\nworld');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <Textarea autoSize showCount />
      <p>controlled</p>
      <Textarea value={value} onChange={onChange} showCount maxLength={100} />
      <p>with height</p>
      <Textarea
        value={value}
        onChange={onChange}
        showCount
        style={{ height: 200, width: '100%', resize: 'vertical' }}
      />
      <hr />
      <p>Count.exceedFormatter</p>
      <Textarea
        defaultValue="\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}"
        count={{
          show: true,
          max: 5,
        }}
      />
      <Textarea
        defaultValue="\u{1F525}"
        count={{
          show: true,
          max: 5,
          exceedFormatter: (val, { max }) => {
            const segments = [...new Intl.Segmenter().segment(val)];

            return segments
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join('');
          },
        }}
      />
    </div>
  );
}
`},18647:function(u,s){"use strict";s.Z=`/* eslint-disable no-console */
import React, { useState } from 'react';
import type { TextAreaProps } from '@rc-component/textarea';
import Textarea from '@rc-component/textarea';

export default function App() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    console.log(e.target.value);
    setValue(currentValue);
  };

  const onResize: TextAreaProps['onResize'] = ({ width, height }) => {
    console.log(\`size is changed, width:\${width} height:\${height}\`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPressEnter = (e) => {
    console.log(\`enter key is pressed\`);
  };

  return (
    <div>
      <Textarea
        prefixCls="custom-textarea"
        onPressEnter={onPressEnter}
        onResize={onResize}
        value={value}
        onChange={onChange}
        autoFocus
        onFocus={() => console.log('focus')}
      />
    </div>
  );
}
`},96446:function(u,s,t){var p=t(37923);function z(x){if(Array.isArray(x))return p(x)}u.exports=z,u.exports.__esModule=!0,u.exports.default=u.exports},96936:function(u){function s(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}u.exports=s,u.exports.__esModule=!0,u.exports.default=u.exports},88619:function(u){function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u.exports=s,u.exports.__esModule=!0,u.exports.default=u.exports},13769:function(u,s,t){var p=t(48541);function z(x,h){if(x==null)return{};var O=p(x,h),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(x);for(d=0;d<f.length;d++)c=f[d],!(h.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(x,c)&&(O[c]=x[c])}return O}u.exports=z,u.exports.__esModule=!0,u.exports.default=u.exports},48541:function(u){function s(t,p){if(t==null)return{};var z={},x=Object.keys(t),h,O;for(O=0;O<x.length;O++)h=x[O],!(p.indexOf(h)>=0)&&(z[h]=t[h]);return z}u.exports=s,u.exports.__esModule=!0,u.exports.default=u.exports},19632:function(u,s,t){var p=t(96446),z=t(96936),x=t(96263),h=t(88619);function O(c){return p(c)||z(c)||x(c)||h()}u.exports=O,u.exports.__esModule=!0,u.exports.default=u.exports}}]);
}());