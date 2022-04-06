import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import DashboardPageProperty from "./DashboardPageProperty";

export default function DashboardPage() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user.fav.map((id) => (
        <DashboardPageProperty propertyID={id} key={nanoid()} />
      ))}
    </div>
  );
}
