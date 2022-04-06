//old version of my app

const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 5000;
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// -------------------------------------

const bcrypt = require("bcrypt");

app.use(express.json());

const users = { name: "Dom" };

//get all users - for admin
app.get("/users", (req, res) => {
  res.json(users);
});

//to register new user
app.post("/users/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

//to login
app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});


// -------------------------------------
app.listen(port, () => {
  console.log("Server is up!");
});
