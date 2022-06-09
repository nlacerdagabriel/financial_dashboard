import { api } from "./api";

const token = localStorage.getItem("token");

export async function createTransaction(name, category, type, date, value) {
  return await api.post(
    "/transaction",
    { name, category, type, date, value },
    { headers: { Authorization: `Bearer ${JSON.parse(token)}` } }
  );
}


export async function getAllTransactions(){
  return await api.get('/transaction', { headers: { Authorization: `Bearer ${JSON.parse(token)}` } })
}