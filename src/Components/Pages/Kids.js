import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
//import BookData from '../Data.json';
import { FooterContainer } from '../Container/footer';
import KidsContent from './Kids/KidsContent'
function Kids() {
return (
    <div> 
        <SearchBar />  
        <Navbar />  
        <KidsContent />  
        <FooterContainer />
    </div>
);
}

export default Kids;
