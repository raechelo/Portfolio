import React from 'react'
// import resume from '../assets/resume.pdf'
import Scrollchor from 'react-scrollchor';

export default function Nav() {
  return (
    <nav className="Nav">
      <a><Scrollchor to="#" className="nav-link">home</Scrollchor></a>
      <a><Scrollchor to="#about" className="nav-link">about</Scrollchor></a>
      <a><Scrollchor to="#contact" className="nav-link">contact</Scrollchor></a>
      <a><Scrollchor to="#projects" className="nav-link">projects</Scrollchor></a>
    </nav>
  )
}