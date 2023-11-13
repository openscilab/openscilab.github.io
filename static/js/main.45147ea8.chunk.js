/*! For license information please see main.45147ea8.chunk.js.LICENSE.txt */
(this["webpackJsonposl-landing-frontend"]=this["webpackJsonposl-landing-frontend"]||[]).push([[0],{109:function(e,t,n){"use strict";n(492);var r=n(119),c=n(70),o=n(30),a=n(21),i=n(3);t.a=function(e){var t=e.children,n=e.bolt,u=void 0!==n&&n,s=e.ledMode,l=void 0!==s&&s,d=e.selected,b=void 0!==d&&d,f=e.fillingMode,j=void 0!==f&&f,v=e.onClick;return Object(i.jsxs)(r.a,{onClick:function(){return null===v||void 0===v?void 0:v()},appearance:l?void 0:"primary",className:Object(a.b)("neon-btn",{"led-mode":l,selected:b,bolt:u,"fill-mode":j}),children:[Object(i.jsx)(c.If,{condition:u,children:Object(i.jsx)(o.a,{fa:"s-bolt"})}),Object(i.jsxs)("div",{className:"child",children:[Object(i.jsx)(c.If,{condition:j,children:Object(i.jsx)(o.a,{fa:"s-arrow-right"})}),t]}),Object(i.jsxs)(c.If,{condition:l,children:[Object(i.jsx)("span",{className:"border-span top"}),Object(i.jsx)("span",{className:"border-span bottom"})]}),Object(i.jsx)(c.If,{condition:j,children:Object(i.jsx)("span",{className:"filler"})})]})}},161:function(e,t,n){"use strict";var r=n(10),c=n(0),o=function(){var e=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),{isMounted:e}};t.a=function(e){var t=o().isMounted,n=Object(c.useState)(e),a=Object(r.a)(n,2),i=a[0],u=a[1];return[i,function(e){t.current&&u(e)}]}},21:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(5),c=(n(26),n(11),n(49),n(61)),o=n(30),a=n(160),i=n(679),u=n(3),s=!1,l=function(){for(var e,t="",n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return r.forEach((function(e){if(e)return"string"===typeof e?t+=e+" ":void(t+=Object.entries(e||{}).filter((function(e){return!0===e[1]})).map((function(e){return e[0]})).join(" "))})),null===(e=t||"")||void 0===e?void 0:e.trim()},d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{className:l.apply(void 0,Object(c.a)(t||[]))}},b=function(e,t){var n=null===t||void 0===t?void 0:t.type,r=setInterval((function(){null!==a.a&&void 0!==a.a&&a.a.push&&(clearInterval(r),a.a.push(Object(u.jsxs)(i.a,{type:n,className:l("rs-custom-toast ".concat((null===t||void 0===t?void 0:t.className)||""," "),{"bg-error":"error"===n,"bg-primary":"info"===n,"bg-success":"success"===n,"bg-yellow-500":"warning"===n}),duration:(null===t||void 0===t?void 0:t.duration)||4500,closable:void 0===(null===t||void 0===t?void 0:t.closable)||(null===t||void 0===t?void 0:t.closable),children:[(null===t||void 0===t?void 0:t.icon)&&Object(u.jsx)(o.a,{fa:null===t||void 0===t?void 0:t.icon}),e]}),{placement:(null===t||void 0===t?void 0:t.placement)||"bottomEnd"}))}),200)},f={error:function(e,t){b(e,Object(r.a)({type:"error",icon:"l-xmark"},t||{}))},info:function(e,t){b(e,Object(r.a)({type:"info",icon:"l-info"},t||{}))},success:function(e,t){b(e,Object(r.a)({type:"success",icon:"l-check"},t||{}))},warning:function(e,t){b(e,Object(r.a)({type:"warning",icon:"l-triangle-exclamation"},t||{}))}}},223:function(e,t,n){"use strict";var r=n(62);t.a=function(){return(0,Object(r.a)().selector)((function(e){return e.dashboard}))}},224:function(e,t,n){"use strict";var r=n(10),c=n(0),o=function(){return"undefined"!==typeof document&&document.hasFocus()};t.a=function(){var e=Object(c.useState)(o),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({width:0,height:0}),u=Object(r.a)(i,2),s=u[0],l=u[1],d=Object(c.useRef)({focused:n,windowSize:s}),b=function(){l({width:window.innerWidth,height:window.innerHeight})};return Object(c.useEffect)((function(){a(o());var e=function(){return a(!0)},t=function(){return a(!1)};return window.addEventListener("focus",e),window.addEventListener("blur",t),function(){window.removeEventListener("focus",e),window.removeEventListener("blur",t)}}),[]),Object(c.useEffect)((function(){return b(),window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}}),[]),Object(c.useEffect)((function(){d.current={focused:n,windowSize:s}}),[n,s]),{winRef:d,size:s,hasFocus:n,isMobile:(null===s||void 0===s?void 0:s.width)<750,isDesktop:(null===s||void 0===s?void 0:s.width)>992}}},30:function(e,t,n){"use strict";var r=n(10),c=n.p+"static/media/fa.bundle.c9b1c877.svg",o=n(0),a=n(161),i=n(3),u=function(e){return function(){return n(390)("./".concat(e,".fa.svg"))}};u("thin"),u("light"),u("solid"),u("brands"),u("regular"),u("duotone"),t.a=function(e){var t=e.fa,n=e.onClick,u=e.className,s=void 0===u?"":u,l=e.style,d=Object(a.a)(),b=Object(r.a)(d,2),f=b[0],j=b[1],v=Object(a.a)(c),O=Object(r.a)(v,2),h=O[0];O[1];return Object(o.useEffect)((function(){f!=="#"+t&&j("#"+t)}),[t]),Object(i.jsx)("svg",{style:l,onClick:n,viewBox:"0 0 10 10",className:"fa-icon ".concat(t," ").concat(s),children:Object(i.jsx)("use",{xlinkHref:h+f})})}},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(26),c=n(5),o=n(49),a=n(10),i=n(58),u=n(21),s=n(62),l=n(0),d=n(329),b=n(356),f=n.n(b),j=n(57),v=n(77),O={base:!0,throwError:!1},h=function(e){return Object(c.a)(Object(c.a)({},O),e)},p=function(){var e=Object(o.a)(Object(r.a)().mark((function e(t,n){var o,a,i,s,l,d,b,v,O,p,m,g,x,w,y,E,k,S,P,T,R,I;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(a=n||{}).token,s=void 0===i?null===(o=window)||void 0===o?void 0:o.user_token:i,l=a.body,navigator.onLine){e.next=5;break}throw O="You are offline. Please check your internet connection.",u.a.error(O,{duration:4e3,icon:"l-wifi-slash"}),new Error(O);case 5:if(p=l instanceof FormData,l&&"object"===typeof l&&!p&&(l=JSON.stringify(l)),(m=h(Object(c.a)(Object(c.a)({},n),{},{body:l}))).headers=Object(c.a)(Object(c.a)(Object(c.a)({},m.headers),s?{Authorization:"Bearer "+s}:{}),p?{"Content-Type":"multipart/form-data"}:{"Content-Type":"application/json"}),(g=null===m||void 0===m?void 0:m.params)&&(w=(w=Object.entries(g||{}).filter((function(e){return void 0!==e[1]}))).map((function(e){return"".concat(e[0],"=").concat(e[1])})),x="?"+w.join("&")),y=(m.base?j.a.SERVER:"")+t+(x||""),e.prev=12,p){e.next=28;break}return e.next=16,fetch(y,m);case 16:return d=e.sent,b=null===(E=d)||void 0===E?void 0:E.status,e.prev=18,e.next=21,null===(k=d)||void 0===k?void 0:k.json();case 21:v=e.sent,e.next=26;break;case 24:e.prev=24,e.t0=e.catch(18);case 26:e.next=37;break;case 28:return S=function(e){var t,r=Math.round(100*e.loaded/e.total);null===n||void 0===n||null===(t=n.onUploadProgress)||void 0===t||t.call(n,e,r)},P=Object(c.a)(Object(c.a)({url:y,data:null===m||void 0===m?void 0:m.body},m||{}),{},{onUploadProgress:S}),e.next=32,f.a.request(P);case 32:T=e.sent,R=T.data,I=T.status,v=R,b=I;case 37:if(!(b>=400)){e.next=39;break}throw new Error("Request Error ".concat(b));case 39:e.next=45;break;case 41:if(e.prev=41,e.t1=e.catch(12),null===n||void 0===n||!n.throwError){e.next=45;break}throw e.t1;case 45:return e.abrupt("return",{json:v,response:d});case 46:case"end":return e.stop()}}),e,null,[[12,41],[18,24]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(e){return function(){var t=Object(o.a)(Object(r.a)().mark((function t(n,o){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n,Object(c.a)({method:e},o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};p.get=m("GET"),p.put=m("PUT"),p.post=m("POST"),p.delete=m("DELETE");t.b=function(e,t){var n=Object(d.a)(),u=Object(s.a)().dispatch,b=Object(i.a)(),f=b.user,O=b.tokenRef,h=Object(l.useState)(null),m=Object(a.a)(h,2),g=m[0],x=m[1],w=Object(l.useState)(!1),y=Object(a.a)(w,2),E=y[0],k=y[1],S=function(e,t){n.set("all",e),t&&n.set(t,e)},P=function(e,n){var r;u(Object(v.d)(n)),null===t||void 0===t||null===(r=t.onUploadProgress)||void 0===r||r.call(t,e,n)},T=Object(l.useCallback)((function(n){return function(){var a=Object(o.a)(Object(r.a)().mark((function o(a){var i,u,s,l,d,b,f,j;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(x(null),k(!1),S(!0,n),u=Object(c.a)(Object(c.a)(Object(c.a)({},t),a),{},{onUploadProgress:P}),s=(null===u||void 0===u?void 0:u.url)||e){r.next=7;break}return r.abrupt("return");case 7:return r.prev=7,b=Object(c.a)(Object(c.a)({},u),{},{token:null===O||void 0===O?void 0:O.current,method:n}),r.next=11,p(s,b);case 11:if(f=r.sent,j=f.json,x(i=j),S(!1,n),null===(l=i)||void 0===l||!l.error){r.next=18;break}throw new Error("".concat(null===(d=i)||void 0===d?void 0:d.message));case 18:r.next=26;break;case 20:throw r.prev=20,r.t0=r.catch(7),k(r.t0),x(null),S(!1,n),r.t0;case 26:return r.abrupt("return",i);case 27:case"end":return r.stop()}}),o,null,[[7,20]])})));return function(e){return a.apply(this,arguments)}}()}),[t,e,j.a,f]),R={loading:n.is("all"),getLoading:n.is("GET"),putLoading:n.is("PUT"),postLoading:n.is("POST"),deleteLoading:n.is("DELETE"),loadings:{all:n.is("all"),get:n.is("GET"),put:n.is("PUT"),post:n.is("POST"),delete:n.is("DELETE")}},I={Get:T("GET"),Put:T("PUT"),Post:T("POST"),Delete:T("DELETE")};return Object(c.a)(Object(c.a)({data:g,error:E},R),I)}},329:function(e,t,n){"use strict";var r=n(11),c=n(5),o=n(10),a=n(0);t.a=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1];return{is:function(e){return null===n||void 0===n?void 0:n[e]},on:function(e){return i((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,!0))}))},off:function(e){return i((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,!1))}))},set:function(e,t){return i((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(r.a)({},e,t))}))}}}},359:function(e,t){},379:function(e,t,n){},380:function(e,t,n){},381:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){},390:function(e,t,n){var r={"./brands.fa.svg":[694,5],"./duotone.fa.svg":[695,6],"./light.fa.svg":[696,7],"./regular.fa.svg":[697,8],"./solid.fa.svg":[698,9],"./thin.fa.svg":[699,10]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=390,e.exports=c},394:function(e,t){},396:function(e,t){},406:function(e,t){},408:function(e,t){},435:function(e,t){},436:function(e,t){},441:function(e,t){},443:function(e,t){},450:function(e,t){},469:function(e,t){},492:function(e,t,n){},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5),c=n(21),o={BASE_URL:"/",SERVER:"<SERVER_ADDRESS>",APP_NAME:"<APP_NAME>",APP_SHORT_NAME:"<APP_SHORT_NAME>",Parse:{appId:"<appID>",serverURL:"<serverURL>",liveQueryServerURL:"<liveQueryServerURL>"}},a={API_SERVER:"".concat(o.SERVER,"/api")},i=Object(r.a)(Object(r.a)({},o),c.d?{}:a)},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(5),c=n(62),o=n(0),a=n(74),i=function(e){var t,n;if(e||(e=(null===(t=window)||void 0===t?void 0:t.user_token)||""),!e)return!1;var r=null===(n=Object(a.c)(e||""))||void 0===n?void 0:n.exp;return!!r&&1e3*r>Date.now()};t.a=function(){var e,t,n=(0,Object(c.a)().selector)((function(e){return e.account})),a=Object(o.useRef)(null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.token);return Object(o.useEffect)((function(){var e;a.current=null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.token}),[null===n||void 0===n?void 0:n.user,null===n||void 0===n||null===(t=n.user)||void 0===t?void 0:t.token]),Object(r.a)(Object(r.a)({},n),{},{tokenRef:a})}},62:function(e,t,n){"use strict";var r=n(124);t.a=function(){var e=Object(r.b)();return{selector:r.c,dispatch:e}}},651:function(e,t,n){},670:function(e,t,n){},671:function(e,t){},676:function(e,t,n){},677:function(e,t,n){"use strict";n.r(t);n(379),n(380),n(381),n(382),n(383);var r,c,o,a=n(10),i=(n(384),n(5)),u=(n(385),n(70)),s=n(69),l=n(30),d=n(703),b=n(702),f=n(704),j=n(224),v=n(26),O=n(49),h=n(17),p=n(74),m=function(){var e=Object(h.g)().replace,t=Object(h.h)(),n=t.hash,r=t.search,c=t.pathname,o=Object(p.d)(n),a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null===t||void 0===t?void 0:t.every((function(e){return null===o||void 0===o?void 0:o.includes(e)}))},i=function(){var t=Object(O.a)(Object(v.a)().mark((function t(){var a,i,u,s,l=arguments;return Object(v.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=l.length,i=new Array(a),u=0;u<a;u++)i[u]=l[u];if(0!==(null===(s=null===i||void 0===i?void 0:i.filter((function(e){return!(null!==o&&void 0!==o&&o.includes(e))})))||void 0===s?void 0:s.length)){t.next=4;break}return t.abrupt("return");case 4:e(c+r+n+"#"+(null===s||void 0===s?void 0:s.join("#")));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(O.a)(Object(v.a)().mark((function t(){var a,i,u,s,l,d=arguments;return Object(v.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,i=new Array(a),u=0;u<a;u++)i[u]=d[u];if(0!==(null===(s=null===i||void 0===i?void 0:i.filter((function(e){return null===o||void 0===o?void 0:o.includes(e)})))||void 0===s?void 0:s.length)){t.next=4;break}return t.abrupt("return");case 4:l=n,null===s||void 0===s||s.forEach((function(e){var t;return l=null===(t=l)||void 0===t?void 0:t.replace("#".concat(e),"")})),e(c+r+l);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{hasHash:a,addHash:i,removeHash:u,modifyHash:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=n;null===o||void 0===o||o.forEach((function(e){var t;return a(e)&&(i=null===(t=i)||void 0===t?void 0:t.replace("#".concat(e),""))})),null===t||void 0===t||t.forEach((function(e){return!a(e)&&(i="#".concat(e)+i)})),e(c+r+i)},hashes:o}},g=n(0),x=n(109),w=n(223),y=function(){var e=Object(g.useRef)(!0);return Object(g.useEffect)((function(){e.current=!1}),[]),e},E=n(706),k=n(21),S=n.p+"static/media/logo-with-text.89d26004.svg",P=n(3),T=function(e){var t=e.themeMode,n=e.setThemeMode,r=y(),c=Object(j.a)().isMobile,o=Object(w.a)().swiper,v=Object(g.useState)(!1),O=Object(a.a)(v,2),h=O[0],p=O[1],T=m(),R=T.hasHash,I=T.addHash,N=T.removeHash,_=Object(g.useState)(0),L=Object(a.a)(_,2),A=L[0],C=L[1],M=function(e){var t;null===o||void 0===o||null===(t=o.slideTo)||void 0===t||t.call(o,e,700,!0),C(e)};Object(g.useEffect)((function(){p(!1)}),[A]),Object(g.useEffect)((function(){o&&(null===o||void 0===o||o.on("imagesReady",(function(e){var t;R("donation")&&(null===e||void 0===e||null===(t=e.slideTo)||void 0===t||t.call(e,5,700,!0),C(5))})))}),[o]),Object(g.useEffect)((function(){setTimeout((function(){var e;r.current||null===(e=5===A?I:N)||void 0===e||e("donation")}),300)}),[A]),Object(g.useEffect)((function(){o&&o.on("slideChange",(function(e){var t=e.realIndex;C(t)}))}),[o]);var D=Object(P.jsxs)(d.a,{pullRight:!0,children:[Object(P.jsx)(d.a.Item,{as:s.b,to:"/",onClick:M.bind(null,0),children:Object(P.jsx)(x.a,{children:"Home",ledMode:!0,selected:0===A,bolt:c})}),Object(P.jsx)(d.a.Item,{onClick:M.bind(null,2),children:Object(P.jsx)(x.a,{children:"Team",ledMode:!0,selected:2===A,bolt:c})}),Object(P.jsx)(d.a.Item,{onClick:M.bind(null,3),children:Object(P.jsx)(x.a,{children:"Projects",ledMode:!0,selected:3===A,bolt:c})}),Object(P.jsx)(d.a.Item,{onClick:M.bind(null,4),children:Object(P.jsx)(x.a,{children:"Contact Us",ledMode:!0,selected:4===A,bolt:c})}),Object(P.jsx)(d.a.Item,{onClick:M.bind(null,5),children:Object(P.jsx)(x.a,{children:"Donation",ledMode:!0,selected:5===A,bolt:c})}),Object(P.jsxs)("div",{className:"toggle-theme-mode",children:[Object(P.jsx)(l.a,{fa:"d-brightness",onClick:function(){return n("light")},className:Object(k.b)({selected:"light"===t})}),Object(P.jsx)(l.a,{fa:"d-moon",onClick:function(){return n("dark")},className:Object(k.b)({selected:"dark"===t})})]})]});return Object(P.jsxs)("div",Object(i.a)(Object(i.a)({},Object(k.c)("navbar-layout",{"navbar-minimal":0!==A})),{},{children:[Object(P.jsxs)(b.a,{children:[Object(P.jsx)(b.a.Brand,{onClick:M.bind(null,0),children:Object(P.jsx)("img",{alt:"osl-logo",src:S})}),Object(P.jsxs)(u.If,{condition:!c,children:[D,Object(P.jsx)(u.Else,{children:Object(P.jsx)(E.a,{rounded:!0,size:26,distance:"sm",color:"#3282B8",toggled:h,toggle:p})})]})]}),Object(P.jsxs)(f.a,{open:h&&c,onClose:function(){return p(!1)},children:[Object(P.jsx)("div",{className:"header",children:Object(P.jsx)(E.a,{rounded:!0,size:26,distance:"sm",color:"#3282B8",toggled:h,toggle:p})}),Object(P.jsx)("div",{className:"content",children:D})]})]}))},R=(n(651),function(){return Object(P.jsx)("div",{className:"footer-layout",children:Object(P.jsxs)("div",{className:"social-networks",children:[Object(P.jsx)("a",{href:"https://github.com/openscilab",target:"_blank",rel:"noreferrer",children:Object(P.jsx)("div",{className:"footer-icons-wrapper",children:Object(P.jsx)(l.a,{fa:"b-github"})})}),Object(P.jsx)("a",{href:"https://www.linkedin.com/company/openscilab",target:"_blank",rel:"noreferrer",children:Object(P.jsx)("div",{className:"footer-icons-wrapper",children:Object(P.jsx)(l.a,{fa:"b-linkedin-in"})})}),Object(P.jsx)("a",{href:"https://discord.gg/27J5SmWmdf",target:"_blank",rel:"noreferrer",children:Object(P.jsx)("div",{className:"footer-icons-wrapper",children:Object(P.jsx)(l.a,{fa:"b-discord"})})}),Object(P.jsx)("a",{href:"https://medium.com/@social_62465",target:"_blank",rel:"noreferrer",children:Object(P.jsx)("div",{className:"footer-icons-wrapper",children:Object(P.jsx)(l.a,{fa:"b-medium"})})}),Object(P.jsx)("a",{href:"https://twitter.com/openscilabx",target:"_blank",rel:"noreferrer",children:Object(P.jsx)("div",{className:"footer-icons-wrapper",children:Object(P.jsx)(l.a,{fa:"b-twitter"})})})]})})}),I=function(e){if(localStorage){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}},N=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},_=function(e,t){var n="PERSIST_STATE_".concat(e),r=Object(g.useState)(t),c=Object(a.a)(r,2),o=c[0],i=c[1],u=Object(g.useState)(!1),s=Object(a.a)(u,2),l=s[0],d=s[1];return Object(g.useEffect)((function(){var e=I(n);e&&i(e),d(!0)}),[]),Object(g.useEffect)((function(){l&&N(n,o)}),[e,o,t]),[o,i]},L=function(e){var t=e.children,n=_("THEME_MODE","dark"),r=Object(a.a)(n,2),c=r[0],o=r[1];return Object(g.useEffect)((function(){var e,t,n=null===(e=document)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.classList,r=["dark","light"];null===r||void 0===r||r.forEach((function(e){return null===n||void 0===n?void 0:n.remove("theme-".concat(e))})),null===n||void 0===n||n.add("theme-".concat(c))}),[c]),Object(P.jsxs)("div",{className:"root-layout",children:[Object(P.jsx)(T,{themeMode:c,setThemeMode:o}),Object(P.jsx)("div",{className:"root-children",children:t}),Object(P.jsx)(R,{})]})},A=n(57),C=[{exact:!0,path:["/","/home"],component:Object(g.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,831))}))},{path:["*"],exact:!0,component:function(){return Object(P.jsx)(h.a,{to:A.a.BASE_URL})}}],M=(n(62),n(58)),D=function(){var e,t=Object(M.a)().user,n=null===t||void 0===t||null===(e=t.role)||void 0===e?void 0:e.name;return{hasRoles:function(e){return!!n&&("SUPER_ADMIN"===n||e.includes(n))},isRole:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!!(n&&t&&null!==t&&void 0!==t&&t.length)&&(null===t||void 0===t?void 0:t.includes(n))},user:t,role:n}},U=n(328),H=n(14),F=Object(H.b)("setInitLoad"),z=Object(H.b)("clearLocalStorage"),B=Object(H.b)("clearClassData"),J=Object(H.b)("setLocalData"),V=Object(H.b)("logout"),Y=Object(H.b)("setUserToken"),G=Object(H.c)("login",function(){var e=Object(O.a)(Object(v.a)().mark((function e(t,n){var r,c,o,a,i,u,s,l,d,b,f;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,c=t.password,o=n.rejectWithValue,a=n.dispatch,u={email:r,password:c},Object(p.b)(r)||(delete u.email,u.username=r),e.prev=4,e.next=7,U.a.post("/endpoints/login",{body:{item:u}});case 7:if(b=e.sent,f=b.json,(i=f)&&(null===(s=i)||void 0===s||!s.error)){e.next=12;break}return e.abrupt("return",o({error:(null===(l=i)||void 0===l?void 0:l.message)||""}));case 12:if(q(null===(d=i)||void 0===d?void 0:d.item)){e.next=16;break}return e.next=16,new Promise((function(e){return e(a(z()))}));case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(4),e.abrupt("return",o({error:navigator.onLine?"Email and password are invalid":null===e.t0||void 0===e.t0?void 0:e.t0.message}));case 21:return e.abrupt("return",i.item);case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t,n){return e.apply(this,arguments)}}()),q=function(e){var t,n="".concat(A.a.APP_SHORT_NAME,"-UA"),r=localStorage.getItem(n),c={name:null===e||void 0===e||null===(t=e.role)||void 0===t?void 0:t.name,ID:null===e||void 0===e?void 0:e.ID},o=Object(p.a)(JSON.stringify(c)),a=!!r&&o===r;return a||(localStorage.setItem(n,o),localStorage.removeItem("redirect-path-after-auth")),a},W=function(e){var t=e.children,n=e.is,r=e.not,c=D().isRole,o="You do not have permission to access this page.";return null===n||void 0===n||!n.length||null!==n&&void 0!==n&&n.some((function(e){return c(e)}))?null!==r&&void 0!==r&&r.length&&r.some((function(e){return c(e)}))?(k.a.info(o),Object(P.jsx)(h.a,{to:"/dashboard/orders"})):Object(P.jsx)(P.Fragment,{children:t}):(k.a.info(o),Object(P.jsx)(h.a,{to:"/dashboard/order"}))},Q=n(705),$=function(e){var t=e.className;return Object(P.jsx)(Q.a,Object(i.a)(Object(i.a)({},Object(k.c)("loading-cover",t)),{},{speed:"slow",size:"lg",center:!0}))},K=function(e){var t,n=Object(g.useRef)(!0),r=e.fallback,c=e.base,o=void 0===c?"":c,a=e.defaultRoute,i=e.routes,u=void 0===i?C:i;return!(!n.current||!a)&&(n.current=!1,t=Object(P.jsx)(h.b,{exact:!0,path:o,children:Object(P.jsx)(h.a,{to:o+a})},"default")),Object(P.jsx)(g.Suspense,{fallback:(null===r||void 0===r?void 0:r())||Object(P.jsx)($,{}),children:Object(P.jsxs)(h.d,{children:[t,u.map((function(e,t){return e.path.map((function(n){var r,c,a=e.guard||g.Fragment;return Object(P.jsx)(h.b,{path:"".concat(o).concat(n),exact:e.exact,children:Object(P.jsx)(a,{children:Object(P.jsx)(W,{is:null===e||void 0===e||null===(r=e.role)||void 0===r?void 0:r.is,not:null===e||void 0===e||null===(c=e.role)||void 0===c?void 0:c.not,children:Object(P.jsx)(e.component,{})})})},t)}))}))]})})},X=function(){return Object(P.jsx)(L,{children:Object(P.jsx)(K,{})})},Z=n(50),ee=n.n(Z),te=(n(670),n(124)),ne=n(357),re=n(360),ce=n(31),oe=n(11),ae=function(){"caches"in window&&caches.has("FaIconBundle").then((function(e){return e&&caches.delete("FaIconBundle")}))},ie=function(){ae(),"caches"in window&&caches.has("Images").then((function(e){return e&&caches.delete("Images")})),"caches"in window&&caches.has("Fonts").then((function(e){return e&&caches.delete("Fonts")}))},ue=Object(H.d)({error:"",loading:!1,loggedIn:!1,user:{ID:"",name:"",token:"",email:"",username:"",SYSTEM_USER_ID:""}},(r={},Object(oe.a)(r,V.type,(function(e,t){return ae(),window.user_token=void 0,{user:null,loading:!1,loggedIn:!1,error:""}})),Object(oe.a)(r,G.pending.type,(function(e,t){t.payload;return window.user_token=void 0,{user:null,loading:!0,loggedIn:!1,error:""}})),Object(oe.a)(r,G.rejected.type,(function(e,t){var n=t.payload;return window.user_token=void 0,{user:null,loading:!1,loggedIn:!1,error:n.error}})),Object(oe.a)(r,G.fulfilled.type,(function(e,t){var n=t.payload;return window.user_token=n.token,{user:n,loggedIn:!0,loading:!1,error:""}})),Object(oe.a)(r,Y.type,(function(e,t){var n=t.payload;return window.user_token=n,Object(i.a)(Object(i.a)({},e),{},{user:Object(i.a)(Object(i.a)({},null===e||void 0===e?void 0:e.user),{},{token:n})})})),r)),se=n(156),le=n(220),de=n.n(le),be=n(77),fe={isLoading:!1,isLight:!1,swiper:void 0,uploadProgress:0,whitePageYOffset:0},je=Object(H.d)(fe,(c={},Object(oe.a)(c,be.d.type,(function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{uploadProgress:n})})),Object(oe.a)(c,be.b.type,(function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{isLoading:n})})),Object(oe.a)(c,be.a.type,(function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{isLight:n})})),Object(oe.a)(c,be.c.type,(function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{swiper:n})})),Object(oe.a)(c,be.e.type,(function(e,t){var n=t.payload;return console.log({payload:n}),Object(i.a)(Object(i.a)({},e),{},{whitePageYOffset:n})})),c)),ve=n(221),Oe=(n(61),function(e){return JSON.parse(JSON.stringify(e||{}))}),he={},pe=Object(H.d)(he,(o={},Object(oe.a)(o,z.type,(function(){return he})),Object(oe.a)(o,F.type,(function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e||{}),{},{is_init_load:n})})),Object(oe.a)(o,B.type,(function(e,t){var n=t.payload;ie();var r=Oe(e);return null===r||void 0===r||delete r[n],r})),Object(oe.a)(o,J.type,(function(e,t){var n=t.payload,r=n.class_name,c=n.data,o=n.deleted,a=void 0===o?[]:o,u=n.partialUpdate,s=n.last_update||(new Date).toUTCString();if(u||!(null===a||void 0===a||!a.length)){var l="".concat(r,"_ID"),d=(null===e||void 0===e?void 0:e[r])||[];c=me(d,c,a,l)}var b={last_update:Object(i.a)(Object(i.a)({},(null===e||void 0===e?void 0:e.last_update)||{}),{},Object(oe.a)({},r,s))};return Object(i.a)(Object(i.a)({},e||{}),{},Object(oe.a)({},r,c),b||{})})),o)),me=function(e,t,n,r){var c,o=Oe(e),a=Object(ve.a)(t||[]);try{var i=function(){var e=c.value,t=o.findIndex((function(t){return(null===t||void 0===t?void 0:t[r])===(null===e||void 0===e?void 0:e[r])}));t>=0?o[t]=e:o.push(e)};for(a.s();!(c=a.n()).done;)i()}catch(d){a.e(d)}finally{a.f()}var u,s=Object(ve.a)(n||[]);try{var l=function(){var e=u.value,t=o.findIndex((function(t){return(null===t||void 0===t?void 0:t[r])===e}));t>=0&&o.splice(t,1)};for(s.s();!(u=s.n()).done;)l()}catch(d){s.e(d)}finally{s.f()}return o},ge=pe,xe=n(361),we=n.n(xe)()(),ye=Object(ce.b)({dashboard:je,account:Object(se.persistReducer)({storage:de.a,key:"account",blacklist:["error","loading"],keyPrefix:"".concat(A.a.APP_SHORT_NAME,"-"),transforms:[we]},ue),localStorage:Object(se.persistReducer)({storage:de.a,key:"storage",keyPrefix:"".concat(A.a.APP_SHORT_NAME,"-"),transforms:[we]},ge)}),Ee=n(150),ke={blacklist:["persist/PERSIST","persist/REHYDRATE"]},Se=Object(H.a)({devTools:k.d,reducer:ye,middleware:function(e){var t=e({serializableCheck:!1});return t.push(Object(ne.createStateSyncMiddleware)(ke)),t}}),Pe=function(e){var t=e.children;return Object(P.jsx)(te.a,{store:Se,children:Object(P.jsx)(re.a,{persistor:Object(Ee.a)(Se),children:t})})},Te=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,830)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))},Re=n(232),Ie=n(233),Ne=n(339),_e=n(340),Le=(n(676),n(119)),Ae=function(e){Object(Ne.a)(n,e);var t=Object(_e.a)(n);function n(){var e;Object(Re.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1,remainTime:10},e}return Object(Ie.a)(n,[{key:"componentDidCatch",value:function(e,t){var n=this;if(!k.d){console.error(e,t);var r=setInterval((function(){n.setState((function(e){return 0===e.remainTime?(window.location.href="/",clearInterval(r)):Object(i.a)(Object(i.a)({},e),{},{remainTime:e.remainTime-1})}))}),1e3)}}},{key:"render",value:function(){return this.state.hasError?Object(P.jsxs)("div",{className:"error-boundary-layout",children:[Object(P.jsx)(l.a,{fa:"s-exclamation",className:"w-1/3"}),Object(P.jsx)("h1",{children:"Something went wrong !"}),Object(P.jsxs)(Le.a,{href:"/",className:"go-to-home-btn",children:["Back to home",0!==this.state.remainTime?" (".concat(this.state.remainTime,"s)"):""]}),Object(P.jsx)(Le.a,{className:"report-btn",href:"mailto:amir@auto-hq.com",children:"Report to AutoHQ"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(g.Component),Ce=Object(P.jsx)(Ae,{children:Object(P.jsx)(s.a,{children:Object(P.jsx)(Pe,{children:Object(P.jsx)(X,{})})})});ee.a.render(Ce,document.querySelector("#root")),Te()},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u}));n(61);var r=n(347),c=n.n(r),o=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e)},a=function(e){var t,n;return""===e?{}:JSON.parse(decodeURIComponent(atob(null===(t=e.split(".")[1])||void 0===t||null===(n=t.replace("-","+"))||void 0===n?void 0:n.replace("_","/")).split("").map((function(e){return"%".concat(("00"+e.charCodeAt(0).toString(16)).slice(-2))})).join("")))},i=function(e){return c.a.createHash("sha256").update(e).digest("base64")},u=function(e){var t;return(null===e||void 0===e||null===(t=e.split("#"))||void 0===t?void 0:t.slice(1))||[]}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return u}));var r=n(14),c=Object(r.b)("setLoading"),o=Object(r.b)("setUploadProgress"),a=Object(r.b)("setIsLight"),i=Object(r.b)("setSwiper"),u=Object(r.b)("setWhitePageOffset")}},[[677,1,2]]]);
//# sourceMappingURL=main.45147ea8.chunk.js.map