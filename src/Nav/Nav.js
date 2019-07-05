import React from 'react'
import { NavLink } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
// import resume from '../assets/resume.pdf'
import About from '../About/about';

export default function Nav() {
  return (
    <section>
      <nav className="Nav">
        {/* <ScrollableAnchor id={}>
        </ScrollableAnchor> */}

        {/* <a href='#about'>About</a>
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor> */}
        {/* <NavLink exact to='/contact' className="nav-link" >contact</NavLink>
        <NavLink exact to='/about' className="nav-link" >about</NavLink>
        <NavLink exact to='/projects' className="nav-link" >projects</NavLink>
        <NavLink exact to='/' className="nav-link name" >raechel<span>odom</span></NavLink> */}
        {/* <form method="get" action={resume}> */}
        {/* <button><i class="fas fa-download"></i>Download My Resume!</button> */}
        {/* </form> */}
      </nav>
    </section>
  )
}