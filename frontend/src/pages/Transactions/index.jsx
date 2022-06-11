import { useContext } from "react";
import { useEffect, useState } from "react";
import CardTransaction from "../../components/CardTransaction";
import Header from "../../components/Header";
import { AppContext } from "../../contexts/AppContext";
import Grid from "../../Layout/Grid";
import * as C from "./styles";

export default () => {
  const {
    transactionsList,
    setTransactionsList,
    getAllTransactions,
    month,
    year,
  } = useContext(AppContext);

  useEffect(() => {
    async function getData() {
      const response = await getAllTransactions();
      setTransactionsList(response.data);
    }

    getData();
  }, [month, year]);

  return (
    <Grid>
      <Header showSelect={true}>Transactions</Header>
      <C.ContainerTransactions>
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
