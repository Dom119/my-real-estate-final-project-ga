import React from "react";
import {
  BigContainer,
  Button,
  Container,
  ContainerVertical,
} from "../../styles/Global";
import { SearchBox, StyledLandingPage } from "../../styles/LandingPage.styled";
import Autocomplete from "../AutoComplete";
import newData from "../../asset/AutoCompleteData";
import { useDispatch } from "react-redux";
import { toggleSearchModal, selectModal } from "../../features/modal/modalSlice";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const dispatch = useDispatch();

  return (
    <ContainerVertical>
      <StyledLandingPage>
        <BigContainer>
          <img src={require("../../asset/img/realEstateLandingPage.png")} alt="" />
        </BigContainer>
        <SearchBox>
          {/* <Input type="text" placeholder="Enter your suburb..." /> */}
          <Autocomplete suggestions={newData} />
          <Button onClick={() => dispatch(toggleSearchModal("true"))}>
            Filter
          </Button>
          <Link to="/properties">Search</Link>
        </SearchBox>
      </StyledLandingPage>
      <Container>{/* If I have time, will do st here */}</Container>
    </ContainerVertical>
  );
}
