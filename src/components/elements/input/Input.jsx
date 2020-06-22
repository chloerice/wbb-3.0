import React from 'react'
import InputContent from '../../wrapperComponents/InputContent'

const Input = ({ input, placeholder, addlClasses }) => {
  return (
    <InputContent>
      {input ? (
        <input
          type="text"
          required
          placeholder={placeholder}
          style={{ background: 'transparent', color: '#000' }}
          className={`font-semibold uppercase ${addlClasses}`}
        />
      ) : (
        <textarea
          required
          placeholder={placeholder}
          style={{ background: 'transparent', color: '#000' }}
          className="font-semibold uppercase"
        />
      )}
    </InputContent>
  )
}

export default Input
