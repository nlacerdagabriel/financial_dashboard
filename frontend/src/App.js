import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
