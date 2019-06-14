import React from 'react';
import chai from '../assets/chai.png';
import enzyme from '../assets/enzyme.png';
import html from '../assets/html.png';
import jest from '../assets/jest.png';
import js from '../assets/js.svg';
import mocha from '../assets/mocha.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import scss from '../assets/scss.png';

const Skills = () => {
  
  let logos = [chai, enzyme, html, jest, js, mocha, react, redux, scss]
  return (
    <section className="Skills">
      {logos.map(l => (<img className="logo" src={l} />))}
    </section>
  )
}

export default Skills;