import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout contact>
      <Helmet title="Contact us | We Build Black"></Helmet>
      <div className="page-heading">
        <h1>Contact us</h1>
      </div>
    </Layout>
  )
}
