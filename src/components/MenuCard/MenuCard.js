import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './MenuCard.css'
const MenuCard = ({ food }) => {
    const { name, description, resturant, price, image } = food;
    const [exist, setExist] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [discounts, setDiscounts] = useState(0);
    const [cartItems, setCartItems] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://food-panda-albi.herokuapp.com/resturants?search=${resturant?.[1]}`)
            .then(res => res.json())
            .then(data => setDiscounts(data?.[0]?.discount));
    }, []);
  
    const updateQuantity = (type) => {
        if (type === "increment") {
            setQuantity(quantity + 1);
        }
        else if(quantity > 1 && type=== "decrement") {
            setQuantity(quantity - 1);
        }
    }
    const discountedPrice = (price - (price * discounts / 100)).toFixed(2);

    const cartHandler = (data) => {
        data.quantity = quantity;
        const sameItem = cartItems.find(item => item._id === data._id);
        if (!sameItem) {
            let newCart = [...cartItems, data];
            setCartItems(newCart);
            setExist(true);
        }
    };
     
    const cartRemover = (data) => {
        const newCart = cartItems.filter(item => item._id !== data._id);
        setCartItems(newCart);
        setExist(false);
    }


    return (
        <div className="menu-card">
            <div className="menu-image">
                <img src={image} alt="" />
            </div>
            <div className="menu-details">
                <div>
                <h1>{name}</h1>
                <p> {description} </p>
                {
                    discounts ? <div className="price-div">
                        <p> <del>$ {price} </del></p>
                        <p>$ {discountedPrice} </p>
                    </div>
                        :
                        <div className="price-div">
                            <p>$ {price} </p>
                        </div>
                }
             </div>
                <div className="action-div">
                    <div className="quantity">
                        <p onClick={()=> updateQuantity('decrement')} >
                            <i className="fas fa-minus"></i>
                        </p>
                        <p>
                            {quantity}
                        </p>
                        <p onClick={()=> updateQuantity('increment')} >
                        <i  className="fas fa-plus"></i>
                        </p>
                    </div>
                    {
                        exist ?
                            <button onClick={() => cartRemover(food)}> Remove from cart</button>
                            :
                            <button onClick = {()=>cartHandler(food)}> Buy Now</button>
                    }
                </div>
            </div>


        </div>
    );
};

export default MenuCard;