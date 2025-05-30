require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection success!"))
  .catch((error) => console.log("mongoDB failed!", error));

app.listen(PORT, () => {
  console.log("server is running !");
});
