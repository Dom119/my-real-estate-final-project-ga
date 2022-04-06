import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Container, ContainerHorizontal } from "../styles/Global";
import { StyledNavBar } from "../styles/NavBar.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, signOut } from "../features/user/userSlice";

export default function NavBar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(signOut(""));
    // navigate("/")
  };

  return (
    <Container>
      <StyledNavBar>
        <h1>MyRealEstate</h1>
        <div></div>

        {user.userName === "" && (
          <ContainerHorizontal>
            <Link to="/">Home</Link>
            <Link to="/users">Admin</Link>
            <Link to="/login">Sign In</Link>
          </ContainerHorizontal>
        )}

        {user.userName !== "" && (
          <ContainerHorizontal>
            <Link to="/">Home</Link>
            <Link to="/users">Admin</Link>
            <Link to="/">Hi {user.userName}</Link>
            <Link to="/users/dashboard">Dashboard</Link>
            <Link to="/" onClick={handleSignOut}>Sign Out</Link>
          </ContainerHorizontal>
        )}

        <Outlet />
      </StyledNavBar>
    </Container>
  );
}
