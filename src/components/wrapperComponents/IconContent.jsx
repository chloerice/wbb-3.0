import React from 'react'
import Svg from '../elements/Svg'

const IconContent = ({ icon, title, color, isReverse }) => {
  let divStyles = 'md:items-end'
  let textStyles = 'md:text-right'

  if (isReverse) {
    divStyles = 'md:items-start'
    textStyles = 'md:text-left'
  }

  return (
    <div className={`py-5pc mb-8 flex flex-col items-center md:mb-0 ${divStyles}`}>
      <div className="w-p20 md:w-p50">
        <Svg icon={icon} />
      </div>
      <h1 className={`${color} text-center md:mt-0 ${textStyles} shadowDeep`}>{title}</h1>
    </div>
  )
}

export default IconContent
