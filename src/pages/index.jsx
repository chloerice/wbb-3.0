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

  const fullWidthImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('codenmix')
  )

  return (
    <PageContainer>
      <div>
        <Helmet title={title} />
        <Hero content="We're building the equitable tech industry we wish to see" />
        <main className="page__main">
          <section className="page__intro">
            {logoCircle}
            <div className="section__content">
              <h1 className="section__heading-main">We Build Black</h1>
              <p className="section__subheading">Educate. Empower. Employ.</p>
              <p className="section__body">
                {`Our mission is to empower the Black community to achieve
                socio-economic change through technical education and
                professional development. We Build Black creates opportunities
                for Black technologists to network, share skills, give and receive mentorship, and discover their next employer. By nurturing the existing community of Black technologists and
                creating pathways into tech, we're building a
                more equitable tech industry for ourselves and the next
                generation.`}
              </p>
            </div>
          </section>
          <section className="page__callout-grid">
            <div className="page__callout-grid--callout1">
              <p className="page__callout-grid--text-large">{`Making the tech industry OUR industry.`}</p>
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
                We Build Black is on a journey to redefine what it means to
                belong in the tech industry. The path forward is uncharted, but
                we don’t shy away from uncertainty.
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
                fluid={fullWidthImage.childImageSharp.fluid}
              />
            </div>
          </section>
          <section className="page__separator">
            <button className="page__carousel-grid--nav-left">
              <span className="fa fa-2x fa-caret-left" />
            </button>

            <h2 className="section__heading-minor">Get involved</h2>
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
        </main>
        <Footer />
      </div>
    </PageContainer>
  )
}

export const query = graphql`
  query Home {
    allFile(filter: { relativeDirectory: { eq: "home" } }) {
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
