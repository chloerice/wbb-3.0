import React from 'react'
import './floating-div.scss'

const FloatingDiv = ({ image, top, left, right, children }) => {
  return (
    <div style={{ 
      backgroundImage: `url(${image})`,
      top: `${top}`, 
      left: `${left}`, 
      right: `${right}` }}
      className="floating-div">
      {children}
    </div>
  )
}

export default FloatingDiv
