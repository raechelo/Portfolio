const contactData = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raechelo/',
    img: 'https://image.flaticon.com/icons/svg/34/34227.svg',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/raechelo',
    img: 'https://cdn.freebiesupply.com/logos/large/2x/github-octocat-logo-black-and-white.png',
  },
  {
    name: 'Codewars',
    link: 'https://www.codewars.com/users/raechelo',
    img: 'https://cdn0.iconfinder.com/data/icons/a-s-social-set/256/codewars-512.png',
  },
  {
    name: 'Gmail',
    link: 'mailto:odom.raechel@gmail.com',
    img: 'http://cdn.onlinewebfonts.com/svg/img_165208.png',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@odom.raechel',
    img: 'https://cdn.worldvectorlogo.com/logos/medium-1.svg'
  }
]

const projectData = [
  {
    name: 'Pokemon Jeopardy',
    link: 'https://github.com/SiimonStark/gametime_jeopardy_jp_ro',
    imgLink: 'https://i.postimg.cc/2ytDzJjL/screencapture-localhost-8080-2019-04-18-09-49-06.png',
    summary: 'Based on the hit TV show, this game allows a user to choose their starter and compete against other players while they cycle through the questions Professor Oak asks them.',
    stack: ['JQuery', 'Javascript', 'HTML', 'CSS', 'Mocha', 'Chai']
  },
  {
    name: 'Wheel of Mortys',
    link: 'https://github.com/NimSum/wheel-of-mortys',
    imgLink: 'https://i.postimg.cc/R04zVvRH/localhost-8080.png',
    summary: 'A mash-up of two popular TV shows, Wheel of Fortune and Rick and Morty. The user can choose their avatar and play against other users as they compete for the grand prize: an intergalactic gift of some kind.',
    stack: ['JQuery', 'Javascript', 'HTML', 'SCSS', 'Mocha', 'Chai']
  },
  {
    name: 'Parade Planner',
    link: 'https://github.com/jlavar1/parade-planner',
    imgLink: 'https://i.postimg.cc/WbsW3Sqh/Screen-Shot-2019-04-18-at-9-51-33-AM.png',
    summary: 'The idea behind this app is to help a user find a Mardi Gras parade based on their interests and current travel plans. The user can sort by day, time, and location.',
    stack: ['React', 'Javascript', 'JSX', 'SCSS', 'Jest', 'Enzyme']
  },
  {
    name: 'O.W.L.s',
    link: 'https://github.com/raechelo/OWLs',
    imgLink: 'https://i.postimg.cc/XJNLvzmL/screencapture-localhost-3001-2019-04-16-19-48-35.png',
    summary: 'This is a glossary flash card app using React, Redux, and Router terms. The user can choose their house and guess the answer to the flash card. If they choose correctly , they win points for their house, if not, all other houses are awarded points.',
    stack: ['React', 'Javascript', 'JSX', 'SCSS', 'Jest', 'Enzyme']
  },
  {
    name: 'Marvelously',
    link: 'https://github.com/MaxBSilver/marvel-whateverly',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'This is ideally for users who like Marvel movies but aren\'t sure what they want to read or where to start. The app allows users to sort based on their character or movie preferences as well as comic specifics, like writers or editors, and find out if the movie was based on a comic or if the comic has been adapted into a movie. ', 
    stack: ['React', 'Javascript', 'JSX', 'SCSS', 'Jest', 'Enzyme']
  }
]

export default { contactData, projectData }