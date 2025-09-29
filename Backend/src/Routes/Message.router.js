import express from "express";
import ProtectedRoute from "../Middlewares/ProtectedRoute.middleware.js";
import { getmessage, sendmessage } from "../Controllers/Message.controllers.js";
const router = express.Router();

router.post("/sendmessage/:id", ProtectedRoute, sendmessage);
router.get("/recivemessage/:id", ProtectedRoute, getmessage);

export default router;
