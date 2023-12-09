import React from "react"
import './SignIn/SignIn.css'
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";

export default function ResetPassword() {
    return (
        <div> 
            <SearchBar />  
            <Navbar />  
                <div className="signup main">
                    <div className="container0 container">
                        <div className="signup-form p-150">
                            <h2 className="form-title">Reset Your Password</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group1">
                                    <label for="pas"><i className="material-icons-name fa-solid fa-lock"></i></label>
                                    <input type="password" name="pas" id="pas" placeholder="Enter New Password" />
                                </div>
                                <div className="form-group1 form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>   
            <FooterContainer />
            </div>
)}
