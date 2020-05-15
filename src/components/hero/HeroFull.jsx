import React from 'react'

const HeroFull = ({ image, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
      {children}
    </div>
  )
}

export default HeroFull
