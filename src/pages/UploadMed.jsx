import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MediShare from '../Components/MediShare';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function MedicineUpload() {
  const navigate = useNavigate();

  const minDate = addDays(new Date(), 1);
  const maxDate = subDays(new Date(), 1);

  const [medicineName, setMedicineName] = useState('');
  const [medicineDes, setMedicineDes] = useState('');
  const [medicineQuantity, setMedicineQuantity] = useState('');
  const [manufactureDate, setManufactureDate] = useState(null); 
  const [expiryDate, setExpiryDate] = useState(null); 

  const convertToISOString = (dateString) => {
    const formattedDate = new Date(dateString);
    return formattedDate.toISOString();
  };

  const mf_date = convertToISOString(manufactureDate);
  const exp_date = convertToISOString(expiryDate);

  const token = JSON.parse(atob(localStorage.getItem('authtoken').split('.')[1]));
  const id=token._id
  console.log(token._id);


  async function Upload (e){
    e.preventDefault();
    console.log('Medicine Name:', medicineName);
    console.log('Description: ',medicineDes);
    console.log('Quantity: ',medicineQuantity)
    console.log('Manufacture Date:', mf_date);
    console.log('Expiry Date:', exp_date);

     if (medicineName === ''||medicineDes==='' || medicineQuantity===''|| mf_date===null || exp_date===null) {
      alert('Please fill out the Medicine Name field');
      return;
    }

    const res = await fetch("http://localhost:2000/medicine/addmed", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        donor:id,
        name:medicineName,
        illness:medicineDes,
        quantity:medicineQuantity,
        mf_date,
        exp_date
      })
    });

    const data = await res.json();
    if (res.status === 200) {
      toast.success("Medicine Uploaded Successfully");
      navigate("/medlist", { replace: true });
    } else {
      toast.error("Oops !! Something Went Wrong ");
    }
    console.log(data);

  };

  return (
    <div>

      <div className="flex flex-wrap overflow-hidden">

        <div className="w-full sm:w-1/2 px-4 sm:px-24 flex flex-col justify-center">
          <div className="text-4xl font-bold">Upload Medicine</div>
          <form className="my-6" onSubmit={Upload}>

            <div className="border-b-2 border-[#98B3D6] mb-2 sm:mb-10">
              <div className="text-[#262C5B] my-3 lg:my-1 font-bold">Medicine Name</div>
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

            <div className="border-b-2 border-[#98B3D6] mb-2 sm:mb-10">
              <div className="text-[#262C5B] my-3 lg:my-1 font-bold">Description</div>
              <div className="name">
                <input className='outline-none w-full'
                  type="text"
                  value={medicineDes}
                  onChange={(e) => setMedicineDes(e.target.value)}
                  required
                  placeholder='Enter Medicine Description'

                />
              </div>
            </div>

            <div className="border-b-2 border-[#98B3D6] mb-2 sm:mb-10">
              <div className="text-[#262C5B] my-3 lg:my-1 font-bold">Quantity</div>
              <div className="name">
                <input className='outline-none w-full'
                  type="number"
                  value={medicineQuantity}
                  onChange={(e) => setMedicineQuantity(e.target.value)}
                  required
                  placeholder='Enter Medicine Name'
                />
              </div>
            </div>

            <div className="border-b-2 border-[#98B3D6] mb-2 sm:mb-10">
              <div className="text-[#262C5B] my-3 lg:my-1 font-bold">Manufacture Date</div>
              <div>
                <DatePicker className='outline-none w-full'
                  selected={manufactureDate}
                  onChange={(date) => setManufactureDate(date)}
                  required
                  placeholderText='Select'
                  maxDate={maxDate}
                />
              </div>
            </div>

            <div className="border-b-2 border-[#98B3D6] mb-2 sm:mb-10">
              <div className='text-[#262C5B] my-3 lg:my-1 font-bold'>Expiry Date</div>
              <div>
                <DatePicker className='outline-none w-full'
                  selected={expiryDate}
                  onChange={(date) => setExpiryDate(date)}
                  required
                  placeholderText='Select'
                  minDate={minDate}
                />
              </div>
            </div>
            <div className="form-group">
              <br />
              <button type="submit" className='w-full bg-[#1CB5BD] text-white font-bold rounded-full text-2xl py-3'>Upload</button>
            </div>
          </form>
        </div>

        <div className="hidden sm:block w-full sm:w-1/2 pl-10">
          <div className='bg-[#1CB5BD] flex justify-center items-center h-[100%]'>
            <img src={require("../assets/UploadMed.png")} alt="" className='-ml-56 pt-10' />
          </div>

        </div>
      </div>
    </div>

  );
}

export default MedicineUpload;
