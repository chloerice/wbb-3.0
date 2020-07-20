import React from 'react'
import Img from 'gatsby-image'

export default function Hero({ src, content }) {
  const heroContent = content ? (
    <div className="hero__content-wrapper">
      <p className="hero__content">{content}</p>
    </div>
  ) : null

  const imageMarkup = src ? (
    <Img className="hero__image" fluid={src} />
  ) : (
    <div className="hero__image" />
  )

  return (
    <div className="hero">
      {imageMarkup}
      {heroContent}
    </div>
  )
}
