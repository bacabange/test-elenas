import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const createCustomerMutationGQL = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $cedula: String
    $cellphone: String!
    $address: AddressInput!
  ) {
    createClient(
      input: {
        firstName: $firstName
        lastName: $lastName
        cedula: $cedula
        cellphone: $cellphone
        address: $address
      }
    ) {
      ... on Client {
        id
        firstName
        lastName
        cellphone
        address
        credit
      }
    }
  }
`;

export const useCreateCustomerMutation = () => {
  const [mutation, mutationResults] = useMutation(createCustomerMutationGQL);

  const createClient = (
    firstName,
    lastName,
    cedula,
    cellphone,
    address
  ) => {
    return mutation({
      variables: {
        firstName,
        lastName,
        cedula,
        cellphone,
        address,
      },
    });
  };
  return [createClient, mutationResults];
};
