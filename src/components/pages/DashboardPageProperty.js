import React from "react";
import { StyledDashboardProperty } from "../../styles/DashboardPageProperty.styled";
import FavButton from "../FavButton";

export default function DashboardPageProperty({ data, propertyID }) {
  return (
    <StyledDashboardProperty>
      <img src={data.media[0].url} alt="House Photo" />
      <FavButton propertyID={propertyID} />
      <h3>{data.propertyDetails.displayableAddress}</h3>
      <h3>{data.propertyDetails.bathrooms} Bathrooms</h3>
      <h3>{data.propertyDetails.bedrooms} Bedrooms</h3>
      <h3>{data.propertyDetails.carspaces} Carspaces</h3>
      <p>{data.summaryDescription.slice(13)}</p>
    </StyledDashboardProperty>
  );
}
