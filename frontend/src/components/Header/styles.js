import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div{
        display: flex;

        & > div:first-child{
            margin-right: 0.7rem;
        }
    }

`

export const Title = styled.h1`
    font-size: 2rem;
    color: var(--white);
    position: relative;

    &::before {
        content: "";
        height: 5px;
        width: 40%;
        background-color: var(--primary-light);
        position: absolute;
        bottom: 0;
        left: 0;
    }
`
