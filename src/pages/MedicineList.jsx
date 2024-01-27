import React, { useState, useEffect } from 'react'
import MedicineCard from '../Components/MedicineCard'
import MediShare from '../Components/MediShare'
import axios from 'axios'
import { useNavigate } from 'react-router'


const MedicineList = () => {
  const navigate=useNavigate()
  const [searchQuery, setSearchQuery] = useState('');

  const [meds, setMeds] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:2000/medicine/getallmeds`)
      .then(res => {
        console.log(res.data)
        setMeds(res.data);

      }).catch(error => {
        console.log(error);
      })
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick=()=>{
    navigate('/uploadmed')
  }
  return (
    <div className=''>

      {/* <div className='h-2/5 bg-[#B9F3FC]'> */}
        
      {/* <button onClick={handleClick} className='bg-[#1CB5BD] text-white font-semibold rounded-md text-xl py-2 px-6 m-2'>Back</button>
        <MediShare /> */}
        {/* <div className='text-4xl px-4 sm:px-40 font-custom font-semibold'>Medicine  List</div> */}
      {/* </div> */}

      <div className="sm:mx-36 sm:w-[30%] mt-6 mx-3">
        <div class="relative mb-4 mt-5 flex items-stretch border-2  h-10 pl-4 border-solid border-teal-500 rounded-md"
        >
          <input
            type="search"
            className='w-11/12 border-none outline-none'
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={searchQuery}
            onChange={handleSearch} />
          <img src={require("../assets/Search.png")} alt="" className='p-1' />
        </div>
      </div>


      <div className='flex flex-col sm:flex-row gap-10'>
        <div className='my-2 w-full sm:w-5/7 flex flex-col items-center justify-center'>
          {
            meds && meds.filter((med) =>
              med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              med.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
              med.illness.toLowerCase().includes(searchQuery.toLowerCase())
            )
              .map((med) => (
                <MedicineCard name={med.name} description={med.illness} ownerName={med.owner} mfDate={med.mf_date} expiryDate={med.exp_date} quantity={med.quantity} appStatus={med.approval} createdAt={med.createdAt} />
              ))
          }
        </div>

        <div className='w-full sm:w-2/7 sm:-mt-60 px-6'>
          <img src={require("../assets/searchngo.png")} alt=""
            style={{ position: "sticky", top: "80px", zIndex: 1 }}
          />
        </div>
      </div>

    </div>
  )
}

export default MedicineList
