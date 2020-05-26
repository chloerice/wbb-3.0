import React from 'react'
import Image from '../Image'
import BackgroundImage from '../../wrapperComponents/BackgroundImage'

const ThreeGrid = ({ images }) => {
  return (
    <div className="w-full pt-6r md:pb-3r sm:flex">
      <div className="h-full hidden sm:flex sm:w-2/5 md:w-full flex-col">
        <Image image={images[0]} width={'w-full'} />
        <div className="flex justify-end">
          <Image image={images[1]} width={'w-full sm:w-3/4 lg:w-2/3'} />
        </div>
      </div>
      <div className="sm:w-3/5 md:w-auto">
        <Image image={images[2]} width={'w-full'} />
      </div>
    </div>
  )
}

export default ThreeGrid