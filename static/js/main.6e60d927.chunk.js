(this["webpackJsonpgoit-react-hw-04-images"]=this["webpackJsonpgoit-react-hw-04-images"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),s=(a(33),a(15)),i=a(4),l=(a(34),a(5)),u=(a(16),a(28)),j=a(1),b=function(e){var t=e.onQuery,a=e.onOption,c=Object(n.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1],b=Object(n.useState)(10),d=Object(i.a)(b,2),O=d[0],m=d[1];return Object(j.jsxs)("header",{className:"Searchbar",children:[Object(j.jsx)(l.a,{}),Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return l.b.warn(" No data entered",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});t(o),a(O)},children:[Object(j.jsxs)("button",{type:"submit",className:"SearchForm-button",children:[Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"}),Object(j.jsx)(u.a,{})]}),Object(j.jsx)("input",{name:"input",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){s(e.target.value)},value:o})]}),Object(j.jsxs)("label",{children:["images per page",Object(j.jsxs)("select",{name:"option",value:O,onChange:function(e){m(e.target.value)},children:["images per page",Object(j.jsx)("option",{defaultValue:!0,value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"}),Object(j.jsx)("option",{value:"30",children:"30"}),Object(j.jsx)("option",{value:"40",children:"40"}),Object(j.jsx)("option",{value:"50",children:"50"})]})]})]})},d=function(e){var t=e.images,a=e.onKeyEnter;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{src:e.webformatURL,"data-src":e.largeImageURL,alt:e.id,tabIndex:0,onKeyDown:a,className:"ImageGalleryItem-image"})},e.id)}))})},O=function(e){var t=e.images,a=e.click,n=e.onKeyEnter;return Object(j.jsx)("ul",{className:"ImageGallery",onClick:a,children:Object(j.jsx)(d,{images:t,onKeyEnter:n})})},m=a(13),g=a.n(m),h=a(26),p=a(14),f=a.n(p),x=a(2),v=a.n(x);f.a.defaults.baseURL="https://pixabay.com/api/";var y=function(){var e=Object(h.a)(g.a.mark((function e(t,a,n){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("?q=".concat(t,"&key=").concat("23049135-63d939595882c9f020474dd76","&page=").concat(a,"&&per_page=").concat(n,"&image_type=photo&orientation=horizontal"));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();y.propTypes={query:v.a.string,page:v.a.number,per_page:v.a.number};var S=document.querySelector("#modal-root"),w=function(e){var t=e.modalImage,a=e.alt,c=e.toggleModal;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]),Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&c()},children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:t,alt:a})})}),S)},N=(a(63),a(27)),k=a.n(N),I=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),u=o[0],d=o[1],m=Object(n.useState)(1),g=Object(i.a)(m,2),h=g[0],p=g[1],f=Object(n.useState)(10),x=Object(i.a)(f,2),v=x[0],S=x[1],N=Object(n.useState)(!1),I=Object(i.a)(N,2),E=I[0],C=I[1],F=Object(n.useState)(!1),M=Object(i.a)(F,2),L=M[0],B=M[1],G=Object(n.useState)(!1),K=Object(i.a)(G,2),H=K[0],R=K[1],q=Object(n.useState)(""),P=Object(i.a)(q,2),T=P[0],U=P[1],_=Object(n.useState)(0),D=Object(i.a)(_,2),J=D[0],Q=D[1],z=Object(n.useRef)(1),V=function(){R((function(e){return!e}))};Object(n.useEffect)((function(){1!==z.current?(C(!0),B(!1),y(a,h,v).then((function(e){d((function(t){return 1===h?e.hits:[].concat(Object(s.a)(t),Object(s.a)(e.hits))})),0===e.totalHits&&l.b.error("No images found",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0}),Q(e.totalHits)})).catch((function(e){d([]),B(e),C(!1)})).finally((function(){return C(!1)}))):z.current+=1}),[h,v,a]);var W=J>h*v;return Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)(b,{onQuery:function(e){e!==a&&(c(e),p(1))},onOption:S}),0!==u.length&&Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"We found ".concat(J," images")})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{}),L&&Object(j.jsx)("div",{children:"...Oops, something goes wrong!"}),Object(j.jsx)(O,{click:function(e){"IMG"===e.target.nodeName&&(U(e.target.dataset.src),V())},images:u,onKeyEnter:function(e){"IMG"===e.target.nodeName&&"Enter"===e.code&&(U(e.target.dataset.src),V())}}),E&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k.a,{type:"BallTriangle",className:"spinner",height:"100",width:"100",color:"#3f51b5",ariaLabel:"loading"}),Object(j.jsx)("div",{children:"...loading"})]}),0!==J&&W&&Object(j.jsx)("button",{className:"Button",onClick:function(){null!==a&&p((function(e){return e+1}))},children:"load More"}),0!==u.length&&!W&&Object(j.jsx)("div",{children:" You have riched the end of image list "}),H&&Object(j.jsx)(w,{toggleModal:V,modalImage:T,alt:a})]})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6e60d927.chunk.js.map