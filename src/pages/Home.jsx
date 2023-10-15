import React from 'react'
import ServiceBox from '../Components/ServiceBox'
import HomeUpper from '../Components/HomeUpper'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
    <Navbar/>
      <HomeUpper/>
      <ServiceBox/>
    </div>
  )
}

export default Home