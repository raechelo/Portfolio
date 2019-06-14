import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <section>
      <nav className="Nav">
        <NavLink exact to='/skills' className="nav-link" >skills</NavLink>
        <NavLink exact to='/projects' className="nav-link" >projects</NavLink>
        <NavLink exact to='/contact' className="nav-link" >contact</NavLink>
        <NavLink exact to='/' className="nav-link name" >raechel<span>odom</span></NavLink>
      </nav>
    </section>

  )
}