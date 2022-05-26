export function dataToStore(data) {
  return {
    type: "ADD_DATA",
    payload: data,
  };
}

export function changeCurrency(currency) {
  return {
    type: "CHANGE_CURRENCY",
    payload: currency,
  };
}

export function productToBasket(product) {
  return {
    type: "PRODUCT_TO_BASKET",
    payload: product,
  };
}
