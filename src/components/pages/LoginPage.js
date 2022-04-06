import React, { useEffect, useState } from "react";
import {
  Button,
  ContainerVertical,
  ContainerVerticalFull,
  Input,
} from "../../styles/Global.js";
import { StyledLoginForm, StyledLoginPage } from "../../styles/LoginPage.styled.js";
import { useDispatch } from "react-redux";
import { setUserAsync } from "../../features/user/userSlice.js";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [userLogin, setUserLogin] = useState({
    userName: "",
    password: "",
  });

  //for sign up
  const handleChangeUser = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  //for login
  const handleChangeUserLogin = (event) => {
    const newUser = { ...userLogin };
    newUser[event.target.name] = event.target.value;
    setUserLogin(newUser);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        userName: user.userName,
        password: user.password,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const data = await response.json();

    if (data.message?.length > 0) {
      alert(data.message);
      setUser({ userName: "", password: "" });
    } else {
      setUser({ userName: "", password: "" });
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        userName: userLogin.userName,
        password: userLogin.password,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const data = await response.json();

    if (data.message?.length > 0) {
      alert(data.message);
      setUserLogin({ userName: "", password: "" });
      return;
    }

    dispatch(
      setUserAsync({
        userName: userLogin.userName,
        password: userLogin.password,
      })
    );

    setUserLogin({ userName: "", password: "" });

    navigate("/");
  };

  return (
      <StyledLoginPage>
        <StyledLoginForm>
          <h1>Welcome Back</h1>
          <p>Sign in with your account</p>
          <form onSubmit={handleSignIn}>
            <Input
              placeholder="Username"
              onChange={handleChangeUserLogin}
              name="userName"
              type="text"
              value={userLogin.userName}
            />
            <Input
              placeholder="Password"
              onChange={handleChangeUserLogin}
              name="password"
              type="text"
              value={userLogin.password}
            />
            <Button onClick={handleSignIn}>SIGN IN</Button>
          </form>
        </StyledLoginForm>
        <StyledLoginForm>
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
        </StyledLoginForm>
      </StyledLoginPage>
  );
}

export default LoginPage;
