import styled from "styled-components";

export const ContainerTransactions = styled.div`
  max-height: 87%;
  overflow-y: scroll;
  padding-right: 1rem;

  /* width */
::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--bg-light);
  border-radius: 0.5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(9, 192, 240, 0.4);
  border-radius: 0.5rem;
}

`