import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import notificationController from "../controllers/notificationController.js";

const notificationRouter = express.Router();

notificationRouter.post("/", authMiddleware.checkAuthentication, (req, res) => {});

notificationRouter.get(
    "/",
    authMiddleware.checkAuthentication,
    notificationController.getNotifications
);

export default notificationRouter;
