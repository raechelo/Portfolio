import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import chai from '../assets/logos/chai.png';
import enzyme from '../assets/logos/enzyme.png';
import html from '../assets/logos/html.png';
import jest from '../assets/logos/jest.png';
import js from '../assets/logos/js.png';
import mocha from '../assets/logos/mocha.png';
import react from '../assets/logos/react.svg';
import nodejs from '../assets/logos/nodejs.svg';
import redux from '../assets/logos/redux.svg';
import scss from '../assets/logos/scss.png';
import css from '../assets/logos/css.svg';
import jquery from '../assets/logos/jquery.png';
import vue from '../assets/logos/vue.png';


const projectData = [
  {
    name: 'Bird\'s the Word',
    link: 'https://github.com/raechelo/birds-the-word',
    demo: 'https://master.d285ia4qzyjh5o.amplifyapp.com/',
    imgLink: 'https://i.postimg.cc/5yZSkTs3/screencapture-master-d285ia4qzyjh5o-amplifyapp-2019-08-16-13-12.png',
    summary: 'This app helps users to find synonyms for a word of their choice. The user can choose a new word from the results to see synonyms of that word.',
    stack: [vue]
  },
  {
    name: 'SWAPIboxi',
    link: 'https://github.com/raechelo/swapibox',
    demo: 'https://raechelo.github.io/swapiBox/',
    imgLink: 'https://i.postimg.cc/VNxMwnqf/screencapture-raechelo-github-io-swapi-Box-2019-08-16-13-35-11.png',
    summary: 'This app lets users view information about Star Wars people, planets, and vehicles. Users can also favorite items to view later.',
    stack: [react, jest, enzyme, scss]
  },
  {
    name: 'Palette Picker',
    link: 'https://github.com/raechelo/palette-picker-fe',
    demo: 'https://donut-picker.herokuapp.com/',
    imgLink: 'https://i.postimg.cc/6Tx7n0mT/screencapture-localhost-3001-2019-08-16-12-42-41.png',
    summary: 'This app allows a user to randomize six colors and choose a color palette. The user can also create a project in order to save the palette to, so they can have a couple options on deck. Users can also delete a palette or a project.',
    stack: [react, redux, js, scss, jest, enzyme, nodejs]
  },
  {
    name: 'Thriller Tracker',
    link: 'https://github.com/raechelo/thriller-tracker',
    demo: 'https://raechelo.github.io/Thriller-Tracker/',
    imgLink: 'https://i.postimg.cc/xTshj1cJ/screencapture-localhost-3002-2019-08-16-12-59-51-1.png',
    summary: 'Users can create an account and log in to view recently released horror movies. The user can view an individual movie \'s information and rating, as well as favorite a movie.',
    stack: [react, redux, js, scss, jest, enzyme, nodejs]
  },
  {
    name: 'Stocked',
    link: 'https://github.com/raechelo/stocked',
    demo: 'https://raechelo.github.io/Stocked/',
    imgLink: 'https://i.postimg.cc/cHZXMpvG/screencapture-localhost-3001-2019-08-16-12-59-10.png',
    summary: 'The idea behind this app is for a user to input one to three ingredients in their kitchen and find a recipe that includes those ingredients. The user will be able to favorite recipes so they can see them at a later time.',
    stack: [react, redux, js, scss, jest, enzyme]
  },
  {
    name: 'Marvelously',
    link: 'https://github.com/raechelo/marvel-whateverly',
    demo: 'http://raechelo.github.io/marvel-whateverly/',
    imgLink: 'https://i.postimg.cc/KYSsmQmp/localhost-3001.png',
    summary: 'This is ideally for users who like Marvel movies but aren\'t sure what they want to read or where to start. The app allows users to sort based on their character or movie preferences as well as comic specifics, like writers or editors, and find out if the movie was based on a comic or if the comic has been adapted into a movie. ',
    stack: [react, js, scss, jest, enzyme]
  },
  {
    name: 'O.W.L.s',
    link: 'https://github.com/raechelo/OWLs',
    demo: 'https://raechelo.github.io/OWLs/',
    imgLink: 'https://i.postimg.cc/XJNLvzmL/screencapture-localhost-3001-2019-04-16-19-48-35.png',
    summary: 'This is a glossary flash card app using React, Redux, and Router terms. The user can choose their house and guess the answer to the flash card. If they choose correctly , they win points for their house, if not, all other houses are awarded points.',
    stack: [react, js, scss, jest, enzyme]
  },
  {
    name: 'Wheel of Mortys',
    link: 'https://github.com/raechelo/wheel-of-mortys',
    demo: 'https://master.d3np0282adtbc3.amplifyapp.com/',
    imgLink: 'https://i.postimg.cc/R04zVvRH/localhost-8080.png',
    summary: 'A mash-up of two popular TV shows, Wheel of Fortune and Rick and Morty. The user can choose their avatar and play against other users as they compete for the grand prize: an intergalactic gift of some kind.',
    stack: [jquery, js, html, scss, mocha, chai]
  },
  {
    name: 'Parade Planner',
    link: 'https://github.com/raechelo/parade-planner',
    demo: '',
    imgLink: 'https://i.postimg.cc/WbsW3Sqh/Screen-Shot-2019-04-18-at-9-51-33-AM.png',
    summary: 'The idea behind this app is to help a user find a Mardi Gras parade based on their interests and current travel plans. The user can sort by day, time, and location.',
    stack: [react, js, scss, jest, enzyme]
  },
  {
    name: 'Pokemon Jeopardy',
    link: 'https://github.com/raechelo/Pokemon-Jeopardy',
    demo: 'https://master.d22ghlofq9eg65.amplifyapp.com/',
    imgLink: 'https://i.postimg.cc/2ytDzJjL/screencapture-localhost-8080-2019-04-18-09-49-06.png',
    summary: 'Based on the hit TV show, this game allows a user to choose their starter and compete against other players while they cycle through the questions Professor Oak asks them.',
    stack: [jquery, js, html, css, mocha, chai]
  }
]

const Projects = () => {

  return (
    <section className="Projects">
      <h2>let's get down to business!</h2>
      <div className="Slider-wrapper">
        <Slider className="Slider">
        {projectData.map((project, index) => (
          <div style={{ background: `url('${project.imgLink}') no-repeat` }}
              key={index}
              className="slider-bg"
              >
            <section className="inner">
              <h2>{project.name}</h2>
              <section className="skills-slider">
                <p>
                  {project.stack.map((s, i) => (<img src={s} alt={s} className="stack-slider" index={i} />))}
                </p>
              </section>
              <p>{project.summary}</p>
              <a href={project.link} target='blank'><button className="hvr-sweep-to-right-slider"><i className="fab fa-github-alt"></i> View Repo</button></a>
              <a href={project.demo} target='blank'><button className="hvr-sweep-to-right-slider">Demo Here <i className="fas fa-desktop"></i></button></a>
            </section>
          </div>))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects;