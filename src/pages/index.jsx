import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/wrapperComponents/Banner'

import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import FloatingDiv from '../components/wrapperComponents/FloatingDiv'

import ThreeImageGrid from '../components/elements/grid/ThreeGrid'
import Button from '../components/elements/Button'

import '../assets/scss/pages/home.scss'

import woman1 from '../assets/images/woman1.jpeg'
import women1 from '../assets/images/women1.jpeg'
import man2 from '../assets/images/man2.jpeg'
import man3 from '../assets/images/man3.jpeg'
import hands1 from '../assets/images/hands1.jpeg'
import texture from '../assets/images/texture.jpeg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="We Build Black"></Helmet>
        <div className="home-container bg-white">
          <div className="section-one container mx-auto">
            <ThreeImageGrid images={[man2, hands1, woman1]} />
          </div>

          <Banner>
            We are Black technologists educating and empowering the Black community to achieve socio-economic change.
          </Banner>

          <div className="relative">
            <BackgroundImage image={texture}>
              <div className="w-full md:w-1/2 py-4r px-8 md:p-6r">
                <h2 className="mb-4 text-orange-300 font-roboto leading-tight shadowLight">We believe that in every community, there are individuals with untapped potential ready to make their community a better place.</h2>
                <p className="mb-2 text-black-900 text-left shadowDeep">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
                <p className="text-black-900 text-left shadowDeep">
                  By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
              </div>
            </BackgroundImage>

            <FloatingDiv top={'50%'} left={'55%'} right={'8%'}>
              <BackgroundImage image={woman1}>
                <div className="absolute inset-0 bg-yellow bg-opacity-75"></div>
                <div className="inset-0 w-full px-4r py-6r flex flex-col justify-center items-center">
                  <h1 className="mb-2 leading-3">We work together.</h1>
                  <p className="my-4 uppercase leading-3 shadowDeep">We listen. We advise.</p>
                  <p className="text-center">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
                  <p className="text-center">
                    By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
                  <Button color={'orange-400'}>About Us</Button>
                </div>
              </BackgroundImage>
            </FloatingDiv>
          </div>

          <div className="flex">
            <BackgroundImage image={man3} />
            <BackgroundImage
              image={women1}>
              <h2 className="title">We believe that in every community.</h2>
              <p className="text-black-600 text-left">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
              <p className="text-black-600 text-left">
                By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
            </BackgroundImage>
          </div>
        </div>

      </Layout>
    )
  }
}

export default HomeIndex
