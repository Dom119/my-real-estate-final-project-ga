import React, { useEffect } from "react";
import {
  BreadCrumb,
  ButtonWrapperStyled,
  House,
  HouseIcons,
  HousePhoto,
  StyledPropertiesPage,
} from "../../styles/PropertiesPage.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch } from "../../features/search/searchSlice";
import { selectData, setData } from "../../features/data/dataSlice";
import { nanoid } from "nanoid";
import PropertyPagination from "../PropertyPagination";
import { Link, useNavigate } from "react-router-dom";
import KEY from "../../utiles/key";
import { Button, Container, ContainerHorizontal } from "../../styles/Global";
import { toggleSearchModal } from "../../features/modal/modalSlice";
import FavButton from "../FavButton";

export default function PropertiesPage() {
  const search = useSelector(selectSearch);
  const data = useSelector(selectData);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(
        "https://api.domain.com.au/v1/listings/residential/_search",
        {
          method: "POST",
          headers: {
            "X-Api-Key": KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(search),
        }
      );
      const data = await response.json();
      console.log("search result", data);

      dispatch(setData(data));
    };

    fetchingData();
  }, [search]);
  //search.pageNumber

  return (
    <Container>
      <BreadCrumb>
        <h3>
          {search.locations[0].state} / {search.locations[0].postCode} /{" "}
          {search.locations[0].suburb}
        </h3>
        <Button
          onClick={() => {
            navigate("/search");
            dispatch(toggleSearchModal("true"));
          }}
        >
          Filter
        </Button>
      </BreadCrumb>
      <StyledPropertiesPage>
        {data.map((house) => {
          if (house.type === "PropertyListing") {
            return (
              <House key={nanoid()}>
                <HousePhoto>
                  <img
                    src={house.listing.advertiser.logoUrl}
                    alt="Agent photo"
                  />
                  <img src={house.listing.media[0].url} alt="House Image" />
                </HousePhoto>

                <div>
                  <ButtonWrapperStyled>
                    <h3>{house.listing.propertyDetails.allPropertyTypes[0]}</h3>
                    <FavButton
                      current={house.listing}
                      propertyID={house.listing.id}
                    />
                  </ButtonWrapperStyled>
                  <h3>
                    {house.listing.propertyDetails.streetNumber}{" "}
                    {house.listing.propertyDetails.street}{" "}
                    {house.listing.propertyDetails.suburb}{" "}
                    {house.listing.propertyDetails.postcode}{" "}
                    {house.listing.propertyDetails.displayable}
                  </h3>
                  <HouseIcons>
                    <div>
                      <h3>{house.listing.propertyDetails.bathrooms} </h3>{" "}
                      <i class="material-icons">shower</i>{" "}
                    </div>
                    <div>
                      <h3>{house.listing.propertyDetails.bedrooms} </h3>
                      <i class="material-icons">bed</i>{" "}
                    </div>
                    <div>
                      <h3>{house.listing.propertyDetails.carspaces} </h3>
                      <i class="material-icons">garage</i>{" "}
                    </div>
                  </HouseIcons>
                  <h3>Contact: {house.listing.advertiser.contacts[0].name}</h3>
                </div>
                <Link to={`/properties/${house.listing.id}`}>Details</Link>
              </House>
            );
          }
        })}
      </StyledPropertiesPage>
      <PropertyPagination />
    </Container>
  );
}
