import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/pexels-photo-2031767.jpeg';

function Home() {
  return (
    <>
        <Hero backgroundImage={backgroundImg} imageAlt={'Venice at night'} buttonUrl={'/'} title={'Your Journey Your Story'} subtitle={'Choose Your Favorite Destination'} buttonText={'Travel Plan'} />
        <div>Home</div>
    </>
  )
}

export default Home