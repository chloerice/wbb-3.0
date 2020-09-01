import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../../../components'

export default function Meetups() {
  return (
    <Layout header footer>
      <Helmet title="Meetups | We Build Black"></Helmet>
      <div>
        <h1>Meetups</h1>
      </div>
    </Layout>
  )
}
