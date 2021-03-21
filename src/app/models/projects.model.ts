const projects: any = [
  {
    _id: 0,
    content: {
      src: './../../../assets/apps/le_patrika.jpg',
      type: 'img',
    },
    name: 'Le Patrika',
    projectType: 'app',
    desc: 'Le Patrika is a beautifully simple, free todo list and journal app.',
    techStack: 'React Native, Realm',
    projLinks: [
      { type: 'github', src: 'https://github.com/rameessahlu/le-patrika' },
    ],
  },

  {
    _id: 1,
    content: {
      src: 'https://www.youtube.com/embed/WaDEVpQwrqA',
      type: 'vid',
    },
    name: 'Pet Droplets',
    projectType: 'game',
    techStack: 'C#, Unity Engine',
    desc:
      'A casual game developed for the mobile platform as part of a contribution to National Immunization Awareness Month (NIAM). The game intends to create awareness among children on the importance of vaccines and how it protects against serious life-threatening disease. ',
    projLinks: [
      {
        type: 'playstore',
        src:
          'https://play.google.com/store/apps/details?id=com.diloopstudios.DisinfectantTunnelForPets',
      },
    ],
  },
  {
    _id: 2,
    content: {
      src: './../../../assets/apps/cbse.png',
      type: 'img',
    },
    name: 'Context based Search Engine',
    projectType: 'web',
    desc:
      ' A context based search engine which can accept query from user and search the document of all types from a shared location and provide the closest description with highest matching values',
    techStack: 'Python flask, ElasticSearch, CSS',
    projLinks: [
      {
        type: 'github',
        src: 'https://github.com/rameessahlu/ContextualSearchEngine',
      },
    ],
  },
  {
    _id: 3,
    content: {
      src: './../../../assets/apps/tax_block.png',
      type: 'img',
    },
    name: 'Loan Management System',
    projectType: 'web',
    desc:
      'A simple loan management web application. It allows users to signup, login, create and view a list of loans. Created as a part of a recruitment process and data are are not persisted.',
    techStack: 'React, react-mdl, Redux',
    projLinks: [
      {
        type: 'github',
        src: 'https://github.com/rameessahlu/me',
      },
      {
        type: 'website',
        src: 'https://xenodochial-knuth-9c81b0.netlify.app',
      },
    ],
  },
];

const nameToIco: any = {
  playstore: ['fa fa-play', 'Play Store'],
  github: ['fa fa-github-square', 'Git Hub'],
  website: ['fa fa-external-link-square', 'DEMO'],
};

export var Projects = projects,
  NameToIconMapping = nameToIco;
