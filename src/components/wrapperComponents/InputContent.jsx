import React from 'react'

const InputContent = ({ children, addlStyles, addlClasses }) => {
  return (
    <div
      style={{ addlStyles }}
      className={`border border-black-100 border-solid rounded ${addlClasses}`}
    >
      {children}
    </div>
  )
}

export default InputContent
