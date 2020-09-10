import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { navigate, graphql } from 'gatsby'
import className from 'classnames'

import { PageContainer } from '../../components'

import styles from '../../assets/scss/partner.module.scss'

export default function Partner({ data }) {
  const fullWidthImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('swag')
  )

  const partnerLogos = data.allFile.nodes.filter(node =>
    node.childImageSharp.fluid.src.includes('logo')
  )

  const logoMarkup = partnerLogos.map(logo => (
    <div className={styles.LogoWrapper}>
      <Img className={styles.Logo} fluid={logo.childImageSharp.fluid} alt="" />
    </div>
  ))

  return (
    <PageContainer>
      <Helmet title="Partner | We Build Black"></Helmet>
      <header className={styles.Hero}>
        <div className={styles.HeroContent}>
          <h1 className={styles.HeroHeading}>
            Partnership is key to reaching our destination.
          </h1>
          <p className={styles.HeroBody}>
            We believe that in order to build a tech industry that truly
            includes everyone, we need partners that seek to actively dismantle
            the status quo.
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
      </header>
      <main className={styles.Main}>
        <div className={styles.Body}>
          <div className={styles.BodyNav}>
            <ul className={styles.SectionList}>
              <li className={styles.SectionListItem}>
                <a href="#what-we-look-for">What we look for</a>
              </li>
              <li className={styles.SectionListItem}>
                <a href="#our-partners">Our partners</a>
              </li>
              <li className={styles.SectionListItem}>
                <a href=""></a>
              </li>
            </ul>
          </div>

          <div className={styles.BodyContent}>
            <div id="what-we-look-for" className={styles.SectionAnchor} />
            <section className={styles.BodySection}>
              <h2 className={styles.BodyHeading}>What we look for</h2>

              <p className={styles.BodyIntro}>
                {`Diversity isn't a nice-to-have, it's imperative. These benchmarks are signals that help us distinguish the companies setting a higher standard from the companies just talking about it.`}
              </p>

              <dl className={styles.BenchmarkList}>
                <dt className={styles.BenchmarkName}>
                  Employee Resource Group
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Having an internal ERG gives employees of targeted identities a safe space to be heard and take action on the change they would like to see in and out of the workplace and are key to creating a culture of belonging.`}
                </dd>

                <dt className={styles.BenchmarkName}>
                  Dedicated D&I Leader or Team
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`As a Black person in the workspace, it can be tiring to do two
                jobs. One being the one you were hired for and then the
                diversity committee you're a part of. A dedicated D&I leader or
                team in place that is hired to take the load off of your diverse
                employees creates for a better and more productive safe space as
                you don't feel like you HAVE to do this diversity work.`}
                </dd>

                <dt className={styles.BenchmarkName}>Black Owned</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Being Black owned is self explanatory Simply said it lets us know that you probably come from a place of shared struggle and understanding.`}
                </dd>

                <dt className={styles.BenchmarkName}>Transparent Data</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Data that is public is one of the best ways to let the people know that you care, have nothing to hide, and are actively working through company issues in a way that can be critiqued instead of looking like you're trying to hide behind closed doors.`}
                </dd>

                <dt className={styles.BenchmarkName}>External Activism</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`When we see companies being proactive concerning issues they
                care about, it gives us an idea of where their values are. It
                says "this company isn't just contributing for personal gain".`}
                </dd>

                <dt className={styles.BenchmarkName}>Black Executives</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Having Black employees is one thing but Black executives is another. It's a sign that this company is willing to share the power dynamic that exists within a business. It gives Black people a feeling like they have someone on top who understands them. Someone that they can voice themselves to.`}
                </dd>

                <dt className={styles.BenchmarkName}>
                  Internship/Apprenticeship Program
                </dt>
                <dd
                  className={styles.BenchmarkDescription}
                >{`While an internship may not be specific to helping those of the Black community it definitely affects us. A large number of the Black community coming into tech are coming in at the ground level. Having an internship for these kinds of applicants shows you're willing to put in the time/resources to bring our community up to speed.`}</dd>

                <dt className={styles.BenchmarkName}>Mentorship Program</dt>
                <dd
                  className={styles.BenchmarkDescription}
                >{`A big aspect of diversity is not only hiring but retaining that diverse talent. Mentorship programs give diverse employees a guiding hand in their new career. Being in the tech field takes practice and assistance. Having a mentor will give them the latter.`}</dd>
              </dl>
            </section>
            <div id="our-partners" className={styles.SectionAnchor} />
            <section className={styles.BodySection}>
              <h2 className={styles.BodyHeading}>Our partners</h2>
              <div className={styles.SponsorList}>{logoMarkup}</div>
            </section>
          </div>
        </div>
        <div className={className(styles.BodySection, styles.ActionSection)}>
          <h2 className={styles.BodyHeading}>
            {`Let's make the tech industry better together`}
          </h2>
          <a className={className('button', styles.PartnerFormLink)} href="">
            Learn more
          </a>
        </div>
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
