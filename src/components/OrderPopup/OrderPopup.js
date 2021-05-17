import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './OrderPopup.css'
const OrderPopup = () => {
    const [cartItems, setCartItems] = useContext(UserContext);

    return (
        <div className={cartItems.length? "order-popup":'d-none'}>
            <p> {cartItems.length} Item Selected </p>
            <button>View cart</button>
        </div>
    );
};

export default OrderPopup;