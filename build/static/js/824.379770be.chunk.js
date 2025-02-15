"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[824],{6196:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var n=r(79140),a=(r(83656),r(94905)),o=r(74068),i=r.n(o);const d=a.Ay.div`
  .rbc-month-view,
  .rbc-time-view,
  .rbc-time-header {
    border: 1px solid var(--border);
  }

  .rbc-off-range-bg,
  .rbc-today {
    background: transparent;
  }

  .rbc-header {
    border-bottom: 1px solid var(--border);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--heading-font);
    font-size: 10px;
    text-transform: uppercase;
    color: var(--header);
    font-weight: 600;

    button {
      font-weight: 600;
    }
  }

  .rbc-day-bg + .rbc-day-bg,
  .rbc-header + .rbc-header,
  .rbc-time-header-content,
  .rbc-time-content > * + * > * {
    border-left: 1px solid var(--border);
  }

  .rbc-time-content,
  .rbc-time-content:first-of-type {
    border-top: none;
  }

  .rbc-time-header.rbc-overflowing {
    border-right: 1px solid var(--border);
  }

  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid var(--border);
  }

  .rbc-day-slot .rbc-time-slot {
    border-top: 1px dashed var(--border);
  }

  .rbc-timeslot-group {
    border-bottom: 1px dashed var(--border);
    position: relative;

    &:last-of-type {
      border-bottom: none;
    }
  }

  .rbc-current-time-indicator {
    background: ${i()("theme",{light:"var(--azure)",dark:"var(--accent)"})};
  }

  .rbc-time-gutter {
    width: 68px;

    .rbc-timeslot-group {
      .rbc-time-slot {
        &:first-of-type {
          flex: 1;
          align-items: center;
          justify-content: center;
          position: relative;

          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            border-top: 1px dashed var(--border);
            transform: translateY(-50%);
            z-index: 1;
          }

          .rbc-label {
            position: relative;
            z-index: 2;
            font-family: var(--heading-font);
            font-size: 9px;
            letter-spacing: 0.45px;
            font-weight: 600;
            color: var(--btn-text);
            height: 20px;
            width: 40px;
            background: var(--widget);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 11px;
          }
        }

        &:last-of-type {
          display: none;
        }
      }
    }
  }

  &.day {
    .rbc-day-slot .rbc-timeslot-group:first-of-type .rbc-time-slot:first-of-type {
      border-top: none;
    }

    .rbc-time-header {
      display: none;
    }
  }

  &.week {
    .rbc-allday-cell,
    .rbc-current-time-indicator{
      display: none;
    }

    .rbc-time-header {
      border: none;
    }
  }

  &.month .rbc-month-view {
    min-height: 500px;

    .rbc-date-cell {
      padding: 4px 0 0 0;
      text-align: center;

      &.rbc-off-range {
        opacity: .5;
      }

      &.rbc-now .rbc-button-link {
        font-weight: 600;
        color: ${i()("theme",{light:"var(--blue)",dark:"var(--accent)"})};
      }

      .rbc-button-link {
        font-size: 0.75rem;
        font-family: var(--heading-font);
        font-weight: 500;
      }
    }

    @media screen and (min-width: 768px) {
      min-height: 800px;

      .rbc-date-cell {
        text-align: right;
        padding: 10px;
      }
    }

    @media screen and (min-width: 1280px) {
      min-height: 1200px;
    }
  }

  .rbc-time-view {
    flex: unset;
  }

  .rbc-timeslot-group {
    max-height: 40px;

    .rbc-time-slot {
      display: flex;
      align-items: center;
      height: 20px;
    }
  }

  .rbc-events-container {
    margin: 0 !important;

    .rbc-event {
      padding: 0;
      background: transparent;
      border: none;
      border-radius: 0;

      &-label {
        display: none;
      }
    }
  }

  .rbc-event {
    padding: 0;
    background: transparent !important;
    border-radius: 0;
    outline: none !important;
  }

  .rbc-show-more {
    color: ${i()("theme",{light:"var(--blue)",dark:"var(--accent)"})};
    background: transparent;
    margin: 10px auto 0;
  }

  .rbc-row-segment {
    min-height: 20px;

    @media screen and (min-width: 1280px) {
      min-height: 40px;
    }
  }
`,s=a.Ay.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    &[dir="ltr"] {
      &[data-view="day"] .date {
        margin-left: 68px;
      }
    }

    &[dir="rtl"] {
      &[data-view="day"] .date {
        margin-right: 68px;
      }
    }
  }
`,c=a.Ay.div`
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 300px;
  }
`;var l=r(68309),m=r(1699),h=r(22772),b=r(70579);const p=e=>{let{current:t,handler:r}=e;return(0,b.jsxs)(c,{className:"tab-nav",children:[(0,b.jsx)(h.A,{title:"Month",active:"month"===t,onClick:()=>r("month")}),(0,b.jsx)(h.A,{title:"Week",active:"week"===t,onClick:()=>r("week")}),(0,b.jsx)(h.A,{title:"Day",active:"day"===t,onClick:()=>r("day")})]})},u=e=>{let{date:t,handler:r}=e;return(0,b.jsxs)(c,{className:"tab-nav",children:[(0,b.jsx)(h.A,{title:"Prev",onClick:()=>r("PREV",t)}),(0,b.jsx)(h.A,{title:"Today",onClick:r}),(0,b.jsx)(h.A,{title:"Next",onClick:()=>r("NEXT",t)})]})};var x=r(50063),g=r(81558),f=r(89124),v=r(65043),y=r(60446),w=r.n(y);const k=a.Ay.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  color: ${i()("theme",{light:"var(--text)",dark:"#fff"})};
  position: relative;
  min-height: 20px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${i()("theme",{light:"#f7f7f7",dark:"#111312"})};
    mix-blend-mode: luminosity;
  }

  &.marketing {
    border-color: var(--turquoise);
    background: var(--turquoise);
  }

  &.workflow {
    border-color: var(--azure);
    background: var(--azure);
  }

  &.health {
    border-color: var(--grass);
    background: var(--grass);
  }

  &.other {
    border-color: var(--accent);
    background: var(--accent);
  }
  
  &.week, &.month {
    .text {
      display: none;
    }
  }
  
  @media screen and (min-width: 1280px) {
    &.week, &.month {
      .text {
          display: block;
      }
    }
    
    &.month {
      min-height: 40px;
    }
  }
`,D=e=>{let{event:t,view:r}=e;const[n,{width:a}]=(0,f.A)(),[o,i]=(0,v.useState)(!1),d=e=>w()(e).format("HH:mm A"),s=w()(t.end).isBefore(w()());return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{className:`${t.type} ${r} ${s?"ended":""}`,ref:n,onClick:"day"!==r?()=>i(!0):null,children:(0,b.jsx)(x.A,{className:"text relative z-2",text:t.name,lines:1,width:a})}),"day"!==r&&(0,b.jsx)(g.default,{open:o,onClose:()=>i(!1),children:(0,b.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,b.jsx)("h3",{children:t.name}),(0,b.jsxs)("span",{className:"label h5",children:[d(t.start)," - ",d(t.end)]})]})})]})};var j=r(15077),M=r(41325),A=r(86178),Y=r.n(A);const N=[{name:"UPS Marketing Event",start:Y()().set({hour:9,minute:0,second:0,millisecond:0}).toDate(),end:Y()().set({hour:10,minute:0,second:0,millisecond:0}).toDate(),allDay:!1,type:"marketing"},{name:"Hermes presentation",start:Y()().set({hour:12,minute:30,second:0,millisecond:0}).toDate(),end:Y()().set({hour:13,minute:30,second:0,millisecond:0}).toDate(),allDay:!1,type:"marketing"},{name:"Team meeting",start:Y()().set({hour:16,minute:30,second:0,millisecond:0}).toDate(),end:Y()().set({hour:18,minute:0,second:0,millisecond:0}).toDate(),allDay:!1,type:"workflow"},{name:"Medical checkup",start:Y()().set({hour:11,minute:0,second:0,millisecond:0}).toDate(),end:Y()().set({hour:12,minute:0,second:0,millisecond:0}).toDate(),allDay:!1,type:"health"},{name:"Dinner with friends",start:Y()().set({hour:13,minute:30,second:0,millisecond:0}).toDate(),end:Y()().set({hour:14,minute:30,second:0,millisecond:0}).toDate(),allDay:!1,type:"other"},{name:"Semi-annual review",start:Y()().set({hour:20,minute:0,second:0,millisecond:0}).toDate(),end:Y()().set({hour:22,minute:0,second:0,millisecond:0}).toDate(),allDay:!1,type:"workflow"}],$=()=>{const{direction:e}=(0,M.q)(),[t,r]=(0,v.useState)("day"),n=(0,m.ye)(Y()),[a,o]=(0,v.useState)(Y()().toDate()),[i,c]=(0,v.useState)(Y()().format("HH:mm")),{width:h}=(0,j.A)();(0,v.useEffect)((()=>{const e=setInterval((()=>{c(Y()().format("HH:mm"))}),1e3);return()=>clearInterval(e)}),[i]);const x=e=>{switch(e){case"NEXT":o(Y()(a).add(1,t).toDate());break;case"PREV":o(Y()(a).subtract(1,t).toDate());break;default:o(Y()().toDate())}},g=e=>[Y()(e).startOf("week"),Y()(e).endOf("week")],f=()=>{switch(t){case"month":default:return"MMMM YYYY";case"week":return h<768?"DD.MM.YY":"DD MMMM YYYY";case"day":return"DD MMMM YYYY"}},y={as:m.Vv,className:t,views:["month","week","day"],view:t,date:a,localizer:n,startAccessor:"start",endAccessor:"end",onNavigate:x,onView:r,min:Y()().startOf("year").set({hour:8,minute:0}).toDate(),max:Y()().endOf("year").set({hour:22,minute:0}).toDate(),step:30,events:N,formats:{timeGutterFormat:"HH:mm",dayFormat:(()=>{switch(!0){case h<768:return"D";case h<1600:return"ddd, D";default:return"dddd D MMMM"}})()},components:{toolbar:n=>{let{date:a}=n;return(0,b.jsxs)(s,{"data-view":t,dir:e,children:[(0,b.jsx)(u,{date:a,handler:x}),(0,b.jsxs)("h3",{className:"date",children:["week"===t&&g(a).map(((e,t)=>(0,b.jsxs)("span",{children:[e.format(f()),0===t?" - ":null]},t))),"month"===t&&Y()(a).format(f()),"day"===t&&`${Y()(a).format(f())}, ${i}`]}),(0,b.jsx)(p,{current:t,handler:r})]})},event:e=>{let{event:r}=e;return(0,b.jsx)(D,{event:r,view:t})}},selectable:"day"!==t,messages:{showMore:e=>`+ ${e}`}};return(0,b.jsx)(l.A,{className:"card h-fit card-padded",children:(0,b.jsx)(d,{...y})})},z=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n.A,{title:"Schedule"}),(0,b.jsx)($,{})]})}}]);
//# sourceMappingURL=824.379770be.chunk.js.map