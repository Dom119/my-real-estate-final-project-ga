import React, { useEffect, useState } from "react";
import {
  MyCarousel,
  PropertyDetails,
  StyledProperties,
} from "../../styles/Property.styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectData } from "../../features/data/dataSlice";
import { selectUser } from "../../features/user/userSlice";
import FavButton from "../FavButton";
import { selectSearch } from "../../features/search/searchSlice";
import { Container } from "../../styles/Global";
import { HouseIcons } from "../../styles/PropertiesPage.styled";

export default function Property() {
  let params = useParams();
  // const [current, setCurrent] = useState();

  const currentData = useSelector(selectData);
  const currentUser = useSelector(selectUser);

  const [photoIndex, setPhotoIndex] = useState(0);

  let current;
  currentData.forEach((property) => {
    if (property.type === "PropertyListing") {
      if (property.listing.id == params.id) {
        current = { ...property.listing };
      }
    }
  });

  return (
    <StyledProperties>
      <MyCarousel>
        <img src={current.advertiser.bannerUrl} alt="" />
        <img src={current.media[photoIndex].url} alt="House Photos" />
        {photoIndex > 0 && (
          <button
            className="leftButton"
            onClick={() => {
              setPhotoIndex(photoIndex - 1);
            }}
          >
            {"<"}
          
          </button>
        )}
        {photoIndex < current.media.length - 1 && (
          <button
            className="rightButton"
            onClick={() => {
              setPhotoIndex(photoIndex + 1);
            }}
          >
            {">"}
            
          </button>
        )}
      </MyCarousel>
      <PropertyDetails>
        {/* You need to login to see the fav button */}
        {currentUser.userName !== "" && (
          <FavButton propertyID={params.id} current={current} />
        )}

        <h1>{current.advertiser.name}</h1>
        <div>
          <h3>Contact: {current.advertiser.contacts[0].name}</h3>
          <img
            src={current.advertiser.contacts[0].photoUrl}
            alt=""
            className="contact"
          />
        </div>
        <div>
          <div>Price Details:</div>
          <div>{current.priceDetails.displayPrice}</div>
        </div>
        <div>
          <div>{current.propertyDetails.displayableAddress}</div>
          <div>{current.propertyDetails.propertyType}</div>
          <div>{current.propertyDetails.landArea} &#13217;</div>
        </div>
        <HouseIcons>
          <div>
            <h3>{current.propertyDetails.bathrooms} </h3>{" "}
            <i class="material-icons">shower</i>{" "}
          </div>
          <div>
            <h3>{current.propertyDetails.bedrooms} </h3>
            <i class="material-icons">bed</i>{" "}
          </div>
          <div>
            <h3>{current.propertyDetails.carspaces} </h3>
            <i class="material-icons">garage</i>{" "}
          </div>
        </HouseIcons>
        <div>
          <h3>{current.headline}</h3>
          <h5>{current.summaryDescription.slice(13)}</h5>
        </div>
      </PropertyDetails>
    </StyledProperties>
  );
}
