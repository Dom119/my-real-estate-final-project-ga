import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  text-align: center;
  align-items: center;
  h1 {
    margin: 0px;
    padding: 0px;
    color: ${({ theme }) => theme.colors.action};
  }
  button {
    margin: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    outline: none;
    text-decoration: none;
    border: 1px solid;
    background-color: ${({ theme }) => theme.colors.action};
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.background};
    transition: 0.3s;

    :hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.action};
      border-color: ${({ theme }) => theme.colors.action};
      cursor: pointer;
      border: 1px solid;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledNavBarElements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
