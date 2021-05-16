import React from 'react';
import './Slider.css'
import Carousel from 'react-material-ui-carousel';
const Slider = ({clickHandler,foods}) => {
    return (
        <section className="slider">
            <Carousel >
                {
                    foods.map((food,index) =>
                        <div key={food._id} onClick={()=>clickHandler(food._id)} className="slider-img">
                        <img src={food.image} alt="" />
                        <h2>{food.name}</h2>
                        <p> { food.description }</p>
                    </div>)
                }
            </Carousel>
        </section>
    );
};

export default Slider;