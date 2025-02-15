"use strict";(self.webpackChunkliga_soccer=self.webpackChunkliga_soccer||[]).push([[233],{73926:(e,s,a)=>{a.d(s,{A:()=>i});const r="styles_row__sN4+j";var t=a(70579);const i=e=>{let{property:s,value:a}=e;return(0,t.jsxs)("li",{className:r,children:[(0,t.jsx)("span",{className:"font-semibold",children:s}),(0,t.jsx)("span",{className:"text-ellipsis overflow-hidden whitespace-nowrap",children:a})]})}},57597:(e,s,a)=>{a.d(s,{A:()=>n});const r="styles_header__443St",t="styles_row__nAscM";var i=a(81558),l=a(70579);const n=e=>{let{data:s=[],open:a,onClose:n}=e;return(0,l.jsx)(i.default,{open:a,onClose:n,children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("h2",{className:"text-center",children:"Size Chart"}),(0,l.jsxs)("div",{className:"flex flex-col g-30",children:[(0,l.jsxs)("div",{className:`${r} ${t}`,children:[(0,l.jsx)("span",{}),(0,l.jsx)("span",{className:"h4",children:"Chest(in)"}),(0,l.jsx)("span",{className:"h4",children:"Waist(in)"})]}),(0,l.jsx)("div",{children:s.map(((e,s)=>(0,l.jsxs)("div",{className:t,children:[(0,l.jsx)("span",{className:"h4",children:e.ShortCode}),(0,l.jsx)("span",{children:`${e.Chest[0]}-${e.Chest[1]}`}),(0,l.jsx)("span",{children:`${e.Waist[0]}-${e.Waist[1]}`})]})))})]})]})})}},15409:(e,s,a)=>{a.r(s),a.d(s,{default:()=>H});var r=a(79140),t=a(96810),i=a(57781),l=a(57584),n=a(65540),d=a(92725),o=a(65043),c=a(85266),x=a(35475);const h="styles_title__CxTat",p="styles_swiper__1fV4f",u="styles_swiper_slide__G2wdl";var g=a(68309),m=a(9842),j=a(26178),v=a(25264),f=a(50063),b=a(41408),y=a(34671),N=a(38906),w=a(89124),A=a(41325),_=a(338),C=a(70579);const k=e=>{let{product:s}=e;const[a,{width:r}]=(0,w.A)(),{direction:t}=(0,A.q)(),[i,l]=(0,o.useState)(null),{addToCart:n,addToFavList:d,removeFromFavList:c,favList:k}=(0,_.r)(),P=e=>k.some((s=>s.ProductID===e));return(0,o.useEffect)((()=>{i&&(i.changeLanguageDirection(t),i.update())}),[i,t]),(0,C.jsxs)(g.A,{className:"card height-w-2 flex flex-col justify-between card-padded",children:[(0,C.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,C.jsxs)("div",{className:"flex items-center justify-between",children:[(0,C.jsx)("div",{className:h,ref:a,children:(0,C.jsx)(x.k2,{className:"h3",to:`/product/${s.ProductID}`,children:(0,C.jsx)(f.A,{text:s.Name,width:r})})}),(0,C.jsx)(v.A,{color:"light",isLiked:P(s.ProductID),onClick:()=>P(s.ProductID)?c(s.ProductID):d(s)})]}),(0,C.jsx)(b.A,{value:s.ProductReviews.length>0?(s.ProductReviews.reduce(((e,s)=>e+s.Rating),0)/s.ProductReviews.length).toFixed(1):0})]}),(0,C.jsx)(y.RC,{className:p,onSwiper:l,slidesPerView:1,loop:!0,autoplay:{delay:1500,disableOnInteraction:!1},effect:"fade",fadeEffect:{crossFade:!0},modules:[N.Ij,N._R],speed:1200,children:s.Images.map(((e,s)=>(0,C.jsx)(y.qr,{children:(0,C.jsx)("div",{className:u,children:(0,C.jsx)("img",{src:e,alt:"product"})})},s)))}),(0,C.jsxs)("div",{className:"flex justify-between",children:[(0,C.jsx)(m.A,{price:s.Price}),(0,C.jsx)("div",{className:"flex items-center gap-5",children:(0,C.jsx)(j.A,{icon:"bag",onClick:()=>n(s,1),color:"grass",ariaLabel:"Add to cart",isCartAction:!1})})]})]})},P=()=>{var e;const{data:s,error:a,isLoading:r}=(0,c.Kc)({keyword:"",page:1,length:2,sizes:[],colors:[],brands:[],categories:[],priceRange:[5,9999]});return r?(0,C.jsx)("div",{children:"Loading..."}):a?(0,C.jsxs)("div",{children:["Error: ",a.message]}):(0,C.jsx)("div",{className:"grid gap-5 h-full",children:s&&(null===(e=s.data.rows)||void 0===e?void 0:e.map((e=>(0,C.jsx)(k,{product:e},e.id))))})};var L=a(80756);const S="styles_title__gJvt2",I="styles_swiper__HZJc5",D="styles_swiper_slide__pKcOh",$="styles_footer__05BHr";var z=a(73926);const F=()=>{const{direction:e}=(0,A.q)(),[s,a]=(0,o.useState)(null),[r,t]=(0,o.useState)(null),[i,{width:l}]=(0,w.A)(),{data:n,error:d,isLoading:x}=(0,c.dP)({num:1}),{addToCart:h,addToFavList:p,removeFromFavList:u,favList:b}=(0,_.r)();(0,o.useEffect)((()=>{s&&(s.changeLanguageDirection(e),s.update())}),[s,e]),(0,o.useEffect)((()=>{var e;const s=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e[0];s&&t(s)}),[n]);const k=e=>b.some((s=>s.ProductID===e));return x?(0,C.jsx)("div",{children:"Loading..."}):d?(0,C.jsx)("div",{children:"Error loading product data."}):(0,C.jsx)(g.A,{className:"card flex flex-col card-padded",children:r&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:"flex-1",children:[(0,C.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,C.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,C.jsx)("span",{className:"label label--store h6",children:r.ProductCategory.Name}),(0,C.jsx)("div",{className:S,ref:i,children:(0,C.jsx)(f.A,{className:"h3",text:r.Name,width:l})})]}),(0,C.jsx)(m.A,{price:r.Price})]}),(0,C.jsx)(y.RC,{className:I,onSwiper:a,modules:[N.Ij,N._R],autoplay:{delay:3e3,disableOnInteraction:!1},effect:"fade",fadeEffect:{crossFade:!0},speed:1200,children:r.Images.map(((e,s)=>(0,C.jsx)(y.qr,{className:D,children:(0,C.jsx)("img",{src:e,alt:`Product-Img_${s}`,className:"object-cover min-h-[400px]"})},s)))}),(0,C.jsxs)("div",{className:"flex flex-col g-30",children:[(0,C.jsx)("p",{children:r.ShortDesc}),(0,C.jsxs)("ul",{className:"flex flex-col gap-2",children:[(0,C.jsx)(z.A,{property:"Brand:",value:r.Brand.Name}),(0,C.jsx)(z.A,{property:"Color:",value:r.Colors.map((e=>e.Color)).join(", ")}),(0,C.jsx)(z.A,{property:"Fabric:",value:r.Material}),(0,C.jsx)(z.A,{property:"Return Policy:",value:`${r.ReturnPolicy} days`})]})]})]}),(0,C.jsxs)("div",{className:`${$} flex justify-between`,children:[(0,C.jsx)(j.A,{icon:"bag",onClick:()=>h(r,1),color:"grass",ariaLabel:"Add to cart",isCartAction:!1}),(0,C.jsx)("div",{className:"flex items-center gap-5",children:(0,C.jsx)(v.A,{color:"light",isLiked:k(r.ProductID),onClick:()=>k(r.ProductID)?u(r.ProductID):p(r)})})]})]})})};var R=a(94905),T=a(88986);const E=(0,R.Ay)(T.A)`
  .sticky-inner-wrapper {
    display: flex;
    align-items: center;
    transition: top var(--transition);
  }

  &.is-sticky .sticky-inner-wrapper {
    height: 40px !important;
    width: 100% !important;
    background: var(--widget);
    border-bottom: 1px solid var(--border);
    left: 0;
    top: var(--header-active) !important;
    padding: 0 20px;
  }
`,q=()=>{const{setFiltersOpen:e}=(0,_.r)();return(0,C.jsx)(E,{top:0,innerZ:999,activeClass:"is-sticky",children:(0,C.jsxs)("div",{className:"flex items-center justify-between flex-1",children:[(0,C.jsx)("h3",{children:"Filters"}),(0,C.jsx)("button",{className:"h3",onClick:()=>e(!0),"aria-label":"Open filters",children:(0,C.jsx)("i",{className:"icon icon-sliders"})})]})})};var M=a(15077);const V=(0,a(89842).Ay)((()=>a.e(961).then(a.bind(a,12961)))),B={categories:(0,C.jsx)(i.A,{}),qty:(0,C.jsx)(l.A,{}),sizes:(0,C.jsx)(n.A,{}),colors:(0,C.jsx)(d.A,{}),products_group:(0,C.jsx)(P,{}),products_list:(0,C.jsx)(L.A,{}),product_vertical:(0,C.jsx)(F,{})},O={trigger:(0,C.jsx)(q,{}),products_group:(0,C.jsx)(P,{}),products_list:(0,C.jsx)(L.A,{}),product_vertical:(0,C.jsx)(F,{})},H=()=>{const{width:e}=(0,M.A)();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(r.A,{title:"Football store"}),(0,C.jsx)(t.A,{id:"football_store",widgets:e<768?O:B}),e<768&&(0,C.jsx)(V,{})]})}},58568:(e,s,a)=>{a.d(s,{A:()=>l});var r=a(94905),t=a(70579);const i=r.Ay.div`
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
`,l=e=>{let{id:s,onChange:a,innerRef:r,color:l,...n}=e;return(0,t.jsxs)(i,{className:"flex items-center justify-center",color:l,children:[(0,t.jsx)("input",{type:"checkbox",id:s,onChange:a,ref:r,...n}),(0,t.jsx)("label",{htmlFor:s})]})}},75131:(e,s,a)=>{a.d(s,{A:()=>l});var r=a(94905),t=a(70579);const i=r.Ay.div`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${e=>{let{color1:s}=e;return s}};
  }

  ${e=>{let{isDuo:s,color2:a}=e;return s&&`\n        &:before {\n            content: '';\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 50%;\n            height: 100%;\n            z-index: 2;\n            background: ${a};\n        }\n    `}}
  input {
    display: none;

    &:checked + label {
      opacity: 1;
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    transition: opacity var(--transition);

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background: var(--widget);
      transform: translate(-50%, -50%);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: ${e=>{let{color1:s}=e;return"#3A3A3A"===s?"white":s}};
    }
  }
`,l=e=>{let{ColorID:s,Value:a=[],checked:r,onChange:l,type:n="checkbox",name:d}=e;const o={color1:a[0]||"transparent",color2:a[1]||"transparent",isDuo:2===a.length};return(0,t.jsxs)(i,{...o,children:[(0,t.jsx)("input",{type:n,checked:r,onChange:()=>{l(s)},id:s,name:d}),(0,t.jsx)("label",{htmlFor:s,children:(0,t.jsx)("i",{className:"icon icon-xmark"})})]})}},67412:(e,s,a)=>{a.d(s,{A:()=>o});var r=a(94905),t=a(74068),i=a.n(t),l=a(97629),n=a(70579);const d=(0,r.Ay)(l.Ay)`
  padding: 8px 0 !important;
  
  .MuiSlider-rail,
  .MuiSlider-track {
    height: 8px;
    border-radius: 4px;
    border: none !important;
  }

  .MuiSlider-rail {
    background-color: var(--border);
  }

  .MuiSlider-thumb {
    width: 20px;
    height: 20px;

    &:before, &:after {
      display: none;
    }
  }

  .MuiSlider-valueLabel {
    background: var(--tooltip-bg);
    box-shadow: 0 2px 16px rgba(75, 85, 110, 0.2);
    border-radius: 8px;
    font-family: var(--heading-font);
    color: var(--header);
    font-weight: 500;
    height: 30px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0 8px !important;
    
    .MuiSlider-valueLabelLabel {
      font-size: 0.75rem;
      line-height: 1;
    }
  }

  .MuiSlider-track,
  .MuiSlider-thumb {
    background-color: ${i()("theme",{light:"var(--grass)",dark:"var(--accent)"})};
    box-shadow: none !important;
  }
`,o=e=>{let{min:s,max:a,value:r,onChange:t,valueLabelDisplay:i,valueText:l,ariaLabel:o,step:c=1}=e;return(0,n.jsx)(d,{getAriaLabel:()=>o,value:r,min:s,max:a,step:c,onChange:t,valueLabelDisplay:i,getAriaValueText:l,valueLabelFormat:l})}},20016:(e,s,a)=>{a.d(s,{A:()=>d});const r={radio:"styles_radio__loVQs",light:"styles_light__izYx8",dark:"styles_dark__4SgH2",disabled:"styles_disabled__+dNHL"};var t=a(41325),i=a(98139),l=a.n(i),n=a(70579);const d=e=>{let{id:s,size:a,disabled:i=!1,type:d="checkbox",selected:o,onToggle:c}=e;const{theme:x}=(0,t.q)();return(0,n.jsxs)("div",{className:l()(r.radio,{[r.disabled]:i,[r[x]]:x}),children:[(0,n.jsx)("input",{type:d,name:"size",id:a,value:a,checked:o,disabled:i,onChange:()=>{i||c(s)}}),(0,n.jsxs)("label",{className:"h4",htmlFor:a,children:[a," ",(0,n.jsx)("i",{className:"icon-xmark"})]})]})}},80756:(e,s,a)=>{a.d(s,{A:()=>k});const r="styles_grid__A5rUr";var t=a(68309),i=a(35475);const l="styles_container__73Tyg",n="styles_media__hSJBe",d="styles_main__k+Kxt",o="styles_main_title__xxXe3";var c=a(50063),x=a(41408),h=a(9842),p=a(26178),u=a(89124),g=a(15077),m=a(338),j=a(70579);const v=e=>{let{product:s,isSlide:a=!1}=e;const r=a?"div":t.A,[v,{width:f}]=(0,u.A)(),{width:b}=(0,g.A)(),{addToCart:y}=(0,m.r)();return(0,j.jsxs)(r,{className:`${l} card card-padded ${b>=414?"height-w-1":""}`,children:[(0,j.jsx)("img",{className:n,src:s.Images[0],alt:s.Name}),(0,j.jsxs)("div",{className:d,ref:v,children:[(0,j.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,j.jsx)("span",{className:"label label--store h6",children:s.ProductCategory.Name}),(0,j.jsx)(i.k2,{className:o+" h3",to:`/product/${s.ProductID}`,children:(0,j.jsx)(c.A,{width:f,text:s.Name})}),(0,j.jsx)(x.A,{value:s.ProductReviews.length>0?(s.ProductReviews.reduce(((e,s)=>e+s.Rating),0)/s.ProductReviews.length).toFixed(1):0})]}),(0,j.jsxs)("div",{className:"flex items-center justify-between",children:[(0,j.jsx)(h.A,{price:s.Price}),(0,j.jsx)(p.A,{icon:"bag",onClick:()=>y(s,1),color:"grass",ariaLabel:"Add to cart",isCartAction:!1})]})]})]})};var f=a(34671),b=a(38906),y=a(65043),N=a(52410),w=a(41325),A=a(85266);const _=e=>{let{children:s}=e;return(0,j.jsx)("div",{className:r,children:s})},C=e=>{let{children:s}=e;const{direction:a}=(0,w.q)(),[r,i]=(0,y.useState)(null);return(0,y.useEffect)((()=>{r&&(r.changeLanguageDirection(a),r.update())}),[r,a]),(0,j.jsx)(t.A,{children:(0,j.jsxs)("div",{className:"relative",children:[(0,j.jsx)(f.RC,{className:"h-full",onSwiper:i,modules:[b.Vx,b.Ij],navigation:!0,slidesPerView:1,spaceBetween:20,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:1500,breakpoints:{767:{slidesPerView:2},1279:{slidesPerView:3},1499:{slidesPerView:4}},children:s}),(0,j.jsx)(N.A,{swiper:r,withShadow:!0})]})})},k=e=>{var s;let{isSlider:a=!1}=e;const{direction:r}=(0,w.q)(),t=a?C:_,i=a?f.qr:y.Fragment,l=a?{style:{margin:"ltr"===r?"0 20px 0 0":"0 0 0 20px"}}:{},{selectedCategories:n,priceRange:d,selectedSizes:o,selectedColors:c}=(0,m.r)(),{data:x,error:h,isLoading:p}=(0,A.Kc)({keyword:"",page:2,length:4,sizes:o,colors:c,brands:[],categories:n,priceRange:d});return p?(0,j.jsx)("div",{children:"Loading..."}):h?(0,j.jsxs)("div",{children:["Error: ",h.message]}):(0,j.jsx)(t,{children:x&&(null===(s=x.data.rows)||void 0===s?void 0:s.map(((e,s)=>(0,j.jsx)(i,{...l,children:(0,j.jsx)(v,{index:s,product:e,isSlide:a})},e.id))))})}},57781:(e,s,a)=>{a.d(s,{A:()=>p});var r=a(94905),t=a(74068),i=a.n(t),l=a(68309),n=a(58568),d=a(41325),o=a(85266),c=a(338),x=a(70579);const h=r.Ay.div`
  .item {
    position: relative;

    &_qty {
      position: absolute;
      color: ${i()("theme",{light:"var(--btn-text-light)",dark:"#B0B7A1"})};

      &.ltr {
        margin: -4px 0 0 8px;
      }

      &.rtl {
        margin: -4px 8px 0 0;
      }
    }
  }
`,p=e=>{let{standalone:s=!0}=e;const{direction:a}=(0,d.q)(),r=s?l.A:"div",t=s?{className:"card flex flex-col gap-5 card-padded"}:{className:"flex flex-col gap-5"},{data:i,isLoading:p,error:u}=(0,o.$f)({minify:"false"}),{selectedCategories:g,toggleCategory:m,resetCategory:j}=(0,c.r)();return(0,x.jsxs)(r,{...t,children:[(0,x.jsxs)("div",{className:"flex justify-between",children:[(0,x.jsx)("h3",{children:"Categories"}),g.length>1&&(0,x.jsx)("button",{className:"underline",onClick:()=>j(),children:"Clear"})]}),p&&(0,x.jsx)("p",{children:"Loading categories..."}),u&&(0,x.jsxs)("p",{style:{color:"red"},children:["Error loading categories: ",u.message]}),!p&&!u&&i&&(0,x.jsx)("div",{className:"h-30 overflow-y-scroll",children:(0,x.jsx)("div",{className:"grid grid-cols-2 gap-3",style:{paddingTop:0},children:i.data.map((e=>(0,x.jsxs)(h,{className:"flex items-center gap-3",children:[(0,x.jsx)(n.A,{id:`Product-Categories-${e.ProductCatID}`,color:"grass",checked:g.includes(e.ProductCatID),onChange:()=>{return s=e.ProductCatID,void m(s);var s}}),(0,x.jsxs)("label",{className:"item text-16",children:[e.Name,(0,x.jsx)("span",{className:`item_qty h6 ${a}`,children:e.ProductCount})]})]},`Product-Categories-${e.ProductCatID}`)))})})]})}},92725:(e,s,a)=>{a.d(s,{A:()=>d});var r=a(68309),t=a(75131),i=a(85266),l=a(338),n=a(70579);const d=e=>{let{standalone:s=!0}=e;const a=s?r.A:"div",d=s?{className:"card flex flex-col justify-between card-padded"}:{className:"flex flex-col gap-5"},{data:o,isLoading:c,error:x}=(0,i.Bc)(),{selectedColors:h,toggleColor:p,resetColors:u}=(0,l.r)();return(0,n.jsxs)(a,{...d,children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("h3",{children:"Available colors"}),h.length>1&&(0,n.jsx)("button",{className:"underline",onClick:()=>u(),children:"Clear"})]}),c&&(0,n.jsx)("p",{children:"Loading colors..."}),x&&(0,n.jsxs)("p",{style:{color:"red"},children:["Error loading colors: ",x.message]}),!c&&!x&&o&&(0,n.jsx)("div",{className:"flex flex-wrap",style:{gap:"12px"},children:o.data.map((e=>(0,n.jsx)(t.A,{type:"checkbox",...e,checked:h.includes(e.ColorID),onChange:p},e.ColorID)))})]})}},57584:(e,s,a)=>{a.d(s,{A:()=>c});var r=a(68309),t=a(9842),i=a(67412),l=a(65043),n=a(338),d=a(70579);const o=e=>`${e}$`,c=e=>{let{standalone:s=!0}=e;const a=s?r.A:"div",c=s?{className:"card flex flex-col justify-between card-padded"}:{className:"flex flex-col justify-between gap-6"},{priceRange:x,updatePriceRange:h}=(0,n.r)(),[p,u]=(0,l.useState)(x);return(0,d.jsxs)(a,{...c,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Price range"}),(0,d.jsx)("p",{className:"text-12",children:"Technical and tactical actions"})]}),(0,d.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,d.jsx)(i.A,{ariaLabel:"Price range",value:p,min:5,max:9999,onChange:(e,s)=>{u(s)},valueLabelDisplay:"auto",valueText:o}),(0,d.jsxs)("div",{className:"flex justify-between",children:[(0,d.jsx)(t.A,{price:p,isRange:!0}),(0,d.jsx)("button",{onClick:()=>{h(p)},className:"btn btn--sm",children:"Apply"})]})]})]})}},65540:(e,s,a)=>{a.d(s,{A:()=>c});var r=a(65043),t=a(68309),i=a(57597),l=a(20016),n=a(85266),d=a(338),o=a(70579);const c=e=>{let{standalone:s=!0}=e;const a=s?t.A:"div",c=s?{className:"card"}:{},[x,h]=(0,r.useState)(!1),{data:p,isLoading:u,error:g}=(0,n.nd)(),{selectedSizes:m,toggleSize:j,resetSizes:v}=(0,d.r)(),f={padding:s?"30px 30px 20px":"0 0 20px",borderBottom:"1px solid var(--border)"},b={padding:s?"20px 30px 30px":"20px 0 0"};return(0,o.jsxs)(a,{...c,children:[(0,o.jsxs)("div",{className:"flex justify-between",style:f,children:[(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)("h3",{children:"Select size"}),m.length>1&&(0,o.jsx)("button",{className:"underline",onClick:()=>v(),children:"Clear"})]}),(0,o.jsx)("button",{className:"text-button",onClick:()=>h(!0),children:"Size table"})]}),u&&(0,o.jsx)("p",{children:"Loading sizes..."}),g&&(0,o.jsxs)("p",{style:{color:"red"},children:["Error loading sizes: ",g.message]}),!u&&!g&&p&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"flex flex-wrap gap-2",style:b,children:p.data.map((e=>(0,o.jsx)(l.A,{id:e.SizeID,size:e.Name,selected:m.includes(e.SizeID),onToggle:j},e.ShortCode)))}),(0,o.jsx)(i.A,{open:x,onClose:()=>h(!1),data:p.data})]})]})}}}]);
//# sourceMappingURL=233.b1f614eb.chunk.js.map