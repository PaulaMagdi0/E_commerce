import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingContext } from "../../context/cart/ShoppingContext";
import './Cart.css';
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { FooterContainer } from "../Container/footer";

export default function Cart() {
    const {cartItems, incrementQ, decrementQ, removeFromCart} = useContext(ShoppingContext);
    
    return (
        <div> 
            <SearchBar />  
            <Navbar />  
            <div className='container'>
                <div className='row my-4'>
                    <div className="col-md-12">
                        <div className="cardCart">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map(item => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <img src={item.thumb} 
                                                        className='fluid rounded'
                                                        width={80}
                                                        height={80}    
                                                        alt={item.product_name} />
                                                    </td>
                                                    <td>
                                                        {item.product_name}
                                                    </td>
                                                    <td>
                                                        <i 
                                                            onClick={() => incrementQ(item)}
                                                            style={{cursor: 'pointer'}}
                                                            className="fa fa-caret-up"></i>
                                                        <span className="mx-2">
                                                            {item.quantity}
                                                        </span>
                                                        <i 
                                                            onClick={() => decrementQ(item)}
                                                            style={{cursor: 'pointer'}}
                                                            className="fas fa-caret-down"></i>
                                                    </td>
                                                    <td>
                                                        ${item.price} {item.currency}
                                                    </td>
                                                    <td>
                                                        ${item.price * item.quantity} 
                                                    </td>
                                                    <td>
                                                        <i 
                                                            onClick={() => removeFromCart(item)}
                                                            style={{cursor: 'pointer'}}
                                                            className="fa-regular fa-circle-xmark"></i>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <th colSpan={3} className='text-left'>
                                                <span className="badge bg-danger rounded-pill">Total</span>
                                            </th>
                                            <td colSpan={3} className='text-end'>
                                                <span className="badge bg-danger rounded-pill">
                                                    ${
                                                        cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                                    }
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='dFlex mb-50'>
                                <Link to='/'><button className="Cart">Continue Shopping</button></Link>
                                <Link to='/payment'><button className="Cart">Check Out</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContainer />
        </div>
    )
}
