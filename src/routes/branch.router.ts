import express from "express";
import { BranchController } from "../controllers/branch.controller";

export const branchRouter = express.Router();

branchRouter.post("/", BranchController.CREATE);
branchRouter.get("/", BranchController.GET_ALL);
