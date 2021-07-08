import { ProductItem } from "../ProductItem";
import classes from "./styles.module.css";

type dummyProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const DUMMY_PRODUCT: dummyProduct[] = [
  {
    id: "p1",
    title: "pamonha",
    description: "de minho",
    price: 12,
  },
  {
    id: "p2",
    title: "aBobra",
    description: "Muranga, docinha somente aqui no carro do som",
    price: 2,
  },
];

export const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem item={product} />
        ))}
      </ul>
    </section>
  );
};
