(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),r=t(15),i=t.n(r),o=t(10),c=t(2),l=t(46),p=t(45),m=s.a.createContext(),h=t(0);function u(){var e=Object(n.useContext)(m).footerData.networks.map((function(e){return Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("div",{className:"Footer__icon Footer__icon--".concat(e.name),children:e.nameProper})},e.id)}));return Object(h.jsx)("footer",{className:"Footer",children:Object(h.jsx)("div",{className:"Footer__link-container",children:e})})}function d(){var e=Object(n.useContext)(m).homeData;return Object(h.jsxs)("div",{className:"Home page",children:[Object(h.jsx)("div",{className:"Home__title",children:Object(h.jsxs)("div",{className:"Home__title__container",children:[Object(h.jsx)("img",{draggable:!1,className:"svg",alt:"Duke Nguyen",src:e.images.nameSvg}),Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:e.images.portrait,alt:"Duke Nguyen Portrait"})})]})}),Object(h.jsxs)("main",{className:"Home__main page__content",children:[Object(h.jsx)("h1",{style:{display:"none"},children:"Duke Nguyen"}),Object(h.jsx)("section",{children:e.paragraphs.map((function(e){return Object(h.jsx)("p",{className:"Home__main__paragraph",children:e},e[5])}))})]}),Object(h.jsx)(u,{})]})}var b=t(7),j=t.n(b),g=t(11),f=t(17);function v(e){var a=Object(c.g)(),t=Object(n.useContext)(m).titleData,s={color:t[a.pathname].bg};return Object(h.jsx)("div",{className:"Title",children:Object(h.jsx)("h1",{style:s,children:t[a.pathname].h1})})}var _=t(25),O=t.n(_),x="Basic "+btoa("6dc7fe135b2340f7a529b2973d596f5b:1b5d5839c9e743ec829e78183d62dcde"),y=function(e){var a=function(){var a=Object(g.a)(j.a.mark((function a(){var t,n,s,r,i,o;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getAccessToken();case 2:return t=a.sent,n=t.access_token,a.next=6,e.getTopTracks(n);case 6:return s=a.sent,r=s.items,a.next=10,e.getTopArtists(n);case 10:return i=a.sent,o=i.items,a.abrupt("return",[r,o]);case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return{getData:function(){return a()}}}(function(){var e=function(){var e=Object(g.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:x,"Content-Type":"application/x-www-form-urlencoded"},body:O.a.stringify({grant_type:"refresh_token",refresh_token:"AQAChBI10bUAsrc1SGH0nnYeHXiLCAOjFuyCaS7WZk8AuRp05qQt2jWKqMymMkVZ0a89HA8PWfonE2GctdV-b271kCIXzPm55bDc_ZNZhVuEwJd1B9vu4fq7dlO5kx_NPdA"})});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(g.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50",{headers:{Authorization:"Bearer ".concat(a)}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t=function(){var e=Object(g.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=4",{headers:{Authorization:"Bearer ".concat(a)}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return{getAccessToken:function(){return e()},getTopTracks:function(e){return a(e)},getTopArtists:function(e){return t(e)}}}());function k(){var e=Object(n.useContext)(m).aboutData,a=Object(n.useState)("uhhhhh"),t=Object(f.a)(a,2),s=t[0],r=t[1],i=Object(n.useState)([]),o=Object(f.a)(i,2),c=o[0],l=o[1];Object(n.useEffect)((function(){try{(function(){var e=Object(g.a)(j.a.mark((function e(){var a,t,n,s,i,o,c,p,m;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getData();case 2:for(a=e.sent,t=Object(f.a)(a,2),n=t[0],s=t[1],(i=s.map((function(e){return e.name})))[3]="and "+i[3]+".",o=i.join(", "),r(o),c=[],p=0;p<4;p++)m=Math.floor(50*Math.random()),c.push(n[m]);l(c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){r("uhhh, I can't think right now. (My code's erroring out! I'll fix this soon)")}}),[]);var p=e.images.paragraphOne.map((function(e){return Object(h.jsx)("img",{src:e.url,alt:e.alt},e.alt)})),d=c.map((function(e){return Object(h.jsx)("a",{href:e.external_urls.spotify,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:e.album.images[0].url,alt:"".concat(e.album.name,"'s Album Cover")})},e.album.name)})),b=e.images.paragraphThree.map((function(e){return Object(h.jsx)("img",{src:e.url,alt:e.alt},e.alt)}));return Object(h.jsxs)("div",{className:"About page",children:[Object(h.jsx)(v,{}),Object(h.jsx)("main",{className:"About__main page__content",children:Object(h.jsx)("section",{className:"About__main__paragraphs",children:e.paragraphs.map((function(e,a){return Object(h.jsxs)("div",{className:"About__main__paragraphs__content About__main__paragraphs__content--".concat(a),children:[Object(h.jsx)("p",{className:"About__main__paragraphs__content__paragraph About__main__paragraphs__content__paragraph--".concat(a),dangerouslySetInnerHTML:{__html:e.replace(/\{artists\}/,s)}},e.length),Object(h.jsxs)("div",{className:"About__main__paragraphs__content__media About__main__paragraphs__content__media--".concat(a),children:[1===a?p:null,2===a?d:null,3===a?b:null]})]},a)}))})}),Object(h.jsx)(u,{})]})}function w(e){var a=e.data,t=a.title,n=a.paragraphs,s=a.url,r=a.repo,i=a.images;return Object(h.jsxs)("div",{className:"Project",children:[Object(h.jsx)("h1",{className:"Project__title",children:Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:t})}),Object(h.jsx)("section",{className:"Project__paragraphs",children:n.map((function(e){return Object(h.jsx)("p",{children:e},e.length)}))}),Object(h.jsxs)("video",{className:"Project__video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(h.jsx)("source",{src:i.webm,type:"video/webm"}),Object(h.jsx)("source",{src:i.mp4,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(h.jsxs)("div",{className:"Project__links",children:[Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"Live"}),Object(h.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:"Repo"})]})]})}function N(){var e=Object(n.useContext)(m).projectsData.projects.map((function(e){return Object(h.jsx)(w,{data:e},e.id)}));return Object(h.jsxs)("div",{className:"Projects page",children:[Object(h.jsx)(v,{}),Object(h.jsx)("main",{className:"Projects__main page__content",children:e}),Object(h.jsx)(u,{})]})}function C(){var e=Object(n.useContext)(m).contactData;return Object(h.jsxs)("div",{className:"Contact page",children:[Object(h.jsx)(v,{}),Object(h.jsx)("main",{className:"Contact__main page__content",children:Object(h.jsxs)("h1",{className:"Contact__main__cta",children:[e.cta1," ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email}),Object(h.jsx)("br",{})," ",e.cta2]})}),Object(h.jsx)(u,{})]})}function A(){return Object(h.jsx)("div",{className:"Hidden page",children:Object(h.jsxs)("main",{className:"Hidden__main page__content",children:[Object(h.jsx)("h1",{children:"woah, you found the hidden page"}),Object(h.jsx)("h2",{children:"i need to actually think of something to put here"}),Object(h.jsx)("h3",{children:"but thanks for visiting. Check back another time!"})]})})}function I(e){var a=e.showNav,t=e.handleOpenNavigation;return Object(h.jsxs)("div",{className:"Hamburger ".concat(a&&"show"),onClick:t,children:[Object(h.jsx)("span",{className:"Hamburger__lineOne"}),Object(h.jsx)("span",{className:"Hamburger__lineTwo"})]})}function S(e){var a=e.headerData,t=Object(n.useState)(!1),s=Object(f.a)(t,2),r=s[0],i=s[1],c=function(e){e.stopPropagation()},l=function(e){e.stopPropagation(),window.scrollTo({top:0,behavior:"smooth"})},p=function(e){var a=new Event("closeNavigation");window.dispatchEvent(a)},m=function(e){i(!1)};Object(n.useEffect)((function(){return window.addEventListener("closeNavigation",m),document.body.addEventListener("click",p),function(){window.removeEventListener("closeNavigation",m),document.body.removeEventListener("click",p)}}),[]);var u=a.links.map((function(e){return Object(h.jsx)(o.b,{exact:!0,to:e.path,className:"link",activeClassName:"activeLink",onClick:l,children:e.name[0].toUpperCase()+e.name.slice(1)},e.id)}));return Object(h.jsxs)("div",{className:"Header__navigation",children:[Object(h.jsx)("nav",{className:"Header__navigation__links ".concat(r&&"show"),onClick:c,children:Object(h.jsx)("div",{className:"overflow-container",children:u})}),Object(h.jsx)("nav",{className:"Header__navigation__links--sidebar ".concat(r&&"show"),onClick:c,children:Object(h.jsx)("div",{className:"Header__navigation__links--sidebar__container",children:u})}),Object(h.jsx)(I,{showNav:r,handleOpenNavigation:function(e){e.stopPropagation(),i(!r)}})]})}function D(){var e=Object(n.useContext)(m).headerData;return Object(h.jsxs)("header",{className:"Header",children:[Object(h.jsx)(o.b,{exact:!0,to:"/",activeClassName:"activeLink",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("img",{className:"Header__logo",src:e.images.logo,alt:"portfolio site logo"})}),Object(h.jsx)(S,{headerData:e})]})}var P=t(6),T=t.n(P),z=t.p+"static/media/qr-code.d6705753.svg",H=t.p+"static/media/DukeNguyen.d57df107.svg",M=t.p+"static/media/duke-nguyen-portrait.325f7c8a.jpeg",E=t.p+"static/media/duke-nguyen-resume.18656d30.pdf",L=t.p+"static/media/react-colors.751f3ca9.mp4",W=t.p+"static/media/react-colors.2e1379e8.webm",F=t.p+"static/media/01.bb66e0a7.mp4",R=t.p+"static/media/01.02b30523.webm",B=t.p+"static/media/02.f951a7be.mp4",G=t.p+"static/media/02.d5f260d8.webm",U={logo:z,nameSvg:H,sevilleMp4:t.p+"static/media/03.5658a162.mp4",monkeMp4:B,cellMp4:F,rcMp4:L,sevilleWebm:t.p+"static/media/03.df4a2438.webm",monkeWebm:G,cellWebm:R,rcWebm:W,portrait:M,resume:E,climbing0:t.p+"static/media/climbing-1.4bc9032f.webp",arches:t.p+"static/media/arches.22b9218d.webp",interstellar:t.p+"static/media/interstellar.a4ed45b4.webp",childhoodsEnd:t.p+"static/media/childhoods-end.6b0d28ce.webp"},V=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],q={links:[{id:T()(),name:"home",path:"/"},{id:T()(),name:"about",path:"/about"},{id:T()(),name:"projects",path:"/projects"},{id:T()(),name:"contact",path:"/contact"}],images:{logo:U.logo}},J={"/":"Duke Nguyen","/about":{h1:"About Me",bg:"#f1bd00"},"/projects":{h1:"Projects",bg:"#902a2a"},"/contact":{h1:"Reach Out",bg:"#2879d0"}},Z={headshotPath:"/duke-nguyen-portrait.jpeg",paragraphs:["I\u2019m a frontend developer based out of the San Francisco Bay Area. I specialize in React based web applications, but am always open to learn new technologies.","I have a passion for tackling challenging problems in and out of the workplace\u2014the tougher the problem, the more enjoyment I get out of solving it.","I'm currently looking for a job within the Bay Area or anywhere within the US, remotely. If interested, please visit my Contact page and we can get in touch.","Thanks for checking out my personal site. I hope you have a great ".concat(function(){var e,a=new Date,t=a.getHours();return e=t<=12?"morning":t<=18?"afternoon":"night",V[a.getDay()]+" "+e}(),"!")],images:{portrait:U.portrait,nameSvg:U.nameSvg}},Q={images:{paragraphOne:[{alt:"View of a big rock arch",url:U.arches},{alt:"My point of view from a high climb looking down at climbing partners far below",url:U.climbing0}],paragraphThree:[{alt:"Childhood's End Vintage Book Cover",url:U.childhoodsEnd},{alt:"Interstellar Movie Poster",url:U.interstellar}]},paragraphs:["<div>I have a <span class='emphasize'>background in design</span> (with an emphasis in <span class='emphasize'>architecture</span>) and also in <span class='emphasize'>economics</span>! Since graduating from the <span class='emphasize'>University of California, Berkeley</span>, I've worked as a <span class='emphasize'>data analyst</span> for a biopharmaceutical start up in <span class='emphasize'>Emeryville, California</span> for two years. Currently, I'm looking to pivot into <span class='emphasize'>front end web development</span> and pursue of life's <span class='emphasize'>passion for code</span>.</div>",'<div>When I\u2019m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors. I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold, you can find me on the slopes <span class="emphasize">shredding powder</span> (greens/blues, not that good yet).</div>','<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG\u2019s like <span class="emphasize">Final Fantasy 9, Xenogears and Chrono Trigger</span>.  I\u2019m a <span class="emphasize">huge jazz fan</span>, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include \u2026 (checks notes) <span class="emphasize">{artists}</span> Listed below are the albums covers of some of my favorite songs, you can click on them to give them a listen. </div>','<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there in terms of movies for me. <span class="emphasize">Arthur C. Clarke</span>\'s novel, <span class="emphasize">Childhood\'s End</span>, is one of my favorite books. I like sci-fi if you couldn\u2019t already tell.</div>']},X={projects:[{id:T()(),title:"React Colors",paragraphs:["A web application that enables users to create custom color palettes to help jumpstart their design process","This project utilizes React and SCSS in order to create a fully responsive, intuitive UI based on neumorphic design principles"],url:"https://hnguyen1179.github.io/React-Colors/",repo:"https://github.com/hnguyen1179/React-Colors",images:{mp4:U.rcMp4,webm:U.rcWebm}},{id:T()(),title:"Chimp Casino",paragraphs:["An online video game that implements the MERN stack","In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you're able to play poker, blackjack, and slots with other chimp players"],url:"http://chimp-casino.herokuapp.com/#/",repo:"https://github.com/samisherif95/Chimp-Casino",images:{mp4:U.monkeMp4,webm:U.monkeWebm}},{id:T()(),title:"Sevilla En Un Dia",paragraphs:["The result of my postponed trip to Seville, Spain due to COVID-19","As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API"],url:"https://travel-seville.netlify.app/",repo:"https://github.com/hnguyen1179/travelSeville",images:{mp4:U.sevilleMp4,webm:U.sevilleWebm}},{id:T()(),title:"Cellular Automata",paragraphs:['Cellular automata (plural) are discrete, abstract computational systems that are useful in helping simulate general models of "complex systems", such as forest fires, traffic, and urbawn sprawl',"This passion project, which utilizes plain JS, HTML and CSS along the d3.js library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale"],url:"https://hnguyen1179.github.io/cellular-automata/",repo:"https://github.com/hnguyen1179/cellular-automata",images:{mp4:U.cellMp4,webm:U.cellWebm}}]},Y={cta1:"You can reach my email at",email:"hnguyen1179@berkeley.edu",cta2:"and we can set something up!"},K={networks:[{id:T()(),name:"resume",nameProper:"Resume",url:U.resume,brand:!1},{id:T()(),name:"linkedin",nameProper:"LinkedIn",url:"https://www.linkedin.com/in/nguyenduke/",brand:!0},{id:T()(),name:"github",nameProper:"GitHub",url:"https://github.com/hnguyen1179",brand:!0},{id:T()(),name:"spotify",nameProper:"Spotify",url:"https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA",brand:!0}]};t(42);function $(){var e=Object(c.g)();return Object(h.jsx)(m.Provider,{value:{headerData:q,titleData:J,homeData:Z,aboutData:Q,projectsData:X,contactData:Y,footerData:K},children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"App__bar App__bar--top"}),Object(h.jsx)("div",{className:"App__bar App__bar--bottom"}),Object(h.jsx)("div",{className:"App__bar App__bar--left"}),Object(h.jsx)(D,{}),Object(h.jsx)(l.a,{component:null,children:Object(h.jsx)(p.a,{timeout:600,classNames:"fade",children:Object(h.jsxs)(c.d,{location:e,children:[Object(h.jsx)(c.b,{exact:!0,path:"/",component:d}),Object(h.jsx)(c.b,{path:"/about",component:k}),Object(h.jsx)(c.b,{path:"/projects",component:N}),Object(h.jsx)(c.b,{path:"/contact",component:C}),Object(h.jsx)(c.b,{path:"/hidden",component:A}),Object(h.jsx)(c.b,{render:function(){return Object(h.jsx)(c.a,{to:"/"})}})]})},e.key)})]})})}var ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(o.a,{children:Object(h.jsx)($,{})}),document.getElementById("root")),ee()}},[[43,1,2]]]);
//# sourceMappingURL=main.07c8d1c8.chunk.js.map