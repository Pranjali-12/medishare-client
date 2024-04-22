import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AcceptComponent from '../Components/AcceptComponent';

const AdminAccept = () => {
  const [req,setReq]=useState([]);
  useEffect(() => {
    axios.get(`https://medishare-server-3.onrender.com/admin/getallreq`)
      .then(res => {
        console.log(res.data.reqs)
        setReq(res.data.reqs);

      }).catch(error => {
        console.log(error);
      })
  }, [])
  return (
    <div>
            
            <div className='mb-6 text-3xl text-center font-bold text-black'>
                Medicine Request List
            </div>


            <div class="mx-5 mb-4 relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-left rtl:text-right text-[#49bbc1]">
                    <thead class="text-[#62c9cf] text-xl text-center">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Donor name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Receiver Name
                            </th>
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
                                Medicine Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Requested Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Approval
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Requested At
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            req && req.map((item)=>(
                                <AcceptComponent id={item._id} donorName={item.medicine.donor.firstName+" "+item.medicine.donor.lastName} receiverName={item.receiver.name} medicineName={item.medicine.name} mfDate={item.medicine.mf_date} expiryDate={item.medicine.exp_date} quantity={item.medicine.quantity} req_quantity={item.quantity} appStatus={item.accept} createdAt={item.createdAt} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
  )
}

export default AdminAccept