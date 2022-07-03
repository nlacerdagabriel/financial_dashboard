import { Link } from "react-router-dom";
import { formatDate } from "../../Services/date";
import * as C from "./styles";

export default ({ id, title, category, value, date, type }) => {
  return (
    <Link to={`/update-transaction/${id}`}>
      <C.Container
        borderColor={type == "Income" ? "var(--success)" : "var(--danger)"}
        type={type == "Income" ? "rgb(10, 71, 0, 0.5)" : "rgb(112, 0, 1, 0.5)"}
      >
        <C.ContainerNameCategory>
          <p>{title}</p>
          <p>{category}</p>
        </C.ContainerNameCategory>
        <C.ContainerValueDate>
          <p>
            {type == "Outcome" && "- "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(value)}
          </p>
          <p>{formatDate(date)}</p>
        </C.ContainerValueDate>
      </C.Container>
    </Link>
  );
};
