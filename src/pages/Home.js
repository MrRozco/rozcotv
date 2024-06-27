import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/rozcotv_banner.png';
import Trip from '../components/Trip';
import VideoComponent from '../components/VideoComponent';
import ImageSlider from '../components/ImageSlider';
import furiosa from '../assets/furiosa-a-mad-max-saga-french-movie-poster.jpg';
import dragon from '../assets/houseOfTheDragon.webp'
import dune from '../assets/dunetwo.jpg';
import apes from '../assets/apes.avif'
import copa from '../assets/copaAmerica.webp'
import euroCopa from '../assets/euroCopa.webp'
import joel from '../assets/lou.jpg'
import CTASection from '../components/CTASection';
import television from '../assets/television-logos.jpg'
import releases from '../assets/moviePosters.jpg'
import deportes from '../assets/copaAmerica.jpg'

function Home() {
  return (
    <>  
        <div  >

        
        <Hero 
          backgroundImage={backgroundImg} 
          imageAlt={'Venice at night'} 
          buttonUrl={'/service'} 
          title={'RozcoTV'} 
          subtitle={'Una nueva manera de ver televisión'} 
          buttonText={'Descubre más!'}
          backgroundColor={'black'}
          textAlign={"text-left"}
          buttonColor={'rgb(127 29 29)'}
        />

        <VideoComponent />

        <ImageSlider images={[copa, dragon, euroCopa, apes, furiosa, joel, dune  ]} />

        <CTASection />
       
        <Trip 
          boxOneImg={deportes}
          boxOneHeading='Deportes en vivo'
          boxOneContent='Vive la emoción de los deportes en tiempo real con nuestra cobertura en vivo. 
          Disfruta de tus eventos deportivos favoritos, desde fútbol y baloncesto hasta deportes extremos y más. 
          No te pierdas ni un solo momento de acción y mantente al tanto de los resultados y análisis en vivo.'

          boxTwoImg={releases}
          boxTwoHeading='Ultimos Estrenos'
          boxTwoContent={`Mantente al día con los últimos estrenos de películas y series. 
            Disfruta de las novedades más emocionantes y populares del cine y la televisión. 
            No te pierdas ningún lanzamiento y mantén tu entretenimiento actualizado con contenido fresco y emocionante.

`}

          boxThreeImg={television}
          boxThreeHeading='Tus canales favoritos'
          boxThreeContent={`Disfruta de tus canales favoritos de América Latina y Central, con lo mejor en entretenimiento, noticias y deportes. 
            Ve tus telenovelas y canales de noticias favoritos en cualquier momento y lugar, directamente a tu pantalla.`}
        />

        
        </div>
    </>
  )
}

export default Home