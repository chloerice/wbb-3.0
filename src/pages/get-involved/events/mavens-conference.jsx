import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/detail-layout.module.scss'

export default function Mavens({ data }) {
  return (
    <PageContainer>
      <Helmet title="Mavens I/O Black Women in Tech Conference | We Build Black" />
      <main>
        <h1>Mavens I/O Black Women in Tech Conference</h1>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query Mavens {
    allFile(filter: { relativeDirectory: { eq: "mavens" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
