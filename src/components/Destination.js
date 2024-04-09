import React from 'react'

import DestinationData from './DestinationData';

function Destination({ firstHeading, firstText, firstImgOne, firstImgTwo, secondHeading, secondText, secondImgOne, secondImgTwo}) {
  return (
    <div className=' my-8 text-center mx-auto   w-full max-w-screen-xl' >
        <div className='flex-1 text-center p-2 my-8' >
            <h1 className='text-4xl sm:text-5xl font-bold text-black' >Popular Destinations</h1>
            <p className='text-1xl sm:text-2xl text-black' >Here are some of the popular destinations:</p>
        </div>
        
        <DestinationData
            reverseCol={true}
            imagesLeft={false}
            heading={firstHeading}
            text={firstText}
            imgOne={firstImgOne}
            imgTwo={firstImgTwo}
        />

        <DestinationData
            reverseCol={true}
            imagesLeft={true}
            heading={secondHeading}
            text={secondText}
            imgOne={secondImgOne}
            imgTwo={secondImgTwo}
        />
    </div>
  )
}

export default Destination