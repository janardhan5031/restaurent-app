import React, { useState } from "react";

import CartContext from "./cart-context";   

const CartContextProvider = (props) => {
    const [cartItems,dispatchCartItems] = useState([])
    
    const addItemToCart = (item) => { 
        
        dispatchCartItems([...cartItems,item])
    }
    
    const removeItemFromCart = (id) => { }
    
    const cartContext = {
        items: cartItems,
        addItem: addItemToCart,
        removeItem:removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;