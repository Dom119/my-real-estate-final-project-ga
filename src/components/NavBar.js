import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Container, ContainerHorizontal } from "../styles/Global";
import { StyledNavBar } from "../styles/NavBar.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, signOut } from "../features/user/userSlice";

export default function NavBar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut(""));
  };

  return (
    <Container>
      <StyledNavBar>
        <h1>MyRealEstate</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">Admin</Link>
        </div>

        {user.userName === "" && (
          <ContainerHorizontal>
            <Link to="/login">Sign In</Link>
            <Link to="/login">Join</Link>
          </ContainerHorizontal>
        )}

        {user.userName !== "" && (
          <ContainerHorizontal>
            <Link to="/">Hi {user.userName}</Link>
            <Link to="/users/dashboard">Dashboard</Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </ContainerHorizontal>
        )}

        <Outlet />
      </StyledNavBar>
    </Container>
  );
}
