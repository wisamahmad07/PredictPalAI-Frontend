"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[901],{67287:(e,s,t)=>{t.d(s,{A:()=>i});var a=t(84591),r=t(70579);const i=e=>{let{id:s,title:t,subtitle:i,wrapperClass:l}=e;const n=a.A.find((e=>e.id===s));return(0,r.jsxs)("div",{className:`${l||""} info flex items-center gap-5`,children:[(0,r.jsx)("img",{className:"club-logo",src:n.logo,alt:n.name}),(0,r.jsxs)("div",{className:"main flex flex-col",children:[(0,r.jsx)("h3",{children:t||n.name}),(0,r.jsx)("span",{className:"text-12",children:i||`${n.city}, ${n.country}`})]})]})}},8232:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(65043);const r=()=>{const[e,s]=(0,a.useState)(!1),[t,r]=(0,a.useState)(0),[i,l]=(0,a.useState)(0),[n,o]=(0,a.useState)(!1),c=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const a=c.current,n=e=>{s(!0),r(e.pageX-a.offsetLeft),l(a.scrollLeft)},d=()=>{s(!1)},x=()=>{s(!1)},h=s=>{if(!e)return;s.preventDefault();const r=3*(s.pageX-a.offsetLeft-t);a.scrollLeft=i-r};return a.scrollWidth>a.clientWidth&&o(!0),a.addEventListener("mousedown",n),a.addEventListener("mouseleave",d),a.addEventListener("mouseup",x),a.addEventListener("mousemove",h),()=>{a.removeEventListener("mousedown",n),a.removeEventListener("mouseleave",d),a.removeEventListener("mouseup",x),a.removeEventListener("mousemove",h)}}),[e,t,i]),{containerRef:c,isDragging:e,hasOverflow:n}};var i=t(98139),l=t.n(i),n=t(70579);const o=e=>{let{children:s,className:t,style:a={},wrapperEL:i}=e;const{containerRef:o,isDragging:c,hasOverflow:d}=r(),x=i||"div";return(0,n.jsx)(x,{className:l()("draggable-container",t,{isDragging:c,isDraggable:d}),ref:o,style:{...a},children:s})}},28848:(e,s,t)=>{t.d(s,{A:()=>n});var a=t(3550),r=t(98139),i=t.n(r),l=t(70579);const n=e=>{let{avatar:s,number:t,title:r,subtitle:n,wrapperClass:o,style:c={}}=e;return(0,l.jsxs)("div",{className:i()(o,{"flex justify-between items-center":s}),style:{...c},children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[s?(0,l.jsx)(a.A,{className:"square-avatar",src:s,alt:r}):(0,l.jsx)("span",{className:"player-number",children:t}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h3",{children:r}),(0,l.jsx)("span",{className:"text-12",children:n})]})]}),s&&(0,l.jsx)("span",{className:"player-number",children:t})]})}},96849:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ve});var a=t(79140),r=t(96810);const i="styles_container__2QBGO",l="styles_media__zG2fH",n="styles_main_info__vJvWk";var o=t(68309),c=t(41408),d=t(25264);const x=t.p+"static/media/player_tshirt.140a384d69855f7e6682.webp";var h=t(70579);const m=()=>(0,h.jsxs)(o.A,{className:`${i} card height-w-1 g-30 card-padded`,children:[(0,h.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,h.jsxs)("div",{className:`${n} flex flex-col gap-3.5`,children:[(0,h.jsx)("span",{className:"player-number",children:"8"}),(0,h.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,h.jsx)("h2",{className:"text-20 text-overflow",children:"Mat\xedas Vecino"}),(0,h.jsx)("span",{className:"text-12",children:"Central defender"})]})]}),(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsx)(c.A,{value:4.5,max:5,type:"stars",isCompact:!0}),(0,h.jsx)(d.A,{qty:27,isLiked:!0,withText:!0})]})]}),(0,h.jsx)("div",{className:l,children:(0,h.jsx)("img",{src:x,alt:"player tshirt"})})]});var p=t(50108),g=t(877),f=t(87734),v=t(52185),j=t(6026),u=t(86150),y=t(13839),b=t(27712),_=t(15077),N=t(65043),k=t(41325),w=t(76047);const M=[{a:25,b:31},{a:42,b:89},{a:57,b:76},{a:63,b:95},{a:78,b:42},{a:84,b:73},{a:36,b:67},{a:91,b:47},{a:48,b:58},{a:64,b:26}],A=()=>{const{direction:e}=(0,k.q)(),{width:s}=(0,_.A)(),[t,a]=(0,N.useState)([]),r="rtl"===e;(0,N.useEffect)((()=>{a((0,w.L7)("trainingShapeChart",20))}),[s]);const i={type:"monotone",dot:!1,strokeWidth:3};return(0,h.jsxs)(o.A,{className:"card card--side-shadow flex flex-col gap-2.5 height-w-1",children:[(0,h.jsxs)("div",{className:"card_header flex flex-col gap-1",style:{marginBottom:-10},children:[(0,h.jsx)("h3",{children:"Training pace"}),(0,h.jsxs)("div",{className:"flex justify-between h6 gap-5",children:[(0,h.jsx)("span",{children:"8:00"}),(0,h.jsx)("span",{children:"12:00"}),(0,h.jsx)("span",{children:"16:00"}),(0,h.jsx)("span",{children:"20:00"})]})]}),(0,h.jsx)(p.u,{className:"flex-1",width:"100%",height:"100%",id:"trainingShapeChart",children:(0,h.jsxs)(g.Q,{data:M,margin:{top:4,right:0,left:0,bottom:4},children:[(0,h.jsxs)("defs",{children:[(0,h.jsxs)("linearGradient",{id:"gridLine",x1:"-5.10517e-05",y1:"0",x2:"-5.10517e-05",y2:"169.677",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"var(--border)",stopOpacity:"0.2"}),(0,h.jsx)("stop",{offset:"0.504355",stopColor:"var(--border)"}),(0,h.jsx)("stop",{offset:"0.99905",stopColor:"var(--border)",stopOpacity:"0.257922"})]}),(0,h.jsxs)("linearGradient",{id:"area",x1:"0",y1:"0",x2:"0",y2:"130",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"var(--turquoise)"}),(0,h.jsx)("stop",{offset:"1",stopColor:"var(--turquoise)",stopOpacity:"0.01"})]})]}),(0,h.jsx)(f.d,{strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:t,width:"100%",height:"100%",stroke:"url(#gridLine)"}),(0,h.jsx)(v.W,{reversed:r,hide:!0}),(0,h.jsx)(j.h,{orientation:r?"right":"left",hide:!0}),(0,h.jsx)(u.m,{cursor:!1,content:(0,h.jsx)(b.A,{multi:!0})}),(0,h.jsx)(y.G,{dataKey:"a",stroke:"var(--azure)",fill:"none",activeDot:{r:4,fill:"var(--azure)",stroke:"var(--widget)"},...i}),(0,h.jsx)(y.G,{dataKey:"b",stroke:"var(--turquoise)",fill:"url(#area)",activeDot:{r:4,fill:"var(--turquoise)",stroke:"var(--widget)"},...i})]})})]})};var C=t(55230),$=t(86119),L=t(42458),D=t(77943),S=t(17869),q=t(73243),O=t(67287),E=t(22772);const K={first:[{target:61,miss:20},{target:92,miss:43},{target:49,miss:39},{target:84,miss:27},{target:83,miss:45},{target:43,miss:17},{target:87,miss:10},{target:78,miss:56},{target:15,miss:34},{target:48,miss:14},{target:74,miss:18},{target:35,miss:92}],second:[{target:70,miss:27},{target:43,miss:57},{target:53,miss:27},{target:14,miss:71},{target:23,miss:19},{target:75,miss:92},{target:33,miss:15},{target:26,miss:28},{target:97,miss:32},{target:25,miss:34},{target:84,miss:12},{target:93,miss:41}]},G=()=>{const[e,s]=(0,N.useState)("first"),{direction:t}=(0,k.q)(),a="rtl"===t,r=e=>{let{cx:s,cy:t,fill:a,...r}=e;const i=r.dom===r.dataKey;return(0,h.jsxs)("svg",{width:"10",height:"217",viewBox:"0 0 10 222",x:s,y:t,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("path",{d:"M5 25V215",stroke:"url(#dashed)",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"8 8"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",fill:a})]}),(0,h.jsx)("defs",{children:(0,h.jsxs)("linearGradient",{id:"dashed",x1:"3",y1:"145",x2:"3",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"var(--widget)"}),(0,h.jsx)("stop",{offset:"0.795555",stopColor:"var(--border)"})]})})]})};return(0,h.jsxs)(o.A,{className:"card height-w-2 flex flex-col relative",children:[(0,h.jsxs)("div",{className:"flex flex-col gap-4 flex-1",children:[(0,h.jsxs)("div",{className:"card_header flex flex-col gap-5",children:[(0,h.jsx)(O.A,{title:"Shots stats",subtitle:"Manchester City",id:"mancity"}),(0,h.jsxs)("div",{className:"tab-nav col-2",children:[(0,h.jsx)(E.A,{title:"First half",active:"first"===e,onClick:()=>s("first")}),(0,h.jsx)(E.A,{title:"Second half",active:"second"===e,onClick:()=>s("second")})]})]}),(0,h.jsx)(p.u,{className:"flex-1",width:"100%",height:"100%",children:(0,h.jsxs)(L.t,{margin:!1,data:K[e],children:[(0,h.jsx)(v.W,{dataKey:"name",reversed:a,hide:!0}),(0,h.jsx)(D.X,{dataKey:"miss",shape:r,children:K[e].map(((e,s)=>(0,h.jsx)(S.f,{fill:"var(--salmon)",dom:e.miss>e.target?"miss":"target",dataKey:"miss"},`cell-${s}`)))}),(0,h.jsx)(D.X,{dataKey:"target",shape:r,children:K[e].map(((e,s)=>(0,h.jsx)(S.f,{fill:"var(--grass)",dom:e.miss>e.target?"miss":"target",dataKey:"target"},`cell-${s}`)))}),(0,h.jsx)(q.e,{y:50,stroke:"var(--grass)",strokeWidth:2,strokeDasharray:"4 2"}),(0,h.jsx)(u.m,{cursor:!1,content:b.A,multi:!1})]})})]}),(0,h.jsxs)("div",{className:"card_footer flex flex-col gap-2",style:{position:"absolute",bottom:0},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:"h1",children:"18"})," shots"]}),(0,h.jsxs)("div",{className:"flex gap-3.5",children:[(0,h.jsx)($.A,{color:"salmon",text:"miss"}),(0,h.jsx)($.A,{color:"grass",text:"On target"})]})]})]})};var W=t(35475),F=t(96611),R=t(90749);const Y={list_item:"styles_list_item__Va7Un",title:"styles_title__o3beh",category:"styles_category__D7HiA",category_label:"styles_category_label__SBgxP",secondary:"styles_secondary__QRYHH",content:"styles_content__i4eWK",delete:"styles_delete__fwlV5",planner_item:"styles_planner_item__GO4yj",light:"styles_light__uJpMX",dark:"styles_dark__rm5bs",checked:"styles_checked__sFe+H",timestamp:"styles_timestamp__hbhsI",category_color:"styles_category_color__DwdqC"};var B=t(30279),H=t(58568);const U=t(94905).Ay.div`
  input[type="checkbox"] {
    display: none;
  }
  
  label {
    color: #BBCDD9;
    font-size: 1rem;
    transition: color var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
    input[type="checkbox"]:checked + label {
        color: var(--grass);
    }
`,I=e=>{let{checked:s,onChange:t,id:a}=e;return(0,h.jsxs)(U,{children:[(0,h.jsx)("input",{type:"checkbox",checked:s,onChange:t,id:a}),(0,h.jsx)("label",{htmlFor:a,children:(0,h.jsx)("i",{className:"icon icon-check-solid"})})]})};var z=t(60446),T=t.n(z),V=t(22718);const X=[{color:"turquoise",text:"Family"},{color:"blue",text:"Work"},{color:"orange",text:"Other"}];var P=t(5137);const J=e=>{let{data:s,variant:t}=e;const{theme:a}=(0,k.q)(),{id:r,name:i,timestamp:l,complete:n,label:o,expanded:c}=s,d=(0,P.wA)(),x=X.find((e=>e.text.toLowerCase()===o.toLowerCase())).color,m=()=>{switch(t){default:case"list":return(0,h.jsx)("div",{className:Y.list_item,tabIndex:0,children:(0,h.jsxs)("div",{className:Y.content,children:[(0,h.jsx)(H.A,{id:`task-${r}`,color:x,checked:n,onChange:()=>d((0,V.q5)({id:r}))}),(0,h.jsxs)("div",{className:"flex flex-col gap-0.5 flex-1",children:[(0,h.jsx)("input",{className:`${Y.title} text-overflow`,type:"text",defaultValue:i,readOnly:!0}),(0,h.jsx)("span",{className:"label h6",children:T()(l).format("DD MMM YYYY / HH:mm")})]}),(0,h.jsxs)("div",{className:Y.secondary,children:[(0,h.jsx)("button",{className:`${Y.delete} label h6`,onClick:()=>d((0,V.H9)({id:r})),children:"Remove"}),(0,h.jsxs)("div",{className:Y.category,children:[(0,h.jsx)("span",{className:`${Y.category_label} label h6`,children:o}),(0,h.jsx)("span",{className:Y.category_color,style:{backgroundColor:`var(--${x})`}})]})]})]})});case"planner":return(0,h.jsxs)("div",{className:`${Y.planner_item} ${Y[a]} ${n?Y.checked:""}`,tabIndex:0,children:[(0,h.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,h.jsx)("span",{className:Y.title,children:i}),(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)("span",{className:Y.category_color,style:{backgroundColor:`var(--${x})`}}),(0,h.jsx)("span",{className:`${"dark"===a?Y.timestamp:""} label h6`,children:T()(l).format("DD MMM YYYY")})]})]}),(0,h.jsx)(I,{id:`task-${r}`,checked:n,onChange:()=>d((0,V.q5)({id:r}))})]})}};return(0,h.jsx)(B.A,{in:c,timeout:300,children:(0,h.jsx)(m,{})})};var Q=t(23585),Z=t(1648),ee=t(41024),se=t(56800),te=t(4235),ae=t.n(te);const re=e=>{let{variant:s,data:t}=e;const a=ae()(),r=(0,P.d4)((e=>e.todos.todos)),i=(0,P.wA)(),l=(0,Q.FR)((0,Q.MS)(Q.AN,{activationConstraint:{distance:15}}),(0,Q.MS)(Q.IG,{activationConstraint:{delay:2e3,tolerance:5}})),n=e=>{const{attributes:s,listeners:t,setNodeRef:a,transform:r,transition:i,isOver:l,isDragging:n}=(0,Z.gl)({id:e.id}),o={transform:ee.Ks.Transform.toString(r),transition:i,zIndex:l||n?10:0,position:"relative",touchAction:"none"};return(0,h.jsx)("div",{ref:a,style:o,...s,...t,children:e.children})},o=t||r;return(0,h.jsx)(Q.Mp,{sensors:l,collisionDetection:Q.fp,onDragEnd:e=>{const{active:s,over:t}=e;if(s.id!==t.id){const e=r.findIndex((e=>{let{id:t}=e;return t===s.id})),a=r.findIndex((e=>{let{id:s}=e;return s===t.id}));i((0,V.iY)((0,Z.be)(r,e,a)))}},modifiers:[se.FN],autoScroll:!0,children:(0,h.jsx)(Z.gB,{items:o,strategy:Z._G,disabled:!a.isDesktop(),children:o.map((e=>(0,h.jsx)(n,{id:e.id,children:(0,h.jsx)(J,{data:e,variant:s})},e.id)))})})};var ie=t(89124);const le=()=>{const[e,s]=(0,N.useState)(T()().format("MMMM")),[t,{height:a}]=(0,ie.A)(),r=(0,P.d4)((e=>e.todos.todos)).filter((s=>T()(s.timestamp).format("MMMM")===e)),i=(0,_.A)().width<414;return(0,h.jsxs)(o.A,{className:"card height-w-2",children:[(0,h.jsxs)("div",{className:"card_header flex flex-col gap-5",ref:t,style:{paddingBottom:20},children:[(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsxs)("h3",{children:["Trainings ",!i&&"planner"]}),(0,h.jsx)(W.k2,{className:"text-button",to:"/schedule",children:"Scheduler"})]}),(0,h.jsxs)("div",{className:"flex flex-wrap gap-5",children:[(0,h.jsx)(F.A,{type:"group",text:T()().format("MMMM"),onClick:()=>s(T()().format("MMMM")),active:e===T()().format("MMMM")}),(0,h.jsx)(F.A,{type:"group",text:T()().add(1,"month").format("MMMM"),onClick:()=>s(T()().add(1,"month").format("MMMM")),active:e===T()().add(1,"month").format("MMMM")}),(0,h.jsx)(F.A,{type:"group",text:T()().add(2,"month").format("MMMM"),onClick:()=>s(T()().add(2,"month").format("MMMM")),active:e===T()().add(2,"month").format("MMMM")})]})]}),(0,h.jsx)(R.A,{height:a,children:(0,h.jsx)("div",{className:"track flex flex-col gap-5 card-padded",style:{paddingTop:0},children:0!==r.length?(0,h.jsx)(re,{variant:"planner",data:r}):null})})]})};var ne=t(79137),oe=t(95213);const ce="styles_container__JZUbE",de="styles_list__c1eW-",xe="styles_list_item__erkK7";var he=t(3550),me=t(8232),pe=t(84591);const ge=()=>(0,h.jsxs)(o.A,{className:`${ce} card card--side-shadow`,children:[(0,h.jsx)("h3",{className:"card_header",children:"Champions League"}),(0,h.jsx)(me.A,{className:`${de} card_footer flex`,children:pe.A.map(((e,s)=>(0,h.jsxs)(o.A,{className:`${xe} flex flex-col items-center gap-3.5`,index:s,type:"slideLeft",children:[(0,h.jsx)(he.A,{className:"club-logo club-logo--lg",src:e.logo,alt:e.name}),(0,h.jsx)("span",{className:"text-12",children:e.name})]},s)))})]}),fe={profile_card:(0,h.jsx)(m,{}),training_pace:(0,h.jsx)(A,{}),calendar:(0,h.jsx)(C.A,{}),shots:(0,h.jsx)(G,{}),planner:(0,h.jsx)(le,{}),messages:(0,h.jsx)(ne.A,{}),field:(0,h.jsx)(oe.A,{}),champions:(0,h.jsx)(ge,{})},ve=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{title:"Player Profile"}),(0,h.jsx)(r.A,{id:"player_profile",widgets:fe})]})},58568:(e,s,t)=>{t.d(s,{A:()=>l});var a=t(94905),r=t(70579);const i=a.Ay.div`
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--widget);
  flex-shrink: 0;

  input {
    display: none;

    & + label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: ${e=>{let{color:s}=e;return s?`var(--${s})`:"var(--highlight)"}};
        border-radius: 2px;
        transform: translate(-50%, -50%);
        transition: opacity var(--transition);
        opacity: 0;
      }
    }

    &:checked + label:after {
      opacity: 1;
    }
  }
`,l=e=>{let{id:s,onChange:t,innerRef:a,color:l,...n}=e;return(0,r.jsxs)(i,{className:"flex items-center justify-center",color:l,children:[(0,r.jsx)("input",{type:"checkbox",id:s,onChange:t,ref:a,...n}),(0,r.jsx)("label",{htmlFor:s})]})}},27712:(e,s,t)=>{t.d(s,{A:()=>l});var a=t(94905),r=t(70579);const i=a.Ay.div`
  background: var(--tooltip-bg);
  box-shadow: 0 2px 16px rgba(75, 85, 110, 0.2);
  border-radius: 8px;
  font-family: var(--heading-font);
  color: var(--header);
  font-weight: 500;
  height: 30px;
  padding: 0 8px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  position: relative;
  text-transform: uppercase;

  &.multiple {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    height: auto;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;

      .color {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-top: 1px;
      }
    }
  }
`,l=e=>{let{active:s,payload:t,tooltip:a,arrow:l=!1,multi:n=!1,...o}=e;return n?s&&t&&t.length?(0,r.jsx)(i,{className:"multiple text-12",children:t.map(((e,s)=>(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("div",{className:"color",style:{background:e.stroke?e.stroke:e.fill}}),(0,r.jsx)("div",{className:"value",children:e.value})]},s)))}):null:s&&t[0]?(0,r.jsxs)(i,{className:"text-12",children:[t[0].value," ",o.right&&t[0].dataKey]}):null}},96611:(e,s,t)=>{t.d(s,{A:()=>d});var a=t(94905),r=t(74068),i=t.n(r),l=t(98139),n=t.n(l),o=t(70579);const c=a.Ay.button`
  height: 40px;
  border-radius: 8px;
  padding: 0 14px;
  transition: all var(--transition);
  line-height: 1;
  border: 1px solid var(--border);

  &.list {
    color: ${i()("theme",{light:"var(--highlight)",dark:"var(--text)"})};
    background-color: ${i()("theme",{light:"var(--widget)",dark:"var(--border)"})};
    
    &:hover, &:focus,
    &.active {
        ${i()("theme",{light:"\n            filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));\n            border-color: var(--widget);\n        ",dark:"\n            background-color: var(--widget);\n            border-color: var(--widget);\n            box-shadow: 0 1px 8px rgba(33, 33, 33, 0.1);\n            color: var(--accent);\n        "})};
    }
  }

  &.group {
    color: ${i()("theme",{light:"var(--olive)",dark:"var(--accent)"})};
    background-color: var(--widget);

    &:hover, &:focus,
    &.active {
      ${i()("theme",{light:"\n            filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));\n            border-color: var(--widget);\n        ",dark:"\n            background-color: var(--border);\n        "})};
    }
  }
`,d=e=>{let{text:s,onClick:t,active:a,type:r="list"}=e;return(0,o.jsx)(c,{className:n()(`${r} h4`,{active:a}),onClick:t,children:s})}},95213:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(68309),r=t(3550),i=t(28848);const l=t.p+"static/media/field.c0b793be985a581c76fe.webp";var n=t(25099),o=t(70579);const c=()=>(0,o.jsxs)(a.A,{className:"card flex flex-col justify-between card-padded gap-5",children:[(0,o.jsx)(i.A,{avatar:n,title:"Gareth Bale",subtitle:"Field presence areas",number:11}),(0,o.jsx)(r.A,{src:l,alt:"field",style:{width:"100%",height:"auto"}})]})},25099:(e,s,t)=>{e.exports=t.p+"static/media/11.081e3f8134bb61c75955.webp"}}]);
//# sourceMappingURL=901.f3afa5f3.chunk.js.map