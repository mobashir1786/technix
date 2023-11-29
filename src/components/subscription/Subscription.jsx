import React from 'react';
import Nav from '../navbar/Nav';
import RightBar from '../rightbar/RightBar';

const Subscription = () => {
    return (
        <div className='DashboardEmpty'>
            <Nav />
            <div className="dashboardemptyContent">
                <h1>Subscription</h1><hr />
                <div className='dashboardContent'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS071Cc6svWuVIcYrchFVeUyl6A1UPUHPm4TA&usqp=CAU" alt="paper" />
                    <div>It seems like you've reached a page that's currently empty</div>
                </div>
            </div>
            <RightBar />
        </div>
    )
}

export default Subscription
