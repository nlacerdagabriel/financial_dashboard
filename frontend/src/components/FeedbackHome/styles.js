import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-height: 300px;
    flex: 1;
    background-color: var(--bg-light);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 2rem;
    border-radius: 0.5rem;
    margin-right: 1rem;
    position: relative;

    & > h2{
      font-size: 2rem;
    }

    & > p{
      color: var(--gray);
    }
`