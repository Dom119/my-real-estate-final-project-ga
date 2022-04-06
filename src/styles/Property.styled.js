import styled from "styled-components";

export const StyledProperties = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 50px;
  .contact {
    width: 100px;
    border-radius: 50px;
  }
`;

export const MyCarousel = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 700px;
    max-width: 90vw;
  }
  button {
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    font-size: 40px;
    border: 1px solid;
    font-size: 15px;
    margin: 20px;
    :hover{
      background-color: white;
      color:black;
      border-color: white;
      transition: 0.3s ease-in-out;
    }
  }
  .leftButton {
    position: absolute;
    left: 0;
  }
  .rightButton {
    position: absolute;
    right: 0;
  }
`;
export const PropertyDetails = styled.div`
  max-width: 500px;
  margin: 50px 0px;
  button {
    float: right;
  }
  div {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
  }
`;
