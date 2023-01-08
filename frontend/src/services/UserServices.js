import { api } from "./api";
import { toast } from "react-toastify";

export async function createUser(name, email, password, confirmPassword) {

  return await api.post("/user/register", { name, email, password, confirmPassword });
}

export async function createSession(email, password) {
  return await api.post("/login", { email, password });
}

export async function exitSession() {
  return await api.post("/logout");
}
