(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[904],{77877:function(t,o,e){"use strict";var s;e.r(o),e.d(o,{demos:function(){return p}});var l=e(7557),r=e.n(l),i=e(41498),u=e.n(i),a=e(21739),f=e(72557),c=e(98259),p={"docs-demo-simple-demo-simple":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,41386))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12642).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:s||(s=e.t(a,2)),"rc-textarea":f},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var d,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(225).then(e.bind(e,89225));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}},"docs-demo-simple-demo-autosize":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,12173))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85227).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:s||(s=e.t(a,2)),"rc-textarea":f},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var d,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(225).then(e.bind(e,89225));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}},"docs-demo-simple-demo-allowclear":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,76434))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45403).Z},"rc-textarea":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"rc-textarea":f,react:s||(s=e.t(a,2))},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var d,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(225).then(e.bind(e,89225));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}},"docs-demo-simple-demo-showcount":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,62678))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29555).Z},"rc-textarea":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(54838).Z}},entry:"index.tsx"},context:{"../../assets/index.less":c,"rc-textarea":f,react:s||(s=e.t(a,2)),"/Users/afc163/Projects/textarea/assets/index.less":c},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var d,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(225).then(e.bind(e,89225));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}}}},85138:function(t,o,e){"use strict";e.r(o),e.d(o,{demos:function(){return l}});var s=e(21739),l={}},72557:function(t,o,e){"use strict";e.r(o),e.d(o,{ResizableTextArea:function(){return nt},default:function(){return ht}});var s=e(85573),l=e.n(s),r=e(82242),i=e.n(r),u=e(37205),a=e.n(u),f=e(79800),c=e.n(f),p=e(39647),v=e.n(p),S=e(92310),m=e.n(S),d=e(98506),b=e(67711),I=e(52873),y=e(26420),g=e(21739);function K(n){return!!(n.addonBefore||n.addonAfter)}function ee(n){return!!(n.prefix||n.suffix||n.allowClear)}function ye(n,R,x){var h=R.cloneNode(!0),C=Object.create(n,{target:{value:h},currentTarget:{value:h}});return h.value=x,typeof R.selectionStart=="number"&&typeof R.selectionEnd=="number"&&(h.selectionStart=R.selectionStart,h.selectionEnd=R.selectionEnd),h.setSelectionRange=function(){R.setSelectionRange.apply(R,arguments)},C}function Je(n,R,x,h){if(x){var C=R;if(R.type==="click"){C=ye(R,n,""),x(C);return}if(n.type!=="file"&&h!==void 0){C=ye(R,n,h),x(C);return}x(C)}}function Xe(n,R){if(n){n.focus(R);var x=R||{},h=x.cursor;if(h){var C=n.value.length;switch(h){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(C,C);break;default:n.setSelectionRange(0,C)}}}}var Fe=g.forwardRef(function(n,R){var x,h,C,O=n.inputElement,P=n.children,A=n.prefixCls,_=n.prefix,z=n.suffix,T=n.addonBefore,H=n.addonAfter,G=n.className,te=n.style,L=n.disabled,ne=n.readOnly,Ie=n.focused,fe=n.triggerFocus,V=n.allowClear,$=n.value,de=n.handleReset,F=n.hidden,M=n.classes,E=n.classNames,re=n.dataAttrs,U=n.styles,N=n.components,ae=n.onClear,Y=P!=null?P:O,pe=(N==null?void 0:N.affixWrapper)||"span",Ee=(N==null?void 0:N.groupWrapper)||"span",ve=(N==null?void 0:N.wrapper)||"span",se=(N==null?void 0:N.groupAddon)||"span",ie=(0,g.useRef)(null),le=function(xe){var W;(W=ie.current)!==null&&W!==void 0&&W.contains(xe.target)&&(fe==null||fe())},me=ee(n),J=(0,g.cloneElement)(Y,{value:$,className:m()((x=Y.props)===null||x===void 0?void 0:x.className,!me&&(E==null?void 0:E.variant))||null}),Re=(0,g.useRef)(null);if(g.useImperativeHandle(R,function(){return{nativeElement:Re.current||ie.current}}),me){var ce=null;if(V){var oe=!L&&!ne&&$,X="".concat(A,"-clear-icon"),D=(0,y.Z)(V)==="object"&&V!==null&&V!==void 0&&V.clearIcon?V.clearIcon:"\u2716";ce=g.createElement("button",{type:"button",tabIndex:-1,onClick:function(xe){de==null||de(xe),ae==null||ae()},onMouseDown:function(xe){return xe.preventDefault()},className:m()(X,(0,I.Z)((0,I.Z)({},"".concat(X,"-hidden"),!oe),"".concat(X,"-has-suffix"),!!z))},D)}var q="".concat(A,"-affix-wrapper"),we=m()(q,(0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)({},"".concat(A,"-disabled"),L),"".concat(q,"-disabled"),L),"".concat(q,"-focused"),Ie),"".concat(q,"-readonly"),ne),"".concat(q,"-input-with-clear-btn"),z&&V&&$),M==null?void 0:M.affixWrapper,E==null?void 0:E.affixWrapper,E==null?void 0:E.variant),Se=(z||V)&&g.createElement("span",{className:m()("".concat(A,"-suffix"),E==null?void 0:E.suffix),style:U==null?void 0:U.suffix},ce,z);J=g.createElement(pe,(0,b.Z)({className:we,style:U==null?void 0:U.affixWrapper,onClick:le},re==null?void 0:re.affixWrapper,{ref:ie}),_&&g.createElement("span",{className:m()("".concat(A,"-prefix"),E==null?void 0:E.prefix),style:U==null?void 0:U.prefix},_),J,Se)}if(K(n)){var ue="".concat(A,"-group"),k="".concat(ue,"-addon"),Pe="".concat(ue,"-wrapper"),Te=m()("".concat(A,"-wrapper"),ue,M==null?void 0:M.wrapper,E==null?void 0:E.wrapper),Me=m()(Pe,(0,I.Z)({},"".concat(Pe,"-disabled"),L),M==null?void 0:M.group,E==null?void 0:E.groupWrapper);J=g.createElement(Ee,{className:Me,ref:Re},g.createElement(ve,{className:Te},T&&g.createElement(se,{className:k},T),J,H&&g.createElement(se,{className:k},H)))}return g.cloneElement(J,{className:m()((h=J.props)===null||h===void 0?void 0:h.className,G)||null,style:(0,d.Z)((0,d.Z)({},(C=J.props)===null||C===void 0?void 0:C.style),te),hidden:F})}),je=Fe,De=e(18929),We=null;function Qe(n,R){if(!R.max)return!0;var x=R.strategy(n);return x<=R.max}function ze(n,R){return React.useMemo(function(){var x={};R&&(x.show=_typeof(R)==="object"&&R.formatter?R.formatter:!!R),x=_objectSpread(_objectSpread({},x),n);var h=x,C=h.show,O=_objectWithoutProperties(h,We);return _objectSpread(_objectSpread({},O),{},{show:!!C,showFormatter:typeof C=="function"?C:void 0,strategy:O.strategy||function(P){return P.length}})},[n,R])}var Ke=null,bt=null,Ct=null,It=null,ut=e(34025),ke=e(71138),qe=e(62488),st=e(31468),it=e.n(st),lt=e(31226),et=e(44736),tt=e(13593),ct=`
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
`,ft=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ue={},Q;function dt(n){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,x=n.getAttribute("id")||n.getAttribute("data-reactid")||n.getAttribute("name");if(R&&Ue[x])return Ue[x];var h=window.getComputedStyle(n),C=h.getPropertyValue("box-sizing")||h.getPropertyValue("-moz-box-sizing")||h.getPropertyValue("-webkit-box-sizing"),O=parseFloat(h.getPropertyValue("padding-bottom"))+parseFloat(h.getPropertyValue("padding-top")),P=parseFloat(h.getPropertyValue("border-bottom-width"))+parseFloat(h.getPropertyValue("border-top-width")),A=ft.map(function(z){return"".concat(z,":").concat(h.getPropertyValue(z))}).join(";"),_={sizingStyle:A,paddingSize:O,borderSize:P,boxSizing:C};return R&&x&&(Ue[x]=_),_}function pt(n){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;Q||(Q=document.createElement("textarea"),Q.setAttribute("tab-index","-1"),Q.setAttribute("aria-hidden","true"),Q.setAttribute("name","hiddenTextarea"),document.body.appendChild(Q)),n.getAttribute("wrap")?Q.setAttribute("wrap",n.getAttribute("wrap")):Q.removeAttribute("wrap");var C=dt(n,R),O=C.paddingSize,P=C.borderSize,A=C.boxSizing,_=C.sizingStyle;Q.setAttribute("style","".concat(_,";").concat(ct)),Q.value=n.value||n.placeholder||"";var z=void 0,T=void 0,H,G=Q.scrollHeight;if(A==="border-box"?G+=P:A==="content-box"&&(G-=O),x!==null||h!==null){Q.value=" ";var te=Q.scrollHeight-O;x!==null&&(z=te*x,A==="border-box"&&(z=z+O+P),G=Math.max(z,G)),h!==null&&(T=te*h,A==="border-box"&&(T=T+O+P),H=G>T?"":"hidden",G=Math.min(T,G))}var L={height:G,overflowY:H,resize:"none"};return z&&(L.minHeight=z),T&&(L.maxHeight=T),L}var he=e(27174),vt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Be=0,Ze=1,_e=2,mt=g.forwardRef(function(n,R){var x=n,h=x.prefixCls,C=x.defaultValue,O=x.value,P=x.autoSize,A=x.onResize,_=x.className,z=x.style,T=x.disabled,H=x.onChange,G=x.onInternalAutoSize,te=v()(x,vt),L=(0,qe.Z)(C,{value:O,postState:function(D){return D!=null?D:""}}),ne=c()(L,2),Ie=ne[0],fe=ne[1],V=function(D){fe(D.target.value),H==null||H(D)},$=g.useRef();g.useImperativeHandle(R,function(){return{textArea:$.current}});var de=g.useMemo(function(){return P&&it()(P)==="object"?[P.minRows,P.maxRows]:[]},[P]),F=c()(de,2),M=F[0],E=F[1],re=!!P,U=function(){try{var D=navigator.userAgent.includes("Firefox");if(D&&document.activeElement===$.current){var q=$.current,we=q.scrollTop,Se=q.selectionStart,ue=q.selectionEnd;$.current.setSelectionRange(Se,ue),$.current.scrollTop=we}}catch(k){}},N=g.useState(_e),ae=c()(N,2),Y=ae[0],pe=ae[1],Ee=g.useState(),ve=c()(Ee,2),se=ve[0],ie=ve[1],le=function(){pe(Be)};(0,et.default)(function(){re&&le()},[O,M,E,re]),(0,et.default)(function(){if(Y===Be)pe(Ze);else if(Y===Ze){var X=pt($.current,!1,M,E);pe(_e),ie(X)}else U()},[Y]);var me=g.useRef(),J=function(){tt.Z.cancel(me.current)},Re=function(D){Y===_e&&(A==null||A(D),P&&(J(),me.current=(0,tt.Z)(function(){le()})))};g.useEffect(function(){return J},[]);var ce=re?se:null,oe=i()(i()({},z),ce);return(Y===Be||Y===Ze)&&(oe.overflowY="hidden",oe.overflowX="hidden"),(0,he.jsx)(lt.Z,{onResize:Re,disabled:!(P||A),children:(0,he.jsx)("textarea",i()(i()({},te),{},{ref:$,style:oe,className:m()(h,_,l()({},"".concat(h,"-disabled"),T)),disabled:T,value:Ie,onChange:V}))})}),nt=mt,xt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],gt=g.forwardRef(function(n,R){var x,h=n.defaultValue,C=n.value,O=n.onFocus,P=n.onBlur,A=n.onChange,_=n.allowClear,z=n.maxLength,T=n.onCompositionStart,H=n.onCompositionEnd,G=n.suffix,te=n.prefixCls,L=te===void 0?"rc-textarea":te,ne=n.showCount,Ie=n.count,fe=n.className,V=n.style,$=n.disabled,de=n.hidden,F=n.classNames,M=n.styles,E=n.onResize,re=n.onClear,U=n.onPressEnter,N=n.readOnly,ae=n.autoSize,Y=n.onKeyDown,pe=v()(n,xt),Ee=(0,qe.Z)(h,{value:C,defaultValue:h}),ve=c()(Ee,2),se=ve[0],ie=ve[1],le=se==null?"":String(se),me=g.useState(!1),J=c()(me,2),Re=J[0],ce=J[1],oe=g.useRef(!1),X=g.useState(null),D=c()(X,2),q=D[0],we=D[1],Se=(0,g.useRef)(null),ue=(0,g.useRef)(null),k=function(){var w;return(w=ue.current)===null||w===void 0?void 0:w.textArea},Pe=function(){k().focus()};(0,g.useImperativeHandle)(R,function(){var j;return{resizableTextArea:ue.current,focus:Pe,blur:function(){k().blur()},nativeElement:((j=Se.current)===null||j===void 0?void 0:j.nativeElement)||k()}}),(0,g.useEffect)(function(){ce(function(j){return!$&&j})},[$]);var Te=g.useState(null),Me=c()(Te,2),be=Me[0],xe=Me[1];g.useEffect(function(){if(be){var j;(j=k()).setSelectionRange.apply(j,a()(be))}},[be]);var W=(0,ut.ZP)(Ie,ne),Ae=(x=W.max)!==null&&x!==void 0?x:z,rt=Number(Ae)>0,Le=W.strategy(le),at=!!Ae&&Le>Ae,He=function(w,ge){var Ve=ge;!oe.current&&W.exceedFormatter&&W.max&&W.strategy(ge)>W.max&&(Ve=W.exceedFormatter(ge,{max:W.max}),ge!==Ve&&xe([k().selectionStart||0,k().selectionEnd||0])),ie(Ve),(0,ke.rJ)(w.currentTarget,w,A,Ve)},ot=function(w){oe.current=!0,T==null||T(w)},B=function(w){oe.current=!1,He(w,w.currentTarget.value),H==null||H(w)},Z=function(w){He(w,w.target.value)},Ce=function(w){w.key==="Enter"&&U&&U(w),Y==null||Y(w)},Ne=function(w){ce(!0),O==null||O(w)},Ge=function(w){ce(!1),P==null||P(w)},Ye=function(w){ie(""),Pe(),(0,ke.rJ)(k(),w,A)},$e=G,Oe;W.show&&(W.showFormatter?Oe=W.showFormatter({value:le,count:Le,maxLength:Ae}):Oe="".concat(Le).concat(rt?" / ".concat(Ae):""),$e=(0,he.jsxs)(he.Fragment,{children:[$e,(0,he.jsx)("span",{className:m()("".concat(L,"-data-count"),F==null?void 0:F.count),style:M==null?void 0:M.count,children:Oe})]}));var Rt=function(w){var ge;E==null||E(w),(ge=k())!==null&&ge!==void 0&&ge.style.height&&we(!0)},St=!ae&&!ne&&!_;return(0,he.jsx)(je,{ref:Se,value:le,allowClear:_,handleReset:Ye,suffix:$e,prefixCls:L,classNames:i()(i()({},F),{},{affixWrapper:m()(F==null?void 0:F.affixWrapper,l()(l()({},"".concat(L,"-show-count"),ne),"".concat(L,"-textarea-allow-clear"),_))}),disabled:$,focused:Re,className:m()(fe,at&&"".concat(L,"-out-of-range")),style:i()(i()({},V),q&&!St?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Oe=="string"?Oe:void 0}},hidden:de,readOnly:N,onClear:re,children:(0,he.jsx)(nt,i()(i()({},pe),{},{autoSize:ae,maxLength:z,onKeyDown:Ce,onChange:Z,onFocus:Ne,onBlur:Ge,onCompositionStart:ot,onCompositionEnd:B,className:m()(F==null?void 0:F.textarea),style:i()(i()({},M==null?void 0:M.textarea),{},{resize:V==null?void 0:V.resize}),disabled:$,prefixCls:L,onResize:Rt,ref:ue,readOnly:N}))})}),yt=gt,ht=yt},98259:function(t,o,e){"use strict";e.r(o)},41077:function(t,o,e){"use strict";e.r(o),e.d(o,{texts:function(){return s}});const s=[]},78384:function(t,o,e){"use strict";e.r(o),e.d(o,{texts:function(){return s}});const s=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},54838:function(t,o){"use strict";o.Z=`@textarea-prefix-cls: rc-textarea;

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
`},45403:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
import Textarea from 'rc-textarea';
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
`},85227:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
import React, { useState } from 'react';
import Textarea from 'rc-textarea';

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
`},29555:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
import Textarea from 'rc-textarea';
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
`},12642:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
import React, { useState } from 'react';
import type { TextAreaProps } from 'rc-textarea';
import Textarea from 'rc-textarea';

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
`},34025:function(t,o,e){"use strict";var s,l=e(95069),r=e(46218);s={value:!0},o.ZP=m,s=S;var i=l(e(99205)),u=l(e(74751)),a=l(e(46218)),f=v(e(21739)),c=["show"];function p(d){if(typeof WeakMap!="function")return null;var b=new WeakMap,I=new WeakMap;return(p=function(g){return g?I:b})(d)}function v(d,b){if(!b&&d&&d.__esModule)return d;if(d===null||r(d)!="object"&&typeof d!="function")return{default:d};var I=p(b);if(I&&I.has(d))return I.get(d);var y={__proto__:null},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in d)if(K!=="default"&&Object.prototype.hasOwnProperty.call(d,K)){var ee=g?Object.getOwnPropertyDescriptor(d,K):null;ee&&(ee.get||ee.set)?Object.defineProperty(y,K,ee):y[K]=d[K]}return y.default=d,I&&I.set(d,y),y}function S(d,b){if(!b.max)return!0;var I=b.strategy(d);return I<=b.max}function m(d,b){return f.useMemo(function(){var I={};b&&(I.show=(0,a.default)(b)==="object"&&b.formatter?b.formatter:!!b),I=(0,u.default)((0,u.default)({},I),d);var y=I,g=y.show,K=(0,i.default)(y,c);return(0,u.default)((0,u.default)({},K),{},{show:!!g,showFormatter:typeof g=="function"?g:void 0,strategy:K.strategy||function(ee){return ee.length}})},[d,b])}},71138:function(t,o){"use strict";var e;e={value:!0},e=s,e=l,o.rJ=i,e=u;function s(a){return!!(a.addonBefore||a.addonAfter)}function l(a){return!!(a.prefix||a.suffix||a.allowClear)}function r(a,f,c){var p=f.cloneNode(!0),v=Object.create(a,{target:{value:p},currentTarget:{value:p}});return p.value=c,typeof f.selectionStart=="number"&&typeof f.selectionEnd=="number"&&(p.selectionStart=f.selectionStart,p.selectionEnd=f.selectionEnd),p.setSelectionRange=function(){f.setSelectionRange.apply(f,arguments)},v}function i(a,f,c,p){if(c){var v=f;if(f.type==="click"){v=r(f,a,""),c(v);return}if(a.type!=="file"&&p!==void 0){v=r(f,a,p),c(v);return}c(v)}}function u(a,f){if(a){a.focus(f);var c=f||{},p=c.cursor;if(p){var v=a.value.length;switch(p){case"start":a.setSelectionRange(0,0);break;case"end":a.setSelectionRange(v,v);break;default:a.setSelectionRange(0,v)}}}}},16681:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},7278:function(t,o,e){"use strict";var s=e(59150).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=r;var l=s(e(21739));function r(i){var u=l.useRef();u.current=i;var a=l.useCallback(function(){for(var f,c=arguments.length,p=new Array(c),v=0;v<c;v++)p[v]=arguments[v];return(f=u.current)===null||f===void 0?void 0:f.call.apply(f,[u].concat(p))},[]);return a}},44736:function(t,o,e){"use strict";var s=e(95069).default,l=e(59150).default;Object.defineProperty(o,"__esModule",{value:!0}),o.useLayoutUpdateEffect=o.default=void 0;var r=l(e(21739)),i=s(e(16681)),u=(0,i.default)()?r.useLayoutEffect:r.useEffect,a=function(v,S){var m=r.useRef(!0);u(function(){return v(m.current)},S),u(function(){return m.current=!1,function(){m.current=!0}},[])},f=o.useLayoutUpdateEffect=function(v,S){a(function(m){if(!m)return v()},S)},c=o.default=a},62488:function(t,o,e){"use strict";var s,l=e(95069).default;s={value:!0},o.Z=c;var r=l(e(69519)),i=l(e(7278)),u=e(44736),a=l(e(65503));function f(p){return p!==void 0}function c(p,v){var S=v||{},m=S.defaultValue,d=S.value,b=S.onChange,I=S.postState,y=(0,a.default)(function(){return f(d)?d:f(m)?typeof m=="function"?m():m:typeof p=="function"?p():p}),g=(0,r.default)(y,2),K=g[0],ee=g[1],ye=d!==void 0?d:K,Je=I?I(ye):ye,Xe=(0,i.default)(b),Fe=(0,a.default)([ye]),je=(0,r.default)(Fe,2),De=je[0],We=je[1];(0,u.useLayoutUpdateEffect)(function(){var ze=De[0];K!==ze&&Xe(K,ze)},[De]),(0,u.useLayoutUpdateEffect)(function(){f(d)||ee(d)},[d]);var Qe=(0,i.default)(function(ze,Ke){ee(ze,Ke),We([ye],Ke)});return[Je,Qe]}},65503:function(t,o,e){"use strict";var s=e(59150).default,l=e(95069).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=u;var r=l(e(69519)),i=s(e(21739));function u(a){var f=i.useRef(!1),c=i.useState(a),p=(0,r.default)(c,2),v=p[0],S=p[1];i.useEffect(function(){return f.current=!1,function(){f.current=!0}},[]);function m(d,b){b&&f.current||S(d)}return[v,m]}},13593:function(t,o){"use strict";var e;e={value:!0},o.Z=void 0;var s=function(p){return+setTimeout(p,16)},l=function(p){return clearTimeout(p)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(s=function(p){return window.requestAnimationFrame(p)},l=function(p){return window.cancelAnimationFrame(p)});var r=0,i=new Map;function u(c){i.delete(c)}var a=function(p){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;r+=1;var S=r;function m(d){if(d===0)u(S),p();else{var b=s(function(){m(d-1)});i.set(S,b)}}return m(v),S};a.cancel=function(c){var p=i.get(c);return u(c),l(p)};var f=o.Z=a},61004:function(t,o,e){var s=e(39572);function l(r){if(Array.isArray(r))return s(r)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},97012:function(t){function o(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},93215:function(t){function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},39647:function(t,o,e){var s=e(32890);function l(r,i){if(r==null)return{};var u=s(r,i),a,f;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(f=0;f<c.length;f++)a=c[f],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(u[a]=r[a])}return u}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},32890:function(t){function o(e,s){if(e==null)return{};var l={},r=Object.keys(e),i,u;for(u=0;u<r.length;u++)i=r[u],!(s.indexOf(i)>=0)&&(l[i]=e[i]);return l}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},37205:function(t,o,e){var s=e(61004),l=e(97012),r=e(66109),i=e(93215);function u(a){return s(a)||l(a)||r(a)||i()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},91100:function(t){function o(e,s){(s==null||s>e.length)&&(s=e.length);for(var l=0,r=Array(s);l<s;l++)r[l]=e[l];return r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},3438:function(t){function o(e){if(Array.isArray(e))return e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},212:function(t,o,e){var s=e(84749);function l(r,i,u){return(i=s(i))in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u,r}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},95069:function(t){function o(e){return e&&e.__esModule?e:{default:e}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},59150:function(t,o,e){var s=e(46218).default;function l(r,i){if(typeof WeakMap=="function")var u=new WeakMap,a=new WeakMap;return(t.exports=l=function(c,p){if(!p&&c&&c.__esModule)return c;var v,S,m={__proto__:null,default:c};if(c===null||s(c)!="object"&&typeof c!="function")return m;if(v=p?a:u){if(v.has(c))return v.get(c);v.set(c,m)}for(var d in c)d!=="default"&&{}.hasOwnProperty.call(c,d)&&((S=(v=Object.defineProperty)&&Object.getOwnPropertyDescriptor(c,d))&&(S.get||S.set)?v(m,d,S):m[d]=c[d]);return m},t.exports.__esModule=!0,t.exports.default=t.exports)(r,i)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},94942:function(t){function o(e,s){var l=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(l!=null){var r,i,u,a,f=[],c=!0,p=!1;try{if(u=(l=l.call(e)).next,s===0){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=u.call(l)).done)&&(f.push(r.value),f.length!==s);c=!0);}catch(v){p=!0,i=v}finally{try{if(!c&&l.return!=null&&(a=l.return(),Object(a)!==a))return}finally{if(p)throw i}}return f}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},79143:function(t){function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},74751:function(t,o,e){var s=e(212);function l(i,u){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);u&&(f=f.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),a.push.apply(a,f)}return a}function r(i){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?l(Object(a),!0).forEach(function(f){s(i,f,a[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(f){Object.defineProperty(i,f,Object.getOwnPropertyDescriptor(a,f))})}return i}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},99205:function(t,o,e){var s=e(36340);function l(r,i){if(r==null)return{};var u,a,f=s(r,i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(a=0;a<c.length;a++)u=c[a],i.indexOf(u)===-1&&{}.propertyIsEnumerable.call(r,u)&&(f[u]=r[u])}return f}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},36340:function(t){function o(e,s){if(e==null)return{};var l={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(s.indexOf(r)!==-1)continue;l[r]=e[r]}return l}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},69519:function(t,o,e){var s=e(3438),l=e(94942),r=e(44619),i=e(79143);function u(a,f){return s(a)||l(a,f)||r(a,f)||i()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},91428:function(t,o,e){var s=e(46218).default;function l(r,i){if(s(r)!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var a=u.call(r,i||"default");if(s(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},84749:function(t,o,e){var s=e(46218).default,l=e(91428);function r(i){var u=l(i,"string");return s(u)=="symbol"?u:u+""}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},46218:function(t){function o(e){"@babel/helpers - typeof";return t.exports=o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},t.exports.__esModule=!0,t.exports.default=t.exports,o(e)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},44619:function(t,o,e){var s=e(91100);function l(r,i){if(r){if(typeof r=="string")return s(r,i);var u={}.toString.call(r).slice(8,-1);return u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set"?Array.from(r):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?s(r,i):void 0}}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
