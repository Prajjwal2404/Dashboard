import React from 'react'
import './Customers.css'

export default function Customers() {
    return (
        <div className='customers-container'>
            <div className='customers-title'>
                <h3>Customers</h3>
                <h6>Customers that buy products</h6>
            </div>
            <div className='pie-chart'>
                <div className='chart-container'>
                    <div className='percentage-customers'>
                        <h1>65%</h1>
                        <p>Total New Customers</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="11.5rem" height="11.5rem" className='inner-svg' >
                        <circle cx="5.75rem" cy="5.75rem" r="4rem" className='inner-circle' />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="11.5rem" height="11.5rem" className='middle-svg' >
                        <defs>
                            <linearGradient id="GradientColorIn">
                                <stop offset="0%" stopColor="#633bea" />
                                <stop offset="100%" stopColor="#bd88ed" />
                            </linearGradient>
                        </defs>
                        <circle cx="5.75rem" cy="5.75rem" r="4rem" className='middle-circle' />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="11.5rem" height="11.5rem" className='outer-svg' >
                        <defs>
                            <linearGradient id="GradientColorOut">
                                <stop offset="0%" stopColor="#ec5dad" />
                                <stop offset="100%" stopColor="#f7238c" />
                            </linearGradient>
                        </defs>
                        <circle cx="5.75rem" cy="5.75rem" r="4rem" className='outer-circle' />
                    </svg>
                </div>
            </div>
        </div>
    )
}
