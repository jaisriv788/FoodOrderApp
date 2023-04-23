import React, { useContext } from "react";
import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

function MealItems(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCarthandler} />
      </div>
    </li>
  );
}

export default MealItems;
