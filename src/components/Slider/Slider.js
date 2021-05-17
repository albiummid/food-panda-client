import React from 'react';
import './Slider.css'
import Carousel from 'react-material-ui-carousel';
import { useHistory } from 'react-router';
const Slider = ({ foods }) => {
    const history = useHistory();
    const clickHandler = (name) => {
        const url = `order/${name}`
        history.push(url);
    }
    return (
        <section className="slider">
            <Carousel >
                {
                    foods.map((food,index) =>
                        <div key={food._id} onClick={()=>clickHandler(food.resturant[0])} className="slider-img">
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