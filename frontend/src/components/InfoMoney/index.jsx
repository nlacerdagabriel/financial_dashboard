import * as C from './styles'
import balanceIcon from '../../images/icon-balance.svg'

export default () => {
  return(
    <C.Container>
      <C.ContainerInfo backgroundColor={"rgba(9, 192, 250, 0.4)"}>
        <img src={balanceIcon} alt="money balance icon" />
        <C.Label>saldo</C.Label>
        <C.Value>R$ 12823.00</C.Value>
      </C.ContainerInfo>
    </C.Container>
  )
}