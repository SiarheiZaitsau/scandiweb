import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import basketSlice from "../reducers/basketReducer/basketReducer";
import currencySlice from "../reducers/currencyReducer/currencyReducer";

// const rootReducer = combineReducers({
//   currency: currencyReducer,
// });

const store = configureStore({
  reducer: {
    currency: currencySlice,
    basket: basketSlice,
  },
});

export default store;
