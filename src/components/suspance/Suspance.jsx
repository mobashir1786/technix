import React from 'react';
import './suspance.css';
import Nav from '../navbar/Nav'
import RightBar from '../rightbar/RightBar';

const Suspance = () => {
    return (
        <div className='DashboardEmpty'>
            <Nav />
            <div className="dashboardemptyContent">
                <h1>Suspance List</h1><hr />
                <div className='dashboardContent'>
                    <div className='suspance'>
                        <img src="https://www.freepnglogos.com/uploads/paper-plane-png/paper-plane-clipart-cliparts-download-images-31.png" alt="paper" />
                        <div>Emails will not be send to the email added here</div>
                        <button>Add Email</button>
                    </div>
                </div>
            </div>
            <RightBar />
        </div>
    )
}

export default Suspance
