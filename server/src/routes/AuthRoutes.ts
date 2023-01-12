import express from "express";
const router = express.Router();

const EMAIL = "email@gmail.com";
const PASSWORD = "password";

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  //authenticate
  if (!(email && password)) {
    res.json("You must provide email and password");
  }

  if (!(email === EMAIL && password === PASSWORD)) {
    res.json("Invalid data");
  }
  //authenticate
  res.json("Login successfully");
});

export default router;
