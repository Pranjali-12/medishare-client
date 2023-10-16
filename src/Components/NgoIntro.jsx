import React from 'react'

const NgoIntro = () => {
    return (
        <>
            <div className='flex flex-wrap gap-8 mx-3 my-2 py-4 px-4'>
                <div className='flex gap-6'>
                    <div className='h-12 w-3 bg-[rgba(88,1,103,0.10)]'></div>
                    <img src={require("../assets/ngologo.png")} alt="" />
                </div>
                <div className='flex flex-wrap gap-8 items-center'>
                    <div className='text-2xl text-[#262C5B] font-spartan'>
                        Foundation a
                    </div>
                    <div className='bg-[#E2E8F0] px-3 rounded-md font-semibold'>
                        Vashi
                    </div>
                    <div className=''>
                        <a href="" className='text-[#0452AD] font-semibold'>foundationa@gmail.com</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NgoIntro