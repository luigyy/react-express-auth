import express from "express";
import verifyTokenMiddleware from "../middleware/checkTokenMiddleware";
const router = express.Router();

router.get("/", verifyTokenMiddleware, (_, res) => {
  return res.json("hello to private route");
});

export default router;
