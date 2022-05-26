// const initialState = [];
// const basketReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "PRODUCT_TO_BASKET":
//       const isProductExist = state.some(
//         (el) =>
//           el.stringifiedAttributes === payload.stringifiedAttributes &&
//           el.productId === payload.productId
//       );
//       let newState = [...state];
//       if (isProductExist) {
//         newState = state.map((item) => {
//           if (item.id === payload.id) {
//             item.amount += 1;
//           }
//           return item;
//         });
//       } else {
//         newState.push({ ...payload, amount: 1 });
//       }
//       return newState;
//     default:
//       return state;
//   }
// };

// export default basketReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

// export const changeCurrency = createAction("CHANGE_CURRENCY");

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
  },
});

export const { addProduct } = basketSlice.actions;
export default basketSlice.reducer;
