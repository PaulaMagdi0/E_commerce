import React from "react"
import './PaymentWayContent.css'
export default function PaymentWayContent() {
    return (
        <div className="row">
        <div className="container container0 p-150">
            <div className="d-flex justify-content-center">
                <h2 className="titlePay center">Choose Payment Way</h2>
            </div>
            <form method="POST" className="register-form" id="register-form">
                <div>
                    <label for="name" className="relative"><i className="fa-solid fa-credit-card"></i></label>
                    <label for="name" className="relative"><i className="cat-name">Payment Way</i></label>
                    <select name="categories" id="categories">
                        <option value="1">Visa</option>
                        <option value="2">Upon Receipt</option>
                    </select>
                </div>
                <div className="form-group1 form-button mt-60">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Continue" />
                </div>
            </form>
        </div>
    </div>
)}
