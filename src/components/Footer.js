import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'


function Footer() {

        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);

  return (
    <>
    <footer className='bg-black py-12 px-24' >
        <div className='flex flex-col-reverse md:flex-row  items-center justify-around text-center md:text-left' >
            <div className=' flex flex-col mb-4 justify-center items-center text-center content-center' >
                <img src={logo} />
                <p className='text-white text-[18px]'>Comienza a explorar el mundo con RozcoTV GRATIS!</p>
                <Link  to="/contact" ><button className='bg-red-900 text-white px-10 py-3 rounded-lg mt-4 hover:scale-110 font-bold' href={'/contact'}>Empieza Ahora!</button></Link>
            </div>
            
        
        <div className=' md:px-[15%] w-[60%] flex flex-col sm:flex-row justify-between text-center ' >
            <div className='flex flex-col gap-2 mb-6 text-2xl' >
                <Link to="/" className='text-white hover:text-red-700 hover:scale-110'>Inicio</Link>

            </div>
            <div className='flex flex-col gap-2 mb-6' >
                <Link to="/service" className='text-white text-2xl hover:text-red-700 hover:scale-110'>Servicios</Link>

            </div>
            <div className='flex flex-col gap-2 mb-6' >
                <Link to="/contact" className='text-white text-2xl hover:text-red-700 hover:scale-110'>Contacto</Link>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer