"use strict";(self.webpackChunk_rc_component_textarea=self.webpackChunk_rc_component_textarea||[]).push([[904],{19128:function(b,o,e){var d;e.r(o),e.d(o,{demos:function(){return pe}});var Z=e(15009),T=e.n(Z),m=e(99289),H=e.n(m),v=e(67294),Y=e(39595),z=e(69945),pe={"docs-demo-simple-demo-simple":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,17262))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18647).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.1.0"}},entry:"index.tsx"},context:{react:d||(d=e.t(v,2)),"@rc-component/textarea":Y},renderOpts:{compile:function(){var P=H()(T()().mark(function h(){var g,L=arguments;return T()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(g=t.sent).default.apply(g,L));case 3:case"end":return t.stop()}},h)}));function w(){return P.apply(this,arguments)}return w}()}},"docs-demo-simple-demo-autosize":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,16151))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33214).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.1.0"}},entry:"index.tsx"},context:{react:d||(d=e.t(v,2)),"@rc-component/textarea":Y},renderOpts:{compile:function(){var P=H()(T()().mark(function h(){var g,L=arguments;return T()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(g=t.sent).default.apply(g,L));case 3:case"end":return t.stop()}},h)}));function w(){return P.apply(this,arguments)}return w}()}},"docs-demo-simple-demo-allowclear":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,98144))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80654).Z},"@rc-component/textarea":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/textarea":Y,react:d||(d=e.t(v,2))},renderOpts:{compile:function(){var P=H()(T()().mark(function h(){var g,L=arguments;return T()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(g=t.sent).default.apply(g,L));case 3:case"end":return t.stop()}},h)}));function w(){return P.apply(this,arguments)}return w}()}},"docs-demo-simple-demo-showcount":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,88941))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(672).Z},"@rc-component/textarea":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":z,"@rc-component/textarea":Y,react:d||(d=e.t(v,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":z},renderOpts:{compile:function(){var P=H()(T()().mark(function h(){var g,L=arguments;return T()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(g=t.sent).default.apply(g,L));case 3:case"end":return t.stop()}},h)}));function w(){return P.apply(this,arguments)}return w}()}}}},11171:function(b,o,e){e.r(o),e.d(o,{demos:function(){return Z}});var d=e(67294),Z={}},39595:function(b,o,e){e.r(o),e.d(o,{ResizableTextArea:function(){return je},default:function(){return Ge}});var d=e(9783),Z=e.n(d),T=e(97857),m=e.n(T),H=e(19632),v=e.n(H),Y=e(5574),z=e.n(Y),pe=e(13769),P=e.n(pe),w=e(93967),h=e.n(w),g=e(71154),L=e(94103),G=e(77830),t=e(27848),l=e(67294),Le=e(52677),De=e.n(Le),Fe=e(73780),Pe=e(19831),Me=e(86440),Ne=`
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
`,$e=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],fe={},I;function Be(n){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n.getAttribute("id")||n.getAttribute("data-reactid")||n.getAttribute("name");if(N&&fe[r])return fe[r];var i=window.getComputedStyle(n),M=i.getPropertyValue("box-sizing")||i.getPropertyValue("-moz-box-sizing")||i.getPropertyValue("-webkit-box-sizing"),y=parseFloat(i.getPropertyValue("padding-bottom"))+parseFloat(i.getPropertyValue("padding-top")),u=parseFloat(i.getPropertyValue("border-bottom-width"))+parseFloat(i.getPropertyValue("border-top-width")),p=$e.map(function(f){return"".concat(f,":").concat(i.getPropertyValue(f))}).join(";"),j={sizingStyle:p,paddingSize:y,borderSize:u,boxSizing:M};return N&&r&&(fe[r]=j),j}function Ze(n){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;I||(I=document.createElement("textarea"),I.setAttribute("tab-index","-1"),I.setAttribute("aria-hidden","true"),I.setAttribute("name","hiddenTextarea"),document.body.appendChild(I)),n.getAttribute("wrap")?I.setAttribute("wrap",n.getAttribute("wrap")):I.removeAttribute("wrap");var M=Be(n,N),y=M.paddingSize,u=M.borderSize,p=M.boxSizing,j=M.sizingStyle;I.setAttribute("style","".concat(j,";").concat(Ne)),I.value=n.value||n.placeholder||"";var f=void 0,x=void 0,V,E=I.scrollHeight;if(p==="border-box"?E+=u:p==="content-box"&&(E-=y),r!==null||i!==null){I.value=" ";var U=I.scrollHeight-y;r!==null&&(f=U*r,p==="border-box"&&(f=f+y+u),E=Math.max(f,E)),i!==null&&(x=U*i,p==="border-box"&&(x=x+y+u),V=E>x?"":"hidden",E=Math.min(x,E))}var C={height:E,overflowY:V,resize:"none"};return f&&(C.minHeight=f),x&&(C.maxHeight=x),C}var K=e(85893),Ke=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],xe=0,he=1,ge=2,Ue=l.forwardRef(function(n,N){var r=n,i=r.prefixCls,M=r.defaultValue,y=r.value,u=r.autoSize,p=r.onResize,j=r.className,f=r.style,x=r.disabled,V=r.onChange,E=r.onInternalAutoSize,U=P()(r,Ke),C=(0,t.Z)(M,{value:y,postState:function(c){return c!=null?c:""}}),J=z()(C,2),Ie=J[0],ye=J[1],X=function(c){ye(c.target.value),V==null||V(c)},R=l.useRef();l.useImperativeHandle(N,function(){return{textArea:R.current}});var Se=l.useMemo(function(){return u&&De()(u)==="object"?[u.minRows,u.maxRows]:[]},[u]),S=z()(Se,2),D=S[0],Q=S[1],q=!!u,le=function(){try{if(document.activeElement===R.current){var c=R.current,ze=c.selectionStart,Ee=c.selectionEnd,ce=c.scrollTop;R.current.setSelectionRange(ze,Ee),R.current.scrollTop=ce}}catch(me){}},ie=l.useState(ge),_=z()(ie,2),O=_[0],ee=_[1],Ce=l.useState(),ne=z()(Ce,2),te=ne[0],ue=ne[1],k=function(){ee(xe)};(0,Pe.default)(function(){q&&k()},[y,D,Q,q]),(0,Pe.default)(function(){if(O===xe)ee(he);else if(O===he){var F=Ze(R.current,!1,D,Q);ee(ge),ue(F)}else le()},[O]);var de=l.useRef(),ae=function(){Me.Z.cancel(de.current)},Re=function(c){O===ge&&(p==null||p(c),u&&(ae(),de.current=(0,Me.Z)(function(){k()})))};l.useEffect(function(){return ae},[]);var oe=q?te:null,W=m()(m()({},f),oe);return(O===xe||O===he)&&(W.overflowY="hidden",W.overflowX="hidden"),(0,K.jsx)(Fe.Z,{onResize:Re,disabled:!(u||p),children:(0,K.jsx)("textarea",m()(m()({},U),{},{ref:R,style:W,className:h()(i,j,Z()({},"".concat(i,"-disabled"),x)),disabled:x,value:Ie,onChange:X}))})}),je=Ue,We=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],He=l.forwardRef(function(n,N){var r,i=n.defaultValue,M=n.value,y=n.onFocus,u=n.onBlur,p=n.onChange,j=n.allowClear,f=n.maxLength,x=n.onCompositionStart,V=n.onCompositionEnd,E=n.suffix,U=n.prefixCls,C=U===void 0?"rc-textarea":U,J=n.showCount,Ie=n.count,ye=n.className,X=n.style,R=n.disabled,Se=n.hidden,S=n.classNames,D=n.styles,Q=n.onResize,q=n.onClear,le=n.onPressEnter,ie=n.readOnly,_=n.autoSize,O=n.onKeyDown,ee=P()(n,We),Ce=(0,t.Z)(i,{value:M,defaultValue:i}),ne=z()(Ce,2),te=ne[0],ue=ne[1],k=te==null?"":String(te),de=l.useState(!1),ae=z()(de,2),Re=ae[0],oe=ae[1],W=l.useRef(!1),F=l.useState(null),c=z()(F,2),ze=c[0],Ee=c[1],ce=(0,l.useRef)(null),me=(0,l.useRef)(null),$=function(){var a;return(a=me.current)===null||a===void 0?void 0:a.textArea},Ve=function(){$().focus()};(0,l.useImperativeHandle)(N,function(){var s;return{resizableTextArea:me.current,focus:Ve,blur:function(){$().blur()},nativeElement:((s=ce.current)===null||s===void 0?void 0:s.nativeElement)||$()}}),(0,l.useEffect)(function(){oe(function(s){return!R&&s})},[R]);var Je=l.useState(null),Oe=z()(Je,2),Ae=Oe[0],Xe=Oe[1];l.useEffect(function(){if(Ae){var s;(s=$()).setSelectionRange.apply(s,v()(Ae))}},[Ae]);var A=(0,L.ZP)(Ie,J),re=(r=A.max)!==null&&r!==void 0?r:f,Qe=Number(re)>0,be=A.strategy(k),ke=!!re&&be>re,we=function(a,B){var ve=B;!W.current&&A.exceedFormatter&&A.max&&A.strategy(B)>A.max&&(ve=A.exceedFormatter(B,{max:A.max}),B!==ve&&Xe([$().selectionStart||0,$().selectionEnd||0])),ue(ve),(0,G.rJ)(a.currentTarget,a,p,ve)},qe=function(a){W.current=!0,x==null||x(a)},_e=function(a){W.current=!1,we(a,a.currentTarget.value),V==null||V(a)},en=function(a){we(a,a.target.value)},nn=function(a){a.key==="Enter"&&le&&!a.nativeEvent.isComposing&&le(a),O==null||O(a)},tn=function(a){oe(!0),y==null||y(a)},an=function(a){oe(!1),u==null||u(a)},on=function(a){ue(""),Ve(),(0,G.rJ)($(),a,p)},Te=E,se;A.show&&(A.showFormatter?se=A.showFormatter({value:k,count:be,maxLength:re}):se="".concat(be).concat(Qe?" / ".concat(re):""),Te=(0,K.jsxs)(K.Fragment,{children:[Te,(0,K.jsx)("span",{className:h()("".concat(C,"-data-count"),S==null?void 0:S.count),style:D==null?void 0:D.count,children:se})]}));var rn=function(a){var B;Q==null||Q(a),(B=$())!==null&&B!==void 0&&B.style.height&&Ee(!0)},sn=!_&&!J&&!j;return(0,K.jsx)(g.Q,{ref:ce,value:k,allowClear:j,handleReset:on,suffix:Te,prefixCls:C,classNames:m()(m()({},S),{},{affixWrapper:h()(S==null?void 0:S.affixWrapper,Z()(Z()({},"".concat(C,"-show-count"),J),"".concat(C,"-textarea-allow-clear"),j))}),disabled:R,focused:Re,className:h()(ye,ke&&"".concat(C,"-out-of-range")),style:m()(m()({},X),ze&&!sn?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof se=="string"?se:void 0}},hidden:Se,readOnly:ie,onClear:q,children:(0,K.jsx)(je,m()(m()({},ee),{},{autoSize:_,maxLength:f,onKeyDown:nn,onChange:en,onFocus:tn,onBlur:an,onCompositionStart:qe,onCompositionEnd:_e,className:h()(S==null?void 0:S.textarea),style:m()(m()({},D==null?void 0:D.textarea),{},{resize:X==null?void 0:X.resize}),disabled:R,prefixCls:C,onResize:rn,ref:me,readOnly:ie}))})}),Ye=He,Ge=Ye},69945:function(b,o,e){e.r(o)},49726:function(b,o,e){e.r(o),e.d(o,{texts:function(){return d}});const d=[]},51446:function(b,o,e){e.r(o),e.d(o,{texts:function(){return d}});const d=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(b,o){o.Z=`@textarea-prefix-cls: rc-textarea;

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
`},80654:function(b,o){o.Z=`/* eslint-disable no-console */
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
`},33214:function(b,o){o.Z=`/* eslint-disable no-console */
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
`},672:function(b,o){o.Z=`/* eslint-disable no-console */
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
`},18647:function(b,o){o.Z=`/* eslint-disable no-console */
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
`}}]);
