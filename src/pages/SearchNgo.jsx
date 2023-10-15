import React from 'react'
import NgoIntro from '../Components/NgoIntro'
import MediShare from '../Components/MediShare'

const SearchNgo = () => {
  return (
    <>
      <div className='h-screen'>

        <div className='h-2/5 bg-[#B9F3FC] flex flex-col'>
          <MediShare/>
          <div className='text-4xl px-4 sm:px-40 py-2 sm:py-10 mt-auto font-custom font-semibold'>Search for NGO's near-by</div>

        </div>


        <div>
          <div className=" sm:mx-36 sm:w-[30%] my-6 mx-3">
            <div class="relative mb-4 flex items-stretch border-2  h-10 pl-4 border-solid border-teal-500 rounded-md"
            >
              <input
                type="search"
                className='w-11/12 border-none outline-none'
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />
              <img src={require("../assets/Search.png")} alt="" className='p-1' />
            </div>
          </div>

          <div className='sm:h-3/5 flex flex-col sm:flex-row gap-4'>

            <div className='my-2 w-full sm:w-4/7 flex flex-col items-center justify-center'>
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
              <NgoIntro />
            </div>

            <div className='w-full sm:w-3/7 sm:-mt-52 px-6'>
              <img src={require("../assets/searchngo.png")} alt=""
                style={{ position: "sticky", top: "20px", zIndex: 1 }}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SearchNgo