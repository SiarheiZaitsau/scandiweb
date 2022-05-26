import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query {
    category {
      products {
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
  }
`;
