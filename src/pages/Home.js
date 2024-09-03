import React from 'react'
import Hero from '../components/Hero'
import backgroundImg from '../assets/rozcotv_banner.png';
import Trip from '../components/Trip';
import VideoComponent from '../components/VideoComponent';
import ImageSlider from '../components/ImageSlider';
import dragon from '../assets/houseOfTheDragon.webp'
import joel from '../assets/lou.jpg'
import CTASection from '../components/CTASection';
import television from '../assets/television-logos.jpg'
import premier from '../assets/premier.jpg'
import santander from '../assets/ligasan.jpg'
import latestcoll from '../assets/latestcollage.jpg'
import romulus from '../assets/romulus.jpg'
import villano from '../assets/villano.jpg'
import tornado from '../assets/tornado.jpg'
import anillos from '../assets/anillos.jpg'


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

        <ImageSlider images={[premier, anillos, santander, romulus, villano, joel, tornado, dragon  ]} />

        <CTASection />
       
        <Trip 
          boxOneImg={santander}
          boxOneHeading='Deportes en vivo'
          boxOneContent='Vive la emoción de los deportes en tiempo real con nuestra cobertura en vivo. 
          Disfruta de tus eventos deportivos favoritos, desde fútbol y baloncesto hasta deportes extremos y más. 
          No te pierdas ni un solo momento de acción y mantente al tanto de los resultados y análisis en vivo.'

          boxTwoImg={latestcoll}
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