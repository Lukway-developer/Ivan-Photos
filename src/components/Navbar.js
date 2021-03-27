import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const Navbar = () => {
  const [navbarState, setNavbarState] = useState('nav_button_container')

  const openNavbar = () => {
    console.log(navbarState)
    setNavbarState('nav_button_container nav-showed')
  }

  const closeNavbar = () => {
    setNavbarState('nav_button_container nav-hidden')
  }

  return (
    <nav className='nav'>
      <p>Logo va aquí</p>
      {/* <img className='nav_logo' /> */}
      <button className='nav_button-open' onClick={openNavbar}><i className='fas fa-bars' /></button>
      <div className={navbarState}>
        <button className='nav_button-close' onClick={closeNavbar}><i className='fas fa-times' /></button>
        <Link className='nav_button' to='/'>Fotos</Link>
        <Link className='nav_button' to='/reservaciones'>Haz tu Reserva Ostia Puta de los Cojone</Link>
        <Contact />
      </div>
    </nav>
  )
}

export default Navbar
