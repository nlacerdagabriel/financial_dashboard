/* eslint-disable import/no-anonymous-default-export */
import * as C from './styles'

export default ({children, onClick}) => {
    return(
        <C.Container onClick={onClick}>
            {children}
        </C.Container>
    )
}