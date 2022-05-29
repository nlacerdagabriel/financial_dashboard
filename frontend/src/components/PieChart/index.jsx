/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import { PieChart } from "react-minimal-pie-chart";

export default () => {
  const data = [
    { title: "One", value: 40, color: "var(--success)" },
    { title: "Two", value: 15, color: "var(--danger)" },
  ];

  return (
    <C.Container>
      <C.ChartInfo>
        <p>Relação</p>

        <C.DataInfo backgroundColor="var(--success)">
          <div>
            <p>40%</p>
          </div>

          <p>Incomes</p>
        </C.DataInfo>
        <C.DataInfo backgroundColor="var(--danger)">
          <div>
            <p>40%</p>
          </div>

          <p>Outcomes</p>
        </C.DataInfo>
      </C.ChartInfo>

      <PieChart data={data} />
    </C.Container>
  );
};
