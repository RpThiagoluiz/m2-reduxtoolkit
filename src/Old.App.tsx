import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { showNotification } from "./store/ui.store";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { Products } from "./components/Shop/Products";
import { Notification } from "./components/UI/Notification";
import { firebaseURL } from "./services/api";

//Nao chamar de primeira
let isInitialized = true;

export const App = () => {
  //pegar o estado atual do cart.

  //caso queira fazer chamada sempre q mudar o cart.
  // useEffect(() => {
  //   //cart do useSelector
  //   //chamada api, com fetch ou axios passadno no body o Json.
  // },[cart])
  const dispatch = useDispatch();
  const toggleCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    const fetchCartToFireBase = async () => {
      try {
        dispatch(
          showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data !",
          })
        );
        const response = await fetch(`${firebaseURL}`, {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        }

        dispatch(
          showNotification({
            status: "success",
            title: "Success!",
            message: "Sending cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          showNotification({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      }
    };

    if (isInitialized) {
      isInitialized = false;
      return;
    }

    fetchCartToFireBase();
  }, [cart, dispatch]);

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
