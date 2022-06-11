import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { api } from "./api";

const token = localStorage.getItem("token");

export async function createTransaction(name, category, type, date, value) {
  return await api.post(
    "/transaction",
    { name, category, type, date, value },
    { headers: { Authorization: `Bearer ${JSON.parse(token)}` } }
  );
}

