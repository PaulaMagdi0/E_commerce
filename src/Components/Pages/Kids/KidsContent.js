import React, { useContext, useState } from "react";
import './KidsContent.css';
import product_card from "./data/product_data";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../../context/cart/ShoppingContext";

const KidsContent = () => {

    const [visible, setVisible] = useState(10);
    const { addToCart , getById} = useContext(ShoppingContext); 
    const length =  product_card.filter(name => name.category === "Kids").length ;
    const listItems = product_card.filter(name => name.category === "Kids").slice(0,visible).map((item) => 
        <div className="kidsCard" key={item.id}>
            <Link to={'/productdetails/'+item.id} onClick={() => getById(item)}>
                <div className="kidsCard_img">
                    <img src={item.thumb} alt={item.product_name} />
                </div>
            </Link>
            <div className="kidsCard_header">
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
                    <h1>FUTURE TRENDSETTERS</h1> 
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
export default KidsContent;
