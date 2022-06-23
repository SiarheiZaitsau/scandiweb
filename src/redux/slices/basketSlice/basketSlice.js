import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      const isProductExist = state.basket.some(
        (el) =>
          el.stringifiedAttributes === payload.stringifiedAttributes &&
          el.productId === payload.productId
      );
      let newState = [...state.basket];
      if (isProductExist) {
        newState = state.basket.map((item) => {
          if (item.id === payload.id) {
            item.amount += 1;
          }
          return item;
        });
      } else {
        newState.push({ ...payload, amount: 1 });
      }
      state.basket = newState;
    },
    incrementAmount: (state, action) => {
      const { payload } = action;
      const product = state.basket.find(
        (el) =>
          el.stringifiedAttributes === payload.stringifiedAttributes &&
          el.productId === payload.productId
      );
      product.amount++;
    },
    decrementAmount: (state, action) => {
      const { payload } = action;
      const product = state.basket.find(
        (el) =>
          el.stringifiedAttributes === payload.stringifiedAttributes &&
          el.productId === payload.productId
      );
      if (product.amount === 1) {
        state.basket = state.basket.filter((prod) => {
          return !(
            prod.stringifiedAttributes === product.stringifiedAttributes &&
            prod.productId === product.productId
          );
        });
      } else {
        product.amount--;
      }
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  addProduct,
  incrementAmount,
  decrementAmount,
  changeAttributeValue,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
