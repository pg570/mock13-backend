const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const cors = require("cors");

dotenv.config();

const users = require("./features/users/users.route");
const words = require("./features/word/words.route");
mongoose.set("strictQuery", true);
const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/users", users);
app.use("/words", words);

app.use("/", function (req, res) {
  res.send("Home Page");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started on http://localhost:${PORT}`);
});
