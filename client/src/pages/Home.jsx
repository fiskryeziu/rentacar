import React from 'react'
import Banner from '../components/Banner'
import CarLists from '../components/CarLists'
import Footer from '../components/Footer'
import Service from '../components/Service'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <CarLists />
      <Service />
      <Footer />
    </div>
  )
}

export default Home
