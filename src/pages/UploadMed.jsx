import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Medishare from '../Components/Medishare';

function MedicineUpload() {
  const [medicineName, setMedicineName] = useState('');
  const [manufactureDate, setManufactureDate] = useState(null); // Use null for date state
  const [expiryDate, setExpiryDate] = useState(null); // Use null for date state

  const MedicineUpload = (e) => {
    e.preventDefault();
    console.log('Medicine Name:', medicineName);
    console.log('Manufacture Date:', manufactureDate);
    console.log('Expiry Date:', expiryDate);

    if (medicineName === '') {
      alert('Please fill out the Medicine Name field');
      return;
    }
  };

  return (
    <div className='h-screen '>
      <Medishare/>
      <div className="flex flex-wrap overflow-hidden">

        <div className="w-full sm:w-1/2 px-4 sm:px-24 py-10 flex flex-col justify-center">
          <div className="text-4xl font-spartan my-5 font-bold">Upload Medicine</div>
          <form className="my-10" onSubmit={MedicineUpload}>

            <div className="border-b-2 border-[#98B3D6] mb-4 sm:mb-10">
              <div className="text-[#262C5B] py-2 my-2 font-bold">Medicine Name</div>
              <div className="name">
                <input className='outline-none w-full'
                  type="text"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  required
                  placeholder='Enter Medicine Name'
                />
              </div>

            </div>

            <div className="border-b-2 border-[#98B3D6] mb-4 sm:mb-10">
              <div className="text-[#262C5B] py-2 my-2 font-bold">Manufacture Date</div>
              <div>
                <DatePicker className='outline-none w-full'
                  selected={manufactureDate}
                  onChange={(date) => setManufactureDate(date)}
                  required
                  placeholderText='Select'
                />
              </div>
            </div>

            <div className="border-b-2 border-[#98B3D6] mb-4 sm:mb-10">
              <div className='text-[#262C5B] py-2 my-2 font-bold'>Expiry Date</div>
              <div>
                <DatePicker className='outline-none w-full'
                  selected={expiryDate}
                  onChange={(date) => setExpiryDate(date)}
                  required
                  placeholderText='Select'
                />
              </div>
            </div>
            <div className="form-group">
              <br />
              <button type="submit" className='w-full bg-[#1CB5BD] text-white py-2 font-bold rounded-full text-2xl'>Upload</button>
            </div>
          </form>
        </div>

        <div className="hidden sm:block w-full sm:w-1/2 pl-10">
          <div className='bg-[#1CB5BD] flex justify-center items-center'>
            <img src={require("../assets/UploadMed.png")} alt="" className='-ml-36 pt-10' />
          </div>

        </div>
      </div>
    </div>

  );
}

export default MedicineUpload;
