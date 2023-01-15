import express from "express";
const router = express.Router();

router.get("/", (_, res) => {
  res.json("welcome to public route");
});

export default router;
