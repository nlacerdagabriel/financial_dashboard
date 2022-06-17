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
import Incomes from "../pages/Incomes";
import Outcomes from "../pages/Outcomes";
import UpdateTransaction from "../pages/UpdateTransaction";
import { TransactionsProvider } from "../contexts/TransactionsContext";

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
          <TransactionsProvider>
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
                path="/transactions/incomes"
                element={
                  <PrivateApp>
                    <Incomes />
                  </PrivateApp>
                }
              />
              <Route
                path="/transactions/outcomes"
                element={
                  <PrivateApp>
                    <Outcomes />
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
              <Route
                path="/update-transaction/:id"
                element={
                  <PrivateApp>
                    <UpdateTransaction />
                  </PrivateApp>
                }
              />
            </Routes>
          </TransactionsProvider>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
};
