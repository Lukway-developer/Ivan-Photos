import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <p>Logo va aquí</p>
      {/* <img className='nav_logo' /> */}
      <div className='nav_button_container'>
        <Link className='nav_button' to='/'>Fotos</Link>
        <Link className='nav_button' to='/reservaciones'>Hace tu Reserva</Link>
      </div>
    </nav>
  )
}

export default Navbar
