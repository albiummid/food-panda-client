import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardContainer from '../../components/CardContainer/CardContainer';
import HomeTopbar from '../../components/HomeTopbar/HomeTopbar';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import './Home.css';

const Home = () => {
    const [sliderFoods, setSliderFoods] = useState([]);
    const [nearbyResturants, setNearbyResturants] = useState([]);
    const [topRatedResturants, setTopRatedResturants] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                setSliderFoods(data.slice(0, 5));
            });
        fetch('http://localhost:5000/nearbyResturants')
            .then(res => res.json())
        .then(resturants => setNearbyResturants(resturants))
        fetch('http://localhost:5000/topRatedResturants')
            .then(res => res.json())
        .then(resturants => setTopRatedResturants(resturants))

    }, []);



    const history = useHistory();
    const clickHandler = (name) => {
        const url = `order/${name}`
        history.push(url);
    }
    return (
        <div className="page-container">
                   <Navbar/>
            <HomeTopbar />
            <Slider foods={sliderFoods} clickHandler={clickHandler} />
            <CardContainer title={"Nearby Stores"} resturants={nearbyResturants} clickHandler={clickHandler} />
            <CardContainer title={"Top Rated Foods"} resturants={topRatedResturants} clickHandler={clickHandler} />
        
        </div>
    );
};

export default Home;