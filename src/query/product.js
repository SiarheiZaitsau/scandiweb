import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProducts($id: ID!) {
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
`;
