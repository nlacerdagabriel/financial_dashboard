/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import balanceIcon from "../../images/icon-balance.svg";
import IncomeIcon from "../../images/icon-income.svg";
import OutcomeIcon from "../../images/icon-outcome.svg";
import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export default () => {
  const {transactionsList} =  useContext(AppContext)

  const { changeTotalValue, changeIncomesValue, changeOutcomesValue } =
  useContext(TransactionsContext);

const summary = transactionsList.reduce(
  (acc, transaction) => {
    if (transaction.type == "Income") {
      acc.incomes += +transaction.value;
      acc.total += +transaction.value;
    } else {
      acc.outcomes += +transaction.value;
      acc.total -= +transaction.value;
    }

    return acc;
  },
  {
    incomes: 0,
    outcomes: 0,
    total: 0,
  }
);

useEffect(() => {
  changeTotalValue(summary.total);
  changeIncomesValue(summary.incomes);
  changeOutcomesValue(summary.outcomes);
}, [summary]);

  return (
    <C.Container>
      <C.ContainerInfo backgroundColor={"rgba(9, 192, 250, 0.4)"}>
        <img src={balanceIcon} alt="money balance icon" />
        <C.Label>Balance</C.Label>
        <C.Value>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.total)}
        </C.Value>
      </C.ContainerInfo>

      <C.ContainerInfo backgroundColor={"#0A4700"}>
        <img src={IncomeIcon} alt="money balance icon" />
        <C.Label>Income</C.Label>
        <C.Value>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.incomes)}
        </C.Value>
      </C.ContainerInfo>

      <C.ContainerInfo backgroundColor={"#700001"}>
        <img src={OutcomeIcon} alt="money balance icon" />
        <C.Label>Outcome</C.Label>
        <C.Value>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(summary.outcomes)}
        </C.Value>
      </C.ContainerInfo>
    </C.Container>
  );
};
