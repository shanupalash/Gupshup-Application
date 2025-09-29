import path from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import connectToMongoDB from "./src/DB/ConnectToMongoDb.js";

import { app, server } from "./src/Socket/Socket.js";
import AuthRouter from "./src/Routes/Auth.router.js";
import MessageRouter from "./src/Routes/Message.router.js";
import UsersRouter from "./src/Routes/Users.router.js";

dotenv.config();

app.use(cors({ origin: "https://gupshup-application.vercel.app" }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", AuthRouter);
app.use("/api/message", MessageRouter);
app.use("/api/Users", UsersRouter);

// ------------------deployment code------------------------
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "FrontEnd/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "FrontEnd", "dist", "index.html"));
});
// ------------------deployment code------------------------

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log(`backend is running on port ${process.env.PORT}`);
});
