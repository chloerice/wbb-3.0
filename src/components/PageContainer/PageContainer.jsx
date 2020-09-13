import React from 'react'

import { Nav, Footer } from '../../components'

import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return (
    <div>
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
