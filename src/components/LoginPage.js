import React, { useState } from "react";
import {
  Button,
  ContainerVertical,
  ContainerVerticalFull,
  Input,
} from "../styles/Global.js";
import { StyledLoginPage } from "../styles/LoginPage.styled.js";

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  //for signing up
  const handleChangeNewUser = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setNewUser(newUser);
  };

  //for login
  const handleChangeUser = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Sign up function is here
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Sign in function is here
  };

  return (
    <ContainerVerticalFull>
      <StyledLoginPage>
        <ContainerVertical>
          <h1>MyRealEstate</h1>
          <h1>Welcome Back</h1>
          <p>Sign in with your account</p>
          <form onSubmit={handleSignIn}>
            <Input
              placeholder="Email"
              onChange={handleChangeUser}
              name="email"
              type="text"
              value={user.email}
            />
            <Input
              placeholder="Password"
              onChange={handleChangeUser}
              name="password"
              type="text"
              value={user.password}
            />
            <Button>SIGN IN</Button>
          </form>
        </ContainerVertical>
        <ContainerVertical>
          <h1>Create Account</h1>
          <p>
            Not signed up ? <span>Create an account</span>
          </p>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Username"
              onChange={handleChangeNewUser}
              name="userName"
              type="text"
              value={newUser.userName}
            />
            <Input
              placeholder="Email"
              onChange={handleChangeNewUser}
              name="email"
              type="text"
              value={newUser.email}
            />
            <Input
              placeholder="Password"
              onChange={handleChangeNewUser}
              name="password"
              type="text"
              value={newUser.password}
            />
            <Button>SIGN UP</Button>
          </form>
        </ContainerVertical>
      </StyledLoginPage>
    </ContainerVerticalFull>
  );
}

export default LoginPage;
