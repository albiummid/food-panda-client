import React from 'react';
import './FoodCard.css'
const FoodCard = ({ food,clickHandler }) => {
    // const { image, name, description, _id,discount,facilites } = food;
    return (
        <div onClick={()=>clickHandler(food?._id)} className="food-card">
            <img src={food?.image} alt="" />
            <h2> {food?.name} </h2>
            {/* <p> {food?.description} </p> */}
            <div className="card-footer">
                <p>4 Km</p>
                <p> 3 <i className="far fa-star"></i></p>
            </div>
        </div>
    );
};

export default FoodCard;