import * as C from "./styles";

export default ({type, label}) => {
  return (
    <C.Container>
      <input type={type} id={label} autocomplete="off" required />
      <label for={label}>{label}</label>
    </C.Container>
  );
};
