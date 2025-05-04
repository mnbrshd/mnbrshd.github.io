// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mnbrshd', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mnbrshd/NLPFireApp', 'mnbrshd/FaceMeshStreamLit', 'mnbrshd/zero-shot-rust', 'mnbrshd/PoseEstimation', 'mnbrshd/hugginface-fastapi', 'mnbrshd/GoogleStocksApp'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Travel Advisor',
          description:
            'This is a React application that tells a user about local attractions, hotels, and restaurants depending on the user location. Made using React.js and Firebase DB.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://travel-advisor-jsmuneeb.netlify.app',
        },
        {
          title: 'Realm Rush',
          description:
            'I designed a grid-based game where players place crossbows to stop enemies moving between waypoints. The A* Search algorithm controls enemy paths and crossbows target the closest enemy. A currency system limits crossbow placement, with currency decreasing if an enemy reaches its target and increasing when a crossbow defeats an enemy. The game gets progressively harder as new enemies require more hits to defeat, and running out of currency leads to a game over. Made using Unity and C#.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://sharemygame.com/@Deathsmoke94/muneeb-s-realm-rush/',
        },
        {
          title: 'Simple Question Answering App',
          description:
            'This is a simple LLM-based application that finds a similar word from a Vector Store. It was created and deployed using LangChain, FAISS Vector Store, Streamlit and HuggingFace',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://huggingface.co/spaces/mnbrshd/VectorSimilarityFind',
        },
        {
          title: 'Talkie Boi App',
          description:
            'This is a simple LLM-based chat application that behaves like a talkative 5 year old kid. It was created and deployed using LangChain, Streamlit and HuggingFace',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://huggingface.co/spaces/mnbrshd/ChatModelApp',
        },
        {
          title: 'Google Stock Visualization App',
          description:
            'This is a simple Python web application to visualize Google Stocks Closing Price and Volume Price. Created and deployed using Streamlit and YFinance.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://mnbrshd-stockapp.streamlit.app',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Muneeb Arshad',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'muneeb-arshad-370233196',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
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
      'https://docs.google.com/document/d/1Mt-SaehKY7SjHpAaCH2_nhfcsQHpkW2m1UkLafKaJDQ/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Langchain',
    'Streamlit',
    'Gradio',
    'FastAPI',
    'Jinja',
    'OAuth',
    'JWT',
    'SQL',
    'Tensorflow',
    'PyTorch',
    'AWS',
    'Jira',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'siParadigm Diagnostic Informatics',
      position: 'Senior AI Developer',
      from: 'January 2025',
      to: 'April 2025',
      companyLink: 'https://siparadigm.com',
    },
    {
      company: 'siParadigm Diagnostic Informatics',
      position: 'AI Developer II',
      from: 'January 2022',
      to: 'January 2025',
      companyLink: 'https://siparadigm.com',
    },
    {
      company: 'siParadigm Diagnostic Informatics',
      position: 'AI Developer',
      from: 'July 2019',
      to: 'January 2022',
      companyLink: 'https://siparadigm.com',
    },
  ],
  certifications: [
    {
      name: 'MLOps Specialization',
      body: 'Duke University',
      year: 'Feb 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/7UWTS3BASXB9'
    },
    {
      name: 'Introduction to Cloud Computing',
      body: 'IBM',
      year: 'Jan 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/UNV2TVB6R6Q6'
    },
    {
      name: 'FastAPI - The Complete Course 2023(Beginner + Advanced)',
      body: 'Udemy',
      year: 'Nov 2023',
      link: 'https://www.udemy.com/certificate/UC-4d3a7dfb-6dc8-4536-b243-29cfb0d4e7ae/'
    },
    {
      name: 'Software Engineer Core Skillset',
      body: 'Workera.ai',
      year: 'Oct 2023',
      link: 'https://app.workera.ai/public/candidate/certificate?code=0PWHUHW3'
    },
    {
      name: 'Data Engineer Core Skillset',
      body: 'Workera.ai',
      year: 'Oct 2023',
      link: 'https://app.workera.ai/public/candidate/certificate?code=9IWHC0PX'
    },
    {
      name: 'MLOps: ML Model Deployment + AWS Sagemaker, GCP, Apple Cases',
      body: 'Udemy',
      year: 'June 2023',
      link: 'https://www.udemy.com/certificate/UC-45fa8654-74ce-4771-931f-534afe853501/'
    },
    {
      name: 'Computer Vision for Data Scientists Skillset',
      body: 'Workera.ai',
      year: 'April 2023',
      link: 'https://app.workera.ai/public/candidate/certificate?code=PKW2C3LK'
    },
    {
      name: 'Modern Computer Vision PyTorch, Tensorflow2 Keras & OpenCV4',
      body: 'Udemy',
      year: 'February 2023',
      link: 'https://www.udemy.com/certificate/UC-06cac7f1-b10f-4087-b3af-6eacfcf93050/'
    },
    {
      name: 'Agile with Atlassian Jira',
      body: 'Coursera',
      year: 'December 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/MH6UBCT4QMC5/'
    },
    {
      name: 'Complete C# Unity Game Developer 3D',
      body: 'Udemy',
      year: 'November 2022',
      link: 'https://www.udemy.com/certificate/UC-05d0eb27-934d-43ef-9713-1c51ea322fe9/'
    },
    {
      name: 'Learn Unity Shaders from Scratch',
      body: 'Udemy',
      year: 'November 2022',
      link: 'https://www.udemy.com/certificate/UC-b0d8bde5-7638-4e37-8e93-978c7c1e742b/'
    },
    {
      name: 'Frontend Engineer Career Path',
      body: 'Codecademy',
      year: 'February 2022',
      link: 'https://www.codecademy.com/profiles/muneebArshad5141444067/certificates/5f85dd867b67b60014ac9ea3'
    },
  ], 
  education: [
    {
      institution: 'National University of Sciences and Technology, Islamabad, Pakistan',
      degree: 'MS Robotics and Artificial Intelligence',
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
  publications: [
    {
      title: 'Stain Normalization of Hematology Slides using Neural Color Transfer',
      conferenceName: '',
      journalName: 'arxiv',
      authors: 'M. Muneeb Arshad, Hasan Sajid, M. Jawad Khan',
      link: 'https://arxiv.org/abs/2409.06742',
      description:
        "Deep learning is popularly used for analyzing pathology images, but variations in image properties can limit the effectiveness of the models. The study aims to develop a method that transfers the variability present in the training set to unseen images, improving the model's ability to make accurate inferences. YOLOv5 was trained on peripheral blood and bone marrow sample images and Neural Color Transfer techniques were used to incorporate invariance. The results showed significant improvement in detecting WBCs from untrained samples after normalization, highlighting the potential of deep learning-based normalization techniques for inference robustness.",
    },

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
