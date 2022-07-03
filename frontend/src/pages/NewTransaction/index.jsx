/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import Grid from "../../Layout/Grid";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import AnimatedInput from "../../components/AnimatedInput";
import React from "react";
import AnimatedSelect from "../../components/AnimatedSelect";
import { Link, useNavigate } from "react-router-dom";
import { createTransaction } from "../../Services/TransactionServices";
import ValidateLabel from "../../components/ValidateLabel";
import {formatDateToInput } from "../../Services/date";

export default () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(`${formatDateToInput(Date.now())}`)
  const [value, setValue] = useState("");
  const [formSubmited, setFormSubmited] = useState(false);

  const itemsType = ["Income", "Outcome"];

  const navigate = useNavigate();

  function moneyMask(value) {
    value = value.replace(",", ".");

    setValue(value);
  }

  useEffect(() => {
    if (value !== "") {
      const timeoutId = setTimeout(() => moneyMask(value), 100);
      return () => clearTimeout(timeoutId);
    }

    console.log(date)
  }, [value]);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormSubmited(true);
    const valueAsFloat = parseFloat(value);

    if (title && category && type && date && value) {
      await createTransaction(title, category, type, date, valueAsFloat);
      navigate("/transactions");
    }
  }

  return (
    <Grid>
      <Header showSelect={false}>New Transaction</Header>
      <C.Container>
        <C.Form>
          <C.ContainerInputs>
            <div className="inputTitle" style={{ width: "50%" }}>
              <AnimatedInput
                width="100%"
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {formSubmited && title.length <= 0 && <ValidateLabel />}
            </div>

            <div style={{ width: "50%" }}>
              <AnimatedInput
                width="100%"
                label="Category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              {formSubmited && category.length <= 0 && <ValidateLabel />}
            </div>
          </C.ContainerInputs>

          <C.ContainerInputs>
            <div className="inputType" style={{ width: "33%" }}>
              <AnimatedSelect
                width="100%"
                label="Type"
                value={type}
                items={itemsType}
                onChange={(e) => setType(e.target.value)}
              />
              {formSubmited && type.length <= 0 && <ValidateLabel />}
            </div>

            <div style={{ width: "33%" }} className="inputDate">
              <AnimatedInput
                width="100%"
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {formSubmited && date.length <= 0 && <ValidateLabel />}
            </div>

            <div style={{ width: "33%" }}>
              <AnimatedInput
                width="100%"
                label="Value"
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              {formSubmited && value.length <= 0 && <ValidateLabel />}
            </div>
          </C.ContainerInputs>
        </C.Form>

        <C.ContainerButtons>
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
