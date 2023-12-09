import React from "react";
import './SignIn/SignIn.css';
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";

export default function EnterTheCode() {
    return (
        <div> 
            <SearchBar />  
            <Navbar />  
                <div className="signup main">
                    <div className="container0 container">
                        <div className="signup-form p-150">
                            <h2 className="form-title">Enter The Code</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group0">
                                    <label htmlFor="code"><i className="fa-solid fa-key"></i></label>
                                    <input type="text" name="code" id="code" placeholder="Enter The Code" />
                                </div>
                                <div className="form-group1 form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Continue" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>    
                <FooterContainer />
            </div>

)}