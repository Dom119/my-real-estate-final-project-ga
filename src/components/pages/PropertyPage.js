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
        current ={ ...property.listing };
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

        <div>{current.advertiser.name}</div>
        <div>
          <div>contact</div>
          <div>{current.advertiser.contacts[0].name}</div>
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
          <div>{current.propertyDetails.bathrooms} Bathrooms</div>
          <div>{current.propertyDetails.bedrooms} Bedrooms</div>
          <div>{current.propertyDetails.carspaces} Carspaces</div>
          <div>{current.propertyDetails.landArea} m2</div>
        </div>
        <div>
          <h3>{current.headline}</h3>
          <h5>{current.summaryDescription}</h5>
        </div>
      </PropertyDetails>
    </StyledProperties>
  );
}
