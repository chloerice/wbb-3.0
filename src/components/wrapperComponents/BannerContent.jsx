import React, { Fragment } from 'react'

const BannerContent = ({ data }) => {
  return (
    <Fragment>
      {data.map(el => (
        <div key={el.title} className={el.title ? "py-4 lg:w-33pc text-center" : "bg-white"}>
          {el.title === 'Countless' ?
            <h2 className="text-black-300 text-3r lg:text-3r lg:mb-4 text-yellow-600">{el.title}</h2>
            : <h2 className="text-black-300 text-3r lg:text-3r lg:mb-4">{el.title}</h2>
          }
          <p className="text-12 text-black-900 uppercase tracking-widest shadowDeep">{el.text}</p>
        </div>
      ))}
    </Fragment>
  )
}

export default BannerContent
