import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import HeroFull from '../components/hero/HeroFull'
import HeroAction from '../components/hero/HeroAction'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="We Build Black"></Helmet>

        <HeroFull image={pic01}>
          <header className="major">
            <h1 className="m-8">Empowering</h1>
            <h1>World Changers & Difference Makers</h1>
          </header>
          <Link to="/templates/landing" className="link primary"></Link>
        </HeroFull>

        <HeroAction
          image={pic02}
          title={'We work together.'}
          caption={'WE LISTEN. WE ADVISE.'}
          buttonText={'About Us'}>
          <p>Upstream seeks and builds relationships with individuals who are making a diference in their communities.
          By finding those who are already creating change, we are deepening impact instead of duplicating it.</p>
        </HeroAction>
      </Layout>
    )
  }
}

export default HomeIndex
