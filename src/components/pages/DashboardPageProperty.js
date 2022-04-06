import React from "react";
import { StyledDashboardProperty } from "../../styles/DashboardPageProperty.styled";
import { HouseIcons } from "../../styles/PropertiesPage.styled";
import { PropertyDetails } from "../../styles/Property.styled";
import FavButton from "../FavButton";

export default function DashboardPageProperty({ data, propertyID }) {
  return (
    <StyledDashboardProperty>
      <img src={data.media[0].url} alt="House Photo" />
      <PropertyDetails>
        <FavButton propertyID={propertyID} />
        <h3>{data.propertyDetails.displayableAddress}</h3>

        <HouseIcons>
          <div>
            <h3>{data.propertyDetails.bathrooms} </h3>{" "}
            <i class="material-icons">shower</i>{" "}
          </div>
          <div>
            <h3>{data.propertyDetails.bedrooms} </h3>
            <i class="material-icons">bed</i>{" "}
          </div>
          <div>
            <h3>{data.propertyDetails.carspaces} </h3>
            <i class="material-icons">garage</i>{" "}
          </div>
        </HouseIcons>
        <p>{data.summaryDescription.slice(13)}</p>
      </PropertyDetails>
    </StyledDashboardProperty>
  );
}
