import React from 'react'

import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return <div className={styles.PageContainer}>{children}</div>
}
