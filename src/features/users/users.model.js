const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  difficulty: { type: String, required: true },
});

const users = mongoose.model("user", userSchema);

module.exports = users;
