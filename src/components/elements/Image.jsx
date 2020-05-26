import React from 'react'

const Image = ({ image, width }) => {
  return (
    <img src={image} alt="" className={`${width} h-full p-2`} />
  )
}

export default Image
