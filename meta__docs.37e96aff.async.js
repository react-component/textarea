"use strict";(self.webpackChunk_rc_component_textarea=self.webpackChunk_rc_component_textarea||[]).push([[904],{19128:function(R,o,e){var u;e.r(o),e.d(o,{demos:function(){return ve}});var $=e(15009),z=e.n($),f=e(99289),W=e.n(f),d=e(67294),H=e(39595),y=e(69945),ve={"docs-demo-simple-demo-simple":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,17262))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18647).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.2.0"}},entry:"index.tsx"},context:{react:u||(u=e.t(d,2)),"@rc-component/textarea":H},renderOpts:{compile:function(){var E=W()(z()().mark(function V(){var c,A=arguments;return z()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(c=n.sent).default.apply(c,A));case 3:case"end":return n.stop()}},V)}));function M(){return E.apply(this,arguments)}return M}()}},"docs-demo-simple-demo-autosize":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,16151))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33214).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.2.0"}},entry:"index.tsx"},context:{react:u||(u=e.t(d,2)),"@rc-component/textarea":H},renderOpts:{compile:function(){var E=W()(z()().mark(function V(){var c,A=arguments;return z()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(c=n.sent).default.apply(c,A));case 3:case"end":return n.stop()}},V)}));function M(){return E.apply(this,arguments)}return M}()}},"docs-demo-simple-demo-allowclear":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,98144))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80654).Z},"@rc-component/textarea":{type:"NPM",value:"1.2.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/textarea":H,react:u||(u=e.t(d,2))},renderOpts:{compile:function(){var E=W()(z()().mark(function V(){var c,A=arguments;return z()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(c=n.sent).default.apply(c,A));case 3:case"end":return n.stop()}},V)}));function M(){return E.apply(this,arguments)}return M}()}},"docs-demo-simple-demo-showcount":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,88941))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(672).Z},"@rc-component/textarea":{type:"NPM",value:"1.2.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":y,"@rc-component/textarea":H,react:u||(u=e.t(d,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":y},renderOpts:{compile:function(){var E=W()(z()().mark(function V(){var c,A=arguments;return z()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(c=n.sent).default.apply(c,A));case 3:case"end":return n.stop()}},V)}));function M(){return E.apply(this,arguments)}return M}()}}}},11171:function(R,o,e){e.r(o),e.d(o,{demos:function(){return $}});var u=e(67294),$={}},39595:function(R,o,e){e.r(o),e.d(o,{ResizableTextArea:function(){return be},default:function(){return We}});var u=e(9783),$=e.n(u),z=e(97857),f=e.n(z),W=e(19632),d=e.n(W),H=e(5574),y=e.n(H),ve=e(13769),E=e.n(ve),M=e(19789),V=e(94103),c=e(77830),A=e(96607),O=e(90512),n=e(67294),Ve=e(52677),Oe=e.n(Ve),we=e(73780),Ee=e(19831),Ae=e(86440),Le=`
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
`,De=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],pe={},x;function Ne(t){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=t.getAttribute("id")||t.getAttribute("data-reactid")||t.getAttribute("name");if(L&&pe[r])return pe[r];var i=window.getComputedStyle(t),b=i.getPropertyValue("box-sizing")||i.getPropertyValue("-moz-box-sizing")||i.getPropertyValue("-webkit-box-sizing"),h=parseFloat(i.getPropertyValue("padding-bottom"))+parseFloat(i.getPropertyValue("padding-top")),l=parseFloat(i.getPropertyValue("border-bottom-width"))+parseFloat(i.getPropertyValue("border-top-width")),m=De.map(function(v){return"".concat(v,":").concat(i.getPropertyValue(v))}).join(";"),T={sizingStyle:m,paddingSize:h,borderSize:l,boxSizing:b};return L&&r&&(pe[r]=T),T}function $e(t){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;x||(x=document.createElement("textarea"),x.setAttribute("tab-index","-1"),x.setAttribute("aria-hidden","true"),x.setAttribute("name","hiddenTextarea"),document.body.appendChild(x)),t.getAttribute("wrap")?x.setAttribute("wrap",t.getAttribute("wrap")):x.removeAttribute("wrap");var b=Ne(t,L),h=b.paddingSize,l=b.borderSize,m=b.boxSizing,T=b.sizingStyle;x.setAttribute("style","".concat(T,";").concat(Le)),x.value=t.value||t.placeholder||"";var v=void 0,p=void 0,P,C=x.scrollHeight;if(m==="border-box"?C+=l:m==="content-box"&&(C-=h),r!==null||i!==null){x.value=" ";var B=x.scrollHeight-h;r!==null&&(v=B*r,m==="border-box"&&(v=v+h+l),C=Math.max(v,C)),i!==null&&(p=B*i,m==="border-box"&&(p=p+h+l),P=C>p?"":"hidden",C=Math.min(p,C))}var g={height:C,overflowY:P,resize:"none"};return v&&(g.minHeight=v),p&&(g.maxHeight=p),g}var F=e(85893),Fe=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],fe=0,xe=1,he=2,Be=n.forwardRef(function(t,L){var r=t,i=r.prefixCls,b=r.defaultValue,h=r.value,l=r.autoSize,m=r.onResize,T=r.className,v=r.style,p=r.disabled,P=r.onChange,C=r.onInternalAutoSize,B=E()(r,Fe),g=(0,A.Z)(b,h),Y=y()(g,2),q=Y[0],ge=Y[1],G=q!=null?q:"",J=function(U){ge(U.target.value),P==null||P(U)},_=n.useRef();n.useImperativeHandle(L,function(){return{textArea:_.current}});var I=n.useMemo(function(){return l&&Oe()(l)==="object"?[l.minRows,l.maxRows]:[]},[l]),w=y()(I,2),X=w[0],ie=w[1],Q=!!l,ue=n.useState(he),ee=y()(ue,2),j=ee[0],ne=ee[1],Ie=n.useState(),te=y()(Ie,2),ae=te[0],de=te[1],k=function(){ne(fe)};(0,Ee.default)(function(){Q&&k()},[h,X,ie,Q]),(0,Ee.default)(function(){if(j===fe)ne(xe);else if(j===xe){var K=$e(_.current,!1,X,ie);ne(he),de(K)}},[j]);var ce=n.useRef(),oe=function(){Ae.Z.cancel(ce.current)},ye=function(U){j===he&&(m==null||m(U),l&&(oe(),ce.current=(0,Ae.Z)(function(){k()})))};n.useEffect(function(){return oe},[]);var re=Q?ae:null,Z=f()(f()({},v),re);return(j===fe||j===xe)&&(Z.overflowY="hidden",Z.overflowX="hidden"),(0,F.jsx)(we.Z,{onResize:ye,disabled:!(l||m),children:(0,F.jsx)("textarea",f()(f()({},B),{},{ref:_,style:Z,className:(0,O.W)(i,T,$()({},"".concat(i,"-disabled"),p)),disabled:p,value:G,onChange:J}))})}),be=Be,Ze=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],Ke=n.forwardRef(function(t,L){var r,i=t.defaultValue,b=t.value,h=t.onFocus,l=t.onBlur,m=t.onChange,T=t.allowClear,v=t.maxLength,p=t.onCompositionStart,P=t.onCompositionEnd,C=t.suffix,B=t.prefixCls,g=B===void 0?"rc-textarea":B,Y=t.showCount,q=t.count,ge=t.className,G=t.style,J=t.disabled,_=t.hidden,I=t.classNames,w=t.styles,X=t.onResize,ie=t.onClear,Q=t.onPressEnter,ue=t.readOnly,ee=t.autoSize,j=t.onKeyDown,ne=E()(t,Ze),Ie=(0,A.Z)(i,b),te=y()(Ie,2),ae=te[0],de=te[1],k=ae==null?"":String(ae),ce=n.useState(!1),oe=y()(ce,2),ye=oe[0],re=oe[1],Z=n.useRef(!1),K=n.useState(null),U=y()(K,2),He=U[0],Ye=U[1],Te=(0,n.useRef)(null),Ce=(0,n.useRef)(null),D=function(){var a;return(a=Ce.current)===null||a===void 0?void 0:a.textArea},Pe=function(){D().focus()};(0,n.useImperativeHandle)(L,function(){var s;return{resizableTextArea:Ce.current,focus:Pe,blur:function(){D().blur()},nativeElement:((s=Te.current)===null||s===void 0?void 0:s.nativeElement)||D()}}),(0,n.useEffect)(function(){re(function(s){return!J&&s})},[J]);var Ge=n.useState(null),je=y()(Ge,2),Se=je[0],Je=je[1];n.useEffect(function(){if(Se){var s;(s=D()).setSelectionRange.apply(s,d()(Se))}},[Se]);var S=(0,V.ZP)(q,Y),se=(r=S.max)!==null&&r!==void 0?r:v,Xe=Number(se)>0,Re=S.strategy(k),Qe=!!se&&Re>se,Me=function(a,N){var me=N;!Z.current&&S.exceedFormatter&&S.max&&S.strategy(N)>S.max&&(me=S.exceedFormatter(N,{max:S.max}),N!==me&&Je([D().selectionStart||0,D().selectionEnd||0])),de(me),(0,c.rJ)(a.currentTarget,a,m,me)},ke=function(a){Z.current=!0,p==null||p(a)},qe=function(a){Z.current=!1,Me(a,a.currentTarget.value),P==null||P(a)},_e=function(a){Me(a,a.target.value)},en=function(a){a.key==="Enter"&&Q&&!a.nativeEvent.isComposing&&Q(a),j==null||j(a)},nn=function(a){re(!0),h==null||h(a)},tn=function(a){re(!1),l==null||l(a)},an=function(a){de(""),Pe(),(0,c.rJ)(D(),a,m)},ze=C,le;S.show&&(S.showFormatter?le=S.showFormatter({value:k,count:Re,maxLength:se}):le="".concat(Re).concat(Xe?" / ".concat(se):""),ze=(0,F.jsxs)(F.Fragment,{children:[ze,(0,F.jsx)("span",{className:(0,O.W)("".concat(g,"-data-count"),I==null?void 0:I.count),style:w==null?void 0:w.count,children:le})]}));var on=function(a){var N;X==null||X(a),(N=D())!==null&&N!==void 0&&N.style.height&&Ye(!0)},rn=!ee&&!Y&&!T;return(0,F.jsx)(M.Q,{ref:Te,value:k,allowClear:T,handleReset:an,suffix:ze,prefixCls:g,classNames:f()(f()({},I),{},{affixWrapper:(0,O.W)(I==null?void 0:I.affixWrapper,$()($()({},"".concat(g,"-show-count"),Y),"".concat(g,"-textarea-allow-clear"),T))}),disabled:J,focused:ye,className:(0,O.W)(ge,Qe&&"".concat(g,"-out-of-range")),style:f()(f()({},G),He&&!rn?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof le=="string"?le:void 0}},hidden:_,readOnly:ue,onClear:ie,children:(0,F.jsx)(be,f()(f()({},ne),{},{autoSize:ee,maxLength:v,onKeyDown:en,onChange:_e,onFocus:nn,onBlur:tn,onCompositionStart:ke,onCompositionEnd:qe,className:(0,O.W)(I==null?void 0:I.textarea),style:f()({resize:G==null?void 0:G.resize},w==null?void 0:w.textarea),disabled:J,prefixCls:g,onResize:on,ref:Ce,readOnly:ue}))})}),Ue=Ke,We=Ue},69945:function(R,o,e){e.r(o)},49726:function(R,o,e){e.r(o),e.d(o,{texts:function(){return u}});const u=[]},51446:function(R,o,e){e.r(o),e.d(o,{texts:function(){return u}});const u=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}]},86834:function(R,o){o.Z=`@textarea-prefix-cls: rc-textarea;

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
`},80654:function(R,o){o.Z=`/* eslint-disable no-console */
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
`},33214:function(R,o){o.Z=`/* eslint-disable no-console */
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
`},672:function(R,o){o.Z=`/* eslint-disable no-console */
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
`},18647:function(R,o){o.Z=`/* eslint-disable no-console */
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
