import React from 'react';
import './dashboard.css';
import Nav from '../navbar/Nav'
import RightBar from '../rightbar/RightBar';

const Dashboard = () => {
    const countList = [
        { id: 1, color: "blue", bgcolor: "rgba(0, 0, 255, 0.4)", name: "Send", icon: "send" },
        { id: 2, color: "rgb(183, 183, 3)", bgcolor: "rgba(255, 255, 0, 0.4)", name: "Soft Bounces", icon: "refresh" },
        { id: 3, color: "red", bgcolor: "rgba(255, 0, 0, 0.4)", name: "Hard Bounces", icon: "device_hub" },
        { id: 4, color: "green", bgcolor: "rgba(0, 128, 0, 0.4)", name: "Process Failed", icon: "report" },
    ];
    const chartData = [
        { id: 1, color: "blue", name: "Send" },
        { id: 2, color: "rgb(183, 183, 3)", name: "Soft Bounces" },
        { id: 3, color: "red", name: "Hard Bounces" },
        { id: 4, color: "green", name: "Process Failed" },
        { id: 5, color: "aqua", name: "Opens" },
        { id: 6, color: "brown", name: "Click" },
    ]
    return (
        <div className='Dashboard'>
            <Nav />
            <div className="dashboardemptyContent">
                <h1>DashBoard</h1><hr />
                <div className="dashboardContentPage">
                    <div className="dashboardContentPageLeft">
                        <div className="dashboardContentPageLeftTop">
                            <div className="emailcount">
                                <div>Email Count</div>
                                <select name="day">
                                    <option value="volvo">Today</option>
                                    <option value="saab">yesterday</option>
                                </select>
                            </div>
                            <div className="dashboardMailDetail">
                                {countList.map((n) => (
                                    <div className="emailcountvalue" key={n.id}>
                                        <div className="emailcountvalueLogo material-symbols-outlined" style={{ backgroundColor: `${n.bgcolor}`, color: `${n.color}` }}>{n.icon}</div>
                                        <div className="emailcountvalues">
                                            <div className="emailcountvalueName">{n.name}</div>
                                            <div className="emailcountvalueCount" style={{ color: `${n.color}` }}>0</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="dashboardChart">
                                {
                                    chartData.map((n) => (
                                        <div className="bar" style={{ width: "30px", height: `${n.id * 20}px`, backgroundColor: `${n.color}`, marginLeft: "5px" }} key={n.id}></div>
                                    ))
                                }
                            </div>
                            <div className="chardetail">
                                {
                                    chartData.map((n) => (
                                        <div className="chartdatas" key={n.id}>
                                            <div style={{ backgroundColor: `${n.color}`, width: "10px", height: "10px" }}></div>
                                            <div>{n.name}</div>
                                            <div>{n.id}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="dashboardContentPageLeftBottom">
                            <h3>How can i help you</h3>
                            <div className="leftbottomCard">
                                <div className='material-symbols-outlined'>language</div>
                                <div className="leftbottomCardDetail">
                                    <div className="leftbottomCardDetailHeading">SMTP and API configration</div>
                                    <div>Pick SMTP or email API to send email</div>
                                </div>
                                <div className="read">Read Now</div>
                            </div>
                            <div className="leftbottomCard">
                                <div className='material-symbols-outlined'>mail</div>
                                <div className="leftbottomCardDetail">
                                    <div className="leftbottomCardDetailHeading">Email Templates</div>
                                    <div>Send single or Bulk email from email template</div>
                                </div>
                                <div className="read">Read Now</div>
                            </div>
                        </div>

                    </div>


                    <div className="dashboardContentPageRight">
                        <div className="creditInfomation">
                            <div className="creditInfomationHeading">
                                <div className="heading">Credit Information</div>
                                <div className="seemore">view more Detail</div>
                            </div>
                            <div className="creditInfomationAccReview">
                                <div className="review">Your account is yet to be reviewed</div>
                                <div className="emailAvailble">992/1000 email Available</div>
                            </div>
                            <div className="emilAvailbalecard">
                                <div className='material-symbols-outlined'>mail</div>
                                <div className="emilAvailbalecardDetail">
                                    <div className="leftbottomCardDetailHeading">100 Eamil</div>
                                    <div>avialable in 100 email / day</div>
                                </div>
                            </div>
                        </div>

                        <div className="setupOption">
                            <div className="setupHEading">Setup Options</div>
                            <div className='setupSubHEading'>View the API, SMTP or Wordpress Plugin setup detail for all Mail Agent</div>
                            <div className="goto">Go to.. <button>Mail Agent</button></div>
                            <div className="setupHEading">Sample API Code</div>
                        </div>
                    </div>
                </div>
            </div>
            <RightBar />
        </div>
    )
}

export default Dashboard
