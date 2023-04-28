import uuidv1 from "uuid/v1";
import images from "../images";
import { currentDay } from "../utility/day";

// HEADER DATA
export const headerData = {
	links: [
		{
			id: uuidv1(),
			name: "home",
			path: "/",
		},
		{
			id: uuidv1(),
			name: "about",
			path: "/about",
		},
		{
			id: uuidv1(),
			name: "projects",
			path: "/projects",
		},
		{
			id: uuidv1(),
			name: "contact",
			path: "/contact",
		},
	],
	images: {
		logo: images.logo,
	},
};

export const titleData = {
	"/": "Duke Nguyen",
	"/about": {
		h1: "About Me",
		bg: "#f1bd00",
	},
	"/projects": {
		h1: "Projects",
		bg: "#902a2a",
	},
	"/contact": {
		h1: "Reach Out",
		bg: "#2879d0",
	},
};

// HOME DATA
export const homeData = {
	headshotPath: "/duke-nguyen-portrait.jpeg",
	paragraphs: [
		"I’m a web developer with one year of experience working at an a16z-backed DeFi startup. I specialize in React-based web apps, but am always open to learning new technologies.",
		"I have a passion for tackling challenging problems in and out of the workplace—the tougher the problem, the more enjoyment I get out of solving it.",
		"I'm currently looking for a job within the NYC area or anywhere within the US remotely. If interested, please visit my Contact page and we can get in touch.",
		`Thanks for checking out my personal site. I hope you have a great ${currentDay()}!`,
	],
	images: {
		portrait: images.portrait,
		nameSvg: images.nameSvg,
	},
};

// ABOUT DATA
export const aboutData = {
	images: {
		paragraphOne: [
			{
				alt: "View of a big rock arch",
				url: images.arches,
			},
			{
				alt: "My point of view from a high climb looking down at climbing partners far below",
				url: images.climbing0,
			},
		],
		paragraphThree: [
			{
				alt: "Childhood's End Vintage Book Cover",
				url: images.childhoodsEnd,
			},
			{
				alt: "Interstellar Movie Poster",
				url: images.interstellar,
			},
		],
	},
	paragraphs: [
		"<div>I have a <span class='emphasize'>background in design</span> (with an emphasis in <span class='emphasize'>architecture</span>) and also in <span class='emphasize'>economics</span>. Since graduating from the <span class='emphasize'>University of California, Berkeley</span>, I worked as a <span class='emphasize'>data analyst</span> for a biopharmaceutical start up in <span class='emphasize'>Emeryville, California</span> for two years before leaving to join <span class='emphasize'>App Academy</span>. Currently, I'm looking to pivot into <span class='emphasize'>web development</span> and pursue my <span class='emphasize'>passion for coding</span>.</div>",
		'<div>When I’m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors. I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold for that, you can find me on the slopes <span class="emphasize">shredding powder</span> instead (greens/blues, not that good yet).</div>',
		'<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG’s like <span class="emphasize">Final Fantasy 9, Xenogears and Chrono Trigger</span>.  I’m a <span class="emphasize">huge jazz fan</span>, but will listen to anything that sounds good.</div>',
		'<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there in terms of movies for me. <span class="emphasize">Arthur C. Clarke</span>\'s novel, <span class="emphasize">Childhood\'s End</span>, is one of my favorite books. I like sci-fi if you couldn’t already tell.</div>',
	],
};

// PROJECTS DATA
export const projectsData = {
	projects: [
		{
			id: uuidv1(),
			title: "notAirbnb",
			paragraphs: [
				"A creatively named fullstack project that replicates Airbnb's website",
				"The front-end is built using React, while the back-end is built with Apollo, PostgreSQL, and with a GraphQL API. In addition, the project is compiled from TypeScript",
			],
			url: "https://not-airbnb.netlify.app/",
			repo: "https://github.com/hnguyen1179/notAirbnb",
			images: {
				mp4: images.notAirbnbMp4,
				webm: images.notAirbnbWebm,
			},
		},
		{
			id: uuidv1(),
			title: "React Colors",
			paragraphs: [
				"A web application that enables users to create custom color palettes to help jumpstart their design process",
				"This project utilizes React and SCSS in order to create a fully responsive, intuitive UI based on neumorphic design principles",
			],
			url: "https://hnguyen1179.github.io/React-Colors/",
			repo: "https://github.com/hnguyen1179/React-Colors",
			images: {
				mp4: images.rcMp4,
				webm: images.rcWebm,
			},
		},
		{
			id: uuidv1(),
			title: "Chimp Casino",
			paragraphs: [
				"An online video game that implements the MERN stack",
				"In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you're able to play poker, blackjack, and slots with other chimp players",
			],
			url: "http://chimp-casino.herokuapp.com/#/",
			repo: "https://github.com/samisherif95/Chimp-Casino",
			images: {
				mp4: images.monkeMp4,
				webm: images.monkeWebm,
			},
		},
		{
			id: uuidv1(),
			title: "Sevilla En Un Dia",
			paragraphs: [
				"The result of my postponed trip to Seville, Spain due to COVID-19",
				"As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API",
			],
			url: "https://travel-seville.netlify.app/",
			repo: "https://github.com/hnguyen1179/travelSeville",
			images: {
				mp4: images.sevilleMp4,
				webm: images.sevilleWebm,
			},
		},
		{
			id: uuidv1(),
			title: "Cellular Automata",
			paragraphs: [
				'Cellular automata (plural) are discrete, abstract computational systems that are useful in helping simulate general models of "complex systems", such as forest fires, traffic, and urbawn sprawl',
				"This passion project, which utilizes plain JS, HTML and CSS along the d3.js library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale",
			],
			url: "https://hnguyen1179.github.io/cellular-automata/",
			repo: "https://github.com/hnguyen1179/cellular-automata",
			images: {
				mp4: images.cellMp4,
				webm: images.cellWebm,
			},
		},
	],
};

// CONTACT DATA
export const contactData = {
	cta1: "You can reach my email at",
	email: "hnguyen1179@berkeley.edu",
	cta2: "and we can set something up!",
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: uuidv1(),
			name: "resume",
			nameProper: "Resume",
			url: images.resume,
			brand: false,
		},
		{
			id: uuidv1(),
			name: "linkedin",
			nameProper: "LinkedIn",
			url: "https://www.linkedin.com/in/nguyenduke/",
			brand: true,
		},
		{
			id: uuidv1(),
			name: "github",
			nameProper: "GitHub",
			url: "https://github.com/hnguyen1179",
			brand: true,
		},
		{
			id: uuidv1(),
			name: "spotify",
			nameProper: "Spotify",
			url: "https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA",
			brand: true,
		},
	],
};
