import express from "express";
import AuthRoutes from "./routes/AuthRoutes";

const app = express();
//middleware
app.use(express.json());

//routes
app.use("/auth", AuthRoutes);
app.use("/ping", (_, res) => {
  res.json("Pong");
});

app.use((_, res) => {
  res.json("Route not found");
});
//listen
const PORT = 5000;
app.listen(PORT, () => {
  console.clear();
  console.log(`Listening on port ${PORT}`);
});
