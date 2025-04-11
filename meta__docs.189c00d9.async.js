(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[904],{47355:function(t,s,e){"use strict";var d;e.r(s),e.d(s,{demos:function(){return x}});var i=e(7557),r=e.n(i),a=e(41498),u=e.n(a),n=e(21739),c=e(24033),f=e(76261),p=e(39759),x={"docs-demo-simple-demo-simple":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,51426))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71736).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.10.0"}},entry:"index.tsx"},context:{react:d||(d=e.t(n,2)),"rc-textarea":f},renderOpts:{compile:function(){var E=u()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(706).then(e.bind(e,4706));case 2:return l.abrupt("return",(R=l.sent).default.apply(R,S));case 3:case"end":return l.stop()}},v)}));function g(){return E.apply(this,arguments)}return g}()}},"docs-demo-simple-demo-autosize":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,74823))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82797).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.10.0"}},entry:"index.tsx"},context:{react:d||(d=e.t(n,2)),"rc-textarea":f},renderOpts:{compile:function(){var E=u()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(706).then(e.bind(e,4706));case 2:return l.abrupt("return",(R=l.sent).default.apply(R,S));case 3:case"end":return l.stop()}},v)}));function g(){return E.apply(this,arguments)}return g}()}},"docs-demo-simple-demo-allowclear":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,84203))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99644).Z},"rc-textarea":{type:"NPM",value:"1.10.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"rc-textarea":f,react:d||(d=e.t(n,2))},renderOpts:{compile:function(){var E=u()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(706).then(e.bind(e,4706));case 2:return l.abrupt("return",(R=l.sent).default.apply(R,S));case 3:case"end":return l.stop()}},v)}));function g(){return E.apply(this,arguments)}return g}()}},"docs-demo-simple-demo-showcount":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,86453))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(68720).Z},"rc-textarea":{type:"NPM",value:"1.10.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(83490).Z}},entry:"index.tsx"},context:{"../../assets/index.less":p,"rc-textarea":f,react:d||(d=e.t(n,2)),"/Users/afc163/Projects/textarea/assets/index.less":p},renderOpts:{compile:function(){var E=u()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(706).then(e.bind(e,4706));case 2:return l.abrupt("return",(R=l.sent).default.apply(R,S));case 3:case"end":return l.stop()}},v)}));function g(){return E.apply(this,arguments)}return g}()}}}},11212:function(t,s,e){"use strict";e.r(s),e.d(s,{demos:function(){return r}});var d=e(21739),i=e(12345),r={}},76261:function(t,s,e){"use strict";e.r(s),e.d(s,{ResizableTextArea:function(){return nt},default:function(){return yt}});var d=e(85573),i=e.n(d),r=e(82242),a=e.n(r),u=e(37205),n=e.n(u),c=e(79800),f=e.n(c),p=e(39647),x=e.n(p),E=e(92310),g=e.n(E),v=e(77321),R=e(72308),S=e(49618),N=e(62853),l=e(21739);function W(o){return!!(o.addonBefore||o.addonAfter)}function q(o){return!!(o.prefix||o.suffix||o.allowClear)}function he(o,y,m){var h=y.cloneNode(!0),b=Object.create(o,{target:{value:h},currentTarget:{value:h}});return h.value=m,typeof y.selectionStart=="number"&&typeof y.selectionEnd=="number"&&(h.selectionStart=y.selectionStart,h.selectionEnd=y.selectionEnd),h.setSelectionRange=function(){y.setSelectionRange.apply(y,arguments)},b}function Je(o,y,m,h){if(m){var b=y;if(y.type==="click"){b=he(y,o,""),m(b);return}if(o.type!=="file"&&h!==void 0){b=he(y,o,h),m(b);return}m(b)}}function Xe(o,y){if(o){o.focus(y);var m=y||{},h=m.cursor;if(h){var b=o.value.length;switch(h){case"start":o.setSelectionRange(0,0);break;case"end":o.setSelectionRange(b,b);break;default:o.setSelectionRange(0,b)}}}}var De=l.forwardRef(function(o,y){var m,h,b,M=o.inputElement,P=o.children,w=o.prefixCls,Z=o.prefix,A=o.suffix,j=o.addonBefore,H=o.addonAfter,G=o.className,ee=o.style,T=o.disabled,te=o.readOnly,Ie=o.focused,de=o.triggerFocus,D=o.allowClear,$=o.value,fe=o.handleReset,V=o.hidden,O=o.classes,C=o.classNames,ne=o.dataAttrs,U=o.styles,L=o.components,re=o.onClear,Y=P!=null?P:M,pe=(L==null?void 0:L.affixWrapper)||"span",Ee=(L==null?void 0:L.groupWrapper)||"span",ve=(L==null?void 0:L.wrapper)||"span",ue=(L==null?void 0:L.groupAddon)||"span",se=(0,l.useRef)(null),ie=function(xe){var F;(F=se.current)!==null&&F!==void 0&&F.contains(xe.target)&&(de==null||de())},me=q(o),J=(0,l.cloneElement)(Y,{value:$,className:g()((m=Y.props)===null||m===void 0?void 0:m.className,!me&&(C==null?void 0:C.variant))||null}),Re=(0,l.useRef)(null);if(l.useImperativeHandle(y,function(){return{nativeElement:Re.current||se.current}}),me){var le=null;if(D){var ae=!T&&!te&&$,X="".concat(w,"-clear-icon"),_=(0,N.Z)(D)==="object"&&D!==null&&D!==void 0&&D.clearIcon?D.clearIcon:"\u2716";le=l.createElement("button",{type:"button",tabIndex:-1,onClick:function(xe){fe==null||fe(xe),re==null||re()},onMouseDown:function(xe){return xe.preventDefault()},className:g()(X,(0,S.Z)((0,S.Z)({},"".concat(X,"-hidden"),!ae),"".concat(X,"-has-suffix"),!!A))},_)}var oe="".concat(w,"-affix-wrapper"),Pe=g()(oe,(0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)({},"".concat(w,"-disabled"),T),"".concat(oe,"-disabled"),T),"".concat(oe,"-focused"),Ie),"".concat(oe,"-readonly"),te),"".concat(oe,"-input-with-clear-btn"),A&&D&&$),O==null?void 0:O.affixWrapper,C==null?void 0:C.affixWrapper,C==null?void 0:C.variant),Se=(A||D)&&l.createElement("span",{className:g()("".concat(w,"-suffix"),C==null?void 0:C.suffix),style:U==null?void 0:U.suffix},le,A);J=l.createElement(pe,(0,R.Z)({className:Pe,style:U==null?void 0:U.affixWrapper,onClick:ie},ne==null?void 0:ne.affixWrapper,{ref:se}),Z&&l.createElement("span",{className:g()("".concat(w,"-prefix"),C==null?void 0:C.prefix),style:U==null?void 0:U.prefix},Z),J,Se)}if(W(o)){var ce="".concat(w,"-group"),k="".concat(ce,"-addon"),we="".concat(ce,"-wrapper"),Te=g()("".concat(w,"-wrapper"),ce,O==null?void 0:O.wrapper,C==null?void 0:C.wrapper),Me=g()(we,(0,S.Z)({},"".concat(we,"-disabled"),T),O==null?void 0:O.group,C==null?void 0:C.groupWrapper);J=l.createElement(Ee,{className:Me,ref:Re},l.createElement(ve,{className:Te},j&&l.createElement(ue,{className:k},j),J,H&&l.createElement(ue,{className:k},H)))}return l.cloneElement(J,{className:g()((h=J.props)===null||h===void 0?void 0:h.className,G)||null,style:(0,v.Z)((0,v.Z)({},(b=J.props)===null||b===void 0?void 0:b.style),ee),hidden:V})}),je=De,Ve=e(18929),Fe=null;function Qe(o,y){if(!y.max)return!0;var m=y.strategy(o);return m<=y.max}function Oe(o,y){return React.useMemo(function(){var m={};y&&(m.show=_typeof(y)==="object"&&y.formatter?y.formatter:!!y),m=_objectSpread(_objectSpread({},m),o);var h=m,b=h.show,M=_objectWithoutProperties(h,Fe);return _objectSpread(_objectSpread({},M),{},{show:!!b,showFormatter:typeof b=="function"?b:void 0,strategy:M.strategy||function(P){return P.length}})},[o,y])}var We=null,bt=null,Ct=null,It=null,ut=e(34025),ke=e(71138),qe=e(62488),st=e(31468),it=e.n(st),lt=e(31226),et=e(44736),tt=e(13593),ct=`
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
`,dt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ue={},Q;function ft(o){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=o.getAttribute("id")||o.getAttribute("data-reactid")||o.getAttribute("name");if(y&&Ue[m])return Ue[m];var h=window.getComputedStyle(o),b=h.getPropertyValue("box-sizing")||h.getPropertyValue("-moz-box-sizing")||h.getPropertyValue("-webkit-box-sizing"),M=parseFloat(h.getPropertyValue("padding-bottom"))+parseFloat(h.getPropertyValue("padding-top")),P=parseFloat(h.getPropertyValue("border-bottom-width"))+parseFloat(h.getPropertyValue("border-top-width")),w=dt.map(function(A){return"".concat(A,":").concat(h.getPropertyValue(A))}).join(";"),Z={sizingStyle:w,paddingSize:M,borderSize:P,boxSizing:b};return y&&m&&(Ue[m]=Z),Z}function pt(o){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;Q||(Q=document.createElement("textarea"),Q.setAttribute("tab-index","-1"),Q.setAttribute("aria-hidden","true"),Q.setAttribute("name","hiddenTextarea"),document.body.appendChild(Q)),o.getAttribute("wrap")?Q.setAttribute("wrap",o.getAttribute("wrap")):Q.removeAttribute("wrap");var b=ft(o,y),M=b.paddingSize,P=b.borderSize,w=b.boxSizing,Z=b.sizingStyle;Q.setAttribute("style","".concat(Z,";").concat(ct)),Q.value=o.value||o.placeholder||"";var A=void 0,j=void 0,H,G=Q.scrollHeight;if(w==="border-box"?G+=P:w==="content-box"&&(G-=M),m!==null||h!==null){Q.value=" ";var ee=Q.scrollHeight-M;m!==null&&(A=ee*m,w==="border-box"&&(A=A+M+P),G=Math.max(A,G)),h!==null&&(j=ee*h,w==="border-box"&&(j=j+M+P),H=G>j?"":"hidden",G=Math.min(j,G))}var T={height:G,overflowY:H,resize:"none"};return A&&(T.minHeight=A),j&&(T.maxHeight=j),T}var ye=e(27174),vt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Ke=0,Be=1,Ze=2,mt=l.forwardRef(function(o,y){var m=o,h=m.prefixCls,b=m.defaultValue,M=m.value,P=m.autoSize,w=m.onResize,Z=m.className,A=m.style,j=m.disabled,H=m.onChange,G=m.onInternalAutoSize,ee=x()(m,vt),T=(0,qe.Z)(b,{value:M,postState:function(_){return _!=null?_:""}}),te=f()(T,2),Ie=te[0],de=te[1],D=function(_){de(_.target.value),H==null||H(_)},$=l.useRef();l.useImperativeHandle(y,function(){return{textArea:$.current}});var fe=l.useMemo(function(){return P&&it()(P)==="object"?[P.minRows,P.maxRows]:[]},[P]),V=f()(fe,2),O=V[0],C=V[1],ne=!!P,U=function(){try{if(document.activeElement===$.current){var _=$.current,oe=_.selectionStart,Pe=_.selectionEnd,Se=_.scrollTop;$.current.setSelectionRange(oe,Pe),$.current.scrollTop=Se}}catch(ce){}},L=l.useState(Ze),re=f()(L,2),Y=re[0],pe=re[1],Ee=l.useState(),ve=f()(Ee,2),ue=ve[0],se=ve[1],ie=function(){pe(Ke)};(0,et.default)(function(){ne&&ie()},[M,O,C,ne]),(0,et.default)(function(){if(Y===Ke)pe(Be);else if(Y===Be){var X=pt($.current,!1,O,C);pe(Ze),se(X)}else U()},[Y]);var me=l.useRef(),J=function(){tt.Z.cancel(me.current)},Re=function(_){Y===Ze&&(w==null||w(_),P&&(J(),me.current=(0,tt.Z)(function(){ie()})))};l.useEffect(function(){return J},[]);var le=ne?ue:null,ae=a()(a()({},A),le);return(Y===Ke||Y===Be)&&(ae.overflowY="hidden",ae.overflowX="hidden"),(0,ye.jsx)(lt.Z,{onResize:Re,disabled:!(P||w),children:(0,ye.jsx)("textarea",a()(a()({},ee),{},{ref:$,style:ae,className:g()(h,Z,i()({},"".concat(h,"-disabled"),j)),disabled:j,value:Ie,onChange:D}))})}),nt=mt,xt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],gt=l.forwardRef(function(o,y){var m,h=o.defaultValue,b=o.value,M=o.onFocus,P=o.onBlur,w=o.onChange,Z=o.allowClear,A=o.maxLength,j=o.onCompositionStart,H=o.onCompositionEnd,G=o.suffix,ee=o.prefixCls,T=ee===void 0?"rc-textarea":ee,te=o.showCount,Ie=o.count,de=o.className,D=o.style,$=o.disabled,fe=o.hidden,V=o.classNames,O=o.styles,C=o.onResize,ne=o.onClear,U=o.onPressEnter,L=o.readOnly,re=o.autoSize,Y=o.onKeyDown,pe=x()(o,xt),Ee=(0,qe.Z)(h,{value:b,defaultValue:h}),ve=f()(Ee,2),ue=ve[0],se=ve[1],ie=ue==null?"":String(ue),me=l.useState(!1),J=f()(me,2),Re=J[0],le=J[1],ae=l.useRef(!1),X=l.useState(null),_=f()(X,2),oe=_[0],Pe=_[1],Se=(0,l.useRef)(null),ce=(0,l.useRef)(null),k=function(){var I;return(I=ce.current)===null||I===void 0?void 0:I.textArea},we=function(){k().focus()};(0,l.useImperativeHandle)(y,function(){var z;return{resizableTextArea:ce.current,focus:we,blur:function(){k().blur()},nativeElement:((z=Se.current)===null||z===void 0?void 0:z.nativeElement)||k()}}),(0,l.useEffect)(function(){le(function(z){return!$&&z})},[$]);var Te=l.useState(null),Me=f()(Te,2),be=Me[0],xe=Me[1];l.useEffect(function(){if(be){var z;(z=k()).setSelectionRange.apply(z,n()(be))}},[be]);var F=(0,ut.ZP)(Ie,te),Ae=(m=F.max)!==null&&m!==void 0?m:A,rt=Number(Ae)>0,Le=F.strategy(ie),at=!!Ae&&Le>Ae,He=function(I,ge){var $e=ge;!ae.current&&F.exceedFormatter&&F.max&&F.strategy(ge)>F.max&&($e=F.exceedFormatter(ge,{max:F.max}),ge!==$e&&xe([k().selectionStart||0,k().selectionEnd||0])),se($e),(0,ke.rJ)(I.currentTarget,I,w,$e)},ot=function(I){ae.current=!0,j==null||j(I)},K=function(I){ae.current=!1,He(I,I.currentTarget.value),H==null||H(I)},B=function(I){He(I,I.target.value)},Ce=function(I){I.key==="Enter"&&U&&U(I),Y==null||Y(I)},_e=function(I){le(!0),M==null||M(I)},Ge=function(I){le(!1),P==null||P(I)},Ye=function(I){se(""),we(),(0,ke.rJ)(k(),I,w)},Ne=G,ze;F.show&&(F.showFormatter?ze=F.showFormatter({value:ie,count:Le,maxLength:Ae}):ze="".concat(Le).concat(rt?" / ".concat(Ae):""),Ne=(0,ye.jsxs)(ye.Fragment,{children:[Ne,(0,ye.jsx)("span",{className:g()("".concat(T,"-data-count"),V==null?void 0:V.count),style:O==null?void 0:O.count,children:ze})]}));var Rt=function(I){var ge;C==null||C(I),(ge=k())!==null&&ge!==void 0&&ge.style.height&&Pe(!0)},St=!re&&!te&&!Z;return(0,ye.jsx)(je,{ref:Se,value:ie,allowClear:Z,handleReset:Ye,suffix:Ne,prefixCls:T,classNames:a()(a()({},V),{},{affixWrapper:g()(V==null?void 0:V.affixWrapper,i()(i()({},"".concat(T,"-show-count"),te),"".concat(T,"-textarea-allow-clear"),Z))}),disabled:$,focused:Re,className:g()(de,at&&"".concat(T,"-out-of-range")),style:a()(a()({},D),oe&&!St?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof ze=="string"?ze:void 0}},hidden:fe,readOnly:L,onClear:ne,children:(0,ye.jsx)(nt,a()(a()({},pe),{},{autoSize:re,maxLength:A,onKeyDown:Ce,onChange:B,onFocus:_e,onBlur:Ge,onCompositionStart:ot,onCompositionEnd:K,className:g()(V==null?void 0:V.textarea),style:a()(a()({},O==null?void 0:O.textarea),{},{resize:D==null?void 0:D.resize}),disabled:$,prefixCls:T,onResize:Rt,ref:ce,readOnly:L}))})}),ht=gt,yt=ht},39759:function(t,s,e){"use strict";e.r(s)},10826:function(t,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return i}});var d=e(24033);const i=[]},7810:function(t,s,e){"use strict";e.r(s),e.d(s,{texts:function(){return i}});var d=e(12345);const i=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},83490:function(t,s){"use strict";s.Z=`@textarea-prefix-cls: rc-textarea;

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
`},99644:function(t,s){"use strict";s.Z=`/* eslint-disable no-console */
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
`},82797:function(t,s){"use strict";s.Z=`/* eslint-disable no-console */
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
`},68720:function(t,s){"use strict";s.Z=`/* eslint-disable no-console */
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
`},71736:function(t,s){"use strict";s.Z=`/* eslint-disable no-console */
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
`},34025:function(t,s,e){"use strict";var d,i=e(8219),r=e(85163);d={value:!0},s.ZP=g,d=E;var a=i(e(26817)),u=i(e(56495)),n=i(e(85163)),c=x(e(21739)),f=["show"];function p(v){if(typeof WeakMap!="function")return null;var R=new WeakMap,S=new WeakMap;return(p=function(l){return l?S:R})(v)}function x(v,R){if(!R&&v&&v.__esModule)return v;if(v===null||r(v)!="object"&&typeof v!="function")return{default:v};var S=p(R);if(S&&S.has(v))return S.get(v);var N={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var W in v)if(W!=="default"&&Object.prototype.hasOwnProperty.call(v,W)){var q=l?Object.getOwnPropertyDescriptor(v,W):null;q&&(q.get||q.set)?Object.defineProperty(N,W,q):N[W]=v[W]}return N.default=v,S&&S.set(v,N),N}function E(v,R){if(!R.max)return!0;var S=R.strategy(v);return S<=R.max}function g(v,R){return c.useMemo(function(){var S={};R&&(S.show=(0,n.default)(R)==="object"&&R.formatter?R.formatter:!!R),S=(0,u.default)((0,u.default)({},S),v);var N=S,l=N.show,W=(0,a.default)(N,f);return(0,u.default)((0,u.default)({},W),{},{show:!!l,showFormatter:typeof l=="function"?l:void 0,strategy:W.strategy||function(q){return q.length}})},[v,R])}},71138:function(t,s){"use strict";var e;e={value:!0},e=d,e=i,s.rJ=a,e=u;function d(n){return!!(n.addonBefore||n.addonAfter)}function i(n){return!!(n.prefix||n.suffix||n.allowClear)}function r(n,c,f){var p=c.cloneNode(!0),x=Object.create(n,{target:{value:p},currentTarget:{value:p}});return p.value=f,typeof c.selectionStart=="number"&&typeof c.selectionEnd=="number"&&(p.selectionStart=c.selectionStart,p.selectionEnd=c.selectionEnd),p.setSelectionRange=function(){c.setSelectionRange.apply(c,arguments)},x}function a(n,c,f,p){if(f){var x=c;if(c.type==="click"){x=r(c,n,""),f(x);return}if(n.type!=="file"&&p!==void 0){x=r(c,n,p),f(x);return}f(x)}}function u(n,c){if(n){n.focus(c);var f=c||{},p=f.cursor;if(p){var x=n.value.length;switch(p){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(x,x);break;default:n.setSelectionRange(0,x)}}}}},16681:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},7278:function(t,s,e){"use strict";var d=e(88002).default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=r;var i=d(e(21739));function r(a){var u=i.useRef();u.current=a;var n=i.useCallback(function(){for(var c,f=arguments.length,p=new Array(f),x=0;x<f;x++)p[x]=arguments[x];return(c=u.current)===null||c===void 0?void 0:c.call.apply(c,[u].concat(p))},[]);return n}},44736:function(t,s,e){"use strict";var d=e(8219).default,i=e(88002).default;Object.defineProperty(s,"__esModule",{value:!0}),s.useLayoutUpdateEffect=s.default=void 0;var r=i(e(21739)),a=d(e(16681)),u=(0,a.default)()?r.useLayoutEffect:r.useEffect,n=function(x,E){var g=r.useRef(!0);u(function(){return x(g.current)},E),u(function(){return g.current=!1,function(){g.current=!0}},[])},c=s.useLayoutUpdateEffect=function(x,E){n(function(g){if(!g)return x()},E)},f=s.default=n},62488:function(t,s,e){"use strict";var d,i=e(8219).default;d={value:!0},s.Z=f;var r=i(e(216)),a=i(e(7278)),u=e(44736),n=i(e(65503));function c(p){return p!==void 0}function f(p,x){var E=x||{},g=E.defaultValue,v=E.value,R=E.onChange,S=E.postState,N=(0,n.default)(function(){return c(v)?v:c(g)?typeof g=="function"?g():g:typeof p=="function"?p():p}),l=(0,r.default)(N,2),W=l[0],q=l[1],he=v!==void 0?v:W,Je=S?S(he):he,Xe=(0,a.default)(R),De=(0,n.default)([he]),je=(0,r.default)(De,2),Ve=je[0],Fe=je[1];(0,u.useLayoutUpdateEffect)(function(){var Oe=Ve[0];W!==Oe&&Xe(W,Oe)},[Ve]),(0,u.useLayoutUpdateEffect)(function(){c(v)||q(v)},[v]);var Qe=(0,a.default)(function(Oe,We){q(Oe,We),Fe([he],We)});return[Je,Qe]}},65503:function(t,s,e){"use strict";var d=e(88002).default,i=e(8219).default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=u;var r=i(e(216)),a=d(e(21739));function u(n){var c=a.useRef(!1),f=a.useState(n),p=(0,r.default)(f,2),x=p[0],E=p[1];a.useEffect(function(){return c.current=!1,function(){c.current=!0}},[]);function g(v,R){R&&c.current||E(v)}return[x,g]}},13593:function(t,s){"use strict";var e;e={value:!0},s.Z=void 0;var d=function(p){return+setTimeout(p,16)},i=function(p){return clearTimeout(p)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(d=function(p){return window.requestAnimationFrame(p)},i=function(p){return window.cancelAnimationFrame(p)});var r=0,a=new Map;function u(f){a.delete(f)}var n=function(p){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;r+=1;var E=r;function g(v){if(v===0)u(E),p();else{var R=d(function(){g(v-1)});a.set(E,R)}}return g(x),E};n.cancel=function(f){var p=a.get(f);return u(f),i(p)};var c=s.Z=n},61004:function(t,s,e){var d=e(39572);function i(r){if(Array.isArray(r))return d(r)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},97012:function(t){function s(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},93215:function(t){function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},39647:function(t,s,e){var d=e(32890);function i(r,a){if(r==null)return{};var u=d(r,a),n,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(c=0;c<f.length;c++)n=f[c],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(u[n]=r[n])}return u}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},32890:function(t){function s(e,d){if(e==null)return{};var i={},r=Object.keys(e),a,u;for(u=0;u<r.length;u++)a=r[u],!(d.indexOf(a)>=0)&&(i[a]=e[a]);return i}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},37205:function(t,s,e){var d=e(61004),i=e(97012),r=e(66109),a=e(93215);function u(n){return d(n)||i(n)||r(n)||a()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},28907:function(t){function s(e,d){(d==null||d>e.length)&&(d=e.length);for(var i=0,r=Array(d);i<d;i++)r[i]=e[i];return r}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},79177:function(t){function s(e){if(Array.isArray(e))return e}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},54751:function(t,s,e){var d=e(70277);function i(r,a,u){return(a=d(a))in r?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[a]=u,r}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},88002:function(t,s,e){var d=e(85163).default;function i(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(i=function(f){return f?n:u})(a)}function r(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||d(a)!="object"&&typeof a!="function")return{default:a};var n=i(u);if(n&&n.has(a))return n.get(a);var c={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in a)if(p!=="default"&&{}.hasOwnProperty.call(a,p)){var x=f?Object.getOwnPropertyDescriptor(a,p):null;x&&(x.get||x.set)?Object.defineProperty(c,p,x):c[p]=a[p]}return c.default=a,n&&n.set(a,c),c}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},46184:function(t){function s(e,d){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var r,a,u,n,c=[],f=!0,p=!1;try{if(u=(i=i.call(e)).next,d===0){if(Object(i)!==i)return;f=!1}else for(;!(f=(r=u.call(i)).done)&&(c.push(r.value),c.length!==d);f=!0);}catch(x){p=!0,a=x}finally{try{if(!f&&i.return!=null&&(n=i.return(),Object(n)!==n))return}finally{if(p)throw a}}return c}}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},81370:function(t){function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},56495:function(t,s,e){var d=e(54751);function i(a,u){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);u&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),n.push.apply(n,c)}return n}function r(a){for(var u=1;u<arguments.length;u++){var n=arguments[u]!=null?arguments[u]:{};u%2?i(Object(n),!0).forEach(function(c){d(a,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(n,c))})}return a}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},26817:function(t,s,e){var d=e(69318);function i(r,a){if(r==null)return{};var u,n,c=d(r,a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(n=0;n<f.length;n++)u=f[n],a.indexOf(u)===-1&&{}.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},69318:function(t){function s(e,d){if(e==null)return{};var i={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(d.indexOf(r)!==-1)continue;i[r]=e[r]}return i}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},216:function(t,s,e){var d=e(79177),i=e(46184),r=e(94287),a=e(81370);function u(n,c){return d(n)||i(n,c)||r(n,c)||a()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},53659:function(t,s,e){var d=e(85163).default;function i(r,a){if(d(r)!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var n=u.call(r,a||"default");if(d(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},70277:function(t,s,e){var d=e(85163).default,i=e(53659);function r(a){var u=i(a,"string");return d(u)=="symbol"?u:u+""}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},94287:function(t,s,e){var d=e(28907);function i(r,a){if(r){if(typeof r=="string")return d(r,a);var u={}.toString.call(r).slice(8,-1);return u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set"?Array.from(r):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?d(r,a):void 0}}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
