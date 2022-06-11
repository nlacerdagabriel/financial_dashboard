import { formatDate } from "../../services/date";
import * as C from "./styles";

export default ({ title, category, value, date, type }) => {
  return (
    <C.Container
      borderColor={type == "Income" ? "var(--success)" : "var(--danger)"}
    >
      <C.ContainerNameCategory>
        <p>{title}</p>
        <p>{category}</p>
      </C.ContainerNameCategory>
      <C.ContainerValueDate>
        <p>
          {type == "Outcome" && "- "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </p>
        <p>{formatDate(date)}</p>
      </C.ContainerValueDate>
    </C.Container>
  );
};
