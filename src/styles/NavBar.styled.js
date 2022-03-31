import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  text-align: center;
  align-items: center;
  h1{
    margin: 0px;
    padding: 0px;
    color: ${({ theme }) => theme.colors.action};
  }
`;
