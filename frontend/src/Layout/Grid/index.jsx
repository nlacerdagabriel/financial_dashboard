/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";
import { RiLayout3Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {AuthContext} from '../../contexts/AuthContext'

export default ({ children }) => {

  const {user, logout} =  useContext(AuthContext)

  return (
    <C.Container>
      <C.Sidebar>
        <ul>
          <li>
            <Link to="/">
              <RiLayout3Fill size={26} color="#09C0FA" />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/new-transaction">
              <RiMoneyDollarCircleFill size={26} color="#09C0FA" />
              <p>New transaction</p>
            </Link>
          </li>
          <li>
            <Link to="/transactions">
              <BsArrowDownUp size={26} color="#09C0FA" />
              <p>All transactions</p>
            </Link>
          </li>

          <li>
            <AiOutlineArrowUp size={26} color="#09C0FA" />
            <p>Incomes</p>
          </li>
          <li>
            <AiOutlineArrowDown size={26} color="#09C0FA" />
            <p>Outcomes</p>
          </li>
          <li style={{cursor: 'pointer'}}>
            <MdOutlineExitToApp size={26} color="#09C0FA" />
            <p onClick={logout}>Exit</p>
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
