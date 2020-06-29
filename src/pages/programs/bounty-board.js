import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../../components/Layout'

export default function BountyBoard() {
  return (
    <Layout header footer>
      <Helmet title="Bounty Board | We Build Black"></Helmet>
      <div>
        <h1>Bounty Board</h1>
      </div>
    </Layout>
  )
}
