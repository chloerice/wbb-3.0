import React from 'react'

const FloatingDiv = ({ top, left, right, children }) => {
  return (
    <div style={{
      transform: 'translateY(-50%)',
      top: `${top}`,
      left: `${left}`,
      right: `${right}`
    }}
      className="z-10 absolute bg-center bg-cover bg-no-repeat max-w-med flex justify-center items-center shadow-float">
      {children}
    </div>
  )
}

export default FloatingDiv
