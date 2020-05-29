import React from 'react'

const BannerContent = ({ data }) => {
  return (
    <div className="w-full h-full justify-evenly items-center lg:flex">
      {data.map(el => (
        <div key={el.title} className={el.title ? "text-center" : "bg-white"}>
          <h1 className="text-black-300 mb-4 odd:text-yellow-600">{el.title}</h1>
          <p className="w-full text-12 text-black-900 uppercase tracking-widest shadowDeep">{el.text}</p>
        </div>
      ))}
    </div>
  )
}

export default BannerContent
