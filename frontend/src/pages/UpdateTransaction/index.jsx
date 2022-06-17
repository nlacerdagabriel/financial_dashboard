import * as C from "./styles";
import Grid from "../../layout/Grid";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import AnimatedInput from "../../components/AnimatedInput";
import React from "react";
import AnimatedSelect from "../../components/AnimatedSelect";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  deleteTransaction,
  getOneTransaction,
  updateTransaction,
} from "../../services/TransactionServices";

export default () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await getOneTransaction(id);
      setTitle(response.data[0].name);
      setCategory(response.data[0].category);
      setType(response.data[0].type);
      setValue(response.data[0].value);

      const datetime = response.data[0].date;
      const date = datetime.split("T")[0];
      setDate(date);
    }

    getData();
  }, []);

  const itemsType = ["Income", "Outcome"];

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await updateTransaction(id, title, category, type, date, value);

    navigate("/transactions");
  }

  async function handleDelete(e) {
    e.preventDefault();

    await deleteTransaction(id);

    navigate("/transactions");
  }

  return (
    <Grid>
      <Header showSelect={false}>Update Transaction</Header>
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
          <button onClick={(e) => handleDelete(e)}>Delete</button>

          <div>
            <Link to="/">
              <button>Back</button>
            </Link>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Register
            </button>
          </div>
        </C.ContainerButtons>
      </C.Container>
    </Grid>
  );
};
