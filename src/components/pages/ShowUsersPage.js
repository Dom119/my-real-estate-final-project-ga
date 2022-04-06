import React, { useEffect, useState } from "react";
import { Button } from "../../styles/Global";
import { StyledAllUsers } from "../../styles/ShowAllUsers.styled";

export default function ShowUsers() {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = async (userName) => {
    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        body: JSON.stringify({ name: userName }),
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      const data = await response.json();
      setUsers(data.data);
      console.log("all users after delete", data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("/api/users", { method: "GET" });
        const data = await response.json();
        setUsers(data.data);
        console.log("all users", data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetching();
  }, []);
  return (
    <StyledAllUsers>
      {users.map((user, index) => (
        <div key={index}>
          <h3>Username: {user.userName}</h3>
          <h3>Password: {user.password}</h3>
          <h3>Favorite</h3>
          {user.fav.map((f, index) => (
            <li key={index}>{f.propertyID}</li>
          ))}
          <Button onClick={() => handleDeleteUser(user.userName)}>
            Delete User
          </Button>
        </div>
      ))}
    </StyledAllUsers>
  );
}
