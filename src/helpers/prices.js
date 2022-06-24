import { discount } from "../constants/index";

export const getPrice = (prices, currency) => {
  if (Array.isArray(prices)) {
    let result = prices.find((item) => {
      return item.currency.label === currency;
    });
    return {
      symbol: result.currency.symbol,
      price: result.amount,
    };
  } else {
    return `No such Price`;
  }
};

export const calculateTax = (sum, discountValue = discount) => {
  return {
    sum: sum + sum * (discountValue / 100),
    tax: sum * (discountValue / 100),
  };
};
export const calculateQuantity = (basket) => {
  let res = 0;
  basket.forEach((item) => {
    res += item.amount;
  });
  return res;
};
