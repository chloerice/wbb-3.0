import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/wrapperComponents/Banner'

import HeroFull from '../components/hero/HeroFull'
import HeroAction from '../components/hero/HeroAction'
import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import FloatingDiv from '../components/floating-div/FloatingDiv'

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
          <div className="home section-one container mx-auto">
            <ThreeImageGrid images={[man2, hands1, woman1]} />
          </div>

          <Banner>
            <p className="mb-0">We are Black technologists educating and empowering the Black community to achieve socio-economic change.</p>
          </Banner>

          <div className="home section-two">
            <HeroAction
              width={'50%'}
              image={texture}
              title={'We believe that in every community.'}>
              <p className="text-primary text-left">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
              <p className="text-primary text-left">
                By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
            </HeroAction>

            <FloatingDiv top={'50%'} left={'55%'} right={'10%'}>
              <HeroAction
                image={woman1}
                color={'#b58600'}
                title={'We work together.'}
                caption={'WE LISTEN. WE ADVISE.'}>
                <p className="inner-text center">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
                <p className="inner-text center">
                  By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
                <Button type={'transparent'}>About Us</Button>
              </HeroAction>
            </FloatingDiv>
          </div>

          <div className="home section-three">
            <BackgroundImage image={man3} />
            <BackgroundImage
              image={women1}
              title={'We believe that in every community.'}>
              <h2 className="title">We believe that in every community.</h2>
              <p className="text-primary text-left">Upstream seeks and builds relationships with individuals who are making a diference in their communities.</p>
              <p className="text-primary text-left">
                By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
            </BackgroundImage>
          </div>
        </div>

      </Layout>
    )
  }
}

export default HomeIndex
