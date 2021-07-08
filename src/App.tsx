import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { Products } from "./components/Shop/Products";

export const App = () => {
  //pegar o estado atual do cart.
  const toggleCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
};
