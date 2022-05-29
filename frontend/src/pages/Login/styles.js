import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: var(--white);
        font-size: 1.8rem;
        margin-bottom: 1.8rem;
    }

    p{
        color: var(--gray);
        font-size: 0.9rem;
        cursor: pointer;
    }
`