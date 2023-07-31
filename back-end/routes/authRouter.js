import express from "express";
const authRouter = express.Router();

import authValidator from "../middlewares/validators/authValidator.js";
import authController from "../controllers/authController.js";

authRouter.post("/register", authController.register)

authRouter.post("/login", authController.login)

authRouter.delete("/logout", authController.logout)

export default authRouter;
