import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listingType: "Sale",
  propertyTypes: ["House", "NewApartments"],
  minBedrooms: "",
  maxBedrooms: "",
  minBathrooms: "",
  maxBathrooms: "",
  minCarspaces: "",
  maxCarspaces: "",
  minPrice: "",
  maxPrice: "",
  minLandArea: "",
  maxLandArea: "",
  pageSize: "10",
  pageNumber: "1",
  locations: [
    {
      state: "",
      region: "",
      area: "",
      suburb: "",
      postCode: "",
      includeSurroundingSuburbs: true,
    },
  ],
};

export const searchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      const locationInfo = action.payload
        .split(" ")
        .map((element) => element.trim());
      console.log(locationInfo);
      state.locations[0].state = locationInfo[2];
      state.locations[0].suburb = locationInfo[1];
      state.locations[0].postCode = locationInfo[0];
      state.pageNumber = "1";
    },
    changePage: (state, action) => {
      state.pageNumber = (parseInt(state.pageNumber) + action.payload).toString();
    },
    setMinBedrooms: (state, action) => {
      state.minBedrooms = action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMaxBedrooms: (state, action) => {
      state.maxBedrooms = action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMinBathrooms: (state, action) => {
      state.minBathrooms =
        action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMaxBathrooms: (state, action) => {
      state.maxBathrooms =
        action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMinCarspaces: (state, action) => {
      state.minCarspaces =
        action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMaxCarspaces: (state, action) => {
      state.maxCarspaces =
        action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMinLandArea: (state, action) => {
      state.minLandArea = action.payload !== "" ? parseInt(action.payload) : "";
    },
    setMaxLandArea: (state, action) => {
      state.maxLandArea = action.payload !== "" ? parseInt(action.payload) : "";
    },
    setSurroundingSuburbs: (state, action) => {
      state.locations[0].includeSurroundingSuburbs =
        action.payload === "true" ? true : false;
    },
  },
});

export const {
  setLocation,
  changePage,
  setMinBedrooms,
  setMaxBedrooms,
  setMinBathrooms,
  setMaxBathrooms,
  setMinCarspaces,
  setMaxCarspaces,
  setMinPrice,
  setMaxPrice,
  setMinLandArea,
  setMaxLandArea,
  setSurroundingSuburbs,
} = searchSlice.actions;

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
