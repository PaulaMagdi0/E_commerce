import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './Categories.css';
import categoriesData from "./data/categoriesData";

export default class Categories extends Component {
    render() {
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
    
        const listcategories = categoriesData.map((item) =>
        <div className="category" key={item.id}>
            <Link to={item.url}>
                <div className="category_img">
                    <img src={item.thumb} alt={item.product_name} />
                </div>
                <div className="category_header">
                    <a href="/"><h2>{item.category_name}</h2></a>
                </div>
            </Link>
        </div>
    
        );

    return (
        <div className="container">
            <div className="title justify-content-center">
                <h1>I am Looking for ... </h1> 
                {/* <a href="#">Browse All Categories 
                    <span className="fa-solid fa-arrow-right"></span>
                </a> */}
            </div>
            <div className="justify-content-around">
                <Slider {...settings}>
                    {listcategories}
                </Slider>
            </div>
        </div>
    )
}
}