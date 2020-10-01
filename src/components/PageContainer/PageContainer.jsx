import React from 'react'

import { Nav, Footer } from '..'

import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return (
    <div className={styles.Wrapper}>
      <Nav />
      <div className={styles.PageContainer}>
        <div className={styles.PageContent}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}
