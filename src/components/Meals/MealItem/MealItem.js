import React,{ useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

import CartContext from '../../../Store/cart-context';

const MealItem = (props) => {
    const Price = `$${props.price}`;

    const cartCtx = useContext(CartContext)

    const addToCartHandler = (e) => {
        e.preventDefault()
        const qty = document.getElementById(`${props.id}`).value;

        cartCtx.addItem({ name: props.name, price: props.price, qty:qty, id:props.id+Date.now()})
    }

    return <span className={classes.meal} >
        <div >
            <h3>{props.name}</h3>
            <div className={ classes.description}>{props.description}</div>
            <div className={ classes.price}>{ Price}</div>
        </div>
        <div>
            <MealItemForm id={ props.id } addToCartHandler={ addToCartHandler} />
        </div>
    </span>
}

export default MealItem;