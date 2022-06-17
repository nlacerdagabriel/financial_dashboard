import { useContext } from "react";
import { useEffect, useState } from "react";
import CardTransaction from "../../components/CardTransaction";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NoInfoMessage from "../../components/NoInfoMessage";
import { AppContext } from "../../contexts/AppContext";
import Grid from "../../layout/Grid";
import { currentMonth, currentYear } from "../../services/date";
import * as C from "./styles";

export default () => {
  const {
    transactionsList,
    setTransactionsList,
    getAllOutcomes,
    month,
    year,
    changeMonth,
    changeYear,
    loading,
    setLoading,
  } = useContext(AppContext);

  useEffect(() => {
    changeMonth(currentMonth);
    changeYear(currentYear);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      async function getData() {
        const response = await getAllOutcomes();
        setTransactionsList(response.data);
        setLoading(false)
      }

      getData();
    }, 100);
  }, [month, year]);

  return (
    <Grid>
      <Header showSelect={true}>Outcomes</Header>
      <C.ContainerTransactions>
        {loading && <Loading />}
        {transactionsList.length == 0 && <NoInfoMessage />}
        {transactionsList.map((it, index) => (
          <CardTransaction
          id={it.id}
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
