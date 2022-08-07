import styled from "styled-components";

export const Container = styled.div`
  & > a{
    width: 100%;
    display: flex;
    justify-content: center;
    color: #a6a6a6;
    font-size: 1.125rem;
    margin-top: 1rem;
    cursor: pointer;
  }
`

export const Graphics = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;

  
  @media(max-width: 768px){
    flex-direction: column;
  }
`;


export const ContainerTransactions = styled.div`
  max-height: 12rem;
  width: 100%;
  overflow: hidden;
`