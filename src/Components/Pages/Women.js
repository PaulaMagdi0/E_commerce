import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
//import BookData from '../Data.json';
import { FooterContainer } from '../Container/footer';
import WomenContent from './Women/WomenContent'
function Women() {
return (
    <div> 
    <SearchBar />  
    <Navbar />  
    <WomenContent />
    <FooterContainer />
    </div>
);
}

export default Women;
