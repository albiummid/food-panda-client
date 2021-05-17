import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardContainer from '../../components/CardContainer/CardContainer';
import HomeTopbar from '../../components/HomeTopbar/HomeTopbar';
import Navbar from '../../components/Navbar/Navbar';
import ResturantCard from '../../components/ResturantCard/ResturantCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';
import './Home.css';

const Home = () => {
    const [searchKeywords, setSearchKeywords] = useState('');
    const [updateData, setUpdateData] = useState(false);
    const [resturants, setResturants] = useState([]);
    const [sliderFoods, setSliderFoods] = useState([]);
    const [nearbyResturants, setNearbyResturants] = useState([]);
    const [topRatedResturants, setTopRatedResturants] = useState([]);
    const [clickedSearch, setClickedSearch] = useState(false);
    useEffect(() => {
        fetch('https://food-panda-albi.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setSliderFoods(data.slice(0, 5));
            });
        fetch('https://food-panda-albi.herokuapp.com/nearbyResturants')
            .then(res => res.json())
            .then(resturants => setNearbyResturants(resturants));

        fetch('https://food-panda-albi.herokuapp.com/topRatedResturants')
            .then(res => res.json())
            .then(resturants => setTopRatedResturants(resturants));

    },[]);


    const history = useHistory();
    const clickHandler = (name) => {
        const url = `order/${name}`
        history.push(url);
    }
    return (
        <div className="page-container">
            <HomeTopbar />
            {
                clickedSearch &&
                <>
                     <SearchBar type={"resturant"} searchKeywords={searchKeywords} setSearchKeywords={setSearchKeywords} setResturants={setResturants} />

                    {resturants === null && searchKeywords.length > 0 &&
                        <div className="not-found">
                       <h1>Nothing found By keyword - ' <span> {searchKeywords}</span> '   </h1>
                       <button onClick={()=>setClickedSearch(!clickedSearch)} > Go Back </button>
                   </div>
                }
                </>
               

            }
                <div className="card-container">
                { 
                    resturants?.map(resturant => <ResturantCard resturant={resturant} clickHandler={clickHandler}/>)
                }
                    </div>
          
            {
                !clickedSearch &&
                    <>
                    <Slider foods={sliderFoods} clickHandler={clickHandler} />
                    <CardContainer title={"Nearby Resturants"} resturants={nearbyResturants} clickHandler={clickHandler} />
                    <CardContainer title={"Top Rated Raturants"} resturants={topRatedResturants} clickHandler={clickHandler} />
                    </>
            }

            <Navbar clickedSearch={clickedSearch} setClickedSearch={setClickedSearch} />
        </div>
    );
};

export default Home;