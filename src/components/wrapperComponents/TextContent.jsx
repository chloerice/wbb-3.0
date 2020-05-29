import React from 'react'

const TextContent = ({ isReverse, children }) => {
  let styles = 'w-full py-5pc border-r md:w-3/4 md:mx-10pc'

  if (isReverse) {
    styles = 'w-full py-5pc border-r md:w-3/4 md:mr-10pc'
  }

  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default TextContent
