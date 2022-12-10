
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const Price = `$${props.price.toFixed(2)}`;
    return <span className={classes.meal} >
        <div >
            <h3>{props.name}</h3>
            <div className={ classes.description}>{props.description}</div>
            <div className={ classes.price}>{ Price}</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </span>
}

export default MealItem;