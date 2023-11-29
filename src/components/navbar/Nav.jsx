import React from 'react';
import './nav.css';
import navData from '../../assets/nav';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <div className="nablogo material-symbols-outlined">local_post_office</div>
                <div className="navName">TechnixMail</div>
            </div>
            <div className='navbarLink'>
                {navData.map((n) => (
                    <Link to={n.route} className="navcontent" key={n.id}>
                        <div className="nablogo material-symbols-outlined">{n.icon}</div>
                        <div className="navName">{n.name}</div>
                    </Link>
                ))}
            </div>
            <Link to="/settings" className="navcontent">
                <div className="nablogo material-symbols-outlined">settings</div>
                <div className="navName">Settings</div>
            </Link>
        </div>
    )
}

export default Nav
