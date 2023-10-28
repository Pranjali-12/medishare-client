import React from 'react'
import ServiceBox from '../Components/ServiceBox'
import HomeUpper from '../Components/HomeUpper'
import Navbar from '../Components/Navbar'
import MediShare from '../Components/MediShare'

const Home = () => {
  return (
    <div>
    <MediShare/>
      <HomeUpper/>
      <ServiceBox/>
    </div>
  )
}

export default Home