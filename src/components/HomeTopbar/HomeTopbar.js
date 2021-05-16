import React from 'react';
import './HomeTopbar.css'
import panda from '../../images/panda.png'
const HomeTopbar = () => {
    return (
        <section className="home-topbar">
            <div className="logo">
                <img  src={panda} alt="" />
                <h1> Food Panda</h1>
            </div>
            <div className="topbar-container">
                <h5>
                    <span> <i className="fas fa-map-pin"></i> </span>
                    Current Location
                </h5>
                <h5>
                <i className="far fa-bell"></i>
                </h5>
            </div>
        </section>
    );
};

export default HomeTopbar;