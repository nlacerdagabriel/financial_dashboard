import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
    position: relative;

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
    select:focus + label,
    select:valid + label {
      font-size: 14px;
      top: -9px;
    }
    select:focus + label {
      color: var(--primary-light);
    }
  }

  select{
    height: 40px;
    width: 100%;
    background-color: var(--bg-dark);
    border: 1px solid var(--white);
    color: var(--white);
    outline: none;
    border-radius: 0.3rem;

    &:focus{
      border-color: var(--primary-light);
    }
`;
