import * as C from "./styles";
import Grid from "../../Layout/Grid";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import AnimatedInput from "../../components/AnimatedInput";
import React from "react";
import AnimatedSelect from "../../components/AnimatedSelect";
import { currentDate } from "../../services/date";

export default () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");

  return (
    <Grid>
      <Header showSelect={false}>New Transaction</Header>
      <C.Container>
        <C.Form>
          <AnimatedInput
            width="100%"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="inputs">
            <AnimatedSelect
              width="33%"
              label="Type"
              value={type}
              items={["Income", "Outcome"]}
              onChange={(e) => setType(e.target.value)}
            />
            <AnimatedInput
              width="33%"
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
              <AnimatedInput
                width="33%"
                label="Value"
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
          </div>
        </C.Form>

        <C.ContainerButtons>
          <button>Delete</button>

          <div>
            <button>Back</button>
            <button>Register</button>
          </div>
        </C.ContainerButtons>
      </C.Container>
    </Grid>
  );
};
