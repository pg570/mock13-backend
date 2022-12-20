const express = require("express");
const Users = require("./users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});
app.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let user = await Users.findById(id);
    // console.log(user);
    if (!user) {
      res.send("User not found!");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/", async (req, res) => {
  let user = await Users.create(req.body);
  res.send(user);
});

app.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await Users.findOneAndUpdate({ _id: id }, { ...req.body });

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await Users.findByIdAndDelete(id);
    res.send("Deleted Successfully!");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
