import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    overflow: hidden;
    border: 1px solid ${props => props.colorBorder};
    
`

export const Icon = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor};
`

export const Input = styled.input`
    flex: 1;
    outline: none;
    height: 100%;
    font-size: 0.9rem;
    border: none;
    color: ${props => props.colorText};
    background-color: ${props => props.bgColor};
`