"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
//routes
app.use("/auth", AuthRoutes_1.default);
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
