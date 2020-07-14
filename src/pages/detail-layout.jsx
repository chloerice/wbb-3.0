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
            <div className="page__carousel-grid--content">
              <h2>Program or event name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                nisi scelerisque eu ultrices vitae auctor. Orci nulla
                pellentesque dignissim enim sit amet venenatis. Lacus sed turpis
                tincidunt id aliquet risus feugiat. Et pharetra pharetra massa
                massa ultricies. Suscipit adipiscing bibendum est ultricies
                integer quis auctor elit. Velit egestas dui id ornare arcu odio
                ut sem. Curabitur vitae nunc sed velit dignissim. Sit amet
                commodo nulla facilisi nullam vehicula. Eget dolor morbi non
                arcu risus quis varius. Nec ullamcorper sit amet risus nullam
                eget. Facilisis gravida neque convallis a cras semper auctor
                neque vitae.
              </p>
            </div>
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

            <div className="page__callout-grid--callout2">
              <p className="page__callout-grid--text-medium">
                This is some other longer quote with medium sized text that will
                really just, you know, bring it home or whatever.
              </p>
            </div>
            <div className="page__callout-grid--image2">
              <img
                className="page__callout-grid--image"
                src="http://placekitten.com/1800/3200"
                alt=""
              />
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
