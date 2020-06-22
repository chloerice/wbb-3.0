import React from 'react'

const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      style={{ backgroundColor: 'transparent' }}
      className="font-jura w-full text-white text-14 pb-2 text-center uppercase border-b border-solid border-white" />
  )
}

export default Input
