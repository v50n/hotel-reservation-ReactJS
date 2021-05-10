import React, { useState } from 'react';
import './../css/Navbar.css';
import {FaBars} from 'react-icons/fa';
import logo from './../images/logo.svg';
import {Link} from 'react-router-dom'

function Navbar() {
    const [displayNavMenu, setDisplayNavMenu] = useState(false);

    const handleToogleMenuClick = ()=>{
        setDisplayNavMenu(!displayNavMenu)
    }
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="toogle-icon">
                <FaBars onClick={handleToogleMenuClick} />
            </div>

            <div className={displayNavMenu ? 'nav-menu display-navMenu': 'nav-menu'}>
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/rooms/">Rooms</Link>
            </div>
        </nav>
    )
}

export default Navbar
