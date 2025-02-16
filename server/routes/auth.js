const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res
      .json({
        message: "User Registered Successfully",
      })
      .status(200);
  } catch (error) {
    next(error);
  }
});

router.post("/login", (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const payload = {
      id: user._id,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.json({ message: "Login Successful",token,}).status(200);
  } catch (error) {
    next(error);
  }
});
