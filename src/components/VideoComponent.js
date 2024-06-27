import React from 'react';
import ReactPlayer from 'react-player';
import rozcoVideo from '../assets/rozcotvVideo.mp4';

function VideoComponent() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row px-10 py-12 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black to-red-900 justify-between content-start gap-10 lg:gap-10 mx-auto' >
            <div className=' text-center lg:text-left lg:w-1/2'>
                <h2 className='text-4xl sm:text-4xl font-bold  mb-2 text-red-700'>RozcoTV: Tu Ventana al Mejor Entretenimiento Global</h2>
                <p className=' text-xl sm:text-2xl text-white text-pretty' >
                RozcoTV es tu servicio de streaming de videos que te ofrece una experiencia inigualable de entretenimiento desde la comodidad de tu hogar. 
                Con RozcoTV, puedes disfrutar de una amplia variedad de películas, programas de televisión, televisión en vivo y canales internacionales, 
                permitiéndote explorar culturas y tradiciones de todo el mundo. Además, te mantenemos al día con los últimos estrenos de cine y te ofrecemos acceso 
                a cualquier partido de fútbol, juego de fútbol americano, pelea de boxeo y otros eventos deportivos. Conéctate, explora y disfruta del mejor entretenimiento desde cualquier 
                dispositivo, en cualquier momento y desde cualquier lugar. ¡Descubre un mundo de posibilidades con RozcoTV!
                </p>
            </div>
            <div className='rounded-lg overflow-hidden border-8 flex self-center w-[350px] md:w-[380px] h-auto sm:w-auto  lg:w-1/2 lg:h-auto '>
                <ReactPlayer  
                    url={rozcoVideo} 
                    playing={false} 
                    controls 
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    </div>
  )
}

export default VideoComponent;