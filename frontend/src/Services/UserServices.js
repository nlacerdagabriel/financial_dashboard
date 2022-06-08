import {api} from './api'

export async function createUser(name, email, password, confirmPassword) {
  if (password !== confirmPassword) {
    return alert("senhas n sao iguais");
  }

  return await api.post("/user/register", { name, email, password });
}

export async function createSession(email, password) {
  return await api.post("/login", { email, password });
}

export async function exitSession() {
  return await api.post("/logout");
}
