import styled from "styled-components";

export const StyledSearchModal = styled.div`
  width: 500px;
  max-width: 75%;
  height: 500px;
  max-height: 100%;
  background-color: white;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
  z-index: 99;

  border-radius: 5px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  > div {
    margin: 5px 0px;
  }
  select {
    margin: 0px 10px;
    padding: 2px 5px;
    border-radius: 5px;
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  background-color: #000;
  opacity: 0.5;
`;

export const ButtonGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
margin-right: 0px;
button{
  margin: 10px 5px;
  width: auto;
  padding: 10px 30px;
}
  /* position: absolute;
  right: 10px;
  bottom: 10px; */
`;
