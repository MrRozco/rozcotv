import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faToolbox, faAddressBook, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import logo from '../assets/logo-lg.png'

const menuItems = [
    { path: '/', icon: faHouse, label: 'Inicio' },
    { path: '/Service', icon: faToolbox, label: 'Servicios' },
    { path: '/Contact', icon: faAddressBook, label: 'Contacto' },
];


function Navbar() {

    const [ showMenu, setShowMenu ] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

  return (
    <header className=' fixed z-10 bg-white flex flex-col sm:flex-row m-auto p-5 mt-4 ml-5 sm:ml-6 md:ml-10 rounded-xl justify-between items-center px-8 shadow-md shadow-slate-500 w-11/12 mx-auto '>
        <nav className='flex justify-between w-full sm:w-auto'>
                <Link to='/'>
                <img src={logo} alt="RozcoTV Logo" className="h-16 w-16 sm:h-15 sm:w-15" />
                </Link>
            <div className=' sm:hidden cursor-pointer self-center' onClick={toggleMenu}>
                {showMenu ? <FontAwesomeIcon icon={faTimes} className='text-2xl'  /> : <FontAwesomeIcon icon={faBars} className='text-2xl' />}
            </div>
        </nav>
        <div className={`${showMenu ? 'block h-[250px] z-20' : 'hidden'}  sm:flex sm:h-auto justify-between items-center text-center w-full sm:w-auto `}>
            <ul className='flex flex-col mt-4 sm:mt-0 sm:flex-row justify-between gap-[40px] sm:gap-5 font-semibold ' >
                {menuItems.map((item, index) => (
                    <Link className=' hover:bg-red-700 hover:text-white text-red-900 px-5 py-2 rounded-lg w-auto sm:mr-10 hover:scale-110'  key={index} to={item.path} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={item.icon} className='mr-2 sm:mr-3' /> {item.label}
                    </Link>
                ))}
            </ul>
        </div>
    </header>
  )
}

export default Navbar