export const autoCompleteProduct = (product) => {
  const id = product.id;
  const attributes = product.attributes;
  if (attributes.length < 1) {
    return {
      productId: id,
      stringifiedAttributes: JSON.stringify({}),
      productInfo: product,
    };
  }
  const autocompleted = {};
  attributes.forEach((attribute) => {
    autocompleted[attribute.name] = attribute.items[0].value;
  });
  return {
    ...autocompleted,
    productId: id,
    stringifiedAttributes: JSON.stringify(autocompleted),
    productInfo: product,
  };
};
