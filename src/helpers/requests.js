import { url } from "../constants/index";

export const fetchCategories = async () => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query {
            categories {
              name
          }
            }
      `,
    }),
  });
  let response = await result.json();
  return response.data;
};
export const fetchCurrencies = async () => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          currencies {
            symbol
              label
        }
      }`,
    }),
  });
  let response = await result.json();
  return response.data;
};

export const fetchCategoryData = async (category = "all") => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query getCategoryData($category: String!) {
    category(input: { title: $category }) {
      products {
        id
        name
        brand
        gallery
        inStock
        description
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
    
  }`,
      variables: {
        category,
      },
    }),
  });
  let response = await result.json();
  return response.data;
};

export const fetchProductData = async (id) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query getProduct($id: String!) {
      product(id: $id) {
        id
        name
        brand
        gallery
        category
        description
        inStock
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
      `,
      variables: {
        id,
      },
    }),
  });
  let response = await result.json();

  return response.data;
};
