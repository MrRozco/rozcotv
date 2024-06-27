import React from 'react'
import ctaBanner from '../assets/rozcoCTAbanner.webp';
import { Link } from 'react-router-dom';


function CTASection() {
  return (
    <>
      <div className=' flex flex-col md:flex-row mx-auto px-4 pb-20  text-center bg-red-900 lg:bg-gradient-to-r from-red-900 via-black to-black  gap-10 justify-around'>
        <div className='  self-center '>
            <h2 className=' text-white text-5xl'>AUN NO ESTAS CONVENCIDO?</h2>
            <p className=' text-white text-3xl'>Comienza a explorar el mundo con RozcoTV <span className='text-4xl'>GRATIS!</span></p>
            <Link  to="/contact" ><button className=' bg-black border-2 border-white px-10 py-5 rounded-lg font-jersey text-white mt-4 text-xl hover:scale-110'>Empieza Ahora</button></Link>
        </div>
        <div className=' self-start -mt-20 hidden md:block '>
            <img className=' w-[600px] h-[350px] rounded-lg mt-10 border-8 border-' src={ctaBanner} alt='ctaBanner' />
        </div>
        </div>
    </>
  )
}

export default CTASection