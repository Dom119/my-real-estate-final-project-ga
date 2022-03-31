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
    userName: "",
    password: "",
  });

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
          <h1>Welcome Back</h1>
          <p>Sign in with your account</p>
          <form onSubmit={handleSignIn}>
            <Input
              placeholder="Username"
              onChange={handleChangeUser}
              name="userName"
              type="text"
              value={user.userName}
            />
            <Input
              placeholder="Password"
              onChange={handleChangeUser}
              name="password"
              type="text"
              value={user.password}
            />
            <Button onClick={handleSignIn}>SIGN IN</Button>
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
              onChange={handleChangeUser}
              name="userName"
              type="text"
              value={user.userName}
            />
            <Input
              placeholder="Password"
              onChange={handleChangeUser}
              name="password"
              type="text"
              value={user.password}
            />
            <Button onClick={handleSignUp}>SIGN UP</Button>
          </form>
        </ContainerVertical>
      </StyledLoginPage>
    </ContainerVerticalFull>
  );
}

export default LoginPage;
