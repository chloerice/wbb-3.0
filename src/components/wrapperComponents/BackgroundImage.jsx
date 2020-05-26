import React from 'react'

const BackgroundImage = ({ image, children }) => {

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-no-repeat bg-center bg-cover">
      {children}
    </div>
  )
}

export default BackgroundImage
