import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import CartState from "./context/cart/cartState";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartState>
            <App />
        </CartState>
    </React.StrictMode>
);
