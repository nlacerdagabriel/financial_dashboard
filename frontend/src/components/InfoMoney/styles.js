import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerInfo = styled.div`
  height: 160px;
  flex: 1;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  background-color: ${(props) => props.backgroundColor};

  &:nth-child(2) {
    margin: 0 1rem;
  }

  img {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }

  @media (max-width: 768px) {
    flex: inherit;
    height: 120px;

    &:nth-child(2) {
      margin: 1rem 0;
    }

    img{
      height: 100%;
    }
  }
`;

export const Label = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Value = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
`;
