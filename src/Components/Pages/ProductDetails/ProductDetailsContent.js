import React, { useContext, useEffect, useState } from 'react';
import './ProductDetailsContent.css';
import Colors from './extend/Colors'
import DetailsThumb from './extend/DetailsThumb';
import { Link } from 'react-router-dom';
import { ShoppingContext } from "../../../context/cart/ShoppingContext";
import {product_card as products} from '../Men/data/product_data';

function ProductDetailsContent() {

const initialState = {
    index: 0
}

const [ ind , setInd ] = useState(initialState)

const myRef = React.createRef();

const handleTab = index => {
    setInd({index: index})
    const images = myRef.current.children;
    for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
};

useEffect(() => {
    const {index} = ind;
    myRef.current.children[index].className = "active";
});

const { idItem , addToCart } = useContext(ShoppingContext);
const {index} = ind;

return(
    <div>
        <div className="all">
            {idItem.map((item) => (
                        <div className="details" key={item.id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt=""/>
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.product_name}</h2>
                                    <span>{item.price}{item.currency}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />
                                <button className="cart" onClick={() => addToCart(item)}>Add To Cart</button>
                                <Link to='/payment'><button className="cart">Buy now</button></Link>
                            </div>
                        </div>
        ))}
        </div>
        {products.classify === "Bottoms" && (
            <div className="all">
                <div className="container container-regular">
                    <div className="product-description">
                        <div className="rte">
                            <div className="banner">
                                <div className="banner-item d-md-flex flex-row size-chart-container">
                                    <div className="banner-image">
                                        <img src="//cdn.shopify.com/s/files/1/0845/0641/files/Melton.jpg?v=1640543824" alt='Shop'/>
                                    </div>
                                    <div className="content">
                                        <h3>Size Chart</h3>
                                        <p>
                                        <strong>Width</strong>
                                        For measuring the waist: First, spread the pants on a flat surface, then measure the width between the two front ends of the waistband.
                                        <strong>Length</strong>
                                        For measuring the length: First, spread the pants on a flat surface. Then measure the length from the top of the waistband to the bottom of the pants.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {products.classify === "Tops" && (
            <div className="all">
                <div className="container container-regular">
                    <div className="product-description">
                        <div className="rte">
                            <div className="banner">
                                <div className="banner-item d-md-flex flex-row size-chart-container">
                                    <div className="banner-image">
                                        <img src="//cdn.shopify.com/s/files/1/0845/0641/files/Round_Neck_Basic.jpg?v=1649361273" alt='Shop'/>
                                    </div>
                                    <div className="content">
                                        <h3>Size Chart</h3>
                                        <p>
                                        <strong>Chest</strong>
                                        To measure the chest: First, put the product on a flat surface, then measure between the two ends below armhole.
                                        <strong>Length</strong>
                                        To measure the length of the product: First, put the product on a flat surface, then measure from the highest point of the shoulder down to the products bottom hem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};

export default ProductDetailsContent;