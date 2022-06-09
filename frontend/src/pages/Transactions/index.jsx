import { useEffect, useState } from "react";
import CardTransaction from "../../components/CardTransaction";
import Header from "../../components/Header";
import Grid from "../../Layout/Grid";
import { getAllTransactions } from "../../services/TransactionServices";
import * as C from "./styles";

export default () => {
  const [transactionsList, setTransactionsList] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await getAllTransactions();

      setTransactionsList(response.data);
    }

    getData();
  }, []);

  return (
    <Grid>
      <Header showSelect={true}>Transactions</Header>
      <C.ContainerTransactions>
        {transactionsList.map((it, index) => (
          <CardTransaction
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
