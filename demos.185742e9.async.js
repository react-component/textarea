(self.webpackChunkrc_textarea=self.webpackChunkrc_textarea||[]).push([[433],{4700:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return n}});var f=e(16854),o=e.n(f),l=e(71366),a=e(71062),r=e(99678);function n(){var d=(0,a.useState)(`hello
world`),i=o()(d,2),c=i[0],h=i[1],S=function(z){var R=z.target.value;h(R)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Uncontrolled"}),(0,r.jsx)(l.Z,{autoSize:!0,allowClear:!0}),(0,r.jsx)("p",{children:"controlled"}),(0,r.jsx)(l.Z,{value:c,onChange:S,allowClear:!0})]})}},81984:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return n}});var f=e(16854),o=e.n(f),l=e(71062),a=e(71366),r=e(99678);function n(){var d=(0,l.useState)(`hello
world`),i=o()(d,2),c=i[0],h=i[1],S=function(R){var V=R.target.value;h(V)},_=function(R){var V=R.width,Y=R.height;console.log("size is changed, width:".concat(V," height:").concat(Y))};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"when set to true"}),(0,r.jsx)(a.Z,{autoSize:!0,onResize:_,value:c,onChange:S}),(0,r.jsx)("p",{children:"when set to object of minRows and maxRows"}),(0,r.jsx)(a.Z,{autoSize:{minRows:5,maxRows:15},onResize:_,value:c,onChange:S})]})}},50027:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return n}});var f=e(16854),o=e.n(f),l=e(71366),a=e(71062),r=e(99678);function n(){var d=(0,a.useState)(`hello
world`),i=o()(d,2),c=i[0],h=i[1],S=function(z){var R=z.target.value;h(R)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Uncontrolled"}),(0,r.jsx)(l.Z,{autoSize:!0,showCount:!0}),(0,r.jsx)("p",{children:"controlled"}),(0,r.jsx)(l.Z,{value:c,onChange:S,showCount:!0,maxLength:100}),(0,r.jsx)("p",{children:"with height"}),(0,r.jsx)(l.Z,{value:c,onChange:S,showCount:!0,style:{height:200,width:"100%",resize:"vertical"}})]})}},71462:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return n}});var f=e(16854),o=e.n(f),l=e(71062),a=e(71366),r=e(99678);function n(){var d=(0,l.useState)(""),i=o()(d,2),c=i[0],h=i[1],S=function(V){var Y=V.target.value;console.log(V.target.value),h(Y)},_=function(V){var Y=V.width,J=V.height;console.log("size is changed, width:".concat(Y," height:").concat(J))},z=function(V){console.log("enter key is pressed")};return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{prefixCls:"custom-textarea",onPressEnter:z,onResize:_,value:c,onChange:S,autoFocus:!0,onFocus:function(){return console.log("focus")}})})}},71366:function(t,s,e){"use strict";e.d(s,{Z:function(){return rt}});var f=e(67104),o=e.n(f),l=e(47930),a=e.n(l),r=e(12929),n=e.n(r),d=e(16854),i=e.n(d),c=e(17269),h=e.n(c),S=e(7685),_=e.n(S),z=e(12124),R=e.n(z),V=e(36265),Y=e(24603),J=e(69353),Se=e(84357),x=e(71062);function X(u){return!!(u.addonBefore||u.addonAfter)}function Re(u){return!!(u.prefix||u.suffix||u.allowClear)}function Le(u,v,p,m){if(p){var y=v;if(v.type==="click"){var C=u.cloneNode(!0);y=Object.create(v,{target:{value:C},currentTarget:{value:C}}),C.value="",p(y);return}if(m!==void 0){y=Object.create(v,{target:{value:u},currentTarget:{value:u}}),u.value=m,p(y);return}p(y)}}function Be(u,v){if(u){u.focus(v);var p=v||{},m=p.cursor;if(m){var y=u.value.length;switch(m){case"start":u.setSelectionRange(0,0);break;case"end":u.setSelectionRange(y,y);break;default:u.setSelectionRange(0,y)}}}}function ze(u){return typeof u=="undefined"||u===null?"":String(u)}var be=function(v){var p,m,y=v.inputElement,C=v.prefixCls,W=v.prefix,E=v.suffix,L=v.addonBefore,b=v.addonAfter,T=v.className,U=v.style,O=v.disabled,ee=v.readOnly,$=v.focused,te=v.triggerFocus,D=v.allowClear,ae=v.value,oe=v.handleReset,Q=v.hidden,I=v.classes,P=v.classNames,Z=v.dataAttrs,B=v.styles,w=v.components,fe=(w==null?void 0:w.affixWrapper)||"span",me=(w==null?void 0:w.groupWrapper)||"span",ue=(w==null?void 0:w.wrapper)||"span",ne=(w==null?void 0:w.groupAddon)||"span",F=(0,x.useRef)(null),de=function(A){var k;(k=F.current)!==null&&k!==void 0&&k.contains(A.target)&&(te==null||te())},ye=function(){var A;if(!D)return null;var k=!O&&!ee&&ae,he="".concat(C,"-clear-icon"),ge=(0,Se.Z)(D)==="object"&&D!==null&&D!==void 0&&D.clearIcon?D.clearIcon:"\u2716";return x.createElement("span",{onClick:oe,onMouseDown:function(De){return De.preventDefault()},className:R()(he,(A={},(0,J.Z)(A,"".concat(he,"-hidden"),!k),(0,J.Z)(A,"".concat(he,"-has-suffix"),!!E),A)),role:"button",tabIndex:-1},ge)},se=(0,x.cloneElement)(y,{value:ae,hidden:Q,className:R()((p=y.props)===null||p===void 0?void 0:p.className,!Re(v)&&!X(v)&&T)||null,style:(0,Y.Z)((0,Y.Z)({},(m=y.props)===null||m===void 0?void 0:m.style),!Re(v)&&!X(v)?U:{})});if(Re(v)){var H,re="".concat(C,"-affix-wrapper"),ve=R()(re,(H={},(0,J.Z)(H,"".concat(re,"-disabled"),O),(0,J.Z)(H,"".concat(re,"-focused"),$),(0,J.Z)(H,"".concat(re,"-readonly"),ee),(0,J.Z)(H,"".concat(re,"-input-with-clear-btn"),E&&D&&ae),H),!X(v)&&T,I==null?void 0:I.affixWrapper,P==null?void 0:P.affixWrapper),pe=(E||D)&&x.createElement("span",{className:R()("".concat(C,"-suffix"),P==null?void 0:P.suffix),style:B==null?void 0:B.suffix},ye(),E);se=x.createElement(fe,(0,V.Z)({className:ve,style:(0,Y.Z)((0,Y.Z)({},X(v)?void 0:U),B==null?void 0:B.affixWrapper),hidden:!X(v)&&Q,onClick:de},Z==null?void 0:Z.affixWrapper,{ref:F}),W&&x.createElement("span",{className:R()("".concat(C,"-prefix"),P==null?void 0:P.prefix),style:B==null?void 0:B.prefix},W),(0,x.cloneElement)(y,{value:ae,hidden:null}),pe)}if(X(v)){var le="".concat(C,"-group"),ie="".concat(le,"-addon"),j=R()("".concat(C,"-wrapper"),le,I==null?void 0:I.wrapper),N=R()("".concat(C,"-group-wrapper"),T,I==null?void 0:I.group);return x.createElement(me,{className:N,style:U,hidden:Q},x.createElement(ue,{className:j},L&&x.createElement(ne,{className:ie},L),(0,x.cloneElement)(se,{hidden:null}),b&&x.createElement(ne,{className:ie},b)))}return se},Me=be,Fe=e(88400),_e=null,we=null,vt=null,pt=null,Ae=e(9606),We=e(41842),He=e(98722),Ve=e(47593),Ue=e(2244),Ye=`
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
`,Ge=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ie={},G;function Je(u){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=u.getAttribute("id")||u.getAttribute("data-reactid")||u.getAttribute("name");if(v&&Ie[p])return Ie[p];var m=window.getComputedStyle(u),y=m.getPropertyValue("box-sizing")||m.getPropertyValue("-moz-box-sizing")||m.getPropertyValue("-webkit-box-sizing"),C=parseFloat(m.getPropertyValue("padding-bottom"))+parseFloat(m.getPropertyValue("padding-top")),W=parseFloat(m.getPropertyValue("border-bottom-width"))+parseFloat(m.getPropertyValue("border-top-width")),E=Ge.map(function(b){return"".concat(b,":").concat(m.getPropertyValue(b))}).join(";"),L={sizingStyle:E,paddingSize:C,borderSize:W,boxSizing:y};return v&&p&&(Ie[p]=L),L}function Xe(u){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;G||(G=document.createElement("textarea"),G.setAttribute("tab-index","-1"),G.setAttribute("aria-hidden","true"),document.body.appendChild(G)),u.getAttribute("wrap")?G.setAttribute("wrap",u.getAttribute("wrap")):G.removeAttribute("wrap");var y=Je(u,v),C=y.paddingSize,W=y.borderSize,E=y.boxSizing,L=y.sizingStyle;G.setAttribute("style","".concat(L,";").concat(Ye)),G.value=u.value||u.placeholder||"";var b=void 0,T=void 0,U,O=G.scrollHeight;if(E==="border-box"?O+=W:E==="content-box"&&(O-=C),p!==null||m!==null){G.value=" ";var ee=G.scrollHeight-C;p!==null&&(b=ee*p,E==="border-box"&&(b=b+C+W),O=Math.max(b,O)),m!==null&&(T=ee*m,E==="border-box"&&(T=T+C+W),U=O>T?"":"hidden",O=Math.min(T,O))}var $={height:O,overflowY:U,resize:"none"};return b&&($.minHeight=b),T&&($.maxHeight=T),$}var xe=e(99678),Qe=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],Pe=0,je=1,Te=2,ke=x.forwardRef(function(u,v){var p=u,m=p.prefixCls,y=p.onPressEnter,C=p.defaultValue,W=p.value,E=p.autoSize,L=p.onResize,b=p.className,T=p.style,U=p.disabled,O=p.onChange,ee=p.onInternalAutoSize,$=h()(p,Qe),te=(0,We.Z)(C,{value:W,postState:function(A){return A!=null?A:""}}),D=i()(te,2),ae=D[0],oe=D[1],Q=function(A){oe(A.target.value),O==null||O(A)},I=x.useRef();x.useImperativeHandle(v,function(){return{textArea:I.current}});var P=x.useMemo(function(){return E&&n()(E)==="object"?[E.minRows,E.maxRows]:[]},[E]),Z=i()(P,2),B=Z[0],w=Z[1],fe=!!E,me=function(){try{if(document.activeElement===I.current){var A=I.current,k=A.selectionStart,he=A.selectionEnd,ge=A.scrollTop;I.current.setSelectionRange(k,he),I.current.scrollTop=ge}}catch(Oe){}},ue=x.useState(Te),ne=i()(ue,2),F=ne[0],de=ne[1],ye=x.useState(),se=i()(ye,2),H=se[0],re=se[1],ve=function(){de(Pe)};(0,Ve.default)(function(){fe&&ve()},[W,B,w,fe]),(0,Ve.default)(function(){if(F===Pe)de(je);else if(F===je){var K=Xe(I.current,!1,B,w);de(Te),re(K)}else me()},[F]);var pe=x.useRef(),le=function(){Ue.Z.cancel(pe.current)},ie=function(A){F===Te&&(L==null||L(A),E&&(le(),pe.current=(0,Ue.Z)(function(){ve()})))};x.useEffect(function(){return le},[]);var j=fe?H:null,N=o()(o()({},T),j);return(F===Pe||F===je)&&(N.overflowY="hidden",N.overflowX="hidden"),(0,xe.jsx)(He.Z,{onResize:ie,disabled:!(E||L),children:(0,xe.jsx)("textarea",o()(o()({},$),{},{ref:I,style:N,className:R()(m,b,a()({},"".concat(m,"-disabled"),U)),disabled:U,value:ae,onChange:Q}))})}),qe=ke,et=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles","onResize"];function $e(u,v){return _()(u||"").slice(0,v).join("")}function Ze(u,v,p,m){var y=p;return u?y=$e(p,m):_()(v||"").length<p.length&&_()(p||"").length>m&&(y=v),y}var tt=x.forwardRef(function(u,v){var p,m=u.defaultValue,y=u.value,C=u.onFocus,W=u.onBlur,E=u.onChange,L=u.allowClear,b=u.maxLength,T=u.onCompositionStart,U=u.onCompositionEnd,O=u.suffix,ee=u.prefixCls,$=ee===void 0?"rc-textarea":ee,te=u.classes,D=u.showCount,ae=u.className,oe=u.style,Q=u.disabled,I=u.hidden,P=u.classNames,Z=u.styles,B=u.onResize,w=h()(u,et),fe=(0,We.Z)(m,{value:y,defaultValue:m}),me=i()(fe,2),ue=me[0],ne=me[1],F=(0,x.useRef)(null),de=x.useState(!1),ye=i()(de,2),se=ye[0],H=ye[1],re=x.useState(!1),ve=i()(re,2),pe=ve[0],le=ve[1],ie=x.useRef(),j=x.useRef(0),N=x.useState(null),K=i()(N,2),A=K[0],k=K[1],he=function(){var g;(g=F.current)===null||g===void 0||g.textArea.focus()};(0,x.useImperativeHandle)(v,function(){return{resizableTextArea:F.current,focus:he,blur:function(){var g;(g=F.current)===null||g===void 0||g.textArea.blur()}}}),(0,x.useEffect)(function(){H(function(q){return!Q&&q})},[Q]);var ge=Number(b)>0,Oe=function(g){le(!0),ie.current=ue,j.current=g.currentTarget.selectionStart,T==null||T(g)},De=function(g){le(!1);var M=g.currentTarget.value;if(ge){var ce,dt=j.current>=b+1||j.current===((ce=ie.current)===null||ce===void 0?void 0:ce.length);M=Ze(dt,ie.current,M,b)}M!==ue&&(ne(M),(0,Ae.rJ)(g.currentTarget,g,E,M)),U==null||U(g)},at=function(g){var M=g.target.value;if(!pe&&ge){var ce=g.target.selectionStart>=b+1||g.target.selectionStart===M.length||!g.target.selectionStart;M=Ze(ce,ue,M,b)}ne(M),(0,Ae.rJ)(g.currentTarget,g,E,M)},ot=function(g){var M=w.onPressEnter,ce=w.onKeyDown;g.key==="Enter"&&M&&M(g),ce==null||ce(g)},ut=function(g){H(!0),C==null||C(g)},st=function(g){H(!1),W==null||W(g)},lt=function(g){var M;ne(""),he(),(0,Ae.rJ)((M=F.current)===null||M===void 0?void 0:M.textArea,g,E)},Ce=(0,Ae.D7)(ue);!pe&&ge&&y==null&&(Ce=$e(Ce,b));var Ne=O,Ee;if(D){var Ke=_()(Ce).length;n()(D)==="object"?Ee=D.formatter({value:Ce,count:Ke,maxLength:b}):Ee="".concat(Ke).concat(ge?" / ".concat(b):""),Ne=(0,xe.jsxs)(xe.Fragment,{children:[Ne,(0,xe.jsx)("span",{className:R()("".concat($,"-data-count"),P==null?void 0:P.count),style:Z==null?void 0:Z.count,children:Ee})]})}var it=function(g){var M;B==null||B(g),(M=F.current)!==null&&M!==void 0&&M.textArea.style.height&&k(!0)},ct=!w.autoSize&&!D&&!L,ft=(0,xe.jsx)(Me,{value:Ce,allowClear:L,handleReset:lt,suffix:Ne,prefixCls:$,classes:{affixWrapper:R()(te==null?void 0:te.affixWrapper,(p={},a()(p,"".concat($,"-show-count"),D),a()(p,"".concat($,"-textarea-allow-clear"),L),p))},disabled:Q,focused:se,className:ae,style:o()(o()({},oe),A&&!ct?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Ee=="string"?Ee:void 0}},hidden:I,inputElement:(0,xe.jsx)(qe,o()(o()({},w),{},{onKeyDown:ot,onChange:at,onFocus:ut,onBlur:st,onCompositionStart:Oe,onCompositionEnd:De,className:P==null?void 0:P.textarea,style:o()(o()({},Z==null?void 0:Z.textarea),{},{resize:oe==null?void 0:oe.resize}),disabled:Q,prefixCls:$,onResize:it,ref:F}))});return ft}),nt=tt,rt=nt},9606:function(t,s){"use strict";var e;e={value:!0},s.D7=r,e=f,e=o,s.rJ=l,e=a;function f(n){return!!(n.addonBefore||n.addonAfter)}function o(n){return!!(n.prefix||n.suffix||n.allowClear)}function l(n,d,i,c){if(i){var h=d;if(d.type==="click"){var S=n.cloneNode(!0);h=Object.create(d,{target:{value:S},currentTarget:{value:S}}),S.value="",i(h);return}if(c!==void 0){h=Object.create(d,{target:{value:n},currentTarget:{value:n}}),n.value=c,i(h);return}i(h)}}function a(n,d){if(n){n.focus(d);var i=d||{},c=i.cursor;if(c){var h=n.value.length;switch(c){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(h,h);break;default:n.setSelectionRange(0,h)}}}}function r(n){return typeof n=="undefined"||n===null?"":String(n)}},44087:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},35950:function(t,s,e){"use strict";var f=e(89255).default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=l;var o=f(e(71062));function l(a){var r=o.useRef();r.current=a;var n=o.useCallback(function(){for(var d,i=arguments.length,c=new Array(i),h=0;h<i;h++)c[h]=arguments[h];return(d=r.current)===null||d===void 0?void 0:d.call.apply(d,[r].concat(c))},[]);return n}},47593:function(t,s,e){"use strict";var f=e(41552).default,o=e(89255).default;Object.defineProperty(s,"__esModule",{value:!0}),s.useLayoutUpdateEffect=s.default=void 0;var l=o(e(71062)),a=f(e(44087)),r=(0,a.default)()?l.useLayoutEffect:l.useEffect,n=function(h,S){var _=l.useRef(!0);r(function(){return h(_.current)},S),r(function(){return _.current=!1,function(){_.current=!0}},[])},d=function(h,S){n(function(_){if(!_)return h()},S)};s.useLayoutUpdateEffect=d;var i=n;s.default=i},41842:function(t,s,e){"use strict";var f,o=e(41552).default;f={value:!0},s.Z=i;var l=o(e(30724)),a=o(e(35950)),r=e(47593),n=o(e(91997));function d(c){return c!==void 0}function i(c,h){var S=h||{},_=S.defaultValue,z=S.value,R=S.onChange,V=S.postState,Y=(0,n.default)(function(){return d(z)?z:d(_)?typeof _=="function"?_():_:typeof c=="function"?c():c}),J=(0,l.default)(Y,2),Se=J[0],x=J[1],X=z!==void 0?z:Se,Re=V?V(X):X,Le=(0,a.default)(R),Be=(0,n.default)([X]),ze=(0,l.default)(Be,2),be=ze[0],Me=ze[1];(0,r.useLayoutUpdateEffect)(function(){var _e=be[0];Se!==_e&&Le(Se,_e)},[be]),(0,r.useLayoutUpdateEffect)(function(){d(z)||x(z)},[z]);var Fe=(0,a.default)(function(_e,we){x(_e,we),Me([X],we)});return[Re,Fe]}},91997:function(t,s,e){"use strict";var f=e(89255).default,o=e(41552).default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=r;var l=o(e(30724)),a=f(e(71062));function r(n){var d=a.useRef(!1),i=a.useState(n),c=(0,l.default)(i,2),h=c[0],S=c[1];a.useEffect(function(){return d.current=!1,function(){d.current=!0}},[]);function _(z,R){R&&d.current||S(z)}return[h,_]}},2244:function(t,s){"use strict";var e;e={value:!0},s.Z=void 0;var f=function(c){return+setTimeout(c,16)},o=function(c){return clearTimeout(c)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(f=function(c){return window.requestAnimationFrame(c)},o=function(c){return window.cancelAnimationFrame(c)});var l=0,a=new Map;function r(i){a.delete(i)}var n=function(c){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;l+=1;var S=l;function _(z){if(z===0)r(S),c();else{var R=f(function(){_(z-1)});a.set(S,R)}}return _(h),S};n.cancel=function(i){var c=a.get(i);return r(c),o(c)};var d=n;s.Z=d},60766:function(t,s,e){var f=e(84823);function o(l){if(Array.isArray(l))return f(l)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},99015:function(t){function s(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},39464:function(t){function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},17269:function(t,s,e){var f=e(98079);function o(l,a){if(l==null)return{};var r=f(l,a),n,d;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);for(d=0;d<i.length;d++)n=i[d],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(l,n)&&(r[n]=l[n])}return r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},98079:function(t){function s(e,f){if(e==null)return{};var o={},l=Object.keys(e),a,r;for(r=0;r<l.length;r++)a=l[r],!(f.indexOf(a)>=0)&&(o[a]=e[a]);return o}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},7685:function(t,s,e){var f=e(60766),o=e(99015),l=e(69093),a=e(39464);function r(n){return f(n)||o(n)||l(n)||a()}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},73597:function(t){function s(e,f){(f==null||f>e.length)&&(f=e.length);for(var o=0,l=new Array(f);o<f;o++)l[o]=e[o];return l}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},66848:function(t){function s(e){if(Array.isArray(e))return e}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},41552:function(t){function s(e){return e&&e.__esModule?e:{default:e}}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},89255:function(t,s,e){var f=e(22319).default;function o(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(o=function(i){return i?n:r})(a)}function l(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||f(a)!=="object"&&typeof a!="function")return{default:a};var n=o(r);if(n&&n.has(a))return n.get(a);var d={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in a)if(c!=="default"&&Object.prototype.hasOwnProperty.call(a,c)){var h=i?Object.getOwnPropertyDescriptor(a,c):null;h&&(h.get||h.set)?Object.defineProperty(d,c,h):d[c]=a[c]}return d.default=a,n&&n.set(a,d),d}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},64739:function(t){function s(e,f){var o=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var l,a,r,n,d=[],i=!0,c=!1;try{if(r=(o=o.call(e)).next,f===0){if(Object(o)!==o)return;i=!1}else for(;!(i=(l=r.call(o)).done)&&(d.push(l.value),d.length!==f);i=!0);}catch(h){c=!0,a=h}finally{try{if(!i&&o.return!=null&&(n=o.return(),Object(n)!==n))return}finally{if(c)throw a}}return d}}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},55139:function(t){function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},30724:function(t,s,e){var f=e(66848),o=e(64739),l=e(63198),a=e(55139);function r(n,d){return f(n)||o(n,d)||l(n,d)||a()}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},22319:function(t){function s(e){"@babel/helpers - typeof";return t.exports=s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},t.exports.__esModule=!0,t.exports.default=t.exports,s(e)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},63198:function(t,s,e){var f=e(73597);function o(l,a){if(l){if(typeof l=="string")return f(l,a);var r=Object.prototype.toString.call(l).slice(8,-1);if(r==="Object"&&l.constructor&&(r=l.constructor.name),r==="Map"||r==="Set")return Array.from(l);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(l,a)}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
