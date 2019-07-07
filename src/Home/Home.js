import React from 'react';
import Scrollchor from 'react-scrollchor';
import cactistreetart from '../assets/bg_images/cactistreetart.jpeg';


export default function Home() {
  return (
    <section className="Home">
      <nav>
        <hr className="horiz-line" />
        <h1>raechel odom</h1>
        <h2>front end engineer</h2>
        <Scrollchor to="#about" className="home-nav-link">about</Scrollchor>
        <Scrollchor to="#contact" className="home-nav-link">contact</Scrollchor>
        <Scrollchor to="#projects" className="home-nav-link">projects</Scrollchor>
        <hr className="horiz-line" />
      </nav>
      <img src={cactistreetart} alt="street art" className="Home-bg" />
    </section>
  )
}
