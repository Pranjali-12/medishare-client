import React from 'react'
import '../styles/HomeUpper.css'
import { useNavigate } from 'react-router'

const HomeUpper = () => {
  const navigate=useNavigate();

  const get=()=>{
    navigate('/receiver/signin')
  }

  const donate=()=>{
    navigate('/donor/signin')
  }

  return (
    <div style={{ width: '85%', margin: '0 auto' }}>
      <div className='flex flex-wrap'>
        {/* Left */}
        <div className='w-1/2 px-4'>
          <h1 className='text-5xl	 font-extrabold p-8 pt-16 pe-12' style={{ lineHeight: "4.2rem" }}>Healing yourself is connected with <span className='parallelogram m-0 text-5xl' >healing</span> others</h1>
          {/* <div className='ps-8'>
            <div className="m-3 w-10/12">
              <div class="relative mb-4 flex  flex-wrap items-stretch border-2  h-12 pl-4 border-solid border-teal-500 rounded-md"
              >
                <input
                  type="search"
                  //   class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  //   className='w-full'
                  className='w-11/12 border-none outline-none'
                  placeholder="search medicine"
                  aria-label="Search"
                  aria-describedby="button-addon2" />


                <span
                  class="input-group-text flex items-center whitespace-nowrap rounded  py-1.5 pe-1 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div> */}

          <div>
            <button onClick={donate} className='bg-[#1CB5BD] text-white font-semibold rounded-md text-xl py-2 px-6 m-2'>Donate Medicine</button>
            <button onClick={get} className='bg-[#1CB5BD] text-white font-semibold rounded-md text-xl py-2 px-6 m-2'>Get Medicine</button>
          </div>
        </div>
        {/* Right */}
        <img className="pb-4 pt-4" src={require("../assets/Home_Image.png")} style={{ width: "36rem" }} />
        <div>
        </div>
      </div>
    </div>
  )
}

export default HomeUpper