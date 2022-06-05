import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  input {
    display: block;
    width: 100%;
    height: 40px;
    background: transparent;
    border: solid 1px var(--white);
    transition: all 0.3s ease;
    padding: 0 15px;
    color: var(--white);
    outline: none;
    border-radius: 0.3rem;
  }
  input:focus {
    border-color: var(--primary-light);
  }
  label {
    position: absolute;
    cursor: text;
    z-index: 2;
    top: 13px;
    left: 10px;
    font-size: 12px;
    font-weight: bold;
    background: var(--bg-dark);
    padding: 0 10px;
    color: var(--white);
    transition: all 0.3s ease;
  }
  input + label {
    font-size: 14px;
    top: -9px;
  }
  input:focus + label {
    color: var(--primary-light);
  }
`;
