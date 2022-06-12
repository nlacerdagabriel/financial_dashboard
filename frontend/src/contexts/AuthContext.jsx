import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createSession,
  createUser,
  exitSession,
} from "../services/UserServices";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));


  async function register(name, email, password, confirmPassword) {
    const response = await createUser(name, email, password, confirmPassword);

    console.log(JSON.stringify(response.data.user.name));

    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token.token));

    setUser(response.data.user);

    navigate("/");
  }

  async function login(email, password) {
    const response = await createSession(email, password);

    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token.token));

    setUser(response.data.user);

    navigate("/");
  }

  async function logout() {
    await exitSession();
    
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");

  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
