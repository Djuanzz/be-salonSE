import express from "express";
import { ReviewController } from "../controllers/review.controller";

export const reviewRouter = express.Router();

reviewRouter.post("/", ReviewController.CREATE);
reviewRouter.get("/", ReviewController.GET_ALL);
