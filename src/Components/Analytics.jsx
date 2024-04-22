import React from 'react'
import CountDonor from './CountDonor'
import QuantityPie from './QuantityPie'

export const Analytics = () => {
    return (
        <div className='flex justify-evenly'>
            <CountDonor />
            <QuantityPie/>
        </div>
    )
}
