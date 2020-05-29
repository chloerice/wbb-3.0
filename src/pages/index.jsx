import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/wrapperComponents/Banner'

import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import TextContent from '../components/wrapperComponents/TextContent'
import IconContent from '../components/wrapperComponents/IconContent'

import Button from '../components/elements/Button'

import woman1 from '../assets/images/woman1.jpeg'
import woman9 from '../assets/images/woman9.jpeg'
import women1 from '../assets/images/women1.jpeg'
import man2 from '../assets/images/man2.jpeg'
import man3 from '../assets/images/man3.jpeg'
import men1 from '../assets/images/men1.jpeg'
import hands1 from '../assets/images/hands1.jpeg'
import texture from '../assets/images/texture.jpeg'

const cardData = [
  {
    image: woman9,
    title: 'Empowerment',
    text: 'We Build Black holds events for the disenfranchised to be heard and reach goals.'
  },
  {
    image: hands1,
    title: 'Education',
    text: 'We Build Black believes that proper access to knowledge is key to growing and staying relevant in the tech industry.'
  },
  {
    image: men1,
    title: 'Community',
    text: 'We Build Black created a space where Black engineers are proud to help one another succeed.'
  }
]

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="We Build Black"></Helmet>
        <div className="relative bg-white flex flex-col">
          <BackgroundImage image={woman1} color={'black'} addlClasses={'px-5pc py-25pc lg:px-20pc lg:py-15pc'}>
            <h1 className="pb-56 text-center text-yellow-600 shadowLight">To break the cycle of poverty, we must embrace the will to navigate Upstream</h1>
          </BackgroundImage>
          <div className="w-full bg-yellow-600 flex flex-col">
            <div className="w-full bg-white mt-40 h-40"></div>
            <BackgroundImage image={texture} addlClasses={'w-p90 -mt-30r p-5pc self-end'}>
              <div className="">
                <div className="w-full md:flex">
                  <IconContent icon={'laptop'} title= {'Our Story'} color={'text-red-400'} />
                  <TextContent>
                    <p>Upstream International is a global Christian non-profit organization that works to bring people together to challenge poverty in creative ways. We believe that in every community, there are individuals who have untapped potential to make their community a better place but lack the necessities (training, structures, financial resources, etc.) to further their work. We partner with them, building relationships that bridge economic, cultural and religious divides, and empower them to lead. It is our dream to further break the cycle of dependence and build bridges for indigenous leaders to rise up and help equip the people around them. In each of us is a deep-seeded need to feel that we are making a difference and that our life counts for something outside of ourselves.</p>
                    <blockquote className="w-full my-4 px-5pc justify-center border-l-0 lg:w-50pc lg:mt-0 lg:px-2 lg:pl-8 lg:float-right">
                      <p className="text-yellow-900 shadowLight font-semibold">Being a part of someone’s survival, someone’s empowerment, and making someone else’s dreams a reality is something that's value is innumerable.</p>
                    </blockquote>
                    <p>We all have a curiosity about our purpose and how it relates to the world around us and beyond. For those who have the desire to be a part of positive change in the world, we ask you to act and provide you an outlet to do so.</p>
                  </TextContent>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
