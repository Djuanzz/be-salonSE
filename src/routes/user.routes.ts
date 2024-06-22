import express from "express";
import { UserController } from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.post("/signup", UserController.REGISTER);
userRouter.post("/signin", UserController.LOGIN);
