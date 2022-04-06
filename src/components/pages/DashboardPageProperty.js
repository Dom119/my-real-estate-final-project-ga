import React, { useEffect, useLayoutEffect, useState } from "react";

export default function DashboardPageProperty({ propertyID }) {
  const [currentHouse, setCurrentHouse] = useState({});
  //   useLayoutEffect(() => {
  //     const fetchingData = async () => {
  //       const response = await fetch(
  //         `https://api.domain.com.au/v1/listings/${propertyID}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "X-Api-Key": "key_0b3d8ee46aaf1fb6aed1cdf83be6a6e3",
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       console.log("search result in dashboard single", data);
  //       setCurrentHouse(data);
  //     };
  //     fetchingData();
  //   }, []);
  return <div>I am here</div>;
}
