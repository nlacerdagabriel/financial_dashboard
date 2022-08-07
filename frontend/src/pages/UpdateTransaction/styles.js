import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 10rem;

  @media (max-width: 576px) {
    margin-top: 5rem;
  }
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

  & > div{
    position: relative
  }

  .inputDate {
    margin: 0 3rem;
  }

  .inputTitle {
    margin-right: 3rem;
  }

  .inputType > select {
    padding-left: 0.8rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 0;

    & > div {
      width: 100% !important;
    }

    & > div,
    .inputDate,
    .inputTitle,
    .inputType {
      margin: 1.5rem 0;
    }

    .inputTitle {
      margin-right: 0;
    }

    .inputType > select {
      padding-left: 0;
    }
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
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
    width: 100%;
    justify-content: flex-end;

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

    @media (max-width: 576px) {
      flex-direction: column; 

      button {
        width: 100%;
        height: 60px;
        margin: 0.5rem 0;
      }
    }
  }

  @media(max-width: 576px){
    flex-direction: column;

    & > button{
      margin-bottom: 1rem;
    }
  }
`;
