import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 10rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  input {
    color-scheme: dark;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  
  .inputDate{
    margin: 0 3rem;
  }

  .inputTitle{
    margin-right: 3rem;
  }

  .inputType > select{
    padding-left: 0.8rem;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    all: unset;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  & > button {
    color: #c4393a;
    font-size: 1rem;
  }

  & > div {
    display: flex;

    button {
      height: 50px;
      width: 200px;

      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--white);
      font-size: 1rem;
      transition: 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    a button:first-child {
      margin-right: 1rem;
      background-color: var(--danger);
    }

    button:last-child {
      background-color: var(--success);
    }
  }
`;
