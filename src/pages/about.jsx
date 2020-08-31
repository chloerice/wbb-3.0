import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import { Nav, Footer, PageContainer } from '../components'

import styles from '../assets/scss/about.module.scss'

export default function About({ data }) {
  const fullWidthImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('codenmix')
  )

  const defaultHeadshotMan = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('man1')
  )

  const defaultHeadshotWoman = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('woman1')
  )

  return (
    <PageContainer>
      <Helmet title="About | We Build Black"></Helmet>
      <main className={styles.About}>
        <section className={styles.IntroSection}>
          <div className={styles.IntroHeadingWrapper}>
            <h1 className={styles.IntroHeading}>How it all started</h1>
            <div className={styles.VerticalLine} />
          </div>

          <div className={styles.IntroContentWrapper}>
            <div className={styles.IntroTextWrapper}>
              <p className={styles.IntroBody}>
                {`In November of 2016, Devin Jackson was the only Black software engineer at his job. Sick of feeling isolated, he scoured the web for a local community of other devs like him. None existed, so he created the Black Software Engineers of NYC Meetup. He hosted the group every Saturday afternoon in a small office in Williamsburg. The group's numbers exploded, hitting the 1,000 member mark in its first 6 months. A core crew of members became fast friends, and after a year of building together they wanted to build something bigger.`}
              </p>
              <p className={styles.IntroBody}>
                {`In November of 2017, We Build Black was founded as a 501(c)(3) non-profit organization. Since then, WBB has hosted the Mavens I/O: Black Women in Tech Conference twice, garnering sponsorship from Google, JP Morgan Chase, Birchbox, The New York Times, and many more. `}
              </p>
            </div>
            <div className={styles.VideoContainer}>
              <iframe
                className={styles.Video}
                src="https://www.youtube.com/embed/-aOPtTK6GlM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
              ></iframe>
            </div>
          </div>
        </section>

        <section className={styles.TeamSection}>
          <h2 className={styles.TeamHeading}>Meet the squad</h2>
          <ul className={styles.TeamList}>
            <li className={styles.TeamMember}>
              <div className={styles.HeadshotWrapper}>
                <Img
                  className={styles.Headshot}
                  fluid={defaultHeadshotMan.childImageSharp.fluid}
                  alt="Headshot of Adam Johnson"
                />
              </div>
              <div className={styles.Info}>
                <p className={styles.Name}>Adam Johnson</p>
                <p className={styles.Role}>Program Manager</p>
                <p className={styles.Bio}>
                  Nigga nigga nigga nigga nigga, nigga nigga nigga nigga. Nigga
                  nigga nigga nigga nigga, nigga.
                </p>
              </div>
            </li>

            <li className={styles.TeamMember}>
              <div className={styles.HeadshotWrapper}>
                <Img
                  className={styles.Headshot}
                  fluid={defaultHeadshotWoman.childImageSharp.fluid}
                  alt="Headshot of Chloe Rice"
                />
              </div>
              <div className={styles.Info}>
                <p className={styles.Name}>Chloe Rice</p>
                <p className={styles.Role}>Co-founder</p>
                <p className={styles.Bio}>
                  Nigga nigga nigga nigga nigga, nigga nigga nigga nigga. Nigga
                  nigga nigga nigga nigga, nigga.
                </p>
              </div>
            </li>

            <li className={styles.TeamMember}>
              <div className={styles.HeadshotWrapper}>
                <Img
                  className={styles.Headshot}
                  fluid={defaultHeadshotMan.childImageSharp.fluid}
                  alt="Headshot of Devin Jackson"
                />
              </div>
              <div className={styles.Info}>
                <p className={styles.Name}>Devin Jackson</p>
                <p className={styles.Role}>CEO & Co-founder</p>
                <p className={styles.Bio}>
                  Nigga nigga nigga nigga nigga, nigga nigga nigga nigga. Nigga
                  nigga nigga nigga nigga, nigga.
                </p>
              </div>
            </li>

            <li className={styles.TeamMember}>
              <div className={styles.HeadshotWrapper}>
                <Img
                  className={styles.Headshot}
                  fluid={defaultHeadshotMan.childImageSharp.fluid}
                  alt="Headshot of Kris Lee"
                />
              </div>
              <div className={styles.Info}>
                <p className={styles.Name}>Kris Lee</p>
                <p className={styles.Role}>Co-founder</p>

                <p className={styles.Bio}>
                  Nigga nigga nigga nigga nigga, nigga nigga nigga nigga. Nigga
                  nigga nigga nigga nigga, nigga.
                </p>
              </div>
            </li>

            <li className={styles.TeamMember}>
              <div className={styles.HeadshotWrapper}>
                <Img
                  className={styles.Headshot}
                  fluid={defaultHeadshotWoman.childImageSharp.fluid}
                  alt="Headshot of Yamah Akbar"
                />
              </div>
              <div className={styles.Info}>
                <p className={styles.Name}>Yamah Akbar</p>
                <p className={styles.Role}>Program Coordinator</p>
                <p className={styles.Bio}>
                  Nigga nigga nigga nigga nigga, nigga nigga nigga nigga. Nigga
                  nigga nigga nigga nigga, nigga.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
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
