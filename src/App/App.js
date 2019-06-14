import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import About from '../About/about';
import Contact from '../contact/contact';

class App extends Component {

  render () {
    return (
    <section>
      <Nav />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={About} />
    </section>
    )
  }
}

export default App;
