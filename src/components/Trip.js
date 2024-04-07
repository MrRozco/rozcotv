import React from 'react'
import TripData from './TripData';
import imgOne from '../assets/pexels-photo-17801008.webp';
import imgTwo from '../assets/pexels-photo-17801008.webp';
import imgThree from '../assets/pexels-photo-17801008.webp';


function Trip() {
  return (
    <div className=' mx-auto px-4 my-8 py-4' >
        <div className='text-center' >
            <h1 className='text-4xl sm:text-5xl font-bold text-black mb-2' >Trips</h1>
            <p className=' text-1xl sm:text-2xl text-black' >Here are some of the trips we offer:</p>
        </div>
       
        <TripData
            boxOneImg = {imgOne}
            boxOneHeading = 'Title One'
            boxOneContent = 'Just some text right here'

            boxTwoImg = {imgTwo}
            boxTwoHeading = 'Title Two'
            boxTwoContent = 'Just some text right here'

            boxThreeImg = {imgThree}
            boxThreeHeading = 'Title Three'
            boxThreeContent = 'Just some text right here but this one is going to be much longer than the other 2 '
        />
    </div>
  )
}

export default Trip