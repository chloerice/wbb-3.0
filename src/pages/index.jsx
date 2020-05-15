import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import HeroFull from '../components/hero/HeroFull'

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
            <h3 className="m-8">Aliquam</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/templates/landing" className="link primary"></Link>
        </HeroFull>
        <article style={{ backgroundImage: `url(${pic01})` }}>

        </article>

      </Layout>
    )
  }
}

export default HomeIndex
