import React from 'react'

const Button = ({ color, shade, children }) => (
  <button
    className={`bg-${color}-${shade} h-6 w-150 text-13 rounded-full py-10 px-7r flex justify-center items-center tracking-widest shadowDeep shadow hover:bg-${color}-${shade +
      100} hover:shadow-img`}
  >
    <p className="text-white text-18 tracking-widest font-bold uppercase">
      {children}
    </p>
  </button>
)

export default Button
