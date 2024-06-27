import React from 'react'
import { Link } from 'react-router-dom'

function Hero({ backgroundImage, imageAlt, title, subtitle, buttonText, buttonUrl, backgroundColor, textAlign, buttonColor }) {
  return (
    <div className={`relative w-full h-[600px] flex items-center justify-start bg-cover bg-center text-center mx-auto ${backgroundColor}`} 
        style={{backgroundImage: `url(${backgroundImage})`, backgroundColor: backgroundColor}} 
        aria-label={imageAlt} >
        <div className="absolute inset-0 bg-black opacity-40 md:opacity-0"></div>
        <div className={`${textAlign} z-5 relative`}>
            <h1 className="text-4xl sm:text-6xl font-bold ml-10 mb-4 text-red-700 ">{title && (title)} </h1>
            {subtitle && <h2 className="text-3xl sm:text-3xl text-white ml-10 mb-8">{subtitle}</h2>}
            {buttonText && <Link to={buttonUrl} className="mt-4 px-4 py-2 font-bold text-white rounded ml-10 text-2xl font-jersey hover:py-3 hover:px-6 " style={{backgroundColor: buttonColor}}>{buttonText}</Link>}
        </div>
    </div>
  )
}

export default Hero