import React from 'react';
import projectData from '../data';

export default function Contact() {
  const displayData = projectData.contactData.map(c => (<article><img src={c.img} /><a href={c.link}>{c.name}</a></article>))
  return (
    <section className='Contact'>
      <h2>let's connect!</h2>
      <section className="contact-me-section">
        {displayData}
      </section>
    </section>
  )
}
