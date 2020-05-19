import React from 'react'
import { Link, Img, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import className from 'classnames'

import { Nav, Footer } from '../components'

import '../assets/scss/detail-layout.scss'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

export default function Page({ data, title }) {
  console.log(data)
  return (
    <PageContainer>
      <div className="grid-container">
        <Helmet title={title}></Helmet>
        <Hero text="We educate. We empower. We build" />
        <main className="grid-main">
          <section className="intro"></section>
          <section className="separator"></section>
          <section className="info-grid"></section>
          <section className="image-grid"></section>
        </main>
        <Footer />
      </div>
    </PageContainer>
  )
}

function PageContainer({ children }) {
  return <div className="page-container">{children}</div>
}

function Hero({ src, text }) {
  const heroText = text ? <p className="hero-text"></p> : null

  return <div className="hero-wrapper">{heroText}</div>
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "wbb-codenmix-hero.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
