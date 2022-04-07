import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function validatingSearchCriteria({
  maxBathrooms,
  maxBedrooms,
  maxCarspaces,
  maxLandArea,
  maxPrice,
  minBathrooms,
  minBedrooms,
  minCarspaces,
  minLandArea,
  minPrice,
}) {
  let message = [];
  if (
    parseInt(maxBathrooms) < parseInt(minBathrooms) &&
    maxBathrooms !== "Any" &&
    minBathrooms !== "Any"
  )
    message.push(
      "Max-bathrooms needs to be bigger than or equal to min-bathrooms"
    );
  if (
    parseInt(maxBedrooms) < parseInt(minBedrooms) &&
    maxBedrooms !== "Any" &&
    minBedrooms !== "Any"
  )
    message.push(
      "Max-bedrooms needs to be bigger than or equal to min-bedrooms"
    );
  if (
    parseInt(maxCarspaces) < parseInt(minCarspaces) &&
    maxCarspaces !== "Any" &&
    minCarspaces !== "Any"
  )
    message.push(
      "Max-Carspaces needs to be bigger than or equal to min-Carspaces"
    );
  if (
    parseInt(maxLandArea) < parseInt(minLandArea) &&
    maxLandArea !== "Any" &&
    minLandArea !== "Any"
  )
    message.push(
      "Max-LandArea needs to be bigger than or equal to min-LandArea"
    );
  if (
    parseInt(maxPrice) < parseInt(minPrice) &&
    maxPrice !== "Any" &&
    minPrice !== "Any"
  )
    message.push("Max-Prices needs to be bigger than or equal to min-Prices");
  return message;
}
