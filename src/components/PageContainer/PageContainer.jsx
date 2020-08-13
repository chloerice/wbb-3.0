import React from 'react'

import { Nav } from '../Nav'

import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return (
    <div className={styles.PageContainer}>
      <Nav />
      {children}
    </div>
  )
}
