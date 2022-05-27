import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../slices/basketSlice/basketSlice";
import currencySlice from "../slices/currencySlice/currencySlice";

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
