const express = require("express");
const Users = require("./users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

app.post("/", async (req, res) => {
    await Users.create(req.body);
    res.send("Game Starting");
});

module.exports = app;
