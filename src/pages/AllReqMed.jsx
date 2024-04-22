import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReqComponent from '../Components/ReqComponent';
import MediShare from '../Components/MediShare';

const AllReqMed = () => {
  const [req,setReq]=useState([])
  const token = JSON.parse(atob(localStorage.getItem('authtoken').split('.')[1]));
  const id = token._id
  console.log(id)

  useEffect(() => {
    axios.get(`https://medishare-server-3.onrender.com/receiver/getallreq/${id}`)
      .then(res => {
        console.log(res.data.requestList);
        setReq(res.data.requestList);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* <MediShare/> */}
            <div className='my-6 text-3xl text-center font-bold text-black'>
                My Request List
            </div>

            <div class="mx-5 mb-4 relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-left rtl:text-right text-[#49bbc1]">
                    <thead class="text-[#62c9cf] text-xl text-center">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Medicine Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Manufactured Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Expiry Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Requested Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Accept/Reject
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Requested at
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            req && req.map((item)=>(
                                <ReqComponent med_name={item.medicine.name} mf_date={item.medicine.mf_date} exp_date={item.medicine.exp_date} quantity={item.quantity} status={item.accept} requested_at={item.createdAt}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
  )
}

export default AllReqMed
