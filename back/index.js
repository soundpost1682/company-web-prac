require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/user')
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.use('/api/auth', userRoutes)


app.get("/", (req, res) => {
  res.send("hello World");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection success!"))
  .catch((error) => console.log("mongoDB failed!", error));

app.listen(PORT, () => {
  console.log("server is running !");
});
