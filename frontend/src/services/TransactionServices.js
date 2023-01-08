import { api } from "./api";
import { capitalizeWord } from "../utils/capitalizeWord";
import { getToken } from "../utils/getToken";

export async function createTransaction(name, category, type, date, value) {
  const token = getToken();

  name = capitalizeWord(name);
  category = capitalizeWord(category);

  return await api.post(
    "/transaction",
    { name, category, type, date, value },
    { headers: { Authorization: `Bearer ${JSON.parse(token)}` } }
  );
}

export async function getOneTransaction(id) {
  const token = getToken();

  return await api.get(`/transaction/${id}`, {
    headers: { Authorization: `Bearer ${JSON.parse(token)}` },
  });
}

export async function updateTransaction(id, name, category, type, date, value) {
  const token = getToken();

  name = capitalizeWord(name);
  category = capitalizeWord(category);

  return await api.put(
    `/transaction/${id}`,
    { name, category, type, date, value },
    { headers: { Authorization: `Bearer ${JSON.parse(token)}` } }
  );
}

export async function deleteTransaction(id) {
  const token = getToken();

  return await api.delete(`/transaction/${id}`, {
    headers: { Authorization: `Bearer ${JSON.parse(token)}` },
  });
}
