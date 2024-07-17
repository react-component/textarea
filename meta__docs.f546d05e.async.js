(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[904],{70716:function(t,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return l}});var c=e(7557),s=e.n(c),a=e(41498),n=e.n(a),o=e(21739),i=e(82797),l={"docs-demo-simple-demo-simple":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1753))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38164).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.8.0"}},entry:"index.tsx"},context:{react:e(21739),"rc-textarea":e(65389)},renderOpts:{compile:function(){var d=n()(s()().mark(function v(){var b,h=arguments;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(464).then(e.bind(e,22464));case 2:return p.abrupt("return",(b=p.sent).default.apply(b,h));case 3:case"end":return p.stop()}},v)}));function f(){return d.apply(this,arguments)}return f}()}},"docs-demo-simple-demo-autosize":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50020))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40991).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.8.0"}},entry:"index.tsx"},context:{react:e(21739),"rc-textarea":e(65389)},renderOpts:{compile:function(){var d=n()(s()().mark(function v(){var b,h=arguments;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(464).then(e.bind(e,22464));case 2:return p.abrupt("return",(b=p.sent).default.apply(b,h));case 3:case"end":return p.stop()}},v)}));function f(){return d.apply(this,arguments)}return f}()}},"docs-demo-simple-demo-allowclear":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97838))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42163).Z},"rc-textarea":{type:"NPM",value:"1.8.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"rc-textarea":e(65389),react:e(21739)},renderOpts:{compile:function(){var d=n()(s()().mark(function v(){var b,h=arguments;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(464).then(e.bind(e,22464));case 2:return p.abrupt("return",(b=p.sent).default.apply(b,h));case 3:case"end":return p.stop()}},v)}));function f(){return d.apply(this,arguments)}return f}()}},"docs-demo-simple-demo-showcount":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,54383))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58213).Z},"rc-textarea":{type:"NPM",value:"1.8.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(72119).Z}},entry:"index.tsx"},context:{"rc-textarea":e(65389),react:e(21739),"../../assets/index.less":e(65403)},renderOpts:{compile:function(){var d=n()(s()().mark(function v(){var b,h=arguments;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(464).then(e.bind(e,22464));case 2:return p.abrupt("return",(b=p.sent).default.apply(b,h));case 3:case"end":return p.stop()}},v)}));function f(){return d.apply(this,arguments)}return f}()}}}},70973:function(t,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return a}});var c=e(21739),s=e(4e4),a={}},65389:function(t,u,e){"use strict";e.r(u),e.d(u,{ResizableTextArea:function(){return et},default:function(){return xt}});var c=e(85573),s=e.n(c),a=e(82242),n=e.n(a),o=e(37205),i=e.n(o),l=e(79800),d=e.n(l),f=e(39647),v=e.n(f),b=e(92310),h=e.n(b),g=e(71930),p=e(15250),w=e(97326),_=e(75253),x=e(21739);function D(r){return!!(r.addonBefore||r.addonAfter)}function ee(r){return!!(r.prefix||r.suffix||r.allowClear)}function ge(r,R,m){var y=R.cloneNode(!0),C=Object.create(r,{target:{value:y},currentTarget:{value:y}});return y.value=m,typeof R.selectionStart=="number"&&typeof R.selectionEnd=="number"&&(y.selectionStart=R.selectionStart,y.selectionEnd=R.selectionEnd),y.setSelectionRange=function(){R.setSelectionRange.apply(R,arguments)},C}function Ge(r,R,m,y){if(m){var C=R;if(R.type==="click"){C=ge(R,r,""),m(C);return}if(r.type!=="file"&&y!==void 0){C=ge(R,r,y),m(C);return}m(C)}}function Ye(r,R){if(r){r.focus(R);var m=R||{},y=m.cursor;if(y){var C=r.value.length;switch(y){case"start":r.setSelectionRange(0,0);break;case"end":r.setSelectionRange(C,C);break;default:r.setSelectionRange(0,C)}}}}var Le=x.forwardRef(function(r,R){var m,y,C=r.inputElement,O=r.children,I=r.prefixCls,M=r.prefix,L=r.suffix,T=r.addonBefore,j=r.addonAfter,H=r.className,Z=r.style,G=r.disabled,V=r.readOnly,le=r.focused,de=r.triggerFocus,Y=r.allowClear,te=r.value,N=r.handleReset,Ie=r.hidden,P=r.classes,S=r.classNames,ne=r.dataAttrs,F=r.styles,$=r.components,re=r.onClear,fe=O!=null?O:C,Q=($==null?void 0:$.affixWrapper)||"span",oe=($==null?void 0:$.groupWrapper)||"span",ye=($==null?void 0:$.wrapper)||"span",ue=($==null?void 0:$.groupAddon)||"span",pe=(0,x.useRef)(null),Re=function(q){var Ae;(Ae=pe.current)!==null&&Ae!==void 0&&Ae.contains(q.target)&&(de==null||de())},ve=ee(r),W=(0,x.cloneElement)(fe,{value:te,className:h()(fe.props.className,!ve&&(S==null?void 0:S.variant))||null}),se=(0,x.useRef)(null);if(x.useImperativeHandle(R,function(){return{nativeElement:se.current||pe.current}}),ve){var Se=null;if(Y){var be=!G&&!V&&te,ie="".concat(I,"-clear-icon"),k=(0,_.Z)(Y)==="object"&&Y!==null&&Y!==void 0&&Y.clearIcon?Y.clearIcon:"\u2716";Se=x.createElement("span",{onClick:function(q){N==null||N(q),re==null||re()},onMouseDown:function(q){return q.preventDefault()},className:h()(ie,(0,w.Z)((0,w.Z)({},"".concat(ie,"-hidden"),!be),"".concat(ie,"-has-suffix"),!!L)),role:"button",tabIndex:-1},k)}var A="".concat(I,"-affix-wrapper"),me=h()(A,(0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)((0,w.Z)({},"".concat(I,"-disabled"),G),"".concat(A,"-disabled"),G),"".concat(A,"-focused"),le),"".concat(A,"-readonly"),V),"".concat(A,"-input-with-clear-btn"),L&&Y&&te),P==null?void 0:P.affixWrapper,S==null?void 0:S.affixWrapper,S==null?void 0:S.variant),J=(L||Y)&&x.createElement("span",{className:h()("".concat(I,"-suffix"),S==null?void 0:S.suffix),style:F==null?void 0:F.suffix},Se,L);W=x.createElement(Q,(0,p.Z)({className:me,style:F==null?void 0:F.affixWrapper,onClick:Re},ne==null?void 0:ne.affixWrapper,{ref:pe}),M&&x.createElement("span",{className:h()("".concat(I,"-prefix"),S==null?void 0:S.prefix),style:F==null?void 0:F.prefix},M),W,J)}if(D(r)){var ce="".concat(I,"-group"),Ee="".concat(ce,"-addon"),we="".concat(ce,"-wrapper"),Pe=h()("".concat(I,"-wrapper"),ce,P==null?void 0:P.wrapper,S==null?void 0:S.wrapper),Te=h()(we,(0,w.Z)({},"".concat(we,"-disabled"),G),P==null?void 0:P.group,S==null?void 0:S.groupWrapper);W=x.createElement(oe,{className:Te,ref:se},x.createElement(ye,{className:Pe},T&&x.createElement(ue,{className:Ee},T),W,j&&x.createElement(ue,{className:Ee},j)))}return x.cloneElement(W,{className:h()((m=W.props)===null||m===void 0?void 0:m.className,H)||null,style:(0,g.Z)((0,g.Z)({},(y=W.props)===null||y===void 0?void 0:y.style),Z),hidden:Ie})}),Me=Le,Ve=e(71366),Fe=null;function Je(r,R){if(!R.max)return!0;var m=R.strategy(r);return m<=R.max}function Oe(r,R){return React.useMemo(function(){var m={};R&&(m.show=_typeof(R)==="object"&&R.formatter?R.formatter:!!R),m=_objectSpread(_objectSpread({},m),r);var y=m,C=y.show,O=_objectWithoutProperties(y,Fe);return _objectSpread(_objectSpread({},O),{},{show:!!C,showFormatter:typeof C=="function"?C:void 0,strategy:O.strategy||function(I){return I.length}})},[r,R])}var De=null,yt=null,Rt=null,St=null,rt=e(78847),Xe=e(68528),Qe=e(32961),at=e(31468),ot=e.n(at),ut=e(10933),ke=e(40425),qe=e(79254),st=`
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
`,it=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],We={},X;function lt(r){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=r.getAttribute("id")||r.getAttribute("data-reactid")||r.getAttribute("name");if(R&&We[m])return We[m];var y=window.getComputedStyle(r),C=y.getPropertyValue("box-sizing")||y.getPropertyValue("-moz-box-sizing")||y.getPropertyValue("-webkit-box-sizing"),O=parseFloat(y.getPropertyValue("padding-bottom"))+parseFloat(y.getPropertyValue("padding-top")),I=parseFloat(y.getPropertyValue("border-bottom-width"))+parseFloat(y.getPropertyValue("border-top-width")),M=it.map(function(T){return"".concat(T,":").concat(y.getPropertyValue(T))}).join(";"),L={sizingStyle:M,paddingSize:O,borderSize:I,boxSizing:C};return R&&m&&(We[m]=L),L}function ct(r){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;X||(X=document.createElement("textarea"),X.setAttribute("tab-index","-1"),X.setAttribute("aria-hidden","true"),document.body.appendChild(X)),r.getAttribute("wrap")?X.setAttribute("wrap",r.getAttribute("wrap")):X.removeAttribute("wrap");var C=lt(r,R),O=C.paddingSize,I=C.borderSize,M=C.boxSizing,L=C.sizingStyle;X.setAttribute("style","".concat(L,";").concat(st)),X.value=r.value||r.placeholder||"";var T=void 0,j=void 0,H,Z=X.scrollHeight;if(M==="border-box"?Z+=I:M==="content-box"&&(Z-=O),m!==null||y!==null){X.value=" ";var G=X.scrollHeight-O;m!==null&&(T=G*m,M==="border-box"&&(T=T+O+I),Z=Math.max(T,Z)),y!==null&&(j=G*y,M==="border-box"&&(j=j+O+I),H=Z>j?"":"hidden",Z=Math.min(j,Z))}var V={height:Z,overflowY:H,resize:"none"};return T&&(V.minHeight=T),j&&(V.maxHeight=j),V}var he=e(27174),dt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Be=0,Ze=1,Ue=2,ft=x.forwardRef(function(r,R){var m=r,y=m.prefixCls,C=m.defaultValue,O=m.value,I=m.autoSize,M=m.onResize,L=m.className,T=m.style,j=m.disabled,H=m.onChange,Z=m.onInternalAutoSize,G=v()(m,dt),V=(0,Qe.Z)(C,{value:O,postState:function(A){return A!=null?A:""}}),le=d()(V,2),de=le[0],Y=le[1],te=function(A){Y(A.target.value),H==null||H(A)},N=x.useRef();x.useImperativeHandle(R,function(){return{textArea:N.current}});var Ie=x.useMemo(function(){return I&&ot()(I)==="object"?[I.minRows,I.maxRows]:[]},[I]),P=d()(Ie,2),S=P[0],ne=P[1],F=!!I,$=function(){try{if(document.activeElement===N.current){var A=N.current,me=A.selectionStart,J=A.selectionEnd,ce=A.scrollTop;N.current.setSelectionRange(me,J),N.current.scrollTop=ce}}catch(Ee){}},re=x.useState(Ue),fe=d()(re,2),Q=fe[0],oe=fe[1],ye=x.useState(),ue=d()(ye,2),pe=ue[0],Re=ue[1],ve=function(){oe(Be)};(0,ke.default)(function(){F&&ve()},[O,S,ne,F]),(0,ke.default)(function(){if(Q===Be)oe(Ze);else if(Q===Ze){var k=ct(N.current,!1,S,ne);oe(Ue),Re(k)}else $()},[Q]);var W=x.useRef(),se=function(){qe.Z.cancel(W.current)},Se=function(A){Q===Ue&&(M==null||M(A),I&&(se(),W.current=(0,qe.Z)(function(){ve()})))};x.useEffect(function(){return se},[]);var be=F?pe:null,ie=n()(n()({},T),be);return(Q===Be||Q===Ze)&&(ie.overflowY="hidden",ie.overflowX="hidden"),(0,he.jsx)(ut.Z,{onResize:Se,disabled:!(I||M),children:(0,he.jsx)("textarea",n()(n()({},G),{},{ref:N,style:ie,className:h()(y,L,s()({},"".concat(y,"-disabled"),j)),disabled:j,value:de,onChange:te}))})}),et=ft,pt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","readOnly"],vt=x.forwardRef(function(r,R){var m,y=r.defaultValue,C=r.value,O=r.onFocus,I=r.onBlur,M=r.onChange,L=r.allowClear,T=r.maxLength,j=r.onCompositionStart,H=r.onCompositionEnd,Z=r.suffix,G=r.prefixCls,V=G===void 0?"rc-textarea":G,le=r.showCount,de=r.count,Y=r.className,te=r.style,N=r.disabled,Ie=r.hidden,P=r.classNames,S=r.styles,ne=r.onResize,F=r.onClear,$=r.readOnly,re=v()(r,pt),fe=(0,Qe.Z)(y,{value:C,defaultValue:y}),Q=d()(fe,2),oe=Q[0],ye=Q[1],ue=oe==null?"":String(oe),pe=x.useState(!1),Re=d()(pe,2),ve=Re[0],W=Re[1],se=x.useRef(!1),Se=x.useState(null),be=d()(Se,2),ie=be[0],k=be[1],A=(0,x.useRef)(null),me=(0,x.useRef)(null),J=function(){var E;return(E=me.current)===null||E===void 0?void 0:E.textArea},ce=function(){J().focus()};(0,x.useImperativeHandle)(R,function(){var z;return{resizableTextArea:me.current,focus:ce,blur:function(){J().blur()},nativeElement:((z=A.current)===null||z===void 0?void 0:z.nativeElement)||J()}}),(0,x.useEffect)(function(){W(function(z){return!N&&z})},[N]);var Ee=x.useState(null),we=d()(Ee,2),Pe=we[0],Te=we[1];x.useEffect(function(){if(Pe){var z;(z=J()).setSelectionRange.apply(z,i()(Pe))}},[Pe]);var B=(0,rt.ZP)(de,le),q=(m=B.max)!==null&&m!==void 0?m:T,Ae=Number(q)>0,je=B.strategy(ue),tt=!!q&&je>q,Ke=function(E,ae){var xe=ae;!se.current&&B.exceedFormatter&&B.max&&B.strategy(ae)>B.max&&(xe=B.exceedFormatter(ae,{max:B.max}),ae!==xe&&Te([J().selectionStart||0,J().selectionEnd||0])),ye(xe),(0,Xe.rJ)(E.currentTarget,E,M,xe)},nt=function(E){se.current=!0,j==null||j(E)},U=function(E){se.current=!1,Ke(E,E.currentTarget.value),H==null||H(E)},K=function(E){Ke(E,E.target.value)},Ce=function(E){var ae=re.onPressEnter,xe=re.onKeyDown;E.key==="Enter"&&ae&&ae(E),xe==null||xe(E)},$e=function(E){W(!0),O==null||O(E)},_e=function(E){W(!1),I==null||I(E)},He=function(E){ye(""),ce(),(0,Xe.rJ)(J(),E,M)},Ne=Z,ze;B.show&&(B.showFormatter?ze=B.showFormatter({value:ue,count:je,maxLength:q}):ze="".concat(je).concat(Ae?" / ".concat(q):""),Ne=(0,he.jsxs)(he.Fragment,{children:[Ne,(0,he.jsx)("span",{className:h()("".concat(V,"-data-count"),P==null?void 0:P.count),style:S==null?void 0:S.count,children:ze})]}));var gt=function(E){var ae;ne==null||ne(E),(ae=J())!==null&&ae!==void 0&&ae.style.height&&k(!0)},ht=!re.autoSize&&!le&&!L;return(0,he.jsx)(Me,{ref:A,value:ue,allowClear:L,handleReset:He,suffix:Ne,prefixCls:V,classNames:n()(n()({},P),{},{affixWrapper:h()(P==null?void 0:P.affixWrapper,s()(s()({},"".concat(V,"-show-count"),le),"".concat(V,"-textarea-allow-clear"),L))}),disabled:N,focused:ve,className:h()(Y,tt&&"".concat(V,"-out-of-range")),style:n()(n()({},te),ie&&!ht?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof ze=="string"?ze:void 0}},hidden:Ie,readOnly:$,onClear:F,children:(0,he.jsx)(et,n()(n()({},re),{},{maxLength:T,onKeyDown:Ce,onChange:K,onFocus:$e,onBlur:_e,onCompositionStart:nt,onCompositionEnd:U,className:h()(P==null?void 0:P.textarea),style:n()(n()({},S==null?void 0:S.textarea),{},{resize:te==null?void 0:te.resize}),disabled:N,prefixCls:V,onResize:gt,ref:me,readOnly:$}))})}),mt=vt,xt=mt},65403:function(t,u,e){"use strict";e.r(u)},2254:function(t,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return s}});var c=e(82797);const s=[]},34454:function(t,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return s}});var c=e(4e4);const s=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},72119:function(t,u){"use strict";u.Z=`@textarea-prefix-cls: rc-textarea;

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
`},42163:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},40991:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},58213:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},38164:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},78847:function(t,u,e){"use strict";var c,s=e(56145),a=e(42418);c={value:!0},u.ZP=h,c=b;var n=s(e(39031)),o=s(e(19982)),i=s(e(42418)),l=v(e(21739)),d=["show"];function f(g){if(typeof WeakMap!="function")return null;var p=new WeakMap,w=new WeakMap;return(f=function(x){return x?w:p})(g)}function v(g,p){if(!p&&g&&g.__esModule)return g;if(g===null||a(g)!="object"&&typeof g!="function")return{default:g};var w=f(p);if(w&&w.has(g))return w.get(g);var _={__proto__:null},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in g)if(D!=="default"&&Object.prototype.hasOwnProperty.call(g,D)){var ee=x?Object.getOwnPropertyDescriptor(g,D):null;ee&&(ee.get||ee.set)?Object.defineProperty(_,D,ee):_[D]=g[D]}return _.default=g,w&&w.set(g,_),_}function b(g,p){if(!p.max)return!0;var w=p.strategy(g);return w<=p.max}function h(g,p){return l.useMemo(function(){var w={};p&&(w.show=(0,i.default)(p)==="object"&&p.formatter?p.formatter:!!p),w=(0,o.default)((0,o.default)({},w),g);var _=w,x=_.show,D=(0,n.default)(_,d);return(0,o.default)((0,o.default)({},D),{},{show:!!x,showFormatter:typeof x=="function"?x:void 0,strategy:D.strategy||function(ee){return ee.length}})},[g,p])}},68528:function(t,u){"use strict";var e;e={value:!0},e=c,e=s,u.rJ=n,e=o;function c(i){return!!(i.addonBefore||i.addonAfter)}function s(i){return!!(i.prefix||i.suffix||i.allowClear)}function a(i,l,d){var f=l.cloneNode(!0),v=Object.create(i,{target:{value:f},currentTarget:{value:f}});return f.value=d,typeof l.selectionStart=="number"&&typeof l.selectionEnd=="number"&&(f.selectionStart=l.selectionStart,f.selectionEnd=l.selectionEnd),f.setSelectionRange=function(){l.setSelectionRange.apply(l,arguments)},v}function n(i,l,d,f){if(d){var v=l;if(l.type==="click"){v=a(l,i,""),d(v);return}if(i.type!=="file"&&f!==void 0){v=a(l,i,f),d(v);return}d(v)}}function o(i,l){if(i){i.focus(l);var d=l||{},f=d.cursor;if(f){var v=i.value.length;switch(f){case"start":i.setSelectionRange(0,0);break;case"end":i.setSelectionRange(v,v);break;default:i.setSelectionRange(0,v)}}}}},90921:function(t,u){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},26177:function(t,u,e){"use strict";var c=e(49226).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=a;var s=c(e(21739));function a(n){var o=s.useRef();o.current=n;var i=s.useCallback(function(){for(var l,d=arguments.length,f=new Array(d),v=0;v<d;v++)f[v]=arguments[v];return(l=o.current)===null||l===void 0?void 0:l.call.apply(l,[o].concat(f))},[]);return i}},40425:function(t,u,e){"use strict";var c=e(56145).default,s=e(49226).default;Object.defineProperty(u,"__esModule",{value:!0}),u.useLayoutUpdateEffect=u.default=void 0;var a=s(e(21739)),n=c(e(90921)),o=(0,n.default)()?a.useLayoutEffect:a.useEffect,i=function(v,b){var h=a.useRef(!0);o(function(){return v(h.current)},b),o(function(){return h.current=!1,function(){h.current=!0}},[])},l=u.useLayoutUpdateEffect=function(v,b){i(function(h){if(!h)return v()},b)},d=u.default=i},32961:function(t,u,e){"use strict";var c,s=e(56145).default;c={value:!0},u.Z=d;var a=s(e(26531)),n=s(e(26177)),o=e(40425),i=s(e(9054));function l(f){return f!==void 0}function d(f,v){var b=v||{},h=b.defaultValue,g=b.value,p=b.onChange,w=b.postState,_=(0,i.default)(function(){return l(g)?g:l(h)?typeof h=="function"?h():h:typeof f=="function"?f():f}),x=(0,a.default)(_,2),D=x[0],ee=x[1],ge=g!==void 0?g:D,Ge=w?w(ge):ge,Ye=(0,n.default)(p),Le=(0,i.default)([ge]),Me=(0,a.default)(Le,2),Ve=Me[0],Fe=Me[1];(0,o.useLayoutUpdateEffect)(function(){var Oe=Ve[0];D!==Oe&&Ye(D,Oe)},[Ve]),(0,o.useLayoutUpdateEffect)(function(){l(g)||ee(g)},[g]);var Je=(0,n.default)(function(Oe,De){ee(Oe,De),Fe([ge],De)});return[Ge,Je]}},9054:function(t,u,e){"use strict";var c=e(49226).default,s=e(56145).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=o;var a=s(e(26531)),n=c(e(21739));function o(i){var l=n.useRef(!1),d=n.useState(i),f=(0,a.default)(d,2),v=f[0],b=f[1];n.useEffect(function(){return l.current=!1,function(){l.current=!0}},[]);function h(g,p){p&&l.current||b(g)}return[v,h]}},79254:function(t,u){"use strict";var e;e={value:!0},u.Z=void 0;var c=function(f){return+setTimeout(f,16)},s=function(f){return clearTimeout(f)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(c=function(f){return window.requestAnimationFrame(f)},s=function(f){return window.cancelAnimationFrame(f)});var a=0,n=new Map;function o(d){n.delete(d)}var i=function(f){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;a+=1;var b=a;function h(g){if(g===0)o(b),f();else{var p=c(function(){h(g-1)});n.set(b,p)}}return h(v),b};i.cancel=function(d){var f=n.get(d);return o(d),s(f)};var l=u.Z=i},61004:function(t,u,e){var c=e(39572);function s(a){if(Array.isArray(a))return c(a)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},97012:function(t){function u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},93215:function(t){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},39647:function(t,u,e){var c=e(32890);function s(a,n){if(a==null)return{};var o=c(a,n),i,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(l=0;l<d.length;l++)i=d[l],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(a,i)&&(o[i]=a[i])}return o}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},32890:function(t){function u(e,c){if(e==null)return{};var s={},a=Object.keys(e),n,o;for(o=0;o<a.length;o++)n=a[o],!(c.indexOf(n)>=0)&&(s[n]=e[n]);return s}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},37205:function(t,u,e){var c=e(61004),s=e(97012),a=e(66109),n=e(93215);function o(i){return c(i)||s(i)||a(i)||n()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},88741:function(t){function u(e,c){(c==null||c>e.length)&&(c=e.length);for(var s=0,a=Array(c);s<c;s++)a[s]=e[s];return a}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},33941:function(t){function u(e){if(Array.isArray(e))return e}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},29146:function(t,u,e){var c=e(29717);function s(a,n,o){return(n=c(n))in a?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o,a}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},49226:function(t,u,e){var c=e(42418).default;function s(n){if(typeof WeakMap!="function")return null;var o=new WeakMap,i=new WeakMap;return(s=function(d){return d?i:o})(n)}function a(n,o){if(!o&&n&&n.__esModule)return n;if(n===null||c(n)!="object"&&typeof n!="function")return{default:n};var i=s(o);if(i&&i.has(n))return i.get(n);var l={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in n)if(f!=="default"&&{}.hasOwnProperty.call(n,f)){var v=d?Object.getOwnPropertyDescriptor(n,f):null;v&&(v.get||v.set)?Object.defineProperty(l,f,v):l[f]=n[f]}return l.default=n,i&&i.set(n,l),l}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},14219:function(t){function u(e,c){var s=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(s!=null){var a,n,o,i,l=[],d=!0,f=!1;try{if(o=(s=s.call(e)).next,c===0){if(Object(s)!==s)return;d=!1}else for(;!(d=(a=o.call(s)).done)&&(l.push(a.value),l.length!==c);d=!0);}catch(v){f=!0,n=v}finally{try{if(!d&&s.return!=null&&(i=s.return(),Object(i)!==i))return}finally{if(f)throw n}}return l}}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},40767:function(t){function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},19982:function(t,u,e){var c=e(29146);function s(n,o){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);o&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),i.push.apply(i,l)}return i}function a(n){for(var o=1;o<arguments.length;o++){var i=arguments[o]!=null?arguments[o]:{};o%2?s(Object(i),!0).forEach(function(l){c(n,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(i,l))})}return n}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},39031:function(t,u,e){var c=e(16338);function s(a,n){if(a==null)return{};var o,i,l=c(a,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(i=0;i<d.length;i++)o=d[i],n.includes(o)||{}.propertyIsEnumerable.call(a,o)&&(l[o]=a[o])}return l}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},16338:function(t){function u(e,c){if(e==null)return{};var s={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(c.includes(a))continue;s[a]=e[a]}return s}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},26531:function(t,u,e){var c=e(33941),s=e(14219),a=e(56389),n=e(40767);function o(i,l){return c(i)||s(i,l)||a(i,l)||n()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},64378:function(t,u,e){var c=e(42418).default;function s(a,n){if(c(a)!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var i=o.call(a,n||"default");if(c(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},29717:function(t,u,e){var c=e(42418).default,s=e(64378);function a(n){var o=s(n,"string");return c(o)=="symbol"?o:o+""}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},42418:function(t){function u(e){"@babel/helpers - typeof";return t.exports=u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},t.exports.__esModule=!0,t.exports.default=t.exports,u(e)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},56389:function(t,u,e){var c=e(88741);function s(a,n){if(a){if(typeof a=="string")return c(a,n);var o={}.toString.call(a).slice(8,-1);return o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set"?Array.from(a):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(a,n):void 0}}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
