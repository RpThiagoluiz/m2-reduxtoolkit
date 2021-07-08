import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/cart.store";
import { Card } from "../../UI/Card";
import { ProductItemProps } from "../../@types/product";
import classes from "./styles.module.css";
import { Item } from "../../@types/item";

export const ProductItem = ({ item }: ProductItemProps) => {
  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    const itemToAdd = {
      ...item,
    };

    dispatch(addItemToCart(itemToAdd));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={handlerAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
