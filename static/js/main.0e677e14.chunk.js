(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),i=t(14),o=t.n(i),c=t(9),r=t(18),l=t(3),m=t(47),d=t(46),p=(t(32),s.a.createContext()),h=t(0);function j(){var e=Object(n.useContext)(p).footerData.networks.map((function(e){return Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("div",{className:"Footer__icon Footer__icon--".concat(e.name),children:e.nameProper})},e.id)}));return Object(h.jsx)("footer",{className:"Footer",children:Object(h.jsx)("div",{className:"Footer__link-container",children:e})})}function u(){var e=Object(n.useContext)(p).homeData;return Object(h.jsxs)("div",{className:"Home page",children:[Object(h.jsx)("div",{className:"Home__title",children:Object(h.jsxs)("div",{className:"Home__title__container",children:[Object(h.jsx)("img",{draggable:!1,className:"svg",alt:"Duke Nguyen",src:e.images.nameSvg}),Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:e.images.portrait,alt:"picture of Duke Nguyen"})})]})}),Object(h.jsx)("main",{className:"Home__main page__content",children:Object(h.jsx)("section",{children:e.paragraphs.map((function(e){return Object(h.jsx)("p",{className:"Home__main__paragraph",children:e},e.length)}))})}),Object(h.jsx)(j,{})]})}function b(e){var a=Object(l.g)(),t=Object(n.useContext)(p).titleData,s={color:t[a.pathname].bg};return Object(h.jsx)("div",{className:"Title",children:Object(h.jsx)("h1",{style:s,children:t[a.pathname].h1})})}function g(){var e=Object(n.useContext)(p).aboutData;return Object(h.jsxs)("div",{className:"About page",children:[Object(h.jsx)(b,{}),Object(h.jsx)("main",{className:"About__main page__content",children:Object(h.jsx)("section",{className:"About__main__paragraphs",children:e.paragraphs.map((function(e){return Object(h.jsx)("p",{className:"About__main__paragraphs__paragraph",dangerouslySetInnerHTML:{__html:e}})}))})}),Object(h.jsx)(j,{})]})}function v(e){var a=e.data,t=a.title,n=a.paragraphs,s=a.url,i=a.repo,o=a.images;return Object(h.jsxs)("div",{className:"Project",children:[Object(h.jsxs)("h1",{className:"Project__title",children:[" ",t," "]}),Object(h.jsx)("section",{className:"Project__paragraphs",children:n.map((function(e){return Object(h.jsx)("p",{children:e},e.length)}))}),Object(h.jsxs)("video",{className:"Project__video",autoPlay:!0,loop:!0,muted:!0,children:[Object(h.jsx)("source",{src:o.webm,type:"video/webm"}),Object(h.jsx)("source",{src:o.mp4,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(h.jsxs)("div",{className:"Project__links",children:[Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:" Live "}),Object(h.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:" Repo "})]})]})}function O(){var e=Object(n.useContext)(p).projectsData.projects.map((function(e){return Object(h.jsx)(v,{data:e},e.id)}));return Object(h.jsxs)("div",{className:"Projects page",children:[Object(h.jsx)(b,{}),Object(h.jsx)("main",{className:"Projects__main page__content",children:e}),Object(h.jsx)(j,{})]})}function f(){var e=Object(n.useContext)(p).contactData;return Object(h.jsxs)("div",{className:"Contact page",children:[Object(h.jsx)(b,{}),Object(h.jsx)("main",{className:"Contact__main page__content",children:Object(h.jsxs)("h1",{className:"Contact__main__cta",children:[e.cta1," ",Object(h.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email})," ",e.cta2]})}),Object(h.jsx)(j,{})]})}function _(){return Object(h.jsx)("div",{className:"Hidden page",children:Object(h.jsx)("main",{className:"Hidden__main page__content",children:"woah, you found the hidden page"})})}function x(e){var a=e.showNav,t=e.handleOpenNavigation;return Object(h.jsxs)("div",{className:"Hamburger ".concat(a&&"show"),onClick:t,children:[Object(h.jsx)("span",{className:"Hamburger__lineOne"}),Object(h.jsx)("span",{className:"Hamburger__lineTwo"})]})}function y(e){var a=e.headerData,t=Object(n.useState)(!1),s=Object(r.a)(t,2),i=s[0],o=s[1],l=function(){window.scrollTo({top:0,behavior:"smooth"})},m=function(e){var a=new Event("closeNavigation");window.dispatchEvent(a)},d=function(e){o(!1)};Object(n.useEffect)((function(){return window.addEventListener("closeNavigation",d),document.body.addEventListener("click",m),function(){window.removeEventListener("closeNavigation",d),document.body.removeEventListener("click",m)}}),[]);var p=a.links.map((function(e){return Object(h.jsx)(c.b,{exact:!0,to:e.path,className:"link",activeClassName:"activeLink",onClick:l,children:e.name[0].toUpperCase()+e.name.slice(1)},e.id)}));return Object(h.jsxs)("div",{className:"Header__navigation",children:[Object(h.jsx)("nav",{className:"Header__navigation__links ".concat(i&&"show"),children:Object(h.jsx)("div",{className:"overflow-container",children:p})}),Object(h.jsx)("nav",{className:"Header__navigation__links--sidebar ".concat(i&&"show"),children:Object(h.jsx)("div",{className:"Header__navigation__links--sidebar__container",children:p})}),Object(h.jsx)(x,{showNav:i,handleOpenNavigation:function(e){e.stopPropagation(),o(!i)}})]})}function N(){var e=Object(n.useContext)(p).headerData;return Object(h.jsxs)("header",{className:"Header",children:[Object(h.jsx)(c.b,{exact:!0,to:"/",activeClassName:"activeLink",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("img",{className:"Header__logo",src:e.images.logo,alt:"portfolio site logo"})}),Object(h.jsx)(y,{headerData:e})]})}var k=t(8),w=t.n(k),C=t.p+"static/media/logo512.7f6671fd.png",D=t.p+"static/media/DukeNguyen.d57df107.svg",S=t.p+"static/media/duke-nguyen-portrait.325f7c8a.jpeg",I=t.p+"static/media/duke-nguyen-resume.357375c5.pdf",P=t.p+"static/media/01.e52e9b38.mp4",A=t.p+"static/media/01.02b30523.webm",H=t.p+"static/media/02.7cb72f24.mp4",M=t.p+"static/media/02.d5f260d8.webm",T={logo:C,nameSvg:D,sevilleMp4:t.p+"static/media/03.61aea7c3.mp4",monkeMp4:H,cellMp4:P,sevilleWebm:t.p+"static/media/03.df4a2438.webm",monkeWebm:M,cellWebm:A,portrait:S,resume:I},F=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],z={links:[{id:w()(),name:"home",path:"/"},{id:w()(),name:"about",path:"/about"},{id:w()(),name:"projects",path:"/projects"},{id:w()(),name:"contact",path:"/contact"}],images:{logo:T.logo}},L={"/":"Duke Nguyen","/about":{h1:"About Me",bg:"#f1bd00"},"/projects":{h1:"Projects",bg:"#902a2a"},"/contact":{h1:"Reach Out",bg:"#2879d0"}},E={headshotPath:"/duke-nguyen-portrait.jpeg",paragraphs:["I\u2019m a frontend developer based out of the San Francisco Bay Area.","I have a passion for tackling and solving challenging problems in and out of the workplace\u2014the tougher the problem, the better.","Thanks for checking out my personal site. I hope you have a great ".concat(function(){var e,a=new Date,t=a.getHours();return e=t<=12?"morning":t<=18?"afternoon":"night",F[a.getDay()-1]+" "+e}(),"!")],images:{portrait:T.portrait,nameSvg:T.nameSvg}},W={img:"headshot-joe.png",paragraphs:['<div>When I\u2019m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors! I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold, you can find me on the slopes <span class="emphasize">shredding powder</span> (greens/blues, not that good yet).</div>','<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG\u2019s like <span class="emphasize">Final Fantasy 9 and Xenogears</span>.  I\u2019m a huge jazz fan, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include \u2026 (check notes) <span class="emphasize">Sasami, Pharaoh Sanders and MF DOOM</span>.</div>','<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there for movies for me. <span class="emphasize">Childhood\'s End</span> is a sci-fi novel favorite of mine. I\u2019m a huge sci fi nerd if you couldn\u2019t already tell.</div>']},G={projects:[{id:w()(),title:"Cellular Automata",paragraphs:['Journey to the edge of entropy and order in this project that explores the concept of "complex" systems',"This project, which utilizes plain JS, HTML and CSS along the d3 library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale"],url:"https://hnguyen1179.github.io/cellular-automata/",repo:"https://github.com/hnguyen1179/cellular-automata",images:{mp4:T.cellMp4,webm:T.cellWebm}},{id:w()(),title:"Chimp Casino",paragraphs:["An online video game that implements the MERN stack","In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you're able to play poker, blackjack, and slots with other chimp players"],url:"http://chimp-casino.herokuapp.com/#/",repo:"https://github.com/samisherif95/Chimp-Casino",images:{mp4:T.monkeMp4,webm:T.monkeWebm}},{id:w()(),title:"Sevilla En Un Dia",paragraphs:["The result of my postponed trip to Seville, Spain due to COVID-19","As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API"],url:"https://travel-seville.netlify.app/",repo:"https://github.com/hnguyen1179/travelSeville",images:{mp4:T.sevilleMp4,webm:T.sevilleWebm}}]},R={cta1:"You can reach my email at",email:"hnguyen1179@berkeley.edu",cta2:"and we can set something up!"},J={networks:[{id:w()(),name:"resume",nameProper:"Resume",url:T.resume,brand:!1},{id:w()(),name:"linkedin",nameProper:"LinkedIn",url:"https://www.linkedin.com/in/nguyenduke/",brand:!0},{id:w()(),name:"github",nameProper:"Github",url:"https://github.com/hnguyen1179",brand:!0},{id:w()(),name:"spotify",nameProper:"Spotify",url:"https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA",brand:!0}]},B=t(10),U=t(26),Y=t(25);B.b.add(Y.a,U.a);t(43);function q(e){var a=Object(n.useState)(!1),t=Object(r.a)(a,2),s=(t[0],t[1],Object(l.g)());return Object(h.jsx)(p.Provider,{value:{headerData:z,titleData:L,homeData:E,aboutData:W,projectsData:G,contactData:R,footerData:J},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"App__bar App__bar--top"}),Object(h.jsx)("div",{className:"App__bar App__bar--bottom"}),Object(h.jsx)("div",{className:"App__bar App__bar--left"}),Object(h.jsx)(N,{}),Object(h.jsx)(m.a,{component:null,children:Object(h.jsx)(d.a,{timeout:600,classNames:"fade",children:Object(h.jsxs)(l.d,{location:s,children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:u}),Object(h.jsx)(l.b,{path:"/about",component:g}),Object(h.jsx)(l.b,{path:"/projects",component:O}),Object(h.jsx)(l.b,{path:"/contact",component:f}),Object(h.jsx)(l.b,{path:"/hidden",component:_}),Object(h.jsx)(l.b,{render:function(){return Object(h.jsx)(l.a,{to:"/"})}})]})},s.key)})]})})}var Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(q,{})})}),document.getElementById("root")),Q()}},[[44,1,2]]]);
//# sourceMappingURL=main.0e677e14.chunk.js.map