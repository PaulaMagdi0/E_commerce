import React, { Component } from "react";
import Slider from "react-slick";
import './SliderContent.css';
import one from './image/1.png'
import two from './image/2.png'
import three from './image/3.png'

export default class SliderContent extends Component {
render() {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
    };
    return (
        <div className="container">
            <div className="row slider">
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src={one} alt='' />
                        </div>
                        <div>
                            <img src={two} alt='' />
                        </div>
                        <div>
                            <img src={three} alt='' />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="row mt-30 mb-30">
                    <div>
                        <div className="banner__items">
                            <div className="banner__item">
                                <img src="https://cdn.shopify.com/s/files/1/0845/0641/files/Accessories_1024x1024_crop_center.png?v=1649542057" alt=''/>
                            </div>
                            <div className="banner__item">
                                <img src="https://cdn.shopify.com/s/files/1/0845/0641/files/Pants_3b68dd40-4c25-4e5a-bafd-0b7e32efaf7e_1024x1024_crop_center.png?v=1649542057" alt=''/>
                            </div>
                            <div className="banner__item ">
                                <img src="https://cdn.shopify.com/s/files/1/0845/0641/files/Women_1024x1024_crop_center.png?v=1649542057" alt=''/>
                            </div>
                            <div className="banner__item">
                                <img src="https://cdn.shopify.com/s/files/1/0845/0641/files/T_Shirt_1024x1024_crop_center.png?v=1649542057" alt=''/>
                            </div>
                            <div className="banner__item" id="hide">
                                <img src="https://cdn.shopify.com/s/files/1/0845/0641/files/Kids_1024x1024_crop_center.png?v=1649542057" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
}