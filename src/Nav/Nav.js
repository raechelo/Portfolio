import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <NavLink exact to='/skills' className="nav-link" >skills</NavLink>
      <NavLink exact to='/projects' className="nav-link" >projects</NavLink>
      <NavLink exact to='/contact' className="nav-link" >contact</NavLink>
      <NavLink exact to='/about' className="nav-link" >raechel<span>odom</span></NavLink>
    </nav>
  )
}