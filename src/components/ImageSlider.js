
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './coverstyles.css';

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

function ImageSlider({images}) {
  return (
    <div className='  bg-gradient-to-b lg:bg-gradient-to-r from-black via-black to-red-900  pt-6 pb-10'>

    <h2 className='  md:text-5xl text-4xl font-bold text-center text-red-700 '>Ultimos Estrenos</h2>

    <p className='  text-white md:text-1xl text-2xl text-center'>Descubre los ultimos estrenos y los eventos mas esperados:</p>

    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[ Autoplay, EffectCoverflow, Navigation]}
        className="mySwiper h-100%"
      >
     {images.map((image, index) => (
        <SwiperSlide key={index} className=' border-4 border-red-800 '>
            <img src={image} alt={`Slide ${index}`}/>
        </SwiperSlide>
     ))}
    </Swiper>
    </div>
  )
}

export default ImageSlider;