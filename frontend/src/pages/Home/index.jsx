/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import Grid from "../../Layout/Grid";
import Header from "../../components/Header";
import InfoMoney from "../../components/InfoMoney";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";

export default () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const user = JSON.stringify(localStorage.getItem("user"));

  //   if (user) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Grid>
      <Header>Dashboard</Header>
      <InfoMoney />
      <C.Graphics>
        <PieChart/>
        <PieChart/>
      </C.Graphics>
    </Grid>
  );
};
