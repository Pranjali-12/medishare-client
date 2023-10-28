import React from 'react'

const NgoIntro = (prop) => {
    console.log(prop);
    return (
        <>
            <div className='flex flex-wrap w-[70%] gap-8 mx-3 my-2 py-4 px-4'>
                
                <div className='flex gap-6'>
                    <div className='h-12 w-3 bg-[rgba(88,1,103,0.10)]'></div>
                    <img src={require("../assets/ngologo.png")} alt="" />
                </div>

                <div className='flex flex-wrap gap-8 items-center'>
                    <div className='text-2xl text-[#262C5B] font-spartan'>
                        {prop.name}
                    </div>
                    <div className='bg-[#E2E8F0] px-3 rounded-md font-semibold'>
                        {prop.location}
                    </div>
                    <div className=''>
                        <a href="" className='text-[#0452AD] font-semibold'>{prop.email}</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NgoIntro