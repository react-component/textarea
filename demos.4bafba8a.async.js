(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[433],{61963:function(s,f,e){"use strict";e.r(f),e.d(f,{default:function(){return c}});var y=e(11006),l=e.n(y),v=e(11649),a=e(71062),t=e(99678);function c(){var o=(0,a.useState)(`hello
world`),i=l()(o,2),u=i[0],R=i[1],_=function(d){var g=d.target.value;R(g)};return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Uncontrolled"}),(0,t.jsx)(v.Z,{autoSize:!0,allowClear:!0}),(0,t.jsx)("p",{children:"controlled"}),(0,t.jsx)(v.Z,{value:u,onChange:_,allowClear:!0})]})}},13762:function(s,f,e){"use strict";e.r(f),e.d(f,{default:function(){return c}});var y=e(11006),l=e.n(y),v=e(71062),a=e(11649),t=e(99678);function c(){var o=(0,v.useState)(`hello
world`),i=l()(o,2),u=i[0],R=i[1],_=function(g){var h=g.target.value;R(h)},x=function(g){var h=g.width,M=g.height;console.log("size is changed, width:".concat(h," height:").concat(M))};return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"when set to true"}),(0,t.jsx)(a.Z,{autoSize:!0,onResize:x,value:u,onChange:_}),(0,t.jsx)("p",{children:"when set to object of minRows and maxRows"}),(0,t.jsx)(a.Z,{autoSize:{minRows:5,maxRows:15},onResize:x,value:u,onChange:_})]})}},70079:function(s,f,e){"use strict";e.r(f),e.d(f,{default:function(){return i}});var y=e(93923),l=e.n(y),v=e(11006),a=e.n(v),t=e(11649),c=e(71062),o=e(99678);function i(){var u=(0,c.useState)(`hello
world`),R=a()(u,2),_=R[0],x=R[1],d=function(h){var M=h.target.value;x(M)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Uncontrolled"}),(0,o.jsx)(t.Z,{autoSize:!0,showCount:!0}),(0,o.jsx)("p",{children:"controlled"}),(0,o.jsx)(t.Z,{value:_,onChange:d,showCount:!0,maxLength:100}),(0,o.jsx)("p",{children:"with height"}),(0,o.jsx)(t.Z,{value:_,onChange:d,showCount:!0,style:{height:200,width:"100%",resize:"vertical"}}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:"Count.exceedFormatter"}),(0,o.jsx)(t.Z,{defaultValue:"\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",count:{show:!0,max:5}}),(0,o.jsx)(t.Z,{defaultValue:"\u{1F525}",count:{show:!0,max:5,exceedFormatter:function(h,M){var p=M.max,I=l()(new Intl.Segmenter().segment(h));return I.filter(function(T){return T.index+T.segment.length<=p}).map(function(T){return T.segment}).join("")}}})]})}},83012:function(s,f,e){"use strict";e.r(f),e.d(f,{default:function(){return c}});var y=e(11006),l=e.n(y),v=e(71062),a=e(11649),t=e(99678);function c(){var o=(0,v.useState)(""),i=l()(o,2),u=i[0],R=i[1],_=function(h){var M=h.target.value;console.log(h.target.value),R(M)},x=function(h){var M=h.width,p=h.height;console.log("size is changed, width:".concat(M," height:").concat(p))},d=function(h){console.log("enter key is pressed")};return(0,t.jsx)("div",{children:(0,t.jsx)(a.Z,{prefixCls:"custom-textarea",onPressEnter:d,onResize:x,value:u,onChange:_,autoFocus:!0,onFocus:function(){return console.log("focus")}})})}},11649:function(s,f,e){"use strict";e.d(f,{Z:function(){return mt}});var y=e(26801),l=e.n(y),v=e(22060),a=e.n(v),t=e(93923),c=e.n(t),o=e(11006),i=e.n(o),u=e(27161),R=e.n(u),_=e(12124),x=e.n(_),d=e(26508),g=e(74710),h=e(80268),M=e(91002),p=e(71062);function I(n){return!!(n.addonBefore||n.addonAfter)}function T(n){return!!(n.prefix||n.suffix||n.allowClear)}function be(n,r,m,C){if(m){var S=r;if(r.type==="click"){var A=n.cloneNode(!0);S=Object.create(r,{target:{value:A},currentTarget:{value:A}}),A.value="",m(S);return}if(C!==void 0){S=Object.create(r,{target:{value:n},currentTarget:{value:n}}),n.value=C,m(S);return}m(S)}}function Ze(n,r){if(n){n.focus(r);var m=r||{},C=m.cursor;if(C){var S=n.value.length;switch(C){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(S,S);break;default:n.setSelectionRange(0,S)}}}}var je=function(r){var m,C,S=r.inputElement,A=r.prefixCls,F=r.prefix,P=r.suffix,$=r.addonBefore,O=r.addonAfter,V=r.className,U=r.style,D=r.disabled,ae=r.readOnly,Q=r.focused,Y=r.triggerFocus,L=r.allowClear,k=r.value,ye=r.handleReset,fe=r.hidden,w=r.classes,N=r.classNames,re=r.dataAttrs,j=r.styles,z=r.components,te=(z==null?void 0:z.affixWrapper)||"span",oe=(z==null?void 0:z.groupWrapper)||"span",Ce=(z==null?void 0:z.wrapper)||"span",ue=(z==null?void 0:z.groupAddon)||"span",Z=(0,p.useRef)(null),se=function(E){var q;(q=Z.current)!==null&&q!==void 0&&q.contains(E.target)&&(Y==null||Y())},de=function(){var E;if(!L)return null;var q=!D&&!ae&&k,ge="".concat(A,"-clear-icon"),Re=(0,M.Z)(L)==="object"&&L!==null&&L!==void 0&&L.clearIcon?L.clearIcon:"\u2716";return p.createElement("span",{onClick:ye,onMouseDown:function(ze){return ze.preventDefault()},className:x()(ge,(E={},(0,h.Z)(E,"".concat(ge,"-hidden"),!q),(0,h.Z)(E,"".concat(ge,"-has-suffix"),!!P),E)),role:"button",tabIndex:-1},Re)},ie=(0,p.cloneElement)(S,{value:k,hidden:fe,className:x()((m=S.props)===null||m===void 0?void 0:m.className,!T(r)&&!I(r)&&V)||null,style:(0,g.Z)((0,g.Z)({},(C=S.props)===null||C===void 0?void 0:C.style),!T(r)&&!I(r)?U:{})});if(T(r)){var J,ne="".concat(A,"-affix-wrapper"),le=x()(ne,(J={},(0,h.Z)(J,"".concat(ne,"-disabled"),D),(0,h.Z)(J,"".concat(ne,"-focused"),Q),(0,h.Z)(J,"".concat(ne,"-readonly"),ae),(0,h.Z)(J,"".concat(ne,"-input-with-clear-btn"),P&&L&&k),J),!I(r)&&V,w==null?void 0:w.affixWrapper,N==null?void 0:N.affixWrapper),ce=(P||L)&&p.createElement("span",{className:x()("".concat(A,"-suffix"),N==null?void 0:N.suffix),style:j==null?void 0:j.suffix},de(),P);ie=p.createElement(te,(0,d.Z)({className:le,style:(0,g.Z)((0,g.Z)({},I(r)?void 0:U),j==null?void 0:j.affixWrapper),hidden:!I(r)&&fe,onClick:se},re==null?void 0:re.affixWrapper,{ref:Z}),F&&p.createElement("span",{className:x()("".concat(A,"-prefix"),N==null?void 0:N.prefix),style:j==null?void 0:j.prefix},F),(0,p.cloneElement)(S,{value:k,hidden:null}),ce)}if(I(r)){var ve="".concat(A,"-group"),pe="".concat(ve,"-addon"),Se=x()("".concat(A,"-wrapper"),ve,w==null?void 0:w.wrapper),me=x()("".concat(A,"-group-wrapper"),V,w==null?void 0:w.group);return p.createElement(oe,{className:me,style:U,hidden:fe},p.createElement(Ce,{className:Se},$&&p.createElement(ue,{className:pe},$),(0,p.cloneElement)(ie,{hidden:null}),O&&p.createElement(ue,{className:pe},O)))}return ie},Oe=je,Te=e(41760),we=null;function Ke(n,r){if(!r.max)return!0;var m=r.strategy(n);return m<=r.max}function He(n,r){return React.useMemo(function(){var m={};r&&(m.show=_typeof(r)==="object"&&r.formatter?r.formatter:!!r),m=_objectSpread(_objectSpread({},m),n);var C=m,S=C.show,A=_objectWithoutProperties(C,we);return _objectSpread(_objectSpread({},A),{},{show:!!S,showFormatter:typeof S=="function"?S:void 0,strategy:A.strategy||function(F){return F.length}})},[n,r])}var Ae=null,Fe=null,Rt=null,yt=null,tt=e(18710),Ye=e(88932),Ge=e(97605),nt=e(5773),at=e.n(nt),rt=e(10933),Je=e(87082),Xe=e(32941),ot=`
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
`,ut=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ne={},G;function st(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=n.getAttribute("id")||n.getAttribute("data-reactid")||n.getAttribute("name");if(r&&Ne[m])return Ne[m];var C=window.getComputedStyle(n),S=C.getPropertyValue("box-sizing")||C.getPropertyValue("-moz-box-sizing")||C.getPropertyValue("-webkit-box-sizing"),A=parseFloat(C.getPropertyValue("padding-bottom"))+parseFloat(C.getPropertyValue("padding-top")),F=parseFloat(C.getPropertyValue("border-bottom-width"))+parseFloat(C.getPropertyValue("border-top-width")),P=ut.map(function(O){return"".concat(O,":").concat(C.getPropertyValue(O))}).join(";"),$={sizingStyle:P,paddingSize:A,borderSize:F,boxSizing:S};return r&&m&&(Ne[m]=$),$}function it(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;G||(G=document.createElement("textarea"),G.setAttribute("tab-index","-1"),G.setAttribute("aria-hidden","true"),document.body.appendChild(G)),n.getAttribute("wrap")?G.setAttribute("wrap",n.getAttribute("wrap")):G.removeAttribute("wrap");var S=st(n,r),A=S.paddingSize,F=S.borderSize,P=S.boxSizing,$=S.sizingStyle;G.setAttribute("style","".concat($,";").concat(ot)),G.value=n.value||n.placeholder||"";var O=void 0,V=void 0,U,D=G.scrollHeight;if(P==="border-box"?D+=F:P==="content-box"&&(D-=A),m!==null||C!==null){G.value=" ";var ae=G.scrollHeight-A;m!==null&&(O=ae*m,P==="border-box"&&(O=O+A+F),D=Math.max(O,D)),C!==null&&(V=ae*C,P==="border-box"&&(V=V+A+F),U=D>V?"":"hidden",D=Math.min(V,D))}var Q={height:D,overflowY:U,resize:"none"};return O&&(Q.minHeight=O),V&&(Q.maxHeight=V),Q}var xe=e(99678),lt=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],$e=0,Ve=1,Le=2,ct=p.forwardRef(function(n,r){var m=n,C=m.prefixCls,S=m.onPressEnter,A=m.defaultValue,F=m.value,P=m.autoSize,$=m.onResize,O=m.className,V=m.style,U=m.disabled,D=m.onChange,ae=m.onInternalAutoSize,Q=R()(m,lt),Y=(0,Ge.Z)(A,{value:F,postState:function(E){return E!=null?E:""}}),L=i()(Y,2),k=L[0],ye=L[1],fe=function(E){ye(E.target.value),D==null||D(E)},w=p.useRef();p.useImperativeHandle(r,function(){return{textArea:w.current}});var N=p.useMemo(function(){return P&&at()(P)==="object"?[P.minRows,P.maxRows]:[]},[P]),re=i()(N,2),j=re[0],z=re[1],te=!!P,oe=function(){try{if(document.activeElement===w.current){var E=w.current,q=E.selectionStart,ge=E.selectionEnd,Re=E.scrollTop;w.current.setSelectionRange(q,ge),w.current.scrollTop=Re}}catch(_e){}},Ce=p.useState(Le),ue=i()(Ce,2),Z=ue[0],se=ue[1],de=p.useState(),ie=i()(de,2),J=ie[0],ne=ie[1],le=function(){se($e)};(0,Je.default)(function(){te&&le()},[F,j,z,te]),(0,Je.default)(function(){if(Z===$e)se(Ve);else if(Z===Ve){var K=it(w.current,!1,j,z);se(Le),ne(K)}else oe()},[Z]);var ce=p.useRef(),ve=function(){Xe.Z.cancel(ce.current)},pe=function(E){Z===Le&&($==null||$(E),P&&(ve(),ce.current=(0,Xe.Z)(function(){le()})))};p.useEffect(function(){return ve},[]);var Se=te?J:null,me=l()(l()({},V),Se);return(Z===$e||Z===Ve)&&(me.overflowY="hidden",me.overflowX="hidden"),(0,xe.jsx)(rt.Z,{onResize:pe,disabled:!(P||$),children:(0,xe.jsx)("textarea",l()(l()({},Q),{},{ref:w,style:me,className:x()(C,O,a()({},"".concat(C,"-disabled"),U)),disabled:U,value:k,onChange:fe}))})}),ft=ct,dt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"],vt=p.forwardRef(function(n,r){var m,C,S=n.defaultValue,A=n.value,F=n.onFocus,P=n.onBlur,$=n.onChange,O=n.allowClear,V=n.maxLength,U=n.onCompositionStart,D=n.onCompositionEnd,ae=n.suffix,Q=n.prefixCls,Y=Q===void 0?"rc-textarea":Q,L=n.classes,k=n.showCount,ye=n.count,fe=n.className,w=n.style,N=n.disabled,re=n.hidden,j=n.classNames,z=n.styles,te=n.onResize,oe=R()(n,dt),Ce=(0,Ge.Z)(S,{value:A,defaultValue:S}),ue=i()(Ce,2),Z=ue[0],se=ue[1],de=Z==null?"":String(Z),ie=p.useState(!1),J=i()(ie,2),ne=J[0],le=J[1],ce=p.useRef(!1),ve=p.useState(null),pe=i()(ve,2),Se=pe[0],me=pe[1],K=(0,p.useRef)(null),E=function(){var b;return(b=K.current)===null||b===void 0?void 0:b.textArea},q=function(){E().focus()};(0,p.useImperativeHandle)(r,function(){return{resizableTextArea:K.current,focus:q,blur:function(){E().blur()}}}),(0,p.useEffect)(function(){le(function(B){return!N&&B})},[N]);var ge=p.useState(null),Re=i()(ge,2),_e=Re[0],ze=Re[1];p.useEffect(function(){if(_e){var B;(B=E()).setSelectionRange.apply(B,c()(_e))}},[_e]);var X=(0,tt.ZP)(ye,k),Ee=(m=X.max)!==null&&m!==void 0?m:V,Qe=Number(Ee)>0,Ie=X.strategy(de),ke=!!Ee&&Ie>Ee,We=function(b,ee){var he=ee;!ce.current&&X.exceedFormatter&&X.max&&X.strategy(ee)>X.max&&(he=X.exceedFormatter(ee,{max:X.max}),ee!==he&&ze([E().selectionStart||0,E().selectionEnd||0])),se(he),(0,Ye.rJ)(b.currentTarget,b,$,he)},qe=function(b){ce.current=!0,U==null||U(b)},W=function(b){ce.current=!1,We(b,b.currentTarget.value),D==null||D(b)},H=function(b){We(b,b.target.value)},Pe=function(b){var ee=oe.onPressEnter,he=oe.onKeyDown;b.key==="Enter"&&ee&&ee(b),he==null||he(b)},De=function(b){le(!0),F==null||F(b)},Be=function(b){le(!1),P==null||P(b)},et=function(b){se(""),q(),(0,Ye.rJ)(E(),b,$)},Ue=ae,Me;X.show&&(X.showFormatter?Me=X.showFormatter({value:de,count:Ie,maxLength:Ee}):Me="".concat(Ie).concat(Qe?" / ".concat(Ee):""),Ue=(0,xe.jsxs)(xe.Fragment,{children:[Ue,(0,xe.jsx)("span",{className:x()("".concat(Y,"-data-count"),j==null?void 0:j.count),style:z==null?void 0:z.count,children:Me})]}));var gt=function(b){var ee;te==null||te(b),(ee=E())!==null&&ee!==void 0&&ee.style.height&&me(!0)},ht=!oe.autoSize&&!k&&!O,xt=(0,xe.jsx)(Oe,{value:de,allowClear:O,handleReset:et,suffix:Ue,prefixCls:Y,classes:{affixWrapper:x()(L==null?void 0:L.affixWrapper,(C={},a()(C,"".concat(Y,"-show-count"),k),a()(C,"".concat(Y,"-textarea-allow-clear"),O),C))},disabled:N,focused:ne,className:x()(fe,ke&&"".concat(Y,"-out-of-range")),style:l()(l()({},w),Se&&!ht?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Me=="string"?Me:void 0}},hidden:re,inputElement:(0,xe.jsx)(ft,l()(l()({},oe),{},{onKeyDown:Pe,onChange:H,onFocus:De,onBlur:Be,onCompositionStart:qe,onCompositionEnd:W,className:x()(j==null?void 0:j.textarea),style:l()(l()({},z==null?void 0:z.textarea),{},{resize:w==null?void 0:w.resize}),disabled:N,prefixCls:Y,onResize:gt,ref:K}))});return xt}),pt=vt,mt=pt},18710:function(s,f,e){"use strict";var y,l=e(57957),v=e(5773);y={value:!0},f.ZP=x,y=_;var a=l(e(27161)),t=l(e(26801)),c=l(e(5773)),o=R(e(71062)),i=["show"];function u(d){if(typeof WeakMap!="function")return null;var g=new WeakMap,h=new WeakMap;return(u=function(p){return p?h:g})(d)}function R(d,g){if(!g&&d&&d.__esModule)return d;if(d===null||v(d)!=="object"&&typeof d!="function")return{default:d};var h=u(g);if(h&&h.has(d))return h.get(d);var M={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in d)if(I!=="default"&&Object.prototype.hasOwnProperty.call(d,I)){var T=p?Object.getOwnPropertyDescriptor(d,I):null;T&&(T.get||T.set)?Object.defineProperty(M,I,T):M[I]=d[I]}return M.default=d,h&&h.set(d,M),M}function _(d,g){if(!g.max)return!0;var h=g.strategy(d);return h<=g.max}function x(d,g){return o.useMemo(function(){var h={};g&&(h.show=(0,c.default)(g)==="object"&&g.formatter?g.formatter:!!g),h=(0,t.default)((0,t.default)({},h),d);var M=h,p=M.show,I=(0,a.default)(M,i);return(0,t.default)((0,t.default)({},I),{},{show:!!p,showFormatter:typeof p=="function"?p:void 0,strategy:I.strategy||function(T){return T.length}})},[d,g])}},88932:function(s,f){"use strict";var e;e={value:!0},e=y,e=l,f.rJ=v,e=a;function y(t){return!!(t.addonBefore||t.addonAfter)}function l(t){return!!(t.prefix||t.suffix||t.allowClear)}function v(t,c,o,i){if(o){var u=c;if(c.type==="click"){var R=t.cloneNode(!0);u=Object.create(c,{target:{value:R},currentTarget:{value:R}}),R.value="",o(u);return}if(i!==void 0){u=Object.create(c,{target:{value:t},currentTarget:{value:t}}),t.value=i,o(u);return}o(u)}}function a(t,c){if(t){t.focus(c);var o=c||{},i=o.cursor;if(i){var u=t.value.length;switch(i){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(u,u);break;default:t.setSelectionRange(0,u)}}}}},71578:function(s,f){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},9265:function(s,f,e){"use strict";var y=e(45638).default;Object.defineProperty(f,"__esModule",{value:!0}),f.default=v;var l=y(e(71062));function v(a){var t=l.useRef();t.current=a;var c=l.useCallback(function(){for(var o,i=arguments.length,u=new Array(i),R=0;R<i;R++)u[R]=arguments[R];return(o=t.current)===null||o===void 0?void 0:o.call.apply(o,[t].concat(u))},[]);return c}},87082:function(s,f,e){"use strict";var y=e(57957).default,l=e(45638).default;Object.defineProperty(f,"__esModule",{value:!0}),f.useLayoutUpdateEffect=f.default=void 0;var v=l(e(71062)),a=y(e(71578)),t=(0,a.default)()?v.useLayoutEffect:v.useEffect,c=function(R,_){var x=v.useRef(!0);t(function(){return R(x.current)},_),t(function(){return x.current=!1,function(){x.current=!0}},[])},o=function(R,_){c(function(x){if(!x)return R()},_)};f.useLayoutUpdateEffect=o;var i=c;f.default=i},97605:function(s,f,e){"use strict";var y,l=e(57957).default;y={value:!0},f.Z=i;var v=l(e(11006)),a=l(e(9265)),t=e(87082),c=l(e(34696));function o(u){return u!==void 0}function i(u,R){var _=R||{},x=_.defaultValue,d=_.value,g=_.onChange,h=_.postState,M=(0,c.default)(function(){return o(d)?d:o(x)?typeof x=="function"?x():x:typeof u=="function"?u():u}),p=(0,v.default)(M,2),I=p[0],T=p[1],be=d!==void 0?d:I,Ze=h?h(be):be,je=(0,a.default)(g),Oe=(0,c.default)([be]),Te=(0,v.default)(Oe,2),we=Te[0],Ke=Te[1];(0,t.useLayoutUpdateEffect)(function(){var Ae=we[0];I!==Ae&&je(I,Ae)},[we]),(0,t.useLayoutUpdateEffect)(function(){o(d)||T(d)},[d]);var He=(0,a.default)(function(Ae,Fe){T(Ae,Fe),Ke([be],Fe)});return[Ze,He]}},34696:function(s,f,e){"use strict";var y=e(45638).default,l=e(57957).default;Object.defineProperty(f,"__esModule",{value:!0}),f.default=t;var v=l(e(11006)),a=y(e(71062));function t(c){var o=a.useRef(!1),i=a.useState(c),u=(0,v.default)(i,2),R=u[0],_=u[1];a.useEffect(function(){return o.current=!1,function(){o.current=!0}},[]);function x(d,g){g&&o.current||_(d)}return[R,x]}},32941:function(s,f){"use strict";var e;e={value:!0},f.Z=void 0;var y=function(u){return+setTimeout(u,16)},l=function(u){return clearTimeout(u)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(y=function(u){return window.requestAnimationFrame(u)},l=function(u){return window.cancelAnimationFrame(u)});var v=0,a=new Map;function t(i){a.delete(i)}var c=function(u){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;v+=1;var _=v;function x(d){if(d===0)t(_),u();else{var g=y(function(){x(d-1)});a.set(_,g)}}return x(R),_};c.cancel=function(i){var u=a.get(i);return t(u),l(u)};var o=c;f.Z=o},43174:function(s,f,e){var y=e(67501);function l(v){if(Array.isArray(v))return y(v)}s.exports=l,s.exports.__esModule=!0,s.exports.default=s.exports},57957:function(s){function f(e){return e&&e.__esModule?e:{default:e}}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},45638:function(s,f,e){var y=e(5773).default;function l(a){if(typeof WeakMap!="function")return null;var t=new WeakMap,c=new WeakMap;return(l=function(i){return i?c:t})(a)}function v(a,t){if(!t&&a&&a.__esModule)return a;if(a===null||y(a)!="object"&&typeof a!="function")return{default:a};var c=l(t);if(c&&c.has(a))return c.get(a);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in a)if(u!=="default"&&Object.prototype.hasOwnProperty.call(a,u)){var R=i?Object.getOwnPropertyDescriptor(a,u):null;R&&(R.get||R.set)?Object.defineProperty(o,u,R):o[u]=a[u]}return o.default=a,c&&c.set(a,o),o}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports},43474:function(s){function f(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},42272:function(s){function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},27161:function(s,f,e){var y=e(61614);function l(v,a){if(v==null)return{};var t=y(v,a),c,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(v);for(o=0;o<i.length;o++)c=i[o],!(a.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(v,c)&&(t[c]=v[c])}return t}s.exports=l,s.exports.__esModule=!0,s.exports.default=s.exports},61614:function(s){function f(e,y){if(e==null)return{};var l={},v=Object.keys(e),a,t;for(t=0;t<v.length;t++)a=v[t],!(y.indexOf(a)>=0)&&(l[a]=e[a]);return l}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},93923:function(s,f,e){var y=e(43174),l=e(43474),v=e(35962),a=e(42272);function t(c){return y(c)||l(c)||v(c)||a()}s.exports=t,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
