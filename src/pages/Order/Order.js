import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuContainer from '../../components/MenuContainer/MenuContainer';
import OrderPopup from '../../components/OrderPopup/OrderPopup';
import OrderTopbar from '../../components/OrderTopbar/OrderTopbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Order.css'

const Order = () => {
    const [searchKeywords, setSearchKeywords] = useState('');
    const { name } = useParams();
    const [updateData, setUpdateData] = useState(false);
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`https://food-panda-albi.herokuapp.com/foods?resturant=${name}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [updateData]);
    console.log(foods);
    return (
        <div className="page-container ">
            <div className="order">
            <OrderTopbar name={name} />
            <SearchBar type={"food"} searchKeywords={searchKeywords} setSearchKeywords={setSearchKeywords} setFoods={setFoods} />
            <MenuContainer updateData={updateData} setUpdateData={setUpdateData} searchKeywords={searchKeywords} foods={foods} />
            </div>
            <OrderPopup/>
        </div>
    );
};

export default Order;