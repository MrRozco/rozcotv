import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/pexels-photo-2031767.jpeg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import imgOne from '../assets/colombia1.jpg';
import imgTwo from '../assets/termales.jpg';
import imgThree from '../assets/tokyonight.jpg';
import imgFour from '../assets/japanStreet.avif';

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

        <Destination
          firstHeading='Coffee Axis Region - Colombia'
          firstText={`
          Welcome to Colombia's Coffee Axis Region, a captivating destination nestled in the Andes Mountains where the rich aroma of freshly roasted coffee permeates the air. Immerse yourself in the heart of Colombian coffee culture as you explore lush green plantations and meet passionate local farmers. Wander through charming colonial towns like Manizales, Pereira, and Armenia, each offering a blend of history, culture, and culinary delights. For the adventurous spirit, the region boasts opportunities for outdoor exploration, from hiking through rugged terrain to exhilarating paragliding experiences. Whether you're a coffee enthusiast or seeking an authentic Colombian experience, the Coffee Axis Region beckons with its enchanting landscapes and warm hospitality, inviting you to discover the magic of Colombia's coffee country.`}
          firstImgOne={imgOne}
          firstImgTwo={imgTwo}

          secondHeading='Tokyo - Japan'
          secondText={`Welcome to Tokyo, a vibrant metropolis where the pulse of the city comes alive after dark. Dive into the electrifying nightlife scene as you explore the neon-lit streets of districts like Shinjuku, Shibuya, and Roppongi, where skyscrapers and traditional izakayas coexist harmoniously. Indulge in a culinary adventure at world-class restaurants, cozy izakayas, and bustling street food stalls offering everything from sushi to ramen. Experience the thrill of karaoke in private booths, dance the night away in trendy clubs, or unwind in tranquil sake bars. From vibrant entertainment to hidden gems waiting to be discovered, Tokyo's nightlife promises an unforgettable journey into the heart of Japan's dynamic capital. `}
          secondImgOne={imgThree}
          secondImgTwo={imgFour}
        />

        <Trip 
          boxOneImg={imgOne}
          boxOneHeading='Title One'
          boxOneContent='Just some text right here'

          boxTwoImg={imgTwo}
          boxTwoHeading='Title Two'
          boxTwoContent='Just some text right here'

          boxThreeImg={imgThree}
          boxThreeHeading='Title Three'
          boxThreeContent='Just some text right here but this one is going to be much longer than the other 2 '
        />
        </div>
    </>
  )
}

export default Home