import React from 'react'
import backgroundImg from '../assets/rozcotv_banner.png';
import Hero from '../components/Hero'
import Destination from '../components/Destination';
import imgOne from '../assets/pexels-photo-17801008.webp';
import ContactForm from '../components/ContactForm';
import contactBanner from '../assets/contactBanner.webp'
import contactUs from '../assets/fifa-world-cup-trophy.avif'
import logo from '../assets/logo-lg.png'

function Contact() {

  const openWhatsApp = () => {
    
    const phoneNumber = '12403429254';
    const message = encodeURIComponent('Hola, estoy interesado en RozcoTV!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };
  return (
    <div >
      <Hero backgroundImage={backgroundImg} imageAlt={'Services poster'} title={'Servicios'} textAlign={'text-left'}   /> 
      <div className='flex items-center justify-center py-40 bg-gradient-to-t from-red-900 via-black to-black'>
        <div className=' flex flex-col-reverse gap-5 md:flex-row items-center justify-between rounded-lg py-10 px-10 w-[60vw] border border-white bg-gradient-to-b from-red-900 via-black to-black'>
          <div className='text-center w-[70%]'>
            <h2 className='text-white text-6xl'>Estas Listo?</h2>
            <p className='text-white text-2xl'>Llamanos y preguntanos acerca de tu prueba gratis! </p>
            <button onClick={openWhatsApp} className='mt-4 bg-red-700 border border-white hover:bg-red-900 hover:scale-110 text-white font-bold py-2 px-4 rounded'>
              Contactanos en WhatsApp!
            </button>
          </div>
          <div className='w-[30%]'>
            <img className='w-96 rounded-md ' src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact