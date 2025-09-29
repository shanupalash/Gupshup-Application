import express from "express";
import ProtectedRoute from "../Middlewares/ProtectedRoute.middleware.js";
import { GetAllUsers } from "../Controllers/Users.controllers.js";

const router = express.Router();

router.get("/", ProtectedRoute, GetAllUsers);

export default router;
