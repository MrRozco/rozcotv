import React from 'react'
import backgroundImg from '../assets/pexels-photo-6140458.jpeg';
import Hero from '../components/Hero'
import Trip from '../components/Trip';
import serviceOne from '../assets/pexels-leah-newhouse-3935702.jpg';
import serviceTwo from '../assets/pexels-alfonso-escalante-2533092.jpg';
import serviceThree from '../assets/pexels-ketut-subiyanto-4907181.jpg';

function Service() {
  return (
    <div>
      <Hero backgroundImage={backgroundImg} imageAlt={'Tourists looking at a map'} title={'Our Service'} /> 
      <Trip

          tripTitle='Our Services'
          TripSubtitle='We offer a variety of services to meet your travel needs. From transportation to accommodations, we have you covered.'

          boxOneImg={serviceOne}
          boxOneHeading='Are you lost?'
          boxOneContent='Our map services ensure swift navigation, seamlessly guiding you from your current location to your desired destination with precision and efficiency. Whether you prefer traditional roadmaps, satellite views, or interactive terrain exploration, we offer a comprehensive range of map options to suit your needs.'

          boxTwoImg={serviceTwo}
          boxTwoHeading='We will get you there'
          boxTwoContent='
          Enjoy the utmost convenience and reliability with our transportation service, providing comfortable and dependable cars for your journey. With a focus on convenience and punctuality, we offer a range of reliable vehicles to ensure a smooth and stress-free travel experience.'

          boxThreeImg={serviceThree}
          boxThreeHeading='Get cozy!'
          boxThreeContent={`Discover a myriad of accommodation options on our travel site, from luxurious hotels to cozy hostels and unique stays, catering to every traveler's preferences and budget. With a wide selection of accommodations worldwide, we make it easy for you to find the perfect place to stay for your next adventure.`}
        />
    </div>
  )
}

export default Service