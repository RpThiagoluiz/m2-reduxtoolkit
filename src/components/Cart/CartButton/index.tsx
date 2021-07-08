import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { toggle as toggleReduxAction } from "../../../store/ui.store";
import classes from "./styles.module.css";

export const CartButton = () => {
  //Aqui eu vou somente alterar o estado, agora eu preciso de um component que seja dinamico
  const dispatch = useDispatch();
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleToggleCart = () => {
    dispatch(toggleReduxAction());
  };

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};
