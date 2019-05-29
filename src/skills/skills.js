import React from 'react';
import { Route } from 'react-router-dom'
import chai from '../assets/chai.png';
import enzyme from '../assets/enzyme.png';
import html from '../assets/html.png';
import jest from '../assets/jest.png';

const Skills = () => {
  
  let logos = [chai, enzyme, html, jest]
  return (
    <section>
    {/* <Route exact to="/skills" component={Skills} /> */}
      {logos.map(l => (<img className="logo" src={l} />))}
    </section>
  )
}

export default Skills;