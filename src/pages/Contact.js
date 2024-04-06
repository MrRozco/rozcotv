import React from 'react'
import backgroundImg from '../assets/pexels-photo-17845049.webp';
import Hero from '../components/Hero'
import Destination from '../components/Destination';

function Contact() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Truck under the desert night sky'} title={'Contact Us'} /> 
      <Destination />
    </div>
  )
}

export default Contact