"use strict";(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[433],{54239:function(ee,g,e){e.r(g),e.d(g,{default:function(){return m}});var O=e(5574),P=e.n(O),z=e(39595),v=e(67294),o=e(85893);function m(){var W=(0,v.useState)(`hello
world`),h=P()(W,2),b=h[0],_=h[1],j=function(U){var c=U.target.value;_(c)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Uncontrolled"}),(0,o.jsx)(z.Z,{autoSize:!0,allowClear:!0}),(0,o.jsx)("p",{children:"controlled"}),(0,o.jsx)(z.Z,{value:b,onChange:j,allowClear:!0})]})}},31797:function(ee,g,e){e.r(g),e.d(g,{default:function(){return m}});var O=e(5574),P=e.n(O),z=e(67294),v=e(39595),o=e(85893);function m(){var W=(0,z.useState)(`hello
world`),h=P()(W,2),b=h[0],_=h[1],j=function(c){var x=c.target.value;_(x)},M=function(c){var x=c.width,i=c.height;console.log("size is changed, width:".concat(x," height:").concat(i))};return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"when set to true"}),(0,o.jsx)(v.Z,{autoSize:!0,onResize:M,value:b,onChange:j}),(0,o.jsx)("p",{children:"when set to object of minRows and maxRows"}),(0,o.jsx)(v.Z,{autoSize:{minRows:5,maxRows:15},onResize:M,value:b,onChange:j})]})}},39919:function(ee,g,e){e.r(g),e.d(g,{default:function(){return m}});var O=e(5574),P=e.n(O),z=e(39595),v=e(67294),o=e(85893);function m(){var W=(0,v.useState)(`hello
world`),h=P()(W,2),b=h[0],_=h[1],j=function(U){var c=U.target.value;_(c)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Uncontrolled"}),(0,o.jsx)(z.Z,{autoSize:!0,showCount:!0}),(0,o.jsx)("p",{children:"controlled"}),(0,o.jsx)(z.Z,{value:b,onChange:j,showCount:!0,maxLength:100})]})}},11289:function(ee,g,e){e.r(g),e.d(g,{default:function(){return m}});var O=e(5574),P=e.n(O),z=e(67294),v=e(39595),o=e(85893);function m(){var W=(0,z.useState)(""),h=P()(W,2),b=h[0],_=h[1],j=function(x){var i=x.target.value;console.log(x.target.value),_(i)},M=function(x){var i=x.width,le=x.height;console.log("size is changed, width:".concat(i," height:").concat(le))},U=function(x){console.log("enter key is pressed")};return(0,o.jsx)("div",{children:(0,o.jsx)(v.Z,{prefixCls:"custom-textarea",onPressEnter:U,onResize:M,value:b,onChange:j,autoFocus:!0,onFocus:function(){return console.log("focus")}})})}},39595:function(ee,g,e){e.d(g,{Z:function(){return Ie}});var O=e(52677),P=e.n(O),z=e(97857),v=e.n(z),o=e(5574),m=e.n(o),W=e(13769),h=e.n(W),b=e(19632),_=e.n(b),j=e(94184),M=e.n(j),U=e(59775),c=e(80133),x=e(60869),i=e(67294),le=e(9783),_e=e.n(le),Ce=e(48555),xe=e(82546),Se=e(64543),Re=`
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
`,Ae=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],ie={},C;function ze(t){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=t.getAttribute("id")||t.getAttribute("data-reactid")||t.getAttribute("name");if(S&&ie[n])return ie[n];var s=window.getComputedStyle(t),f=s.getPropertyValue("box-sizing")||s.getPropertyValue("-moz-box-sizing")||s.getPropertyValue("-webkit-box-sizing"),T=parseFloat(s.getPropertyValue("padding-bottom"))+parseFloat(s.getPropertyValue("padding-top")),d=parseFloat(s.getPropertyValue("border-bottom-width"))+parseFloat(s.getPropertyValue("border-top-width")),u=Ae.map(function(p){return"".concat(p,":").concat(s.getPropertyValue(p))}).join(";"),E={sizingStyle:u,paddingSize:T,borderSize:d,boxSizing:f};return S&&n&&(ie[n]=E),E}function ye(t){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;C||(C=document.createElement("textarea"),C.setAttribute("tab-index","-1"),C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),t.getAttribute("wrap")?C.setAttribute("wrap",t.getAttribute("wrap")):C.removeAttribute("wrap");var f=ze(t,S),T=f.paddingSize,d=f.borderSize,u=f.boxSizing,E=f.sizingStyle;C.setAttribute("style","".concat(E,";").concat(Re)),C.value=t.value||t.placeholder||"";var p=void 0,R=void 0,D,l=C.scrollHeight;if(u==="border-box"?l+=d:u==="content-box"&&(l-=T),n!==null||s!==null){C.value=" ";var L=C.scrollHeight-T;n!==null&&(p=L*n,u==="border-box"&&(p=p+T+d),l=Math.max(p,l)),s!==null&&(R=L*s,u==="border-box"&&(R=R+T+d),D=l>R?"":"hidden",l=Math.min(R,l))}var K={height:l,overflowY:D,resize:"none"};return p&&(K.minHeight=p),R&&(K.maxHeight=R),K}var F=e(85893),Pe=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],ue=0,de=1,ce=2,be=i.forwardRef(function(t,S){var n=t,s=n.prefixCls,f=n.onPressEnter,T=n.defaultValue,d=n.value,u=n.autoSize,E=n.onResize,p=n.className,R=n.style,D=n.disabled,l=n.onChange,L=n.onInternalAutoSize,K=h()(n,Pe),B=(0,x.Z)(T,{value:d,postState:function(r){return r!=null?r:""}}),G=m()(B,2),H=G[0],ve=G[1],te=function(r){ve(r.target.value),l==null||l(r)},A=i.useRef();i.useImperativeHandle(S,function(){return{textArea:A.current}});var X=i.useMemo(function(){return u&&P()(u)==="object"?[u.minRows,u.maxRows]:[]},[u]),Z=m()(X,2),ne=Z[0],Q=Z[1],$=!!u,ae=function(){try{if(document.activeElement===A.current){var r=A.current,y=r.selectionStart,ge=r.selectionEnd,Oe=r.scrollTop;A.current.setSelectionRange(y,ge),A.current.scrollTop=Oe}}catch(We){}},k=i.useState(ce),Y=m()(k,2),V=Y[0],w=Y[1],fe=i.useState(),re=m()(fe,2),me=re[0],he=re[1],oe=function(){w(ue)};(0,xe.default)(function(){$&&oe()},[d,ne,Q,$]),(0,xe.default)(function(){if(V===ue)w(de);else if(V===de){var a=ye(A.current,!1,ne,Q);w(ce),he(a)}else ae()},[V]);var N=i.useRef(),q=function(){Se.Z.cancel(N.current)},se=function(r){V===ce&&(E==null||E(r),u&&(q(),N.current=(0,Se.Z)(function(){oe()})))};i.useEffect(function(){return q},[]);var J=$?me:null,I=v()(v()({},R),J);return(V===ue||V===de)&&(I.overflowY="hidden",I.overflowX="hidden"),(0,F.jsx)(Ce.Z,{onResize:se,disabled:!(u||E),children:(0,F.jsx)("textarea",v()(v()({},K),{},{ref:A,style:I,className:M()(s,p,_e()({},"".concat(s,"-disabled"),D)),disabled:D,value:H,onChange:te}))})}),je=be,Me=["defaultValue","value","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled"];function Ee(t,S){return _()(t||"").slice(0,S).join("")}function pe(t,S,n,s){var f=n;return t?f=Ee(n,s):_()(S||"").length<n.length&&_()(n||"").length>s&&(f=S),f}var Te=i.forwardRef(function(t,S){var n=t.defaultValue,s=t.value,f=t.onChange,T=t.allowClear,d=t.maxLength,u=t.onCompositionStart,E=t.onCompositionEnd,p=t.suffix,R=t.prefixCls,D=R===void 0?"rc-textarea":R,l=t.classes,L=t.showCount,K=t.className,B=t.style,G=t.disabled,H=h()(t,Me),ve=(0,x.Z)(n,{value:s,defaultValue:n}),te=m()(ve,2),A=te[0],X=te[1],Z=(0,i.useRef)(null),ne=i.useState(!1),Q=m()(ne,2),$=Q[0],ae=Q[1],k=i.useRef(),Y=i.useRef(0),V=function(){Z.current.textArea.focus()};(0,i.useImperativeHandle)(S,function(){return{resizableTextArea:Z.current,focus:V,blur:function(){Z.current.textArea.blur()}}});var w=Number(d)>0,fe=function(a){ae(!0),k.current=A,Y.current=a.currentTarget.selectionStart,u==null||u(a)},re=function(a){ae(!1);var r=a.currentTarget.value;if(w){var y,ge=Y.current>=d+1||Y.current===((y=k.current)===null||y===void 0?void 0:y.length);r=pe(ge,k.current,r,d)}r!==A&&(X(r),(0,c.rJ)(a.currentTarget,a,f,r)),E==null||E(a)},me=function(a){var r=a.target.value;if(!$&&w){var y=a.target.selectionStart>=d+1||a.target.selectionStart===r.length||!a.target.selectionStart;r=pe(y,A,r,d)}X(r),(0,c.rJ)(a.currentTarget,a,f,r)},he=function(a){var r=H.onPressEnter,y=H.onKeyDown;a.key==="Enter"&&r&&r(a),y==null||y(a)},oe=function(a){X(""),V(),(0,c.rJ)(Z.current.textArea,a,f)},N=(0,c.D7)(A);!$&&w&&s==null&&(N=Ee(N,d));var q=(0,F.jsx)(U.Q,{value:N,allowClear:T,handleReset:oe,suffix:p,prefixCls:D,affixWrapperClassName:l==null?void 0:l.affixWrapper,disabled:G,style:B,inputStyle:{resize:B==null?void 0:B.resize},inputElement:(0,F.jsx)(je,v()(v()({},H),{},{onKeyDown:he,onChange:me,onCompositionStart:fe,onCompositionEnd:re,maxLength:d,className:M()(L?"":K,l==null?void 0:l.textarea),style:!L&&B,disabled:G,prefixCls:D,ref:Z}))});if(L){var se=_()(N).length,J;return P()(L)==="object"?J=L.formatter({value:N,count:se,maxLength:d}):J="".concat(se).concat(w?" / ".concat(d):""),(0,F.jsxs)("div",{hidden:H.hidden,className:M()("".concat(D,"-show-count"),K,l==null?void 0:l.countWrapper),style:B,"data-count":J,children:[q,(0,F.jsx)("span",{className:"".concat(D,"-data-count"),children:J})]})}return q}),De=Te,Ie=De}}]);
