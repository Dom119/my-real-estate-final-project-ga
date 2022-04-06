import React from "react";
import {
  BigContainer,
  Button,
  Container,
  ContainerVertical,
} from "../../styles/Global";
import {
  Explore,
  ExploreElement,
  SearchBox,
  StyledLandingPage,
} from "../../styles/LandingPage.styled";
import Autocomplete from "../AutoComplete";
import newData from "../../asset/AutoCompleteData";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSearchModal,
  selectModal,
} from "../../features/modal/modalSlice";
import { Link, useNavigate } from "react-router-dom";
import { selectSearch } from "../../features/search/searchSlice";
import { explore } from "../../utiles/data";
import Calculator from "../Calculator";

export default function LandingPage() {
  const search = useSelector(selectSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (search.locations[0].postCode !== "") {
      navigate("/properties");
    } else {
      alert("Please enter the place.");
    }
  };

  return (
    <ContainerVertical>
      <StyledLandingPage>
        <BigContainer>
          <img
            src={require("../../asset/img/realEstateLandingPage.png")}
            alt=""
          />
        </BigContainer>
        <SearchBox>
          {/* <Input type="text" placeholder="Enter your suburb..." /> */}
          <Autocomplete suggestions={newData} />
          <div>
            <Button onClick={() => dispatch(toggleSearchModal("true"))}>
              Filter
            </Button>
            <Button onClick={handleClick}>Search</Button>
          </div>
        </SearchBox>
      </StyledLandingPage>
      <Container>
        <Explore>
          <h1>Explore your next property</h1>
          <div>
            <button>Buying</button>
            <button>Renting</button>
            <button>Selling</button>
            <button>Researching</button>
          </div>
          <ExploreElement>
            {explore.map((element) => (
              <div>
                <img src={element.url} />
                <h3>{element.title}</h3>
                <p>{element.text}</p>
                <h5>{element.text2}</h5>
              </div>
            ))}
          </ExploreElement>
        </Explore>
      </Container>
      <Container>
        <Calculator />
      </Container>
    </ContainerVertical>
  );
}
