
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ handleClose }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    // handleClose();
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white w-96 p-8 rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 m-4">
          <button onClick={handleCancel} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Medicine Not Approved Yet</h2>
        <p className="text-gray-700 text-lg ms-16">Please Try Again Later.</p>
        <button onClick={handleCancel} className="bg-red-500 ms-28 hover:bg-red-600 text-white flex justify-center font-semibold py-2 px-4 rounded mt-4">Close</button>
      </div>
    </div>
  );
};

export default Modal;
