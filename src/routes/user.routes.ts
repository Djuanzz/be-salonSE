import express from "express";
import { UserController } from "../controllers/user.controller";
import { auth } from "../middleware/auth.mid";

export const userRouter = express.Router();

userRouter.post("/signup", UserController.REGISTER);
userRouter.post("/signin", UserController.LOGIN);
userRouter.get("/", UserController.GET_ALL);
userRouter.get("/me", auth, UserController.CURRENT_USER);
userRouter.delete("/signout", auth, UserController.LOGOUT);
