import React, { useState } from 'react';
import './mailagent.css';
import Nav from '../navbar/Nav'
import RightBar from '../rightbar/RightBar'
import OverView from './OverView';
import Empty from './Empty';
import Template from './Template';

const MailAgent = () => {
    const [popup, setPopup] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Overview');
    const handleNavItemClick = (component) => {
        setActiveComponent(component);
    };
    const popupData = [
        { id: 1, name: "Request Id:", data: "1234567891234567891" },
        { id: 2, name: "Date:", data: "12 jan 2023, 4:17 PM" },
        { id: 3, name: "Subject:", data: "COMPANY INTRUDUCTION" },
        { id: 4, name: "Mail Agent Name:", data: "mail_agent_1" },
        { id: 5, name: "Bounce Address:", data: "email@email.com" },
        { id: 6, name: "From:", data: "noreply@gmail.com" },
        { id: 7, name: "Send Mail Via", data: "SMTP" },
    ];
    const renderComponent = () => {
        switch (activeComponent) {
            case 'Overview':
                return <OverView />;
            case 'Setup':
                return <Empty />;
            case 'Domain':
                return <Empty />;
            case 'Processed':
                return <Empty />;
            case 'Template':
                return <Template />;
            case 'Hooks':
                return <Empty />;
            case 'Tracking':
                return <Empty />;
            case 'Cache':
                return <Empty />;
            default:
                return null;
        }
    };

    return (
        <div className='Dashboard'>
            <Nav />
            <div className="MailAgent">
                <div className="mailagentHeading">
                    <div className="heading">Mail_Agent_1 <button className='material-symbols-outlined' onClick={() => { setPopup(!popup) }}>edit</button></div>
                    <div className="subheading">Created On 12 jan 2023  02:30 PM</div>
                </div>
                <div className="mailAgentNav">
                    <div className={`navItem ${activeComponent === 'Overview' ? 'active' : ''}`} onClick={() => handleNavItemClick('Overview')}>Overview</div>

                    <div className={`navItem ${activeComponent === 'Setup' ? 'active' : ''}`} onClick={() => handleNavItemClick('Setup')}>Setup Info</div>

                    <div className={`navItem ${activeComponent === 'Domain' ? 'active' : ''}`} onClick={() => handleNavItemClick('Domain')} >Domain</div>

                    <div className={`navItem ${activeComponent === 'Processed' ? 'active' : ''}`} onClick={() => handleNavItemClick('Processed')}>Processed Email</div>

                    <div className={`navItem ${activeComponent === 'Template' ? 'active' : ''}`} onClick={() => handleNavItemClick('Template')}>Template</div>

                    <div className={`navItem ${activeComponent === 'Hooks' ? 'active' : ''}`} onClick={() => handleNavItemClick('Hooks')}>Web Hooks</div>

                    <div className={`navItem ${activeComponent === 'Tracking' ? 'active' : ''}`} onClick={() => handleNavItemClick('Tracking')}>Email Tracking</div>

                    <div className={`navItem ${activeComponent === 'Cache' ? 'active' : ''}`} onClick={() => handleNavItemClick('Cache')}>File Cache</div>
                </div>
                <hr />
                {renderComponent()}
                {popup ? <div className="popup" >
                    <div className="popupTitle">
                        <div className="emailDetail">Email Details</div>
                        <div className="deleteEmil" onClick={() => { alert("static Web Page") }}>Delete Email</div>
                        <div className="deleteemail material-symbols-outlined" onClick={() => { setPopup(!popup) }}>close</div>
                    </div>
                    <div className="popupContent">
                        <div className="popupContentLeft">
                            {
                                popupData.map((n) => (
                                    <div className="popupContentLeftItem" key={n.id}>
                                        <div className="itemName">{n.name}</div>
                                        <div className="itemData">{n.data}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="popupContentRight">
                            <div className="statusDetail">Status Details</div>
                            <hr />
                            <div className="allEmail">Total Emails</div>
                            <div className="allEmailTitle">
                                <div>Recipient</div>
                                <div>Email Refrance</div>
                                <div>Status</div>
                            </div>
                            <div className="Emaildetail">
                                <div>test@gmail.com</div>
                                <div>123456789</div>
                                <div>processed</div>
                            </div><hr />
                            <div className="Emaildetail">
                                <div>test@gmail.com</div>
                                <div>123456789</div>
                                <div>processed</div>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
            <RightBar />
        </div>
    )
}

export default MailAgent
