import express, { json } from "express";
import { signToken } from "../functions/tokenAuthentication";

const router = express.Router();

//dummy data
const ID = "1";
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

  //send token
  const token = signToken(ID);
  return res.json(token);
  //send token
});

export default router;
