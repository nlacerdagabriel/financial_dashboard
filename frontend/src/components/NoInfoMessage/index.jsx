import * as C from './styles'

export default({marginTop}) => {
  return(
    <C.Container style={{marginTop: marginTop}}>
      <p>There's no transaction to show...</p>
    </C.Container>
  )
}