import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../../../components'

export default function BuildNextGen() {
  return (
    <Layout header footer>
      <Helmet title="Build Next Gen | We Build Black"></Helmet>
      <div>
        <h1>Build Next Gen</h1>
      </div>
    </Layout>
  )
}
