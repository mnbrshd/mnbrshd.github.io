// gitprofile.config.js

const config = {
  github: {
    username: 'mnbrshd', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'muneeb-arshad-370233196',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mnbrshd@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C#',
    'C++',
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'FastAPI',
    'SQLAlchemy',
    'MySQL',
    'PostgreSQL',
    'Tensorflow',
    'PyTorch',
    'AWS S3',
    'Jira',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'siParadigm Diagnostic Informatics',
      position: 'AI Developer',
      from: 'January 2019',
      to: 'Present',
      companyLink: 'https://siparadigm.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'National University of Sciences and Technology, Islamabad, Pakistan',
      degree: 'MS Robotics and Intelligent Machine Engineering',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'National University of Sciences and Technology, Islamabad, Pakistan',
      degree: 'BE Mechanical Engineering',
      from: '2014',
      to: '2018',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Travel Advisor',
      description:
        "This is a React application that tells a user about local attractions, hotels and restaurants depending on the user's location. Made using React.js and Firebase DB.",
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://travel-advisor-jsmuneeb.netlify.app',
    },
    {
      title: 'Biorhythm Calculator',
      description:
        "The biorhythm theory is the pseudoscientific idea that our daily lives are significantly affected by rhythmic cycles with periods of exactly 23, 28 and 33 days, typically a 23-day physical cycle, a 28-day emotional cycle, and a 33-day intellectual cycle. Made using React.js, Ionic, Rechart.js and Day.js",
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://munsbiorhythmcalculator.netlify.app',
    },
    {
      title: 'Realm Rush',
      description:
        "I developed a grid-based game where the user strategically placed crossbows on different grids to target enemies moving from one waypoint to another. To add an element of challenge, the path that enemies took was dynamically controlled and updated by the A* Search algorithm. This algorithm ensured that the enemies found the shortest path while avoiding obstacles such as water and trees in the environment, as well as crossbows placed by the user. To optimize the user's experience, the crossbows targeted the enemy closest to them by measuring the Euclidean distance from all enemies. Additionally, I implemented a currency system that limited the user's ability to place crossbows. If an enemy reached its target, the user's currency decreased. However, if a crossbow destroyed the enemy, the user's currency increased, allowing them to purchase more crossbows. To ramp up the game's difficulty, every time an enemy was destroyed, all newly-spawning enemies required more hits to be defeated than the previous ones. This dynamic difficulty scaling provided an additional challenge for the player. If the currency value reached zero, the game would be over and the user would have to start all over again.",
      link: 'https://sharemygame.com/@Deathsmoke94/muneeb-s-realm-rush/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
     class="text-primary"https://github.com/mnbrshd/mnbrshd.github.io"
     target="_blank"
    rel="noreferrer"
  >GitProfile</a> and ❤️`,
};

export default config;
