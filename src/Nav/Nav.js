import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import About from '../About/about';
import Contact from '../contact/contact';

export default function Nav() {
  return (
    <section>
      <nav className="Nav">
        <NavLink exact to='/skills' className="nav-link" >skills</NavLink>
        <NavLink exact to='/projects' className="nav-link" >projects</NavLink>
        <NavLink exact to='/contact' className="nav-link" >contact</NavLink>
        <NavLink exact to='/' className="nav-link name" >raechel<span>odom</span></NavLink>
      </nav>
      <div>
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={About} />
      </div>
    </section>

  )
}