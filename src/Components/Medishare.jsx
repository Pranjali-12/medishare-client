import React from 'react'

const MediShare = () => {
  return (
    <div className='flex flex-wrap justify-between pt-12'>
    <div  className='text-4xl px-10 sm:px-40 font-bold font-custom tracking-wide'>
        <span className='text-[#1CB5BD]'>Medi</span>Share
    </div>

    <div className='px-10 sm:px-40 py-4 sm:py-0'>
        <button className='text-2xl text-[#1CB5BD] font-bold font-custom tracking-wide'>Login</button>
        <button className='text-2xl text-[#1CB5BD] font-bold font-custom tracking-wide px-10'>Signup</button>
    </div>
    </div>
  )
}

export default MediShare