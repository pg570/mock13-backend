const express = require("express");

const app = express.Router();

app.get("/", async (req, res) => {
  var words = [
    "Rock",
    "Paper",
    "Scissors",
    "Absence",
    "Academic",
    "Boundary",
    "Borrow",
    "Characteristic",
    "Dialogue",
    "Embrace",
    "Foreign",
    "Generate",
    "Highlight",
    "Incorporate",
    "Justify",
    "Obligation",
    "Portray",
    "Qualify",
    "Refused",
    "Tactic",
    "Undergo",
    "Violation",
  ];
  var word = words[Math.floor(Math.random() * words.length)];
  res.send(word);
});

module.exports = app;
