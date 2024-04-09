import React from 'react'
import backgroundImg from '../assets/pexels-photo-6140458.jpeg';
import Hero from '../components/Hero'
import Trip from '../components/Trip';
import imgOne from '../assets/pexels-photo-17801008.webp';

function Service() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Tourists looking at a map'} title={'Our Service'} /> 
      <Trip 
          boxOneImg={imgOne}
          boxOneHeading='Title One'
          boxOneContent='Just some text right here'

          boxTwoImg={imgOne}
          boxTwoHeading='Title Two'
          boxTwoContent='Just some text right here'

          boxThreeImg={imgOne}
          boxThreeHeading='Title Three'
          boxThreeContent='Just some text right here but this one is going to be much longer than the other 2 '
        />
    </div>
  )
}

export default Service