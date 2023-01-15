import express from "express";
import { verifyToken } from "../functions/tokenAuthentication";

const verifyTokenMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.headers);
  if (!req.headers.authorization) {
    return res.status(401).json("Not authorized");
  }

  //get token from request
  const token = (req.headers.authorization as string).split(" ")[1];

  //verify token
  try {
    verifyToken(token);
  } catch (err) {
    return res.status(401).json("Invalid token");
  }
  return next();
};

export default verifyTokenMiddleware;
