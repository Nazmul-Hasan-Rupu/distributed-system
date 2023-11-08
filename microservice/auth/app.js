import express from "express";
import config from "./config/config.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import notFoundHandler from "./middlewares/common/notFoundHandler.js";
import defaultErrorHandler from "./middlewares/common/defaultErrorHandler.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.cookie.secret));

mongoose.set("strictQuery", false);
console.log("mongouri: ", config.mongodb.uri);
mongoose.connect(config.mongodb.uri).then(() => {
  console.log("Successfully connected to MongoDB...");
});

app.use("/auth", authRouter);

app.use(notFoundHandler);
app.use(defaultErrorHandler);

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
});
