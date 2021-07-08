import { Card } from "../../UI/Card";
import classes from "./styles.module.css";

type ProductItemProps = {
  title: string;
  price: number;
  description: string;
};

export const ProductItem = ({
  description,
  price,
  title,
}: ProductItemProps) => {
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
