import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import './MenuContainer.css'
const MenuContainer = ({ foods, searchKeywords,setUpdateData,updateData }) => {
    return (
        <section className="menu-container">
            <div className="shortcut">
                <p>Safe Dine in</p>
                <p>Home Delivary</p>
                <p> 9:00am-9:30pm </p>
                <p> Get Direction</p>
            </div>
            { foods?.length > 0 &&
                foods?.map(food => <MenuCard food={food} />)
            }
                {foods === null && searchKeywords.length>0 &&
                    <div className="not-found">
                    <h1>Nothing found By keyword - ' <span> {searchKeywords}</span> '   </h1>
                    <button onClick={()=>setUpdateData(!updateData)} > Go BacK </button>
                </div>
               }
        </section>
    );
};

export default MenuContainer;