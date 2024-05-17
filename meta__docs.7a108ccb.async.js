(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[904],{15187:function(t,a,e){"use strict";e.r(a),e.d(a,{demos:function(){return o}});var c=e(7557),i=e.n(c),u=e(41498),n=e.n(u),s=e(21739),o={"docs-demo-simple-demo-simple":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,38437))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64815).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.7.0"}},entry:"index.tsx"},context:{react:e(21739),"rc-textarea":e(64342)},renderOpts:{compile:function(){var l=n()(i()().mark(function p(){var v,I=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(179).then(e.bind(e,17179));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,I));case 3:case"end":return d.stop()}},p)}));function f(){return l.apply(this,arguments)}return f}()}},"docs-demo-simple-demo-autosize":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,35760))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32424).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.7.0"}},entry:"index.tsx"},context:{react:e(21739),"rc-textarea":e(64342)},renderOpts:{compile:function(){var l=n()(i()().mark(function p(){var v,I=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(179).then(e.bind(e,17179));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,I));case 3:case"end":return d.stop()}},p)}));function f(){return l.apply(this,arguments)}return f}()}},"docs-demo-simple-demo-allowclear":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,99308))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13890).Z},"rc-textarea":{type:"NPM",value:"1.7.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"rc-textarea":e(64342),react:e(21739)},renderOpts:{compile:function(){var l=n()(i()().mark(function p(){var v,I=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(179).then(e.bind(e,17179));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,I));case 3:case"end":return d.stop()}},p)}));function f(){return l.apply(this,arguments)}return f}()}},"docs-demo-simple-demo-showcount":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,74368))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(28789).Z},"rc-textarea":{type:"NPM",value:"1.7.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(65033).Z}},entry:"index.tsx"},context:{"rc-textarea":e(64342),react:e(21739),"../../assets/index.less":e(48194)},renderOpts:{compile:function(){var l=n()(i()().mark(function p(){var v,I=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(179).then(e.bind(e,17179));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,I));case 3:case"end":return d.stop()}},p)}));function f(){return l.apply(this,arguments)}return f}()}}}},23408:function(t,a,e){"use strict";e.r(a),e.d(a,{demos:function(){return i}});var c=e(21739),i={}},64342:function(t,a,e){"use strict";e.r(a),e.d(a,{ResizableTextArea:function(){return qe},default:function(){return mt}});var c=e(85573),i=e.n(c),u=e(82242),n=e.n(u),s=e(37205),o=e.n(s),l=e(79800),f=e.n(l),p=e(39647),v=e.n(p),I=e(92310),y=e.n(I),d=e(43595),w=e(1565),E=e(22386),H=e(62548),x=e(21739);function D(r){return!!(r.addonBefore||r.addonAfter)}function q(r){return!!(r.prefix||r.suffix||r.allowClear)}function ye(r,h,m){var g=h.cloneNode(!0),S=Object.create(r,{target:{value:g},currentTarget:{value:g}});return g.value=m,typeof h.selectionStart=="number"&&typeof h.selectionEnd=="number"&&(g.selectionStart=h.selectionStart,g.selectionEnd=h.selectionEnd),S}function Ge(r,h,m,g){if(m){var S=h;if(h.type==="click"){S=ye(h,r,""),m(S);return}if(r.type!=="file"&&g!==void 0){S=ye(h,r,g),m(S);return}m(S)}}function Ye(r,h){if(r){r.focus(h);var m=h||{},g=m.cursor;if(g){var S=r.value.length;switch(g){case"start":r.setSelectionRange(0,0);break;case"end":r.setSelectionRange(S,S);break;default:r.setSelectionRange(0,S)}}}}var Ve=x.forwardRef(function(r,h){var m,g,S=r.inputElement,M=r.children,P=r.prefixCls,z=r.prefix,j=r.suffix,$=r.addonBefore,N=r.addonAfter,X=r.className,V=r.style,Q=r.disabled,F=r.readOnly,fe=r.focused,ue=r.triggerFocus,G=r.allowClear,ee=r.value,se=r.handleReset,_=r.hidden,A=r.classes,R=r.classNames,te=r.dataAttrs,L=r.styles,O=r.components,Se=M!=null?M:S,be=(O==null?void 0:O.affixWrapper)||"span",ie=(O==null?void 0:O.groupWrapper)||"span",k=(O==null?void 0:O.wrapper)||"span",ne=(O==null?void 0:O.groupAddon)||"span",pe=(0,x.useRef)(null),ve=function(ge){var Ae;(Ae=pe.current)!==null&&Ae!==void 0&&Ae.contains(ge.target)&&(ue==null||ue())},Ce=q(r),W=(0,x.cloneElement)(Se,{value:ee,className:y()(Se.props.className,!Ce&&(R==null?void 0:R.variant))||null}),oe=(0,x.useRef)(null);if(x.useImperativeHandle(h,function(){return{nativeElement:oe.current||pe.current}}),Ce){var Y,le=null;if(G){var ce,we=!Q&&!F&&ee,re="".concat(P,"-clear-icon"),B=(0,H.Z)(G)==="object"&&G!==null&&G!==void 0&&G.clearIcon?G.clearIcon:"\u2716";le=x.createElement("span",{onClick:se,onMouseDown:function(ge){return ge.preventDefault()},className:y()(re,(ce={},(0,E.Z)(ce,"".concat(re,"-hidden"),!we),(0,E.Z)(ce,"".concat(re,"-has-suffix"),!!j),ce)),role:"button",tabIndex:-1},B)}var b="".concat(P,"-affix-wrapper"),Ie=y()(b,(Y={},(0,E.Z)(Y,"".concat(P,"-disabled"),Q),(0,E.Z)(Y,"".concat(b,"-disabled"),Q),(0,E.Z)(Y,"".concat(b,"-focused"),fe),(0,E.Z)(Y,"".concat(b,"-readonly"),F),(0,E.Z)(Y,"".concat(b,"-input-with-clear-btn"),j&&G&&ee),Y),A==null?void 0:A.affixWrapper,R==null?void 0:R.affixWrapper,R==null?void 0:R.variant),Pe=(j||G)&&x.createElement("span",{className:y()("".concat(P,"-suffix"),R==null?void 0:R.suffix),style:L==null?void 0:L.suffix},le,j);W=x.createElement(be,(0,w.Z)({className:Ie,style:L==null?void 0:L.affixWrapper,onClick:ve},te==null?void 0:te.affixWrapper,{ref:pe}),z&&x.createElement("span",{className:y()("".concat(P,"-prefix"),R==null?void 0:R.prefix),style:L==null?void 0:L.prefix},z),W,Pe)}if(D(r)){var de="".concat(P,"-group"),me="".concat(de,"-addon"),Me="".concat(de,"-wrapper"),Z=y()("".concat(P,"-wrapper"),de,A==null?void 0:A.wrapper,R==null?void 0:R.wrapper),xe=y()(Me,(0,E.Z)({},"".concat(Me,"-disabled"),Q),A==null?void 0:A.group,R==null?void 0:R.groupWrapper);W=x.createElement(ie,{className:xe,ref:oe},x.createElement(k,{className:Z},$&&x.createElement(ne,{className:me},$),W,N&&x.createElement(ne,{className:me},N)))}return x.cloneElement(W,{className:y()((m=W.props)===null||m===void 0?void 0:m.className,X)||null,style:(0,d.Z)((0,d.Z)({},(g=W.props)===null||g===void 0?void 0:g.style),V),hidden:_})}),Te=Ve,Fe=e(37683),Le=null;function Je(r,h){if(!h.max)return!0;var m=h.strategy(r);return m<=h.max}function Oe(r,h){return React.useMemo(function(){var m={};h&&(m.show=_typeof(h)==="object"&&h.formatter?h.formatter:!!h),m=_objectSpread(_objectSpread({},m),r);var g=m,S=g.show,M=_objectWithoutProperties(g,Le);return _objectSpread(_objectSpread({},M),{},{show:!!S,showFormatter:typeof S=="function"?S:void 0,strategy:M.strategy||function(P){return P.length}})},[r,h])}var De=null,ht=null,yt=null,Rt=null,nt=e(1576),Xe=e(9367),Qe=e(98099),rt=e(31468),at=e.n(rt),ot=e(10933),_e=e(83480),ke=e(90770),ut=`
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
`,st=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],We={},J;function it(r){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=r.getAttribute("id")||r.getAttribute("data-reactid")||r.getAttribute("name");if(h&&We[m])return We[m];var g=window.getComputedStyle(r),S=g.getPropertyValue("box-sizing")||g.getPropertyValue("-moz-box-sizing")||g.getPropertyValue("-webkit-box-sizing"),M=parseFloat(g.getPropertyValue("padding-bottom"))+parseFloat(g.getPropertyValue("padding-top")),P=parseFloat(g.getPropertyValue("border-bottom-width"))+parseFloat(g.getPropertyValue("border-top-width")),z=st.map(function($){return"".concat($,":").concat(g.getPropertyValue($))}).join(";"),j={sizingStyle:z,paddingSize:M,borderSize:P,boxSizing:S};return h&&m&&(We[m]=j),j}function lt(r){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;J||(J=document.createElement("textarea"),J.setAttribute("tab-index","-1"),J.setAttribute("aria-hidden","true"),document.body.appendChild(J)),r.getAttribute("wrap")?J.setAttribute("wrap",r.getAttribute("wrap")):J.removeAttribute("wrap");var S=it(r,h),M=S.paddingSize,P=S.borderSize,z=S.boxSizing,j=S.sizingStyle;J.setAttribute("style","".concat(j,";").concat(ut)),J.value=r.value||r.placeholder||"";var $=void 0,N=void 0,X,V=J.scrollHeight;if(z==="border-box"?V+=P:z==="content-box"&&(V-=M),m!==null||g!==null){J.value=" ";var Q=J.scrollHeight-M;m!==null&&($=Q*m,z==="border-box"&&($=$+M+P),V=Math.max($,V)),g!==null&&(N=Q*g,z==="border-box"&&(N=N+M+P),X=V>N?"":"hidden",V=Math.min(N,V))}var F={height:V,overflowY:X,resize:"none"};return $&&(F.minHeight=$),N&&(F.maxHeight=N),F}var Re=e(27174),ct=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Be=0,Ze=1,Ke=2,dt=x.forwardRef(function(r,h){var m=r,g=m.prefixCls,S=m.onPressEnter,M=m.defaultValue,P=m.value,z=m.autoSize,j=m.onResize,$=m.className,N=m.style,X=m.disabled,V=m.onChange,Q=m.onInternalAutoSize,F=v()(m,ct),fe=(0,Qe.Z)(M,{value:P,postState:function(b){return b!=null?b:""}}),ue=f()(fe,2),G=ue[0],ee=ue[1],se=function(b){ee(b.target.value),V==null||V(b)},_=x.useRef();x.useImperativeHandle(h,function(){return{textArea:_.current}});var A=x.useMemo(function(){return z&&at()(z)==="object"?[z.minRows,z.maxRows]:[]},[z]),R=f()(A,2),te=R[0],L=R[1],O=!!z,Se=function(){try{if(document.activeElement===_.current){var b=_.current,Ie=b.selectionStart,Pe=b.selectionEnd,de=b.scrollTop;_.current.setSelectionRange(Ie,Pe),_.current.scrollTop=de}}catch(me){}},be=x.useState(Ke),ie=f()(be,2),k=ie[0],ne=ie[1],pe=x.useState(),ve=f()(pe,2),Ce=ve[0],W=ve[1],oe=function(){ne(Be)};(0,_e.default)(function(){O&&oe()},[P,te,L,O]),(0,_e.default)(function(){if(k===Be)ne(Ze);else if(k===Ze){var B=lt(_.current,!1,te,L);ne(Ke),W(B)}else Se()},[k]);var Y=x.useRef(),le=function(){ke.Z.cancel(Y.current)},ce=function(b){k===Ke&&(j==null||j(b),z&&(le(),Y.current=(0,ke.Z)(function(){oe()})))};x.useEffect(function(){return le},[]);var we=O?Ce:null,re=n()(n()({},N),we);return(k===Be||k===Ze)&&(re.overflowY="hidden",re.overflowX="hidden"),(0,Re.jsx)(ot.Z,{onResize:ce,disabled:!(z||j),children:(0,Re.jsx)("textarea",n()(n()({},F),{},{ref:_,style:re,className:y()(g,$,i()({},"".concat(g,"-disabled"),X)),disabled:X,value:G,onChange:se}))})}),qe=dt,ft=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","readOnly"],pt=x.forwardRef(function(r,h){var m,g=r.defaultValue,S=r.value,M=r.onFocus,P=r.onBlur,z=r.onChange,j=r.allowClear,$=r.maxLength,N=r.onCompositionStart,X=r.onCompositionEnd,V=r.suffix,Q=r.prefixCls,F=Q===void 0?"rc-textarea":Q,fe=r.showCount,ue=r.count,G=r.className,ee=r.style,se=r.disabled,_=r.hidden,A=r.classNames,R=r.styles,te=r.onResize,L=r.readOnly,O=v()(r,ft),Se=(0,Qe.Z)(g,{value:S,defaultValue:g}),be=f()(Se,2),ie=be[0],k=be[1],ne=ie==null?"":String(ie),pe=x.useState(!1),ve=f()(pe,2),Ce=ve[0],W=ve[1],oe=x.useRef(!1),Y=x.useState(null),le=f()(Y,2),ce=le[0],we=le[1],re=(0,x.useRef)(null),B=(0,x.useRef)(null),b=function(){var C;return(C=B.current)===null||C===void 0?void 0:C.textArea},Ie=function(){b().focus()};(0,x.useImperativeHandle)(h,function(){var T;return{resizableTextArea:B.current,focus:Ie,blur:function(){b().blur()},nativeElement:((T=re.current)===null||T===void 0?void 0:T.nativeElement)||b()}}),(0,x.useEffect)(function(){W(function(T){return!se&&T})},[se]);var Pe=x.useState(null),de=f()(Pe,2),me=de[0],Me=de[1];x.useEffect(function(){if(me){var T;(T=b()).setSelectionRange.apply(T,o()(me))}},[me]);var Z=(0,nt.ZP)(ue,fe),xe=(m=Z.max)!==null&&m!==void 0?m:$,$e=Number(xe)>0,ge=Z.strategy(ne),Ae=!!xe&&ge>xe,Ue=function(C,ae){var he=ae;!oe.current&&Z.exceedFormatter&&Z.max&&Z.strategy(ae)>Z.max&&(he=Z.exceedFormatter(ae,{max:Z.max}),ae!==he&&Me([b().selectionStart||0,b().selectionEnd||0])),k(he),(0,Xe.rJ)(C.currentTarget,C,z,he)},et=function(C){oe.current=!0,N==null||N(C)},tt=function(C){oe.current=!1,Ue(C,C.currentTarget.value),X==null||X(C)},K=function(C){Ue(C,C.target.value)},U=function(C){var ae=O.onPressEnter,he=O.onKeyDown;C.key==="Enter"&&ae&&ae(C),he==null||he(C)},Ee=function(C){W(!0),M==null||M(C)},Ne=function(C){W(!1),P==null||P(C)},He=function(C){k(""),Ie(),(0,Xe.rJ)(b(),C,z)},je=V,ze;Z.show&&(Z.showFormatter?ze=Z.showFormatter({value:ne,count:ge,maxLength:xe}):ze="".concat(ge).concat($e?" / ".concat(xe):""),je=(0,Re.jsxs)(Re.Fragment,{children:[je,(0,Re.jsx)("span",{className:y()("".concat(F,"-data-count"),A==null?void 0:A.count),style:R==null?void 0:R.count,children:ze})]}));var xt=function(C){var ae;te==null||te(C),(ae=b())!==null&&ae!==void 0&&ae.style.height&&we(!0)},gt=!O.autoSize&&!fe&&!j;return(0,Re.jsx)(Te,{ref:re,value:ne,allowClear:j,handleReset:He,suffix:je,prefixCls:F,classNames:n()(n()({},A),{},{affixWrapper:y()(A==null?void 0:A.affixWrapper,i()(i()({},"".concat(F,"-show-count"),fe),"".concat(F,"-textarea-allow-clear"),j))}),disabled:se,focused:Ce,className:y()(G,Ae&&"".concat(F,"-out-of-range")),style:n()(n()({},ee),ce&&!gt?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof ze=="string"?ze:void 0}},hidden:_,readOnly:L,children:(0,Re.jsx)(qe,n()(n()({},O),{},{maxLength:$,onKeyDown:U,onChange:K,onFocus:Ee,onBlur:Ne,onCompositionStart:et,onCompositionEnd:tt,className:y()(A==null?void 0:A.textarea),style:n()(n()({},R==null?void 0:R.textarea),{},{resize:ee==null?void 0:ee.resize}),disabled:se,prefixCls:F,onResize:xt,ref:B,readOnly:L}))})}),vt=pt,mt=vt},48194:function(t,a,e){"use strict";e.r(a)},89161:function(t,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return c}});const c=[]},64862:function(t,a,e){"use strict";e.r(a),e.d(a,{texts:function(){return c}});const c=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},65033:function(t,a){"use strict";a.Z=`@textarea-prefix-cls: rc-textarea;

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
`},13890:function(t,a){"use strict";a.Z=`/* eslint-disable no-console */
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
`},32424:function(t,a){"use strict";a.Z=`/* eslint-disable no-console */
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
`},28789:function(t,a){"use strict";a.Z=`/* eslint-disable no-console */
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
`},64815:function(t,a){"use strict";a.Z=`/* eslint-disable no-console */
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
`},1576:function(t,a,e){"use strict";var c,i=e(98404),u=e(87552);c={value:!0},a.ZP=y,c=I;var n=i(e(49429)),s=i(e(11245)),o=i(e(87552)),l=v(e(21739)),f=["show"];function p(d){if(typeof WeakMap!="function")return null;var w=new WeakMap,E=new WeakMap;return(p=function(x){return x?E:w})(d)}function v(d,w){if(!w&&d&&d.__esModule)return d;if(d===null||u(d)!="object"&&typeof d!="function")return{default:d};var E=p(w);if(E&&E.has(d))return E.get(d);var H={__proto__:null},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in d)if(D!=="default"&&Object.prototype.hasOwnProperty.call(d,D)){var q=x?Object.getOwnPropertyDescriptor(d,D):null;q&&(q.get||q.set)?Object.defineProperty(H,D,q):H[D]=d[D]}return H.default=d,E&&E.set(d,H),H}function I(d,w){if(!w.max)return!0;var E=w.strategy(d);return E<=w.max}function y(d,w){return l.useMemo(function(){var E={};w&&(E.show=(0,o.default)(w)==="object"&&w.formatter?w.formatter:!!w),E=(0,s.default)((0,s.default)({},E),d);var H=E,x=H.show,D=(0,n.default)(H,f);return(0,s.default)((0,s.default)({},D),{},{show:!!x,showFormatter:typeof x=="function"?x:void 0,strategy:D.strategy||function(q){return q.length}})},[d,w])}},9367:function(t,a){"use strict";var e;e={value:!0},e=c,e=i,a.rJ=n,e=s;function c(o){return!!(o.addonBefore||o.addonAfter)}function i(o){return!!(o.prefix||o.suffix||o.allowClear)}function u(o,l,f){var p=l.cloneNode(!0),v=Object.create(o,{target:{value:p},currentTarget:{value:p}});return p.value=f,typeof l.selectionStart=="number"&&typeof l.selectionEnd=="number"&&(p.selectionStart=l.selectionStart,p.selectionEnd=l.selectionEnd),v}function n(o,l,f,p){if(f){var v=l;if(l.type==="click"){v=u(l,o,""),f(v);return}if(o.type!=="file"&&p!==void 0){v=u(l,o,p),f(v);return}f(v)}}function s(o,l){if(o){o.focus(l);var f=l||{},p=f.cursor;if(p){var v=o.value.length;switch(p){case"start":o.setSelectionRange(0,0);break;case"end":o.setSelectionRange(v,v);break;default:o.setSelectionRange(0,v)}}}}},59089:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},98114:function(t,a,e){"use strict";var c=e(78630).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;var i=c(e(21739));function u(n){var s=i.useRef();s.current=n;var o=i.useCallback(function(){for(var l,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(l=s.current)===null||l===void 0?void 0:l.call.apply(l,[s].concat(p))},[]);return o}},83480:function(t,a,e){"use strict";var c=e(98404).default,i=e(78630).default;Object.defineProperty(a,"__esModule",{value:!0}),a.useLayoutUpdateEffect=a.default=void 0;var u=i(e(21739)),n=c(e(59089)),s=(0,n.default)()?u.useLayoutEffect:u.useEffect,o=function(v,I){var y=u.useRef(!0);s(function(){return v(y.current)},I),s(function(){return y.current=!1,function(){y.current=!0}},[])},l=a.useLayoutUpdateEffect=function(v,I){o(function(y){if(!y)return v()},I)},f=a.default=o},98099:function(t,a,e){"use strict";var c,i=e(98404).default;c={value:!0},a.Z=f;var u=i(e(89601)),n=i(e(98114)),s=e(83480),o=i(e(45135));function l(p){return p!==void 0}function f(p,v){var I=v||{},y=I.defaultValue,d=I.value,w=I.onChange,E=I.postState,H=(0,o.default)(function(){return l(d)?d:l(y)?typeof y=="function"?y():y:typeof p=="function"?p():p}),x=(0,u.default)(H,2),D=x[0],q=x[1],ye=d!==void 0?d:D,Ge=E?E(ye):ye,Ye=(0,n.default)(w),Ve=(0,o.default)([ye]),Te=(0,u.default)(Ve,2),Fe=Te[0],Le=Te[1];(0,s.useLayoutUpdateEffect)(function(){var Oe=Fe[0];D!==Oe&&Ye(D,Oe)},[Fe]),(0,s.useLayoutUpdateEffect)(function(){l(d)||q(d)},[d]);var Je=(0,n.default)(function(Oe,De){q(Oe,De),Le([ye],De)});return[Ge,Je]}},45135:function(t,a,e){"use strict";var c=e(78630).default,i=e(98404).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var u=i(e(89601)),n=c(e(21739));function s(o){var l=n.useRef(!1),f=n.useState(o),p=(0,u.default)(f,2),v=p[0],I=p[1];n.useEffect(function(){return l.current=!1,function(){l.current=!0}},[]);function y(d,w){w&&l.current||I(d)}return[v,y]}},90770:function(t,a){"use strict";var e;e={value:!0},a.Z=void 0;var c=function(p){return+setTimeout(p,16)},i=function(p){return clearTimeout(p)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(c=function(p){return window.requestAnimationFrame(p)},i=function(p){return window.cancelAnimationFrame(p)});var u=0,n=new Map;function s(f){n.delete(f)}var o=function(p){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;u+=1;var I=u;function y(d){if(d===0)s(I),p();else{var w=c(function(){y(d-1)});n.set(I,w)}}return y(v),I};o.cancel=function(f){var p=n.get(f);return s(f),i(p)};var l=a.Z=o},61004:function(t,a,e){var c=e(39572);function i(u){if(Array.isArray(u))return c(u)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},97012:function(t){function a(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},93215:function(t){function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},39647:function(t,a,e){var c=e(32890);function i(u,n){if(u==null)return{};var s=c(u,n),o,l;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(u);for(l=0;l<f.length;l++)o=f[l],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(u,o)&&(s[o]=u[o])}return s}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},32890:function(t){function a(e,c){if(e==null)return{};var i={},u=Object.keys(e),n,s;for(s=0;s<u.length;s++)n=u[s],!(c.indexOf(n)>=0)&&(i[n]=e[n]);return i}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},37205:function(t,a,e){var c=e(61004),i=e(97012),u=e(66109),n=e(93215);function s(o){return c(o)||i(o)||u(o)||n()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},6648:function(t){function a(e,c){(c==null||c>e.length)&&(c=e.length);for(var i=0,u=new Array(c);i<c;i++)u[i]=e[i];return u}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},19051:function(t){function a(e){if(Array.isArray(e))return e}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},24602:function(t,a,e){var c=e(22692);function i(u,n,s){return n=c(n),n in u?Object.defineProperty(u,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):u[n]=s,u}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},98404:function(t){function a(e){return e&&e.__esModule?e:{default:e}}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},78630:function(t,a,e){var c=e(87552).default;function i(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,o=new WeakMap;return(i=function(f){return f?o:s})(n)}function u(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||c(n)!="object"&&typeof n!="function")return{default:n};var o=i(s);if(o&&o.has(n))return o.get(n);var l={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in n)if(p!=="default"&&{}.hasOwnProperty.call(n,p)){var v=f?Object.getOwnPropertyDescriptor(n,p):null;v&&(v.get||v.set)?Object.defineProperty(l,p,v):l[p]=n[p]}return l.default=n,o&&o.set(n,l),l}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},16662:function(t){function a(e,c){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var u,n,s,o,l=[],f=!0,p=!1;try{if(s=(i=i.call(e)).next,c===0){if(Object(i)!==i)return;f=!1}else for(;!(f=(u=s.call(i)).done)&&(l.push(u.value),l.length!==c);f=!0);}catch(v){p=!0,n=v}finally{try{if(!f&&i.return!=null&&(o=i.return(),Object(o)!==o))return}finally{if(p)throw n}}return l}}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},72356:function(t){function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},11245:function(t,a,e){var c=e(24602);function i(n,s){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);s&&(l=l.filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable})),o.push.apply(o,l)}return o}function u(n){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?i(Object(o),!0).forEach(function(l){c(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},49429:function(t,a,e){var c=e(90824);function i(u,n){if(u==null)return{};var s=c(u,n),o,l;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(u);for(l=0;l<f.length;l++)o=f[l],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(u,o)&&(s[o]=u[o])}return s}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},90824:function(t){function a(e,c){if(e==null)return{};var i={};for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){if(c.indexOf(u)>=0)continue;i[u]=e[u]}return i}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},89601:function(t,a,e){var c=e(19051),i=e(16662),u=e(2498),n=e(72356);function s(o,l){return c(o)||i(o,l)||u(o,l)||n()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},49907:function(t,a,e){var c=e(87552).default;function i(u,n){if(c(u)!="object"||!u)return u;var s=u[Symbol.toPrimitive];if(s!==void 0){var o=s.call(u,n||"default");if(c(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(u)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},22692:function(t,a,e){var c=e(87552).default,i=e(49907);function u(n){var s=i(n,"string");return c(s)=="symbol"?s:s+""}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},87552:function(t){function a(e){"@babel/helpers - typeof";return t.exports=a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},t.exports.__esModule=!0,t.exports.default=t.exports,a(e)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},2498:function(t,a,e){var c=e(6648);function i(u,n){if(u){if(typeof u=="string")return c(u,n);var s=Object.prototype.toString.call(u).slice(8,-1);if(s==="Object"&&u.constructor&&(s=u.constructor.name),s==="Map"||s==="Set")return Array.from(u);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(u,n)}}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
