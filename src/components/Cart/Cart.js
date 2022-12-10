
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: 'biryani', amount: 2, price: 10.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>
    })
    }
    </ul>; 

    return (
        <Modal cartClose={ props.cartClose}>
            {cartItems}
            <div className={ classes.total}>
                <span>Total Amount</span>
                <span>26.25</span>
            </div>
            <div className={ classes.actions}>
                <button className={classes['button--alt']} onClick={ props.cartClose}>Close</button>
                <button className={ classes.button }>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;