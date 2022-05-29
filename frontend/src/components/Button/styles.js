import styled from "styled-components";

export const Container = styled.button`
    all: unset;
    height: 40px;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 5px 0px var(--primary-light);
    background-color: var(--primary-light);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    
    &:hover{
        background-color: var(--primary-dark);
    }
`
