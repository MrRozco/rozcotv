import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/pexels-photo-951539.jpeg';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Athens during the evening'} title={'About Us'} /> 
      <AboutUs />
    </div>
  )
}

export default About