import React from 'react'

const TextContent = ({ isReverse, children }) => {
  let styles = 'w-full p-5pc border-r md:w-3/4'

  if (isReverse) {
    styles = 'w-full p-5pc border-r md:w-3/4'
  }

  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default TextContent
