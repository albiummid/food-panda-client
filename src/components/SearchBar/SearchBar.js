import React from 'react';
import './SearchBar.css'
const SearchBar = ({ setFoods, setSearchKeywords, searchKeywords, type, setResturants }) => {

    const handleSearch = (e) => {
        setSearchKeywords(e.target.value);
        if (e.target.value.length && type ==="resturant") {
            setResturants([])
        }
        else {
            setFoods([])
            }
        e.preventDefault();
    }
   

    const handleSubmit = (e) => {
        if (type === 'food') {
            fetch(`https://food-panda-albi.herokuapp.com/foods?search=${searchKeywords}`)
                .then(res => res.json())
                .then(data => {
                    if (data.length > 0) {
                        setFoods(data);
                    }
                    else {
                        setFoods(null)
                    }
                })
        }
        else if (type === "resturant") {
            fetch(`https://food-panda-albi.herokuapp.com/resturants?search=${searchKeywords}`)
                .then(res => res.json())
                .then(data => {
                    if (data.length > 0) {
                        setResturants(data); 
                    }
                    else {
                        setResturants(null)
                    }
                }

            )
            .catch(err => alert(err))

        }


        e.preventDefault();
    };
    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input onChange={handleSearch} type="text" placeholder={type === "food" ? "Search Food Item" : "Search Resturants"} name="search" required />
            <button type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    );
};

export default SearchBar;