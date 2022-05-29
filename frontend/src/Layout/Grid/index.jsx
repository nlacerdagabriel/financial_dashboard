/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import { RiLayout3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";

export default ({ children }) => {
  return (
    <C.Container>
      <C.Sidebar>
        <ul>
          <li>
            <RiLayout3Fill size={26} color="#09C0FA" />
            <p>Dashboard</p>
          </li>
          <li>
            <RiMoneyDollarCircleFill size={26} color="#09C0FA" />
            <p>New transaction</p>
          </li>
          <li>
            <BsArrowDownUp size={26} color="#09C0FA" />
            <p>All transactions</p>
          </li>
          <li>
            <AiOutlineArrowUp size={26} color="#09C0FA" />
            <p>Incomes</p>
          </li>
          <li>
            <AiOutlineArrowDown size={26} color="#09C0FA" />
            <p>Outcomes</p>
          </li>
          <li>
            <MdOutlineExitToApp size={26} color="#09C0FA" />
            <p>Exit</p>
          </li>
        </ul>
      </C.Sidebar>

      <C.Content>
        <C.Header>
          <div>
            <p>Olá,🤑</p>
            <p>Gabriel Lacerda</p>
          </div>
        </C.Header>

        <C.Body>
          <C.BodyContent>{children}</C.BodyContent>
        </C.Body>
      </C.Content>
    </C.Container>
  );
};
