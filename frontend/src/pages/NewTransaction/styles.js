import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;

    & > div:nth-child(2) {
      margin: 0 2rem;
    }
  }
`;
