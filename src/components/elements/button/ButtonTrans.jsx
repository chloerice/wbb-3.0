import React from 'react'

const ButtonTrans = ({ color, shade, children }) => (
  <button className={`mx-auto h-6 w-150 rounded-full py-6 px-8 flex justify-center items-center tracking-widest border text-white text-12 tracking-widest font-bold uppercase border-${color}-${shade} hover:text-yellow-600 hover:bg-white hover:border-solid hover:shadow-img`}>
    {children}
  </button>
)

export default ButtonTrans
