import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Service from '../components/Service'

const url = 'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg'

const Contact = () => {
  return (
    <>
      <Hero img={url} pageName="Contact" />
      <ContactForm />
      <Service />
      <Footer />
    </>
  )
}

export default Contact
