import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import About from '../About/about';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import { Sticky, StickyContainer } from 'react-sticky';

class App extends Component {

  render() {

    return (
    <section className="App">
        <section id={'home'}>
          <Home />
        </section>
        <StickyContainer>
          <Sticky>
              {({
                style,
              }) => (
                <nav style={style}>
                  {/* ... */}
                  <Nav />
                </nav>
              )}
            </Sticky>
        <section id={'about'}>
          <About />
        </section>
        <section id={'contact'}>
          <Contact />
        </section>
        <section id={'projects'}>
          <Projects />
        </section>
      </StickyContainer>
    </section>
    )
  }
}

export default App;
