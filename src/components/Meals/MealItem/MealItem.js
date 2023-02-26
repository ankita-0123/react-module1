import classes from './MealItem.module.css';
import Input from '../../UI/Input';
const MealItem = props => {
    const price =`$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <form className={classes.form}>
                <Input label='Amount' input={{
                    id:'amount',
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1'
                }} />
                <button>+Add</button>
            </form>
        </li>
    )

}
export default MealItem;