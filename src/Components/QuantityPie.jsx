import React, { useState, useEffect } from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    Cell, Legend
} from "recharts";
import axios from 'axios'

const QuantityPie = () => {
    const [data, setData] = useState([])
    const colors = ['#438388','#4b9399','#54a4aa', '#65adb2', '#76b6bb', '#87bfc3', '#98c8cc', '#a9d1d4','#badadd','#cbe3e5','#dcecee']

    const transformedData = data.map(item => ({ name: item.name, value: item.quantity }));

    useEffect(() => {
        axios.get('http://localhost:2000/admin/availablemed')
            .then(res => {
                // console.log(res.data.result);
                setData(res.data.pieChartData);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    console.log(data);
    return (
        <div className='p-4'>
            <div className='font-semibold text-center text-2xl'>Availability of medicines</div>
            <div className='flex items-center justify-center'>
                <PieChart width={700} height={500}
                >
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={transformedData}
                        // cx={300}
                        // cy={300}
                        outerRadius={200}
                        fill='#8884d8'
                        // label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        iconType="circle"
                        iconSize={10}
                        formatter={(value, entry) => {
                            const { color } = entry;
                            return <span style={{ color: 'black' }} className='px-4'>{value}</span>;
                        }}
                    />
                </PieChart>


            </div>
        </div>
    )
}

export default QuantityPie