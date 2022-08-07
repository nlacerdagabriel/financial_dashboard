import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createSession,
  createUser,
  exitSession,
} from "../services/UserServices";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { handleRegisterErrors } from "../utils/validateFieldRegisterPage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  async function register(name, email, password, confirmPassword) {
    await createUser(name, email, password, confirmPassword)
      .then((response) => {
        toast.success("You've been registered!")

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.token.token)
        );

        setUser(response.data.user);
        navigate("/");
      })
      .catch((error) => {
        let arrayErrors = [];
        let arrayMessages = [];

        if (error.response.data.errors) {
          for (let item of error.response.data.errors) {
            arrayErrors.push(item);
          }
        }else{
          arrayMessages.push(error.response.data.message)
        }

        handleRegisterErrors(arrayErrors, arrayMessages);

        arrayErrors = [];
        arrayMessages = [];
      });
  }

  async function login(email, password) {
    let arrayErrors = [];

    if (email.trim() == "") {
      arrayErrors.push("E-mail");
    }

    if (password.trim() == "") {
      arrayErrors.push("Password");
    }

    if (arrayErrors.length > 0) {
      arrayErrors.map((item) => {
        toast.error(`Field ${item} is required`);
      });
      return;
    }

    await createSession(email, password)
      .then((response) => {
        toast.success(`You've been logged!`);

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.token.token)
        );

        setUser(response.data.user);

        navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid E-mail or Password");
      });
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
