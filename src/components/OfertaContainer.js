import Oferta from './Oferta'

const OfertaContainer = () => {
  return (
    <section className='section-precios'>
      <h2 className='caption'>Reserva tu Sesión</h2>
      {/* <h3 className="description">Contact</h3> */}
      <p>Contactame por mis redes sociales o por email para reservar una sesión<br />ó para tener una oferta personalizada</p>
      <div className='oferta_container'>
        <Oferta />
        <Oferta />
        <Oferta />
      </div>
    </section>
  )
}

export default OfertaContainer
