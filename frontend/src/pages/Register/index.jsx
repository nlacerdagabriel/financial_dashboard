/* eslint-disable import/no-anonymous-default-export */
import CardForm from "../../components/CardForm";
import InputWithIcon from "../../components/InputWithIcon";
import * as C from "./styles";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    register(name, email, password, confirmPassword);
  }

  return (
    <C.Container>

      <CardForm>
        <h1>Register</h1>
        <InputWithIcon
          colorText="rgba(0,0,0,0.7)"
          bgColor="var(--white)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        >
          <FaUserCircle size={26} color="#1E2633" />
        </InputWithIcon>
        <InputWithIcon
          colorText="rgba(0,0,0,0.7)"
          bgColor="var(--white)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        >
          <MdEmail size={26} color="#1E2633" />
        </InputWithIcon>
        <InputWithIcon
          colorText="rgba(0,0,0,0.7)"
          bgColor="var(--white)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        >
          <FaLock size={23} color="#1E2633" />
        </InputWithIcon>
        <InputWithIcon
          colorText="rgba(0,0,0,0.7)"
          bgColor="var(--white)"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        >
          <FaLock size={23} color="#1E2633" />
        </InputWithIcon>
        <Button onClick={(e) => handleSubmit(e)}>Register</Button>
        <p onClick={() => navigate("/login")}>I already have an account</p>
      </CardForm>
    </C.Container>
  );
};
