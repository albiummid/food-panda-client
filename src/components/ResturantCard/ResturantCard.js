import React from 'react';
import './ResturantCard.css'
const ResturantCard = ({ resturent, clickHandler }) => {
    const { image, name, discount, distance, _id, ratings, facilities } = resturent;
    console.log(image);
    return (
        <div className="resturant-card" onClick={() => clickHandler(name)}>
               {
                discount > 0 &&
                <p className="discount">{ discount}% off</p>
            }
            <img src={image} alt="" />
         
            <div className="card-details">
            <h2> {name} </h2>
                <ul className="facilities">
                {
                facilities.map(facility => <li>{ facility }</li> )
            }
           </ul>
            <div className="card-footer">
                <p>{distance} K.M</p>
                <p> {ratings} <i className="far fa-star"></i></p>
            </div>
            </div>
        </div>
    );
};

export default ResturantCard;