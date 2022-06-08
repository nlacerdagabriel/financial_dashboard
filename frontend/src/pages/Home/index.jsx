/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import * as C from "./styles";
import Grid from "../../Layout/Grid";
import Header from "../../components/Header";
import InfoMoney from "../../components/InfoMoney";
import PieChart from "../../components/PieChart";
import CardTransaction from "../../components/CardTransaction";
import { Link } from "react-router-dom";
import FeedbackHome from "../../components/FeedbackHome";

export default () => {

  return (
    <Grid>
        <Header showSelect={true}>Dashboard</Header>
      <C.Container>
        <InfoMoney />
        <C.Graphics>
          <FeedbackHome/>
          <PieChart />
        </C.Graphics>
        <C.ContainerTransactions>
          <CardTransaction />
          <CardTransaction />
        </C.ContainerTransactions>
        <Link to="/transactions">See all transactions</Link>
      </C.Container>
    </Grid>
  );
};
