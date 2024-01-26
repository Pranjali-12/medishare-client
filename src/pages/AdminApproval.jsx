import React from 'react'
import ApprovalComponent from '../Components/ApprovalComponent'
import MediShare from '../Components/MediShare'
import {useState,useEffect} from 'react'
import axios from 'axios';

const AdminApproval = () => {
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
    return (
        <div>
            
            <div className='mb-6 text-3xl text-center font-bold text-black'>
                Medicine Approval List
            </div>


            <div class="mx-5 mb-4 relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-left rtl:text-right text-[#49bbc1]">
                    <thead class="text-[#62c9cf] text-xl text-center">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Donor name
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
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Approval
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meds && meds.map((item)=>(
                                <ApprovalComponent id={item.id} name={item.name} description={item.illness} ownerName={item.owner} mfDate={item.mf_date} expiryDate={item.exp_date} quantity={item.quantity} appStatus={item.approval} createdAt={item.createdAt} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AdminApproval