import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "../Database/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js"
import messageRouter from "./Router/messageRoutes.js"

const app = express();
dotenv.config({ path: "./config/.env" });

// console.log(process.env.PORT);

app.use(
  cors({
    origin: [process.env.DASHBORAD_URL, process.env.DASHBORAD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message",messageRouter)

dbConnection();
app.use(errorMiddleware)


export default app;
 