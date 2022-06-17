import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  width: 100%;
  background-color: var(--bg-light);
  padding: 1.25rem;
  border-left: 2rem solid;
  border-color: ${props => props.borderColor};
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--white);
`;

export const ContainerNameCategory = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p:last-child {
    font-size: 1rem;
    color: #a6a6a6;
  }
`;

export const ContainerValueDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p:last-child {
    font-size: 1rem;
    color: #a6a6a6;
  }
`;
