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
        "I’m a frontend developer based out of the San Francisco Bay Area. I specialize in React based web applications, but am always open to learn new technologies.", 
        "I have a passion for tackling challenging problems in and out of the workplace—the tougher the problem, the more enjoyment I get out of solving it.",
        "I'm currently looking for a job within the Bay Area or anywhere within the US, remotely. If interested, please visit my Contact page and we can get in touch.",
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
        '<div>When I’m not <span class="emphasize">coding</span>, you can catch me adventuring in the outdoors. I enjoy <span class="emphasize">rock climbing, hiking and camping</span>. When it gets too cold, you can find me on the slopes <span class="emphasize">shredding powder</span> (greens/blues, not that good yet).</div>',
        '<div>Outside of being outside, I enjoy <span class="emphasize">playing video games, listening to music and watching movies</span>. Some of my favorite games include classic JRPG’s like <span class="emphasize">Final Fantasy 9 and Xenogears</span>.  I’m a huge jazz fan, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include … (checks notes) <span class="emphasize">{artists}</span>.</div>',
        '<div>I love a good Nolan film, <span class="emphasize">Interstellar</span> being one of my all time favorites. <span class="emphasize">Gattaca</span> is also up there in terms of movies for me. <span class="emphasize">Arthur C. Clarke</span>\'s novel, <span class="emphasize">Childhood\'s End</span>, is one of my favorite books. I like sci-fi if you couldn’t already tell.</div>',
    ],
};

// PROJECTS DATA
export const projectsData = {
    projects: [
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
                'Journey to the edge of entropy and order in this project that explores the concept of "complex" systems',
                "This project, which utilizes plain JS, HTML and CSS along the d3 library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale",
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
