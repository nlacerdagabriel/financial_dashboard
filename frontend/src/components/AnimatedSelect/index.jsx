import * as C from "./styles";

export default ({className, label, items, value, onChange, width}) => {
  return (
    <C.Container className={className} style={{width: width}}>
      <select required value={value} onChange={onChange} name={label} id={label}>
        <option disabled></option>
        {items.map((it, i) => (
          <option key={i} value={it}>{it}</option>
        ))}
      </select>
      <label htmlFor={label}>{label}</label>
    </C.Container>
  );
};
