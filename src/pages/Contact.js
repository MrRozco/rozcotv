import React from 'react'
import backgroundImg from '../assets/pexels-photo-17845049.webp';
import Hero from '../components/Hero'
import Destination from '../components/Destination';
import imgOne from '../assets/pexels-photo-17801008.webp';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Truck under the desert night sky'} title={'Contact Us'} /> 
      <ContactForm />
    </div>
  )
}

export default Contact