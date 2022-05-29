/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";

export default ({children, placeholder}) => {
  return (
    <C.Container>
      <C.Icon>
        {children}
      </C.Icon>
      <C.Input placeholder={placeholder}/>
    </C.Container>
  );
};
