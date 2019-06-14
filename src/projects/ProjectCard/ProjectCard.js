import React from 'react';

const ProjectCard = props => {
  const { name, link, imgLink, summary, stack } = props
  return (
    <article className='ProjectCard'>
      <h4>{name}</h4>
      {stack.map(s => <h5 className='stack'>{s}</h5>)}
      <img src={imgLink} className="project-image" />
      <a target='blank' href={link}>
      View Repo</a>
      <p>{summary}</p>
    </article>
  )
}

export default ProjectCard