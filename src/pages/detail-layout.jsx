import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import className from 'classnames'

import { Nav, Footer, PageContainer, Hero } from '../components'

import wbbLogo from '../assets/images/wbb-logo-no-bg.svg'

import '../assets/scss/detail-layout.scss'

export default function Page({ data, title }) {
  const logoCircle = (
    <div className="page__logo-circle">
      <img className="page__logo-image" src={wbbLogo} alt="" />
    </div>
  )

  return (
    <PageContainer>
      <div>
        <Helmet title={title}></Helmet>
        <Hero content="We're building the equitable tech industry we wish to see" />
        <main className="page__main">
          <section className="page__intro">
            {logoCircle}
            <div className="section__content">
              <h1 className="section__heading-main">What we do</h1>
              <p className="section__subheading">Educate. Empower. Employ.</p>
              <p className="section__body">
                {`We empower the Black community to achieve socio-economic
              change through technical education and professional development.
              Together with our partners, we create opportunities for Black
              technologists to network, advance their skills, give and receive
              mentorship, and discover their next employer.`}
              </p>
            </div>
          </section>
          <section className="page__separator">
            <h2 className="section__heading-minor">Join our community</h2>
          </section>
          <section className="page__info"></section>
          <section className="page__images">
            <Img fluid={data.file.childImageSharp.fluid} />
          </section>
        </main>
        <Footer />
      </div>
    </PageContainer>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "wbb-codenmix-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
