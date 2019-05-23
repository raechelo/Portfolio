import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <NavLink exact to='/skills' className="nav" >skills</NavLink>
      <NavLink exact to='/projects' className="nav" >projects</NavLink>
      <NavLink exact to='/contact' className="nav" >contact</NavLink>
      <NavLink exact to='/about' className="nav" >raechel<span>odom</span></NavLink>
    </nav>
  )
}