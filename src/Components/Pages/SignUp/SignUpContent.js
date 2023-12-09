import React from "react"
import { Link } from "react-router-dom"
import './SignUp.css'

export default function SignUpContent() {
    return (
    <div className="signup main">
        <div className="container0 container">
            <div className="signup-form p-150">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" className="register-form" id="register-form">
                    <div className="form-group0">
                        <label for="name"><i className="material-icons-name fa fa-user"></i></label>
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group0">
                        <label for="email"><i className="material-icons-name fa fa-envelope"></i></label>
                        <input type="email" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group0">
                        <label for="pass"><i className="material-icons-name fa-solid fa-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password" />
                    </div>
                    <div className="form-group0">
                        <label for="re-pass"><i className="material-icons-name fa-solid fa-lock"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                    </div>
                    <div className="form-group0 form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit mb-3" value="Register" />
                        <Link to="/signIn" className="forget-password">I am already member</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}