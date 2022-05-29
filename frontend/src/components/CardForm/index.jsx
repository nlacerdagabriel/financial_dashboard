/* eslint-disable import/no-anonymous-default-export */
import * as C from './styles'

export default ({children}) => {
    return(
        <C.Container>
            {children}
        </C.Container>
    )
}