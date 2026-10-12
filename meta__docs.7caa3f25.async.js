"use strict";(self.webpackChunk_rc_component_textarea=self.webpackChunk_rc_component_textarea||[]).push([[467],{39076:(function(x,t,e){var o;e.r(t),e.d(t,{demos:function(){return w}});var T=e(55420),g=e.n(T),$=e(98312),I=e.n($),l=e(74159),O=e(51108),D=e(38411),p={};e.r(p),e.d(p,{ResizableTextArea:function(){return O.o},default:function(){return O.A}});var w={"docs-demo-simple-demo-simple":{component:l.memo(l.lazy(function(){return e.e(917).then(e.bind(e,87285))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90637).A},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.3.0"}},entry:"index.tsx"},routeId:"docs/demo/simple",context:{react:o||(o=e.t(l,2)),"@rc-component/textarea":p},renderOpts:{compile:(function(){var y=I()(g()().mark(function d(){var u,r=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(306).then(e.bind(e,12306));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,r));case 3:case"end":return n.stop()}},d)}));function z(){return y.apply(this,arguments)}return z})()}},"docs-demo-simple-demo-autosize":{component:l.memo(l.lazy(function(){return e.e(917).then(e.bind(e,49245))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-autosize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70605).A},react:{type:"NPM",value:"18.3.1"},"@rc-component/textarea":{type:"NPM",value:"1.3.0"}},entry:"index.tsx"},routeId:"docs/demo/simple",context:{react:o||(o=e.t(l,2)),"@rc-component/textarea":p},renderOpts:{compile:(function(){var y=I()(g()().mark(function d(){var u,r=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(306).then(e.bind(e,12306));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,r));case 3:case"end":return n.stop()}},d)}));function z(){return y.apply(this,arguments)}return z})()}},"docs-demo-simple-demo-allowclear":{component:l.memo(l.lazy(function(){return e.e(917).then(e.bind(e,24481))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-allowclear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92541).A},"@rc-component/textarea":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},routeId:"docs/demo/simple",context:{"@rc-component/textarea":p,react:o||(o=e.t(l,2))},renderOpts:{compile:(function(){var y=I()(g()().mark(function d(){var u,r=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(306).then(e.bind(e,12306));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,r));case 3:case"end":return n.stop()}},d)}));function z(){return y.apply(this,arguments)}return z})()}},"docs-demo-simple-demo-showcount":{component:l.memo(l.lazy(function(){return e.e(917).then(e.bind(e,84601))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-showcount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87009).A},"@rc-component/textarea":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(63285).A}},entry:"index.tsx"},routeId:"docs/demo/simple",context:{"../../assets/index.less":D,"@rc-component/textarea":p,react:o||(o=e.t(l,2)),"/Users/jilin/projects/antd/rc-textarea/assets/index.less":D},renderOpts:{compile:(function(){var y=I()(g()().mark(function d(){var u,r=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(306).then(e.bind(e,12306));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,r));case 3:case"end":return n.stop()}},d)}));function z(){return y.apply(this,arguments)}return z})()}}}}),91106:(function(x,t,e){e.r(t),e.d(t,{demos:function(){return T}});var o=e(74159),T={}}),51108:(function(x,t,e){e.r(t),e.d(t,{o:function(){return ie},A:function(){return de}});var o=e(88415),T=e(68328),g=e.n(T),$=e(1974),I=e.n($),l=e(63859),O=e.n(l),D=e(11604),p=e.n(D),w=e(71640),y=e.n(w),z=e(77311),d=e(51969),u=e(34164),r=e(74159),M=`
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
`,n=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],N={},c;function re(m){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=m.getAttribute("id")||m.getAttribute("data-reactid")||m.getAttribute("name");if(C&&N[a])return N[a];var s=window.getComputedStyle(m),A=s.getPropertyValue("box-sizing")||s.getPropertyValue("-moz-box-sizing")||s.getPropertyValue("-webkit-box-sizing"),S=parseFloat(s.getPropertyValue("padding-bottom"))+parseFloat(s.getPropertyValue("padding-top")),i=parseFloat(s.getPropertyValue("border-bottom-width"))+parseFloat(s.getPropertyValue("border-top-width")),v=n.map(function(f){return"".concat(f,":").concat(s.getPropertyValue(f))}).join(";"),E={sizingStyle:v,paddingSize:S,borderSize:i,boxSizing:A};return C&&a&&(N[a]=E),E}function oe(m){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;c||(c=document.createElement("textarea"),c.setAttribute("tab-index","-1"),c.setAttribute("aria-hidden","true"),c.setAttribute("name","hiddenTextarea"),document.body.appendChild(c)),m.getAttribute("wrap")?c.setAttribute("wrap",m.getAttribute("wrap")):c.removeAttribute("wrap");var A=re(m,C),S=A.paddingSize,i=A.borderSize,v=A.boxSizing,E=A.sizingStyle;c.setAttribute("style","".concat(E,";").concat(M)),c.value=m.value||m.placeholder||"";var f=void 0,h=void 0,b,R=c.scrollHeight;if(v==="border-box"?R+=i:v==="content-box"&&(R-=S),a!==null||s!==null){c.value=" ";var L=c.scrollHeight-S;a!==null&&(f=L*a,v==="border-box"&&(f=f+S+i),R=Math.max(f,R)),s!==null&&(h=L*s,v==="border-box"&&(h=h+S+i),b=R>h?"":"hidden",R=Math.min(h,R))}var j={height:R,overflowY:b,resize:"none"};return f&&(j.minHeight=f),h&&(j.maxHeight=h),j}var X=e(74848),se=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],B=0,K=1,F=2,le=r.forwardRef(function(m,C){var a=m,s=a.prefixCls,A=a.defaultValue,S=a.value,i=a.autoSize,v=a.onResize,E=a.className,f=a.style,h=a.disabled,b=a.onChange,R=a.onInternalAutoSize,L=y()(a,se),j=(0,d.PW)(A,S),J=p()(j,2),W=J[0],ue=J[1],ce=W!=null?W:"",me=function(U){ue(U.target.value),b==null||b(U)},H=r.useRef();r.useImperativeHandle(C,function(){return{textArea:H.current}});var pe=r.useMemo(function(){return i&&O()(i)==="object"?[i.minRows,i.maxRows]:[]},[i]),Q=p()(pe,2),k=Q[0],q=Q[1],Y=!!i,ve=r.useState(F),_=p()(ve,2),P=_[0],G=_[1],fe=r.useState(),ee=p()(fe,2),xe=ee[0],ge=ee[1],ne=function(){G(B)};(0,d.Nf)(function(){Y&&ne()},[S,k,q,Y]),(0,d.Nf)(function(){if(P===B)G(K);else if(P===K){var V=oe(H.current,!1,k,q);G(F),ge(V)}},[P]);var te=r.useRef(),ae=function(){d.er.cancel(te.current)},he=function(U){P===F&&(v==null||v(U),i&&(ae(),te.current=(0,d.er)(function(){ne()})))};r.useEffect(function(){return ae},[]);var Ie=Y?xe:null,Z=I()(I()({},f),Ie);return(P===B||P===K)&&(Z.overflowY="hidden",Z.overflowX="hidden"),(0,X.jsx)(z.Ay,{onResize:he,disabled:!(i||v),children:(0,X.jsx)("textarea",I()(I()({},L),{},{ref:H,style:Z,className:(0,u.$)(s,E,g()({},"".concat(s,"-disabled"),h)),disabled:h,value:ce,onChange:me}))})}),ie=le,de=o.fs}),38411:(function(x,t,e){e.r(t)}),47340:(function(x,t,e){e.r(t);const o=[];e.d(t,["texts",0,o])}),38158:(function(x,t,e){e.r(t);const o=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"Pretty Textarea react component used in ",paraId:1,tocIndex:0},{value:"ant.design",paraId:1,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"https://react-component.github.io/textarea/",paraId:2,tocIndex:1},{value:`import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
`,paraId:3,tocIndex:3},{value:"Property",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"prefixCls",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"rc-textarea",paraId:4,tocIndex:4},{value:"className",paraId:4,tocIndex:4},{value:"string",paraId:4,tocIndex:4},{value:"''",paraId:4,tocIndex:4},{value:"additional class name of textarea",paraId:4,tocIndex:4},{value:"style",paraId:4,tocIndex:4},{value:"React.CSSProperties",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"style properties of textarea",paraId:4,tocIndex:4},{value:"autoSize",paraId:4,tocIndex:4},{value:"boolean | object",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:4,tocIndex:4},{value:"true|false",paraId:4,tocIndex:4},{value:" or an object ",paraId:4,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:4,tocIndex:4},{value:"onPressEnter",paraId:4,tocIndex:4},{value:"function(e)",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:4,tocIndex:4},{value:"onResize",paraId:4,tocIndex:4},{value:"function({ width, height })",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:4,tocIndex:4},{value:`npm install
npm start
`,paraId:5,tocIndex:5},{value:"rc-textarea is released under the MIT license.",paraId:6,tocIndex:6}];e.d(t,["texts",0,o])}),63285:(function(x,t){t.A=`@textarea-prefix-cls: rc-textarea;

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
`}),92541:(function(x,t){t.A=`/* eslint-disable no-console */
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
`}),70605:(function(x,t){t.A=`/* eslint-disable no-console */
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
`}),87009:(function(x,t){t.A=`/* eslint-disable no-console */
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
`}),90637:(function(x,t){t.A=`/* eslint-disable no-console */
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
`})}]);
