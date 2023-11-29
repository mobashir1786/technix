import React from 'react';
import './right.css';
import RightBarData from '../../assets/right'

const RightBar = () => {
    return (
        <div className='rightBar'>
            {
                RightBarData.map((n) => (<div key={n.id} className='rightBarLogo material-symbols-outlined'>{n.logo}</div>))
            }
        </div>
    )
}

export default RightBar
