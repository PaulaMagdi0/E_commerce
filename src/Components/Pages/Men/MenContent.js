import React, { useContext, useState } from "react";
import './MenContent.css';
import product_card from "./data/product_data";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../../context/cart/ShoppingContext";

const MenContent = () => {

    const [visible, setVisible] = useState(10);
    const { addToCart , getById} = useContext(ShoppingContext);

    const length =  product_card.filter(name => name.category === "Men").length ;
    const listItems = product_card.filter(name => name.category === "Men").slice(0,visible).map((item) => 
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
        <div className="container mt-50">
            <div>
                <div className="title justify-content-between">
                    <h1>Men</h1> 
                </div>
                <div className="justify-content-start dFlex fWrap">
                    {listItems}
                </div>
                <div className="justify-content-center dFlex mb-50">
                    {visible < length && (
                        <button className="loadMore" onClick={loadMore}>Load More</button>
                    )}
                </div>
            </div>
        </div>
        
    )
}
export default MenContent;
