(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[904],{63711:function(t,u,e){"use strict";var l;e.r(u),e.d(u,{demos:function(){return x}});var i=e(7557),r=e.n(i),a=e(41498),s=e.n(a),n=e(21739),d=e(88010),f=e(35711),p=e(37104),x={"docs-demo-simple-demo-simple":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,12364))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(6494).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:l||(l=e.t(n,2)),"rc-textarea":f},renderOpts:{compile:function(){var P=s()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(342).then(e.bind(e,78342));case 2:return c.abrupt("return",(R=c.sent).default.apply(R,S));case 3:case"end":return c.stop()}},v)}));function g(){return P.apply(this,arguments)}return g}()}},"docs-demo-simple-demo-autosize":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,44382))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41523).Z},react:{type:"NPM",value:"18.3.1"},"rc-textarea":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:l||(l=e.t(n,2)),"rc-textarea":f},renderOpts:{compile:function(){var P=s()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(342).then(e.bind(e,78342));case 2:return c.abrupt("return",(R=c.sent).default.apply(R,S));case 3:case"end":return c.stop()}},v)}));function g(){return P.apply(this,arguments)}return g}()}},"docs-demo-simple-demo-allowclear":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,21847))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47066).Z},"rc-textarea":{type:"NPM",value:"1.8.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"rc-textarea":f,react:l||(l=e.t(n,2))},renderOpts:{compile:function(){var P=s()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(342).then(e.bind(e,78342));case 2:return c.abrupt("return",(R=c.sent).default.apply(R,S));case 3:case"end":return c.stop()}},v)}));function g(){return P.apply(this,arguments)}return g}()}},"docs-demo-simple-demo-showcount":{component:n.memo(n.lazy(function(){return e.e(433).then(e.bind(e,24276))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10832).Z},"rc-textarea":{type:"NPM",value:"1.8.2"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(59081).Z}},entry:"index.tsx"},context:{"rc-textarea":f,react:l||(l=e.t(n,2)),"/Users/afc163/Projects/textarea/assets/index.less":p},renderOpts:{compile:function(){var P=s()(r()().mark(function v(){var R,S=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(342).then(e.bind(e,78342));case 2:return c.abrupt("return",(R=c.sent).default.apply(R,S));case 3:case"end":return c.stop()}},v)}));function g(){return P.apply(this,arguments)}return g}()}}}},94125:function(t,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return r}});var l=e(21739),i=e(85784),r={}},35711:function(t,u,e){"use strict";e.r(u),e.d(u,{ResizableTextArea:function(){return nt},default:function(){return yt}});var l=e(85573),i=e.n(l),r=e(82242),a=e.n(r),s=e(37205),n=e.n(s),d=e(79800),f=e.n(d),p=e(39647),x=e.n(p),P=e(92310),g=e.n(P),v=e(81162),R=e(33614),S=e(24018),L=e(80017),c=e(21739);function F(o){return!!(o.addonBefore||o.addonAfter)}function ee(o){return!!(o.prefix||o.suffix||o.allowClear)}function ge(o,y,m){var h=y.cloneNode(!0),C=Object.create(o,{target:{value:h},currentTarget:{value:h}});return h.value=m,typeof y.selectionStart=="number"&&typeof y.selectionEnd=="number"&&(h.selectionStart=y.selectionStart,h.selectionEnd=y.selectionEnd),h.setSelectionRange=function(){y.setSelectionRange.apply(y,arguments)},C}function Je(o,y,m,h){if(m){var C=y;if(y.type==="click"){C=ge(y,o,""),m(C);return}if(o.type!=="file"&&h!==void 0){C=ge(y,o,h),m(C);return}m(C)}}function Xe(o,y){if(o){o.focus(y);var m=y||{},h=m.cursor;if(h){var C=o.value.length;switch(h){case"start":o.setSelectionRange(0,0);break;case"end":o.setSelectionRange(C,C);break;default:o.setSelectionRange(0,C)}}}}var De=c.forwardRef(function(o,y){var m,h,C=o.inputElement,O=o.children,I=o.prefixCls,z=o.prefix,N=o.suffix,j=o.addonBefore,T=o.addonAfter,Z=o.className,K=o.style,H=o.disabled,D=o.readOnly,ue=o.focused,fe=o.triggerFocus,G=o.allowClear,te=o.value,$=o.handleReset,be=o.hidden,w=o.classes,b=o.classNames,ne=o.dataAttrs,V=o.styles,_=o.components,se=o.onClear,ie=O!=null?O:C,Y=(_==null?void 0:_.affixWrapper)||"span",pe=(_==null?void 0:_.groupWrapper)||"span",Ce=(_==null?void 0:_.wrapper)||"span",le=(_==null?void 0:_.groupAddon)||"span",re=(0,c.useRef)(null),ye=function(oe){var we;(we=re.current)!==null&&we!==void 0&&we.contains(oe.target)&&(fe==null||fe())},ae=ee(o),J=(0,c.cloneElement)(ie,{value:te,className:g()(ie.props.className,!ae&&(b==null?void 0:b.variant))||null}),ce=(0,c.useRef)(null);if(c.useImperativeHandle(y,function(){return{nativeElement:ce.current||re.current}}),ae){var Re=null;if(G){var ve=!H&&!D&&te,X="".concat(I,"-clear-icon"),Q=(0,L.Z)(G)==="object"&&G!==null&&G!==void 0&&G.clearIcon?G.clearIcon:"\u2716";Re=c.createElement("span",{onClick:function(oe){$==null||$(oe),se==null||se()},onMouseDown:function(oe){return oe.preventDefault()},className:g()(X,(0,S.Z)((0,S.Z)({},"".concat(X,"-hidden"),!ve),"".concat(X,"-has-suffix"),!!N)),role:"button",tabIndex:-1},Q)}var A="".concat(I,"-affix-wrapper"),Ie=g()(A,(0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)({},"".concat(I,"-disabled"),H),"".concat(A,"-disabled"),H),"".concat(A,"-focused"),ue),"".concat(A,"-readonly"),D),"".concat(A,"-input-with-clear-btn"),N&&G&&te),w==null?void 0:w.affixWrapper,b==null?void 0:b.affixWrapper,b==null?void 0:b.variant),Ee=(N||G)&&c.createElement("span",{className:g()("".concat(I,"-suffix"),b==null?void 0:b.suffix),style:V==null?void 0:V.suffix},Re,N);J=c.createElement(Y,(0,R.Z)({className:Ie,style:V==null?void 0:V.affixWrapper,onClick:ye},ne==null?void 0:ne.affixWrapper,{ref:re}),z&&c.createElement("span",{className:g()("".concat(I,"-prefix"),b==null?void 0:b.prefix),style:V==null?void 0:V.prefix},z),J,Ee)}if(F(o)){var de="".concat(I,"-group"),me="".concat(de,"-addon"),k="".concat(de,"-wrapper"),Me=g()("".concat(I,"-wrapper"),de,w==null?void 0:w.wrapper,b==null?void 0:b.wrapper),Te=g()(k,(0,S.Z)({},"".concat(k,"-disabled"),H),w==null?void 0:w.group,b==null?void 0:b.groupWrapper);J=c.createElement(pe,{className:Te,ref:ce},c.createElement(Ce,{className:Me},j&&c.createElement(le,{className:me},j),J,T&&c.createElement(le,{className:me},T)))}return c.cloneElement(J,{className:g()((m=J.props)===null||m===void 0?void 0:m.className,Z)||null,style:(0,v.Z)((0,v.Z)({},(h=J.props)===null||h===void 0?void 0:h.style),K),hidden:be})}),je=De,Ve=e(71366),Fe=null;function Qe(o,y){if(!y.max)return!0;var m=y.strategy(o);return m<=y.max}function Oe(o,y){return React.useMemo(function(){var m={};y&&(m.show=_typeof(y)==="object"&&y.formatter?y.formatter:!!y),m=_objectSpread(_objectSpread({},m),o);var h=m,C=h.show,O=_objectWithoutProperties(h,Fe);return _objectSpread(_objectSpread({},O),{},{show:!!C,showFormatter:typeof C=="function"?C:void 0,strategy:O.strategy||function(I){return I.length}})},[o,y])}var We=null,bt=null,Ct=null,It=null,ut=e(48764),ke=e(88444),qe=e(32961),st=e(31468),it=e.n(st),lt=e(10933),et=e(40425),tt=e(79254),ct=`
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
`,dt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ue={},B;function ft(o){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=o.getAttribute("id")||o.getAttribute("data-reactid")||o.getAttribute("name");if(y&&Ue[m])return Ue[m];var h=window.getComputedStyle(o),C=h.getPropertyValue("box-sizing")||h.getPropertyValue("-moz-box-sizing")||h.getPropertyValue("-webkit-box-sizing"),O=parseFloat(h.getPropertyValue("padding-bottom"))+parseFloat(h.getPropertyValue("padding-top")),I=parseFloat(h.getPropertyValue("border-bottom-width"))+parseFloat(h.getPropertyValue("border-top-width")),z=dt.map(function(j){return"".concat(j,":").concat(h.getPropertyValue(j))}).join(";"),N={sizingStyle:z,paddingSize:O,borderSize:I,boxSizing:C};return y&&m&&(Ue[m]=N),N}function pt(o){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;B||(B=document.createElement("textarea"),B.setAttribute("tab-index","-1"),B.setAttribute("aria-hidden","true"),B.setAttribute("name","hiddenTextarea"),document.body.appendChild(B)),o.getAttribute("wrap")?B.setAttribute("wrap",o.getAttribute("wrap")):B.removeAttribute("wrap");var C=ft(o,y),O=C.paddingSize,I=C.borderSize,z=C.boxSizing,N=C.sizingStyle;B.setAttribute("style","".concat(N,";").concat(ct)),B.value=o.value||o.placeholder||"";var j=void 0,T=void 0,Z,K=B.scrollHeight;if(z==="border-box"?K+=I:z==="content-box"&&(K-=O),m!==null||h!==null){B.value=" ";var H=B.scrollHeight-O;m!==null&&(j=H*m,z==="border-box"&&(j=j+O+I),K=Math.max(j,K)),h!==null&&(T=H*h,z==="border-box"&&(T=T+O+I),Z=K>T?"":"hidden",K=Math.min(T,K))}var D={height:K,overflowY:Z,resize:"none"};return j&&(D.minHeight=j),T&&(D.maxHeight=T),D}var he=e(27174),vt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Ke=0,Be=1,Ze=2,mt=c.forwardRef(function(o,y){var m=o,h=m.prefixCls,C=m.defaultValue,O=m.value,I=m.autoSize,z=m.onResize,N=m.className,j=m.style,T=m.disabled,Z=m.onChange,K=m.onInternalAutoSize,H=x()(m,vt),D=(0,qe.Z)(C,{value:O,postState:function(A){return A!=null?A:""}}),ue=f()(D,2),fe=ue[0],G=ue[1],te=function(A){G(A.target.value),Z==null||Z(A)},$=c.useRef();c.useImperativeHandle(y,function(){return{textArea:$.current}});var be=c.useMemo(function(){return I&&it()(I)==="object"?[I.minRows,I.maxRows]:[]},[I]),w=f()(be,2),b=w[0],ne=w[1],V=!!I,_=function(){try{if(document.activeElement===$.current){var A=$.current,Ie=A.selectionStart,Ee=A.selectionEnd,de=A.scrollTop;$.current.setSelectionRange(Ie,Ee),$.current.scrollTop=de}}catch(me){}},se=c.useState(Ze),ie=f()(se,2),Y=ie[0],pe=ie[1],Ce=c.useState(),le=f()(Ce,2),re=le[0],ye=le[1],ae=function(){pe(Ke)};(0,et.default)(function(){V&&ae()},[O,b,ne,V]),(0,et.default)(function(){if(Y===Ke)pe(Be);else if(Y===Be){var Q=pt($.current,!1,b,ne);pe(Ze),ye(Q)}else _()},[Y]);var J=c.useRef(),ce=function(){tt.Z.cancel(J.current)},Re=function(A){Y===Ze&&(z==null||z(A),I&&(ce(),J.current=(0,tt.Z)(function(){ae()})))};c.useEffect(function(){return ce},[]);var ve=V?re:null,X=a()(a()({},j),ve);return(Y===Ke||Y===Be)&&(X.overflowY="hidden",X.overflowX="hidden"),(0,he.jsx)(lt.Z,{onResize:Re,disabled:!(I||z),children:(0,he.jsx)("textarea",a()(a()({},H),{},{ref:$,style:X,className:g()(h,N,i()({},"".concat(h,"-disabled"),T)),disabled:T,value:fe,onChange:te}))})}),nt=mt,xt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],gt=c.forwardRef(function(o,y){var m,h=o.defaultValue,C=o.value,O=o.onFocus,I=o.onBlur,z=o.onChange,N=o.allowClear,j=o.maxLength,T=o.onCompositionStart,Z=o.onCompositionEnd,K=o.suffix,H=o.prefixCls,D=H===void 0?"rc-textarea":H,ue=o.showCount,fe=o.count,G=o.className,te=o.style,$=o.disabled,be=o.hidden,w=o.classNames,b=o.styles,ne=o.onResize,V=o.onClear,_=o.onPressEnter,se=o.readOnly,ie=o.autoSize,Y=o.onKeyDown,pe=x()(o,xt),Ce=(0,qe.Z)(h,{value:C,defaultValue:h}),le=f()(Ce,2),re=le[0],ye=le[1],ae=re==null?"":String(re),J=c.useState(!1),ce=f()(J,2),Re=ce[0],ve=ce[1],X=c.useRef(!1),Q=c.useState(null),A=f()(Q,2),Ie=A[0],Ee=A[1],de=(0,c.useRef)(null),me=(0,c.useRef)(null),k=function(){var E;return(E=me.current)===null||E===void 0?void 0:E.textArea},Me=function(){k().focus()};(0,c.useImperativeHandle)(y,function(){var M;return{resizableTextArea:me.current,focus:Me,blur:function(){k().blur()},nativeElement:((M=de.current)===null||M===void 0?void 0:M.nativeElement)||k()}}),(0,c.useEffect)(function(){ve(function(M){return!$&&M})},[$]);var Te=c.useState(null),Pe=f()(Te,2),oe=Pe[0],we=Pe[1];c.useEffect(function(){if(oe){var M;(M=k()).setSelectionRange.apply(M,n()(oe))}},[oe]);var q=(0,ut.ZP)(fe,ue),Ae=(m=q.max)!==null&&m!==void 0?m:j,rt=Number(Ae)>0,_e=q.strategy(ae),at=!!Ae&&_e>Ae,He=function(E,xe){var Ne=xe;!X.current&&q.exceedFormatter&&q.max&&q.strategy(xe)>q.max&&(Ne=q.exceedFormatter(xe,{max:q.max}),xe!==Ne&&we([k().selectionStart||0,k().selectionEnd||0])),ye(Ne),(0,ke.rJ)(E.currentTarget,E,z,Ne)},ot=function(E){X.current=!0,T==null||T(E)},W=function(E){X.current=!1,He(E,E.currentTarget.value),Z==null||Z(E)},U=function(E){He(E,E.target.value)},Se=function(E){E.key==="Enter"&&_&&_(E),Y==null||Y(E)},Le=function(E){ve(!0),O==null||O(E)},Ge=function(E){ve(!1),I==null||I(E)},Ye=function(E){ye(""),Me(),(0,ke.rJ)(k(),E,z)},$e=K,ze;q.show&&(q.showFormatter?ze=q.showFormatter({value:ae,count:_e,maxLength:Ae}):ze="".concat(_e).concat(rt?" / ".concat(Ae):""),$e=(0,he.jsxs)(he.Fragment,{children:[$e,(0,he.jsx)("span",{className:g()("".concat(D,"-data-count"),w==null?void 0:w.count),style:b==null?void 0:b.count,children:ze})]}));var Rt=function(E){var xe;ne==null||ne(E),(xe=k())!==null&&xe!==void 0&&xe.style.height&&Ee(!0)},St=!ie&&!ue&&!N;return(0,he.jsx)(je,{ref:de,value:ae,allowClear:N,handleReset:Ye,suffix:$e,prefixCls:D,classNames:a()(a()({},w),{},{affixWrapper:g()(w==null?void 0:w.affixWrapper,i()(i()({},"".concat(D,"-show-count"),ue),"".concat(D,"-textarea-allow-clear"),N))}),disabled:$,focused:Re,className:g()(G,at&&"".concat(D,"-out-of-range")),style:a()(a()({},te),Ie&&!St?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof ze=="string"?ze:void 0}},hidden:be,readOnly:se,onClear:V,children:(0,he.jsx)(nt,a()(a()({},pe),{},{autoSize:ie,maxLength:j,onKeyDown:Se,onChange:U,onFocus:Le,onBlur:Ge,onCompositionStart:ot,onCompositionEnd:W,className:g()(w==null?void 0:w.textarea),style:a()(a()({},b==null?void 0:b.textarea),{},{resize:te==null?void 0:te.resize}),disabled:$,prefixCls:D,onResize:Rt,ref:me,readOnly:se}))})}),ht=gt,yt=ht},37104:function(t,u,e){"use strict";e.r(u)},51248:function(t,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return i}});var l=e(88010);const i=[]},35480:function(t,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return i}});var l=e(85784);const i=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},59081:function(t,u){"use strict";u.Z=`@textarea-prefix-cls: rc-textarea;

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
`},47066:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},41523:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},10832:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},6494:function(t,u){"use strict";u.Z=`/* eslint-disable no-console */
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
`},48764:function(t,u,e){"use strict";var l,i=e(42050),r=e(19763);l={value:!0},u.ZP=g,l=P;var a=i(e(13874)),s=i(e(87251)),n=i(e(19763)),d=x(e(21739)),f=["show"];function p(v){if(typeof WeakMap!="function")return null;var R=new WeakMap,S=new WeakMap;return(p=function(c){return c?S:R})(v)}function x(v,R){if(!R&&v&&v.__esModule)return v;if(v===null||r(v)!="object"&&typeof v!="function")return{default:v};var S=p(R);if(S&&S.has(v))return S.get(v);var L={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in v)if(F!=="default"&&Object.prototype.hasOwnProperty.call(v,F)){var ee=c?Object.getOwnPropertyDescriptor(v,F):null;ee&&(ee.get||ee.set)?Object.defineProperty(L,F,ee):L[F]=v[F]}return L.default=v,S&&S.set(v,L),L}function P(v,R){if(!R.max)return!0;var S=R.strategy(v);return S<=R.max}function g(v,R){return d.useMemo(function(){var S={};R&&(S.show=(0,n.default)(R)==="object"&&R.formatter?R.formatter:!!R),S=(0,s.default)((0,s.default)({},S),v);var L=S,c=L.show,F=(0,a.default)(L,f);return(0,s.default)((0,s.default)({},F),{},{show:!!c,showFormatter:typeof c=="function"?c:void 0,strategy:F.strategy||function(ee){return ee.length}})},[v,R])}},88444:function(t,u){"use strict";var e;e={value:!0},e=l,e=i,u.rJ=a,e=s;function l(n){return!!(n.addonBefore||n.addonAfter)}function i(n){return!!(n.prefix||n.suffix||n.allowClear)}function r(n,d,f){var p=d.cloneNode(!0),x=Object.create(n,{target:{value:p},currentTarget:{value:p}});return p.value=f,typeof d.selectionStart=="number"&&typeof d.selectionEnd=="number"&&(p.selectionStart=d.selectionStart,p.selectionEnd=d.selectionEnd),p.setSelectionRange=function(){d.setSelectionRange.apply(d,arguments)},x}function a(n,d,f,p){if(f){var x=d;if(d.type==="click"){x=r(d,n,""),f(x);return}if(n.type!=="file"&&p!==void 0){x=r(d,n,p),f(x);return}f(x)}}function s(n,d){if(n){n.focus(d);var f=d||{},p=f.cursor;if(p){var x=n.value.length;switch(p){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(x,x);break;default:n.setSelectionRange(0,x)}}}}},90921:function(t,u){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},26177:function(t,u,e){"use strict";var l=e(26745).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=r;var i=l(e(21739));function r(a){var s=i.useRef();s.current=a;var n=i.useCallback(function(){for(var d,f=arguments.length,p=new Array(f),x=0;x<f;x++)p[x]=arguments[x];return(d=s.current)===null||d===void 0?void 0:d.call.apply(d,[s].concat(p))},[]);return n}},40425:function(t,u,e){"use strict";var l=e(42050).default,i=e(26745).default;Object.defineProperty(u,"__esModule",{value:!0}),u.useLayoutUpdateEffect=u.default=void 0;var r=i(e(21739)),a=l(e(90921)),s=(0,a.default)()?r.useLayoutEffect:r.useEffect,n=function(x,P){var g=r.useRef(!0);s(function(){return x(g.current)},P),s(function(){return g.current=!1,function(){g.current=!0}},[])},d=u.useLayoutUpdateEffect=function(x,P){n(function(g){if(!g)return x()},P)},f=u.default=n},32961:function(t,u,e){"use strict";var l,i=e(42050).default;l={value:!0},u.Z=f;var r=i(e(47747)),a=i(e(26177)),s=e(40425),n=i(e(9054));function d(p){return p!==void 0}function f(p,x){var P=x||{},g=P.defaultValue,v=P.value,R=P.onChange,S=P.postState,L=(0,n.default)(function(){return d(v)?v:d(g)?typeof g=="function"?g():g:typeof p=="function"?p():p}),c=(0,r.default)(L,2),F=c[0],ee=c[1],ge=v!==void 0?v:F,Je=S?S(ge):ge,Xe=(0,a.default)(R),De=(0,n.default)([ge]),je=(0,r.default)(De,2),Ve=je[0],Fe=je[1];(0,s.useLayoutUpdateEffect)(function(){var Oe=Ve[0];F!==Oe&&Xe(F,Oe)},[Ve]),(0,s.useLayoutUpdateEffect)(function(){d(v)||ee(v)},[v]);var Qe=(0,a.default)(function(Oe,We){ee(Oe,We),Fe([ge],We)});return[Je,Qe]}},9054:function(t,u,e){"use strict";var l=e(26745).default,i=e(42050).default;Object.defineProperty(u,"__esModule",{value:!0}),u.default=s;var r=i(e(47747)),a=l(e(21739));function s(n){var d=a.useRef(!1),f=a.useState(n),p=(0,r.default)(f,2),x=p[0],P=p[1];a.useEffect(function(){return d.current=!1,function(){d.current=!0}},[]);function g(v,R){R&&d.current||P(v)}return[x,g]}},79254:function(t,u){"use strict";var e;e={value:!0},u.Z=void 0;var l=function(p){return+setTimeout(p,16)},i=function(p){return clearTimeout(p)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(l=function(p){return window.requestAnimationFrame(p)},i=function(p){return window.cancelAnimationFrame(p)});var r=0,a=new Map;function s(f){a.delete(f)}var n=function(p){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;r+=1;var P=r;function g(v){if(v===0)s(P),p();else{var R=l(function(){g(v-1)});a.set(P,R)}}return g(x),P};n.cancel=function(f){var p=a.get(f);return s(f),i(p)};var d=u.Z=n},61004:function(t,u,e){var l=e(39572);function i(r){if(Array.isArray(r))return l(r)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},97012:function(t){function u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},93215:function(t){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},39647:function(t,u,e){var l=e(32890);function i(r,a){if(r==null)return{};var s=l(r,a),n,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)n=f[d],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},32890:function(t){function u(e,l){if(e==null)return{};var i={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(l.indexOf(a)>=0)&&(i[a]=e[a]);return i}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},37205:function(t,u,e){var l=e(61004),i=e(97012),r=e(66109),a=e(93215);function s(n){return l(n)||i(n)||r(n)||a()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},44750:function(t){function u(e,l){(l==null||l>e.length)&&(l=e.length);for(var i=0,r=Array(l);i<l;i++)r[i]=e[i];return r}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},77780:function(t){function u(e){if(Array.isArray(e))return e}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},82165:function(t,u,e){var l=e(55690);function i(r,a,s){return(a=l(a))in r?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},26745:function(t,u,e){var l=e(19763).default;function i(a){if(typeof WeakMap!="function")return null;var s=new WeakMap,n=new WeakMap;return(i=function(f){return f?n:s})(a)}function r(a,s){if(!s&&a&&a.__esModule)return a;if(a===null||l(a)!="object"&&typeof a!="function")return{default:a};var n=i(s);if(n&&n.has(a))return n.get(a);var d={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in a)if(p!=="default"&&{}.hasOwnProperty.call(a,p)){var x=f?Object.getOwnPropertyDescriptor(a,p):null;x&&(x.get||x.set)?Object.defineProperty(d,p,x):d[p]=a[p]}return d.default=a,n&&n.set(a,d),d}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},33823:function(t){function u(e,l){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var r,a,s,n,d=[],f=!0,p=!1;try{if(s=(i=i.call(e)).next,l===0){if(Object(i)!==i)return;f=!1}else for(;!(f=(r=s.call(i)).done)&&(d.push(r.value),d.length!==l);f=!0);}catch(x){p=!0,a=x}finally{try{if(!f&&i.return!=null&&(n=i.return(),Object(n)!==n))return}finally{if(p)throw a}}return d}}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},6650:function(t){function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},87251:function(t,u,e){var l=e(82165);function i(a,s){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);s&&(d=d.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),n.push.apply(n,d)}return n}function r(a){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?i(Object(n),!0).forEach(function(d){l(a,d,n[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(n,d))})}return a}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},13874:function(t,u,e){var l=e(50933);function i(r,a){if(r==null)return{};var s,n,d=l(r,a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(n=0;n<f.length;n++)s=f[n],a.includes(s)||{}.propertyIsEnumerable.call(r,s)&&(d[s]=r[s])}return d}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},50933:function(t){function u(e,l){if(e==null)return{};var i={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(l.includes(r))continue;i[r]=e[r]}return i}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},47747:function(t,u,e){var l=e(77780),i=e(33823),r=e(39867),a=e(6650);function s(n,d){return l(n)||i(n,d)||r(n,d)||a()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},77747:function(t,u,e){var l=e(19763).default;function i(r,a){if(l(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var n=s.call(r,a||"default");if(l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},55690:function(t,u,e){var l=e(19763).default,i=e(77747);function r(a){var s=i(a,"string");return l(s)=="symbol"?s:s+""}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},19763:function(t){function u(e){"@babel/helpers - typeof";return t.exports=u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},t.exports.__esModule=!0,t.exports.default=t.exports,u(e)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},39867:function(t,u,e){var l=e(44750);function i(r,a){if(r){if(typeof r=="string")return l(r,a);var s={}.toString.call(r).slice(8,-1);return s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set"?Array.from(r):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?l(r,a):void 0}}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
