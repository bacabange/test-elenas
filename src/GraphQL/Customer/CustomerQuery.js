import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const customersQuery = gql`
  query {
    clientsSearch(page: 0, perPage: 20, term: null) {
      ... on ClientPagination {
        results {
          id,
          firstName,
          lastName,
          address,
          cellphone,
          credit
        }
      }
    }
  }
`;

export const useCustomerQuery = () => useQuery(customersQuery);
