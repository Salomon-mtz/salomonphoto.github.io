import './App.css';
import React from 'react';

function About() {
  return (
    <div className='transtion container text-center'>
      <div className='row d-flex'>
        <div className='col-lg-5'>
          <img src={require('./Images/aboutme.jpg')} className='aboutme img-fluid' alt='aboutme'/>
        </div>
        <div className='col' id='story'>
          <h2 className='name font-link'>
            Salomón Martínez
          </h2>
          <p className='about-me font-link'>
            I'm a 19 year old photographer from Mexico City. I started taking photos 6 years ago and since then I decided to make photography my 
            biggest passion. During my journey I've discovered that taking a photo is like stopping the time at that moment and capture a unique experience.
            That's why my favourite styles are portraits, street photography and landscape. Because when you take a photo of a person, you can share with
            the people the emotions that person is feeling. The same happens with street photography, you freeze time and keep a part of the daily life to
            make it unforgetable. 
          </p>
        </div>
      </div>
    </div>

  );
}

export default About;
