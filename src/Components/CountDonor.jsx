import React, { useEffect, useState } from 'react'
import {Tooltip,BarChart, XAxis, YAxis, Legend, Bar} from "recharts";
import axios from 'axios';

const CountDonor = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://medishare-server-3.onrender.com/admin/countdonor')
            .then(res => {
                // console.log(res.data.result);
                setData(res.data.result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    console.log(data);

    return (
        <div className='p-4'>

            <div className='font-semibold text-center text-2xl'>Different Categories of Donors and <br/>Their Contribution Levels</div>
            <div className='flex justify-center mt-10'>
                <BarChart width={500} height={500} data={data} className=''>
                    <XAxis dataKey="donorType" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#65adb2" isAnimationActive={true}/>
                </BarChart>
            </div>
        </div>
    );
}

export default CountDonor

