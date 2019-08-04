module.exports = {
  siteTitle: '_underscore | we underscore',
  siteDescription: 'underscore',
  siteKeywords: 'underscore, eunchurn',
  siteUrl: 'https://studio-underscore.com',
  siteLanguage: 'en_US',

  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: '_underscore',
  location: 'Seoul',
  email: 'we.underscore@gmail.com',
  github: 'https://github.com/we-underscore/',
  socialMedia: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/____________underscore/',
    },
    {
      name: 'Vimeo',
      url: 'https://vimeo.com/eunchurn',
    },
    {
      name: 'Github',
      url: 'https://github.com/we-underscore/',
    },
  ],

  navLinks: [
    {
      name: 'about',
      url: '#about',
    },
    {
      name: 'works',
      url: '#projects',
    },
    {
      name: 'more',
      url: '#more',
    },
    {
      name: 'contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@eunchurn',
  // googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
