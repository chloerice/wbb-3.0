import React from 'react'
import './hero.scss'

const HeroFull = ({ image, title, caption, children, buttonText }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className='hero_full hero_action'>
      <h2 className="title">{title}</h2>
      <p className="caption">{caption}</p>
      <div className="content">
        {children}
      </div>
      <button>{buttonText}</button>
    </div>
  )
}

export default HeroFull
