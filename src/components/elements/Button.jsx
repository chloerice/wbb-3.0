import React from 'react'

const Button = ({ color, shade, children }) => (
  <button className={`bg-${color}-${shade} h-6 w-150 mt-8 text-13 rounded-full pt-4 pb-8 px-8 flex justify-center items-center tracking-widest shadowDeep shadow hover:bg-${color}-${shade+100} hover:shadow-img`}>
    {children}
  </button>
)

export default Button
