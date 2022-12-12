import React, { useState } from "react";

import CartContext from "./cart-context";   

const CartContextProvider = (props) => {
    const [cartItems,dispatchCartItems] = useState([])
    
    const addItemToCart = (item) => { 
        let flag = false;
        const updatedCart = cartItems.filter((ele) => {
            if (ele.id === item.id) {
                ele.qty +=1 ;
                flag = true;
            }
            return ele;
        })

        if (!flag) {
            dispatchCartItems( [...cartItems,item] )
        }
        
        else dispatchCartItems(updatedCart)
    }
    
    const removeItemFromCart = (id) => { 
        const updatedCart = cartItems.filter((item) => {
            if (item.id === id) {
                if (item.qty > 1) { 
                    item.qty -= 1;
                    return item;
                }
            } else return item;
        })
        dispatchCartItems(updatedCart)
    }
    
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