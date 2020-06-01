import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/wrapperComponents/Banner'

import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import TextContent from '../components/wrapperComponents/TextContent'
import IconContent from '../components/wrapperComponents/IconContent'
import BannerContent from '../components/wrapperComponents/BannerContent'

import Button from '../components/elements/Button'

import woman1 from '../assets/images/woman1.jpeg'
import woman9 from '../assets/images/woman9.jpeg'
import women1 from '../assets/images/women1.jpeg'
import man2 from '../assets/images/man2.jpeg'
import man3 from '../assets/images/man3.jpeg'
import men1 from '../assets/images/men1.jpeg'
import hands1 from '../assets/images/hands1.jpeg'
import texture from '../assets/images/texture.jpeg'
import Svg from '../components/elements/Svg'

const bannerData = [
  {
    title: '2012',
    text: 'UPSTREAM WAS FOUNDED'
  },
  {
    title: 'Countless',
    text: 'LIVES HAVE BEEN CHANGED'
  },
  {
    title: 'Global',
    text: 'CHRISTIAN NON-PROFIT ORGANIZATION'
  }
]

const populateIcons = () => {
  let newArr = []
  for (let i = 0; i < 6; i++) {
    newArr.push({ id: i, name: 'laptop' })
  }
  return newArr
}

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
            <div className="w-full bg-black-900 mt-40 h-40"></div>
            <BackgroundImage image={texture} addlClasses={'w-p90 -mt-30r self-end'}>
              <div className="w-full">

                <div className="md:flex">
                  <div className="md:flex">
                    <IconContent icon={'laptop'} title={'Our Story'} color={'text-red-400'} />
                    <TextContent>
                      <p className="text-black-900 shadowDeep">Upstream International is a global Christian non-profit organization that works to bring people together to challenge poverty in creative ways. We believe that in every community, there are individuals who have untapped potential to make their community a better place but lack the necessities (training, structures, financial resources, etc.) to further their work. We partner with them, building relationships that bridge economic, cultural and religious divides, and empower them to lead. It is our dream to further break the cycle of dependence and build bridges for indigenous leaders to rise up and help equip the people around them. In each of us is a deep-seeded need to feel that we are making a difference and that our life counts for something outside of ourselves.</p>
                      <blockquote className="w-full my-4 px-5pc justify-center border-l-0 lg:w-50pc lg:mt-0 lg:px-2 lg:pl-8 lg:float-right">
                        <p className="font-roboto text-yellow-900 shadowLight font-semibold">"Being a part of someone’s survival, someone’s empowerment, and making someone else’s dreams a reality is something that's value is innumerable."</p>
                      </blockquote>
                      <p className="text-black-900 shadowDeep">We all have a curiosity about our purpose and how it relates to the world around us and beyond. For those who have the desire to be a part of positive change in the world, we ask you to act and provide you an outlet to do so.</p>
                    </TextContent>
                  </div>
                  <div style={{ minWidth: '5vw' }} className="hidden md:block border-l border-gray-400 border-solid">
                    <BackgroundImage image={texture} />
                  </div>
                </div>

                <div className="md:flex border-t border-b border-gray-400 border-solid">
                  <div className="w-full py-4 lg:flex">
                    <BannerContent data={bannerData} />
                  </div>
                  <div style={{ minWidth: '5vw' }} className="hidden md:block border-l border-gray-400 border-solid">
                    <div className="h-full w-full bg-red-400 py-2 flex flex-col justify-between items-center">
                      <div className="h-8 w-8 bg-white m-1"></div>
                      <div className="h-8 w-8 bg-white m-1"></div>
                      <div className="h-8 w-8 bg-white m-1"></div>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:flex-row-reverse">
                  <div style={{ minWidth: '5vw' }} className="hidden md:block border-l border-gray-400 border-solid">
                    <BackgroundImage image={texture} />
                  </div>
                  <div className="">
                    <div className="w-full p-5pc flex justify-between">
                      {
                        populateIcons().map(icon => {
                          return <div className="max-w-xs w-full" key={icon.id}><Svg icon={icon.name} /></div>
                        })
                      }
                    </div>
                    <div className="items-center md:flex md:flex-row-reverse">
                      <IconContent isReverse={true} icon={'laptop'} title={'Who We Are'} color={'text-red-400'} />
                      <TextContent isReverse={true}>
                        <p className="text-black-900 shadowDeep">Upstream International is a global Christian non-profit organization that works to bring people together to challenge poverty in creative ways. We believe that in every community, there are individuals who have untapped potential to make their community a better place but lack the necessities (training, structures, financial resources, etc.) to further their work. We partner with them, building relationships that bridge economic, cultural and religious divides, and empower them to lead. It is our dream to further break the cycle of dependence and build bridges for indigenous leaders to rise up and help equip the people around them. In each of us is a deep-seeded need to feel that we are making a difference and that our life counts for something outside of ourselves.</p>
                      </TextContent>
                    </div>
                  </div>
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
