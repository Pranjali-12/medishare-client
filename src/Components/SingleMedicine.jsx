import React, { useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import MediShare from './MediShare'

const SingleMedicine = (props) => {
  console.log(props)
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [medicineQuantity, setMedicineQuantity] = useState('');
  const [showHiddenDiv, setShowHiddenDiv] = useState(false);
  const [showBuyNowButton, setShowBuyNowButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const formattedManufacturedDate = formatDate(props.mfDate);
  const formattedExpiryDate = formatDate(props.expiryDate);

  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    setShowHiddenDiv(true);
    setShowBuyNowButton(false);
  };

  const token = JSON.parse(atob(localStorage.getItem('authtoken').split('.')[1]));
  const id = token._id
  console.log(token._id);

  const handleRequestSend = () => {
    if (parseInt(medicineQuantity) > parseInt(props.quantity)) {
      setErrorMessage(`Quantity exceeds available stock (${props.quantity})`);
    } else {
      if (medicineQuantity == 0) {
        setErrorMessage(`Enter a quantity`);
      }
      else {
        const res = fetch(`https://medishare-server-3.onrender.com/medicine/requestmed?id=${props.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ngoid: id, quantity: medicineQuantity
          })
        })
        console.log(res);
        navigate('/receiver');
      }
    }

  };
  const handleClick=()=>{
    navigate('/receiver')
  }
  return (
    <>
    <button onClick={handleClick} className='bg-[#1CB5BD] text-white font-semibold rounded-md text-xl py-2 px-6 ms-8'>Back</button>
      <MediShare />
      <div className='flex justify-center mt-5'>
        <div className="flex flex-wrap sm-w-[50%] gap-8 sm:mx-28 my-3 justify-center">
          <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
            <div className="bg-white border-2 border-[#aeeff3] rounded lg:rounded p-4 flex flex-col justify-between leading-normal sm:w-[90%]" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
              <div className="mb-4">
                <div className="px-6 py-2">
                  <div className="font-bold text-2xl text-[#1CB5BD] mb-2">{props.name}</div>
                  <p className="text-gray-900 text-md mb-2" style={{ minWidth: "200px", maxWidth: "800px" }}>
                    {props.description}
                  </p>
                  <div>
                    <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Owner's Name: </span>{props.ownerName}</h2>
                    <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Manufactured Date: </span>{formattedManufacturedDate}</h2>
                    <h2 className="text-gray-900 mb-2"><span className="font-semibold text-lg">Expiry Date: </span>{formattedExpiryDate}</h2>
                  </div>
                  <div>
                    {props.appStatus === true ? (
                      <div className="flex justify-between flex-wrap">
                        <h2 className="text-black flex text-xl font-bold mt-2"> Approved
                          <img className="ml-2" src={require("../assets/tick.png")} style={{ width: "1.7rem", height: "1.7rem" }} />
                        </h2>
                        <h2 className="text-gray-900 mt-2"> {moment(props.createdAt).fromNow()}</h2>
                      </div>
                    ) : (
                      <div className="flex justify-between flex-wrap">
                        <h2 className="text-black flex text-xl font-bold mt-2"> Pending
                          <img className="ml-2" src={require("../assets/pendingg.png")} style={{ width: "1.9rem", height: "1.9rem" }} />
                        </h2>
                        <h2 className="text-gray-900 mt-2"> {moment(props.createdAt).fromNow()}</h2>
                      </div>
                    )}
                  </div>
                  <div className='mt-8'>
                    {showBuyNowButton && (
                      <button className='bg-[#1CB5BD] text-white font-semibold rounded-md text-xl py-2 px-6' onClick={handleBuyNowClick}>BUY NOW</button>
                    )}
                    {showHiddenDiv && (
                      <div className='hiddendiv flex flex-wrap justify-between'>
                        <div className='mt-5'>
                          <label className='text-black font-semibold text-2xl '>Quantity</label>
                          <input className='outline-none w-1/2 mx-2 px-2 py-2 bg-[#f3f4f6] text-black'
                            type="number"
                            value={medicineQuantity}
                            onChange={(e) => setMedicineQuantity(e.target.value)}
                            required
                            placeholder='Enter Quantity'
                          />
                          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        </div>
                        <button className='bg-[#1CB5BD] text-white font-semibold rounded-md text-xl py-2 px-6 mt-5' onClick={handleRequestSend}>Send Request</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMedicine;
