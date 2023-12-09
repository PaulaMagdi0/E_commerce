import React from "react"
import './PaymentContent.css'

export default function PaymentContent() {
    return (
        <div className="row">
            <div className="container container0 p-150">
                <div className="d-flex justify-content-between">
                    <h2 className="titlePay center">Payment</h2>
                    <div className="d-non">
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt='Visa'/>
                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='Master Card'/>
                        <img src="https://img.icons8.com/color/48/000000/maestro.png" alt='Maestro'/>
                    </div>
                </div>
                <form method="POST" className="register-form" id="register-form">
                    <div className="form-group1">
                        <label for="name"><i className="material-icons-name fa fa-user"></i></label>
                        <input type="text" name="nam" id="nam" placeholder="Name On Card"/>
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fa-solid fa-credit-card"></i></label>
                        <input type="text" name="number" id="number" placeholder="Number Of Card"/>
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fa fa-calendar"></i></label>
                        <input type="text" name="date" id="date" placeholder="Expiry Date M/Y" />
                    </div>
                    <div className="form-group1">
                        <label for="name"><i className="fa fa-lock"></i></label>
                        <input type="text" name="cvv" id="cvv" placeholder="CVV/CVC" />
                    </div>
                    <div className="form-group1 form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
)}
