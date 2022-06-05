import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    max-height: 300px;
    flex: 1;
    background-color: var(--bg-light);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-radius: 0.5rem;

    
  &:first-child{
    margin-right: 1rem;
  }

  svg{
    flex: 1.5;
  }
`

export const ChartInfo = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

    & > p{
        margin-bottom: 3rem;
        font-size: 1.75rem;
    }
`

export const DataInfo = styled.div`
    display: flex;
    align-items: center;

    & > div{
        margin-right: 0.5rem;
        height: 3rem;
        width: 3rem;
        background-color: ${(props) => props.backgroundColor};
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div:first-child{
        margin-bottom: 1rem;
    }
`