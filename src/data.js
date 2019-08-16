import github from './assets/contact_logos/github.svg';
import gmail from './assets/contact_logos/gmail.svg';
import linkedin from './assets/contact_logos/linkedin.svg';
import medium from './assets/contact_logos/medium-size.svg';
import chai from './assets/logos/chai.png';
import enzyme from './assets/logos/enzyme.png';
import html from './assets/logos/html.png';
import jest from './assets/logos/jest.png';
import js from './assets/logos/js.png';
import mocha from './assets/logos/mocha.png';
import react from './assets/logos/react.svg';
import nodejs from './assets/logos/nodejs.svg';
import redux from './assets/logos/redux.svg';
import scss from './assets/logos/scss.png';
import css from './assets/logos/css.svg';
import jquery from './assets/logos/jquery.png';


const contactData = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raechelo/',
    img: linkedin,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/raechelo',
    img: github,
  },
  {
    name: 'Gmail',
    link: 'mailto:odom.raechel@gmail.com',
    img: gmail,
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@odom.raechel',
    img: medium
  }
]

const projectData = [
  {
    name: 'Pokemon Jeopardy',
    link: 'https://github.com/raechelo/Pokemon-Jeopardy',
    imgLink: 'https://i.postimg.cc/2ytDzJjL/screencapture-localhost-8080-2019-04-18-09-49-06.png',
    summary: 'Based on the hit TV show, this game allows a user to choose their starter and compete against other players while they cycle through the questions Professor Oak asks them.',
    stack: [jquery, js, html, css, mocha, chai]
  },
  {
    name: 'Wheel of Mortys',
    link: 'https://github.com/raechelo/wheel-of-mortys',
    imgLink: 'https://i.postimg.cc/R04zVvRH/localhost-8080.png',
    summary: 'A mash-up of two popular TV shows, Wheel of Fortune and Rick and Morty. The user can choose their avatar and play against other users as they compete for the grand prize: an intergalactic gift of some kind.',
    stack: [jquery, js, html, scss, mocha, chai]
  },
  {
    name: 'Parade Planner',
    link: 'https://github.com/raechelo/parade-planner',
    imgLink: 'https://i.postimg.cc/WbsW3Sqh/Screen-Shot-2019-04-18-at-9-51-33-AM.png',
    summary: 'The idea behind this app is to help a user find a Mardi Gras parade based on their interests and current travel plans. The user can sort by day, time, and location.',
    stack: [react, js, scss, jest, enzyme]
  },
  {
    name: 'O.W.L.s',
    link: 'https://github.com/raechelo/OWLs',
    imgLink: 'https://i.postimg.cc/XJNLvzmL/screencapture-localhost-3001-2019-04-16-19-48-35.png',
    summary: 'This is a glossary flash card app using React, Redux, and Router terms. The user can choose their house and guess the answer to the flash card. If they choose correctly , they win points for their house, if not, all other houses are awarded points.',
    stack: [react, js, scss, jest, enzyme]
  },
  {
    name: 'Marvelously',
    link: 'https://github.com/raechelo/marvel-whateverly',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'This is ideally for users who like Marvel movies but aren\'t sure what they want to read or where to start. The app allows users to sort based on their character or movie preferences as well as comic specifics, like writers or editors, and find out if the movie was based on a comic or if the comic has been adapted into a movie. ',
    stack: [react, js, scss, jest, enzyme]
  },
  {
    name: 'Stocked',
    link: 'https://github.com/raechelo/stocked',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'The idea behind this app is for a user to input one to three ingredients in their kitchen and find a recipe that includes those ingredients. The user will be able to favorite recipes so they can see them at a later time.',
    stack: [react, redux, js, scss, jest, enzyme]
  },
  {
    name: 'Thriller Tracker',
    link: 'https://github.com/raechelo/thriller-tracker',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'Users can create an account and log in to view recently released horror movies. The user can view an individual movie \'s information and rating, as well as favorite a movie.',
    stack: [react, redux, js, scss, jest, enzyme, nodejs]
  },
  {
    name: 'Palette Picker',
    link: 'https://github.com/raechelo/palette-picker-fe',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'This app allows a user to randomize six colors and choose a color palette. A user can also create a project in order to save the palette to, so they can have a couple options on deck. Users can also delete a palette or a project.',
    stack: [react, redux, js, scss, jest, enzyme, nodejs]
  }

]

export default { contactData, projectData }