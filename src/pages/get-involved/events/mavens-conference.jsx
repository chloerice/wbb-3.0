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
                  Creating a platform for Black women to create opportunity amongst each other 
                </span> is central to our mission when hosting Mavens I/O. Every year tech professionals from all levels 
                come to this event to meet like-mided women with the intention of uplifting 
              and learning.
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
                  A safe and liberating space
                </span>{' '}
                for engaging in honest and meaningful discussions.
                A Black women's experience navigating education and careers in
                tech can be something that's uncomfortable to talk about. Being able
                to share your stories in a judge-free environment gives these women
                the sense of a shared understanding. This also initiates pathways for
                attendees to create the change they want by forming relationships that
                 last after the event.
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
                  Learn valuable skills from talented mavens 
                </span>{' '}
                who come from all different walks of life. From the hottest JavaScript 
                library to the best tips on how to crush an interview, our workshop instructors
                will make sure you've left here having learned something new.
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
