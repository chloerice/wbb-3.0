import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import className from 'classnames'

import { Nav, Footer, PageContainer, Hero } from '../components'

import '../assets/scss/detail-layout.scss'

export default function About() {
  return (
    <PageContainer>
      <Helmet title="About | We Build Black"></Helmet>
      <div>
        <h1>About</h1>
        <Footer />
      </div>
    </PageContainer>
  )
}

export const query = graphql`
  query About {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
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
