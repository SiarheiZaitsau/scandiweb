import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
};

// export const changeCurrency = createAction("CHANGE_CURRENCY");

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
