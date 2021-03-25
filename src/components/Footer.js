import Contact from '../components/Contact'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='copyright'>&copy; Ivan Photos - 2021</p>
      <a className='lukway_link' href='https://www.lukway.site'>Powered by <img className='lukway_logo' src='./images/lukway_logo.svg' /></a>
      <Contact />
    </footer>
  )
}

export default Footer
