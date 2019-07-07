import React from 'react';
import projectData from '../data';
import resume from '../assets/resume.pdf';
import chai from '../assets/logos/chai.png';
import enzyme from '../assets/logos/enzyme.png';
import html from '../assets/logos/html.png';
import jest from '../assets/logos/jest.png';
import js from '../assets/logos/js.svg';
import mocha from '../assets/logos/mocha.png';
import react from '../assets/logos/react.png';
import nodejs from '../assets/logos/nodejs.png';
import redux from '../assets/logos/redux.png';
import scss from '../assets/logos/scss.png';
import css from '../assets/logos/css.png';


export default function Contact() {
  const displayData = projectData.contactData.map((c, i) => (<article index={i}><a href={c.link}><img src={c.img} alt={`find me on ${c.name}`} /></a></article>))

  const logos = [js, react, redux, jest, enzyme, nodejs, scss, css, html, mocha, chai];

  const displaySkills = logos.map((l, i) => <img className="logo" src={l} alt={`${l}`} index={i} />)

  return (
    <section className='Contact'>
      <h2>let's connect!</h2>
      <section className="contact-me-section">
        {displayData}
      </section>
      <form className="download-form" method="get" action={resume}>
        <button className="download-btn hvr-sweep-to-right" type="submit">Download my resume! <i className="fas fa-file-download"></i></button>
      </form>
      <section className="skills">
        <h2>skills</h2>
        <section className="skills-section">
          {displaySkills}
        </section>
      </section>
    </section>
  )
}
