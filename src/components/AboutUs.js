import React from 'react'

function AboutUs() {
  return (
    <>
        <div className=' flex flex-col justify-center self-center text-center py-8' >
            <div >
                <h1 className='text-4xl sm:text-3xl font-bold text-black mb-2' >Who We Are</h1>
                <p className=' text-1xl sm:text-xl text-black' >My name is Bryan Orozco and this is one of my React practice projects.</p>
            </div>
            <div className='my-4'> 
                <h1 className='text-4xl sm:text-3xl font-bold text-black mb-2' >Our Mission</h1>
                <p className=' text-1xl sm:text-xl text-black' >We are a travel agency that provides the best trips for you.</p>
            </div>
        </div>
    </>
  )
}

export default AboutUs