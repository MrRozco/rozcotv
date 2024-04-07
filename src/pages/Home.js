import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/pexels-photo-2031767.jpeg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';

function Home() {
  return (
    <>  
        <div  >
        <Hero 
          backgroundImage={backgroundImg} 
          imageAlt={'Venice at night'} 
          buttonUrl={'/'} 
          title={'Your Journey Your Story'} 
          subtitle={'Choose Your Favorite Destination'} 
          buttonText={'Travel Plan'} 
        />

        <Destination />

        <Trip />
        </div>
    </>
  )
}

export default Home