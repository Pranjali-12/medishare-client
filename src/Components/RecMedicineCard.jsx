import React from 'react';
import moment from 'moment';
 
import { useNavigate } from 'react-router-dom';


const RecMedicineCard = (props) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; 
    const year = date.getUTCFullYear();

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const formattedManufacturedDate = formatDate(props.mfDate);
  const formattedExpiryDate = formatDate(props.expiryDate);

  const handleClick = () => {
    console.log('Card clicked!');
    navigate(`/receiver/recmedlist/${props.id}`)
  };

  return (
    <div className="flex flex-wrap w-[90%] gap-8 sm:mx-28 my-3 justify-center hover:cursor-pointer" onClick={handleClick}>
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
                {
                  props.appStatus === true ?
                    (
                      <div className="flex justify-between flex-wrap">
                        <h2 className="text-black flex text-xl font-bold mt-2"> Approved
                          <img className="ml-2" src={require("../assets/tick.png")} style={{ width: "1.7rem", height: "1.7rem" }} />
                        </h2>
                        <h2 className="text-gray-900 mt-2"> {moment(props.createdAt).fromNow()}</h2>
                      </div>
                    ) :
                    (
                      <div className="flex justify-between flex-wrap">
                        <h2 className="text-black flex text-xl font-bold mt-2"> Pending
                          <img className="ml-2" src={require("../assets/pendingg.png")} style={{ width: "1.9rem", height: "1.9rem" }} />
                        </h2>
                        <h2 className="text-gray-900 mt-2"> {moment(props.createdAt).fromNow()}</h2>
                      </div>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecMedicineCard;
