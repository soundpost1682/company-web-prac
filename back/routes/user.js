const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Already existed" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "register done" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
});

module.exports= router;