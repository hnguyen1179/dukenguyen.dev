(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(17),r=t.n(i),o=t(12),c=t(2),l=t(51),p=t(50),m=t(49),u=s.a.createContext(),h=t(1);function d(e){var a=e.introEffect,t=Object(n.useContext)(u).footerData.networks.map((function(e){return Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("div",{className:"Footer__icon Footer__icon--".concat(e.name),children:e.nameProper})},e.id)}));return Object(h.jsx)(m.a.footer,{className:"Footer",initial:{opacity:a?0:1,zIndex:30},animate:{opacity:1,zIndex:0,transitionDelay:"1.25s",transitionDuration:"0.8s"},children:Object(h.jsx)("div",{className:"Footer__link-container",children:t})})}function b(e){var a=e.setInitialHomeLoad,t=Object(n.useContext)(u).homeData,s=!("initialLoad"in sessionStorage);return Object(n.useEffect)((function(){"initialLoad"in sessionStorage||sessionStorage.setItem("initialLoad",!0)}),[a]),Object(h.jsxs)("div",{className:"Home page",children:[Object(h.jsx)(m.a.div,{initial:{y:"110%"},animate:{y:"0%"},transition:s?{duration:1.1,ease:"easeInOut"}:{duration:0},className:"Home__title",children:Object(h.jsxs)("div",{className:"Home__title__container",children:[Object(h.jsx)("img",{draggable:!1,className:"svg",alt:"Duke Nguyen",src:t.images.nameSvg}),Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:t.images.portrait,alt:"Duke Nguyen Portrait"})})]})}),Object(h.jsxs)(m.a.main,{initial:{color:s?"#e9dfd8":"#af4818",backgroundColor:"#e9dfd8",zIndex:30},animate:{color:"#af4818",zIndex:0,transitionDelay:"1.25s",transitionDuration:"0.8s"},className:"Home__main page__content",children:[Object(h.jsx)("h1",{style:{display:"none"},children:"Duke Nguyen"}),Object(h.jsx)("section",{children:t.paragraphs.map((function(e){return Object(h.jsx)("p",{className:"Home__main__paragraph",children:e},e[5])}))})]}),Object(h.jsx)(d,{introEffect:s})]})}var j=t(8),g=t.n(j),f=t(13),v=t(19);function _(e){var a=Object(c.g)(),t=Object(n.useContext)(u).titleData,s={color:t[a.pathname].bg};return Object(h.jsx)("div",{className:"Title",children:Object(h.jsx)("h1",{style:s,children:t[a.pathname].h1})})}var y=t(28),O=t.n(y),x="Basic "+btoa("6dc7fe135b2340f7a529b2973d596f5b:1b5d5839c9e743ec829e78183d62dcde"),k=function(e){var a=function(){var a=Object(f.a)(g.a.mark((function a(){var t,n,s,i,r,o;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getAccessToken();case 2:return t=a.sent,n=t.access_token,a.next=6,e.getTopTracks(n);case 6:return s=a.sent,i=s.items,a.next=10,e.getTopArtists(n);case 10:return r=a.sent,o=r.items,a.abrupt("return",[i,o]);case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return{getData:function(){return a()}}}(function(){var e=function(){var e=Object(f.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:x,"Content-Type":"application/x-www-form-urlencoded"},body:O.a.stringify({grant_type:"refresh_token",refresh_token:"AQAChBI10bUAsrc1SGH0nnYeHXiLCAOjFuyCaS7WZk8AuRp05qQt2jWKqMymMkVZ0a89HA8PWfonE2GctdV-b271kCIXzPm55bDc_ZNZhVuEwJd1B9vu4fq7dlO5kx_NPdA"})});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(f.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50",{headers:{Authorization:"Bearer ".concat(a)}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t=function(){var e=Object(f.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=4",{headers:{Authorization:"Bearer ".concat(a)}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return{getAccessToken:function(){return e()},getTopTracks:function(e){return a(e)},getTopArtists:function(e){return t(e)}}}());function w(){var e=Object(n.useContext)(u).aboutData,a=Object(n.useState)("uhhhhh"),t=Object(v.a)(a,2),s=t[0],i=t[1],r=Object(n.useState)([]),o=Object(v.a)(r,2),c=o[0],l=o[1];Object(n.useEffect)((function(){try{(function(){var e=Object(f.a)(g.a.mark((function e(){var a,t,n,s,r,o,c,p;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getData();case 2:a=e.sent,t=Object(v.a)(a,2),n=t[0],s=t[1],(r=s.map((function(e){return e.name})))[3]="and "+r[3]+".",o=r.join(", "),i(o),c=[];case 11:if(!(c.length<4)){e.next=18;break}if(p=Math.floor(50*Math.random()),!c.includes(p)){e.next=15;break}return e.abrupt("continue",11);case 15:c.push(p),e.next=11;break;case 18:l(c.map((function(e){return n[e]})));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){i("uhhh, I can't think right now. (My code's erroring out! I'll fix this soon)")}}),[]);var p=e.images.paragraphOne.map((function(e){return Object(h.jsx)("img",{src:e.url,alt:e.alt},e.alt)})),m=c.map((function(e){return Object(h.jsxs)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("img",{src:e.album.images[0].url,alt:"".concat(e.album.name,"'s Album Cover")}),Object(h.jsx)("div",{className:"track-info",children:"".concat(e.name," by ").concat(e.artists[0].name)})]},e.album.name)})),b=e.images.paragraphThree.map((function(e){return Object(h.jsx)("img",{src:e.url,alt:e.alt},e.alt)}));return Object(h.jsxs)("div",{className:"About page",children:[Object(h.jsx)(_,{}),Object(h.jsx)("main",{className:"About__main page__content",children:Object(h.jsx)("section",{className:"About__main__paragraphs",children:e.paragraphs.map((function(e,a){return Object(h.jsxs)("div",{className:"About__main__paragraphs__content About__main__paragraphs__content--".concat(a),children:[Object(h.jsx)("p",{className:"About__main__paragraphs__content__paragraph About__main__paragraphs__content__paragraph--".concat(a),dangerouslySetInnerHTML:{__html:e.replace(/\{artists\}/,s)}},e.length),Object(h.jsxs)("div",{className:"About__main__paragraphs__content__media About__main__paragraphs__content__media--".concat(a),children:[1===a?p:null,2===a?m:null,3===a?b:null]})]},a)}))})}),Object(h.jsx)(d,{})]})}function N(e){var a=e.data,t=a.title,n=a.paragraphs,s=a.url,i=a.repo,r=a.images;return Object(h.jsxs)("div",{className:"Project",children:[Object(h.jsx)("h1",{className:"Project__title",children:Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:t})}),Object(h.jsx)("section",{className:"Project__paragraphs",children:n.map((function(e){return Object(h.jsx)("p",{children:e},e.length)}))}),Object(h.jsxs)("video",{className:"Project__video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(h.jsx)("source",{src:r.webm,type:"video/webm"}),Object(h.jsx)("source",{src:r.mp4,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(h.jsxs)("div",{className:"Project__links",children:[Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"Live"}),Object(h.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"Repo"})]})]})}function C(){var e=Object(n.useContext)(u).projectsData.projects.map((function(e){return Object(h.jsx)(N,{data:e},e.id)}));return Object(h.jsxs)("div",{className:"Projects page",children:[Object(h.jsx)(_,{}),Object(h.jsx)("main",{className:"Projects__main page__content",children:e}),Object(h.jsx)(d,{})]})}function A(){var e=Object(n.useContext)(u).contactData;return Object(h.jsxs)("div",{className:"Contact page",children:[Object(h.jsx)(_,{}),Object(h.jsx)("main",{className:"Contact__main page__content",children:Object(h.jsxs)("h1",{className:"Contact__main__cta",children:[e.cta1," ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email}),Object(h.jsx)("br",{})," ",e.cta2]})}),Object(h.jsx)(d,{})]})}function I(){return Object(h.jsx)("div",{className:"Hidden page",children:Object(h.jsxs)("main",{className:"Hidden__main page__content",children:[Object(h.jsx)("h1",{children:"woah, you found the hidden page"}),Object(h.jsx)("h2",{children:"i need to actually think of something to put here"}),Object(h.jsx)("h3",{children:"but thanks for visiting. Check back another time!"})]})})}function S(e){var a=e.showNav,t=e.handleOpenNavigation;return Object(h.jsxs)("div",{className:"Hamburger ".concat(a&&"show"),onClick:t,children:[Object(h.jsx)("span",{className:"Hamburger__lineOne"}),Object(h.jsx)("span",{className:"Hamburger__lineTwo"})]})}function D(e){var a=e.headerData,t=Object(n.useState)(!1),s=Object(v.a)(t,2),i=s[0],r=s[1],c=function(e){e.stopPropagation()},l=function(e){e.stopPropagation(),window.scrollTo({top:0,behavior:"smooth"})},p=function(e){var a=new Event("closeNavigation");window.dispatchEvent(a)},m=function(e){r(!1)};Object(n.useEffect)((function(){return window.addEventListener("closeNavigation",m),document.body.addEventListener("click",p),function(){window.removeEventListener("closeNavigation",m),document.body.removeEventListener("click",p)}}),[]);var u=a.links.map((function(e){return Object(h.jsx)(o.b,{exact:!0,to:e.path,className:"link",activeClassName:"activeLink",onClick:l,children:e.name[0].toUpperCase()+e.name.slice(1)},e.id)}));return Object(h.jsxs)("div",{className:"Header__navigation",children:[Object(h.jsx)("nav",{className:"Header__navigation__links ".concat(i&&"show"),onClick:c,children:Object(h.jsx)("div",{className:"overflow-container",children:u})}),Object(h.jsx)("nav",{className:"Header__navigation__links--sidebar ".concat(i&&"show"),onClick:c,children:Object(h.jsx)("div",{className:"Header__navigation__links--sidebar__container",children:u})}),Object(h.jsx)(S,{showNav:i,handleOpenNavigation:function(e){e.stopPropagation(),r(!i)}})]})}function z(e){var a=e.initialHomeLoad,t=Object(n.useContext)(u).headerData;return Object(h.jsxs)(m.a.header,{initial:{opacity:a?0:1},animate:{opacity:1,transitionProperty:"opacity",transitionDelay:a?"1.25s":"0s",transitionDuration:"0.8s"},className:"Header",children:[Object(h.jsx)(o.b,{exact:!0,to:"/",activeClassName:"activeLink",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("img",{className:"Header__logo",src:t.images.logo,alt:"portfolio site logo"})}),Object(h.jsx)(D,{headerData:t})]})}var P=t(7),T=t.n(P),H=t.p+"static/media/qr-code.d6705753.svg",E=t.p+"static/media/DukeNguyen.d57df107.svg",L=t.p+"static/media/duke-nguyen-portrait.325f7c8a.jpeg",M=t.p+"static/media/duke-nguyen-resume.18656d30.pdf",W=t.p+"static/media/react-colors.751f3ca9.mp4",F=t.p+"static/media/react-colors.2e1379e8.webm",R=t.p+"static/media/01.bb66e0a7.mp4",B=t.p+"static/media/01.02b30523.webm",G=t.p+"static/media/02.f951a7be.mp4",U=t.p+"static/media/02.d5f260d8.webm",V={logo:H,nameSvg:E,sevilleMp4:t.p+"static/media/03.5658a162.mp4",monkeMp4:G,cellMp4:R,rcMp4:W,sevilleWebm:t.p+"static/media/03.df4a2438.webm",monkeWebm:U,cellWebm:B,rcWebm:F,portrait:L,resume:M,climbing0:t.p+"static/media/climbing-1.4bc9032f.webp",arches:t.p+"static/media/arches.22b9218d.webp",interstellar:t.p+"static/media/interstellar.a4ed45b4.webp",childhoodsEnd:t.p+"static/media/childhoods-end.6b0d28ce.webp"},q=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],J={links:[{id:T()(),name:"home",path:"/"},{id:T()(),name:"about",path:"/about"},{id:T()(),name:"projects",path:"/projects"},{id:T()(),name:"contact",path:"/contact"}],images:{logo:V.logo}},Z={"/":"Duke Nguyen","/about":{h1:"About Me",bg:"#f1bd00"},"/projects":{h1:"Projects",bg:"#902a2a"},"/contact":{h1:"Reach Out",bg:"#2879d0"}},Q={headshotPath:"/duke-nguyen-portrait.jpeg",paragraphs:["I\u2019m a frontend developer based out of the San Francisco Bay Area. I specialize in React based web applications, but am always open to learn new technologies.","I have a passion for tackling challenging problems in and out of the workplace\u2014the tougher the problem, the more enjoyment I get out of solving it.","I'm currently looking for a job within the Bay Area or anywhere within the US, remotely. If interested, please visit my Contact page and we can get in touch.","Thanks for checking out my personal site. I hope you have a great ".concat(function(){var e,a=new Date,t=a.getHours();return e=t<=12?"morning":t<=18?"afternoon":"night",q[a.getDay()]+" "+e}(),"!")],images:{portrait:V.portrait,nameSvg:V.nameSvg}},X={images:{paragraphOne:[{alt:"View of a big rock arch",url:V.arches},{alt:"My point of view from a high climb looking down at climbing partners far below",url:V.climbing0}],paragraphThree:[{alt:"Childhood's End Vintage Book Cover",url:V.childhoodsEnd},{alt:"Interstellar Movie Poster",url:V.interstellar}]},paragraphs:["<div>I have a <span class='emphasize'>background in design</span> (with an emphasis in <span class='emphasize'>architecture</span>) and also in <span class='emphasize'>economics</span>. Since graduating from the <span class='emphasize'>University of California, Berkeley</span>, I worked as a <span class='emphasize'>data analyst</span> for a biopharmaceutical start up in <span class='emphasize'>Emeryville, California</span> for two years before leaving to join <span class='emphasize'>App Academy</span>. Currently, I'm looking to pivot into <span class='emphasize'>front end web development</span> and pursue my <span class='emphasize'>passion for coding</span>.</div>",'<div>When I\u2019m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors. I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold, you can find me on the slopes <span class="emphasize">shredding powder</span> (greens/blues, not that good yet).</div>','<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG\u2019s like <span class="emphasize">Final Fantasy 9, Xenogears and Chrono Trigger</span>.  I\u2019m a <span class="emphasize">huge jazz fan</span>, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include \u2026 (checks notes) <span class="emphasize">{artists}</span> Listed below are the album covers of some of my favorite songs, you can click on them to give them a listen. </div>','<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there in terms of movies for me. <span class="emphasize">Arthur C. Clarke</span>\'s novel, <span class="emphasize">Childhood\'s End</span>, is one of my favorite books. I like sci-fi if you couldn\u2019t already tell.</div>']},Y={projects:[{id:T()(),title:"React Colors",paragraphs:["A web application that enables users to create custom color palettes to help jumpstart their design process","This project utilizes React and SCSS in order to create a fully responsive, intuitive UI based on neumorphic design principles"],url:"https://hnguyen1179.github.io/React-Colors/",repo:"https://github.com/hnguyen1179/React-Colors",images:{mp4:V.rcMp4,webm:V.rcWebm}},{id:T()(),title:"Chimp Casino",paragraphs:["An online video game that implements the MERN stack","In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you're able to play poker, blackjack, and slots with other chimp players"],url:"http://chimp-casino.herokuapp.com/#/",repo:"https://github.com/samisherif95/Chimp-Casino",images:{mp4:V.monkeMp4,webm:V.monkeWebm}},{id:T()(),title:"Sevilla En Un Dia",paragraphs:["The result of my postponed trip to Seville, Spain due to COVID-19","As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API"],url:"https://travel-seville.netlify.app/",repo:"https://github.com/hnguyen1179/travelSeville",images:{mp4:V.sevilleMp4,webm:V.sevilleWebm}},{id:T()(),title:"Cellular Automata",paragraphs:['Cellular automata (plural) are discrete, abstract computational systems that are useful in helping simulate general models of "complex systems", such as forest fires, traffic, and urbawn sprawl',"This passion project, which utilizes plain JS, HTML and CSS along the d3.js library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale"],url:"https://hnguyen1179.github.io/cellular-automata/",repo:"https://github.com/hnguyen1179/cellular-automata",images:{mp4:V.cellMp4,webm:V.cellWebm}}]},K={cta1:"You can reach my email at",email:"hnguyen1179@berkeley.edu",cta2:"and we can set something up!"},$={networks:[{id:T()(),name:"resume",nameProper:"Resume",url:V.resume,brand:!1},{id:T()(),name:"linkedin",nameProper:"LinkedIn",url:"https://www.linkedin.com/in/nguyenduke/",brand:!0},{id:T()(),name:"github",nameProper:"GitHub",url:"https://github.com/hnguyen1179",brand:!0},{id:T()(),name:"spotify",nameProper:"Spotify",url:"https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA",brand:!0}]};t(45);function ee(){var e=Object(c.g)(),a=!("initialLoad"in sessionStorage);return window.onbeforeunload=function(){window.scrollTo({top:0,behavior:"smooth"})},Object(h.jsx)(u.Provider,{value:{headerData:J,titleData:Z,homeData:Q,aboutData:X,projectsData:Y,contactData:K,footerData:$},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"App__bar App__bar--top"}),Object(h.jsx)("div",{className:"App__bar App__bar--bottom"}),Object(h.jsx)("div",{className:"App__bar App__bar--left"}),Object(h.jsx)(z,{initialHomeLoad:a}),Object(h.jsx)(l.a,{component:null,children:Object(h.jsx)(p.a,{timeout:600,classNames:"fade",children:Object(h.jsxs)(c.d,{location:e,children:[Object(h.jsx)(c.b,{exact:!0,path:"/",component:b}),Object(h.jsx)(c.b,{path:"/about",component:w}),Object(h.jsx)(c.b,{path:"/projects",component:C}),Object(h.jsx)(c.b,{path:"/contact",component:A}),Object(h.jsx)(c.b,{path:"/hidden",component:I}),Object(h.jsx)(c.b,{render:function(){return Object(h.jsx)(c.a,{to:"/"})}})]})},e.key)})]})})}var ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(o.a,{children:Object(h.jsx)(ee,{})}),document.getElementById("root")),ae()}},[[46,1,2]]]);
//# sourceMappingURL=main.eaaac2fb.chunk.js.map