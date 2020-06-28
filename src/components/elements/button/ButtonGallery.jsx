import React from 'react'

const ButtonGallery = ({ color, shade, children }) => (
  <button className={`w-full h-6 text-13 rounded-full py-6 px-8 flex justify-center lg:justify-end items-center tracking-widest border border-${color}-${shade} hover:bg-${color}-${shade - 100} hover:border-solid hover:shadow-img`}>
    {children}
  </button>
)

export default ButtonGallery
