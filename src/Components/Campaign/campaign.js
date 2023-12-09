import { Link } from "react-router-dom";
import Slider from "react-slick";
import './campaign.css';
import campaignData from "./data/campaignData";

export default function Campaign () {

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 500,
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

    const listCampaign = campaignData.map((item) =>
        <div className="cardCampain" key={item.id}>
            <div className="cardCampain_img">
                <img src={item.thumb} alt={item.product_name} />
            </div>
            <div className="cardCampain_header">
                <p>{item.date}</p>
                <h2>{item.campaign_name}</h2>
                <p>{item.description}</p>
                <Link to={item.path} target="_blank"><div className="btn" >Get Discount</div></Link>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="title justify-content-center">
                <h1>Our Campaigns</h1> 
            </div>
            <div className="justify-content-around">
                <Slider {...settings}>
                    {listCampaign}
                </Slider>
            </div>
        </div>
    )
}
