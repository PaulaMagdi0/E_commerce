import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
//import BookData from '../Data.json';
import { FooterContainer } from '../Container/footer';
import SignInConent from './SignIn/SignInConent';

function SignIn() {
return (
    <div> 
        <SearchBar />  
        <Navbar />  
        <SignInConent />
        <FooterContainer />
    </div>
);
}

export default SignIn;
