const Image = ({ id, image, handleZoomOpen }) => {
  return (
    <div className='image'>
      <img className='image-principal' src={image} />
      <img className='image-cover' src='./images/meme.jpeg' onClick={(e) => handleZoomOpen(id, e)} />
    </div>
  )
}

export default Image
