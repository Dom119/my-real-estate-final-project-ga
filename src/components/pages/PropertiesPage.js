import React, { useEffect } from "react";
import { StyledPropertiesPage } from "../../styles/PropertiesPage.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch } from "../../features/search/searchSlice";
import { selectData, setData } from "../../features/data/dataSlice";
import { nanoid } from "nanoid";
import PropertyPagination from "../PropertyPagination";
import { Link } from "react-router-dom";

export default function PropertiesPage() {
  const search = useSelector(selectSearch);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(
        "https://api.domain.com.au/v1/listings/residential/_search",
        {
          method: "POST",
          headers: {
            "X-Api-Key": "key_0b3d8ee46aaf1fb6aed1cdf83be6a6e3",
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
  }, [search.pageNumber]);

  return (
    <div>
      <StyledPropertiesPage>
        {data.map((house) => {
          if (house.type === "PropertyListing") {
            return (
              <div key={nanoid()}>
                <img src={house.listing.media[0].url} alt="House Image" />
                <div>
                  <h3>{house.listing.propertyDetails.allPropertyTypes[0]}</h3>
                  <h3>
                    {house.listing.propertyDetails.streetNumber}{" "}
                    {house.listing.propertyDetails.street}{" "}
                    {house.listing.propertyDetails.suburb}{" "}
                    {house.listing.propertyDetails.postcode}{" "}
                    {house.listing.propertyDetails.state}
                  </h3>
                  <h3>{house.listing.propertyDetails.bathrooms} Bathrooms</h3>
                  <h3>{house.listing.propertyDetails.bedrooms} Bedrooms</h3>
                  <h3>{house.listing.propertyDetails.carspaces} Carspaces</h3>
                </div>
                <Link to={`/properties/${house.listing.id}`}>
                  Details
                </Link>
                <div>
                  <h3>Contact: {house.listing.advertiser.contacts[0].name}</h3>
                  <img
                    src={house.listing.advertiser.logoUrl}
                    alt="Agent photo"
                  />
                </div>
              </div>
            );
          }
        })}
      </StyledPropertiesPage>
      <PropertyPagination />
    </div>
  );
}
