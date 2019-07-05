import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import About from '../About/about';
import Contact from '../Contact/Contact';
import cactistreetart from '../assets/bg_images/cactistreetart.jpeg';
import ScrollableAnchor, { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import Scrollchor from 'react-scrollchor';

class App extends Component {

  render() {
    configureAnchors({ offset: -60, scrollDuration: 200 });

    return (
    <section className="App">

      <nav>
        <hr className="horiz-line" />

        <h1>raechel odom</h1>
        <h2>front end engineer</h2>


          <a><Scrollchor to="#about" className="home-nav-link">about</Scrollchor></a>
          <a><Scrollchor to="#contact" className="home-nav-link">contact</Scrollchor></a>
          <a><Scrollchor to="#projects" className="home-nav-link">projects</Scrollchor></a>


        <hr className="horiz-line" />
      </nav>

      <img src={cactistreetart} alt="street art" className="App-bg" />

      <section>
        <section id={'about'}>
          <About />
        </section>
        <section id={'contact'}>
          <Contact />
        </section>
        <section id={'projects'}>
          <Projects />
        </section>
      </section>
    </section>
    )
  }
}

export default App;
