import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateFav } from "../features/user/userSlice";

export default function FavButton({ propertyID }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const updateFavDatabase = async (newFav) => {
    const response = await fetch("/api/users/fav", {
      method: "PATCH",
      body: JSON.stringify({
        userName: currentUser.userName,
        fav: newFav,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const data = await response.json();
    console.log("fetching new fav", data);

    dispatch(updateFav(data.data.fav));
  };

  //we need to update redux immediately after each step to get consistent thing
  const handleFavButton = () => {
    setIsFav(!isFav);
    if (isFav) {
      const newFavList = currentUser.fav.filter(
        (element) => element !== propertyID
      );
      updateFavDatabase(newFavList);

      console.log("in handle fav button", newFavList);
    } else {
      const newFavList = [...currentUser.fav, propertyID];
      updateFavDatabase(newFavList);

      console.log("in handle fav button", newFavList);
    }
  };

  useEffect(() => {
    currentUser.fav.forEach((ele) => {
      if (ele == propertyID) {
        console.log("checking ele: ", ele, propertyID);
        setIsFav(true);
      }
    });
  }, []);

  return (
    <>
      <button onClick={handleFavButton}>{isFav ? "Undo Fav" : "Fav"}</button>
    </>
  );
}
