import React from 'react'
import './hero.scss'

const HeroFull = ({ image, children }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className='hero_full'>
      {children}
    </div>
  )
}

export default HeroFull
