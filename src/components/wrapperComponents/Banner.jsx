import React from 'react'

const Banner = ({ children }) => {
  return (
    <div className="w-full bg-yellow py-14 px-3r flex justify-center items-center">
      <div className="font-jura text-24 text-brown-900 font-bold text-center">
        {children}
      </div>
    </div>
  )
}

export default Banner
