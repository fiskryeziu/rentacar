import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Service from '../components/Service'

const url =
  'https://di-uploads-pod3.s3.amazonaws.com/fletcherjonesmotorcarsoffremont/uploads/2016/11/MB-Pack-Shot-1.jpg'
const About = () => {
  return (
    <>
      <Hero img={url} pageName="About" />
      <Service />
      <Footer />
    </>
  )
}

export default About
