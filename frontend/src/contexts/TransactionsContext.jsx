import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [totalValue, setTotalValue] = useState();
  const [incomesValue, setIncomesValue] = useState();
  const [outcomesValue, setOutcomesValue] = useState();

  function changeTotalValue(value) {
    setTotalValue(value);
  }
  function changeIncomesValue(value) {
    setIncomesValue(value);
  }
  function changeOutcomesValue(value) {
    setOutcomesValue(value);
  }

  return (
    <TransactionsContext.Provider
      value={{
        changeIncomesValue,
        changeTotalValue,
        changeOutcomesValue,
        totalValue,
        incomesValue,
        outcomesValue,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
