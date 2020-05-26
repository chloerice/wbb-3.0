import React from 'react'

const Button = ({ color, children }) => (
  <button className={`bg-${color} h-6 w-150px text-13 font-arial font-medium tracking-widest shadow-float hover:shadow-img`}>
    {children}
  </button>
)

export default Button
