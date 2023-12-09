import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../context/cart/ShoppingContext';
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {

const {cartItems} = useContext(ShoppingContext);

const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
    setFilteredData([]);
    } else {
    setFilteredData(newFilter);
    }
};

const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
};

return (
    <div className="container">
    <div className="search">
        <div className="searchInputs">
        <div className="inputFlex">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
            <li  id="clearBtn" onClick={clearInput}  className={filteredData.length === 0 ? 'fa fa-search' : 'fa fa-close'}></li>
            {filteredData.length !== 0 && (
            <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                    <p>{value.title} </p>
                </a>
                );
            })}
            </div>
        )}
        </div>
        <div className="sideSearchBar">
            <Link className="bg-none" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
                <span>{cartItems.length}</span>
            )}
            </Link>
            <i className="fa-solid fa-user"></i>
            <p>
            <Link to="/signIn" className="userSign">Sign In</Link>
            <Link to="/signUp" className="userSign">Sign Up</Link>
            </p>
        </div>
        </div>
    </div>
    </div>
);
}
export default SearchBar;
