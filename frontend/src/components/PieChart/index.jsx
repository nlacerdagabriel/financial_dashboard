/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import { PieChart } from "react-minimal-pie-chart";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export default () => {

  const {incomesValue, outcomesValue, totalValue} = useContext(TransactionsContext)
  
  const data = [
    { title: "Balance", value: totalValue, color: "var(--success)" },
    { title: "Outcomes", value: outcomesValue, color: "var(--danger)" },
  ];

  return (
    <C.Container>
      <C.ChartInfo>
        <p>Relation</p>

        <C.DataInfo backgroundColor="var(--success)">
          <div>
            <p>{Math.ceil(totalValue / incomesValue * 100)}%</p>
          </div>

          <p>Incomes</p>
        </C.DataInfo>
        <C.DataInfo backgroundColor="var(--danger)">
          <div>
            <p>{Math.floor(outcomesValue / incomesValue * 100)}%</p>
          </div>

          <p>Outcomes</p>
        </C.DataInfo>
      </C.ChartInfo>

      <PieChart data={data} />
    </C.Container>
  );
};
