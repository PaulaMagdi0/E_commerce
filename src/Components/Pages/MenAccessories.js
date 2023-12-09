import React, { useContext, useState } from "react";
import './Men/MenContent.css';
import product_card from "./Men/data/product_data";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../context/cart/ShoppingContext";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";

const MenAccessories = () => {

    const [visible, setVisible] = useState(10);
    const { addToCart , getById} = useContext(ShoppingContext); 
    const length =  product_card.filter(name => name.path === "menaccessories").length ;
    const listItems = product_card.filter(name => name.path === "menaccessories").slice(0,visible).map((item) => 
        <div className="menCard" key={item.id}>
            <Link to={'/productdetails/'+item.id} onClick={() => getById(item)}>
                <div className="menCard_img">
                    <img src={item.thumb} alt={item.product_name} />
                </div>
            </Link>
            <div className="menCard_header">
                <h2>{item.product_name}</h2>
                {/* <p>{item.description}</p> */}
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn" onClick={() => addToCart(item)} >Add to cart</div>
            </div>
        </div>
    );

    const loadMore = () => {
        setVisible(visible + 5);
    };

    return (
        <div> 
            <SearchBar />  
            <Navbar />  
                <div className="container mt-50">
                    <div>
                        <div className="title justify-content-between">
                            <h1>Men Accessories</h1> 
                        </div>
                        <div className="justify-content-start dFlex fWrap">
                            {listItems}
                        </div>
                        <div className="justify-content-center dFlex mb-50">
                            {visible < length && (
                                <button className="loadMore" onClick={loadMore}>Load More</button>
                            )}
                        </div>
                        <div className="mt-100">
                            {length === 0 && (
                                <div className="emptyTitle justify-content-center mb_50">
                                    <h1>There Are No Products In This Page ... </h1> 
                                    <video></video>
                                </div>
                            )}
                        </div>
                    </div>
                </div>        
            <FooterContainer />
        </div>
    )
}
export default MenAccessories;
