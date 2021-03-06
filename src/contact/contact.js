import React from 'react';
import projectData from '../data';
import resume from '../assets/resume.pdf';
import html from '../assets/logos/html.png';
import js from '../assets/logos/js.png';
import react from '../assets/logos/react.svg';
import redux from '../assets/logos/redux.svg';
import nodejs from '../assets/logos/nodejs.svg';
import scss from '../assets/logos/scss.png';
import css from '../assets/logos/css.svg';
import enzyme from '../assets/logos/enzyme.png';


export default function Contact() {
  const displayData = projectData.contactData.map((c, i) => (<article index={i}><a href={c.link}><img src={c.img} alt={`find me on ${c.name}`} /></a></article>))

  const logos = [js, css, html, react, redux, nodejs, scss, enzyme];

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
