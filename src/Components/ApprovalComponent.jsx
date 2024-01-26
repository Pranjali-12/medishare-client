import React, { useState } from 'react'
import moment from 'moment'
import axios from 'axios'

const ApprovalComponent = (props) => {

    console.log(props.id)
    const [status, setStatus] = useState(props.appStatus)

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

    const handleCheckboxChange = () => {
        setStatus((prevStatus) => !prevStatus);
        axios.post(`http://localhost:2000/admin/approve?id=${props.id}`)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(error);
            })
    };

    return (
        <>
            <tr class="bg-white border-b text-zinc-800 text-center font-semibold">
                <th scope="row" class="px-6 py-4 whitespace-nowrap ">
                    {props.ownerName}
                </th>
                <td class="px-6 py-4">
                    {props.name}
                </td>
                <td class="px-6 py-4">
                    {formattedManufacturedDate}
                </td>
                <td class="px-6 py-4">
                    {formattedExpiryDate}
                </td>
                <td class="px-6 py-4">
                    {props.quantity}
                </td>
                <td className="px-6 py-4">
                    {status ? (
                        <div className="flex flex-wrap gap-2 justify-around">
                            Approved
                            <label className="relative inline-flex items-center mb-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={status}
                                    onChange={handleCheckboxChange}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1CB5BD]"></div>
                            </label>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2 justify-around">
                            Pending
                            <label className="relative inline-flex items-center mb-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={status}
                                    onChange={handleCheckboxChange}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1CB5BD]"></div>
                            </label>
                        </div>
                    )}
                </td>

                <td class="px-6 py-4 font-light">
                    {moment(props.createdAt).fromNow()}
                </td>
            </tr></>
    )
}

export default ApprovalComponent