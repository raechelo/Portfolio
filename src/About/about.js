import React from 'react';
import image from '../assets/profilepic.jpg';

export default function about() {
  return (
    <section className="About">
      <h2>hi!</h2>
      <img src={image} />
      <h1>i'm raechel</h1>
      <p className="p-info">I'm a front end engineer who loves helping people and developing creative, accesible apps with clean code. Some of my favorite languages and frameworks to use are React, ES6, Scss, and Jest.</p>
      <p className="p-info2">Outside of the coding world, I love to spend time with my dog, Zeus, I enjoy reading, a great sour beer, and I love watching hockey games. Let's go Blues!</p>
    </section>
  )
}
