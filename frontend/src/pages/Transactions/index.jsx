import CardTransaction from "../../components/CardTransaction";
import Header from "../../components/Header";
import Grid from "../../Layout/Grid";
import * as C from "./styles";

export default () => {
  return (
    <Grid>
      <Header showSelect={true}>Transactions</Header>
      <C.ContainerTransactions>
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
      </C.ContainerTransactions>
    </Grid>
  );
};
