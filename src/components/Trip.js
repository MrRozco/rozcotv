import React from 'react'
import TripData from './TripData';



function Trip({ 
    tripTitle, TripSubtitle,
    boxOneImg, boxOneHeading, boxOneContent, 
    boxTwoImg, boxTwoHeading, boxTwoContent, 
    boxThreeImg, boxThreeHeading, boxThreeContent 
  }) {
  return (
    <div className=' mx-auto py-4 px-8 pb-20 bg-gradient-to-b lg:bg-gradient-to-l from-black via-black to-red-900' >
        <div className='text-center' >
            <h1 className='text-5xl sm:text-6xl font-bold text-black mb-4' >{tripTitle}</h1>
            <p className='mt-4 text-1xl sm:text-2xl text-black' >{TripSubtitle}</p>
        </div>
       
        <TripData
            boxOneImg={boxOneImg}
            boxOneHeading={boxOneHeading}
            boxOneContent={boxOneContent}

            boxTwoImg={boxTwoImg}
            boxTwoHeading={boxTwoHeading}
            boxTwoContent={boxTwoContent}

            boxThreeImg={boxThreeImg}
            boxThreeHeading={boxThreeHeading}
            boxThreeContent={boxThreeContent}
        />
    </div>
  )
}

export default Trip