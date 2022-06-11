import { useContext } from "react";
import { useEffect, useState } from "react";
import CardTransaction from "../../components/CardTransaction";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { AppContext } from "../../contexts/AppContext";
import Grid from "../../Layout/Grid";
import { currentMonth, currentYear } from "../../services/date";
import * as C from "./styles";

export default () => {
  const {
    transactionsList,
    setTransactionsList,
    getAllTransactions,
    month,
    year,
    changeMonth,
    changeYear,
    setLoading,
    loading
  } = useContext(AppContext);

  useEffect(() => {
    changeMonth(currentMonth);
    changeYear(currentYear);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      async function getData() {
        const response = await getAllTransactions();
        setTransactionsList(response.data);
        setLoading(false)
      }

      getData();
    }, 100);
  }, [month, year]);

  return (
    <Grid>
      <Header showSelect={true}>Transactions</Header>
      <C.ContainerTransactions>

        {loading && <Loading/>}
        {transactionsList.map((it, index) => (
          <CardTransaction
            type={it.type}
            title={it.name}
            value={it.value}
            date={it.date}
            category={it.category}
            key={index}
          />
        ))}
      </C.ContainerTransactions>
    </Grid>
  );
};
