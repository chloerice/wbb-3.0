import React from 'react'

const Button = ({type, children}) => {
  let cssStyle = null

  return (
    <button className="bg-yellow">
      {children}
    </button>
  )
}

export default Button
