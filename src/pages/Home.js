import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/rozcotv_banner.png';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import imgOne from '../assets/colombia1.jpg';
import imgTwo from '../assets/termales.jpg';
import imgThree from '../assets/tokyonight.jpg';
import imgFour from '../assets/japanStreet.avif';
import tripOne from '../assets/pexels-pixabay-163848.jpg';
import tripTwo from '../assets/pexels-pixabay-210459.jpg';
import tripThree from '../assets/pexels-stephan-seeber-1054164.jpg';

function Home() {
  return (
    <>  
        <div  >
        <Hero 
          backgroundImage={backgroundImg} 
          imageAlt={'Venice at night'} 
          buttonUrl={'/'} 
          title={'RozcoTV'} 
          subtitle={'Una nueva manera de ver televisión'} 
          buttonText={'Descubre más!'}
          backgroundColor={'black'}
          textAlign={"text-left"}
          buttonColor={'rgb(127 29 29)'}
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

          tripTitle='Discover Your Next Adventure'
          TripSubtitle='Explore our curated selection of travel experiences and embark on a journey of a lifetime.'

          boxOneImg={tripOne}
          boxOneHeading='Pack your water!'
          boxOneContent='Embark on an unforgettable journey through the mesmerizing deserts with our travel company. From camelback adventures to starlit campsites, immerse yourself in the beauty and tranquility of the desert landscape with our expert-guided tours.'

          boxTwoImg={tripTwo}
          boxTwoHeading='Historic Places'
          boxTwoContent={`
          Step back in time and explore the majestic wonders of history with our travel company's castle tours. From ancient fortresses to opulent palaces, unlock the secrets of bygone eras and experience the grandeur of these iconic landmarks firsthand.`}

          eboxThreeImg={tripThree}
          boxThreeHeading='Feeling adventurous?'
          boxThreeContent={`
          Discover the awe-inspiring allure of snowy mountain peaks with our travel company. From heart-pounding ski slopes to tranquil alpine retreats, immerse yourself in the majestic beauty and thrilling adventures of the world's most captivating winter destinations.`}
        />
        </div>
    </>
  )
}

export default Home