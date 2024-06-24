import express from "express";
import { BranchSpecController } from "../controllers/branchSpec.controller";

export const branchSpecRouter = express.Router();

branchSpecRouter.post("/", BranchSpecController.CREATE);
branchSpecRouter.get("/", BranchSpecController.GET_ALL);
branchSpecRouter.get(
  "/:branch_id",
  BranchSpecController.GET_ALL_SERVICES_NAME_ON_BRANCH_BY_BRANCH_ID
);
