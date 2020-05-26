import React from 'react'
import Image from '../Image'
import BackgroundImage from '../../wrapperComponents/BackgroundImage'

const ThreeGrid = ({ images }) => {
  return (
    <div className="w-full pt-6r pb-3r md:flex">
      <div className="h-full w-full flex flex-col">
        <Image image={images[0]} width={'w-full'} />
        <div className="flex justify-end">
          <Image image={images[1]} width={'w-2/3'} />
        </div>
      </div>
      <div className="">
        <Image image={images[2]} width={'w-full'} />
      </div>
    </div>
  )
}

export default ThreeGrid