import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink exact to='/about' >about</NavLink>
      <NavLink exact to='/skills'>skills</NavLink>
      <NavLink exact to='/projects' >projects</NavLink>
      <NavLink exact to='/contact' >contact</NavLink>
    </nav>
  )
}