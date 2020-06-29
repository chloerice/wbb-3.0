import React from 'react'
import InputContent from '../../wrapperComponents/InputContent'

const Input = ({ input, placeholder, addlClasses }) => {
  return (
    <InputContent addlStyles={'height: "3.7rem"'} addlClasses={'w-full mb-0'}>
      {input ? (
        <input
          type="text"
          required
          placeholder={placeholder}
          style={{
            height: '100%',
            background: 'transparent',
            color: '#000',
          }}
          className={`p-3 font-semibold uppercase ${addlClasses}`}
        />
      ) : (
        <textarea
          required
          cols="60"
          rows="5"
          placeholder={placeholder}
          style={{ background: 'transparent', color: '#000' }}
          className="font-semibold uppercase"
        />
      )}
    </InputContent>
  )
}

export default Input
