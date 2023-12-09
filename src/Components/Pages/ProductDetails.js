import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
//import BookData from '../Data.json';
import { FooterContainer } from '../Container/footer';
import ProductDetailsContent from './ProductDetails/ProductDetailsContent';

function ProductDetails() {
return (
    <div> 
        <SearchBar />  
        <Navbar />  
        <ProductDetailsContent />
        <FooterContainer />
    </div>
);
}

export default ProductDetails;
