import express from "express";
import { getAuth } from "../controllers/authentication/getAuth.js";
const authRouter =express.Router();

authRouter.get("/auth",getAuth);

export default authRouter;