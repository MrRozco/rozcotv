import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/pexels-photo-951539.jpeg';

function About() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Athens during the evening'} title={'About Us'} /> 
    </div>
  )
}

export default About