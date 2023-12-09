import React from "react"
import { Link } from "react-router-dom"
import './SignIn.css'

export default function SignInConent() {
    return (
            <div className="signup main">
                <div className="container0 container">
                    <div className="signup-form p-150">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group1">
                                <label for="name"><i className="material-icons-name fa fa-user"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group1">
                                <label for="pass"><i className="material-icons-name fa-solid fa-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group1 form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Log in" />
                            </div>
                            <Link to="/forgetpassword" className="forget-password">Forget your Password</Link>
                            <Link to="/signUp" className="forget-password">Create new account</Link>
                        </form>
                    </div>
                </div>
            </div>
)}
