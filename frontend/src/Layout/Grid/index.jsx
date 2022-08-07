/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import { RiLayout3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default ({ children }) => {
  const { logout } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <C.Container>
      <C.Sidebar>
        <ul>
          <Link to="/">
            <li>
              <RiLayout3Fill size={26} color="#09C0FA" />
              <p>Dashboardl</p>
            </li>
          </Link>
          <Link to="/new-transaction">
            <li>
              <RiMoneyDollarCircleFill size={26} color="#09C0FA" />
              <p>New transaction</p>
            </li>
          </Link>
          <Link to="/transactions">
            <li>
              <BsArrowDownUp size={26} color="#09C0FA" />
              <p>All transactions</p>
            </li>
          </Link>

          <Link to="/transactions/incomes">
            <li>
              <AiOutlineArrowUp size={26} color="#09C0FA" />
              <p>Incomes</p>
            </li>
          </Link>

          <Link to="/transactions/outcomes">
            <li>
              <AiOutlineArrowDown size={26} color="#09C0FA" />
              <p>Outcomes</p>
            </li>
          </Link>
          <li onClick={logout} style={{ cursor: "pointer" }}>
            <MdOutlineExitToApp size={26} color="#09C0FA" />
            <p>Exit</p>
          </li>
        </ul>
      </C.Sidebar>

      <C.Content>
        <C.Header>
          <div>
            <p>Olá,🤑</p>
            <p>{user.name}</p>
          </div>
        </C.Header>

        <C.Body>
          <C.BodyContent>{children}</C.BodyContent>
        </C.Body>
      </C.Content>
    </C.Container>
  );
};
