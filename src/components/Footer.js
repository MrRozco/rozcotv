import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {

        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);

  return (
    <>
    <footer className='bg-black py-12 px-24' >
        <div className='flex flex-col md:flex-row justify-between' >
            <div className='mb-4' >
                <h3 className='font-bold text-2xl text-white'>TravelSite</h3>
                <p className=' font-medium text-white' >Choose your favorite destination</p>
            </div>
            <div>
                <a target='_blank' href='https://www.linkedin.com/in/bryan-orozco-5132891b5'><FontAwesomeIcon icon={faLinkedinIn} className='text-white mx-2' /></a>
                <a target='_blank' href='https://github.com/MrRozco'><FontAwesomeIcon icon={faGithub} className='text-white mx-2' /></a>
            </div>
        </div>
        <div className=' md:px-[15%] mt-8 flex flex-col sm:flex-row justify-between text-center' >
            <div className='flex flex-col gap-2 mb-6' >
                <h3 className=' font-bold text-lg text-white '>Navigation</h3>
                <Link to="/" className='text-white'>Home</Link>
                <Link to="/about" className='text-white'>About</Link>
                <Link to="/service" className='text-white'>Service</Link>
                <Link to="/contact" className='text-white'>Contact</Link>
                <Link to="/signup" className='text-white'>Sign Up</Link>
            </div>
            <div className='flex flex-col gap-2 mb-6' >
                <h3 className=' font-bold text-lg text-white '>Navigation</h3>
                <a href='#' className='text-white'>Home</a>
                <a href='#' className='text-white'>About</a>
                <a href='#' className='text-white'>Service</a>
                <a href='#' className='text-white'>Contact</a>
                <a href='#' className='text-white'>Sign Up</a>
            </div>
            <div className='flex flex-col gap-2 mb-6' >
                <h3 className=' font-bold text-lg text-white '>Navigation</h3>
                <a href='#' className='text-white'>Home</a>
                <a href='#' className='text-white'>About</a>
                <a href='#' className='text-white'>Service</a>
                <a href='#' className='text-white'>Contact</a>
                <a href='#' className='text-white'>Sign Up</a>
            </div>
            
        </div>
    </footer>
    </>
  )
}

export default Footer