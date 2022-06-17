import { Link } from "react-router-dom";
import { formatDate } from "../../services/date";
import * as C from "./styles";

export default ({ id, title, category, value, date, type }) => {
  return (
    <Link to={`/update-transaction/${id}`}>
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
    </Link>
  );
};
