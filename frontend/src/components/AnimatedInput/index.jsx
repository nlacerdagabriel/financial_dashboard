import * as C from "./styles";

export default ({type, label, value, onChange, width, className}) => {
  return (
    <C.Container className={className} style={{width: width}}>
      <input value={value} onChange={onChange} type={type} id={label} autoComplete="off" required />
      <label for={label}>{label}</label>
    </C.Container>
  );
};
