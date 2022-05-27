import { createSelector } from "reselect";

export const getBasket = (state) => {
  return state.basket.basket;
};

export const getCurrency = (state) => {
  return state.currency.currency;
};

// export const getCategories = createSelector(selectData, (items) => {
//   const unique = [...new Set(items.map((item) => item.category))];
//   return unique;
// });

export const selectCategory = (state, category) => category;

// export const selectItemsByCategory = createSelector(
//   [(state) => state.data?.data, (state, category) => category],
//   (data, category) =>
//     data.filter((item) => {
//       if (category) {
//         return item.category === category;
//       }
//       return true;
//     })
// );

export const getProductById = createSelector(
  [(state) => state.data?.data, (state, id) => id],
  (data, id) => data.find((product) => product.id === id)
);
