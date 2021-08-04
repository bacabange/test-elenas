import { Router, Redirect } from "@reach/router";
import { ApolloProvider } from "@apollo/react-hooks";
// screens
import Login from "../screens/Auth/LoginScreen";
import CustomerList from "../screens/Customer/ListScreen";
import CustomerCreate from "../screens/Customer/CreateScreen";
import AppContainer from "../components/layout/AppContainer";
// hooks
import { useAppApolloClient } from "./apolloClient";
import { useAuthToken } from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [token] = useAuthToken()
  return (
    <>
      {token ?
        <Component {...rest} /> : <Redirect from="" to="/" noThrow />
      }
    </>
)};

const PublicRoute = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);


const Routes = () => {
  const apolloClient = useAppApolloClient();
  const [token] = useAuthToken()

  return (
    <ApolloProvider client={apolloClient}>
      <AppContainer>
        <Router>
          <PublicRoute component={Login} default path="/login" />
          {token ? (
            <>
              <ProtectedRoute component={CustomerList} path="/" />
              <ProtectedRoute component={CustomerCreate} path="/customer/create" />
            </>
          ) : (
            <Redirect from="/" to="/login" noThrow />
          )}
        </Router>
      </AppContainer>
    </ApolloProvider>
  );
};

export default Routes;
