"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[746],{39782:(e,t,a)=>{a.d(t,{A:()=>c});const n="styles_media__xoCpT",r="styles_compact__2f6Op";var i=a(3550),o=a(98139),l=a.n(o),s=a(70579);const c=e=>{let{img:t,title:a,subtitle:o,variant:c="full"}=e;const d="full"===c?"h2":"h3",u="full"===c?"text-20":"";return(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[(0,s.jsx)(i.A,{className:l()(n,{[r]:"full"!==c}),src:t,alt:"media"}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)(d,{className:u,children:a}),o&&"full"===c&&(0,s.jsx)("span",{className:"text-12",children:o})]})]})}},45349:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(50063),r=a(10328),i=a(89124),o=a(76047),l=a(70579);const s=e=>{let{id:t,value:a}=e;const[s,{width:c}]=(0,i.A)(),d=(0,o.$_)(t);return(0,l.jsxs)("div",{className:"card height-w-1 flex flex-col border-color-bottom",style:{borderColor:`var(--${d.color})`},children:[(0,l.jsxs)("div",{className:"flex flex-col items-start flex-1 gap-3.5",ref:s,style:{padding:"30px 30px 22px"},children:[(0,l.jsx)("img",{className:"club-logo club-logo--md",src:d.logo,alt:d.name}),(0,l.jsx)("h3",{children:(0,l.jsx)(n.A,{text:d.shortName,width:c})})]}),(0,l.jsx)("div",{className:"card_footer--sm",children:(0,l.jsx)(r.A,{goals:a})})]})}},29862:(e,t,a)=>{a.d(t,{A:()=>n});const n=[{team1:{id:"mancity",score:2},team2:{id:"manunited",score:1},events:[{minute:24,event:"Manchester controls the ball in midfield"}],active:!0},{team1:{id:"barcelona",score:0},team2:{id:"bvb",score:1},events:[{minute:56,event:"Messi has an effort on goal"}],active:!0},{team1:{id:"bayern",score:5},team2:{id:"arsenal",score:1},events:[{minute:84,event:"Bayern attack on left"}],active:!0},{team1:{id:"tottenham",score:0},team2:{id:"acmilan",score:0},events:[{minute:17,event:"Manchester controls the ball in midfield"}],active:!0},{team1:{id:"chelsea",score:0},team2:{id:"acmilan",score:2},events:[{minute:17,event:"Manchester controls the ball in midfield"}],active:!0},{team1:{id:"arsenal",score:4},team2:{id:"fiorentina",score:0},events:[{minute:24,event:"Arsenal controls the ball in midfield"}],active:!1},{team1:{id:"barcelona",score:0},team2:{id:"bvb",score:1},events:[{minute:56,event:"Messi has an effort on goal"}],active:!1},{team1:{id:"bayern",score:5},team2:{id:"arsenal",score:1},events:[{minute:84,event:"Bayern attack on left"}],active:!1},{team1:{id:"liverpool",score:1},team2:{id:"acmilan",score:0},events:[{minute:17,event:"Manchester controls the ball in midfield"}],active:!1},{team1:{id:"juventus",score:1},team2:{id:"arsenal",score:3},events:[{minute:17,event:"Manchester controls the ball in midfield"}],active:!1}]},50826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ge});var n=a(79140),r=a(96810),i=a(68309),o=a(39782),l=a(99890),s=a(70579);const c=e=>{let{title:t,value:a,barColor:n,trackColor:r}=e;return(0,s.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,s.jsx)("h6",{className:"label lh-1",children:t}),(0,s.jsx)("div",{className:"progress-item__progress",children:(0,s.jsx)(l.A,{value:a,barColor:n,trackColor:r})})]})};var d=a(84719),u=a(41325);const p=a.p+"static/media/english_premier.e6ab54e0a7667f2d1287.webp",h=()=>{const{theme:e}=(0,u.q)(),t={"5 stars":400,"4 stars":210,"3 stars":300,"2 stars":56,"1 star":150},a=e=>{let t=0;for(const n in e)t+=e[n];const a={};for(const n in e)a[n]=e[n]/t*200;return a};return(0,s.jsxs)(i.A,{className:"card flex flex-col justify-between gap-5 card-padded",children:[(0,s.jsx)(o.A,{img:p,title:"English Premier League",subtitle:"Regular Championship"}),(0,s.jsx)(d.A,{className:"h1 large",count:4.2,decimals:1}),(0,s.jsx)("div",{className:"flex flex-col gap-6",children:Object.keys(t).map(((n,r)=>(0,s.jsx)(c,{title:n,value:a(t)[n],barColor:"accent",trackColor:"light"===e?"body":"border"},r)))})]})};var m=a(90749),f=a(79896),v=a(56584),x=a(10539);const y="styles_container__BoEJI",b="styles_main__LKk4a",g="styles_footer__RKTU0";var j=a(59793);const A=e=>{let{match:t,index:a}=e;const n=t.events[t.events.length-1];return(0,s.jsxs)(i.A,{className:y,type:"slideUp",index:a,children:[(0,s.jsx)("div",{className:b,children:(0,s.jsx)(j.A,{match:t,withLogo:!0})}),(0,s.jsxs)("div",{className:`${g} flex items-center gap-2.5 border-top text-12`,children:[(0,s.jsxs)("span",{className:"font-semibold text-highlight",children:[n.minute,"'"]}),(0,s.jsx)("span",{className:"text-overflow",children:n.event})]})]})};var N=a(22772),k=a(89124),w=a(65043),_=a(29862);const C=()=>{const[e,t]=(0,w.useState)("live"),[a,{height:n}]=(0,k.A)(),r=(0,w.useRef)(null),o=_.A.filter((e=>!0===e.active)),l=_.A.filter((e=>!1===e.active));return(0,w.useEffect)((()=>{r.current&&r.current.scrollTo(0,0)}),[e]),(0,s.jsx)(i.A,{className:"card height-w-3",children:(0,s.jsxs)(x.t,{className:"h-full",value:e,children:[(0,s.jsx)("div",{className:"card-padded",ref:a,children:(0,s.jsxs)(f.j,{className:"tab-nav col-2",children:[(0,s.jsx)(N.A,{title:"Live",onClick:()=>t("live"),active:"live"===e}),(0,s.jsx)(N.A,{title:"Finished",onClick:()=>t("finished"),active:"finished"===e})]})}),(0,s.jsx)(m.A,{height:n,children:(0,s.jsxs)("div",{className:"track",style:{padding:"0 var(--card-padding)"},ref:r,children:[(0,s.jsx)(v.K,{className:"h-full",value:"live",onClick:()=>t("live"),children:(0,s.jsx)("div",{className:"flex flex-col gap-6",style:{paddingBottom:24},children:o.map(((e,t)=>(0,s.jsx)(A,{match:e,index:t},t)))})}),(0,s.jsx)(v.K,{className:"h-full",value:"finished",onClick:()=>t("finished"),children:(0,s.jsx)("div",{className:"flex flex-col gap-6",style:{paddingBottom:24},children:l.map(((e,t)=>(0,s.jsx)(A,{match:e,index:t},t)))})})]})})]})})};var S=a(45349),O=a(67287),P=a(47908),E=a(50108),L=a(93014),D=a(64691),M=a(11629),$=a.n(M),T=a(79686),F=a.n(T),B=a(19853),I=a.n(B),K=a(58387),W=a(68471),R=a(68892),z=a(94020),U=a(81519),G=a(38813),J=a(76307),q=a(240),V=a(6015),Y=a(20202),Q=["type","layout","connectNulls","ref"],Z=["key"];function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function X(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ee.apply(this,arguments)}function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(Object(a),!0).forEach((function(t){de(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ne(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return re(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return re(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ie(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ue(n.key),n)}}function oe(e,t,a){return t=se(t),function(e,t){if(t&&("object"===H(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,le()?Reflect.construct(t,a||[],se(e).constructor):t.apply(e,a))}function le(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(le=function(){return!!e})()}function se(e){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},se(e)}function ce(e,t){return ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ce(e,t)}function de(e,t,a){return(t=ue(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ue(e){var t=function(e,t){if("object"!=H(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==H(t)?t:t+""}var pe=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return de(e=oe(this,t,[].concat(n)),"state",{isAnimationFinished:!0,totalLength:0}),de(e,"generateSimpleStrokeDasharray",(function(e,t){return"".concat(t,"px ").concat(e-t,"px")})),de(e,"getStrokeDasharray",(function(a,n,r){var i=r.reduce((function(e,t){return e+t}));if(!i)return e.generateSimpleStrokeDasharray(n,a);for(var o=Math.floor(a/i),l=a%i,s=n-a,c=[],d=0,u=0;d<r.length;u+=r[d],++d)if(u+r[d]>l){c=[].concat(ne(r.slice(0,d)),[l-u]);break}var p=c.length%2===0?[0,s]:[s];return[].concat(ne(t.repeat(r,o)),ne(c),p).map((function(e){return"".concat(e,"px")})).join(", ")})),de(e,"id",(0,J.NF)("recharts-line-")),de(e,"pathRef",(function(t){e.mainCurve=t})),de(e,"handleAnimationEnd",(function(){e.setState({isAnimationFinished:!0}),e.props.onAnimationEnd&&e.props.onAnimationEnd()})),de(e,"handleAnimationStart",(function(){e.setState({isAnimationFinished:!1}),e.props.onAnimationStart&&e.props.onAnimationStart()})),e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ce(e,t)}(t,e),a=t,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"repeat",value:function(e,t){for(var a=e.length%2!==0?[].concat(ne(e),[0]):e,n=[],r=0;r<t;++r)n=[].concat(ne(n),ne(a));return n}},{key:"renderDotItem",value:function(e,t){var a;if(w.isValidElement(e))a=w.cloneElement(e,t);else if($()(e))a=e(t);else{var n=t.key,r=X(t,Z),i=(0,K.A)("recharts-line-dot","boolean"!==typeof e?e.className:"");a=w.createElement(R.c,ee({key:n},r,{className:i}))}return a}}],(n=[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var e=this.getTotalLength();this.setState({totalLength:e})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var e=this.getTotalLength();e!==this.state.totalLength&&this.setState({totalLength:e})}}},{key:"getTotalLength",value:function(){var e=this.mainCurve;try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(t){return 0}}},{key:"renderErrorBar",value:function(e,t){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,n=a.points,r=a.xAxis,i=a.yAxis,o=a.layout,l=a.children,s=(0,q.aS)(l,G.u);if(!s)return null;var c=function(e,t){return{x:e.x,y:e.y,value:e.value,errorVal:(0,Y.kr)(e.payload,t)}},d={clipPath:e?"url(#clipPath-".concat(t,")"):null};return w.createElement(z.W,d,s.map((function(e){return w.cloneElement(e,{key:"bar-".concat(e.props.dataKey),data:n,xAxis:r,yAxis:i,layout:o,dataPointFormatter:c})})))}},{key:"renderDots",value:function(e,a,n){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var r=this.props,i=r.dot,o=r.points,l=r.dataKey,s=(0,q.J9)(this.props,!1),c=(0,q.J9)(i,!0),d=o.map((function(e,a){var n=ae(ae(ae({key:"dot-".concat(a),r:3},s),c),{},{value:e.value,dataKey:l,cx:e.x,cy:e.y,index:a,payload:e.payload});return t.renderDotItem(i,n)})),u={clipPath:e?"url(#clipPath-".concat(a?"":"dots-").concat(n,")"):null};return w.createElement(z.W,ee({className:"recharts-line-dots",key:"dots"},u),d)}},{key:"renderCurveStatically",value:function(e,t,a,n){var r=this.props,i=r.type,o=r.layout,l=r.connectNulls,s=(r.ref,X(r,Q)),c=ae(ae(ae({},(0,q.J9)(s,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:t?"url(#clipPath-".concat(a,")"):null,points:e},n),{},{type:i,layout:o,connectNulls:l});return w.createElement(W.I,ee({},c,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(e,t){var a=this,n=this.props,r=n.points,i=n.strokeDasharray,o=n.isAnimationActive,l=n.animationBegin,s=n.animationDuration,c=n.animationEasing,d=n.animationId,u=n.animateNewValues,p=n.width,h=n.height,m=this.state,f=m.prevPoints,v=m.totalLength;return w.createElement(D.Ay,{begin:l,duration:s,isActive:o,easing:c,from:{t:0},to:{t:1},key:"line-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(n){var o=n.t;if(f){var l=f.length/r.length,s=r.map((function(e,t){var a=Math.floor(t*l);if(f[a]){var n=f[a],r=(0,J.Dj)(n.x,e.x),i=(0,J.Dj)(n.y,e.y);return ae(ae({},e),{},{x:r(o),y:i(o)})}if(u){var s=(0,J.Dj)(2*p,e.x),c=(0,J.Dj)(h/2,e.y);return ae(ae({},e),{},{x:s(o),y:c(o)})}return ae(ae({},e),{},{x:e.x,y:e.y})}));return a.renderCurveStatically(s,e,t)}var c,d=(0,J.Dj)(0,v)(o);if(i){var m="".concat(i).split(/[,\s]+/gim).map((function(e){return parseFloat(e)}));c=a.getStrokeDasharray(d,v,m)}else c=a.generateSimpleStrokeDasharray(v,d);return a.renderCurveStatically(r,e,t,{strokeDasharray:c})}))}},{key:"renderCurve",value:function(e,t){var a=this.props,n=a.points,r=a.isAnimationActive,i=this.state,o=i.prevPoints,l=i.totalLength;return r&&n&&n.length&&(!o&&l>0||!I()(o,n))?this.renderCurveWithAnimation(e,t):this.renderCurveStatically(n,e,t)}},{key:"render",value:function(){var e,t=this.props,a=t.hide,n=t.dot,r=t.points,i=t.className,o=t.xAxis,l=t.yAxis,s=t.top,c=t.left,d=t.width,u=t.height,p=t.isAnimationActive,h=t.id;if(a||!r||!r.length)return null;var m=this.state.isAnimationFinished,f=1===r.length,v=(0,K.A)("recharts-line",i),x=o&&o.allowDataOverflow,y=l&&l.allowDataOverflow,b=x||y,g=F()(h)?this.id:h,j=null!==(e=(0,q.J9)(n,!1))&&void 0!==e?e:{r:3,strokeWidth:2},A=j.r,N=void 0===A?3:A,k=j.strokeWidth,_=void 0===k?2:k,C=((0,q.sT)(n)?n:{}).clipDot,S=void 0===C||C,O=2*N+_;return w.createElement(z.W,{className:v},x||y?w.createElement("defs",null,w.createElement("clipPath",{id:"clipPath-".concat(g)},w.createElement("rect",{x:x?c:c-d/2,y:y?s:s-u/2,width:x?d:2*d,height:y?u:2*u})),!S&&w.createElement("clipPath",{id:"clipPath-dots-".concat(g)},w.createElement("rect",{x:c-O/2,y:s-O/2,width:d+O,height:u+O}))):null,!f&&this.renderCurve(b,g),this.renderErrorBar(b,g),(f||n)&&this.renderDots(b,S,g),(!p||m)&&U.Z.renderCallByParent(this.props,r))}}])&&ie(a.prototype,n),r&&ie(a,r),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,n,r}(w.PureComponent);de(pe,"displayName","Line"),de(pe,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!V.m.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1}),de(pe,"getComposedData",(function(e){var t=e.props,a=e.xAxis,n=e.yAxis,r=e.xAxisTicks,i=e.yAxisTicks,o=e.dataKey,l=e.bandSize,s=e.displayedData,c=e.offset,d=t.layout;return ae({points:s.map((function(e,t){var s=(0,Y.kr)(e,o);return"horizontal"===d?{x:(0,Y.nb)({axis:a,ticks:r,bandSize:l,entry:e,index:t}),y:F()(s)?null:n.scale(s),value:s,payload:e}:{x:F()(s)?null:a.scale(s),y:(0,Y.nb)({axis:n,ticks:i,bandSize:l,entry:e,index:t}),value:s,payload:e}})),layout:d},c)}));var he=a(52185),me=a(6026),fe=a(3831),ve=(0,L.gu)({chartName:"LineChart",GraphicalChild:pe,axisComponents:[{axisType:"xAxis",AxisComp:he.W},{axisType:"yAxis",AxisComp:me.h}],formatAxisMap:fe.pr}),xe=a(86150),ye=a(27712);const be=e=>{let{data:t,dataKey:a}=e;const{direction:n}=(0,u.q)(),r="rtl"===n;return(0,s.jsx)(E.u,{className:"flex-1",width:"100%",height:"100%",children:(0,s.jsxs)(ve,{data:t,margin:{top:4,right:6,left:6,bottom:4},children:[(0,s.jsx)(he.W,{reversed:r,hide:!0}),(0,s.jsx)(me.h,{orientation:r?"right":"left",hide:!0}),(0,s.jsx)(pe,{type:"monotone",dataKey:a,stroke:"var(--blue)",strokeWidth:2,activeDot:{r:4,fill:"var(--blue)",stroke:"var(--blue)"},dot:!1}),(0,s.jsx)(xe.m,{cursor:!1,content:(0,s.jsx)(ye.A,{})})]})})},ge=()=>(0,s.jsxs)(i.A,{className:"card height-w-1 flex flex-col justify-between card-padded",children:[(0,s.jsx)(O.A,{id:"chelsea",title:"FC Chelsea",subtitle:"London, UK"}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("h3",{children:"34 pts"}),(0,s.jsx)(P.A,{progress:2,text:"positions"})]}),(0,s.jsx)("div",{className:"flex-1",style:{maxWidth:140},children:(0,s.jsx)(be,{data:[{points:30},{points:120},{points:12},{points:168},{points:40},{points:200}],dataKey:"points"})})]})]});var je=a(55230),Ae=a(94905),Ne=a(74068),ke=a.n(Ne);const we=Ae.Ay.div`
  height: 25px;
  display: grid;
  grid-template-columns: minmax(0, calc(100% - 28px)) 28px;
  gap: 2px;
  border-radius: 4px;
  overflow: hidden;

  &.reverse {
    grid-template-columns: 28px minmax(0, calc(100% - 28px));
  }

  &.top div {
    background: var(--border);
  }

  div {
    height: 25px;
    background: ${ke()("theme",{light:"var(--body)",dark:"var(--black-2)"})};
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--btn-text);
    line-height: 1;

    &.total {
      justify-content: center;
    }

    .index {
      width: 30px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }

  .points {
    display: grid;
    grid-template-columns: repeat(3, 28px);
    text-align: center;
  }

  &.rtl div.info {
    border-right: 4px solid ${e=>e.color?`var(--${e.color})`:"transparent"};

    &.minimal {
      padding-right: 8px;
    }
  }

  &.ltr div.info {
    border-left: 4px solid ${e=>e.color?`var(--${e.color})`:"transparent"};

    &.minimal {
      padding-left: 8px;
    }
  }
`,_e=e=>{let{data:t,index:a,variant:n="minimal"}=e;const{direction:r}=(0,u.q)();return(0,s.jsx)(i.A,{index:a,type:"slideUp",children:(0,s.jsxs)(we,{className:`${0===a?"top":""} ${r} label h6`,color:t.color,children:[(0,s.jsxs)("div",{className:`info ${n}`,children:["league"===n&&(0,s.jsx)("span",{className:"index",children:a+1}),(0,s.jsx)("span",{className:"flex-1 text-overflow",children:t.name}),"league"===n&&(0,s.jsxs)("div",{className:"points",children:[(0,s.jsx)("span",{children:t.w}),(0,s.jsx)("span",{children:t.d}),(0,s.jsx)("span",{children:t.l})]})]}),(0,s.jsx)("div",{className:"total",children:"minimal"===n?t.score:t.pts})]})})},Ce=()=>(0,s.jsxs)(i.A,{className:"card flex flex-col gap-4 card-padded",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h3",{children:"Group E"}),(0,s.jsx)("p",{className:"text-12",children:"Standing after group stage"})]}),(0,s.jsx)("div",{className:"flex flex-col gap-0.5",children:[{name:"Club Atl\xe9tico de Madrid",color:"red",score:9},{name:"FC Internazionale Milano",color:"blue",score:6},{name:"Celtic FC",color:"green",score:6},{name:"Liverpool FC",color:"orange",score:0}].map(((e,t)=>(0,s.jsx)(_e,{data:e,index:t},t)))})]}),Se="styles_header__7rndb",Oe="styles_header_navigator__K4kUQ";var Pe=a(877),Ee=a(13839);const Le="styles_container__IxfsX",De="styles_label__OZGZt",Me="styles_button__8b56L",$e="styles_disabled__hpUG0";var Te=a(98139),Fe=a.n(Te);const Be=e=>{let{text:t,handler:a,prevDisabled:n,nextDisabled:r,className:i,...o}=e;return(0,s.jsxs)("div",{className:`${Le} ${i||""} navigator`,...o,children:[(0,s.jsx)("button",{className:Fe()(Me,{[$e]:n}),onClick:a,"data-direction":"prev","aria-label":"Previous",children:(0,s.jsx)("i",{className:"icon icon-chevron-left"})}),(0,s.jsx)("span",{className:`${De} text-12`,children:t}),(0,s.jsx)("button",{className:Fe()(Me,{[$e]:r}),onClick:a,"data-direction":"next","aria-label":"Next",children:(0,s.jsx)("i",{className:"icon icon-chevron-right"})})]})};var Ie=a(46742);const Ke=[{id:"juventus",label:"Juventus (ITA)",data:[{a:12,b:25},{a:18,b:13},{a:8,b:31},{a:40,b:18},{a:12,b:36},{a:35,b:10},{a:10,b:38},{a:34,b:12}]},{id:"barcelona",label:"Barcelona (ESP)",data:[{a:17,b:50},{a:29,b:17},{a:36,b:22},{a:24,b:12},{a:44,b:52},{a:12,b:19},{a:37,b:21},{a:12,b:44}]},{id:"real_madrid",label:"Real Madrid (ESP)",data:[{a:15,b:28},{a:33,b:25},{a:44,b:12},{a:20,b:46},{a:8,b:50},{a:52,b:25},{a:28,b:12},{a:50,b:14}]},{id:"bayern",label:"Bayern (GER)",data:[{a:17,b:50},{a:29,b:17},{a:36,b:22},{a:24,b:12},{a:44,b:52},{a:12,b:19},{a:37,b:21},{a:12,b:44}]}],We=()=>{const{direction:e}=(0,u.q)(),{index:t,navigate:a}=(0,Ie.A)(Ke),n="rtl"===e,r={type:"monotone",strokeWidth:3,activeDot:{stroke:"var(--widget)"}};return(0,s.jsxs)(i.A,{className:"card height-w-1 flex flex-col gap-2.5",children:[(0,s.jsxs)("div",{className:`${Se} card_header`,children:[(0,s.jsx)(O.A,{id:"realmadrid",title:"Ball possession",subtitle:"Inter, Milan"}),(0,s.jsx)(Be,{className:Oe,text:Ke[t].label,handler:a})]}),(0,s.jsx)(E.u,{className:"flex-1",width:"100%",height:"100%",children:(0,s.jsxs)(Pe.Q,{data:Ke[t].data,margin:{top:4,right:0,left:0,bottom:0},children:[(0,s.jsx)(xe.m,{cursor:!1,content:(0,s.jsx)(ye.A,{multi:!0})}),(0,s.jsx)(he.W,{reversed:n,hide:!0}),(0,s.jsx)(me.h,{orientation:n?"right":"left",hide:!0}),(0,s.jsx)(Ee.G,{dataKey:"a",stroke:"var(--purple)",fill:"var(--purple)",fillOpacity:.8,...r}),(0,s.jsx)(Ee.G,{dataKey:"b",stroke:"var(--accent)",fill:"var(--accent)",fillOpacity:0,...r})]})})]})};var Re=a(94304),ze=a(71386);const Ue={league_rating:(0,s.jsx)(h,{}),matches_overview:(0,s.jsx)(C,{}),team_stats:(0,s.jsxs)(ze.A,{children:[(0,s.jsx)(S.A,{id:"manunited",value:14}),(0,s.jsx)(S.A,{id:"chelsea",value:12})]}),team_pulse:(0,s.jsx)(ge,{}),calendar:(0,s.jsx)(je.A,{}),standings:(0,s.jsx)(Ce,{}),ball_possession:(0,s.jsx)(We,{}),dots_chart:(0,s.jsx)(Re.A,{})},Ge=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"English Premier League"}),(0,s.jsx)(r.A,{id:"league_overview",widgets:Ue})]})},86119:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(70579);const r=e=>{let{color:t,text:a}=e;return(0,n.jsxs)("div",{className:"legend",children:[(0,n.jsx)("span",{className:"legend_color",style:{backgroundColor:`var(--${t})`}}),(0,n.jsx)("span",{className:"legend_text label h6",children:a})]})}},47908:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(70579);const r=e=>{let{progress:t,text:a}=e;return(0,n.jsxs)("div",{className:"progress-info",children:[(0,n.jsx)("i",{className:"icon icon-chevrons-"+(t>0?"up positive":"down negative")}),(0,n.jsxs)("span",{className:"h6 label",children:[t>0?"+":"-",Math.abs(t)," ",a]})]})}},55230:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(94905),r=a(74068),i=a.n(r),o=a(68309);const l=(0,n.Ay)(o.A)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main {
    padding: var(--card-padding) var(--card-padding) 20px;
  }

  .react-calendar {
    &__navigation {
      background: ${i()("theme",{light:"var(--light-gray)",dark:"var(--border)"})};
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      margin: 20px 0;

      &__label {
        font-family: var(--heading-font);
        font-weight: 600;
        color: var(--btn-text);
        font-size: 0.75rem;
        width: fit-content;
        flex-grow: unset !important;
      }

      i {
        color: var(--nav-arrow);
        padding: 0 20px;
      }
    }

    &__month-view {
      height: 100%;

      & > div {
        height: 100%;
        align-items: center;
      }

      & > div > div {
        display: flex;
        flex-direction: column-reverse;
        gap: 16px;
      }

      &__weekdays {
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        text-align: center;

        &__weekday {
          font-family: var(--heading-font);
          text-transform: uppercase;
          font-size: 0.5rem;
          font-weight: 500;

          abbr {
            text-decoration: none;
          }
        }
      }

      &__days {
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        justify-content: center;
        gap: 2px 0;

        &__day {
          &--neighboringMonth {
            opacity: 0.25;
            background: ${i()("theme",{light:"var(--body-light)",dark:"var(--border-dark)"})};
          }
        }
      }
    }

    &__tile {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      font-family: var(--heading-font);
      font-weight: 600;
      color: var(--header);
      font-size: 0.6875rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      position: relative;

      &:not(.active) {
        pointer-events: none;
      }

      &--now {
        color: var(--azure);
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &_bar {
          display: block;
          background: #0496FF;
          border-radius: 2px;
          width: 10px;
          height: 2px;
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`,s=n.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition);

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    padding: 20px 30px;
    border-radius: 4px;
    background: var(--tooltip-bg);
    box-shadow: var(--widget-shadow);
    max-height: 200px;
    overflow-y: auto;

    &.ltr .popup_btn {
      right: 15px;
    }

    &.rtl .popup_btn {
      left: 15px;
    }

    &_btn {
      position: absolute;
      top: 15px;
      transition: color var(--transition);

      &:hover {
        color: var(--red);
      }
    }

    &_event {
      &:not(:last-child) {
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border);
      }

      .title {
        line-height: 1.2;
        display: inline-flex;
        align-items: center;
        gap: 6px;

        &_color {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      }

      .time {
        margin-left: 12px;
      }
    }
  }
`;var c=a(24490),d=a(86119),u=a(86328),p=a(65043),h=a(41325),m=a(60446),f=a.n(m);const v=f()().month(),x=v-1,y=v+1,b=[{date:f()().month(x).date(15).hour(18).minute(30),title:"Premier League: Chelsea vs Manchester United",type:"league"},{date:f()().month(x).date(22).hour(20).minute(0),title:"Champions League: Barcelona vs PSG",type:"championship"},{date:f()().month(v).date(5).hour(17).minute(0),title:"Serie A: Juventus vs Napoli",type:"league"},{date:f()().month(v).date(5).hour(12).minute(15),title:"FA Cup Semifinals",type:"cup"},{date:f()().month(v).date(12).hour(19).minute(30),title:"La Liga: Atletico Madrid vs Real Madrid",type:"league"},{date:f()().month(v).date(18).hour(14).minute(0),title:"FA Cup Semifinals",type:"cup"},{date:f()().month(v).date(25).hour(16).minute(0),title:"Premier League: Tottenham vs Arsenal",type:"league"},{date:f()().month(y).date(3).hour(15).minute(0),title:"Bundesliga: Borussia Dortmund vs Bayern Munich",type:"league"},{date:f()().month(y).date(9).hour(18).minute(0),title:"Champions League: Quarterfinals",type:"cup"},{date:f()().month(y).date(16).hour(21).minute(0),title:"Europa League: Semifinals",type:"cup"},{date:f()().month(y).date(23).hour(17).minute(0),title:"Premier League: Manchester City vs Liverpool",type:"league"}];var g=a(70579);const j=e=>{let{events:t,color:a}=e;const n=t.sort(((e,t)=>f()(e.date).isAfter(f()(t.date))?1:-1));return(0,g.jsx)("div",{className:"flex flex-col gap-2",children:n.map(((e,t)=>(0,g.jsxs)("div",{className:"popup_event flex flex-col gap-0.5",children:[(0,g.jsxs)("h5",{className:"title",children:[(0,g.jsx)("span",{className:"title_color",style:{backgroundColor:`var(--${a(e.date)})`}}),e.title]}),(0,g.jsx)("span",{className:"time label h6",children:f()(e.date).format("HH:mm")})]},t)))})},A=()=>{const{direction:e}=(0,h.q)(),[t,a]=(0,p.useState)(!1),[n,r]=(0,p.useState)(null),i=[{label:"League",color:"azure"},{label:"Championship",color:"grass"},{label:"Cup",color:"pink"}],o=e=>b.filter((t=>f()(t.date).isSame(e,"day"))),m=e=>i.filter((t=>t.label.toLowerCase()===o(e)[0].type))[0].color,v={locale:"en-AU",navigationLabel:e=>{let{date:t}=e;return`${f()(t).format("MMMM YYYY")}`},navigationAriaLabel:"Current month",prevLabel:(0,g.jsx)("i",{className:"icon icon-chevron-left"}),nextLabel:(0,g.jsx)("i",{className:"icon icon-chevron-right"}),prev2Label:null,next2Label:null,nextAriaLabel:"Next month",prevAriaLabel:"Previous month",formatShortWeekday:(e,t)=>f()(t).format("dd"),tileContent:e=>{let{date:t}=e;return o(t).length?(0,g.jsx)("span",{className:"overlay",children:(0,g.jsx)("span",{className:"overlay_bar",style:{backgroundColor:`var(--${m(t)})`}})}):null},tileClassName:e=>{let{date:t}=e;return o(t).length?"active":null},onClickDay:e=>{r(e),a(!0)}};return(0,g.jsxs)(l,{className:"card height-w-2 relative",children:[(0,g.jsxs)("div",{className:"main",children:[(0,g.jsx)("h3",{children:"Games calendar"}),(0,g.jsx)(c.Ay,{...v})]}),(0,g.jsx)("div",{className:"flex flex-wrap gap-3.5 card-padded border-top",children:i.map(((e,t)=>(0,g.jsx)(d.A,{text:e.label,color:e.color},t)))}),n&&(0,g.jsx)(s,{className:t?"visible":"",onClick:()=>a(!1),children:(0,g.jsx)(u.A,{in:t,timeout:300,style:{transformOrigin:"0 0 0"},children:(0,g.jsxs)("div",{className:`popup ${e}`,children:[(0,g.jsx)("button",{className:"popup_btn",onClick:()=>a(!1),"aria-label":"Close",children:(0,g.jsx)("i",{className:"icon icon-xmark"})}),(0,g.jsx)(j,{events:o(n),color:m})]})})})]})}}}]);
//# sourceMappingURL=746.ca515b41.chunk.js.map