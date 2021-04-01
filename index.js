const container = document.querySelector('.slider_image_container')
container.style.cursor = 'grab'

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseDownHandler = function (e) {
  container.style.cursor = 'grabbing'
  container.style.userScontainerct = 'none'

  pos = {
    left: container.scrollLeft,
    top: container.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY
  }

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
}

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x
  const dy = e.clientY - pos.y

  // Scroll the containerment
  container.scrollTop = pos.top - dy
  container.scrollLeft = pos.left - dx
}

const mouseUpHandler = function () {
  container.style.cursor = 'grab'
  container.style.removeProperty('user-scontainerct')

  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
}

// Attach the handler
container.addEventListener('mousedown', mouseDownHandler)
