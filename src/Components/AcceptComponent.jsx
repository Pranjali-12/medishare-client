import React, { useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";

const AcceptComponent = (props) => {

    console.log(props.id)

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

    const handleAccept = () => {
        axios.post(`https://medishare-server-3.onrender.com/admin/accept?id=${props.id}`)
            .then(res => {
                console.log(res.data)
                window.location.reload()
            }).catch(error => {
                console.log(error);
            })
    };

    const handleReject = () => {
        axios.post(`https://medishare-server-3.onrender.com/admin/reject?id=${props.id}`)
            .then(res => {
                console.log(res.data)
                window.location.reload()
            }).catch(error => {
                console.log(error);
            })
    };

    return (
        <>
            {/* <AcceptComponent id={item.id} donorName={item.name} receiverName={item.illness} medicineName={item.owner} mfDate={item.mf_date} expiryDate={item.exp_date} quantity={item.quantity} req_quantity={item.quantity} appStatus={item.accept} createdAt={item.createdAt} /> */}
            <tr class="bg-white border-b text-zinc-800 text-center font-semibold">
                <td scope="col" class="px-6 py-3">
                    {props.donorName}
                </td>
                <td scope="col" class="px-6 py-3">
                    {props.receiverName}
                </td>
                <td scope="col" class="px-6 py-3">
                    {props.medicineName}
                </td>
                <td scope="col" class="px-6 py-3">
                    {formattedManufacturedDate}
                </td>
                <td scope="col" class="px-6 py-3">
                    {formattedExpiryDate}
                </td>
                <td scope="col" class="px-6 py-3">
                    {props.quantity}
                </td>
                <td scope="col" class="px-6 py-3">
                    {props.req_quantity}
                </td>
                <td scope="col" class="px-6 py-3">
                    {/* {props.appStatus} */}
                    {
                        props.appStatus == "accept" ?
                            (
                                <div className='px-2 py-1 text-white text-sm bg-green-500 rounded-md font-bold'>Accept</div>
                            ) : (

                                props.appStatus == "reject" ?
                                    (
                                        <div className='px-2 py-1 text-white text-sm bg-red-500 rounded-md font-bold'>Reject</div>
                                    )
                                    : (
                                        <div className='flex gap-2 items-center'>
                                            Pending
                                            <div className='border-2 p-1 hover:cursor-pointer hover:bg-gray-200 rounded-md' onClick={handleAccept}><ImCheckmark size={24} color='green'/></div>
                                            <div className='border-2 p-1 hover:cursor-pointer hover:bg-gray-200 rounded-md' onClick={handleReject}><ImCross size={20}color='red'/></div>
                                        </div>
                                    )

                            )
                    }
                </td>

                <td class="px-6 py-4 font-light">
                    {moment(props.createdAt).fromNow()}
                </td>
            </tr></>
    )
}

export default AcceptComponent