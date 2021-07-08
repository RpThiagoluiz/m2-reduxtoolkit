import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from ".";

//cria as actions de forma automaticas

type item = {
  id: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as item[],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    //reducer com o payload
    addItemToCart(state, action) {
      const newItemToAddACart: item = action.payload;
      //No exemplo preciso verificar se ja existe o item, caso sim ele vai acrescentar.
      const existingItem = state.items.find(
        (item) => item.id === newItemToAddACart.id
      );

      if (!existingItem) {
        //Formatar os dados aqui antes de colocar dentro do array.
        const newItem = {
          ...newItemToAddACart,
          quantity: 1,
        };
        state.items.push({
          ...newItem,
        });
      } else {
        // existingItem.quantity ++
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.totalPrice + newItemToAddACart.price;
      }
    },
    removeItemFromCart(state, action) {
      const idItem = action.payload;
      const existingItem = state.items.find((item) => item.id === idItem);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== idItem);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});
//as acoes sao criadas automaticamentes
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

//Function Sleep somente para demontrar como um delay de request
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//async no toolkit - async nao vai na function, o toolkit que transforma ele em async - a funcao dentro dela que sera async
//lembra que todo thunk é uma acao async
// export const asyncIncrement = (amount: number): AppThunk => {
//   //precisa tipar o typescript
//   return async (dispatch: AppDispatch) => {
//     //fetch
//     await sleep(3000);

//     dispatch(incrementByAsync(amount));
//   };
// };
