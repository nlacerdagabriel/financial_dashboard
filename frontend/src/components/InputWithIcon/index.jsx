/* eslint-disable import/no-anonymous-default-export */
import * as C from "./styles";

export default ({id, children, placeholder, type, bgColor, colorText, colorBorder}) => {
  return (
    <C.Container id={id} colorBorder={colorBorder}>
      <C.Icon bgColor={bgColor}>
        {children}
      </C.Icon>
      <C.Input type={type} colorText={colorText} bgColor={bgColor} placeholder={placeholder}/>
    </C.Container>
  );
};
