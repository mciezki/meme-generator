(this["webpackJsonpmeme-page"]=this["webpackJsonpmeme-page"]||[]).push([[0],{30:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),i=n(35),o=n.n(i),s=(n(43),n(5)),l=n(18),u=(n(44),n(8)),d=n.n(u),j=n(13),m=n(24);n(46),n(48),n(59);m.a.initializeApp({apiKey:"AIzaSyAtZgStIYYf9eJzbGDUuu8jjstfvMShkZI",authDomain:"meme-generator2.firebaseapp.com",databaseURL:"https://meme-generator2-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"meme-generator2",storageBucket:"meme-generator2.appspot.com",messagingSenderId:"898288571463",appId:"1:898288571463:web:235d9a68e4c0b633410d62",measurementId:"G-S7GBR82G02"});var b=m.a.auth(),h=m.a.firestore(),x=new m.a.auth.GoogleAuthProvider,p=m.a.messaging(),f=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register("service-worker.js");case 2:return n=e.sent,e.abrupt("return",p.getToken({vapidKey:"BLK1Yx4sUyc-jlzPIKNnGfwGS3ZgqUvCjaYHJWzGfUOQWBptNqdygbgIuhOiDnZsT_qYR82NX5LpLfNbE_CKUds",serviceWorkerRegistration:n}).then((function(e){e?(console.log("current token for client: ",e),t(!0)):(console.log("No registration token available. Request permission to generate one."),t(!1))})).catch((function(e){console.log("An error occurred while retrieving token. ",e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=Object(a.createContext)({user:null}),g=function(e){var t=e.children,n=Object(a.useState)(null),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){b.onAuthStateChanged((function(e){return o(e)}))}),[]),Object(c.jsx)(O.Provider,{value:{user:i},children:t})},v=n(17),w=(n(54),[{icon:"home",name:"Home",path:"/",exact:!0},{icon:"trophy",name:"Top Memes",path:"/topmemes"},{icon:"hammer",name:"Generator",path:"/generator"}]),k=function(){var e=Object(a.useContext)(O).user,t=function(){var e=[window.innerWidth,window.innerHeight],t=Object(a.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){r([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}(),n=Object(s.a)(t,2),r=n[0],i=(n[1],w.map((function(e){return r>=1024?Object(c.jsx)("li",{className:"nav-list",children:Object(c.jsxs)(l.b,{to:e.path,exact:!!e.exact&&e.exact,children:[Object(c.jsx)(v.a,{icon:e.icon})," ",e.name]})},e.name):r<1024?Object(c.jsx)("li",{className:"nav-list",children:Object(c.jsx)(l.b,{to:e.path,exact:!!e.exact&&e.exact,children:Object(c.jsx)(v.a,{icon:e.icon})})},e.name):void 0})));return Object(c.jsxs)("header",{children:[Object(c.jsx)("button",{className:"log",onClick:function(){e?b.signOut():b.signInWithPopup(x)},children:e?Object(c.jsx)(v.a,{icon:"sign-out-alt"}):Object(c.jsx)(v.a,{icon:"sign-in-alt"})}),Object(c.jsx)("h1",{className:"logo",children:"MemeGen"}),Object(c.jsx)("nav",{className:"main",children:Object(c.jsxs)("ul",{className:"nav-ul",children:[i,e?r>=1024?Object(c.jsx)("li",{className:"nav-list",children:Object(c.jsxs)(l.b,{to:"/profile",exact:!1,children:[Object(c.jsx)(v.a,{icon:"user"})," User Profile"]})},"profile"):Object(c.jsx)("li",{className:"nav-list",children:Object(c.jsx)(l.b,{to:"/profile",exact:!1,children:Object(c.jsx)(v.a,{icon:"user"})})},"profile"):null]})})]})},S=n(7),N=n(26),C=(n(57),function(e){var t=e.title,n=e.upperValue,a=e.bottomValue,r=e.textSize,i=e.handleChange;return Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{children:"Name your meme:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"title",placeholder:"Title...",value:t,onChange:i}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Add text: "}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"upperText",placeholder:"Upper Text",value:n,onChange:i}),Object(c.jsx)("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:a,onChange:i}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Font Size: "}),Object(c.jsx)("input",{type:"number",name:"textSize",placeholder:"Select font size",value:r,onChange:i})]})}),y=function(e){var t=e.selectedImage,n=e.width,r=e.height,i=Object(a.useContext)(O).user,o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(""),m=Object(s.a)(j,2),b=m[0],x=m[1],p=Object(a.useState)(""),f=Object(s.a)(p,2),g=f[0],v=f[1],w=Object(a.useState)(50),k=Object(s.a)(w,2),S=k[0],y=k[1],I=Object(a.useState)("50%"),E=Object(s.a)(I,2),A=E[0],L=E[1],M=Object(a.useState)("10%"),T=Object(s.a)(M,2),z=T[0],U=T[1],P=Object(a.useState)("50%"),W=Object(s.a)(P,2),B=W[0],R=W[1],D=Object(a.useState)("90%"),F=Object(s.a)(D,2),G=F[0],Y=F[1],H=Object(a.useState)(!1),q=Object(s.a)(H,2),K=q[0],V=q[1],J=Object(a.useCallback)((function(e){if(K){var t=document.getElementById("svgImage").getBoundingClientRect(),n=e.clientX-t.left,c=e.clientY-t.top;"uppertxt"===e.target.id?(L("".concat(n,"px")),U("".concat(c,"px"))):"bottomtxt"===e.target.id&&(R("".concat(n,"px")),Y("".concat(c,"px")))}}),[K]),X=Object(a.useCallback)((function(){V(!0)}),[]),Z=Object(a.useCallback)((function(){V(!1)}),[]);Object(a.useEffect)((function(){return K&&document.addEventListener("mousemove",J),function(){document.removeEventListener("mousemove",J)}}),[J,Z,K]);var _=function(e,t){if("download"===e){var n=document.createElement("a");n.download="meme.png",n.href=t,document.body.appendChild(n),n.click()}else if("post"===e){var c=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,c=0;c<n;c++)e+=t.charAt(Math.floor(Math.random()*n));return e}(),a={index:c,date:new Date,title:u,creator:i.uid,url:t,likes:[]};""===u?alert("You should add the title"):(h.collection("memes").doc("".concat(c)).set(a),alert("Meme posted :)"),d(""),x(""),v(""))}},Q=function(e){var t=e.target.id,n=document.getElementById("createdMeme"),c=(new XMLSerializer).serializeToString(n),a=document.createElement("canvas");a.setAttribute("id","canvas");var r=n.getBoundingClientRect();a.width=r.width,a.height=r.height;var i=document.createElement("img");i.setAttribute("src","data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(c)))),i.onload=function(){a.getContext("2d").drawImage(i,0,0);var e=a.toDataURL("image/png");_(t,e)}},$={fontFamily:"Impact",textTransform:"uppercase",fill:"#FFF",stroke:"#000",userSelect:"none"};return Object(c.jsxs)("div",{className:"memegen",children:[Object(c.jsx)(C,{title:u,upperValue:g,bottomValue:b,textSize:S,handleChange:function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"upperText":v(c);break;case"bottomText":x(c);break;case"textSize":y(c);break;case"title":d(c);break;default:alert("Sorry, ".concat(n," does not exist. Report this to us and we will check what happened."))}}}),Object(c.jsxs)("svg",{id:"createdMeme",width:n,height:r,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(c.jsx)("image",{id:"svgImage",xlinkHref:t,height:r,width:n}),Object(c.jsx)("text",{id:"uppertxt",style:Object(N.a)(Object(N.a)({},$),{},{fontSize:"".concat(S,"px")}),x:A,y:z,dominantBaseline:"middle",textAnchor:"middle",onMouseDown:X,onMouseUp:Z,children:g}),Object(c.jsx)("text",{id:"bottomtxt",style:Object(N.a)(Object(N.a)({},$),{},{fontSize:"".concat(S,"px")}),x:B,y:G,dominantBaseline:"middle",textAnchor:"middle",onMouseDown:X,onMouseUp:Z,children:b})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{id:"download",onClick:Q,children:"Download Meme"}),Object(c.jsx)("br",{}),i?Object(c.jsx)("button",{id:"post",onClick:Q,children:"Post Meme"}):null]})},I=function(e){var t=e.allMemeImg,n=e.selectImg,a=t.map((function(e){return Object(c.jsx)("p",{className:"gallery-element",onClick:n,"data-url":e.url,children:e.name},e.id)}));return Object(c.jsx)("div",{className:"gallery",children:t.length>0?a:Object(c.jsx)("span",{children:"Something is wrong..."})})},E=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),o=Object(s.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)(""),j=Object(s.a)(d,2),m=j[0],b=j[1],h=Object(a.useState)(""),x=Object(s.a)(h,2),p=x[0],f=x[1];Object(a.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){var t=e.data.memes;u(t)}))}),[]);return Object(c.jsxs)("div",{className:"maingen",children:[n&&p?Object(c.jsx)(y,{selectedImage:n,width:m,height:p}):null,Object(c.jsx)(I,{allMemeImg:l,selectImg:function(e){var t=e.target.dataset.url,n=document.createElement("canvas"),c=new Image;c.src=t,c.crossOrigin="anonymous",c.onload=function(){var e=c.width/c.height;n.width=700,n.height=n.width/e,n.getContext("2d").drawImage(c,0,0,n.width,n.height);var t=n.toDataURL("image/png");r(t),b("".concat(n.width,"px")),f("".concat(n.height,"px")),document.querySelector(".maingen").scrollIntoView({behavior:"smooth"})}}})]})},A=n(37),L=function(e){var t=e.meme,n=Object(a.useContext)(O).user,r=Object(a.useState)([]),i=Object(s.a)(r,2),o=i[0],l=i[1];Object(a.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("memes").doc("".concat(t.index)).get();case 2:n=e.sent,l(n.data().likes);case 4:case"end":return e.stop()}}),e)})))()}));return Object(c.jsxs)("div",{className:"likes",children:[Object(c.jsx)("span",{className:"like-num",children:o.length}),Object(c.jsx)("button",{className:"plus",id:t.index,onClick:function(e){var t=e.target.id,c=h.collection("memes").doc("".concat(t)),a=[];if(!n)return alert("You have to log in!");a=o.includes(n.uid)?o.filter((function(e){return e!==n.uid})):[].concat(Object(A.a)(o),[n.uid]),Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.update({likes:a});case 2:return e.next=4,c.get();case 4:t=e.sent,l(t.data().likes);case 6:case"end":return e.stop()}}),e)})))()},children:Object(c.jsx)(v.a,{icon:"thumbs-up"})})]})},M=(n(30),function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("memes").get();case 2:t=e.sent,r(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})))()}),[]),n.length>=2&&n.sort((function(e,t){return e.date<t.date?1:e.date>t.date?-1:0}));var i=n.map((function(e){return Object(c.jsxs)("div",{className:"memeContainer",id:e.index,children:[Object(c.jsx)("p",{className:"title",children:e.title}),Object(c.jsx)(L,{meme:e}),Object(c.jsx)("img",{src:e.url,alt:"meme"}),Object(c.jsxs)("p",{className:"creator",children:["Posted by: ",Object(c.jsx)("span",{children:e.creator})]})]},e.index)}));return Object(c.jsx)("div",{className:"HomePage",children:n.length>0?i:Object(c.jsx)("p",{children:"Loading..."})})}),T=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=b.currentUser;Object(a.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("memes").get();case 2:t=e.sent,r(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})))()}),[]),n.length>=2&&n.sort((function(e,t){return e.date<t.date?1:e.date>t.date?-1:0}));var o=function(e){var t=e.target.id;!0===window.confirm("Are you sure?")&&h.collection("memes").doc("".concat(t)).delete().then(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("memes").get();case 2:t=e.sent,r(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)}))))},l=n.filter((function(e){return e.creator===i.uid?e:null})).map((function(e){return Object(c.jsxs)("div",{className:"memeContainer",id:e.index,children:[Object(c.jsx)("p",{className:"title",children:e.title}),Object(c.jsx)("div",{className:"likes",children:Object(c.jsxs)("span",{className:"like-num",children:["Likes: ",e.likes.length]})}),Object(c.jsx)("img",{src:e.url,alt:"meme"}),Object(c.jsxs)("p",{className:"creator",children:["Posted by: ",Object(c.jsx)("span",{children:e.creator})]}),Object(c.jsx)("button",{id:e.index,onClick:o,children:"Delete"})]},e.index)}));return Object(c.jsxs)("div",{className:"HomePage",children:[Object(c.jsx)("h4",{children:"Your created memes:"}),n.length>0?l:Object(c.jsx)("p",{children:"You have no memes..."})]})},z=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("memes").get();case 2:t=e.sent,r(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})))()}),[]),n.length>=2&&n.sort((function(e,t){return e.likes.length<t.likes.length?1:e.likes.length>t.likes.length?-1:0}));var i=n.slice(0,5).map((function(e){return Object(c.jsxs)("div",{className:"memeContainer",id:e.index,children:[Object(c.jsx)("p",{className:"title",children:e.title}),Object(c.jsx)(L,{meme:e}),Object(c.jsx)("img",{src:e.url,alt:"meme"}),Object(c.jsxs)("p",{className:"creator",children:["Posted by: ",Object(c.jsx)("span",{children:e.creator})]})]},e.index)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Top 5 memes!"}),Object(c.jsx)("div",{className:"HomePage",children:n.length>0?i:Object(c.jsx)("p",{children:"Loading..."})})]})},U=function(){var e=Object(a.useContext)(O).user;return Object(c.jsxs)(S.c,{children:[Object(c.jsx)(S.a,{exact:!0,path:"/",component:M}),Object(c.jsx)(S.a,{path:"/topmemes",component:z}),Object(c.jsx)(S.a,{path:"/generator",component:E}),e?Object(c.jsx)(S.a,{path:"/profile",component:T}):null,Object(c.jsx)(S.a,{render:function(){return Object(c.jsx)("h2",{children:"Strona nie istnieje..."})}})]})},P=n.p+"static/media/loading.01b22d1d.gif",W=function(){return Object(c.jsx)("div",{style:{backgroundColor:"#0099AA",width:"100%",height:"100vh"},children:Object(c.jsx)("img",{src:P,alt:"splash-screen",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})},B=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),u=o[0],d=o[1];return console.log(u),Object(a.useEffect)((function(){setTimeout((function(){r(!1)}),2e3),f(d)}),[]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(W,{}):Object(c.jsx)(g,{children:Object(c.jsx)(l.a,{basename:"/meme-generator",children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(k,{}),Object(c.jsx)(U,{})]})})})})},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},G=n(22),Y=n(20);G.b.add(Y.b,Y.g,Y.a,Y.f,Y.e,Y.c,Y.d),o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meme-generator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meme-generator","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(t,e)}))}}(),F()}},[[58,1,2]]]);
//# sourceMappingURL=main.4777e114.chunk.js.map