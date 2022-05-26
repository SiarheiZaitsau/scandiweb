import { gql } from "@apollo/client";

export const get_Categories = gql`
  query {
    categories {
      name
    }
  }
`;
