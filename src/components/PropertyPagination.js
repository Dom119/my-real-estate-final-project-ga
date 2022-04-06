import React, { useEffect, useState } from "react";
import { StyledPropertyPagination } from "../styles/PropertyPagination.styled";
import { useSelector, useDispatch } from "react-redux";
import { changePage, selectSearch } from "../features/search/searchSlice";

export default function PropertyPagination() {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    const checking = async () => {
      const searchTrial = { ...search };
      searchTrial.pageNumber = (parseInt(search.pageNumber) + 1).toString();
      const response = await fetch(
        "https://api.domain.com.au/v1/listings/residential/_search",
        {
          method: "POST",
          headers: {
            "X-Api-Key": "key_0b3d8ee46aaf1fb6aed1cdf83be6a6e3",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchTrial),
        }
      );
      const data = await response.json();
      if (data.length != 0) setIsNext(true);
    };
    checking();
  }, [search]);

  return (
    <StyledPropertyPagination>
      {parseInt(search.pageNumber) - 1 > 0 && (
        <button
          onClick={() => {
            dispatch(changePage(-1));
          }}
        >
          Previous
        </button>
      )}
      <h1 className="mainPage">{search.pageNumber}</h1>
      {isNext && (
        <button
          onClick={() => {
            dispatch(changePage(1));
          }}
        >
          Next
        </button>
      )}
    </StyledPropertyPagination>
  );
}
