"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
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
exports.default = router;
