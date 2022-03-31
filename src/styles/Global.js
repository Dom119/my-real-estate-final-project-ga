import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const theme = {
  colors: {
    action: "#E4002B",
    background: "#F6F5F7",
    backgroundSecond: "FFFFFF",
    textPrimary: "#3D3B40",
    textSecondary: "#74727B",
    textAction: "#00639E",
  },
};

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box
}
body{
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Poppins', sans-serif;
    /* font-size:1rem;
    line-height:1.5rem;
    letter-spacing: 0.0rem; */
    color:  ${({ theme }) => theme.colors.textPrimary}
}
span{
    color: ${({ theme }) => theme.colors.textAction};
    
}
a{
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
`;

export const ContainerVerticalFull = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`;
export const BigContainer = styled.div`
  width: 92.5%;
  margin: 0 auto;
`;
export const Button = styled.button`
  margin: 20px;
  width: 180px;
  height: 50px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  border: 1px solid;
  outline: none;
  background-color: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.background};
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.action};
    border-color: ${({ theme }) => theme.colors.action};
    cursor: pointer;
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 1px 1px 1px #d1d9e6, inset -1px -1px 1px #f9f9f9;
  :focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
`;
