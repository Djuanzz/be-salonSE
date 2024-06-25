import express from "express";
import { BranchController } from "../controllers/branch.controller";
import { auth } from "../middleware/auth.mid";
import { adminAuth } from "../middleware/admin.mid";

export const branchRouter = express.Router();

branchRouter.post("/", auth, adminAuth, BranchController.CREATE);
branchRouter.get("/", BranchController.GET_ALL);
