import React from 'react';
import image from '../assets/profilepic.jpg';
import hiker from '../assets/interests/adventurer.svg';
import books from '../assets/interests/books-stack-of-three.svg';
import cupcake from '../assets/interests/cupcake.svg';
import hockey from '../assets/interests/hockey-stick.svg';
import sewing from '../assets/interests/sewing-machine.svg';
import spiderman from '../assets/interests/spiderman.svg';

export default function about() {
  const interests = [{img: hiker, hobby: 'hiking'},{img: books, hobby: 'reading'},{img: cupcake, hobby: 'baking'},{img: hockey, hobby: 'hockey'},{img: spiderman, hobby: 'comics'},{img: sewing, hobby: 'sewing'}]

  return (
    <section className="About">
      <h1>hi! i'm raechel</h1>
      <section className="about-section about-info">
        <p>
          I'm Raechel and I'm a passionate front end engineer. I moved to Denver in 2016 but I was born in St. Louis, Missouri. I'm an alumni of the University of Missouri, with a bachelor's in English and a specialization in Creative Writing. After working at a couple publishing companies, I realized my heart was elsewhere, and I've since changed fields to software engineering.
        </p>
        <p>
          When I'm not coding, I enjoy spending time with my dog, Zeus, getting crafty with sewing garments, or cracking open a fiction book. I'm a nerd for comic books and mythologies and I love fun facts. Fun fact: a group of giraffes is called a tower!
        </p>
      </section>
      <img src={image} alt="profile pic"/>
      <section className="about-section about-hobbies">
        {
          interests.map(i => (
            <article>
              <img className="interest-icon" src={i.img} /> 
              <h5 className="interest-name">{i.hobby}</h5>
            </article>)
          )
        }
      </section>
    </section>
  )
}
