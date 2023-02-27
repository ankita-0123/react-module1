import { Fragment } from "react"
import mealsImage from "../../assets/mealss.jpg";

import HeaderCartButton from "./HeaderCartButton";

import classes from './Header.module.css';
const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
            
        </header>
        <div className={["main-image"]}>
            <img src={mealsImage} alt='A table of delicious food' width="1540" height="400"/>
        </div>
    </Fragment>
    );
};

export default Header;
