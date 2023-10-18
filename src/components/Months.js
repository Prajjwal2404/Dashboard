import React from 'react'

export default function Months({ earning, value, selected, handleChange }) {
    return (
        <div className='month-container'>
            <label style={{ height: `${earning}%` }}>
                <input type='radio' name='month' value={value} checked={selected === value} onChange={handleChange} />
                <div></div>
            </label>
            <h5>{value}</h5>
        </div>
    )
}
