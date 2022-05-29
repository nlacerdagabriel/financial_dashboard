import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;
export const Sidebar = styled.nav`
  width: 100%;
  max-width: 310px;
  background-color: var(--bg-light);
  border-right: 1px solid var(--gray);
  padding-left: 60px;
  padding-top: 140px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    list-style: none;

    p {
        margin-left: 0.5rem;
        color: var(--white);
        font-size: 1rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  height: 5rem;
  width: 100%;
  background-color: var(--bg-light);
  border-bottom: 1px solid var(--gray);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;

  div {
    display: flex;
    flex-direction: column;

    p {
      color: var(--white);

      &:first-child {
        font-size: 1.7rem;
        font-weight: bold;
      }
    }
  }
`;

export const Body = styled.div`
  height: calc(100% - 5rem);
  width: 100%;
  padding: 2rem;
`;

export const BodyContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1220px;
`;
