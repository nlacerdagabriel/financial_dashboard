import { createContext, useState } from "react";
import { currentMonth, currentYear, months } from "../services/date";
import { api } from "../services/api";
import { getToken } from "../utils/getToken";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [month, setMonth] = useState(`${currentMonth}`);
  const [year, setYear] = useState(`${currentYear}`);
  const [transactionsList, setTransactionsList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAllTransactions() {
    const token = getToken();

    let monthFiltered;

    for (let x = 0; x < months.length; x++) {
      if (months[x] == month) {
        monthFiltered = x;
      }
    }

    return await api.get(
      `/transaction/?month=0${monthFiltered + 1}&year=${+year}`,
      {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      }
    );
  }

  async function getAllIncomes() {
    const token = getToken();

    let monthFiltered;

    for (let x = 0; x < months.length; x++) {
      if (months[x] == month) {
        monthFiltered = x;
      }
    }

    return await api.get(
      `/transaction/incomes/?month=0${monthFiltered + 1}&year=${+year}`,
      {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      }
    );
  }

  async function getAllOutcomes() {
    const token = getToken();

    let monthFiltered;

    for (let x = 0; x < months.length; x++) {
      if (months[x] == month) {
        monthFiltered = x;
      }
    }

    return await api.get(
      `/transaction/outcomes/?month=0${monthFiltered + 1}&year=${+year}`,
      {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      }
    );
  }

  function changeMonth(mt) {
    setMonth(mt);
  }

  function changeYear(yr) {
    setYear(yr);
  }

  return (
    <AppContext.Provider
      value={{
        month,
        year,
        changeMonth,
        changeYear,
        transactionsList,
        setTransactionsList,
        getAllTransactions,
        getAllIncomes,
        getAllOutcomes,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
