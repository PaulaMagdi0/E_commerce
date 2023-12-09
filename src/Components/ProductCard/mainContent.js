import React, { useContext } from "react";
import './style.css';
import Slider from "react-slick";
import product_card from "./data/product_data";
import Campaign from '../Campaign/campaign';
import Categories from '../Categories/Categories';
import SliderContent from '../Slider/SliderContent'
import Convenience from '../Convenience/Convenience';
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../context/cart/ShoppingContext";
/*import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";
import Footer from "../Footer";*/

export default function MainContent() {

    const { addToCart , getById} = useContext(ShoppingContext);

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1120,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 450,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 100,
            settings: 'unslick',
        },
        ],
    };

    const listItems = product_card.filter(name => name.subCat === "Featured").map((item) => 
    <div className="card" key={item.id}>
        <Link to={'/productdetails/'+item.id} onClick={() => getById(item)}>
            <div className="card_img">
                <img src={item.thumb} alt={item.product_name} />
            </div> 
        </Link>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            {/* <p>{item.description}</p> */}
            <p className="price">{item.price}<span>{item.currency}</span></p>
            <div className="btn" onClick={() => addToCart(item)} >Add to cart</div>
        </div>
    </div>
    );

    return (
        <div className="container">
            <SliderContent />
            <Convenience />
            <Categories />
            <div>
                <div className="title justify-content-center">
                    <h1>Featured Products</h1> 
                </div>
                <div className="justify-content-around">
                    <Slider {...settings}>
                        {listItems}
                    </Slider>
                </div>
            </div>
            <Campaign />
        </div>
    )
}
