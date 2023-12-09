import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
//import BookData from '../Data.json';
import { FooterContainer } from '../Container/footer';
import SignUpContent from './SignUp/SignUpContent';

function SignUp() {
return (
    <div> 
        <SearchBar />  
        <Navbar />  
        <SignUpContent />
        <FooterContainer />
    </div>
);
}

export default SignUp;
