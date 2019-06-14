import React from 'react';

const ContactCard = props => {
  const { name, link, img } = props;
  return (
    <article className="contact-card">
      <a target='blank' href={link}>
        <img src={img} />
        <h4>{name}</h4>
      </a>
    </article>
  )
}

export default ContactCard;