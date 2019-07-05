import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Projects from '../Projects/Projects';
import About from '../About/about';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import cactistreetart from '../assets/bg_images/cactistreetart.jpeg'

class App extends Component {

  render () {
    return (
    <section className="App">

      <nav>
        <hr className="horiz-line" />

        <h1>raechel odom</h1>
        <h2>front end engineer</h2>

        <NavLink exact to='/contact' >
          <h3 className="nav-link">contact</h3>
        </NavLink>
        <NavLink exact to='/skills' >
          <h3 className="nav-link">skills</h3>
        </NavLink>
        <NavLink exact to='/projects' >
          <h3 className="nav-link">projects</h3>
        </NavLink>

        <hr className="horiz-line" />
      </nav>

      <img src={cactistreetart} alt="street art" className="App-bg" />

      <section>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </section>
    </section>
    )
  }
}

export default App;
