!(function(){var ln=Object.defineProperty,cn=Object.defineProperties;var fn=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var it=(u,s,t)=>s in u?ln(u,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[s]=t,re=(u,s)=>{for(var t in s||(s={}))lt.call(s,t)&&it(u,t,s[t]);if(Se)for(var t of Se(s))ct.call(s,t)&&it(u,t,s[t]);return u},we=(u,s)=>cn(u,fn(s));var Ge=(u,s)=>{var t={};for(var m in u)lt.call(u,m)&&s.indexOf(m)<0&&(t[m]=u[m]);if(u!=null&&Se)for(var m of Se(u))s.indexOf(m)<0&&ct.call(u,m)&&(t[m]=u[m]);return t};(self.webpackChunk_rc_component_textarea=self.webpackChunk_rc_component_textarea||[]).push([[904],{94103:function(u,s,t){"use strict";var m;m={value:!0},s.ZP=l,m=O;var z=h(t(67294));function x(f){if(typeof WeakMap!="function")return null;var c=new WeakMap,g=new WeakMap;return(x=function(i){return i?g:c})(f)}function h(f,c){if(!c&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=x(c);if(g&&g.has(f))return g.get(f);var i={__proto__:null},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in f)if(p!=="default"&&Object.prototype.hasOwnProperty.call(f,p)){var o=C?Object.getOwnPropertyDescriptor(f,p):null;o&&(o.get||o.set)?Object.defineProperty(i,p,o):i[p]=f[p]}return i.default=f,g&&g.set(f,i),i}function O(f,c){return c.max?c.strategy(f)<=c.max:!0}function l(f,c){return z.useMemo(()=>{let g={};c&&(g.show=typeof c=="object"&&c.formatter?c.formatter:!!c),g=re(re({},g),f);const p=g,{show:i}=p,C=Ge(p,["show"]);return we(re({},C),{show:!!i,showFormatter:typeof i=="function"?i:void 0,strategy:C.strategy||(o=>o.length)})},[f,c])}},77830:function(u,s){"use strict";var t;t={value:!0},t=m,t=z,s.rJ=h,t=O;function m(l){return!!(l.addonBefore||l.addonAfter)}function z(l){return!!(l.prefix||l.suffix||l.allowClear)}function x(l,f,c){const g=f.cloneNode(!0),i=Object.create(l,{target:{value:g},currentTarget:{value:g}});return g.value=c,typeof f.selectionStart=="number"&&typeof f.selectionEnd=="number"&&(g.selectionStart=f.selectionStart,g.selectionEnd=f.selectionEnd),g.setSelectionRange=(...C)=>{f.setSelectionRange(...C)},i}function h(l,f,c,g){if(!c)return;let i=f;if(f.type==="click"){i=x(f,l,""),c(i);return}if(l.type!=="file"&&g!==void 0){i=x(f,l,g),c(i);return}c(i)}function O(l,f){if(!l)return;l.focus(f);const{cursor:c}=f||{};if(c){const g=l.value.length;switch(c){case"start":l.setSelectionRange(0,0);break;case"end":l.setSelectionRange(g,g);break;default:l.setSelectionRange(0,g)}}}},10763:function(u,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=t;function t(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},96607:function(u,s,t){"use strict";var m;m={value:!0},s.Z=O;var z=t(67294),x=h(t(19831));function h(l){return l&&l.__esModule?l:{default:l}}function O(l,f){const[c,g]=(0,z.useState)(l),i=f!==void 0?f:c;return(0,x.default)(C=>{C||g(f)},[f]),[i,g]}},19831:function(u,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.useLayoutUpdateEffect=s.default=void 0;var m=O(t(67294)),z=x(t(10763));function x(i){return i&&i.__esModule?i:{default:i}}function h(i){if(typeof WeakMap!="function")return null;var C=new WeakMap,p=new WeakMap;return(h=function(o){return o?p:C})(i)}function O(i,C){if(!C&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var p=h(C);if(p&&p.has(i))return p.get(i);var o={__proto__:null},q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var J in i)if(J!=="default"&&Object.prototype.hasOwnProperty.call(i,J)){var R=q?Object.getOwnPropertyDescriptor(i,J):null;R&&(R.get||R.set)?Object.defineProperty(o,J,R):o[J]=i[J]}return o.default=i,p&&p.set(i,o),o}const l=(0,z.default)()?m.useLayoutEffect:m.useEffect,f=(i,C)=>{const p=m.useRef(!0);l(()=>i(p.current),C),l(()=>(p.current=!1,()=>{p.current=!0}),[])},c=(i,C)=>{f(p=>{if(!p)return i()},C)};s.useLayoutUpdateEffect=c;var g=s.default=f},86440:function(u,s){"use strict";var t;t={value:!0},s.Z=void 0;let m=c=>+setTimeout(c,16),z=c=>clearTimeout(c);typeof window!="undefined"&&"requestAnimationFrame"in window&&(m=c=>window.requestAnimationFrame(c),z=c=>window.cancelAnimationFrame(c));let x=0;const h=new Map;function O(c){h.delete(c)}const l=(c,g=1)=>{x+=1;const i=x;function C(p){if(p===0)O(i),c();else{const o=m(()=>{C(p-1)});h.set(i,o)}}return C(g),i};l.cancel=c=>{const g=h.get(c);return O(c),z(g)};var f=s.Z=l},19128:function(u,s,t){"use strict";var m;t.r(s),t.d(s,{demos:function(){return g}});var z=t(15009),x=t.n(z),h=t(99289),O=t.n(h),l=t(67294),f=t(8889),c=t(69945),g={"docs-demo-simple-demo-simple":{component:l.memo(l.lazy(function(){return t.e(433).then(t.bind(t,17262))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(18647).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.1.1"}},entry:"index.tsx"},context:{react:m||(m=t.t(l,2)),"@rc-component/textarea":f},renderOpts:{compile:function(){var i=O()(x()().mark(function p(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},p)}));function C(){return i.apply(this,arguments)}return C}()}},"docs-demo-simple-demo-autosize":{component:l.memo(l.lazy(function(){return t.e(433).then(t.bind(t,16151))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(33214).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.1.1"}},entry:"index.tsx"},context:{react:m||(m=t.t(l,2)),"@rc-component/textarea":f},renderOpts:{compile:function(){var i=O()(x()().mark(function p(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},p)}));function C(){return i.apply(this,arguments)}return C}()}},"docs-demo-simple-demo-allowclear":{component:l.memo(l.lazy(function(){return t.e(433).then(t.bind(t,98144))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(80654).Z},"@rc-component/textarea":{type:"NPM",value:"1.1.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/textarea":f,react:m||(m=t.t(l,2))},renderOpts:{compile:function(){var i=O()(x()().mark(function p(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},p)}));function C(){return i.apply(this,arguments)}return C}()}},"docs-demo-simple-demo-showcount":{component:l.memo(l.lazy(function(){return t.e(433).then(t.bind(t,88941))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(672).Z},"@rc-component/textarea":{type:"NPM",value:"1.1.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:t(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":c,"@rc-component/textarea":f,react:m||(m=t.t(l,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":c},renderOpts:{compile:function(){var i=O()(x()().mark(function p(){var o,q=arguments;return x()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(250).then(t.bind(t,90250));case 2:return R.abrupt("return",(o=R.sent).default.apply(o,q));case 3:case"end":return R.stop()}},p)}));function C(){return i.apply(this,arguments)}return C}()}}}},11171:function(u,s,t){"use strict";t.r(s),t.d(s,{demos:function(){return z}});var m=t(67294),z={}},8889:function(u,s,t){"use strict";t.r(s),t.d(s,{ResizableTextArea:function(){return ot},default:function(){return Xt}});var m=t(9783),z=t.n(m),x=t(97857),h=t.n(x),O=t(19632),l=t.n(O),f=t(5574),c=t.n(f),g=t(13769),i=t.n(g),C=t(93967),p=t.n(C),o=t(67294);function q(e){return!!(e.addonBefore||e.addonAfter)}function J(e){return!!(e.prefix||e.suffix||e.allowClear)}function R(e,n,r){const a=n.cloneNode(!0),d=Object.create(e,{target:{value:a},currentTarget:{value:a}});return a.value=r,typeof n.selectionStart=="number"&&typeof n.selectionEnd=="number"&&(a.selectionStart=n.selectionStart,a.selectionEnd=n.selectionEnd),a.setSelectionRange=(...y)=>{n.setSelectionRange(...y)},d}function dn(e,n,r,a){if(!r)return;let d=n;if(n.type==="click"){d=R(n,e,""),r(d);return}if(e.type!=="file"&&a!==void 0){d=R(n,e,a),r(d);return}r(d)}function pn(e,n){if(!e)return;e.focus(n);const{cursor:r}=n||{};if(r){const a=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ze.apply(this,arguments)}var ft=o.forwardRef((e,n)=>{var pe,ue,xe;const{inputElement:r,children:a,prefixCls:d,prefix:y,suffix:v,addonBefore:I,addonAfter:S,className:A,style:V,disabled:$,readOnly:F,focused:U,triggerFocus:P,allowClear:w,value:Z,handleReset:te,hidden:H,classes:N,classNames:E,dataAttrs:j,styles:M,components:T,onClear:X}=e,Q=a!=null?a:r,ae=(T==null?void 0:T.affixWrapper)||"span",ee=(T==null?void 0:T.groupWrapper)||"span",G=(T==null?void 0:T.wrapper)||"span",oe=(T==null?void 0:T.groupAddon)||"span",fe=(0,o.useRef)(null),de=B=>{var W;(W=fe.current)!=null&&W.contains(B.target)&&(P==null||P())},se=J(e);let Y=(0,o.cloneElement)(Q,{value:Z,className:p()((pe=Q.props)==null?void 0:pe.className,!se&&(E==null?void 0:E.variant))||null});const ne=(0,o.useRef)(null);if(o.useImperativeHandle(n,()=>({nativeElement:ne.current||fe.current})),se){let B=null;if(w){const he=!$&&!F&&Z,ye=`${d}-clear-icon`,Re=typeof w=="object"&&(w!=null&&w.clearIcon)?w.clearIcon:"\u2716";B=o.createElement("button",{type:"button",tabIndex:-1,onClick:me=>{te==null||te(me),X==null||X()},onMouseDown:me=>me.preventDefault(),className:p()(ye,{[`${ye}-hidden`]:!he,[`${ye}-has-suffix`]:!!v})},Re)}const W=`${d}-affix-wrapper`,k=p()(W,{[`${d}-disabled`]:$,[`${W}-disabled`]:$,[`${W}-focused`]:U,[`${W}-readonly`]:F,[`${W}-input-with-clear-btn`]:v&&w&&Z},N==null?void 0:N.affixWrapper,E==null?void 0:E.affixWrapper,E==null?void 0:E.variant),_=(v||w)&&o.createElement("span",{className:p()(`${d}-suffix`,E==null?void 0:E.suffix),style:M==null?void 0:M.suffix},B,v);Y=o.createElement(ae,ze({className:k,style:M==null?void 0:M.affixWrapper,onClick:de},j==null?void 0:j.affixWrapper,{ref:fe}),y&&o.createElement("span",{className:p()(`${d}-prefix`,E==null?void 0:E.prefix),style:M==null?void 0:M.prefix},y),Y,_)}if(q(e)){const B=`${d}-group`,W=`${B}-addon`,k=`${B}-wrapper`,_=p()(`${d}-wrapper`,B,N==null?void 0:N.wrapper,E==null?void 0:E.wrapper),he=p()(k,{[`${k}-disabled`]:$},N==null?void 0:N.group,E==null?void 0:E.groupWrapper);Y=o.createElement(ee,{className:he,ref:ne},o.createElement(G,{className:_},I&&o.createElement(oe,{className:W},I),Y,S&&o.createElement(oe,{className:W},S)))}return o.cloneElement(Y,{className:p()((ue=Y.props)==null?void 0:ue.className,A)||null,style:re(re({},(xe=Y.props)==null?void 0:xe.style),V),hidden:H})});function vn(e){const n=React.useRef();return n.current=e,React.useCallback((...a)=>{var d;return(d=n.current)==null?void 0:d.call(n,...a)},[])}var gn=null;function dt(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}const Ye=dt()?o.useLayoutEffect:o.useEffect,pt=(e,n)=>{const r=React.useRef(!0);Ye(()=>e(r.current),n),Ye(()=>(r.current=!1,()=>{r.current=!0}),[])},xn=(e,n)=>{pt(r=>{if(!r)return e()},n)};var hn=null;function yn(e){const n=React.useRef(!1),[r,a]=React.useState(e);React.useEffect(()=>(n.current=!1,()=>{n.current=!0}),[]);function d(y,v){v&&n.current||a(y)}return[r,d]}function Oe(e){return e!==void 0}function Rn(e,n){const{defaultValue:r,value:a,onChange:d,postState:y}=n||{},[v,I]=useState(()=>Oe(a)?a:Oe(r)?typeof r=="function"?r():r:typeof e=="function"?e():e),S=a!==void 0?a:v,A=y?y(S):S,V=useEvent(d),[$,F]=useState([S]);useLayoutUpdateEffect(()=>{const P=$[0];v!==P&&V(v,P)},[$]),useLayoutUpdateEffect(()=>{Oe(a)||I(a)},[a]);const U=useEvent((P,w)=>{I(P,w),F([S],w)});return[A,U]}function En(e,n){return n.max?n.strategy(e)<=n.max:!0}function Cn(e,n){return React.useMemo(()=>{let r={};n&&(r.show=typeof n=="object"&&n.formatter?n.formatter:!!n),r=re(re({},r),e);const y=r,{show:a}=y,d=Ge(y,["show"]);return we(re({},d),{show:!!a,showFormatter:typeof a=="function"?a:void 0,strategy:d.strategy||(v=>v.length)})},[e,n])}function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ke.apply(this,arguments)}const In=null;var bn=null,Sn=null,mt=t(94103),Je=t(77830),Xe=t(96607),vt=t(52677),gt=t.n(vt);const xt=Symbol.for("react.element"),ht=Symbol.for("react.transitional.element"),yt=Symbol.for("react.fragment");function Qe(e){return e&&typeof e=="object"&&(e.$$typeof===xt||e.$$typeof===ht)&&e.type===yt}function Pe(e,n={}){let r=[];return o.Children.forEach(e,a=>{a==null&&!n.keepEmpty||(Array.isArray(a)?r=r.concat(Pe(a)):Qe(a)&&a.props?r=r.concat(Pe(a.props.children,n)):r.push(a))}),r}let Ae={};const Rt=[],Et=e=>{Rt.push(e)};function Ct(e,n){}function It(e,n){}function bt(){Ae={}}function _e(e,n,r){!n&&!Ae[r]&&(e(!1,r),Ae[r]=!0)}function Me(e,n){_e(Ct,e,n)}function St(e,n){_e(It,e,n)}Me.preMessage=Et,Me.resetWarned=bt,Me.noteOnce=St;var wn=null;function qe(e){return e instanceof HTMLElement||e instanceof SVGElement}function Te(e){return e&&typeof e=="object"&&qe(e.nativeElement)?e.nativeElement:qe(e)?e:null}function zn(e){const n=Te(e);if(n)return n;if(e&&typeof e=="object"&&"current"in e){const r=Te(e.current);if(r)return r}return null}var Le=t(59864);function wt(e,n,r){const a=o.useRef({});return(!("value"in a.current)||r(a.current.condition,n))&&(a.current.value=e(),a.current.condition=n),a.current.value}const zt=Number(o.version.split(".")[0]),Ot=(e,n)=>{typeof e=="function"?e(n):typeof e=="object"&&e&&"current"in e&&(e.current=n)},Pt=(...e)=>{const n=e.filter(Boolean);return n.length<=1?n[0]:r=>{e.forEach(a=>{Ot(a,r)})}},At=(...e)=>wt(()=>Pt(...e),e,(n,r)=>n.length!==r.length||n.every((a,d)=>a!==r[d])),et=e=>{var r,a;if(!e)return!1;if(je(e)&&zt>=19)return!0;const n=(0,Le.isMemo)(e)?e.type.type:e.type;return!(typeof n=="function"&&!((r=n.prototype)!=null&&r.render)&&n.$$typeof!==Le.ForwardRef||typeof e=="function"&&!((a=e.prototype)!=null&&a.render)&&e.$$typeof!==Le.ForwardRef)};function je(e){return(0,o.isValidElement)(e)&&!Qe(e)}const On=e=>je(e)&&et(e),Mt=e=>{if(e&&je(e)){const n=e;return n.props.propertyIsEnumerable("ref")?n.props.ref:n.ref}return null},Ve=o.createContext(null);function Tt({children:e,onBatchResize:n}){const r=o.useRef(0),a=o.useRef([]),d=o.useContext(Ve),y=o.useCallback((v,I,S)=>{r.current+=1;const A=r.current;a.current.push({size:v,element:I,data:S}),Promise.resolve().then(()=>{A===r.current&&(n==null||n(a.current),a.current=[])}),d==null||d(v,I,S)},[n,d]);return o.createElement(Ve.Provider,{value:y},e)}const ce=new Map;function Lt(e){e.forEach(n=>{var a;const{target:r}=n;(a=ce.get(r))==null||a.forEach(d=>d(r))})}let $e;function tt(){return $e||($e=new ResizeObserver(Lt)),$e}const Pn=null,An=null;function jt(e,n){ce.has(e)||(ce.set(e,new Set),tt().observe(e)),ce.get(e).add(n)}function Vt(e,n){ce.has(e)&&(ce.get(e).delete(n),ce.get(e).size||(tt().unobserve(e),ce.delete(e)))}function $t(e,n){const{children:r,disabled:a}=e,d=o.useRef(null),y=o.useContext(Ve),v=typeof r=="function",I=v?r(d):r,S=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),A=!v&&o.isValidElement(I)&&et(I),V=A?Mt(I):null,$=At(V,d),F=()=>Te(d.current);o.useImperativeHandle(n,()=>F());const U=o.useRef(e);U.current=e;const P=o.useCallback(w=>{const{onResize:Z,data:te}=U.current,{width:H,height:N}=w.getBoundingClientRect(),{offsetWidth:E,offsetHeight:j}=w,M=Math.floor(H),T=Math.floor(N);if(S.current.width!==M||S.current.height!==T||S.current.offsetWidth!==E||S.current.offsetHeight!==j){const X={width:M,height:T,offsetWidth:E,offsetHeight:j};S.current=X;const Q=E===Math.round(H)?H:E,ae=j===Math.round(N)?N:j,ee=we(re({},X),{offsetWidth:Q,offsetHeight:ae});y==null||y(ee,w,te),Z&&Promise.resolve().then(()=>{Z(ee,w)})}},[]);return o.useEffect(()=>{const w=F();return w&&!a&&jt(w,P),()=>Vt(w,P)},[d.current,a]),A?o.cloneElement(I,{ref:$}):I}var Nt=o.forwardRef($t);function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ne.apply(this,arguments)}const Ft="rc-observer-key";function Wt(e,n){const{children:r}=e;return(typeof r=="function"?[r]:Pe(r)).map((d,y)=>{const v=(d==null?void 0:d.key)||`${Ft}-${y}`;return o.createElement(Nt,Ne({},e,{key:v,ref:y===0?n:void 0}),d)})}const nt=o.forwardRef(Wt);nt.Collection=Tt;var Dt=nt,rt=t(19831),at=t(86440),Ut=`
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
`,Bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Fe={},K;function Kt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(n&&Fe[r])return Fe[r];var a=window.getComputedStyle(e),d=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),y=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),v=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),I=Bt.map(function(A){return"".concat(A,":").concat(a.getPropertyValue(A))}).join(";"),S={sizingStyle:I,paddingSize:y,borderSize:v,boxSizing:d};return n&&r&&(Fe[r]=S),S}function Zt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;K||(K=document.createElement("textarea"),K.setAttribute("tab-index","-1"),K.setAttribute("aria-hidden","true"),K.setAttribute("name","hiddenTextarea"),document.body.appendChild(K)),e.getAttribute("wrap")?K.setAttribute("wrap",e.getAttribute("wrap")):K.removeAttribute("wrap");var d=Kt(e,n),y=d.paddingSize,v=d.borderSize,I=d.boxSizing,S=d.sizingStyle;K.setAttribute("style","".concat(S,";").concat(Ut)),K.value=e.value||e.placeholder||"";var A=void 0,V=void 0,$,F=K.scrollHeight;if(I==="border-box"?F+=v:I==="content-box"&&(F-=y),r!==null||a!==null){K.value=" ";var U=K.scrollHeight-y;r!==null&&(A=U*r,I==="border-box"&&(A=A+y+v),F=Math.max(A,F)),a!==null&&(V=U*a,I==="border-box"&&(V=V+y+v),$=F>V?"":"hidden",F=Math.min(V,F))}var P={height:F,overflowY:$,resize:"none"};return A&&(P.minHeight=A),V&&(P.maxHeight=V),P}var ge=t(85893),Ht=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],We=0,De=1,Ue=2,Gt=o.forwardRef(function(e,n){var r=e,a=r.prefixCls,d=r.defaultValue,y=r.value,v=r.autoSize,I=r.onResize,S=r.className,A=r.style,V=r.disabled,$=r.onChange,F=r.onInternalAutoSize,U=i()(r,Ht),P=(0,Xe.Z)(d,y),w=c()(P,2),Z=w[0],te=w[1],H=Z!=null?Z:"",N=function(_){te(_.target.value),$==null||$(_)},E=o.useRef();o.useImperativeHandle(n,function(){return{textArea:E.current}});var j=o.useMemo(function(){return v&&gt()(v)==="object"?[v.minRows,v.maxRows]:[]},[v]),M=c()(j,2),T=M[0],X=M[1],Q=!!v,ae=o.useState(Ue),ee=c()(ae,2),G=ee[0],oe=ee[1],fe=o.useState(),de=c()(fe,2),se=de[0],Y=de[1],ne=function(){oe(We)};(0,rt.default)(function(){Q&&ne()},[y,T,X,Q]),(0,rt.default)(function(){if(G===We)oe(De);else if(G===De){var k=Zt(E.current,!1,T,X);oe(Ue),Y(k)}},[G]);var pe=o.useRef(),ue=function(){at.Z.cancel(pe.current)},xe=function(_){G===Ue&&(I==null||I(_),v&&(ue(),pe.current=(0,at.Z)(function(){ne()})))};o.useEffect(function(){return ue},[]);var B=Q?se:null,W=h()(h()({},A),B);return(G===We||G===De)&&(W.overflowY="hidden",W.overflowX="hidden"),(0,ge.jsx)(Dt,{onResize:xe,disabled:!(v||I),children:(0,ge.jsx)("textarea",h()(h()({},U),{},{ref:E,style:W,className:p()(a,S,z()({},"".concat(a,"-disabled"),V)),disabled:V,value:H,onChange:N}))})}),ot=Gt,Yt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],kt=o.forwardRef(function(e,n){var r,a=e.defaultValue,d=e.value,y=e.onFocus,v=e.onBlur,I=e.onChange,S=e.allowClear,A=e.maxLength,V=e.onCompositionStart,$=e.onCompositionEnd,F=e.suffix,U=e.prefixCls,P=U===void 0?"rc-textarea":U,w=e.showCount,Z=e.count,te=e.className,H=e.style,N=e.disabled,E=e.hidden,j=e.classNames,M=e.styles,T=e.onResize,X=e.onClear,Q=e.onPressEnter,ae=e.readOnly,ee=e.autoSize,G=e.onKeyDown,oe=i()(e,Yt),fe=(0,Xe.Z)(a,d),de=c()(fe,2),se=de[0],Y=de[1],ne=se==null?"":String(se),pe=o.useState(!1),ue=c()(pe,2),xe=ue[0],B=ue[1],W=o.useRef(!1),k=o.useState(null),_=c()(k,2),he=_[0],ye=_[1],Re=(0,o.useRef)(null),me=(0,o.useRef)(null),ie=function(){var b;return(b=me.current)===null||b===void 0?void 0:b.textArea},Be=function(){ie().focus()};(0,o.useImperativeHandle)(n,function(){var D;return{resizableTextArea:me.current,focus:Be,blur:function(){ie().blur()},nativeElement:((D=Re.current)===null||D===void 0?void 0:D.nativeElement)||ie()}}),(0,o.useEffect)(function(){B(function(D){return!N&&D})},[N]);var st=o.useState(null),Ke=c()(st,2),Ie=Ke[0],Qt=Ke[1];o.useEffect(function(){if(Ie){var D;(D=ie()).setSelectionRange.apply(D,l()(Ie))}},[Ie]);var L=(0,mt.ZP)(Z,w),le=(r=L.max)!==null&&r!==void 0?r:A,Ze=Number(le)>0,Ee=L.strategy(ne),_t=!!le&&Ee>le,ut=function(b,ve){var be=ve;!W.current&&L.exceedFormatter&&L.max&&L.strategy(ve)>L.max&&(be=L.exceedFormatter(ve,{max:L.max}),ve!==be&&Qt([ie().selectionStart||0,ie().selectionEnd||0])),Y(be),(0,Je.rJ)(b.currentTarget,b,I,be)},qt=function(b){W.current=!0,V==null||V(b)},en=function(b){W.current=!1,ut(b,b.currentTarget.value),$==null||$(b)},tn=function(b){ut(b,b.target.value)},nn=function(b){b.key==="Enter"&&Q&&!b.nativeEvent.isComposing&&Q(b),G==null||G(b)},rn=function(b){B(!0),y==null||y(b)},an=function(b){B(!1),v==null||v(b)},on=function(b){Y(""),Be(),(0,Je.rJ)(ie(),b,I)},He=F,Ce;L.show&&(L.showFormatter?Ce=L.showFormatter({value:ne,count:Ee,maxLength:le}):Ce="".concat(Ee).concat(Ze?" / ".concat(le):""),He=(0,ge.jsxs)(ge.Fragment,{children:[He,(0,ge.jsx)("span",{className:p()("".concat(P,"-data-count"),j==null?void 0:j.count),style:M==null?void 0:M.count,children:Ce})]}));var sn=function(b){var ve;T==null||T(b),(ve=ie())!==null&&ve!==void 0&&ve.style.height&&ye(!0)},un=!ee&&!w&&!S;return(0,ge.jsx)(ft,{ref:Re,value:ne,allowClear:S,handleReset:on,suffix:He,prefixCls:P,classNames:h()(h()({},j),{},{affixWrapper:p()(j==null?void 0:j.affixWrapper,z()(z()({},"".concat(P,"-show-count"),w),"".concat(P,"-textarea-allow-clear"),S))}),disabled:N,focused:xe,className:p()(te,_t&&"".concat(P,"-out-of-range")),style:h()(h()({},H),he&&!un?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Ce=="string"?Ce:void 0}},hidden:E,readOnly:ae,onClear:X,children:(0,ge.jsx)(ot,h()(h()({},oe),{},{autoSize:ee,maxLength:A,onKeyDown:nn,onChange:tn,onFocus:rn,onBlur:an,onCompositionStart:qt,onCompositionEnd:en,className:p()(j==null?void 0:j.textarea),style:h()(h()({},M==null?void 0:M.textarea),{},{resize:H==null?void 0:H.resize}),disabled:N,prefixCls:P,onResize:sn,ref:me,readOnly:ae}))})}),Jt=kt,Xt=Jt},69945:function(u,s,t){"use strict";t.r(s)},49726:function(u,s,t){"use strict";t.r(s),t.d(s,{texts:function(){return m}});const m=[]},51446:function(u,s,t){"use strict";t.r(s),t.d(s,{texts:function(){return m}});const m=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
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
`},96446:function(u,s,t){var m=t(37923);function z(x){if(Array.isArray(x))return m(x)}u.exports=z,u.exports.__esModule=!0,u.exports.default=u.exports},96936:function(u){function s(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}u.exports=s,u.exports.__esModule=!0,u.exports.default=u.exports},88619:function(u){function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u.exports=s,u.exports.__esModule=!0,u.exports.default=u.exports},13769:function(u,s,t){var m=t(48541);function z(x,h){if(x==null)return{};var O=m(x,h),l,f;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(x);for(f=0;f<c.length;f++)l=c[f],!(h.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(x,l)&&(O[l]=x[l])}return O}u.exports=z,u.exports.__esModule=!0,u.exports.default=u.exports},48541:function(u){function s(t,m){if(t==null)return{};var z={},x=Object.keys(t),h,O;for(O=0;O<x.length;O++)h=x[O],!(m.indexOf(h)>=0)&&(z[h]=t[h]);return z}u.exports=s,u.exports.__esModule=!0,u.exports.default=u.exports},19632:function(u,s,t){var m=t(96446),z=t(96936),x=t(96263),h=t(88619);function O(l){return m(l)||z(l)||x(l)||h()}u.exports=O,u.exports.__esModule=!0,u.exports.default=u.exports}}]);
}());