import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useAuthToken } from "../../config/auth";

export const loginMutationGQL = gql`
  mutation login($cellphone: String! $password: String!) {
    login(
      cellphone: $cellphone
      password: $password,
      pushToken: ""
    ) {
      ... on AuthInfo {
        token
        user {
          ... on User {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const useLoginMutation = () => {
  const [, setAuthToken, removeAuthtoken] = useAuthToken();

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      setAuthToken(data.login.token);
    },
  });

  // full login function
  const login = (cellphone, password) => {
    removeAuthtoken();
    return mutation({
      variables: {
        cellphone,
        password,
      },
    });
  }
  return [login, mutationResults]
};
