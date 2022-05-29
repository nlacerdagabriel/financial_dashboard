/* eslint-disable import/no-anonymous-default-export */
import * as C from './styles'
import balanceIcon from '../../images/icon-balance.svg'
import IncomeIcon from '../../images/icon-income.svg'
import OutcomeIcon from '../../images/icon-outcome.svg'

export default () => {
  return(
    <C.Container>
      <C.ContainerInfo backgroundColor={"rgba(9, 192, 250, 0.4)"}>
        <img src={balanceIcon} alt="money balance icon" />
        <C.Label>Balance</C.Label>
        <C.Value>R$ 12823.00</C.Value>
      </C.ContainerInfo>
      <C.ContainerInfo backgroundColor={"#0A4700"}>
        <img src={IncomeIcon} alt="money balance icon" />
        <C.Label>Income</C.Label>
        <C.Value>R$ 12823.00</C.Value>
      </C.ContainerInfo>
      <C.ContainerInfo backgroundColor={"#700001"}>
        <img src={OutcomeIcon} alt="money balance icon" />
        <C.Label>Outcome</C.Label>
        <C.Value>R$ 12823.00</C.Value>
      </C.ContainerInfo>
    </C.Container>
  )
}