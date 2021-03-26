(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(15),o=a.n(r),c=a(10),i=a(2),l=a(71),p=a(70),d=s.a.createContext(),m=a(0);function h(){var e=Object(n.useContext)(d).footerData.networks.map((function(e){return Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("div",{className:"Footer__icon Footer__icon--".concat(e.name),children:e.nameProper})},e.id)}));return Object(m.jsx)("footer",{className:"Footer",children:Object(m.jsx)("div",{className:"Footer__link-container",children:e})})}function u(){var e=Object(n.useContext)(d).homeData;return Object(m.jsxs)("div",{className:"Home page",children:[Object(m.jsx)("div",{className:"Home__title",children:Object(m.jsxs)("div",{className:"Home__title__container",children:[Object(m.jsx)("img",{draggable:!1,className:"svg",alt:"Duke Nguyen",src:e.images.nameSvg}),Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{src:e.images.portrait,alt:"Duke Nguyen Portrait"})})]})}),Object(m.jsx)("main",{className:"Home__main page__content",children:Object(m.jsx)("section",{children:e.paragraphs.map((function(e){return Object(m.jsx)("p",{className:"Home__main__paragraph",children:e},e.length)}))})}),Object(m.jsx)(h,{})]})}var b=a(18);function j(e){var t=Object(i.g)(),a=Object(n.useContext)(d).titleData,s={color:a[t.pathname].bg};return Object(m.jsx)("div",{className:"Title",children:Object(m.jsx)("h1",{style:s,children:a[t.pathname].h1})})}var g=a(12),v=a.n(g),f=a(19),O=a(24),x=a.n(O),_=function(e){var t=function(){var t=Object(f.a)(v.a.mark((function t(){var a,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getOAuthToken();case 2:return a=t.sent,t.next=5,e.getTopArtistsAndSongs(a);case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{getData:function(){return t()}}}(function(){var e=Math.floor(50*Math.random()),t=function(){var e=Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x()({url:"https://accounts.spotify.com/api/token",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa("6dc7fe135b2340f7a529b2973d596f5b:1b5d5839c9e743ec829e78183d62dcde")},data:"grant_type=client_credentials&scope=user-top-read"});case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("AXIOS POST ERROR: ",e.t0);case 9:return a=t.data,e.abrupt("return",a.access_token);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),a=function(){var t=Object(f.a)(v.a.mark((function t(a){var n,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x()({url:"https://api.spotify.com/v1/playlists/0OOCQaM7QnglpaHDRyucDg/tracks?market=ES&fields=items(track(name%2Cartists(name)))&limit=".concat(50,"&offset=").concat(e),method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 3:n=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("ERROR: ",t.t0);case 9:return s=n.data.items,t.abrupt("return",s);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return{getOAuthToken:function(){return t()},getTopArtistsAndSongs:function(e){return a(e)}}}());function y(){var e=Object(n.useContext)(d).aboutData,t=Object(n.useState)(""),a=Object(b.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){_.getData().then((function(e){for(var t=new Set;t.size<3;){var a=Math.floor(Math.random()*e.length);t.add(e[a].track.artists[0].name)}var n=Array.from(t).join(", ");r(n)}))}),[]),Object(m.jsxs)("div",{className:"About page",children:[Object(m.jsx)(j,{}),Object(m.jsx)("main",{className:"About__main page__content",children:Object(m.jsx)("section",{className:"About__main__paragraphs",children:e.paragraphs.map((function(e){return Object(m.jsx)("p",{className:"About__main__paragraphs__paragraph",dangerouslySetInnerHTML:{__html:e.replace(/\{artists\}/,s)}},e.length)}))})}),Object(m.jsx)(h,{})]})}function k(e){var t=e.data,a=t.title,n=t.paragraphs,s=t.url,r=t.repo,o=t.images;return Object(m.jsxs)("div",{className:"Project",children:[Object(m.jsxs)("h1",{className:"Project__title",children:[" ",a," "]}),Object(m.jsx)("section",{className:"Project__paragraphs",children:n.map((function(e){return Object(m.jsx)("p",{children:e},e.length)}))}),Object(m.jsxs)("video",{className:"Project__video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(m.jsx)("source",{src:o.webm,type:"video/webm"}),Object(m.jsx)("source",{src:o.mp4,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(m.jsxs)("div",{className:"Project__links",children:[Object(m.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:" Live "}),Object(m.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:" Repo "})]})]})}function w(){var e=Object(n.useContext)(d).projectsData.projects.map((function(e){return Object(m.jsx)(k,{data:e},e.id)}));return Object(m.jsxs)("div",{className:"Projects page",children:[Object(m.jsx)(j,{}),Object(m.jsx)("main",{className:"Projects__main page__content",children:e}),Object(m.jsx)(h,{})]})}function N(){var e=Object(n.useContext)(d).contactData;return Object(m.jsxs)("div",{className:"Contact page",children:[Object(m.jsx)(j,{}),Object(m.jsx)("main",{className:"Contact__main page__content",children:Object(m.jsxs)("h1",{className:"Contact__main__cta",children:[e.cta1," ",Object(m.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email})," ",e.cta2]})}),Object(m.jsx)(h,{})]})}function C(){return Object(m.jsx)("div",{className:"Hidden page",children:Object(m.jsx)("main",{className:"Hidden__main page__content",children:"woah, you found the hidden page"})})}function S(e){var t=e.showNav,a=e.handleOpenNavigation;return Object(m.jsxs)("div",{className:"Hamburger ".concat(t&&"show"),onClick:a,children:[Object(m.jsx)("span",{className:"Hamburger__lineOne"}),Object(m.jsx)("span",{className:"Hamburger__lineTwo"})]})}function A(e){var t=e.headerData,a=Object(n.useState)(!1),s=Object(b.a)(a,2),r=s[0],o=s[1],i=function(e){e.stopPropagation()},l=function(e){e.stopPropagation(),window.scrollTo({top:0,behavior:"smooth"})},p=function(e){var t=new Event("closeNavigation");window.dispatchEvent(t)},d=function(e){o(!1)};Object(n.useEffect)((function(){return window.addEventListener("closeNavigation",d),document.body.addEventListener("click",p),function(){window.removeEventListener("closeNavigation",d),document.body.removeEventListener("click",p)}}),[]);var h=t.links.map((function(e){return Object(m.jsx)(c.b,{exact:!0,to:e.path,className:"link",activeClassName:"activeLink",onClick:l,children:e.name[0].toUpperCase()+e.name.slice(1)},e.id)}));return Object(m.jsxs)("div",{className:"Header__navigation",children:[Object(m.jsx)("nav",{className:"Header__navigation__links ".concat(r&&"show"),onClick:i,children:Object(m.jsx)("div",{className:"overflow-container",children:h})}),Object(m.jsx)("nav",{className:"Header__navigation__links--sidebar ".concat(r&&"show"),onClick:i,children:Object(m.jsx)("div",{className:"Header__navigation__links--sidebar__container",children:h})}),Object(m.jsx)(S,{showNav:r,handleOpenNavigation:function(e){e.stopPropagation(),o(!r)}})]})}function D(){var e=Object(n.useContext)(d).headerData;return Object(m.jsxs)("header",{className:"Header",children:[Object(m.jsx)(c.b,{exact:!0,to:"/",activeClassName:"activeLink",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(m.jsx)("img",{className:"Header__logo",src:e.images.logo,alt:"portfolio site logo"})}),Object(m.jsx)(A,{headerData:e})]})}var P=a(8),I=a.n(P),T=a.p+"static/media/logo512.7f6671fd.png",H=a.p+"static/media/DukeNguyen.d57df107.svg",M=a.p+"static/media/duke-nguyen-portrait.325f7c8a.jpeg",z=a.p+"static/media/duke-nguyen-resume.357375c5.pdf",E=a.p+"static/media/01.e52e9b38.mp4",R=a.p+"static/media/01.02b30523.webm",F=a.p+"static/media/02.7cb72f24.mp4",L=a.p+"static/media/02.d5f260d8.webm",W={logo:T,nameSvg:H,sevilleMp4:a.p+"static/media/03.61aea7c3.mp4",monkeMp4:F,cellMp4:E,sevilleWebm:a.p+"static/media/03.df4a2438.webm",monkeWebm:L,cellWebm:R,portrait:M,resume:z},G=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],B={links:[{id:I()(),name:"home",path:"/"},{id:I()(),name:"about",path:"/about"},{id:I()(),name:"projects",path:"/projects"},{id:I()(),name:"contact",path:"/contact"}],images:{logo:W.logo}},J={"/":"Duke Nguyen","/about":{h1:"About Me",bg:"#f1bd00"},"/projects":{h1:"Projects",bg:"#902a2a"},"/contact":{h1:"Reach Out",bg:"#2879d0"}},Q={headshotPath:"/duke-nguyen-portrait.jpeg",paragraphs:["I\u2019m a frontend developer based out of the San Francisco Bay Area.","I have a passion for tackling and solving challenging problems in and out of the workplace\u2014the tougher the problem, the better.","Thanks for checking out my personal site. I hope you have a great ".concat(function(){var e,t=new Date,a=t.getHours();return e=a<=12?"morning":a<=18?"afternoon":"night",G[t.getDay()-1]+" "+e}(),"!")],images:{portrait:W.portrait,nameSvg:W.nameSvg}},U={img:"headshot-joe.png",paragraphs:['<div>When I\u2019m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors! I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold, you can find me on the slopes <span class="emphasize">shredding powder</span> (greens/blues, not that good yet).</div>','<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG\u2019s like <span class="emphasize">Final Fantasy 9 and Xenogears</span>.  I\u2019m a huge jazz fan, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include \u2026 (checks notes) <span class="emphasize">{artists}</span>.</div>','<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there in terms of movies for me. <span class="emphasize">Arthur C. Clarke</span>\'s novel, <span class="emphasize">Childhood\'s End</span>, is one of my favorite books. I like sci-fi if you couldn\u2019t already tell.</div>']},X={projects:[{id:I()(),title:"Cellular Automata",paragraphs:['Journey to the edge of entropy and order in this project that explores the concept of "complex" systems',"This project, which utilizes plain JS, HTML and CSS along the d3 library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale"],url:"https://hnguyen1179.github.io/cellular-automata/",repo:"https://github.com/hnguyen1179/cellular-automata",images:{mp4:W.cellMp4,webm:W.cellWebm}},{id:I()(),title:"Chimp Casino",paragraphs:["An online video game that implements the MERN stack","In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you're able to play poker, blackjack, and slots with other chimp players"],url:"http://chimp-casino.herokuapp.com/#/",repo:"https://github.com/samisherif95/Chimp-Casino",images:{mp4:W.monkeMp4,webm:W.monkeWebm}},{id:I()(),title:"Sevilla En Un Dia",paragraphs:["The result of my postponed trip to Seville, Spain due to COVID-19","As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API"],url:"https://travel-seville.netlify.app/",repo:"https://github.com/hnguyen1179/travelSeville",images:{mp4:W.sevilleMp4,webm:W.sevilleWebm}}]},Y={cta1:"You can reach my email at",email:"hnguyen1179@berkeley.edu",cta2:"and we can set something up!"},q={networks:[{id:I()(),name:"resume",nameProper:"Resume",url:W.resume,brand:!1},{id:I()(),name:"linkedin",nameProper:"LinkedIn",url:"https://www.linkedin.com/in/nguyenduke/",brand:!0},{id:I()(),name:"github",nameProper:"Github",url:"https://github.com/hnguyen1179",brand:!0},{id:I()(),name:"spotify",nameProper:"Spotify",url:"https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA",brand:!0}]};a(67);function V(){var e=Object(i.g)();return Object(m.jsx)(d.Provider,{value:{headerData:B,titleData:J,homeData:Q,aboutData:U,projectsData:X,contactData:Y,footerData:q},children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"App__bar App__bar--top"}),Object(m.jsx)("div",{className:"App__bar App__bar--bottom"}),Object(m.jsx)("div",{className:"App__bar App__bar--left"}),Object(m.jsx)(D,{}),Object(m.jsx)(l.a,{component:null,children:Object(m.jsx)(p.a,{timeout:600,classNames:"fade",children:Object(m.jsxs)(i.d,{location:e,children:[Object(m.jsx)(i.b,{exact:!0,path:"/",component:u}),Object(m.jsx)(i.b,{path:"/about",component:y}),Object(m.jsx)(i.b,{path:"/projects",component:w}),Object(m.jsx)(i.b,{path:"/contact",component:N}),Object(m.jsx)(i.b,{path:"/hidden",component:C}),Object(m.jsx)(i.b,{render:function(){return Object(m.jsx)(i.a,{to:"/"})}})]})},e.key)})]})})}var K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(c.a,{children:Object(m.jsx)(V,{})})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.0e7b455e.chunk.js.map