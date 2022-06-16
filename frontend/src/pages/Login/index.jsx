/* eslint-disable import/no-anonymous-default-export */
import CardForm from "../../components/CardForm";
import InputWithIcon from "../../components/InputWithIcon";
import * as C from "./styles";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import cashImage from '../../'

export default () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <C.Container style={{backgroundImage: `url('${cashImage}')`}}>
      <CardForm>
        <h1>Login</h1>
        <InputWithIcon
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          colorText="rgba(0,0,0,0.7)"
          bgColor="var(--white)"
          placeholder="E-mail"
        >
          <MdEmail size={26} color="#1E2633" />
        </InputWithIcon>
        <InputWithIcon
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          colorText="rgba(0,0,0,0.7)"
          bgColor="var(--white)"
          placeholder="Password"
        >
          <FaLock size={23} color="#1E2633" />
        </InputWithIcon>
        <Button onClick={(e) => handleSubmit(e)}>Login</Button>
        <p onClick={() => navigate("/register")}>I don't have an account</p>
      </CardForm>
    </C.Container>
  );
};
