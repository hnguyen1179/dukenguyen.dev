import uuidv1 from 'uuid/v1';
import images from '../images'
import { currentDay } from '../utility/day';

// HEADER DATA
export const headerData = {
  links: [
    {
      id: uuidv1(),
      name: 'home',
      path: '/'
    },
    {
      id: uuidv1(),
      name: 'about',
      path: '/about'
    },
    {
      id: uuidv1(),
      name: 'projects',
      path: '/projects'
    },
    {
      id: uuidv1(),
      name: 'contact',
      path: '/contact'
    }, 
  ],
  images: {
    logo: images.logo,
  }
}

export const titleData = {
  '/': 'Duke Nguyen',
  '/about': {
    h1: 'About Me',
    bg: '#f1bd00',
  },
  '/projects': {
    h1: 'Projects',
    bg: '#902a2a',
  },
  '/contact': {
    h1: 'Reach Out',
    bg: '#2879d0',
  }
}

// HOME DATA
export const homeData = {
  headshotPath: '/duke-nguyen-portrait.jpeg',  
  paragraphs: [
    'I’m a frontend developer based out of the San Francisco Bay Area.', 
    'I have a passion for tackling and solving challenging problems in and out of the workplace—the tougher the problem, the better.',
    `Thanks for checking out my personal site. I hope you have a great ${currentDay()}!`
  ],
  images: {
    portrait: images.portrait,
    nameSvg: images.nameSvg
  }
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot-joe.png',
  paragraphs: [
    '<div>When I’m not <span class=\"emphasize\">coding<\/span>, you can catch me adventuring in the outdoors! I enjoy <span class=\"emphasize\">rock climbing, hiking and camping<\/span>. When it gets too cold, you can find me on the slopes <span class=\"emphasize\">shredding powder<\/span> (greens/blues, not that good yet).<\/div>',
    '<div>Outside of being outside, I enjoy <span class=\"emphasize\">playing video games, listening to music and watching movies<\/span>. Some of my favorite games include classic JRPG’s like <span class=\"emphasize\">Final Fantasy 9 and Xenogears<\/span>.  I’m a huge jazz fan, but will listen to anything that sounds good. I have too many favorite artists to name, but a few people I have been listening to recently include … (check notes) <span class=\"emphasize\">Sasami, Pharaoh Sanders and MF DOOM<\/span>.<\/div>', 
    '<div>I love a good Nolan film, <span class=\"emphasize\">Interstellar<\/span> being one of my all time favorites. <span class=\"emphasize\">Gattaca<\/span> is also up there for movies for me. <span class=\"emphasize\">Childhood\'s End<\/span> is a sci-fi novel favorite of mine. I’m a huge sci fi nerd if you couldn’t already tell.<\/div>'
  ]
};

// PROJECTS DATA
export const projectsData = {
  projects: [
    {
      id: uuidv1(),
      title: 'Cellular Automata',
      paragraphs: [
        'Journey to the edge of entropy and order in this project that explores the concept of "complex" systems',
        'This project, which utilizes plain JS, HTML and CSS along the d3 library, is a visual journal that describes the duality of how simple these systems can be on a micro scale and, conversely, how intricate they can be within a macro scale',
      ],
      url: 'https://hnguyen1179.github.io/cellular-automata/',
      repo: 'https://github.com/hnguyen1179/cellular-automata',
      images: {
        mp4: images.cellMp4,
        webm: images.cellWebm,
      },
    },
    {
      id: uuidv1(),
      title: 'Chimp Casino',
      paragraphs: [
        'An online video game that implements the MERN stack', 
        'In this project, myself and three other friends created an online multiplayer game where you can play as chimp wandering a casino floor. In it, you\'re able to play poker, blackjack, and slots with other chimp players',
      ],
      url: 'http://chimp-casino.herokuapp.com/#/',
      repo: 'https://github.com/samisherif95/Chimp-Casino', 
      images: {
        mp4: images.monkeMp4,
        webm: images.monkeWebm,
      },
    },
    {
      id: uuidv1(),
      title: 'Sevilla En Un Dia',
      paragraphs: [
        'The result of my postponed trip to Seville, Spain due to COVID-19',
        'As a result of the stay at home order, I thought to bring Seville to me instead! This project was built entirely on Gatsby with animations done via the react-transition-group and GSAP library using either keyframes or CSS transitions. In addition, this project implements a custom routefinding algorithm along with the use of the Google Maps API',
      ],
      url: 'https://travel-seville.netlify.app/',
      repo: 'https://github.com/hnguyen1179/travelSeville',
      images: {
        mp4: images.sevilleMp4,
        webm: images.sevilleWebm,
      },
    }
  ],
}

// CONTACT DATA
export const contactData = {
  cta1: 'You can reach my email at',  
  email: 'hnguyen1179@berkeley.edu',
  cta2: 'and we can set something up!'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'resume',
      nameProper: 'Resume',
      url: images.resume,
      brand: false
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      nameProper: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nguyenduke/',
      brand: true
    },
    {
      id: uuidv1(),
      name: 'github',
      nameProper: 'Github',
      url: 'https://github.com/hnguyen1179',
      brand: true
    },
    {
      id: uuidv1(),
      name: 'spotify',
      nameProper: 'Spotify',
      url: 'https://open.spotify.com/user/duke603kid?si=c3dtOklqRhGcQc0ITDmwAA',
      brand: true
    },
  ],
};