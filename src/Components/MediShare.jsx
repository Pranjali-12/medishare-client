import React from 'react'
import { Link,useNavigate } from "react-router-dom";

const MediShare = () => {

  const authtoken = localStorage.getItem('authtoken');
  console.log(authtoken);

  const navigate = useNavigate();

  const Logout=()=>{
    localStorage.clear();
    navigate("/signin", { replace: true });
  }

  return (
    <div className='flex flex-wrap justify-between pt-12'>
      <div className='text-4xl px-8 sm:px-40 font-semibold font-custom tracking-wide'>
        <span className='text-[#1CB5BD]'>Medi</span>Share
      </div>

      {
        !authtoken ?
          (
            <div className='px-10 sm:px-40 py-4 sm:py-0'>
              <Link to={"/signin"} ><button className='text-2xl text-[#1CB5BD] font-medium font-custom tracking-wide'>Login</button></Link>
              <Link to={"/signup"} ><button className='text-2xl text-[#1CB5BD] font-medium font-custom tracking-wide px-10'>Signup</button></Link>
            </div>
          ) :
          (
            <div className='px-10 sm:px-40 py-4 sm:py-0'>
              <button className='text-2xl text-[#1CB5BD] font-medium font-custom tracking-wide' onClick={Logout}>Logout</button>

            </div>
          )
      }

    </div>
  )
}

export default MediShare