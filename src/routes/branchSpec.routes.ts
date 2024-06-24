import express from "express";
import { BranchSpecController } from "../controllers/branchSpec.controller";

export const branchSpecRouter = express.Router();

branchSpecRouter.post("/", BranchSpecController.CREATE);
branchSpecRouter.get("/", BranchSpecController.GET_ALL);
