import styled from "styled-components";

export const StyledLandingPage = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 15px;
  }
`;
export const SearchBox = styled.div`
  position: absolute;
  top: 20%;
  right:25%;
  background-color: ${({ theme }) => theme.colors.background};
  
  width: 50%;
  padding: 10px;
  border-radius: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input, button{
      margin: 0px;
      border-radius: 50px;
      height: 60px;
  }
`;
