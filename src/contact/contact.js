import React from 'react';
import projectData from '../data';
import resume from '../assets/resume.pdf';

export default function Contact() {
  const displayData = projectData.contactData.map(c => (<article><a href={c.link}><img src={c.img} /></a></article>))

  return (
    <section className='Contact'>
      <h2>let's connect!</h2>
      <section className="contact-me-section">
        {displayData}
      </section>
      <form className="download-form" method="get" action={resume}>
        <button className="download-btn" type="submit">Download my resume!</button>
      </form>
    </section>
  )
}
