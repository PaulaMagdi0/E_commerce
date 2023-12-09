import React from "react"
import './SignIn/SignIn.css'
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";

export default function ForgetPassword() {
    return (
        <div> 
            <SearchBar />  
            <Navbar />  
            <div className="signup main">
                <div className="container0 container">
                    <div className="signup-form p-150">
                        <h2 className="form-title">Enter Your Email</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group0">
                                <label for="email"><i className="material-icons-name fa fa-envelope"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
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
