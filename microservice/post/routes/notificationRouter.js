import express from "express";

import notificationController from "../controllers/notificationController.js";

const notificationRouter = express.Router();

notificationRouter.post("/", (req, res) => {});

notificationRouter.get("/", notificationController.getNotifications);

export default notificationRouter;
