import React, { useState, useEffect } from 'react';
import RecMedicineCard from '../Components/RecMedicineCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MediShare from '../Components/MediShare';

const RecMedList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    axios.get(`https://medishare-server-3.onrender.com/medicine/getallmeds`)
      .then(res => {
        console.log(res.data);
        setMeds(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='h-screen'>
      <div className='text-4xl px-4 sm:px-40 py-2 sm:py-10 mt-auto font-custom font-semibold'>
        Medicine List
      </div>
      <div className="sm:mx-36 sm:w-[30%] my-6 mx-3">
        <div className="relative mb-4 flex items-stretch border-2  h-10 pl-4 border-solid border-teal-500 rounded-md">
          <input
            type="search"
            className='w-full border-none outline-none'
            placeholder="Search a Medicine"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={searchQuery}
            onChange={handleSearch}
          />
          <img src={require("../assets/Search.png")} alt="" className='p-1' />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-10'>
        <div className='my-2 w-full sm:w-5/7 flex flex-col items-center justify-center'>
          {meds &&
            meds
              .filter((med) =>
                med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                med.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                med.illness.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((med) => (
                <RecMedicineCard
                  key={med.id}
                  id={med.id}
                  name={med.name}
                  description={med.illness}
                  ownerName={med.owner}
                  mfDate={med.mf_date}
                  expiryDate={med.exp_date}
                  quantity={med.quantity}
                  appStatus={med.approval}
                  createdAt={med.createdAt}
                  onClick={() => navigate(`/receiver/recmedlist/${med.id}`)} // Navigate to single product page on card click
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default RecMedList;
