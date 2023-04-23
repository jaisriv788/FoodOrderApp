import React from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MealsOnWheels</h1>
        <HeaderCartButton onClick={props.onClick}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="image" />
      </div>
    </React.Fragment>
  );
}

export default Header;
