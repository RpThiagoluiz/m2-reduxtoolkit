import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { showNotification } from "./store/ui.store";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { Products } from "./components/Shop/Products";
import { Notification } from "./components/UI/Notification";

//Nao chamar de primeira
let isInitialized = true;

export const App = () => {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  return (
    <>
      {notification.title && <Notification notification={notification} />}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
};
