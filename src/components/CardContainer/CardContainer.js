import React, { useState } from 'react';

import ResturantCard from '../ResturantCard/ResturantCard';
import './CardContainer.css'
const CardContainer = ({ title, resturants, clickHandler }) => {

    const [viewAll,SetViewAll] = useState(false);
    return (
        <section className="card-section">
            <div className="title-bar"> 
                <h1>{title}</h1>
                {
                    viewAll? <button onClick={() => SetViewAll(false)} >
                        Short view
                   </button>
                        :
                        <button onClick={() => SetViewAll(true)} >
                 View all
                </button>
                }
            </div>
            <div className="card-container">
                {
                    viewAll? 
                        resturants.map(resturant => <ResturantCard resturant={resturant} clickHandler={clickHandler} key={resturant._id} />)
                        :
                        resturants.slice(0, 2).map((resturant) => <ResturantCard key={resturant._id} clickHandler={clickHandler} resturant={resturant} />)

                }
            </div>
        </section>
    );
};

export default CardContainer;