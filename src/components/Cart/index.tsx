import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Card } from "../UI/Card";
import { CartItem } from "./CartItem";
import classes from "./styles.module.css";

export const Cart = () => {
  const itemCart = useSelector((state: RootState) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemCart.map((item) => (
          <CartItem
            key={item.id}
            item={{
              ...item,
              total: item.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};
