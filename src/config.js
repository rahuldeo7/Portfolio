module.exports = {
  siteTitle: 'Rahul Deo',
  siteDescription:
    'Rahul Deo is a passionate data scientist skilled in Python, machine learning, and data visualization, with a portfolio of impactful projects that turn complex data into actionable insights.',
  siteKeywords:
    'Rahul Deo, Rahul, Deo, rahuldeo, software engineer, data scientist, , python',
  siteUrl: 'https://yashitanamdeo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rahul Deo',
  location: 'Chennai, India',
  email: 'rxd220044@utdallas.edu',
  github: 'https://github.com/rahuldeo7',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rahuldeo7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rahuldeo7/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/yashitanamdeo',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rahul._.deo/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Rahul_Deo_',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

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
