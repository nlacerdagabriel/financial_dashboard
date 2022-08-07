/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import * as C from "./styles";
import Grid from "../../layout/Grid";
import Header from "../../components/Header";
import InfoMoney from "../../components/InfoMoney";
import PieChart from "../../components/PieChart";
import CardTransaction from "../../components/CardTransaction";
import { Link } from "react-router-dom";
import FeedbackHome from "../../components/FeedbackHome";
import { currentMonth, currentYear } from "../../services/date";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Loading from "../../components/Loading";
import NoInfoMessage from "../../components/NoInfoMessage";

export default () => {
  const {
    changeMonth,
    changeYear,
    getAllTransactions,
    setLoading,
    loading,
    setTransactionsList,
    transactionsList,
    month,
    year,
  } = useContext(AppContext);

  useEffect(() => {
    changeMonth(currentMonth);
    changeYear(currentYear);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      async function getData() {
        const response = await getAllTransactions();
        const arraySorted = response.data.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });

        setTransactionsList(arraySorted);
        setLoading(false);
      }

      getData();
    }, 100);
  }, [month, year]);
  return (
    <Grid>
      <Header showSelect={true}>Dashboard</Header>
      <C.Container>
        <InfoMoney />
        {transactionsList.length == 0 && <NoInfoMessage marginTop="15rem" />}
        {transactionsList.length > 0 && (
          <>
            <C.Graphics>
              <FeedbackHome />
              <PieChart />
            </C.Graphics>
            <C.ContainerTransactions>
              {loading && <Loading />}
              {transactionsList.map((it, index) => (
                <CardTransaction
                  id={it.id}
                  type={it.type}
                  title={it.name}
                  value={it.value}
                  date={it.date}
                  category={it.category}
                  key={it.id}
                />
              ))}
            </C.ContainerTransactions>
            <Link to="/transactions">See all transactions</Link>
          </>
        )}
      </C.Container>
    </Grid>
  );
};
