import styled from "styled-components";

export const StyledPropertiesPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const House = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px;
  margin: 50px;
`;

export const HousePhoto = styled.div`
  width: 400px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  position: relative;
  > img:first-child {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 100px;
    height: auto;
  }
`;

export const HouseIcons = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const BreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const ButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;
