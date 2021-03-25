import { useState } from 'react'
import Image from './Image'
import Slider from './Slider'

const images = [
  {
    id: 0,
    path: './images/Centuoro - 1.jpg'
  },
  {
    id: 1,
    path: './images/Centuoro - 2.jpg'
  },
  {
    id: 2,
    path: './images/Centuoro - 3.jpg'
  },
  {
    id: 3,
    path: './images/Centuoro - 4.jpg'
  },
  {
    id: 4,
    path: './images/Centuoro - 5.jpg'
  },
  {
    id: 5,
    path: './images/Centuoro - 6.jpg'
  },
  {
    id: 6,
    path: './images/Centuoro - 7.jpg'
  },
  {
    id: 7,
    path: './images/Centuoro - 8.jpg'
  },
  {
    id: 8,
    path: './images/Centuoro - 9.jpg'
  },
  {
    id: 9,
    path: './images/Centuoro - 10.jpg'
  },
  {
    id: 10,
    path: './images/Centuoro - 11.jpg'
  },
  {
    id: 11,
    path: './images/Centuoro - 12.jpg'
  },
  {
    id: 12,
    path: './images/Centuoro - 1.jpg'
  },
  {
    id: 13,
    path: './images/Centuoro - 2.jpg'
  },
  {
    id: 14,
    path: './images/Centuoro - 3.jpg'
  },
  {
    id: 15,
    path: './images/Centuoro - 4.jpg'
  },
  {
    id: 16,
    path: './images/Centuoro - 5.jpg'
  },
  {
    id: 17,
    path: './images/Centuoro - 6.jpg'
  },
  {
    id: 18,
    path: './images/Centuoro - 7.jpg'
  },
  {
    id: 19,
    path: './images/Centuoro - 8.jpg'
  },
  {
    id: 20,
    path: './images/Centuoro - 9.jpg'
  },
  {
    id: 21,
    path: './images/Centuoro - 10.jpg'
  },
  {
    id: 22,
    path: './images/Centuoro - 11.jpg'
  },
  {
    id: 23,
    path: './images/Centuoro - 12.jpg'
  }
]

const ImageContainer = () => {
  const [sliderState, setSliderState] = useState({
    hidden: false,
    showImage: ''
  })
  const handleZoomOpen = (id) => {
    console.log('open')
    setSliderState({
      hidden: true,
      imageId: id
    })
  }
  const handleZoomClose = () => {
    console.log('close')
    setSliderState({
      hidden: false,
      imageId: ''
    })
  }
  return (
    <div className='image_container'>
      {images.map(images => <Image key={images.id} id={images.id} image={images.path} handleZoomOpen={handleZoomOpen} />)}
      {sliderState.hidden ? <Slider imageId={sliderState.imageId} images={images} handleZoomClose={handleZoomClose} /> : <></>}
    </div>
  )
}

export default ImageContainer
