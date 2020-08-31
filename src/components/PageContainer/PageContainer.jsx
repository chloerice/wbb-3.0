import React from 'react'

import { Nav, Footer } from '../../components'

import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return (
    <div className={styles.PageContainer}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
