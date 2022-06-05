import * as C from "./styles";
import Grid from "../../Layout/Grid";
import Header from "../../components/Header";
import { useState } from "react";
import AnimatedInput from "../../components/AnimatedInput";
import React from "react";
import AnimatedSelect from "../../components/AnimatedSelect";

export default () => {
  const [type, setType] = useState("");
  const [age, setAge] = useState("");

  return (
    <Grid>
      <Header showSelect={false}>New Transaction</Header>
      <C.Container>
        <C.Form>
          <AnimatedInput label="Title" type="text" />

          <div className="inputs">
            <AnimatedSelect label="Type" />
            <AnimatedSelect label="Date" />
            <AnimatedInput label="Value" type="number" />
          </div>
        </C.Form>

        <C.Comt
      </C.Container>
    </Grid>
  );
};
