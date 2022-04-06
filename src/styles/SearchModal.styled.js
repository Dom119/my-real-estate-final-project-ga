import styled from "styled-components";

export const StyledSearchModal = styled.div`
  width: 400px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  background-color: white;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
  z-index: 99;
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
