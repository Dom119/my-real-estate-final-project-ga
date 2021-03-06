import { nanoid } from "nanoid";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { StyledDashBoard } from "../../styles/Dashboard.styled";
import DashboardPageProperty from "./DashboardPageProperty";

export default function DashboardPage() {
  const user = useSelector(selectUser);

  return (
    <StyledDashBoard>
      {user.fav.map((ele) => (
        <DashboardPageProperty key={nanoid()} data={ele.data} propertyID={ele.propertyID} />
      ))}
    </StyledDashBoard>
  );
}
