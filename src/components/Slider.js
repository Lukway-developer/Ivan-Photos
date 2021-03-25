import { useState } from 'react'

const Slider = ({ imageId, images, handleZoomClose }) => {
  const [currentImage, changeImage] = useState(imageId)

  // const sliderImage = document.querySelector('.slider_image')

  // sliderImage.animate([
  //   { opacity: 0 },
  //   { opacity: 1 }
  // ], {
  //   duration: 250,
  //   easing: 'ease-out'
  // })

  const slideToLeft = () => {
    if ((currentImage - 1) === -1) {
      changeImage(images.length - 1)
    } else {
      changeImage(currentImage - 1)
    }
  }

  const slideToRight = () => {
    if (currentImage === images.length - 1) {
      changeImage(0)
    } else {
      changeImage(currentImage + 1)
    }
  }

  const keyPress = (e) => {
    console.log(e)
    const key = e.keyCode
    if (key === 37) {
      slideToLeft()
    } else if (key === 39) {
      slideToRight()
    }
  }

  return (
    <div className='slider' onKeyUp={keyPress}>
      <button className='slider_button-left' title='Imágen Anterior' onClick={slideToLeft}><i className='fas fa-chevron-left' /></button>
      <img className='slider_image' src={images[currentImage].path} />
      <button className='slider_button-right' title='Imágen Siguiente' onClick={slideToRight}><i className='fas fa-chevron-right' /></button>

      <button className='slider_button-close' autoFocus onClick={handleZoomClose}><i className='fas fa-times' /></button>

      <span className='slider_counter'>{currentImage + 1} of {images.length}</span>

      <div className='slider_arrow_container'>
        <p>Usa las Flechas</p>
        <div className='slider_arrows'>
          <img src='./images/ArrowLeft.svg' />
          <img src='./images/ArrowRight.svg' />
        </div>
      </div>
    </div>
  )
}

export default Slider
