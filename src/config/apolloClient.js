import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { useAuthToken } from "./auth";

const httpLink = new HttpLink({ uri:  process.env.REACT_APP_GRAPHQL_URI});

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Token ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

const cache = new InMemoryCache({});

export const useAppApolloClient = () => {
  const [token] = useAuthToken();
  return new ApolloClient({
    link: authMiddleware(token).concat(httpLink),
    cache,
  });
};
