import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

export const app = express();

app.use(express.json()); // accepting the json data from the body
app.use(cookieParser()); // to access the stored cookie

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/users", userRouter);
