import React from 'react'

const Image = ({ image, width, height }) => {
  return (
    <img src={image} alt="" style={{ width: `${width}`, height: `${height}` }} className="h-full p-2" />
  )
}

export default Image
