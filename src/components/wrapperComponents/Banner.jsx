import React from 'react'

const Banner = ({ children }) => {
  return (
    <div className="w-full bg-yellow mb-2 md:mb-3r py-14 px-3r flex justify-center items-center">
      <div className="text-primary font-bold text-center">
        <p className="text-18 md:text-24">
          {children}
        </p>
      </div>
    </div>
  )
}

export default Banner
