import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { AppProvider } from "../contexts/AppContext";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Transactions from "../pages/Transactions";
import NewTransaction from "../pages/NewTransaction";

export default () => {
  function PrivateApp({ children }) {
    const user = localStorage.getItem("user");

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  function PrivateLogin({ children }) {
    const user = localStorage.getItem("user");

    if (user) {
      return <Navigate to="/" />;
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateApp>
                  <Home />
                </PrivateApp>
              }
            />
            <Route
              path="/register"
              element={
                <PrivateLogin>
                  <Register />
                </PrivateLogin>
              }
            />
            <Route
              path="/login"
              element={
                <PrivateLogin>
                  <Login />
                </PrivateLogin>
              }
            />
            <Route
              path="/transactions"
              element={
                <PrivateApp>
                  <Transactions />
                </PrivateApp>
              }
            />
            <Route
              path="/new-transaction"
              element={
                <PrivateApp>
                  <NewTransaction />
                </PrivateApp>
              }
            />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
};
