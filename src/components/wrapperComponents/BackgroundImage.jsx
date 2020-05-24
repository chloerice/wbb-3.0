import React from 'react'
import './background-wrapper.scss'

const BackgroundImage = ({ image, children }) => {
  let isImage = null

  if (image) {
    isImage = image
  }

  return (
    <div
      style={{ backgroundImage: `url(${isImage})` }}
      className="background-wrapper">
      {children}
    </div>
  )
}

export default BackgroundImage
