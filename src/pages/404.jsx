import React from 'react'
import Layout from '../components/layout'

export default function NotFound() {
  return (
    <Layout>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h1>NOT FOUND</h1>
            <p>{"You just hit a route that doesn't exist...the sadness."}</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
