import { useDispatch } from "react-redux";
import { removeItemFromCart, addItemToCart } from "../../../store/cart.store";
import { ItemAdd } from "../../@types/item";
import classes from "./styles.module.css";

type CartItemProps = {
  item: {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
};

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveQuantity = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleAddQuantity = () => {
    dispatch(addItemToCart({ ...item }));
  };

  //const { title, quantity, total, price, id } = item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleRemoveQuantity(item.id)}>-</button>
          <button onClick={handleAddQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};
