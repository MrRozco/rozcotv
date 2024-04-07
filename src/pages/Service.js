import React from 'react'
import backgroundImg from '../assets/pexels-photo-6140458.jpeg';
import Hero from '../components/Hero'
import Trip from '../components/Trip';

function Service() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Tourists looking at a map'} title={'Our Service'} /> 
      <Trip />
    </div>
  )
}

export default Service