(this.webpackJsonpdowncloud=this.webpackJsonpdowncloud||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),o=n(21),s=n.n(o);n(31);!function(){var e=n(59).default;s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(e,{})}),document.getElementById("downcloud"))}()},31:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(6),o=n(4),s=n(0),i=n(1),u=n(10),l=n(24),d=n(22),h=n.n(d),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){var a=new URLSearchParams({client_id:t,redirect_uri:n,response_type:"token",scope:"non-expiring",display:"popup"}),o=window.open("https://soundcloud.com/connect?".concat(a.toString()),"soundcloud-auth-popup","width=400, height=600, location=yes, toolbar=no, scrollbars=yes");o?window.addEventListener("message",(function t(n){if(n.origin===r&&n.data&&n.data.source&&"auth-callback"===n.data.source){window.removeEventListener("message",t,!1),o.close();var a=new URLSearchParams(n.data.params).get("access_token");a?e(a):c("No access token was passed back.")}}),!1):c("Unable to create authentication popup.")})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,o,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new URLSearchParams({oauth_token:t,linked_partitioning:"1",limit:"200"}),r=[];case 2:return o="".concat("https://api.soundcloud.com","/me/tracks?").concat(n.toString()),a&&""!==a&&(o="".concat(a,"&oauth_token=").concat(t)),e.next=6,h.a.get(o);case 6:s=e.sent,i=s.data,r.push.apply(r,Object(l.a)(i.collection.map(p(t)))),a=i.next_href;case 10:if(a){e.next=2;break}case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return function(t){var n=t.download_url;return n=n.includes("?")?"".concat(n,"&oauth_token=").concat(e):"".concat(n,"?oauth_token=").concat(e),{title:t.title,download:n}}},f=function(e){switch(e){case"plain":return"cursor-pointer font-bold no-underline text-purple-500 inline hover:underline";default:return"cursor-pointer p-3 rounded bg-purple-500 text-white"}},m=function(e){var t=e.type,n=e.onClick,r=e.className,c=e.children,a=e.disabled,o=void 0!==a&&a;return Object(s.jsx)("button",{className:"".concat(f(t)," ").concat(r),onClick:n,disabled:o,children:c})},x=Object(i.memo)(m),O=function(e){var t=e.children;return Object(s.jsx)("h1",{className:"text-xl mb-3",children:t})},w=Object(i.memo)(O),g=function(e){var t=e.children;return Object(s.jsx)("p",{className:"mb-3 leading-relaxed",children:t})},v=Object(i.memo)(g),y=function(){return Object(s.jsx)("span",{className:"flex relative h-4 w-4",children:Object(s.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full bg-purple-500 rounded-full"})})},k=Object(i.memo)(y),N=n(11),S=function(e){var t=e.external,n=void 0!==t&&t,r=e.children,c=e.href,a={};return n&&(a={target:"_blank",rel:"noopener noreferrer"}),Object(s.jsx)("a",Object(N.a)(Object(N.a)({className:"font-bold no-underline text-purple-500 cursor-pointer hover:underline",href:c},a),{},{children:r}))},_=Object(i.memo)(S),C=n(23),L=n.n(C),A=function(e){var t=e.tracks,n=Object(i.useState)(""),r=Object(o.a)(n,2),c=r[0],a=r[1],u=t.filter((function(e){return e.title.toLocaleLowerCase().includes(c.toLocaleLowerCase())})).sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{children:"Your tracks"}),Object(s.jsx)(v,{children:"Click on a track name to start downloading."}),Object(s.jsxs)(v,{children:["If you're feeling lucky, you can try to"," ",Object(s.jsx)(x,{type:"plain",onClick:function(){return L()(t.map((function(e){return e.download})))},children:"download all tracks at once"}),". Please note that this feature is experimental and may not work! If you're using Chrome, try disabling the option \"Ask where to save each file before downloading\" if it's not working properly."]}),Object(s.jsx)("input",{type:"text",className:"mt-3 border border p-3 rounded focus:ring focus:ring-purple-500 w-full",placeholder:"Filter by title...",value:c,onChange:function(e){return a(e.target.value)}}),Object(s.jsx)("ul",{className:"list-inside list-disc mt-6",children:u.map((function(e,t){return Object(s.jsx)("li",{className:"mb-2",children:Object(s.jsx)(_,{href:e.download,external:!0,children:e.title})},t)}))})]})},P=Object(i.memo)(A),U=function(e){var t=e.onAuthenticate;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{children:"Downcloud"}),Object(s.jsx)(v,{children:"This app helps you download your own Souncloud tracks as original, uncompressed files."}),Object(s.jsx)(x,{onClick:t,children:"Sign in with Soundcloud"})," to get started"]})},E=Object(i.memo)(U);t.default=function(){Object(i.useEffect)((function(){u.a.initialize("UA-80472005-2",{debug:!1}),u.a.pageview("/")}),[]);var e,t=Object(i.useState)(""),n=Object(o.a)(t,2),r=n[0],l=n[1],d=Object(i.useState)([]),h=Object(o.a)(d,2),p=h[0],f=h[1],m=Object(i.useState)(!1),x=Object(o.a)(m,2),O=x[0],w=x[1],g=Object(i.useState)(null),y=Object(o.a)(g,2),N=y[0],S=y[1];if(O)e=Object(s.jsx)(k,{});else if(""===r){var C=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,b("c205c3e2eedb509dff1c1147765b055d","https://downcloud.ruud.ninja/callback.html","https://downcloud.ruud.ninja");case 4:return t=e.sent,l(t),e.next=8,j(t);case 8:n=e.sent,f(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),S(e.t0);case 16:return e.prev=16,w(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])})));return function(){return e.apply(this,arguments)}}();e=Object(s.jsx)(E,{onAuthenticate:C})}else e=null!==N?Object(s.jsx)(s.Fragment,{children:"An error occurred"}):Object(s.jsx)(P,{tracks:p});return Object(s.jsxs)("div",{className:"container mx-auto max-w-2xl",children:[Object(s.jsx)("main",{className:"py-6 px-12",children:e}),Object(s.jsxs)("footer",{className:"py-6 px-12 mt-6 bg-gray-100 md:rounded",children:[Object(s.jsx)(v,{children:Object(s.jsx)(_,{href:"https://www.buymeacoffee.com/tomas",external:!0,children:"Buy me a coffee?"})}),Object(s.jsxs)(v,{children:[Object(s.jsx)(_,{href:"https://soundcloud.com/autodrums",external:!0,children:"@autodrums"})," ","on Soundcloud",Object(s.jsx)("br",{}),Object(s.jsx)(_,{href:"https://github.com/tomasruud",external:!0,children:"@tomasruud"})," ","on Github"]}),Object(s.jsxs)(v,{children:[Object(s.jsx)(_,{href:"https://github.com/tomasruud/downcloud/issues",external:!0,children:"Report issues"}),Object(s.jsx)("br",{}),Object(s.jsx)(_,{href:"https://github.com/tomasruud/downcloud/tree/master/changelog.md",external:!0,children:"Changelog"}),Object(s.jsx)("br",{}),"Version ","4.0.1"]})]}),Object(s.jsxs)("span",{className:"text-gray-400 text-xs py-6 px-12 block",children:[Object(s.jsx)(v,{children:"None of your data will be stored anywhere, everything is done in your browser session and destroyed once you exit/refresh the site."}),Object(s.jsx)(v,{children:"This site uses Google Analytics to analyze how the app is used, which means that there will be a necessary cookie set for this."})]})]})}}},[[25,1,2]]]);
//# sourceMappingURL=main.8cb29f11.chunk.js.map