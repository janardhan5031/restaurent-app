import React,{ useContext } from 'react';
import CartContext from '../../../Store/cart-context';

import classes from './CartItems.module.css';
    
const CartItem = (props) => {   

    const cartCtx = useContext(CartContext);

    function removeItemAmount() {
        cartCtx.removeItem(props.item.id)
    }

    function addItemAmount() {
        console.log(props.item)
        cartCtx.addItem(props.item)
    }

    return <li className={classes['cart-item']} >
        <div >
            <h2>{props.item.name}</h2>
            <div className={ classes.summary}>
                <span className={classes.price}>{ props.item.price }</span>
                <span className={ classes.amount}>{ props.item.qty }</span>
            </div>
        </div>
        <div className={ classes.actions}>
            <button type='button' onClick={removeItemAmount}>-</button>
            <button type='button' onClick={ addItemAmount } >+</button>
        </div>

    </li>
}

export default CartItem;