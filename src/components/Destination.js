import React from 'react'
import imgOne from '../assets/free-photo-of-close-up-of-seashells-on-the-beach-under-a-bright-sunset-light.jpeg';
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className=' my-8 text-center mx-auto   w-full max-w-screen-xl' >
        <div className='flex-1 text-center p-2 my-8' >
            <h1 className=' relative text-4xl sm:text-5xl font-bold text-black' >Popular Destinations</h1>
            <p className='relative text-1xl sm:text-2xl text-black' >Here are some of the popular destinations:</p>
        </div>
        
        <DestinationData
            reverseCol={true}
            imagesLeft={false}
            heading={'Title'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            imgOne={imgOne}
            imgTwo={imgOne}
        />

        <DestinationData
            reverseCol={true}
            imagesLeft={true}
            heading={'Title'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            imgOne={imgOne}
            imgTwo={imgOne}
        />
    </div>
  )
}

export default Destination