import styled from "styled-components";

export const StyledLandingPage = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 15px;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const SearchBox = styled.div`
  position: absolute;
  top: 20%;
  right: 25%;
  background-color: ${({ theme }) => theme.colors.background};

  width: 50%;
  height: 80px;
  padding: 10px;
  border-radius: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input,
  button {
    margin: 0px;
    padding: 20px;
    border-radius: 50px;
    height: 60px;
  }

  button {
    width: auto;
    padding: 20px 30px;
  }

  @media only screen and (max-width: 1000px) {
    height: 160px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: static;

    margin: 20px 0px;

    button {
      width: 100px;
      padding: 0px;
    }

    input {
      border: 1px solid black;
    }
  }
`;

export const Explore = styled.div`
  margin: 30px 0px;
  padding: 0;

  button {
    padding: 15px 20px;
    margin: 10px 10px;
    border-radius: 50px;
    border: 1px solid black;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    :hover {
      border-color: ${({ theme }) => theme.colors.action};
      background-color: ${({ theme }) => theme.colors.action};
      color: ${({ theme }) => theme.colors.background};
    }
  }
  /* background-color: black; */
`;

export const ExploreElement = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 20px;
    margin: 0px 20px;
    box-shadow: 5px 5px 10px;
    border-radius: 5px;
  }
  p,
  h3,
  h5 {
    text-align: left;
    margin: 10px 0px;
  }
  img {
    max-width: 200px;
  }
  h5 {
    color: blue;
    font-size: 15px;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px;
  div {
    display: flex;
    flex-wrap: wrap;
  }

  p,
  i {
    margin: 0px 10px;
  }
`;
