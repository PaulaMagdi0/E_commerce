import React , { useContext, useState } from "react";
import { ShoppingContext } from './ShoppingContext'

function CartState({ children }) {

    const [cartItems,setCartItems] = useState([]);
    const [idItem,setIdItem] = useState([]);
    const initialState = {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
    };
    
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    const addToCart = (item) => {
        let productItem = cartItems.find(product => product.id === item.id);
        if(productItem){
        productItem.quantity += 1;
        setCartItems([...cartItems]);
        }else{
        item.quantity = 1;
        setCartItems([item,...cartItems]);
        }
    }

    const getById = (item) => {
        idItem.find(product => product.id === item.id);
            setIdItem([item]);
    }

    const incrementQ = (item) => {
        let productItem = cartItems.find(product => product.id === item.id);
        if(productItem){
        productItem.quantity += 1;
        setCartItems([...cartItems]);
        }
    }

    const decrementQ = (item) => {
        let productItem = cartItems.find(product => product.id === item.id);
        if(productItem){
        productItem.quantity -= 1;
        if(productItem.quantity === 0){
            setCartItems(cartItems.filter(product => product.id !== item.id));
        }else{
            setCartItems([...cartItems]);
        }
        }
    }

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(product => product.id !== item.id));
    }

    return (
        <ShoppingContext.Provider
            value={{
            cartItems: cartItems,
            idItem: idItem,
            addToCart,
            getById,
            removeFromCart,
            incrementQ,
            decrementQ,
            currentColor, 
            currentMode, 
            activeMenu, 
            screenSize, 
            setScreenSize, 
            handleClick, 
            isClicked, 
            initialState, 
            setIsClicked, 
            setActiveMenu, 
            setCurrentColor, 
            setCurrentMode, 
            setMode, 
            setColor, 
            themeSettings,
            setThemeSettings
            // To access the total, we need to pass in the state
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
}

export default CartState;

export const useCartState = () => useContext(ShoppingContext);
