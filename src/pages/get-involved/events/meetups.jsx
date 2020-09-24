/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/meetups.module.scss'

export default function Meetups({ data }) {
  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('hero')
  )

  const sbbImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('SBB')
  )

  const bseImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('BSE')
  )

  return (
    <PageContainer>
      <Helmet title="Mavens I/O Black Women in Tech Conference | We Build Black" />
      <header className={styles.Hero}>
        <div className={styles.HeroContentBlock}>
          <h1 className={styles.HeroHeading}>Find your people</h1>
          <p className={styles.HeroText}></p>
        </div>
        <div className={styles.HeroImageBlock}>
          <div className={styles.HeroImageOverlay} />
          <Img
            className={styles.HeroImage}
            fluid={heroImage.childImageSharp.fluid}
            alt=""
          />
        </div>
      </header>
      <main className={styles.Main}>
        <div className={styles.MeetupSection}>
          <h2 className={styles.SectionHeading}>WBB Meetups</h2>

          <div className={styles.Meetup}>
            <div className={styles.MeetupContent}>
              <p>
                <span className={styles.MeetupContentHighlight}>
                  She Builds Black
                </span>{' '}
                is a network of Black women technologists who come together to
                support and advance each other's careers.
              </p>
            </div>
            <div className={styles.MeetupImageWrapper}>
              <Img
                className={styles.MeetupImage}
                fluid={sbbImage.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.Meetup}>
            <div className={styles.MeetupContent}>
              <p>
                <span className={styles.MeetupContentHighlight}>
                  Black Software Engineers of NYC
                </span>{' '}
                is a space to mix ideas, work on code, get help on projects, and
                discuss the industry. Anyone is welcome, but the aim and hope of
                this group is to facilitate the growth of Black developers.
                Whether it be collaborating on a startup idea or helping a
                member to clarify their understanding of a library
              </p>
            </div>
            <div className={styles.MeetupImageWrapper}>
              <Img
                className={styles.MeetupImage}
                fluid={bseImage.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query Meetups {
    allFile(filter: { relativeDirectory: { eq: "meetups" } }) {
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
