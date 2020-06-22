import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import BackgroundImage from '../components/wrapperComponents/BackgroundImage'
import Input from '../components/elements/input/Input'
import InputWrap from '../components/wrapperComponents/InputContent'
import Button from '../components/elements/button/Button'
import Svg from '../components/elements/Svg'

import man4 from '../assets/images/man4.jpeg'
import texture from '../assets/images/texture.jpg'

export default function Contact() {
  return (
    <Layout>
      <Helmet title="Contact us | We Build Black"></Helmet>
      <div className="relative bg-white flex">
        <div className="hidden w-p40 h-full md:inline">
          <BackgroundImage
            image={man4}
            color={'black'}
            addlClasses={'h-100vh px-5pc lg:px-20pc'}
          />
        </div>
        <div className="w-full">
          <BackgroundImage
            image={texture}
            addlClasses={'w-full px-6 py-6r self-end'}
          >
            <div className="w-full h-full mx-auto px-0 md:px-4 lg:px-4r max-w-4xl">
              <h2 className="text-black-900 mb-4">We're here to help.</h2>
              <p className="mb-4r text-yellow-600 uppercase font-black shadow">
                To get in touch, please fill out the form below
              </p>
              <div className="w-full md:flex">
                <span className="w-full mr-6 mb-0 md:mb-0">
                  <Input
                    input={true}
                    placeholder={'Full Name'}
                    addlClasses={'w-p90'}
                  />
                </span>
                <span className="w-p40 -mt-6 md:mt-0">
                  <Input input={true} placeholder={'Phone'} />
                </span>
              </div>
              <Input input={true} placeholder={'Email Address'} />
              <Input input={true} placeholder={'How can we help?'} />
              <Input input={false} placeholder={'Ask a question'} />
              <div className="mt-8 w-full flex flex-col md:flex-row md:justify-between items-center">
                <div className="w-full mb-8 md:flex md:w-p50 justify-between md:-mb-6">
                  <InputWrap>
                    <div className="flex justify-around items-center px-5">
                      <span className="w-50">
                        <Svg icon="laptop" />
                      </span>
                      <span className="w-50">
                        <Svg icon="laptop" />
                      </span>
                      <span className="w-50">
                        <Svg icon="laptop" />
                      </span>
                    </div>
                  </InputWrap>
                </div>
                <Button color={'teal'} shade={500}>
                  Send
                </Button>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </div>
    </Layout>
  )
}
