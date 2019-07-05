import React from 'react'
import { NavLink } from 'react-router-dom';
// import resume from '../assets/resume.pdf'

export default function Nav() {
  return (
    <section>
      <nav className="Nav">
        <NavLink exact to='/' className="nav-link name" >raechel<span>odom</span></NavLink>
        <NavLink exact to='/contact' className="nav-link" >contact</NavLink>
        <NavLink exact to='/skills' className="nav-link" >skills</NavLink>
        <NavLink exact to='/projects' className="nav-link" >projects</NavLink>
        {/* <form method="get" action={resume}> */}
        {/* <button><i class="fas fa-download"></i>Download My Resume!</button> */}
        {/* </form> */}
      </nav>
    </section>

  )
}