import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <NavLink exact to='/skills'>skills</NavLink>
      <NavLink exact to='/projects' >projects</NavLink>
      <NavLink exact to='/contact' >contact</NavLink>
      <NavLink exact to='/about' >raechel<span>odom</span></NavLink>
    </nav>
  )
}