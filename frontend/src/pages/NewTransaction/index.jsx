import * as C from "./styles";
import Grid from "../../Layout/Grid";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import AnimatedInput from "../../components/AnimatedInput";
import React from "react";
import AnimatedSelect from "../../components/AnimatedSelect";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createTransaction } from "../../services/TransactionServices";

export default () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");

  const itemsType = ['Income', 'Outcome']

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await createTransaction(title, category, type, date, value);

    navigate("/transactions");
  }

  return (
    <Grid>
      <Header showSelect={false}>New Transaction</Header>
      <C.Container>
        <C.Form>
          <C.ContainerInputs>
            <AnimatedInput
              className="inputTitle"
              width="50%"
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <AnimatedInput
              width="50%"
              label="Category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </C.ContainerInputs>

          <C.ContainerInputs>
            <AnimatedSelect
              className="inputType"
              width="33%"
              label="Type"
              value={type}
              items={itemsType}
              onChange={(e) => setType(e.target.value)}
            />
            <AnimatedInput
              className="inputDate"
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
          </C.ContainerInputs>
        </C.Form>

        <C.ContainerButtons>
          <button>Delete</button>

          <div>
            <Link to="/">
              <button>Back</button>
            </Link>
            <button onClick={(e) => handleSubmit(e)}>Register</button>
          </div>
        </C.ContainerButtons>
      </C.Container>
    </Grid>
  );
};
