import React from 'react'
// import resume from '../assets/resume.pdf'
import Scrollchor from 'react-scrollchor';

export default function Nav() {
  return (
    <nav className="Nav">
      <Scrollchor to="#" className="nav-link">home</Scrollchor>
      <Scrollchor to="#about" className="nav-link">about</Scrollchor>
      <Scrollchor to="#contact" className="nav-link">contact</Scrollchor>
      <Scrollchor to="#projects" className="nav-link">projects</Scrollchor>
    </nav>
  )
}