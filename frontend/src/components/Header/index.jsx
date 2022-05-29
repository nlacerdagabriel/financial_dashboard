/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import { months, years, currentMonth, currentYear } from "../../Services/date";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default ({ children }) => {
  const [month, setMonth] = useState(`${currentMonth}`);
  const [year, setYear] = useState(`${currentYear}`);

  return (
    <C.Container>
      <C.Title>{children}</C.Title>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            variant="outlined"
            sx={{
              height: 40,
              border: "1px solid darkgrey",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            className="selectComponent"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {months.map((it) => (
              <MenuItem value={it}>{it}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            variant="outlined"
            sx={{
              height: 40,
              border: "1px solid darkgrey",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            className="selectComponent"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((it) => (
              <MenuItem value={it}>{it}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </C.Container>
  );
};
