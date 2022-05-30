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
