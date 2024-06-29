import express from "express";
import { ReviewController } from "../controllers/review.controller";
import { auth } from "../middleware/auth.mid";

export const reviewRouter = express.Router();

reviewRouter.post("/", auth, ReviewController.CREATE);
reviewRouter.get("/", ReviewController.GET_ALL);
