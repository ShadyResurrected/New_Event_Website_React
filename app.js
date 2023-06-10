import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

export const app = express();

app.use(express.json()); // accepting the json data from the body
app.use(cookieParser()); // to access the stored cookie

app.use(
  cors({
    origin: ["http://localhost:3000","https://new-event-website-react.vercel.app"], // website url that should be allowed to access this api
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/users", userRouter);
