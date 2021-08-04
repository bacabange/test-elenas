import { useApolloClient } from "@apollo/react-hooks";
import {
  writeStorage,
  deleteFromStorage,
  useLocalStorage,
} from "@rehooks/local-storage";
const TOKEN_NAME = "authToken";

export const useAuthToken = () => {
  const [token] = useLocalStorage(TOKEN_NAME);

  const setAuthToken = (token) => writeStorage(TOKEN_NAME, token);
  const removeAuthToken = () => deleteFromStorage(TOKEN_NAME);

  return [token, setAuthToken, removeAuthToken];
};

export const useLogout = () => {
  const [, , removeAuthToken] = useAuthToken();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await apolloClient.clearStore();
    removeAuthToken();
  };

  return logout;
};
