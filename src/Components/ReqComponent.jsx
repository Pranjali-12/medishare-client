import React from 'react'
import moment from 'moment'

const ReqComponent = (props) => {
    console.log(props)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();

        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth = month < 10 ? `0${month}` : `${month}`;

        return `${formattedDay}/${formattedMonth}/${year}`;
    };

    const formattedManufacturedDate = formatDate(props.mf_date);
    const formattedExpiryDate = formatDate(props.exp_date);
  return (
    <>
            <tr class="bg-white border-b text-zinc-800 text-center font-semibold">
                <td class="px-6 py-4">
                    {props.med_name}
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
                <td class="px-6 py-4">
                    {props.status}
                    {/* {
                        props.status==1?(
                            <div>Accept</div>
                        )
                        :(
                            <div>Reject</div>
                        )
                    } */}
                </td>
                <td class="px-6 py-4 font-light">
                    {moment(props.requested_at).fromNow()}
                </td>
            </tr></>
  )
}

export default ReqComponent