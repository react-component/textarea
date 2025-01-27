!(function(){var ln=Object.defineProperty,cn=Object.defineProperties;var fn=Object.getOwnPropertyDescriptors;var Pe=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var dt=(f,i,t)=>i in f?ln(f,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[i]=t,ae=(f,i)=>{for(var t in i||(i={}))pt.call(i,t)&&dt(f,t,i[t]);if(Pe)for(var t of Pe(i))mt.call(i,t)&&dt(f,t,i[t]);return f},Me=(f,i)=>cn(f,fn(i));var ke=(f,i)=>{var t={};for(var m in f)pt.call(f,m)&&i.indexOf(m)<0&&(t[m]=f[m]);if(f!=null&&Pe)for(var m of Pe(f))i.indexOf(m)<0&&mt.call(f,m)&&(t[m]=f[m]);return t};(self.webpackChunk_rc_component_textarea=self.webpackChunk_rc_component_textarea||[]).push([[904],{86483:function(f,i,t){"use strict";var m;m={value:!0},i.ZP=s,m=g;var R=y(t(21739));function x(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(x=function(l){return l?p:a})(c)}function y(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var p=x(a);if(p&&p.has(c))return p.get(c);var l={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var u=v?Object.getOwnPropertyDescriptor(c,d):null;u&&(u.get||u.set)?Object.defineProperty(l,d,u):l[d]=c[d]}return l.default=c,p&&p.set(c,l),l}function g(c,a){return a.max?a.strategy(c)<=a.max:!0}function s(c,a){return R.useMemo(()=>{let p={};a&&(p.show=typeof a=="object"&&a.formatter?a.formatter:!!a),p=ae(ae({},p),c);const d=p,{show:l}=d,v=ke(d,["show"]);return Me(ae({},v),{show:!!l,showFormatter:typeof l=="function"?l:void 0,strategy:v.strategy||(u=>u.length)})},[c,a])}},98055:function(f,i){"use strict";var t;t={value:!0},t=m,t=R,i.rJ=y,t=g;function m(s){return!!(s.addonBefore||s.addonAfter)}function R(s){return!!(s.prefix||s.suffix||s.allowClear)}function x(s,c,a){const p=c.cloneNode(!0),l=Object.create(s,{target:{value:p},currentTarget:{value:p}});return p.value=a,typeof c.selectionStart=="number"&&typeof c.selectionEnd=="number"&&(p.selectionStart=c.selectionStart,p.selectionEnd=c.selectionEnd),p.setSelectionRange=(...v)=>{c.setSelectionRange(...v)},l}function y(s,c,a,p){if(!a)return;let l=c;if(c.type==="click"){l=x(c,s,""),a(l);return}if(s.type!=="file"&&p!==void 0){l=x(c,s,p),a(l);return}a(l)}function g(s,c){if(!s)return;s.focus(c);const{cursor:a}=c||{};if(a){const p=s.value.length;switch(a){case"start":s.setSelectionRange(0,0);break;case"end":s.setSelectionRange(p,p);break;default:s.setSelectionRange(0,p)}}}},17059:function(f,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=t;function t(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},95433:function(f,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var m=x(t(21739));function R(s){if(typeof WeakMap!="function")return null;var c=new WeakMap,a=new WeakMap;return(R=function(p){return p?a:c})(s)}function x(s,c){if(!c&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var a=R(c);if(a&&a.has(s))return a.get(s);var p={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in s)if(v!=="default"&&Object.prototype.hasOwnProperty.call(s,v)){var d=l?Object.getOwnPropertyDescriptor(s,v):null;d&&(d.get||d.set)?Object.defineProperty(p,v,d):p[v]=s[v]}return p.default=s,a&&a.set(s,p),p}function y(s){const c=m.useRef();return c.current=s,m.useCallback((...p)=>{var l;return(l=c.current)==null?void 0:l.call(c,...p)},[])}var g=i.default=y},96678:function(f,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.useLayoutUpdateEffect=i.default=void 0;var m=g(t(21739)),R=x(t(17059));function x(l){return l&&l.__esModule?l:{default:l}}function y(l){if(typeof WeakMap!="function")return null;var v=new WeakMap,d=new WeakMap;return(y=function(u){return u?d:v})(l)}function g(l,v){if(!v&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var d=y(v);if(d&&d.has(l))return d.get(l);var u={__proto__:null},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in l)if(F!=="default"&&Object.prototype.hasOwnProperty.call(l,F)){var K=D?Object.getOwnPropertyDescriptor(l,F):null;K&&(K.get||K.set)?Object.defineProperty(u,F,K):u[F]=l[F]}return u.default=l,d&&d.set(l,u),u}const s=(0,R.default)()?m.useLayoutEffect:m.useEffect,c=(l,v)=>{const d=m.useRef(!0);s(()=>l(d.current),v),s(()=>(d.current=!1,()=>{d.current=!0}),[])},a=(l,v)=>{c(d=>{if(!d)return l()},v)};i.useLayoutUpdateEffect=a;var p=i.default=c},10435:function(f,i,t){"use strict";var m;m={value:!0},i.Z=c;var R=g(t(95433)),x=t(96678),y=g(t(66123));function g(a){return a&&a.__esModule?a:{default:a}}function s(a){return a!==void 0}function c(a,p){const{defaultValue:l,value:v,onChange:d,postState:u}=p||{},[D,F]=(0,y.default)(()=>s(v)?v:s(l)?typeof l=="function"?l():l:typeof a=="function"?a():a),K=v!==void 0?v:D,b=u?u(K):K,Je=(0,R.default)(d),[Ie,Xe]=(0,y.default)([K]);(0,x.useLayoutUpdateEffect)(()=>{const Ce=Ie[0];D!==Ce&&Je(D,Ce)},[Ie]),(0,x.useLayoutUpdateEffect)(()=>{s(v)||F(v)},[v]);const ze=(0,R.default)((Ce,Ae)=>{F(Ce,Ae),Xe([K],Ae)});return[b,ze]}},66123:function(f,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=y;var m=x(t(21739));function R(g){if(typeof WeakMap!="function")return null;var s=new WeakMap,c=new WeakMap;return(R=function(a){return a?c:s})(g)}function x(g,s){if(!s&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var c=R(s);if(c&&c.has(g))return c.get(g);var a={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in g)if(l!=="default"&&Object.prototype.hasOwnProperty.call(g,l)){var v=p?Object.getOwnPropertyDescriptor(g,l):null;v&&(v.get||v.set)?Object.defineProperty(a,l,v):a[l]=g[l]}return a.default=g,c&&c.set(g,a),a}function y(g){const s=m.useRef(!1),[c,a]=m.useState(g);m.useEffect(()=>(s.current=!1,()=>{s.current=!0}),[]);function p(l,v){v&&s.current||a(l)}return[c,p]}},17951:function(f,i){"use strict";var t;t={value:!0},i.Z=void 0;let m=a=>+setTimeout(a,16),R=a=>clearTimeout(a);typeof window!="undefined"&&"requestAnimationFrame"in window&&(m=a=>window.requestAnimationFrame(a),R=a=>window.cancelAnimationFrame(a));let x=0;const y=new Map;function g(a){y.delete(a)}const s=(a,p=1)=>{x+=1;const l=x;function v(d){if(d===0)g(l),a();else{const u=m(()=>{v(d-1)});y.set(l,u)}}return v(p),l};s.cancel=a=>{const p=y.get(a);return g(a),R(p)};var c=i.Z=s},43118:function(f,i,t){"use strict";var m;t.r(i),t.d(i,{demos:function(){return l}});var R=t(7557),x=t.n(R),y=t(41498),g=t.n(y),s=t(21739),c=t(3116),a=t(81637),p=t(84388),l={"docs-demo-simple-demo-simple":{component:s.memo(s.lazy(function(){return t.e(433).then(t.bind(t,50608))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(65785).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:m||(m=t.t(s,2)),"@rc-component/textarea":a},renderOpts:{compile:function(){var v=g()(x()().mark(function u(){var D,F=arguments;return x()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,t.e(68).then(t.bind(t,88068));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,F));case 3:case"end":return b.stop()}},u)}));function d(){return v.apply(this,arguments)}return d}()}},"docs-demo-simple-demo-autosize":{component:s.memo(s.lazy(function(){return t.e(433).then(t.bind(t,89520))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(41969).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:m||(m=t.t(s,2)),"@rc-component/textarea":a},renderOpts:{compile:function(){var v=g()(x()().mark(function u(){var D,F=arguments;return x()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,t.e(68).then(t.bind(t,88068));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,F));case 3:case"end":return b.stop()}},u)}));function d(){return v.apply(this,arguments)}return d}()}},"docs-demo-simple-demo-allowclear":{component:s.memo(s.lazy(function(){return t.e(433).then(t.bind(t,32815))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(11278).Z},"@rc-component/textarea":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/textarea":a,react:m||(m=t.t(s,2))},renderOpts:{compile:function(){var v=g()(x()().mark(function u(){var D,F=arguments;return x()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,t.e(68).then(t.bind(t,88068));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,F));case 3:case"end":return b.stop()}},u)}));function d(){return v.apply(this,arguments)}return d}()}},"docs-demo-simple-demo-showcount":{component:s.memo(s.lazy(function(){return t.e(433).then(t.bind(t,62028))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(40975).Z},"@rc-component/textarea":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:t(27176).Z}},entry:"index.tsx"},context:{"../../assets/index.less":p,"@rc-component/textarea":a,react:m||(m=t.t(s,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":p},renderOpts:{compile:function(){var v=g()(x()().mark(function u(){var D,F=arguments;return x()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,t.e(68).then(t.bind(t,88068));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,F));case 3:case"end":return b.stop()}},u)}));function d(){return v.apply(this,arguments)}return d}()}}}},25393:function(f,i,t){"use strict";t.r(i),t.d(i,{demos:function(){return x}});var m=t(21739),R=t(65159),x={}},81637:function(f,i,t){"use strict";t.r(i),t.d(i,{ResizableTextArea:function(){return lt},default:function(){return Jt}});var m=t(85573),R=t.n(m),x=t(82242),y=t.n(x),g=t(37205),s=t.n(g),c=t(79800),a=t.n(c),p=t(39647),l=t.n(p),v=t(92310),d=t.n(v),u=t(21739);function D(e){return!!(e.addonBefore||e.addonAfter)}function F(e){return!!(e.prefix||e.suffix||e.allowClear)}function K(e,n,r){const o=n.cloneNode(!0),h=Object.create(e,{target:{value:o},currentTarget:{value:o}});return o.value=r,typeof n.selectionStart=="number"&&typeof n.selectionEnd=="number"&&(o.selectionStart=n.selectionStart,o.selectionEnd=n.selectionEnd),o.setSelectionRange=(...I)=>{n.setSelectionRange(...I)},h}function b(e,n,r,o){if(!r)return;let h=n;if(n.type==="click"){h=K(n,e,""),r(h);return}if(e.type!=="file"&&o!==void 0){h=K(n,e,o),r(h);return}r(h)}function Je(e,n){if(!e)return;e.focus(n);const{cursor:r}=n||{};if(r){const o=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(o,o);break;default:e.setSelectionRange(0,o)}}}function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Ie.apply(this,arguments)}var ze=u.forwardRef((e,n)=>{var ve,ie,Re;const{inputElement:r,children:o,prefixCls:h,prefix:I,suffix:E,addonBefore:w,addonAfter:M,className:L,style:$,disabled:U,readOnly:B,focused:Y,triggerFocus:W,allowClear:P,value:q,handleReset:te,hidden:k,classes:O,classNames:C,dataAttrs:z,styles:A,components:j,onClear:J}=e,ne=o!=null?o:r,oe=(j==null?void 0:j.affixWrapper)||"span",ee=(j==null?void 0:j.groupWrapper)||"span",X=(j==null?void 0:j.wrapper)||"span",se=(j==null?void 0:j.groupAddon)||"span",pe=(0,u.useRef)(null),me=Z=>{var _;(_=pe.current)!=null&&_.contains(Z.target)&&(W==null||W())},ue=F(e);let Q=(0,u.cloneElement)(ne,{value:q,className:d()((ve=ne.props)==null?void 0:ve.className,!ue&&(C==null?void 0:C.variant))||null});const re=(0,u.useRef)(null);if(u.useImperativeHandle(n,()=>({nativeElement:re.current||pe.current})),ue){let Z=null;if(P){const ge=!U&&!B&&q,he=`${h}-clear-icon`,Ee=typeof P=="object"&&(P!=null&&P.clearIcon)?P.clearIcon:"\u2716";Z=u.createElement("button",{type:"button",onClick:le=>{te==null||te(le),J==null||J()},onMouseDown:le=>le.preventDefault(),className:d()(he,{[`${he}-hidden`]:!ge,[`${he}-has-suffix`]:!!E})},Ee)}const _=`${h}-affix-wrapper`,H=d()(_,{[`${h}-disabled`]:U,[`${_}-disabled`]:U,[`${_}-focused`]:Y,[`${_}-readonly`]:B,[`${_}-input-with-clear-btn`]:E&&P&&q},O==null?void 0:O.affixWrapper,C==null?void 0:C.affixWrapper,C==null?void 0:C.variant),V=(E||P)&&u.createElement("span",{className:d()(`${h}-suffix`,C==null?void 0:C.suffix),style:A==null?void 0:A.suffix},Z,E);Q=u.createElement(oe,Ie({className:H,style:A==null?void 0:A.affixWrapper,onClick:me},z==null?void 0:z.affixWrapper,{ref:pe}),I&&u.createElement("span",{className:d()(`${h}-prefix`,C==null?void 0:C.prefix),style:A==null?void 0:A.prefix},I),Q,V)}if(D(e)){const Z=`${h}-group`,_=`${Z}-addon`,H=`${Z}-wrapper`,V=d()(`${h}-wrapper`,Z,O==null?void 0:O.wrapper,C==null?void 0:C.wrapper),ge=d()(H,{[`${H}-disabled`]:U},O==null?void 0:O.group,C==null?void 0:C.groupWrapper);Q=u.createElement(ee,{className:ge,ref:re},u.createElement(X,{className:V},w&&u.createElement(se,{className:_},w),Q,M&&u.createElement(se,{className:_},M)))}return u.cloneElement(Q,{className:d()((ie=Q.props)==null?void 0:ie.className,L)||null,style:ae(ae({},(Re=Q.props)==null?void 0:Re.style),$),hidden:k})}),Ce=t(35788);function Ae(e,n){return n.max?n.strategy(e)<=n.max:!0}function dn(e,n){return React.useMemo(()=>{let r={};n&&(r.show=typeof n=="object"&&n.formatter?n.formatter:!!n),r=ae(ae({},r),e);const I=r,{show:o}=I,h=ke(I,["show"]);return Me(ae({},h),{show:!!o,showFormatter:typeof o=="function"?o:void 0,strategy:h.strategy||(E=>E.length)})},[e,n])}function Qe(){return Qe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Qe.apply(this,arguments)}const pn=null;var mn=null,vn=null,vt=t(86483),qe=t(98055),et=t(10435),gt=t(31468),ht=t.n(gt);const xt=Symbol.for("react.element"),yt=Symbol.for("react.transitional.element"),Rt=Symbol.for("react.fragment");function tt(e){return e&&typeof e=="object"&&(e.$$typeof===xt||e.$$typeof===yt)&&e.type===Rt}function je(e,n={}){let r=[];return u.Children.forEach(e,o=>{o==null&&!n.keepEmpty||(Array.isArray(o)?r=r.concat(je(o)):tt(o)&&o.props?r=r.concat(je(o.props.children,n)):r.push(o))}),r}let Te={};const Et=[],It=e=>{Et.push(e)};function Ct(e,n){}function bt(e,n){}function St(){Te={}}function nt(e,n,r){!n&&!Te[r]&&(e(!1,r),Te[r]=!0)}function Le(e,n){nt(Ct,e,n)}function wt(e,n){nt(bt,e,n)}Le.preMessage=It,Le.resetWarned=St,Le.noteOnce=wt;var gn=null;function rt(e){return e instanceof HTMLElement||e instanceof SVGElement}function We(e){return e&&typeof e=="object"&&rt(e.nativeElement)?e.nativeElement:rt(e)?e:null}function hn(e){const n=We(e);if(n)return n;if(e&&typeof e=="object"&&"current"in e){const r=We(e.current);if(r)return r}return null}var _e=t(23265);function Ot(e,n,r){const o=u.useRef({});return(!("value"in o.current)||r(o.current.condition,n))&&(o.current.value=e(),o.current.condition=n),o.current.value}const Pt=(e,n)=>{typeof e=="function"?e(n):typeof e=="object"&&e&&"current"in e&&(e.current=n)},Mt=(...e)=>{const n=e.filter(Boolean);return n.length<=1?n[0]:r=>{e.forEach(o=>{Pt(o,r)})}},zt=(...e)=>Ot(()=>Mt(...e),e,(n,r)=>n.length!==r.length||n.every((o,h)=>o!==r[h])),at=e=>{var r,o;if(!e)return!1;if(Ve(e)&&e.props.propertyIsEnumerable("ref"))return!0;const n=(0,_e.isMemo)(e)?e.type.type:e.type;return!(typeof n=="function"&&!((r=n.prototype)!=null&&r.render)&&n.$$typeof!==_e.ForwardRef||typeof e=="function"&&!((o=e.prototype)!=null&&o.render)&&e.$$typeof!==_e.ForwardRef)};function Ve(e){return(0,u.isValidElement)(e)&&!tt(e)}const xn=e=>Ve(e)&&at(e),At=e=>{if(e&&Ve(e)){const n=e;return n.props.propertyIsEnumerable("ref")?n.props.ref:n.ref}return null},De=u.createContext(null);function jt({children:e,onBatchResize:n}){const r=u.useRef(0),o=u.useRef([]),h=u.useContext(De),I=u.useCallback((E,w,M)=>{r.current+=1;const L=r.current;o.current.push({size:E,element:w,data:M}),Promise.resolve().then(()=>{L===r.current&&(n==null||n(o.current),o.current=[])}),h==null||h(E,w,M)},[n,h]);return u.createElement(De.Provider,{value:I},e)}const de=new Map;function Tt(e){e.forEach(n=>{var o;const{target:r}=n;(o=de.get(r))==null||o.forEach(h=>h(r))})}let Fe;function ot(){return Fe||(Fe=new ResizeObserver(Tt)),Fe}const yn=null,Rn=null;function Lt(e,n){de.has(e)||(de.set(e,new Set),ot().observe(e)),de.get(e).add(n)}function Wt(e,n){de.has(e)&&(de.get(e).delete(n),de.get(e).size||(ot().unobserve(e),de.delete(e)))}function _t(e,n){const{children:r,disabled:o}=e,h=u.useRef(null),I=u.useContext(De),E=typeof r=="function",w=E?r(h):r,M=u.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),L=!E&&u.isValidElement(w)&&at(w),$=L?At(w):null,U=zt($,h),B=()=>We(h.current);u.useImperativeHandle(n,()=>B());const Y=u.useRef(e);Y.current=e;const W=u.useCallback(P=>{const{onResize:q,data:te}=Y.current,{width:k,height:O}=P.getBoundingClientRect(),{offsetWidth:C,offsetHeight:z}=P,A=Math.floor(k),j=Math.floor(O);if(M.current.width!==A||M.current.height!==j||M.current.offsetWidth!==C||M.current.offsetHeight!==z){const J={width:A,height:j,offsetWidth:C,offsetHeight:z};M.current=J;const ne=C===Math.round(k)?k:C,oe=z===Math.round(O)?O:z,ee=Me(ae({},J),{offsetWidth:ne,offsetHeight:oe});I==null||I(ee,P,te),q&&Promise.resolve().then(()=>{q(ee,P)})}},[]);return u.useEffect(()=>{const P=B();return P&&!o&&Lt(P,W),()=>Wt(P,W)},[h.current,o]),L?u.cloneElement(w,{ref:U}):w}var Vt=u.forwardRef(_t);function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},$e.apply(this,arguments)}const Dt="rc-observer-key";function Ft(e,n){const{children:r}=e;return(typeof r=="function"?[r]:je(r)).map((h,I)=>{const E=(h==null?void 0:h.key)||`${Dt}-${I}`;return u.createElement(Vt,$e({},e,{key:E,ref:I===0?n:void 0}),h)})}const st=u.forwardRef(Ft);st.Collection=jt;var $t=st,ut=t(96678),it=t(17951),Nt=`
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
`,Ut=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ne={},G;function Bt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(n&&Ne[r])return Ne[r];var o=window.getComputedStyle(e),h=o.getPropertyValue("box-sizing")||o.getPropertyValue("-moz-box-sizing")||o.getPropertyValue("-webkit-box-sizing"),I=parseFloat(o.getPropertyValue("padding-bottom"))+parseFloat(o.getPropertyValue("padding-top")),E=parseFloat(o.getPropertyValue("border-bottom-width"))+parseFloat(o.getPropertyValue("border-top-width")),w=Ut.map(function(L){return"".concat(L,":").concat(o.getPropertyValue(L))}).join(";"),M={sizingStyle:w,paddingSize:I,borderSize:E,boxSizing:h};return n&&r&&(Ne[r]=M),M}function Kt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;G||(G=document.createElement("textarea"),G.setAttribute("tab-index","-1"),G.setAttribute("aria-hidden","true"),G.setAttribute("name","hiddenTextarea"),document.body.appendChild(G)),e.getAttribute("wrap")?G.setAttribute("wrap",e.getAttribute("wrap")):G.removeAttribute("wrap");var h=Bt(e,n),I=h.paddingSize,E=h.borderSize,w=h.boxSizing,M=h.sizingStyle;G.setAttribute("style","".concat(M,";").concat(Nt)),G.value=e.value||e.placeholder||"";var L=void 0,$=void 0,U,B=G.scrollHeight;if(w==="border-box"?B+=E:w==="content-box"&&(B-=I),r!==null||o!==null){G.value=" ";var Y=G.scrollHeight-I;r!==null&&(L=Y*r,w==="border-box"&&(L=L+I+E),B=Math.max(L,B)),o!==null&&($=Y*o,w==="border-box"&&($=$+I+E),U=B>$?"":"hidden",B=Math.min($,B))}var W={height:B,overflowY:U,resize:"none"};return L&&(W.minHeight=L),$&&(W.maxHeight=$),W}var ye=t(27174),Zt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Ue=0,Be=1,Ke=2,Ht=u.forwardRef(function(e,n){var r=e,o=r.prefixCls,h=r.defaultValue,I=r.value,E=r.autoSize,w=r.onResize,M=r.className,L=r.style,$=r.disabled,U=r.onChange,B=r.onInternalAutoSize,Y=l()(r,Zt),W=(0,et.Z)(h,{value:I,postState:function(V){return V!=null?V:""}}),P=a()(W,2),q=P[0],te=P[1],k=function(V){te(V.target.value),U==null||U(V)},O=u.useRef();u.useImperativeHandle(n,function(){return{textArea:O.current}});var C=u.useMemo(function(){return E&&ht()(E)==="object"?[E.minRows,E.maxRows]:[]},[E]),z=a()(C,2),A=z[0],j=z[1],J=!!E,ne=function(){try{if(document.activeElement===O.current){var V=O.current,ge=V.selectionStart,he=V.selectionEnd,Ee=V.scrollTop;O.current.setSelectionRange(ge,he),O.current.scrollTop=Ee}}catch(le){}},oe=u.useState(Ke),ee=a()(oe,2),X=ee[0],se=ee[1],pe=u.useState(),me=a()(pe,2),ue=me[0],Q=me[1],re=function(){se(Ue)};(0,ut.default)(function(){J&&re()},[I,A,j,J]),(0,ut.default)(function(){if(X===Ue)se(Be);else if(X===Be){var H=Kt(O.current,!1,A,j);se(Ke),Q(H)}else ne()},[X]);var ve=u.useRef(),ie=function(){it.Z.cancel(ve.current)},Re=function(V){X===Ke&&(w==null||w(V),E&&(ie(),ve.current=(0,it.Z)(function(){re()})))};u.useEffect(function(){return ie},[]);var Z=J?ue:null,_=y()(y()({},L),Z);return(X===Ue||X===Be)&&(_.overflowY="hidden",_.overflowX="hidden"),(0,ye.jsx)($t,{onResize:Re,disabled:!(E||w),children:(0,ye.jsx)("textarea",y()(y()({},Y),{},{ref:O,style:_,className:d()(o,M,R()({},"".concat(o,"-disabled"),$)),disabled:$,value:q,onChange:k}))})}),lt=Ht,Gt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],Yt=u.forwardRef(function(e,n){var r,o=e.defaultValue,h=e.value,I=e.onFocus,E=e.onBlur,w=e.onChange,M=e.allowClear,L=e.maxLength,$=e.onCompositionStart,U=e.onCompositionEnd,B=e.suffix,Y=e.prefixCls,W=Y===void 0?"rc-textarea":Y,P=e.showCount,q=e.count,te=e.className,k=e.style,O=e.disabled,C=e.hidden,z=e.classNames,A=e.styles,j=e.onResize,J=e.onClear,ne=e.onPressEnter,oe=e.readOnly,ee=e.autoSize,X=e.onKeyDown,se=l()(e,Gt),pe=(0,et.Z)(o,{value:h,defaultValue:o}),me=a()(pe,2),ue=me[0],Q=me[1],re=ue==null?"":String(ue),ve=u.useState(!1),ie=a()(ve,2),Re=ie[0],Z=ie[1],_=u.useRef(!1),H=u.useState(null),V=a()(H,2),ge=V[0],he=V[1],Ee=(0,u.useRef)(null),le=(0,u.useRef)(null),ce=function(){var S;return(S=le.current)===null||S===void 0?void 0:S.textArea},Ze=function(){ce().focus()};(0,u.useImperativeHandle)(n,function(){var N;return{resizableTextArea:le.current,focus:Ze,blur:function(){ce().blur()},nativeElement:((N=Ee.current)===null||N===void 0?void 0:N.nativeElement)||ce()}}),(0,u.useEffect)(function(){Z(function(N){return!O&&N})},[O]);var ct=u.useState(null),He=a()(ct,2),we=He[0],Xt=He[1];u.useEffect(function(){if(we){var N;(N=ce()).setSelectionRange.apply(N,s()(we))}},[we]);var T=(0,vt.ZP)(q,P),fe=(r=T.max)!==null&&r!==void 0?r:L,Ge=Number(fe)>0,be=T.strategy(re),Qt=!!fe&&be>fe,ft=function(S,xe){var Oe=xe;!_.current&&T.exceedFormatter&&T.max&&T.strategy(xe)>T.max&&(Oe=T.exceedFormatter(xe,{max:T.max}),xe!==Oe&&Xt([ce().selectionStart||0,ce().selectionEnd||0])),Q(Oe),(0,qe.rJ)(S.currentTarget,S,w,Oe)},qt=function(S){_.current=!0,$==null||$(S)},en=function(S){_.current=!1,ft(S,S.currentTarget.value),U==null||U(S)},tn=function(S){ft(S,S.target.value)},nn=function(S){S.key==="Enter"&&ne&&ne(S),X==null||X(S)},rn=function(S){Z(!0),I==null||I(S)},an=function(S){Z(!1),E==null||E(S)},on=function(S){Q(""),Ze(),(0,qe.rJ)(ce(),S,w)},Ye=B,Se;T.show&&(T.showFormatter?Se=T.showFormatter({value:re,count:be,maxLength:fe}):Se="".concat(be).concat(Ge?" / ".concat(fe):""),Ye=(0,ye.jsxs)(ye.Fragment,{children:[Ye,(0,ye.jsx)("span",{className:d()("".concat(W,"-data-count"),z==null?void 0:z.count),style:A==null?void 0:A.count,children:Se})]}));var sn=function(S){var xe;j==null||j(S),(xe=ce())!==null&&xe!==void 0&&xe.style.height&&he(!0)},un=!ee&&!P&&!M;return(0,ye.jsx)(ze,{ref:Ee,value:re,allowClear:M,handleReset:on,suffix:Ye,prefixCls:W,classNames:y()(y()({},z),{},{affixWrapper:d()(z==null?void 0:z.affixWrapper,R()(R()({},"".concat(W,"-show-count"),P),"".concat(W,"-textarea-allow-clear"),M))}),disabled:O,focused:Re,className:d()(te,Qt&&"".concat(W,"-out-of-range")),style:y()(y()({},k),ge&&!un?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Se=="string"?Se:void 0}},hidden:C,readOnly:oe,onClear:J,children:(0,ye.jsx)(lt,y()(y()({},se),{},{autoSize:ee,maxLength:L,onKeyDown:nn,onChange:tn,onFocus:rn,onBlur:an,onCompositionStart:qt,onCompositionEnd:en,className:d()(z==null?void 0:z.textarea),style:y()(y()({},A==null?void 0:A.textarea),{},{resize:k==null?void 0:k.resize}),disabled:O,prefixCls:W,onResize:sn,ref:le,readOnly:oe}))})}),kt=Yt,Jt=kt},84388:function(f,i,t){"use strict";t.r(i)},37575:function(f,i,t){"use strict";t.r(i),t.d(i,{texts:function(){return R}});var m=t(3116);const R=[]},27623:function(f,i,t){"use strict";t.r(i),t.d(i,{texts:function(){return R}});var m=t(65159);const R=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},27176:function(f,i){"use strict";i.Z=`@textarea-prefix-cls: rc-textarea;

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
`},11278:function(f,i){"use strict";i.Z=`/* eslint-disable no-console */
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
`},41969:function(f,i){"use strict";i.Z=`/* eslint-disable no-console */
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
`},40975:function(f,i){"use strict";i.Z=`/* eslint-disable no-console */
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
`},65785:function(f,i){"use strict";i.Z=`/* eslint-disable no-console */
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
`},61004:function(f,i,t){var m=t(39572);function R(x){if(Array.isArray(x))return m(x)}f.exports=R,f.exports.__esModule=!0,f.exports.default=f.exports},97012:function(f){function i(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}f.exports=i,f.exports.__esModule=!0,f.exports.default=f.exports},93215:function(f){function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f.exports=i,f.exports.__esModule=!0,f.exports.default=f.exports},39647:function(f,i,t){var m=t(32890);function R(x,y){if(x==null)return{};var g=m(x,y),s,c;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(x);for(c=0;c<a.length;c++)s=a[c],!(y.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(x,s)&&(g[s]=x[s])}return g}f.exports=R,f.exports.__esModule=!0,f.exports.default=f.exports},32890:function(f){function i(t,m){if(t==null)return{};var R={},x=Object.keys(t),y,g;for(g=0;g<x.length;g++)y=x[g],!(m.indexOf(y)>=0)&&(R[y]=t[y]);return R}f.exports=i,f.exports.__esModule=!0,f.exports.default=f.exports},37205:function(f,i,t){var m=t(61004),R=t(97012),x=t(66109),y=t(93215);function g(s){return m(s)||R(s)||x(s)||y()}f.exports=g,f.exports.__esModule=!0,f.exports.default=f.exports}}]);
}());