import React from 'react'
import './hero.scss'

const HeroFull = ({ image, children }) => {
  return (
    <div className='hero_full'>
      {children}
    </div>
  )
}

export default HeroFull
