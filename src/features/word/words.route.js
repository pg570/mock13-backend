const express = require("express");

const app = express.Router();

app.get("/", async (req, res) => {
  var words = ["Rock", "Paper", "Scissors"];
  var word = words[Math.floor(Math.random() * words.length)];
  res.send(word)
});

module.exports = app;
