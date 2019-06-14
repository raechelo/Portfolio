import React from 'react'
import projectData from '../data';
import ProjectCard from './ProjectCard/ProjectCard';

export default function projects() {
  let displayCards = projectData.projectData.map(p => <ProjectCard {...p} />)
  return (
    <section className="Projects">
      {displayCards}
    </section>
  )
}
