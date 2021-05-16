import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderTopbar from '../../components/OrderTopbar/OrderTopbar';

const Order = () => {
    const { name } = useParams();
    const [searchKeywords,setSearchKeywords] = useState('')
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/foods?resturant=${name}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    },[])
    return (
        <div className="page-container">
            <OrderTopbar name={name}/>
        </div>
    );
};

export default Order;