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

  & > div:first-child {
    margin-bottom: 4rem;
  }

  & > .inputs {

    &> div:first-child select{
      padding-left: 1rem;
    }

    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;

    & > div:nth-child(2) {
      margin: 0 2rem;
    }
  }

  input {
  color-scheme: dark;
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

    button:first-child {
      margin-right: 1rem;
      background-color: var(--danger);
    }

    button:last-child {
      background-color: var(--success);
    }
  }
`;
