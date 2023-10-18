import React from 'react'
import InsightsBox from '../components/insightsBox'
import money from '../images/money.png'
import note from '../images/note.png'
import wallet from '../images/wallet.png'
import bag from '../images/bag.png'
import './Insights.css'

export default function Insights() {
    return (
        <div className='insights-container'>
            <InsightsBox img={money} title='Earning' value='198k' profit={true} change='37.8'
                duration='month' />
            <InsightsBox img={note} title='Orders' value='2.4k' profit={false} change='2'
                duration='month' />
            <InsightsBox img={wallet} title='Balance' value='2.4k' profit={false} change='2'
                duration='month' />
            <InsightsBox img={bag} title='Total Sales' value='89k' profit={true} change='11'
                duration='week' />
        </div>
    )
}
