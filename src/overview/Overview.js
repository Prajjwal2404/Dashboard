import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Months from '../components/Months'
import './Overview.css'

export default function Overview() {

    const [month, setMonth] = useState('Jan')

    function handleChange(event) {
        setMonth(event.target.value)
    }

    const earnings = [{ earning: 60, month: 'Jan' }, { earning: 50, month: 'Feb' }, { earning: 95, month: 'Mar' },
    { earning: 65, month: 'Apr' }, { earning: 75, month: 'May' }, { earning: 40, month: 'Jun' },
    { earning: 80, month: 'Jul' }, { earning: 100, month: 'Aug' }, { earning: 90, month: 'Sep' },
    { earning: 70, month: 'Oct' }, { earning: 65, month: 'Nov' }, { earning: 75, month: 'Dec' }]

    const earningArr = earnings.map((earning, idx) =>
        <Months key={idx} earning={earning.earning} value={earning.month} selected={month} handleChange={handleChange} />)


    return (
        <div className='overview-container'>
            <div className='overview-div'>
                <div className='overview-title'>
                    <h3>Overview</h3>
                    <h6>Monthly Earning</h6>
                </div>
                <Dropdown dropDownItems={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} classname='overview' />
            </div>
            <div className='months-container'>
                {earningArr}
            </div>
        </div>
    )
}
