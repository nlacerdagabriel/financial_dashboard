/* eslint-disable import/no-anonymous-default-export */
import CardForm from "../../components/CardForm";
import InputWithIcon from "../../components/InputWithIcon";
import * as C from "./styles";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../../components/Button";
import {
  useNavigate,
} from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  
  return (
    <C.Container>
      <CardForm>
        <h1>Login</h1>
        <InputWithIcon placeholder='E-mail'>
          <MdEmail size={26} color='#1E2633' />
        </InputWithIcon>
        <InputWithIcon placeholder='Password'>
          <FaLock size={23} color='#1E2633' />
        </InputWithIcon>
        <Button>Login</Button>
        <p onClick={() => navigate('/register')}>I don't have an account</p>
      </CardForm>
    </C.Container>
  );
};