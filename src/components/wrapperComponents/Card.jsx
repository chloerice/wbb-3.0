import React from 'react'
import Image from '../elements/Image'

const Card = ({ data }) => {
  return (
    <div className="w-full sm:flex justify-between">
      {data.map(card => (
        <div key={card.title} style={{ maxWidth: '275px' }} className="flex flex-col items-center">
          <Image image={card.image} width={'255px'} height={'175px'} />
          <h3 className="text-black-900">{card.title}</h3>
          <p className="text-black-600">{card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Card
