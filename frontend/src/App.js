import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles/GlobalStyle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Transactions from "./pages/Transactions";
import NewTransaction from "./pages/NewTransaction";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/new-transaction" element={<NewTransaction />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
