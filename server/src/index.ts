import express from "express";

const app = express();

//middleware

//routes

//listen
const PORT = 5000;
app.listen(PORT, () => {
  console.clear();
  console.log(`Listening on port ${PORT}`);
});
