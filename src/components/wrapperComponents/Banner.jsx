import React from 'react'
import './banner-wrapper.scss'


const Banner = ({children}) => {
  return (
    <div className="banner-wrapper">
      {children}
    </div>
  )
}

export default Banner
