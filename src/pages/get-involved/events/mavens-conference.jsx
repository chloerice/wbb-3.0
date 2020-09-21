/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/detail-layout.module.scss'

export default function Mavens({ data }) {
  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('crowd-wideview')
  )

  const goalImageOne = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('stage-panel')
  )

  const goalImageTwo = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('candid-crowd')
  )

  const goalImageThree = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('stage-fireside')
  )

  return (
    <PageContainer>
      <Helmet title="Mavens I/O Black Women in Tech Conference | We Build Black" />
      <header className={styles.Hero}>
        <div className={styles.HeroContentBlock}>
          <h1 className={styles.HeroHeading}>
            Mavens I/O: Black Women in Tech Conference
          </h1>
          <p className={styles.HeroText}>
            Connecting, engaging, and empowering Black women technologists
            through compelling talks, interactive workshops, and lively
            networking.
          </p>
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
        <div className={styles.GoalSection}>
          <h2 className={styles.SectionHeading}>Our vision</h2>
          <div className={styles.Goal}>
            <div className={styles.GoalContent}>
              <p>
                <span className={styles.GoalContentHighlight}>
                  Amplify the voices of women of color
                </span>
                , both up and coming and those at the top of their fields.
              </p>
            </div>
            <div className={styles.GoalImageWrapper}>
              <Img
                className={styles.GoalImage}
                fluid={goalImageOne.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.Goal}>
            <div className={styles.GoalContent}>
              <p>
                <span className={styles.GoalContentHighlight}>
                  Provide a safe, liberating space
                </span>{' '}
                for women to engage each other in honest, meaningful discussions
                around their experiences navigating education and careers in
                tech at the intersections of race, gender, and sexuality.
              </p>
            </div>
            <div className={styles.GoalImageWrapper}>
              <Img
                className={styles.GoalImage}
                fluid={goalImageTwo.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.Goal}>
            <div className={styles.GoalContent}>
              <p>
                <span className={styles.GoalContentHighlight}>
                  Afford opportunities for networking and mentorship
                </span>{' '}
                with companies committed to cultivating an equitable tech
                industry.
              </p>
            </div>
            <div className={styles.GoalImageWrapper}>
              <Img
                className={styles.GoalImage}
                fluid={goalImageThree.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.HighlightVideoSection}>
          <h2 className={styles.SectionHeading}>2019 Highlights</h2>
          <div className={styles.VideoContainer}>
            <iframe
              allowFullscreen
              className={styles.Video}
              title="Mavens I/O 2019 Highlights"
              src="https://www.youtube.com/embed/qx5RGywiAIs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        <div className={styles.ActionSection}>
          <h2 className={styles.SectionHeading}>
            {`We're taking Mavens I/O global`}
          </h2>
          <p className={styles.ActionContent}>
            Get in touch today about{' '}
            <a className={styles.Action} href="/make-an-impact/volunteer">
              volunteering
            </a>{' '}
            at or{' '}
            <a className={styles.Action} href="/make-an-impact/volunteer">
              sponsoring
            </a>{' '}
            our virtual 2021 event
          </p>
        </div>
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
