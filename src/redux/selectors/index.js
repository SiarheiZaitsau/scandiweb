import { createSelector } from "reselect";

export const getBasket = (state) => {
  return state.basket.basket;
};

export const getCurrency = (state) => {
  return state.currency.currency;
};

export const selectCategory = (state, category) => category;

export const getProductById = createSelector(
  [(state) => state.data.data, (state, id) => id],
  (data, id) => data.find((product) => product.id === id)
);
