import React from 'react'
import { Link } from "react-router-dom";

const MediShare = () => {
  return (
    <div className='flex flex-wrap justify-between pt-12'>
    <div  className='text-4xl px-8 sm:px-40 font-semibold font-custom tracking-wide'>
        <span className='text-[#1CB5BD]'>Medi</span>Share
    </div>

    <div className='px-10 sm:px-40 py-4 sm:py-0'>
        <Link to={"/signin"} ><button className='text-2xl text-[#1CB5BD] font-medium font-custom tracking-wide'>Login</button></Link>
        <Link to={"/signup"} ><button className='text-2xl text-[#1CB5BD] font-medium font-custom tracking-wide px-10'>Signup</button></Link>
    </div>
    </div>
  )
}

export default MediShare