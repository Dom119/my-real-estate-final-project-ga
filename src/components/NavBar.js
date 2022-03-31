import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "../styles/Global";
import { StyledNavBar } from "../styles/NavBar.styled";

export default function NavBar() {
  return (
    <Container>
      <StyledNavBar>
        <h1>MyRealEstate</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Buy</Link>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/login">Sign In</Link>
          <Link to="/login">Join</Link>
        </div>
        <Outlet />
      </StyledNavBar>
    </Container>
  );
}
