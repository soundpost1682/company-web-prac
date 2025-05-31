const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const axios = require("axios");
const jwt = require("jsonwebtoken");

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

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status("404").json({ message: "no user found" });
    }
    if (!user.isActive) {
      return res.status(401).json({ message: "Inactivated account" });
    }
    if (user.isLoggedIn) {
      return res.status(401).json({ message: "already logged in" });
    }
    const isValiadPassword = await bcrypt.compare(password, user.password);
    if (!isValiadPassword) {
      user.failedLoginAttempts += 1;
      user.lastLoginAttemp = new Date();
      if (user.failedLoginAttempts >= 5) {
        user.isActive = false;
        await user.save();
        return res.status(404).json({ message: "incorrect PW 5 times" });
      }
      await user.save();
      return res
        .status(401)
        .json({
          message: "PW incorrect.",
          remainingAttempts: 5 - user.failedLoginAttempts,
        });
    }
    user.failedLoginAttempts = 0;
    user.lastLoginAttemp = new Date();
    user.isLoggedIn = true;

    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      const ipAddress = response.data.ip;
      user.ipAddress = ipAddress;
    } catch (error) {
      console.log("taking Ip address", error.message);
    }
    await user.save();

    const token = jwt.sign(
      { userID: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    console.log(token)

    res.cookie('token', token,{
      httpOnly : true,
      secure: 'production',
      sameSite : 'strict',
      maxAge: 24*60*60*1000
    })
    const userWithoutPassword = user.toObject()
    delete userWithoutPassword.password
    res.json({user:userWithoutPassword})

  } catch (error) {
    console.log("server error: ", error.message);
    res.status(500).json({ message: "server error!" });
  }
});

router.post('/logout', async (req, res)=>{
  try{
    const token = req.cookies.token
    if (!token){
      return res.status(400).json({message: 'already sign out'})
    }
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const user = await User.findById(decoded.userID)
      if (user){
        user.isLoggedIn = false
        await user.save()
      }
    }catch(error){
      console.log('token verify error : ', error.message)
    }
    res.clearCookie('token', {
      httpOnly : true,
      secure : false,
      sameSite: 'strict'
    })
    res.json({message : 'logged out done'})
  }catch(error){
    console.log('loggout error : ', error.message)
    res.status(500).json({message : 'server error'})
  }
})
module.exports = router;
