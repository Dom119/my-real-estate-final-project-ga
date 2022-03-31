import React from "react";
import { BigContainer, Button, Container, ContainerVertical, Input } from "../styles/Global";
import { SearchBox, StyledLandingPage } from "../styles/LandingPage.styled";

export default function LandingPage() {
  return (
    <ContainerVertical>
      <StyledLandingPage>
        <BigContainer>
          <img src={require("../asset/img/realEstateLandingPage.png")} alt="" />
        </BigContainer>
        <SearchBox>
          <Input type="text" placeholder="Enter your suburb..." />
          <Button>Search</Button>
        </SearchBox>
      </StyledLandingPage>
      <Container>
        {/* If I have time, will do st here */}
      </Container>
    </ContainerVertical>
  );
}
