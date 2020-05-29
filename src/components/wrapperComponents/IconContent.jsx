import React from 'react'
import Svg from '../elements/Svg'

const IconContent = ({ icon, title, color }) => {
  return (
    <div className="mb-8 flex flex-col items-center md:mb-0 md:items-end">
      <div className="w-p20 md:w-p90">
        <Svg icon={icon} />
      </div>
      <h2 className={`${color} text-center md:text-right`}>{title}</h2>
    </div>
  )
}

export default IconContent
