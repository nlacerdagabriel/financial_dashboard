import styled from "styled-components";

export const Container = styled.div`
  display: none !important;

  position: absolute;
  left: 2rem;

  @media(max-width: 1120px){
    display: inherit !important;
  }
`