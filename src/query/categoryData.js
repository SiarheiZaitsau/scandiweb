import { gql } from "@apollo/client";

export const GET_DATA_BY_CATEGORY = gql`
  query {
    category(input: { title: "tech" }) {
      products {
        id
        name
        brand
        gallery
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
