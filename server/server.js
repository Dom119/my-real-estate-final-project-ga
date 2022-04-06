const express = require("express");
const path = require("path");

const port = process.env.PORT || 3001;

// instantiate express and add handlers
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//--
const publicPath = path.join(__dirname, "..", "build");

app.use(express.static(publicPath));

// prod
// app.use(express.static(path.join(__dirname, "./client/build")));

// dev
app.use(require("body-parser").json());

// prod
app.get("/", (req, res) => res.sendFile(path.join(publicPath, "index.html")));

// ******  add sudo database and two models *******
// seed data

const dom = {
  _id: 2,
  userName: "Dom",
  password: "111",
  fav: [],
};

// ** default username and idea object **
const User = {
  _id: null,
  userName: "New User",
  password: "New Password",
  fav: [],
};

let Users = [dom];

let idUserCount = 2;

const createNewUser = (data) => {
  idUserCount++;
  const newUser = Object.assign({}, User);
  newUser._id = idUserCount;
  newUser.fav = [];
  newUser.userName = data.userName;
  newUser.password = data.password;

  Users.push(newUser);
};

const findUserById = (id) => {
  const currentUser = Users.find((ele) => ele._id === parseInt(id, 10));
  return currentUser;
};

const dataWrapper = (response) => {
  const data = {
    data: response,
  };

  return data;
};

app.get("/api/users", (req, res) => {
  res.json(dataWrapper(Users));
});

app.delete("/api/users", (req, res) => {
  const newUsers = Users.filter((user) => user.userName != req.body.name);
  Users = newUsers;
  res.json(dataWrapper(Users));
});

//Sign in
app.post("/api/users/register", (req, res) => {
  //checking if user exist
  let checking = false;
  console.log(req.body);
  Users.forEach((user) => {
    if (user.userName == req.body.userName) checking = true;
  });
  if (checking) {
    res.json({
      message: "Name was already taken. Please choose another name.",
    });
  } else {
    const user = createNewUser(req.body);
    res.json(dataWrapper(user));
  }
});

//login
app.post("/api/users/login", (req, res) => {
  let checking = false;
  let currentUser;

  Users.forEach((user) => {
    if (
      user.userName == req.body.userName &&
      user.password == req.body.password
    ) {
      checking = true;
      currentUser = user;
    }
  });

  if (!checking) {
    res.json({
      message: "Incorrect Username or Password",
    });
  } else {
    res.json(dataWrapper(currentUser));
  }
});

//to update fav list
//need name, new list
app.patch("/api/users/fav", async (req, res) => {
  //100% it is there
  // const currentUser = Users.find((user) => user.userName == req.body.userName);

  // console.log(currentUser);
  // console.log(req.body.fav);

  // currentUser.fav = [...req.body.fav];

  // console.log(currentUser);

  Users.forEach((user) => {
    if (user.userName == req.body.userName) {
      user.fav = [...req.body.fav];
      res.json(dataWrapper(user));
    }
  });
});

app.get("/api/users/:id", (req, res) => {
  const user = findUserById(req.params.id);
  res.json(dataWrapper(user));
});

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
