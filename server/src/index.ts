//TODO: add usage to the response
import express from "express";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const app: express.Application = express();

//send formatted JSON
app.set("json spaces", 2);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes middleware
app.use("/auth", AuthRoutes);
app.use("/private", PrivateRoutes);
app.use("/public", PublicRoutes);

//not found handler
app.use((_, res) => res.json("Route not found!"));

const PORT = 5000;
app.listen(PORT, () => {
  console.clear();
  console.log(`Listening on port ${PORT}`);
});
