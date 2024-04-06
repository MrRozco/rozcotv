import React from 'react'
import { Link } from 'react-router-dom'

function Hero({ backgroundImage, imageAlt, title, subtitle, buttonText, buttonUrl }) {
  return (
    
    <div className="w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center text-center mx-auto" style={{backgroundImage: `url(${backgroundImage})`}} aria-label={imageAlt} >
        <h1 className="relative text-4xl sm:text-6xl font-bold text-white">{title}</h1>
        {subtitle && <h2 className="relative text-2xl sm:text-3xl text-white">{subtitle}</h2>}
        {buttonText && <Link to={buttonUrl} className="relative mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded">{buttonText}</Link>}
    </div>
  )
}

export default Hero