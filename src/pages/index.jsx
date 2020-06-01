import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import TextContent from '../components/wrapperComponents/TextContent'
import IconContent from '../components/wrapperComponents/IconContent'
import BannerContent from '../components/wrapperComponents/BannerContent'

import Image from '../components/elements/Image'
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
            <BackgroundImage image={texture} addlClasses={'w-full md:w-p90 -mt-30r self-end'}>
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
                  <div className="w-full my-8 py-4 lg:flex">
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
                <div className="md:hidden h-full w-full bg-red-400 py-5 flex justify-evenly items-center">
                  <div className="h-8 w-8 bg-white m-1"></div>
                  <div className="h-8 w-8 bg-white m-1"></div>
                  <div className="h-8 w-8 bg-white m-1"></div>
                </div>
                <div className="md:flex md:flex-row-reverse">
                  <div style={{ minWidth: '5vw' }} className="py-8 hidden md:block border-l border-gray-400 border-solid">
                    <BackgroundImage image={texture} />
                  </div>
                  <div>
                    <div className="hidden lg:flex w-full p-5pc justify-between">
                      {
                        populateIcons().map(icon => (
                          <div className="max-w-xs w-full" key={icon.id}>
                            <Svg icon={icon.name} />
                          </div>
                        ))
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
                <div className="flex">
                  <div className="md:-ml-10r md:grid grid-cols-2 gap-4">
                    <div className="pt-6r pb-4 md:py-6r -mx-2 md:mx-0">
                      <div className="w-full">
                        <Image image={woman9} width={'100%'} height={'70%'} />
                      </div>
                    </div>
                    <div className="md:py-6r">
                      <div className="max-w-xs mx-auto mb-3r md:mx-8">
                        <Svg icon='laptop' />
                      </div>
                      <div className="mx-8 md:mr-5pc">
                        <h2 className="text-yellow-600 text-center md:text-left lg:mb-4">Joe Rigelsky</h2>
                        <p className="mt-4 text-14 text-center md:text-left text-black-900 uppercase tracking-widest font-semibold shadowDark">UPSTREAM FOUNDER</p>
                        <p className="mt-8 text-black-900 shadowDeep">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi ipsam porro atque impedit eaque, consectetur velit perspiciatis voluptatem illum placeat aperiam eius laboriosam rem ipsum. Cumque ratione ab repellendus?</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ minWidth: '5vw' }} className="py-8 hidden md:block border-l border-gray-400 border-solid">
                    <BackgroundImage image={texture} />
                  </div>
                </div>
                <div className="flex my-6r">
                  <div className="flex flex-col-reverse md:block md:grid grid-cols-2 gap-4">
                    <div className="md:py-6r">
                      <div className="max-w-xs mx-auto mb-3r md:mx-8">
                        <Svg icon='laptop' />
                      </div>
                      <div className="mx-8 md:mr-5pc">
                        <h2 className="text-yellow-600 text-center md:text-right lg:mb-4">Joe Rigelsky</h2>
                        <p className="mt-4 text-14 text-center md:text-right text-black-900 uppercase tracking-widest font-semibold shadowDark">UPSTREAM FOUNDER</p>
                        <p className="mt-8 text-black-900 md:text-right shadowDeep">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae vel animi totam voluptatum minus maiores? Minima eum quia eaque nisi enim provident corrupti quam doloribus amet ducimus dolorem, adipisci voluptatum?</p>
                      </div>
                    </div>
                    <div className="pt-2 pb-4 md:py-6r -mx-2 md:mx-0">
                      <div className="relative w-full">
                        <span className="md:absolute z-10">
                          <Image image={woman9} width={'100%'} height={'100%'} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ minWidth: '5vw' }} className="py-8 hidden md:block border-l border-gray-400 border-solid">
                    <BackgroundImage image={texture} />
                  </div>
                </div>
                <BackgroundImage image={woman1} color={'black'} addlClasses={'px-5pc py-25pc lg:px-20pc lg:py-15pc'}>
                  <h1 className="pb-56 text-center text-yellow-600 shadowLight">To break the cycle of poverty, we must embrace the will to navigate Upstream</h1>
                </BackgroundImage>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
