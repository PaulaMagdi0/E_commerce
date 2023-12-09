import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
//import BookData from '../Data.json';
import { FooterContainer } from '../Container/footer';
import PaymentWayContent from './PaymentWay/PaymentWayContent';

function PaymentWay() {
return (
    <div> 
    <SearchBar />  
    <Navbar />  
    <PaymentWayContent />
    <FooterContainer />
    </div>
);
}

export default PaymentWay;
