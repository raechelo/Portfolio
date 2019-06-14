import React from 'react';

const ProjectCard = props => {
  const { name, link, imgLink, summary, stack } = props
  return (
    <article>
      <h4>{name}</h4>
      <h5>{stack}</h5>
      <a href={link}>
        <img src={imgLink} />
      </a>
      <p>{summary}</p>
    </article>
  )
}

export default ProjectCard