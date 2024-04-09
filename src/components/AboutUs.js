import React from 'react'

function AboutUs() {
  return (
    <>
        <div className=' flex flex-col justify-center self-center text-center py-8 px-[20%]' >
            <div className='mb-6' >
                <h1 className='text-4xl sm:text-3xl font-bold text-black mb-2' >Who Am I</h1>
                <p className=' text-1xl sm:text-xl text-black' >Hi, I'm Bryan Orozco, a web developer fueled by a relentless drive for success. Starting as a call center rep, I've climbed my way up to become a web developer, constantly raising the bar at every turn. With a blend of formal education and self-taught expertise, each project serves as a canvas for me to refine my craft. As an immigrant, I've learned the true meaning of perseverance and hard work, qualities that fuel my determination to excel and continually expand my knowledge base.</p>
            </div>
            <div className='my-4'> 
                <h1 className='text-4xl sm:text-3xl font-bold text-black mb-2' >My Mission</h1>
                <p className=' text-1xl sm:text-xl text-black' >
My mission is to continuously enhance my React skills and elevate my expertise in web development. Through this project, I aim to construct a modern website that adheres to industry-leading standards in SEO, semantics, scalability, code readability, and beyond. By treating this endeavor as if I were working for a reputable company, utilizing version control with Git, and meticulously planning the design using Figma, I aspire to not only refine my technical abilities but also to deliver a polished and impactful digital experience.</p>
            </div>
        </div>
    </>
  )
}

export default AboutUs