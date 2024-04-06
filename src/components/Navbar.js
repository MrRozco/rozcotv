import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faToolbox, faAddressBook, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



function Navbar() {

    const [ showMenu, setShowMenu ] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

  return (
    <div className=' fixed z-10 bg-white flex flex-col sm:flex-row m-auto p-5 mt-4 ml-5 sm:ml-6 md:ml-10 rounded-xl justify-between items-center px-8 shadow-md shadow-slate-500 w-11/12 mx-auto '>
        <div className='flex justify-between w-full sm:w-auto'>
                <Link to='/'>
                <h1 className='font-bold text-2xl'>TravelSite</h1>
                </Link>
            <div className=' sm:hidden cursor-pointer' onClick={toggleMenu}>
                {showMenu ? <FontAwesomeIcon icon={faTimes} className='text-2xl'  /> : <FontAwesomeIcon icon={faBars} className='text-2xl' />}
            </div>
        </div>
        <div className={`${showMenu ? 'block h-[350px]' : 'hidden'}  sm:flex sm:h-auto justify-between items-center text-center w-full sm:w-auto `}>
            <ul className='flex flex-col mt-4 sm:mt-0 sm:flex-row justify-between gap-[40px] sm:gap-5 font-semibold ' >
            <Link to='/' onClick={toggleMenu}><li className=' hover:bg-blue-200 px-2 py-1 rounded-lg w-auto ' ><FontAwesomeIcon icon={faHouse} /> Home</li></Link>
            <Link to='/About' onClick={toggleMenu}><li className=' hover:bg-blue-200 px-2 py-1 rounded-lg w-auto' ><FontAwesomeIcon icon={faCircleInfo} /> About</li></Link>
            <Link to='/Service' onClick={toggleMenu}><li className=' hover:bg-blue-200 px-2 py-1 rounded-lg w-auto' ><FontAwesomeIcon icon={faToolbox} /> Service</li></Link>
            <Link to='/Contact' onClick={toggleMenu}><li className=' hover:bg-blue-200 px-2 py-1 rounded-lg w-auto' ><FontAwesomeIcon icon={faAddressBook} /> Contact</li></Link>
            </ul>
            <button className=' font-semibold mt-9 sm:ml-3 sm:mt-0  bg-slate-200 py-1 px-3 rounded-md hover:bg-slate-300 hover:text-white w-full sm:w-auto' >Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar