import React from 'react'
import backgroundImg from '../assets/rozcotv_banner.png';
import Hero from '../components/Hero'
import Destination from '../components/Destination';
import luisDiaz from '../assets/luisDiaz.jpg'
import canelo from '../assets/canelo.webp'
import dragon from '../assets/houseOfTheDragon.webp'
import apes from '../assets/apes.avif'
import pablo from '../assets/pabloEscobar.jpg'
import chavo from '../assets/elChavo.jpg'
import romulus from '../assets/romulus.jpg'
import anillos from '../assets/anillos.jpg'

function Service() {
  return (
    <div className=' bg-gradient-to-t from-red-900 via-black to-black'>
      <Hero backgroundImage={backgroundImg} imageAlt={'Services poster'} title={'Servicios'} textAlign={'text-left'}   /> 
     
        <div className='py-12 '>
       <Destination

          

          firstHeading='Deportes en Vivo'
          firstText={`Vive la emoción de los deportes en tiempo real con nuestra cobertura en vivo. 
            Disfruta de tus eventos deportivos favoritos, desde partidos de fútbol y baloncesto hasta competiciones de deportes extremos y mucho más. 
            Con acceso a transmisiones en alta definición, podrás sentirte como si estuvieras en el estadio, sin perderte ni un solo detalle. 
            Además, mantente al tanto de los resultados, análisis y comentarios de expertos en vivo, para que siempre estés informado sobre lo que ocurre en el 
            mundo del deporte. No te pierdas la adrenalina y la pasión de cada juego, directamente a tu pantalla.`}
          firstImgOne={luisDiaz}
          firstImgTwo={canelo}

          secondHeading='Ultimos Estrenos'
          secondText={`Mantente al día con los últimos estrenos de películas y series. 
            Nuestra plataforma te ofrece las novedades más emocionantes y populares del cine y la televisión, permitiéndote disfrutar de contenido fresco y relevante. 
            Desde los últimos éxitos de taquilla hasta las nuevas temporadas de tus series favoritas, siempre tendrás acceso a lo mejor del entretenimiento. 
            Explora una variedad de géneros, descubre historias cautivadoras y personajes inolvidables. Además, con actualizaciones frecuentes, 
            nunca te perderás un lanzamiento importante. Mantén tu entretenimiento actualizado y disfruta de lo más nuevo, directamente a tu pantalla.`}
          secondImgOne={romulus}
          secondImgTwo={anillos}
        />

<Destination
          firstHeading='Tus Canales Favoritos'
          firstText={`Descubre y disfruta de una selección de tus canales favoritos de América Latina y Central. 
            Nuestra colección curada presenta lo mejor en entretenimiento, noticias, deportes y programación cultural,
             asegurando que te mantengas conectado con el contenido vibrante y diverso que resuena contigo. Desde telenovelas
              apasionantes y emocionantes eventos deportivos hasta las últimas noticias y películas clásicas, "Tus Canales Favoritos" 
              trae la riqueza de la televisión latinoamericana y centroamericana directamente a tu pantalla. Podrás ver tus programas 
              preferidos en cualquier momento y lugar, manteniéndote al día con lo que más te gusta. Con actualizaciones constantes y 
              acceso fácil, tu entretenimiento está siempre garantizado.`}
          firstImgOne={pablo}
          firstImgTwo={chavo}

        />
        </div>
    </div>
  )
}

export default Service