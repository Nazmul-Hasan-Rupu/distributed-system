import express from "express";
import multer from "multer";

import authMiddleware from "../middlewares/authMiddleware.js";
import postController from "../controllers/postController.js";
import fileUploader from "../middlewares/fileUploader.js";

const postRouter = express.Router();
const upload = multer({ dest: "uploads/" });

postRouter.post(
  "/",
  fileUploader.singleFileUploader("image"),
  postController.createPost
);

postRouter.get("/", postController.getPosts);

export default postRouter;
