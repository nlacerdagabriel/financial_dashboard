import * as C from "./styles";

export default ({label, items, value, onChange, width}) => {
  return (
    <C.Container style={{width: width}}>
      <select value={value} onChange={onChange} name={label} id={label}>
        {items.map((it, i) => (
          <option key={i} value={it}>{it}</option>
        ))}
      </select>
      <label htmlFor={label}>{label}</label>
    </C.Container>
  );
};
