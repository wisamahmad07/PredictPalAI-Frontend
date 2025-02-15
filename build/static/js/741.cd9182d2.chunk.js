"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[741],{84719:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(15751),l=t(76047),i=t(70579);const r=e=>{let{className:a,count:t,separator:r,decimals:n,suffix:o,isFormatted:d,formattedDecimals:c}=e;return(0,i.jsx)(s.Ay,{start:0,end:t,duration:2,separator:r,decimals:n,suffix:o||"",formattingFn:d?e=>(0,l.bY)(e,c):null,enableScrollSpy:!0,scrollSpyOnce:!0,children:e=>{let{countUpRef:t}=e;return(0,i.jsx)("span",{className:a||"",ref:t})}})}},67287:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(84591),l=t(70579);const i=e=>{let{id:a,title:t,subtitle:i,wrapperClass:r}=e;const n=s.A.find((e=>e.id===a));return(0,l.jsxs)("div",{className:`${r||""} info flex items-center gap-5`,children:[(0,l.jsx)("img",{className:"club-logo",src:n.logo,alt:n.name}),(0,l.jsxs)("div",{className:"main flex flex-col",children:[(0,l.jsx)("h3",{children:t||n.name}),(0,l.jsx)("span",{className:"text-12",children:i||`${n.city}, ${n.country}`})]})]})}},3550:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(9634),l=(t(60608),t(81580),t(70579));const i=e=>{let{src:a,alt:t,effect:i="blur",className:r,...n}=e;return(0,l.jsx)(s.LazyLoadImage,{src:a,alt:t,effect:i,wrapperClassName:`lazy-image ${r||""}`,...n})}},71386:(e,a,t)=>{t.d(a,{A:()=>r});var s=t(68309),l=t(15077),i=t(70579);const r=e=>{let{children:a}=e;const{width:t}=(0,l.A)();return(0,i.jsx)(s.A,{className:`grid ${t>=414?"col-2":"col-1"} gap-4 h-full`,children:a})}},2487:(e,a,t)=>{t.r(a),t.d(a,{default:()=>J});var s=t(65043),l=t(64997),i=t(79140);const r="styles_media__McwqU",n="styles_light__hDlxN",o="styles_dark__89g2c",d="styles_media_img__GAk8Q",c="styles_visible__PVAXk";var m=t(68309),x=t(67287),h=t(84719),p=t(41325),u=t(98139),g=t.n(u);const v=t.p+"static/media/map_blue_light.8de6ab3e5a88f2b77420ecc0242d1c4d.svg";const f=t.p+"static/media/map_blue_dark.00a57f7d223c965b56e50fa953e7e2c6.svg";var j=t(70579);const b=()=>{const{theme:e}=(0,p.q)();return(0,j.jsxs)("div",{className:g()(r,{[o]:"dark"===e,[n]:"light"===e}),children:[(0,j.jsx)("img",{className:g()(d,{[c]:"light"===e}),src:v,alt:"Local fans map"}),(0,j.jsx)("img",{className:g()(d,{[c]:"dark"===e}),src:f,alt:"Local fans map"})]})},y=()=>(0,j.jsxs)(m.A,{className:"card !h-[360px] relative",children:[(0,j.jsx)(b,{}),(0,j.jsxs)("div",{className:"flex flex-col gap-4 justify-between h-full relative z-2",children:[(0,j.jsx)(x.A,{wrapperClass:"card_header",id:"bvb",title:"Local fans",subtitle:"Borussia Dortmund"}),(0,j.jsxs)("div",{className:"card_footer flex flex-col gap-2",children:[(0,j.jsx)(h.A,{className:"h1",count:70525,formattedDecimals:3,isFormatted:!0}),(0,j.jsx)("p",{className:"text-12",children:"Fans Clubs in North and South America"})]})]})]});var N=t(71386),_=t(47908),w=t(3550),A=t(25264),C=t(76047),k=t(84591);const S=e=>{let{id:a}=e;const t=k.A.find((e=>e.id===a));return(0,j.jsxs)("div",{className:"card height-w-1 flex flex-col border-color-bottom",style:{borderColor:`var(--${t.color})`},children:[(0,j.jsxs)("div",{className:"flex flex-col gap-4 flex-1 card-padded",children:[(0,j.jsx)(w.A,{className:"club-logo club-logo--md",src:t.logo,alt:t.name}),(0,j.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,j.jsx)(A.A,{isLiked:!0,readonly:!0}),(0,j.jsx)(h.A,{className:"h2",count:(0,C.hw)(1e3,13e3)})]})]}),(0,j.jsx)("div",{className:"card_footer--sm",children:(0,j.jsx)(_.A,{progress:(0,C.hw)(-55,55),text:"fans"})})]})},L="styles_media__ulj-5",F="styles_media_img__vDqHw",M="styles_visible__IZXSq",$="styles_content__GVWr2";const D=t.p+"static/media/map_red_light.49938f24b1cc1a1501f638f6492ec5b3.svg";const I=t.p+"static/media/map_red_dark.9c732c46791a377a664d6bb07aece86b.svg",U=()=>{const{theme:e}=(0,p.q)();return(0,j.jsxs)("div",{className:L,children:[(0,j.jsx)("img",{className:g()(F,{[M]:"light"===e}),src:D,alt:"Local fans map"}),(0,j.jsx)("img",{className:g()(F,{[M]:"dark"===e}),src:I,alt:"Local fans map"})]})},P=e=>{let{id:a}=e;const t=k.A.find((e=>e.id===a));return(0,j.jsxs)(m.A,{className:"card card-padded relative !h-[360px]",children:[(0,j.jsx)(U,{}),(0,j.jsxs)("div",{className:`${$} flex flex-col justify-between relative h-full`,children:[(0,j.jsxs)("h3",{children:[t.shortName," fans"]}),(0,j.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsx)("img",{className:"club-logo club-logo--sm",src:t.logo,alt:t.name}),(0,j.jsx)(h.A,{className:"h2",count:102e3,isFormatted:!0})]}),(0,j.jsx)("p",{className:"text-12",children:"Active Fans in Europe"})]})]})]})};var R=t(55230),q=t(24858),z=t(83910),B=t(97929),Y=t(34456),E=t(79432),G=t(81045),V=t(57556),Q=t(96446),X=t(85865),H=t(3438),O=t(45014),T=t(5137);const K=e=>{var a,t;let{data:l,setFeeds:i}=e;const r=(0,T.d4)((e=>{var a,t;return null===(a=e.user)||void 0===a||null===(t=a.user)||void 0===t?void 0:t.uid})),[n,o]=(0,s.useState)(""),[d]=(0,O.z2)(),[c]=(0,O.QX)(),[m,x]=(0,s.useState)(!1),h=()=>{x(!m)};return(0,j.jsxs)("div",{className:"border border-border p-4 mb-2.5 rounded flex flex-col gap-2.5",children:[(0,j.jsxs)("div",{className:"flex gap-2.5 items-center",children:[(0,j.jsx)(G.A,{src:(null===l||void 0===l||null===(a=l.UserProfile)||void 0===a?void 0:a.Avatar)||null}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:(null===l||void 0===l||null===(t=l.UserProfile)||void 0===t?void 0:t.Name)||""}),(0,j.jsx)("p",{children:l.createdAt?(0,E.GP)(new Date(l.createdAt),"dd MMMM 'at' hh.mm a"):""})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:l.Content}),(null===l||void 0===l?void 0:l.Images)&&l.Images.length>0&&(0,j.jsx)("div",{className:"flex gap-2.5 mt-2.5",children:l.Images.map(((e,a)=>(0,j.jsx)("div",{className:"w-32 h-32 rounded-lg overflow-hidden",children:(0,j.jsx)(Y.A,{small:e,large:e,alt:"Feed Thumbnails"})},`image-${a}`)))})]}),(0,j.jsxs)("div",{className:"border-y border-border py-2.5 flex gap-4",children:[(0,j.jsxs)("button",{className:"flex items-center gap-2.5 hover:text-accent transition-all",onClick:h,children:[(0,j.jsx)(z.g,{icon:B.DN2})," ",l.SocialReviews?l.SocialReviews.length:0," comments"]}),(0,j.jsxs)("button",{className:"flex items-center gap-2.5 hover:text-accent transition-all",onClick:async()=>{try{const e=await c({id:l.SocialFeedID});i((a=>a.map((a=>a.SocialFeedID===l.SocialFeedID?e.data.data:a))))}catch(e){console.error("Failed to like the feed:",e)}},children:[(0,j.jsx)(z.g,{icon:B.qcK})," ",l.Likes," likes"]})]}),(0,j.jsxs)("div",{className:"flex gap-1.5",children:[(0,j.jsx)("input",{className:"field",type:"text",placeholder:" Comment",value:n,onChange:e=>o(e.target.value)}),(0,j.jsx)("button",{type:"button",className:"btn",onClick:async()=>{if(""!==n.trim())try{const e=await d({data:{SocialFeedID:l.SocialFeedID,Content:n,User_ID:r}});o(""),i((a=>a.map((a=>a.SocialFeedID===l.SocialFeedID?e.data.data:a))))}catch(e){console.error("Failed to add comment:",e)}},children:"Submit"})]}),(0,j.jsx)(V.A,{open:m,onClose:h,children:(0,j.jsxs)(Q.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"var(--widget)",boxShadow:24,borderRadius:2,p:4},children:[(0,j.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,j.jsx)(X.A,{variant:"h6",component:"h2",children:"Comments"}),(0,j.jsx)(H.A,{onClick:h,className:"!min-w-6 !h-6 !p-0",children:(0,j.jsx)(z.g,{icon:B.yYc})})]}),(0,j.jsx)("ul",{children:l.SocialReviews&&l.SocialReviews.length>0?l.SocialReviews.map(((e,a)=>{var t,s;return(0,j.jsxs)("li",{className:"flex gap-2.5",children:[(0,j.jsx)(G.A,{src:(null===e||void 0===e||null===(t=e.UserProfile)||void 0===t?void 0:t.Avatar)||null}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:e.Content}),(0,j.jsxs)("p",{className:"text-xs",children:["By ",(null===e||void 0===e||null===(s=e.UserProfile)||void 0===s?void 0:s.Name)||""]})]})]},`review-${a}`)})):(0,j.jsx)(X.A,{children:"No comments yet."})})]})})]})};var W=t(58147);const J=()=>{const e=(0,T.d4)((e=>{var a,t;return null===(a=e.user)||void 0===a||null===(t=a.user)||void 0===t?void 0:t.uid})),[a,t]=(0,s.useState)([]),[r,n]=(0,s.useState)([]),[o,d]=(0,s.useState)(!1),[c]=(0,O.V)(),[m,x]=(0,s.useState)([]),[h,p]=(0,s.useState)(0),{handleSubmit:u,formState:{errors:v,isValid:f},register:b,reset:_}=(0,q.mN)({defaultValues:{Content:""}}),[w,A]=(0,s.useState)(0),{data:C}=(0,O.Qb)({offset:w,limit:2});return(0,s.useEffect)((()=>{C&&(x((e=>[...e,...C.data.feeds])),p(C.data.totalFeeds))}),[C]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.A,{title:"Fans community"}),(0,j.jsxs)("div",{className:"flex gap-4 p-6",children:[(0,j.jsx)("div",{className:"basis-1/4",children:(0,j.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,j.jsxs)(N.A,{children:[(0,j.jsx)(S,{id:"realmadrid"}),(0,j.jsx)(S,{id:"manunited"})]}),(0,j.jsx)(P,{id:"manunited"})]})}),(0,j.jsxs)("div",{className:"basis-1/2 flex flex-col gap-4",children:[(0,j.jsx)("div",{className:"bg-widget p-6 rounded",children:(0,j.jsxs)("form",{onSubmit:u((async s=>{try{d(!0);const l=(0,W.c7)(),i=a.map((e=>{const a=(0,W.KR)(l,`uploads/${e.name}`);return(0,W.bp)(a,e).then((()=>(0,W.qk)(a)))})),r=await Promise.all(i),o={...s,Images:r,User_ID:e},m=await c({data:o}).unwrap();d(!1),t([]),n([]),x((e=>[m.data,...e])),A((e=>e++)),p((e=>e++)),_()}catch(l){console.error("Error creating new feed:",l),d(!1)}})),children:[(0,j.jsx)("div",{className:"flex flex-col gap-2.5",children:(0,j.jsx)("textarea",{className:g()("field",{"field--error":v.Content}),placeholder:"Content",...b("Content",{required:!0})})}),(0,j.jsx)("div",{className:"grid grid-cols-4 gap-4 justify-around mt-2.5",children:(0,j.jsxs)("div",{className:"px-2.5",children:[(0,j.jsxs)("button",{type:"button",className:"flex gap-2.5 items-center hover:text-accent transition",onClick:()=>document.getElementById("imageUpload").click(),children:[(0,j.jsx)(z.g,{icon:B.Cyq}),(0,j.jsx)("span",{children:"Media"})]}),(0,j.jsx)("input",{id:"imageUpload",type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:e=>{const a=Array.from(e.target.files);t(a);const s=a.map((e=>URL.createObjectURL(e)));n(s)}})]})}),r.length>0&&(0,j.jsx)("div",{className:"flex gap-2 mt-2",children:r.map(((e,a)=>(0,j.jsx)("div",{className:"w-32 h-32 rounded-lg overflow-hidden",children:(0,j.jsx)(Y.A,{small:e,large:e,alt:"Feed Thumbnails"})},`preview-${a}`)))}),(0,j.jsx)("button",{className:"btn w-full mt-2.5",type:"submit",disabled:o||!f,children:o?"Submitting...":"Submit"})]})}),(0,j.jsx)("div",{className:"bg-widget p-4 flex flex-col gap-4 rounded",children:(0,j.jsx)(l.A,{dataLength:(null===m||void 0===m?void 0:m.length)||0,next:()=>{m.length<h&&A((e=>e+2))},hasMore:m.length<h,loader:(0,j.jsx)("p",{children:"Loading more feeds..."}),endMessage:(0,j.jsx)("p",{children:"No more feeds to load."}),children:null===m||void 0===m?void 0:m.map(((e,a)=>(0,j.jsx)(K,{data:e,setFeeds:x},`feed-${a}`)))})})]}),(0,j.jsx)("div",{className:"basis-1/4",children:(0,j.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,j.jsx)(y,{}),(0,j.jsx)(R.A,{})]})})]})]})}},86119:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(70579);const l=e=>{let{color:a,text:t}=e;return(0,s.jsxs)("div",{className:"legend",children:[(0,s.jsx)("span",{className:"legend_color",style:{backgroundColor:`var(--${a})`}}),(0,s.jsx)("span",{className:"legend_text label h6",children:t})]})}},47908:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(70579);const l=e=>{let{progress:a,text:t}=e;return(0,s.jsxs)("div",{className:"progress-info",children:[(0,s.jsx)("i",{className:"icon icon-chevrons-"+(a>0?"up positive":"down negative")}),(0,s.jsxs)("span",{className:"h6 label",children:[a>0?"+":"-",Math.abs(a)," ",t]})]})}},55230:(e,a,t)=>{t.d(a,{A:()=>N});var s=t(94905),l=t(74068),i=t.n(l),r=t(68309);const n=(0,s.Ay)(r.A)`
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
`,o=s.Ay.div`
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
`;var d=t(24490),c=t(86119),m=t(86328),x=t(65043),h=t(41325),p=t(60446),u=t.n(p);const g=u()().month(),v=g-1,f=g+1,j=[{date:u()().month(v).date(15).hour(18).minute(30),title:"Premier League: Chelsea vs Manchester United",type:"league"},{date:u()().month(v).date(22).hour(20).minute(0),title:"Champions League: Barcelona vs PSG",type:"championship"},{date:u()().month(g).date(5).hour(17).minute(0),title:"Serie A: Juventus vs Napoli",type:"league"},{date:u()().month(g).date(5).hour(12).minute(15),title:"FA Cup Semifinals",type:"cup"},{date:u()().month(g).date(12).hour(19).minute(30),title:"La Liga: Atletico Madrid vs Real Madrid",type:"league"},{date:u()().month(g).date(18).hour(14).minute(0),title:"FA Cup Semifinals",type:"cup"},{date:u()().month(g).date(25).hour(16).minute(0),title:"Premier League: Tottenham vs Arsenal",type:"league"},{date:u()().month(f).date(3).hour(15).minute(0),title:"Bundesliga: Borussia Dortmund vs Bayern Munich",type:"league"},{date:u()().month(f).date(9).hour(18).minute(0),title:"Champions League: Quarterfinals",type:"cup"},{date:u()().month(f).date(16).hour(21).minute(0),title:"Europa League: Semifinals",type:"cup"},{date:u()().month(f).date(23).hour(17).minute(0),title:"Premier League: Manchester City vs Liverpool",type:"league"}];var b=t(70579);const y=e=>{let{events:a,color:t}=e;const s=a.sort(((e,a)=>u()(e.date).isAfter(u()(a.date))?1:-1));return(0,b.jsx)("div",{className:"flex flex-col gap-2",children:s.map(((e,a)=>(0,b.jsxs)("div",{className:"popup_event flex flex-col gap-0.5",children:[(0,b.jsxs)("h5",{className:"title",children:[(0,b.jsx)("span",{className:"title_color",style:{backgroundColor:`var(--${t(e.date)})`}}),e.title]}),(0,b.jsx)("span",{className:"time label h6",children:u()(e.date).format("HH:mm")})]},a)))})},N=()=>{const{direction:e}=(0,h.q)(),[a,t]=(0,x.useState)(!1),[s,l]=(0,x.useState)(null),i=[{label:"League",color:"azure"},{label:"Championship",color:"grass"},{label:"Cup",color:"pink"}],r=e=>j.filter((a=>u()(a.date).isSame(e,"day"))),p=e=>i.filter((a=>a.label.toLowerCase()===r(e)[0].type))[0].color,g={locale:"en-AU",navigationLabel:e=>{let{date:a}=e;return`${u()(a).format("MMMM YYYY")}`},navigationAriaLabel:"Current month",prevLabel:(0,b.jsx)("i",{className:"icon icon-chevron-left"}),nextLabel:(0,b.jsx)("i",{className:"icon icon-chevron-right"}),prev2Label:null,next2Label:null,nextAriaLabel:"Next month",prevAriaLabel:"Previous month",formatShortWeekday:(e,a)=>u()(a).format("dd"),tileContent:e=>{let{date:a}=e;return r(a).length?(0,b.jsx)("span",{className:"overlay",children:(0,b.jsx)("span",{className:"overlay_bar",style:{backgroundColor:`var(--${p(a)})`}})}):null},tileClassName:e=>{let{date:a}=e;return r(a).length?"active":null},onClickDay:e=>{l(e),t(!0)}};return(0,b.jsxs)(n,{className:"card height-w-2 relative",children:[(0,b.jsxs)("div",{className:"main",children:[(0,b.jsx)("h3",{children:"Games calendar"}),(0,b.jsx)(d.Ay,{...g})]}),(0,b.jsx)("div",{className:"flex flex-wrap gap-3.5 card-padded border-top",children:i.map(((e,a)=>(0,b.jsx)(c.A,{text:e.label,color:e.color},a)))}),s&&(0,b.jsx)(o,{className:a?"visible":"",onClick:()=>t(!1),children:(0,b.jsx)(m.A,{in:a,timeout:300,style:{transformOrigin:"0 0 0"},children:(0,b.jsxs)("div",{className:`popup ${e}`,children:[(0,b.jsx)("button",{className:"popup_btn",onClick:()=>t(!1),"aria-label":"Close",children:(0,b.jsx)("i",{className:"icon icon-xmark"})}),(0,b.jsx)(y,{events:r(s),color:p})]})})})]})}}}]);
//# sourceMappingURL=741.cd9182d2.chunk.js.map