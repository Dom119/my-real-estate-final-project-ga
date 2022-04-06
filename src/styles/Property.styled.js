import styled from "styled-components";

export const StyledProperties = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contact{
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
    width: 500px;
  }
  button {
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    font-size: 40px;
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

`;
