import React from 'react'
import { Link } from 'react-router-dom'

function Hero({ backgroundImage, imageAlt, title, subtitle, buttonText, buttonUrl, backgroundColor, textAlign, buttonColor }) {
  return (
    
    <div className={`w-full h-[500px] flex items-center justify-start bg-cover bg-center text-center mx-auto ${backgroundColor}`} 
         style={{backgroundImage: `url(${backgroundImage})`, backgroundColor: backgroundColor}} 
         aria-label={imageAlt} >
        <div className={`${textAlign}`}>
            <h1 className="relative text-4xl sm:text-6xl font-bold text-white ml-10">{title}</h1>
            {subtitle && <h2 className="relative text-2xl sm:text-3xl text-white ml-10 mb-5">{subtitle}</h2>}
            {buttonText && <Link to={buttonUrl} className="relative mt-4 px-4 py-2 font-bold text-white rounded ml-10" style={{backgroundColor: buttonColor}}>{buttonText}</Link>}
        </div>
    </div>
  )
}

export default Hero