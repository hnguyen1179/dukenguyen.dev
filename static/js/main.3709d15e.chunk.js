(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(18),r=a.n(i),o=a(12),c=a(2),l=a(54),p=a(53),m=a(52),u=s.a.createContext(),h=a(1);function d(e){var t=e.introEffect,a=Object(n.useContext)(u).footerData.networks.map((function(e){return Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("div",{className:"Footer__icon Footer__icon--".concat(e.name),children:e.nameProper})},e.id)}));return Object(h.jsx)(m.a.footer,{className:"Footer",initial:{opacity:t?0:1,zIndex:30},animate:{opacity:1,zIndex:0,transitionDelay:"1.25s",transitionDuration:"0.8s"},children:Object(h.jsx)("div",{className:"Footer__link-container",children:a})})}function b(e){var t=e.setInitialHomeLoad,a=Object(n.useContext)(u).homeData,s=!("initialLoad"in sessionStorage);return Object(n.useEffect)((function(){"initialLoad"in sessionStorage||sessionStorage.setItem("initialLoad",!0)}),[t]),Object(h.jsxs)("div",{className:"Home page",children:[Object(h.jsx)(m.a.div,{initial:{y:"110%"},animate:{y:"0%"},transition:s?{duration:1.1,ease:"easeInOut"}:{duration:0},className:"Home__title",children:Object(h.jsxs)("div",{className:"Home__title__container",children:[Object(h.jsx)("img",{draggable:!1,className:"svg",alt:"Duke Nguyen",src:a.images.nameSvg}),Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:a.images.portrait,alt:"Duke Nguyen Portrait"})})]})}),Object(h.jsxs)(m.a.main,{initial:{color:s?"#e9dfd8":"#af4818",backgroundColor:"#e9dfd8",zIndex:30},animate:{color:"#af4818",zIndex:0,transitionDelay:"1.25s",transitionDuration:"0.8s"},className:"Home__main page__content",children:[Object(h.jsx)("h1",{style:{display:"none"},children:"Duke Nguyen"}),Object(h.jsx)("section",{children:a.paragraphs.map((function(e){return Object(h.jsx)("p",{className:"Home__main__paragraph",children:e},e[5])}))})]}),Object(h.jsx)(d,{introEffect:s})]})}var j=a(31),g=a(8),f=a.n(g),v=a(13),_=a(15);function O(e){var t=Object(c.g)(),a=Object(n.useContext)(u).titleData,s={color:a[t.pathname].bg};return Object(h.jsx)("div",{className:"Title",children:Object(h.jsx)("h1",{style:s,children:a[t.pathname].h1})})}var y=a(30),x=a.n(y),w="Basic "+btoa("6dc7fe135b2340f7a529b2973d596f5b:1b5d5839c9e743ec829e78183d62dcde"),k=function(e){var t=function(){var t=Object(v.a)(f.a.mark((function t(){var a,n,s,i,r,o,c,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAccessToken();case 2:return a=t.sent,n=a.access_token,t.next=6,e.getTopTracks(n);case 6:return s=t.sent,i=s.items,t.next=10,e.getTopArtists(n);case 10:return r=t.sent,o=r.items,c=["Teyana Taylor","Blood Orange"],l=i.filter((function(e){return!c.includes(e.artists[0].name)})),t.abrupt("return",[l,o]);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{getData:function(){return t()}}}(function(){var e=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:w,"Content-Type":"application/x-www-form-urlencoded"},body:x.a.stringify({grant_type:"refresh_token",refresh_token:"AQAChBI10bUAsrc1SGH0nnYeHXiLCAOjFuyCaS7WZk8AuRp05qQt2jWKqMymMkVZ0a89HA8PWfonE2GctdV-b271kCIXzPm55bDc_ZNZhVuEwJd1B9vu4fq7dlO5kx_NPdA"})});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=4",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{getAccessToken:function(){return e()},getTopTracks:function(e){return t(e)},getTopArtists:function(e){return a(e)}}}());function N(){var e=Object(n.useContext)(u).aboutData,t=Object(n.useState)([]),a=Object(_.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)("uhhhhh"),o=Object(_.a)(r,2),c=o[0],l=o[1],p=Object(n.useState)([]),m=Object(_.a)(p,2),b=m[0],g=m[1];Object(n.useEffect)((function(){try{(function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n,s,r,o,c,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getData();case 2:t=e.sent,a=Object(_.a)(t,2),n=a[0],s=a[1],(r=s.map((function(e){return e.name})))[3]="and "+r[3]+".",o=r.join(", "),l(o),c=[];case 11:if(!(c.length<4)){e.next=18;break}if(p=Math.floor(50*Math.random()),!c.includes(p)){e.next=15;break}return e.abrupt("continue",11);case 15:c.push(p),e.next=11;break;case 18:i(n),g(c.map((function(e){return n[e]})));case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){l("uhhh, I can't think right now. (My code's erroring out! I'll fix this soon)")}}),[]);var y=function(){for(var e=new Set;e.size<4;){var t=Math.floor(50*Math.random());e.add(t)}g(Object(j.a)(e).map((function(e){return s[e]})).slice(0,4))},x=e.images.paragraphOne.map((function(e){return Object(h.jsx)("img",{src:e.url,alt:e.alt},e.alt)})),w=function(e){var t=e.split(" ");return t.reduce((function(e,a,n){return n===t.length-1?e+"\xa0"+a:e+" "+a}),"")},N=b.map((function(e){return Object(h.jsxs)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("img",{src:e.album.images[0].url,alt:"".concat(e.album.name,"'s Album Cover. Track name is ").concat(e.name)}),Object(h.jsxs)("div",{className:"track-info",children:[Object(h.jsx)("div",{children:w(e.name)}),Object(h.jsx)("div",{children:"".concat(w(e.artists[0].name))})]})]},e.album.name+" "+e.name)})),A=e.images.paragraphThree.map((function(e){return Object(h.jsx)("img",{src:e.url,alt:e.alt},e.alt)}));return Object(h.jsxs)("div",{className:"About page",children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{className:"About__main page__content",children:Object(h.jsx)("section",{className:"About__main__paragraphs",children:e.paragraphs.map((function(e,t){return Object(h.jsxs)("div",{className:"About__main__paragraphs__content About__main__paragraphs__content--".concat(t),children:[Object(h.jsx)("p",{className:"About__main__paragraphs__content__paragraph About__main__paragraphs__content__paragraph--".concat(t),dangerouslySetInnerHTML:{__html:e.replace(/\{artists\}/,c)}},e.length),2===t?Object(h.jsx)("button",{className:"more-songs-button",onClick:y,children:Object(h.jsx)("span",{children:"Randomize songs"})}):null,Object(h.jsxs)("div",{className:"About__main__paragraphs__content__media About__main__paragraphs__content__media--".concat(t),children:[1===t?x:null,2===t?N:null,3===t?A:null]})]},t)}))})}),Object(h.jsx)(d,{})]})}function A(e){var t=e.data,a=t.title,n=t.paragraphs,s=t.url,i=t.repo,r=t.images;return Object(h.jsxs)("div",{className:"Project",children:[Object(h.jsx)("h1",{className:"Project__title",children:Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:a})}),Object(h.jsx)("section",{className:"Project__paragraphs",children:n.map((function(e){return Object(h.jsx)("p",{children:e},e.length)}))}),Object(h.jsxs)("video",{className:"Project__video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(h.jsx)("source",{src:r.webm,type:"video/webm"}),Object(h.jsx)("source",{src:r.mp4,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(h.jsxs)("div",{className:"Project__links",children:[Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"Live"}),Object(h.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"Repo"})]})]})}function C(){var e=Object(n.useContext)(u).projectsData.projects.map((function(e){return Object(h.jsx)(A,{data:e},e.id)}));return Object(h.jsxs)("div",{className:"Projects page",children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{className:"Projects__main page__content",children:e}),Object(h.jsx)(d,{})]})}function I(){var e=Object(n.useContext)(u).contactData;return Object(h.jsxs)("div",{className:"Contact page",children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{className:"Contact__main page__content",children:Object(h.jsxs)("h1",{className:"Contact__main__cta",children:[e.cta1," ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email}),Object(h.jsx)("br",{})," ",e.cta2]})}),Object(h.jsx)(d,{})]})}function S(){return Object(h.jsx)("div",{className:"Hidden page",children:Object(h.jsxs)("main",{className:"Hidden__main page__content",children:[Object(h.jsx)("h1",{children:"woah, you found the hidden page"}),Object(h.jsx)("h2",{children:"i need to actually think of something to put here"}),Object(h.jsx)("h3",{children:"but thanks for visiting. Check back another time!"})]})})}function D(e){var t=e.showNav,a=e.handleOpenNavigation;return Object(h.jsxs)("div",{className:"Hamburger ".concat(t&&"show"),onClick:a,children:[Object(h.jsx)("span",{className:"Hamburger__lineOne"}),Object(h.jsx)("span",{className:"Hamburger__lineTwo"})]})}function z(e){var t=e.headerData,a=Object(n.useState)(!1),s=Object(_.a)(a,2),i=s[0],r=s[1],c=function(e){e.stopPropagation()},l=function(e){e.stopPropagation(),window.scrollTo({top:0,behavior:"smooth"})},p=function(e){var t=new Event("closeNavigation");window.dispatchEvent(t)},m=function(e){r(!1)};Object(n.useEffect)((function(){return window.addEventListener("closeNavigation",m),window.addEventListener("scroll",m),document.body.addEventListener("click",p),function(){window.removeEventListener("closeNavigation",m),window.removeEventListener("scroll",m),document.body.removeEventListener("click",p)}}),[]);var u=t.links.map((function(e){return Object(h.jsx)(o.b,{exact:!0,to:e.path,className:"link",activeClassName:"activeLink",onClick:l,children:e.name[0].toUpperCase()+e.name.slice(1)},e.id)}));return Object(h.jsxs)("div",{className:"Header__navigation",children:[Object(h.jsx)("nav",{className:"Header__navigation__links ".concat(i&&"show"),onClick:c,children:Object(h.jsx)("div",{className:"overflow-container",children:u})}),Object(h.jsx)("nav",{className:"Header__navigation__links--sidebar ".concat(i&&"show"),onClick:c,children:Object(h.jsx)("div",{className:"Header__navigation__links--sidebar__container",children:u})}),Object(h.jsx)(D,{showNav:i,handleOpenNavigation:function(e){e.stopPropagation(),r(!i)}})]})}function T(e){var t=e.initialHomeLoad,a=Object(n.useContext)(u).headerData;return Object(h.jsxs)(m.a.header,{initial:{opacity:t?0:1},animate:{opacity:1,transitionProperty:"opacity",transitionDelay:t?"1.25s":"0s",transitionDuration:"0.8s"},className:"Header",children:[Object(h.jsx)(o.b,{exact:!0,to:"/",activeClassName:"activeLink",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("img",{className:"Header__logo",src:a.images.logo,alt:"portfolio site logo"})}),Object(h.jsx)(z,{headerData:a})]})}var P=a(5),H=a.n(P),L=a.p+"static/media/qr-code.d6705753.svg",M=a.p+"static/media/DukeNguyen.d57df107.svg",E=a.p+"static/media/duke-nguyen-portrait.325f7c8a.jpeg",W=a.p+"static/media/duke-nguyen-resume.c5c87f7c.pdf",R=a.p+"static/media/react-colors.751f3ca9.mp4",F=a.p+"static/media/react-colors.2e1379e8.webm",B=a.p+"static/media/01.bb66e0a7.mp4",G=a.p+"static/media/01.02b30523.webm",U=a.p+"static/media/02.f951a7be.mp4",V=a.p+"static/media/02.d5f260d8.webm",q=a.p+"static/media/03.5658a162.mp4",J=a.p+"static/media/03.df4a2438.webm",Q={logo:L,nameSvg:M,notAirbnbMp4:a.p+"static/media/04.8f00707b.mp4",sevilleMp4:q,monkeMp4:U,cellMp4:B,rcMp4:R,notAirbnbWebm:a.p+"static/media/04.703cf05b.webm",sevilleWebm:J,monkeWebm:V,cellWebm:G,rcWebm:F,portrait:E,resume:W,climbing0:a.p+"static/media/climbing-1.4bc9032f.webp",arches:a.p+"static/media/arches.22b9218d.webp",interstellar:a.p+"static/media/interstellar.a4ed45b4.webp",childhoodsEnd:a.p+"static/media/childhoods-end.6b0d28ce.webp"},Z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],X={links:[{id:H()(),name:"home",path:"/"},{id:H()(),name:"about",path:"/about"},{id:H()(),name:"projects",path:"/projects"},{id:H()(),name:"contact",path:"/contact"}],images:{logo:Q.logo}},Y={"/":"Duke Nguyen","/about":{h1:"About Me",bg:"#f1bd00"},"/projects":{h1:"Projects",bg:"#902a2a"},"/contact":{h1:"Reach Out",bg:"#2879d0"}},K={headshotPath:"/duke-nguyen-portrait.jpeg",paragraphs:["I\u2019m a web developer based out of the San Francisco Bay Area. I specialize in React based websites, but am always open to learn new technologies.","I have a passion for tackling challenging problems in and out of the workplace\u2014the tougher the problem, the more enjoyment I get out of solving it.","I'm currently looking for a job within the Bay Area or anywhere within the US, remotely. If interested, please visit my Contact page and we can get in touch.","Thanks for checking out my personal site. I hope you have a great ".concat(function(){var e,t=new Date,a=t.getHours();return e=a<=12?"morning":a<=18?"afternoon":"night",Z[t.getDay()]+" "+e}(),"!")],images:{portrait:Q.portrait,nameSvg:Q.nameSvg}},$={images:{paragraphOne:[{alt:"View of a big rock arch",url:Q.arches},{alt:"My point of view from a high climb looking down at climbing partners far below",url:Q.climbing0}],paragraphThree:[{alt:"Childhood's End Vintage Book Cover",url:Q.childhoodsEnd},{alt:"Interstellar Movie Poster",url:Q.interstellar}]},paragraphs:["<div>I have a <span class='emphasize'>background in design</span> (with an emphasis in <span class='emphasize'>architecture</span>) and also in <span class='emphasize'>economics</span>. Since graduating from the <span class='emphasize'>University of California, Berkeley</span>, I worked as a <span class='emphasize'>data analyst</span> for a biopharmaceutical start up in <span class='emphasize'>Emeryville, California</span> for two years before leaving to join <span class='emphasize'>App Academy</span>. Currently, I'm looking to pivot into <span class='emphasize'>web development</span> and pursue my <span class='emphasize'>passion for coding</span>.</div>",'<div>When I\u2019m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors. I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold for that, you can find me on the slopes <span class="emphasize">shredding powder</span> instead (greens/blues, not that good yet).</div>','<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG\u2019s like <span class="emphasize">Final Fantasy 9, Xenogears and Chrono Trigger</span>.  I\u2019m a <span class="emphasize">huge jazz fan</span>, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include \u2026 (checks notes) <span class="emphasize">{artists}</span> Listed below are the album covers of some of my favorite songs, you can click on them to give them a listen. </div>','<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there in terms of movies for me. <span class="emphasize">Arthur C. Clarke</span>\'s novel, <span class="emphasize">Childhood\'s End</span>, is one of my favorite books. I like sci-fi if you couldn\u2019t already tell.</div>']},ee={projects:[{id:H()(),title:"notAirbnb",paragraphs:["A creatively named fullstack project that replicates Airbnb's website","The front-end is built using React, while the back-end is built with Apollo, PostgreSQL, and with a GraphQL API. In addition, the project is compiled from TypeScript"],url:"https://not-airbnb.netlify.app/",repo:"https://github.com/hnguyen1179/notAirbnb",images:{mp4:Q.notAirbnbMp4,webm:Q.notAirbnbWebm}},{id:H()(),title:"React Colors",paragraphs:["A web application that enables users to create custom color palettes to help jumpstart their design process","This project utilizes React and SCSS in order to create a fully responsive, intuitive UI based on neumorphic design principles"],url:"https://hnguyen1179.github.io/React-Colors/",repo:"https://github.com/hnguyen1179/React-Colors",images:{mp4:Q.rcMp4,webm:Q.rcWebm}},{id:H()(),title:"Chimp Casino",paragraphs:["An online video game that implements the MERN stack","In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you're able to play poker, blackjack, and slots with other chimp players"],url:"http://chimp-casino.herokuapp.com/#/",repo:"https://github.com/samisherif95/Chimp-Casino",images:{mp4:Q.monkeMp4,webm:Q.monkeWebm}},{id:H()(),title:"Sevilla En Un Dia",paragraphs:["The result of my postponed trip to Seville, Spain due to COVID-19","As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API"],url:"https://travel-seville.netlify.app/",repo:"https://github.com/hnguyen1179/travelSeville",images:{mp4:Q.sevilleMp4,webm:Q.sevilleWebm}},{id:H()(),title:"Cellular Automata",paragraphs:['Cellular automata (plural) are discrete, abstract computational systems that are useful in helping simulate general models of "complex systems", such as forest fires, traffic, and urbawn sprawl',"This passion project, which utilizes plain JS, HTML and CSS along the d3.js library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale"],url:"https://hnguyen1179.github.io/cellular-automata/",repo:"https://github.com/hnguyen1179/cellular-automata",images:{mp4:Q.cellMp4,webm:Q.cellWebm}}]},te={cta1:"You can reach my email at",email:"hnguyen1179@berkeley.edu",cta2:"and we can set something up!"},ae={networks:[{id:H()(),name:"resume",nameProper:"Resume",url:Q.resume,brand:!1},{id:H()(),name:"linkedin",nameProper:"LinkedIn",url:"https://www.linkedin.com/in/nguyenduke/",brand:!0},{id:H()(),name:"github",nameProper:"GitHub",url:"https://github.com/hnguyen1179",brand:!0},{id:H()(),name:"spotify",nameProper:"Spotify",url:"https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA",brand:!0}]};a(48);function ne(){var e=Object(c.g)(),t=!("initialLoad"in sessionStorage);return window.onbeforeunload=function(){window.scrollTo({top:0,behavior:"smooth"})},Object(h.jsx)(u.Provider,{value:{headerData:X,titleData:Y,homeData:K,aboutData:$,projectsData:ee,contactData:te,footerData:ae},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"App__bar App__bar--top"}),Object(h.jsx)("div",{className:"App__bar App__bar--bottom"}),Object(h.jsx)("div",{className:"App__bar App__bar--left"}),Object(h.jsx)(T,{initialHomeLoad:t}),Object(h.jsx)(l.a,{component:null,children:Object(h.jsx)(p.a,{timeout:600,classNames:"fade",children:Object(h.jsxs)(c.d,{location:e,children:[Object(h.jsx)(c.b,{exact:!0,path:"/",component:b}),Object(h.jsx)(c.b,{path:"/about",component:N}),Object(h.jsx)(c.b,{path:"/projects",component:C}),Object(h.jsx)(c.b,{path:"/contact",component:I}),Object(h.jsx)(c.b,{path:"/hidden",component:S}),Object(h.jsx)(c.b,{render:function(){return Object(h.jsx)(c.a,{to:"/"})}})]})},e.key)})]})})}var se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(o.a,{children:Object(h.jsx)(ne,{})}),document.getElementById("root")),se()}},[[49,1,2]]]);
//# sourceMappingURL=main.3709d15e.chunk.js.map