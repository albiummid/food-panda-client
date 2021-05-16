import React from 'react';
import { Link } from 'react-router-dom';
import './OrderTopbar.css'
const OrderTopbar = ({name}) => {
    return (
        <div className="topbar-container">
            <Link to='/'>
                <i className="fas fa-chevron-left"></i>
            </Link>
            <h1>{name }</h1>
            <a href="tel:+8801755977522">
            <i className="fas fa-phone"></i>
            </a>
        </div>
    );
};

export default OrderTopbar;