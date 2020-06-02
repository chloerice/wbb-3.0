import React from 'react'

const ButtonGallery = ({ color, shade, children }) => (
  <button className={`w-full h-6 text-13 rounded-full pt-4 pb-8 px-8 flex justify-center lg:justify-end items-center tracking-widest border border-${color}-${shade} hover:bg-${color}-${shade - 100} hover:border-solid hover:text-white hover:shadow-img`}>
    {children}
  </button>
)

export default ButtonGallery
