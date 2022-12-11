import React, { useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)
    // console.log('cartCtx in header cart button----',cartCtx)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + Number(item.qty)   
    },0)

    return (<button className={classes.button} onClick={props.cartOpen } >
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >Your Cart</span>
        <span className={ classes.badge }> {numberOfCartItems} </span>
    </button>)
}

export default HeaderCartButton;