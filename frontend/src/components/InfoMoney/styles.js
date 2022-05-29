import styled from 'styled-components'

export const Container = styled.div`
display: flex;
margin-bottom: 2rem;
`

export const ContainerInfo = styled.div`
  height: 160px;
  flex: 1;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  background-color: ${(props) => props.backgroundColor};

  &:nth-child(2){
    margin: 0 2rem;
  }

  img{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`

export const Label = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  `

export const Value = styled.p`
font-size: 1.75rem;
font-weight: bold;

`