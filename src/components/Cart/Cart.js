import React, { useContext} from 'react';

import CartContext from '../../Store/cart-context';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    console.log(cartCtx)

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => {
        return <li key={item.id}>{item.name}</li>
    })
    }
    </ul>; 

    const TotalAmount = cartCtx.items.reduce((curVal, item) => {
        
        return curVal+(item.price)*item.qty
    },0)

    return (
        <Modal cartClose={ props.cartClose}>
            {cartItems}
            <div className={ classes.total}>
                <span>Total Amount</span>
                <span>{ TotalAmount }</span>
            </div>
            <div className={ classes.actions}>
                <button className={classes['button--alt']} onClick={ props.cartClose}>Close</button>
                <button className={ classes.button }>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;