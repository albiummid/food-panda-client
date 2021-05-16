import React, { useEffect, useState } from 'react';
import './Navbar.css';
const Navbar = () => { 
    return (
        <nav>
            <ul className="nav-items">
            <li className="nav-item">
                <i className="fas fa-qrcode"></i>
                <p>Scan QR</p>
            </li>
            <li className="nav-item">
            <i className="fas fa-search"></i>
                <p>Search</p>
            </li>
            <li className="nav-item">
            <i className="fas fa-shopping-cart"></i>
                <p>My cart</p>
            </li>
            <li className="nav-item">
            <i className="fas fa-user"></i>
                <p>My profile</p>
            </li>
           </ul>
        </nav>
    );
};

export default Navbar;