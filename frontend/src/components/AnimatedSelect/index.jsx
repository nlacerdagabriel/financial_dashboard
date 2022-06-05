import * as C from "./styles";

export default ({label, items}) => {
  return (
    <C.Container>
      <select name={label} id={label}></select>
      <label htmlFor={label}>{label}</label>
    </C.Container>
  );
};
