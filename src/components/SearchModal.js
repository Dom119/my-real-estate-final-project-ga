import React, { useEffect, useState } from "react";
import { Button, ContainerHorizontal } from "../styles/Global";
import { StyledSearchModal } from "../styles/SearchModal.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  closeSearchModal,
  selectModal,
  toggleSearchModal,
} from "../features/modal/modalSlice";
import {
  selectSearch,
  setMaxBathrooms,
  setMaxBedrooms,
  setMaxCarspaces,
  setMaxLandArea,
  setMaxPrice,
  setMinBathrooms,
  setMinBedrooms,
  setMinCarspaces,
  setMinLandArea,
  setMinPrice,
  setSurroundingSuburbs,
} from "../features/search/searchSlice";
import validatingSearchCriteria from "../utiles/validatingSearchCriteria";

export default function SearchModal() {
  const dispatch = useDispatch();

  // const modal = useSelector(selectModal);
  const search = useSelector(selectSearch);

  return (
    <StyledSearchModal>
      <ContainerHorizontal>
        <div>
          <label>Min Bedrooms</label>
          <select
            onChange={(event) => {
              dispatch(setMinBedrooms(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div>
          <label>Max Bedrooms</label>
          <select
            onChange={(event) => {
              dispatch(setMaxBedrooms(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </ContainerHorizontal>

      <ContainerHorizontal>
        <div>
          <label>Min Bathrooms</label>
          <select
            onChange={(event) => {
              dispatch(setMinBathrooms(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label>Max Bathrooms</label>
          <select
            onChange={(event) => {
              dispatch(setMaxBathrooms(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </ContainerHorizontal>

      <ContainerHorizontal>
        <div>
          <label>Min Car Spaces</label>
          <select
            onChange={(event) => {
              dispatch(setMinCarspaces(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label>Max Car Spaces</label>
          <select
            onChange={(event) => {
              dispatch(setMaxCarspaces(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </ContainerHorizontal>

      <ContainerHorizontal>
        <div>
          <label>Min Price</label>
          <select
            onChange={(event) => {
              dispatch(setMinPrice(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="300000">$300,000</option>
            <option value="500000">$500,000</option>
            <option value="1000000">$1,000,000</option>
            <option value="2000000">$2,000,000</option>
            <option value="5000000">$5,000,000</option>
            <option value="10000000">$10,000,000</option>
          </select>
        </div>
        <div>
          <label>Max Price</label>
          <select
            onChange={(event) => {
              dispatch(setMaxPrice(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="300000">$300,000</option>
            <option value="500000">$500,000</option>
            <option value="1000000">$1,000,000</option>
            <option value="2000000">$2,000,000</option>
            <option value="5000000">$5,000,000</option>
            <option value="10000000">$10,000,000</option>
          </select>
        </div>
      </ContainerHorizontal>

      <ContainerHorizontal>
        <div>
          <label>Min Land Area</label>
          <select
            onChange={(event) => {
              dispatch(setMinLandArea(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="300">300&#13217;</option>
            <option value="500">500&#13217;</option>
            <option value="1000">1000&#13217;</option>
            <option value="4000">4000&#13217;</option>
            <option value="10000">10000&#13217;</option>
          </select>
        </div>
        <div>
          <label>Max Land Area</label>
          <select
            onChange={(event) => {
              dispatch(setMaxLandArea(event.target.value));
            }}
          >
            <option value="">Any</option>
            <option value="300">300&#13217;</option>
            <option value="500">500&#13217;</option>
            <option value="1000">1000&#13217;</option>
            <option value="4000">4000&#13217;</option>
            <option value="10000">10000&#13217;</option>
          </select>
        </div>
      </ContainerHorizontal>

      <ContainerHorizontal>
        <div>
          <label>Include Surrounding Suburbs</label>
          <select
            onChange={(event) => {
              dispatch(setSurroundingSuburbs(event.target.value));
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </ContainerHorizontal>

      <div>
        <button
          onClick={() => {
            const message = validatingSearchCriteria(search);

            let wholeMessage = "";
            message.forEach((element) => {
              wholeMessage = wholeMessage + element + ". " + "\n";
            });

            if (message.length === 0) {
              dispatch(toggleSearchModal("false"));
            } else {
              alert(wholeMessage);
            }
          }}
        >
          Close
        </button>
      </div>
    </StyledSearchModal>
  );
}
