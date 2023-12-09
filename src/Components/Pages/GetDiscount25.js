import React from 'react';
import './About/AboutContent.css';
import campaignData from '../Campaign/data/campaignData';
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";


export default function GetDiscount25() {

    const promoCode = campaignData.filter( name => name.id === 2 ).map((item) => 
        <div>
        <div className="dFlex mb-50">
            <div className='contentdis'>
                    <p>This is The Promo Code For Discount</p>
                    <button className='btnOutlinedis'>
                        <span className='bolddis'>{item.promo}</span>
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div> 
            <SearchBar />  
            <Navbar />  
            <div className='aboutMain'>
                <div className="container mt-50 mb-50">
                    <div>
                        <div className="title justify-content-between">
                            <h1>Discount</h1> 
                        </div>
                        {promoCode}
                    </div>
                </div>
            </div>               
            <FooterContainer />
        </div>
    )
}
