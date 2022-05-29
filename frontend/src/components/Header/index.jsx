/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import Select from "react-select";
import { months, years, currentMonth, currentYear } from "../../Services/date";
import { useEffect, useState } from "react";

export default ({ children }) => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
  }, [month]);

  const optionsMonth = months.map((elem) => ({
    value: elem,
    label: elem,
  }));

  const optionsYear = years.map((elem) => ({
    value: elem,
    label: elem,
  }));

  return (
    <C.Container>
      <C.Title>{children}</C.Title>
      <div>
        <Select
          options={optionsMonth}
          isSearchable={false}
          value={month}
          onChange={(it) => setMonth(it.value)}
        />
        <Select options={optionsYear} isSearchable={false} />
      </div>
    </C.Container>
  );
};
