import React from 'react';
import ContactCard from './ContactCard/ContactCard';
import projectData from '../data';

const Contact = () => {
  let displayCards = projectData.contactData.map(c => <ContactCard {...c} />)
  return (
    <section className="Contact">
      {displayCards}
    </section>
  )
}

export default Contact;