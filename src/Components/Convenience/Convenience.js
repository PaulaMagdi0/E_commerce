import React, { Component } from "react";
import './Convenience.css';

export default class Convenience extends Component {
    render() {
        return(
            <div>
                <div className="sg-convenience">
                    <ul className="global-list">
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <div className="text">
                                    <span>Free Shipping & Returns</span>
                                    <p>For all orders over 500 L.E</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i className="fas fa-undo"></i>
                                </div>
                                <div className="text">
                                    <span>Secure Payment</span>
                                    <p>We ensure secure payment</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i className="fa-solid fa-credit-card"></i>
                                </div>
                                <div className="text">
                                    <span>Money Back Guarantee</span>
                                    <p>Any back within 7 days</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="convenience">
                                <div className="icon">
                                    <i className='far fa-comment-dots'></i>
                                </div>
                                <div className="text">
                                    <span>Customer Support</span>
                                    <p>Call or email us</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}