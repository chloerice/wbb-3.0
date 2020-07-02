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
          {logoCircle}
          <section className="page__intro">
            <div className="section__content">
              <h1 className="section__heading-main">What we do</h1>
              <p className="section__subheading">Educate. Empower. Employ.</p>
              <p className="section__body">
                {`We empower Black communities to achieve socio-economic
              change through technical education and professional development.
              Together with our partners, we create opportunities for Black
              technologists to network, advance their skills, give and receive
              mentorship, and discover their next employer.`}
              </p>
            </div>
          </section>
          <section className="page__separator">
            <button className="page__carousel-grid--nav-left">
              <span className="fa fa-2x fa-caret-left" />
            </button>

            <h2 className="section__heading-minor">Join our community</h2>
            <button className="page__carousel-grid--nav-right">
              <span className="fa fa-2x fa-caret-right" />
            </button>
          </section>
          <section className="page__carousel-grid">
            <div className="page__carousel-grid--menu"></div>
            <div className="page__carousel-grid--image-wrapper">
              <img
                className="page__carousel-grid--image"
                src="http://placekitten.com/1800/3200"
                alt=""
              />
            </div>
            <div className="page__carousel-grid--content"></div>
          </section>
          <section className="page__callout-grid">
            <div className="page__callout-grid--callout1">
              <p className="page__callout-grid--text-large">{`Diversity isn't a nice-to-have, it's imperative.`}</p>
            </div>
            <div className="page__callout-grid--image1">
              <img
                className="page__callout-grid--image"
                src="http://placekitten.com/1800/3200"
                alt=""
              />
            </div>

            <div className="page__callout-grid--image2">
              <img
                className="page__callout-grid--image"
                src="http://placekitten.com/1800/3200"
                alt=""
              />
            </div>
            <div className="page__callout-grid--callout2">
              <p className="page__callout-grid--text-medium"></p>
            </div>

            <div className="page__callout-grid--image3">
              <Img
                className="page__callout-grid--image"
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
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
