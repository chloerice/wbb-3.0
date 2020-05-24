import React from 'react'
import './hero.scss'

const HeroFull = ({ width, image, color, title, caption, children, buttonText }) => {
  let isImage = null

  if (image) {
    isImage = image
  }

  return (
    <div style={{ backgroundImage: `url(${isImage})` }} className='hero_full hero_action'>
      <div
        style={{ background: `${color}` }}
        className="background-overlay"></div>
      <div style={{ width: `${width}` }} className="hero-container">
        <h2 className="title">{title}</h2>
        <p className="caption">{caption}</p>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroFull
