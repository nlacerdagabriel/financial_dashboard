import { createContext, useEffect, useState } from "react";
import { currentMonth, currentYear, months } from "../services/date";
import { api } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [month, setMonth] = useState(`${currentMonth}`);
  const [year, setYear] = useState(`${currentYear}`);
  const [transactionsList, setTransactionsList] = useState([]);
  const token = localStorage.getItem("token");

  async function getAllTransactions() {
    let monthFiltered;

    for (let x = 0; x < months.length; x++) {
      if (months[x] == month) {
        monthFiltered = x;
      }
    }

    console.log(monthFiltered + 1, +year)
    return await api.get(`/transaction/?month=0${monthFiltered + 1}&year=${+year}`, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    });
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
