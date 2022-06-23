import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: {
    name: "USD",
    symbol: "$",
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      console.log(action, "action");
      state.currency.name = action.payload.name;
      state.currency.symbol = action.payload.symbol;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
