// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Anthony',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Bonjour!',
  greetingAfternoon: 'Bonjour,',
  greetingEvening: 'Bonsoir,',
  greetingNight: 'Va dormir!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'fr', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'GitLab',
      icon: 'gitlab',
      link: 'https://gitlab.com/',
    },
    {
      id: '3',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '4',
      name: 'ENT',
      icon: 'book',
      link: 'http://ent.univ-amu.fr/',
    },
    {
      id: '5',
      name: 'Traduction',
      icon: 'globe',
      link: 'https://translate.google.fr/?hl=fr',
    },
    {
      id: '6',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Ambience',
        link: 'https://www.youtube.com/watch?v=iwfP6EiJ_rQ&list=PLS9DXQqX1qmePgH2UAjLWvhm0RMQ2Kg2K',
      },
      {
        name: 'G.O.T.',
        link: 'https://www.youtube.com/watch?v=6LASz6HAL7E',
      },
      {
        name: 'Dark Chronicle',
        link: 'https://www.youtube.com/watch?v=PgUhYFkVdSY&list=PL7704DD431172739B',
      },
      {
        name: 'S.N.K.',
        link: 'https://www.youtube.com/watch?v=_jqSy8E9JLQ',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
