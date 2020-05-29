import React from 'react'

const BackgroundOverlay = ({color}) => {
  return (
    <div className={`bg-${color} w-full h-full absolute inset-0 bg-opacity-75`} />
  )
}

export default BackgroundOverlay
