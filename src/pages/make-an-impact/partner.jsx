import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { navigate, graphql } from 'gatsby'

import { PageContainer } from '../../components'

import styles from '../../assets/scss/partner.module.scss'

export default function Partner({ data }) {
  const fullWidthImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('swag')
  )

  return (
    <PageContainer>
      <Helmet title="Partner | We Build Black"></Helmet>
      <main className={styles.Main}>
        <section>
          <div className={styles.Hero}>
            <div className={styles.HeroContent}>
              <h1 className={styles.HeroHeading}>
                Partnership is key to moving the needle on our mission.
              </h1>
              <p className={styles.HeroBody}>
                We believe that in order to build a tech industry that truly
                includes everyone, we need partners that seek to actively
                dismantle the status quo.
              </p>
            </div>
            <div className={styles.HeroImageWrapper}>
              <div className={styles.HeroImageOverlay}></div>
              <Img
                className={styles.HeroImage}
                fluid={fullWidthImage.childImageSharp.fluid}
                alt="Mavens I/O Black Women in Tech Conference Swag bags"
              />
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query Partner {
    allFile(filter: { relativeDirectory: { eq: "partner" } }) {
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
