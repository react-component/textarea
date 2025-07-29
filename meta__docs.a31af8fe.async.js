(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[904],{19128:function(t,o,e){"use strict";var s;e.r(o),e.d(o,{demos:function(){return p}});var l=e(15009),r=e.n(l),i=e(99289),u=e.n(i),a=e(67294),d=e(76695),c=e(69945),p={"docs-demo-simple-demo-simple":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,17262))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18647).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.10.2"}},entry:"index.tsx"},context:{react:s||(s=e.t(a,2)),"rc-textarea":d},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var f,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(250).then(e.bind(e,90250));case 2:return y.abrupt("return",(f=y.sent).default.apply(f,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}},"docs-demo-simple-demo-autosize":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,16151))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33214).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.10.2"}},entry:"index.tsx"},context:{react:s||(s=e.t(a,2)),"rc-textarea":d},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var f,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(250).then(e.bind(e,90250));case 2:return y.abrupt("return",(f=y.sent).default.apply(f,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}},"docs-demo-simple-demo-allowclear":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98144))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80654).Z},"rc-textarea":{type:"NPM",value:"1.10.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"rc-textarea":d,react:s||(s=e.t(a,2))},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var f,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(250).then(e.bind(e,90250));case 2:return y.abrupt("return",(f=y.sent).default.apply(f,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}},"docs-demo-simple-demo-showcount":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,88941))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(672).Z},"rc-textarea":{type:"NPM",value:"1.10.2"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":c,"rc-textarea":d,react:s||(s=e.t(a,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":c},renderOpts:{compile:function(){var v=u()(r()().mark(function m(){var f,b=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(250).then(e.bind(e,90250));case 2:return y.abrupt("return",(f=y.sent).default.apply(f,b));case 3:case"end":return y.stop()}},m)}));function S(){return v.apply(this,arguments)}return S}()}}}},11171:function(t,o,e){"use strict";e.r(o),e.d(o,{demos:function(){return l}});var s=e(67294),l={}},76695:function(t,o,e){"use strict";e.r(o),e.d(o,{ResizableTextArea:function(){return nt},default:function(){return ht}});var s=e(9783),l=e.n(s),r=e(97857),i=e.n(r),u=e(19632),a=e.n(u),d=e(5574),c=e.n(d),p=e(13769),v=e.n(p),S=e(93967),m=e.n(S),f=e(1413),b=e(87462),I=e(4942),y=e(71002),g=e(67294);function D(n){return!!(n.addonBefore||n.addonAfter)}function q(n){return!!(n.prefix||n.suffix||n.allowClear)}function me(n,R,x){var h=R.cloneNode(!0),C=Object.create(n,{target:{value:h},currentTarget:{value:h}});return h.value=x,typeof R.selectionStart=="number"&&typeof R.selectionEnd=="number"&&(h.selectionStart=R.selectionStart,h.selectionEnd=R.selectionEnd),h.setSelectionRange=function(){R.setSelectionRange.apply(R,arguments)},C}function Je(n,R,x,h){if(x){var C=R;if(R.type==="click"){C=me(R,n,""),x(C);return}if(n.type!=="file"&&h!==void 0){C=me(R,n,h),x(C);return}x(C)}}function Xe(n,R){if(n){n.focus(R);var x=R||{},h=x.cursor;if(h){var C=n.value.length;switch(h){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(C,C);break;default:n.setSelectionRange(0,C)}}}}var Fe=g.forwardRef(function(n,R){var x,h,C,O=n.inputElement,P=n.children,A=n.prefixCls,Z=n.prefix,z=n.suffix,L=n.addonBefore,_=n.addonAfter,H=n.className,ne=n.style,$=n.disabled,re=n.readOnly,be=n.focused,ie=n.triggerFocus,N=n.allowClear,J=n.value,le=n.handleReset,V=n.hidden,M=n.classes,E=n.classNames,ae=n.dataAttrs,W=n.styles,j=n.components,G=n.onClear,ee=P!=null?P:O,Ce=(j==null?void 0:j.affixWrapper)||"span",ge=(j==null?void 0:j.groupWrapper)||"span",ye=(j==null?void 0:j.wrapper)||"span",ue=(j==null?void 0:j.groupAddon)||"span",oe=(0,g.useRef)(null),se=function(pe){var F;(F=oe.current)!==null&&F!==void 0&&F.contains(pe.target)&&(ie==null||ie())},ce=q(n),X=(0,g.cloneElement)(ee,{value:J,className:m()((x=ee.props)===null||x===void 0?void 0:x.className,!ce&&(E==null?void 0:E.variant))||null}),he=(0,g.useRef)(null);if(g.useImperativeHandle(R,function(){return{nativeElement:he.current||oe.current}}),ce){var te=null;if(N){var Q=!$&&!re&&J,K="".concat(A,"-clear-icon"),Pe=(0,y.Z)(N)==="object"&&N!==null&&N!==void 0&&N.clearIcon?N.clearIcon:"\u2716";te=g.createElement("button",{type:"button",tabIndex:-1,onClick:function(pe){le==null||le(pe),G==null||G()},onMouseDown:function(pe){return pe.preventDefault()},className:m()(K,(0,I.Z)((0,I.Z)({},"".concat(K,"-hidden"),!Q),"".concat(K,"-has-suffix"),!!z))},Pe)}var de="".concat(A,"-affix-wrapper"),je=m()(de,(0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)((0,I.Z)({},"".concat(A,"-disabled"),$),"".concat(de,"-disabled"),$),"".concat(de,"-focused"),be),"".concat(de,"-readonly"),re),"".concat(de,"-input-with-clear-btn"),z&&N&&J),M==null?void 0:M.affixWrapper,E==null?void 0:E.affixWrapper,E==null?void 0:E.variant),Ae=(z||N)&&g.createElement("span",{className:m()("".concat(A,"-suffix"),E==null?void 0:E.suffix),style:W==null?void 0:W.suffix},te,z);X=g.createElement(Ce,(0,b.Z)({className:je,style:W==null?void 0:W.affixWrapper,onClick:se},ae==null?void 0:ae.affixWrapper,{ref:oe}),Z&&g.createElement("span",{className:m()("".concat(A,"-prefix"),E==null?void 0:E.prefix),style:W==null?void 0:W.prefix},Z),X,Ae)}if(D(n)){var fe="".concat(A,"-group"),k="".concat(fe,"-addon"),Ie="".concat(fe,"-wrapper"),Te=m()("".concat(A,"-wrapper"),fe,M==null?void 0:M.wrapper,E==null?void 0:E.wrapper),ze=m()(Ie,(0,I.Z)({},"".concat(Ie,"-disabled"),$),M==null?void 0:M.group,E==null?void 0:E.groupWrapper);X=g.createElement(ge,{className:ze,ref:he},g.createElement(ye,{className:Te},L&&g.createElement(ue,{className:k},L),X,_&&g.createElement(ue,{className:k},_)))}return g.cloneElement(X,{className:m()((h=X.props)===null||h===void 0?void 0:h.className,H)||null,style:(0,f.Z)((0,f.Z)({},(C=X.props)===null||C===void 0?void 0:C.style),ne),hidden:V})}),Oe=Fe,De=e(21770),We=null;function Qe(n,R){if(!R.max)return!0;var x=R.strategy(n);return x<=R.max}function we(n,R){return React.useMemo(function(){var x={};R&&(x.show=_typeof(R)==="object"&&R.formatter?R.formatter:!!R),x=_objectSpread(_objectSpread({},x),n);var h=x,C=h.show,O=_objectWithoutProperties(h,We);return _objectSpread(_objectSpread({},O),{},{show:!!C,showFormatter:typeof C=="function"?C:void 0,strategy:O.strategy||function(P){return P.length}})},[n,R])}var Ke=null,bt=null,Ct=null,It=null,ut=e(78550),ke=e(80133),qe=e(60869),st=e(52677),it=e.n(st),lt=e(9220),et=e(82546),tt=e(64543),ct=`
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
`,dt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ue={},Y;function ft(n){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,x=n.getAttribute("id")||n.getAttribute("data-reactid")||n.getAttribute("name");if(R&&Ue[x])return Ue[x];var h=window.getComputedStyle(n),C=h.getPropertyValue("box-sizing")||h.getPropertyValue("-moz-box-sizing")||h.getPropertyValue("-webkit-box-sizing"),O=parseFloat(h.getPropertyValue("padding-bottom"))+parseFloat(h.getPropertyValue("padding-top")),P=parseFloat(h.getPropertyValue("border-bottom-width"))+parseFloat(h.getPropertyValue("border-top-width")),A=dt.map(function(z){return"".concat(z,":").concat(h.getPropertyValue(z))}).join(";"),Z={sizingStyle:A,paddingSize:O,borderSize:P,boxSizing:C};return R&&x&&(Ue[x]=Z),Z}function pt(n){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;Y||(Y=document.createElement("textarea"),Y.setAttribute("tab-index","-1"),Y.setAttribute("aria-hidden","true"),Y.setAttribute("name","hiddenTextarea"),document.body.appendChild(Y)),n.getAttribute("wrap")?Y.setAttribute("wrap",n.getAttribute("wrap")):Y.removeAttribute("wrap");var C=ft(n,R),O=C.paddingSize,P=C.borderSize,A=C.boxSizing,Z=C.sizingStyle;Y.setAttribute("style","".concat(Z,";").concat(ct)),Y.value=n.value||n.placeholder||"";var z=void 0,L=void 0,_,H=Y.scrollHeight;if(A==="border-box"?H+=P:A==="content-box"&&(H-=O),x!==null||h!==null){Y.value=" ";var ne=Y.scrollHeight-O;x!==null&&(z=ne*x,A==="border-box"&&(z=z+O+P),H=Math.max(z,H)),h!==null&&(L=ne*h,A==="border-box"&&(L=L+O+P),_=H>L?"":"hidden",H=Math.min(L,H))}var $={height:H,overflowY:_,resize:"none"};return z&&($.minHeight=z),L&&($.maxHeight=L),$}var xe=e(85893),vt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Be=0,Ze=1,_e=2,mt=g.forwardRef(function(n,R){var x=n,h=x.prefixCls,C=x.defaultValue,O=x.value,P=x.autoSize,A=x.onResize,Z=x.className,z=x.style,L=x.disabled,_=x.onChange,H=x.onInternalAutoSize,ne=v()(x,vt),$=(0,qe.Z)(C,{value:O,postState:function(K){return K!=null?K:""}}),re=c()($,2),be=re[0],ie=re[1],N=function(K){ie(K.target.value),_==null||_(K)},J=g.useRef();g.useImperativeHandle(R,function(){return{textArea:J.current}});var le=g.useMemo(function(){return P&&it()(P)==="object"?[P.minRows,P.maxRows]:[]},[P]),V=c()(le,2),M=V[0],E=V[1],ae=!!P,W=g.useState(_e),j=c()(W,2),G=j[0],ee=j[1],Ce=g.useState(),ge=c()(Ce,2),ye=ge[0],ue=ge[1],oe=function(){ee(Be)};(0,et.default)(function(){ae&&oe()},[O,M,E,ae]),(0,et.default)(function(){if(G===Be)ee(Ze);else if(G===Ze){var Q=pt(J.current,!1,M,E);ee(_e),ue(Q)}},[G]);var se=g.useRef(),ce=function(){tt.Z.cancel(se.current)},X=function(K){G===_e&&(A==null||A(K),P&&(ce(),se.current=(0,tt.Z)(function(){oe()})))};g.useEffect(function(){return ce},[]);var he=ae?ye:null,te=i()(i()({},z),he);return(G===Be||G===Ze)&&(te.overflowY="hidden",te.overflowX="hidden"),(0,xe.jsx)(lt.Z,{onResize:X,disabled:!(P||A),children:(0,xe.jsx)("textarea",i()(i()({},ne),{},{ref:J,style:te,className:m()(h,Z,l()({},"".concat(h,"-disabled"),L)),disabled:L,value:be,onChange:N}))})}),nt=mt,xt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],gt=g.forwardRef(function(n,R){var x,h=n.defaultValue,C=n.value,O=n.onFocus,P=n.onBlur,A=n.onChange,Z=n.allowClear,z=n.maxLength,L=n.onCompositionStart,_=n.onCompositionEnd,H=n.suffix,ne=n.prefixCls,$=ne===void 0?"rc-textarea":ne,re=n.showCount,be=n.count,ie=n.className,N=n.style,J=n.disabled,le=n.hidden,V=n.classNames,M=n.styles,E=n.onResize,ae=n.onClear,W=n.onPressEnter,j=n.readOnly,G=n.autoSize,ee=n.onKeyDown,Ce=v()(n,xt),ge=(0,qe.Z)(h,{value:C,defaultValue:h}),ye=c()(ge,2),ue=ye[0],oe=ye[1],se=ue==null?"":String(ue),ce=g.useState(!1),X=c()(ce,2),he=X[0],te=X[1],Q=g.useRef(!1),K=g.useState(null),Pe=c()(K,2),de=Pe[0],je=Pe[1],Ae=(0,g.useRef)(null),fe=(0,g.useRef)(null),k=function(){var w;return(w=fe.current)===null||w===void 0?void 0:w.textArea},Ie=function(){k().focus()};(0,g.useImperativeHandle)(R,function(){var T;return{resizableTextArea:fe.current,focus:Ie,blur:function(){k().blur()},nativeElement:((T=Ae.current)===null||T===void 0?void 0:T.nativeElement)||k()}}),(0,g.useEffect)(function(){te(function(T){return!J&&T})},[J]);var Te=g.useState(null),ze=c()(Te,2),Re=ze[0],pe=ze[1];g.useEffect(function(){if(Re){var T;(T=k()).setSelectionRange.apply(T,a()(Re))}},[Re]);var F=(0,ut.ZP)(be,re),Ee=(x=F.max)!==null&&x!==void 0?x:z,rt=Number(Ee)>0,Le=F.strategy(se),at=!!Ee&&Le>Ee,He=function(w,ve){var Ve=ve;!Q.current&&F.exceedFormatter&&F.max&&F.strategy(ve)>F.max&&(Ve=F.exceedFormatter(ve,{max:F.max}),ve!==Ve&&pe([k().selectionStart||0,k().selectionEnd||0])),oe(Ve),(0,ke.rJ)(w.currentTarget,w,A,Ve)},ot=function(w){Q.current=!0,L==null||L(w)},U=function(w){Q.current=!1,He(w,w.currentTarget.value),_==null||_(w)},B=function(w){He(w,w.target.value)},Se=function(w){w.key==="Enter"&&W&&W(w),ee==null||ee(w)},$e=function(w){te(!0),O==null||O(w)},Ge=function(w){te(!1),P==null||P(w)},Ye=function(w){oe(""),Ie(),(0,ke.rJ)(k(),w,A)},Ne=H,Me;F.show&&(F.showFormatter?Me=F.showFormatter({value:se,count:Le,maxLength:Ee}):Me="".concat(Le).concat(rt?" / ".concat(Ee):""),Ne=(0,xe.jsxs)(xe.Fragment,{children:[Ne,(0,xe.jsx)("span",{className:m()("".concat($,"-data-count"),V==null?void 0:V.count),style:M==null?void 0:M.count,children:Me})]}));var Rt=function(w){var ve;E==null||E(w),(ve=k())!==null&&ve!==void 0&&ve.style.height&&je(!0)},St=!G&&!re&&!Z;return(0,xe.jsx)(Oe,{ref:Ae,value:se,allowClear:Z,handleReset:Ye,suffix:Ne,prefixCls:$,classNames:i()(i()({},V),{},{affixWrapper:m()(V==null?void 0:V.affixWrapper,l()(l()({},"".concat($,"-show-count"),re),"".concat($,"-textarea-allow-clear"),Z))}),disabled:J,focused:he,className:m()(ie,at&&"".concat($,"-out-of-range")),style:i()(i()({},N),de&&!St?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Me=="string"?Me:void 0}},hidden:le,readOnly:j,onClear:ae,children:(0,xe.jsx)(nt,i()(i()({},Ce),{},{autoSize:G,maxLength:z,onKeyDown:Se,onChange:B,onFocus:$e,onBlur:Ge,onCompositionStart:ot,onCompositionEnd:U,className:m()(V==null?void 0:V.textarea),style:i()(i()({},M==null?void 0:M.textarea),{},{resize:N==null?void 0:N.resize}),disabled:J,prefixCls:$,onResize:Rt,ref:fe,readOnly:j}))})}),yt=gt,ht=yt},69945:function(t,o,e){"use strict";e.r(o)},49726:function(t,o,e){"use strict";e.r(o),e.d(o,{texts:function(){return s}});const s=[]},51446:function(t,o,e){"use strict";e.r(o),e.d(o,{texts:function(){return s}});const s=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(t,o){"use strict";o.Z=`@textarea-prefix-cls: rc-textarea;

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
`},80654:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
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
`},33214:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
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
`},672:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
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
`},18647:function(t,o){"use strict";o.Z=`/* eslint-disable no-console */
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
`},78550:function(t,o,e){"use strict";var s,l=e(64836),r=e(18698);s={value:!0},o.ZP=m,s=S;var i=l(e(70215)),u=l(e(42122)),a=l(e(18698)),d=v(e(67294)),c=["show"];function p(f){if(typeof WeakMap!="function")return null;var b=new WeakMap,I=new WeakMap;return(p=function(g){return g?I:b})(f)}function v(f,b){if(!b&&f&&f.__esModule)return f;if(f===null||r(f)!="object"&&typeof f!="function")return{default:f};var I=p(b);if(I&&I.has(f))return I.get(f);var y={__proto__:null},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in f)if(D!=="default"&&Object.prototype.hasOwnProperty.call(f,D)){var q=g?Object.getOwnPropertyDescriptor(f,D):null;q&&(q.get||q.set)?Object.defineProperty(y,D,q):y[D]=f[D]}return y.default=f,I&&I.set(f,y),y}function S(f,b){if(!b.max)return!0;var I=b.strategy(f);return I<=b.max}function m(f,b){return d.useMemo(function(){var I={};b&&(I.show=(0,a.default)(b)==="object"&&b.formatter?b.formatter:!!b),I=(0,u.default)((0,u.default)({},I),f);var y=I,g=y.show,D=(0,i.default)(y,c);return(0,u.default)((0,u.default)({},D),{},{show:!!g,showFormatter:typeof g=="function"?g:void 0,strategy:D.strategy||function(q){return q.length}})},[f,b])}},80133:function(t,o){"use strict";var e;e={value:!0},e=s,e=l,o.rJ=i,e=u;function s(a){return!!(a.addonBefore||a.addonAfter)}function l(a){return!!(a.prefix||a.suffix||a.allowClear)}function r(a,d,c){var p=d.cloneNode(!0),v=Object.create(a,{target:{value:p},currentTarget:{value:p}});return p.value=c,typeof d.selectionStart=="number"&&typeof d.selectionEnd=="number"&&(p.selectionStart=d.selectionStart,p.selectionEnd=d.selectionEnd),p.setSelectionRange=function(){d.setSelectionRange.apply(d,arguments)},v}function i(a,d,c,p){if(c){var v=d;if(d.type==="click"){v=r(d,a,""),c(v);return}if(a.type!=="file"&&p!==void 0){v=r(d,a,p),c(v);return}c(v)}}function u(a,d){if(a){a.focus(d);var c=d||{},p=c.cursor;if(p){var v=a.value.length;switch(p){case"start":a.setSelectionRange(0,0);break;case"end":a.setSelectionRange(v,v);break;default:a.setSelectionRange(0,v)}}}}},19158:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},18545:function(t,o,e){"use strict";var s=e(75263).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=r;var l=s(e(67294));function r(i){var u=l.useRef();u.current=i;var a=l.useCallback(function(){for(var d,c=arguments.length,p=new Array(c),v=0;v<c;v++)p[v]=arguments[v];return(d=u.current)===null||d===void 0?void 0:d.call.apply(d,[u].concat(p))},[]);return a}},82546:function(t,o,e){"use strict";var s=e(64836).default,l=e(75263).default;Object.defineProperty(o,"__esModule",{value:!0}),o.useLayoutUpdateEffect=o.default=void 0;var r=l(e(67294)),i=s(e(19158)),u=(0,i.default)()?r.useLayoutEffect:r.useEffect,a=function(v,S){var m=r.useRef(!0);u(function(){return v(m.current)},S),u(function(){return m.current=!1,function(){m.current=!0}},[])},d=o.useLayoutUpdateEffect=function(v,S){a(function(m){if(!m)return v()},S)},c=o.default=a},60869:function(t,o,e){"use strict";var s,l=e(64836).default;s={value:!0},o.Z=c;var r=l(e(27424)),i=l(e(18545)),u=e(82546),a=l(e(78423));function d(p){return p!==void 0}function c(p,v){var S=v||{},m=S.defaultValue,f=S.value,b=S.onChange,I=S.postState,y=(0,a.default)(function(){return d(f)?f:d(m)?typeof m=="function"?m():m:typeof p=="function"?p():p}),g=(0,r.default)(y,2),D=g[0],q=g[1],me=f!==void 0?f:D,Je=I?I(me):me,Xe=(0,i.default)(b),Fe=(0,a.default)([me]),Oe=(0,r.default)(Fe,2),De=Oe[0],We=Oe[1];(0,u.useLayoutUpdateEffect)(function(){var we=De[0];D!==we&&Xe(D,we)},[De]),(0,u.useLayoutUpdateEffect)(function(){d(f)||q(f)},[f]);var Qe=(0,i.default)(function(we,Ke){q(we,Ke),We([me],Ke)});return[Je,Qe]}},78423:function(t,o,e){"use strict";var s=e(75263).default,l=e(64836).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=u;var r=l(e(27424)),i=s(e(67294));function u(a){var d=i.useRef(!1),c=i.useState(a),p=(0,r.default)(c,2),v=p[0],S=p[1];i.useEffect(function(){return d.current=!1,function(){d.current=!0}},[]);function m(f,b){b&&d.current||S(f)}return[v,m]}},64543:function(t,o){"use strict";var e;e={value:!0},o.Z=void 0;var s=function(p){return+setTimeout(p,16)},l=function(p){return clearTimeout(p)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(s=function(p){return window.requestAnimationFrame(p)},l=function(p){return window.cancelAnimationFrame(p)});var r=0,i=new Map;function u(c){i.delete(c)}var a=function(p){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;r+=1;var S=r;function m(f){if(f===0)u(S),p();else{var b=s(function(){m(f-1)});i.set(S,b)}}return m(v),S};a.cancel=function(c){var p=i.get(c);return u(c),l(p)};var d=o.Z=a},73897:function(t){function o(e,s){(s==null||s>e.length)&&(s=e.length);for(var l=0,r=Array(s);l<s;l++)r[l]=e[l];return r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},85372:function(t){function o(e){if(Array.isArray(e))return e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},38416:function(t,o,e){var s=e(64062);function l(r,i,u){return(i=s(i))in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u,r}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},64836:function(t){function o(e){return e&&e.__esModule?e:{default:e}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},75263:function(t,o,e){var s=e(18698).default;function l(r,i){if(typeof WeakMap=="function")var u=new WeakMap,a=new WeakMap;return(t.exports=l=function(c,p){if(!p&&c&&c.__esModule)return c;var v,S,m={__proto__:null,default:c};if(c===null||s(c)!="object"&&typeof c!="function")return m;if(v=p?a:u){if(v.has(c))return v.get(c);v.set(c,m)}for(var f in c)f!=="default"&&{}.hasOwnProperty.call(c,f)&&((S=(v=Object.defineProperty)&&Object.getOwnPropertyDescriptor(c,f))&&(S.get||S.set)?v(m,f,S):m[f]=c[f]);return m},t.exports.__esModule=!0,t.exports.default=t.exports)(r,i)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},68872:function(t){function o(e,s){var l=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(l!=null){var r,i,u,a,d=[],c=!0,p=!1;try{if(u=(l=l.call(e)).next,s===0){if(Object(l)!==l)return;c=!1}else for(;!(c=(r=u.call(l)).done)&&(d.push(r.value),d.length!==s);c=!0);}catch(v){p=!0,i=v}finally{try{if(!c&&l.return!=null&&(a=l.return(),Object(a)!==a))return}finally{if(p)throw i}}return d}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},12218:function(t){function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},42122:function(t,o,e){var s=e(38416);function l(i,u){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);u&&(d=d.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),a.push.apply(a,d)}return a}function r(i){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?l(Object(a),!0).forEach(function(d){s(i,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(a,d))})}return i}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},70215:function(t,o,e){var s=e(7071);function l(r,i){if(r==null)return{};var u,a,d=s(r,i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(a=0;a<c.length;a++)u=c[a],i.indexOf(u)===-1&&{}.propertyIsEnumerable.call(r,u)&&(d[u]=r[u])}return d}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){function o(e,s){if(e==null)return{};var l={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(s.indexOf(r)!==-1)continue;l[r]=e[r]}return l}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},27424:function(t,o,e){var s=e(85372),l=e(68872),r=e(86116),i=e(12218);function u(a,d){return s(a)||l(a,d)||r(a,d)||i()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},95036:function(t,o,e){var s=e(18698).default;function l(r,i){if(s(r)!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var a=u.call(r,i||"default");if(s(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},64062:function(t,o,e){var s=e(18698).default,l=e(95036);function r(i){var u=l(i,"string");return s(u)=="symbol"?u:u+""}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},18698:function(t){function o(e){"@babel/helpers - typeof";return t.exports=o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},t.exports.__esModule=!0,t.exports.default=t.exports,o(e)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},86116:function(t,o,e){var s=e(73897);function l(r,i){if(r){if(typeof r=="string")return s(r,i);var u={}.toString.call(r).slice(8,-1);return u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set"?Array.from(r):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?s(r,i):void 0}}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},96446:function(t,o,e){var s=e(37923);function l(r){if(Array.isArray(r))return s(r)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},96936:function(t){function o(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},88619:function(t){function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},13769:function(t,o,e){var s=e(48541);function l(r,i){if(r==null)return{};var u=s(r,i),a,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(d=0;d<c.length;d++)a=c[d],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(u[a]=r[a])}return u}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},48541:function(t){function o(e,s){if(e==null)return{};var l={},r=Object.keys(e),i,u;for(u=0;u<r.length;u++)i=r[u],!(s.indexOf(i)>=0)&&(l[i]=e[i]);return l}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},19632:function(t,o,e){var s=e(96446),l=e(96936),r=e(96263),i=e(88619);function u(a){return s(a)||l(a)||r(a)||i()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
