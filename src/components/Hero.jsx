import React from 'react'

export default function Hero({ src, content }) {
  const heroContent = content ? (
    <div className="hero__content-wrapper">
      <p className="hero__content">{content}</p>
    </div>
  ) : null

  return (
    <div className="hero">
      <div className="hero__image" />
      {heroContent}
    </div>
  )
}
